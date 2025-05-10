import React from "react";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Users, MessageCircle, Brain, Drama } from "lucide-react";

const IntervisionPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const featureVariants = (index) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.15 + 0.3 },
    },
  });

  const features = [
    {
      icon: Brain,
      title: "Pensamento Decolonial",
      description:
        "Na minha intervisão, a gente rompe com os saberes que nos ensinaram a partir de uma lógica colonial e eurocêntrica. Eu trago o pensamento decolonial como base pra gente valorizar os saberes do Sul Global e trazer essas epistemologias pra dentro da clínica.",
    },
    {
      icon: Users,
      title: "Psicologia Interseccional",
      description:
        "A minha proposta é olhar de verdade para como gênero, raça, classe, deficiência e outras opressões se entrelaçam na vida de cada pessoa. Juntas(os), a gente aprende a escutar esses atravessamentos na clínica e a intervir de forma mais ética e comprometida com quem chega até a gente. ",
    },
    {
      icon: MessageCircle,
      title: "Método Freiriano",
      description:
        "Eu me inspiro em Paulo Freire para construir um espaço de diálogo horizontal e crítico. Aqui, a gente não busca respostas prontas. A gente constrói o conhecimento juntas(os), de forma viva e coletiva, a partir da experiência de cada uma, cada um.",
    },
    {
      icon: Drama,
      title: "Psicodrama",
      description:
        "O psicodrama é uma das ferramentas que eu uso pra dar corpo ao que está silenciado. Ele nos permite vivenciar, dramatizar e transformar as cenas da nossa clínica e da nossa vida, abrindo novas possibilidades de olhar e de agir.",
    },
  ];

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
          Intervisão Clínica Transformadora
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Eu acredito em uma intervisão clínica que vai muito além da supervisão
          tradicional. Pra mim, a intervisão é um espaço analítico, coletivo e
          humano, onde cada pessoa contribui com o que tem de mais valioso: suas
          experiências, suas dúvidas e seu desejo de crescer na prática clínica.
        </motion.p>
      </header>

      <section className="mb-12 md:mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={itemVariants}>
            <img
              className="rounded-lg shadow-xl object-cover w-full h-auto md:h-[400px]"
              alt="Grupo de psicólogos em intervisão"
              src="5.jpg"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              O que é Intervisão Clínica?
            </h2>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              A intervisão é um espaço de troca horizontal, onde psicólogas(os)
              de todas as abordagens se encontram para refletir e construir
              juntas(os) práticas mais éticas, críticas e socialmente
              comprometidas.
            </p>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Nos meus grupos, a gente se apoia em referenciais como o
              pensamento decolonial, a psicologia interseccional, o método
              freiriano e o psicodrama. Tudo isso pra que você possa qualificar
              ainda mais a sua escuta e as suas intervenções, olhando com
              coragem para as desigualdades que atravessam o sofrimento
              psíquico.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aqui, todas as abordagens são bem-vindas. Eu acredito na riqueza
              da diversidade de olhares pra construir uma psicologia mais
              potente, viva e engajada com a transformação social.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          Pilares da Nossa Intervisão
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/20"
              custom={index}
              variants={featureVariants(index)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16 rounded-lg">
        <div className="max-w-2xl mx-auto px-4">
          <ContactForm
            formTitle="Quer caminhar comigo na intervisão clínica? Deixa aqui seu nome e eu te aviso sobre as próximas turmas."
            successMessage="Seu interesse foi registrado! Entraremos em contato em breve com mais informações."
            storageKey="intervisionInterest"
            buttonText="Quero Participar da Intervisão 
"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default IntervisionPage;
