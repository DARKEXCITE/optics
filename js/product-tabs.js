document.querySelectorAll('.product-item__description-btn').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelectorAll('.product-item__description-btn').forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active')

        document.querySelectorAll('.product-item__description-item').forEach(item => {
            if (item.classList.contains('active')) item.classList.remove('active')
        })

        const path = this.href.slice(this.href.indexOf('#') + 1)
        document.getElementById(path).classList.add('active')
    })
})