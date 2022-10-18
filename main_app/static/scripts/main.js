
let data ={
    "english":
    {
        "contact":  "Contact",
        "footer": "Over 35 years helping people & businesses with financial crisis management",
        "construction": "Under Construction",
        "construction2": "We're working to finish the development of this site. Please check back soon!",
        "headqt": '"Helping minorites and businesses reach their funding goals"'
    },
    "spanish":
    {
        "contact": "Contacto",
        "footer": "más de 35 años",
        "construction": "En Construcción",
        "construction2": "Esta página web está en construcción. Por favor vuelva más tarde.",
        "headqt": '"Ayudar a las minorías y a las empresas con sus objetivos de financiación"',


    }
}
const langEl = document.querySelector('.langWrap');
const contactEl = document.querySelector('.contact');
const footerEl = document.querySelector('.footer');
const constructionEl = document.querySelector('.construction');
const constructionEl2 = document.querySelector('.construction2');
const headqtEl = document.querySelector('.headqt');
const link = document.querySelectorAll('a');

link.forEach(el =>{
    el.addEventListener('click', () =>{
        langEl.querySelector('.active').classList.remove('active')
        el.classList.add('active');

        const attr = el.getAttribute('language');

        contactEl.textContent = data[attr].contact
        footerEl.textContent = data[attr].footer
        constructionEl.textContent = data[attr].construction
        constructionEl2.textContent = data[attr].construction2
        headqtEl.textContent = data[attr].headqt
    })
})
console.log("hi")
