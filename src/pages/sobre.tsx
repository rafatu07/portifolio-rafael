import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaPalette } from 'react-icons/fa';
import { fadeInUp, staggerContainer, viewportOptions } from '../config/animations';

const AboutPage: NextPage = () => {
  const areas = [
    {
      titulo: 'Frontend',
      descricao: 'Desenvolvimento de interfaces modernas e responsivas com React, Next.js e Angular.',
      icone: <FaCode className="w-8 h-8 text-blue-500" />
    },
    {
      titulo: 'Backend',
      descricao: 'Desenvolvimento de APIs robustas e escaláveis com NestJS e Firebase.',
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
      icone: <FaPalette className="w-8 h-8 text-pink-500" />
    }
  ];

  return (
    <>
      <Head>
        <title>Sobre | Rafael Turino</title>
        <meta name="description" content="Sobre Rafael Turino, desenvolvedor full stack" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-4">Sobre Mim</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Desenvolvedor Full Stack com experiência em desenvolvimento web, focado em criar soluções inovadoras e experiências digitais excepcionais.
          </p>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Minha História</h2>
          <div className="text-center prose dark:prose-invert max-w-3xl mx-auto">
            <p>
              Atualmente, trabalho como desenvolvedor Full Stack, desenvolvendo aplicações web modernas e 
              performáticas. Minha stack principal inclui React, Next.js, TypeScript, NestJS e Firebase.
            </p>
            <p>
              Sou apaixonado por criar soluções que resolvem problemas reais e melhoram a vida das pessoas. 
              Acredito no poder da tecnologia para transformar o mundo e estou sempre em busca de novos desafios 
              e oportunidades de aprendizado.
            </p>
          </div>
        </motion.section>

        <motion.section
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
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                variants={fadeInUp}
              >
                <div className="flex justify-center mb-4">
                  {area.icone}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{area.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{area.descricao}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>
    </>
  );
};

export default AboutPage; 