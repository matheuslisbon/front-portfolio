import Image from 'next/image'
import { Button } from '../ui/button'
import { useLanguage } from '@/context/language.context';

type Language = 'en' | 'pt';

export default function Home() {
  const { language } = useLanguage() as { language: Language };


  const componentData: Record<Language, { title: string; subTitle: string; workWithMe: string; downloadCV: string }> = {
    en: {
      title: 'Hello,',
      subTitle: 'I am Matheus',
      workWithMe: 'Work With Me',
      downloadCV: 'Download CV'
    },
    pt: {
      title: 'Olá,',
      subTitle: 'Eu sou Matheus',
      workWithMe: 'Trabalhe Comigo',
      downloadCV: 'Download CV'
    }
  }

  return (
    <div className="w-full px-4">
      <div className='grid grid-cols-2 pt-28 gap-12'>
        <div className='flex flex-col gap-6 justify-center items-center px-20'>
          <h1 className='text-8xl dark:text-white text-black '>
            {componentData[language].title}
          </h1>
          <h1 className='text-7xl font-medium dark:text-white text-black border-b-8 dark:border-b-secondaryColor border-b-lightSecondaryColor '>
            {componentData[language].subTitle}
          </h1>
          <div className='border flex h-16'>
            <Button className='h-15 text-lg dark:bg-secondaryColor dark:text-black bg-lightSecondaryColor border-none rounded-none shadow-none hover:bg-blue-500 text-lightPrimaryColor'>
              {componentData[language].workWithMe}
            </Button>
            <Button className='h-16 text-lg bg-transparent border-none shadow-none rounded-none hover:bg-transparent dark:text-white text-black'>Download CV</Button>
          </div>


        </div>

        <div className='flex justify-center'>
          <Image src="/avatar-3.svg" alt="Picture of the author" width={600} height={600} />
        </div>

      </div>



    </div >
  )
}