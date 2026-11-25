const API_BASE = "http://localhost:5000/api";

// ======================================
// 1. UI TRANSLATIONS (EN, KN, HI)
// ======================================
const translations = {
    en: {
        tagline: "Your Guide to Public Information",
        nav: ["Home", "Services", "Government Schemes", "Bus Routes", "Healthcare", "Emergency"],
        welcome: "Welcome to NammaMarga",
        intro: "Access public information easily in your preferred language.",
        choose: "Choose Language:",
        locationLabel: "📍 Location:",
        locations: [
            ["all", "All Areas (Bengaluru)"],
            ["yelahanka", "Yelahanka"],
            ["hebbal", "Hebbal"],
            ["majestic", "Majestic / Malleshwaram"],
            ["hunasamaranahalli", "Hunasamaranahalli"],
            ["jayanagar", "Jayanagar / Silk Board"]
        ],
        mic: "🎤 Speak to Search",
        read: "🔊 Read Page",
        stop: "⏹ Stop",
        reset: "🔄 Reset",
        listenCard: "🔊 Listen",
        eligibility: "Eligibility",
        benefits: "Benefits",
        timings: "Timings",
        frequency: "Frequency",
        stops: "Key Stops",
        services: "Services",
        explore: "Explore Our Services",
        serviceIntro: "Choose a service to find the information you need.",
        cards: [
            ["Government Schemes", "Discover government welfare schemes and public benefits.", "Explore Schemes →"],
            ["Bus Routes", "Find public transport routes and travel information.", "Explore Routes →"],
            ["Healthcare", "Find clinic information, services and timings.", "Find Clinics →"],
            ["Emergency Information", "Access important emergency contact information.", "View Helplines →"]
        ],
        schemeTitle: "Government Schemes",
        schemeSub: "Find information about public welfare schemes.",
        busTitle: "Bus Routes",
        busSub: "Explore all city bus routes, stops, and timings.",
        healthTitle: "Healthcare Information",
        healthSub: "Find nearby clinics, hospitals, and consultation timings.",
        emergTitle: "Emergency Information",
        emergSub: "Tap any helpline below for immediate assistance in India.",
        emergSpeech: "Emergency Helplines: Call 112 for National Emergency, 108 for Ambulance, and 14567 for Senior Citizen Elder Line.",
        footer: "Making public information accessible to everyone."
    },
    kn: {
        tagline: "ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿಗಾಗಿ ನಿಮ್ಮ ಮಾರ್ಗದರ್ಶಿ",
        nav: ["ಮುಖಪುಟ", "ಸೇವೆಗಳು", "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು", "ಬಸ್ ಮಾರ್ಗಗಳು", "ಆರೋಗ್ಯ ಸೇವೆಗಳು", "ತುರ್ತು ಮಾಹಿತಿ"],
        welcome: "ನಮ್ಮ ಮಾರ್ಗಕ್ಕೆ ಸುಸ್ವಾಗತ",
        intro: "ನಿಮ್ಮ ಆಯ್ಕೆಯ ಭಾಷೆಯಲ್ಲಿ ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿಯನ್ನು ಸುಲಭವಾಗಿ ಪಡೆಯಿರಿ.",
        choose: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
        locationLabel: "📍 ಸ್ಥಳ:",
        locations: [
            ["all", "ಎಲ್ಲಾ ಪ್ರದೇಶಗಳು (ಬೆಂಗಳೂರು)"],
            ["yelahanka", "ಯಲಹಂಕ"],
            ["hebbal", "ಹೆಬ್ಬಾಳ"],
            ["majestic", "ಮೆಜೆಸ್ಟಿಕ್ / ಮಲ್ಲೇಶ್ವರಂ"],
            ["hunasamaranahalli", "ಹುಣಸಮಾರನಹಳ್ಳಿ"],
            ["jayanagar", "ಜಯನಗರ / ಸಿಲ್ಕ್ ಬೋರ್ಡ್"]
        ],
        mic: "🎤 ಮಾತನಾಡಿ ಹುಡುಕಿ",
        read: "🔊 ಪುಟವನ್ನು ಓದಿ",
        stop: "⏹ ನಿಲ್ಲಿಸಿ",
        reset: "🔄 ಮರುಹೊಂದಿಸಿ",
        listenCard: "🔊 ಕೇಳಿ",
        eligibility: "ಅರ್ಹತೆ",
        benefits: "ಪ್ರಯೋಜನಗಳು",
        timings: "ಸಮಯ",
        frequency: "ಬಸ್ ಲಭ್ಯತೆ",
        stops: "ಪ್ರಮುಖ ನಿಲ್ದಾಣಗಳು",
        services: "ಸೇವೆಗಳು",
        explore: "ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        serviceIntro: "ನಿಮಗೆ ಬೇಕಾದ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಲು ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
        cards: [
            ["ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು", "ಸರ್ಕಾರಿ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಪ್ರಯೋಜನಗಳನ್ನು ತಿಳಿಯಿರಿ.", "ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ →"],
            ["ಬಸ್ ಮಾರ್ಗಗಳು", "ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆ ಮಾರ್ಗಗಳು ಮತ್ತು ಪ್ರಯಾಣದ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಿರಿ.", "ಮಾರ್ಗಗಳನ್ನು ಅನ್ವೇಷಿಸಿ →"],
            ["ಆರೋಗ್ಯ ಸೇವೆಗಳು", "ಚಿಕಿತ್ಸಾಲಯಗಳ ಮಾಹಿತಿ, ಸೇವೆಗಳು ಮತ್ತು ಸಮಯವನ್ನು ತಿಳಿಯಿರಿ.", "ಚಿಕಿತ್ಸಾಲಯಗಳನ್ನು ಹುಡುಕಿ →"],
            ["ತುರ್ತು ಮಾಹಿತಿ", "ಪ್ರಮುಖ ತುರ್ತು ಸಂಪರ್ಕ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಿರಿ.", "ಸಹಾಯವಾಣಿ ನೋಡಿ →"]
        ],
        schemeTitle: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        schemeSub: "ಸಾರ್ವಜನಿಕ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳ ಮಾಹಿತಿಯನ್ನು ಹುಡುಕಿ.",
        busTitle: "ಬಸ್ ಮಾರ್ಗಗಳು",
        busSub: "ಎಲ್ಲಾ ನಗರ ಬಸ್ ಮಾರ್ಗಗಳು ಮತ್ತು ಸಮಯವನ್ನು ತಿಳಿಯಿರಿ.",
        healthTitle: "ಆರೋಗ್ಯ ಸೇವೆಗಳು",
        healthSub: "ಹತ್ತಿರದ ಚಿಕಿತ್ಸಾಲಯಗಳು, ಆಸ್ಪತ್ರೆಗಳು ಮತ್ತು ಸಮಯವನ್ನು ಹುಡುಕಿ.",
        emergTitle: "ತುರ್ತು ಮಾಹಿತಿ",
        emergSub: "ಭಾರತದಲ್ಲಿ ತುರ್ತು ಸಹಾಯಕ್ಕಾಗಿ ಕೆಳಗಿನ ಸಂಖ್ಯೆಗಳಿಗೆ ಕರೆ ಮಾಡಿ.",
        emergSpeech: "ತುರ್ತು ಸಹಾಯವಾಣಿಗಳು: ರಾಷ್ಟ್ರೀಯ ತುರ್ತು ಸೇವೆಗಾಗಿ 112 ಕ್ಕೆ ಕರೆ ಮಾಡಿ, ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗಾಗಿ 108 ಕ್ಕೆ ಕರೆ ಮಾಡಿ, ಹಿರಿಯ ನಾಗರಿಕರ ಸಹಾಯವಾಣಿಗಾಗಿ 14567 ಕ್ಕೆ ಕರೆ ಮಾಡಿ.",
        footer: "ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿಯನ್ನು ಎಲ್ಲರಿಗೂ ಸುಲಭವಾಗಿ ತಲುಪಿಸುವುದು."
    },
    hi: {
        tagline: "सार्वजनिक जानकारी के लिए आपका मार्गदर्शक",
        nav: ["होम", "सेवाएं", "सरकारी योजनाएं", "बस मार्ग", "स्वास्थ्य सेवाएं", "आपातकाल"],
        welcome: "नम्मा मार्ग में आपका स्वागत है",
        intro: "अपनी पसंदीदा भाषा में सार्वजनिक जानकारी आसानी से प्राप्त करें।",
        choose: "भाषा चुनें:",
        locationLabel: "📍 स्थान:",
        locations: [
            ["all", "सभी क्षेत्र (बेंगलुरु)"],
            ["yelahanka", "यलहंका"],
            ["hebbal", "हेब्बाल"],
            ["majestic", "मेजेस्टिक / मल्लेश्वरम"],
            ["hunasamaranahalli", "हुनसमरनहल्ली"],
            ["jayanagar", "जयनगर / सिल्क बोर्ड"]
        ],
        mic: "🎤 बोलकर खोजें",
        read: "🔊 पेज पढ़ें",
        stop: "⏹ रोकें",
        reset: "🔄 रीसेट",
        listenCard: "🔊 सुनें",
        eligibility: "पात्रता",
        benefits: "लाभ",
        timings: "समय",
        frequency: "आवृत्ति",
        stops: "प्रमुख स्टॉप",
        services: "सेवाएं",
        explore: "हमारी सेवाएं देखें",
        serviceIntro: "अपनी जरूरत की जानकारी पाने के लिए सेवा चुनें।",
        cards: [
            ["सरकारी योजनाएं", "सरकारी कल्याण योजनाओं और सार्वजनिक लाभों की जानकारी प्राप्त करें।", "योजनाएं देखें →"],
            ["बस मार्ग", "सार्वजनिक परिवहन मार्गों और यात्रा की जानकारी प्राप्त करें।", "मार्ग देखें →"],
            ["स्वास्थ्य सेवाएं", "क्लीनिक की जानकारी, सेवाएं और समय प्राप्त करें।", "क्लीनिक खोजें →"],
            ["आपातकालीन जानकारी", "महत्वपूर्ण आपातकालीन संपर्क जानकारी प्राप्त करें।", "हेल्पलाइन देखें →"]
        ],
        schemeTitle: "सरकारी योजनाएं",
        schemeSub: "जन कल्याण योजनाओं की जानकारी प्राप्त करें।",
        busTitle: "बस मार्ग",
        busSub: "सभी सिटी बस मार्ग और समय देखें।",
        healthTitle: "स्वास्थ्य सेवाएं",
        healthSub: "नजदीकी क्लीनिक, अस्पताल और समय की जानकारी प्राप्त करें।",
        emergTitle: "आपातकालीन जानकारी",
        emergSub: "तत्काल सहायता के लिए नीचे दिए गए नंबर पर कॉल करें।",
        emergSpeech: "आपातकालीन हेल्पलाइन: राष्ट्रीय आपातकाल के लिए 112, एम्बुलेंस के लिए 108, और वरिष्ठ नागरिक सहायता के लिए 14567 पर कॉल करें।",
        footer: "सार्वजनिक जानकारी सभी के लिए सुलभ बनाना।"
    }
};

