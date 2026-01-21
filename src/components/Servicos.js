import React from 'react';
import { Video, User, Users, Briefcase, MessageCircle, BookOpen, Headphones, Film, UserCheck, Award, Clock, CheckCircle } from 'lucide-react';

const Servicos = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase">
            Como posso te ajudar
          </span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">
            Meus Serviços
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Oferecemos diferentes modalidades de atendimento para atender às suas necessidades específicas
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Serviço Principal - Mentoria Online */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-10 border-2 border-amber-400/40 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Video className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Mentoria Online</h3>
                <p className="text-amber-300 font-medium">Programa de 1 mês</p>
              </div>
            </div>

            <p className="text-white text-lg mb-8 leading-relaxed">
              Programa completo de acompanhamento psicológico esportivo com atendimento personalizado e suporte contínuo durante 1 mês.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-amber-400" />
                  Como funciona:
                </h4>
                
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Quatro encontros online via Google Meet</p>
                    <p className="text-slate-300 text-sm">Duração de 1 hora cada</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Primeiro encontro</p>
                    <p className="text-slate-300 text-sm">Anamnese e avaliação das habilidades psicológicas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Definição conjunta</p>
                    <p className="text-slate-300 text-sm">Estratégias mentais personalizadas que serão utilizadas</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-amber-400" />
                  O que está incluso:
                </h4>

                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Suporte via WhatsApp</p>
                    <p className="text-slate-300 text-sm">Durante todo o mês de acompanhamento</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                  <BookOpen className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Ebook personalizado</p>
                    <p className="text-slate-300 text-sm">Criado de acordo com suas necessidades específicas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Avaliação e feedback</p>
                    <p className="text-slate-300 text-sm">Análise do que funcionou e pontos de evolução</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                  <Headphones className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Áudio personalizado</p>
                    <p className="text-slate-300 text-sm">Visualização da prova-alvo ou mindfulness</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                  <Film className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Material complementar</p>
                    <p className="text-slate-300 text-sm">Indicação de livros, vídeos, filmes e séries</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                  <UserCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Sessão parental (quando necessário)</p>
                    <p className="text-slate-300 text-sm">Para adolescentes ou orientação familiar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outros Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Sessões Individuais */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 mx-auto">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Sessões Individuais Avulsas
            </h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <p>Duração: 50 minutos a 1 hora</p>
              </div>
              <p className="text-center leading-relaxed mt-4">
                Atendimento pontual para trabalhar questões específicas do momento ou para quem prefere acompanhamento mais flexível.
              </p>
            </div>
          </div>

          {/* Orientação Parental */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Orientação Parental no Esporte
            </h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <p>Duração: 1 hora e 30 minutos</p>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-amber-400" />
                <p>Suporte WhatsApp: 15 dias</p>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <p>Ebook personalizado</p>
              </div>
              <p className="text-center leading-relaxed mt-4">
                Orientação para pais que desejam apoiar melhor seus filhos atletas. Disponível online ou presencial.
              </p>
            </div>
          </div>

          {/* Palestras e Supervisão */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 mx-auto">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Palestras e Supervisão
            </h3>
            <div className="space-y-3 text-slate-300">
              <p className="font-semibold text-white">Palestras para:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <span>Assessorias esportivas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <span>Times esportivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <span>Empresas</span>
                </li>
              </ul>
              <p className="font-semibold text-white mt-4">Supervisão clínica:</p>
              <p className="ml-4">Para psicólogos que atuam ou desejam atuar no esporte</p>
            </div>
          </div>
        </div>

        {/* Observação sobre Descontos */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30">
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-blue-300 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-2xl font-bold text-white mb-3">Condições Especiais</h4>
              <p className="text-slate-200 text-lg leading-relaxed">
                Descontos e preços especiais disponíveis para parceiros, assessorias esportivas e profissionais da área da saúde.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-6">
            Pronto para começar sua jornada?
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato para agendar sua sessão e dar o primeiro passo rumo ao seu melhor desempenho.
          </p>
          <a
            href="#contato"
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-10 py-5 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  );
};

export default Servicos;