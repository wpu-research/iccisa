
import React from 'react';
import { Info } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-conference-50 py-16">
      <div className="conference-container">
        <h2 className="section-title flex items-center">
          <Info className="mr-2" />
          Welcome Message
        </h2>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            On behalf of the Organising Committee of ICCISA 2026, it is our honour to host and organize this prestigious international event, the 1st International Conference on Computational Intelligence Systems and Applications (ICCISA-2026).
          </p>
          
          <p className="mb-4">
            It is our great honour to invite you to submit your researches to the ICCISA-2026. We hope that this conference will likewise lead to effective, fruitful discussions and collaborations between participants from different disciplines, institutes and sectors from all over the world. Conference proceedings will be published on the website after reviewing the manuscripts and will be submitted to Scopus. High-quality papers will be considered, in expanded form, for possible publication in specific reputable international journals mentioned on the conference website.
          </p>
          
          <p className="mb-4">
            We look forward to contributing to the high-quality research results that will be presented during the conference.
          </p>
          
          <p className="mb-4">
            We look forward to welcoming you.
          </p>
          
          <p className="font-semibold">
            Sincerely,<br />
            Rahib H. Abiyev<br />
            John I. Bush
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
