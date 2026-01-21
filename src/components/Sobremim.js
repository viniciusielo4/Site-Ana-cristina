import React from 'react';
import { Award, Heart, Mountain, BookOpen, Users, Target, Trophy, Briefcase, GraduationCap } from 'lucide-react';

const SobreMim = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Seção Principal - Quem Sou */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase">
            Conheça minha história
          </span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* História e Apresentação */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <Heart className="w-8 h-8 text-amber-400" />
                Prazer, sou Ana Cristina Ielo
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  Tenho 54 anos, sou esposa, mãe, corredora e triatleta. Já concluí maratona e provas longas de triatlo, experiências que me conectam profundamente com os desafios que meus atletas enfrentam.
                </p>
                <p className="text-lg">
                  Desde 2007, atuo na psicologia do esporte, atendendo atletas amadores e profissionais de diversas modalidades. Minha missão é ajudar cada atleta a alcançar seu máximo potencial através do treino mental.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-8 border border-amber-400/30">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Mountain className="w-7 h-7 text-amber-400" />
                Meu Objetivo Atual
              </h4>
              <p className="text-white text-lg leading-relaxed">
                Tornar-me a maior referência do Brasil em psicologia do esporte para trail run e ultramaratonas, combinando minha experiência prática como atleta com minha expertise profissional.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Trophy className="w-7 h-7 text-amber-400" />
                Conquistas Olímpicas
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-400/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Prata em Tóquio 2020</p>
                    <p className="text-slate-300">Confederação Brasileira de Skate</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-700/30 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Bronze em Paris 2024</p>
                    <p className="text-slate-300">Confederação Brasileira de Skate</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-300 mt-6 leading-relaxed">
                Trabalho junto à Confederação Brasileira de Skate com atletas olímpicos, acompanhando de forma virtual atletas em Olimpíadas e Mundiais.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <BookOpen className="w-7 h-7 text-amber-400" />
                Abordagem ACT
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Sou especialista em treino mental de atletas de alta performance, utilizando a abordagem ACT (Terapia de Aceitação e Compromisso), amplamente validada cientificamente. Por meio dela, tenho obtido excelentes resultados com meus atletas, tanto profissionais quanto amadores.
              </p>
            </div>
          </div>
        </div>

        {/* Formação e Experiência */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Formação e Experiência
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 mx-auto">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white text-center mb-4">
                Psicóloga Clínica do Esporte
              </h4>
              <p className="text-slate-300 text-center leading-relaxed">
                Especialização em Psicologia do Esporte com foco em treino mental e alta performance
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 mx-auto">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white text-center mb-4">
                Desde 2007
              </h4>
              <p className="text-slate-300 text-center leading-relaxed">
                Mais de 17 anos de experiência atendendo atletas amadores e profissionais
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white text-center mb-4">
                Especialista em ACT
              </h4>
              <p className="text-slate-300 text-center leading-relaxed">
                Terapia de Aceitação e Compromisso validada cientificamente
              </p>
            </div>
          </div>
        </div>



        {/* Diferenciais */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Meus Diferenciais
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-amber-400" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Atleta Praticante</h4>
              <p className="text-slate-300 text-sm">
                Vivencio na prática os desafios do esporte, tendo completado maratonas e provas de triatlo
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Resultados Olímpicos</h4>
              <p className="text-slate-300 text-sm">
                Contribuí para conquistas de medalhas olímpicas trabalhando com atletas de elite
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-amber-400" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Base Científica</h4>
              <p className="text-slate-300 text-sm">
                Utilizo metodologias validadas cientificamente como a ACT para resultados comprovados
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-amber-400" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Atendimento Completo</h4>
              <p className="text-slate-300 text-sm">
                Do amador ao profissional, do presencial ao virtual, adaptado às suas necessidades
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMim;