document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.organizer img');
    const modal = document.createElement('div');
    const modalContent = document.createElement('img');
    const closeButton = document.createElement('span');

    modal.classList.add('modal');
    modalContent.classList.add('modal-content');
    closeButton.classList.add('close');
    closeButton.textContent = '×';

    modal.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    images.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            modalContent.src = image.src;
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
