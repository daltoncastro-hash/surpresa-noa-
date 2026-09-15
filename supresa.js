// =====================================================
// 🎯 NAVEGAÇÃO ENTRE SECÇÕES
// =====================================================

function proximaSecao(numero) {
    // Esconde todas as secções
    const secoes = document.querySelectorAll('section');
    secoes.forEach(sec => sec.classList.remove('ativa'));
    
    // Mostra a secção desejada
    const proximaSec = document.getElementById('sec' + numero);
    setTimeout(() => {
        proximaSec.classList.add('ativa');
        proximaSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
}


// =====================================================
// 🎮 JOGO - RESPOSTAS
// =====================================================

function respostaErrada(botao) {
    botao.classList.add('errada');
    
    const resposta = document.getElementById('resposta-jogo');
    resposta.innerHTML = '❌ Hmm... não é bem isso! Tenta outra vez 😊';
    resposta.style.color = '#ef4444';
    
    setTimeout(() => {
        botao.classList.remove('errada');
        resposta.innerHTML = '';
    }, 2000);
}

function respostaCerta() {
    const opcoes = document.querySelectorAll('.opcao');
    opcoes.forEach(op => op.disabled = true);
    
    const botaoCerto = event.target;
    botaoCerto.classList.add('certa');
    
    const resposta = document.getElementById('resposta-jogo');
    resposta.innerHTML = '✨ EXATAMENTE! Esse é o teu verdadeiro superpoder! 💜';
    resposta.style.color = '#22c55e';
    resposta.style.fontSize = '1.4rem';
    resposta.style.fontWeight = 'bold';
    
    // Cria confetes
    criarConfetes();
    
    // Mostra botão para continuar
    setTimeout(() => {
        const btnContinuar = document.createElement('button');
        btnContinuar.className = 'btn';
        btnContinuar.textContent = 'Continuar';
        btnContinuar.onclick = () => proximaSecao(5);
        resposta.appendChild(btnContinuar);
    }, 1500);
}


// =====================================================
// 🎊 EFEITO CONFETES
// =====================================================

function criarConfetes() {
    const cores = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffa07a', '#98d8c8'];
    
    for (let i = 0; i < 50; i++) {
        const confete = document.createElement('div');
        confete.style.position = 'fixed';
        confete.style.width = '10px';
        confete.style.height = '10px';
        confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        confete.style.left = Math.random() * 100 + '%';
        confete.style.top = '-10px';
        confete.style.opacity = '1';
        confete.style.borderRadius = '50%';
        confete.style.zIndex = '9999';
        confete.style.pointerEvents = 'none';
        
        document.body.appendChild(confete);
        
        const animacao = confete.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 10}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animacao.onfinish = () => confete.remove();
    }
}


// =====================================================
// 🎁 REVELAR SURPRESA FINAL
// =====================================================

function revelaSurpresa() {
    const surpresa = document.getElementById('surpresa');
    const botao = document.getElementById('btn-surpresa');
    
    botao.style.display = 'none';
    surpresa.classList.add('revelada');
    
    // Explosão de corações
    criarCoracoesExplosivos();
    
    // Animação especial
    setTimeout(() => {
        surpresa.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
}


// =====================================================
// 💜 CORAÇÕES EXPLOSIVOS
// =====================================================

function criarCoracoesExplosivos() {
    const emojis = ['💜', '✨', '💖', '🌟', '💫', '⭐'];
    
    for (let i = 0; i < 30; i++) {
        const coracao = document.createElement('div');
        coracao.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        coracao.style.position = 'fixed';
        coracao.style.fontSize = '2rem';
        coracao.style.left = '50%';
        coracao.style.top = '50%';
        coracao.style.zIndex = '9999';
        coracao.style.pointerEvents = 'none';
        
        document.body.appendChild(coracao);
        
        const angulo = (Math.PI * 2 * i) / 30;
        const distancia = 200;
        const x = Math.cos(angulo) * distancia;
        const y = Math.sin(angulo) * distancia;
        
        const animacao = coracao.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`, opacity: 0 }
        ], {
            duration: 1500,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animacao.onfinish = () => coracao.remove();
    }
}


// =====================================================
// 🎨 PARTÍCULAS INTERATIVAS NO CURSOR
// =====================================================

document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        const particula = document.createElement('div');
        particula.textContent = '✨';
        particula.style.position = 'fixed';
        particula.style.left = e.clientX + 'px';
        particula.style.top = e.clientY + 'px';
        particula.style.fontSize = '1rem';
        particula.style.pointerEvents = 'none';
        particula.style.zIndex = '9999';
        particula.style.opacity = '1';
        
        document.body.appendChild(particula);
        
        const animacao = particula.animate([
            { transform: 'translateY(0)', opacity: 1 },
            { transform: 'translateY(-50px)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        animacao.onfinish = () => particula.remove();
    }
});