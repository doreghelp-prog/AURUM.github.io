// ====== URL вашего Cloudflare Worker (вставьте после Шага 4) ======
const FORM_ENDPOINT = "https://aurum-telegram.ВАШ-USERNAME.workers.dev";

const translations = {
  cs: {
    nav_services: "Služby",
    nav_why: "Proč my",
    nav_gallery: "Galerie",
    nav_contact: "Kontakt",
    hero_eyebrow: "Zlatnické služby v Praze",
    hero_title: "Opravy, výroba a úpravy šperků s důrazem na detail.",
    hero_lead: "AURUM LAB PRAHA nabízí opravy prstenů, pájení řetízků, čištění a leštění, rhodiování, osazování kamenů, výrobu snubních prstenů i přetavení starého zlata.",
    hero_cta_primary: "Objednat konzultaci",
    hero_cta_secondary: "Napsat na Telegram",
    hero_point_1: "Praha • osobní přístup • prémiové zpracování",
    hero_point_2: "Rychlé opravy i zakázková výroba",
    hero_point_3: "Konzultace online přes Telegram",
    services_eyebrow: "Služby",
    services_title: "Co pro vás v AURUM LAB PRAHA děláme",
    services_lead: "Vybrané služby pro klienty, kteří chtějí rychlé, kvalitní a esteticky čisté řešení.",
    service_1_title: "Oprava prstenů",
    service_1_text: "Úpravy, opravy a renovace prstenů s důrazem na původní vzhled a pevnost.",
    service_2_title: "Pájení řetízk��",
    service_2_text: "Precizní pájení poškozených řetízků, aby opět vydržely každodenní nošení.",
    service_3_title: "Čištění a leštění",
    service_3_text: "Profesionální čištění a leštění, které vrací šperkům jejich lesk a hloubku.",
    service_4_title: "Rhodiování",
    service_4_text: "Obnovení povrchu šperků pro čistý, svěží a luxusní vzhled.",
    service_5_title: "Osazování kamenů",
    service_5_text: "Bezpečné a přesné uchycení kamenů při opravách i nových zakázkách.",
    service_6_title: "Snubní prsteny",
    service_6_text: "Výroba snubních prstenů na míru s možností úprav dle stylu a materiálu.",
    service_7_title: "Přetavení starého zlata",
    service_7_text: "Přeměna starého zlata na nový šperk s osobním významem a novým designem.",
    why_eyebrow: "Proč my",
    why_title: "Luxusní vzhled. Pečlivé řemeslo. Jasná komunikace.",
    why_text: "Nesnažíme se prodávat jen službu. Dodáváme klid, jistotu a výsledek, který působí přirozeně, čistě a hodnotně.",
    benefit_1_title: "Individuální přístup",
    benefit_1_text: "Každý šperk řešíme podle konkrétního stavu, materiálu a požadovaného výsledku.",
    benefit_2_title: "Rychlá poptávka",
    benefit_2_text: "Stačí poslat fotku nebo krátký popis přes Telegram a navrhneme další postup.",
    benefit_3_title: "Prémiová prezentace",
    benefit_3_text: "Vizuál, texty i struktura webu odpovídají úrovni moderní luxusní značky.",
    gallery_eyebrow: "Galerie",
    gallery_title: "Ukázky stylu a atmosféry",
    gallery_lead: "Dočasné vizuály připravené pro okamžité spuštění webu.",
    contact_eyebrow: "Kontakt",
    contact_title: "Domluvte si konzultaci v Praze",
    contact_text: "Napište nám přes formulář nebo Telegram. Připravíme pro vás řešení podle typu šperku, materiálu a požadovaného výsledku.",
    form_name: "Jméno / Name",
    form_phone: "Telefon / Phone",
    form_message: "Zpráva / Message",
    form_submit: "Odeslat poptávku",
    form_note: "Po odeslání se ozveme přes Telegram, e-mail nebo telefon.",
    form_success: "Poptávka odeslána. Děkujeme!",
    form_error: "Chyba odeslání. Zkuste to znovu nebo napište na Telegram.",
    footer_text: "Zlatnické služby, opravy a zakázková výroba v Praze."
  },
  en: {
    nav_services: "Services",
    nav_why: "Why us",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    hero_eyebrow: "Jewelry services in Prague",
    hero_title: "Repairs, crafting, and jewelry adjustments with attention to detail.",
    hero_lead: "AURUM LAB PRAHA offers ring repairs, chain soldering, cleaning and polishing, rhodium plating, stone setting, wedding ring production, and remelting of old gold.",
    hero_cta_primary: "Book a consultation",
    hero_cta_secondary: "Write on Telegram",
    hero_point_1: "Prague • personal approach • premium craftsmanship",
    hero_point_2: "Fast repairs and custom production",
    hero_point_3: "Online consultation via Telegram",
    services_eyebrow: "Services",
    services_title: "What we do for you at AURUM LAB PRAHA",
    services_lead: "Selected services for clients who want a fast, high-quality, and visually refined solution.",
    service_1_title: "Ring repair",
    service_1_text: "Adjustments, repairs, and restoration with respect to the original look and durability.",
    service_2_title: "Chain soldering",
    service_2_text: "Precise soldering of damaged chains so they can be worn again every day.",
    service_3_title: "Cleaning and polishing",
    service_3_text: "Professional cleaning and polishing that restores shine and depth.",
    service_4_title: "Rhodium plating",
    service_4_text: "Surface renewal for a clean, fresh, and luxurious appearance.",
    service_5_title: "Stone setting",
    service_5_text: "Safe and precise stone setting for repairs and new commissions.",
    service_6_title: "Wedding rings",
    service_6_text: "Custom wedding rings tailored to your style and preferred materials.",
    service_7_title: "Remelting old gold",
    service_7_text: "Transform old gold into a new piece with personal meaning and a fresh design.",
    why_eyebrow: "Why us",
    why_title: "Luxury look. Careful craftsmanship. Clear communication.",
    why_text: "We do more than sell a service. We deliver peace of mind, confidence, and a result that feels natural, clean, and valuable.",
    benefit_1_title: "Individual approach",
    benefit_1_text: "Every piece is handled according to its condition, material, and desired outcome.",
    benefit_2_title: "Fast inquiry",
    benefit_2_text: "Send a photo or short description via Telegram and we will suggest the next step.",
    benefit_3_title: "Premium presentation",
    benefit_3_text: "The visual style, copy, and structure match a modern luxury brand.",
    gallery_eyebrow: "Gallery",
    gallery_title: "Style and atmosphere previews",
    gallery_lead: "Temporary visuals prepared for an immediate website launch.",
    contact_eyebrow: "Contact",
    contact_title: "Book a consultation in Prague",
    contact_text: "Write via the form or Telegram. We will prepare a custom solution based on the jewelry type, material, and desired result.",
    form_name: "Name / Jméno",
    form_phone: "Phone / Telefon",
    form_message: "Message / Zpráva",
    form_submit: "Send inquiry",
    form_note: "After sending we will reply via Telegram, email or phone.",
    form_success: "Request sent. Thank you!",
    form_error: "Submission failed. Please try again or contact us on Telegram.",
    footer_text: "Jewelry services, repairs, and custom production in Prague."
  }
};

