
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Capture',
    description: "Our AI scans and captures the unique shape of each client's nails using your salon's tablet or device."
  },
  {
    number: '02',
    title: 'Design',
    description: "Clients can browse thousands of designs or create custom looks that the AI will virtually apply to their nails."
  },
  {
    number: '03',
    title: 'Preview',
    description: "See the final result in realistic 3D before any work begins, ensuring client satisfaction."
  },
  {
    number: '04',
    title: 'Apply',
    description: "Your nail technicians receive precise design specifications to bring the virtual design to reality."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our seamless process brings AI technology to your nail salon with minimal disruption
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-nail-200 via-purple-300 to-nail-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nail-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
