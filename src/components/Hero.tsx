
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/93454c08-826c-496c-a086-5bb5d3f9dab4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            International Conference on Computational Intelligence Systems and Applications
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">ICCISA 2026</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <div className="flex items-center text-white">
              <Calendar className="mr-2" size={20} />
              <span className="text-lg">March 2026</span>
            </div>
            <div className="hidden md:block text-white">|</div>
            <div className="flex items-center text-white">
              <MapPin className="mr-2" size={20} />
              <span className="text-lg">Nicosia, North Cyprus</span>
            </div>
          </div>
          
          <p className="text-lg mb-8 max-w-3xl mx-auto text-white">
            Join us for the premier international forum for researchers, engineers and practitioners to present and discuss the latest innovations, trends, and concerns in the field of Computational Intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-conference-800 hover:bg-gray-100" size="lg" asChild>
              <a href="#call-for-papers">Call for Papers</a>
            </Button>
            <Button className="bg-conference-500 hover:bg-conference-400 border border-white text-white" size="lg" asChild>
              <a href="#registration">Register Now</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
