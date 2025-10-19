const links = document.querySelectorAll(".menu-item");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("ativo");
    }
});