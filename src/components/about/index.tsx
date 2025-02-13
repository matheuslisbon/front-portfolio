import { motion } from 'framer-motion';
import Image from "next/image";
import { useLanguage } from '@/context/language.context';
type Language = 'en' | 'pt';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { FaLinkedin } from 'react-icons/fa';
const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Intervalo entre as animações dos filhos
    },
  },
};

export default function About() {
  const { language } = useLanguage() as { language: Language; toggleLanguage: () => void };

  const componentData = {
    en: {
      title: 'About Me',
      subscription: [
        { text: `Hello, I'm Matheus.`, color: 'text-black', borderColor: 'border-l-yellow-400' },
        { text: `A Pernambucano Who loves his Culture.`, color: 'text-yellow-500', borderColor: 'border-l-yellow-400' },
        { text: `Passionate About Setups and Organization.`, color: 'text-orange-500', borderColor: 'border-l-orange-500' },
        { text: `Blue Belt in the Noble Gentle Art (Jiu-Jitsu).`, color: 'text-red-500', borderColor: 'border-l-red-500' },
        { text: `One Piece Saved my life.`, color: 'text-green-500', borderColor: 'border-l-green-500' },
        { text: `Coffee addict, can be espresso or filtered.`, color: 'text-purple-500', borderColor: 'border-l-purple-500' },
        { text: `Dream of changing the world with technology.`, color: 'text-pink-500', borderColor: 'border-l-pink-500' },
        { text: `Entered the Programming market at 17.`, color: 'text-blue-500', borderColor: 'border-l-blue-500' },
        { text: `First in the Family to enter University.`, color: 'text-indigo-500', borderColor: 'border-l-indigo-500' },
        { text: `First Remote Foreign job at 18.`, color: 'text-rose-500', borderColor: 'border-l-rose-500' },
      ],
    },
    pt: {
      title: 'Sobre Mim',
      subscription: [
        { text: `Olá, eu sou Matheus.`, color: 'text-black', borderColor: 'border-l-yellow-400' },
        { text: `Um Pernambucano Que ama sua Cultura.`, color: 'text-yellow-500', borderColor: 'border-l-yellow-400' },
        { text: `Apaixonado Por Setups e Organização.`, color: 'text-orange-500', borderColor: 'border-l-orange-500' },
        { text: `Faixa Azul na Nobre Arte Suave (Jiu-Jitsu).`, color: 'text-red-500', borderColor: 'border-l-red-500' },
        { text: `One Piece Salvou a minha vida.`, color: 'text-green-500', borderColor: 'border-l-green-500' },
        { text: `Viciado em café, pode ser expresso ou coado.`, color: 'text-purple-500', borderColor: 'border-l-purple-500' },
        { text: `Sonho de mudar o mundo com tecnologia.`, color: 'text-pink-500', borderColor: 'border-l-pink-500' },
        { text: `Entrei no mercado de Programação com 17 anos.`, color: 'text-blue-500', borderColor: 'border-l-blue-500' },
        { text: `Primeiro da Familia a entrar na Universidade.`, color: 'text-indigo-500', borderColor: 'border-l-indigo-500' },
        { text: `Primeiro Emprego Remoto Estrangeiro aos 18.`, color: 'text-rose-500', borderColor: 'border-l-rose-500' },
      ],
    },
  };

  const { title, subscription } = componentData[language];

  return (
    <div className="w-full px-4 xl:px-48">
      <div className="flex xl:content-center xl:justify-center items-center">
        <h1 className='font-bold text-5xl md:text-7xl md:mt-14 dark border-b-8 text-center dark:border-b-secondaryColor border-b-lightSecondaryColor inline-block'>
          {title}
        </h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-20">
        <div className="hidden lg:flex md:px-20 w-full h-full ">
          <Image
            src="/full.svg"
            alt="Imagem do autor"
            width={100}
            height={100}
            className="w-full h-full max-h-[500px] min-w-44 object-contain"
          />
        </div>
        <motion.div
          className="flex flex-col gap-4 xl:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {subscription.map((item, index) => (
            <motion.p
              key={index}
              className={`text-lg xl:text-2xl dark:text-white ${item.color} border-l-8 ${item.borderColor} pl-5`}
              variants={itemVariants}
            >
              {item.text}
            </motion.p>
          ))}
        </motion.div>

      </div>
      <Swiper

        spaceBetween={25} // Ajuste o espaçamento entre os slides
        slidesPerView={3} // Exibe 4 slides ao mesmo tempo
        loop={true} // Habilita o loop, para que o Swiper continue passando os slides
        className='mt-10 ' // Adiciona uma margem ao Swiper
        modules={[Autoplay, EffectCoverflow]} // Mantém a animação de autoplay
        centeredSlides={true} // Centraliza os slides para manter os 4 visíveis
        autoplay={{
          delay: 0, // Ajuste o delay para a transição automática
          disableOnInteraction: false, // Faz o autoplay continuar após interação do usuário
        }}

        pagination={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1, // Em telas menores, exibe 1 slide
          },
          768: {
            slidesPerView: 2, // Em telas médias, exibe 2 slides
          },
          1024: {
            slidesPerView: 4, // Em telas maiores, exibe 4 slides
          },
        }}
        speed={4000} // Ajusta a velocidade da transição para 500ms
      >
        <SwiperSlide className='p-2'>
          <Card className='cursor-pointer border-none'>
            <CardHeader className='flex flex-row items-center gap-4 justify-between'>
              <div className='flex flex-row items-center gap-4'>
                <Avatar >
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>Matheus Eduardo</CardTitle>
              </div>

              <div className='bg-lightSecondaryColor p-2 rounded-full'>
                <FaLinkedin size={24} cursor={'pointer'} />
              </div>

            </CardHeader>

            <CardFooter>
              <CardDescription>
                Desenvolvedor Front-End
              </CardDescription>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className='p-2'>
          <Card className='cursor-pointer border-none'>
            <CardHeader className='flex flex-row items-center gap-4 justify-between'>
              <div className='flex flex-row items-center gap-4'>
                <Avatar >
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>Matheus Eduardo</CardTitle>
              </div>

              <div className='bg-lightSecondaryColor p-2 rounded-full'>
                <FaLinkedin size={24} cursor={'pointer'} />
              </div>

            </CardHeader>

            <CardFooter>
              <CardDescription>
                Desenvolvedor Front-End
              </CardDescription>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className='p-2'>
          <Card className='cursor-pointer border-none'>
            <CardHeader className='flex flex-row items-center gap-4 justify-between'>
              <div className='flex flex-row items-center gap-4'>
                <Avatar >
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>Matheus Eduardo</CardTitle>
              </div>

              <div className='bg-lightSecondaryColor p-2 rounded-full'>
                <FaLinkedin size={24} cursor={'pointer'} />
              </div>

            </CardHeader>

            <CardFooter>
              <CardDescription>
                Desenvolvedor Front-End
              </CardDescription>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className='p-2'>
          <Card className='cursor-pointer border-none'>
            <CardHeader className='flex flex-row items-center gap-4 justify-between'>
              <div className='flex flex-row items-center gap-4'>
                <Avatar >
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>Matheus Eduardo</CardTitle>
              </div>

              <div className='bg-lightSecondaryColor p-2 rounded-full'>
                <FaLinkedin size={24} cursor={'pointer'} />
              </div>

            </CardHeader>

            <CardFooter>
              <CardDescription>
                Desenvolvedor Front-End
              </CardDescription>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className='p-2'>
          <Card className='cursor-pointer border-none'>
            <CardHeader className='flex flex-row items-center gap-4 justify-between'>
              <div className='flex flex-row items-center gap-4'>
                <Avatar >
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>Matheus Eduardo</CardTitle>
              </div>

              <div className='bg-lightSecondaryColor p-2 rounded-full'>
                <FaLinkedin size={24} cursor={'pointer'} />
              </div>

            </CardHeader>

            <CardFooter>
              <CardDescription>
                Desenvolvedor Front-End
              </CardDescription>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className='p-2'>
          <Card className='cursor-pointer border-none'>
            <CardHeader className='flex flex-row items-center gap-4 justify-between'>
              <div className='flex flex-row items-center gap-4'>
                <Avatar >
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>Matheus Eduardo</CardTitle>
              </div>

              <div className='bg-lightSecondaryColor p-2 rounded-full'>
                <FaLinkedin size={24} cursor={'pointer'} />
              </div>

            </CardHeader>

            <CardFooter>
              <CardDescription>
                Desenvolvedor Front-End
              </CardDescription>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className='p-2'>
          <Card className='cursor-pointer border-none'>
            <CardHeader className='flex flex-row items-center gap-4 justify-between'>
              <div className='flex flex-row items-center gap-4'>
                <Avatar >
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>Matheus Eduardo</CardTitle>
              </div>

              <div className='bg-lightSecondaryColor p-2 rounded-full'>
                <FaLinkedin size={24} cursor={'pointer'} />
              </div>

            </CardHeader>

            <CardFooter>
              <CardDescription>
                Desenvolvedor Front-End
              </CardDescription>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide className='p-2'>
          <Card className='cursor-pointer border-none'>
            <CardHeader className='flex flex-row items-center gap-4 justify-between'>
              <div className='flex flex-row items-center gap-4'>
                <Avatar >
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>Matheus Eduardo</CardTitle>
              </div>

              <div className='bg-lightSecondaryColor p-2 rounded-full'>
                <FaLinkedin size={24} cursor={'pointer'} />
              </div>

            </CardHeader>

            <CardFooter>
              <CardDescription>
                Desenvolvedor Front-End
              </CardDescription>
            </CardFooter>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