// ======================================
// 2. COMPLETE BUILT-IN DATASET (8 BUSES, 6 CLINICS, 5 SCHEMES)
// ======================================
const defaultSchemes = [
    {
        id: 1,
        category: { en: "Healthcare & Senior Care", kn: "ಆರೋಗ್ಯ ಮತ್ತು ಹಿರಿಯರ ಆರೈಕೆ", hi: "स्वास्थ्य और वरिष्ठ देखभाल" },
        name: { en: "Ayushman Bharat (PM-JAY)", kn: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್", hi: "आयुष्मान भारत" },
        description: { en: "Free hospital treatment coverage for eligible families and senior citizens aged 70+.", kn: "ಅರ್ಹ ಕುಟುಂಬಗಳು ಮತ್ತು 70 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಉಚಿತ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆ.", hi: "पात्र परिवारों और 70+ वरिष्ठ नागरिकों के लिए मुफ्त अस्पताल उपचार।" },
        eligibility: { en: "Eligible low-income families & all seniors aged 70+.", kn: "ಅರ್ಹ ಕುಟುಂಬಗಳು ಮತ್ತು 70 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಎಲ್ಲಾ ಹಿರಿಯರು.", hi: "पात्र परिवार और 70+ आयु के सभी वरिष्ठ नागरिक।" },
        benefits: { en: "Cashless health cover up to ₹5 lakh per year.", kn: "ವರ್ಷಕ್ಕೆ ₹5 ಲಕ್ಷದವರೆಗೆ ನಗದು ರಹಿತ ಆರೋಗ್ಯ ವಿಮೆ.", hi: "प्रति वर्ष ₹5 लाख तक का कैशलेस स्वास्थ्य कवर।" },
        link: "https://pmjay.gov.in/"
    },
    {
        id: 2,
        category: { en: "Agriculture", kn: "ಕೃಷಿ ಕಲ್ಯಾಣ", hi: "कृषि कल्याण" },
        name: { en: "PM-KISAN Samman Nidhi", kn: "ಪಿಎಂ-ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ", hi: "पीएम-किसान सम्मान निधि" },
        description: { en: "Direct income support of ₹6,000 per year to farmer families.", kn: "ರೈತ ಕುಟುಂಬಗಳಿಗೆ ವರ್ಷಕ್ಕೆ ₹6,000 ನೇರ ಆರ್ಥಿಕ ನೆರವು.", hi: "किसान परिवारों को प्रति वर्ष ₹6,000 की सीधी सहायता।" },
        eligibility: { en: "Eligible landholding farmer families.", kn: "ಅರ್ಹ ಭೂಹಿಡುವಳಿ ರೈತ ಕುಟುಂಬಗಳು.", hi: "पात्र भूमिधारक किसान परिवार।" },
        benefits: { en: "₹2,000 every 4 months directly to bank account.", kn: "ಪ್ರತಿ 4 ತಿಂಗಳಿಗೊಮ್ಮೆ ₹2,000 ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ.", hi: "हर 4 महीने में ₹2,000 सीधे बैंक खाते में।" },
        link: "https://pmkisan.gov.in/"
    },
    {
        id: 3,
        category: { en: "Women & Household", kn: "ಮಹಿಳಾ ಕಲ್ಯಾಣ", hi: "महिला कल्याण" },
        name: { en: "Pradhan Mantri Ujjwala Yojana", kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಉಜ್ವಲ ಯೋಜನೆ", hi: "प्रधानमंत्री उज्ज्वला योजना" },
        description: { en: "Clean cooking gas (LPG) connections for women from eligible households.", kn: "ಅರ್ಹ ಕುಟುಂಬಗಳ ಮಹಿಳೆಯರಿಗೆ ಉಚಿತ ಅಡುಗೆ ಅನಿಲ ಸಂಪರ್ಕ.", hi: "पात्र परिवारों की महिलाओं को मुफ्त एलपीजी कनेक्शन।" },
        eligibility: { en: "Adult women without an existing LPG connection.", kn: "ಮನೆಯಲ್ಲಿ LPG ಸಂಪರ್ಕವಿಲ್ಲದ ವಯಸ್ಕ ಮಹಿಳೆಯರು.", hi: "बिना एलपीजी कनेक्शन वाली वयस्क महिलाएं।" },
        benefits: { en: "Deposit-free LPG connection and first refill support.", kn: "ಠೇವಣಿ ರಹಿತ LPG ಸಂಪರ್ಕ ಮತ್ತು ಮೊದಲ ಸಿಲಿಂಡರ್ ನೆರವು.", hi: "जमा-मुक्त एलपीजी कनेक्शन और पहली रिफिल सहायता।" },
        link: "https://www.pmuy.gov.in/"
    },
    {
        id: 4,
        category: { en: "Karnataka State Scheme", kn: "ಕರ್ನಾಟಕ ರಾಜ್ಯ ಯೋಜನೆ", hi: "कर्नाटक राज्य योजना" },
        name: { en: "Gruha Lakshmi Scheme", kn: "ಗೃಹಲಕ್ಷ್ಮಿ ಯೋಜನೆ", hi: "गृह लक्ष्मी योजना" },
        description: { en: "Monthly financial assistance for women heads of households in Karnataka.", kn: "ಕರ್ನಾಟಕದ ಕುಟುಂಬದ ಯಜಮಾನಿ ಮಹಿಳೆಯರಿಗೆ ಮಾಸಿಕ ಆರ್ಥಿಕ ನೆರವು.", hi: "कर्नाटक में परिवार की महिला मुखिया को मासिक वित्तीय सहायता।" },
        eligibility: { en: "Women listed as head of family on ration cards.", kn: "ಪಡಿತರ ಚೀಟಿಯಲ್ಲಿ ಕುಟುಂಬದ ಯಜಮಾನಿಯಾಗಿರುವ ಮಹಿಳೆಯರು.", hi: "राशन कार्ड में परिवार की मुखिया के रूप में सूचीबद्ध महिलाएं।" },
        benefits: { en: "₹2,000 per month transferred directly via DBT.", kn: "ಪ್ರತಿ ತಿಂಗಳು ₹2,000 ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ.", hi: "प्रति माह ₹2,000 सीधे बैंक खाते में।" },
        link: "https://sevasindhugs.karnataka.gov.in/"
    },
    {
        id: 5,
        category: { en: "Senior Citizen Pension", kn: "ಹಿರಿಯ ನಾಗರಿಕರ ಪಿಂಚಣಿ", hi: "वरिष्ठ नागरिक पेंशन" },
        name: { en: "Sandhya Suraksha Yojana", kn: "ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಯೋಜನೆ", hi: "संध्या सुरक्षा योजना" },
        description: { en: "Monthly social security pension for senior citizens in Karnataka.", kn: "ಕರ್ನಾಟಕದ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಮಾಸಿಕ ಪಿಂಚಣಿ ಯೋಜನೆ.", hi: "कर्नाटक के वरिष्ठ नागरिकों के लिए मासिक पेंशन योजना।" },
        eligibility: { en: "Karnataka residents aged 65 years and above.", kn: "65 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಕರ್ನಾಟಕದ ನಿವಾಸಿಗಳು.", hi: "65 वर्ष और उससे अधिक आयु के कर्नाटक के निवासी।" },
        benefits: { en: "₹1,200 monthly pension + discounted bus pass.", kn: "ಮಾಸಿಕ ₹1,200 ಪಿಂಚಣಿ ಮತ್ತು ರಿಯಾಯಿತಿ ಬಸ್ ಪಾಸ್.", hi: "₹1,200 मासिक पेंशन + रियायती बस पास।" },
        link: "https://nadakacheri.karnataka.gov.in/"
    }
];

const defaultBuses = [
    { id: 1, routeNumber: "500D", from: { en: "Hebbal", kn: "ಹೆಬ್ಬಾಳ", hi: "हेब्बाल" }, to: { en: "Central Silk Board", kn: "ಸಿಲ್ಕ್ ಬೋರ್ಡ್", hi: "सेंट्रल सिल्क बोर्ड" }, timings: "5:30 AM – 10:45 PM", frequency: { en: "Every 10 mins", kn: "ಪ್ರತಿ 10 ನಿಮಿಷಕ್ಕೊಮ್ಮೆ", hi: "हर 10 मिनट में" }, stops: "Hebbal, Nagawara, KR Puram, Marathahalli, HSR Layout, Silk Board" },
    { id: 2, routeNumber: "285M", from: { en: "Majestic (KBS)", kn: "ಮೆಜೆಸ್ಟಿಕ್", hi: "मेजेस्टिक" }, to: { en: "Yelahanka Satellite Town", kn: "ಯಲಹಂಕ", hi: "यलहंका" }, timings: "6:00 AM – 10:15 PM", frequency: { en: "Every 15 mins", kn: "ಪ್ರತಿ 15 ನಿಮಿಷಕ್ಕೊಮ್ಮೆ", hi: "हर 15 मिनट में" }, stops: "Majestic, Mekhri Circle, Hebbal, Jakkur, Yelahanka Old Town, Satellite Town" },
    { id: 3, routeNumber: "298M", from: { en: "KR Market", kn: "ಕೆ.ಆರ್. ಮಾರುಕಟ್ಟೆ", hi: "के.आर. मार्केट" }, to: { en: "Hunasamaranahalli (MVIT)", kn: "ಹುಣಸಮಾರನಹಳ್ಳಿ", hi: "हुनसमरनहल्ली" }, timings: "6:15 AM – 9:30 PM", frequency: { en: "Every 20 mins", kn: "ಪ್ರತಿ 20 ನಿಮಿಷಕ್ಕೊಮ್ಮೆ", hi: "हर 20 मिनट में" }, stops: "KR Market, Shivajinagar, Hebbal, Yelahanka, Bagalur Cross, Hunasamaranahalli" },
    { id: 4, routeNumber: "KIA-8", from: { en: "Electronic City", kn: "ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ", hi: "इलेक्ट्रॉनिक सिटी" }, to: { en: "Kempegowda International Airport", kn: "ಕೆಂಪೇಗೌಡ ವಿಮಾನ ನಿಲ್ದಾಣ", hi: "केम्पेगौड़ा हवाई अड्डा" }, timings: "24 Hours", frequency: { en: "Every 30 mins", kn: "ಪ್ರತಿ 30 ನಿಮಿಷಕ್ಕೊಮ್ಮೆ", hi: "हर 30 मिनट में" }, stops: "Electronic City, Silk Board, Marathahalli, Hebbal, Yelahanka, Airport" },
    { id: 5, routeNumber: "335E", from: { en: "Majestic (KBS)", kn: "ಮೆಜೆಸ್ಟಿಕ್", hi: "मेजेस्टिक" }, to: { en: "Kadugodi / Whitefield", kn: "ವೈಟ್‌ಫೀಲ್ಡ್", hi: "व्हाइटफील्ड" }, timings: "5:45 AM – 10:30 PM", frequency: { en: "Every 12 mins", kn: "ಪ್ರತಿ 12 ನಿಮಿಷಕ್ಕೊಮ್ಮೆ", hi: "हर 12 मिनट में" }, stops: "Majestic, MG Road, Indiranagar, Marathahalli, ITPL, Whitefield" },
    { id: 6, routeNumber: "401K", from: { en: "Yelahanka", kn: "ಯಲಹಂಕ", hi: "यलहंका" }, to: { en: "Kengeri Satellite Town", kn: "ಕೆಂಗೇರಿ", hi: "केंगेरी" }, timings: "6:00 AM – 9:45 PM", frequency: { en: "Every 15 mins", kn: "ಪ್ರತಿ 15 ನಿಮಿಷಕ್ಕೊಮ್ಮೆ", hi: "हर 15 मिनट में" }, stops: "Yelahanka, BEL Circle, Yeshwanthpur, Vijayanagar, Nagarbhavi, Kengeri" },
    { id: 7, routeNumber: "201R", from: { en: "Banashankari", kn: "ಬನಶಂಕರಿ", hi: "बनशंकरी" }, to: { en: "Domlur / Indiranagar", kn: "ಇಂದಿರಾನಗರ", hi: "इंदिरानगर" }, timings: "6:15 AM – 10:00 PM", frequency: { en: "Every 15 mins", kn: "ಪ್ರತಿ 15 ನಿಮಿಷಕ್ಕೊಮ್ಮೆ", hi: "हर 15 मिनट में" }, stops: "Banashankari, Jayanagar, Koramangala, Ejipura, Domlur" },
    { id: 8, routeNumber: "252F", from: { en: "Shivajinagar", kn: "ಶಿವಾಜಿನಗರ", hi: "शिवाजीनगर" }, to: { en: "Peenya 2nd Stage", kn: "ಪೀಣ್ಯ", hi: "पीन्या" }, timings: "6:30 AM – 9:30 PM", frequency: { en: "Every 20 mins", kn: "ಪ್ರತಿ 20 ನಿಮಿಷಕ್ಕೊಮ್ಮೆ", hi: "हर 20 मिनट में" }, stops: "Shivajinagar, Malleshwaram, Yeshwanthpur, Jalahalli Cross, Peenya" }
];

const defaultClinics = [
    { id: 1, name: { en: "Namma Clinic - Yelahanka", kn: "ನಮ್ಮ ಕ್ಲಿನಿಕ್ - ಯಲಹಂಕ", hi: "नम्मा क्लिनिक - यलहंका" }, type: { en: "Government Primary Health Centre", kn: "ಸರ್ಕಾರಿ ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರ", hi: "सरकारी प्राथमिक स्वास्थ्य केंद्र" }, timings: "9:00 AM – 4:30 PM (Mon–Sat)", services: { en: "Free Doctor Consultation, BP & Diabetes Check, Free Medicines", kn: "ಉಚಿತ ವೈದ್ಯರ ತಪಾಸಣೆ, ಬಿಪಿ ಮತ್ತು ಸಕ್ಕರೆ ಕಾಯಿಲೆ ಪರೀಕ್ಷೆ, ಉಚಿತ ಔಷಧಗಳು", hi: "मुफ्त डॉक्टर परामर्श, बीपी और शुगर जांच, मुफ्त दवाइयां" }, phone: "104" },
    { id: 2, name: { en: "Yelahanka General Hospital", kn: "ಯಲಹಂಕ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ", hi: "यलहंका जनरल अस्पताल" }, type: { en: "24/7 Government Hospital", kn: "24/7 ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ", hi: "24/7 सरकारी अस्पताल" }, timings: "Open 24 Hours", services: { en: "Senior Citizen Geriatric OPD, Emergency Ward, Lab", kn: "ಹಿರಿಯ ನಾಗರಿಕರ ಹೊರರೋಗಿ ವಿಭಾಗ, ತುರ್ತು ಚಿಕಿತ್ಸೆ, ರಕ್ತ ಪರೀಕ್ಷೆ", hi: "वरिष्ठ नागरिक ओपीडी, आपातकालीन वार्ड, लैब जांच" }, phone: "108" },
    { id: 3, name: { en: "KC General Hospital - Malleshwaram", kn: "ಕೆ.ಸಿ. ಜನರಲ್ ಆಸ್ಪತ್ರೆ", hi: "के.सी. जनरल अस्पताल" }, type: { en: "Multi-Specialty Public Hospital", kn: "ಸಾರ್ವಜನಿಕ ಆಸ್ಪತ್ರೆ", hi: "सार्वजनिक अस्पताल" }, timings: "Open 24 Hours", services: { en: "Cardiology, Eye Care, Dialysis, Ayushman Bharat Desk", kn: "ಹೃದ್ರೋಗ, ಕಣ್ಣಿನ ಚಿಕಿತ್ಸೆ, ಡಯಾಲಿಸಿಸ್, ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಕೌಂಟರ್", hi: "हृदय रोग, नेत्र देखभाल, डायलिसिस, आयुष्मान भारत काउंटर" }, phone: "080-23341771" },
    { id: 4, name: { en: "Namma Clinic - Hebbal", kn: "ನಮ್ಮ ಕ್ಲಿನಿಕ್ - ಹೆಬ್ಬಾಳ", hi: "नम्मा क्लिनिक - हेब्बाल" }, type: { en: "Urban Health & Wellness Centre", kn: "ನಗರ ಆರೋಗ್ಯ ಕೇಂದ್ರ", hi: "शहरी स्वास्थ्य केंद्र" }, timings: "9:00 AM – 4:30 PM (Mon–Sat)", services: { en: "General Fever Clinic, Immunization, Tele-Consultation", kn: "ಸಾಮಾನ್ಯ ಚಿಕಿತ್ಸೆ, ಲಸಿಕೆ, ಟೆಲಿ-ಕನ್ಸಲ್ಟೇಶನ್", hi: "सामान्य परामर्श, टीकाकरण, टेली-परामर्श" }, phone: "104" },
    { id: 5, name: { en: "Jayanagar General Hospital", kn: "ಜಯನಗರ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ", hi: "जयनगर जनरल अस्पताल" }, type: { en: "24/7 Government Hospital", kn: "24/7 ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ", hi: "24/7 सरकारी अस्पताल" }, timings: "Open 24 Hours", services: { en: "Orthopedics, Physiotherapy for Seniors, Pharmacy", kn: "ಮೂಳೆ ಚಿಕಿತ್ಸೆ, ಹಿರಿಯರಿಗೆ ಫಿಸಿಯೋಥೆರಪಿ, ಔಷಧಾಲಯ", hi: "हड्डी रोग, वरिष्ठों के लिए फिजियोथेरेपी, फार्मेसी" }, phone: "080-26635323" },
    { id: 6, name: { en: "Jan Aushadhi Kendra - Hunasamaranahalli", kn: "ಜನ ಔಷಧಿ ಕೇಂದ್ರ - ಹುಣಸಮಾರನಹಳ್ಳಿ", hi: "जन औषधि केंद्र" }, type: { en: "Affordable Generic Pharmacy", kn: "ಕಡಿಮೆ ದರದ ಔಷಧಾಲಯ", hi: "सस्ती जेनेरिक फार्मेसी" }, timings: "8:30 AM – 9:30 PM (All Days)", services: { en: "Quality Generic Medicines at 50%–80% Lower Cost", kn: "ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ 50%-80% ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ ಔಷಧಗಳು", hi: "वरिष्ठ नागरिकों के लिए 50%-80% कम कीमत पर दवाएं" }, phone: "1800-180-8080" }
];

function getLocalized(field, lang) {
    if (!field) return "";
    if (typeof field === "object") return field[lang] || field.en || "";
    return field;
}

// ======================================
// 3. MULTILINGUAL VOICE ENGINE (EN / KN / HI)
// ======================================
const languageSelect = document.getElementById("language");
const locationSelect = document.getElementById("locationSelect");

function stopAllSpeech() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}

function getBestVoice(langCode) {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;

    const exact = voices.find(v => v.lang.toLowerCase().replace("_", "-") === langCode.toLowerCase());
    if (exact) return exact;

    const prefix = langCode.split("-")[0].toLowerCase();
    const partial = voices.find(v => v.lang.toLowerCase().startsWith(prefix));
    if (partial) return partial;

    const nameMap = { kn: "kannada", hi: "hindi", en: "india" };
    const byName = voices.find(v => v.name.toLowerCase().includes(nameMap[prefix] || ""));
    return byName || null;
}

function speakText(text) {
    if (!("speechSynthesis" in window)) {
        alert("Text-to-Speech is not supported in this browser. Please use Google Chrome or Microsoft Edge.");
        return;
    }

    stopAllSpeech();

    const lang = languageSelect.value;
    const localeMap = { en: "en-IN", kn: "kn-IN", hi: "hi-IN" };
    const targetLocale = localeMap[lang] || "en-IN";

    const cleanText = text.replace(/\s+/g, " ").trim();
    const sentences = cleanText.match(/[^.!?।]+[.!?।]*/g) || [cleanText];
    const selectedVoice = getBestVoice(targetLocale);

    sentences.forEach(sentence => {
        const trimmed = sentence.trim();
        if (!trimmed) return;

        const utterance = new SpeechSynthesisUtterance(trimmed);
        utterance.lang = targetLocale;
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
        utterance.rate = 0.92;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
    });
}

window.speakText = speakText;

if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}

