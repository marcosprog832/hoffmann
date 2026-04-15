import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Menu, X, ChevronDown, MapPin, MessageCircle,
  Home, Sun, Shield, Music, Fingerprint, Wifi,
  Star, Quote, Building2, Factory, Tractor
} from 'lucide-react';

// ===== ASSETS (substituir pelos caminhos das suas imagens) =====
import logoHoffmann from './assets/images/logo-hoffmann.png';
import heroBg from './assets/images/hero-high-end.jpg';
import automacaoCard from './assets/images/automacao-card.jpg';
import energiaSolarCard from './assets/images/energia-solar-card.jpg';
import segurancaCard from './assets/images/seguranca-card.jpg';
import somAmbienteCard from './assets/images/som-ambiente-card.jpg';
import acessoCard from './assets/images/acesso-card.jpg';
import redesCard from './assets/images/redes-card.jpg';

// ===== CONSTANTES =====
const WHATSAPP_SINOP = "5566996067392";
const WHATSAPP_SORRISO = "5566992230604";
const WHATSAPP_CASCAVEL = "5545984286252";

// ===== PARTICLE GRID =====
const ParticleGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

// ===== ANIMATED COUNTER =====
const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-cyan-400">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-gray-400 text-sm mt-2 uppercase tracking-widest">{label}</p>
    </motion.div>
  );
};

// ===== NAVBAR =====
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#solucoes", label: "Soluções" },
    { href: "#portfolio", label: "Clientes" },
    { href: "#unidades", label: "Unidades" },
  ];

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "glass-strong shadow-lg shadow-background/50" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <img src={logoHoffmann} alt="Hoffmann" className="h-12 md:h-14 w-auto" />
          <div className="hidden sm:block">
            <span className="font-bold text-black text-lg tracking-tight">Tecnologia que proteje</span>
            <span className="block text-[10px] text-gray-400 tracking-[0.2em] uppercase">e gera valor.</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-400 hover:text-cyan-400 text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href={`https://wa.me/${WHATSAPP_SINOP}`} target="_blank" rel="noreferrer"
            className="bg-cyan-500 text-white text-xs font-bold px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 uppercase tracking-wider">
            Falar com a Matriz
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-gray-800">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="text-white font-medium py-2 uppercase tracking-wide text-sm">{l.label}</a>
              ))}
              <a href={`https://wa.me/${WHATSAPP_SINOP}`} target="_blank" rel="noreferrer"
                className="bg-cyan-500 text-white font-bold px-6 py-3 rounded-full text-center text-sm uppercase tracking-wider">
                Falar com a Matriz
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// ===== HERO SECTION =====
const HeroSection = () => (
  <section className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-white/60" />
    </div>
    <ParticleGrid />
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <span className="text-black font-semibold tracking-[0.3em] uppercase text-xs md:text-sm inline-flex items-center gap-2">
            <span className="w-8 h-[2px] bg-black" />
            Automação Tecnológica Exclusiva
          </span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.95] mt-6 tracking-tight">
          Sua vida em<br /><span className="text-blue-700">Alta Performance.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-800 text-lg md:text-xl mt-8 max-w-xl leading-relaxed">
          Integração inteligente de{" "}<span className="text-black font-medium">energia solar</span>,{" "}
          <span className="text-black font-medium">automação</span>,{" "}
          <span className="text-black font-medium">segurança eletrônica</span> e{" "}
          <span className="text-black font-medium">som ambiente</span>.<br />
          <span className="text-blue-700 font-semibold">+ de 7 mil clientes</span> no MT e PR.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#solucoes" className="bg-black text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-900 hover:shadow-xl transition-all duration-300 text-center uppercase tracking-wider text-sm">
            Descubra nossas Tecnologias
          </a>
          <a href="#unidades" className="border-2 border-black text-black font-semibold px-8 py-4 rounded-xl hover:bg-black hover:text-white transition-all duration-300 text-center uppercase tracking-wider text-sm">
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </div>
    <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-gray-400 text-xs uppercase tracking-widest">Scroll</span>
      <ChevronDown className="w-5 h-5 text-cyan-400" />
    </motion.div>
  </section>
);

