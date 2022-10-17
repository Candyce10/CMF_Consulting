
let data ={
    "english":
    {
        "contact":  "Contact",
        "footer": " Over 35 years helping people & businesses with financial crisis management"
    },
    "spanish":
    {
        "contact": "Contacto",
        "footer": "más de 35 años"
    }
}
const langEl = document.querySelector('.langWrap');
const contactEl = document.querySelector('.contact');
const footerEl = document.querySelector('.footer');
const link = document.querySelectorAll('a');

link.forEach(el =>{
    el.addEventListener('click', () =>{
        langEl.querySelector('.active').classList.remove('active')
        el.classList.add('active');

        const attr = el.getAttribute('language');

        contactEl.textContent = data[attr].contact
        footerEl.textContent = data[attr].footer
    })
})
console.log("hi")