
import React from 'react';
import { CalendarDays, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ImportantDates = () => {
  return (
    <section id="important-dates" className="conference-container">
      <h2 className="section-title flex items-center">
        <CalendarDays className="mr-2" />
        Important Dates
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-conference-600">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-conference-700">
              <CheckCircle className="mr-2" size={20} />
              Paper Submission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="mr-2 text-conference-600" size={16} />
              <p className="font-medium">September 20, 2025</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-conference-600">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-conference-700">
              <CheckCircle className="mr-2" size={20} />
              Authors Notification
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="mr-2 text-conference-600" size={16} />
              <p className="font-medium">October 20, 2025</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-conference-600">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-conference-700">
              <CheckCircle className="mr-2" size={20} />
              Camera Ready and Registration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="mr-2 text-conference-600" size={16} />
              <p className="font-medium">January 10, 2026</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ImportantDates;
