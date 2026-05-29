/* ==========================================================================
   AGRO SUSTENTÁVEL - SCRIPT DE INTERATIVIDADE E MANIPULAÇÃO DO DOM
   ========================================================================== */

// Aguarda todo o DOM carregar com segurança
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MODO ESCURO (THEME TOGGLE) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Escuta o clique do botão de tema
    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-mode');
        
        // Altera o texto do botão de acordo com o modo ativo
        if (bodyElement.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = 'Modo Claro';
        } else {
            themeToggleBtn.textContent = 'Modo Escuro';
        }
    });


    // --- 2. MENSAGENS DINÂMICAS (AÇÃO DO USUÁRIO NO HERO) ---
    const ctaBtn = document.getElementById('cta-btn');
    const alertContainer = document.getElementById('dynamic-alert');

    // Array com mensagens dinâmicas inspiradoras
    const mensagensSustentaveis = [
        "💡 Sabia que a agricultura de precisão pode economizar até 30% de água?",
        "🌱 O plantio direto evita a erosão e mantém o solo vivo por gerações.",
        "🚜 Tecnologia e Ecologia andam juntas no agro moderno!",
        "☀️ A energia solar no campo reduz a pegada de carbono da nossa produção."
    ];

    ctaBtn.addEventListener('click', () => {
        // Sorteia uma mensagem aleatória do array
        const mensagemAleatoria = mensagensSustentaveis[Math.floor(Math.random() * mensagensSustentaveis.length)];
        
        // Insere a mensagem no HTML e remove a classe 'hidden' para exibi-la
        alertContainer.textContent = mensagemAleatoria;
        alertContainer.classList.remove('hidden');

        // Rolagem suave automática até o painel de alerta
        alertContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });


    // --- 3. VALIDAÇÃO SIMPLES DE FORMULÁRIO & INTERAÇÃO ---
    const trackingForm = document.getElementById('sustainable-form');
    const formFeedback = document.getElementById('form-feedback');

    trackingForm.addEventListener('submit', (event) => {
        // Previne o comportamento padrão de recarregar a página no submit
        event.preventDefault();

        // Captura e limpa os valores dos inputs
        const nomeValue = document.getElementById('nome').value.trim();
        const emailValue = document.getElementById('email').value.trim();

        // Validação simples de preenchimento
        if (nomeValue === "" || emailValue === "") {
            formFeedback.style.color = "red";
            formFeedback.textContent = "⚠️ Por favor, preencha todos os campos.";
            return;
        }

        // Resposta de sucesso dinâmica na tela
        formFeedback.style.color = "var(--accent-color)";
        formFeedback.textContent = `🎉 Obrigado, ${nomeValue}! Sua inscrição foi realizada com sucesso. Juntos pelo futuro sustentável!`;

        // Limpa o formulário após o envio bem-sucedido
        trackingForm.reset();
    });
});
