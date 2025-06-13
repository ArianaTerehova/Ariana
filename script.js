const translations = {
  lv: {
    btn_about: "Par mani",
    btn_mma: "MMA",
    btn_cat: "Mans kaķis",
    btn_contact: "Sazināties",
    about_title: "Par mani",
    born: "24.09.2007 – mana dzimšanas diena",
    school: "Es mācos Rīgas Tehniskajā koledžā uz Programmēšanas tehniķi",
    traits: "Esmu jautra, smieklīga, sabiedriska un pozitīva",
    mma_title: "MMA",
    mma_text: "Mans hobijs ir MMA. Trenējos klubā SevArch. Esmu 2 gadu čempions MMA un Pankrationā. Tas man palīdz būt stiprai, disciplinētai un fokusētai.",
    cat_title: "Mans kaķis Koržik",
    cat_text: "Koržikam ir 1 gads. Viņš ir mīļš, rotaļīgs un ļoti ziņkārīgs.",
    contact_title: "Sazināties ar mani",
    contact_label: "Tavs ziņojums:",
    send_btn: "Sūtīt"
  },
  en: {
    btn_about: "About Me",
    btn_mma: "MMA",
    btn_cat: "My Cat",
    btn_contact: "Contact",
    about_title: "About Me",
    born: "24.09.2007 – my birthday",
    school: "I study at Riga Technical College as a Programming Technician",
    traits: "I am fun, funny, social, and positive",
    mma_title: "MMA",
    mma_text: "My hobby is MMA. I train at SevArch club. I’m a 2-year champion in MMA and Pankration. It helps me be strong, disciplined, and focused.",
    cat_title: "My Cat Koržik",
    cat_text: "Koržik is 1 year old. He is sweet, playful, and very curious.",
    contact_title: "Contact Me",
    contact_label: "Your message:",
    send_btn: "Send"
  },
  ru: {
    btn_about: "Обо мне",
    btn_mma: "ММА",
    btn_cat: "Мой кот",
    btn_contact: "Связаться",
    about_title: "Обо мне",
    born: "24.09.2007 – мой день рождения",
    school: "Я учусь в Рижском техническом колледже на техника-программиста",
    traits: "Я весёлая, смешная, общительная и позитивная",
    mma_title: "ММА",
    mma_text: "Моё хобби – ММА. Я тренируюсь в клубе SevArch. Я 2 года чемпионка по ММА и панкратиону. Это помогает мне быть сильной, дисциплинированной и сосредоточенной.",
    cat_title: "Мой кот Коржик",
    cat_text: "Коржику 1 год. Он ласковый, игривый и очень любопытный.",
    contact_title: "Связаться со мной",
    contact_label: "Твоё сообщение:",
    send_btn: "Отправить"
  }
};

function showSection(sectionId) {
  document.querySelectorAll(".content-section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Ziņojums nosūtīts! / Message sent! / Сообщение отправлено!");
});
