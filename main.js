const toggle = document.querySelector('.toggle-menu')
const menu = document.querySelector('.navigation')
const faqButton = document.querySelectorAll('.faq-btn')
const cartView = document.querySelector('.cart-view')
const shopCart = document.querySelector('.shop-cart-section')

toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
})

for (i = 0; i < faqButton.length; i++) {
  faqButton[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

cartView.addEventListener('click', () => {
  if (shopCart.style.display === "none") {
    shopCart.style.display = "block";
  } else {
    shopCart.style.display = "none";
  }
})




