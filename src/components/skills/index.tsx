import { useLanguage } from "@/context/language.context";
import CardSkills from "../cardSkills";
type Language = 'en' | 'pt';

export default function Skills() {
  const { language } = useLanguage() as { language: Language; toggleLanguage: () => void };

  const componentData = {
    en: {
      title: 'Skills',
    },
    pt: {
      title: 'Habilidades',
    }
  }

  return (
    <div className="w-full px-48">
      <div className="flex">
        <h1 className='font-bold text-7xl border-l-8 pl-4 text-center dark:border-l-secondaryColor border-l-lightSecondaryColor inline-block'>
          {componentData[language].title}
        </h1>
      </div>

      <div className="flex justify-between items-start gap-2 p-6 px-0 0 ">
        <CardSkills />
      </div>

    </div >
  )
}
