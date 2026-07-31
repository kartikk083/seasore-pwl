// ===== NAVIGATION SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE NAVIGATION =====
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksContainer.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksContainer.classList.remove('open');
  });
});

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('[data-reveal]');

// Fallback: If opening as local file protocol or browser has no observer, reveal everything immediately
if (!window.IntersectionObserver || window.location.protocol === 'file:') {
  revealElements.forEach(el => el.classList.add('revealed'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}

// ===== MENU DATA =====
const menuData = {
  Starters: [
    { icon: '🦑', name: 'Crispy Calamari', desc: 'Hand breaded, lightly dusted and fried squid served with red onions, tartar sauce and a lemon wedge.' },
    { icon: '🍗', name: 'Chicken Strips & Fries', desc: 'Classic crispy fried chicken strips and fries served with your choice of dip: ranch, plum or honey mustard.' },
    { icon: '🍗', name: 'Chicken Wings (1lb)', desc: 'Hot, honey hot, honey garlic, BBQ, sweet chili, cajun spice, salt & pepper, teriyaki, maple chili or house blend.' },
    { icon: '🥔', name: 'Potato Skins (8)', desc: 'Loaded with cheese, green onions, BBQ sauce and BBQ brisket, served with sour cream. Gluten free.' }
  ],
  Mains: [
    { icon: '🐟', name: 'Fish & Chips', desc: 'Homemade beer battered cod served with fries, tartar sauce, coleslaw and a lemon wedge.' },
    { icon: '🥬', name: 'Chicken Lettuce Wraps', desc: 'Grilled chicken sautéed with bell peppers and onions, tossed in a homemade blend of sauces. Served with fresh lettuce cups and fries.' },
    { icon: '🍛', name: 'Darnasi Bagara Bowl', desc: 'Chicken curry rice bowl with authentic bagara rice served with garlic naan.' },
    { icon: '🍗', name: 'Chicken Cordon Bleu', desc: 'Crispy breaded chicken breast stuffed with ham and swiss cheese. Served with fries.' }
  ],
  Handhelds: [
    { icon: '🥩', name: 'Beef Dip', desc: 'Slow cooked beef served with sautéed mushrooms, onions and cheddar cheese on ciabatta bread with au jus for dipping.' },
    { icon: '🥪', name: 'BLT Sandwich', desc: 'Mayo, bacon, lettuce and tomato. Your choice of bread: white, brown or Danish rye bread.' },
    { icon: '🥪', name: 'Club House', desc: 'Chicken breast, tomato, lettuce and bacon. Your choice of bread: white, brown or Danish rye bread.' },
    { icon: '🌯', name: 'Crispy Chicken Caesar Wrap', desc: 'Caesar salad, homemade chicken strips, honey garlic sauce and sesame seeds wrapped in a tortilla.' }
  ],
  Salads: [
    { icon: '🥗', name: 'Rainforest Salad', desc: 'Mixed greens, cucumber, tomato, avocado, hard boiled egg, sunflower seeds and feta tossed with lemon dressing.' },
    { icon: '🥗', name: 'Caesar Salad', desc: 'Romaine, croutons, parmesan, caesar dressing, served with garlic toast.' },
    { icon: '🥩', name: 'Blue Cheese Steak Salad', desc: 'Mixed greens, cucumber, pickled onions, balsamic dressing and crumbled blue cheese topped with a 7 oz striploin steak. Grade AAA.' },
    { icon: '🥗', name: 'Roasted Beet Salad', desc: 'Fresh greens, beets, pickled onions, chickpeas and feta cheese tossed in a citrus vinaigrette.' }
  ],
  Soups: [
    { icon: '🧅', name: 'French Onion Soup', desc: 'Slow-cooked caramelized onions in a savory beef broth, topped with melted cheese. Served with garlic toast.' },
    { icon: '🥣', name: 'Clam Chowder', desc: 'Creamy blend of tender clams, potatoes, and vegetables simmered in a rich, seasoned broth.' },
    { icon: '🍄', name: 'Cream of Mushroom', desc: 'Blend of sautéed mushrooms in a rich, creamy broth. Served with garlic toast.' }
  ],
  'Steak & Lamb': [
    { icon: '🥩', name: 'New York Steak 8oz', desc: '8 oz New York steak served with mashed potatoes, seasonal vegetables and a bordelaise sauce. Grass fed.' },
    { icon: '🥩', name: 'Steak and Seafood', desc: '6 oz top sirloin steak served with mashed potatoes and seasonal vegetables with demi-glace. Grade AAA.' },
    { icon: '🍖', name: 'Rack of Lamb', desc: 'Slow cooked lamb rack served with mashed potatoes and seasonal vegetables with mustard demi-glace. Continental or Indian.' }
  ],
  Desserts: [
    { icon: '🍫', name: 'Molten Lava Cake', desc: 'Rich chocolate cake with a warm, gooey center.' },
    { icon: '🍰', name: 'New York Cheesecake', desc: 'Classic baked cheesecake, smooth and creamy.' },
    { icon: '🍮', name: 'Sticky Toffee Pudding', desc: 'Warm toffee pudding with rich, buttery caramel sauce.' }
  ],
  Kids: [
    { icon: '🍕', name: 'Mini Margherita Pizza', desc: 'Personal-size pizza with tomato sauce, mozzarella and fresh basil.' },
    { icon: '🍗', name: 'Crispy Chicken Strips', desc: 'Golden-fried chicken tenders with honey mustard dipping sauce and fries.' },
    { icon: '🍝', name: 'Buttery Mac & Cheese', desc: 'Creamy macaroni in cheddar cheese sauce, baked golden on top.' },
    { icon: '🐟', name: 'Mini Fish & Chips', desc: 'Small portions of beer-battered cod with hand-cut fries and ketchup.' }
  ]
};

// ===== MENU RENDER AND TAB SELECTION =====
const tabButtons = document.querySelectorAll('.menu-tab');
const menuGrid = document.getElementById('menuGrid');
const kidsBanner = document.getElementById('kidsMenuBanner');

function renderMenu(category) {
  // Add fade-out class to start transition
  menuGrid.classList.add('fade-out');
  
  setTimeout(() => {
    // Clear grid
    menuGrid.innerHTML = '';
    
    // Get items for category
    const items = menuData[category] || [];
    
    // Create and append items
    items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'menu-item';
      itemEl.innerHTML = `
        <span class="menu-item-icon">${item.icon}</span>
        <div class="menu-item-info">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
        </div>
      `;
      menuGrid.appendChild(itemEl);
    });

    // Toggle Kids Banner
    if (category === 'Kids') {
      kidsBanner.style.display = 'flex';
    } else {
      kidsBanner.style.display = 'none';
    }
    
    // Remove fade-out to trigger fade-in transition
    menuGrid.classList.remove('fade-out');
  }, 300);
}

