// ===== VALIDAÇÃO DE FORMULÁRIO =====
const contactForm = document.getElementById('contactForm');
        
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
            
    let isValid = true;
            
    // Validação do nome
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
            
    // Validação do email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
            
        // Validação do assunto
        const subject = document.getElementById('subject');
        const subjectError = document.getElementById('subjectError');
        if (subject.value.trim() === '') {
            subjectError.style.display = 'block';
            isValid = false;
        } else {
            subjectError.style.display = 'none';
        }
            
         // Validação da mensagem
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (message.value.trim() === '') {
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }
            
    // Se a mensagem for válida, exibe a mensagem de sucesso
    if (isValid) {
            const formSuccess = document.getElementById('formSuccess');
                formSuccess.style.display = 'block';
                contactForm.reset();
                    
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            }
});