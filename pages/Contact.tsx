import React, { useState } from 'react';
import { Mail, MapPin, Send, Calendar, MessageCircle, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col">
       {/* Hero / Header */}
       <section className="bg-nixDark pt-32 pb-24 px-4">
         <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Let’s Build Secure & Scalable Systems Together
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Ready to modernize? Connect with our enterprise architects to discuss your specific needs in DevOps, Automation, Cloud Security, or Database Reliability.
            </p>
         </div>
       </section>

       <section className="bg-white pb-24 px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
             <div className="grid lg:grid-cols-5 min-h-[600px]">
                
                {/* Left Column: Contact Info & Direct Actions */}
                <div className="lg:col-span-2 bg-slate-50 p-8 md:p-12 border-r border-gray-100">
                   <h3 className="text-xl font-bold text-nixBlue mb-8">Quick Connect</h3>
                   
                   {/* Direct Channels */}
                   <div className="space-y-4 mb-10">
                      <a href="https://wa.me/919769888498" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-md transition-all group">
                         <div className="flex items-center">
                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">
                               <MessageCircle size={20} />
                            </div>
                            <div className="text-left">
                               <span className="block text-xs text-slate-400 uppercase font-bold">WhatsApp Us</span>
                               <span className="font-semibold text-slate-800 group-hover:text-green-600">Start Chat</span>
                            </div>
                         </div>
                         <ArrowRight size={16} className="text-slate-300 group-hover:text-green-600 transition-colors" />
                      </a>

                      <a href="mailto:sales@nixsoftech.in" className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-nixBlue hover:shadow-md transition-all group">
                         <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 text-nixBlue rounded-full flex items-center justify-center mr-3">
                               <Mail size={20} />
                            </div>
                            <div className="text-left">
                               <span className="block text-xs text-slate-400 uppercase font-bold">Email Sales</span>
                               <span className="font-semibold text-slate-800 group-hover:text-nixBlue">sales@nixsoftech.in</span>
                            </div>
                         </div>
                         <ArrowRight size={16} className="text-slate-300 group-hover:text-nixBlue transition-colors" />
                      </a>
                      
                      <button className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-nixOrange hover:shadow-md transition-all group text-left">
                         <div className="flex items-center">
                            <div className="w-10 h-10 bg-orange-100 text-nixOrange rounded-full flex items-center justify-center mr-3">
                               <Calendar size={20} />
                            </div>
                            <div className="text-left">
                               <span className="block text-xs text-slate-400 uppercase font-bold">Schedule Call</span>
                               <span className="font-semibold text-slate-800 group-hover:text-nixOrange">Book 30-min Slot</span>
                            </div>
                         </div>
                         <ArrowRight size={16} className="text-slate-300 group-hover:text-nixOrange transition-colors" />
                      </button>
                   </div>

                   {/* Location */}
                   <div className="mb-8">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                         <MapPin size={18} className="text-nixBlue mr-2" /> HQ Location
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed ml-6">
                         804, 8th Floor, IJMIMA Complex,<br/>
                         Mindspace, Malad West,<br/>
                         Mumbai – 400064, India
                      </p>
                   </div>
                   
                   {/* Map Embed */}
                   <div className="rounded-xl overflow-hidden h-48 border border-gray-200 shadow-sm relative bg-slate-200">
                     <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.665798440816!2d72.83328967498013!3d19.166104082057305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b64d0d1b1c6d%3A0x6b4f7e1b1c6d1c6d!2sIJMIMA%20Complex!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                       width="100%" 
                       height="100%" 
                       style={{border:0}} 
                       allowFullScreen 
                       loading="lazy" 
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Nixsoft Office Location"
                     ></iframe>
                   </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:col-span-3 p-8 md:p-12 bg-white">
                   {submitted ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                         <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-100">
                            <Send className="text-green-600" size={40} />
                         </div>
                         <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Request Received!</h3>
                         <p className="text-slate-500 max-w-md mx-auto mb-8 text-lg">
                            Thank you for contacting Nixsoft. Our technical team has been notified and will review your requirements. You can expect a response within 24 hours.
                         </p>
                         <button onClick={() => setSubmitted(false)} className="text-nixBlue font-semibold hover:underline flex items-center">
                            Send another message <ArrowRight size={16} className="ml-1" />
                         </button>
                      </div>
                   ) : (
                      <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-center">
                         <div className="mb-6">
                            <h3 className="text-2xl font-bold text-slate-900">Send us a Message</h3>
                            <p className="text-slate-500 mt-1">Fill in the details below and we'll get back to you shortly.</p>
                         </div>

                         <div className="grid md:grid-cols-2 gap-6">
                            <div>
                               <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                               <input 
                                  required 
                                  type="text" 
                                  name="name" 
                                  value={formData.name}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-nixBlue focus:ring-1 focus:ring-nixBlue transition-all" 
                                  placeholder="John Doe" 
                               />
                            </div>
                            <div>
                               <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                               <input 
                                  required 
                                  type="text" 
                                  name="company" 
                                  value={formData.company}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-nixBlue focus:ring-1 focus:ring-nixBlue transition-all" 
                                  placeholder="Enterprise Ltd." 
                               />
                            </div>
                         </div>

                         <div className="grid md:grid-cols-2 gap-6">
                            <div>
                               <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                               <input 
                                  required 
                                  type="email" 
                                  name="email" 
                                  value={formData.email}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-nixBlue focus:ring-1 focus:ring-nixBlue transition-all" 
                                  placeholder="john@company.com" 
                               />
                            </div>
                            <div>
                               <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                               <input 
                                  required 
                                  type="tel" 
                                  name="phone" 
                                  value={formData.phone}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-nixBlue focus:ring-1 focus:ring-nixBlue transition-all" 
                                  placeholder="+91 98765 43210" 
                               />
                            </div>
                         </div>

                         <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Requirement / Message</label>
                            <textarea 
                               required 
                               name="message" 
                               rows={5} 
                               value={formData.message}
                               onChange={handleChange}
                               className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-nixBlue focus:ring-1 focus:ring-nixBlue transition-all resize-none" 
                               placeholder="Briefly describe your infrastructure needs..."
                            ></textarea>
                         </div>

                         <button type="submit" className="w-full bg-nixOrange hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-orange-900/20 flex items-center justify-center text-lg">
                            Request Consultation <ArrowRight size={20} className="ml-2" />
                         </button>
                         
                         <p className="text-center text-xs text-slate-400 mt-2">
                            By submitting this form, you agree to our privacy policy. We respect your inbox.
                         </p>
                      </form>
                   )}
                </div>
             </div>
          </div>
       </section>
    </div>
  );
};

export default Contact;
