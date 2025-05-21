
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              <span className="gradient-text">AI-Powered</span> Solution for Nail Salons
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Transform your nail salon with cutting-edge AI technology. Offer virtual try-ons, personalized designs, and streamline your operations with our intelligent solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-nail-500 to-purple-500 hover:from-nail-600 hover:to-purple-600 text-white py-6 px-8 text-lg button-glow">
                Request Demo
              </Button>
              <Button variant="outline" className="border-2 border-nail-400 text-foreground hover:bg-nail-50 py-6 px-8 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-nail-400/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-purple-100 to-nail-100 p-4 rounded-2xl shadow-xl animate-float">
              <div className="bg-white rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1000&auto=format&fit=crop"
                  alt="AI Nail Design Preview"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-3 w-24 bg-nail-200 rounded-full"></div>
                    <div className="h-3 w-12 bg-purple-200 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="aspect-square rounded-lg bg-gradient-to-br from-nail-200 to-purple-200"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
