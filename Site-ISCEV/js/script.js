// Dados da galeria - VERSÃO CORRIGIDA
const galleryData = {
    atividades: {
        title: "Atividades do ISCEV",
        images: [
            'images/galeria/atividade1.jpg',
            'images/galeria/atividade2.jpg', 
            'images/galeria/atividade3.jpg',
            'images/galeria/atividade4.jpg'
        ]
    }
};

let currentGallery = null;
let currentIndex = 0;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initModal();
});

// Inicializar a galeria - VERSÃO CORRIGIDA
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        // Verificar se é a galeria de múltiplas imagens (primeira imagem)
        if (item.querySelector('img[src*="atividade-destaque"]')) {
            item.addEventListener('click', function() {
                openGallery('atividades');
            });
        } else {
            // Para imagens únicas
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                const imgAlt = this.querySelector('img').alt;
                openSingleImage(imgSrc, imgAlt);
            });
        }
    });
}

// Inicializar o modal
function initModal() {
    const modal = document.getElementById('galleryModal');
    const closeBtns = document.querySelectorAll('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Fechar modal
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeGallery);
    });
    
    // Fechar modal clicando fora
    modal.addEventListener('click', function(event) {
        if (event.target === this) {
            closeGallery();
        }
    });
    
    // Navegação - VERSÃO CORRIGIDA
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            changeImage(-1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            changeImage(1);
        });
    }
    
    // Navegação por teclado
    document.addEventListener('keydown', function(event) {
        const modal = document.getElementById('galleryModal');
        
        if (modal.style.display === 'block') {
            if (event.key === 'Escape') {
                closeGallery();
            }
            
            // Só navegar se for galeria múltipla
            const multiGallery = document.querySelector('.multi-gallery-content');
            if (multiGallery && multiGallery.style.display === 'block') {
                if (event.key === 'ArrowLeft') {
                    changeImage(-1);
                } else if (event.key === 'ArrowRight') {
                    changeImage(1);
                }
            }
        }
    });
}

// Abrir galeria com múltiplas imagens - VERSÃO CORRIGIDA
function openGallery(galleryId) {
    const modal = document.getElementById('galleryModal');
    const multiContent = document.querySelector('.multi-gallery-content');
    const singleContent = document.querySelector('.single-gallery-content');
    
    currentGallery = galleryData[galleryId];
    currentIndex = 0; // SEMPRE COMEÇAR NA PRIMEIRA FOTO
    
    if (currentGallery) {
        // Mostrar conteúdo múltiplo e esconder único
        multiContent.style.display = 'block';
        singleContent.style.display = 'none';
        
        // Carregar PRIMEIRA imagem
        loadCurrentImage();
        
        // Criar miniaturas
        createThumbnails();
        
        // Abrir modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Atualizar navegação
        updateNavigation();
    }
}

