import { Download, Store, HelpCircle } from 'lucide-react';

const ContactUs = () => {
  return (
 <section className="py-16 md:py-24 bg-emerald-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/7089063/pexels-photo-7089063.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Join Ghana's Most Responsive Pharmacy System
          </h2>
          <p className="mt-4 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
            Whether you're a patient, pharmacist, or policymaker — join us in building Ghana's most responsive pharmacy system.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-white text-emerald-700 font-medium rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Download className="mr-2 h-5 w-5" />
              Get the App
            </button>
            <button className="px-8 py-4 bg-yellow-500 text-emerald-900 font-medium rounded-md hover:bg-yellow-400 transition-colors flex items-center justify-center">
              <Store className="mr-2 h-5 w-5" />
              Partner with Pharmly
            </button>
            <button className="px-8 py-4 bg-emerald-700 text-white font-medium rounded-md hover:bg-emerald-800 transition-colors flex items-center justify-center">
              <HelpCircle className="mr-2 h-5 w-5" />
              See How It Works
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave SVG Divider */}
      {/* <div className="absolute bottom-0 left-0 right-0 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,69.3C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div> */}
    </section>
  )
}

export default ContactUs
