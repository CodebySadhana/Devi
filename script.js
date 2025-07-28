const translations = {
  en: {
    title: "Financial Freedom for Women",
    intro: "Welcome to Devi, a platform dedicated to empowering women with financial literacy and job opportunities."
  },
  hi: {
    title: "महिलाओं के लिए आर्थिक स्वतंत्रता",
    intro: "देवी में आपका स्वागत है, एक ऐसा मंच जो महिलाओं को वित्तीय साक्षरता और नौकरी के अवसर प्रदान करता है।"
  },
  te: {
    title: "మహిళలకు ఆర్థిక స్వేచ్ఛ",
    intro: "దేవికి స్వాగతం, ఇది మహిళలకు ఆర్థిక అవగాహన మరియు ఉద్యోగ అవకాశాలను కల్పించే వేదిక."
  },
  ta: {
    title: "பெண்களுக்கு நிதி சுதந்திரம்",
    intro: "தேவிக்கு வரவேற்பு, பெண்களுக்கு நிதி கல்வி மற்றும் வேலை வாய்ப்புகளை வழங்கும் தளம்."
  }
  // Extend for more languages as needed
};

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("language-select");
  const elements = document.querySelectorAll("[data-lang]");

  function updateLanguage(lang) {
    elements.forEach(el => {
      const key = el.getAttribute("data-lang");
      el.textContent = translations[lang]?.[key] || translations["en"][key] || "";
    });
  }

  if (langSelect) {
    langSelect.addEventListener("change", () => {
      updateLanguage(langSelect.value);
    });
    // Initialize with selected or default language
    updateLanguage(langSelect.value || "en");
  } else {
    // If language-select is missing, just initialize with default
    updateLanguage("en");
  }
});
