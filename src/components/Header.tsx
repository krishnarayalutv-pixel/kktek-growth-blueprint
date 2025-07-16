import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm shadow-sm border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
           <a href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center overflow-hidden">
    <img src="/logo.png" alt="KKTEK Logo" className="object-contain w-8 h-8" />
  </div>
  <span className="text-2xl font-bold text-primary font-space-grotesk tracking-tight">
    KKTEK<span className="text-accent">GROUP</span>
  </span>
</a>

          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                  About Us
                </a>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-4 bg-background shadow-lg border border-border rounded-lg backdrop-blur-sm">
                    <div className="grid gap-4">
                      {/* Software & IT Group */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-sm border-b pb-2">Software & IT</h4>
                        <div className="space-y-1">
                          <a href="/services" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded transition-colors">
                            Software Development
                          </a>
                          <a href="/services" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded transition-colors">
                            Cloud Solutions
                          </a>
                          <a href="/services" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded transition-colors">
                            Automation Testing
                          </a>
                          <a href="/services" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded transition-colors">
                            Software Maintenance
                          </a>
                        </div>
                      </div>
                      
                      {/* Other Services */}
                      <div className="space-y-1 border-t pt-2">
                        <a href="/services" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded transition-colors">
                          BPO
                        </a>
                        <a href="/services" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded transition-colors">
                          Staffing
                        </a>
                        <a href="/services" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded transition-colors">
                          Consulting
                        </a>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                  Contact Us
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
          <div className="md:hidden border-t bg-background/95 backdrop-blur-sm border-border py-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Services</p>
                <div className="pl-4 space-y-1">
                  <p className="text-xs font-medium text-primary">Software & IT</p>
                  <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors pl-2">
                    Software Development
                  </a>
                  <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors pl-2">
                    Cloud Solutions
                  </a>
                  <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors pl-2">
                    Automation Testing
                  </a>
                  <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors pl-2">
                    Software Maintenance
                  </a>
                  <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors mt-2">
                    BPO
                  </a>
                  <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Staffing
                  </a>
                  <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Consulting
                  </a>
                </div>
              </div>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
