
import React from 'react';
import { Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const CommitteeSection = () => {
  const steeringCommittee = [
    "Prof.Dr. Burhan Turksen, University of Toronto",
    "Prof.Dr. Okyay Kaynak, Bogazici University",
    "Prof.Dr. Rafik Aliyev, Joint MBA Program, Georgia State University, USA, Azerbaijan State Oil and Industry University",
    "Prof.Dr. Rahib Abiyev, Near East University",
    "Assist.Prof.Dr. John Bush Idoko, Near East University",
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
    "Assist. Prof. Samuel Nii Tackie, Near East University"
  ];

  const organizingCommittee = {
    chairs: [
      "Prof.Dr. Rahib Abiyev",
      "Assist.Prof.Dr. John Bush Idoko",
      "Prof.Dr. Murat ARSLAN"
    ],
    members: [
      "Ahmet Ilhan",
      "Boran Sekeroglu",
      "Hamit Altiparmak",
      "Kaan Uyar",
      "Umit Ilhan",
      "Mansur Mohammed",
      "Dr. Abedelkader Helwan, Health, Medicine and Caring Sciences (HMV), Linkoping",
      "Dr. Mohammad Maitah, Robotics and Artificial Intelligence Engineering, Applied Science University, Jordan",
      "Ebenezer Olaniyi (PhD Candidate)",
      "Cemal Kavalcioglu"
    ]
  };

  return (
    <section id="committee" className="bg-conference-50 py-16">
      <div className="conference-container">
        <h2 className="section-title flex items-center">
          <Users className="mr-2" />
          Committees
        </h2>
        
        <Tabs defaultValue="steering" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="steering">Steering Committee</TabsTrigger>
            <TabsTrigger value="organizing">Organizing Committee</TabsTrigger>
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
        </Tabs>
      </div>
    </section>
  );
};

export default CommitteeSection;
