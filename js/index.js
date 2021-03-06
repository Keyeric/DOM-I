const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav
document.querySelector("nav").children[0].innerText = siteContent["nav"]["nav-item-1"];
document.querySelector("nav").children[1].innerText = siteContent["nav"]["nav-item-2"];
document.querySelector("nav").children[2].innerText = siteContent["nav"]["nav-item-3"];
document.querySelector("nav").children[3].innerText = siteContent["nav"]["nav-item-4"];
document.querySelector("nav").children[4].innerText = siteContent["nav"]["nav-item-5"];
document.querySelector("nav").children[5].innerText = siteContent["nav"]["nav-item-6"];

const newCrap = document.createElement("a");
newCrap.textContent = "Feedback";
newCrap.setAttribute('href', '#');
document.querySelector('nav').appendChild(newCrap)

const newNav = document.createElement("a");
newNav.textContent = "What";
newNav.setAttribute('href', '#');
document.querySelector('nav').prepend(newNav)

const navGreen = document.querySelectorAll('nav a')
navGreen.forEach( element => {
  element.style.color = "green"
})


//CTA
document.getElementsByClassName("cta-text")[0].children[0].innerText = siteContent["cta"]["h1"];
document.getElementsByClassName("cta-text")[0].children[1].innerText = siteContent["cta"]["button"];
const ctaPic = document.getElementById("cta-img");
ctaPic.setAttribute('src', siteContent["cta"]["img-src"])

//Main
document.getElementsByClassName("top-content")[0].children[0].children[0].innerText = siteContent["main-content"]["features-h4"];
document.getElementsByClassName("top-content")[0].children[0].children[1].innerText = siteContent["main-content"]["features-content"];
document.getElementsByClassName("top-content")[0].children[1].children[0].innerText = siteContent["main-content"]["about-h4"];
document.getElementsByClassName("top-content")[0].children[1].children[1].innerText = siteContent["main-content"]["about-content"];
const mainPic = document.getElementById("middle-img");
mainPic.setAttribute('src', siteContent["main-content"]["middle-img-src"])
document.getElementsByClassName("bottom-content")[0].children[0].children[0].innerText = siteContent["main-content"]["services-h4"];
document.getElementsByClassName("bottom-content")[0].children[0].children[1].innerText = siteContent["main-content"]["services-content"];
document.getElementsByClassName("bottom-content")[0].children[1].children[0].innerText = siteContent["main-content"]["product-h4"];
document.getElementsByClassName("bottom-content")[0].children[1].children[1].innerText = siteContent["main-content"]["product-content"];
document.getElementsByClassName("bottom-content")[0].children[2].children[0].innerText = siteContent["main-content"]["vision-h4"];
document.getElementsByClassName("bottom-content")[0].children[2].children[1].innerText = siteContent["main-content"]["vision-content"];

//Contact
document.getElementsByClassName("contact")[0].children[0].innerText = siteContent["contact"]["contact-h4"];
document.getElementsByClassName("contact")[0].children[1].innerText = siteContent["contact"]["address"];
document.getElementsByClassName("contact")[0].children[2].innerText = siteContent["contact"]["phone"];
document.getElementsByClassName("contact")[0].children[3].innerText = siteContent["contact"]["email"];

//Footer
document.getElementsByTagName("footer")[0].children[0].innerText = siteContent["footer"]["copyright"];