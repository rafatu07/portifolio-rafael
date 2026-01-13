import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useRef, useMemo } from 'react';
import { fadeInUp, staggerContainer, viewportOptions } from '../config/animations';

const projetos = [
  {
    id: 10,
    titulo: 'Dr. Matheus Duque',
    descricao: 'Site institucional completo para cirurgião oncológico desenvolvido com foco em apresentação profissional e acolhimento. Plataforma moderna e responsiva com seções sobre o médico, convênios aceitos (Unimed, Bradesco Saúde, SulAmérica, Amil, Porto Seguro, Notre Dame, Cassi, Particular), áreas de atuação detalhadas (Oncologia Ginecológica, Tumores Gastrointestinais, Oncologia Cutânea e de Partes Moles) e integração direta com WhatsApp para agendamento de consultas. Design acolhedor e otimizado para conversão, com informações de localização e credenciais profissionais.',
    imagem: '/projects/drmatheusduque.jpeg',
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://drmatheusduque.vercel.app/'
  },
  {
    id: 9,
    titulo: 'Colégio Integração',
    descricao: 'Site institucional completo para colégio desenvolvido com Vite e React. Plataforma moderna e responsiva com apresentação da instituição, informações sobre cursos, estrutura, corpo docente e formulários de contato. Interface otimizada para performance e experiência do usuário.',
    imagem: '/projects/colegio-integracao.jpeg',
    tecnologias: ['Vite', 'React', 'JavaScript', 'Tailwind CSS'],
    link: 'https://www.colegiointegracaotaubate.com.br'
  },
  {
    id: 1,
    titulo: 'Louvemais',
    descricao: 'Sistema completo para gestão de grupos de louvor com Progressive Web App (PWA). Oferece gestão inteligente de escalas com controle de disponibilidade e confirmação automática, repertórios digitais organizados, gerenciamento completo de equipe com permissões, controle de indisponibilidade dos integrantes, notificações via WhatsApp, relatórios personalizados e interface 100% responsiva. Desenvolvido com foco na experiência mobile-first para líderes de louvor e suas equipes.',
    imagem: '/projects/louvemais.jpeg',
    tecnologias: ['Next.js', 'TypeScript', 'Firebase', 'PWA', 'Tailwind CSS'],
    link: 'https://grupolouvor-app.vercel.app/'
  },
  {
    id: 2,
    titulo: 'AtivaBOT',
    descricao: 'Sistema avançado de atendimento multicanal com foco em performance, escalabilidade e experiência do usuário. Integra diversos módulos voltados ao suporte técnico e comercial via canais digitais, com dashboard interativo de métricas em tempo real, painel de atendimento com suporte a múltiplas conversas, templates, etiquetas, mensagens rápidas, Kanban de atendimento, gerenciamento de usuários e permissões, relatórios personalizados e administração de chatbots. Interface 100% responsiva e acessível.',
    imagem: '/projects/ativabot.jpeg',
    tecnologias: ['Vue.js', 'Quasar Framework', 'Node.js', 'PostgreSQL'],
    link: 'https://ativabot.com.br/'
  },
  {
    id: 3,
    titulo: 'ImóvelPrime',
    descricao: 'Plataforma completa de negócios imobiliários desenvolvida com Next.js e Tailwind CSS. Sistema robusto para compra, venda e aluguel de imóveis, com mais de 10.000 propriedades disponíveis, filtros avançados, sistema de favoritos e gestão completa de propriedades.',
    imagem: '/projects/imobiliaria.jpeg',
    tecnologias: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://imobiliaria-website.vercel.app/'
  },
  {
    id: 4,
    titulo: 'Mônaco Automóveis',
    descricao: 'Plataforma completa para revenda de veículos premium e zero km desenvolvida com Next.js. Sistema robusto com catálogo de carros, filtros avançados, sistema de comparação, depoimentos de clientes e formulário de contato. Integração com Firebase para gerenciamento de dados e Cloudinary para otimização de imagens.',
    imagem: '/projects/loja-carros.jpeg',
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Cloudinary', 'Framer Motion'],
    link: 'https://monacoautomoveis.com.br/'
  },
  {
    id: 5,
    titulo: 'Tá Na Mão Menu',
    descricao: 'Sistema de cardápio digital para restaurantes, desenvolvido com Next.js, Firebase e JavaScript. Permite que os clientes visualizem o cardápio, façam pedidos em tempo real.',
    imagem: '/projects/tanamaomenu-logo.jpeg',
    tecnologias: ['Next.js', 'JavaScript', 'Firebase', 'Tailwind CSS'],
    link: 'https://www.tanamaomenu.com.br/'
  },
  {
    id: 6,
    titulo: 'RTI Sistema',
    descricao: 'Landing page profissional para empresa de desenvolvimento de software, apresentando serviços, soluções e diferenciais da empresa. Desenvolvida com foco em performance e experiência do usuário.',
    imagem: '/projects/rtisistema-logo.jpeg',
    tecnologias: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    link: 'https://www.rtisistema.com.br/'
  },
  {
    id: 7,
    titulo: 'Sistema Controle Faturas',
    descricao: 'Sistema de gerenciamento de faturas e controle financeiro desenvolvido com Next.js, Firebase e JavaScript. Permite o cadastro, controle e acompanhamento de faturas, além de gerar relatórios financeiros.',
    imagem: '/projects/sistema-controlefaturas.jpeg',
    tecnologias: ['Next.js', 'JavaScript', 'Firebase', 'Tailwind CSS'],
    link: 'https://menu-modulos.vercel.app/'
  },
  {
    id: 8,
    titulo: 'Loja Contém Amor',
    descricao: 'Landing page desenvolvido com Next.js e Tailwind CSS, focado em produtos artesanais e personalizados.',
    imagem: '/projects/lojacontemamor-logo.jpeg',
    tecnologias: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    link: 'https://www.lojacontemamor.com.br/'
  }
];

