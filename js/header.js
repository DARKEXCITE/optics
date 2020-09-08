// Выезжающее меню в каталоге
const headerCatalogBtn = document.querySelector('.header__catalog-button')
const headerCatalogMenu = document.querySelector('.header__catalog-menu')

headerCatalogBtn.addEventListener('click', event => {
    toggleCatalogMenu()
    document.addEventListener('click', closeCatalogMenu)
})

const toggleCatalogMenu = () => {
    headerCatalogMenu.classList.toggle('open')
}

const closeCatalogMenu = event => {
    const target = event.target
    if (!target.closest('.header__catalog-button') && !target.closest('.header__catalog-menu')) {
        if (headerCatalogMenu.classList.contains('open')) {
            if (target !== target.closest('.header__catalog-menu')) {
                headerCatalogMenu.classList.toggle('open')
            }
        } else {
            document.removeEventListener('click', closeCatalogMenu)
        }
    }
}

// Шапка при скролле
const headerOnScroll = document.querySelector('.header-onscroll')

window.onscroll = () => {
    if (window.pageYOffset > 200) {
        headerOnScroll.classList.remove('hide');
    } else {
        headerOnScroll.classList.add('hide');
    }
}