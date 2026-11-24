
// ==========================================
// NAMMAMARGA - COMPLETE JAVASCRIPT
// ==========================================

// 1. WEBSITE TRANSLATIONS

const translations = {

    en: {
        tagline: "Your Guide to Public Information",
        home: "Home",
        services: "Services",
        schemesTitle: "Government Schemes",
        transportTitle: "Bus Routes",
        healthcareTitle: "Healthcare",
        emergencyTitle: "Emergency Information",

        welcome: "Welcome to NammaMarga",
        intro: "Access public information easily in your preferred language.",
        choose: "Choose Language:",
        read: "🔊 Read Page",
        stop: "⏹ Stop",

        explore: "Explore Our Services",
        serviceIntro: "Choose a service to find the information you need.",

        serviceSchemes: "Government Schemes",
        schemeDesc: "Discover government welfare schemes and public benefits.",
        exploreSchemes: "Explore Schemes",

        serviceBus: "Bus Routes",
        busDesc: "Find public transport routes and travel information.",
        exploreRoutes: "Explore Routes",

        serviceHealth: "Healthcare",
        healthDesc: "Find clinic information, services and timings.",
        findClinics: "Find Clinics",

        serviceEmergency: "Emergency Information",
        emergencyDesc: "Access important emergency contact information.",
        viewInfo: "View Information",

        schemeIntro: "Find information about public welfare schemes.",
        schemePlaceholder: "Search government schemes...",
        schemeNoResults: "No schemes found.",

        busIntro: "Find bus routes, starting points and destinations.",
        busPlaceholder: "Search by bus number or destination...",
        busNoResults: "No bus routes found.",
        starting: "Starting Point:",
        destination: "Destination:",
        stops: "Important Stops:",
        sampleNotice: "Note: These are sample routes for demonstration. Verify routes with BMTC.",

        eligibility: "Eligibility:",
        benefits: "Benefits:",
        official: "Official Website",

        schemes: [
            {
                name: "PM-KISAN Scheme",
                description: "Financial assistance of ₹6,000 per year to eligible landholding farmer families.",
                eligibility: "Eligible landholding farmer families, subject to exclusions.",
                benefits: "Three instalments of ₹2,000 per year.",
                link: "https://pmkisan.gov.in/"
            },
            {
                name: "Ayushman Bharat (PM-JAY)",
                description: "Provides eligible beneficiaries access to hospital treatment.",
                eligibility: "Identified eligible families and senior citizens aged 70 and above.",
                benefits: "Health cover up to ₹5 lakh per family per year under applicable rules.",
                link: "https://pmjay.gov.in/"
            },
            {
                name: "Pradhan Mantri Ujjwala Yojana",
                description: "Supports eligible women from poor households in accessing LPG connections.",
                eligibility: "Adult women from eligible poor households without an existing LPG connection.",
                benefits: "Deposit-free LPG connection and applicable additional benefits.",
                link: "https://www.pmuy.gov.in/"
            }
        ],

        healthIntro: "Find nearby clinics and their timings.",
        healthComingTitle: "Clinic Information",
        healthComingText: "Verified clinic addresses, services and timings will be added here.",

        emergencyIntro: "Find important emergency contact information and public assistance services.",
        emergencyNumberTitle: "National Emergency Number",
        emergencyNumberText: "For immediate emergencies in India, call 112.",

        footer: "Making public information accessible to everyone."
    },

    kn: {
        tagline: "ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿಗಾಗಿ ನಿಮ್ಮ ಮಾರ್ಗದರ್ಶಿ",
        home: "ಮುಖಪುಟ",
        services: "ಸೇವೆಗಳು",
        schemesTitle: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        transportTitle: "ಬಸ್ ಮಾರ್ಗಗಳು",
        healthcareTitle: "ಆರೋಗ್ಯ ಸೇವೆಗಳು",
        emergencyTitle: "ತುರ್ತು ಮಾಹಿತಿ",

        welcome: "ನಮ್ಮ ಮಾರ್ಗಕ್ಕೆ ಸುಸ್ವಾಗತ",
        intro: "ನಿಮ್ಮ ಆಯ್ಕೆಯ ಭಾಷೆಯಲ್ಲಿ ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿಯನ್ನು ಸುಲಭವಾಗಿ ಪಡೆಯಿರಿ.",
        choose: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
        read: "🔊 ಪುಟವನ್ನು ಓದಿ",
        stop: "⏹ ನಿಲ್ಲಿಸಿ",

        explore: "ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        serviceIntro: "ನಿಮಗೆ ಬೇಕಾದ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಲು ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.",

        serviceSchemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        schemeDesc: "ಸರ್ಕಾರಿ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಪ್ರಯೋಜನಗಳನ್ನು ತಿಳಿಯಿರಿ.",
        exploreSchemes: "ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",

        serviceBus: "ಬಸ್ ಮಾರ್ಗಗಳು",
        busDesc: "ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆ ಮಾರ್ಗಗಳು ಮತ್ತು ಪ್ರಯಾಣದ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಿರಿ.",
        exploreRoutes: "ಮಾರ್ಗಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",

        serviceHealth: "ಆರೋಗ್ಯ ಸೇವೆಗಳು",
        healthDesc: "ಚಿಕಿತ್ಸಾಲಯಗಳ ಮಾಹಿತಿ, ಸೇವೆಗಳು ಮತ್ತು ಸಮಯವನ್ನು ತಿಳಿಯಿರಿ.",
        findClinics: "ಚಿಕಿತ್ಸಾಲಯಗಳನ್ನು ಹುಡುಕಿ",

        serviceEmergency: "ತುರ್ತು ಮಾಹಿತಿ",
        emergencyDesc: "ಪ್ರಮುಖ ತುರ್ತು ಸಂಪರ್ಕ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಿರಿ.",
        viewInfo: "ಮಾಹಿತಿ ವೀಕ್ಷಿಸಿ",

        schemeIntro: "ಸಾರ್ವಜನಿಕ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳ ಮಾಹಿತಿಯನ್ನು ಹುಡುಕಿ.",
        schemePlaceholder: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ...",
        schemeNoResults: "ಯಾವುದೇ ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",

        busIntro: "ಬಸ್ ಮಾರ್ಗಗಳು, ಪ್ರಾರಂಭದ ಸ್ಥಳ ಮತ್ತು ಗಮ್ಯಸ್ಥಾನವನ್ನು ಹುಡುಕಿ.",
        busPlaceholder: "ಬಸ್ ಸಂಖ್ಯೆ ಅಥವಾ ಗಮ್ಯಸ್ಥಾನವನ್ನು ಹುಡುಕಿ...",
        busNoResults: "ಯಾವುದೇ ಬಸ್ ಮಾರ್ಗಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
        starting: "ಪ್ರಾರಂಭದ ಸ್ಥಳ:",
        destination: "ಗಮ್ಯಸ್ಥಾನ:",
        stops: "ಪ್ರಮುಖ ನಿಲ್ದಾಣಗಳು:",
        sampleNotice: "ಸೂಚನೆ: ಇವು ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ನೀಡಿರುವ ಮಾದರಿ ಮಾರ್ಗಗಳು. BMTC ಮೂಲಕ ಪರಿಶೀಲಿಸಿ.",

        eligibility: "ಅರ್ಹತೆ:",
        benefits: "ಪ್ರಯೋಜನಗಳು:",
        official: "ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್",

        schemes: [
            {
                name: "ಪಿಎಂ-ಕಿಸಾನ್ ಯೋಜನೆ",
                description: "ಅರ್ಹ ಭೂಮಿಯನ್ನು ಹೊಂದಿರುವ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ವರ್ಷಕ್ಕೆ ₹6,000 ಆರ್ಥಿಕ ಸಹಾಯ.",
                eligibility: "ಅನ್ವಯಿಸುವ ಹೊರತಾಗುವಿಕೆಗಳಿಗೆ ಒಳಪಟ್ಟು ಅರ್ಹ ರೈತ ಕುಟುಂಬಗಳು.",
                benefits: "ವರ್ಷಕ್ಕೆ ₹2,000ರಂತೆ ಮೂರು ಕಂತುಗಳು.",
                link: "https://pmkisan.gov.in/"
            },
            {
                name: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್ (PM-JAY)",
                description: "ಅರ್ಹ ಫಲಾನುಭವಿಗಳಿಗೆ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆಯ ಸೌಲಭ್ಯವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
                eligibility: "ಗುರುತಿಸಲಾದ ಅರ್ಹ ಕುಟುಂಬಗಳು ಮತ್ತು 70 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಹಿರಿಯ ನಾಗರಿಕರು.",
                benefits: "ಅನ್ವಯಿಸುವ ನಿಯಮಗಳ ಪ್ರಕಾರ ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ ವರ್ಷಕ್ಕೆ ₹5 ಲಕ್ಷದವರೆಗೆ ಆರೋಗ್ಯ ವಿಮೆ.",
                link: "https://pmjay.gov.in/"
            },
            {
                name: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಉಜ್ವಲ ಯೋಜನೆ",
                description: "ಅರ್ಹ ಮಹಿಳೆಯರಿಗೆ LPG ಸಂಪರ್ಕ ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
                eligibility: "ಈಗಾಗಲೇ LPG ಸಂಪರ್ಕವಿಲ್ಲದ ಅರ್ಹ ಬಡ ಕುಟುಂಬಗಳ ವಯಸ್ಕ ಮಹಿಳೆಯರು.",
                benefits: "ಠೇವಣಿ ಇಲ್ಲದ LPG ಸಂಪರ್ಕ ಮತ್ತು ಅನ್ವಯಿಸುವ ಹೆಚ್ಚುವರಿ ಪ್ರಯೋಜನಗಳು.",
                link: "https://www.pmuy.gov.in/"
            }
        ],

        healthIntro: "ಹತ್ತಿರದ ಚಿಕಿತ್ಸಾಲಯಗಳು ಮತ್ತು ಅವುಗಳ ಸಮಯವನ್ನು ಹುಡುಕಿ.",
        healthComingTitle: "ಚಿಕಿತ್ಸಾಲಯಗಳ ಮಾಹಿತಿ",
        healthComingText: "ಪರಿಶೀಲಿಸಿದ ಚಿಕಿತ್ಸಾಲಯಗಳ ವಿಳಾಸ, ಸೇವೆಗಳು ಮತ್ತು ಸಮಯವನ್ನು ಇಲ್ಲಿ ಸೇರಿಸಲಾಗುತ್ತದೆ.",

        emergencyIntro: "ಪ್ರಮುಖ ತುರ್ತು ಸಂಪರ್ಕ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಹಾಯ ಸೇವೆಗಳ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಿರಿ.",
        emergencyNumberTitle: "ರಾಷ್ಟ್ರೀಯ ತುರ್ತು ಸಹಾಯವಾಣಿ",
        emergencyNumberText: "ಭಾರತದಲ್ಲಿ ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಾಗಿ 112 ಗೆ ಕರೆ ಮಾಡಿ.",

        footer: "ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿಯನ್ನು ಎಲ್ಲರಿಗೂ ಸುಲಭವಾಗಿ ತಲುಪಿಸುವುದು."
    },

    hi: {
        tagline: "सार्वजनिक जानकारी के लिए आपका मार्गदर्शक",
        home: "होम",
        services: "सेवाएं",
        schemesTitle: "सरकारी योजनाएं",
        transportTitle: "बस मार्ग",
        healthcareTitle: "स्वास्थ्य सेवाएं",
        emergencyTitle: "आपातकालीन जानकारी",

        welcome: "नम्मा मार्ग में आपका स्वागत है",
        intro: "अपनी पसंदीदा भाषा में सार्वजनिक जानकारी आसानी से प्राप्त करें।",
        choose: "भाषा चुनें:",
        read: "🔊 पेज पढ़ें",
        stop: "⏹ रोकें",

        explore: "हमारी सेवाएं देखें",
        serviceIntro: "अपनी जरूरत की जानकारी पाने के लिए सेवा चुनें।",

        serviceSchemes: "सरकारी योजनाएं",
        schemeDesc: "सरकारी कल्याण योजनाओं और सार्वजनिक लाभों की जानकारी प्राप्त करें।",
        exploreSchemes: "योजनाएं देखें",

        serviceBus: "बस मार्ग",
        busDesc: "सार्वजनिक परिवहन मार्गों और यात्रा की जानकारी प्राप्त करें।",
        exploreRoutes: "मार्ग देखें",

        serviceHealth: "स्वास्थ्य सेवाएं",
        healthDesc: "क्लीनिक की जानकारी, सेवाएं और समय प्राप्त करें।",
        findClinics: "क्लीनिक खोजें",

        serviceEmergency: "आपातकालीन जानकारी",
        emergencyDesc: "महत्वपूर्ण आपातकालीन संपर्क जानकारी प्राप्त करें।",
        viewInfo: "जानकारी देखें",

        schemeIntro: "जन कल्याण योजनाओं की जानकारी प्राप्त करें।",
        schemePlaceholder: "सरकारी योजनाएं खोजें...",
        schemeNoResults: "कोई योजना नहीं मिली।",

        busIntro: "बस मार्ग, शुरुआती स्थान और गंतव्य खोजें।",
        busPlaceholder: "बस नंबर या गंतव्य खोजें...",
        busNoResults: "कोई बस मार्ग नहीं मिला।",
        starting: "शुरुआती स्थान:",
        destination: "गंतव्य:",
        stops: "मुख्य स्टॉप:",
        sampleNotice: "नोट: ये प्रदर्शन के लिए नमूना मार्ग हैं। BMTC से मार्गों की पुष्टि करें।",

        eligibility: "पात्रता:",
        benefits: "लाभ:",
        official: "आधिकारिक वेबसाइट",

        schemes: [
            {
                name: "पीएम-किसान योजना",
                description: "पात्र भूमि धारक किसान परिवारों को प्रति वर्ष ₹6,000 की आर्थिक सहायता।",
                eligibility: "लागू अपवादों के अधीन पात्र किसान परिवार।",
                benefits: "प्रति वर्ष ₹2,000 की तीन किस्तें।",
                link: "https://pmkisan.gov.in/"
            },
            {
                name: "आयुष्मान भारत (PM-JAY)",
                description: "पात्र लाभार्थियों को अस्पताल में इलाज की सुविधा प्रदान करता है।",
                eligibility: "पहचाने गए पात्र परिवार और 70 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिक।",
                benefits: "लागू नियमों के अनुसार प्रति परिवार प्रति वर्ष ₹5 लाख तक का स्वास्थ्य कवर।",
                link: "https://pmjay.gov.in/"
            },
            {
                name: "प्रधानमंत्री उज्ज्वला योजना",
                description: "पात्र महिलाओं को LPG कनेक्शन प्राप्त करने में सहायता।",
                eligibility: "बिना मौजूदा LPG कनेक्शन वाले पात्र गरीब परिवारों की वयस्क महिलाएं।",
                benefits: "बिना जमा राशि के LPG कनेक्शन और लागू अतिरिक्त लाभ।",
                link: "https://www.pmuy.gov.in/"
            }
        ],

        healthIntro: "नजदीकी क्लीनिक और उनके समय की जानकारी प्राप्त करें।",
        healthComingTitle: "क्लीनिक की जानकारी",
        healthComingText: "सत्यापित क्लीनिक के पते, सेवाएं और समय यहां जोड़े जाएंगे।",

        emergencyIntro: "महत्वपूर्ण आपातकालीन संपर्क और सार्वजनिक सहायता सेवाओं की जानकारी प्राप्त करें।",
        emergencyNumberTitle: "राष्ट्रीय आपातकालीन नंबर",
        emergencyNumberText: "भारत में तत्काल आपातकाल के लिए 112 पर कॉल करें।",

        footer: "सार्वजनिक जानकारी सभी के लिए सुलभ बनाना।"
    }
};


