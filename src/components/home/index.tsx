

import Image from 'next/image'
import { Button } from '../ui/button'
import { useLanguage } from '@/context/language.context';
import { TypeAnimation } from 'react-type-animation';

type Language = 'en' | 'pt';

export default function Home() {
  const { language } = useLanguage() as { language: Language };


  const componentData: Record<Language, { title: string; subTitle: string; workWithMe: string; downloadCV: string, legend: string }> = {
    en: {
      title: 'Hello,',
      subTitle: 'I am Matheus',
      legend: 'Desenvolvedor Front-End',
      workWithMe: 'Work With Me',
      downloadCV: 'Download CV'
    },
    pt: {
      title: 'Olá,',
      subTitle: 'Eu sou Matheus',
      legend: 'Desenvolvedor Front-End',
      workWithMe: 'Trabalhe Comigo',
      downloadCV: 'Download CV'
    }
  }

  return (
    <div className="w-full px-4">
      <div className='lg:grid lg:grid-cols-2 pt gap-12 pt-10 md:pt-28'>
        <div className='flex flex-col gap-6 md:justify-center md:items-center px-20 '>

          <h1 className=' dark:text-white text-black text-7xl md:text-8xl text-center'>
            {componentData[language].title}
          </h1>
          <h1 className=' text-4xl text-center md:text-6xl xl:text-7xl  font-medium dark:text-white text-black border-b-8 dark:border-b-secondaryColor border-b-lightSecondaryColor '>
            {componentData[language].subTitle}
          </h1>
          <p >
            {
              language === 'en' && (
                <TypeAnimation
                  sequence={[
                    'Developer Frontend',
                    1000,
                    'Developer Backend',
                    3000,
                    'Developer Fullstack',
                    3000,
                  ]}
                  preRenderFirstString={true}
                  speed={20}
                  className='text-xl md:text-3xl text-center flex justify-center'


                />
              )
            }
            {
              language === 'pt' && (
                <TypeAnimation
                  sequence={[
                    'Desenvolvedor Frontend',
                    1000,
                    'Desenvolvedor Backend',
                    3000,
                    'Desenvolvedor Fullstack',
                    3000,
                  ]}
                  className='text-xl md:text-3xl text-center flex justify-center '
                  preRenderFirstString={true}
                  speed={20}

                />
              )
            }
          </p>
          <div className='border flex h-16 mx-auto flex-row w-min '>
            <Button className='h-15 text-lg dark:bg-secondaryColor dark:text-black bg-lightSecondaryColor border-none rounded-none shadow-none hover:bg-blue-500 text-lightPrimaryColor'>
              {componentData[language].workWithMe}
            </Button>
            <Button className='h-16 text-lg bg-transparent border-none shadow-none rounded-none hover:bg-transparent dark:text-white text-black'>Download CV</Button>
          </div>


        </div>

        <div className='flex justify-center px-20'>
          <Image src="/avatar-3.svg" alt="Picture of the author" width={600} height={600} />
        </div>

      </div>



    </div >
  )
}