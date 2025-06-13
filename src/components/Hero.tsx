'use client';

import { ArrowRight, Download, Store, HelpCircle, Bike, Play } from 'lucide-react';

const Hero = () => {
    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
<div className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 pt-20 pb-32 md:pt-28 md:pb-40 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)'
        }}></div>
      </div>
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-emerald-300 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md bg-opacity-20 rounded-full text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Now serving 14 regions across Ghana
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Fast. Trusted. 
              <span className="block text-yellow-300">Delivered.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white text-opacity-90 leading-relaxed mb-8 max-w-2xl">
              Order real medications from licensed pharmacies in Ghana, delivered right to your doorstep in under 60 minutes.
            </p>
            
            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="group relative px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                <Download className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Pharmly App
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </button>
              
              <button className="group relative px-8 py-4 bg-yellow-500 text-emerald-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                <Store className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Partner Your Pharmacy
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </div>
            
            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="group px-6 py-3 bg-white/10 backdrop-blur-md text-white font-medium rounded-lg hover:bg-opacity-20 transition-all duration-300  border border-white border-opacity-20 flex items-center justify-center"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                How It Works
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                <Bike className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Become a Rider
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white text-opacity-80">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/10 backdrop-blur-md bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm">Licensed Pharmacies</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/10 backdrop-blur-md bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm">Secure Payments</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/10 backdrop-blur-md bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm">Real-time Tracking</span>
              </div>
            </div>
          </div>
          
          {/* App Mockup Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Phone Mockup */}
              <div className="relative z-10">
                <div className="bg-gray-900 rounded-[2.5rem] p-2 w-80 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden h-[600px] w-full relative">
                    {/* Status Bar */}
                    <div className="bg-emerald-600 text-white px-6 py-4 flex justify-between items-center">
                      <div>
                        <div className="text-xs opacity-80">Hello, Kofi</div>
                        <div className="font-semibold text-lg">Find Medications</div>
                      </div>
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Search Section */}
                    <div className="p-6 bg-white shadow-sm">
                      <div className="bg-gray-100 rounded-2xl p-4 flex items-center">
                        <div className="w-5 h-5 bg-gray-400 rounded-full mr-3"></div>
                        <div className="text-gray-500">Search medications...</div>
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="p-6">
                      <div className="text-lg font-semibold mb-4 text-gray-900">Recent Orders</div>
                      
                      {/* Active Order Card */}
                      <div className="bg-emerald-50 rounded-2xl p-4 mb-4 border-2 border-emerald-100">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-semibold text-emerald-800">Order #GH2583</span>
                          <span className="text-xs bg-emerald-600 text-white px-3 py-1 rounded-full font-medium">Arriving Soon</span>
                        </div>
                        <div className="text-base mb-3 text-gray-800">Amoxicillin, Paracetamol</div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Today, 2:30 PM</span>
                          <span className="text-lg font-bold text-emerald-700">GH₵ 67.00</span>
                        </div>
                      </div>
                      
                      {/* Completed Order Card */}
                      <div className="bg-gray-50 rounded-2xl p-4 mb-4 border border-gray-100">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-semibold text-gray-800">Order #GH2489</span>
                          <span className="text-xs bg-gray-600 text-white px-3 py-1 rounded-full font-medium">Completed</span>
                        </div>
                        <div className="text-base mb-3 text-gray-700">Metformin, Vitamin C</div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Mar 15, 10:15 AM</span>
                          <span className="text-base font-semibold text-gray-700">GH₵ 42.50</span>
                        </div>
                      </div>
                      
                      <div className="text-lg font-semibold mt-6 mb-4 text-gray-900">Nearby Pharmacies</div>
                      
                      {/* Pharmacy Cards */}
                      <div className="space-y-3">
                        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl mr-3 flex items-center justify-center text-blue-600 font-bold">AP</div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900">Accra Pharmacy</div>
                              <div className="text-sm text-gray-500">1.2 km away • Open until 9 PM</div>
                            </div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-green-100 rounded-xl mr-3 flex items-center justify-center text-green-600 font-bold">GP</div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900">Ghana Pharma</div>
                              <div className="text-sm text-gray-500">2.5 km away • Open until 8 PM</div>
                            </div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-around">
                      <div className="p-3 rounded-2xl bg-emerald-50">
                        <div className="w-6 h-6 bg-emerald-600 rounded-lg"></div>
                      </div>
                      <div className="p-3">
                        <div className="w-6 h-6 bg-gray-300 rounded-lg"></div>
                      </div>
                      <div className="p-3">
                        <div className="w-6 h-6 bg-gray-300 rounded-lg"></div>
                      </div>
                      <div className="p-3">
                        <div className="w-6 h-6 bg-gray-300 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Rider Card */}
              <div className="absolute -bottom-6 -left-16 bg-white rounded-2xl shadow-xl p-4 w-40 transform -rotate-6 z-20 border border-gray-100">
                <div className="text-sm font-semibold mb-2 text-gray-900">Your Rider</div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mr-3 flex items-center justify-center text-white font-bold text-sm">KA</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Kwame A.</div>
                    <div className="text-xs text-emerald-600 font-medium">5 mins away</div>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -top-8 -right-12 bg-white rounded-2xl shadow-xl p-4 w-36 transform rotate-6 z-20 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">254K+</div>
                  <div className="text-xs text-gray-600 font-medium">Medications Delivered</div>
                  <div className="flex justify-center mt-2">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave SVG Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,69.3C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
