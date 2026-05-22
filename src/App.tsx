/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { 
  Zap, 
  Shield, 
  Rocket, 
  Layout, 
  MessageSquare, 
  ChevronDown, 
  Check, 
  Cpu,
  BarChart3,
  Users,
  Settings,
  Search,
  Menu,
  X,
  ArrowRight,
  Globe,
  DollarSign
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Types ---
interface Plan {
  name: string;
  meta: string;
  price: { usd: number; ars: string; clp: string };
  duration: string;
  btnText: string;
  use: string;
  features: string[];
  popular?: boolean;
}

interface Case {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  tag: string;
  demoLayout: string; 
  features: string[];
}

// --- Navbar Component ---
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#proceso", label: "Metodología" },
    { href: "#servicios", label: "Qué Incluye" },
    { href: "#planes", label: "Planes" },
    { href: "#proyectos", label: "Galería de Scroll" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyber-pink/20 bg-cyber-black/95 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-cyber-pink rounded-sm -skew-x-12 flex items-center justify-center font-black text-black text-lg shadow-[0_0_15px_rgba(255,0,127,0.4)] group-hover:scale-105 transition-transform">
            I
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase leading-none text-white">
            Impulso<span className="text-cyber-pink">IT</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] font-black text-white/50">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="hover:text-cyber-pink hover:tracking-[0.3em] transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Floating Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://wa.me/5515981723627" 
            target="_blank"
            rel="noreferrer"
            className="bg-cyber-pink px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white hover:bg-cyber-pink/80 transition-all border-r-[5px] border-white active:scale-95 shadow-[0_0_15px_rgba(255,0,127,0.3)] hover:shadow-[0_0_25px_rgba(255,0,127,0.5)]"
          >
            WhatsApp ↗
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/70 hover:text-cyber-pink transition-colors focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cyber-black border-t border-white/10 px-6 py-8 space-y-6 "
          >
            <div className="flex flex-col gap-5 text-sm uppercase tracking-widest font-bold">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/70 hover:text-cyber-pink transition-colors py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-cyber-pink/50" />
                </a>
              ))}
            </div>
            <div className="pt-4">
              <a 
                href="https://wa.me/5515981723627" 
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-cyber-pink px-6 py-4 text-xs font-black uppercase tracking-widest text-white border-r-[6px] border-white shadow-lg"
              >
                IMPULSAR MI WEB POR WHATSAPP ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Component ---