// ======================================
// 4. FETCH, LOCATION FILTER & RENDER DATA
// ======================================
let cachedSchemes = [];
let cachedBuses = [];
let cachedClinics = [];

async function fetchWithFallback(endpoint, fallback) {
    try {
        const res = await fetch(`${API_BASE}/${endpoint}`);
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        return Array.isArray(data) && data.length >= fallback.length ? data : fallback;
    } catch {
        return fallback;
    }
}

function getLocationKeywords(area) {
    const areaMap = {
        majestic: ["majestic", "malleshwaram", "shivajinagar"],
        jayanagar: ["jayanagar", "silk board", "banashankari"]
    };
    return areaMap[area] || [area];
}

function filterBySelectedLocation() {
    const area = locationSelect.value.toLowerCase();

    if (area === "all") {
        renderBuses(cachedBuses);
        renderClinics(cachedClinics);
        return;
    }

    const keywords = getLocationKeywords(area);

    const filteredBuses = cachedBuses.filter(b => {
        const text = JSON.stringify(b).toLowerCase();
        return keywords.some(k => text.includes(k));
    });

    const filteredClinics = cachedClinics.filter(c => {
        const text = JSON.stringify(c).toLowerCase();
        return keywords.some(k => text.includes(k));
    });

    renderBuses(filteredBuses.length ? filteredBuses : cachedBuses);
    renderClinics(filteredClinics.length ? filteredClinics : cachedClinics);
}

