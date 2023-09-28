"use strict";

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

function closeMobileMenu() {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
}
navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/**
 * change language
 */

function toggleLanguage() {
  const langSelect = document.getElementById("lang");
  const selectedLang = langSelect.value;

  const navOneElement = document.getElementById("navOne");
  const navTwoElement = document.getElementById("navTwo");
  const navThreeElement = document.getElementById("navThree");
  const sloganElement = document.getElementById("slogan");
  const contactLink = document.getElementById("contactLink");
  const greetingElement = document.getElementById("greeting");
  const usElement = document.getElementById("us");
  const helpElement = document.getElementById("help");
  const accountingElement = document.getElementById("accounting");
  const contactElement = document.getElementById("contactField");
  const contactTextElement = document.getElementById("contactText");
  const phoneElement = document.getElementById("phone");
  const nameElement = document.getElementById("user");
  const teleElement = document.getElementById("tele");
  const messageElement = document.getElementById("message");
  const sendMessageElement = document.getElementById("sendMessage");
  const sendElement = document.getElementById("send");

  if (selectedLang === "en") {
    navOneElement.textContent = "Home.";
    navTwoElement.textContent = "About.";
    navThreeElement.textContent = "Contact.";
    sloganElement.textContent =
      "Balancing Your Books, Maximizing Your Success!";
    greetingElement.textContent = "Get in touch";
    usElement.textContent = "About us";
    helpElement.textContent = "We can help you!";
    accountingElement.textContent =
      "We are an accounting firm consisting of experienced accounting economists who strive for and enjoy close and personal contact and collaboration with our clients. We assist you throughout the journey with your company, from start to finish, whether you are a sole proprietor or have a limited company. We offer services in finance and accounting";
    contactElement.textContent = "Contact";
    contactTextElement.textContent =
      "Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.";
    sendMessageElement.textContent =
      "Financial Questions? Send a Message, We've Got the Answers";
    phoneElement.textContent = "Phone";
    nameElement.textContent = "Name";
    teleElement.textContent = "Phone";
    messageElement.textContent = "Message";
    sendElement.textContent = "Send";
    contactLink.textContent = contactLink.getAttribute("data-en");
  } else if (selectedLang === "se") {
    navOneElement.textContent = "Hem.";
    navTwoElement.textContent = "Om oss.";
    navThreeElement.textContent = "Kontakta oss.";
    sloganElement.textContent = "Balansera dina siffror, optimera din framgång";
    greetingElement.textContent = "Kontakta oss";
    usElement.textContent = "Om oss";
    helpElement.textContent = "Vi hjälper dig!";
    accountingElement.textContent =
      "Vi är en redovisningsbyrå bestående av erfarna redovisningsekonomer som strävar efter och trivs med nära och personlig kontakt och samarbete med våra kunder. Vi hjälper dig genom hela resan med ditt företag, från start till mål, oavsett om du är enskild näringsidkare eller har ett aktiebolag. Vi erbjuder tjänster inom ekonomi och redovisning";
    contactElement.textContent = "Kontakt";
    contactTextElement.textContent = "Fyll i formuläret så kontaktar vi dig!";
    sendMessageElement.textContent =
      "Finansiella frågor? Skicka ett meddelande till oss, Vi har svaren!";
    phoneElement.textContent = "Telefon";
    nameElement.textContent = "Namn";
    teleElement.textContent = "Telefon";
    messageElement.textContent = "Meddelande";
    sendElement.textContent = "Skicka";
    contactLink.textContent = contactLink.getAttribute("data-se");
  }
}

// Add a change event listener to the language select
const langSelect = document.getElementById("lang");
langSelect.addEventListener("change", toggleLanguage);

// Initialize the greeting and link text based on the initially selected language
toggleLanguage();

function onClick(e) {
  e.preventDefault();
  grecaptcha.enterprise.ready(async () => {
    const token = await grecaptcha.enterprise.execute(
      "6LdJcV0oAAAAAFfukwHMWFe3BDjouzvdm8W87-jH",
      { action: "LOGIN" }
    );
    // IMPORTANT: The 'token' that results from execute is an encrypted response sent by
    // reCAPTCHA Enterprise to the end user's browser.
    // This token must be validated by creating an assessment.
    // See https://cloud.google.com/recaptcha-enterprise/docs/create-assessment
  });
}
