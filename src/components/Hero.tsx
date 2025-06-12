'use client';
import { ArrowRight, Download, Store, HelpCircle } from 'lucide-react';

const Hero = () => {
  return (
<div className="relative bg-gradient-to-r from-emerald-600 to-teal-700 pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Fast. Trusted. <span className="text-yellow-300">Delivered.</span>
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-white opacity-90 leading-relaxed">
              Order real medications from licensed pharmacies in Ghana, delivered right to your doorstep.
            </h2>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-white text-emerald-700 font-medium rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Download className="mr-2 h-5 w-5" />
                Download the Pharmly App
              </button>
              <button className="px-6 py-3 bg-yellow-500 text-emerald-900 font-medium rounded-md hover:bg-yellow-400 transition-colors flex items-center justify-center">
                <Store className="mr-2 h-5 w-5" />
                Partner Your Pharmacy
              </button>
            </div>
            
            <a href="#how-it-works" className="mt-6 inline-flex items-center text-white hover:text-yellow-300 transition-colors">
              <HelpCircle className="mr-2 h-5 w-5" />
              <span>How It Works</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              {/* Main App UI Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-white w-64 md:w-72 transform rotate-3">
                <div className="bg-emerald-600 text-white py-2 px-4 text-sm font-medium">
                  Pharmly Delivery
                </div>
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-1">Your Order #GH2583</div>
                  <div className="text-emerald-600 font-medium mb-3">Out for Delivery</div>
                  
                  <div className="bg-gray-100 rounded-lg p-3 mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Amoxicillin 500mg</span>
                      <span className="text-sm">GH₵ 45.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Paracetamol 500mg</span>
                      <span className="text-sm">GH₵ 12.00</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">GH₵ 57.00</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Delivery</span>
                    <span className="text-sm">GH₵ 10.00</span>
                  </div>
                  <div className="flex justify-between items-center font-medium">
                    <span>Total</span>
                    <span>GH₵ 67.00</span>
                  </div>
                  
                  <div className="mt-3 flex items-center text-xs text-gray-500">
                    <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-1"></span>
                    MTN Mobile Money
                  </div>
                </div>
              </div>
              
              {/* Secondary UI Element */}
              <div className="absolute -bottom-4 -left-12 bg-white rounded-xl shadow-lg p-3 w-32 transform -rotate-6">
                <div className="text-xs font-medium mb-1">Your Rider</div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                  <div>
                    <div className="text-xs font-medium">Kwame A.</div>
                    <div className="text-xs text-emerald-600">5 mins away</div>
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
