
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-nail-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 lg:p-16 relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
                Ready to Transform Your Nail Salon?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Join hundreds of successful nail salons using our AI technology to increase revenue, improve client satisfaction, and streamline operations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-nail-600 hover:bg-nail-50 py-6 px-8 text-lg">
                  Schedule a Demo
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 py-6 px-8 text-lg">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
