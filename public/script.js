// Gallery data
const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
        alt: "Cultivo de maíz",
        title: "Maíz Premium",
        category: "cultivos"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1592982736447-8c3b17174b5f?auto=format&fit=crop&w=800&q=80",
        alt: "Tomates de calidad",
        title: "Tomates de Exportación",
        category: "resultados"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
        alt: "Agricultura sostenible",
        title: "Agricultura Sostenible",
        category: "cultivos"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
        alt: "Equipo de investigación",
        title: "Investigación Avanzada",
        category: "resultados"
    }
];

let filteredImages = [...galleryImages];

// Loading screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.querySelector('.progress-bar');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                hideLoadingScreen();
            }, 500);
        }
        if (progressBar) {
            progressBar.style.transform = `scaleX(${progress / 100})`;
        }
    }, 150);
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            startPageAnimations();
        }, 800);
    }
}

function startPageAnimations() {
    triggerScrollAnimations();
}

// Header functionality
function initHeader() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('show');
        
        if (isOpen) {
            mobileMenu.classList.remove('show');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            mobileMenu.classList.add('show');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    });
    
    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                mobileMenu.classList.remove('show');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    });
}

// Scroll animations
function triggerScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Trigger specific animations
                if (entry.target.classList.contains('slide-in-left')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = 'slideInLeft 0.8s ease-out forwards';
                }
                if (entry.target.classList.contains('slide-in-right')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = 'slideInRight 0.8s ease-out forwards';
                }
                if (entry.target.classList.contains('slide-in-up')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up').forEach(el => {
        observer.observe(el);
    });
}

// Gallery functionality
function initGallery() {
    renderGallery();
    initGalleryFilters();
}

function renderGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    filteredImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" class="gallery-image">
        `;
        
        galleryGrid.appendChild(galleryItem);
        
        setTimeout(() => {
            galleryItem.classList.add('show');
        }, index * 100);
    });
}

function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            filterGallery(filter);
        });
    });
}

function filterGallery(category) {
    if (category === 'all') {
        filteredImages = [...galleryImages];
    } else {
        filteredImages = galleryImages.filter(img => img.category === category);
    }
    
    const currentItems = document.querySelectorAll('.gallery-item');
    currentItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
    });
    
    setTimeout(() => {
        renderGallery();
    }, 300);
}

// Contact form
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('¡Mensaje enviado con éxito!');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initHeader();
    initGallery();
    initContactForm();
});