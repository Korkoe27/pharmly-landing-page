'use client';
import { ArrowRight, Clock, Truck, BarChart4 } from 'lucide-react';

const WhyPharmly: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
 <section id="why-we-exist" className="py-16 lg:py-36 bg-[#FBF8F8]">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Why We Exist</h2>
          <p className="mt-4 text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            Accessing medicine in Ghana shouldn't be a challenge. We're transforming how Ghanaians get their medication.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* The Old Way */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-[#E8E2E0] shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#C53030]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-[#C53030]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2D2D2D]">The Old Way</h3>
            </div>
            
            <ul className="space-y-4 text-[#6B6B6B]">
              <li className="flex items-start">
                <span className=" w-6 h-6 bg-red-100 rounded-full text-[#C53030] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold">✕</span>
                <span className="font-medium">Walking between multiple pharmacies to find your medication</span>
              </li>
              <li className="flex items-start">
                <span className=" w-6 h-6 bg-red-100 rounded-full text-[#C53030] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold">✕</span>
                <span className="font-medium">Long queues and wait times at busy pharmacies</span>
              </li>
              <li className="flex items-start">
                <span className=" w-6 h-6 bg-red-100 rounded-full text-[#C53030] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold">✕</span>
                <span className="font-medium">Paper prescriptions that get lost or damaged</span>
              </li>
              <li className="flex items-start">
                <span className=" w-6 h-6 bg-red-100 rounded-full text-[#C53030] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold">✕</span>
                <span className="font-medium">No data tracking for medication usage patterns</span>
              </li>
              <li className="flex items-start">
                <span className=" w-6 h-6 bg-red-100 rounded-full text-[#C53030] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold">✕</span>
                <span className="font-medium">Difficult access for those with mobility challenges</span>
              </li>
            </ul>
          </div>
          
          {/* With Pharmly */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-[#6B8E5A] shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#A83F3C]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F7F5F3] flex items-center justify-center mr-4 border-2 border-[#6B8E5A]">
                <Truck className="h-6 w-6 text-[#6B8E5A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2D2D2D]">With Pharmly</h3>
            </div>
            
            <ul className="space-y-4 text-[#6B6B6B]">
              <li className="flex items-start">
                <span className=" w-6 h-6 bg-[#F7F5F3] rounded-full text-[#6B8E5A] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#6B8E5A]">✓</span>
                <span className="font-medium">Search multiple pharmacies instantly from your phone</span>
              </li>
              <li className="flex items-start">
                <span className=" w-6 h-6 bg-[#F7F5F3] rounded-full text-[#6B8E5A] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#6B8E5A]">✓</span>
                <span className="font-medium">Medications delivered directly to your home or office</span>
              </li>
              <li className="flex items-start">
                <span className=" w-6 h-6 bg-[#F7F5F3] rounded-full text-[#6B8E5A] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#6B8E5A]">✓</span>
                <span className="font-medium">Digital prescription management and refill reminders</span>
              </li>
              <li className="flex items-start">
                <span className=" w-6 h-6 bg-[#F7F5F3] rounded-full text-[#6B8E5A] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#6B8E5A]">✓</span>
                <span className="font-medium">Secure payment options including Mobile Money</span>
              </li>
              <li className="flex items-start">
                <span className=" w-6 h-6 bg-[#F7F5F3] rounded-full text-[#6B8E5A] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#6B8E5A]">✓</span>
                <span className="font-medium">Anonymized data helping improve Ghana's healthcare system</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => scrollToSection('data-mission')}
            className="inline-flex items-center px-8 py-4 bg-[#A83F3C] text-white font-semibold rounded-xl hover:bg-[#8B3530] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <BarChart4 className="mr-3 h-5 w-5" />
            See the Impact
            <ArrowRight className="ml-3 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyPharmly
