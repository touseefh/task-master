import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      info: "support@taskmaster.com"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567"
    },
    {
      icon: MapPin,
      title: "Address",
      info: "123 Task Street, Productivity City, PC 12345"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-8 text-purple-100">
        Have questions about TaskMaster? We're here to help! Reach out to us using any of the following methods.
      </p>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <div key={index} className="flex items-center gap-4">
              <Icon className="h-6 w-6" />
              <div>
                <p className="font-semibold">{detail.title}</p>
                <p className="text-purple-100">{detail.info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;