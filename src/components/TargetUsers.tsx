import { User, Building2, Bike } from 'lucide-react';
const TargetUsers = () => {
  return (
    <section className="py-16 md:py-36 bg-[#F7F5F3]" id="who-its-for">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Who It's For</h2>
          <p className="mt-4 text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            Pharmly benefits everyone in the medication supply chain, creating value for all stakeholders.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Patients Card */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#E8E2E0] shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#A83F3C] hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#F7F5F3] rounded-full flex items-center justify-center mb-6 mx-auto border-2 border-[#A83F3C]">
              <User className="h-8 w-8 text-[#A83F3C]" />
            </div>
            
            <h3 className="text-xl font-semibold text-center text-[#2D2D2D] mb-6">For Patients</h3>
            
            <ul className="space-y-4 text-[#6B6B6B]">
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#A83F3C] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#A83F3C]">✓</span>
                <span className="font-medium">Search for medications across multiple pharmacies</span>
              </li>
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#A83F3C] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#A83F3C]">✓</span>
                <span className="font-medium">Get your prescriptions delivered to your doorstep</span>
              </li>
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#A83F3C] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#A83F3C]">✓</span>
                <span className="font-medium">Track your order in real-time</span>
              </li>
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#A83F3C] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#A83F3C]">✓</span>
                <span className="font-medium">Refill medications with one tap</span>
              </li>
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#A83F3C] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#A83F3C]">✓</span>
                <span className="font-medium">Pay securely with Mobile Money</span>
              </li>
            </ul>
            
            <div className="mt-8 text-center">
              <a href="#" className=" text-[#A83F3C] font-semibold hover:text-[#8B3530] transition-colors border-b-2 border-[#A83F3C] hover:border-[#8B3530] pb-1">
                Learn more
              </a>
            </div>
          </div>
          
          {/* Pharmacies Card */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#E8E2E0] shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#7B9E87] hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#F7F5F3] rounded-full flex items-center justify-center mb-6 mx-auto border-2 border-[#7B9E87]">
              <Building2 className="h-8 w-8 text-[#7B9E87]" />
            </div>
            
            <h3 className="text-xl font-semibold text-center text-[#2D2D2D] mb-6">For Pharmacies</h3>
            
            <ul className="space-y-4 text-[#6B6B6B]">
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#7B9E87] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#7B9E87]">✓</span>
                <span className="font-medium">Expand your customer reach beyond physical location</span>
              </li>
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#7B9E87] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#7B9E87]">✓</span>
                <span className="font-medium">Digital inventory management system</span>
              </li>
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#7B9E87] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#7B9E87]">✓</span>
                <span className="font-medium">Prescription logging and verification</span>
              </li>
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#7B9E87] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#7B9E87]">✓</span>
                <span className="font-medium">Streamlined order fulfillment process</span>
              </li>
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#7B9E87] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#7B9E87]">✓</span>
                <span className="font-medium">Analytics dashboard for sales insights</span>
              </li>
            </ul>
            
            <div className="mt-8 text-center">
              <a href="#for-pharmacies" className=" text-[#7B9E87] font-semibold hover:text-[#6B8E77] transition-colors border-b-2 border-[#7B9E87] hover:border-[#6B8E77] pb-1">
                Partner with us
              </a>
            </div>
          </div>
          
          {/* Riders Card */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#E8E2E0] shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#D4A574] hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#F7F5F3] rounded-full flex items-center justify-center mb-6 mx-auto border-2 border-[#D4A574]">
              <Bike className="h-8 w-8 text-[#D4A574]" />
            </div>
            
            <h3 className="text-xl font-semibold text-center text-[#2D2D2D] mb-6">For Riders</h3>
            
            <ul className="space-y-4 text-[#6B6B6B]">
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#D4A574] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#D4A574]">✓</span>
                <span className="font-medium">Flexible working hours on your own schedule</span>
              </li>
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#D4A574] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#D4A574]">✓</span>
                <span className="font-medium">Competitive weekly earnings</span>
              </li>
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#D4A574] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#D4A574]">✓</span>
                <span className="font-medium">GPS-optimized routes for efficient deliveries</span>
              </li>
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#D4A574] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#D4A574]">✓</span>
                <span className="font-medium">In-app support and training</span>
              </li>
              <li className="flex items-start">
                <span className=" w-5 h-5 bg-[#F7F5F3] rounded-full text-[#D4A574] flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold border border-[#D4A574]">✓</span>
                <span className="font-medium">Immediate payment processing</span>
              </li>
            </ul>
            
            <div className="mt-8 text-center">
              <a href="#for-riders" className=" text-[#D4A574] font-semibold hover:text-[#C19660] transition-colors border-b-2 border-[#D4A574] hover:border-[#C19660] pb-1">
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
