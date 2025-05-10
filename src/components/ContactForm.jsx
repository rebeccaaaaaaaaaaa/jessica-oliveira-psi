
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Nome completo deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  whatsapp: z.string().min(10, { message: "WhatsApp deve ter pelo menos 10 dígitos." }).regex(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{2,3})[-. )]*(\d{3,4})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, { message: "Formato de WhatsApp inválido."}),
  consent: z.boolean().refine(value => value === true, {
    message: "Você deve concordar com a política de privacidade.",
  }),
});

const ContactForm = ({ formTitle, successMessage, storageKey, buttonText }) => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      whatsapp: '',
      consent: false,
    },
  });

  function onSubmit(values) {
    try {
      const existingEntries = JSON.parse(localStorage.getItem(storageKey) || '[]');
      existingEntries.push({...values, submittedAt: new Date().toISOString()});
      localStorage.setItem(storageKey, JSON.stringify(existingEntries));

      toast({
        title: 'Sucesso!',
        description: successMessage || 'Seu formulário foi enviado.',
        variant: 'default',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Erro!',
        description: 'Houve um problema ao enviar seu formulário. Tente novamente.',
        variant: 'destructive',
      });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {formTitle && <h2 className="text-2xl font-semibold text-center mb-6">{formTitle}</h2>}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seuemail@exemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp (com DDD)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(XX) XXXXX-XXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Consentimento
                  </FormLabel>
                  <FormDescription className="text-xs">
                    Li e concordo com a <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Política de Privacidade</a> e autorizo o uso dos meus dados para receber comunicações por e-mail e WhatsApp sobre conteúdos, intervisões, cursos, eventos e campanhas personalizadas de marketing, incluindo anúncios em plataformas digitais. Estou ciente de que posso revogar meu consentimento a qualquer momento.
                  </FormDescription>
                   <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
           {buttonText}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
  