// ===== SOLUTION CARD =====
const SolutionCard = ({ image, icon: Icon, title, description, iconColor, index }) => (
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -8 }}
    className="group relative rounded-2xl overflow-hidden border border-gray-800 card-hover cursor-pointer">
    <div className="absolute inset-0">
      <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gray-950/85 group-hover:bg-gray-950/75 transition-all duration-500" />
    </div>
    <div className="relative p-8 min-h-[280px] flex flex-col justify-between">
      <div>
        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:glow-box transition-all duration-500">
          <Icon className={`w-7 h-7 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-cyan-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Saiba mais</span>
        <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }}>→</motion.span>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

// ===== SOLUTIONS SECTION =====
const solutions = [
  { image: automacaoCard, icon: Home, title: "Automação Residencial", description: "Controle total de iluminação cênica, climatização, persianas e home theater através de interfaces intuitivas ou comando de voz. Conforto inigualável.", iconColor: "text-cyan-400" },
  { image: energiaSolarCard, icon: Sun, title: "Energia Solar", description: "Projetos de engenharia própria para máxima eficiência energética. Redução drástica de custos com homologação rápida e pós-venda garantido.", iconColor: "text-gold" },
  { image: segurancaCard, icon: Shield, title: "Segurança Eletrônica", description: "Sistemas de CFTV com inteligência artificial para detecção perimetral, alarmes monitorados e proteção 24h para seu patrimônio.", iconColor: "text-destructive" },
  { image: somAmbienteCard, icon: Music, title: "Som Ambiente", description: "Sistemas de som ambiente multi-room invisíveis e salas de cinema corporativas ou residenciais com calibração de áudio profissional.", iconColor: "text-cyan-400" },
  { image: acessoCard, icon: Fingerprint, title: "Controladores de Acesso", description: "Fechaduras inteligentes, reconhecimento facial e leitores biométricos integrados para gestão segura de fluxo em condomínios e empresas.", iconColor: "text-success" },
  { image: redesCard, icon: Wifi, title: "Redes e Wi-Fi", description: "Cabeamento estruturado de alta velocidade e redes Wi-Fi 6 Mesh corporativas. A base sólida para que todas as outras tecnologias funcionem sem travamentos.", iconColor: "text-gold" },
];

const SolutionsSection = () => (
  <section id="solucoes" className="relative py-24 px-6">
    <div className="absolute inset-0 tech-grid-bg opacity-20" />
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
    <div className="container mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="glass-strong rounded-2xl p-8 mb-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        <AnimatedCounter end={7000} suffix="+" label="Clientes" />
        <AnimatedCounter end={3} label="Unidades" />
        <AnimatedCounter end={6} label="Soluções" />
        <AnimatedCounter end={2} label="Estados" />
      </motion.div>
      <div className="text-center mb-16">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-cyan-400 font-semibold tracking-[0.3em] uppercase text-xs">
          O Portfólio dos Especialistas
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-3">
          Tecnologias Integradas
        </motion.h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mt-6 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((s, i) => <SolutionCard key={s.title} {...s} index={i} />)}
      </div>
    </div>
  </section>
);

// ===== TESTIMONIAL CARD =====
const TestimonialCard = ({ nome, text, index }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ scale: 1.02 }}
    className="glass rounded-2xl p-6 flex flex-col h-full card-hover">
    <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />
    <p className="text-gray-400 text-sm leading-relaxed italic flex-grow">"{text}"</p>
    <div className="mt-5 pt-4 border-t border-gray-800/50 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
          <span className="text-cyan-400 font-bold text-sm">{nome.charAt(0)}</span>
        </div>
        <span className="text-white font-semibold text-sm">{nome}</span>
      </div>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold text-gold" />)}
      </div>
    </div>
  </motion.div>
);

// ===== TESTIMONIALS SECTION =====
const testimonials = [
  { nome: "Marcos Santos", text: "Conheci através de indicação, gostei muito do atendimento e disponibilidade, nunca se negou a prestar apoio ou assistência quer seja na garantia ou fora dela." },
  { nome: "Marlon Ferri", text: "Fui atendido de forma rápida prática e com execução de qualidade, e ótimo atendimento." },
  { nome: "Cicero Silva", text: "Ótimo atendimento e agilidade nos serviços. E profissionalismo." },
  { nome: "Mayza Leal", text: "Ótimo atendimento, equipamentos de excelentes marcas e muito responsáveis caso surja alguma assistência." },
  { nome: "Márcio Claudenir", text: "Empresa de referência, já indiquei à amigos e a satisfação foi garantida!" },
  { nome: "Marlon Pacheco", text: "Serviço de qualidade e ótimo atendimento!" },
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-24 px-6 relative">
    <div className="absolute inset-0 gradient-radial pointer-events-none" />
    <div className="container mx-auto relative z-10">
      <div className="text-center mb-14">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-cyan-400 font-semibold tracking-[0.3em] uppercase text-xs">
          Experiências Reais
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-3">
          A Voz de Quem Confia
        </motion.h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => <TestimonialCard key={t.nome} {...t} index={i} />)}
      </div>
    </div>
  </section>
);

// ===== CLIENTS SECTION =====
const clientColumns = [
  {
    icon: Factory, title: "Grupos & Franquias", iconColor: "text-cyan-400",
    items: [
      { name: "Tigre", highlight: true }, { name: "Ramasa" }, { name: "Feldhaus" },
      { name: "Amaggi", highlight: true }, { name: "Melozi" }, { name: "Centauro", highlight: true },
      { name: "Vivara" }, { name: "Brandilli" }, { name: "Lojas Americanas", highlight: true },
      { name: "Hering", highlight: true }, { name: "Spoleto" }, { name: "Koni" },
      { name: "Tim", highlight: true }, { name: "Claro", highlight: true },
    ],
  },
  {
    icon: Building2, title: "Empresas & Referências", iconColor: "text-gold",
    items: [
      { name: "Marinha do Brasil (Sinop - Pluvial)", highlight: true },
      { name: "Posto Trevão Matupá III" }, { name: "Campo e Lavoura" },
      { name: "Eco Centauro" }, { name: "Agrorural" }, { name: "Agronorte" },
      { name: "Acrinorte", highlight: true }, { name: "Volvo", highlight: true },
      { name: "AABB Sinop" }, { name: "Quiosque Celular" }, { name: "Luz e Vida" },
    ],
  },
  {
    icon: Tractor, title: "Agro & Hospitalidade", iconColor: "text-success",
    items: [
      { name: "Fazenda Terraway" }, { name: "Fazenda Agrolina" }, { name: "Fazenda Matao" },
      { name: "Fazenda Sol a Sol" }, { name: "Fazenda Locatelli" },
      { name: "Débora e Valmir (Gago Transportes)" }, { name: "Elizete Mabilir (Mabilete)" },
      { name: "Gilson Gobbi" }, { name: "Condomínio Life Sinop", highlight: true },
      { name: "Hotel Cascavel" }, { name: "Hotel Barcelona" },
    ],
  },
];

const ClientsSection = () => (
  <section id="portfolio" className="py-24 px-6 border-y border-gray-800">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-cyan-400 font-semibold tracking-[0.3em] uppercase text-xs">
          Credibilidade Comprovada
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-3">
          Nossa Referência em Clientes
        </motion.h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mt-6 rounded-full" />
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="glass-strong rounded-2xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {clientColumns.map((col) => {
          const Icon = col.icon;
          return (
            <div key={col.title}>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <Icon className={`w-5 h-5 ${col.iconColor}`} />{col.title}
              </h4>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item.name} className={`text-sm ${item.highlight ? "text-white font-semibold" : "text-gray-400"} hover:text-cyan-400 transition-colors duration-200 cursor-default`}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

// ===== LOCATIONS SECTION =====
const locations = [
  { city: "Sinop", state: "MT", desc: "Matriz atendendo todo o nortão do estado.", wa: WHATSAPP_SINOP, featured: false },
  { city: "Sorriso", state: "MT", desc: "Presença forte na capital do agronegócio.", wa: WHATSAPP_SORRISO, featured: true },
  { city: "Cascavel", state: "PR", desc: "Levando a Tecnologia Hoffmann para o Sul.", wa: WHATSAPP_CASCAVEL, featured: false },
];

const LocationsSection = () => (
  <section id="unidades" className="py-24 px-6 relative">
    <div className="absolute inset-0 tech-grid-bg opacity-10" />
    <div className="container mx-auto relative z-10">
      <div className="text-center mb-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Onde Estamos
        </motion.h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto mt-5 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {locations.map((loc, i) => (
          <motion.div key={loc.city} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`glass rounded-2xl p-8 flex flex-col items-center text-center card-hover ${loc.featured ? "border-cyan-500/30 glow-border md:-translate-y-3" : ""}`}>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${loc.featured ? "bg-cyan-500/15" : "bg-secondary"}`}>
              <MapPin className={`w-7 h-7 ${loc.featured ? "text-cyan-400" : "text-gray-400"}`} />
            </div>
            <h3 className={`text-2xl font-bold ${loc.featured ? "text-cyan-400" : "text-white"}`}>
              {loc.city} - {loc.state}
            </h3>
            <p className="text-gray-400 mt-2 text-sm flex-grow">{loc.desc}</p>
            <a href={`https://wa.me/${loc.wa}`} target="_blank" rel="noreferrer"
              className="mt-6 w-full bg-success text-white font-bold py-3.5 rounded-xl hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
              <MessageCircle className="w-4 h-4" />Falar com {loc.city}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ===== FOOTER =====
const Footer = () => (
  <footer className="py-12 border-t border-gray-800">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-center md:text-left">
        <p className="font-bold text-white text-lg">Hoffmann Soluções Tecnológicas</p>
        <p className="text-gray-400 text-sm">Tecnologia de ponta em MT e PR</p>
      </div>
      <p className="text-gray-400 text-sm">&copy; 2026 Hoffmann Tecnologia. Todos os direitos reservados.</p>
    </div>
  </footer>
);

// ===== WHATSAPP FAB =====
const WhatsAppFab = () => (
  <motion.a href="https://wa.me/5566996067392" target="_blank" rel="noreferrer"
    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: "spring" }} whileHover={{ scale: 1.1 }}
    className="fixed bottom-6 right-6 z-50 bg-success w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-success/30 pulse-glow">
    <MessageCircle className="w-7 h-7 text-white" />
  </motion.a>
);

// ===== APP PRINCIPAL =====
function App() {
  return (
    <div className="font-body antialiased">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <TestimonialsSection />
      <ClientsSection />
      <LocationsSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default App;
