"use client"

import { useState, useEffect } from 'react';

export default function OrderModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [packageName, setPackageName] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setFormMessage('');
  };

  useEffect(() => {
    const openModal = (event: Event) => {
      const customEvent = event as CustomEvent;
      setPackageName(customEvent.detail.packageName);
      setIsOpen(true);
    };

    // The order buttons are in a different component, so we listen for a custom event.
    // This is a simple way to communicate between client components without complex state management.
    document.addEventListener('openOrderModal', openModal);

    return () => {
      document.removeEventListener('openOrderModal', openModal);
    };
  }, []);

  useEffect(() => {
    // This effect handles the 'hidden' class on the modal div
    // It is triggered by the 'isOpen' state
    const modalElement = document.getElementById('order-modal');
    if (modalElement) {
      if (isOpen) {
        modalElement.classList.remove('hidden');
      } else {
        modalElement.classList.add('hidden');
      }
    }
  }, [isOpen]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set('package', packageName); // Make sure package name is in the form data

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwYe6g5vR8bkpk-I9TZ2_ny18LK943kKjBTd0RiSuL-roumoF4U-pj2_x2fGazBxxhB/exec';

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: formData });
      const data = await response.json();
      if (data.result === 'success') {
        setFormMessage('আপনার অর্ডার সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করবো।');
        form.reset();
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        throw new Error('Server response error: ' + data.message);
      }
    } catch (error: any) {
      console.error('Error!', error.message);
      setFormMessage('একটি সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div id="order-modal" className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50" onClick={handleClose}>
      <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800 w-11/12 md:w-1/2 lg:w-1/3" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-center">প্যাকেজ অর্ডার করুন</h3>
          <button id="close-modal-btn" className="text-gray-600 hover:text-gray-900 text-2xl" onClick={handleClose}>&times;</button>
        </div>
        <form id="order-form" onSubmit={handleSubmit}>
          <input type="hidden" id="package-name" name="package" value={packageName} />
          <div className="mb-4">
            <label htmlFor="order-name" className="block text-sm font-bold mb-2">আপনার নাম</label>
            <input type="text" id="order-name" name="name" placeholder="আপনার সম্পূর্ণ নাম লিখুন" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="order-hospital" className="block text-sm font-bold mb-2">আপনার ব্যবসা/প্রতিষ্ঠানের নাম</label>
            <input type="text" id="order-hospital" name="hospital" placeholder="আপনার প্রতিষ্ঠানের নাম" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="order-phone" className="block text-sm font-bold mb-2">ফোন নম্বর</label>
            <input type="tel" id="order-phone" name="phone" placeholder="আপনার ফোন নম্বর" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <button type="submit" className="w-full bg-teal-500 text-white font-bold py-3 px-4 rounded-md hover:bg-teal-600" disabled={isSubmitting}>
            {isSubmitting ? 'পাঠানো হচ্ছে...' : 'অর্ডার কনফার্ম করুন'}
          </button>
          <p className={`text-center mt-4 ${formMessage.includes('সফলভাবে') ? 'text-green-600' : 'text-red-600'}`}>{formMessage}</p>
        </form>
      </div>
    </div>
  );
}