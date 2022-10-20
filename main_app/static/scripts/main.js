
let data ={
    "english":
    {
        "contact":  "Contact",
        "footer": "Over 35 years helping people & businesses with financial crisis management",
        "construction": "Under Construction",
        "construction2": "We're working to finish the development of this site. Please check back soon!",
        "headqt": '"Helping minorites and businesses reach their funding goals"',
        "t1": "Loans and Grants for Women & Minorites",
        "t2": "Free Workshops to All Minority Groups",
        "t3": "Helping People Get into and Start a Business",
        "t4": "Funding Strategies",
        "t5": "Business Management Consulting",
        "t6": "Business Turnaround",
        "p1": "There are many new programs available to help women & minorites with grants and low interest loans",
        "p2": "We offer in-person or video workshops to help guide you on achieving your business goals",
        "p3": "Have you decided to start your own business but are not sure where to finacially begin?",
        "greenct": "We help with application processing for minority certification to get SBA (or other) loans & grants",
        "greenct2": "CMF Consultants shop for loans and grants that suit your specific needs!",
        "nv": "Las Vegas Office",
        "fl": "Florida Office",
    },
    "spanish":
    {
        "contact": "Contacto",
        "footer": "Más de 35 años ayudando a personas y empresas con la gestión de crisis financieras",
        "construction": "En Construcción",
        "construction2": "Esta página web está en construcción. ¡Por favor vuelva más tarde!",
        "headqt": '"Ayudar a las minorías y a las empresas con sus objetivos de financiación"',
        "t1": "Préstamos y subvenciones para mujeres y minorías",
        "t2": "Talleres gratuitos para todos los grupos minoritarios",
        "t3": "Ayudamos a las personas a iniciar un negocio",
        "t4": "Estrategias de financiación",
        "t5": "Consultoría en Gestión Empresarial",
        "t6": "Cambio de negocio",
        "p1": "Hay muchos programas nuevos disponibles para ayudar a mujeres y minorías con subvenciones y préstamos a bajo interés.",
        "p2": "Ofrecemos talleres en persona o en video para ayudarlo a guiarlo en el logro de sus objetivos comerciales",
        "p3": "¿Ha decidido iniciar su propio negocio pero no está seguro de por dónde empezar financieramente?",
        "greenct": "Ayudamos a las minorías a procesar las solicitudes de certificación para obtener préstamos y subvenciones de la SBA (u otros)",
        "greenct2": "¡Los consultores de CMF buscan préstamos y subvenciones para sus necesidades específicas!",
        "nv": "Oficina en Las Vegas",
        "fl": "Oficina en Florida",
    }
}
const langEl = document.querySelector('.langWrap');
const contactEl = document.querySelector('.contact');
const footerEl = document.querySelector('.footer');
const constructionEl = document.querySelector('.construction');
const constructionEl2 = document.querySelector('.construction2');
const headqtEl = document.querySelector('.headqt');
const t1El = document.querySelector('.t1');
const t2El = document.querySelector('.t2');
const t3El = document.querySelector('.t3');
const t4El = document.querySelector('.t4');
const t5El = document.querySelector('.t5');
const t6El = document.querySelector('.t6');
const p1El = document.querySelector('.p1');
const p2El = document.querySelector('.p2');
const p3El = document.querySelector('.p3');
const greenctEl = document.querySelector('.greenct');
const greenct2El = document.querySelector('.greenct2');
const nvEl = document.querySelector('.nv');
const flEl = document.querySelector('.fl');
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
        t1El.textContent = data[attr].t1
        t2El.textContent = data[attr].t2
        t3El.textContent = data[attr].t3
        t4El.textContent = data[attr].t4
        t5El.textContent = data[attr].t5
        t6El.textContent = data[attr].t6
        p1El.textContent = data[attr].p1
        p2El.textContent = data[attr].p2
        p3El.textContent = data[attr].p3
        greenctEl.textContent = data[attr].greenct
        greenct2El.textContent = data[attr].greenct2
        nvEl.textContent = data[attr].nv
        flEl.textContent = data[attr].fl
    })
})