function renderSchemes(list) {
    const lang = languageSelect.value;
    const t = translations[lang];
    document.getElementById("schemeContainer").innerHTML = list.map(s => {
        const name = getLocalized(s.name || s.title, lang);
        const category = getLocalized(s.category, lang) || "Public Welfare";
        const desc = getLocalized(s.description, lang);
        const elig = getLocalized(s.eligibility, lang);
        const ben = getLocalized(s.benefits || s.benefit, lang);
        const speech = `${name}. ${desc}. ${t.eligibility}: ${elig}. ${t.benefits}: ${ben}`;

        return `
            <div class="info-card scheme-card">
                <div>
                    <span class="badge">${category}</span>
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <p><strong>${t.eligibility}:</strong> ${elig}</p>
                    <p><strong>${t.benefits}:</strong> ${ben}</p>
                </div>
                <div class="card-actions">
                    <button type="button" class="btn-listen-card" onclick="speakText(\`${speech.replace(/`/g, "")}\`)">
                        ${t.listenCard}
                    </button>
                    ${s.link ? `<a href="${s.link}" target="_blank" rel="noopener" class="card-link">Official Site ↗</a>` : ""}
                </div>
            </div>
        `;
    }).join("");
}

function renderBuses(list) {
    const lang = languageSelect.value;
    const t = translations[lang];
    document.getElementById("busContainer").innerHTML = list.map(b => {
        const num = b.routeNumber || b.busNumber || b.number;
        const from = getLocalized(b.from, lang);
        const to = getLocalized(b.to, lang);
        const freq = getLocalized(b.frequency, lang) || "Every 15 mins";
        const timings = b.timings || "6:00 AM – 10:00 PM";
        const stops = Array.isArray(b.stops) ? b.stops.join(", ") : (b.stops || "");
        const speech = `${t.busTitle} ${num}, ${from} - ${to}. ${t.timings}: ${timings}. ${t.frequency}: ${freq}`;

        return `
            <div class="info-card bus-card">
                <div>
                    <span class="badge badge-bus">🚌 Route ${num}</span>
                    <h3>${from} ➔ ${to}</h3>
                    <p><strong>${t.timings}:</strong> ${timings}</p>
                    <p><strong>${t.frequency}:</strong> ${freq}</p>
                    <p><strong>${t.stops}:</strong> ${stops}</p>
                </div>
                <div class="card-actions">
                    <button type="button" class="btn-listen-card" onclick="speakText(\`${speech.replace(/`/g, "")}\`)">
                        ${t.listenCard}
                    </button>
                </div>
            </div>
        `;
    }).join("");
}

