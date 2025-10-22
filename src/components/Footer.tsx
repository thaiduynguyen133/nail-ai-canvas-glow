
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-subtle py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold font-display gradient-text mb-4">NailAI</h3>
            <p className="text-muted-foreground mb-4">
              Chuyển đổi tiệm nail với công nghệ AI tiên tiến.
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
            <h4 className="font-bold text-lg mb-4">Sản Phẩm</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition">Tính Năng</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Bảng Giá</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Nghiên Cứu Tình Huống</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Đánh Giá</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tài Nguyên</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Trung Tâm Trợ Giúp</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Hướng Dẫn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Hỗ Trợ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Công Ty</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Về Chúng Tôi</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Liên Hệ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Cơ Hội Nghề Nghiệp</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition">Đối Tác</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} NailAI. Đã đăng ký bản quyền.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                Chính Sách Quyền Riêng Tư
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                Điều Khoản Dịch Vụ
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                Chính Sách Cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
