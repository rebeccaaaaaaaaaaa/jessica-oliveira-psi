
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookUser, Home, Info, MessageSquare, Newspaper, Users, Mail, X, Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Início', path: '/', icon: Home },
  { name: 'Sobre Jéssica', path: '/sobre', icon: Info },
  { name: 'Intervisão Clínica', path: '/intervisao', icon: Users },
  { name: 'Cursos e Eventos', path: '/cursos-eventos', icon: BookUser },
  { name: 'Blog', path: '/blog', icon: Newspaper },
  { name: 'Contato', path: '/contato', icon: MessageSquare },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="Logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.slice(0, 5).map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavLink to={item.path} className={({ isActive }) => cn(navigationMenuTriggerStyle(), isActive && 'bg-accent text-accent-foreground')}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" asChild className="hidden lg:inline-flex">
           <a
              href={`https://wa.me/5517991912983?text=Olá, gostaria de saber mais sobre seus serviços.`}
              target="_blank"
              rel="noopener noreferrer"
              title="Fale conosco pelo WhatsApp"
              className="bg-green-500 hover:bg-green-600 hover:text-white text-white transition-all duration-300 flex items-center justify-center"
            >
              Fale Comigo
            </a>
          </Button>
          <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden" variant="ghost" size="icon">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t bg-background"
        >
          <nav className="flex flex-col space-y-1 p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                    isActive ? 'bg-accent text-accent-foreground' : 'text-foreground'
                  )
                }
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </NavLink>
            ))}
             <Button variant="outline" asChild className="w-full mt-2">
              <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)}>
                <MessageSquare className="mr-2 h-4 w-4" /> Fale Comigo
              </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
