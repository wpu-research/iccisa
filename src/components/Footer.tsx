
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-conference-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ICCISA 2026</h3>
            <p className="mb-4">
              International Conference on Computational Intelligence Systems and Applications
            </p>
            <div className="flex items-center mb-2">
              <Mail size={18} className="mr-2" />
              <a href="mailto:iccisa@neu.edu.tr" className="hover:text-conference-200">
                iccisa@neu.edu.tr
              </a>
            </div>
            <div className="flex items-center mb-2">
              <MapPin size={18} className="mr-2" />
              <span>Nicosia, North Cyprus</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-conference-200">About</a>
              </li>
              <li>
                <a href="#committee" className="hover:text-conference-200">Committee</a>
              </li>
              <li>
                <a href="#call-for-papers" className="hover:text-conference-200">Call for Papers</a>
              </li>
              <li>
                <a href="#submission" className="hover:text-conference-200">Submission</a>
              </li>
              <li>
                <a href="#registration" className="hover:text-conference-200">Registration</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Important Dates</h3>
            <ul className="space-y-2">
              <li>Paper Submission: September 20, 2025</li>
              <li>Authors Notification: October 20, 2025</li>
              <li>Camera Ready and Registration: January 10, 2026</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-conference-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} ICCISA 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
