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
 <div className="relative bg-gradient-to-br from-[#fbf8f8] via-[#c0c0c3] to-[#c0c0c3] pt-36 pb-32 md:pt-28 md:pb-40 overflow-hidden" id='top'>

        <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("/image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px)'
        }}></div>
      </div>
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4A574] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#B98f89] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#7B9E87] rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto lg:py-20 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-6 py-3 bg-[#A83F3C]/20 bg-opacity-20 rounded-full text-[#960701] text-sm font-medium mb-8 backdrop-blur-sm border border-[#960701] border-opacity-20">
              <span className="w-2 h-2 bg-[#960701] rounded-full mr-3 animate-pulse"></span>
              Now serving 14 regions across Ghana
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A4A] leading-tight mb-6">
              Fast. Trusted. 
              <span className="block text-[#D4A574]">Delivered.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#4A4A4A] text-opacity-90 leading-relaxed mb-10 max-w-2xl">
              Order real medications from licensed pharmacies in Ghana, delivered right to your doorstep in under 60 minutes.
            </p>
            
            {/* Primary CTAs */}
            <div className="flex flex-col items-center justify-center lg:justify-start sm:flex-row gap-4 mb-8">
              {/* <button className="group relative px-8 py-4 bg-white text-[#A83F3C] font-semibold rounded-xl hover:bg-[#F7F5F3] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
                <Download className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Pharmly App
                <div className="absolute inset-0 bg-gradient-to-r from-[#A83F3C] to-[#8B3530] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </button> */}
              
              <button className="group relative px-8 py-4 bg-[#D4A574] text-white font-semibold rounded-xl hover:bg-[#C19660] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
                <Store className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Partner Your Pharmacy
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574] to-[#C19660] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>              
              <button className="group px-6 py-3 bg-[#7B9E87] text-white font-medium rounded-lg hover:bg-[#6B8E77] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                <Bike className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Become a Rider
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Secondary CTAs */}
            {/* <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="group px-6 py-3 bg-white/20 bg-opacity-10 text-[#960701] font-medium rounded-lg hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm border border-[#960701] border-opacity-20 flex items-center justify-center"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                How It Works
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div> */}
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[#4A4A4A] text-opacity-80">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-medium">Licensed Pharmacies</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-medium">Secure Payments</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-medium">Real-time Tracking</span>
              </div>
            </div>
          </div>
          
          {/* App Mockup Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Phone Mockup */}
              <div className="relative z-10">
                <div className="bg-[#2D2D2D] rounded-[2.5rem] p-2 lg:w-96 w-72 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden h-[600px] w-full relative">
                    {/* Status Bar */}
                    <div className="bg-[#A83F3C] text-white px-6 py-4 flex justify-between items-center">
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
                      <div className="bg-[#F7F5F3] rounded-2xl p-4 flex items-center border border-[#E8E2E0]">
                        <div className="w-5 h-5 bg-[#B98f89] rounded-full mr-3"></div>
                        <div className="text-[#6B6B6B]">Search medications...</div>
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="p-6">
                      <div className="text-lg font-semibold mb-4 text-[#2D2D2D]">Recent Orders</div>
                      
                      {/* Active Order Card */}
                      <div className="bg-[#F7F5F3] rounded-2xl p-4 mb-4 border-2 border-[#D4A574]">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-semibold text-[#A83F3C]">Order #GH2583</span>
                          <span className="text-xs bg-[#6B8E5A] text-white px-3 py-1 rounded-full font-medium">Arriving Soon</span>
                        </div>
                        <div className="text-base mb-3 text-[#2D2D2D]">Amoxicillin, Paracetamol</div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[#6B6B6B]">Today, 2:30 PM</span>
                          <span className="text-lg font-bold text-[#A83F3C]">GH₵ 67.00</span>
                        </div>
                      </div>
                      
                      {/* Completed Order Card */}
                      <div className="bg-[#F7F5F3] rounded-2xl p-4 mb-4 border border-[#E8E2E0]">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-semibold text-[#2D2D2D]">Order #GH2489</span>
                          <span className="text-xs bg-[#4A4A4A] text-white px-3 py-1 rounded-full font-medium">Completed</span>
                        </div>
                        <div className="text-base mb-3 text-[#6B6B6B]">Metformin, Vitamin C</div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[#6B6B6B]">Mar 15, 10:15 AM</span>
                          <span className="text-base font-semibold text-[#2D2D2D]">GH₵ 42.50</span>
                        </div>
                      </div>
                      
                      <div className="text-lg font-semibold mt-6 mb-4 text-[#2D2D2D]">Nearby Pharmacies</div>
                      
                      {/* Pharmacy Cards */}
                      <div className="space-y-3">
                        <div className="bg-white rounded-xl p-4 border border-[#E8E2E0] shadow-sm">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-[#7B9E87] rounded-xl mr-3 flex items-center justify-center text-white font-bold">AP</div>
                            <div className="flex-1">
                              <div className="font-semibold text-[#2D2D2D]">Accra Pharmacy</div>
                              <div className="text-sm text-[#6B6B6B]">1.2 km away • Open until 9 PM</div>
                            </div>
                            <div className="w-3 h-3 bg-[#6B8E5A] rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 border border-[#E8E2E0] shadow-sm">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-[#D4A574] rounded-xl mr-3 flex items-center justify-center text-white font-bold">GP</div>
                            <div className="flex-1">
                              <div className="font-semibold text-[#2D2D2D]">Ghana Pharma</div>
                              <div className="text-sm text-[#6B6B6B]">2.5 km away • Open until 8 PM</div>
                            </div>
                            <div className="w-3 h-3 bg-[#6B8E5A] rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E8E2E0] p-4 flex justify-around">
                      <div className="p-3 rounded-2xl bg-[#F7F5F3]">
                        <div className="w-6 h-6 bg-[#A83F3C] rounded-lg"></div>
                      </div>
                      <div className="p-3">
                        <div className="w-6 h-6 bg-[#E8E2E0] rounded-lg"></div>
                      </div>
                      <div className="p-3">
                        <div className="w-6 h-6 bg-[#E8E2E0] rounded-lg"></div>
                      </div>
                      <div className="p-3">
                        <div className="w-6 h-6 bg-[#E8E2E0] rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Rider Card */}
              <div className="absolute -bottom-6 -left-16 bg-white rounded-2xl shadow-xl p-4 w-40 transform -rotate-6 z-20 border border-[#E8E2E0]">
                <div className="text-sm font-semibold mb-2 text-[#2D2D2D]">Your Rider</div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#A83F3C] to-[#8B3530] rounded-full mr-3 flex items-center justify-center text-white font-bold text-sm">KA</div>
                  <div>
                    <div className="text-sm font-semibold text-[#2D2D2D]">Kwame A.</div>
                    <div className="text-xs text-[#6B8E5A] font-medium">5 mins away</div>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="w-full bg-[#E8E2E0] rounded-full h-1.5">
                    <div className="bg-[#6B8E5A] h-1.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -top-8 -right-12 bg-white rounded-2xl shadow-xl p-4 w-36 transform rotate-6 z-20 border border-[#E8E2E0]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#A83F3C]">254K+</div>
                  <div className="text-xs text-[#6B6B6B] font-medium">Medications Delivered</div>
                  <div className="flex justify-center mt-2">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-[#6B8E5A] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#6B8E5A] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#6B8E5A] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#E8E2E0] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#E8E2E0] rounded-full"></div>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#FBF8F8">
          <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,69.3C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
