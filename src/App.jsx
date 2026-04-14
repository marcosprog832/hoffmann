import React from 'react';
// Importando as imagens da pasta assets/imagens
import logoHoffmann from './assets/images/logo-hoffmann.png';
import heroBg from './assets/images/hero-high-end.jpg';

// Importando as 6 novas imagens para os cards
import automacaoCard from './assets/images/automacao-card.jpg';
import energiaSolarCard from './assets/images/energia-solar-card.jpg';
import segurancaCard from './assets/images/seguranca-card.jpg';
import somAmbienteCard from './assets/images/som-ambiente-card.jpg';
import acessoCard from './assets/images/acesso-card.jpg';
import redesCard from './assets/images/redes-card.jpg';

function App() {
  // Números de WhatsApp configurados (com o 55 do Brasil na frente)
  const whatsAppSinop = "5566996067392";
  const whatsAppSorriso = "5566992230604";
  const whatsAppCascavel = "5545984286252";

  return (
    <div className="font-sans antialiased">
      
      {/* Header / Navbar Minimalista - LOGO AUMENTADO */}
      <header className="fixed w-full z-50 glass">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo da Empresa - Tamanho Aumentado */}
            <img src={logoHoffmann} alt="Hoffmann Soluções Tecnológicas" className="h-16 md:h-20 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm uppercase font-semibold tracking-widest text-gray-300">
            <a href="#solucoes" className="hover:text-accent transition">Soluções</a>
            <a href="#portfolio" className="hover:text-accent transition">Clientes</a>
            <a href="#unidades" className="hover:text-accent transition">Unidades</a>
            <a href={`https://wa.me/${whatsAppSinop}`} target="_blank" rel="noreferrer" className="bg-primary text-white text-xs px-6 py-3 rounded-full hover:bg-accent transition transform hover:scale-105">
              Falar com a Matriz
            </a>
          </div>
        </nav>
      </header>

     
       {/* Hero Section - AJUSTE FINO DE POSICIONAMENTO */}
      <section 
        className="relative h-screen flex items-center justify-center hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay Escuro */}
        <div className="absolute inset-0 bg-dark bg-opacity-80"></div>
        
        {/* Container Principal */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 z-10 flex flex-col lg:flex-row justify-between w-full h-full pt-32 pb-20">
            
            {/* LADO ESQUERDO: Títulos Principais (MAIS PARA CIMA) */}
            <div className="max-w-xl w-full text-left self-start lg:mt-10">
                <h2 className="text-[#020817] font-bold tracking-[0.3em] uppercase text-sm mb-4 animate-pulse">
                    Automação Tecnológica Exclusiva
                </h2>
                <h1 className="text-[#2307f4e8] text-5xl md:text-7xl font-black leading-tight tracking-tighter hero-title-sharp">
                    Sua vida em <br /> Alta Performance.
                </h1>
            </div>

            {/* LADO DIREITO: EFEITO DE ESCALA PARA "SENSAÇÃO DE ZOOM 90%" */}
            <div className="w-full lg:w-[320px] lg:text-right self-end mb-6 ml-auto lg:-mr-5 xl:-mr-10 flex flex-col items-end transform lg:scale-90 origin-right">
                <p className="text-[#020817] mb-6 text-base font-light leading-relaxed w-full opacity-90">
                    Integração inteligente de sistemas de <span className="text-[#020817] font-semibold">energia solar</span>, 
                    <span className="text-[#020817] font-semibold"> automação residencial</span>, 
                    <span className="text-[#020817] font-semibold"> segurança eletrônica</span> e 
                    <span className="text-[#020817] font-semibold"> som ambiente</span>. 
                    <br /><br />
                    <span className="text-[#020817] font-bold tracking-[0.3em] uppercase text-xs mb-4 opacity-80"> Validado por + de 7 mil clientes</span> usufruindo da tecnologia de ponta no MT e PR.
                </p>
                
                <div className="flex flex-col items-end gap-4 w-full">
                    <a href="#solucoes" className="bg-[#020817] hover:bg-[#0a192f] text-white font-black px-8 py-3 rounded-xl transition transform hover:scale-105 shadow-lg w-full text-center inline-block whitespace-nowrap text-sm uppercase tracking-wider">
                        Descubra nossas Tecnologias
                    </a>
                    
                    <div className="text-[#020817] text-xs font-bold flex items-center justify-end gap-2 drop-shadow-md whitespace-nowrap uppercase tracking-tighter">
                        <span>Controle Inteligente na Palma da Mão</span>
                        <i className="fas fa-check-circle text-[#020817] text-base"></i>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Gradiente suave na parte inferior */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent"></div>
      </section>

      {/* Seção de Soluções Detalhadas (Tech Grid) - FUNDO SUTIL E TEXTO NITIDO */}
      <section id="solucoes" className="py-24 px-6 bg-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm">O Portfólio dos Especialistas</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mt-2">Tecnologias Integradas</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Automação Residencial */}
            <div className="tech-card rounded-3xl border border-gray-800">
                <img src={automacaoCard} alt="Fundo Automação Residencial" className="card-img-bg" />
                <div className="card-overlay"></div>
                <div className="card-content p-10">
                    <div className="flex items-center gap-4 mb-6">
                        <i className="fas fa-house-laptop text-4xl text-accent"></i>
                        <h3 className="text-xl font-semibold text-white">Automação Residencial</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Controle total de iluminação cênica, climatização, persianas e home theater através de interfaces intuitivas ou comando de voz. Conforto inigualável.
                    </p>
                </div>
            </div>

            {/* Energia Solar */}
            <div className="tech-card rounded-3xl border border-gray-800">
                <img src={energiaSolarCard} alt="Fundo Energia Solar" className="card-img-bg" />
                <div className="card-overlay"></div>
                <div className="card-content p-10">
                    <div className="flex items-center gap-4 mb-6">
                        <i className="fas fa-solar-panel text-4xl text-yellow-500"></i>
                        <h3 className="text-xl font-semibold text-white">Energia Solar</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Projetos de engenharia própria para máxima eficiência energética. Redução drástica de custos com homologação rápida e pós-venda garantido.
                    </p>
                </div>
            </div>

            {/* Segurança Eletrônica */}
            <div className="tech-card rounded-3xl border border-gray-800">
                <img src={segurancaCard} alt="Fundo Segurança Eletrônica" className="card-img-bg" />
                <div className="card-overlay"></div>
                <div className="card-content p-10">
                    <div className="flex items-center gap-4 mb-6">
                        <i className="fas fa-shield-virus text-4xl text-red-500"></i>
                        <h3 className="text-xl font-semibold text-white">Segurança Eletrônica</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Sistemas de CFTV com inteligência artificial para detecção perimetral, alarmes monitorados e proteção 24h para seu patrimônio.
                    </p>
                </div>
            </div>

            {/* Som Ambiente */}
            <div className="tech-card rounded-3xl border border-gray-800">
                <img src={somAmbienteCard} alt="Fundo Som Ambiente" className="card-img-bg" />
                <div className="card-overlay"></div>
                <div className="card-content p-10">
                    <div className="flex items-center gap-4 mb-6">
                        <i className="fas fa-music text-4xl text-purple-500"></i>
                        <h3 className="text-xl font-semibold text-white">Som Ambiente</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Sistemas de som ambiente multi-room invisíveis e salas de cinema corporativas ou residenciais com calibração de áudio profissional.
                    </p>
                </div>
            </div>

            {/* Controladores de Acesso */}
            <div className="tech-card rounded-3xl border border-gray-800">
                <img src={acessoCard} alt="Fundo Controladores de Acesso" className="card-img-bg" />
                <div className="card-overlay"></div>
                <div className="card-content p-10">
                    <div className="flex items-center gap-4 mb-6">
                        <i className="fas fa-fingerprint text-4xl text-green-500"></i>
                        <h3 className="text-xl font-semibold text-white">Controladores de Acesso</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Fechaduras inteligentes, reconhecimento facial e leitores biométricos integrados para gestão segura de fluxo em condomínios e empresas.
                    </p>
                </div>
            </div>

            {/* Redes e Wi-Fi */}
            <div className="tech-card rounded-3xl border border-gray-800">
                <img src={redesCard} alt="Fundo Redes e Wi-Fi" className="card-img-bg" />
                <div className="card-overlay"></div>
                <div className="card-content p-10">
                    <div className="flex items-center gap-4 mb-6">
                        <i className="fas fa-network-wired text-4xl text-orange-500"></i>
                        <h3 className="text-xl font-semibold text-white">Redes e Wi-Fi</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Cabeamento estruturado de alta velocidade e redes Wi-Fi 6 Mesh corporativas. A base sólida para que todas as outras tecnologias funcionem sem travamentos.
                    </p>
                </div>
            </div>

          </div>
        </div>
      </section>
   {/* --- SEÇÃO: DEPOIMENTOS REAIS (DADOS DOS PRINTS) --- */}
      <section id="depoimentos" className="py-20 px-6 bg-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold tracking-widest uppercase text-xs">Experiências Reais</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter mt-2">A Voz de Quem Confia</h2>
            <div className="w-12 h-1 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
              { nome: "Marcos Santos", icon: "fa-shield-check", color: "text-accent", text: "Conheci através de indicação, gostei muito do atendimento e disponibilidade, nunca se negou a prestar apoio ou assistência quer seja na garantia ou fora dela." },
              { nome: "Marlon Ferri", icon: "fa-check-double", color: "text-green-500", text: "Fui atendido de forma rápida prática e com execução de qualidade, e ótimo atendimento." },
              { nome: "Cicero Silva", icon: "fa-bolt", color: "text-yellow-500", text: "Ótimo atendimento e agilidade nos serviços. E profissionalismo." },
              { nome: "Mayza Leal", icon: "fa-award", color: "text-gold", text: "Ótimo atendimento, equipamentos de excelentes marcas e muito responsáveis caso surja alguma assistência." },
              { nome: "Márcio Claudenir", icon: "fa-thumbs-up", color: "text-blue-500", text: "Empresa de referência, já indiquei à amigos e a satisfação foi garantida!" },
              { nome: "Marlon Pacheco", icon: "fa-star", color: "text-orange-500", text: "Serviço de qualidade e ótimo atendimento!" }
            ].map((item, index) => (
              <div key={index} className="glass p-6 rounded-2xl border border-gray-800/50 flex flex-col h-full transform hover:scale-[1.02] transition duration-300 hover:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-dark/50 border border-gray-800 flex items-center justify-center">
                    <i className={`fas ${item.icon} text-lg ${item.color}`}></i>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-bold text-sm">{item.nome}</h4>
                    <div className="flex text-gold text-[10px]">
                      <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 font-light leading-relaxed text-sm italic flex-grow">
                    "{item.text}"
                </p>
            </div>
            ))}

          </div>
        </div>
      </section>
      

      {/* PORTFÓLIO & CLIENTES DE REFERÊNCIA - LISTA DO PDF INSERIDA */}
      <section id="portfolio" className="py-24 px-6 bg-dark-card border-y border-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm">Credibilidade Comprovada</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mt-2">Nossa Referência em Clientes</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="glass p-12 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-12 font-light text-gray-400 text-sm leading-relaxed border border-gray-800/50">
            
            {/* Coluna Grupos, Franquias, Empresas (image_2.png) */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                <i className="fas fa-industry text-primary"></i> Grupos & Franquias
              </h4>
              <ul className="space-y-2 list-none">
                <li className="brand-pwr">Tigre</li>
                <li>Ramasa</li>
                <li>Feldhaus</li>
                <li className="brand-pwr">Amaggi</li>
                <li>Melozi</li>
                <li className="pt-2 brand-pwr">Centauro</li>
                <li>Vivara</li>
                <li>Brandilli</li>
                <li className="brand-pwr">Lojas Americanas</li>
                <li className="brand-pwr">Hering</li>
                <li>Spoleto</li>
                <li>Koni</li>
                <li className="brand-pwr">Tim</li>
                <li className="brand-pwr">Claro</li>
              </ul>
            </div>

            {/* Coluna Empresas (image_2.png) */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                <i className="fas fa-building text-yellow-600"></i> Empresas & Referências
              </h4>
              <ul className="space-y-2 list-none">
                <li className="brand-pwr">Marinha do Brasil <span className="text-xs">(Sinop - Pluvial)</span></li>
                <li className="pt-2">Posto Trevão Matupá III</li>
                <li>Campo e Lavoura</li>
                <li>Eco Centauro</li>
                <li>Agrorural</li>
                <li>Agronorte</li>
                <li className="brand-pwr">Acrinorte</li>
                <li className="brand-pwr">Volvo</li>
                <li>AABB Sinop</li>
                <li>Quiosque Celular</li>
                <li>Luz e Vida</li>
              </ul>
            </div>

            {/* Coluna Pessoas físicas, Hotéis, Fazendas (image_2.png) */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                <i className="fas fa-tractor text-green-600"></i> Agro & Hospitalidade
              </h4>
              <ul className="space-y-2 list-none">
                <li>Fazenda Terraway</li>
                <li>Fazenda Agrolina</li>
                <li>Fazenda Matao</li>
                <li>Fazenda Sol a Sol</li>
                <li>Fazenda Locatelli</li>
                <li className="pt-2">Débora e Valmir (Gago Transportes)</li>
                <li>Elizete Mabilir (Mabilete)</li>
                <li>Gilson Gobbi</li>
                <li className="brand-pwr pt-2">Condomínio Life Sinop</li>
                <li>Hotel Cascavel</li>
                <li>Hotel Barcelona</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Seção de Unidades e Contato Direto (Permanece igual) */}
      <section id="unidades" className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white tracking-tighter">Onde Estamos</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Matriz - Sinop */}
            <div className="glass p-8 rounded-2xl flex flex-col items-center justify-between h-full">
              <div>
                <i className="fas fa-map-marker-alt text-3xl text-primary mb-4"></i>
                <h3 className="text-2xl font-bold text-white">Sinop - MT</h3>
                <p className="text-gray-400 mt-2 font-light mb-6">Matriz atendendo todo o nortão do estado.</p>
              </div>
              <a href={`https://wa.me/${whatsAppSinop}`} target="_blank" rel="noreferrer" className="w-full bg-[#25D366] text-white font-semibold py-3 rounded-xl hover:bg-green-600 transition flex items-center justify-center gap-2">
                <i className="fab fa-whatsapp text-lg"></i> Falar com Sinop
              </a>
            </div>

            {/* Filial - Sorriso */}
            <div className="glass p-8 rounded-2xl border border-accent/30 flex flex-col items-center justify-between h-full transform md:-translate-y-4 shadow-lg shadow-accent/10">
              <div>
                <i className="fas fa-map-marker-alt text-3xl text-accent mb-4"></i>
                <h3 className="text-2xl font-bold text-accent">Sorriso - MT</h3>
                <p className="text-gray-400 mt-2 font-light mb-6">Presença forte na capital do agronegócio.</p>
              </div>
              <a href={`https://wa.me/${whatsAppSorriso}`} target="_blank" rel="noreferrer" className="w-full bg-[#25D366] text-white font-semibold py-3 rounded-xl hover:bg-green-600 transition flex items-center justify-center gap-2">
                <i className="fab fa-whatsapp text-lg"></i> Falar com Sorriso
              </a>
            </div>

            {/* Filial - Cascavel */}
            <div className="glass p-8 rounded-2xl flex flex-col items-center justify-between h-full">
              <div>
                <i className="fas fa-map-marker-alt text-3xl text-primary mb-4"></i>
                <h3 className="text-2xl font-bold text-white">Cascavel - PR</h3>
                <p className="text-gray-400 mt-2 font-light mb-6">Levando a Tecnologia Hoffmann para o Sul.</p>
              </div>
              <a href={`https://wa.me/${whatsAppCascavel}`} target="_blank" rel="noreferrer" className="w-full bg-[#25D366] text-white font-semibold py-3 rounded-xl hover:bg-green-600 transition flex items-center justify-center gap-2">
                <i className="fab fa-whatsapp text-lg"></i> Falar com Cascavel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Corporativo */}
      <footer className="py-12 border-t border-gray-800 bg-dark-card text-gray-500 text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="font-bold text-white text-lg">Hoffmann Soluções Tecnológicas</p>
            <p>Tecnologia de ponta em MT e PR</p>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; 2026 Hoffmann Tecnologia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp (Aponta para a Matriz por padrão) */}
      <a href={`https://wa.me/${whatsAppSinop}`} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl transform hover:scale-110 transition shadow-[#25D366]/30">
        <i className="fab fa-whatsapp"></i>
      </a>

    </div>
  );
}

export default App;