
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-ultra border-b border-border/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg"></div>
            <span className="text-xl font-bold font-display">NailAI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium">Tính Năng</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium">Cách Hoạt Động</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium">Đánh Giá</a>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground button-glow rounded-full px-6">
              Bắt Đầu
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

      {isMenuOpen && (
        <div className="md:hidden glass border-t border-border/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" className="text-foreground py-2 px-4 hover:glass-subtle rounded-xl transition-all">Tính Năng</a>
            <a href="#how-it-works" className="text-foreground py-2 px-4 hover:glass-subtle rounded-xl transition-all">Cách Hoạt Động</a>
            <a href="#testimonials" className="text-foreground py-2 px-4 hover:glass-subtle rounded-xl transition-all">Đánh Giá</a>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full button-glow rounded-full">
              Bắt Đầu
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