let currentLang = "cs";
const langButtons = document.querySelectorAll(".lang-btn");
const translatable = document.querySelectorAll("[data-lang-key]");
const yearEl = document.getElementById("year");
const form = document.getElementById("leadForm");

if (yearEl) yearEl.textContent = new Date().getFullYear();

function setLanguage(lang) {
  currentLang = lang;
  langButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  translatable.forEach(el => {
    const key = el.dataset.langKey;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang === "cs" ? "cs" : "en";
}

langButtons.forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

if (form) {
 const WORKER_URL = "https://aurumlab-telegram.doreghelp.workers.dev";

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const fd = new FormData(form);
  const payload = {
    name: fd.get("name") || "",
    phone: fd.get("phone") || "",
    message: fd.get("message") || ""
  };

  const submitBtn = form.querySelector("button[type='submit']");
  const originalText = submitBtn.textContent;

  submitBtn.disabled = true;
  submitBtn.textContent = currentLang === "cs" ? "Odesílám..." : "Sending...";

  try {
    const resp = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await resp.json();

    if (result.ok) {
      const msg = currentLang === "cs"
        ? "✅ Děkujeme! Vaše poptávka byla odeslána. Ozveme se brzy."
        : "✅ Thank you! Your request was sent. We will contact you soon.";
      alert(msg);
      form.reset();
    } else {
      throw new Error(result.error || "Unknown error");
    }
  } catch (err) {
    console.error("Form error:", err);
    const msg = currentLang === "cs"
      ? "❌ Nepodařilo se odeslat. Napište prosím na Telegram: @AURUMLABPRAHA_bot"
      : "❌ Could not send. Please write on Telegram: @AURUMLABPRAHA_bot";
    alert(msg);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});
}

setLanguage("cs");