function renderClinics(list) {
    const lang = languageSelect.value;
    const t = translations[lang];
    document.getElementById("clinicContainer").innerHTML = list.map(c => {
        const name = getLocalized(c.name, lang);
        const type = getLocalized(c.type, lang) || "Health Centre";
        const services = getLocalized(c.services, lang);
        const speech = `${name}. ${type}. ${t.timings}: ${c.timings}. ${t.services}: ${services}`;

        return `
            <div class="info-card clinic-card">
                <div>
                    <span class="badge">🏥 ${type}</span>
                    <h3>${name}</h3>
                    <p><strong>${t.timings}:</strong> ${c.timings}</p>
                    <p><strong>${t.services}:</strong> ${services}</p>
                </div>
                <div class="card-actions">
                    <button type="button" class="btn-listen-card" onclick="speakText(\`${speech.replace(/`/g, "")}\`)">
                        ${t.listenCard}
                    </button>
                    ${c.phone ? `<a href="tel:${c.phone}" class="card-link">📞 ${c.phone}</a>` : ""}
                </div>
            </div>
        `;
    }).join("");
}

async function initData() {
    [cachedSchemes, cachedBuses, cachedClinics] = await Promise.all([
        fetchWithFallback("schemes", defaultSchemes),
        fetchWithFallback("buses", defaultBuses),
        fetchWithFallback("clinics", defaultClinics)
    ]);
    renderSchemes(cachedSchemes);
    filterBySelectedLocation();
}

