import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '../config/animations';
import { FaLaptop, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const Packages = () => {
  const pacotes = [
    {
      id: 1,
      titulo: 'Site Profissional',
      subtitulo: 'Site Institucional Completo',
      descricao: 'Ideal para empresas que precisam de uma presença online moderna e confiável.',
      caracteristicas: [
        'Até 5 páginas (Home, Sobre, Serviços, Contato, etc.)',
        'Design responsivo (adaptado para celular/tablet)',
        'Formulário de contato integrado',
        'Otimização básica para Google (SEO inicial)',
        'Entrega rápida: até 10 dias úteis'
      ],
      valor: 'R$ 1.000,00',
      icone: <FaLaptop className="w-12 h-12 text-primary-600" />,
      idealPara: 'lojas, clínicas, escritórios, prestadores de serviço'
    },
    {
      id: 2,
      titulo: 'Landing Page',
      subtitulo: 'Landing Page Focada em Vendas',
      descricao: 'Página única feita para conversão de vendas, captura de leads ou lançamento de produtos.',
      caracteristicas: [
        'Página única com rolagem',
        'Copywriting básico (ajuda na escrita para vendas)',
        'Formulário de contato ou botão WhatsApp'
      ],
      valor: 'R$ 500,00',
      icone: <FaMobileAlt className="w-12 h-12 text-primary-600" />,
      idealPara: 'lançamentos, eventos, serviços específicos'
    },
    {
      id: 3,
      titulo: 'Sistema Personalizado',
      subtitulo: 'Sistema Simples Sob Medida',
      descricao: 'Aplicações sob medida para resolver necessidades específicas.',
      caracteristicas: [
        'Sistema Web 100% personalizado',
        'Painel administrativo',
        'Banco de dados (Firebase, MySQL ou outro)',
        'Responsividade para dispositivos móveis',
        'Hospedagem e publicação inclusas (caso o cliente queira)'
      ],
      valor: 'R$ 1.800,00',
      icone: <FaDatabase className="w-12 h-12 text-primary-600" />,
      idealPara: 'controle de orçamentos, cadastro de clientes, cardápios digitais, etc.'
    }
  ];

  return (
    <motion.section 
      className="py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOptions}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.5 }}
        >
          Nossos Pacotes
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Escolha o pacote ideal para o seu negócio
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
        >
          {pacotes.map((pacote) => (
            <motion.div
              key={pacote.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col h-full"
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-6">
                {pacote.icone}
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">{pacote.titulo}</h3>
              <p className="text-lg text-primary-600 dark:text-primary-400 text-center mb-4">{pacote.subtitulo}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{pacote.descricao}</p>
              
              <ul className="space-y-3 mb-8">
                {pacote.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{caracteristica}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">
                  Ideal para: {pacote.idealPara}
                </p>
                <a
                  href="https://wa.me/5512991364890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Packages; 