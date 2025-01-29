const listItems = document.querySelectorAll('.myList li');

listItems.forEach(item => {
    item.addEventListener('click', function() {
        const activeItem = document.querySelector('.myList li.active');
        if (activeItem) {
        activeItem.classList.remove('active');
        }

        item.classList.add('active');
    });
    });