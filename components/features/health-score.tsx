'use client'

import { useState, useEffect } from 'react'

export function HealthScore() {
  const [score, setScore] = useState(85)
  const [previousScore, setPreviousScore] = useState(82)

  // Mock data for health factors
  const healthFactors = [
    { name: 'Physical Activity', value: 90, color: 'bg-green-500' },
    { name: 'Nutrition', value: 75, color: 'bg-yellow-500' },
    { name: 'Sleep Quality', value: 85, color: 'bg-green-500' },
    { name: 'Stress Management', value: 70, color: 'bg-yellow-500' },
    { name: 'Medical Adherence', value: 95, color: 'bg-green-500' },
    { name: 'Preventive Care', value: 80, color: 'bg-green-500' },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent'
    if (score >= 60) return 'Good'
    return 'Needs Improvement'
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Health Score</h2>
      
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={`${score * 2.83} 283`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
              className={getScoreColor(score)}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-3xl font-bold ${getScoreColor(score)}`}>{score}</span>
            <span className="text-sm text-gray-500">/ 100</span>
          </div>
        </div>
        <p className={`mt-2 text-lg font-medium ${getScoreColor(score)}`}>
          {getScoreLabel(score)}
        </p>
        {score > previousScore && (
          <p className="mt-1 text-sm text-green-600">
            ↑ {score - previousScore} points since last month
          </p>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Health Factors</h3>
        {healthFactors.map((factor, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">{factor.name}</span>
              <span className="text-sm font-medium text-gray-900">{factor.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${factor.color}`}
                style={{ width: `${factor.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="font-medium text-gray-900 mb-3">Recommendations</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-600">Increase physical activity to 150 minutes per week</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-600">Improve sleep consistency by going to bed at the same time</span>
          </li>
        </ul>
      </div>
    </div>
  )
}