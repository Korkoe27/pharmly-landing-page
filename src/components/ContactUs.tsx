import { Download, Store, HelpCircle, Bike } from 'lucide-react';


const ContactUs = () => {
  return (
 <section className="py-16 md:py-24 bg-gradient-to-br from-[#A83F3C] via-[#8B3530] to-[#6B2A27] relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/7089063/pexels-photo-7089063.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)'
        }}></div>
      </div> */}
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4A574] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#B98f89] rounded-full blur-3xl"></div>
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
            {/* <button className="group px-8 py-4 bg-white text-[#A83F3C] font-semibold rounded-xl hover:bg-[#F7F5F3] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
              <Download className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get the App
            </button> */}
            <button className="group px-8 py-4 bg-[#D4A574] text-white font-semibold rounded-xl hover:bg-[#C19660] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
              <Store className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Partner with Pharmly
            </button>
            <button className="group px-8 py-4 bg-[#7B9E87] text-white font-semibold rounded-xl hover:bg-[#6B8E77] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
              <HelpCircle className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              See How It Works
            </button>
          </div>
        </div>
      </div>
      

    </section>
  )
}

export default ContactUs
