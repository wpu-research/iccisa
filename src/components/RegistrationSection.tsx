
import React from 'react';
import { CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RegistrationSection = () => {
  return (
    <section id="registration" className="bg-conference-50 py-16">
      <div className="conference-container">
        <h2 className="section-title flex items-center">
          <CreditCard className="mr-2" />
          Registration
        </h2>
        
        <div className="mb-8">
          <p className="text-lg mb-6">
            Registration for ICCISA 2026 will be open soon. Payment details are provided below for your reference.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-conference-700">Turkish Lira</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">IŞ Bank</p>
                <p className="mb-2">IBAN: TR390006400000168070181394</p>
                <p>ICCISA 2026</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-conference-700">Euro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">IŞ Bank</p>
                <p className="mb-2">IBAN: TR660006400000268070235417</p>
                <p>ICCISA 2026</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h3 className="subsection-title">Visa Information</h3>
          <p className="mb-4">
            There are many countries that do not require a separate visa to visit North Cyprus. Please check if you need to apply for a visa to travel to North Cyprus.
          </p>
          <p className="mb-4">
            Attendees from countries that require a visa for entry are reminded that the process of obtaining a visa may take approximately 3 weeks time under normal circumstances. Please email <a href="mailto:iccisa@neu.edu.tr" className="text-conference-600 hover:text-conference-800 underline">iccisa@neu.edu.tr</a> to request a visa invitation letter.
          </p>
          <p className="mb-4">
            Obtaining a Visa Support Letter from ICCISA 2026 Conference will not guarantee that your visa application will be approved. The letter is merely supplementary information that explains a visa applicant's intended purpose of travel.
          </p>
          <p>
            For security purposes, the conference has policy for issuing official Visa Support Letters as follows:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
            <li>Visa Support Letters will be issued only after you have successfully registered and paid for your conference.</li>
            <li>Visa Support Letters can only be issued for the person registered to attend the conference in form of participant, author, chair and speaker. Unfortunately we cannot issue visa Support Letters for guests of participants.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
