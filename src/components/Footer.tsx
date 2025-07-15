import Image from 'next/image';
import logo from '../assets/logo-white.svg';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
const Footer = () => {
  return (
//  <footer className="bg-white py-12 md:py-16">
//       <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="">
//               <Image src={logo} alt="Pharmly Logo" width={100} height={100} className="w-auto mb-4" />
//             </div>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="md:col-span-1">
//             <p className="text-gray-900 mb-4">
//               Connecting patients with licensed pharmacies for medication delivery across Ghana.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-900 hover:text-emerald-600 transition-colors">
//                 <Linkedin className="h-5 w-5" />
//               </a>
//               <a href="https://www.instagram.com/phar_mly?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="text-gray-900 hover:text-emerald-600 transition-colors">
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-900 hover:text-emerald-600 transition-colors">
//                 <Twitter className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">About Us</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Careers</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Press</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Blog</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">For Patients</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">For Pharmacies</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">For Riders</a></li>
//               <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Data Mission</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <Mail className="h-5 w-5 text-emerald-600 mt-0.5 mr-2" />
//                 <span className="text-gray-600">hello@pharmly.africa</span>
//               </li>
//               <li className="flex items-start">
//                 <Phone className="h-5 w-5 text-emerald-600 mt-0.5 mr-2" />
//                 <span className="text-gray-600">+233 50 123 4567</span>
//               </li>
//               <li className="flex items-start">
//                 <MapPin className="h-5 w-5 text-emerald-600 mt-0.5 mr-2" />
//                 <span className="text-gray-600">Accra, Ghana</span>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="mt-12 pt-8 border-t border-gray-200">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="text-gray-500 text-sm">
//               &copy; {new Date().getFullYear()} Pharmly. All rights reserved.
//             </div>
//             <div className="mt-4 md:mt-0 flex space-x-6">
//               <a href="#" className="text-gray-500 hover:text-emerald-600 text-sm">Privacy Policy</a>
//               <a href="#" className="text-gray-500 hover:text-emerald-600 text-sm">Terms of Service</a>
//               <a href="#" className="text-gray-500 hover:text-emerald-600 text-sm">Cookies</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
<footer className="bg-[#0D1821] py-12 md:py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-5">
            <div className="">
            <Image src={logo} alt="Pharmly Logo" width={120} className="" />
          </div>
            <p className="text-[#A83F3C] mb-4 text-lg md:text-xl  font-medium">
              Connecting patients with licensed pharmacies for medication delivery across Ghana.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#D6D6D6] hover:text-[#F2AF29] transition-colors">
                <Linkedin className="h-5 w-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://www.instagram.com/phar_mly/" className="text-[#D6D6D6] hover:text-[#F2AF29] transition-colors">
                <Instagram className="h-5 w-5 lg:w-6 lg:h-6" />
              </a>
              <a href="#" className="text-[#D6D6D6] hover:text-[#F2AF29] transition-colors">
                <Twitter className="h-5 w-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg lg:text-xl font-semibold text-[#A83F3C] mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#why-we-exist" className="text-[#D6D6D6] hover:text-[#F2AF29] text-base lg:text-lg transition-colors font-medium">About Us</a></li>
              <li><a href="#" className="text-[#D6D6D6] hover:text-[#F2AF29] text-base lg:text-lg transition-colors font-medium">Careers</a></li>
              <li><a href="#" className="text-[#D6D6D6] hover:text-[#F2AF29] text-base lg:text-lg transition-colors font-medium">Press</a></li>
              <li><a href="#" className="text-[#D6D6D6] hover:text-[#F2AF29] text-base lg:text-lg transition-colors font-medium">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg lg:text-xl font-semibold text-[#A83F3C] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#D6D6D6] hover:text-[#F2AF29] text-base lg:text-lg transition-colors font-medium">For Patients</a></li>
              <li><a href="#" className="text-[#D6D6D6] hover:text-[#F2AF29] text-base lg:text-lg transition-colors font-medium">For Pharmacies</a></li>
              <li><a href="#" className="text-[#D6D6D6] hover:text-[#F2AF29] text-base lg:text-lg transition-colors font-medium">For Riders</a></li>
              <li><a href="#" className="text-[#D6D6D6] hover:text-[#F2AF29] text-base lg:text-lg transition-colors font-medium">Data Mission</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg lg:text-xl font-semibold text-[#A83F3C] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex text-base lg:text-lg items-start">
                <Mail className="h-5 w-5 text-[#A83F3C] mt-0.5 mr-2" />
                <span className="text-[#D6D6D6] font-medium">hello@pharmly.africa</span>
              </li>
              <li className="flex text-base lg:text-lg items-start">
                <Phone className="h-5 w-5 text-[#A83F3C] mt-0.5 mr-2" />
                <span className="text-[#D6D6D6] font-medium">+233 24 500 0640</span>
              </li>
              <li className="flex text-base lg:text-lg items-start">
                <MapPin className="h-5 w-5 text-[#A83F3C] mt-0.5 mr-2" />
                <span className="text-[#D6D6D6] font-medium">Accra, Ghana</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#D6D6D6] border-opacity-30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#D6D6D6] text-base lg:text-lg font-medium">
              &copy; {new Date().getFullYear()} Pharmly. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-[#D6D6D6] hover:text-[#F2AF29] text-base lg:text-lg font-medium">Privacy Policy</a>
              <a href="#" className="text-[#D6D6D6] hover:text-[#F2AF29] text-base lg:text-lg font-medium">Terms of Service</a>
              <a href="#" className="text-[#D6D6D6] hover:text-[#F2AF29] text-base lg:text-lg font-medium">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer
