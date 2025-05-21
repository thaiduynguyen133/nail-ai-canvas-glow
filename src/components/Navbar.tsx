
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 py-4 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold font-display gradient-text">NailAI</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition">Features</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition">How It Works</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">Testimonials</a>
            <Button className="bg-gradient-to-r from-nail-500 to-purple-500 hover:from-nail-600 hover:to-purple-600 button-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" className="text-foreground py-2 px-4 hover:bg-muted rounded-md">Features</a>
            <a href="#how-it-works" className="text-foreground py-2 px-4 hover:bg-muted rounded-md">How It Works</a>
            <a href="#testimonials" className="text-foreground py-2 px-4 hover:bg-muted rounded-md">Testimonials</a>
            <Button className="bg-gradient-to-r from-nail-500 to-purple-500 hover:from-nail-600 hover:to-purple-600 w-full button-glow">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
