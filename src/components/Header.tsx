import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              KKTEK<span className="text-accent">GROUP</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border shadow-card">
                <DropdownMenuItem>Software Engineering</DropdownMenuItem>
                <DropdownMenuItem>Technology Consulting</DropdownMenuItem>
                <DropdownMenuItem>Cloud Solutions</DropdownMenuItem>
                <DropdownMenuItem>Digital Transformation</DropdownMenuItem>
                <DropdownMenuItem>Cybersecurity</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <div className="space-y-2 pl-4">
                <p className="text-sm font-medium text-muted-foreground">Services</p>
                <a href="#services" className="block text-foreground hover:text-primary transition-colors">
                  Software Engineering
                </a>
                <a href="#services" className="block text-foreground hover:text-primary transition-colors">
                  Technology Consulting
                </a>
                <a href="#services" className="block text-foreground hover:text-primary transition-colors">
                  Cloud Solutions
                </a>
                <a href="#services" className="block text-foreground hover:text-primary transition-colors">
                  Digital Transformation
                </a>
                <a href="#services" className="block text-foreground hover:text-primary transition-colors">
                  Cybersecurity
                </a>
              </div>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;