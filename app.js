
        // Sidebar Toggle
        const openBtn = document.getElementById('openBtn');
        const closeBtn = document.getElementById('close-playlist');
        const sidebar = document.getElementById('sidebar');
        
        function toggleSidebar() {
            sidebar.classList.toggle('open');
        }
        
        openBtn.addEventListener('click', toggleSidebar);
        closeBtn.addEventListener('click', toggleSidebar);
        
        // Carousel Functionality
        const carouselItems = document.querySelectorAll('.carousel-item');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        let currentIndex = 2; // Start with the center item
        let autoSlideInterval;
        
        function updateCarousel() {
            carouselItems.forEach((item, index) => {
                // Remove all position classes
                item.classList.remove('prev-prev', 'prev', 'active', 'next', 'next-next');
                
                // Calculate position relative to currentIndex
                const position = index - currentIndex;
                const totalItems = carouselItems.length;
                
                // Assign appropriate class based on position
                if (position === -2 || position === totalItems - 2) {
                    item.classList.add('prev-prev');
                } else if (position === -1 || position === totalItems - 1) {
                    item.classList.add('prev');
                } else if (position === 0) {
                    item.classList.add('active');
                } else if (position === 1 || position === -(totalItems - 1)) {
                    item.classList.add('next');
                } else if (position === 2 || position === -(totalItems - 2)) {
                    item.classList.add('next-next');
                }
            });
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel();
            resetAutoSlide();
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel();
            resetAutoSlide();
        }
        
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
        
        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }
        
        // Event Listeners
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        
        // Pause auto-slide on hover
        const carousel = document.querySelector('.carousel-container');
        carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        carousel.addEventListener('mouseleave', startAutoSlide);
        
        // Initialize
        updateCarousel();
        startAutoSlide();
