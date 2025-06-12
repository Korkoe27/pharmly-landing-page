import { User, Building2, Bike } from 'lucide-react';
const TargetUsers = () => {
  return (
<section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who It's For</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Pharmly benefits everyone in the medication supply chain, creating value for all stakeholders.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Patients Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <User className="h-8 w-8 text-emerald-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">For Patients</h3>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full text-emerald-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Search for medications across multiple pharmacies</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full text-emerald-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Get your prescriptions delivered to your doorstep</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full text-emerald-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Track your order in real-time</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full text-emerald-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Refill medications with one tap</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-emerald-100 rounded-full text-emerald-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Pay securely with Mobile Money</span>
              </li>
            </ul>
            
            <div className="mt-6 text-center">
              <a href="#" className="inline-block text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                Learn more
              </a>
            </div>
          </div>
          
          {/* Pharmacies Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">For Pharmacies</h3>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 rounded-full text-blue-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Expand your customer reach beyond physical location</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 rounded-full text-blue-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Digital inventory management system</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 rounded-full text-blue-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Prescription logging and verification</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 rounded-full text-blue-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Streamlined order fulfillment process</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 rounded-full text-blue-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Analytics dashboard for sales insights</span>
              </li>
            </ul>
            
            <div className="mt-6 text-center">
              <a href="#for-pharmacies" className="inline-block text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Partner with us
              </a>
            </div>
          </div>
          
          {/* Riders Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald-200">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Bike className="h-8 w-8 text-yellow-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">For Riders</h3>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-yellow-100 rounded-full text-yellow-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Flexible working hours on your own schedule</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-yellow-100 rounded-full text-yellow-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Competitive weekly earnings</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-yellow-100 rounded-full text-yellow-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>GPS-optimized routes for efficient deliveries</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-yellow-100 rounded-full text-yellow-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>In-app support and training</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-yellow-100 rounded-full text-yellow-600 flex-shrink-0 mt-1 mr-2 flex items-center justify-center text-xs">✓</span>
                <span>Immediate payment processing</span>
              </li>
            </ul>
            
            <div className="mt-6 text-center">
              <a href="#for-riders" className="inline-block text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                Become a rider
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TargetUsers
