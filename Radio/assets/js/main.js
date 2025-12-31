document.addEventListener('DOMContentLoaded', () => {
    // --- Audio Player Logic ---
    const listenLiveBtns = document.querySelectorAll('.btn-primary'); // Assuming all primary buttons might trigger play in this demo context, or specifically "Listen Live"
    const playerBar = document.querySelector('.audio-player-bar');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = playPauseBtn ? playPauseBtn.querySelector('i') : null;
    let isPlaying = false;

    // Simulate Audio Element
    // const audio = new Audio('https://stream-url-here'); // Placeholder

    function togglePlay() {
        isPlaying = !isPlaying;
        updatePlayerUI();
    }

    function updatePlayerUI() {
        if (isPlaying) {
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
            // Add wave animation to player art
            document.querySelector('.player-album-art').innerHTML = `
                <div class="music-waves" style="height: 20px;">
                    <span class="wave-bar" style="background: #fff; width: 3px;"></span>
                    <span class="wave-bar" style="background: #fff; width: 3px;"></span>
                    <span class="wave-bar" style="background: #fff; width: 3px;"></span>
                </div>
            `;
        } else {
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
            document.querySelector('.player-album-art').innerHTML = '<i class="fas fa-broadcast-tower"></i>';
        }
    }

    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', togglePlay);
    }

    // "Listen Live" buttons trigger the player
    listenLiveBtns.forEach(btn => {
        if (btn.textContent.includes('Listen Live') || btn.innerHTML.includes('fa-play')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                playerBar.classList.add('active'); // Show player
                if (!isPlaying) {
                    togglePlay();
                }
            });
        }
    });

    // Mobile Menu Toggle (Bonus functionality since it was in CSS but not JS)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            if (navMenu.style.display === 'flex') {
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '70px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = 'rgba(10, 10, 10, 0.95)'; // Dark background
                navMenu.style.backdropFilter = 'blur(10px)';
                navMenu.style.padding = '20px';
                navMenu.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
                navMenu.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
            }
        });
    }
});
