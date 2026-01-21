import React from 'react';
import { Download, Award, BookOpen, Heart, Mountain } from 'lucide-react';

const HeroSection = () => {
const handleDownloadPDF = () => {
    // Cria um link temporário para fazer o download
    const link = document.createElement('a');
    link.href = '/port-ana.pdf';
    link.download = 'port-ana.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Esquerda - Texto */}
          <div className="text-white space-y-6 animate-fadeIn">
            <div className="inline-block">
              <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase">
               
              </span>
            </div>
            

                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Muito prazer!
                </h1>
          
            
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Ana Cristina Ielo
            </h2>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Psicóloga do Esporte especializada em treino mental de alta performance
            </p>
            
            <div className="flex gap-4 pt-6">
              <button
                onClick={handleDownloadPDF}
                className="group flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Portfólio
              </button>
              
              <a
                href="#servicos"
                className="flex items-center gap-2 border-2 border-white/30 hover:border-amber-400 text-white hover:text-amber-400 font-semibold px-8 py-4 rounded-lg backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
              >
                Conhecer Serviços
              </a>
            </div>
          </div>
          
          {/* Coluna da Direita - Foto de Perfil */}
          <div className="relative flex justify-center">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-2 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="/img/Perfil.jpeg" 
                  alt="Ana Cristina Ielo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>
      
      {/* Card de Informações Detalhado */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2">54 anos</h3>
                <p className="text-xl text-slate-300">Esposa, Mãe, Atleta</p>
              </div>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"></div>
            
            <div className="grid md:grid-cols-2 gap-6 text-white">
              <div className="flex items-start gap-4 bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <Heart className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-2">Experiência desde 2007</p>
                  <p className="text-slate-300 leading-relaxed">
                    Mais de 17 anos atendendo atletas amadores e profissionais de diversas modalidades esportivas
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <Award className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-2">Confederação Brasileira de Skate</p>
                  <p className="text-slate-300 leading-relaxed">
                    Trabalho com atletas olímpicos do skate - Prata em Tóquio e Bronze em Paris
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <BookOpen className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-2">Especialista em ACT</p>
                  <p className="text-slate-300 leading-relaxed">
                    Terapia de Aceitação e Compromisso validada cientificamente para treino mental de alta performance
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <Mountain className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-2">Objetivo Atual</p>
                  <p className="text-slate-300 leading-relaxed">
                    Tornar-me a maior referência do Brasil em trail run e ultramaratonas
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-400/30">
              <p className="text-white text-base leading-relaxed">
                <span className="font-bold text-amber-400 text-lg">Corredora e Triatleta: </span>
                Já concluí maratona e provas longas de triatlo. Acompanhei, de forma virtual, atletas em Olimpíadas e Mundiais.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção de Modalidades */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Modalidades Esportivas
            </h2>
            <p className="text-slate-300 text-lg">
              Atendimento especializado para atletas de diversas modalidades
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Corrida', 'Natação', 'Triatlo', 'Skate', 'Surfe', 'Motocross',
              'Velocross', 'Kart', 'Tiro Esportivo', 'Vôlei', 'Futebol', 'Tênis',
              'Beach Tênis', 'Padel', 'Hipismo', 'Trail Run'
            ].map((modalidade, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <p className="text-white font-medium text-sm">{modalidade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;