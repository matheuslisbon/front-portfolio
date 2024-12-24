import React, { useState } from 'react'
import { Input } from '../ui/input'
import emailjs from '@emailjs/browser'
import { Textarea } from '../ui/textarea';
import Image from 'next/image';
import { useLanguage } from "@/context/language.context";
interface FormType {
  email: string;
  message: string;
}
interface ChangeEvent {
  target: {
    name: string;
    value: string;
  };
}
type Language = 'en' | 'pt';

export default function Contact() {
  const [formData, setFormData] = useState<FormType>({
    email: '',
    message: '',
  });
  const { language } = useLanguage() as { language: Language; toggleLanguage: () => void };

  const componentData = {
    en: {
      title: 'Contact',
      emailPlaceholder: 'Type your email',
      messageSuccess: 'Message sent successfully!',
      messagePlaceholder: 'Type your message',
      messageError: 'An error occurred. Try again later.',
      validationMessage: 'Fill in all fields'
    },
    pt: {
      title: 'Contato',
      messagePlaceholder: 'Digite sua mensagem',
      emailPlaceholder: 'Digite seu email',
      messageSuccess: 'Mensagem enviada com sucesso!',
      messageError: 'Ocorreu um erro. Tente novamente mais tarde.',
      validationMessage: 'Preencha todos os campos'
    }
  }


  const handleChange = (e: ChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      alert(componentData[language].validationMessage);
      return;
    }
    const serviceId = 'service_kqs2tkl';
    const templateId = 'template_rhaxzgn';
    const userId = 'ykCasW_Nd8_EbwBq_';

    emailjs
      .send(serviceId, templateId, { ...formData } as Record<string, unknown>, userId)
      .then(() => {
        alert(componentData[language].messageSuccess);
      })
      .catch(() => {
        alert(componentData[language].messageError);
      });
  };

  return (
    <div className="w-full pb-56 px-4 xl:px-48 ">
      {/* Título principal */}
      <div className="flex">
        <h1 className='font-bold text-7xl border-l-8 pl-4 text-center dark:border-l-secondaryColor border-l-lightSecondaryColor inline-block'>
          {
            componentData[language].title
          }
        </h1>
      </div>
      <div className='flex items-center mt-5 gap-2'>

        <a href="https://www.instagram.com/matheus_lisbon" target="_blank">
          <Image src="/socials/instagram.svg" alt="Contato" width={40} height={40} />
        </a>

        <a href="https://www.linkedin.com/in/matheuslisbon/" target="_blank">
          <Image src="/socials/linkedin.svg" alt="Contato" width={40} height={40} />
        </a>

        <a href="https://github.com/matheuslisbon" target="_blank">
          <Image src="/socials/github.svg" alt="Contato" width={40} height={40} />
        </a>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col md:w-1/2 space-y-4'>

        <label htmlFor="email" className="font-medium mt-5 border-l-8 pl-4 dark:border-l-secondaryColor border-l-lightSecondaryColor inline-block ">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={componentData[language].emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded-md md:max-w-96"
        />

        <label htmlFor="message" className="font-medium mt-5 border-l-8 pl-4 dark:border-l-secondaryColor border-l-lightSecondaryColor inline-block ">
          {
            language === 'en' ? 'Message' : 'Mensagem'
          }
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder={componentData[language].messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          className='max-h-44 h-44 '
        />


        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {
            language === 'en' ? 'Send' : 'Enviar'
          }
        </button>
      </form>

    </div>
  )
}