// ======================================
// 5. LANGUAGE & LOCATION SWITCHING
// ======================================
function changeLanguage() {
    const lang = languageSelect.value;
    const t = translations[lang];
    const currentLoc = locationSelect.value;

    document.getElementById("tagline").textContent = t.tagline;
    document.querySelectorAll("nav a").forEach((link, i) => {
        if (t.nav[i]) link.textContent = t.nav[i];
    });

    document.querySelector("#home h2").textContent = t.welcome;
    document.querySelector(".hero-intro").textContent = t.intro;
    document.querySelector('label[for="language"]').textContent = t.choose;
    document.querySelector('label[for="locationSelect"]').textContent = t.locationLabel;

    locationSelect.innerHTML = t.locations
        .map(([val, label]) => `<option value="${val}">${label}</option>`)
        .join("");
    locationSelect.value = currentLoc;

    document.getElementById("micButton").textContent = t.mic;
    document.getElementById("speakButton").textContent = t.read;
    document.getElementById("stopButton").textContent = t.stop;
    document.getElementById("resetButton").textContent = t.reset;

    document.querySelector("#services h2").textContent = t.explore;
    document.querySelector("#services .section-subtitle").textContent = t.serviceIntro;

    document.querySelectorAll(".service-card").forEach((card, i) => {
        card.querySelector("h3").textContent = t.cards[i][0];
        card.querySelector("p").textContent = t.cards[i][1];
        card.querySelector("a").textContent = t.cards[i][2];
    });

    document.querySelector("#schemes h2").textContent = t.schemeTitle;
    document.querySelector("#schemes .section-subtitle").textContent = t.schemeSub;
    document.querySelector("#transport h2").textContent = t.busTitle;
    document.querySelector("#transport .section-subtitle").textContent = t.busSub;
    document.querySelector("#healthcare h2").textContent = t.healthTitle;
    document.querySelector("#healthcare .section-subtitle").textContent = t.healthSub;
    document.querySelector("#emergency h2").textContent = t.emergTitle;
    document.querySelector("#emergency .section-subtitle").textContent = t.emergSub;
    document.querySelector("footer p:last-child").textContent = t.footer;

    document.documentElement.lang = lang;

    renderSchemes(cachedSchemes);
    filterBySelectedLocation();
}

