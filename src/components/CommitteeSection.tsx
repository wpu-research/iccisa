
import React from 'react';
import { Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const CommitteeSection = () => {
  const steeringCommittee = [
    "Prof.Dr. Burhan Turksen, University of Toronto",
    "Prof.Dr. Okyay Kaynak, Bogazici University",
    "Prof.Dr. Rafik Aliyev, Joint MBA Program, Georgia State University, USA, Azerbaijan State Oil and Industry University",
    "Prof.Dr. Rahib Abiyev, Near East University",
    "Assoc. Prof. Dr. John Bush Idoko, Northern Cyprus",
    "Prof.Dr. Guangming Xie, Peking University, China",
    "Prof.Dr. Abedallah Rababah, United Arab Emirates University, United Arab Emirates",
    "Prof.Dr. Francesca Fallucchi, Università degli Studi Guglielmo Marconi, Italy",
    "Assoc. Professor Jianxin Li, PhD, Deakin University School of Information Technology - Burwood Campus, Burwood, Australia",
    "Prof.Dr. Thierry Denoeux, PhD, University of Applied Sciences for Technology Compiegne, Compiègne, France",
    "Dr. Hamido Fujita, Ph.D, Iwate Prefectural University, Iwate, Japan",
    "Kohei Arai - Saga University, Japan",
    "Prof. Dr. Karuppanan Balasubramanian, Lefke Europa University",
    "Maria De Marsico, Sapienza Università di Roma, Italy",
    "Dr. G. K. D. Prasanna Venkatesan, Dean, Faculty of Engineering, Karpagam Academy of Higher Education",
    "Dr. R. Santhosh, Professor & Head, Department of Computer Science and Engineering, Faculty of Engineering, Karpagam Academy of Higher Education",
    "Achraf Jabeur Telmoudi, Tunisia (Chair)",
    "Prof.Dr. Asaf Varol Maltepe University",
    "Prof.Dr. Fakhreddin Sadikoglu, Near East University",
    "Prof.Dr. Şenol Brktaş, Near East University",
    "Prof.Dr. Hasan Demirel, Eastern Mediterenian University",
    "Prof.Dr. Fadı Al-Trujman, Near East University",
    "Prof.Dr. Bulent Bilgihan, Near East University",
    "Mary Agoyi, School of Applied Sciences, Cyprus International",
    "Erdal Erdal Kayacan, Aarhus University, Denmark",
    "Assoc. Prof. Dr. Samuel NilTackie, Northern Cyprus"
  ];

  const organizingCommittee = {
    chairs: [
      "Prof.Dr. Rahib Abiyev",  
      "Assoc.Prof.Dr. John Bush Idoko"
    ],
    members: [
      "Dr. Murat ARSLAN",
      "Ahmet Ilhan",
      "Boran Sekeroglu",
      "Hamit Altiparmak",
      "Kaan Uyar",
      "Umit Ilhan",
      "Mansur Mohammed",
      "Dr. Abedelkader Helwan, Health, Medicine and Caring Sciences (HMV), Linkoping",
      "Dr. Mohammad Maitah, Robotics and Artificial Intelligence Engineering, Applied Science University, Jordan",
      "Ebenezer Olaniyi (PhD Candidate)",
      "Cemal Kavalcioglu",
      "Bartholomew Idoko, Nigeria"
    ]
  };

  const invitedSpeakers = [
    {
      name: "Prof. Dr. Fadi Al-Trujman",
      affiliation: "Near East University, Northern Cyprus",
      image: "/lovable-uploads/f7a41ce1-e092-494f-adb9-dd068a1fab96.png"
    },
    {
      name: "Assoc. Prof. Dr. Mary Agoyi",
      affiliation: "Cyprus International University, Northern Cyprus",
      image: "/lovable-uploads/248fe408-a3ab-49d0-871e-5b14c2a92f04.png"
    },
    {
      name: "Assoc. Prof. Dr. John Bush Idoko",
      affiliation: "Near East University, Northern Cyprus",
      image: "/lovable-uploads/8d2f29c0-ceb0-4d42-835e-110c35d58da7.png"
    },
    {
      name: "Dr. Abdulkader Helwan",
      affiliation: "Linkoping University, Sweden",
      image: "/lovable-uploads/dc8b0a86-690b-4eab-a7ed-ecba7d16d541.png"
    },
    {
      name: "Dr. Murat ARSLAN",
      affiliation: "World Peace University, Northern Cyprus",
      image: "/lovable-uploads/c9d3a17e-5d07-4197-b6d5-1252e941bb26.png"
    }
  ];

  return (
    <section id="committee" className="bg-conference-50 py-16">
      <div className="conference-container">
        <h2 className="section-title flex items-center">
          <Users className="mr-2" />
          Committees
        </h2>
        
        <Tabs defaultValue="steering" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="steering">Steering Committee</TabsTrigger>
            <TabsTrigger value="organizing">Organizing Committee</TabsTrigger>
            <TabsTrigger value="speakers">Invited Speakers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="steering">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {steeringCommittee.map((member, index) => (
                    <li key={index} className="pb-2 border-b border-gray-100 last:border-0">
                      {member}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="organizing">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4 text-conference-700">Chairs</h3>
                <ul className="space-y-2 mb-6">
                  {organizingCommittee.chairs.map((chair, index) => (
                    <li key={index} className="pb-2 border-b border-gray-100 last:border-0">
                      {chair}
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-bold text-lg mb-4 text-conference-700">Members</h3>
                <ul className="space-y-2">
                  {organizingCommittee.members.map((member, index) => (
                    <li key={index} className="pb-2 border-b border-gray-100 last:border-0">
                      {member}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="speakers">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {invitedSpeakers.map((speaker, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={speaker.image} alt={speaker.name} />
                        <AvatarFallback>{speaker.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-conference-700">{speaker.name}</h4>
                        <p className="text-sm text-gray-600">{speaker.affiliation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CommitteeSection;
