
import Image from "next/image";
import { useLanguage } from '@/context/language.context';
type Language = 'en' | 'pt';

export default function About() {
  const { language } = useLanguage() as { language: Language; toggleLanguage: () => void };

  const componentData = {
    en: {
      title: 'About Me',
      subscription: <div className="flex flex-col gap-4 xl:px-20">
        <h1 className=' text-xl md:text-3xl dark:text-white  font-bold text-black'>
          Hello, {"I'"}m Matheus.
        </h1>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-yellow-400 pl-5">
          A <span className="text-yellow-500">Pernambucano</span> Who loves his <span className="text-yellow-500">Culture</span>.
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-orange-500 pl-5">
          Passionate About <span className="text-orange-500">Setups and Organization</span>.
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-red-500 pl-5">
          Blue Belt in the Noble <span className="text-red-500"> Gentle Art</span> (Jiu-Jitsu).
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-green-500 pl-5">
          One Piece <span className="text-green-500">Saved my life</span>.
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-purple-500 pl-5">
          <span className="text-purple-500">Coffee addict</span>, can be espresso or filtered.
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-pink-500 pl-5">
          Dream of <span className="text-pink-500">changing the world</span> with technology.
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-blue-500 pl-5">
          Entered the <span className="text-blue-500">Programming</span> market at 17.
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-indigo-500 pl-5">
          First in the Family to enter <span className="text-indigo-500">University</span>.
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-rose-500 pl-5">
          First Remote <span className="text-rose-500">Foreign</span> job at 18.
        </p>
      </div>
    },
    pt: {
      title: 'Sobre Mim,',
      subscription: <div className="flex flex-col gap-4 xl:px-20">
        <h1 className='text-3xl dark:text-white  font-bold text-black'>
          Olá, eu sou Matheus.
        </h1>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-yellow-400 pl-5">
          Um <span className="text-yellow-500">Pernambucano</span> Que ama sua <span className="text-yellow-500">Cultura</span>.
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-orange-500 pl-5">
          Apaixonado Por <span className="text-orange-500">Setups e Organização</span> .
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-red-500 pl-5">
          Faixa Azul na Nobre <span className="text-red-500"> Arte Suave</span> (Jiu-Jitsu).
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-green-500 pl-5">
          One Piece <span className="text-green-500">Salvou a minha vida</span>.
        </p>


        <p className="text-2xl dark:text-white text-black border-l-8 border-l-purple-500 pl-5">
          <span className="text-purple-500">Viciado em café</span>, pode ser expresso ou coado.
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-pink-500 pl-5">
          Sonho de <span className="text-pink-500">mudar o mundo</span> com tecnologia.
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-blue-500 pl-5">
          Entrei no mercado de <span className="text-blue-500">Programação</span> com 17 anos.
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-indigo-500 pl-5">
          Primeiro da Familia a entrar na <span className="text-indigo-500">Universidade</span>.
        </p>
        <p className="text-2xl dark:text-white text-black border-l-8 border-l-rose-500 pl-5">
          Primeiro Emprego Remoto <span className="text-rose-500">Estrangeiro</span> aos 18.
        </p>
      </div>
    }
  }

  return (
    <div className="w-full px-4 xl:px-48">

      <div className="flex xl:content-center xl:justify-center items-center">
        <h1 className='font-bold text-5xl md:text-7xl md:mt-14 dark border-b-8 text-center dark:border-b-secondaryColor border-b-lightSecondaryColor inline-block'>
          {componentData[language].title}
        </h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-20">
        <div className="flex md:px-20 w-full h-full ">
          <Image
            src="/full.svg"
            alt="Imagem do autor"
            width={100}
            height={100}
            className="w-full h-full max-h-[500px] min-w-44 object-contain"
          />
        </div>
        {componentData[language].subscription}
      </div>
    </div >
  )
}
