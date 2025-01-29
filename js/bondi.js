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

const searchIcon = document.getElementsByClassName("search-icon")[0];
const searchBox = document.getElementsByClassName("nav-bar-search-box")[0];
const search = document.getElementsByClassName("navbar-search")[0];

searchIcon.addEventListener("click", () => {
    searchIcon.classList.remove("d-lg-block");
    searchBox.style.width = "280px";
    search.style.transform = "translateX(0)";
    setTimeout(() => {
        search.focus(); // Focus after 0.3s delay
    }, 300);
});

search.addEventListener("blur", () => {
    searchIcon.classList.add("d-lg-block");
    searchBox.style.width = "0px";
    search.style.transform = "translateX(calc(100% + 15px))"; // Hide it smoothly
});