languageSelect.addEventListener("change", changeLanguage);

locationSelect.addEventListener("change", () => {
    filterBySelectedLocation();
    document.getElementById("transport").scrollIntoView({ behavior: "smooth" });
});

// ======================================
// 6. VOICE SEARCH (SPEECH-TO-TEXT)
// ======================================
const micButton = document.getElementById("micButton");
const voiceStatus = document.getElementById("voiceStatus");

micButton.addEventListener("click", () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Speech recognition is supported in Google Chrome or Microsoft Edge.");
        return;
    }

    const recognition = new SpeechRecognition();
    const voiceMap = { en: "en-IN", kn: "kn-IN", hi: "hi-IN" };
    recognition.lang = voiceMap[languageSelect.value] || "en-IN";
    recognition.interimResults = false;

    recognition.onstart = () => {
        micButton.classList.add("listening");
        voiceStatus.classList.remove("hidden");
        voiceStatus.textContent = "🎙️ Listening... Say a place, bus number, scheme, or clinic...";
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        voiceStatus.textContent = `✅ You said: "${transcript}"`;
        handleVoiceQuery(transcript.toLowerCase());
    };

    recognition.onerror = () => {
        voiceStatus.textContent = "⚠️ Could not hear clearly. Please tap the mic and try again.";
    };

    recognition.onend = () => {
        micButton.classList.remove("listening");
    };

    recognition.start();
});

