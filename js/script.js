// Dados da galeria - AGORA COM TODAS AS CATEGORIAS
const galleryData = {
    atividades: {  
        title: "Atividades do ISCEV",
        images: [
            { src: 'images/galeria/foto71.jpg', title: 'Encerramento da Turma do PROJOVEM, realizado no Curado IV em 2012' },
            { src: 'images/galeria/foto72.jpg', title: 'Encerramento da Turma do PROJOVEM, realizado no Curado IV em 2012' },
            { src: 'images/galeria/foto112.jpg', title: 'Encerramento da Turma do PROJOVEM, realizado no Curado IV em 2012' },
            { src: 'images/galeria/foto13.jpg', title: 'Encerramento das Atividades de Teatro em 2012' },
            { src: 'images/galeria/foto11.jpg', title: 'Encerramento das Atividades de Teatro em 2012' },
            { src: 'images/galeria/foto87.jpg', title: 'Voluntário da percussão, Felipe, e Voluntário da capoeira, Zebra ' },
            { src: 'images/galeria/atividade3.jpg', title: 'Apresentação Cultural' },
            { src: 'images/galeria/atividade4.jpg', title: 'Evento Comunitário' }
        ]
    },
    eventos: { 
        title: "Eventos Comunitários",
        images: [
            { src: 'images/galeria/foto64.jpg', title: 'Projeto Múltiplos Saberes - Jogos' },
            { src: 'images/galeria/foto65.jpg', title: 'Projeto Múltiplos Saberes - Ponto em Cruz e Crochê' },
            { src: 'images/galeria/foto110.jpg', title: 'Projeto Múltiplos Saberes ' },
            { src: 'images/galeria/foto111.jpg', title: 'Projeto Múltiplos Saberes ' },
            { src: 'images/galeria/foto66.jpg', title: 'Projeto Múltiplos Saberes ' },
            { src: 'images/galeria/foto67.jpg', title: 'Projeto Múltiplos Saberes ' },
            { src: 'images/galeria/foto99.jpg', title: 'Exposição na UFPE' },
            { src: 'images/galeria/foto100.jpg', title: 'Exposição na UFPE' },
            { src: 'images/galeria/foto101.jpg', title: 'Exposição na UFPE' },
            { src: 'images/galeria/foto102.jpg', title: 'Exposição na UFPE' },
            { src: 'images/galeria/foto73.jpg', title: 'Turma da Marcenaria - 2013' },
            { src: 'images/galeria/foto74.jpg', title: 'Proposta Paz e Bem - Casa Amarela' },
            { src: 'images/galeria/foto75.jpg', title: 'Proposta Paz e Bem - Casa Amarela' },
            { src: 'images/galeria/foto76.jpg', title: 'Exposição na Câmara Municipal de Jaboatão dos Guararapes' },
            { src: 'images/galeria/foto78.jpg', title: 'Exposição na Câmara Municipal de Jaboatão dos Guararapes' },
            { src: 'images/galeria/foto79.jpg', title: 'Exposição na Câmara Municipal de Jaboatão dos Guararapes' },
            { src: 'images/galeria/foto80.jpg', title: 'Exposição na Câmara Municipal de Jaboatão dos Guararapes' },
            { src: 'images/galeria/evento3.jpg', title: 'Celebração Local' }
        ]
    },
    aulas: {
        title: "Aulas e Oficinas",
        images: [
            { src: 'images/galeria/foto3.jpg', title: 'Andar de Perna de Pau' },
            { src: 'images/galeria/foto96.jpg', title: 'Andar de Perna de Pau' },
            { src: 'images/galeria/foto90.jpg', title: 'Andar de Perna de Pau' },
            { src: 'images/galeria/foto85.jpg', title: 'Aula de Reforço' },
            { src: 'images/galeria/foto86.jpg', title: 'Aula de Reforço' },
            { src: 'images/galeria/foto63.jpg', title: 'Aula de Reforço' },
            { src: 'images/galeria/foto58.jpg', title: 'Aula de Artesanato' },
            { src: 'images/galeria/foto59.jpg', title: 'Aula de Artesanato' },
            { src: 'images/galeria/foto95.jpg', title: 'Aula de Artesanato' },
            { src: 'images/galeria/foto81.jpg', title: 'Aula de Artesanato' },
            { src: 'images/galeria/foto82.jpg', title: 'Aula de Artesanato' },
            { src: 'images/galeria/foto62.jpg', title: 'Aula de Origami na Escola Nova Visão' },
            { src: 'images/galeria/foto109.jpg', title: 'Aula de Origami na Escola Nova Visão' },
            { src: 'images/galeria/foto9.jpg', title: 'Aula de Origami na Escola Nova Visão' },
            { src: 'images/galeria/foto14.jpg', title: 'Oficina de Flores de Eva, Comunidade Barreto de Menezes, em 2016' },
            { src: 'images/galeria/foto15.jpg', title: 'Oficina de Flores de Eva, Comunidade Barreto de Menezes, em 2016' },
            { src: 'images/galeria/foto16.jpg', title: 'Oficina de Flores de Eva, Comunidade Barreto de Menezes, em 2016' },
            { src: 'images/galeria/foto17.jpg', title: 'Oficina de Flores de Eva, Comunidade Barreto de Menezes, em 2016' },
            { src: 'images/galeria/foto18.jpg', title: 'Oficina de Flores de Eva, Comunidade Barreto de Menezes, em 2016' },
            { src: 'images/galeria/foto19.jpg', title: 'Oficina de Flores de Eva, Comunidade Barreto de Menezes, em 2016' },
            { src: 'images/galeria/foto20.jpg', title: 'Oficina de Flores de Eva, Comunidade de Dois Irmãos, em 2016' },
            { src: 'images/galeria/foto21.jpg', title: 'Oficina de Flores de Eva, Comunidade de Dois Irmãos, em 2016' },
            { src: 'images/galeria/foto22.jpg', title: 'Oficina de Flores de Eva, Comunidade de Dois Irmãos, em 2016' },
            { src: 'images/galeria/foto23.jpg', title: 'Oficina de Flores de Eva, Comunidade de Dois Irmãos, em 2016' },
            { src: 'images/galeria/foto24.jpg', title: 'Oficina de Pintura e Decorações em Caixa de MDF, CRAS de Santo Amaro, em 2016' },
            { src: 'images/galeria/foto25.jpg', title: 'Oficina de Pintura e Decorações em Caixa de MDF, CRAS de Santo Amaro, em 2016' },
            { src: 'images/galeria/foto26.jpg', title: 'Oficina de Pintura e Decorações em Caixa de MDF, CRAS de Santo Amaro, em 2016' },
            { src: 'images/galeria/foto27.jpg', title: 'Oficina de Pintura e Decorações em Caixa de MDF, CRAS de Santo Amaro, em 2016' },
            { src: 'images/galeria/foto28.jpg', title: 'Oficina de Pintura e Decorações em Caixa de MDF, CRAS de Santo Amaro, em 2016' },
            { src: 'images/galeria/foto53.jpg', title: 'Aula de Percussão' },
            { src: 'images/galeria/foto83.jpg', title: 'Aula de Percussão' },
        ]
    },
    apresentacoes: {
        title: "Apresentações Culturais",
        images: [
            { src: 'images/galeria/atividade1.jpg', title: 'Capoeira' },
            { src: 'images/galeria/atividade2.jpg', title: 'Capoeira' },
            { src: 'images/galeria/atividade3.jpg', title: 'Capoeira' },
            { src: 'images/galeria/atividade4.jpg', title: 'Capoeira' },   
            { src: 'images/galeria/foto54.jpg', title: 'Show do Bolota' },
            { src: 'images/galeria/foto4.jpg', title: 'Show do Bolota' },
            { src: 'images/galeria/foto55.jpg', title: 'Show do Bolota' },
            { src: 'images/galeria/foto56.jpg', title: 'Teatro em Folia' },
            { src: 'images/galeria/foto57.jpg', title: 'Teatro em Folia' },
            { src: 'images/galeria/foto91.jpg', title: 'Teatro em Folia' },
            { src: 'images/galeria/foto92.jpg', title: 'Teatro em Folia' },
            { src: 'images/galeria/foto93.jpg', title: 'Teatro em Folia' },
            { src: 'images/galeria/foto94.jpg', title: 'Teatro em Folia' },
            { src: 'images/galeria/foto70.jpg', title: 'Teatro em Folia' },
            { src: 'images/galeria/foto60.jpg', title: 'Gritos dos Excluídos' },
            { src: 'images/galeria/foto61.jpg', title: 'Gritos dos Excluídos' }, 
            { src: 'images/galeria/foto68.jpg', title: 'Apresentação na Casa da Cultura de Jaboatão' },
            { src: 'images/galeria/foto103.jpg', title: 'Apresentação na Casa da Cultura de Jaboatão' },
            { src: 'images/galeria/foto104.jpg', title: 'Apresentação na Casa da Cultura de Jaboatão' },
            { src: 'images/galeria/foto10.jpg', title: 'Apresentação na Casa da Cultura de Jaboatão - 2012' },
            { src: 'images/galeria/foto105.jpg', title: 'Paixão de Cristo em parceria com o Vozes Latinas de Jaboatão' },
            { src: 'images/galeria/foto106.jpg', title: 'Paixão de Cristo em parceria com o Vozes Latinas de Jaboatão' },
            { src: 'images/galeria/foto107.jpg', title: 'Paixão de Cristo em parceria com o Vozes Latinas de Jaboatão' },
            { src: 'images/galeria/foto69.jpg', title: 'Paixão de Cristo em parceria com o Vozes Latinas de Jaboatão' },
            { src: 'images/galeria/foto29.jpg', title: 'Atores Mirins' },
            { src: 'images/galeria/foto30.jpg', title: 'Atores Mirins' },
            { src: 'images/galeria/foto88.jpg', title: 'Apresentações na Escola Municipal Edvardi Bernardino da Silva, Engenho Velho ' },
            { src: 'images/galeria/foto89.jpg', title: 'Apresentações na Escola Municipal Edvardi Bernardino da Silva, Engenho Velho ' },
            { src: 'images/galeria/atividade2.jpg', title: 'Apresentações na Escola Municipal Edvardi Bernardino da Silva, Engenho Velho ' },
            { src: 'images/galeria/atividade3.jpg', title: 'Apresentações na Escola Municipal Edvardi Bernardino da Silva, Engenho Velho ' },
            { src: 'images/galeria/atividade4.jpg', title: 'Apresentações na Escola Municipal Edvardi Bernardino da Silva, Engenho Velho ' },
        ]
    },
    projetos: {
        title: "Projetos Especiais",
        images: [
            { src: 'images/galeria/foto5.jpg', title: 'Projeto Social' },
            { src: 'images/galeria/foto46.jpg', title: 'Projeto Social' },
            { src: 'images/galeria/foto12.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto33.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto35.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto36.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto37.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto39.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto42.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto43.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto44.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto47.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto51.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto52.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto113.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto115.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto116.jpg', title: 'Campanha de Doação de Alimentos' },
            { src: 'images/galeria/foto32.jpg', title: 'Campanha de Doação de Roupas' },
            { src: 'images/galeria/foto45.jpg', title: 'Campanha de Doação de Brinquedos' },
            { src: 'images/galeria/foto31.jpg', title: 'Exame de Mamografia' },
            { src: 'images/galeria/foto38.jpg', title: 'Exame de Mamografia' },
            { src: 'images/galeria/foto117.jpg', title: 'Exame de Mamografia' },
            { src: 'images/galeria/projeto3.jpg', title: 'Parceria com Empresas' }
        ]
    },
    comunidade: {
        title: "Vida na Comunidade",
        images: [
            { src: 'images/galeria/foto7.jpg', title: 'Associação Asmoreto em Piedade - Uma ação social para corte de cabelo' },
            { src: 'images/galeria/foto2.jpg', title: 'Associação Asmoreto em Piedade - Uma ação social para corte de cabelo' },
            { src: 'images/galeria/foto8.jpg', title: 'Associação Asmoreto em Piedade - Uma ação social para corte de cabelo' },
            { src: 'images/galeria/foto48.jpg', title: 'Associação Asmoreto em Piedade - Uma ação social para corte de cabelo' },
            { src: 'images/galeria/foto49.jpg', title: 'Associação Asmoreto em Piedade - Uma ação social para corte de cabelo' },
            { src: 'images/galeria/foto77.jpg', title: 'Associação Asmoreto em Piedade - Uma ação social para corte de cabelo' },
            { src: 'images/galeria/foto84.jpg', title: 'Associação Asmoreto em Piedade - Uma ação social para corte de cabelo' },
            { src: 'images/galeria/foto6.jpg', title: 'Dia a Dia no ISCEV' },
            { src: 'images/galeria/foto97.jpg', title: 'Dia a Dia no ISCEV' },
            { src: 'images/galeria/foto98.jpg', title: 'Dia a Dia no ISCEV' },
            { src: 'images/galeria/foto114.jpg', title: 'Dia a Dia no ISCEV' },
            { src: 'images/galeria/foto34.jpg', title: 'Integração Comunitária' },
            { src: 'images/galeria/foto40.jpg', title: 'Integração Comunitária' },
            { src: 'images/galeria/foto41.jpg', title: 'Integração Comunitária' },
            { src: 'images/galeria/foto50.jpg', title: 'Integração Comunitária' },
            { src: 'images/galeria/comunidade2.jpg', title: 'Atividades ao Ar Livre' },
            { src: 'images/galeria/comunidade3.jpg', title: 'Celebrações' }
        ]
    }
};

