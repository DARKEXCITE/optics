// Табы в описании

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

// Счетчик количества товаров
const productCounterLess = document.getElementById('productCounterLess')
const productCounterMore = document.getElementById('productCounterMore')
const productCounter = document.getElementById('productCounter')

// Вычитание
function sub() {
    if (+productCounter.innerText === 2) {
        productCounterLess.style.display = 'none'
        productCounter.innerText = +productCounter.innerText - 1
    } else if (+productCounter.innerText > 1) {
        productCounter.innerText = +productCounter.innerText - 1
    }
}

// Сложение
function add() {
    productCounterLess.style.display = 'block'
    productCounter.innerText = +productCounter.innerText + 1
}

productCounterLess.addEventListener('click', sub)
productCounterMore.addEventListener('click', add)
