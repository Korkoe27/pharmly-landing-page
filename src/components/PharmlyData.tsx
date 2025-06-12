import { LineChart, BarChart, PieChart, TrendingUp } from 'lucide-react';

const PharmlyData = () => {
  return (
<section id="data-mission" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Every Order Counts — For More Than You Think</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Pharmly helps Ghana Health Service, NHIA, and others by tracking anonymized data.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <blockquote className="bg-emerald-50 border-l-4 border-emerald-500 p-6 md:p-8 rounded-r-lg italic text-gray-700 mb-8">
              "Every time you order through Pharmly, you're helping prevent the next medicine stock-out."
            </blockquote>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <LineChart className="h-5 w-5 text-emerald-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Medication Usage Patterns</h3>
                  <p className="mt-1 text-gray-600">
                    Identify seasonal trends and anticipate needs for critical medications across different regions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <BarChart className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Supply Chain Optimization</h3>
                  <p className="mt-1 text-gray-600">
                    Help distributors optimize inventory levels and prevent shortages before they happen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <PieChart className="h-5 w-5 text-yellow-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Health Planning</h3>
                  <p className="mt-1 text-gray-600">
                    Support NHIA and Ghana Health Service with anonymized data for better health resource allocation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Disease Surveillance</h3>
                  <p className="mt-1 text-gray-600">
                    Help identify early warning signs of disease outbreaks through medication purchasing patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-emerald-600 text-white">
              <h3 className="text-xl font-semibold">Data Impact Dashboard</h3>
              <p className="text-sm opacity-90">Anonymized and aggregated for public health</p>
            </div>
            
            <div className="p-6">
              {/* Graph Representation */}
              <div className="h-48 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-end p-4 space-x-2 border border-gray-100">
                <div className="w-1/12 bg-emerald-500 rounded-t-sm h-1/4"></div>
                <div className="w-1/12 bg-emerald-500 rounded-t-sm h-2/6"></div>
                <div className="w-1/12 bg-emerald-500 rounded-t-sm h-1/3"></div>
                <div className="w-1/12 bg-emerald-500 rounded-t-sm h-2/4"></div>
                <div className="w-1/12 bg-emerald-500 rounded-t-sm h-3/5"></div>
                <div className="w-1/12 bg-emerald-500 rounded-t-sm h-2/3"></div>
                <div className="w-1/12 bg-emerald-500 rounded-t-sm h-4/5"></div>
                <div className="w-1/12 bg-emerald-500 rounded-t-sm h-2/3"></div>
                <div className="w-1/12 bg-emerald-500 rounded-t-sm h-3/4"></div>
                <div className="w-1/12 bg-emerald-500 rounded-t-sm h-5/6"></div>
                <div className="w-1/12 bg-emerald-500 rounded-t-sm h-full"></div>
                <div className="w-1/12 bg-emerald-500 rounded-t-sm h-4/5"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Medications Delivered</div>
                  <div className="text-2xl font-semibold text-gray-900">254,380</div>
                  <div className="flex items-center text-xs text-emerald-600">
                    <TrendingUp className="h-3 w-3 mr-1" /> +12% from last month
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Regions Covered</div>
                  <div className="text-2xl font-semibold text-gray-900">14 of 16</div>
                  <div className="flex items-center text-xs text-emerald-600">
                    <TrendingUp className="h-3 w-3 mr-1" /> +2 from last quarter
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div className="text-sm text-gray-500 mb-1">Health Impact Assessment</div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-900">78%</span>
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  Pharmly's data has helped improve medication availability in partner regions by 78% compared to baseline.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PharmlyData
