'use client';
import { CheckCircle2, ChevronRight, MapPin, MessageSquare, Navigation, Phone } from 'lucide-react';
const AppPreview = () => {
  return (
 <section className="py-16 md:py-36 bg-white overflow-hidden relative" id='how-it-works'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4A574] rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 -left-24 w-64 h-64 bg-[#7B9E87] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Built for Ghana. Built for Ease.</h2>
          <p className="mt-4 text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            Upload your prescription. Get matched to a pharmacy near you. Track the rider. Refill meds with one tap.
          </p>
        </div>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="bg-[#F7F5F3] rounded-2xl p-6 border-2 border-[#E8E2E0] transition-all duration-300 hover:shadow-lg hover:border-[#A83F3C]">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-[#6B8E5A]" />
                  </div>
                  <div className="mx-auto">
                    <h3 className="text-lg font-semibold text-[#2D2D2D]">Simple Prescription Upload</h3>
                    <p className="mt-2 text-[#6B6B6B] font-medium">
                      Take a photo of your prescription or upload an existing image. Our system will process it securely.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F7F5F3] rounded-2xl p-6 border-2 border-[#E8E2E0] transition-all duration-300 hover:shadow-lg hover:border-[#A83F3C]">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-[#6B8E5A]" />
                  </div>
                  <div className="mx-auto">
                    <h3 className="text-lg font-semibold text-[#2D2D2D]">Find Available Medications</h3>
                    <p className="mt-2 text-[#6B6B6B] font-medium">
                      Our app searches nearby pharmacies to find your medications, saving you time and effort.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F7F5F3] rounded-2xl p-6 border-2 border-[#E8E2E0] transition-all duration-300 hover:shadow-lg hover:border-[#A83F3C]">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-[#6B8E5A]" />
                  </div>
                  <div className="mx-auto">
                    <h3 className="text-lg font-semibold text-[#2D2D2D]">Real-time Delivery Tracking</h3>
                    <p className="mt-2 text-[#6B6B6B] font-medium">
                      Follow your medication's journey from the pharmacy to your doorstep with our live tracking feature.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F7F5F3] rounded-2xl p-6 border-2 border-[#E8E2E0] transition-all duration-300 hover:shadow-lg hover:border-[#A83F3C]">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-[#6B8E5A]" />
                  </div>
                  <div className="mx-auto">
                    <h3 className="text-lg font-semibold text-[#2D2D2D]">Medication Reminders</h3>
                    <p className="mt-2 text-[#6B6B6B] font-medium">
                      Never miss a dose with personalized medication reminders. Refill with just one tap when you're running low.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center md:justify-start">
              <a href="#" className="inline-flex items-center px-8 py-4 bg-[#A83F3C] text-white font-semibold rounded-xl hover:bg-[#8B3530] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More Features
                <ChevronRight className="ml-3 h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 my-10 md:my-0 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Delivery Tracking Interface */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#E8E2E0]">
                {/* Header */}
                <div className="bg-white px-6 py-4 border-b-2 border-[#E8E2E0]">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-[#2D2D2D]">Fast Smooth Delivery</h3>
                  </div>
                </div>
                
                {/* Map Area */}
                <div className="relative h-80 bg-gradient-to-br from-[#F7F5F3] to-[#E8E2E0] overflow-hidden">
                  {/* Simplified Map Background */}
                  <div className="absolute inset-0">
                    {/* Street Grid Pattern */}
                    <div className="absolute inset-0 opacity-30">
                      {/* Horizontal Streets */}
                      <div className="absolute top-16 left-0 right-0 h-3 bg-[#B98f89] rounded-full"></div>
                      <div className="absolute top-32 left-0 right-0 h-3 bg-[#B98f89] rounded-full"></div>
                      <div className="absolute top-48 left-0 right-0 h-3 bg-[#B98f89] rounded-full"></div>
                      <div className="absolute top-64 left-0 right-0 h-3 bg-[#B98f89] rounded-full"></div>
                      
                      {/* Vertical Streets */}
                      <div className="absolute top-0 bottom-0 left-16 w-3 bg-[#B98f89] rounded-full"></div>
                      <div className="absolute top-0 bottom-0 left-32 w-3 bg-[#B98f89] rounded-full"></div>
                      <div className="absolute top-0 bottom-0 left-48 w-3 bg-[#B98f89] rounded-full"></div>
                      <div className="absolute top-0 bottom-0 left-64 w-3 bg-[#B98f89] rounded-full"></div>
                      <div className="absolute top-0 bottom-0 right-16 w-3 bg-[#B98f89] rounded-full"></div>
                      <div className="absolute top-0 bottom-0 right-32 w-3 bg-[#B98f89] rounded-full"></div>
                    </div>
                    
                    {/* Green Areas (Parks/Blocks) */}
                    <div className="absolute top-4 left-4 w-24 h-20 bg-[#7B9E87] rounded-xl opacity-40"></div>
                    <div className="absolute top-4 right-4 w-32 h-16 bg-[#7B9E87] rounded-xl opacity-40"></div>
                    <div className="absolute bottom-4 left-8 w-28 h-24 bg-[#7B9E87] rounded-xl opacity-40"></div>
                    <div className="absolute bottom-4 right-8 w-20 h-20 bg-[#7B9E87] rounded-xl opacity-40"></div>
                    
                    {/* Delivery Route - Dotted Line */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 320">
                      <path
                        d="M 60 90 L 100 120 L 240 200 L 280 250"
                        stroke="#6B8E5A"
                        strokeWidth="4"
                        strokeDasharray="10,5"
                        fill="none"
                        className="animate-pulse"
                      />
                    </svg>
                    {/* <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 320">
                      <path
                        d="M 80 60 L 200 260"
                        stroke="#6B8E5A"
                        strokeWidth="4"
                        strokeDasharray="10,5"
                        fill="none"
                        className="animate-pulse"
                      />
                    </svg> */}
                  </div>
                  
                  {/* Pharmacy Pin */}
                  <div className="absolute top-12 left-16">
                    <div className="relative">
                      <div className="w-5 h-5 lg:w-10 lg:h-10 bg-[#6B8E5A] rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                        <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#6B8E5A] rounded-full"></div>
                        </div>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-[#6B8E5A]"></div>
                      {/* Pharmacy Label */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-[#0D1821] px-3 py-2 rounded-lg shadow-lg text-xs font-semibold whitespace-nowrap border border-[#E8E2E0]">
                        Pharmacy
                      </div>
                    </div>
                  </div>
                  
                  {/* Rider Pin (Moving) */}
                  <div className="absolute top-32 left-48">
                    <div className="relative animate-bounce">
                      <div className="w-8 h-8 bg-[#A83F3C] rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                        <Navigation className="w-4 h-4 text-white transform rotate-45" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Pin */}
                  <div className="absolute bottom-16 right-12">
                    <div className="relative">
                      <div className="w-10 h-10 bg-[#D4A574] rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-[#D4A574]"></div>
                      {/* Home Label */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-[#0D1821] px-3 py-2 rounded-lg shadow-lg text-xs font-semibold whitespace-nowrap border border-[#E8E2E0]">
                        Home
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Rider Info Card */}
                <div className="p-6 bg-white border-t-2 border-[#E8E2E0]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#A83F3C] to-[#8B3530] rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-sm">KA</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#2D2D2D]">Kofi A.</h4>
                        <p className="text-sm text-[#6B6B6B] font-medium">Arriving in 12 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex items-center px-4 py-2 bg-[#6B8E5A] text-white rounded-full text-sm font-semibold hover:bg-[#5A7D4A] transition-all duration-300 shadow-md hover:shadow-lg">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </button>
                      <button className="flex items-center px-4 py-2 bg-[#D4A574] text-white rounded-full text-sm font-semibold hover:bg-[#C19660] transition-all duration-300 shadow-md hover:shadow-lg">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Message
                      </button>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-[#6B6B6B] font-medium mb-2">
                      <span>Order confirmed</span>
                      <span>75% complete</span>
                    </div>
                    <div className="w-full bg-[#E8E2E0] rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#6B8E5A] to-[#A83F3C] h-3 rounded-full transition-all duration-500 shadow-sm" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Status Card */}
              <div className="absolute lg:-top-4 -top-12 -right-2 lg:-right-4 bg-white lg:bg-white rounded-xl shadow-xl md:p-4 p-2 border-2 border-[#E8E2E0] transform rotate-3">
                <div className="text-center">
                  <div className="text-xs text-[#6B6B6B] font-medium mb-1">Order Status</div>
                  <div className="text-sm font-bold text-[#6B8E5A]">Out for Delivery</div>
                  <div className="flex justify-center mt-2">
                    <div className="w-2 h-2 bg-[#6B8E5A] rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Medication Card */}
              <div className="absolute -bottom-20 lg:-left-6 bg-white rounded-xl shadow-xl p-4 border-2 border-[#E8E2E0] transform -rotate-2 w-44 lg:w-48">
                <div className="text-xs text-[#6B6B6B] font-medium mb-2">Your Medications</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-[#2D2D2D]">Amoxicillin</span>
                    <span className="text-[#6B6B6B] font-medium">GH₵ 45</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-[#2D2D2D]">Paracetamol</span>
                    <span className="text-[#6B6B6B] font-medium">GH₵ 12</span>
                  </div>
                </div>
                <div className="border-t-2 border-[#E8E2E0] mt-3 pt-3">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-[#2D2D2D]">Total</span>
                    <span className="text-[#A83F3C]">GH₵ 67</span>
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
