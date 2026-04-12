/* =========================
   NAVBAR SCRIPT
   ========================= */

const TRANSLATION_KEYS = {
  Home: "home",
  About: "about",
  Service: "services",
  Services: "services",
  "Our Saffron": "ourSaffron",
  Pages: "pages",
  "Our Team": "ourTeam",
  "MEET OUR TEAM": "teamTitle",
  "Founder & CEO of Merghob Heray Saffron": "founderCeo",
  "Vice Manager": "viceManager",
  "Financial Manager": "financialManager",
  "Office Manager": "officeManager",
  "Get in Touch": "contactHeaderTitle",
  "We reply within 24 hours. Have a question about our saffron or an order? We're here to help.":
    "contactHeaderText",
  Name: "nameLabel",
  "Please enter your name.": "nameFeedback",
  "Thank you! Your message has been sent. We'll reply within 24 hours.":
    "contactSuccessMessage",
  "Our Details": "ourDetailsTitle",
  "Find Us": "findUsTitle",
  "Representative location: Herat, Afghanistan. Contact us for exact details.":
    "contactLocationNote",
  "Frequently Asked Questions": "faqTitle",
  "What makes your saffron different?": "faq1Question",
  "Our saffron is 100% pure, hand-harvested in Herat, Afghanistan. We use traditional methods to ensure the highest quality and flavor. Each thread is carefully selected for its aroma, color, and taste, making it a premium choice for culinary and medicinal use.":
    "faq1Answer",
  "How to identify pure saffron?": "faq2Question",
  "Real saffron: Releases golden-yellow color slowly in warm water (15+ min), smells sweet/aromatic, tastes slightly bitter, threads are trumpet-shaped and turn skin yellow when rubbed. Fake: Colors water red instantly, no aroma, sweet taste, uniform thin threads.":
    "faq2Answer",
  "What is your return policy?": "faq3Question",
  "We accept returns within 14 days for unopened products. Contact us to start the process.":
    "faq3Answer",
  "Women-Owned Since 2023": "shopHeroEyebrow",
  "Traceable Afghan": "shopHeroTitleLine1",
  Saffron: "shopHeroTitleLine2",
  "Premium saffron from Herat, processed, dried, graded, cleaned, and packaged by Marghob Heray Agricultural and Livestock Company.":
    "shopHeroSubtitle",
  "Shop Now": "shopNowButton",
  "Marghob Heray Collection": "shopCollectionTitle",
  "Premium saffron from Marghob Heray Agricultural Company — women-owned, quality-driven, from Herat":
    "shopCollectionSubtitle",
  "✓ Women-Owned — ✓ Lab-Tested — ✓ Direct from Herat":
    "shopTrustLine",
  "Pushal Grade A": "pushalGradeA",
  "Pushal Grade B": "pushalGradeB",
  "Super Negin": "superNeginLabel",
  Negin: "neginLabel",
  Pushal: "pushalLabel",
  "Sort: Featured": "sortFeatured",
  "Price: Low to High": "sortLowHigh",
  "Price: High to Low": "sortHighLow",
  "Top Rated": "sortTopRated",
  "No products found": "noProductsFound",
  "Back to Shop": "backToShop",
  "Your Cart": "yourCartTitle",
  "Order Summary": "orderSummaryTitle",
  Subtotal: "subtotalLabel",
  Shipping: "shippingLabel",
  Negotiable: "negotiableLabel",
  Total: "totalLabel",
  "Full Name": "fullNameLabel",
  "John Doe": "fullNamePlaceholder",
  "Phone Number": "phoneNumberLabel",
  "+9370000000": "phonePlaceholder",
  "Delivery Address": "deliveryAddressLabel",
  "123 Main Street, City, Country": "addressPlaceholder",
  "Place Order": "placeOrderButton",
  "Order Placed Successfully!": "orderPlacedSuccess",
  Cart: "cartLabel",
  "Added to cart!": "addedToCartToast",
  "Our Gallery": "galleryHeroTitle",
  "From farm to final product.": "galleryHeroSubtitle",
  Explore: "galleryExplore",
  "The Journey of Saffron": "galleryIntroHeading",
  "From the fertile fields of Herat province, our saffron undergoes a meticulous journey — hand-picked at dawn, carefully dried, and precisely packaged to preserve its extraordinary aroma, flavor, and color for markets around the world.":
    "galleryIntroText",
  All: "galleryFilterAll",
  "Saffron Fields": "galleryFilterFields",
  Harvesting: "galleryFilterHarvesting",
  Processing: "galleryFilterProcessing",
  Packaging: "galleryFilterPackaging",
  "Load More": "galleryLoadMore",
  Gallery: "gallery",
  Shop: "shop",
  Contact: "contact",
  "Explore Products": "exploreProducts",
  "Premium Saffron Services": "premiumSaffronServices",
  "Explore Services": "exploreServices",
  "Send Us a Message": "sendUsMessage",
  Email: "email",
  Message: "message",
  "Send Message": "sendMessage",
  "Privacy Policy": "privacyPolicy",
  "Terms of Service": "termsOfService",
  "Please enter a valid email.": "validEmailFeedback",
  "Please enter your message.": "messageFeedback",
  "Sending...": "sendingLabel",
  "Merghob Heray": "brandName",
  "Merghob Saffron": "footerBrandName",
  "Heray Saffron": "brandTagline",
  "Pure Afghan Saffron harvested with care, delivered with trust. The essence of authenticity in every thread.":
    "footerTagline",
  "Your email address": "newsletterPlaceholder",
  "Women-led excellence in saffron processing, value addition, and sustainable agricultural development across Herat Province.":
    "heroDesc",
  "Empowering Women Through Saffron": "saffronHeroTitle",
  "Quality Analysis": "qualityAnalysis",
  "Coloring Strength": "coloringStrength",
  "Aroma Intensity": "aromaIntensity",
  "Aroma Intensity (Safranal)": "aromaIntensitySafranal",
  "Flavor Profile": "flavorProfile",
  "Flavor Profile (Picrocrocin)": "flavorProfilePicrocrocin",
  "Moisture Analysis": "moistureAnalysis",
  "Purity & Moisture Analysis": "purityMoistureAnalysis",
  "Purity & Moisture": "purityMoisture",
  "Our Saffron Journey": "journeyTitle",
  Cultivation: "cultivationCard",
  Harvesting: "harvestingCard",
  "Drying & Processing": "dryingProcessingCard",
  "Grading & Quality Control": "gradingQualityControl",
  Packaging: "packagingCard",
  "Good packaging helps saffron fresh and safe until it reaches customers.":
    "packagingNote",
  "Quality Analysis Details": "qualityAnalysisDetails",
  "Assess the quality of saffron based on various parameters":
    "qualityAssessmentDescription",
  "Discover the finest quality saffron from around the world":
    "discoverQualitySaffron",
  "Quality Analysis of Saffron": "qualityAnalysisOfSaffron",
  "Step 1: Coloring Strength": "step1Title",
  "Step 2: Aroma Intensity (Safranal)": "step2Title",
  "Step 3: Flavor Profile (Picrocrocin)": "step3Title",
  "Step 4: Purity and Moisture Analysis": "step4Title",
  "Purpose:": "purposeLabel",
  "Method:": "methodLabel",
  "Result:": "resultLabel",
  "Step 1:": "step1Label",
  "Step 2:": "step2Label",
  "Step 3:": "step3Label",
  "Step 4:": "step4Label",
  "To assess the color intensity of saffron": "step1Purpose",
  "Colorimetric analysis": "step1Method",
  "Results indicate the color intensity of the saffron sample": "step1Result",
  "Coloring strength shows how strong the color of the saffron is when it is added to water of food. Hight-quality saffron produces a bright golden-yellow color even when a small amount is used. This strong coloring ability comes from a natural compound in saffron called crocin. The higher the coloring strength, the better and the more valuable the saffron is considered.":
    "coloringStrengthDetail",
  "Safranal defines the fragrance quality of saffron.": "saffronAromaText",
  "Controlled Drying": "controlledDrying",
  "Drying improves aroma while preserving compounds.": "dryingImprovesAroma",
  "Premium Grade": "premiumGrade",
  "Strong and clean aroma indicates high quality.": "strongCleanAroma",
  "Measure fragrance quality and freshness": "step2Purpose",
  "Laboratory sensory and compound assessment": "step2Method",
  "Strong clean aroma in premium lots": "step2Result",
  "Safranal is responsible for saffron's aroma. Higher safranal usually means better fragrance and freshness. If storage conditions are poor, aroma decreases quickly. This step confirms that saffron has the expected natural smell without musty or artificial notes.":
    "aromaIntensityDetail",
  "Picrocrocin contributes to saffron's distinct taste.": "picrocrocinTaste",
  "Authentic Taste": "authenticTasteLabel",
  "Balanced bitterness indicates genuine saffron.": "authenticTaste",
  Consistency: "consistencyLabel",
  "Flavor remains stable across production lots.": "flavorConsistency",
  "Confirm authentic saffron taste": "step3Purpose",
  "Compound-level and sensory evaluation": "step3Method",
  "Clean taste with proper bitter balance": "step3Result",
  "Picrocrocin gives saffron its characteristic flavor. A good flavor profile means the saffron is pure and processed correctly. Weak or inconsistent taste can indicate poor drying or adulteration. This step verifies culinary quality and product authenticity.":
    "flavorProfileDetail",
  "Final safeguard for shelf life and export quality.": "finalSafeguard",
  "Moisture Control": "moistureControl",
  "Low moisture prevents mold and quality loss.": "lowMoistureText",
  "Purity Verification": "purityVerification",
  "No adulteration and no foreign particles.": "noAdulterationText",
  "Protect safety, quality and shelf life": "step4Purpose",
  "Lab checks for moisture and contaminants": "step4Method",
  "Clean threads and stable storage quality": "step4Result",
  "This step ensures saffron is clean, dry, and safe for long-term storage. High moisture may cause mold and reduce quality. Purity checks confirm that no artificial coloring, foreign material, or adulteration is present before packaging and export.":
    "purityMoistureDetail",
  "Internal Laboratory Testing": "labTitle",
  "Our quality control process follows international saffron standards. All batches are tested before packaging and export.":
    "labSectionText1",
  "Batch traceability system": "batchTraceability",
  "Visual inspection": "visualInspection",
  "Moisture analysis": "moistureAnalysisLabel",
  "Laboratory chemical evaluation": "laboratoryChemicalEvaluation",
  "Final approval before packaging": "finalApprovalLabel",
  "Our procedures align with international quality standards including":
    "labSectionText2",
  Close: "closeButton",
};

