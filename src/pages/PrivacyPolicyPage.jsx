
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Mail, Edit3 } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const sectionVariants = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay } }
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
        <motion.div 
          variants={sectionVariants(0)}
          className="inline-block p-3 mb-4 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg"
        >
          <ShieldCheck className="h-12 w-12 text-primary-foreground" />
        </motion.div>
        <motion.h1 
          variants={sectionVariants(0.1)}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-4"
        >
          Política de Privacidade
        </motion.h1>
        <motion.p 
          variants={sectionVariants(0.2)}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Seu direito à privacidade é fundamental para nós. Entenda como coletamos, usamos e protegemos seus dados.
        </motion.p>
        <motion.p variants={sectionVariants(0.3)} className="text-sm text-muted-foreground mt-2">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </motion.p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8">
        <motion.section variants={sectionVariants(0.4)}>
          <h2 className="flex items-center text-2xl font-semibold text-foreground mb-3">
            <FileText className="h-6 w-6 mr-2 text-primary" />
            1. Finalidade da Coleta de Dados
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Coletamos seus dados pessoais (nome, e-mail, WhatsApp) com o seu consentimento explícito para as seguintes finalidades:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2 pl-4">
            <li>Enviar comunicações sobre nossos conteúdos, intervisões, cursos e eventos.</li>
            <li>Realizar campanhas de marketing personalizadas, incluindo anúncios em plataformas digitais (como Google Ads, Facebook Ads, Instagram Ads).</li>
            <li>Melhorar sua experiência em nosso site e personalizar os conteúdos oferecidos.</li>
            <li>Responder a suas solicitações e entrar em contato quando necessário.</li>
          </ul>
        </motion.section>

        <motion.section variants={sectionVariants(0.5)}>
          <h2 className="flex items-center text-2xl font-semibold text-foreground mb-3">
            <ShieldCheck className="h-6 w-6 mr-2 text-primary" />
            2. Armazenamento e Uso dos Dados
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Seus dados são armazenados de forma segura em plataformas que seguem as melhores práticas de segurança da informação. Utilizamos seus dados exclusivamente para as finalidades descritas nesta política. Não compartilhamos seus dados pessoais com terceiros sem o seu consentimento, exceto quando exigido por lei ou para viabilizar os serviços de marketing digital mencionados (ex: plataformas de anúncios).
          </p>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>
        </motion.section>

        <motion.section variants={sectionVariants(0.6)}>
          <h2 className="flex items-center text-2xl font-semibold text-foreground mb-3">
            <Edit3 className="h-6 w-6 mr-2 text-primary" />
            3. Seus Direitos e Revogação do Consentimento
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Você tem o direito de:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2 pl-4">
            <li>Acessar seus dados pessoais que possuímos.</li>
            <li>Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a Lei Geral de Proteção de Dados (LGPD).</li>
            <li>Solicitar a portabilidade dos seus dados a outro fornecedor de serviço ou produto, mediante requisição expressa.</li>
            <li>Revogar seu consentimento a qualquer momento. A revogação não afetará a legalidade do tratamento de dados realizado antes da sua solicitação.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-2">
            A revogação do consentimento pode ser feita através do link de "descadastro" presente em nossos e-mails ou entrando em contato conosco.
          </p>
        </motion.section>

        <motion.section variants={sectionVariants(0.7)}>
          <h2 className="flex items-center text-2xl font-semibold text-foreground mb-3">
            <Mail className="h-6 w-6 mr-2 text-primary" />
            4. Canal de Contato para Dados Pessoais
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Para exercer seus direitos, revogar seu consentimento, ou para qualquer dúvida sobre esta Política de Privacidade, entre em contato conosco através do e-mail:
          </p>
          <p className="text-primary font-semibold mt-2">
            <a href="mailto:privacidade@jessicaoliveirapsi.com.br" className="hover:underline">privacidade@jessicaoliveirapsi.com.br</a>
          </p>
          <p className="text-muted-foreground leading-relaxed mt-1">
            (Por favor, substitua este e-mail pelo endereço real de contato para questões de privacidade.)
          </p>
        </motion.section>

        <motion.section variants={sectionVariants(0.8)}>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            5. Cookies e Tecnologias Semelhantes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Nosso site pode utilizar cookies e tecnologias semelhantes para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo e anúncios. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
          </p>
        </motion.section>

        <motion.section variants={sectionVariants(0.9)}>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            6. Alterações nesta Política
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como estamos protegendo seus dados. A data da última atualização será sempre indicada no início desta política.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
  