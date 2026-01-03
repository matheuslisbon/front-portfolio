import Image from "next/image";

const events = [
  {
    id: 1,
    image: "/event-hacka-1.jpeg",
    title: "Hackathon Tech Challenge",
    description:
      "Participação em hackathon de tecnologia focado em soluções inovadoras",
    date: "2024",
  },
  {
    id: 2,
    image: "/setup.jpg",
    title: "Setup de Desenvolvimento",
    description: "Workspace otimizado para desenvolvimento full-stack",
    date: "2024",
  },
  {
    id: 3,
    image: "/event-hacka-3.jpg",
    title: "Evento de Programação",
    description: "Networking e compartilhamento de conhecimento em tecnologia",
    date: "2024",
  },
  {
    id: 4,
    image: "/hackaton-13.jpg",
    title: "13º Hackathon",
    description: "Competição de desenvolvimento de software e inovação",
    date: "2024",
  },
  {
    id: 5,
    image: "/event-hackercidadao.jpg",
    title: "Hacker Cidadão",
    description: "Evento focado em tecnologia para impacto social",
    date: "2024",
  },
];

export default function Events() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-48 py-8">
      <div className="flex justify-center items-center mb-16">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-center border-b-8 border-b-lightSecondaryColor dark:border-b-secondaryColor inline-block pb-2">
          Events
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="group relative bg-white dark:bg-card shadow-lg rounded-2xl overflow-hidden transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-lightSecondaryColor/20 dark:hover:shadow-secondaryColor/20 border border-border/50 hover:border-lightSecondaryColor/50 dark:hover:border-secondaryColor/50"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-square">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

              {/* Date badge */}
              <div className="absolute top-4 right-4 bg-lightSecondaryColor dark:bg-secondaryColor text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                {event.date}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-lightSecondaryColor dark:group-hover:text-secondaryColor transition-colors duration-300">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="h-1 bg-gradient-to-r from-lightSecondaryColor to-transparent dark:from-secondaryColor transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left" />
          </div>
        ))}
      </div>

      {/* Gallery description */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          Uma coleção dos principais eventos, hackathons e experiências que
          marcaram minha jornada no desenvolvimento de software. Cada momento
          representa aprendizado, networking e crescimento profissional na área
          de tecnologia.
        </p>
      </div>
    </div>
  );
}
