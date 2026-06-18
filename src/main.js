import './style.css';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  setupScrollProgress();
  setupHeroSlideshow();
  setupCurrencySwitcher();
  setupFAQAccordion();
  setupProjectShowcase();
  setupMobileMenu();
  setupActiveCounters();
});

/**
 * 1. Scroll Progress Bar
 */
function setupScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.style.position = 'fixed';
  progressBar.style.top = '0';
  progressBar.style.left = '0';
  progressBar.style.height = '4px';
  progressBar.style.backgroundColor = '#d91eff';
  progressBar.style.boxShadow = '0 0 10px #d91eff, 0 0 5px #2250f4';
  progressBar.style.zIndex = '9999';
  progressBar.style.width = '0%';
  progressBar.style.transition = 'width 0.1s ease-out';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight > 0) {
      const percentage = (window.scrollY / scrollHeight) * 100;
      progressBar.style.width = `${percentage}%`;
    }
  });
}

/**
 * 2. Rotating Hero Titles
 */
function setupHeroSlideshow() {
  const titles = [
    { text: "Tu sitio web por suscripción: lanzá en 2 a 5 días, pagá mes a mes.", label: "// EFICIENCIA PURA" },
    { text: "No esperes meses por tu web: suscripción mensual, diseño brutal y listo en 2 a 5 días.", label: "// DISEÑO BRUTAL" },
    { text: "Impulsá tu negocio con una web de alto impacto lista en días, no en meses.", label: "// IMPACTO COMERCIAL" }
  ];

  const labelEl = document.getElementById('hero-title-label');
  const mainTextEl = document.getElementById('hero-title-main');
  const subTextEl = document.getElementById('hero-title-sub');
  
  if (!labelEl || !mainTextEl || !subTextEl) return;

  let currentIndex = 0;

  function updateTitle(index) {
    const data = titles[index];
    
    // Fade out
    labelEl.style.opacity = '0';
    labelEl.style.transform = 'translateY(-10px)';
    
    mainTextEl.style.opacity = '0';
    mainTextEl.style.transform = 'translateY(15px)';
    
    subTextEl.style.opacity = '0';
    subTextEl.style.transform = 'translateY(15px)';

    setTimeout(() => {
      // Split technical sections
      const colonIndex = data.text.indexOf(':');
      if (colonIndex !== -1) {
        const firstPart = data.text.substring(0, colonIndex + 1);
        const secondPart = data.text.substring(colonIndex + 1);
        mainTextEl.innerHTML = `<span>${firstPart}</span>`;
        subTextEl.innerHTML = `<span class="bg-gradient-to-r from-magenta-accent via-vibrant-orange to-electric-blue bg-clip-text text-transparent block mt-2 font-black">${secondPart}</span>`;
      } else {
        mainTextEl.innerHTML = `<span>${data.text}</span>`;
        subTextEl.innerHTML = '';
      }

      labelEl.textContent = data.label;

      // Fade in animations
      labelEl.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      labelEl.style.opacity = '1';
      labelEl.style.transform = 'translateY(0)';

      mainTextEl.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      mainTextEl.style.opacity = '1';
      mainTextEl.style.transform = 'translateY(0)';

      subTextEl.style.transition = 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      subTextEl.style.opacity = '1';
      subTextEl.style.transform = 'translateY(0)';
    }, 400);
  }

  // Next title every 6.5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % titles.length;
    updateTitle(currentIndex);
  }, 6500);

  // Expose bullet click events
  const bullets = document.querySelectorAll('.hero-bullet');
  bullets.forEach(bullet => {
    bullet.addEventListener('click', (e) => {
      const idx = parseInt(e.target.getAttribute('data-idx'));
      if (!isNaN(idx) && idx !== currentIndex) {
        currentIndex = idx;
        updateTitle(currentIndex);
        
        // Highlight active bullet
        bullets.forEach(b => b.classList.remove('bg-magenta-accent', 'w-8'));
        bullets.forEach(b => b.classList.add('bg-white/10'));
        
        bullet.classList.remove('bg-white/10');
        bullet.classList.add('bg-magenta-accent', 'w-8');
      }
    });
  });
}

/**
 * 3. Dynamic Currency Selector
 */
function setupCurrencySwitcher() {
  const currencyBtns = document.querySelectorAll('.currency-tab-btn');
  const priceCards = document.querySelectorAll('.pricing-card-price');
  
  if (currencyBtns.length === 0) return;

  const pricesData = {
    usd: [
      { price: "$30", detail: "USD / mes" },
      { price: "$50", detail: "USD / mes" },
      { price: "A consultar", detail: "Enterprise" }
    ],
    ars: [
      { price: "$42.030", detail: "ARS / mes" },
      { price: "$70.050", detail: "ARS / mes" },
      { price: "A consultar", detail: "Enterprise" }
    ],
    clp: [
      { price: "$28.000", detail: "CLP / mes" },
      { price: "$47.000", detail: "CLP / mes" },
      { price: "A consultar", detail: "Enterprise" }
    ]
  };

  currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCurrency = btn.getAttribute('data-curr');
      
      // Update UI tabs
      currencyBtns.forEach(b => {
        b.classList.remove('bg-magenta-accent', 'text-white');
        b.classList.add('text-white/50');
      });
      btn.classList.add('bg-magenta-accent', 'text-white');
      btn.classList.remove('text-white/50');

      // Update pricing display text with animation
      priceCards.forEach((card, index) => {
        const valEl = card.querySelector('.price-value');
        const detailEl = card.querySelector('.price-detail');
        const currencyData = pricesData[selectedCurrency][index];

        if (valEl) {
          valEl.style.opacity = '0';
          valEl.style.transform = 'scale(0.9)';
          
          setTimeout(() => {
            valEl.textContent = currencyData.price;
            valEl.style.opacity = '1';
            valEl.style.transform = 'scale(1)';
          }, 150);
        }
        if (detailEl) {
          detailEl.textContent = currencyData.detail;
        }
      });
    });
  });
}

/**
 * 4. Ultra-Compact FAQ Accordion
 */
function setupFAQAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');
    
    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');
      
      // Close all others to keep layout clean and hyper-compact as requested
      accordionItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherContent = otherItem.querySelector('.accordion-content');
        if (otherContent) {
          otherContent.style.maxHeight = '0px';
          otherContent.style.opacity = '0';
        }
      });

      if (!isAlreadyActive) {
        item.classList.add('active');
        content.style.maxHeight = `${content.scrollHeight + 40}px`;
        content.style.opacity = '1';
      }
    });
  });

  // Open first item by default
  if (accordionItems.length > 0) {
    accordionItems[0].querySelector('.accordion-trigger').click();
  }
}

/**
 * 5. Interactive Mockup Portfolio Showcase (with requested real references)
 */
