const interruptor = document.getElementById('trocarTema');

interruptor.addEventListener('change', () => {
    document.body.classList.toggle('tema-escuro');
});
