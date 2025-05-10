import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 md:py-32 bg-gradient-to-br from-background via-muted to-background"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary"
            >
              Oie, eu sou a Jéssica Oliveira
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Te ajudo a transformar sua prática clínica em um espaço ético,
              crítico e politizado, com olhar decolonial e interseccional.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                <Link to="/intervisao">
                  Quero conhecer as Intervisões Clínicas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Overview Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-16 bg-background"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Como posso te ajudar?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-primary/30">
                  <CardHeader className="items-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-2">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center">
                      Intervisões Clínicas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      Te convido para um espaço coletivo de troca e reflexão,
                      onde todas as abordagens são bem-vindas e a clínica é
                      pensada de forma crítica, humana e socialmente
                      comprometida.
                    </CardDescription>
                    <div className="text-center mt-4">
                      <Button variant="outline" asChild>
                        <Link to="/intervisao">Quero saber mais</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-secondary/30">
                  <CardHeader className="items-center">
                    <div className="p-3 rounded-full bg-secondary/10 mb-2">
                      <BookOpen className="h-10 w-10 text-secondary" />
                    </div>
                    <CardTitle className="text-center">
                      Cursos e Eventos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      Participe das minhas formações e webinários para
                      aprofundar sua prática clínica em temas como
                      interseccionalidade, psicologia decolonial e psicodrama.
                    </CardDescription>
                    <div className="text-center mt-4">
                      <Button variant="outline" asChild>
                        <Link to="/cursos-eventos">Ver Agenda</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-primary/20">
                  <CardHeader className="items-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-2">
                      <Mic className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center">
                      Palestras e Consultoria
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      Levo minha experiência em diversidade, gênero, sexualidade
                      e psicologia crítica para palestras, eventos e
                      consultorias personalizadas.
                    </CardDescription>
                    <div className="text-center mt-4">
                      <Button variant="outline" asChild>
                        <Link to="https://wa.me/55555555555?text=Olá, gostaria de saber mais sobre seus serviços.">Fale comigo</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action / Form Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="py-16 bg-muted"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-background p-8 md:p-12 rounded-xl shadow-2xl">
              <ContactForm
                formTitle="Inscreva-se para Novidades"
                successMessage="Obrigada por se inscrever! Em breve você receberá novidades."
                storageKey="homePageNewsletterSignups"
                buttonText="Quero Receber a Newsletter Entre Margens"
              />
            </div>
          </div>
        </motion.section>

        {/* Testimonial/Quote Section - Placeholder */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="py-16 bg-background"
        >
          <div className="container mx-auto px-4 text-center">
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl italic text-foreground mb-4">
                "Acredito que uma prática psicológica transformadora começa com
                uma escuta atenta às vozes historicamente silenciadas e com um
                compromisso ético de desconstruir opressões. É por isso que eu
                estou aqui."
              </p>
              <cite className="font-semibold text-primary">
                - Jéssica Oliveira
              </cite>
            </blockquote>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default HomePage;