const TRANSLATIONS = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    ourSaffron: "Our Saffron",
    pages: "Pages",
    ourTeam: "Our Team",
    teamTitle: "MEET OUR TEAM",
    founderCeo: "Founder & CEO of Merghob Heray Saffron",
    viceManager: "Vice Manager",
    financialManager: "Financial Manager",
    officeManager: "Office Manager",
    contactHeaderTitle: "Get in Touch",
    contactHeaderText:
      "We reply within 24 hours. Have a question about our saffron or an order? We're here to help.",
    nameLabel: "Name",
    nameFeedback: "Please enter your name.",
    contactSuccessMessage:
      "Thank you! Your message has been sent. We'll reply within 24 hours.",
    ourDetailsTitle: "Our Details",
    findUsTitle: "Find Us",
    contactLocationNote:
      "Representative location: Herat, Afghanistan. Contact us for exact details.",
    faqTitle: "Frequently Asked Questions",
    faq1Question: "What makes your saffron different?",
    faq1Answer:
      "Our saffron is 100% pure, hand-harvested in Herat, Afghanistan. We use traditional methods to ensure the highest quality and flavor. Each thread is carefully selected for its aroma, color, and taste, making it a premium choice for culinary and medicinal use.",
    faq2Question: "How to identify pure saffron?",
    faq2Answer:
      "Real saffron: Releases golden-yellow color slowly in warm water (15+ min), smells sweet/aromatic, tastes slightly bitter, threads are trumpet-shaped and turn skin yellow when rubbed. Fake: Colors water red instantly, no aroma, sweet taste, uniform thin threads.",
    faq3Question: "What is your return policy?",
    faq3Answer:
      "We accept returns within 14 days for unopened products. Contact us to start the process.",
    shopHeroEyebrow: "Women-Owned Since 2023",
    shopHeroTitleLine1: "Traceable Afghan",
    shopHeroTitleLine2: "Saffron",
    shopHeroSubtitle:
      "Premium saffron from Herat, processed, dried, graded, cleaned, and packaged by Marghob Heray Agricultural and Livestock Company.",
    shopNowButton: "Shop Now",
    shopCollectionTitle: "Marghob Heray Collection",
    shopCollectionSubtitle:
      "Premium saffron from Marghob Heray Agricultural Company — women-owned, quality-driven, from Herat",
    shopTrustLine: "✓ Women-Owned — ✓ Lab-Tested — ✓ Direct from Herat",
    pushalGradeA: "Pushal Grade A",
    pushalGradeB: "Pushal Grade B",
    superNeginLabel: "Super Negin",
    neginLabel: "Negin",
    pushalLabel: "Pushal",
    sortFeatured: "Sort: Featured",
    sortLowHigh: "Price: Low to High",
    sortHighLow: "Price: High to Low",
    sortTopRated: "Top Rated",
    noProductsFound: "No products found",
    backToShop: "Back to Shop",
    yourCartTitle: "Your Cart",
    orderSummaryTitle: "Order Summary",
    subtotalLabel: "Subtotal",
    shippingLabel: "Shipping",
    negotiableLabel: "Negotiable",
    totalLabel: "Total",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "John Doe",
    phoneNumberLabel: "Phone Number",
    phonePlaceholder: "+9370000000",
    deliveryAddressLabel: "Delivery Address",
    addressPlaceholder: "123 Main Street, City, Country",
    placeOrderButton: "Place Order",
    orderPlacedSuccess: "Order Placed Successfully!",
    cartLabel: "Cart",
    addedToCartToast: "Added to cart!",
    galleryHeroTitle: "Our Gallery",
    galleryHeroSubtitle: "From farm to final product.",
    galleryExplore: "Explore",
    galleryIntroHeading: "The Journey of Saffron",
    galleryIntroText:
      "From the fertile fields of Herat province, our saffron undergoes a meticulous journey — hand-picked at dawn, carefully dried, and precisely packaged to preserve its extraordinary aroma, flavor, and color for markets around the world.",
    galleryFilterAll: "All",
    galleryFilterFields: "Saffron Fields",
    galleryFilterHarvesting: "Harvesting",
    galleryFilterProcessing: "Processing",
    galleryFilterPackaging: "Packaging",
    galleryLoadMore: "Load More",
    gallery: "Gallery",
    shop: "Shop",
    contact: "Contact",
    exploreProducts: "Explore Products",
    premiumSaffronServices: "Premium Saffron Services",
    exploreServices: "Explore Services",
    sendUsMessage: "Send Us a Message",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    validEmailFeedback: "Please enter a valid email.",
    messageFeedback: "Please enter your message.",
    sendingLabel: "Sending...",
    brandTagline: "Heray Saffron",
    heroTitle: "Empowering Afghan Agriculture",
    heroDesc:
      "Women-led excellence in saffron processing, value addition, and sustainable agricultural development across Herat Province.",
    saffronHeroTitle: "Empowering Women Through Saffron",
    qualityAnalysis: "Quality Analysis",
    coloringStrength: "Coloring Strength",
    aromaIntensity: "Aroma Intensity",
    aromaIntensitySafranal: "Aroma Intensity (Safranal)",
    flavorProfile: "Flavor Profile",
    flavorProfilePicrocrocin: "Flavor Profile (Picrocrocin)",
    moistureAnalysis: "Moisture Analysis",
    purityMoistureAnalysis: "Purity & Moisture Analysis",
    purityMoisture: "Purity & Moisture",
    journeyTitle: "Our Saffron Journey",
    cultivationCard: "Cultivation",
    harvestingCard: "Harvesting",
    dryingProcessingCard: "Drying & Processing",
    gradingQualityControl: "Grading & Quality Control",
    packagingCard: "Packaging",
    packagingNote:
      "Good packaging helps saffron fresh and safe until it reaches customers.",
    cultivationJourneyText:
      "Cultivation of saffron involves planting the corms in well-drained soil, typically in late summer. The plants require a dry, sunny climate and are often grown in regions with hot summers and cold winters. The corms are planted about 10-15 cm deep and spaced 20-30 cm apart to allow for growth.",
    harvestingJourneyText:
      "Harvesting saffron is a labor-intensive process that takes place in the fall. The delicate red stigmas are handpicked from the crocus flowers, usually in the early morning to preserve their quality. It takes around 150,000 flowers to produce just one kilogram of saffron, making it one of the most expensive spices in the world.",
    dryingProcessingJourneyText:
      "After harvesting, the stigmas are carefully dried to preserve their flavor, aroma, and color. This is typically done using low heat or by sun-drying. The drying process is crucial as it affects the quality of the saffron. Once dried, the stigmas are sorted and graded based on their quality before being packaged for sale.",
    gradingQualityControlJourneyText:
      "Grading saffron involves assessing its quality based on factors such as color, aroma, and flavor. The ISO 3632 standard is commonly used for grading saffron, which categorizes it into different grades based on the concentration of key compounds like crocin (color), safranal (aroma), and picrocrocin (flavor). Quality control measures are implemented to ensure that the saffron meets the required standards before it is exported to global markets.",
    packagingJourneyText:
      "Saffron is placed in clean, moisture-proof containers to maintain its quality during storage and transportation. The packaging is designed to protect the delicate stigmas from light, air, and moisture, which can degrade their quality. Once packaged, good packaging helps saffron stay fresh and safe until it reaches customers.",
    qualityAnalysisDetails: "Quality Analysis Details",
    qualityAssessmentDescription:
      "Assess the quality of saffron based on various parameters",
    discoverQualitySaffron:
      "Discover the finest quality saffron from around the world",
    qualityAnalysisOfSaffron: "Quality Analysis of Saffron",
    step1Title: "Step 1: Coloring Strength",
    step2Title: "Step 2: Aroma Intensity (Safranal)",
    step3Title: "Step 3: Flavor Profile (Picrocrocin)",
    step4Title: "Step 4: Purity and Moisture Analysis",
    purposeLabel: "Purpose:",
    methodLabel: "Method:",
    resultLabel: "Result:",
    step1Label: "Step 1:",
    step2Label: "Step 2:",
    step3Label: "Step 3:",
    step4Label: "Step 4:",
    step1Purpose: "To assess the color intensity of saffron",
    step1Method: "Colorimetric analysis",
    step1Result: "Results indicate the color intensity of the saffron sample",
    coloringStrengthDetail:
      "Coloring strength shows how strong the color of the saffron is when it is added to water of food. Hight-quality saffron produces a bright golden-yellow color even when a small amount is used. This strong coloring ability comes from a natural compound in saffron called crocin. The higher the coloring strength, the better and the more valuable the saffron is considered.",
    saffronAromaText: "Safranal defines the fragrance quality of saffron.",
    controlledDrying: "Controlled Drying",
    dryingImprovesAroma: "Drying improves aroma while preserving compounds.",
    premiumGrade: "Premium Grade",
    strongCleanAroma: "Strong and clean aroma indicates high quality.",
    step2Purpose: "Measure fragrance quality and freshness",
    step2Method: "Laboratory sensory and compound assessment",
    step2Result: "Strong clean aroma in premium lots",
    aromaIntensityDetail:
      "Safranal is responsible for saffron's aroma. Higher safranal usually means better fragrance and freshness. If storage conditions are poor, aroma decreases quickly. This step confirms that saffron has the expected natural smell without musty or artificial notes.",
    picrocrocinTaste: "Picrocrocin contributes to saffron's distinct taste.",
    authenticTasteLabel: "Authentic Taste",
    authenticTaste: "Balanced bitterness indicates genuine saffron.",
    consistencyLabel: "Consistency",
    flavorConsistency: "Flavor remains stable across production lots.",
    step3Purpose: "Confirm authentic saffron taste",
    step3Method: "Compound-level and sensory evaluation",
    step3Result: "Clean taste with proper bitter balance",
    flavorProfileDetail:
      "Picrocrocin gives saffron its characteristic flavor. A good flavor profile means the saffron is pure and processed correctly. Weak or inconsistent taste can indicate poor drying or adulteration. This step verifies culinary quality and product authenticity.",
    finalSafeguard: "Final safeguard for shelf life and export quality.",
    moistureControl: "Moisture Control",
    lowMoistureText: "Low moisture prevents mold and quality loss.",
    purityVerification: "Purity Verification",
    noAdulterationText: "No adulteration and no foreign particles.",
    step4Purpose: "Protect safety, quality and shelf life",
    step4Method: "Lab checks for moisture and contaminants",
    step4Result: "Clean threads and stable storage quality",
    purityMoistureDetail:
      "This step ensures saffron is clean, dry, and safe for long-term storage. High moisture may cause mold and reduce quality. Purity checks confirm that no artificial coloring, foreign material, or adulteration is present before packaging and export.",
    labTitle: "Internal Laboratory Testing",
    labSectionText1:
      "Our quality control process follows international saffron standards. All batches are tested before packaging and export.",
    batchTraceability: "Batch traceability system",
    visualInspection: "Visual inspection",
    moistureAnalysisLabel: "Moisture analysis",
    laboratoryChemicalEvaluation: "Laboratory chemical evaluation",
    finalApprovalLabel: "Final approval before packaging",
    labSectionText2:
      "Our procedures align with international quality standards including",
    closeButton: "Close",
    hero_badge: "Premium Saffron Services",
    services_title: "Our Capabilities",
    services_subtitle:
      "Comprehensive saffron value chain solutions with international quality standards and women's economic empowerment.",
    aboutHeaderSubtitle: "Women-Owned Saffron Excellence",
    aboutHeaderTitle: "Marghob Heray",
    aboutHeaderText:
      "Leading the saffron value chain with quality assurance, sustainable farming, and women's economic empowerment in Afghanistan.",
    companyOverview: "Company Overview",
    companyOverviewText1:
      "Marghob Heray is a women-owned saffron producer focused on premium quality, sustainable cultivation, and value-added processing.",
    companyOverviewText2:
      "From farm to market, we empower local growers while championing hygienic production standards, traceability, and ethical trade.",
    womenLedTag: "Women-Led",
    est2023Tag: "Est. 2023",
    heratProvinceTag: "Herat Province",
    valueChainExpertise: "Value Chain Expertise",
    fullValueChainOperations: "Full Value Chain Operations",
    allStagesBadge: "Seed-to-Sale",
    cultivationExportPrep:
      "Cultivation, collection, and export preparation managed under one roof.",
    fullValueChainDesc:
      "We control every stage of saffron production, ensuring consistent quality from cultivation to export.",
    qualityControlSystems: "Quality Control Systems",
    advancedBadge: "Advanced",
    qualityControlDesc:
      "Our protocols include lab analysis, grading, and secure storage to meet buyer specifications.",
    marketOrientation: "Market Orientation",
    exportReadyBadge: "Export Ready",
    marketOrientationDesc:
      "We tailor production to international demand while maintaining local origin and authenticity.",
    farmerPartnerships: "Farmer Partnerships",
    farmerPartnershipsDesc:
      "Strong field relationships with women farmers support productivity, fair pricing, and reliable sourcing.",
    womenFarmersTag: "Women Farmers",
    smallholderFarmersLabel: "Smallholder Farmers",
    fairPricingSystemLabel: "Pricing System",
    guaranteedPurchaseMechanismsLabel: "Purchase Mechanisms",
    fairTradeTag: "Fair Trade",
    incomeStabilityTag: "Income Stability",
    institutionalCapacity: "Institutional Capacity",
    institutionalCapacityDesc:
      "A structured team delivers contract management, financial oversight, and partner coordination.",
    projectContractsLabel: "Project Contracts",
    worldVisionLabel: "World Vision",
    partnerNgoLabel: "Partner NGO",
    procurementTag: "Procurement",
    supplyChainTag: "Supply Chain",
    implementationPartnerTag: "Implementation Partner",
    aboutMissionTitle: "Our Mission",
    aboutMissionText:
      "To grow a thriving saffron enterprise that uplifts farmers and builds lasting local prosperity.",
    aboutMissionSubtext:
      "We place quality, transparency, and sustainable income at the center of every partnership and process.",
    missionBullet1: "Increase farmer incomes through fair sourcing.",
    missionBullet2: "Produce premium saffron with verifiable traceability.",
    missionBullet3: "Strengthen rural livelihoods through ethical agriculture.",
    projectImplementation: "Project Implementation",
    procurementSupplyChain: "Procurement & Supply Chain",
    supplierBadge: "Supplier",
    inputsDistribution:
      "Inputs distribution and crop support delivered directly to partner farms.",
    procurementDesc:
      "We coordinate raw material procurement, field supplies, and supply management for consistent production.",
    logisticsCoordination: "Logistics & Coordination",
    managerBadge: "Manager",
    logisticsDesc:
      "Managed warehousing, transportation, and last-mile distribution with quality compliance, timely delivery, and accurate financial reporting.",
    donorCompliance: "Donor Compliance",
    standardBadge: "Standard",
    donorComplianceDesc:
      "Full adherence to international procurement standards, operational risk management, and donor-aligned reporting for World Vision International and RSDO.",
    coreValuesTitle: "Core Values",
    womenEmpowerment: "Women Empowerment",
    womenEmpowermentDesc: "Economic opportunities & leadership",
    sustainability: "Sustainability",
    sustainabilityDesc: "Eco-friendly farming practices",
    excellence: "Excellence",
    excellenceDesc: "Premium quality standards",
    partnership: "Partnership",
    partnershipDesc: "Fair & transparent practices",
    aboutSaffron: "About Saffron",
    aboutSaffronDesc:
      "Our saffron is high quality and comes from the best farms in Afghanistan.",
    qualityPurity: "Quality and Purity",
    qualityPurityDesc:
      "We offer pure and authentic saffron, free from additives and fillers, ensuring the highest quality for our customers.",
    sustainableFarming: "Sustainable Farming",
    sustainableFarmingDesc:
      "We are committed to sustainable farming practices that protect the environment and support local communities.",
    authenticHeritage: "Authentic Heritage",
    authenticHeritageDesc:
      "Our saffron is cultivated using traditional methods passed down through generations, preserving the rich heritage of Afghan saffron farming.",
    seeMore: "See More",
    ourFoundation: "Our Foundation",
    missionVision: "Mission & Vision",
    missionTitle: "Our Mission",
    missionText:
      "To deliver the world's finest Afghan saffron while honoring farmers and preserving centuries-old cultivation traditions. We believe in sustainable farming, fair trade, and authentic quality.",
    visionTitle: "Our Vision",
    visionText:
      "To become the global benchmark for premium, ethically-sourced saffron. We envision a future where every thread tells a story of passion, heritage, and excellence.",
    ourCommitment: "Our Commitment",
    whyChoose: "Why Choose Zafaran",
    pureNatural: "100% Pure & Natural",
    pureNaturalText:
      "No additives, fillers, or artificial ingredients. Pure saffron threads directly from our farms to your table.",
    awardQuality: "Award-Winning Quality",
    awardQualityText:
      "Certified and recognized globally for superior color, aroma, and potency. Our saffron meets the highest international standards.",
    farmerEmpowerment: "Farmer Empowerment",
    farmerEmpowermentText:
      "We ensure fair compensation and sustainable practices for our farming partners. Supporting communities that have grown saffron for generations.",
    premiumPackaging: "Premium Packaging",
    premiumPackagingText:
      "Elegantly designed, airtight packaging that preserves freshness and aroma. Every box is a work of art reflecting our brand's heritage.",
    fastDelivery: "Fast & Secure Delivery",
    fastDeliveryText:
      "Worldwide shipping with temperature control. Your saffron arrives fresh, protected, and on time - guaranteed.",
    certifiedTrusted: "Certified & Trusted",
    certifiedTrustedText:
      "ISO certified, lab-tested for purity and authenticity. Trusted by chefs, nutritionists, and saffron enthusiasts worldwide.",
    footerBrandName: "Merghob Saffron",
    footerTagline:
      "Pure Afghan Saffron harvested with care, delivered with trust. The essence of authenticity in every thread.",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    getInTouch: "Get in Touch",
    stayConnected: "Stay Connected",
    locationText: "Herat, Afghanistan",
    newsletterText:
      "Get updates on new harvests, exclusive offers, and saffron stories.",
    newsletterPlaceholder: "Your email address",
    subscribe: "Subscribe",
    subscribeSuccess: "Thank you for subscribing!",
    premiumQuality: "Premium Quality",
    copyrightText: "© 2025 Zafran. All rights reserved.",
    heroTitle: "Empowering Afghan Agriculture",
    heroDesc:
      "Women-led excellence in saffron processing, value addition, and sustainable agricultural development across Herat Province.",
    s1_title: "Saffron Processing & Drying",
    s1_desc:
      "Advanced post-harvest processing with hygienic standards, stigma separation, and premium drying techniques for optimal color and aroma retention.",
    s2_title: "Quality Control & Grading",
    s2_desc:
      "ISO-certified laboratory testing for crocin, safranal, and picrocrocin levels with structured quality assurance systems ensuring Grade I purity.",
    s3_title: "Packaging & Branding",
    s3_desc:
      "Premium, protective packaging solutions designed to preserve aroma, color, and potency while meeting international export standards.",
    s4_title: "Farmer Support & Linkages",
    s4_desc:
      "Direct collaboration with smallholder and women farmers through guaranteed purchase mechanisms, fair pricing, and technical guidance.",
    s5_title: "Supply Chain & Logistics",
    s5_desc:
      "Full traceability, cold-chain management, and compliant logistics ensuring product excellence from production through export markets.",
    s6_title: "Project Implementation",
    s6_desc:
      "Experienced local implementing partner with proven track record executing donor-funded projects and ensuring measurable development outcomes.",
    cta_title: "Women-Led Growth in Afghan Agriculture",
    cta_desc:
      "Marghob Heray is committed to enhancing livelihoods, strengthening women's economic empowerment, and delivering quality saffron to global markets.",
    cta_btn: "Get in Touch",
  },
  dr: {
    home: "خانه",
    about: "درباره ما",
    services: "خدمات",
    ourSaffron: "زعفران ما",
    pages: "صفحات",
    ourTeam: "تیم ما",
    teamTitle: "اعضای تیم ما",
    founderCeo: "بنیان‌گذار و رئیس اجرایی مرغهوب هری زعفران",
    viceManager: "معاون مدیر",
    financialManager: "مدیر مالی",
    officeManager: "مدیر دفتر",
    contactHeaderTitle: "با ما در تماس شوید",
    contactHeaderText:
      "ما در مدت ۲۴ ساعت پاسخ می‌دهیم. اگر درباره زعفران ما یا سفارش خود پرسشی دارید، برای کمک در خدمت شما هستیم.",
    nameLabel: "نام",
    nameFeedback: "لطفاً نام خود را وارد کنید.",
    contactSuccessMessage:
      "تشکر! پیام شما با موفقیت ارسال شد. ما در مدت ۲۴ ساعت پاسخ خواهیم داد.",
    ourDetailsTitle: "جزئیات ما",
    findUsTitle: "ما را پیدا کنید",
    contactLocationNote:
      "محل نمایندگی: هرات، افغانستان. برای جزئیات دقیق با ما تماس بگیرید.",
    faqTitle: "پرسش‌های متداول",
    faq1Question: "چه چیزی زعفران شما را متفاوت می‌سازد؟",
    faq1Answer:
      "زعفران ما صد درصد خالص است و به‌صورت دستی در هرات افغانستان برداشت می‌شود. ما از روش‌های سنتی برای تضمین بالاترین کیفیت و طعم استفاده می‌کنیم. هر رشته با دقت از نظر عطر، رنگ و مزه انتخاب می‌شود تا گزینه‌ای ممتاز برای مصرف غذایی و دارویی باشد.",
    faq2Question: "چگونه زعفران خالص را تشخیص دهیم؟",
    faq2Answer:
      "زعفران اصل: در آب گرم به‌آهستگی رنگ زرد طلایی آزاد می‌کند (بیش از ۱۵ دقیقه)، بوی شیرین و معطر دارد، مزه آن کمی تلخ است، رشته‌ها شیپوری هستند و هنگام مالیدن پوست را زرد می‌کنند. زعفران تقلبی: آب را فوری سرخ می‌کند، بویی ندارد، مزه شیرین دارد و رشته‌ها نازک و یکدست هستند.",
    faq3Question: "سیاست بازگشت شما چیست؟",
    faq3Answer:
      "ما برای محصولات بازنشده تا ۱۴ روز امکان بازگشت را می‌پذیریم. برای آغاز روند بازگشت با ما تماس بگیرید.",
    shopHeroEyebrow: "تحت مالکیت زنان از سال ۲۰۲۳",
    shopHeroTitleLine1: "زعفران قابل رهگیری افغان",
    shopHeroTitleLine2: "زعفران",
    shopHeroSubtitle:
      "زعفران ممتاز هرات که توسط شرکت زراعتی و مالداری مرغهوب هری فرآوری، خشک، درجه‌بندی، پاک‌سازی و بسته‌بندی می‌شود.",
    shopNowButton: "همین حالا خرید کنید",
    shopCollectionTitle: "مجموعه مرغهوب هری",
    shopCollectionSubtitle:
      "زعفران ممتاز از شرکت زراعتی مرغهوب هری — تحت مالکیت زنان، متعهد به کیفیت، از هرات",
    shopTrustLine: "✓ تحت مالکیت زنان — ✓ آزمایش‌شده در لابراتوار — ✓ مستقیم از هرات",
    pushalGradeA: "پوشال درجه الف",
    pushalGradeB: "پوشال درجه ب",
    superNeginLabel: "سوپر نگین",
    neginLabel: "نگین",
    pushalLabel: "پوشال",
    sortFeatured: "مرتب‌سازی: ویژه",
    sortLowHigh: "قیمت: از کم به زیاد",
    sortHighLow: "قیمت: از زیاد به کم",
    sortTopRated: "بیشترین امتیاز",
    noProductsFound: "محصولی یافت نشد",
    backToShop: "بازگشت به فروشگاه",
    yourCartTitle: "سبد خرید شما",
    orderSummaryTitle: "خلاصه سفارش",
    subtotalLabel: "جمع جزء",
    shippingLabel: "هزینه ارسال",
    negotiableLabel: "قابل مذاکره",
    totalLabel: "مجموع",
    fullNameLabel: "نام کامل",
    fullNamePlaceholder: "جان دو",
    phoneNumberLabel: "شماره تماس",
    phonePlaceholder: "+9370000000",
    deliveryAddressLabel: "آدرس تحویل",
    addressPlaceholder: "جاده اصلی ۱۲۳، شهر، کشور",
    placeOrderButton: "ثبت سفارش",
    orderPlacedSuccess: "سفارش با موفقیت ثبت شد!",
    cartLabel: "سبد خرید",
    addedToCartToast: "به سبد خرید افزوده شد!",
    galleryHeroTitle: "گالری ما",
    galleryHeroSubtitle: "از مزرعه تا محصول نهایی.",
    galleryExplore: "ببینید",
    galleryIntroHeading: "سفر زعفران",
    galleryIntroText:
      "از کشتزارهای حاصل‌خیز ولایت هرات، زعفران ما سفری دقیق را طی می‌کند — در سپیده‌دم با دست چیده می‌شود، با دقت خشک می‌گردد و به گونه‌ای حرفه‌ای بسته‌بندی می‌شود تا عطر، طعم و رنگ استثنایی آن برای بازارهای سراسر جهان حفظ شود.",
    galleryFilterAll: "همه",
    galleryFilterFields: "مزارع زعفران",
    galleryFilterHarvesting: "برداشت",
    galleryFilterProcessing: "فرآوری",
    galleryFilterPackaging: "بسته‌بندی",
    galleryLoadMore: "بیشتر",
    gallery: "گالری",
    shop: "فروشگاه",
    contact: "تماس",
    exploreProducts: "محصولات را ببینید",
    premiumSaffronServices: "خدمات ممتاز زعفران",
    exploreServices: "کاوش خدمات",
    sendUsMessage: "برای ما پیام بفرستید",
    email: "ایمیل",
    message: "پیام",
    sendMessage: "ارسال پیام",
    privacyPolicy: "سیاست حفظ حریم خصوصی",
    termsOfService: "شرایط خدمات",
    validEmailFeedback: "لطفاً یک ایمیل معتبر وارد کنید.",
    messageFeedback: "لطفاً پیام خود را وارد کنید.",
    sendingLabel: "در حال ارسال...",
    brandTagline: "زعفران هرات",
    heroTitle: "توانمندسازی کشاورزی افغانستان",
    heroDesc:
      "برتری به رهبری زنان در فرآوری زعفران، افزودن ارزش و توسعه پایدار کشاورزی در استان هرات.",
    saffronHeroTitle: "توانمندسازی زنان از طریق زعفران",
    qualityAnalysis: "تحلیل کیفیت",
    coloringStrength: "قدرت رنگ‌دهی",
    aromaIntensity: "شدت عطر",
    aromaIntensitySafranal: "شدت عطر (سافرانال)",
    flavorProfile: "نمایه طعم",
    flavorProfilePicrocrocin: "نمایه طعم (پیکروکروسین)",
    moistureAnalysis: "تحلیل رطوبت",
    purityMoistureAnalysis: "تحلیل خلوص و رطوبت",
    purityMoisture: "خلوص و رطوبت",
    journeyTitle: "سفر زعفران ما",
    cultivationCard: "کشت",
    harvestingCard: "برداشت",
    dryingProcessingCard: "خشک کردن و فرآوری",
    gradingQualityControl: "درجه‌بندی و کنترل کیفیت",
    packagingCard: "بسته‌بندی",
    packagingNote:
      "بسته‌بندی مناسب به حفظ تازگی و ایمنی زعفران تا زمان رسیدن به مشتریان کمک می‌کند.",
    cultivationJourneyText:
      "\u06a9\u0634\u062a \u0632\u0639\u0641\u0631\u0627\u0646 \u0634\u0627\u0645\u0644 \u06a9\u0627\u0634\u062a \u067e\u06cc\u0627\u0632\u0647\u0627 \u062f\u0631 \u062e\u0627\u06a9 \u0628\u0627 \u0632\u0647\u06a9\u0634\u06cc \u0645\u0646\u0627\u0633\u0628 \u0627\u0633\u062a \u06a9\u0647 \u0645\u0639\u0645\u0648\u0644\u0627\u064b \u062f\u0631 \u0627\u0648\u0627\u062e\u0631 \u062a\u0627\u0628\u0633\u062a\u0627\u0646 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0627\u06cc\u0646 \u06af\u06cc\u0627\u0647 \u0628\u0647 \u0622\u0628\u200c\u0648\u0647\u0648\u0627\u06cc \u062e\u0634\u06a9 \u0648 \u0622\u0641\u062a\u0627\u0628\u06cc \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u062f \u0648 \u063a\u0627\u0644\u0628\u0627\u064b \u062f\u0631 \u0645\u0646\u0627\u0637\u0642\u06cc \u0628\u0627 \u062a\u0627\u0628\u0633\u062a\u0627\u0646\u200c\u0647\u0627\u06cc \u06af\u0631\u0645 \u0648 \u0632\u0645\u0633\u062a\u0627\u0646\u200c\u0647\u0627\u06cc \u0633\u0631\u062f \u067e\u0631\u0648\u0631\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u067e\u06cc\u0627\u0632\u0647\u0627 \u062f\u0631 \u0639\u0645\u0642 \u062d\u062f\u0648\u062f \u06f1\u06f0 \u062a\u0627 \u06f1\u06f5 \u0633\u0627\u0646\u062a\u06cc\u200c\u0645\u062a\u0631 \u0648 \u0628\u0627 \u0641\u0627\u0635\u0644\u0647 \u06f2\u06f0 \u062a\u0627 \u06f3\u06f0 \u0633\u0627\u0646\u062a\u06cc\u200c\u0645\u062a\u0631 \u06a9\u0627\u0634\u062a \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u062a\u0627 \u0641\u0636\u0627\u06cc \u06a9\u0627\u0641\u06cc \u0628\u0631\u0627\u06cc \u0631\u0634\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u0646\u062f.",
    harvestingJourneyText:
      "\u0628\u0631\u062f\u0627\u0634\u062a \u0632\u0639\u0641\u0631\u0627\u0646 \u0641\u0631\u0622\u06cc\u0646\u062f\u06cc \u06a9\u0627\u0631\u0628\u0631 \u0627\u0633\u062a \u06a9\u0647 \u062f\u0631 \u0641\u0635\u0644 \u067e\u0627\u06cc\u06cc\u0632 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f. \u06a9\u0644\u0627\u0644\u0647\u200c\u0647\u0627\u06cc \u0633\u0631\u062e \u0648 \u0638\u0631\u06cc\u0641 \u0627\u0632 \u06af\u0644\u200c\u0647\u0627\u06cc \u06a9\u0631\u0648\u06a9\u0648\u0633 \u0628\u0627 \u062f\u0633\u062a \u0686\u06cc\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f\u060c \u0645\u0639\u0645\u0648\u0644\u0627\u064b \u062f\u0631 \u0635\u0628\u062d \u0632\u0648\u062f \u062a\u0627 \u06a9\u06cc\u0641\u06cc\u062a \u0622\u0646\u200c\u0647\u0627 \u062d\u0641\u0638 \u0634\u0648\u062f. \u0628\u0631\u0627\u06cc \u062a\u0648\u0644\u06cc\u062f \u0641\u0642\u0637 \u06cc\u06a9 \u06a9\u06cc\u0644\u0648\u06af\u0631\u0645 \u0632\u0639\u0641\u0631\u0627\u0646 \u062d\u062f\u0648\u062f \u06f1\u06f5\u06f0,\u06f0\u06f0\u06f0 \u06af\u0644 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a\u060c \u06a9\u0647 \u0622\u0646 \u0631\u0627 \u0628\u0647 \u06cc\u06a9\u06cc \u0627\u0632 \u06af\u0631\u0627\u0646\u200c\u0628\u0647\u0627\u062a\u0631\u06cc\u0646 \u0627\u062f\u0648\u06cc\u0647\u200c\u0647\u0627\u06cc \u062c\u0647\u0627\u0646 \u062a\u0628\u062f\u06cc\u0644 \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a.",
    dryingProcessingJourneyText:
      "\u067e\u0633 \u0627\u0632 \u0628\u0631\u062f\u0627\u0634\u062a\u060c \u06a9\u0644\u0627\u0644\u0647\u200c\u0647\u0627 \u0628\u0647\u200c\u062f\u0642\u062a \u062e\u0634\u06a9 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u062a\u0627 \u0637\u0639\u0645\u060c \u0639\u0637\u0631 \u0648 \u0631\u0646\u06af \u0622\u0646\u200c\u0647\u0627 \u062d\u0641\u0638 \u0634\u0648\u062f. \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0645\u0639\u0645\u0648\u0644\u0627\u064b \u0628\u0627 \u062d\u0631\u0627\u0631\u062a \u0645\u0644\u0627\u06cc\u0645 \u06cc\u0627 \u062e\u0634\u06a9 \u06a9\u0631\u062f\u0646 \u062f\u0631 \u0622\u0641\u062a\u0627\u0628 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0641\u0631\u0622\u06cc\u0646\u062f \u062e\u0634\u06a9 \u06a9\u0631\u062f\u0646 \u0628\u0633\u06cc\u0627\u0631 \u0645\u0647\u0645 \u0627\u0633\u062a\u060c \u0686\u0631\u0627 \u06a9\u0647 \u0645\u0633\u062a\u0642\u06cc\u0645\u0627\u064b \u0628\u0631 \u06a9\u06cc\u0641\u06cc\u062a \u0632\u0639\u0641\u0631\u0627\u0646 \u0627\u062b\u0631 \u0645\u06cc\u200c\u06af\u0630\u0627\u0631\u062f. \u067e\u0633 \u0627\u0632 \u062e\u0634\u06a9 \u0634\u062f\u0646\u060c \u06a9\u0644\u0627\u0644\u0647\u200c\u0647\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u06a9\u06cc\u0641\u06cc\u062a \u062f\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc \u0648 \u062c\u062f\u0627 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0648 \u0633\u067e\u0633 \u0628\u0631\u0627\u06cc \u0641\u0631\u0648\u0634 \u0628\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.",
    gradingQualityControlJourneyText:
      "\u062f\u0631\u062c\u0647\u200c\u0628\u0646\u062f\u06cc \u0632\u0639\u0641\u0631\u0627\u0646 \u0634\u0627\u0645\u0644 \u0627\u0631\u0632\u06cc\u0627\u0628\u06cc \u06a9\u06cc\u0641\u06cc\u062a \u0622\u0646 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0639\u0648\u0627\u0645\u0644\u06cc \u0645\u0627\u0646\u0646\u062f \u0631\u0646\u06af\u060c \u0639\u0637\u0631 \u0648 \u0637\u0639\u0645 \u0627\u0633\u062a. \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f ISO 3632 \u0639\u0645\u0648\u0645\u0627\u064b \u0628\u0631\u0627\u06cc \u062f\u0631\u062c\u0647\u200c\u0628\u0646\u062f\u06cc \u0632\u0639\u0641\u0631\u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u0622\u0646 \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u063a\u0644\u0638\u062a \u062a\u0631\u06a9\u06cc\u0628\u0627\u062a \u06a9\u0644\u06cc\u062f\u06cc \u0645\u0627\u0646\u0646\u062f \u06a9\u0631\u0648\u0633\u06cc\u0646 (\u0631\u0646\u06af)\u060c \u0633\u0627\u0641\u0631\u0627\u0646\u0627\u0644 (\u0639\u0637\u0631) \u0648 \u067e\u06cc\u06a9\u0631\u0648\u06a9\u0631\u0648\u0633\u06cc\u0646 (\u0637\u0639\u0645) \u0628\u0647 \u062f\u0631\u062c\u0627\u062a \u0645\u062e\u062a\u0644\u0641 \u062a\u0642\u0633\u06cc\u0645 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0627\u0642\u062f\u0627\u0645\u0627\u062a \u06a9\u0646\u062a\u0631\u0644 \u06a9\u06cc\u0641\u06cc\u062a \u0628\u0631\u0627\u06cc \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0627\u0632 \u0627\u06cc\u0646\u06a9\u0647 \u0632\u0639\u0641\u0631\u0627\u0646 \u067e\u06cc\u0634 \u0627\u0632 \u0635\u0627\u062f\u0631 \u0634\u062f\u0646 \u0628\u0647 \u0628\u0627\u0632\u0627\u0631\u0647\u0627\u06cc \u062c\u0647\u0627\u0646\u06cc \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f\u0647\u0627\u06cc \u0644\u0627\u0632\u0645 \u0631\u0627 \u0628\u0631\u0622\u0648\u0631\u062f\u0647 \u06a9\u0646\u062f\u060c \u0627\u062c\u0631\u0627 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.",
    packagingJourneyText:
      "\u0632\u0639\u0641\u0631\u0627\u0646 \u062f\u0631 \u0638\u0631\u0641\u200c\u0647\u0627\u06cc \u062a\u0645\u06cc\u0632 \u0648 \u0636\u062f \u0631\u0637\u0648\u0628\u062a \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u062a\u0627 \u06a9\u06cc\u0641\u06cc\u062a \u0622\u0646 \u062f\u0631 \u0637\u0648\u0644 \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u0648 \u062d\u0645\u0644\u200c\u0648\u0646\u0642\u0644 \u062d\u0641\u0638 \u0634\u0648\u062f. \u0628\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc \u0628\u0647\u200c\u06af\u0648\u0646\u0647\u200c\u0627\u06cc \u0637\u0631\u0627\u062d\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u06a9\u0644\u0627\u0644\u0647\u200c\u0647\u0627\u06cc \u0638\u0631\u06cc\u0641 \u0631\u0627 \u0627\u0632 \u0646\u0648\u0631\u060c \u0647\u0648\u0627 \u0648 \u0631\u0637\u0648\u0628\u062a \u0645\u062d\u0627\u0641\u0638\u062a \u06a9\u0646\u062f \u06a9\u0647 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u06a9\u06cc\u0641\u06cc\u062a \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u06a9\u0627\u0647\u0634 \u062f\u0647\u062f. \u067e\u0633 \u0627\u0632 \u0628\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc\u060c \u0628\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc \u0645\u0646\u0627\u0633\u0628 \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u062f \u062a\u0627 \u0632\u0639\u0641\u0631\u0627\u0646 \u062a\u0627 \u0632\u0645\u0627\u0646 \u0631\u0633\u06cc\u062f\u0646 \u0628\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u062a\u0627\u0632\u0647 \u0648 \u0627\u06cc\u0645\u0646 \u0628\u0645\u0627\u0646\u062f.",
    qualityAnalysisDetails: "جزئیات تحلیل کیفیت",
    qualityAssessmentDescription:
      "ارزیابی کیفیت زعفران بر اساس پارامترهای مختلف",
    discoverQualitySaffron: "بهترین زعفران با کیفیت از سراسر جهان را کشف کنید",
    qualityAnalysisOfSaffron: "تحلیل کیفیت زعفران",
    step1Title: "مرحله ۱: قدرت رنگ‌دهی",
    step2Title: "مرحله ۲: شدت عطر (سافرانال)",
    step3Title: "مرحله ۳: نمایه طعم (پیکروکروسین)",
    step4Title: "مرحله ۴: تحلیل خلوص و رطوبت",
    purposeLabel: "هدف:",
    methodLabel: "روش:",
    resultLabel: "نتیجه:",
    step1Label: "مرحله ۱:",
    step2Label: "مرحله ۲:",
    step3Label: "مرحله ۳:",
    step4Label: "مرحله ۴:",
    step1Purpose: "برای ارزیابی شدت رنگ زعفران",
    step1Method: "تحلیل رنگ‌سنجی",
    step1Result: "نتایج شدت رنگ نمونه زعفران را نشان می‌دهد",
    coloringStrengthDetail:
      "قدرت رنگ‌دهی نشان می‌دهد که رنگ زعفران هنگام افزودن به آب یا غذا چقدر قوی است. زعفران با کیفیت بالا رنگ زرد طلایی روشن تولید می‌کند حتی زمانی که مقدار کمی استفاده می‌شود. این قدرت رنگ‌دهی از یک ترکیب طبیعی در زعفران به نام کروسین به وجود می‌آید. هرچه قدرت رنگ‌دهی بیشتر باشد، زعفران بهتر و ارزشمندتر محسوب می‌شود.",
    saffronAromaText: "سافرانال کیفیت عطر زعفران را تعریف می‌کند.",
    controlledDrying: "خشک کردن کنترل‌شده",
    dryingImprovesAroma:
      "خشک شدن عطر را بهبود می‌بخشد و در عین حال ترکیبات را حفظ می‌کند.",
    premiumGrade: "درجه ممتاز",
    strongCleanAroma: "عطر قوی و پاک نشان‌دهنده کیفیت بالا است.",
    step2Purpose: "اندازه‌گیری کیفیت عطر و تازگی",
    step2Method: "ارزیابی حسی و ترکیبی آزمایشگاهی",
    step2Result: "عطر قوی و پاک در دسته‌های ممتاز",
    aromaIntensityDetail:
      "سافرانال مسئول عطر زعفران است. سافرانال بیشتر معمولاً به معنای عطر بهتر و تازگی بیشتر است. اگر شرایط نگهداری نامناسب باشد، عطر سریعاً کاهش می‌یابد. این مرحله تأیید می‌کند که زعفران بوی طبیعی مورد انتظار را بدون بوی کهنگی یا مصنوعی دارد.",
    picrocrocinTaste: "پیکروکروسین به طعم متمایز زعفران کمک می‌کند.",
    authenticTasteLabel: "طعم اصیل",
    authenticTaste: "تلخی متعادل نشان‌دهنده زعفران واقعی است.",
    consistencyLabel: "ثبات",
    flavorConsistency: "طعم در سراسر دسته‌های تولیدی پایدار می‌ماند.",
    step3Purpose: "تأیید طعم اصیل زعفران",
    step3Method: "ارزیابی ترکیبی و حسی در سطح ترکیب",
    step3Result: "طعم پاک با تعادل مناسب تلخی",
    flavorProfileDetail:
      "پیکروکروسین طعم خاص زعفران را ارائه می‌دهد. نمایه طعم خوب به این معنی است که زعفران خالص و به درستی فرآوری شده است. طعم ضعیف یا نامنظم می‌تواند نشان‌دهنده خشک کردن ضعیف یا تقلب باشد. این مرحله کیفیت آشپزی و اصالت محصول را تأیید می‌کند.",
    finalSafeguard: "ضمانت نهایی برای عمر قفسه و کیفیت صادرات.",
    moistureControl: "کنترل رطوبت",
    lowMoistureText: "رطوبت پایین از کپک و افت کیفیت جلوگیری می‌کند.",
    purityVerification: "تأیید خلوص",
    noAdulterationText: "هیچ تقلب یا ذرات خارجی وجود ندارد.",
    step4Purpose: "حفاظت از ایمنی، کیفیت و عمر نگهداری",
    step4Method: "آزمایش‌های آزمایشگاهی برای رطوبت و آلاینده‌ها",
    step4Result: "رشته‌های تمیز و کیفیت ذخیره‌سازی پایدار",
    purityMoistureDetail:
      "این مرحله اطمینان می‌دهد که زعفران تمیز، خشک و برای نگهداری طولانی‌مدت ایمن است. رطوبت بالا ممکن است باعث کپک و کاهش کیفیت شود. بررسی‌های خلوص تأیید می‌کند که هیچ رنگ مصنوعی، ماده خارجی یا تقلبی قبل از بسته‌بندی و صادرات وجود ندارد.",
    labTitle: "آزمایشگاه داخلی",
    labSectionText1:
      "فرآیند کنترل کیفیت ما استانداردهای بین‌المللی زعفران را دنبال می‌کند. تمام دسته‌ها قبل از بسته‌بندی و صادرات آزمایش می‌شوند.",
    batchTraceability: "سیستم ردیابی دسته‌ای",
    visualInspection: "بازرسی بصری",
    moistureAnalysisLabel: "تحلیل رطوبت",
    laboratoryChemicalEvaluation: "ارزیابی شیمیایی آزمایشگاهی",
    finalApprovalLabel: "تأیید نهایی قبل از بسته‌بندی",
    labSectionText2:
      "روش‌های ما مطابق با استانداردهای بین‌المللی کیفیت از جمله",
    closeButton: "بستن",
    hero_badge: "خدمات ممتاز زعفران",
    hero_cta: "کاوش خدمات",
    services_title: "توانمندی‌های ما",
    services_subtitle:
      "راه‌حل‌های جامع زنجیره ارزش زعفران با استانداردهای کیفیت بین‌المللی و توانمندسازی اقتصادی زنان.",
    aboutHeaderSubtitle: "برتری زعفران متعلق به زنان",
    aboutHeaderTitle: "مرغوب هرات",
    aboutHeaderText:
      "رهبری زنجیره ارزش زعفران با تضمین کیفیت، کشاورزی پایدار و توانمندسازی اقتصادی زنان در افغانستان.",
    aboutSaffron: "درباره زعفران",
    aboutSaffronDesc:
      "زعفران ما با کیفیت بالا و از بهترین مزارع در افغانستان تهیه می شود.",
    companyOverview: "بررسی شرکت",
    companyOverviewText1:
      "مرغوب هرات یک تولید کننده زعفران متعلق به زنان است که بر کیفیت ممتاز، کشاورزی پایدار و فرآوری ارزش افزوده تمرکز دارد.",
    companyOverviewText2:
      "از مزرعه تا بازار، ما کشاورزان محلی را توانمند می‌سازیم و از استانداردهای بهداشتی تولید، ردیابی و تجارت اخلاقی دفاع می‌کنیم.",
    womenLedTag: "تحت رهبری زنان",
    est2023Tag: "تأسیس ۲۰۲۳",
    heratProvinceTag: "ولایت هرات",
    valueChainExpertise: "تخصص زنجیره ارزش",
    fullValueChainOperations: "عملیات کامل زنجیره ارزش",
    allStagesBadge: "از بذرافشانی تا فروش",
    cultivationExportPrep:
      "کشت، برداشت و آماده‌سازی صادرات تحت یک مدیریت واحد.",
    fullValueChainDesc:
      "ما هر مرحله تولید زعفران را کنترل می‌کنیم و کیفیت مداوم را از کشت تا صادرات تضمین می‌کنیم.",
    qualityControlSystems: "سیستم‌های کنترل کیفیت",
    advancedBadge: "پیشرفته",
    qualityControlDesc:
      "پروتکل‌های ما شامل تحلیل آزمایشگاهی، درجه‌بندی و نگهداری ایمن برای مطابقت با مشخصات خریدار است.",
    marketOrientation: "جهت‌گیری بازار",
    exportReadyBadge: "آماده صادرات",
    marketOrientationDesc:
      "ما تولید را بر اساس تقاضای بین‌المللی تنظیم می‌کنیم و در عین حال منشاء محلی و اصالت را حفظ می‌کنیم.",
    farmerPartnerships: "شراکت با کشاورزان",
    farmerPartnershipsDesc:
      "روابط قوی میدانی با زنان کشاورز از بهره‌وری، قیمت‌گذاری عادلانه و منبع‌یابی قابل اعتماد حمایت می‌کند.",
    womenFarmersTag: "زنان کشاورز",
    smallholderFarmersLabel: "کشاورزان خرد",
    fairPricingSystemLabel: "سیستم قیمت‌گذاری",
    guaranteedPurchaseMechanismsLabel: "مکانیسم‌های خرید تضمینی",
    fairTradeTag: "تجارت عادلانه",
    incomeStabilityTag: "ثبات درآمد",
    institutionalCapacity: "ظرفیت نهادی",
    institutionalCapacityDesc:
      "یک تیم ساختارمند مدیریت قرارداد، نظارت مالی و هماهنگی شریک را ارائه می‌دهد.",
    projectContractsLabel: "قراردادهای پروژه",
    worldVisionLabel: "ورلد ویژن",
    partnerNgoLabel: "سازمان غیردولتی شریک",
    procurementTag: "تأمین",
    supplyChainTag: "زنجیره تأمین",
    implementationPartnerTag: "شریک پیاده‌سازی",
    aboutMissionTitle: "ماموریت ما",
    aboutMissionText:
      "پرورش یک کسب و کار زعفران پویا که کشاورزان را توانمند کرده و رفاه پایدار محلی را ایجاد کند.",
    aboutMissionSubtext:
      "ما کیفیت، شفافیت و درآمد پایدار را در مرکز هر همکاری و فرایند قرار می‌دهیم.",
    missionBullet1: "افزایش درآمد کشاورزان از طریق تأمین عادلانه.",
    missionBullet2: "تولید زعفران ممتاز با ردیابی قابل تایید.",
    missionBullet3: "تقویت معیشت روستایی از طریق کشاورزی اخلاقی.",
    projectImplementation: "اجرای پروژه",
    procurementSupplyChain: "تأمین و زنجیره تأمین",
    supplierBadge: "تأمین‌کننده",
    inputsDistribution:
      "توزیع نهاده‌ها و پشتیبانی محصول مستقیماً به مزارع شریک ارائه می‌شود.",
    procurementDesc:
      "ما هماهنگی تأمین مواد اولیه، لوازم میدانی و مدیریت عرضه را برای تولید مداوم انجام می‌دهیم.",
    logisticsCoordination: "لجستیک و هماهنگی",
    managerBadge: "مدیر",
    logisticsDesc:
      "انبارداری، حمل و نقل و توزیع آخرین مایل را با رعایت کیفیت، تحویل به موقع و گزارش‌دهی مالی دقیق مدیریت می‌کند.",
    donorCompliance: "رعایت حامیان مالی",
    standardBadge: "استاندارد",
    donorComplianceDesc:
      "پایبندی کامل به استانداردهای بین‌المللی تأمین، مدیریت ریسک عملیاتی و گزارش‌دهی منطبق با حامیان مالی برای ورلد ویژن اینترنشنال و RSDO.",
    coreValuesTitle: "ارزش‌های اصلی",
    womenEmpowerment: "توانمندسازی زنان",
    womenEmpowermentDesc: "فرصت‌های اقتصادی و رهبری",
    sustainability: "پایداری",
    sustainabilityDesc: "روش‌های کشاورزی سازگار با محیط زیست",
    excellence: "برتری",
    excellenceDesc: "استانداردهای کیفیت ممتاز",
    partnership: "شراکت",
    partnershipDesc: "عملکرد منصفانه و شفاف",
    qualityAssurance: "تضمین کیفیت",
    qualityAssuranceDesc:
      "هر دسته تحت پروتکل‌های کیفیت سختگیرانه با استانداردهای بهداشتی بهبود یافته و سیستم‌های کنترل ساختار یافته برای اطمینان از برتری مداوم قرار می‌گیرد.",
    postHarvestHandling: "مدیریت پس از برداشت",
    standardizedHygienic: "استاندارد و بهداشتی",
    dryingProcessing: "خشک کردن و فرآوری",
    controlledEnvironment: "محیط کنترل شده",
    gradingCleaning: "درجه‌بندی و پاک‌سازی",
    premiumStandardsMet: "استانداردهای ممتاز رعایت شد",
    qualityPurity: "کیفیت و خلوص",
    qualityPurityDesc:
      "ما زعفران خالص و اصیل را بدون افزودنی و پرکننده ارائه می‌دهیم تا بالاترین کیفیت را برای مشتریان خود تضمین کنیم.",
    sustainableFarming: "کشاورزی پایدار",
    sustainableFarmingDesc:
      "ما به روش‌های کشاورزی پایدار متعهد هستیم که از محیط زیست محافظت کرده و از جوامع محلی حمایت می‌کنند.",
    authenticHeritage: "میراث اصیل",
    authenticHeritageDesc:
      "زعفران ما با روش‌های سنتی که از نسل‌ها به ارث رسیده است کشت می‌شود و میراث غنی کشاورزی افغانستان را حفظ می‌کند.",
    seeMore: "بیشتر ببینید",
    ourFoundation: "بنیاد ما",
    missionVision: "ماموریت و چشم‌انداز",
    missionTitle: "ماموریت ما",
    missionText:
      "ارائه بهترین زعفران افغانی در جهان، با احترام به کشاورزان و حفظ سنت‌های کشت چندصدساله. ما به کشاورزی پایدار، تجارت عادلانه و کیفیت اصیل اعتقاد داریم.",
    visionTitle: "چشم‌انداز ما",
    visionText:
      "ما می‌خواهیم به معیار جهانی برای زعفران ممتاز و با منبع اخلاقی تبدیل شویم. آینده‌ای را می‌بینیم که هر رشته داستانی از اشتیاق، میراث و برتری را بیان کند.",
    ourCommitment: "تعهد ما",
    whyChoose: "چرا زعفران را انتخاب کنید",
    pureNatural: "100% خالص و طبیعی",
    pureNaturalText:
      "بدون افزودنی، پرکننده یا مواد مصنوعی. رشته‌های زعفران خالص مستقیماً از مزارع ما به سفره شما.",
    awardQuality: "کیفیت برنده جوایز",
    awardQualityText:
      "گواهی شده و به صورت جهانی برای رنگ، عطر و قدرت عالی شناخته شده است. زعفران ما بالاترین استانداردهای بین المللی را دارد.",
    farmerEmpowerment: "توانمندسازی کشاورزان",
    farmerEmpowermentText:
      "ما پرداخت عادلانه و روش‌های پایدار را برای شرکای کشاورزی خود تضمین می‌کنیم و از جوامعی حمایت می‌کنیم که قرن‌ها زعفران پرورش داده‌اند.",
    premiumPackaging: "بسته‌بندی ممتاز",
    premiumPackagingText:
      "بسته‌بندی زیبا و عایق که تازگی و عطر را حفظ می‌کند. هر جعبه اثری هنری است که میراث برند ما را منعکس می‌کند.",
    fastDelivery: "تحویل سریع و امن",
    fastDeliveryText:
      "ارسال جهانی با کنترل دما. زعفران شما تازه، محافظت شده و به موقع می‌رسد - تضمین شده.",
    certifiedTrusted: "مجاز و مورد اعتماد",
    certifiedTrustedText:
      "با گواهی ISO آزمایش شده برای خلوص و اصالت. مورد اعتماد سرآشپزها، متخصصان تغذیه و علاقه مندان به زعفران در سراسر جهان.",
    footerBrandName: "Merghob Saffron",
    footerTagline:
      "زعفران خالص افغان با دقت برداشت شده و با اعتماد تحویل داده می‌شود. ماهیت اصالت در هر رشته.",
    quickLinks: "پیوندهای سریع",
    aboutUs: "درباره ما",
    getInTouch: "با ما در تماس باشید",
    stayConnected: "در ارتباط بمانید",
    locationText: "\u0647\u0631\u0627\u062a\u060c \u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646",
    newsletterText:
      "به‌روزرسانی‌های برداشت‌های جدید، پیشنهادات ویژه و داستان‌های زعفران را دریافت کنید.",
    newsletterPlaceholder: "آدرس ایمیل شما",
    subscribe: "عضویت",
    subscribeSuccess: "از شما برای عضویت متشکریم!",
    premiumQuality: "کیفیت ممتاز",
    copyrightText: "© 2025 زعفران. کلیه حقوق محفوظ است.",
    heroTitle: "توانمندسازی کشاورزی افغانستان",
    heroDesc:
      "برتری به رهبری زنان در فرآوری زعفران، افزودن ارزش و توسعه پایدار کشاورزی در استان هرات.",
    saffronHeroTitle: "توانمندسازی زنان از طریق زعفران",
    qualityAnalysis: "تحلیل کیفیت",
    coloringStrength: "قدرت رنگ‌دهی",
    aromaIntensity: "شدت عطر",
    aromaIntensitySafranal: "شدت عطر (سافرانال)",
    flavorProfile: "نمایه طعم",
    flavorProfilePicrocrocin: "نمایه طعم (پیکروکروسین)",
    moistureAnalysis: "تحلیل رطوبت",
    purityMoistureAnalysis: "تحلیل خلوص و رطوبت",
    purityMoisture: "خلوص و رطوبت",
    journeyTitle: "سفر زعفران ما",
    cultivationCard: "کشت",
    harvestingCard: "برداشت",
    dryingProcessingCard: "خشک کردن و فرآوری",
    gradingQualityControl: "درجه‌بندی و کنترل کیفیت",
    packagingCard: "بسته‌بندی",
    packagingNote:
      "بسته‌بندی مناسب به حفظ تازگی و ایمنی زعفران تا زمان رسیدن به مشتریان کمک می‌کند.",
    qualityAnalysisDetails: "جزئیات تحلیل کیفیت",
    qualityAssessmentDescription:
      "ارزیابی کیفیت زعفران بر اساس پارامترهای مختلف",
    discoverQualitySaffron: "بهترین زعفران با کیفیت از سراسر جهان را کشف کنید",
    qualityAnalysisOfSaffron: "تحلیل کیفیت زعفران",
    step1Title: "مرحله ۱: قدرت رنگ‌دهی",
    step2Title: "مرحله ۲: شدت عطر (سافرانال)",
    step3Title: "مرحله ۳: نمایه طعم (پیکروکروسین)",
    step4Title: "مرحله ۴: تحلیل خلوص و رطوبت",
    purposeLabel: "هدف:",
    methodLabel: "روش:",
    resultLabel: "نتیجه:",
    step1Label: "مرحله ۱:",
    step2Label: "مرحله ۲:",
    step3Label: "مرحله ۳:",
    step4Label: "مرحله ۴:",
    step1Purpose: "برای ارزیابی شدت رنگ زعفران",
    step1Method: "تحلیل رنگ‌سنجی",
    step1Result: "نتایج شدت رنگ نمونه زعفران را نشان می‌دهد",
    coloringStrengthDetail:
      "قدرت رنگ‌دهی نشان می‌دهد که رنگ زعفران هنگام افزودن به آب یا غذا چقدر قوی است. زعفران با کیفیت بالا رنگ زرد طلایی روشن تولید می‌کند حتی زمانی که مقدار کمی استفاده می‌شود. این قدرت رنگ‌دهی از یک ترکیب طبیعی در زعفران به نام کروسین به وجود می‌آید. هرچه قدرت رنگ‌دهی بیشتر باشد، زعفران بهتر و ارزشمندتر محسوب می‌شود.",
    saffronAromaText: "سافرانال کیفیت عطر زعفران را تعریف می‌کند.",
    controlledDrying: "خشک کردن کنترل‌شده",
    dryingImprovesAroma:
      "خشک شدن عطر را بهبود می‌بخشد و در عین حال ترکیبات را حفظ می‌کند.",
    premiumGrade: "درجه ممتاز",
    strongCleanAroma: "عطر قوی و پاک نشان‌دهنده کیفیت بالا است.",
    step2Purpose: "اندازه‌گیری کیفیت عطر و تازگی",
    step2Method: "ارزیابی حسی و ترکیبی آزمایشگاهی",
    step2Result: "عطر قوی و پاک در دسته‌های ممتاز",
    aromaIntensityDetail:
      "سافرانال مسئول عطر زعفران است. سافرانال بیشتر معمولاً به معنای عطر بهتر و تازگی بیشتر است. اگر شرایط نگهداری نامناسب باشد، عطر سریعاً کاهش می‌یابد. این مرحله تأیید می‌کند که زعفران بوی طبیعی مورد انتظار را بدون بوی کهنگی یا مصنوعی دارد.",
    picrocrocinTaste: "پیکروکروسین به طعم متمایز زعفران کمک می‌کند.",
    authenticTasteLabel: "طعم اصیل",
    authenticTaste: "تلخی متعادل نشان‌دهنده زعفران واقعی است.",
    consistencyLabel: "ثبات",
    flavorConsistency: "طعم در سراسر دسته‌های تولیدی پایدار می‌ماند.",
    step3Purpose: "تأیید طعم اصیل زعفران",
    step3Method: "ارزیابی ترکیبی و حسی در سطح ترکیب",
    step3Result: "طعم پاک با تعادل مناسب تلخی",
    flavorProfileDetail:
      "پیکروکروسین طعم خاص زعفران را ارائه می‌دهد. نمایه طعم خوب به این معنی است که زعفران خالص و به درستی فرآوری شده است. طعم ضعیف یا نامنظم می‌تواند نشان‌دهنده خشک کردن ضعیف یا تقلب باشد. این مرحله کیفیت آشپزی و اصالت محصول را تأیید می‌کند.",
    finalSafeguard: "ضمانت نهایی برای عمر قفسه و کیفیت صادرات.",
    moistureControl: "کنترل رطوبت",
    lowMoistureText: "رطوبت پایین از کپک و افت کیفیت جلوگیری می‌کند.",
    purityVerification: "تأیید خلوص",
    noAdulterationText: "هیچ تقلب یا ذرات خارجی وجود ندارد.",
    step4Purpose: "حفاظت از ایمنی، کیفیت و عمر نگهداری",
    step4Method: "آزمایش‌های آزمایشگاهی برای رطوبت و آلاینده‌ها",
    step4Result: "رشته‌های تمیز و کیفیت ذخیره‌سازی پایدار",
    purityMoistureDetail:
      "این مرحله اطمینان می‌دهد که زعفران تمیز، خشک و برای نگهداری طولانی‌مدت ایمن است. رطوبت بالا ممکن است باعث کپک و کاهش کیفیت شود. بررسی‌های خلوص تأیید می‌کند که هیچ رنگ مصنوعی، ماده خارجی یا تقلبی قبل از بسته‌بندی و صادرات وجود ندارد.",
    labTitle: "آزمایشگاه داخلی",
    labSectionText1:
      "فرآیند کنترل کیفیت ما استانداردهای بین‌المللی زعفران را دنبال می‌کند. تمام دسته‌ها قبل از بسته‌بندی و صادرات آزمایش می‌شوند.",
    batchTraceability: "سیستم ردیابی دسته‌ای",
    visualInspection: "بازرسی بصری",
    moistureAnalysisLabel: "تحلیل رطوبت",
    laboratoryChemicalEvaluation: "ارزیابی شیمیایی آزمایشگاهی",
    finalApprovalLabel: "تأیید نهایی قبل از بسته‌بندی",
    labSectionText2:
      "روش‌های ما مطابق با استانداردهای بین‌المللی کیفیت از جمله",
    closeButton: "بستن",
    s1_desc:
      "فرآوری پیشرفته پس از برداشت با استانداردهای بهداشتی، جداسازی استیگما و تکنیک‌های خشک کردن ممتاز برای حفظ بهینه رنگ و عطر.",
    s2_title: "کنترل کیفیت و درجه‌بندی",
    s2_desc:
      "آزمایشگاه گواهی شده ISO برای سطوح کروسین، سافرانال و پیکروکروسین با سیستم‌های تضمین کیفیت ساختار یافته که خلوص درجه I را تضمین می‌کند.",
    s3_title: "بسته‌بندی و برندینگ",
    s3_desc:
      "راه حل‌های بسته‌بندی ممتاز و محافظتی طراحی شده برای حفظ عطر، رنگ و قدرت در حالی که استانداردهای صادرات بین المللی را رعایت می‌کند.",
    s4_title: "پشتیبانی کشاورزان و ارتباطات",
    s4_desc:
      "همکاری مستقیم با کشاورزان خرد و زنان از طریق مکانیسم‌های خرید تضمینی، قیمت‌گذاری عادلانه و راهنمایی فنی.",
    s5_title: "زنجیره تأمین و لجستیک",
    s5_desc:
      "ردیابی کامل، مدیریت زنجیره سرد و لجستیک سازگار که برتری محصول را از تولید تا بازارهای صادراتی تضمین می‌کند.",
    s6_title: "اجرای پروژه",
    s6_desc:
      "شریک پیاده‌سازی محلی با سابقه اثبات شده در اجرای پروژه‌های تأمین مالی شده توسط اهداکنندگان و اطمینان از نتایج توسعه قابل اندازه‌گیری.",
    cta_title: "رشد به رهبری زنان در کشاورزی افغانستان",
    cta_desc:
      "مرغوب هرات متعهد به بهبود معیشت، تقویت توانمندسازی اقتصادی زنان و ارائه زعفران با کیفیت به بازارهای جهانی است.",
    cta_btn: "با ما تماس بگیرید",
  },
};