// ==========================================
// 2. SAMPLE BUS ROUTE DATA
// ==========================================

const busRoutes = [
    {
        number: "500D",
        starting: "Hebbal",
        destination: "Electronic City",
        stops: "Hebbal, Mekhri Circle, Majestic, Silk Board, Electronic City"
    },
    {
        number: "335E",
        starting: "Kadugodi",
        destination: "Majestic",
        stops: "Kadugodi, ITPL, Marathahalli, Domlur, Majestic"
    },
    {
        number: "201",
        starting: "Vijayanagar",
        destination: "Majestic",
        stops: "Vijayanagar, Attiguppe, Chamarajpet, Majestic"
    }
];


// ==========================================
// 3. SELECT HTML ELEMENTS
// ==========================================

const languageSelect = document.getElementById("language");
const schemeSearch = document.getElementById("schemeSearch");
const busSearch = document.getElementById("busSearch");

let currentLanguage = "en";


// ==========================================
// 4. GOVERNMENT SCHEME DISPLAY
// ==========================================

function displaySchemes() {

    const t = translations[currentLanguage];
    const container = document.getElementById("schemeContainer");
    const searchText = schemeSearch.value.toLowerCase();

    container.innerHTML = "";

    let count = 0;

    t.schemes.forEach(function (scheme) {

        const searchableText = (
            scheme.name + " " +
            scheme.description + " " +
            scheme.eligibility + " " +
            scheme.benefits
        ).toLowerCase();

        if (!searchableText.includes(searchText)) {
            return;
        }

        count++;

        const card = document.createElement("div");
        card.className = "scheme-card";

        const heading = document.createElement("h3");
        heading.textContent = scheme.name;

        const description = document.createElement("p");
        description.textContent = scheme.description;

        const eligibility = document.createElement("p");
        const eligibilityLabel = document.createElement("strong");
        eligibilityLabel.textContent = t.eligibility + " ";
        eligibility.append(eligibilityLabel, scheme.eligibility);

        const benefits = document.createElement("p");
        const benefitsLabel = document.createElement("strong");
        benefitsLabel.textContent = t.benefits + " ";
        benefits.append(benefitsLabel, scheme.benefits);

        const link = document.createElement("a");
        link.href = scheme.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = t.official;

        card.append(
            heading,
            description,
            eligibility,
            benefits,
            link
        );

        container.appendChild(card);

    });

    document.getElementById("schemeNoResults").hidden = count !== 0;
}


