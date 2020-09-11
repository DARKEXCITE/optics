const tabTitles = document.querySelectorAll('.checkout__tab-title');
tabTitles.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()
        const path = item.href.slice(item.href.indexOf('#') + 1)
        document.getElementById(path).classList.toggle('show')
    })
})