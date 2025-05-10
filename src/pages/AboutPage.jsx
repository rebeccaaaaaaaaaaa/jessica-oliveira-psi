import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
const AboutPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const listItemVariants = (index) => ({
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: index * 0.1 + 0.4 },
    },
  });

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="container mx-auto px-4 py-12 md:py-20"
    >
      <header className="text-center mb-12 md:mb-16">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-4"
        >
          Sobre Mim
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Uma trajetória dedicada à escuta, à transformação social e à
          construção de uma psicologia mais justa e consciente.
        </motion.p>
      </header>

      <section className="mb-12 md:mb-16">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <motion.div variants={itemVariants} className="md:col-span-2">
            <img
              className="rounded-lg shadow-xl object-cover w-full h-auto md:h-[auto]"
              alt="Psicóloga Jéssica Oliveira"
              src="1.jpg"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Minha Jornada
            </h2>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Oie, eu sou a Jéssica Oliveira. A minha paixão é conectar a
              psicologia com as urgências sociais do nosso tempo.
            </p>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Eu acredito que a prática clínica pode – e deve – ser um espaço de
              transformação, tanto para quem chega em busca de cuidado, quanto
              para quem oferece essa escuta.
            </p>
            <p className="text-muted-foreground  mb-3 leading-relaxed">
              Minha caminhada começou na História, passou pela Filosofia e
              encontrou morada na Psicologia, especialmente no Psicodrama, que
              me trouxe ferramentas vivas para olhar para as dinâmicas humanas e
              sociais com mais profundidade.
            </p>
            <p className="text-muted-foreground  mb-3 leading-relaxed">
              Eu trabalho com uma abordagem interseccional e decolonial, sempre
              buscando desconstruir narrativas opressoras e construir, junto com
              quem caminha comigo, novos jeitos de existir com mais ética,
              crítica e liberdade.
            </p>

            <p className="text-muted-foreground  mb-3 leading-relaxed">
              Minha atuação vai além da clínica. Eu também sou militante
              feminista, já estive na política institucional, e hoje me dedico à
              formação de psicólogas(os) que querem fazer da sua prática um
              compromisso real com a justiça social.
            </p>

            <p className="text-muted-foreground  mb-3 leading-relaxed">
              Atualmente, como mestranda em Psicologia e Sociedade pela UNESP,
              sigo estudando e me atualizando para trazer pra você o que há de
              mais relevante e transformador nessa área.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Seja bem-vinda(o) ao meu espaço. Vamos construir essa caminhada
              juntas(os)?
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mb-12 md:mb-16">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <motion.div variants={itemVariants} className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Minha Formação Acadêmica e Profissional
            </h2>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Minha formação começou na História, passou pela Filosofia e
              encontrou morada na Psicologia.
            </p>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Ao longo dessa jornada, eu me especializei em psicodrama, que é
              hoje uma das bases da minha atuação clínica e formativa.
            </p>
            <p className="text-muted-foreground  mb-3 leading-relaxed">
              Eu também me aprofundei em:
            </p>
            <ul className="list-disc list-inside">
              <li>Clínica da Sexualidade </li>
              <li>Diversidade e Inclusão nas Organizações</li>
              <li>
                Psicologia e Sociedade, no mestrado que atualmente curso na
                UNESP de Assis
              </li>
            </ul>
            <p className="text-muted-foreground  mb-3 leading-relaxed">
              Cada uma dessas experiências me ajuda a construir um olhar ético,
              crítico e socialmente comprometido sobre a clínica.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-2 hidden lg:block">
            <img
              className="rounded-lg shadow-xl object-cover w-full h-auto md:h-[auto]"
              alt="Psicóloga Jéssica Oliveira"
              src="2.jpg"
            />
          </motion.div>
        </div>
      </section>

      <section className="mb-12 md:mb-16">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <motion.div variants={itemVariants} className="md:col-span-2 hidden lg:block">
            <img
              className="rounded-lg shadow-xl object-cover w-full h-auto md:h-[auto]"
              alt="Psicóloga Jéssica Oliveira"
              src="3.jpg"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Meu Ativismo e Engajamento Político
            </h2>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Minha atuação vai além do consultório. Eu sou uma militante
              feminista com uma longa trajetória na luta pelos direitos das
              mulheres e pela justiça social.
            </p>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Já estive na política institucional como vereadora suplente, onde
              atuei para aprovar projetos importantes para a vida das mulheres
              da minha cidade.
            </p>
            <p className="text-muted-foreground  mb-3 leading-relaxed">
              Acredito que a psicologia precisa estar em diálogo constante com
              as lutas sociais, porque não existe clínica neutra. Toda prática é
              uma escolha ética e política.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mb-12 md:mb-16">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <motion.div variants={itemVariants} className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Palestras e Consultoria em Diversidade, Gênero, Sexualidade e
              Psicologia Crítica
            </h2>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Além da clínica e da formação de psicólogas(os), eu também levo
              minha experiência para organizações, instituições e eventos que
              querem aprofundar discussões sobre diversidade, gênero,
              sexualidade e psicologia crítica.
            </p>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Eu ofereço:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Palestras em temas de diversidade, gênero, sexualidade e saúde
                mental com olhar crítico e interseccional.
              </li>
              <li>
                Consultorias personalizadas para organizações que querem
                promover ambientes mais inclusivos, éticos e equitativos.
              </li>
              <li>
                Facilitação de workshops e treinamentos, com dinâmicas vivas e
                reflexões profundas.
              </li>
            </ul>
            <p className="text-muted-foreground  mb-3 leading-relaxed">
              Quer levar esse diálogo para o seu time, evento ou organização? Me
              chama pra gente conversar.
            </p>
            <Button variant="outline" asChild className="hidden lg:inline-flex">
              <Link to="/contato">
                <MessageSquare className="mr-2 h-4 w-4" /> Fale Comigo
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-2 hidden lg:block">
            <img
              className="rounded-lg shadow-xl object-cover w-full h-auto md:h-[auto]"
              alt="Psicóloga Jéssica Oliveira"
              src="4.jpg"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