const Hero = () => {
  const titles = [
    { text: "Tu sitio web por suscripción: lanzá en 2 a 5 días, pagá mes a mes.", tag: "// EFICIENCIA PURA" },
    { text: "No esperes meses por tu web: suscripción mensual, diseño brutal y listo en 2 a 5 días.", tag: "// DISEÑO BRUTAL" },
    { text: "Impulsá tu negocio con una web cyberpunk lista en días, no en meses.", tag: "// IMPACTO COMERCIAL" }
  ];

  const [activeTitleIndex, setActiveTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTitleIndex((prev) => (prev + 1) % titles.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [titles.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-cyber-black">
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />
      
      {/* Abstract Glowing Neon Dots */}
      <div className="absolute top-1/4 -right-10 w-[400px] h-[400px] bg-cyber-pink/10 blur-[130px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -left-10 w-[500px] h-[500px] bg-cyber-cyan/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy - Left side */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tag / Dynamic Badge */}
            <div className="inline-flex items-center gap-3">
              <span className="px-3.5 py-1.5 border border-cyber-pink/30 text-cyber-pink text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em] bg-cyber-pink/5 neon-border-pink">
                MÁXIMA VELOCIDAD: 2 A 5 DÍAS MÁXIMO
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                Cupos Activos
              </span>
            </div>

            {/* Title Stage / Slideshow with AnimatePresence */}
            <div className="min-h-[220px] md:min-h-[280px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTitleIndex}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-cyber-cyan font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] mb-4">
                    {titles[activeTitleIndex].tag}
                  </p>
                  <h1 className="text-[44px] sm:text-6xl md:text-[84px] leading-[0.85] font-black uppercase tracking-tighter italic">
                    {titles[activeTitleIndex].text.split(":").map((part, index) => {
                      if (index === 0) {
                        return (
                          <span key={index} className="block">
                            {part}
                            {titles[activeTitleIndex].text.includes(":") && <span className="text-cyber-pink">:</span>}
                          </span>
                        );
                      }
                      return (
                        <span key={index} className="block stroke-pink text-transparent mt-2">
                          {part}
                        </span>
                      );
                    })}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-lg md:text-xl text-white/65 max-w-xl leading-relaxed">
              Lanzamos tu sitio profesional en tiempo récord. Pagá mes a mes, sin desarrollos costosos ni dolores de cabeza de servidores. Soporte técnico, actualizaciones y optimización continua incluidos.
            </p>

            {/* Micro Selector buttons for interactive client control */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/30">Prueba otras ideas:</span>
              <div className="flex gap-2">
                {titles.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTitleIndex(idx)}
                    className={`w-3 h-3 rounded-none transition-all ${activeTitleIndex === idx ? "bg-cyber-pink w-6" : "bg-white/10 hover:bg-white/30"}`}
                    aria-label={`Ver título ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Bullet points & CTA Area */}
            <div className="pt-4 space-y-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-wider text-white/70">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-cyber-pink shadow-[0_0_8px_rgba(255,0,127,1)]" />
                  Lanzamiento de Landing en 2 a 5 Días
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-cyber-cyan shadow-[0_0_8px_rgba(0,243,255,1)]" />
                  Suscripción Mensual Simple
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-cyber-cyan shadow-[0_0_8px_rgba(0,243,255,1)]" />
                  Soporte Técnico y Mejoras Incluidas
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-cyber-pink shadow-[0_0_8px_rgba(255,0,127,1)]" />
                  Optimizado para Móviles & SEO
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                <a 
                  href="https://wa.me/5515981723627" 
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center justify-center bg-white text-black px-10 py-5 font-black uppercase text-center text-base hover:bg-cyber-pink hover:text-white transition-all w-full sm:w-auto relative border-b-4 border-cyber-pink hover:border-white shadow-[0_4px_20px_rgba(255,255,255,0.05)] active:translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <span>IMPULSAR MI WEB POR WHATSAPP</span>
                    <MessageSquare className="w-5 h-5 fill-current group-hover:translate-x-1.5 transition-transform" />
                  </div>
                  <span className="text-[10px] tracking-widest block opacity-70 mt-1 font-mono font-medium">Te respondemos en minutos. Sin compromiso.</span>
                </a>
              </div>

              {/* Urgency and proof badge */}
              <div className="flex items-center gap-3 border-l-2 border-cyber-pink/30 pl-4 py-1">
                <p className="text-[11px] font-mono uppercase tracking-widest text-white/40">
                  ⚠️ <span className="text-white/80 font-bold">Cupos limitados por mes</span> para garantizar calidad máxima • <span className="text-cyber-cyan font-bold">+25 proyectos lanzados este año</span>
                </p>
              </div>
            </div>

          </div>

          {/* Graphical Wireframe/Dashboard Simulation - Right side (Desktop only) */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="border border-white/10 bg-[#0a0a0a] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyber-pink/5 via-transparent to-cyber-cyan/5 pointer-events-none" />
              
              {/* Header simulator */}
              <div className="bg-[#121212] px-4 py-3 flex justify-between items-center border-b border-white/5 text-[10px] font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-white/30 ml-2">PROTOTIPO_ACTIVO.TSX</span>
                </div>
                <span className="text-cyber-pink">Uptime 99.9%</span>
              </div>

              {/* Showcase content box */}
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono bg-cyber-pink text-white px-2 py-0.5">DEV_STAGE</span>
                  <span className="text-[9px] font-mono uppercase text-white/40 tracking-wider">ENTREGA: 2-5 días</span>
                </div>

                <div className="space-y-3">
                  <div className="h-6 w-3/4 bg-white/10" />
                  <div className="h-4 w-5/6 bg-white/5" />
                  <div className="h-4 w-1/2 bg-white/5" />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-[#121212] p-4 border border-white/5">
                    <span className="text-cyber-pink block font-mono text-2xl font-black italic">2-5D</span>
                    <span className="text-[9px] font-mono uppercase text-white/40">LANDING PAGE</span>
                  </div>
                  <div className="bg-[#121212] p-4 border border-white/5">
                    <span className="text-cyber-cyan block font-mono text-2xl font-black italic">100%</span>
                    <span className="text-[9px] font-mono uppercase text-white/40">RESPONSIVE</span>
                  </div>
                </div>

                {/* Animated progress bar */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-[10px] font-mono text-white/40">
                    <span>COMPILANDO RECURSOS</span>
                    <span className="text-cyber-pink animate-pulse">CARGANDO...</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 overflow-hidden relative">
                    <motion.div 
                      className="absolute top-0 bottom-0 left-0 bg-cyber-pink shadow-[0_0_10px_#FF007F]"
                      animate={{ width: ["10%", "90%", "60%", "100%", "10%"] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                {/* Terminal outputs simulated */}
                <div className="bg-black/80 font-mono text-[9px] p-4 space-y-1 block max-h-[140px] overflow-hidden text-emerald-500">
                  <p className="text-white/30">// OUTPUT CONSOLE</p>
                  <p>&gt; npm run launch-conversion-funnel</p>
                  <p>&gt; Designing UX layout optimized for conversions...</p>
                  <p>&gt; Implementing click-to-WhatsApp pipeline [OK]</p>
                  <p className="text-cyber-pink">&gt; UPTIME_BOT: Active security backup configured.</p>
                  <p className="text-cyber-cyan">&gt; SEO_PRO: Indexing speed set to ultra-high.</p>
                </div>
              </div>
            </div>

            {/* Glowing borders */}
            <div className="absolute -inset-1 border border-cyber-pink/20 pointer-events-none -z-10 blur-sm scale-102" />
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Methodology Component ---
const Features = () => {
  const steps = [
    { 
      id: "01", 
      title: "Diagnóstico Express", 
      desc: "En una llamada o chat directo de 20 minutos pescamos tu negocio, objetivos comerciales y estilo de marca. Sin idas y vueltas ni demoras.", 
      icon: <Cpu className="w-6 h-6 text-cyber-pink" /> 
    },
    { 
      id: "02", 
      title: "Diseño & Prototipo", 
      desc: "En pocos días te mostramos el diseño de tu web con un look & feel cyberpunk moderno y vendedora, lista para realizar ajustes finos de marca.", 
      icon: <Layout className="w-6 h-6 text-cyber-cyan" /> 
    },
    { 
      id: "03", 
      title: "Lanzamiento Express", 
      desc: "Publicamos tu sitio optimizado a la velocidad de la luz (¡en 2 a 5 días para landings!). Conectado directamente con WhatsApp y redes sociales.", 
      icon: <Rocket className="w-6 h-6 text-cyber-pink" /> 
    },
    { 
      id: "04", 
      title: "Crecimiento Continuo", 
      desc: "Mes a mes actualizamos, mejoramos técnicas, optimizamos carga de contenidos y medimos conversiones para que tu web venda cada vez más.", 
      icon: <Settings className="w-6 h-6 text-cyber-cyan" /> 
    }
  ];

  return (
    <section id="proceso" className="py-28 bg-cyber-bg border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-12 items-start">
          
          {/* Header left sticky part */}
          <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <span className="text-cyber-pink font-mono text-[10px] uppercase tracking-[0.5em] font-bold block">
              // METODOLOGÍA IMPECABLE
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.9]">
              CÓMO FUNCIONA <br /> 
              TU WEB <br />
              <span className="stroke-pink">POR SUSCRIPCIÓN</span>
            </h2>
            <div className="h-1 w-20 bg-cyber-pink" />
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Olvidate de esperar meses a que un programador tradicional termine tu sitio. Implementamos una metodología ágil diseñada para ponerte a vender de inmediato.
            </p>

            {/* Crucial transparent callouts */}
            <div className="pt-6 space-y-4">
              <div className="bg-white/5 p-5 border border-white/5 flex items-start gap-3">
                <Check className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <p className="text-xs text-white/70 uppercase tracking-widest leading-relaxed">
                  <span className="text-white font-black">SIN LETRA CHICA.</span> Planes predecibles sin ningún tipo de costo oculto de instalación ni de setup técnico.
                </p>
              </div>
              <div className="bg-white/5 p-5 border border-white/5 flex items-start gap-3">
                <Check className="w-5 h-5 text-cyber-pink shrink-0 mt-0.5" />
                <p className="text-xs text-white/70 uppercase tracking-widest leading-relaxed">
                  <span className="text-white font-black">FLEXIBILIDAD ABSOLUTA.</span> Podés cambiar de plan, escalar componentes o cancelar tu suscripción libremente cuando lo necesites.
                </p>
              </div>
            </div>
          </div>

          {/* Cards right grid representation */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-8">
            {steps.map((step) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0b0b0b] p-8 border border-white/10 hover:border-cyber-pink/50 relative overflow-hidden group transition-all"
              >
                {/* Numeric index simulation watermarked */}
                <span className="absolute top-4 right-6 text-7xl font-black font-mono text-white/5 group-hover:text-cyber-pink/10 transition-colors uppercase italic select-none">
                  {step.id}
                </span>

                <div className="mb-6 p-3 bg-white/5 w-fit border border-white/5 text-cyber-pink group-hover:text-white group-hover:bg-cyber-pink transition-all">
                  {step.icon}
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">
                  {step.title}
                </h3>
                
                <p className="text-white/40 leading-relaxed font-medium text-sm italic group-hover:text-white/70 transition-colors">
                  {step.desc}
                </p>
                
                {/* Visual anchor indicator */}
                <div className="mt-8 h-1 w-0 bg-cyber-pink group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Core Services Grid ---
const ServicesGrid = () => {
  const services = [
    { 
      title: "SOPORTE TÉCNICO COMPLETO", 
      desc: "Vigilamos tu sitio las 24 horas como si fuera una nave en pleno vuelo: monitoreo de uptime, parches automáticos de seguridad, backups programados semanales y resguardo de copias integrales en servidores propios para que tu web de cara al público esté siempre en línea, estable y blindada ante ciberataques.",
      category: "SEGURIDAD INTEGRAL",
      badge: "Ininterrumpido 24/7"
    },
    { 
      title: "ACTUALIZACIÓN DE CONTENIDO VIVO", 
      desc: "Olvidate de que tu web parezca abandonada. Nos encargamos de agregar, renovar y actualizar dinámicamente textos, fotos, landing pages de productos, promociones temporales y cualquier sección clave en pocas horas. Adaptamos el contenido velozmente a tus campañas activas y dinámicas de ventas de tu mercado.",
      category: "EVOLUCIÓN CONSTANTE",
      badge: "Flexibilidad Dinámica"
    },
    { 
      title: "POSICIONAMIENTO SEO ESTRATÉGICO", 
      desc: "Preparamos y optimizamos meticulosamente la estructura técnica profunda de tu sitio para que los motores de Google lo entiendan e indexes en la cima: mejores tiempos de carga del código, compresión inteligente de imágenes, meta-etiquetas estratégicas y marcado semántico optimizado para capturar el tráfico de tus potenciales clientes.",
      category: "CRECIMIENTO ORGÁNICO",
      badge: "Listo para Google"
    },
    { 
      title: "ASESORAMIENTO Y OPTIMIZACIÓN CRO", 
      desc: "No solo programamos código impecable: te guiamos de manera constante sobre qué secciones exactas, redacción de copys persuasivos, formularios y llamados a la acción (CTA) clave debés probar para mejorar tu tasa de conversión. Tu sitio web no es un folleto digital, es una terminal enfocada en cosechar prospectos calificados.",
      category: "增长 GROWTH CONSULTING",
      badge: "Consultoría Mensual"
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-cyber-black relative">
      <div className="absolute top-0 bottom-0 left-0 right-0 cyber-grid opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6">
        
        {/* Section title */}
        <div className="max-w-4xl mb-24 space-y-4">
          <span className="text-cyber-cyan font-mono text-[10px] uppercase tracking-[0.5em] font-black block">
            // ARSENAL TECNOLÓGICO INCLUIDO
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
            ¿QUÉ INCLUYE TU <br />
            SUSCRIPCIÓN CON <span className="text-cyber-pink">IMPULSOIT?</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl font-medium leading-relaxed pt-2">
            Cubrimos todo el ciclo técnico, de diseño y comercial. Cero dolores de cabeza o tareas engorrosas para vos. Te concentrás y te ocupás únicamente en recibir los leads de ventas.
          </p>
        </div>

        {/* Dense Brutalist grid block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-white/5 border border-white/5">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="bg-cyber-black p-10 md:p-14 hover:bg-cyber-bg transition-colors group relative flex flex-col justify-between"
            >
              {/* Category indicator */}
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase block">
                  {s.category}
                </span>
                <span className="text-[10px] font-mono border border-cyber-pink/30 px-2 py-0.5 text-cyber-pink uppercase tracking-widest bg-cyber-pink/5">
                  {s.badge}
                </span>
              </div>

              {/* Title and descriptions */}
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-cyber-pink transition-colors italic leading-none">
                  {s.title}
                </h3>
                <p className="text-white/40 leading-relaxed italic text-base group-hover:text-white/60 transition-colors">
                  {s.desc}
                </p>
              </div>

              {/* Icon pointer */}
              <div className="pt-10 flex justify-between items-center">
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">PROPULSADO POR AI & CODE</span>
                <div className="w-2.5 h-2.5 bg-cyber-pink group-hover:w-8 group-hover:bg-cyber-cyan transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Diagnostics block banner */}
        <div className="mt-16 bg-[#150a0f] border border-cyber-pink/30 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-[10px] font-mono uppercase bg-cyber-pink text-white px-2 py-0.5 font-bold">// ANÁLISIS COMERCIAL SIN COSTO</span>
            <h3 className="text-3xl font-black uppercase italic tracking-tighter">¿No sabés qué plan se ajusta a tu negocio?</h3>
            <p className="text-white/50 text-sm max-w-2xl font-medium">
              Chateamos por WhatsApp, evaluamos tu modelo de negocio y tus competidores en minutos, y te sugerimos el camino de retorno más veloz. Cero compromisos.
            </p>
          </div>
          <a 
            href="https://wa.me/5515981723627" 
            target="_blank"
            rel="noreferrer"
            className="w-full lg:w-auto text-center bg-white text-black hover:bg-cyber-pink hover:text-white px-8 py-5 text-sm font-black uppercase tracking-widest whitespace-nowrap transition-all border-b-4 border-cyber-pink shadow-lg"
          >
            Sugerirme un Plan Gratis
          </a>
        </div>

      </div>
    </section>
  );
};

// --- Custom plans & Pricing section ---
const Pricing = () => {
  // Currency Toggle state: ARS, USD or CLP
  const [currency, setCurrency] = useState<"usd" | "ars" | "clp">("usd");

  const plans: Plan[] = [
    { 
      name: "LANDING IMPULSO", 
      meta: "IDEAL EMPRENDEDORES", 
      price: { usd: 149, ars: "$149.000", clp: "$149.000" },
      duration: "Mes a Mes",
      btnText: "Quiero mi landing YA",
      use: "Escribime por WhatsApp y la lanzamos en muy pocos días. Ideal para campañas rápidas, venta de un único producto estrella o captación directa de contactos calificados.",
      features: [
        "1 Landing Page moderna, súper rápida y calibrada para captar leads",
        "Estructura UX & diseño web totalmente responsive adaptado a tu marca",
        "Entrega máxima estimada: 2 a 5 días hábiles promedio",
        "1 actualización de contenido mensual (textos, logos o banners)",
        "Soporte técnico básico e informe mensual de uptime"
      ]
    },
    { 
      name: "WEBSITE PREMIUM", 
      meta: "MARCAS EN CRECIMIENTO", 
      price: { usd: 299, ars: "$299.000", clp: "$299.000" },
      duration: "Desarrollo Vivo",
      btnText: "Escalar mi web ahora",
      use: "Chateá por WhatsApp y te armamos un plan en minutos. Diseñado para empresas marcas y prestadores que necesitan exhibir credibilidad y multiplicar canales de venta de múltiples servicios.",
      popular: true,
      features: [
        "Sitio web multipágina completo con CMS autoadministrable",
        "Blog corporativo o indexación de novedades del sector",
        "Optimización de rendimiento y SEO técnico avanzado",
        "Entrega máxima estimada: 5 a 7 días hábiles según secciones",
        "Actualizaciones prioritarias ilimitadas de contenidos",
        "Soporte técnico prioritario (Canal directo de WhatsApp)"
      ]
    },
    { 
      name: "PRO CUSTOM & SFT", 
      meta: "ECOMMERCE & HIGH TECH", 
      price: { usd: 499, ars: "Consultar", clp: "Consultar" },
      duration: "A Cotizar según Alcance",
      btnText: "Hablar de mi proyecto",
      use: "Contame por WhatsApp qué querés automatizar y armamos tu cotización a medida. Para tiendas virtuales con pasarelas de pago, integraciones con CRM del equipo y sistemas cloud dedicados.",
      features: [
        "Definición técnica profunda de alcance, diagramas y roadmap",
        "E-commerce robusto, gestión de inventario y stocks automatizados",
        "Integración web con herramientas de marketing (Zapier, HubSpot)",
        "Consultoría continua de mejora de interfaces de usuario",
        "Equipo de desarrolladores especializado y soporte dedicado"
      ]
    }
  ];

  return (
    <section id="planes" className="py-32 bg-cyber-bg border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        
        {/* Header content and pricing toggle panel */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-24">
          <div className="space-y-4">
            <span className="text-cyber-pink font-mono text-[10px] uppercase tracking-[0.5em] font-bold block">
              // SUSCRIPCIÓN TRANSPARENTE
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
              PLANES <br />
              <span className="text-white/20">MENSUALES.</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base max-w-xl font-medium">
              Elegí la escala adecuada al momento comercial de tu negocio. Pagás sólo una suscripción clara: sin deudas iniciales masivas ni sorpresas técnicas en la factura.
            </p>
          </div>

          {/* Mini Interactive Selector of Currencies */}
          <div className="bg-cyber-black p-1.5 border border-white/10 flex items-center gap-2 self-start lg:self-auto uppercase font-mono text-xs font-black">
            <span className="text-white/30 px-3 py-1 text-[10px] tracking-wider block">Moneda:</span>
            <button 
              onClick={() => setCurrency("usd")}
              className={`px-3 py-1 cursor-pointer transition-all ${currency === "usd" ? "bg-cyber-pink text-white" : "text-white/50 hover:text-white"}`}
            >
              USD
            </button>
            <button 
              onClick={() => setCurrency("ars")}
              className={`px-3 py-1 cursor-pointer transition-all ${currency === "ars" ? "bg-cyber-pink text-white" : "text-white/50 hover:text-white"}`}
            >
              ARS
            </button>
            <button 
              onClick={() => setCurrency("clp")}
              className={`px-3 py-1 cursor-pointer transition-all ${currency === "clp" ? "bg-cyber-pink text-white" : "text-white/50 hover:text-white"}`}
            >
              CLP
            </button>
          </div>
        </div>

        {/* Pricing Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`p-8 md:p-10 flex flex-col justify-between transition-all relative group ${
                p.popular 
                  ? "bg-[#180811] border-2 border-cyber-pink shadow-[0_0_40px_rgba(255,0,127,0.15)] scale-100 lg:scale-[1.03] z-10" 
                  : "bg-card-bg border border-white/10 hover:border-cyber-pink/50"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyber-pink text-white text-[10px] font-black uppercase tracking-[0.25em] py-1 px-4 border-r-4 border-white shadow-md">
                  MÁS ELEGIDO BY CONVERSION RATE
                </span>
              )}

              <div>
                {/* Meta details tag */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-mono font-black uppercase text-cyber-pink tracking-[0.3em] block">
                    {p.meta}
                  </span>
                  <span className="text-[8px] font-mono uppercase bg-white/5 px-2 py-0.5 text-white/50">
                    {p.duration}
                  </span>
                </div>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 italic text-white group-hover:text-cyber-pink transition-colors">
                  {p.name}
                </h3>

                {/* Displaying dynamic pricing based on interactive curreny state */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl md:text-5xl font-mono font-black tracking-tighter italic">
                    {currency === "usd" ? (
                      `$${p.price.usd}`
                    ) : currency === "ars" ? (
                      p.price.ars
                    ) : (
                      p.price.clp
                    )}
                  </span>
                  <span className="text-xs uppercase text-white/40 font-mono">/mes</span>
                </div>

                <p className="text-xs text-white/55 italic leading-relaxed mb-8 pb-6 border-b border-white/5 font-medium">
                  {p.use}
                </p>

                {/* Feature checklist */}
                <ul className="space-y-4 mb-12">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex gap-4 text-xs font-bold uppercase tracking-tight text-white/70 italic align-top">
                      <div className="w-1.5 h-1.5 bg-cyber-pink shrink-0 mt-1.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons with WhatsApp links */}
              <div>
                <a 
                  href="https://wa.me/5515981723627?text=Hola!%20Me%20interesa%20el%20plan%20asociado%20a%20su%20agencia%20de%20suscripcion%20web" 
                  target="_blank"
                  rel="noreferrer"
                  className={`block py-5 font-black uppercase text-center tracking-widest text-xs transition-all relative overflow-hidden group/btn ${
                    p.popular 
                      ? "bg-cyber-pink text-white hover:bg-white hover:text-black border-r-4 border-white shadow-[0_0_20px_rgba(255,0,127,0.3)]" 
                      : "bg-[#1f1f1f] text-white hover:bg-cyber-pink border-r-4 border-white/40 hover:border-white"
                  }`}
                >
                  {p.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global shared rows banner */}
        <div className="mt-12 bg-cyber-black border border-white/5 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/5">
            <div className="pt-4 md:pt-0 pb-4 md:pb-0 font-bold uppercase text-xs tracking-widest text-white/60 flex items-center justify-center md:justify-start gap-3">
              <Check className="w-4 h-4 text-cyber-pink" /> 0% de costos ocultos de instalación técnica.
            </div>
            <div className="pt-4 md:pt-0 pb-4 md:pb-0 md:pl-8 font-bold uppercase text-xs tracking-widest text-white/60 flex items-center justify-center md:justify-start gap-3">
              <Check className="w-4 h-4 text-cyber-cyan" /> Ajustes mensuales y mejoras continuas de diseño.
            </div>
            <div className="pt-4 md:pt-0 md:pl-8 font-bold uppercase text-xs tracking-widest text-white/60 flex items-center justify-center md:justify-start gap-3">
              <Check className="w-4 h-4 text-cyber-pink" /> Soporte humano inmediato garantizado en todo momento.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Portfolio & Case interactive preview grid (movimiento sutil interactivo) ---
const SuccessStories = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const cases: Case[] = [
    {
      id: "REST_URBAN",
      title: "RESTAURANTE URBANO",
      subtitle: "Look gastronómico oscuro y de alto contraste.",
      desc: "Diseñamos una landing page súper veloz con menú interactivo optimizado para móviles, reservas integradas directamente en WhatsApp y transiciones inmersivas que abren el apetito visual del usuario de inmediato.",
      tag: "Parallax FX & Menú Dinámico",
      features: ["On-demand booking", "Scroll Parallax", "Optimización de menú 99 Score", "Formularios de contacto directos"],
      demoLayout: "restaurante"
    },
    {
      id: "STUDIO_ARQ",
      title: "ESTUDIO ARQUITECTURA",
      subtitle: "Editorial minimalista con grillas de exhibición masivas.",
      desc: "Portfolio visual optimizado para ordenadores y móviles de alta gama. Implementa galerías de imágenes autodecantadas en un slider horizontal de scroll interactivo que destaca la espacialidad de las obras.",
      tag: "Horizontal Slider UX & Brutalist Design",
      features: ["Galería Fullscreen horizontal", "Hover efectos de ampliación", "CMS de proyectos simple", "Testimonios verificados"],
      demoLayout: "arquitectura"
    },
    {
      id: "COMMERCE_FASH",
      title: "ECOMMERCE DE ROPA",
      subtitle: "Tienda fluida con pasarelas ultra-simplificadas.",
      desc: "Un prototipo ecommerce de alto voltaje estético. Los clientes eligen tallas y variantes de prendas con un toque y los canaliza directo a asesores entrenados en WhatsApp para cerrar ventas unificadas.",
      tag: "Conversión WhatsApp Checkout",
      features: ["Filtro de tallas instantáneo", "Carrusel de fotos fluido", "Click-to-chat de prendas", "SEO de alta competencia"],
      demoLayout: "ropa"
    },
    {
      id: "CONSULT_DIGI",
      title: "CONSULTORA DIGITAL",
      subtitle: "Plataforma multipágina corporativa de leads calificados.",
      desc: "Estructura enfocada en captar consultorías corporativas de alto valor de ticket. Automatiza la agenda completa del consultor mediante overlays web libres de fricción técnica.",
      tag: "Calendar Overlays & Auto Routing",
      features: ["Calendario de citas en vivo", "Dashboard de analíticas web", "Secciones de casos de éxito", "Páginas internas de alta velocidad"],
      demoLayout: "consultora"
    }
  ];

  return (
    <section id="proyectos" className="py-32 bg-cyber-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/5 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        
        {/* Title information */}
        <div className="mb-20 space-y-4">
          <span className="text-cyber-pink font-mono text-[10px] uppercase tracking-[0.5em] font-bold block">
            // GALERÍA DE CONTENIDO E INTERACCIÓN
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
            SCROLL <br />
            <span className="stroke-pink">LLAMATIVO & FLUIDEZ.</span>
          </h2>
          <p className="text-white/40 uppercase text-xs tracking-[0.25em] font-black max-w-2xl">
            Tu sitio no es un folleto estático y aburrido. Generamos dinámicas visuales que atrapan el ojo del usuario desde el primer milisegundo.
          </p>
        </div>

        {/* Dynamic Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Navigation controls - Left Selector */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] block mb-2">// Seleccioná tu industria para previsualizar:</span>
              {cases.map((cs, idx) => (
                <button
                  key={cs.id}
                  onClick={() => setActiveCaseIndex(idx)}
                  className={`w-full p-6 text-left transition-all flex items-center justify-between border ${
                    activeCaseIndex === idx 
                      ? "bg-white/5 border-cyber-pink text-white font-bold" 
                      : "bg-[#0b0b0b] border-white/5 text-white/40 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-cyber-pink block uppercase tracking-widest font-bold">// {cs.tag}</span>
                    <span className="text-xl font-black uppercase tracking-tighter italic">{cs.title}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-white/50 transition-transform ${activeCaseIndex === idx ? "rotate-180 text-cyber-pink" : ""}`} />
                </button>
              ))}
            </div>

            {/* Quick interactive note */}
            <div className="hidden lg:block bg-[#0b0b0b] p-6 border border-white/10 italic text-white/40 text-xs leading-relaxed max-w-sm">
              💬 <span className="font-bold text-white/80">Efecto Parallax / Hover PRO</span>: Estos layouts son 100% responsivos y están preparados para garantizar que la navegación por celulares sea incluso mejor y más adictiva que en computadoras.
            </div>
          </div>

          {/* Interactive Simulated Device Mockup Frame - Right Column */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-card-bg border border-white/10 p-8 space-y-8 relative overflow-hidden group">
            
            {/* Top Device Bar Simulator */}
            <div className="flex justify-between items-center border-b border-white/5 pb-4 text-xs font-mono text-white/40">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                <span className="uppercase text-[9px] font-bold text-green-400">DISPOSITIVO EN VIVO_ONLINE </span>
              </div>
              <span className="text-[10px] tracking-wider text-cyber-pink">MOCKUP SIMULATION_ACTIVE</span>
            </div>

            {/* Case content with animated details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-grow">
              <div className="space-y-6">
                <span className="bg-cyber-cyan text-black px-3 py-1 font-mono text-[9px] uppercase tracking-widest font-black inline-block">
                  {cases[activeCaseIndex].tag}
                </span>
                
                <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none text-white">
                  {cases[activeCaseIndex].title}
                </h3>
                
                <p className="text-sm text-cyber-pink uppercase font-mono font-bold">
                  {cases[activeCaseIndex].subtitle}
                </p>

                <p className="text-sm font-medium text-white/50 italic leading-relaxed">
                  {cases[activeCaseIndex].desc}
                </p>

                {/* Simulated features */}
                <div className="space-y-2 pt-2">
                  <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em] block font-bold">// Recursos Técnicos Clave:</span>
                  <div className="flex flex-wrap gap-2">
                    {cases[activeCaseIndex].features.map((ft, fti) => (
                      <span key={fti} className="bg-white/5 text-white/70 px-2.5 py-1 rounded-sm text-[9px] font-mono uppercase tracking-wider border border-white/5">
                        {ft}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Interactive Layout Simulated Box (movimiento de tarjetas fluidas) */}
              <div className="bg-cyber-black p-6 border border-white/10 h-72 rounded-sm overflow-hidden relative flex flex-col justify-between">
                <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />
                
                {/* Simulated web components translating dynamicly based on active index */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeCaseIndex}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 h-full flex flex-col justify-around"
                  >
                    {/* Header mock */}
                    <div className="flex justify-between items-center bg-white/5 p-2 border border-white/10 text-[8px] font-mono">
                      <span>MENU // IMPULSO_MOCK</span>
                      <span className="text-cyber-pink">WHATSAPP [CTA]</span>
                    </div>

                    {/* Interactive center mock screen reflecting category */}
                    {cases[activeCaseIndex].demoLayout === "restaurante" ? (
                      <div className="text-center py-4 space-y-2">
                        <motion.div 
                          animate={{ scale: [1, 1.05, 1] }} 
                          transition={{ duration: 8, repeat: Infinity }}
                          className="w-16 h-16 rounded-full bg-cyber-pink/20 border border-cyber-pink flex items-center justify-center mx-auto text-xl italic font-black shadow-lg shadow-cyber-pink/20"
                        >
                          🍕
                        </motion.div>
                        <p className="font-mono text-[9px] tracking-widest text-[#FF007F] font-bold">RESERVAS DIRECTAS DESDE CELULAR</p>
                        <div className="bg-[#121212] p-2 text-[8px] text-white/40 italic">Para comercios gastronómicos, el funnel directo a Whatsapp elimina un 70% la fricción de comisiones externas.</div>
                      </div>
                    ) : cases[activeCaseIndex].demoLayout === "arquitectura" ? (
                      <div className="text-center py-4 space-y-2">
                        <div className="flex justify-center gap-2">
                          <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 10, repeat: Infinity }} className="h-14 w-14 bg-white/10 border border-white/15" />
                          <motion.div animate={{ x: [10, -10, 10] }} transition={{ duration: 10, repeat: Infinity }} className="h-14 w-14 bg-cyber-cyan/15 border border-cyber-cyan/30" />
                        </div>
                        <p className="font-mono text-[9px] tracking-widest text-cyber-cyan font-bold">SCROLL HORIZONTAL DE PORTFOLIO</p>
                        <div className="bg-[#121212] p-2 text-[8px] text-white/40 italic">Muestra galerías de alta definición en ordenadores que estimulan el estatus de marca de manera inmediata.</div>
                      </div>
                    ) : cases[activeCaseIndex].demoLayout === "ropa" ? (
                      <div className="text-center py-4 space-y-2 animate-bounce">
                        <div className="text-3xl">👗🧥👟</div>
                        <p className="font-mono text-[9px] tracking-widest text-white font-bold">FASHION COMMERCE HYBRID</p>
                        <div className="bg-[#121212] p-2 text-[8px] text-white/40 italic">Los carritos dirigidos a WhatsApp multiplican la tasa de recompra por la fidelización de atención inmediata.</div>
                      </div>
                    ) : (
                      <div className="text-center py-4 space-y-2">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="w-12 h-12 border-2 border-dashed border-cyber-pink rounded-full mx-auto flex items-center justify-center text-xs">☕</motion.div>
                        <p className="font-mono text-[9px] tracking-widest text-cyber-pink font-bold">CONSULTORA EXPERTA</p>
                        <div className="bg-[#121212] p-2 text-[8px] text-white/40 italic">Integraciones directas de agendamiento sincronizado con Google Calendar automático.</div>
                      </div>
                    )}

                    {/* Bottom simulated checkout box */}
                    <div className="bg-cyber-pink/10 border border-cyber-pink/20 p-2 text-center text-[9px] font-mono uppercase tracking-widest text-cyber-pink font-black animate-pulse">
                      Simular Interacción
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

            {/* Simulated direct call action below */}
            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-xs text-white/50 italic text-center sm:text-left">
                ¿Querés un layout específico adaptado a lo que vendés vos? No hay problema, lo incluimos.
              </p>
              <a 
                href="https://wa.me/5515981723627" 
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black hover:bg-cyber-pink hover:text-white px-6 py-3.5 text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all border-b-2 border-cyber-pink active:translate-y-0.5"
              >
                Diseñar Mi LandingYA ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

// --- Por qué ImpulsoIT / Beneficios solidificados ---
const WhySection = () => {
  const points = [
    {
      title: "Lanzamiento Exprés",
      stat: "2-5 Días",
      desc: "No esperamos meses redactando código eterno ni planificando reuniones interminables. Tu sitio web se pone online de inmediato para traccionar clientes calificados."
    },
    {
      title: "Obsesión por las Ventas",
      stat: "100% CRO",
      desc: "No diseñamos únicamente para que 'se vea lindo' de cara al público: estructuramos rigurosamente cada componente y copy de persuasión guiada enfocados en ventas."
    },
    {
      title: "Partner, no Proveedor",
      stat: "Mensual",
      desc: "Establecemos una alianza táctica a largo plazo. Tu sitio web no muere al publicarse: lo mejoramos, testeamos y optimizamos mes a mes de forma constante."
    },
    {
      title: "Experiencia Digital",
      stat: "Senior",
      desc: "Contamos con un equipo experimentado en diseño web, desarrollo avanzado de software en la nube y estrategias de growth marketing de alta conversión."
    }
  ];

  return (
    <section className="py-28 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        
        {/* Header split details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-cyber-cyan font-mono text-[10px] uppercase tracking-[0.5em] font-black block">
              // MOTIVOS DE PESO COMERCIAL
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] italic">
              POR QUÉ TRABAJAR <br />
              CON <span className="text-cyber-pink">IMPULSOIT</span>
            </h2>
          </div>
          <div className="lg:col-span-6 pl-0 lg:pl-12">
            <p className="text-white/40 leading-relaxed text-lg font-medium italic">
              Creamos soluciones de alta gama sin deudas masivas. La gran mayoría de las agencias tradicionales te venden un folleto digital estático que queda obsoleto en seis meses. Nosotros te damos un activo dinámico vivo, actualizado a diario.
            </p>
          </div>
        </div>

        {/* Bento-style clean layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <div 
              key={i}
              className="p-8 border border-white/10 hover:border-cyber-pink/50 bg-cyber-black transition-all flex flex-col justify-between space-y-8"
            >
              <div>
                <span className="text-3xl font-mono text-cyber-pink font-black italic block mb-6">
                  {p.stat}
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tighter italic text-white mb-4">
                  {p.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed italic font-medium">
                  {p.desc}
                </p>
              </div>
              <div className="h-0.5 w-10 bg-cyber-pink" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- FAQ Accordion dynamic component ---
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "¿Cuánto tarda exactamente el lanzamiento desde que empezamos?", 
      a: "El lanzamiento de una Landing Impulso se realiza entre 2 y 5 días hábiles máximos después de que definamos la estrategia y nos compartas la estructura o idea del contenido inicial. En el caso del planWebsite Premium (multipáginas) se realiza entre 5 y 7 días hábiles promedio." 
    },
    { 
      q: "¿Puedo cambiar de plan más adelante sin penalizaciones?", 
      a: "Totalmente. Podés escalar componentes avanzados a tu web, bajar de categoría a un plan de sólo landing, o modificar lo que necesites en cualquier momento para acoplarte al flujo de tu negocio. Nos adaptamos a tu velocidad." 
    },
    { 
      q: "¿Qué necesito preparar de mi parte antes de arrancar?", 
      a: "Para arrancar rápido, idealmente necesitamos que cuentes con textos muy elementales o ideas de servicios, fotos reales y tu logotipo. Si no tenés absolutamente nada preparado, no te preocupes: nuestro equipo te guiará y ayudará a producirlo en tiempo récord." 
    },
    { 
      q: "¿Hay contratos forzados o puedo cancelar la suscripción?", 
      a: "No hay contratos de permanencia infinitas ni deudas forzadas a largo plazo. Podés posponer o cancelar tu suscripción libremente avisándonos antes del próximo ciclo de facturación. Creemos en retenerte por darte excelentes resultados continuos, no por obligarte legalmente." 
    },
    { 
      q: "¿Qué incluye exactamente el soporte técnico garantizado?", 
      a: "El soporte integral incluye: monitoreo persistente de uptime para que la web nunca caiga, mantenimiento preventivo de seguridad del servidor nube, backups semanales y actualizaciones del código técnico constante para que sea compatible con las últimas versiones de navegadores móviles." 
    },
    { 
      q: "¿Qué diferencia profundamente a ImpulsoIT de una agencia tradicional?", 
      a: "Las agencias e ingenieros tradicionales te presupuestarán miles de dólares por un sitio web inalterable que quedará obsoleto en seis meses y te cobrarán tarifas exorbitantes cada vez que necesites realizar un cambio. Con ImpulsoIT, pagás un fee mensual moderado por un sitio web vivo que actualizamos a diario y que evoluciona con tu negocio." 
    },
    { 
      q: "¿Trabajan únicamente con comercios locales o de dónde?", 
      a: "¡Brindamos soporte a escala global! Nuestro onboarding técnico, prototipado y soporte es 100% digital asistido. Trabajamos activamente con emprendedores y empresas dinámicas de diversos países hispanohablantes para potenciar sus marcas online." 
    }
  ];

  return (
    <section id="faq" className="py-32 bg-cyber-bg border-y border-white/5 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Header left */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-4">
            <span className="text-cyber-pink font-mono text-[10px] uppercase tracking-[0.5em] font-black block">
              // DESPEJÁ SUTILEZAS TÉCNICAS
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9]">
              DUDAS <br />
              <span className="text-cyber-cyan italic">FRECUENTES.</span>
            </h2>
            <p className="text-white/40 italic font-medium leading-relaxed pt-2">
              Todo lo que necesitás saber de manera directa antes de contratar nuestro stack técnico. Sin burocracia sin tecnicismos complejos.
            </p>
          </div>

          {/* Interactive Accordion Right Column */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={i} 
                  className={`border-b border-white/10 pb-4 transition-all ${isOpen ? "bg-white/[0.02] p-4 border-l-2 border-l-cyber-pink" : ""}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left py-4 uppercase font-black tracking-tighter italic cursor-pointer group"
                  >
                    <h3 className={`text-xl md:text-2xl transition-colors leading-none ${isOpen ? "text-cyber-pink" : "text-white/80 group-hover:text-white"}`}>
                      {faq.q}
                    </h3>
                    <ChevronDown className={`w-5 h-5 text-white/50 shrink-0 transition-transform ${isOpen ? "rotate-180 text-cyber-pink" : "group-hover:text-white"}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/50 text-base leading-relaxed italic font-medium pt-2 pb-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Closing CTA & Footer ---
const Footer = () => (
  <footer className="relative bg-cyber-black overflow-hidden border-t-2 border-cyber-pink/20">
    
    {/* Visual extreme background overlay details */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-pink/5 blur-[120px] rounded-full pointer-events-none" />
    
    {/* Direct Closing Banner conversion focused */}
    <div className="bg-cyber-pink px-6 sm:px-10 py-20 text-black border-t-8 border-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none m-0">
              ¿Listo para <br className="hidden sm:block"/> empezar hoy?
            </h2>
            <p className="text-black font-black uppercase tracking-widest text-sm max-w-xl">
              ESCRIBINOS AHORA MISMO POR WHATSAPP Y PONEMOS A FUNCIONAR TU WEB DE COMISIÓN EN UN RANGO DE 2 A 5 DÍAS HÁBILES MÁXIMO.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <span className="bg-black text-white px-4 py-2.5 text-[9px] font-black uppercase tracking-widest">
                0% Costos de Setup
              </span>
              <span className="bg-white text-black px-4 py-2.5 text-[9px] font-black uppercase tracking-widest border border-black">
                100% Soporte Humano Real
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
             <a 
               href="https://wa.me/5515981723627?text=Quiero%20comenzar%20mi%20sitio%20con%20ImpulsoIT" 
               target="_blank"
               rel="noreferrer"
               className="bg-black text-white hover:bg-white hover:text-black hover:border-black border-2 border-transparent px-10 py-6 text-2xl font-black uppercase tracking-widest text-center w-full lg:w-auto block shadow-2xl transition-all"
             >
               CONVERSAR POR WHATSAPP ↗
             </a>
             
             <div className="text-center lg:text-right font-black uppercase tracking-tighter text-sm text-black/80">
                <p>CONTACTO@IMPULSOIT.COM</p>
                <p>+55 15 98172-3627</p>
             </div>
          </div>

        </div>

      </div>
    </div>

    {/* Brand identity footer layout */}
    <div className="container mx-auto px-6 py-16">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-b border-white/5 pb-16">
        
        {/* Identity info */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-cyber-pink rounded-sm -skew-x-12 flex items-center justify-center font-black text-black">
              I
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">
              Impulso<span className="text-cyber-pink">IT</span>
            </span>
          </div>
          <p className="text-white/40 italic font-medium text-sm leading-relaxed max-w-sm">
            Un sitio web no es un pasivo o un simple folleto colgado en internet: es una máquina optimizada de ventas y captación de clientes. Nos ocupamos de ponerla a funcionar.
          </p>
          <p className="text-xs uppercase font-mono font-bold text-cyber-pink tracking-widest italic animate-pulse">
            // Tu sitio no es un gasto: es una máquina de ventas.
          </p>
        </div>

        {/* Dynamic Nav link grid inside footer */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 uppercase font-bold text-[11px] tracking-widest text-white/50">
          
          <div className="space-y-4">
            <span className="text-white block font-black text-xs">// NOSOTROS</span>
            <ul className="space-y-2.5">
              <li><a href="#proceso" className="hover:text-cyber-pink transition-colors">Metodología</a></li>
              <li><a href="#servicios" className="hover:text-cyber-pink transition-colors">Características</a></li>
              <li><a href="#planes" className="hover:text-cyber-pink transition-colors">Suscripciones</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-white block font-black text-xs">// GALERÍA RECETARIA</span>
            <ul className="space-y-2.5">
              <li><a href="#proyectos" className="hover:text-cyber-pink transition-colors">Casos de Éxito</a></li>
              <li><a href="#proyectos" className="hover:text-cyber-pink transition-colors">Portafolio UX</a></li>
              <li><a href="#faq" className="hover:text-cyber-pink transition-colors">Dudas Clave</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-white block font-black text-xs">// RECURSOS</span>
            <p className="text-white/40 normal-case font-medium lowercase italic">contacto@impulsoit.com</p>
            <p className="text-white/40 normal-case font-medium italic">+55 15 98172-3627</p>
          </div>

        </div>

      </div>

      {/* Brand trademarks and legally mandatory lines */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/20 uppercase tracking-[0.25em]">
        <p>IMPULSOIT © 2024 - 2026 • TODOS LOS DERECHOS RESERVADOS. BUILT TO CONVERT WITH CYBERPUNK ENERGY.</p>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
        </div>
      </div>

    </div>
  </footer>
);

// --- Exported main React Entry file ---
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="relative selection:bg-cyber-pink selection:text-white scroll-smooth" 
      style={{ "--mouse-x": `${mousePos.x}%`, "--mouse-y": `${mousePos.y}%` } as any}
    >
      {/* Scroll indicator with glowing feedback */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyber-pink z-[60] origin-left shadow-[0_0_15px_#FF007F]" style={{ scaleX }} />
      
      {/* Structural layout modules */}
      <Navbar />
      <Hero />
      <Features />
      <ServicesGrid />
      <Pricing />
      <SuccessStories />
      <WhySection />
      <FAQ />
      <Footer />
      
      {/* Interactive cursor reactive glow layer */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100] sm:opacity-5 opacity-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),_#FF007F_0%,_transparent_20%)]" />
      </div>
    </div>
  );
}