function translateElement(el, lang) {
  const textContent = el.textContent
    ? el.textContent.replace(/\s+/g, " ").trim()
    : "";
  const derivedKey = TRANSLATION_KEYS[textContent];
  const key = el.dataset.i18n || el.dataset.translateKey || derivedKey;

  if (!key) return;
  if (!el.dataset.i18n && !el.dataset.translateKey && derivedKey) {
    el.dataset.translateKey = derivedKey;
  }

  const translated = TRANSLATIONS[lang]?.[key] || TRANSLATIONS.en?.[key];
  if (!translated) return;

  if (el.tagName.toLowerCase() === "input") {
    if (el.type === "submit" || el.type === "button") {
      el.value = translated;
    } else {
      el.placeholder = translated;
    }
  } else if (el.tagName.toLowerCase() === "textarea") {
    el.placeholder = translated;
  } else {
    setElementText(el, translated);
  }
}

function setElementText(el, translated) {
  if (!el.children.length) {
    el.textContent = translated;
    return;
  }

  const firstTextNode = Array.from(el.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  if (firstTextNode) {
    const leadingWhitespace =
      firstTextNode.textContent.match(/^\s*/) ?? [""];
    const trailingWhitespace =
      firstTextNode.textContent.match(/\s*$/) ?? [" "];

    firstTextNode.textContent = `${leadingWhitespace[0]}${translated}${
      trailingWhitespace[0] || " "
    }`;
    return;
  }

  el.insertBefore(document.createTextNode(`${translated} `), el.firstChild);
}

function applyTranslations(lang) {
  document
    .querySelectorAll("[data-i18n]")
    .forEach((el) => translateElement(el, lang));
  document
    .querySelectorAll("[data-translate-key]")
    .forEach((el) => translateElement(el, lang));

  const textTargets = document.querySelectorAll(
    ".nav-link, .dropdown-toggle, .dropdown-item, .mobile-link, .mobile-submenu-link, .premium-btn, a, h1, h2, h3, h4, h5, h6, p, span, #copyright-text, [data-i18n], button, input[type='submit'], input[type='button'], textarea",
  );

  textTargets.forEach((el) => translateElement(el, lang));
}

function setLang(lang) {
  const attr = lang === "dr" ? "data-dr" : "data-en";

  try {
    localStorage.setItem("zafaran-lang", lang);
  } catch (err) {
    // Ignore storage errors in restricted environments.
  }

  document.querySelectorAll("[data-en]").forEach((el) => {
    const val = el.getAttribute(attr);
    if (!val) return;

    if (el.id === "hero-title" || el.id === "hero-desc") {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  const tagline = document.getElementById("brand-tagline");
  if (tagline) {
    const translated =
      tagline.getAttribute(attr) || TRANSLATIONS[lang]?.brandTagline;
    if (translated) tagline.textContent = translated;
  }

  applyTranslations(lang);

  ["lang-en", "lang-dr", "mob-lang-en", "mob-lang-dr"].forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;

    btn.classList.toggle(
      "active",
      (lang === "en" && id.includes("en")) ||
        (lang === "dr" && id.includes("dr")),
    );
  });

  document.documentElement.dir = lang === "dr" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  document.dispatchEvent(
    new CustomEvent("languagechange", {
      detail: { lang },
    }),
  );
}

function initLanguage() {
  const savedLang = localStorage.getItem("zafaran-lang") || "en";
  setLang(savedLang);
}

function toggleMobileMenu() {
  const overlay = document.getElementById("mobileOverlay");
  const hamburger = document.getElementById("hamburgerBtn");
  if (!overlay || !hamburger) return;

  overlay.classList.toggle("open");
  hamburger.classList.toggle("active");
  document.body.style.overflow = overlay.classList.contains("open")
    ? "hidden"
    : "";
}

function closeMobileMenu() {
  const overlay = document.getElementById("mobileOverlay");
  const hamburger = document.getElementById("hamburgerBtn");
  if (!overlay || !hamburger) return;

  overlay.classList.remove("open");
  hamburger.classList.remove("active");
  document.body.style.overflow = "";
}

function toggleMobileSubmenu() {
  const submenu = document.getElementById("mobileSubmenu");
  const chevron = document.getElementById("mobileChevron");
  if (!submenu || !chevron) return;

  submenu.classList.toggle("open");
  chevron.style.transform = submenu.classList.contains("open")
    ? "rotate(180deg)"
    : "";
}

(function initNavbar() {
  const mainNav = document.getElementById("mainNav");

  if (mainNav) {
    window.addEventListener("scroll", () => {
      mainNav.classList.toggle("scrolled", window.scrollY > 30);
    });
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      document
        .querySelectorAll(".nav-link")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
})();

/* =========================
   FOOTER SCRIPT
   ========================= */

(function initFooter() {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  const subscribeForm = document.getElementById("subscribe-form");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = this.querySelector("input");
      const success = document.getElementById("sub-success");
      if (!input || !success) return;

      if (input.value.includes("@")) {
        success.classList.remove("hidden");
        input.value = "";
        setTimeout(() => success.classList.add("hidden"), 3000);
      }
    });
  }

  const fadeSections = document.querySelectorAll(".fade-section");
  if (fadeSections.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    fadeSections.forEach((el) => observer.observe(el));
  }
})();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLanguage);
} else {
  initLanguage();
}