// ==========================================
// 5. BUS ROUTE DISPLAY AND SEARCH
// ==========================================

function displayBusRoutes() {

    const t = translations[currentLanguage];
    const container = document.getElementById("busContainer");
    const searchText = busSearch.value.toLowerCase();

    container.innerHTML = "";

    let count = 0;

    busRoutes.forEach(function (bus) {

        const searchableText = (
            bus.number + " " +
            bus.starting + " " +
            bus.destination + " " +
            bus.stops
        ).toLowerCase();

        if (!searchableText.includes(searchText)) {
            return;
        }

        count++;

        const card = document.createElement("div");
        card.className = "bus-card";

        const heading = document.createElement("h3");
        heading.textContent = "🚌 " + t.transportTitle + " " + bus.number;

        const starting = document.createElement("p");
        const startingLabel = document.createElement("strong");
        startingLabel.textContent = t.starting + " ";
        starting.append(startingLabel, bus.starting);

        const destination = document.createElement("p");
        const destinationLabel = document.createElement("strong");
        destinationLabel.textContent = t.destination + " ";
        destination.append(destinationLabel, bus.destination);

        const stops = document.createElement("p");
        const stopsLabel = document.createElement("strong");
        stopsLabel.textContent = t.stops + " ";
        stops.append(stopsLabel, bus.stops);

        card.append(heading, starting, destination, stops);
        container.appendChild(card);

    });

    document.getElementById("busNoResults").hidden = count !== 0;
}


