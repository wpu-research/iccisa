
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const InvitedSpeakers = () => {
  const speakers = [
    {
      name: "Prof. Dr. Fadi Al-Trujman",
      affiliation: "Near East University, Northern Cyprus",
      image: "/lovable-uploads/b25e0f30-f9a8-48de-9536-fbbb83fe7c7e.png"
    },
    {
      name: "Assoc. Prof. Dr. Mary Agoyi", 
      affiliation: "Cyprus International University, Northern Cyprus",
      image: "/lovable-uploads/9c91b0c2-3d0a-44de-8b94-b23b5a9cfe85.png"
    },
    {
      name: "Assoc. Prof. Dr. John Bush Idoko",
      affiliation: "Near East University, Northern Cyprus", 
      image: "/lovable-uploads/47c4e8b0-9f2a-4c5d-b8e6-1a3d5f7e9c2b.png"
    },
    {
      name: "Dr. Abdulkader Helwan",
      affiliation: "Linkoping University, Sweden",
      image: "/lovable-uploads/a1b2c3d4-e5f6-7890-abcd-ef1234567890.png"
    },
    {
      name: "Dr. Murat ARSLAN",
      affiliation: "World Peace University, Cyprus",
      image: "/lovable-uploads/f8e7d6c5-b4a3-9281-7069-5a4b3c2d1e0f.png"
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8">
      <h3 className="text-xl font-semibold mb-4 text-white text-center">Invited Speakers</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {speakers.map((speaker, index) => (
          <div key={index} className="text-center">
            <Avatar className="w-20 h-20 mx-auto mb-2">
              <AvatarImage src={speaker.image} alt={speaker.name} />
              <AvatarFallback className="text-sm">
                {speaker.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <h4 className="text-sm font-medium text-white mb-1">{speaker.name}</h4>
            <p className="text-xs text-white/80">{speaker.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvitedSpeakers;
