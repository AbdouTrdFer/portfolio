(function () {
    "use strict";

    const COPY = {
        fr: {
            "meta.title": "Abdelali Ferhan — Futur ingénieur Full-Stack, DevOps & IA",
            "meta.description": "Portfolio d'Abdelali Ferhan, futur ingénieur Full-Stack, DevOps et IA : produits utiles, architectures modernes et déploiements fiables.",
            "meta.ogTitle": "Abdelali Ferhan — Portfolio Full-Stack, DevOps & IA",
            "language.label": "Choisir la langue du portfolio",
            "cv.menu": "Choisir la langue du CV",
            "cv.open": "CV",
            "cv.hero": "Voir mon CV",
            "cv.fr": "CV en français",
            "cv.en": "CV in English",
            "brand.home": "Accueil",
            "brand.role": "Full-Stack · DevOps",
            "menu.open": "Ouvrir le menu",
            "menu.close": "Fermer le menu",
            "home.label": "Accueil",
            "hero.status": "Basé à Fès · Mobile sur Oujda, Rabat, Casablanca et Tanger",
            "hero.lede": "Futur ingénieur <strong>Full-Stack & DevOps</strong>, avec une solide pratique de l’<strong>IA</strong>. Je conçois des applications utiles, robustes et prêtes à être déployées grâce à Docker, au CI/CD et à des architectures modernes.",
            "hero.projects": "Voir mes projets",
            "hero.stat.freelance": "Ans de freelance",
            "hero.stat.projects": "Projets livrés",
            "hero.stat.awards": "Victoires / podiums",
            "hero.stat.certs": "Certifications vérifiées",
            "hero.scroll": "Voir les projets",
            "about.eyebrow": "À propos",
            "about.title": "Qui je suis",
            "about.p1": "Je suis <strong>Abdelali Ferhan</strong>, futur ingénieur en informatique à l’<strong>ENIAD Berkane</strong>, après un <strong>DUT en Informatique</strong> à l’EST de Fès.",
            "about.p2": "Je transforme des besoins métier en produits web et mobile <strong>Full-Stack</strong>, avec une vraie culture <strong>DevOps</strong> : conteneurisation, CI/CD, microservices, API bien conçues et déploiements fiables.",
            "about.p3": "Je m’intéresse également à l’<strong>Intelligence Artificielle</strong>, aux agents IA, à la data et à l’automatisation — toujours avec le même objectif : rendre la technologie concrètement utile.",
            "about.techAria": "Technologies principales",
            "about.educationKey": "Formation",
            "about.educationValue": "Cycle Ingénieur — ENIAD Berkane",
            "about.locationKey": "Basé à",
            "about.locationValue": "Fès · Mobile sur Oujda, Rabat, Casablanca et Tanger",
            "about.goalKey": "Objectif",
            "about.goalValue": "Stage PFA — Full-Stack / DevOps / IA",
            "about.languagesKey": "Langues",
            "about.languagesValue": "Arabe / Français / Anglais",
            "skills.eyebrow": "Stack technique",
            "skills.title": "Compétences",
            "skills.lead": "Une expertise full-stack orientée Java et PHP, renforcée par une pratique concrète du DevOps, de la data et de l’IA.",
            "projects.eyebrow": "Réalisations",
            "projects.title": "Projets sélectionnés",
            "projects.lead": "Une sélection de projets académiques, freelance et de hackathon — à filtrer par domaine.",
            "experience.eyebrow": "Parcours professionnel",
            "experience.title": "Expérience",
            "experience.lead": "Des missions freelance pour de vrais clients aux stages techniques en entreprise.",
            "achievements.eyebrow": "Distinctions & engagement",
            "achievements.title": "Réalisations & distinctions",
            "achievements.lead": "Hackathons, concours de pitch et engagement associatif.",
            "certs.eyebrow": "Certifications & langues",
            "certs.title": "Certifications vérifiées",
            "certs.lead": "Chaque certification renvoie vers sa preuve : Oracle, DevOps, full-stack, UI/UX et hackathon.",
            "certs.languages": "Langues",
            "language.arabic": "Arabe",
            "language.french": "Français",
            "language.english": "Anglais",
            "language.native": "langue maternelle",
            "language.fluent": "courant",
            "language.technical": "technique",
            "education.eyebrow": "Cursus académique",
            "education.title": "Formation",
            "contact.eyebrow": "Restons en contact",
            "contact.title": "Travaillons ensemble",
            "contact.lead": "Disponible pour un stage PFA. Pour me joindre rapidement, envoyez-moi un email.",
            "contact.name": "Votre nom",
            "contact.namePlaceholder": "Nom complet",
            "contact.email": "Votre email",
            "contact.emailPlaceholder": "nom@email.com",
            "contact.message": "Message",
            "contact.messagePlaceholder": "Bonjour Abdelali, ...",
            "contact.send": "Envoyer le message",
            "gallery.close": "Fermer l’aperçu",
            "gallery.label": "Galerie du projet",
            "gallery.previous": "Image précédente",
            "gallery.next": "Image suivante",
            "gallery.thumbnails": "Miniatures",
            "media.video": "Vidéo",
            "media.gallery": "Galerie",
            "project.videoAria": "Démonstration vidéo de {title}",
            "project.imageAlt": "Aperçu de {title}",
            "project.code": "Code",
            "project.codeAria": "Voir le code de {title}",
            "project.preview": "Aperçu",
            "project.previewAria": "Ouvrir l’aperçu du projet {title}",
            "gallery.preview": "Aperçu",
            "gallery.videoAria": "Vidéo de {title}",
            "gallery.captureAlt": "{title} — capture {number}",
            "gallery.captureAria": "Aller à la capture {number}",
            "cert.openProof": "Ouvrir la preuve : {title}",
            "cert.previewAlt": "Aperçu du certificat {title}",
            "cert.viewProof": "Voir la preuve : {title}",
            "cert.proof": "Preuve",
            "contact.mailSubject": "Contact portfolio — {name}",
            "footer.location": "Fès, Maroc"
        },
        en: {
            "meta.title": "Abdelali Ferhan — Full-Stack, DevOps & AI Engineer",
            "meta.description": "Portfolio of Abdelali Ferhan, a software engineering student building reliable full-stack, DevOps and AI products.",
            "meta.ogTitle": "Abdelali Ferhan — Full-Stack, DevOps & AI Portfolio",
            "language.label": "Choose portfolio language",
            "cv.menu": "Choose résumé language",
            "cv.open": "Résumé",
            "cv.hero": "View my résumé",
            "cv.fr": "CV en français",
            "cv.en": "Résumé in English",
            "brand.home": "Home",
            "brand.role": "Full-Stack · DevOps",
            "menu.open": "Open menu",
            "menu.close": "Close menu",
            "home.label": "Home",
            "hero.status": "Based in Fes · Open to Oujda, Rabat, Casablanca and Tangier",
            "hero.lede": "Software engineering student specializing in <strong>Full-Stack development & DevOps</strong>, with hands-on <strong>AI</strong> experience. I build useful, dependable applications and ship them with Docker, CI/CD, and modern architectures.",
            "hero.projects": "Explore my work",
            "hero.stat.freelance": "Years freelancing",
            "hero.stat.projects": "Projects delivered",
            "hero.stat.awards": "Wins / podiums",
            "hero.stat.certs": "Verified certificates",
            "hero.scroll": "Explore projects",
            "about.eyebrow": "About",
            "about.title": "A little about me",
            "about.p1": "I’m <strong>Abdelali Ferhan</strong>, a software engineering student at <strong>ENIAD Berkane</strong>, building on a <strong>University Diploma in Computer Science</strong> from EST Fes.",
            "about.p2": "I turn business needs into polished web and mobile products, combining <strong>full-stack engineering</strong> with a strong <strong>DevOps</strong> mindset: containers, CI/CD, microservices, well-designed APIs, and reliable delivery.",
            "about.p3": "I also explore <strong>Artificial Intelligence</strong>, AI agents, data, and automation—always with the same goal: making technology genuinely useful to people.",
            "about.techAria": "Core technologies",
            "about.educationKey": "Education",
            "about.educationValue": "Engineering Degree — ENIAD Berkane",
            "about.locationKey": "Based in",
            "about.locationValue": "Fes · Open to Oujda, Rabat, Casablanca and Tangier",
            "about.goalKey": "Currently seeking",
            "about.goalValue": "PFA Internship — Full-Stack / DevOps / AI",
            "about.languagesKey": "Languages",
            "about.languagesValue": "Arabic / French / English",
            "skills.eyebrow": "Technical toolkit",
            "skills.title": "Skills",
            "skills.lead": "A Java- and PHP-focused full-stack toolkit, strengthened by hands-on DevOps, data, and AI experience.",
            "projects.eyebrow": "Selected work",
            "projects.title": "Projects that made an impact",
            "projects.lead": "A selection of academic, freelance, and hackathon work—filter by area to explore.",
            "experience.eyebrow": "Professional journey",
            "experience.title": "Experience",
            "experience.lead": "From shipping products for real freelance clients to technical internships in the field.",
            "achievements.eyebrow": "Recognition & leadership",
            "achievements.title": "Achievements & awards",
            "achievements.lead": "Hackathon wins, pitch competitions, and student-community leadership.",
            "certs.eyebrow": "Credentials & languages",
            "certs.title": "Verified certifications",
            "certs.lead": "Every credential links to its proof—from Oracle and DevOps to full-stack, UI/UX, and hackathons.",
            "certs.languages": "Languages",
            "language.arabic": "Arabic",
            "language.french": "French",
            "language.english": "English",
            "language.native": "native",
            "language.fluent": "fluent",
            "language.technical": "technical proficiency",
            "education.eyebrow": "Academic background",
            "education.title": "Education",
            "contact.eyebrow": "Let’s connect",
            "contact.title": "Let’s build something useful",
            "contact.lead": "Open to a PFA engineering internship. Email is the fastest way to reach me.",
            "contact.name": "Your name",
            "contact.namePlaceholder": "Full name",
            "contact.email": "Your email",
            "contact.emailPlaceholder": "name@email.com",
            "contact.message": "Message",
            "contact.messagePlaceholder": "Hello Abdelali, ...",
            "contact.send": "Send message",
            "gallery.close": "Close project preview",
            "gallery.label": "Project gallery",
            "gallery.previous": "Previous image",
            "gallery.next": "Next image",
            "gallery.thumbnails": "Thumbnails",
            "media.video": "Video",
            "media.gallery": "Gallery",
            "project.videoAria": "Video demo of {title}",
            "project.imageAlt": "Preview of {title}",
            "project.code": "Code",
            "project.codeAria": "View the code for {title}",
            "project.preview": "Preview",
            "project.previewAria": "Open the {title} project preview",
            "gallery.preview": "Preview",
            "gallery.videoAria": "Video of {title}",
            "gallery.captureAlt": "{title} — screenshot {number}",
            "gallery.captureAria": "Go to screenshot {number}",
            "cert.openProof": "Open credential proof: {title}",
            "cert.previewAlt": "Preview of the {title} certificate",
            "cert.viewProof": "View proof for {title}",
            "cert.proof": "View proof",
            "contact.mailSubject": "Portfolio enquiry — {name}",
            "footer.location": "Fes, Morocco"
        }
    };

    const EN_TEXT = {
        "Accueil": "Home",
        "À propos": "About",
        "Compétences": "Skills",
        "Projets": "Projects",
        "Expérience": "Experience",
        "Distinctions": "Achievements",
        "Certifications": "Certifications",
        "Formation": "Education",
        "Contact": "Contact",
        "Langages": "Languages",
        "Architecture & API": "Architecture & APIs",
        "API REST": "REST APIs",
        "Architecture MVC": "MVC Architecture",
        "Bases de données": "Databases",
        "Data & IA": "Data & AI",
        "Méthodologies & Outils": "Methods & Tools",
        "Tous": "All",
        "IA / Data": "AI / Data",
        "Futur ingénieur Full-Stack": "Software Engineering Student",
        "DevOps & CI/CD": "DevOps & CI/CD",
        "Passionné par l'IA": "Building with AI",
        "Java / Spring / Angular": "Java / Spring / Angular",
        "PHP / Laravel / React": "PHP / Laravel / React",

        "Presences par Reconnaissance Faciale": "Facial Recognition Attendance Platform",
        "PFA - Full-Stack & DevOps": "PFA — Full-Stack & DevOps",
        "Gestion des presences par reconnaissance faciale avec architecture microservices, authentification JWT / SSO, gateway Traefik et pipeline CI/CD. Projet ENIAD realise en equipe Agile.": "An ENIAD team project that automates attendance through facial recognition. Built on microservices with JWT/SSO authentication, a Traefik gateway, and a complete CI/CD pipeline, delivered through an Agile workflow.",
        "Intelligence Marchés Financiers — Power BI & IA 2020-2024": "Financial Market Intelligence — Power BI & AI (2020–2024)",
        "BI & AI Analysis (Académique)": "Academic BI & AI Analysis",
        "Pipeline BI analysant 120 000 transactions financières. Dashboard interactif de 4 pages, modélisation Star Schema, ETL complexe (Power Query) et évaluation critique d'un modèle IA de trading.": "A business-intelligence pipeline built around 120,000 financial transactions, featuring a four-page interactive dashboard, star-schema modelling, advanced Power Query ETL, and a critical evaluation of an AI trading model.",
        "ArdMarket - Location de Terres Agricoles": "ArdMarket — Agricultural Land Rental Marketplace",
        "Hackathon - 1ere place": "Hackathon — 1st Place",
        "Marketplace agricole avec annonces multimodales en Darija, OCR des titres fonciers, paiement sous sequestre et workflow simple pour connecter proprietaires et locataires.": "A first-place agricultural marketplace designed for accessibility: multimodal listings in Darija, land-title OCR, escrow payments, and a streamlined journey connecting landowners with tenants.",
        "Agent Market Data - CDG Capital": "Market Data Agent — CDG Capital",
        "Hackathon - IA & Data": "Hackathon — AI & Data",
        "Plateforme de suivi en temps reel du marche financier marocain pour CDG Capital. Un agent IA agrege MASI, change MAD, bons du Tresor, MONIA et inflation depuis la Bourse de Casablanca, Bank Al-Maghrib et le HCP, produit des rapports comparatifs J / J-1 / M-1 / A-1 via Groq / Llama 3.3 70B, avec dashboard, chatbot Q&A, alertes et export PDF. Role : Data & Integration.": "A real-time Moroccan market intelligence platform created for CDG Capital. Its AI agent combines MASI, MAD exchange rates, Treasury bonds, MONIA, and inflation data from trusted institutions, then produces day-, month-, and year-over-year reports through Groq/Llama 3.3 70B. I owned data and integration across the dashboard, Q&A assistant, alerts, and PDF exports.",
        "Chatbot de Confirmation de Commande": "Order Confirmation Chatbot",
        "IA - NLP": "AI — NLP",
        "Chatbot intelligent pour confirmer commandes et reservations en langage naturel. Integration Dialogflow, backend FastAPI / MySQL, validation des commandes et interface responsive.": "A conversational assistant that confirms orders and bookings in natural language, combining Dialogflow with a FastAPI/MySQL backend, order validation, and a responsive customer interface.",
        "SpotOn - ParkFinder": "SpotOn — ParkFinder",
        "Application mobile pour trouver des places de parking en temps reel, avec navigation GPS integree, Firebase et Google Maps API.": "A mobile app that helps drivers find available parking in real time, with built-in GPS navigation powered by Firebase and the Google Maps API.",
        "LasOrder - Commande par QR Code": "LasOrder — QR-Code Ordering",
        "Freelance - Client": "Freelance — Client Project",
        "Plateforme de commande pour restaurant : menu interactif via QR code, gestion des articles, panier, back-office analytique et suivi des commandes.": "A client-facing restaurant ordering platform with QR-code menus, item and cart management, live order tracking, and an analytics-driven back office.",
        "Plateforme E-Learning": "E-Learning Platform",
        "Plateforme d'apprentissage en ligne avec roles enseignant, etudiant et admin : cours, examens, QCM, messagerie et suivi pedagogique.": "A role-based learning platform for teachers, students, and administrators, covering courses, exams, quizzes, messaging, and learner progress.",
        "Scaling Dynamique de Microservices": "Dynamic Microservices Scaling",
        "DevOps - Infra": "DevOps — Infrastructure",
        "Equilibrage de charge dynamique avec services Flask repliques, Nginx, monitoring CPU/RAM en temps reel, alertes email et scalabilite horizontale.": "A dynamic load-balancing environment with replicated Flask services, Nginx, real-time CPU and memory monitoring, email alerts, and horizontal scaling.",
        "Gestion des Stagiaires": "Internship Management Platform",
        "Stage - Full-Stack": "Internship — Full-Stack",
        "Application de gestion de stages : suivi encadrants/stagiaires, depot et evaluation des rapports, generation de certificats avec QR code.": "An internship operations platform for supervisors and trainees, including report submission and assessment, progress tracking, and QR-coded certificate generation.",
        "Plateforme E-commerce": "E-Commerce Platform",
        "Boutique en ligne complete : navigation produits, comptes, commandes, gestion du stock, facture et tableau de bord d'administration.": "A complete online store spanning product discovery, customer accounts, ordering, inventory, invoicing, and an administrative dashboard.",
        "ASPIVOT - Gestion des Premiers Secours": "ASPIVOT — First-Aid Operations Management",
        "Application web pour une association de premiers secours : authentification securisee, gestion des interventions, suivi des membres et tableaux de bord.": "A secure web platform for a first-aid association, centralizing incident response, member management, authentication, and operational dashboards.",

        "Mai 2026 – Présent": "May 2026 – Present",
        "Analyste SIG – Freelance": "GIS Data Analyst — Freelance",
        "Données géospatiales (sur site)": "On-site geospatial data project",
        "Collecte, nettoyage et structuration de données géospatiales (ArcGIS Pro) en jeux de données exploitables.": "Collect, clean, and structure geospatial data in ArcGIS Pro, turning field inputs into analysis-ready datasets.",
        "Planification d'itinéraires et analyse spatiale.": "Plan routes and perform spatial analysis to support operational decisions.",
        "2024 – Présent": "2024 – Present",
        "Développeur Full-Stack – Freelance": "Full-Stack Developer — Freelance",
        "Clients variés (e-commerce, e-learning)": "Clients across e-commerce and e-learning",
        "Conçu et développé un système de commande basé sur QR Code (Laravel, jQuery, Chart.js, Docker) avec tableau de bord analytique.": "Designed and delivered a QR-code ordering system with Laravel, jQuery, Chart.js, and Docker, including an analytics dashboard.",
        "Plateforme e-learning complète : comptes, quiz, cours et messagerie (Laravel 9, Node.js).": "Built a complete e-learning platform covering accounts, courses, quizzes, and messaging with Laravel 9 and Node.js.",
        "Développeur Python – Freelance": "Python Developer — Freelance",
        "Extraction de données météorologiques": "Weather data extraction",
        "Développement d’un script automatisé pour l’extraction de données météorologiques depuis ventusky.com, simulant des interactions utilisateur avec Selenium.": "Developed a Selenium automation workflow that reproduces user interactions to extract weather data from Ventusky.",
        "Données collectées : température, vent, humidité, précipitations (jour actuel, 3 jours passés et 3 jours à venir).": "Captured temperature, wind, humidity, and rainfall for the current day, the previous three days, and the following three days.",
        "Export structuré des données au format Excel/CSV.": "Delivered clean, structured exports in Excel and CSV formats.",
        "Avr. – Juin 2024": "Apr. – Jun. 2024",
        "Développeur PHP – Stage technique": "PHP Developer — Technical Internship",
        "École Polytechnique des Génies, Fès": "École Polytechnique des Génies, Fes",
        "Application web de gestion des stagiaires avec génération de certificats à QR code.": "Built an internship management web application with QR-coded certificate generation.",
        "Travail en équipe sur le suivi encadrants / stagiaires.": "Collaborated on supervisor and trainee workflows, progress tracking, and reporting.",

        "Oriental Hack 2.0 – 1ère place": "Oriental Hack 2.0 — 1st Place",
        "ENCG Oujda · Hackathon 72h · Mai 2026": "ENCG Oujda · 72-hour hackathon · May 2026",
        "Projet Ard (location de terres agricoles) primé première place.": "Won first place with Ard, an accessible marketplace for agricultural land rentals.",
        "Forum de l'Entreprise ENIADB – Pitch Challenge, 1ère place": "ENIADB Business Forum — Pitch Challenge Winner",
        "Projet « Smart Melk » (investissement immobilier fractionné) lauréat du Pitch Challenge.": "Won the pitch challenge with Smart Melk, a concept for fractional real-estate investment.",
        "Pentathon ENSAO – Top 5 / 40": "ENSAO Pentathon — Top 5 of 40",
        "ENSA Oujda · Fév. 2026": "ENSA Oujda · Feb. 2026",
        "Projet AtlasGuardian (IA / IoT, smart cities) classé top 5 sur 40 équipes.": "Placed in the top five out of 40 teams with AtlasGuardian, an AI/IoT concept for smarter cities.",
        "Vice-Président & ex-Chef de Projet – Club InnoVerse": "Vice President & Former Project Lead — InnoVerse Club",
        "ENIAD Berkane · 2024 – Présent": "ENIAD Berkane · 2024 – Present",
        "Organisation d'événements tech, encadrement de projets et animation de la communauté étudiante.": "Organize technology events, mentor project teams, and help grow an active student innovation community.",

        "Certification Oracle": "Oracle Certification",
        "Certification professionnelle Java SE 17 : le signal le plus fort pour les rôles backend, full-stack Java et architecture logicielle.": "Professional Java SE 17 certification validating advanced skills for backend engineering, full-stack Java, and software architecture roles.",
        "24 fév. 2026": "Feb. 24, 2026",
        "Formation CI/CD orientée architecture de pipelines, déploiement et optimisation des workflows GitLab.": "Hands-on CI/CD training focused on pipeline architecture, deployment strategy, and optimized GitLab workflows.",
        "17 fév. 2026": "Feb. 17, 2026",
        "Course completion": "Course completed",
        "Formation Laravel appliquée à une application de gestion complète, utile pour valoriser tes projets PHP et dashboards métier.": "Applied Laravel training built around an end-to-end management application, reinforcing PHP, database, and business-dashboard skills.",
        "23 mars 2025": "Mar. 23, 2025",
        "9 heures": "9 hours",
        "Formation React orientée e-commerce, composants et expérience d'achat côté frontend.": "Practical React training focused on e-commerce components, stateful interfaces, and the customer shopping journey.",
        "29 mars 2025": "Mar. 29, 2025",
        "3.5 heures": "3.5 hours",
        "Versioning": "Version Control",
        "Base solide pour collaboration, branches, dépôts GitLab/GitHub et pratiques de versioning au quotidien.": "A solid foundation in team collaboration, branching, GitLab/GitHub repositories, and everyday version-control practices.",
        "13 fév. 2025": "Feb. 13, 2025",
        "1 heure": "1 hour",
        "Formation design produit pour mieux cadrer les interfaces, prototypes et parcours utilisateurs.": "Product-design training covering interface structure, prototyping, and thoughtful user journeys.",
        "12 fév. 2025": "Feb. 12, 2025",
        "4.5 heures": "4.5 hours",
        "Certificat d'appréciation": "Certificate of Appreciation",
        "OrientalHack 1.0 - Certificat d'appréciation": "OrientalHack 1.0 — Certificate of Appreciation",
        "Participation au hackathon OrientalHack 1.0 autour des solutions digitales pour l'économie sociale et solidaire.": "Recognized for participating in OrientalHack 1.0, focused on digital solutions for the social and solidarity economy.",
        "14-16 fév. 2025": "Feb. 14–16, 2025",

        "Cycle Ingénieur en Informatique": "Engineering Degree in Computer Science",
        "ENIAD Berkane – École Nationale d'Intelligence Artificielle et du Numérique": "ENIAD Berkane — National School of Artificial Intelligence and Digital Technology",
        "Spécialisation Informatique, Intelligence Artificielle & Digital.": "Specialization in software engineering, artificial intelligence, and digital technology.",
        "Projets en architecture logicielle, DevOps, microservices et IA.": "Project-based work in software architecture, DevOps, microservices, and AI.",
        "DUT en Informatique": "University Diploma in Computer Science",
        "École Supérieure de Technologie (EST), Fès": "Higher School of Technology (EST), Fes",
        "Diplôme Universitaire de Technologie en Informatique.": "Two-year university diploma in computer science.",
        "Bases solides en développement web, bases de données et génie logiciel.": "Built strong foundations in web development, databases, and software engineering.",
        "Téléphone": "Phone"
    };

    const TYPED = {
        fr: ["Futur ingénieur Full-Stack", "DevOps & CI/CD", "Passionné par l'IA", "Java / Spring / Angular", "PHP / Laravel / React"],
        en: ["Software Engineering Student", "Full-Stack Product Builder", "DevOps & CI/CD", "Building with AI", "Java / Spring / Angular"]
    };

    function storedLanguage() {
        const query = new URLSearchParams(window.location.search).get("lang");
        if (query === "fr" || query === "en") return query;
        try {
            const saved = window.localStorage.getItem("portfolio-language");
            if (saved === "fr" || saved === "en") return saved;
        } catch (_) {}
        return "fr";
    }

    let language = storedLanguage();

    function format(template, values) {
        return Object.entries(values || {}).reduce(
            (result, entry) => result.replaceAll("{" + entry[0] + "}", entry[1]),
            template
        );
    }

    function t(key, values) {
        const value = COPY[language][key] || COPY.fr[key] || key;
        return format(value, values);
    }

    function localize(value) {
        if (language !== "en") return value;
        return EN_TEXT[value] || value;
    }

    function applyStatic(root) {
        const scope = root || document;
        scope.querySelectorAll("[data-i18n]").forEach((node) => {
            node.textContent = t(node.dataset.i18n);
        });
        scope.querySelectorAll("[data-i18n-html]").forEach((node) => {
            node.innerHTML = t(node.dataset.i18nHtml);
        });
        scope.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
            node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
        });
        scope.querySelectorAll("[data-i18n-aria]").forEach((node) => {
            node.setAttribute("aria-label", t(node.dataset.i18nAria));
        });
    }

    function updateDocumentMeta() {
        document.documentElement.lang = language;
        document.title = t("meta.title");
        const description = document.querySelector('meta[name="description"]');
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (description) description.setAttribute("content", t("meta.description"));
        if (ogTitle) ogTitle.setAttribute("content", t("meta.ogTitle"));
    }

    function setLanguage(next, options) {
        if (next !== "fr" && next !== "en") return;
        language = next;
        try {
            window.localStorage.setItem("portfolio-language", language);
        } catch (_) {}
        if (!options || options.updateUrl !== false) {
            const url = new URL(window.location.href);
            if (language === "fr") url.searchParams.delete("lang");
            else url.searchParams.set("lang", language);
            window.history.replaceState(null, "", url.pathname + url.search + url.hash);
        }
        updateDocumentMeta();
        applyStatic(document);
    }

    window.PortfolioI18n = {
        applyStatic,
        getLanguage: () => language,
        localize,
        setLanguage,
        t,
        typed: () => TYPED[language]
    };
})();
