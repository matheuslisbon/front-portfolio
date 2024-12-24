import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useLanguage } from "@/context/language.context";

type Language = 'en' | 'pt';

export default function CardSkills() {
  const { language } = useLanguage() as { language: Language; toggleLanguage: () => void };

  const componentData = {
    en: {
      utility: 'Utility',
    },
    pt: {
      utility: 'Utilitarios',
    }
  }

  return (
    <div className="w-full md:px-8">

      <div className="flex md:flex-row flex-col justify-between items-center md:items-start gap-8 md:gap-2 p-6 px-0 0 ">
        <Card className='w-80 shadow-lg   dark:border-secondaryColor border-blue-500 hover:shadow-xl transition-shadow duration-300 bg-transparent backdrop-blur-sm' title="Frontend" color="blue">
          <CardHeader>
            <div>
              <Image src="/front.png" alt="React" className="dark:invert" width={50} height={50} />
            </div>
            <CardTitle className="text-2xl font-bold">Frontend</CardTitle>

          </CardHeader>
          <CardContent className="grid grid-cols-4 items-center gap-4">
            <div className="flex justify-center">
              <Image src="/skills/react.svg" alt="React" width={50} height={50} />
            </div>
            <div className="flex justify-center dark:invert">
              <Image src="/skills/nextjs.svg" alt="Next.js" width={50} height={50} />
            </div>
            <div>
              <Image src="/skills/redux.svg" alt="Redux" width={50} height={50} />
            </div>
            <div>
              <Image src="/skills/storybook.svg" alt="Apollo" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/html.svg" alt="HTML" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/css.svg" alt="CSS" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/js.svg" alt="JavaScript" width={50} height={50} />
            </div>
            <div>
              <Image src="/skills/typescript.svg" alt="TypeScript" width={50} height={50} />
            </div>

            <div className="flex justify-center">
              <Image src="/skills/tailwind.svg" alt="Tailwind" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/sass.svg" alt="Sass
            " width={50} height={50} />
            </div>
            <div className="flex justify-center dark:invert">
              <Image src="/skills/styled.svg" alt="Styled Components" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/jest.svg" alt="Styled Components" width={50} height={50} />
            </div>
          </CardContent>

        </Card>
        <Card className='w-80 shadow-lg   dark:border-secondaryColor border-blue-500 hover:shadow-xl transition-shadow duration-300 bg-transparent backdrop-blur-sm' title="Frontend" color="blue">          <CardHeader>
          <div>
            <Image src="/mobile.png" className="dark:invert" alt="React" width={50} height={50} />
          </div>
          <CardTitle className="text-2xl font-bold">Mobile</CardTitle>

        </CardHeader>

          <CardContent className="grid grid-cols-4 items-center gap-4">
            <div className="flex justify-center">
              <Image src="/skills/react.svg" alt="React" width={50} height={50} />
            </div>

            <div className="flex justify-center">
              <Image src="/skills/android.svg" alt="Expo" width={50} height={50} />
            </div>
            <div className="flex justify-center dark:invert">
              <Image src="/skills/apple.svg" alt="Flutter" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/typescript.svg" alt="Flutter" width={50} height={50} />
            </div>

            <div className="flex justify-center">
              <Image src="/skills/androidStudio.svg" alt="Flutter" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/firebase.svg" alt="Flutter" width={50} height={50} />
            </div>

          </CardContent>
        </Card>
        <Card className='w-80 shadow-lg   dark:border-secondaryColor border-blue-500 hover:shadow-xl transition-shadow duration-300 bg-transparent backdrop-blur-sm' title="Frontend" color="blue">          <CardHeader>
          <div>
            <Image src="/geral.png" className="dark:invert" alt="React" width={50} height={50} />
          </div>
          <CardTitle className="text-2xl font-bold">
            {componentData[language].utility}
          </CardTitle>


        </CardHeader>
          <CardContent className="grid grid-cols-4 items-center gap-4">
            <div className="flex justify-center">
              <Image src="/skills/git.svg" alt="React" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/docker.svg" alt="React" width={50} height={50} />
            </div>
            <div className="flex justify-center dark:invert">
              <Image src="/skills/github.svg" alt="React" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/aws.svg" alt="React" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/vscode.svg" alt="React" width={50} height={50} />
            </div>
            <div className="flex justify-center dark:invert">
              <Image src="/skills/vercel.svg" alt="React" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/windows.svg" alt="React" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/linux.svg" alt="React" width={50} height={50} />
            </div>

          </CardContent>
        </Card>
        <Card className='w-80 shadow-lg   dark:border-secondaryColor border-blue-500 hover:shadow-xl transition-shadow duration-300 bg-transparent backdrop-blur-sm' title="Frontend" color="blue">          <CardHeader>
          <div>
            <Image src="/back.png" className="dark:invert" alt="React" width={50} height={50} />
          </div>
          <CardTitle className="font-bold text-2xl ">Backend</CardTitle>

        </CardHeader>
          <CardContent className="grid grid-cols-4 items-center gap-4">
            <div className="flex justify-center">
              <Image src="/skills/node.svg" alt="Styled Components" width={50} height={50} />
            </div>
            <div className="flex justify-center dark:invert">
              <Image src="/skills/express.svg" alt="Styled Components" width={50} height={50} />
            </div>

            <div className="flex justify-center">
              <Image src="/skills/graphql.svg" alt="Styled Components" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/nest.svg" alt="Styled Components" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/mongo.svg" alt="Styled Components" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/postgress.svg" alt="Styled Components" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/jest.svg" alt="Styled Components" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/swagger.svg" alt="Styled Components" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/python.svg" alt="Styled Components" width={50} height={50} />
            </div>
            <div className="flex justify-center">
              <Image src="/skills/fastapi.svg" alt="Styled Components" width={50} height={50} />
            </div>
          </CardContent>
        </Card>
      </div>

    </div >
  )
}