// Attach click listeners to tabs
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all
    tabButtons.forEach(b => b.classList.remove('active'));
    
    // Add to clicked
    btn.classList.add('active');
    
    // Get target category ID
    const category = btn.getAttribute('data-tab');
    
    // Render menu
    renderMenu(category);
  });
});

// Initial render
renderMenu('Starters');


// ===== MODERN AMBIENT EFFECTS & INTERACTIVE WIDGETS =====

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. HERO PARTICLES (FIREFLIES CANVAS)
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 45;

    // Resize canvas
    function resizeCanvas() {
      const heroSection = canvas.parentElement;
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 50; // Start slightly below screen
        this.size = Math.random() * 2.8 + 0.8;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = -(Math.random() * 0.7 + 0.2); // Slow upward drift
        this.alpha = 0;
        this.maxAlpha = Math.random() * 0.55 + 0.15;
        this.fadeSpeed = Math.random() * 0.008 + 0.002;
        this.growing = true;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Fade in or fade out
        if (this.growing) {
          this.alpha += this.fadeSpeed;
          if (this.alpha >= this.maxAlpha) {
            this.alpha = this.maxAlpha;
            this.growing = false;
          }
        } else {
          this.alpha -= this.fadeSpeed;
        }

        // Reset if offscreen or faded out
        if (this.y < -10 || this.alpha <= 0 || this.x < 0 || this.x > canvas.width) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Soft gold ember color matched to the new gold accent (#D4B483 -> rgb(212, 180, 131))
        ctx.fillStyle = `rgba(212, 180, 131, ${this.alpha})`;
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = 'rgba(212, 180, 131, 0.6)';
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const p = new Particle();
      // Pre-distribute them randomly on the screen height for organic initial state
      p.y = Math.random() * canvas.height;
      p.alpha = Math.random() * p.maxAlpha;
      particles.push(p);
    }

    // Animation Loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0; // reset shadow for optimization
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }


  // 2. SCROLLSPY (ACTIVE LINK HIGHLIGHTING)
  const sections = document.querySelectorAll('section[id]');
  const navLinksList = document.querySelectorAll('.nav-link');

  function scrollspy() {
    const scrollY = window.pageYOffset + 120; // offset for navbar height

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinksList.forEach(link => {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active-link');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', scrollspy);
  scrollspy(); // Initial call


  // 3. FULLSCREEN IMAGE LIGHTBOX FOR GALLERY
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  
  // Find all gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  let currentGalleryIndex = 0;
  const galleryImagesData = [];

  // Parse images and captions
  galleryItems.forEach((item, index) => {
    const img = item.querySelector('.gallery-img');
    const captionEl = item.querySelector('.gallery-overlay span');
    const caption = captionEl ? captionEl.textContent : 'Seashore Restaurant';
    
    galleryImagesData.push({
      src: img.getAttribute('src'),
      alt: img.getAttribute('alt') || caption,
      caption: caption
    });

    item.addEventListener('click', () => {
      currentGalleryIndex = index;
      openLightbox();
    });
  });

  function openLightbox() {
    if (!lightbox) return;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  }

  function updateLightboxImage() {
    const data = galleryImagesData[currentGalleryIndex];
    if (data && lightboxImg && lightboxCaption) {
      lightboxImg.src = data.src;
      lightboxImg.alt = data.alt;
      lightboxCaption.textContent = data.caption;
    }
  }

  function nextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImagesData.length;
    updateLightboxImage();
  }

  function prevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImagesData.length) % galleryImagesData.length;
    updateLightboxImage();
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);

  // Close on background click
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    }
  });


  // 4. BACK-TO-TOP BUTTON
  const backToTopBtn = document.getElementById('backToTop');
  
  function checkBackToTop() {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }
  
  if (backToTopBtn) {
    window.addEventListener('scroll', checkBackToTop);
    checkBackToTop(); // Initial check
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  // 5. TESTIMONIALS SLIDER (CAROUSEL)
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  const dotsContainer = document.getElementById('testimonialDots');

  if (track) {
    const slides = Array.from(track.children);
    const slideCount = slides.length;
    let currentSlideIndex = 0;
    let autoSlideInterval;

    // Create dot indicators
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('div');
      dot.className = `testimonials-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('data-slide', i);
      dotsContainer.appendChild(dot);
      
      dot.addEventListener('click', () => {
        goToSlide(i);
        resetAutoSlide();
      });
    }

    const dots = Array.from(dotsContainer.children);

    function updateDots() {
      dots.forEach((dot, index) => {
        if (index === currentSlideIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function goToSlide(index) {
      if (index < 0) index = slideCount - 1;
      if (index >= slideCount) index = 0;
      currentSlideIndex = index;
      track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
      updateDots();
    }

    function nextSlide() {
      goToSlide(currentSlideIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentSlideIndex - 1);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
      });
    }

    // Auto sliding
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 6000); // cycle every 6s
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    startAutoSlide();

    // Swipe gestures on mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      resetAutoSlide();
    }, { passive: true });

    function handleSwipe() {
      if (touchStartX - touchEndX > 50) {
        nextSlide(); // Swiped left
      }
      if (touchEndX - touchStartX > 50) {
        prevSlide(); // Swiped right
      }
    }
  }


  // =====================================================
  // 6. PAGE LOADER
  // =====================================================
  const pageLoader = document.getElementById('pageLoader');
  if (pageLoader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        pageLoader.classList.add('hidden');
      }, 800);
    });
    // Fallback: hide after 3s no matter what
    setTimeout(() => {
      pageLoader.classList.add('hidden');
    }, 3000);
  }


  // =====================================================
  // 7. SCROLL PROGRESS BAR
  // =====================================================
  const scrollProgressBar = document.getElementById('scrollProgress');
  if (scrollProgressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgressBar.style.width = progress + '%';
    }, { passive: true });
  }


  // =====================================================
  // 8. CUSTOM CURSOR GLOW (Desktop Only)
  // =====================================================
  const cursorGlow = document.getElementById('cursorGlow');
  const cursorDot = document.getElementById('cursorDot');
  
  if (cursorGlow && cursorDot && window.matchMedia('(pointer: fine)').matches && window.innerWidth > 1024) {
    let mouseX = -100, mouseY = -100;
    let glowX = -100, glowY = -100;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows immediately
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    // Glow follows with smooth physics
    function animateGlow() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      cursorGlow.style.left = glowX + 'px';
      cursorGlow.style.top = glowY + 'px';
      requestAnimationFrame(animateGlow);
    }
    animateGlow();

    // Click effect
    document.addEventListener('mousedown', () => cursorDot.classList.add('clicking'));
    document.addEventListener('mouseup', () => cursorDot.classList.remove('clicking'));
    
    // Scale up on interactive elements
    const interactiveEls = document.querySelectorAll('a, button, .menu-tab, .gallery-item, .pillar-card-container');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(3)';
        cursorDot.style.opacity = '0.4';
        cursorDot.style.mixBlendMode = 'difference';
      });
      el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorDot.style.opacity = '1';
        cursorDot.style.mixBlendMode = 'normal';
      });
    });
  } else {
    // Hide on touch/mobile
    if (cursorGlow) cursorGlow.style.display = 'none';
    if (cursorDot) cursorDot.style.display = 'none';
  }


  // =====================================================
  // 9. PARALLAX DEPTH SCROLLING
  // =====================================================
  const heroPoster = document.querySelector('.hero-poster-img');
  const heroContent = document.querySelector('.hero-content');
  
  if (heroPoster && heroContent) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector('.hero').offsetHeight;
      
      if (scrollY < heroHeight) {
        const progress = scrollY / heroHeight;
        heroPoster.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0) scale(${1 + progress * 0.1})`;
        heroContent.style.transform = `translate3d(0, ${scrollY * 0.15}px, 0)`;
        heroContent.style.opacity = 1 - progress * 1.2;
      }
    }, { passive: true });
  }


  // =====================================================
  // 10. ANIMATED COUNTER (Stats Section)
  // =====================================================
  const statNums = document.querySelectorAll('.stat-num');
  let statsAnimated = false;

  function animateCounters() {
    if (statsAnimated) return;
    
    statNums.forEach(stat => {
      const text = stat.textContent;
      const match = text.match(/^(\d+)/);
      if (match) {
        const target = parseInt(match[1]);
        const suffix = text.replace(match[1], '');
        let current = 0;
        const step = Math.max(1, Math.floor(target / 50));
        const duration = 1500;
        const stepTime = duration / (target / step);
        
        const counter = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(counter);
          }
          stat.textContent = current + suffix;
        }, stepTime);

        statsAnimated = true;
      }
    });
  }

  // Observe stats section
  const aboutSection = document.getElementById('about');
  if (aboutSection && window.IntersectionObserver) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(aboutSection);
  }


  // =====================================================
  // 11. TILT EFFECT ON EXPERIENCE CARDS (Desktop)
  // =====================================================
  if (window.innerWidth > 768) {
    const pillarCards = document.querySelectorAll('.pillar-card-container');
    
    pillarCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        
        const inner = card.querySelector('.pillar-card');
        if (inner && !card.matches(':hover')) {
          // Only apply tilt when not flipped
        }
      });
      
      card.addEventListener('mouseleave', () => {
        const inner = card.querySelector('.pillar-card');
        if (inner) {
          inner.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }
      });
    });
  }


  // =====================================================
  // 12. MAGNETIC BUTTON HOVER EFFECT
  // =====================================================
  if (window.innerWidth > 768) {
    const magneticBtns = document.querySelectorAll('.btn-gold, .btn-cta-banner');
    
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        btn.style.transition = 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
      });
      
      btn.addEventListener('mouseenter', () => {
        btn.style.transition = 'none';
      });
    });
  }


  // =====================================================
  // 13. SMOOTH SECTION ENTRANCE (Stagger Children)
  // =====================================================
  if (window.IntersectionObserver) {
    const staggerSections = document.querySelectorAll('.pillars-grid, .menu-grid, .gallery-mosaic, .contact-grid');
    
    staggerSections.forEach(section => {
      const childObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, i) => {
              child.style.opacity = '0';
              child.style.transform = 'translateY(30px)';
              child.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
              
              requestAnimationFrame(() => {
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
              });
            });
            childObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      
      childObserver.observe(section);
    });
  }


  // =====================================================
  // 14. WAVE DIVIDER PARALLAX SCROLL
  // =====================================================
  const waveDividers = document.querySelectorAll('.wave-divider svg');
  if (waveDividers.length > 0) {
    window.addEventListener('scroll', () => {
      waveDividers.forEach(svg => {
        const rect = svg.parentElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          svg.style.transform = `translateY(${(progress - 0.5) * 12}px)`;
        }
      });
    }, { passive: true });
  }


  // =====================================================
  // 15. GALLERY IMAGE HOVER KENBURNS EFFECT
  // =====================================================
  const galleryImgs = document.querySelectorAll('.gallery-item .gallery-img');
  galleryImgs.forEach(img => {
    const directions = [
      'scale(1.08) translate(-2%, -1%)',
      'scale(1.08) translate(2%, -1%)',
      'scale(1.08) translate(-1%, 2%)',
      'scale(1.08) translate(1%, 1%)'
    ];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    
    img.parentElement.addEventListener('mouseenter', () => {
      img.style.transform = randomDirection;
    });
    img.parentElement.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });


  // =====================================================
  // 16. TEXT TYPING ANIMATION FOR HERO TAGLINE
  // =====================================================
  const heroTagline = document.querySelector('.hero-tagline');
  if (heroTagline) {
    heroTagline.style.borderRight = '2px solid var(--gold)';
    heroTagline.style.animation = 'fadeInUp 0.9s ease 0.3s both';
    
    // Blinking cursor that fades away after load
    setTimeout(() => {
      heroTagline.style.borderRight = '2px solid transparent';
      heroTagline.style.transition = 'border-color 1s ease';
    }, 4000);
  }

});