// Abrir imagem única - VERSÃO CORRIGIDA
function openSingleImage(src, alt) {
    const modal = document.getElementById('galleryModal');
    const multiContent = document.querySelector('.multi-gallery-content');
    const singleContent = document.querySelector('.single-gallery-content');
    const singleImage = document.getElementById('singleImage');
    
    // Mostrar conteúdo único e esconder múltiplo
    singleContent.style.display = 'block';
    multiContent.style.display = 'none';
    
    // Configurar imagem
    singleImage.src = src;
    singleImage.alt = alt;
    
    // Abrir modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fechar modal
function closeGallery() {
    const modal = document.getElementById('galleryModal');
    const multiContent = document.querySelector('.multi-gallery-content');
    const singleContent = document.querySelector('.single-gallery-content');
    
    modal.style.display = 'none';
    multiContent.style.display = 'none';
    singleContent.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Resetar variáveis
    currentGallery = null;
    currentIndex = 0;
}

// Carregar imagem atual - VERSÃO CORRIGIDA
function loadCurrentImage() {
    const mainImage = document.getElementById('mainGalleryImage');
    const imageCounter = document.getElementById('imageCounter');
    
    if (currentGallery && currentGallery.images[currentIndex]) {
        const imageSrc = currentGallery.images[currentIndex];
        
        // Usar Image() para garantir o carregamento
        const img = new Image();
        img.onload = function() {
            mainImage.src = imageSrc;
            mainImage.alt = `Imagem ${currentIndex + 1}`;
        };
        img.src = imageSrc;
        
        // Atualizar contador
        imageCounter.textContent = `${currentIndex + 1}/${currentGallery.images.length}`;
        
        // Atualizar miniaturas
        updateThumbnails();
    }
}

// Criar miniaturas - VERSÃO CORRIGIDA
function createThumbnails() {
    const container = document.getElementById('galleryThumbnails');
    
    // Limpar completamente
    container.innerHTML = '';
    
    if (currentGallery) {
        currentGallery.images.forEach((imageSrc, index) => {
            const thumb = document.createElement('div');
            thumb.className = `thumbnail ${index === currentIndex ? 'active' : ''}`;
            
            const thumbImg = document.createElement('img');
            thumbImg.src = imageSrc;
            thumbImg.alt = `Thumbnail ${index + 1}`;
            
            thumb.appendChild(thumbImg);
            
            thumb.addEventListener('click', () => {
                currentIndex = index;
                loadCurrentImage();
                updateNavigation();
            });
            
            container.appendChild(thumb);
        });
    }
}

// Atualizar miniaturas ativas
function updateThumbnails() {
    const thumbs = document.querySelectorAll('.thumbnail');
    thumbs.forEach((thumb, index) => {
        if (index === currentIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Mudar imagem - VERSÃO CORRIGIDA
function changeImage(direction) {
    if (!currentGallery) return;
    
    currentIndex += direction;
    
    // Loop circular
    if (currentIndex < 0) {
        currentIndex = currentGallery.images.length - 1;
    } else if (currentIndex >= currentGallery.images.length) {
        currentIndex = 0;
    }
    
    loadCurrentImage();
    updateNavigation();
}

// Atualizar estado da navegação
function updateNavigation() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (currentGallery) {
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex === currentGallery.images.length - 1;
    }
}

// ===== CÓDIGO DO SITE (MANTIDO) =====

// Menu responsivo
document.getElementById('menuToggle')?.addEventListener('click', function() {
    document.getElementById('mainMenu').classList.toggle('show');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('#mainMenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mainMenu').classList.remove('show');
    });
});

// Formulário de contato
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado pelo seu contato! Retornaremos em breve.');
    this.reset();
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
// Função para carregar imagem atual - VERSÃO OTIMIZADA
function loadCurrentImage() {
    const mainImage = document.getElementById('mainGalleryImage');
    const imageCounter = document.getElementById('imageCounter');
    
    if (currentGallery && currentGallery.images[currentIndex]) {
        const imageSrc = currentGallery.images[currentIndex];
        
        // Mostrar loader enquanto carrega
        mainImage.style.opacity = '0';
        
        const img = new Image();
        img.onload = function() {
            mainImage.src = imageSrc;
            mainImage.alt = `Imagem ${currentIndex + 1}`;
            
            // Fade in suave após carregar
            setTimeout(() => {
                mainImage.style.opacity = '1';
                mainImage.style.transition = 'opacity 0.3s ease';
            }, 50);
            
            // Forçar redimensionamento para centralização
            centerImage(mainImage);
        };
        
        img.onerror = function() {
            console.error('Erro ao carregar imagem:', imageSrc);
            mainImage.style.opacity = '1';
        };
        
        img.src = imageSrc;
        
        // Atualizar contador
        imageCounter.textContent = `${currentIndex + 1}/${currentGallery.images.length}`;
        
        // Atualizar miniaturas
        updateThumbnails();
    }
}

// Função para centralizar imagem
function centerImage(imgElement) {
    // Forçar reflow para garantir centralização
    setTimeout(() => {
        imgElement.style.display = 'block';
        imgElement.style.margin = 'auto';
    }, 100);
}

// Função para abrir imagem única - VERSÃO OTIMIZADA
function openSingleImage(src, alt) {
    const modal = document.getElementById('galleryModal');
    const multiContent = document.querySelector('.multi-gallery-content');
    const singleContent = document.querySelector('.single-gallery-content');
    const singleImage = document.getElementById('singleImage');
    
    // Mostrar conteúdo único e esconder múltiplo
    singleContent.style.display = 'block';
    multiContent.style.display = 'none';
    
    // Configurar imagem com centralização
    singleImage.style.opacity = '0';
    singleImage.src = src;
    singleImage.alt = alt;
    
    // Fade in após carregar
    singleImage.onload = function() {
        setTimeout(() => {
            singleImage.style.opacity = '1';
            singleImage.style.transition = 'opacity 0.3s ease';
            centerImage(singleImage);
        }, 50);
    };
    
    // Abrir modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}