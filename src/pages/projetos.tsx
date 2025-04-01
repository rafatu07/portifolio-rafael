import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const projetos = [
  {
    id: 1,
    titulo: 'Sistema Controle Faturas',
    descricao: 'Sistema de gerenciamento de faturas e controle financeiro desenvolvido com Next.js, Firebase e JavaScript. Permite o cadastro, controle e acompanhamento de faturas, além de gerar relatórios financeiros.',
    imagem: '/projects/sistema-controlefaturas.jpeg',
    tecnologias: ['Next.js', 'JavaScript', 'Firebase', 'Tailwind CSS'],
    link: 'https://menu-modulos.vercel.app/'
  },
  {
    id: 2,
    titulo: 'RTI Sistema',
    descricao: 'Landing page profissional para empresa de desenvolvimento de software, apresentando serviços, soluções e diferenciais da empresa. Desenvolvida com foco em performance e experiência do usuário.',
    imagem: '/projects/rtisistema-logo.jpeg',
    tecnologias: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    link: 'https://www.rtisistema.com.br/'
  },
  {
    id: 4,
    titulo: 'Tá Na Mão Menu',
    descricao: 'Sistema de cardápio digital para restaurantes, desenvolvido com Next.js, Firebase e JavaScript. Permite que os clientes visualizem o cardápio, façam pedidos e acompanhem o status do pedido em tempo real.',
    imagem: '/projects/tanamaomenu-logo.jpeg',
    tecnologias: ['Next.js', 'JavaScript', 'Firebase', 'Tailwind CSS'],
    link: 'https://www.tanamaomenu.com.br/'
  },
  {
    id: 5,
    titulo: 'Loja Contém Amor',
    descricao: 'E-commerce desenvolvido com Next.js e Tailwind CSS, focado em produtos artesanais e personalizados. Inclui sistema de carrinho, pagamentos e área administrativa.',
    imagem: '/projects/lojacontemamor-logo.jpeg',
    tecnologias: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    link: 'https://www.lojacontemamor.com.br/'
  }
];

const ProjetosPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projetos | Rafael Turino</title>
        <meta name="description" content="Projetos desenvolvidos por Rafael Turino" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Meus Projetos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority={projeto.id === 1}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{projeto.titulo}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {projeto.descricao}
                </p>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold mb-2">Tecnologias utilizadas:</h3>
                  <div className="flex flex-wrap gap-2">
                    {projeto.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Ver o site
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ProjetosPage; 