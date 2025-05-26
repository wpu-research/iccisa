
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/e9edbfa0-9c65-42b7-8913-abeb6838a82a.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
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
