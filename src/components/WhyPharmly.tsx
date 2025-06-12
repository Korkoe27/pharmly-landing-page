'use client';
import { ArrowRight, Clock, Truck, BarChart4 } from 'lucide-react';

const WhyPharmly = () => {
    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
 <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why We Exist</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Accessing medicine in Ghana shouldn't be a challenge. We're transforming how Ghanaians get their medication.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* The Old Way */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">The Old Way</h3>
            </div>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-red-100 rounded-full text-red-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✕</span>
                <span>Walking between multiple pharmacies to find your medication</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-red-100 rounded-full text-red-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✕</span>
                <span>Long queues and wait times at busy pharmacies</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-red-100 rounded-full text-red-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✕</span>
                <span>Paper prescriptions that get lost or damaged</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-red-100 rounded-full text-red-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✕</span>
                <span>No data tracking for medication usage patterns</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-red-100 rounded-full text-red-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✕</span>
                <span>Difficult access for those with mobility challenges</span>
              </li>
            </ul>
          </div>
          
          {/* With Pharmly */}
          <div className="bg-emerald-50 rounded-xl p-6 md:p-8 border border-emerald-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                <Truck className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">With Pharmly</h3>
            </div>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full text-emerald-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Search multiple pharmacies instantly from your phone</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full text-emerald-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Medications delivered directly to your home or office</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full text-emerald-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Digital prescription management and refill reminders</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full text-emerald-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Secure payment options including Mobile Money</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full text-emerald-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Anonymized data helping improve Ghana's healthcare system</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => scrollToSection('data-mission')}
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
          >
            <BarChart4 className="mr-2 h-5 w-5" />
            See the Impact
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyPharmly
