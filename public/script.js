// ========================================
// AGROLINX - JavaScript Principal
// ========================================

// Gallery data
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Granja avícola moderna",
    title: "Granja Avícola Moderna",
    category: "avicola"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Acompañamiento técnico",
    title: "Acompañamiento Técnico",
    category: "servicios"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Granja porcina",
    title: "Instalaciones Porcinas",
    category: "porcina"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Planta de alimentos",
    title: "Planta de Alimentos",
    category: "procesamiento"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Laboratorio de calidad",
    title: "Control de Calidad",
    category: "laboratorio"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Equipo veterinario",
    title: "Equipo Veterinario",
    category: "servicios"
  }
];

// Global variables
let currentImageIndex = 0;
let filteredImages = [...galleryImages];
let isLightboxOpen = false;

// ========================================
// INTERSECTION OBSERVER - Animaciones
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Una vez animado, dejar de observar para mejor rendimiento
      animationObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// ========================================
// HEADER - Scroll behavior
// ========================================
function initHeader() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');

  // Efecto de scroll en header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Navegación móvil (si se implementa)
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Smooth scroll para links de navegación
  const navLinks = document.querySelectorAll('.header__nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Altura del header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// GALLERY - Funcionalidad completa
// ========================================
function initGallery() {
  renderGallery();
  initGalleryFilters();
  initLightbox();
}

function renderGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = '';

  filteredImages.forEach((image, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery__item animate-on-scroll';
    galleryItem.style.animationDelay = `${index * 0.1}s`;
    galleryItem.dataset.category = image.category;
    galleryItem.dataset.index = index;

    galleryItem.innerHTML = `
      <img 
        src="${image.src}" 
        alt="${image.alt}"
        class="gallery__item-image"
        loading="lazy"
      >
      <div class="gallery__item-overlay">
        <h3 class="gallery__item-title">${image.title}</h3>
        <p class="gallery__item-category">${getCategoryLabel(image.category)}</p>
      </div>
      <div class="gallery__item-zoom">
        <i data-lucide="zoom-in"></i>
      </div>
    `;

    galleryItem.addEventListener('click', () => openLightbox(index));
    galleryGrid.appendChild(galleryItem);

    // Observar para animaciones
    animationObserver.observe(galleryItem);
  });

  // Reinicializar iconos de Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function getCategoryLabel(category) {
  const labels = {
    'avicola': 'Avícola',
    'porcina': 'Porcina',
    'servicios': 'Servicios',
    'procesamiento': 'Procesamiento',
    'laboratorio': 'Laboratorio'
  };
  return labels[category] || category;
}

function initGalleryFilters() {
  const filterButtons = document.querySelectorAll('.gallery__filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Actualizar botones activos
      filterButtons.forEach(btn => btn.classList.remove('gallery__filter-btn--active'));
      button.classList.add('gallery__filter-btn--active');

      const category = button.dataset.category;
      filterGallery(category);
    });
  });
}

function filterGallery(category) {
  if (category === 'all') {
    filteredImages = [...galleryImages];
  } else {
    filteredImages = galleryImages.filter(img => img.category === category);
  }

  // Animar salida de elementos actuales
  const currentItems = document.querySelectorAll('.gallery__item');
  currentItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.8)';
    }, index * 50);
  });

  // Renderizar nueva galería después de la animación
  setTimeout(() => {
    renderGallery();
  }, currentItems.length * 50 + 200);
}

// ========================================
// LIGHTBOX - Funcionalidad completa
// ========================================
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxBackdrop = lightbox?.querySelector('.lightbox__backdrop');

  if (!lightbox) return;

  // Cerrar lightbox
  [lightboxClose, lightboxBackdrop].forEach(element => {
    element?.addEventListener('click', closeLightbox);
  });

  // Navegación
  lightboxPrev?.addEventListener('click', () => navigateLightbox(-1));
  lightboxNext?.addEventListener('click', () => navigateLightbox(1));

  // Teclado
  document.addEventListener('keydown', (e) => {
    if (!isLightboxOpen) return;

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        navigateLightbox(-1);
        break;
      case 'ArrowRight':
        navigateLightbox(1);
        break;
    }
  });
}

function openLightbox(index) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');

  if (!lightbox || !lightboxImage || !lightboxCaption) return;

  currentImageIndex = index;
  isLightboxOpen = true;

  const image = filteredImages[index];
  
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.innerHTML = `
    <h3>${image.title}</h3>
    <p>${getCategoryLabel(image.category)}</p>
  `;

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Actualizar visibilidad de botones de navegación
  updateLightboxNavigation();
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  isLightboxOpen = false;
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  const newIndex = currentImageIndex + direction;
  
  if (newIndex >= 0 && newIndex < filteredImages.length) {
    openLightbox(newIndex);
  }
}

function updateLightboxNavigation() {
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  if (lightboxPrev) {
    lightboxPrev.style.display = currentImageIndex > 0 ? 'block' : 'none';
  }
  
  if (lightboxNext) {
    lightboxNext.style.display = currentImageIndex < filteredImages.length - 1 ? 'block' : 'none';
  }
}

// ========================================
// SCROLL TO TOP
// ========================================
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (!scrollToTopBtn) return;

  // Mostrar/ocultar botón según scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  // Funcionalidad del botón
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ========================================
// FORMULARIO DE CONTACTO
// ========================================
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // Validación básica
    if (!data.name || !data.company || !data.email || !data.phone) {
      showNotification('Por favor completa todos los campos obligatorios.', 'error');
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showNotification('Por favor ingresa un email válido.', 'error');
      return;
    }

    // Simular envío (aquí conectarías con tu backend)
    showNotification('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.', 'success');
    
    // Limpiar formulario
    contactForm.reset();
  });
}

// ========================================
// NOTIFICACIONES
// ========================================
function showNotification(message, type = 'info') {
  // Crear elemento de notificación
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? 'var(--color-success)' : type === 'error' ? 'var(--color-error)' : 'var(--color-info)'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    max-width: 300px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Animar entrada
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  // Auto-remover después de 5 segundos
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
}

// ========================================
// STATS COUNTER - Animación de números
// ========================================
function initStatsCounter() {
  const statsNumbers = document.querySelectorAll('.stats__number');
  
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  });

  statsNumbers.forEach(number => {
    statsObserver.observe(number);
  });
}

function animateNumber(element) {
  const finalNumber = element.textContent.replace(/[^\d]/g, '');
  const duration = 2000;
  const increment = finalNumber / (duration / 16);
  let currentNumber = 0;

  const timer = setInterval(() => {
    currentNumber += increment;
    if (currentNumber >= finalNumber) {
      clearInterval(timer);
      element.textContent = element.textContent; // Restaurar formato original
    } else {
      element.textContent = Math.floor(currentNumber) + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
    }
  }, 16);
}

// ========================================
// SMOOTH SCROLL - Enlaces internos
// ========================================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// FOOTER - Año actual
// ========================================
function updateCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ========================================
// ANIMACIONES EN SCROLL - Setup general
// ========================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  animatedElements.forEach(element => {
    animationObserver.observe(element);
  });

  // También observar elementos con clases de animación específicas
  const specificAnimations = document.querySelectorAll('.animate-slide-left, .animate-slide-right, .animate-slide-up, .animate-fade-in');
  specificAnimations.forEach(element => {
    element.classList.add('animate-on-scroll');
    animationObserver.observe(element);
  });
}

// ========================================
// LAZY LOADING - Imágenes
// ========================================
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// ========================================
// PERFORMANCE - Optimizaciones
// ========================================
function initPerformanceOptimizations() {
  // Precargar imágenes críticas
  const criticalImages = [
    'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Optimizar scroll events
  let scrollTimeout;
  const originalScrollHandler = window.onscroll;
  
  window.onscroll = function() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(function() {
      if (originalScrollHandler) {
        originalScrollHandler();
      }
    }, 10);
  };
}

// ========================================
// INICIALIZACIÓN PRINCIPAL
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar componentes principales
  initHeader();
  initGallery();
  initScrollToTop();
  initContactForm();
  initStatsCounter();
  initSmoothScroll();
  initScrollAnimations();
  initLazyLoading();
  initPerformanceOptimizations();
  updateCurrentYear();

  console.log('🌱 Agrolinx - Sitio web cargado exitosamente');
});

// ========================================
// ERROR HANDLING - Manejo global de errores
// ========================================
window.addEventListener('error', function(e) {
  console.error('Error en Agrolinx:', e.error);
  // En producción, aquí enviarías el error a un servicio de tracking
});

// ========================================
// UTILS - Funciones auxiliares
// ========================================
const utils = {
  // Debounce function para optimizar eventos
  debounce: function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function para scroll events
  throttle: function(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Validar email
  isValidEmail: function(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Formatear números
  formatNumber: function(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

// Exportar utils para uso global
window.AgrolinxUtils = utils;