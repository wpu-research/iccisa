
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImportantDates from '@/components/ImportantDates';
import AboutSection from '@/components/AboutSection';
import CommitteeSection from '@/components/CommitteeSection';
import CallForPapers from '@/components/CallForPapers';
import SubmissionSection from '@/components/SubmissionSection';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImportantDates />
        <AboutSection />
        <CommitteeSection />
        <CallForPapers />
        <SubmissionSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
