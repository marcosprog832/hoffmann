/* ================================================= */
/* --- SCRIPT DE FUNCIONALIDADE DO POP-UP (v3) --- */
/* ---        COM INTEGRAÇÃO WHATSAPP          --- */
/* ================================================= */

document.addEventListener('DOMContentLoaded', function() {

    const popupOverlay = document.getElementById('hoffemann-popup-overlay');
    const closeBtn = document.getElementById('close-popup-btn');
    const franchiseForm = document.getElementById('franchise-form');

    // Se o popup não existir na página, para o script para evitar erros.
    if (!popupOverlay || !closeBtn || !franchiseForm) {
        return;
    }

    let popupShown = false; // Garante que o popup só apareça uma vez por visita

    // --- LÓGICA PARA ABRIR O POP-UP ---
    // Gatilho de tempo: abre o pop-up após 3 segundos.
    setTimeout(function() {
        showPopup();
    }, 3000); // 3000 milissegundos = 3 segundos
    
    // --- FUNÇÕES PARA MOSTRAR E ESCONDER ---
    function showPopup() {
        if (!popupShown) { // Verifica se o popup já não foi exibido
            popupShown = true; 
            popupOverlay.classList.add('show');
        }
    }

    function hidePopup() {
        popupOverlay.classList.remove('show');
    }

    // --- EVENTOS DE CONTROLE ---

    // 1. Fechar ao clicar no botão 'X'
    closeBtn.addEventListener('click', hidePopup);

    // 2. Fechar ao clicar fora da caixa do pop-up (no overlay)
    popupOverlay.addEventListener('click', function(event) {
        if (event.target === popupOverlay) {
            hidePopup();
        }
    });

    // 3. Fechar ao pressionar a tecla 'ESC'
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && popupOverlay.classList.contains('show')) {
            hidePopup();
        }
    });

    // ========================================================================
    // 4. LÓGICA DE ENVIO DO FORMULÁRIO PARA O WHATSAPP (CÓDIGO NOVO)
    // ========================================================================
    franchiseForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        // Número de telefone para onde a mensagem será enviada
        const numeroWhatsApp = '+5566999747552'; 

        // Coleta os dados dos campos do formulário do pop-up
        const nome = document.getElementById('popup-name').value;
        const email = document.getElementById('popup-email').value;
        const telefone = document.getElementById('popup-phone').value;

        // Cria a mensagem que será enviada
        const textoMensagem = `Olá, Hoffmann!\n\nTenho interesse em saber mais sobre a franquia.\n\n*Meu nome:* ${nome}\n*E-mail:* ${email}\n*Telefone:* ${telefone}`;
        
        // Codifica a mensagem para ser usada em uma URL
        const mensagemCodificada = encodeURIComponent(textoMensagem);

        // Cria o link final do WhatsApp
        const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemCodificada}`;
        
        // Abre o link em uma nova aba
        window.open(linkWhatsApp, '_blank');

        // Limpa os campos do formulário e fecha o pop-up
        franchiseForm.reset();
        hidePopup();
    });

});