//Variable definition
const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const cardsContainer = document.querySelector('.cards-container')

const burgerMenu = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu')

const desktopShopingCartImg = document.querySelector('.navbar-shopping-cart')
const desktopShoppingCart = document.querySelector('.shopping-cart-container')

const desktopAll = document.getElementById('desktop-menu-all')
const desktopClothes = document.getElementById('desktop-menu-clothes')
const desktopElectronics = document.getElementById('desktop-menu-electronics')
const desktopFurnitures = document.getElementById('desktop-menu-furnitures')
const desktopToys = document.getElementById('desktop-menu-toys')
const desktopOthers = document.getElementById('desktop-menu-others')

const mobileAll = document.getElementById('mobile-menu-all')
const mobileClothes = document.getElementById('mobile-menu-clothes')
const mobileElectronics = document.getElementById('mobile-menu-electronics')
const mobileFurnitures = document.getElementById('mobile-menu-furnitures')
const mobileToys = document.getElementById('mobile-menu-toys')
const mobileOthers = document.getElementById('mobile-menu-others')

const addToCardButton = document.querySelector('.add-to-cart-button')

let currentProduct
let cartItemsCounter = 0
let cartItemsSum = 0

const orderItems = document.querySelector('.my-order-items')
const orderSummary = document.querySelector('.order')
const noItem = document.querySelector('.no-item-msj')

const articleCount = document.querySelector('.article-count')
const articleSum = document.querySelector('.article-sum')

//product detail aside definitions
const productDetailContainer = document.querySelector('.product-detail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
let productDetailImage = document.querySelector('.product-detail-img')
let productDetailPrice = document.querySelector('.product-detail-price')
let productDetailName = document.querySelector('.product-detail-name')
let productDetailDescription = document.querySelector('.product-detail-description')
let productDetailButton = document.querySelector('.add-to-cart-button')
let productDetailButtonImage = document.querySelector('.add-to-cart-button-img')

//addEventListener
navEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleMobileMenu)
desktopShopingCartImg.addEventListener('click', toggleShoppingCart)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

desktopAll.addEventListener('click',function(){productsFilter(products)})
desktopClothes.addEventListener('click',function(){productsFilter(clothes)})
desktopElectronics.addEventListener('click',function(){productsFilter(electronics)})
desktopFurnitures.addEventListener('click',function(){productsFilter(furniture)})
desktopToys.addEventListener('click',function(){productsFilter(toys)})
desktopOthers.addEventListener('click',function(){productsFilter(others)})

mobileAll.addEventListener('click',function(){productsFilter(products)})
mobileClothes.addEventListener('click',function(){productsFilter(clothes)})
mobileElectronics.addEventListener('click',function(){productsFilter(electronics)})
mobileFurnitures.addEventListener('click',function(){productsFilter(furniture)})
mobileToys.addEventListener('click',function(){productsFilter(toys)})
mobileOthers.addEventListener('click',function(){productsFilter(others)})

addToCardButton.addEventListener('click', addToCart)

class Product {
    constructor(name,price,image,description,type,sum){
        this.name = name
        this.price = price
        this.image = image
        this.description = description
        this.type = type
        this.sum = sum
    }
}

let bike = new Product('Bike', 120, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.', 'others',1)

let light = new Product('Light', 10, 'https://contents.mediadecathlon.com/p1898422/k$641c8d34be572289d162705f9090300d/luces-para-bicicleta-led-st-920-delantero-slash-trasero-usb.jpg?format=auto&quality=40&f=452x452', 'This lights help you see at night and also cars and motorcycles can always see you','electronics',1)

let helmet = new Product('Helmet', 40, 'https://cdn.shopify.com/s/files/1/0604/4637/6123/products/659436676916.jpg?v=1640799457', 'Protect your head from damage with a high quality helmet', 'others',1)

let womanTshirt = new Product('Woman T-shirt', 20, 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Comfortable t-shirt for women', 'clothes',1)

let hoodie = new Product('Hoodie', 40, 'https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Incredible black Vans hoodie to look amazing', 'clothes',1)

let duck = new Product('Bath Duck', 5, 'https://images.pexels.com/photos/5337590/pexels-photo-5337590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Cute bath duck for your kids to play and have an amazing bath', 'toys',1)

let sofa = new Product('Leather Sofa', 700, 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Beautiful and comfortable leather sofa for your living room' , 'furniture',1)

let products = []
products.push(bike, light, helmet, womanTshirt, hoodie, duck, sofa)

let clothes = products.filter((product) => product.type == 'clothes')
let electronics = products.filter((product) => product.type == 'electronics')
let furniture = products.filter((product) => product.type == 'furniture')
let toys = products.filter((product) => product.type == 'toys')
let others = products.filter((product) => product.type == 'others')

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

 function changeProductDetailAsideInfo(productName) {

     products.forEach((product) => {
         if(productName == product.name) {
             productDetailImage.setAttribute('src', product.image)
             productDetailPrice.innerHTML = '$' + product.price
             productDetailName.innerHTML = product.name
             productDetailDescription.innerHTML = product.description
             currentProduct = product
         } else {
             return
         }
     })

     openProductDetailAside()
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

function renderProducts(array) {
    for(product of array) {
        const productCard = `
        <div class="product-card ${product.type}">
            <img class="product-card-image" src="${product.image}" alt="" onclick="changeProductDetailAsideInfo('${product.name}')">
            <div class="product-info">
                <div>
                    <p>$${product.price}</p>
                    <p>${product.name}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>
        `
        cardsContainer.innerHTML += productCard
    }
}

function productsFilter(array) {

    cardsContainer.innerHTML = ""

    renderProducts(array)

}

function addToCart() {

    const addItem = 
    `
    <div class="shopping-cart">
        <figure>
            <img src="${currentProduct.image}" alt="${currentProduct.name}">
        </figure>
        <p>${currentProduct.name}</p>
        <p>$${currentProduct.price}</p>
        <img src="./icons/icon_close.png" alt="close">
    </div>
    `
    orderItems.innerHTML += addItem
    cartItemsCounter ++
    cartItemsSum = cartItemsSum + currentProduct.price

    let articleS
    
    if(cartItemsCounter = 1) {
        articleS = ' article'
    } else {
        articleS = ' articles'
    }

    articleCount.innerHTML = cartItemsCounter + articleS
    articleSum.innerHTML = '$' + cartItemsSum

    if(cartItemsCounter > 0) {
        noItem.classList.add('inactive')
        orderSummary.classList.remove('inactive')
    }

}
renderProducts(products)

