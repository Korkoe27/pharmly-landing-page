'use client';
import React, { useState } from 'react';
import { Users, Building2, Bike, Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface FormData {
  userType: 'patient' | 'pharmacy' | 'rider' | '';
  name: string;
  email: string;
  phone: string;
  location: string;
  businessName?: string;
  licenseNumber?: string;
  vehicleType?: string;
  experience?: string;
  interests: string[];
}

const WaitlistSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    userType: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    businessName: '',
    licenseNumber: '',
    vehicleType: '',
    experience: '',
    interests: []
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const userTypes = [
    {
      id: 'patient',
      title: 'Patient',
      description: 'Get medications delivered to your doorstep',
      icon: Users,
      color: '#A83F3C',
      bgColor: '#F7F5F3'
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy',
      description: 'Partner with us to expand your reach',
      icon: Building2,
      color: '#7B9E87',
      bgColor: '#F7F5F3'
    },
    {
      id: 'rider',
      title: 'Rider',
      description: 'Earn money delivering medications',
      icon: Bike,
      color: '#D4A574',
      bgColor: '#F7F5F3'
    }
  ];

  const patientInterests = [
    'Prescription delivery',
    'Medication reminders',
    'Health tracking',
    'Pharmacy finder',
    'Insurance integration'
  ];

  const pharmacyInterests = [
    'Inventory management',
    'Digital prescriptions',
    'Customer analytics',
    'Delivery coordination',
    'Payment processing'
  ];

  const riderInterests = [
    'Flexible scheduling',
    'Route optimization',
    'Earnings tracking',
    'Training programs',
    'Equipment support'
  ];

  const getInterestOptions = () => {
    switch (formData.userType) {
      case 'patient': return patientInterests;
      case 'pharmacy': return pharmacyInterests;
      case 'rider': return riderInterests;
      default: return [];
    }
  };

  if (isSubmitted) {
    return (
      <div  id="beta-test" className="py-12 sm:py-16 md:py-20 lg:py-36 bg-gradient-to-br from-[#F7F5F3] to-white min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-10 sm:px-6 lg:px-8 w-full">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-[#E8E2E0]">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#6B8E5A] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-3 sm:mb-4 leading-tight">
              Welcome to the Pharmly Family! 🎉
            </h2>
            <p className="text-lg sm:text-xl text-[#6B6B6B] mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Thank you for joining our waitlist! You're now part of an exclusive group of early adopters who will shape the future of medication delivery in Ghana.
            </p>
            <div className="bg-[#F7F5F3] rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border-2 border-[#E8E2E0]">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2D2D2D] mb-3 sm:mb-4 text-center sm:text-left">What happens next?</h3>
              <ul className="space-y-2 sm:space-y-3 text-[#6B6B6B] max-w-md mx-auto sm:mx-0">
                <li className="flex items-start sm:items-center">
                  <div className="w-2 h-2 bg-[#A83F3C] rounded-full mr-3 mt-2 sm:mt-0 flex-shrink-0"></div>
                  <span className="font-medium text-sm sm:text-base">We'll send you exclusive beta access</span>
                </li>
                <li className="flex items-start sm:items-center">
                  <div className="w-2 h-2 bg-[#A83F3C] rounded-full mr-3 mt-2 sm:mt-0 flex-shrink-0"></div>
                  <span className="font-medium text-sm sm:text-base">Early feature previews and updates</span>
                </li>
                <li className="flex items-start sm:items-center">
                  <div className="w-2 h-2 bg-[#A83F3C] rounded-full mr-3 mt-2 sm:mt-0 flex-shrink-0"></div>
                  <span className="font-medium text-sm sm:text-base">Special launch day benefits</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  userType: '',
                  name: '',
                  email: '',
                  phone: '',
                  location: '',
                  businessName: '',
                  licenseNumber: '',
                  vehicleType: '',
                  experience: '',
                  interests: []
                });
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#A83F3C] text-white font-semibold rounded-xl hover:bg-[#8B3530] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 text-sm sm:text-base"
            >
              Add Another Person
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#F7F5F3] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#A83F3C] bg-opacity-10 rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm border border-[#A83F3C] border-opacity-20">
            <span className="w-2 h-2 text-white bg-white rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            Beta Testing Program
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-3 sm:mb-4 leading-tight px-2">
            Be Among the First to Experience Pharmly
          </h2>
          <p className="text-lg sm:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed px-2">
            Join our exclusive waitlist and get early access to Ghana's most innovative medication delivery platform. Help us shape the future of healthcare delivery.
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border-2 border-[#E8E2E0]">
          <div className="bg-gradient-to-r from-[#A83F3C] to-[#8B3530] p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center">Join the Waitlist</h3>
            <p className="text-white text-opacity-90 text-center mt-1 sm:mt-2 text-sm sm:text-base">
              Select your role and help us build something amazing together
            </p>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            {/* User Type Selection */}
            <div className="mb-6 sm:mb-8">
              <label className="block text-base sm:text-lg font-semibold text-[#2D2D2D] mb-3 sm:mb-4">
                I want to join as a:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {userTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, userType: type.id as any }))}
                      className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 text-left ${
                        formData.userType === type.id
                          ? 'border-[#A83F3C] bg-[#F7F5F3] shadow-lg transform scale-105'
                          : 'border-[#E8E2E0] hover:border-[#B98f89] hover:shadow-md active:scale-95'
                      }`}
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 ${
                        formData.userType === type.id ? 'bg-[#A83F3C]' : 'bg-[#F7F5F3]'
                      } border-2 border-[#E8E2E0]`}>
                        <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${
                          formData.userType === type.id ? 'text-white' : 'text-[#6B6B6B]'
                        }`} />
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-[#2D2D2D] mb-1 sm:mb-2">{type.title}</h4>
                      <p className="text-xs sm:text-sm text-[#6B6B6B] font-medium leading-relaxed">{type.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {formData.userType && (
              <div className="space-y-4 sm:space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-[#E8E2E0] rounded-lg sm:rounded-xl focus:border-[#A83F3C] focus:outline-none transition-colors font-medium text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-[#E8E2E0] rounded-lg sm:rounded-xl focus:border-[#A83F3C] focus:outline-none transition-colors font-medium text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-[#E8E2E0] rounded-lg sm:rounded-xl focus:border-[#A83F3C] focus:outline-none transition-colors font-medium text-sm sm:text-base"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                      Location (City/Region) *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-[#E8E2E0] rounded-lg sm:rounded-xl focus:border-[#A83F3C] focus:outline-none transition-colors font-medium text-sm sm:text-base"
                      placeholder="e.g., Accra, Kumasi, Tamale"
                    />
                  </div>
                </div>

                {/* Conditional Fields Based on User Type */}
                {formData.userType === 'pharmacy' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                        Pharmacy Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-[#E8E2E0] rounded-lg sm:rounded-xl focus:border-[#A83F3C] focus:outline-none transition-colors font-medium text-sm sm:text-base"
                        placeholder="Your pharmacy name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                        License Number
                      </label>
                      <input
                        type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-[#E8E2E0] rounded-lg sm:rounded-xl focus:border-[#A83F3C] focus:outline-none transition-colors font-medium text-sm sm:text-base"
                        placeholder="Pharmacy license number"
                      />
                    </div>
                  </div>
                )}

                {formData.userType === 'rider' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                        Vehicle Type *
                      </label>
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-[#E8E2E0] rounded-lg sm:rounded-xl focus:border-[#A83F3C] focus:outline-none transition-colors font-medium text-sm sm:text-base"
                      >
                        <option value="">Select vehicle type</option>
                        <option value="motorcycle">Motorcycle</option>
                        <option value="bicycle">Bicycle</option>
                        <option value="car">Car</option>
                        <option value="scooter">Scooter</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                        Delivery Experience
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-[#E8E2E0] rounded-lg sm:rounded-xl focus:border-[#A83F3C] focus:outline-none transition-colors font-medium text-sm sm:text-base"
                      >
                        <option value="">Select experience level</option>
                        <option value="none">No experience</option>
                        <option value="some">Some experience (1-2 years)</option>
                        <option value="experienced">Experienced (3+ years)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Interests */}
                <div>
                  <label className="block text-sm font-semibold text-[#2D2D2D] mb-3 sm:mb-4">
                    What features are you most interested in? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {getInterestOptions().map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestChange(interest)}
                        className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl border-2 text-xs sm:text-sm font-medium transition-all duration-300 text-left ${
                          formData.interests.includes(interest)
                            ? 'border-[#A83F3C] bg-[#F7F5F3] text-[#A83F3C]'
                            : 'border-[#E8E2E0] text-[#6B6B6B] hover:border-[#B98f89] active:scale-95'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-2 mr-2 sm:mr-3 flex items-center justify-center flex-shrink-0 ${
                            formData.interests.includes(interest)
                              ? 'border-[#A83F3C] bg-[#A83F3C]'
                              : 'border-[#E8E2E0]'
                          }`}>
                            {formData.interests.includes(interest) && (
                              <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                            )}
                          </div>
                          <span className="leading-tight">{interest}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 sm:pt-6">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#A83F3C] text-white font-semibold rounded-lg sm:rounded-xl hover:bg-[#8B3530] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center active:scale-95 text-sm sm:text-base"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 sm:mr-3"></div>
                        Joining Waitlist...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Mail className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                        Join the Waitlist
                        <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    )}
                  </button>
                </div>

                {/* Privacy Notice */}
                <div className="bg-[#F7F5F3] rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-[#E8E2E0]">
                  <p className="text-xs sm:text-sm text-[#6B6B6B] font-medium leading-relaxed">
                    <strong className="text-[#2D2D2D]">Privacy Notice:</strong> Your information will only be used to contact you about Pharmly beta testing and launch updates. We respect your privacy and will never share your data with third parties.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 sm:mt-10 flex justify-between w-full lg:mt-12 lg:grid lg:grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#E8E2E0] shadow-lg text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#A83F3C] mb-1 sm:mb-2">500+</div>
            <div className="text-xs sm:text-sm text-[#6B6B6B] font-medium">Early Adopters</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#E8E2E0] shadow-lg text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#7B9E87] mb-1 sm:mb-2">50+</div>
            <div className="text-xs sm:text-sm text-[#6B6B6B] font-medium">Partner Pharmacies</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#E8E2E0] shadow-lg text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#D4A574] mb-1 sm:mb-2">100+</div>
            <div className="text-xs sm:text-sm text-[#6B6B6B] font-medium">Interested Riders</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;