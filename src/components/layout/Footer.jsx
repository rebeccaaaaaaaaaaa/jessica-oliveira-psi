import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/psico.jessicaoliveira/" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@psico.jessicaoliveira" },
  ];

  const footerNavLinks = [
    { name: "Política de Privacidade", path: "/politica-de-privacidade" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-muted text-muted-foreground"
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Jéssica Oliveira
            </h3>
            <p className="text-sm">
              Eu sou psicóloga clínica, especialista em práticas
              interseccionais, psicodrama e pensamento decolonial. Vamos
              construir juntas(os) uma psicologia mais ética e politizada?
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Navegação Rápida
            </h3>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Conecte-se
            </h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
            {/* <div className="space-y-1 text-sm">
              <a
                href="mailto:jessica.oliveira.psi@example.com"
                className="flex items-center hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />{" "}
                jessica.oliveira.psi@example.com
              </a>
              <a
                href="https://wa.me/5517991912983"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" /> (XX) XXXXX-XXXX
              </a>
            </div> */}
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm">
          <p>
            &copy; {currentYear} Jéssica Oliveira. Todos os direitos reservados.
          </p>
          <p className="mt-1">
            Desenvolvido com <span className="text-red-500">❤</span> por Umbali
            Estratégia
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
