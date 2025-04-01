import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGitAlt, FaAngular, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiNestjs, SiTypescript, SiJavascript, SiFirebase } from 'react-icons/si';
import { fadeInUp, staggerContainer, viewportOptions } from '../config/animations';

const HomePage: NextPage = () => {
  const habilidades = [
    {
      nome: 'JavaScript',
      descricao: 'Desenvolvimento web com JavaScript moderno (ES6+)',
      icone: <SiJavascript className="w-8 h-8 text-yellow-500" />
    },
    {
      nome: 'TypeScript',
      descricao: 'Desenvolvimento com TypeScript para maior segurança e manutenibilidade',
      icone: <SiTypescript className="w-8 h-8 text-blue-600" />
    },
    {
      nome: 'React',
      descricao: 'Desenvolvimento de interfaces modernas e interativas',
      icone: <FaReact className="w-8 h-8 text-blue-400" />
    },
    {
      nome: 'Next.js',
      descricao: 'Desenvolvimento de aplicações web modernas e performáticas',
      icone: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />
    },
    {
      nome: 'Firebase',
      descricao: 'Desenvolvimento de aplicações com backend serverless',
      icone: <SiFirebase className="w-8 h-8 text-orange-500" />
    },
    {
      nome: 'Angular',
      descricao: 'Desenvolvimento de aplicações web robustas e escaláveis',
      icone: <FaAngular className="w-8 h-8 text-red-500" />
    },
    {
      nome: 'NestJS',
      descricao: 'Desenvolvimento de APIs robustas e escaláveis',
      icone: <SiNestjs className="w-8 h-8 text-red-600" />
    },
    {
      nome: 'Git',
      descricao: 'Controle de versão e colaboração em equipe',
      icone: <FaGitAlt className="w-8 h-8 text-orange-600" />
    }
  ];

  return (
    <>
      <Head>
        <title>Rafael Turino | Desenvolvedor Full Stack</title>
        <meta name="description" content="Portfólio de Rafael Turino - Desenvolvedor Full Stack" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Olá, eu sou <span className="text-primary-600 dark:text-primary-400">Rafael Turino</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/projetos"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ver Projetos
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              Contato
            </Link>
            <a
              href="/curriculo-rafael.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Baixar Currículo
            </a>
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5 }}
          >
            Habilidades
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
          >
            {habilidades.map((habilidade) => (
              <motion.div 
                key={habilidade.nome} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                variants={fadeInUp}
              >
                <div className="flex justify-center mb-4">
                  {habilidade.icone}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">{habilidade.nome}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{habilidade.descricao}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5 }}
          >
            Últimos Projetos
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              variants={fadeInUp}
            >
              <div className="relative h-48">
                <Image
                  src="/projects/sistema-controlefaturas.jpeg"
                  alt="Sistema Controle Faturas"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sistema Controle Faturas</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Sistema de gerenciamento de faturas e controle financeiro, desenvolvido com Next.js e JavaScript.
                </p>
                <Link
                  href="/projetos"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Ver mais projetos
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              variants={fadeInUp}
            >
              <div className="relative h-48">
                <Image
                  src="/projects/tanamaomenu-logo.jpeg"
                  alt="Tá Na Mão Menu"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tá Na Mão Menu</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Sistema de cardápio digital para restaurantes, desenvolvido com Next.js e JavaScript.
                </p>
                <Link
                  href="/projetos"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Ver mais projetos
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              variants={fadeInUp}
            >
              <div className="relative h-48">
                <Image
                  src="/projects/lojacontemamor-logo.jpeg"
                  alt="Loja Contém Amor"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Loja Contém Amor</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  E-commerce desenvolvido com Next.js e Tailwind CSS, focado em produtos artesanais e personalizados.
                </p>
                <Link
                  href="/projetos"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Ver mais projetos
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </>
  );
};

export default HomePage;
