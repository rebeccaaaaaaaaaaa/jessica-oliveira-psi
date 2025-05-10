
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Construction } from 'lucide-react';
import { motion } from 'framer-motion';

const PlaceholderPage = ({ pageName, description }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4 bg-background">
      <motion.div
        initial={{ rotate: -15, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 100, delay: 0.1 }}
        className="p-6 bg-secondary/10 rounded-full mb-8"
      >
        <Construction className="h-24 w-24 text-secondary" />
      </motion.div>
      
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-foreground mb-4"
      >
        {pageName}
      </motion.h1>
      
      <motion.p 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg text-muted-foreground mb-10 max-w-md"
      >
        {description}
      </motion.p>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link to="/">Quero voltar para o início</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default PlaceholderPage;
  