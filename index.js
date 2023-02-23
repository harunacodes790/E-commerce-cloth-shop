let demo = document.getElementById("demo")
let productPage = document.getElementById("productPage")
const greeting = document.getElementById("myP")

demo.addEventListener("click", function() {
    window.scrollTo(0, productPage.offsetTop)
})

function myfunctiona() {
    alert ('coming soon!!!')
    console.log('coming soon!!!')
}


let Name = prompt("what's your name")
let greets = Name
greeting.innerHTML = `hi ${Name}`;

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "ok proceed to the shop." );
  }
  
  function showCancel() {
    alert( "You are welcome." );
  }
  
  ask("Do you want to buy cloth?", showOk, showCancel);

let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)
