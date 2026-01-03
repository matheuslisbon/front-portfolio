"use client";

import { motion } from "motion/react";

export default function Gallery() {
  // Array de imagens da galeria
  const galleryImages = [
    {
      src: "/gallery/duo.jpeg",
      alt: "Duo Project",
      height: "row-span-6",
    },
    {
      src: "/gallery/setup-2.jpg",
      alt: "Retro Project 1",
      height: "row-span-6",
    },
    {
      src: "/gallery/duo2.jpeg",
      alt: "Duo Project 2",
      height: "row-span-2",
    },
    {
      src: "/gallery/event-hacka-1.jpeg",
      alt: "Event Hacka 1",
      height: "row-span-4",
    },
    {
      src: "/gallery/event-hacka-3.jpg",
      alt: "Event Hacka 3",
      height: "row-span-5",
    },
    {
      src: "/gallery/event-hackercidadao.jpg",
      alt: "Hacker Cidadão Event",
      height: "row-span-5",
    },
    {
      src: "/gallery/wyden.jpg",
      alt: "Hackaton 13",
      height: "row-span-6",
    },
    {
      src: "/gallery/hackaton-13.jpg",
      alt: "Hackaton 13",
      height: "row-span-5",
    },
    {
      src: "/gallery/nasa.jpg",
      alt: "NASA Project",
      height: "row-span-6",
    },
    {
      src: "/gallery/pc.jpg",
      alt: "PC Setup",
      height: "row-span-6",
    },
    {
      src: "/gallery/retro-4.jpeg",
      alt: "Retro Project",
      height: "row-span-5",
    },
    {
      src: "/gallery/wyden.jpg",
      alt: "Hackaton 13",
      height: "row-span-5",
    },
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-48 py-8 min-h-screen">
      {/* Header */}
      <div className="flex justify-center items-center mb-16">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-center border-b-8 border-b-lightSecondaryColor dark:border-b-secondaryColor inline-block pb-2">
          Gallery
        </h1>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[100px]">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.08,
              y: -8,
              rotateY: 5,
              rotateX: 5,
            }}
            className={`${image.height} group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu`}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <motion.div
              className="w-full h-full bg-cover bg-center bg-no-repeat relative"
              style={{
                backgroundImage: `url('${image.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                imageRendering: "-webkit-optimize-contrast",
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Overlay com efeito hover aprimorado */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  backdropFilter: "blur(2px)",
                }}
              >
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="bg-white/95 dark:bg-gray-900/95 px-6 py-3 rounded-xl backdrop-blur-md shadow-xl border border-white/20"
                >
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">
                    {image.alt}
                  </p>
                  <motion.div
                    className="w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>

              {/* Gradiente dinâmico na parte inferior */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/30 via-black/10 to-transparent"
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.3 }}
              />

              {/* Efeito de brilho no hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                whileHover={{
                  translateX: "100%",
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Botão para carregar mais */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.button
          className="px-8 py-3 bg-lightSecondaryColor dark:bg-secondaryColor text-white font-medium rounded-lg shadow-lg"
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Load More
        </motion.button>
      </motion.div>
    </div>
  );
}
