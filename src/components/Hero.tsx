import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/d61aa2fd-16ee-4ba9-8d80-4fe7b46fe4f4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/20" /> {/* Light overlay for better text readability */}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        
      </div>
    </div>
  );
};

export default Hero;
