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

let snippetImg = document.getElementById("cta-img");
snippetImg.setAttribute('src', siteContent["cta"]["img-src"]);



let heading1 = document.querySelector('h1');
heading1.textContent = siteContent["cta"]["h1"];

let ctaBtn = document.querySelector("button");
ctaBtn.textContent = siteContent["cta"]["button"]


//////////// nav /////////////////
const navLinks = document.querySelectorAll("nav a");
navLinks[0].textContent = siteContent["nav"]["nav-item-1"]
navLinks[1].textContent = siteContent["nav"]["nav-item-2"]
navLinks[2].textContent = siteContent["nav"]["nav-item-3"]
navLinks[3].textContent = siteContent["nav"]["nav-item-4"]
navLinks[4].textContent = siteContent["nav"]["nav-item-5"]
navLinks[5].textContent = siteContent["nav"]["nav-item-6"]

navLinks.forEach(link =>  {
  link.style.color = 'green';
})


//////   Top Content //////////
const topCtnH4 = document.querySelectorAll(".top-content h4");
topCtnH4[0].textContent = siteContent["main-content"]["features-h4"]
topCtnH4[1].textContent = siteContent["main-content"]["about-h4"]

const topCtnH4Text = document.querySelectorAll(".top-content p");
topCtnH4Text[0].textContent = siteContent["main-content"]["features-content"]
topCtnH4Text[1].textContent = siteContent["main-content"]["about-content"]


///////// middle content ///////////
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

/////////Bottom Content //////////////
const bottomCtnH4 = document.querySelectorAll(".bottom-content h4");
bottomCtnH4[0].textContent = siteContent["main-content"]["services-h4"]
bottomCtnH4[1].textContent = siteContent["main-content"]["product-h4"]
bottomCtnH4[2].textContent = siteContent["main-content"]["vision-h4"]

const bottomCtnH4Text = document.querySelectorAll(".bottom-content p");
bottomCtnH4Text[0].textContent = siteContent["main-content"]["services-content"]
bottomCtnH4Text[1].textContent = siteContent["main-content"]["product-content"]
bottomCtnH4Text[2].textContent = siteContent["main-content"]["vision-content"]



//////////Contact section //////////////
const contactInfo = document.querySelector("section.contact h4");
contactInfo.textContent = siteContent["contact"]["contact-h4"]
const contactText = document.querySelectorAll("section.contact p");
contactText[0].textContent = siteContent["contact"]["address"]
contactText[1].textContent = siteContent["contact"]["phone"]
contactText[2].textContent = siteContent["contact"]["email"]

const footerP = document.querySelector("footer > p");
footerP.textContent = siteContent["footer"]["copyright"]