// ==========================================
// 6. CHANGE WEBSITE LANGUAGE
// ==========================================

function changeLanguage() {

    currentLanguage = languageSelect.value;

    const t = translations[currentLanguage];

    // Translate all elements with data-i18n

    document.querySelectorAll("[data-i18n]").forEach(function (element) {

        const key = element.dataset.i18n;

        if (t[key] !== undefined) {
            element.textContent = t[key];
        }

    });

    // Translate search placeholders

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {

        const key = element.dataset.i18nPlaceholder;

        if (t[key] !== undefined) {
            element.placeholder = t[key];
        }

    });

    // Set page language

    document.documentElement.lang = currentLanguage;

    // Refresh scheme and bus cards

    displaySchemes();
    displayBusRoutes();

    // Stop previous speech when language changes

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}


// ==========================================
// 7. LANGUAGE SELECTOR EVENT
// ==========================================

languageSelect.addEventListener("change", changeLanguage);


// ==========================================
// 8. GOVERNMENT SCHEME SEARCH
// ==========================================

schemeSearch.addEventListener("input", displaySchemes);


// ==========================================
// 9. BUS ROUTE SEARCH
// ==========================================

busSearch.addEventListener("input", displayBusRoutes);


// ==========================================
// 10. VOICE ASSISTANCE
// ==========================================

document.getElementById("speakButton").addEventListener("click", function () {

    if (!("speechSynthesis" in window)) {
        alert("Voice assistance is not supported in this browser.");
        return;
    }

    window.speechSynthesis.cancel();

    const voiceLanguages = {
        en: "en-IN",
        kn: "kn-IN",
        hi: "hi-IN"
    };

    const pageText = document.querySelector("main").innerText;

    const speech = new SpeechSynthesisUtterance(pageText);

    speech.lang = voiceLanguages[currentLanguage];
    speech.rate = 0.9;

    window.speechSynthesis.speak(speech);

});


// ==========================================
// 11. STOP VOICE ASSISTANCE
// ==========================================

document.getElementById("stopButton").addEventListener("click", function () {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

});


// ==========================================
// 12. LOAD DEFAULT WEBSITE LANGUAGE
// ==========================================

changeLanguage();

