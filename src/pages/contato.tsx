import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { fadeInUp, viewportOptions } from '../config/animations';

const ContatoPage: NextPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = `Olá Rafael! Me chamo ${formData.nome}.\n\nEmail: ${formData.email}\n\nMensagem: ${formData.mensagem}`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5512991364890?text=${mensagemCodificada}`, '_blank');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <>
      <Head>
        <title>Contato | Rafael Turino</title>
        <meta name="description" content="Entre em contato com Rafael Turino - Desenvolvedor Full Stack" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Entre em Contato
        </motion.h1>

        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <a
              href="https://github.com/rafaturino"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-turino/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors"
            >
              <FaLinkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </a>
            <a
              href="https://wa.me/5512991364890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-green-100 dark:bg-green-900/20 rounded-full hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors"
            >
              <FaWhatsapp className="w-6 h-6 text-green-600 dark:text-green-400" />
            </a>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6">
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </div>
      </main>
    </>
  );
};

export default ContatoPage; 