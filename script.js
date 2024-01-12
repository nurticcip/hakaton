const menuLink = document.querySelector('.menu-link')
const orderLink = document.querySelector('.order-link')
const adminLink = document.querySelector('.admin-link')
const admin = document.querySelector('#admin')
const order = document.querySelector('#order')
const menu = document.querySelector('#menu')
let name = document.querySelector(".food-name");
let price = document.querySelector(".price");
let image = document.querySelector(".image-url");
let create = document.querySelector(".create");

adminLink.addEventListener('click', () => {
    order.style.display = 'none'
    menu.style.display = 'none'
    admin.style.display = 'block'
})
orderLink.addEventListener('click', () => {
    admin.style.display = 'none'
    menu.style.display = 'none'
    order.style.display = 'block'
})
menuLink.addEventListener('click', () => {
    order.style.display = 'none'
    admin.style.display = 'none'
    menu.style.display = 'block'
})



// create
getProduct()

create.addEventListener("click", () => {
  if ( name.value.length !== 0 && price.value.length !== 0 && image.value.length !== 0) {
    let newProduct = {
      name: name.value,
      price: price.value,
      image: image.value,
    };
    
      name.value = ''
      price.value = ''
      image.value = ''

    let data = JSON.parse(localStorage.getItem("food")) || [];
    data.push(newProduct);
      localStorage.setItem("food", JSON.stringify(data));
      getProduct()
  } else {
      alert("Заполни все калонки!");
      name.value.length === 0 ? name.s = '1px solid red' : name.style.border = '1px solid green'
      price.value.length === 0 ? price.style.border = '1px solid red' : price.style.border = '1px solid green'
      image.value.length === 0 ? image.style.border = '1px solid red' : image.style.border = '1px solid green'
    }
});

function getProduct() {
    let getLocal = JSON.parse(localStorage.getItem('product')) || []
    getLocal.forEach((el) => {
        const menu = document.createElement('div')
        menu.setAttribute('class', 'menu')
        menu.append(menuProduct)

        const menuProduct = document.createElement('div')
        menuProduct.setAttribute('class', 'menu-product')
        menuProduct.append(menuImage, h1, menuCost)

        const menuImage = document.createElement('img')
        menuImage.url = `${el.image}`

        const h1 = document.createElement('h1')
        h1.innerHTML = `${el.name}`

        const menuCost = document.createElement('div')
        menuCost.setAttribute('class', 'menu-cost')
        menuCost.append(h2, orderButton)
        
        const h2 = document.createElement('h2')
        h2.innerHTML = `${el.price}`

        const orderButton = document.createElement('button')
        orderButton.innerHTML = 'to order'
    });


}

