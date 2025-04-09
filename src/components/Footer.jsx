import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  MapPinIcon, 
  BookmarkIcon, 
  QuestionMarkCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const quickLinks = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Listings', href: '/listings', icon: MapPinIcon },
  { name: 'Saved', href: '/saved', icon: BookmarkIcon },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive property listing and search service, helping you find the perfect rental property in Lower Kabete and surrounding areas."
  },
  {
    question: "How long does a typical project take?",
    answer: "Property search duration varies, but most tenants find their ideal home within 1-2 weeks using our platform."
  },
  {
    question: "Do you work internationally?",
    answer: "Currently, we focus on properties in Nairobi, Kenya, specifically in Lower Kabete and surrounding areas."
  }
];

const contactInfo = [
  {
    name: 'Phone',
    value: '+254 718 266 432',
    icon: PhoneIcon,
  },
  {
    name: 'Email',
    value: 'info@kejakonnect.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'Address',
    value: 'Nairobi, Kenya',
    icon: MapIcon,
  },
];

export default function Footer() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">Keja Konnect</h2>
            <p className="mt-4 text-base text-indigo-200">
              Your trusted partner in finding the perfect home in Lower Kabete and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-200">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="flex items-center text-sm text-indigo-100 hover:text-white transition-colors">
                    <item.icon className="h-5 w-5 mr-2 text-indigo-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQs Section */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-200 mb-4">FAQs</h3>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-indigo-800">
                  <button
                    className="w-full py-3 flex justify-between items-center text-left group"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-sm font-medium text-indigo-100 group-hover:text-white transition-colors">{faq.question}</span>
                    <ChevronDownIcon 
                      className={`w-5 h-5 text-indigo-300 transition-transform ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="pb-3 text-sm text-indigo-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-200 mb-4">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.name} className="flex items-start gap-3">
                  <item.icon className="h-6 w-6 text-indigo-300 mt-0.5" />
                  <div>
                    <h4 className="text-base font-medium text-indigo-100">{item.name}</h4>
                    <p className="text-sm text-indigo-200">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-indigo-800 pt-8">
          <p className="text-center text-indigo-200">
            © {new Date().getFullYear()} Keja Konnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 