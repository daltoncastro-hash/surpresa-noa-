// =====================================================
// ✨ PARTÍCULAS ANIMADAS
// =====================================================

const container = document.getElementById('particulas');
const numParticulas = 30;

for (let i = 0; i < numParticulas; i++) {
    const particula = document.createElement('div');
    particula.className = 'particula';
    particula.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: white;
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5 + 0.2};
        animation: flutuar ${Math.random() * 10 + 10}s linear infinite;
    `;
    container.appendChild(particula);
}


// =====================================================
// 🖱️ EFEITO CURSOR
// =====================================================

document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) {
        const brilho = document.createElement('div');
        brilho.textContent = '✨';
        brilho.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            font-size: 1.2rem;
            pointer-events: none;
            z-index: 9999;
            opacity: 1;
        `;
        document.body.appendChild(brilho);
        
        const anim = brilho.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { transform: 'translate(-50%, -100px) scale(1)', opacity: 0 }
        ], {
            duration: 1500,
            easing: 'ease-out'
        });
        
        anim.onfinish = () => brilho.remove();
    }
});