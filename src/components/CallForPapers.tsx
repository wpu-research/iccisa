
import React from 'react';
import { FileText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CallForPapers = () => {
  // Split the topics into arrays for better rendering
  const topicsArray = [
    [
      "Computational Intelligence Techniques",
      "Neural Networks and Learning",
      "Genetic Algorithms and Genetic Programming",
      "Natural Language and Speech Processing",
      "Nature-Inspired Computation",
      "Differential Evaloations",
      "Deep Learning",
      "Pattern Recognıtıon",
      "Brain Computer Interfaces",
      "Biometrics and Bioınformatıcs",
      "Evolutionary Strategies",
      "Swarm/Collective Intelligence",
      "Evolutionary Programming",
      "Immune Systems",
      "CI for Healthcare and E-health"
    ],
    [
      "Emerging technologies and Cyber Security",
      "Data Mining",
      "Fuzzy Systems",
      "Hybrid CI systems",
      "CI systems for Control and Automation",
      "Remote Sensing",
      "Dynamic and Uncertain Environments",
      "Ensemble Learning",
      "Image and Vision Processing",
      "Artificial Intelligence and Cognitive Modelling",
      "Machine Learning",
      "CI in Vehicles and Transportation Systems",
      "CI techniques for Engineering Solutions",
      "Evolving and Autonomous Learning Systems (EALS)",
      "Evolutionary Computatıon in Schedulıng and Optimisation"
    ],
    [
      "Metaheuristics",
      "Feature Analysis, Selection",
      "CI for Finance and Economics",
      "CI in Educatıons",
      "CI in Internet of Things",
      "CI in Power and Energy Systems",
      "Block chain and Cyptocurrency",
      "Web Intelligence and Semantics",
      "Intelligent Agents",
      "Intelligent Biomedical Data Analysis",
      "Multi-agent System Coordination and Optimization",
      "Multicriteria Decision-Making",
      "Robotic Intelligence and Flying Robots",
      "Unmanned Aeral Whecles and Aircraft Systems",
      "Reinforcement Learning"
    ]
  ];

  return (
    <section id="call-for-papers" className="conference-container">
      <h2 className="section-title flex items-center">
        <FileText className="mr-2" />
        Call for Papers
      </h2>
      
      <div className="mb-8">
        <p className="mb-4">
          The International Conference on Computational Intelligence Systems and Applications is aimed to bring together researchers, engineers and practitioners on the areas of Computational Intelligence, both from theoretical and application perspectives. The conference will provide an exceptional platform to the researchers to share their experiences, exchange their ideas, to meet and discuss their novel solutions, scientific results and methods in solving intriguing problems with other researchers.
        </p>
        <p className="mb-4">
          Contributions describing applications of Computational Intelligence techniques to real-world problems, interdisciplinary research, experimental and/or theoretical studies yielding new insights that advance CI methods are especially encouraged.
        </p>
        <p className="mb-4">
          Papers describing original work are invited in any of the areas listed below. Accepted papers, presented at the conference by one of the authors, will be published in the proceedings of ICCISA with an ISBN. Acceptance will be based on quality, relevance and originality.
        </p>
        <p>
          Considering the current situation of COVID-19, to provide a safe and comfortable academic exchange environment for all participants, ICCISA 2026 has become a hybrid conference which will facilitate our participants through virtual/online presentation option.
        </p>
      </div>
      
      <div>
        <h3 className="subsection-title flex items-center">
          <FileText className="mr-2" size={20} />
          Conference Topics
        </h3>
        
        <p className="mb-4">
          The topics of the conference are given below. Papers may address one or more of the listed sub-topics, but not limited to.
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="topics">
            <AccordionTrigger className="text-conference-700 hover:text-conference-800">
              View All Topics
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topicsArray.map((column, columnIndex) => (
                  <ul key={columnIndex} className="list-disc list-inside space-y-1">
                    {column.map((topic, index) => (
                      <li key={index} className="text-conference-700">{topic}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default CallForPapers;