function setupProjectShowcase() {
  const referenceTabs = document.querySelectorAll('.reference-tab-btn');
  const mockScreenEl = document.getElementById('mock-browser-screen');
  const mockTitleEl = document.getElementById('mock-case-title');
  const mockSubEl = document.getElementById('mock-case-subtitle');
  const mockDescEl = document.getElementById('mock-case-desc');
  const mockTagsContainer = document.getElementById('mock-case-tags');
  const mockLinkEl = document.getElementById('mock-case-link');

  if (referenceTabs.length === 0) return;

  const referenceData = {
    "infocem": {
      title: "Info Cem Services",
      subtitle: "Portal dinámico líder en servicios integrales de infraestructura",
      url: "https://infocemservices.com/",
      desc: "Excelente arquitectura SEO y velocidad optimizada. Cuenta con accesos rápidos directos para resolver consultas mediante derivaciones fluidas a WhatsApp que triplicaron sus contactos comerciales directos.",
      tags: ["Conversión Inmediata", "Velocidad Extrema", "SEO Local", "Canal de Soporte Directo"],
      color: "from-electric-blue to-magenta-accent",
      previewHtml: `
        <div class="p-6 h-full flex flex-col justify-between bg-cyber-dark relative overflow-hidden font-sans">
          <!-- Glass header -->
          <div class="flex justify-between items-center bg-white/5 p-3 border border-white/10 rounded-sm">
            <span class="text-xs font-black text-white flex items-center gap-2">
              <span class="w-2.5 h-2.5 bg-electric-blue rounded-full animate-ping"></span>
              INFOCEM <span class="text-xs font-normal text-white/50">Services</span>
            </span>
            <span class="text-[9px] font-mono select-none text-[#ff6b00] border border-[#ff6b00]/30 px-2 py-0.5 uppercase tracking-wider">Online</span>
          </div>

          <!-- Hero illustration -->
          <div class="space-y-4 my-auto relative z-10">
            <h4 class="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">Mantenimiento de Infraestructura Crítica</h4>
            <div class="h-1.5 w-1/3 bg-electric-blue"></div>
            <p className="text-white/40 text-xs italic">La plataforma líder que pone a funcionar plantas comerciales en Sudamérica con un solo clic.</p>
            
            <!-- Quick features grid -->
            <div class="grid grid-cols-2 gap-2 mt-4 text-[9px] font-mono">
              <div class="bg-white/5 p-2 border border-white/5 text-white/70">✓ Respuesta &lt; 2hs</div>
              <div class="bg-white/5 p-2 border border-white/5 text-white/70">✓ Uptime 99.98%</div>
            </div>
          </div>

          <!-- Floating Interactive Call to Action -->
          <div class="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-sm flex items-center justify-between">
            <span class="text-[10px] font-mono text-emerald-400 font-bold">👉 CHATWHATSAPP_PIPELINE</span>
            <span class="bg-emerald-500 text-black text-[9px] font-bold px-2.5 py-1 uppercase">COTIZAR YA</span>
          </div>
        </div>
      `
    },
    "usgreen": {
      title: "US Green Programs",
      subtitle: "Plataforma de capacitación ambiental corporativa",
      url: "https://www.usgreenprograms.com/",
      desc: "Diseño moderno con un flujo de conversión altamente optimizado. Su look formal pero audaz reduce el porcentaje de rebote y maximiza las suscripciones educativas gracias a su alta velocidad de respuesta.",
      tags: ["Acceso CMS", "Formularios Seguros", "Velocidad de Carga Core", "99/100 Mobile Score"],
      color: "from-emerald-500 to-electric-blue",
      previewHtml: `
        <div class="p-6 h-full flex flex-col justify-between bg-cyber-dark relative overflow-hidden font-sans">
          <!-- Glass header -->
          <div class="flex justify-between items-center bg-white/5 p-3 border border-white/10 rounded-sm">
            <span class="text-xs font-black text-white flex items-center gap-1">
              🟢 US <span class="text-emerald-400">GREEN</span> PROGRAMS
            </span>
            <span class="text-[9px] font-mono text-white/45">VITE_PRO_DEVMOCK</span>
          </div>

          <!-- Hero illustration -->
          <div class="space-y-4 my-auto relative z-10">
            <span class="bg-emerald-400/10 text-emerald-400 text-[10px] font-mono px-2 py-0.5 uppercase tracking-widest font-black">Certificación en Sustentabilidad</span>
            <h4 class="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">Capacitá a tu equipo en Economía Circular</h4>
            <div class="h-1.5 w-1/3 bg-emerald-500"></div>
            
            <div class="bg-[#121216] border-l-4 border-emerald-500 p-2.5">
              <p class="text-white/60 text-[10px] italic">"Transformamos el cumplimiento ambiental en ventajas competitivas reales para corporaciones."</p>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="flex items-center gap-2">
            <div class="bg-[#ff6b00] text-black w-full text-center py-2.5 font-bold uppercase text-[10px] tracking-widest cursor-pointer hover:bg-white hover:text-black transition-colors">
              INICIAR EVALUACIÓN DE IMPACTO ↗
            </div>
          </div>
        </div>
      `
    },
    "volta": {
      title: "Volta Electric",
      subtitle: "Portal de servicios eléctricos industriales y domóticos",
      url: "https://www.voltaelectric.com/",
      desc: "Una obra de arte optimizada para conversión directa de contratos de emergencia. Diseñada con fondo de alto contraste, tipografía técnica, y sistema rápido de cotización que envía alertas automáticas al personal.",
      tags: ["Clean Code", "Optimización Técnica", "Lead Funnel Directo", "Responsividad Absoluta"],
      color: "from-vibrant-orange to-magenta-accent",
      previewHtml: `
        <div class="p-6 h-full flex flex-col justify-between bg-cyber-dark relative overflow-hidden font-mono">
          <!-- Glass header -->
          <div class="flex justify-between items-center bg-white/5 p-3 border border-white/10 rounded-sm">
            <span class="text-xs font-black text-white uppercase tracking-widest">
              ⚡ VOLTA <span class="text-[#ff6b00]">ELECTRIC</span>
            </span>
            <span class="text-[9px] text-[#d91eff] uppercase font-bold animate-pulse">EMERGENCY_ONLINE</span>
          </div>

          <!-- Hero illustration -->
          <div class="space-y-4 my-auto relative z-10">
            <h4 class="text-2xl font-black text-white italic tracking-tighter uppercase leading-none font-sans">Soporte Eléctrico de Alta Tensión Industrial</h4>
            <div class="h-1 w-2/3 bg-[#ff6b00]"></div>
            
            <div class="bg-black/40 p-4 rounded-sm border border-white/5 space-y-1 text-[9.5px]">
              <p class="text-[#ff6b00]">&gt; STATUS: ALL STATIONS FEEDING [OK]</p>
              <p class="text-white/50">&gt; Contratando ingenieros de campo matriculados...</p>
              <p class="text-emerald-400">&gt; Despacho de camiones asistenciales activo.</p>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="bg-white text-black p-3 text-center text-xs font-black uppercase tracking-widest cursor-pointer hover:bg-[#d91eff] hover:text-white transition-all">
            LLAMAR A GUARDIA ELECTRICISTA ⚡
          </div>
        </div>
      `
    }
  };

  referenceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-ref');
      const data = referenceData[targetId];

      if (!data) return;

      // Update active state in buttons
      referenceTabs.forEach(b => {
        b.classList.remove('bg-white/5', 'border-magenta-accent', 'text-white');
        b.classList.add('bg-[#0b0b0b]', 'border-white/5', 'text-white/40');
      });

      tab.classList.add('bg-white/5', 'border-magenta-accent', 'text-white');
      tab.classList.remove('bg-[#0b0b0b]', 'border-white/5', 'text-white/40');

      // Update screen content with dynamic effects
      mockScreenEl.style.opacity = '0';
      mockScreenEl.style.transform = 'translateY(10px) scale(0.98)';
      
      setTimeout(() => {
        // Set new preview layout HTML
        mockScreenEl.innerHTML = data.previewHtml;
        mockScreenEl.style.opacity = '1';
        mockScreenEl.style.transform = 'translateY(0) scale(1)';

        // Update technical specs on left info box
        if (mockTitleEl) mockTitleEl.textContent = data.title;
        if (mockSubEl) mockSubEl.textContent = data.subtitle;
        if (mockDescEl) mockDescEl.textContent = data.desc;
        
        // Update URL
        if (mockLinkEl) {
          mockLinkEl.setAttribute('href', data.url);
          mockLinkEl.innerHTML = `Explorar sitio real: <span class="text-magenta-accent hover:underline break-all">${data.url} ↗</span>`;
        }

        // Render tags
        if (mockTagsContainer) {
          mockTagsContainer.innerHTML = '';
          data.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'bg-white/5 text-white/70 px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider border border-white/5';
            span.textContent = tag;
            mockTagsContainer.appendChild(span);
          });
        }
      }, 300);
    });
  });

  // Pick first one
  if (referenceTabs.length > 0) {
    referenceTabs[0].click();
  }
}

