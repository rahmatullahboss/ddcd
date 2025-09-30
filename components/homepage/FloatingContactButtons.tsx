"use client"

import { useEffect } from 'react';

export default function FloatingContactButtons() {
  useEffect(() => {
    // Avoid duplicating the buttons if this component is ever mounted more than once.
    if (document.querySelector('.floating-contact-buttons')) {
      return;
    }

    const styleElement = document.createElement('style');
    styleElement.id = 'floating-contact-buttons-style';
    styleElement.textContent = `
        .floating-contact-buttons {
            position: fixed;
            right: 1.25rem;
            bottom: 1.25rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            z-index: 10000;
        }

        .floating-contact-buttons a {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            border-radius: 9999px;
            padding: 0.55rem 1rem;
            font-weight: 600;
            color: #ffffff;
            text-decoration: none;
            box-shadow: 0 12px 28px rgba(15, 23, 42, 0.18);
            font-size: 0.85rem;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .floating-contact-buttons a:focus-visible {
            outline: 2px solid rgba(45, 212, 191, 0.6);
            outline-offset: 3px;
        }

        .floating-contact-buttons a:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 32px rgba(15, 23, 42, 0.22);
        }

        .floating-contact-buttons .floating-call {
            background: linear-gradient(135deg, #0f766e, #14b8a6);
        }

        .floating-contact-buttons .floating-message {
            background: linear-gradient(135deg, #2563eb, #3b82f6);
        }

        .floating-contact-buttons i {
            font-size: 1rem;
        }

        @media (max-width: 480px) {
            .floating-contact-buttons {
                right: 0.85rem;
                bottom: 0.85rem;
                gap: 0.5rem;
            }
            .floating-contact-buttons a {
                padding: 0.45rem 0.85rem;
                font-size: 0.78rem;
                box-shadow: 0 10px 22px rgba(15, 23, 42, 0.18);
            }
            .floating-contact-buttons i {
                font-size: 0.9rem;
            }
        }

        @media (min-width: 768px) {
            .floating-contact-buttons a {
                padding: 0.7rem 1.25rem;
                font-size: 1rem;
            }
            .floating-contact-buttons i {
                font-size: 1.1rem;
            }
        }
    `;

    document.head.appendChild(styleElement);

    const floatingWrapper = document.createElement('div');
    floatingWrapper.className = 'floating-contact-buttons';

    floatingWrapper.innerHTML = `
        <a href="tel:01639590392" class="floating-call" aria-label="Call Now">
            <i class="fa-solid fa-phone"></i>
            <span>Call Now</span>
        </a>
        <a href="https://www.m.me/profile.php?id=61579772421831" class="floating-message" aria-label="Message Us" target="_blank" rel="noopener">
            <i class="fa-brands fa-facebook-messenger"></i>
            <span>Message Us</span>
        </a>
    `;

    document.body.appendChild(floatingWrapper);

    return () => {
      // Cleanup the injected elements when the component unmounts
      const existingStyle = document.getElementById('floating-contact-buttons-style');
      if (existingStyle) {
        existingStyle.remove();
      }
      const existingWrapper = document.querySelector('.floating-contact-buttons');
      if (existingWrapper) {
        existingWrapper.remove();
      }
    };
  }, []);

  return null; // This component does not render any JSX directly
}