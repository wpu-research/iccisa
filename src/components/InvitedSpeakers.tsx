
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const InvitedSpeakers = () => {
  const speakers = [
    {
      name: "Prof. Dr. Fadi Al-Trujman",
      affiliation: "Near East University, Northern Cyprus",
      image: "/lovable-uploads/0c85e8a7-b5e8-425b-b9fb-fe87f7b02e4e.png"
    },
    {
      name: "Assoc. Prof. Dr. Mary Agoyi", 
      affiliation: "Cyprus International University, Northern Cyprus",
      image: "/lovable-uploads/1a14cc02-c95c-4bdf-a2d1-44e4a19e67f1.png"
    },
    {
      name: "Assoc. Prof. Dr. John Bush Idoko",
      affiliation: "Near East University, Northern Cyprus", 
      image: "/lovable-uploads/b41f1eaa-a8b4-4d1b-9d2c-f96f73c58e20.png"
    },
    {
      name: "Dr. Abdulkader Helwan",
      affiliation: "Linkoping University, Sweden",
      image: "/lovable-uploads/e54825c4-e7e0-4cb2-b7cd-fdb3f7b6e1c1.png"
    },
    {
      name: "Dr. Murat ARSLAN",
      affiliation: "World Peace University, Cyprus",
      image: "/lovable-uploads/49dc3043-0d12-41c5-bab7-bf54b0b42e1c.png"
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
