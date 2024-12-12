import { motion, AnimatePresence, MotionConfig } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 2, delay: 1 } }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0, transition: { duration: 2, delay: 2 } }}
      className="pt-20 sm:pt-32 md:h-min flex items-start"
      id="about"
    >
      <div className="mx-auto flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "circInOut" }}
          className="mb-3 pointer-events-none"
        >
          <h1 className="text-3xl text-green-500 font-bold">
            Full Stack Developer{" "}
          </h1>
          <h1 className="text-3xl text-green-500 font-bold">e Data Analist</h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "circInOut" }}
          className="font-light max-w-md pointer-events-none [&>span]:pointer-events-auto [&>span]:cursor-default [&>span]:transition-all [&>span]:font-semibold"
        >
          Apaixonado por <span>tecnologia</span> e <span>inovação</span>, com
          experiência em desenvolvimento web, automação, redes, inteligência
          artificial, etc. Tenho conhecimento avançado em frameworks modernos
          como <span className="text-green-500">Angular</span> e{" "}
          <span className="text-green-500">Next.js</span>, além de habilidades
          avançadas em design responsivo utilizando{" "}
          <span className="text-green-500">Tailwind CSS</span>. Minha trajetória
          também inclui projetos em{" "}
          <span className="text-green-500">Python</span> e{" "}
          <span className="text-green-500">Flask</span>, abordando desde APIs
          interativas até o uso de computação em nuvem utilizando{" "}
          <span className="text-green-500">Firebase</span>,{" "}
          <span className="text-green-500"></span>Supabase e{" "}
          <span className="text-green-500"></span>AWS, Possuo conhecimento
          prático em sistemas distribuídos, incluindo configuração e
          gerenciamento de clusters com{" "}
          <span className="text-green-500">Docker Swarm</span>,{" "}
          <span className="text-green-500">Proxmox</span> e{" "}
          <span className="text-green-500">pfSense</span>, aplicados tanto em
          redes locais quanto em servidores. Além disso, já implementei soluções
          de machine learning e visão computacional com frameworks como{" "}
          <span className="text-green-500">PyTorch</span>,{" "}
          <span className="text-green-500">YOLO</span>,{" "}
          <span className="text-green-500">TensorFlow</span> e{" "}
          <span className="text-green-500">OpenCV</span>, aplicando algoritmos
          em projetos de análise de imagens e backtesting financeiro.
        </motion.p>
      </div>
    </motion.div>
  );
}