function handleVoiceQuery(query) {
    const cleaned = query
        .replace(/bus|route|routes|for|to|from|show|me|find|ಬಸ್|ಮಾರ್ಗ|बस/gi, "")
        .trim();

    if (query.includes("bus") || query.includes("route") || query.includes("ಬಸ್") || query.includes("बस") || /\d{3}/.test(query)) {
        locationSelect.value = "all";
        renderBuses(cachedBuses);
        const busInput = document.getElementById("busSearch");
        busInput.value = cleaned;
        busInput.dispatchEvent(new Event("input"));
        document.getElementById("transport").scrollIntoView({ behavior: "smooth" });
    } else if (query.includes("clinic") || query.includes("hospital") || query.includes("doctor") || query.includes("ಆಸ್ಪತ್ರೆ") || query.includes("क्लीनिक")) {
        locationSelect.value = "all";
        renderClinics(cachedClinics);
        const clinicInput = document.getElementById("clinicSearch");
        clinicInput.value = cleaned;
        clinicInput.dispatchEvent(new Event("input"));
        document.getElementById("healthcare").scrollIntoView({ behavior: "smooth" });
    } else if (query.includes("emergency") || query.includes("ambulance") || query.includes("police") || query.includes("ತುರ್ತು")) {
        document.getElementById("emergency").scrollIntoView({ behavior: "smooth" });
    } else {
        const schemeInput = document.getElementById("schemeSearch");
        schemeInput.value = cleaned || query;
        schemeInput.dispatchEvent(new Event("input"));
        document.getElementById("schemes").scrollIntoView({ behavior: "smooth" });
    }
}

// ======================================
// 7. SEARCH FILTERS, FULL PAGE READ & RESET
// ======================================
document.getElementById("schemeSearch").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll(".scheme-card").forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(term) ? "flex" : "none";
    });
});

document.getElementById("busSearch").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll(".bus-card").forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(term) ? "flex" : "none";
    });
});

document.getElementById("clinicSearch").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll(".clinic-card").forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(term) ? "flex" : "none";
    });
});

document.getElementById("speakButton").addEventListener("click", () => {
    const lang = languageSelect.value;
    const t = translations[lang];

    const schemesText = cachedSchemes.map(s => getLocalized(s.name, lang)).join(", ");
    const busesText = cachedBuses.map(b => `${b.routeNumber} ${getLocalized(b.from, lang)} - ${getLocalized(b.to, lang)}`).join(". ");
    const clinicsText = cachedClinics.map(c => `${getLocalized(c.name, lang)}, ${c.timings}`).join(". ");

    const fullPageSpeech = `${t.welcome}. ${t.intro}. ${t.schemeTitle}: ${schemesText}. ${t.busTitle}: ${busesText}. ${t.healthTitle}: ${clinicsText}. ${t.emergSpeech}`;
    speakText(fullPageSpeech);
});

document.getElementById("stopButton").addEventListener("click", stopAllSpeech);

document.getElementById("resetButton").addEventListener("click", () => {
    stopAllSpeech();
    locationSelect.value = "all";
    document.getElementById("schemeSearch").value = "";
    document.getElementById("busSearch").value = "";
    document.getElementById("clinicSearch").value = "";
    voiceStatus.classList.add("hidden");
    renderSchemes(cachedSchemes);
    renderBuses(cachedBuses);
    renderClinics(cachedClinics);
});

let currentFontSize = 17;
document.getElementById("increaseFont").addEventListener("click", () => {
    if (currentFontSize < 22) {
        currentFontSize += 1;
        document.documentElement.style.setProperty("--base-font", `${currentFontSize}px`);
    }
});

document.getElementById("decreaseFont").addEventListener("click", () => {
    if (currentFontSize > 14) {
        currentFontSize -= 1;
        document.documentElement.style.setProperty("--base-font", `${currentFontSize}px`);
    }
});

initData();