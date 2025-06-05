import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGitAlt, FaAngular, FaReact, FaWhatsapp, FaVuejs, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiNextdotjs, SiNestjs, SiTypescript, SiJavascript, SiFirebase, SiPostgresql } from 'react-icons/si';
import { fadeInUp, staggerContainer, viewportOptions } from '../config/animations';
import { NextImage } from '../components/NextImage'
import WhatsAppButton from '../components/WhatsAppButton';
import Packages from '../components/Packages';
import TypingAnimation from '../components/TypingAnimation';
import { useState } from 'react';

const HomePage: NextPage = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
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
      nome: 'Node.js',
      descricao: 'Desenvolvimento backend com JavaScript/TypeScript',
      icone: <FaNodeJs className="w-8 h-8 text-green-600" />
    },
    {
      nome: 'React',
      descricao: 'Desenvolvimento de interfaces modernas e interativas',
      icone: <FaReact className="w-8 h-8 text-blue-400" />
    },
    {
      nome: 'PostgreSQL',
      descricao: 'Banco de dados relacional robusto e escalável',
      icone: <SiPostgresql className="w-8 h-8 text-blue-500" />
    },
    {
      nome: 'Next.js',
      descricao: 'Desenvolvimento de aplicações web modernas e performáticas',
      icone: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />
    },
    {
      nome: 'Vue.js',
      descricao: 'Desenvolvimento de interfaces reativas e progressivas',
      icone: <FaVuejs className="w-8 h-8 text-green-500" />
    },
    {
      nome: 'Angular',
      descricao: 'Desenvolvimento de aplicações web robustas e escaláveis',
      icone: <FaAngular className="w-8 h-8 text-red-500" />
    },
    {
      nome: 'PHP',
      descricao: 'Desenvolvimento backend robusto e confiável',
      icone: <FaPhp className="w-8 h-8 text-indigo-600" />
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
    },
    {
      nome: 'Firebase',
      descricao: 'Desenvolvimento de aplicações com backend serverless',
      icone: <SiFirebase className="w-8 h-8 text-orange-500" />
    }
  ];

  // Apenas os 3 primeiros projetos (mais recentes)
  const projetosRecentes = [
    {
      id: 1,
      titulo: 'ImóvelPrime',
      descricao: 'Plataforma completa para compra, venda e aluguel de imóveis. Desenvolvido com Next.js e Tailwind CSS.',
      imagem: '/projects/imobiliaria.jpeg',
      link: 'https://imobiliaria-website.vercel.app/'
    },
    {
      id: 2,
      titulo: 'Mônaco Automóveis',
      descricao: 'Plataforma completa para revenda de veículos premium e zero km desenvolvida com Next.js.',
      imagem: '/projects/loja-carros.jpeg',
      link: 'https://monacoautomoveis.com.br/'
    },
    {
      id: 3,
      titulo: 'Tá Na Mão Menu',
      descricao: 'Sistema de cardápio digital para restaurantes, desenvolvido com Next.js e JavaScript.',
      imagem: '/projects/tanamaomenu-logo.jpeg',
      link: 'https://www.tanamaomenu.com.br/'
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
          <div className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            <TypingAnimation 
              texts={[
                "Desenvolvedor Full Stack",
                "Criador de soluções inovadoras e experiências digitais",
                "Apaixonado por transformar ideias em realidade"
              ]}
              speed={50}
              pause={3000}
              className="text-primary-600 dark:text-primary-400"
            />
          </div>
          
          {/* CTA Forte */}
          <motion.div 
            className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 mb-8 text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para transformar suas ideias em realidade?
            </h2>
            <p className="text-lg mb-6">
              Vamos criar algo incrível juntos! Entre em contato agora mesmo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/5512991364890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Fale comigo no WhatsApp
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Envie uma mensagem
              </Link>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center sm:flex-row items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
            <a
              href="/curriculo-rafael.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-white text-primary-600 dark:text-primary-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-100 transition-colors animate-pulse-scale"
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
          <div className="text-center mb-8">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.5 }}
            >
              Habilidades
            </motion.h2>
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              {showAllSkills ? 'Ver em Carrossel' : 'Ver Todos'}
            </button>
          </div>

          {showAllSkills ? (
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
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{habilidade.descricao}</p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="relative w-full overflow-hidden py-4">
              <div className="flex flex-nowrap animate-marquee hover:[animation-play-state:paused]">
                <div className="flex flex-shrink-0 justify-around gap-6 pr-6">
                  {habilidades.map((habilidade) => (
                    <div 
                      key={habilidade.nome} 
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex-shrink-0 w-64 h-full"
                    >
                      <div className="flex justify-center mb-4">
                        {habilidade.icone}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-center">{habilidade.nome}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{habilidade.descricao}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-shrink-0 justify-around gap-6 pr-6" aria-hidden="true">
                  {habilidades.map((habilidade) => (
                    <div 
                      key={`${habilidade.nome}-duplicate`} 
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex-shrink-0 w-64 h-full"
                    >
                      <div className="flex justify-center mb-4">
                        {habilidade.icone}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-center">{habilidade.nome}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{habilidade.descricao}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
              <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
            </div>
          )}
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
            {projetosRecentes.map((projeto) => (
              <motion.div 
                key={projeto.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                variants={fadeInUp}
              >
                <div className="relative h-48">
                  <NextImage
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{projeto.titulo}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{projeto.descricao}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      Ver online
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Botão Ver mais projetos */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/projetos"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:bg-primary-700 hover:shadow-xl hover:-translate-y-1"
            >
              Ver mais projetos
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.section>
      </main>
      <Packages />
      <WhatsAppButton />
    </>
  );
};

export default HomePage;
