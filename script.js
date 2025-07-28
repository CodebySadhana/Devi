const translations = {
  en: {
    title: "Financial Freedom for Women",
    intro: "Welcome to Devi, a platform dedicated to empowering women with financial literacy and job opportunities."
  },
  hi: {
    title: "महिलाओं के लिए आर्थिक स्वतंत्रता",
    intro: "देवी में आपका स्वागत है, एक ऐसा मंच जो महिलाओं को वित्तीय साक्षरता और नौकरी के अवसरों के साथ सशक्त बनाता है।"
  },
  te: {
    title: "మహిళలకు ఆర్థిక స్వేచ్ఛ",
    intro: "దేవికి స్వాగతం, ఇది మహిళలకు ఆర్థిక అవగాహన మరియు ఉద్యోగ అవకాశాలను కల్పించే వేదిక."
  },
  ta: {
    title: "பெண்களுக்கு நிதி சுதந்திரம்",
    intro: "தேவிக்கு வரவேற்பு, பெண்களுக்கு நிதி கல்வி மற்றும் வேலை வாய்ப்புகளை வழங்கும் ஒரு தளம்."
  }
  // Continue for 33 languages
};

const langSelect = document.getElementById("language-select");
const elements = document.querySelectorAll("[data-lang]");

function updateLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang]?.[key] || translations["en"][key] || "";
  });
}

// Update language on dropdown change
langSelect.addEventListener("change", () => {
  updateLanguage(langSelect.value);
});

// Initialize with default language
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage(langSelect.value || "en");
});