/**
 * 6. Mobile Navigation Drawer Handling
 */
function setupMobileMenu() {
  const hamburgerBtn = document.getElementById('mobile-menu-btn');
  const drawerEl = document.getElementById('mobile-drawer');
  const overlayEl = document.getElementById('mobile-drawer-overlay');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-link');

  if (!hamburgerBtn || !drawerEl) return;

  function toggleMenu() {
    const isOpened = drawerEl.classList.contains('active');
    
    if (isOpened) {
      drawerEl.classList.remove('active');
      drawerEl.style.maxHeight = '0px';
      drawerEl.style.opacity = '0';
      if (overlayEl) overlayEl.classList.add('hidden');
      hamburgerBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      `;
    } else {
      drawerEl.classList.add('active');
      drawerEl.style.maxHeight = `${drawerEl.scrollHeight + 30}px`;
      drawerEl.style.opacity = '1';
      if (overlayEl) overlayEl.classList.remove('hidden');
      hamburgerBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      `;
    }
  }

  hamburgerBtn.addEventListener('click', toggleMenu);
  if (overlayEl) overlayEl.addEventListener('click', toggleMenu);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Auto close
      drawerEl.classList.remove('active');
      drawerEl.style.maxHeight = '0px';
      drawerEl.style.opacity = '0';
      if (overlayEl) overlayEl.classList.add('hidden');
      hamburgerBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      `;
    });
  });
}

/**
 * 7. Simulated Live Project Counter to drive urgency & social proof (CRO)
 */
function setupActiveCounters() {
  const activeStatsEl = document.getElementById('live-active-projs');
  if (!activeStatsEl) return;

  // Let's increment occasionally or set a nice live pulsation
  let count = 28;
  setInterval(() => {
    // Small chance to increment
    if (Math.random() > 0.7) {
      count += 1;
      activeStatsEl.style.color = '#ff6b00';
      activeStatsEl.textContent = `+${count} proyectos lanzados este año`;
      
      setTimeout(() => {
        activeStatsEl.style.color = 'rgba(255, 255, 255, 0.4)';
      }, 1000);
    }
  }, 12000);
}
