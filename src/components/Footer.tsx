
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold font-display gradient-text mb-4">NailAI</h3>
            <p className="text-muted-foreground mb-4">
              Transforming nail salons with cutting-edge AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Reviews</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Tutorials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Partners</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} NailAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
