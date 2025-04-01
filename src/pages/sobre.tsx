import { NextPage } from 'next';
import Head from 'next/head';
import { FaCode, FaServer, FaDatabase, FaPalette, FaLaptopCode, FaMobileAlt, FaDesktop, FaNetworkWired } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTypescript, SiNestjs, SiTailwindcss, SiAngular, SiFirebase } from 'react-icons/si';

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sobre | Rafael Turino</title>
        <meta name="description" content="Sobre Rafael Turino, desenvolvedor full stack" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Sobre Mim</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaLaptopCode className="w-8 h-8 text-primary-600 dark:text-primary-400 mt-1" />
              <p className="text-gray-600 dark:text-gray-300">
                Sou um desenvolvedor Full Stack com experiência em desenvolvimento web, mobile e desktop.
                Possuo conhecimento em várias tecnologias, incluindo React, Next.js, TypeScript,
                Angular, NestJS, Firebase, Git e outras ferramentas modernas.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <FaMobileAlt className="w-8 h-8 text-primary-600 dark:text-primary-400 mt-1" />
              <p className="text-gray-600 dark:text-gray-300">
                Minha experiência inclui o desenvolvimento de aplicações web responsivas, 
                sistemas de gerenciamento de conteúdo, e-commerce, aplicações mobile e desktop.
                Também tenho noções em integração com serviços externos, autenticação e autorização,
                e otimização de performance.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <FaDesktop className="w-8 h-8 text-primary-600 dark:text-primary-400 mt-1" />
              <p className="text-gray-600 dark:text-gray-300">
                Sou um desenvolvedor apaixonado por aprender novas tecnologias e compartilhar conhecimento.
                Acredito em trabalhar em equipe e em criar soluções que atendam às necessidades dos usuários
                e dos negócios.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <FaCode className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2" />
                <h3 className="font-medium mb-2">Front-end</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-1">
                    <SiReact className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">React</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SiNextdotjs className="w-5 h-5 text-black dark:text-white" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Next.js</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SiTypescript className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SiAngular className="w-5 h-5 text-red-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Angular</span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <FaServer className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2" />
                <h3 className="font-medium mb-2">Back-end</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-1">
                    <SiNestjs className="w-5 h-5 text-red-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">NestJS</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaServer className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Node.js</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaNetworkWired className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">APIs</span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <FaDatabase className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2" />
                <h3 className="font-medium mb-2">Banco de Dados</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-1">
                    <SiFirebase className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Firebase</span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <FaPalette className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2" />
                <h3 className="font-medium mb-2">UI/UX</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-1">
                    <SiTailwindcss className="w-5 h-5 text-cyan-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage; 