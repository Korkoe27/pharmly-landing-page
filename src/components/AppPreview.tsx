'use client';
import { CheckCircle2, ChevronRight } from 'lucide-react';
const AppPreview = () => {
  return (
<section className="py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400 rounded-full"></div>
        <div className="absolute bottom-12 -left-24 w-64 h-64 bg-yellow-400 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built for Ghana. Built for Ease.</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your prescription. Get matched to a pharmacy near you. Track the rider. Refill meds with one tap.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Simple Prescription Upload</h3>
                    <p className="mt-2 text-gray-600">
                      Take a photo of your prescription or upload an existing image. Our system will process it securely.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Find Available Medications</h3>
                    <p className="mt-2 text-gray-600">
                      Our app searches nearby pharmacies to find your medications, saving you time and effort.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Real-time Delivery Tracking</h3>
                    <p className="mt-2 text-gray-600">
                      Follow your medication's journey from the pharmacy to your doorstep with our live tracking feature.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Medication Reminders</h3>
                    <p className="mt-2 text-gray-600">
                      Never miss a dose with personalized medication reminders. Refill with just one tap when you're running low.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center md:justify-start">
              <a href="#" className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors">
                Learn More Features
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[40px] p-2 w-[280px] shadow-xl">
                <div className="bg-white rounded-[32px] overflow-hidden h-[520px] w-full relative">
                  {/* App UI Mockup */}
                  <div className="absolute inset-0">
                    {/* App Header */}
                    <div className="bg-emerald-600 text-white p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-xs opacity-80">Hello, Kofi</div>
                          <div className="font-medium">Find Medications</div>
                        </div>
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="p-4 bg-white shadow-sm">
                      <div className="bg-gray-100 rounded-full p-2 flex items-center">
                        <div className="w-4 h-4 bg-gray-400 rounded-full mr-2"></div>
                        <div className="text-sm text-gray-500">Search medications...</div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <div className="text-sm font-medium mb-3">Recent Orders</div>
                      
                      {/* Order Card */}
                      <div className="bg-emerald-50 rounded-lg p-3 mb-3 border border-emerald-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-emerald-800">Order #GH2583</span>
                          <span className="text-xs bg-emerald-600 text-white px-2 py-1 rounded-full">Arriving</span>
                        </div>
                        <div className="text-sm mb-2">Amoxicillin, Paracetamol</div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-500">Today, 2:30 PM</span>
                          <span className="font-medium">GH₵ 67.00</span>
                        </div>
                      </div>
                      
                      {/* Order Card */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-3 border border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-gray-800">Order #GH2489</span>
                          <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded-full">Completed</span>
                        </div>
                        <div className="text-sm mb-2">Metformin, Vitamin C</div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-500">Mar 15, 10:15 AM</span>
                          <span className="font-medium">GH₵ 42.50</span>
                        </div>
                      </div>
                      
                      <div className="text-sm font-medium mt-4 mb-3">Nearby Pharmacies</div>
                      
                      {/* Pharmacy Card */}
                      <div className="bg-white rounded-lg p-3 mb-3 border border-gray-100 shadow-sm">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg mr-3 flex items-center justify-center text-blue-600 font-bold text-xs">AP</div>
                          <div>
                            <div className="text-sm font-medium">Accra Pharmacy</div>
                            <div className="text-xs text-gray-500">1.2 km away • Open until 9 PM</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Pharmacy Card */}
                      <div className="bg-white rounded-lg p-3 mb-3 border border-gray-100 shadow-sm">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-green-100 rounded-lg mr-3 flex items-center justify-center text-green-600 font-bold text-xs">GP</div>
                          <div>
                            <div className="text-sm font-medium">Ghana Pharma</div>
                            <div className="text-xs text-gray-500">2.5 km away • Open until 8 PM</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 flex justify-around">
                      <div className="p-2 rounded-full bg-emerald-50 text-emerald-600">
                        <div className="w-5 h-5 bg-emerald-600 rounded-full"></div>
                      </div>
                      <div className="p-2">
                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="p-2">
                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="p-2">
                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppPreview
