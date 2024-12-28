import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useLanguage } from "@/context/language.context";
type Language = 'en' | 'pt';
export default function Projects() {
  const { language } = useLanguage() as { language: Language; toggleLanguage: () => void };

  const componentData = {
    en: {
      title: 'Projects',
      moveIt: 'Moveit - Pomodoro Technique',
      eDiaristas: 'eDiaristas - Find a cleaner',
      aluraKut: 'AluraKut - Social Network',
      mountain: 'Montains - Landing Page',
      covid: 'Covid-19 - Dashboard'
    },
    pt: {
      title: 'Projetos',
      moveIt: 'Moveit - Técnica de Pomodoro',
      eDiaristas: 'eDiaristas - Procure uma diarista',
      aluraKut: 'AluraKut - Rede Social',
      mountain: 'Montains - Landing Page',
      covid: 'Covid-19 - Dashboard'
    }
  }

  return (
    <div className="w-full px-4 md:px-48 ">
      <div className="flex  content-center justify-center items-center">
        <h1 className='font-bold text-4xl md:text-7xl dark border-b-8 text-center border-b-lightSecondaryColor dark:border-b-secondaryColor inline-block'>
          {componentData[language].title}
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-10">

        <Card className='w-full md:w-3/12 shadow-lg dark:border-secondaryColor border-blue-500 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm' title="Frontend" color="blue">
          <CardHeader>

            <CardTitle className="text-2xl font-bold">{componentData[language].moveIt}</CardTitle>
            <CardDescription className="flex flex-wrap gap-2" >
              <Button className="rounded-full  bg-blue-600 text-white">
                Typescript
              </Button>
              <Button className="rounded-full bg-indigo-600 text-white">
                NextJS
              </Button>
              <Button className="rounded-full bg-orange-600 text-white">
                React
              </Button>
              <Button className="rounded-full bg-pink-600 text-white">
                Styled-Components
              </Button>
            </CardDescription>

          </CardHeader>
          <CardContent >
            <div className="flex justify-center">
              <Image src="/projects/move-it.jpeg" alt="React" width={500} height={500} />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="w-full rounded-full dark:bg-secondaryColor dark:text-primaryColor bg-blue-500">View Demo</Button>
            <Button className="w-full rounded-full bg-white text-black">Github</Button>
          </CardFooter>

        </Card>
        <Card className='w-full md:w-3/12 shadow-lg dark:border-secondaryColor border-blue-500 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm' title="Frontend" color="blue">
          <CardHeader>

            <CardTitle className="text-2xl font-bold">{componentData[language].moveIt}</CardTitle>
            <CardDescription className="flex flex-wrap gap-2" >
              <Button className="rounded-full  bg-blue-600 text-white">
                Typescript
              </Button>
              <Button className="rounded-full bg-indigo-600 text-white">
                NextJS
              </Button>
              <Button className="rounded-full bg-orange-600 text-white">
                React
              </Button>
              <Button className="rounded-full bg-pink-600 text-white">
                Styled-Components
              </Button>
            </CardDescription>

          </CardHeader>
          <CardContent >
            <div className="flex justify-center">
              <Image src="/projects/move-it.jpeg" alt="React" width={500} height={500} />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="w-full rounded-full dark:bg-secondaryColor dark:text-primaryColor bg-blue-500">View Demo</Button>
            <Button className="w-full rounded-full bg-white text-black">Github</Button>
          </CardFooter>

        </Card>
        <Card className='w-full md:w-3/12 shadow-lg dark:border-secondaryColor border-blue-500 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm' title="Frontend" color="blue">
          <CardHeader>

            <CardTitle className="text-2xl font-bold">{componentData[language].eDiaristas}</CardTitle>
            <CardDescription className="flex flex-wrap gap-1" >
              <Button className="rounded-full  bg-blue-600 text-white">
                Typescript
              </Button>
              <Button className="rounded-full bg-indigo-600 text-white">
                NextJS
              </Button>
              <Button className="rounded-full bg-orange-600 text-white">
                React
              </Button>
              <Button className="rounded-full bg-pink-600 text-white">
                Styled-Components
              </Button>
            </CardDescription>

          </CardHeader>
          <CardContent >
            <div className="flex justify-center">
              <Image src="/projects/ediaristas.png" alt="React" width={500} height={500} />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="w-full rounded-full dark:bg-secondaryColor dark:text-primaryColor bg-blue-500">View Demo</Button>
            <Button className="w-full rounded-full bg-white text-black">Github</Button>
          </CardFooter>

        </Card>
        <Card className='w-full md:w-3/12 shadow-lg dark:border-secondaryColor border-blue-500 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm' title="Frontend" color="blue">
          <CardHeader>

            <CardTitle className="text-2xl font-bold">{componentData[language].aluraKut}</CardTitle>
            <CardDescription className="flex flex-wrap gap-1" >
              <Button className="rounded-full  bg-blue-600 text-white">
                Typescript
              </Button>
              <Button className="rounded-full bg-indigo-600 text-white">
                NextJS
              </Button>
              <Button className="rounded-full bg-orange-600 text-white">
                React
              </Button>
              <Button className="rounded-full bg-pink-600 text-white">
                Styled-Components
              </Button>
            </CardDescription>

          </CardHeader>
          <CardContent >
            <div className="flex justify-center">
              <Image src="/projects/alurakut.png" alt="React" width={500} height={500} />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="w-full rounded-full dark:bg-secondaryColor dark:text-primaryColor bg-blue-500">View Demo</Button>
            <Button className="w-full rounded-full bg-white text-black">Github</Button>
          </CardFooter>

        </Card>
        <Card className='w-full md:w-3/12 shadow-lg dark:border-secondaryColor border-blue-500 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm' title="Frontend" color="blue">
          <CardHeader>

            <CardTitle className="text-2xl font-bold">{componentData[language].mountain}</CardTitle>
            <CardDescription className="flex flex-wrap gap-1" >
              <Button className="rounded-full  bg-blue-600 text-white">
                HTML
              </Button>
              <Button className="rounded-full bg-indigo-600 text-white">
                CSS
              </Button>

            </CardDescription>

          </CardHeader>
          <CardContent >
            <div className="flex justify-center">
              <Image src="/projects/montains.png" alt="React" width={500} height={500} />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="w-full rounded-full dark:bg-secondaryColor dark:text-primaryColor bg-blue-500">View Demo</Button>
            <Button className="w-full rounded-full bg-white text-black">Github</Button>
          </CardFooter>

        </Card>
        <Card className='w-full md:w-3/12 shadow-lg dark:border-secondaryColor border-blue-500 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm' title="Frontend" color="blue">
          <CardHeader>

            <CardTitle className="text-2xl font-bold">{componentData[language].covid}</CardTitle>
            <CardDescription className="flex flex-wrap gap-1" >
              <Button className="rounded-full  bg-blue-600 text-white">
                HTML
              </Button>
              <Button className="rounded-full bg-indigo-600 text-white">
                CSS
              </Button>

            </CardDescription>

          </CardHeader>
          <CardContent >
            <div className="flex justify-center">
              <Image src="/projects/covid.png" alt="React" width={500} height={500} />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="w-full rounded-full dark:bg-secondaryColor dark:text-primaryColor bg-blue-500">View Demo</Button>
            <Button className="w-full rounded-full bg-white text-black">Github</Button>
          </CardFooter>

        </Card>
      </div>


    </div >
  )
}
