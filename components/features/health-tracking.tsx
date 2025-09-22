'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Mock data for health metrics over time
const healthData = [
  { date: '2023-09-01', bloodPressure: 120, heartRate: 72, sleep: 7.5 },
  { date: '2023-09-08', bloodPressure: 118, heartRate: 70, sleep: 8.0 },
  { date: '2023-09-15', bloodPressure: 122, heartRate: 75, sleep: 6.5 },
  { date: '2023-09-22', bloodPressure: 119, heartRate: 73, sleep: 7.0 },
  { date: '2023-09-29', bloodPressure: 121, heartRate: 71, sleep: 7.5 },
  { date: '2023-10-06', bloodPressure: 117, heartRate: 69, sleep: 8.0 },
  { date: '2023-10-13', bloodPressure: 120, heartRate: 72, sleep: 7.0 },
]

export function HealthTracking() {
  const [timeRange, setTimeRange] = useState('7d')

  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range)
    // In a real app, you would fetch new data based on the time range
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Health Tracking</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => handleTimeRangeChange('7d')}
            className={`px-3 py-1 text-sm rounded ${timeRange === '7d' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            7D
          </button>
          <button
            onClick={() => handleTimeRangeChange('30d')}
            className={`px-3 py-1 text-sm rounded ${timeRange === '30d' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            30D
          </button>
          <button
            onClick={() => handleTimeRangeChange('90d')}
            className={`px-3 py-1 text-sm rounded ${timeRange === '90d' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            90D
          </button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={healthData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="bloodPressure"
              stroke="#0d9488"
              activeDot={{ r: 8 }}
              name="Blood Pressure (mmHg)"
            />
            <Line
              type="monotone"
              dataKey="heartRate"
              stroke="#2563eb"
              name="Heart Rate (bpm)"
            />
            <Line
              type="monotone"
              dataKey="sleep"
              stroke="#7c3aed"
              name="Sleep (hours)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="p-2 bg-teal-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Blood Pressure</p>
              <p className="text-lg font-bold text-gray-900">120/80 mmHg</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Heart Rate</p>
              <p className="text-lg font-bold text-gray-900">72 bpm</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Sleep</p>
              <p className="text-lg font-bold text-gray-900">7.5 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}