'use client'

export function HealthMetrics() {
  // Mock data for health metrics
  const metrics = [
    {
      name: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      status: 'normal',
      target: 'Below 130/80'
    },
    {
      name: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      status: 'normal',
      target: '60-100 bpm'
    },
    {
      name: 'Cholesterol',
      value: '180',
      unit: 'mg/dL',
      status: 'normal',
      target: 'Below 200'
    },
    {
      name: 'Blood Sugar',
      value: '95',
      unit: 'mg/dL',
      status: 'normal',
      target: '70-100 mg/dL'
    },
    {
      name: 'Sleep',
      value: '7.5',
      unit: 'hours',
      status: 'normal',
      target: '7-9 hours'
    },
    {
      name: 'Steps',
      value: '8,500',
      unit: 'steps',
      status: 'normal',
      target: '10,000 steps'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Health Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-900">{metric.name}</h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                ${metric.status === 'normal' ? 'bg-green-100 text-green-800' : 
                  metric.status === 'warning' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'}`}>
                {metric.status}
              </span>
            </div>
            
            <div className="mt-2">
              <p className="text-2xl font-bold text-gray-900">
                {metric.value} <span className="text-lg font-normal text-gray-500">{metric.unit}</span>
              </p>
            </div>
            
            <div className="mt-3">
              <p className="text-sm text-gray-500">Target: {metric.target}</p>
            </div>
            
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  metric.status === 'normal' ? 'bg-green-600' : 
                  metric.status === 'warning' ? 'bg-yellow-500' : 
                  'bg-red-600'
                }`} 
                style={{ 
                  width: metric.name === 'Steps' ? '85%' : 
                         metric.name === 'Sleep' ? '83%' : 
                         metric.name === 'Blood Sugar' ? '95%' : 
                         metric.name === 'Cholesterol' ? '90%' : 
                         '100%' 
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <button className="text-teal-600 hover:text-teal-800 font-medium">
          View Detailed Health Report →
        </button>
      </div>
    </div>
  )
}