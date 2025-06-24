
import { LineChart, BarChart, PieChart, TrendingUp } from 'lucide-react';


const DataPurpose = () => {
  return (
 <section id="our-impact" className="py-16 lg:py-36 bg-gradient-to-b from-[#F7F5F3] to-white">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Every Order Counts — For More Than You Think</h2>
          <p className="mt-4 text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            Pharmly helps Ghana Health Service, NHIA, and others by tracking anonymized data.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <blockquote className="bg-[#F7F5F3] border-l-4 border-[#A83F3C] p-6 md:p-8 rounded-r-2xl italic text-[#2D2D2D] mb-8 shadow-lg">
              <p className="text-lg font-medium">"Every time you order through Pharmly, you're helping prevent the next medicine stock-out."</p>
            </blockquote>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-[#F7F5F3] flex items-center justify-center border-2 border-[#A83F3C]">
                    <LineChart className="h-6 w-6 text-[#A83F3C]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#2D2D2D]">Medication Usage Patterns</h3>
                  <p className="mt-1 text-[#6B6B6B] font-medium">
                    Identify seasonal trends and anticipate needs for critical medications across different regions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-[#F7F5F3] flex items-center justify-center border-2 border-[#7B9E87]">
                    <BarChart className="h-6 w-6 text-[#7B9E87]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#2D2D2D]">Supply Chain Optimization</h3>
                  <p className="mt-1 text-[#6B6B6B] font-medium">
                    Help distributors optimize inventory levels and prevent shortages before they happen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-[#F7F5F3] flex items-center justify-center border-2 border-[#D4A574]">
                    <PieChart className="h-6 w-6 text-[#D4A574]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#2D2D2D]">Health Planning</h3>
                  <p className="mt-1 text-[#6B6B6B] font-medium">
                    Support NHIA and Ghana Health Service with anonymized data for better health resource allocation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-[#F7F5F3] flex items-center justify-center border-2 border-[#E6A532]">
                    <TrendingUp className="h-6 w-6 text-[#E6A532]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#2D2D2D]">Disease Surveillance</h3>
                  <p className="mt-1 text-[#6B6B6B] font-medium">
                    Help identify early warning signs of disease outbreaks through medication purchasing patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#E8E2E0]">
            <div className="p-6 bg-[#A83F3C] text-white">
              <h3 className="text-xl font-semibold">Data Impact Dashboard</h3>
              <p className="text-sm opacity-90">Anonymized and aggregated for public health</p>
            </div>
            
            <div className="p-6">
              {/* Graph Representation */}
              <div className="h-48 bg-[#F7F5F3] rounded-xl overflow-hidden mb-4 flex items-end p-4 space-x-2 border-2 border-[#E8E2E0]">
                <div className="w-1/12 bg-[#A83F3C] rounded-t-lg h-1/4"></div>
                <div className="w-1/12 bg-[#A83F3C] rounded-t-lg h-2/6"></div>
                <div className="w-1/12 bg-[#A83F3C] rounded-t-lg h-1/3"></div>
                <div className="w-1/12 bg-[#A83F3C] rounded-t-lg h-2/4"></div>
                <div className="w-1/12 bg-[#A83F3C] rounded-t-lg h-3/5"></div>
                <div className="w-1/12 bg-[#A83F3C] rounded-t-lg h-2/3"></div>
                <div className="w-1/12 bg-[#A83F3C] rounded-t-lg h-4/5"></div>
                <div className="w-1/12 bg-[#A83F3C] rounded-t-lg h-2/3"></div>
                <div className="w-1/12 bg-[#A83F3C] rounded-t-lg h-3/4"></div>
                <div className="w-1/12 bg-[#A83F3C] rounded-t-lg h-5/6"></div>
                <div className="w-1/12 bg-[#A83F3C] rounded-t-lg h-full"></div>
                <div className="w-1/12 bg-[#A83F3C] rounded-t-lg h-4/5"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-[#F7F5F3] rounded-xl p-4 border-2 border-[#E8E2E0]">
                  <div className="text-sm text-[#6B6B6B] font-medium mb-1">Medications Delivered</div>
                  <div className="text-2xl font-bold text-[#2D2D2D]">254,380</div>
                  <div className="flex items-center text-xs text-[#6B8E5A] font-medium">
                    <TrendingUp className="h-3 w-3 mr-1" /> +12% from last month
                  </div>
                </div>
                <div className="bg-[#F7F5F3] rounded-xl p-4 border-2 border-[#E8E2E0]">
                  <div className="text-sm text-[#6B6B6B] font-medium mb-1">Regions Covered</div>
                  <div className="text-2xl font-bold text-[#2D2D2D]">14 of 16</div>
                  <div className="flex items-center text-xs text-[#6B8E5A] font-medium">
                    <TrendingUp className="h-3 w-3 mr-1" /> +2 from last quarter
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F7F5F3] rounded-xl p-4 border-2 border-[#E8E2E0]">
                <div className="text-sm text-[#6B6B6B] font-medium mb-1">Health Impact Assessment</div>
                <div className="flex items-center">
                  <div className="w-full bg-[#E8E2E0] rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#6B8E5A] to-[#A83F3C] h-3 rounded-full shadow-sm" style={{ width: '78%' }}></div>
                  </div>
                  <span className="ml-2 text-sm font-bold text-[#2D2D2D]">78%</span>
                </div>
                <div className="mt-2 text-xs text-[#6B6B6B] font-medium">
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

export default DataPurpose
