import React from 'react';
import { FileSignature, CheckSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SubmissionSection = () => {
  return (
    <section id="submission" className="conference-container">
      <h2 className="section-title flex items-center">
        <FileSignature className="mr-2" />
        Conference Proceedings and Paper Submission
      </h2>
      
      <p className="mb-6">
        The conference proceedings will be published in Procedia Computer Science.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-conference-700">Paper Types</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Your submitted work can either be a full-length or a short paper:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckSquare className="mr-2 text-conference-600 mt-1 flex-shrink-0" size={18} />
                <span>Full-length papers are limited to 10 pages and present your work.</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="mr-2 text-conference-600 mt-1 flex-shrink-0" size={18} />
                <span>Short papers are limited to 7 pages and contain intermediary results that might not have been extensively evaluated.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-conference-700">Paper Submission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The full-length papers are to be submitted to Conference through email <a href="mailto:iccisa@neu.edu.tr" className="text-conference-600 hover:text-conference-800 underline">iccisa@neu.edu.tr</a>
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckSquare className="mr-2 text-conference-600 mt-1 flex-shrink-0" size={18} />
                <span>Please submit your papers as PDF files.</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="mr-2 text-conference-600 mt-1 flex-shrink-0" size={18} />
                <span>Accepted papers will need to provide their source files, as either Word or Latex zipped projects along with the final PDF.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-conference-700">Paper Formatting</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Please follow the instructions for authors on the website of the Lecture Notes in Networks and Systems Series.
            </p>
            <p>
              You can use either the word or latex templates to produce your PDF. For your convenience, you can find the latex template for articles on the conference website.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-conference-700">Originality and Copyright</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              All submitted work should be original; not previously or currently submitted for publication elsewhere.
            </p>
            <p>
              Authors will also need to sign the copyright transfer form provided by our publisher.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <h3 className="subsection-title">Indexing</h3>
        <p>
          Indexed by SCOPUS. All books published in the series are submitted for consideration in Web of Science.
        </p>
      </div>
    </section>
  );
};

export default SubmissionSection;
