'use client'

import { useState } from 'react'

// Mock data for medical records
const medicalRecords = [
  {
    id: '1',
    title: 'Annual Physical Examination',
    date: '2023-09-15',
    type: 'Checkup',
    doctor: 'Dr. Sarah Johnson',
    summary: 'Complete physical examination with normal results. Blood pressure: 120/80, Heart rate: 72 bpm.',
    files: 3
  },
  {
    id: '2',
    title: 'Blood Test Results',
    date: '2023-09-10',
    type: 'Lab Results',
    doctor: 'Dr. Michael Chen',
    summary: 'Comprehensive metabolic panel and lipid panel. Cholesterol levels within target range.',
    files: 2
  },
  {
    id: '3',
    title: 'Cardiac Stress Test',
    date: '2023-08-20',
    type: 'Test Results',
    doctor: 'Dr. Michael Chen',
    summary: 'Normal cardiac function during stress test. No signs of ischemia or arrhythmia.',
    files: 4
  },
  {
    id: '4',
    title: 'Vaccination Record',
    date: '2023-07-05',
    type: 'Immunization',
    doctor: 'Dr. Sarah Johnson',
    summary: 'Influenza vaccine administered. Next dose recommended in 6 months.',
    files: 1
  }
]

export default function MedicalRecordsPage() {
  const [selectedRecord, setSelectedRecord] = useState<string | null>(null)

  const handleViewRecord = (id: string) => {
    setSelectedRecord(id)
    // In a real app, this would open a modal or navigate to a detail page
    console.log('View record:', id)
  }

  const handleDownloadRecord = (id: string) => {
    // In a real app, this would download the record
    console.log('Download record:', id)
  }

  const handleRequestRecords = () => {
    // In a real app, this would open a request form
    console.log('Request medical records')
  }

  const handleShareRecords = () => {
    // In a real app, this would open a sharing form
    console.log('Share medical records')
  }

  const handleUploadFiles = () => {
    // In a real app, this would open an upload dialog
    console.log('Upload files')
  }

  return (
    <div className="py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Medical Records</h1>
        <p className="mt-2 text-gray-600">Access your medical records and test results.</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Record
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Files
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {medicalRecords.map((record) => (
                <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{record.title}</div>
                    <div className="text-sm text-gray-500">{record.summary}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.doctor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.files} files
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleViewRecord(record.id)}
                      className="text-teal-600 hover:text-teal-900 mr-3"
                    >
                      View
                    </button>
                    <button 
                      onClick={() => handleDownloadRecord(record.id)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Request Medical Records</h2>
          <p className="text-gray-600 mb-4">Request access to specific medical records or test results.</p>
          <button 
            onClick={handleRequestRecords}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Submit Request
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Share with Provider</h2>
          <p className="text-gray-600 mb-4">Securely share your medical records with another healthcare provider.</p>
          <button 
            onClick={handleShareRecords}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Share Records
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upload Documents</h2>
          <p className="text-gray-600 mb-4">Upload medical documents or test results from external providers.</p>
          <button 
            onClick={handleUploadFiles}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Upload Files
          </button>
        </div>
      </div>
    </div>
  )
}