const ProjetosPage: NextPage = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [imageModal, setImageModal] = useState<{ isOpen: boolean; src: string; alt: string }>({
    isOpen: false,
    src: '',
    alt: ''
  });
  const projetosPorPagina = 6;
  
  // Calcular número total de páginas
  const totalPaginas = Math.ceil(projetos.length / projetosPorPagina);
  
  // Obter projetos da página atual
  const projetosAtuais = useMemo(() => {
    const indiceInicial = (paginaAtual - 1) * projetosPorPagina;
    return projetos.slice(indiceInicial, indiceInicial + projetosPorPagina);
  }, [paginaAtual]);

  const irParaPagina = (numeroPagina: number) => {
    if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
      setPaginaAtual(numeroPagina);
      // Rolar para o topo da seção quando mudar de página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleExpanded = (id: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, techCount: number) => {
    if (techCount < 3) return; // Só ativa carrossel se há 3 ou mais tecnologias
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const containerWidth = rect.width;
    
    // Calcular a porcentagem da posição do mouse (0 = esquerda, 1 = direita)
    const mousePercent = Math.max(0, Math.min(1, x / containerWidth));
    
    // Calcular o scroll máximo baseado no número de tecnologias
    const maxScroll = (techCount - 2.5) * 80; // Ajustado para funcionar com 3 tecnologias
    const scrollAmount = mousePercent * maxScroll;
    
    const techContainer = container.querySelector('.tech-scroll') as HTMLElement;
    if (techContainer) {
      techContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const techContainer = container.querySelector('.tech-scroll') as HTMLElement;
    if (techContainer) {
      techContainer.style.transform = 'translateX(0)';
    }
  };

  const openImageModal = (src: string, alt: string) => {
    setImageModal({ isOpen: true, src, alt });
  };

  const closeImageModal = () => {
    setImageModal({ isOpen: false, src: '', alt: '' });
  };

  return (
    <>
      <Head>
        <title>Projetos | Rafael Turino</title>
        <meta name="description" content="Projetos desenvolvidos por Rafael Turino" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Meus Projetos
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          key={`pagina-${paginaAtual}`} // Forçar re-render da animação quando mudar de página
        >
          {projetosAtuais.map((projeto) => {
            const isExpanded = expandedCards[projeto.id];
            const shouldShowToggle = projeto.descricao.length > 150;
            
            return (
              <motion.div 
                key={projeto.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col relative"
                variants={fadeInUp}
              >
                <div 
                  className="relative h-48 cursor-pointer group overflow-hidden"
                  onClick={() => openImageModal(projeto.imagem, projeto.titulo)}
                >
                  <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                    priority={projeto.id === 1}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                      <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={`p-6 flex flex-col ${isExpanded ? 'pb-40' : 'pb-28'}`}>
                  <h2 className="text-xl font-semibold mb-2">{projeto.titulo}</h2>
                  <div className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed relative">
                    <div className={`${!isExpanded && shouldShowToggle ? 'max-h-16 overflow-hidden' : ''} relative`}>
                      <p>{projeto.descricao}</p>
                      {!isExpanded && shouldShowToggle && (
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
                      )}
                    </div>
                    {shouldShowToggle && (
                      <div className="flex justify-end mt-2">
                        <button
                          onClick={() => toggleExpanded(projeto.id)}
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-xs flex items-center gap-1 transition-colors"
                        >
                          {isExpanded ? (
                            <>
                              <span>mostrar menos</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                              </svg>
                            </>
                          ) : (
                            <>
                              <span>continuar lendo</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`absolute left-4 right-4 ${isExpanded ? 'bottom-16' : 'bottom-12'}`}>
                  <h3 className="text-sm font-semibold mb-2">Tecnologias utilizadas:</h3>
                  <div 
                    className="relative overflow-hidden"
                    onMouseMove={(e) => handleMouseMove(e, projeto.tecnologias.length)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div 
                      className="tech-scroll flex gap-2 transition-transform duration-300 ease-out"
                    >
                      {projeto.tecnologias.map((tech, index) => (
                        <span
                          key={`${tech}-${index}`}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full whitespace-nowrap flex-shrink-0"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Indicador visual de que há mais tecnologias */}
                    {projeto.tecnologias.length >= 3 && (
                      <div className="absolute top-0 right-0 bottom-0 w-4 bg-gradient-to-l from-white dark:from-gray-800 to-transparent pointer-events-none flex items-center justify-center">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm"
                  >
                    Ver o site
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Paginação */}
        {totalPaginas > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button 
                onClick={() => irParaPagina(paginaAtual - 1)}
                disabled={paginaAtual === 1}
                className={`p-2 rounded-lg ${
                  paginaAtual === 1 
                  ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' 
                  : 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                }`}
                aria-label="Página anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Números das páginas */}
              {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(numero => (
                <button
                  key={numero}
                  onClick={() => irParaPagina(numero)}
                  className={`px-3 py-1 rounded-lg ${
                    paginaAtual === numero
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  }`}
                >
                  {numero}
                </button>
              ))}
              
              <button 
                onClick={() => irParaPagina(paginaAtual + 1)}
                disabled={paginaAtual === totalPaginas}
                className={`p-2 rounded-lg ${
                  paginaAtual === totalPaginas 
                  ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' 
                  : 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                }`}
                aria-label="Próxima página"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        )}

        {/* Modal da Imagem */}
        {imageModal.isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeImageModal}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Fechar modal"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={imageModal.src}
                alt={imageModal.alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                quality={100}
              />
              <p className="text-white text-center mt-2 text-sm">{imageModal.alt}</p>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default ProjetosPage; 