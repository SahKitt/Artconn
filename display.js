document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-button');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const hidDiv = this.parentNode.querySelector('.hid');
            hidDiv.classList.toggle('visible');
        });
    });
});