let currentGallery = null;
let currentIndex = 0;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initModal();
});

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
    
    // Navegação
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
            
            if (event.key === 'ArrowLeft') {
                changeImage(-1);
            } else if (event.key === 'ArrowRight') {
                changeImage(1);
            }
        }
    });
}

// Abrir galeria com múltiplas imagens
function openGallery(galleryId) {
    const modal = document.getElementById('galleryModal');
    const galleryTitle = document.getElementById('galleryTitle');
    
    currentGallery = galleryData[galleryId];
    currentIndex = 0;
    
    if (currentGallery) {
        // Atualizar título da galeria
        galleryTitle.textContent = currentGallery.title;
        
        // Carregar primeira imagem
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

// Fechar modal
function closeGallery() {
    const modal = document.getElementById('galleryModal');
    
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Resetar variáveis
    currentGallery = null;
    currentIndex = 0;
}

// Carregar imagem atual
function loadCurrentImage() {
    const mainImage = document.getElementById('mainGalleryImage');
    const imageCounter = document.getElementById('imageCounter');
    const imageTitle = document.getElementById('imageTitle'); // Novo elemento
    
    if (currentGallery && currentGallery.images[currentIndex]) {
        const currentImage = currentGallery.images[currentIndex];
        const imageSrc = currentImage.src;
        const title = currentImage.title;

        // Mostrar loader enquanto carrega
        mainImage.style.opacity = '0';
        
        const img = new Image();
        img.onload = function() {
            mainImage.src = imageSrc;
            mainImage.alt = title;
            
            // Fade in suave após carregar
            setTimeout(() => {
                mainImage.style.opacity = '1';
                mainImage.style.transition = 'opacity 0.3s ease';
            }, 50);
            
            // Atualizar título da imagem
            imageTitle.textContent = title;
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

// Criar miniaturas
function createThumbnails() {
    const container = document.getElementById('galleryThumbnails');
    
    // Limpar completamente
    container.innerHTML = '';
    
    if (currentGallery) {
        currentGallery.images.forEach((currentImage, index) => {
            const thumb = document.createElement('div');
            thumb.className = `thumbnail ${index === currentIndex ? 'active' : ''}`;
            
            const thumbImg = document.createElement('img');
            thumbImg.src = currentImage.src;
            thumbImg.alt = currentImage.title;
            
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

// Mudar imagem
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
    // Atualiza o contador e estado dos botões se necessário
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

