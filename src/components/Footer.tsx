import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Seção Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Contato</h3>
            <div className="space-y-4">
              <a
                href="mailto:rafa.tu@hotmail.com"
                className="flex items-center justify-center md:justify-start gap-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
              >
                <FaEnvelope className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">rafa.tu@hotmail.com</span>
              </a>
              <a
                href="https://wa.me/5512991364890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
              >
                <FaWhatsapp className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">(12) 99136-4890</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Taubaté, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Seção Links Rápidos */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-block text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-block text-sm"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  href="/projetos" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-block text-sm"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link 
                  href="/contato" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-block text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Seção Redes Sociais */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Redes Sociais</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/rafatu07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-turino-de-oliveira-60000294/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/5512991364890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-green-500 hover:text-white dark:hover:bg-green-500 dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Rafael Turino. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
