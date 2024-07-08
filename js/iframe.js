document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('a[data-src]');
    const iframe = document.getElementById('mainIframe');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            iframe.src = this.getAttribute('data-src');
        });
    });
});
