import React from 'react';
import HeroSection from '../components/HeroSection';
import Sobremim from '../components/Sobremim'
import Servicos from '../components/Servicos';
import Contatos from '../components/Contatos'

const Home = () => {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="sobre">
        <Sobremim />
      </section>

      <section id="servicos">
        <Servicos />
      </section>

      <section id="contato">
        <Contatos />
      </section>
    </div>
  );
};

export default Home;