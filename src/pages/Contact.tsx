import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-8 text-purple-100">
              Have questions about TaskMaster? We're here to help! Reach out to us using any of the following methods.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-purple-100">220995@students.au.edu.pk</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-purple-100">+92 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-purple-100">88 Task Street, Islamabad City, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;