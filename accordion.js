const button = document.querySelectorAll('.btn');
button.forEach(header => {
    header.addEventListener('click', () => {
        const open= document.querySelector('.text.show');
        // Close the currently open accordion if it's not the one being clicked
        if (open && open !== header.nextElementSibling) {
            open.classList.remove('show');
            open.style.display = 'none';
        }
        const content = header.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
            content.classList.remove('show');
        } else {
            content.style.display = 'block';
            content.classList.add('show');
        }
    });
});