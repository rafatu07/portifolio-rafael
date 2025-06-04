import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase, FaMobile } from 'react-icons/fa';
import { fadeInUp, staggerContainer, viewportOptions } from '../config/animations';
import { NextImage } from '../components/NextImage';

const SobrePage: NextPage = () => {
  const areas = [
    {
      titulo: 'Frontend',
      descricao: 'Desenvolvimento de interfaces modernas e responsivas com React, Next.js e Angular.',
      icone: <FaCode className="w-8 h-8 text-blue-500" />
    },
    {
      titulo: 'Backend',
      descricao: 'Desenvolvimento de APIs robustas e escaláveis com Node.js e Firebase.',
      icone: <FaServer className="w-8 h-8 text-green-500" />
    },
    {
      titulo: 'Banco de Dados',
      descricao: 'Modelagem e implementação de bancos de dados relacionais e NoSQL.',
      icone: <FaDatabase className="w-8 h-8 text-purple-500" />
    },
    {
      titulo: 'UI/UX',
      descricao: 'Desenvolvimento de interfaces modernas e responsivas com Tailwind CSS.',
      icone: <FaMobile className="w-8 h-8 text-pink-500" />
    }
  ];

  return (
    <>
      <Head>
        <title>Sobre | Rafael Turino</title>
        <meta name="description" content="Sobre Rafael Turino - Desenvolvedor Full Stack" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <motion.section
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-lg">
              <NextImage
                src="/perfil-rafael.png"
                alt="Rafael Turino"
                fill
                className="object-cover object-[center_05%]"
                priority
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl font-bold mb-4">Sobre Mim</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Desenvolvedor Full Stack com foco em criar soluções inovadoras e experiências digitais excepcionais.
              </p>
              <div className="flex justify-center md:justify-start gap-6">
                <a
                  href="https://github.com/rafatu07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rafael-turino-de-oliveira-60000294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Minha História</h2>
          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <p className="text-lg text-center text-gray-600 dark:text-gray-300">
              Atualmente, desenvolvendo aplicações web modernas e 
              performáticas. Minha stack principal inclui React, Next.js, TypeScript, Node.js e Firebase, além de outras tecnologias que utilizo de acordo com as necessidades de cada projeto.
            </p>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300">
              Sou apaixonado por criar soluções que resolvem problemas reais e melhoram a vida das pessoas. 
              Acredito no poder da tecnologia para transformar o mundo e estou sempre em busca de novos desafios 
              e oportunidades de aprendizado.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Áreas de Atuação</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
          >
            {areas.map((area) => (
              <motion.div 
                key={area.titulo}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <div className="flex justify-center mb-6">
                  {area.icone}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{area.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{area.descricao}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>
    </>
  );
};

export default SobrePage; 