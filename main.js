//Variable definition
const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const cardsContainer = document.querySelector('.cards-container')

const burgerMenu = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu')

const desktopShopingCartImg = document.querySelector('.navbar-shopping-cart')
const desktopShoppingCart = document.querySelector('.shopping-cart-container')

const productDetailContainer = document.querySelector('.product-detail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

//addEventListener
navEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleMobileMenu)
desktopShopingCartImg.addEventListener('click', toggleShoppingCart)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


//Desktop menu
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive') //toggle activa o inactiva dependiendo del estado. 

    if(!desktopShoppingCart.classList.contains('inactive')) {
        desktopShoppingCart.classList.toggle('inactive')
    }

    if(!productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.add('inactive')
    }
}

//Mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')

    if(!desktopShoppingCart.classList.contains('inactive')) {
        desktopShoppingCart.classList.toggle('inactive')
    }

    if(!productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.add('inactive')
    }

}

//shopping cart
function toggleShoppingCart() {
    desktopShoppingCart.classList.toggle('inactive')

    if(!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive')
    }

    if(!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive')
    } 

    if(!productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.add('inactive')
    }
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive')

    if(!desktopShoppingCart.classList.contains('inactive')) {
        desktopShoppingCart.classList.toggle('inactive')
    }

    if(!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive')
    }

    if(!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive')
    } 
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Lights',
    price: 10,
    image: 'https://contents.mediadecathlon.com/p1898422/k$641c8d34be572289d162705f9090300d/luces-para-bicicleta-led-st-920-delantero-slash-trasero-usb.jpg?format=auto&quality=40&f=452x452',
})
productList.push({
    name: 'Helmet',
    price: 40,
    image: 'https://cdn.shopify.com/s/files/1/0604/4637/6123/products/659436676916.jpg?v=1640799457',
})


function renderProducts(array) {
for(product of array) {

    // const productCard = `
    // <div class="product-card">
    //     <img class="product-card-image" src="${product.image}" alt="" onclick="openProductDetailAside">
    //     <div class="product-info">
    //         <div>
    //             <p>$${product.price}</p>
    //             <p>${product.name}</p>
    //         </div>
    //         <figure>
    //             <img src="./icons/bt_add_to_cart.svg" alt="">
    //         </figure>
    //     </div>
    // </div>
    // `
    // cardsContainer.innerHTML += productCard

    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)
    productImg.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.innerHTML = '$' + product.price
    const productName = document.createElement('p')
    productName.innerHTML = product.name

    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)

    const productInfoFigure = document.createElement('figure')
    const addToCartImg = document.createElement('img')
    addToCartImg.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(addToCartImg)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)
}
}

renderProducts(productList)

