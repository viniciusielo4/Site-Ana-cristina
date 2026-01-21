import React from 'react';
import { Mail, Phone, Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';

const Contato = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase">
            Vamos conversar
          </span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">
            Entre em Contato
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Estou pronta para ajudar você a alcançar seu máximo potencial. Entre em contato e agende sua primeira sessão!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Cards de Contato */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* E-mail */}
          <a
            href="mailto:crisielo14@gmail.com"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-amber-400/50 transition-all transform hover:scale-105 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">E-mail</h3>
                <p className="text-amber-400 font-medium text-lg group-hover:text-amber-300 transition-colors">
                  crisielo14@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* Telefone */}
          <a
            href="tel:+5548991124127"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-amber-400/50 transition-all transform hover:scale-105 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Telefone</h3>
                <p className="text-amber-400 font-medium text-lg group-hover:text-amber-300 transition-colors">
                  (48) 99112-4127
                </p>
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/@Anacrielo"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-amber-400/50 transition-all transform hover:scale-105 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Instagram</h3>
                <p className="text-amber-400 font-medium text-lg group-hover:text-amber-300 transition-colors">
                  @Anacrielo
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* WhatsApp Destaque */}
        <div className="max-w-4xl mx-auto mb-16">
          <a
            href="https://wa.me/5548991124127"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-3xl p-10 border-2 border-green-400/40 hover:border-green-400/70 transition-all transform hover:scale-105 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Fale comigo no WhatsApp
                  </h3>
                  <p className="text-green-300 text-lg font-medium">
                    Atendimento rápido e personalizado
                  </p>
                </div>
              </div>
              <div className="bg-white/10 px-8 py-4 rounded-lg group-hover:bg-white/20 transition-all">
                <p className="text-white font-bold text-xl">Iniciar Conversa</p>
              </div>
            </div>
          </a>
        </div>

        {/* Informações Adicionais */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Localização */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Atendimento
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white">Online:</span> Atendo atletas de todo o Brasil via Google Meet
                </p>
                <p className="text-slate-300 leading-relaxed mt-2">
                  <span className="font-semibold text-white">Presencial:</span> Consulte disponibilidade para orientação parental
                </p>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Horário de Atendimento
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Entre em contato para agendar sua sessão no melhor horário para você.
                </p>
                <p className="text-amber-300 font-medium mt-3">
                  Flexibilidade de horários para atender sua rotina
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="text-center mt-16 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-12 border border-amber-400/30">
          <h3 className="text-4xl font-bold text-white mb-4">
            Dê o primeiro passo!
          </h3>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Juntos, vamos trabalhar seu potencial mental para alcançar resultados extraordinários no esporte e na vida.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5548991124127"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="mailto:crisielo14@gmail.com"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-amber-400 text-white font-bold px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;