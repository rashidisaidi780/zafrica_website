import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { LanguageContext, type Language } from '@/lib/LanguageContext';

const translations: Record<string, string> = {
  English: 'Kiingereza',
  Swahili: 'Kiswahili',
  Language: 'Lugha',
  'Zafrica | Debt Collection, Auctioning & Recovery Services':
    'Zafrica | Ukusanyaji wa Madeni, Minada na Huduma za Urejeshaji',
  'Zafrica provides professional debt collection and recovery, auctioning of properties, repossession of vehicles and movable assets, eviction services, and private investigations.':
    'Zafrica hutoa huduma za kitaalamu za ukusanyaji na urejeshaji wa madeni, minada ya mali, urejeshaji wa magari na mali zinazohamishika, huduma za kuwaondoa wakaaji kisheria na uchunguzi binafsi.',
  'Zafrica home': 'Ukurasa wa mwanzo wa Zafrica',
  'Toggle menu': 'Fungua au funga menyu',
  'Zafrica service background': 'Picha ya huduma za Zafrica',
  'Visit Zafrica on Facebook': 'Tembelea Zafrica kwenye Facebook',
  'Visit Zafrica on Instagram': 'Tembelea Zafrica kwenye Instagram',
  'Illustrative sample portrait for': 'Picha ya mfano ya',
  Home: 'Nyumbani',
  About: 'Kuhusu Sisi',
  Services: 'Huduma',
  Contact: 'Wasiliana Nasi',
  FAQ: 'Maswali',
  Gallery: 'Picha',
  'Terms & Conditions': 'Vigezo na Masharti',
  'Auction service terms': 'Masharti ya huduma za mnada',
  'Debt collection terms': 'Masharti ya ukusanyaji wa madeni',
  'Repossession service terms': 'Masharti ya huduma za urejeshaji wa mali',
  'Auction services': 'Huduma za mnada',
  'Debt collection services': 'Huduma za ukusanyaji wa madeni',
  'Repossession services': 'Huduma za urejeshaji wa mali',
  'Get in Touch': 'Wasiliana Nasi',
  'Trusted Professional Services': 'Huduma za Kitaalamu Zinazoaminika',
  'Recovery, Auctions &': 'Urejeshaji, Minada na',
  Investigations: 'Uchunguzi',
  'Zafrica Company Limited is a newly established professional firm incorporated under Cap 228 of the laws of the United Republic of Tanzania with Certificate of Incorporation No.187412137':
    'Zafrica Company Limited ni kampuni mpya ya kitaalamu iliyosajiliwa kwa mujibu wa Cap 228 ya sheria za Jamhuri ya Muungano wa Tanzania, ikiwa na Cheti cha Usajili Na. 187412137.',
  'Our Services': 'Huduma Zetu',
  'Contact Us': 'Wasiliana Nasi',
  'Legally Compliant': 'Inafuata Sheria',
  'Services Offered': 'Huduma Zinazotolewa',
  Professional: 'Kitaalamu',
  Team: 'Timu',
  'About Zafrica': 'Kuhusu Zafrica',
  'Professional services built on trust and results': 'Huduma za kitaalamu zinazojengwa kwa uaminifu na matokeo',
  'The Company Established on 31st July 2025 and is specializing in general auctioneering and debt collection services. We are committed to providing transparent, efficient, and results-driven solutions to our clients, including individuals, businesses, and institutions across Tanzania.':
    'Kampuni ilianzishwa tarehe 31 Julai 2025 na inajishughulisha na huduma za minada na ukusanyaji wa madeni. Tumejizatiti kutoa suluhisho zilizo wazi, zenye ufanisi na matokeo kwa wateja wetu, wakiwemo watu binafsi, biashara na taasisi kote Tanzania.',
  'and strict compliance with legal frameworks to ensure that both our clients and debtors are treated fairly and ethically throughout the process.':
    'Tunazingatia kikamilifu mifumo ya kisheria ili kuhakikisha wateja na wadaiwa wanatendewa kwa haki na maadili katika mchakato mzima.',
  'Integrity in every transaction': 'Uadilifu katika kila muamala',
  'Strict legal compliance': 'Uzingatiaji madhubuti wa sheria',
  'Confidential and discreet': 'Usiri na umakini',
  'Efficient and results-driven': 'Ufanisi unaolenga matokeo',
  'Years of combined experience': 'Miaka ya uzoefu wa pamoja',
  'Successful recovery cases': 'Kesi za urejeshaji zilizofanikiwa',
  'Legal compliance guaranteed': 'Uzingatiaji wa sheria umehakikishwa',
  'What We Do': 'Tunachofanya',
  'Comprehensive professional services': 'Huduma kamili za kitaalamu',
  'Professional auction and debt recovery solutions, tailored to each client and assignment.':
    'Suluhisho za kitaalamu za minada na urejeshaji wa madeni, zilizobinafsishwa kwa kila mteja na kazi.',
  'Auctioneering Services': 'Huduma za Minada',
  'Debt Collection Services': 'Huduma za Ukusanyaji wa Madeni',
  'End-to-end auction support for public, court-ordered, and voluntary asset sales.':
    'Msaada kamili wa minada ya umma, minada iliyoamriwa na mahakama na mauzo ya hiari ya mali.',
  'Public asset auctions': 'Minada ya mali ya umma',
  'Vehicle offered for public auction': 'Gari linalotolewa kwa mnada wa umma',
  'Public auctions for vehicles, land, houses, and other assets.': 'Minada ya umma ya magari, ardhi, nyumba na mali nyingine.',
  'Court-ordered auctions': 'Minada iliyoamriwa na mahakama',
  'Legal documents on a desk': 'Nyaraka za kisheria mezani',
  'Auction services for assets being sold under a court order.': 'Huduma za mnada wa mali zinazouzwa kwa amri ya mahakama.',
  'Voluntary liquidation sales': 'Mauzo ya hiari ya mali',
  'Commercial office buildings': 'Majengo ya ofisi za kibiashara',
  'Organized sales of assets as part of a voluntary liquidation.': 'Mauzo yaliyopangwa ya mali kama sehemu ya kufilisi kwa hiari.',
  'Valuation and appraisal': 'Tathmini na makadirio ya thamani',
  'House keys and property documents': 'Funguo za nyumba na nyaraka za mali',
  'Valuation and appraisal services to support the sale of assets.': 'Huduma za tathmini na makadirio ya thamani kusaidia mauzo ya mali.',
  'Structured, client-focused recovery solutions from early follow-up through legal enforcement support.':
    'Suluhisho za urejeshaji zinazomlenga mteja, kuanzia ufuatiliaji wa awali hadi msaada wa utekelezaji wa kisheria.',
  'Pre-legal debt recovery': 'Urejeshaji wa madeni kabla ya hatua za kisheria',
  'Financial documents being reviewed at a desk': 'Nyaraka za kifedha zikikaguliwa mezani',
  'Follow-up and recovery support before a matter proceeds to legal action.': 'Ufuatiliaji na msaada wa urejeshaji kabla ya suala kufikishwa hatua za kisheria.',
  'Corporate and individual follow-up': 'Ufuatiliaji wa taasisi na watu binafsi',
  'Business professionals meeting around a table': 'Wataalamu wa biashara wakikutana mezani',
  'Debt follow-up services for both corporate and individual accounts.': 'Huduma za ufuatiliaji wa madeni kwa akaunti za taasisi na watu binafsi.',
  'Negotiated repayment solutions': 'Suluhisho za marejesho ya deni kwa mazungumzo',
  'Calculator and financial paperwork': 'Kikokotoo na nyaraka za kifedha',
  'Support to help clients and debtors negotiate repayment arrangements.': 'Msaada kwa wateja na wadaiwa kujadiliana kuhusu mipango ya marejesho.',
  'Repossession of secured assets': 'Urejeshaji wa mali zilizowekwa dhamana',
  'Car being prepared for repossession': 'Gari likiandaliwa kwa ajili ya kurejeshwa',
  'Repossession support for assets pledged as security, handled in line with applicable requirements.':
    'Msaada wa kurejesha mali zilizowekwa dhamana, kwa kuzingatia matakwa husika.',
  'Legal enforcement support': 'Msaada wa utekelezaji wa kisheria',
  'Legal books and documents': 'Vitabu na nyaraka za kisheria',
  'Enforcement support carried out in collaboration with lawyers.': 'Msaada wa utekelezaji unaotolewa kwa ushirikiano na wanasheria.',
  'Service categories': 'Aina za huduma',
  Service: 'Huduma',
  'View service terms': 'Tazama masharti ya huduma',
  'Discuss this service': 'Jadili huduma hii',
  'Need a different service?': 'Unahitaji huduma nyingine?',
  'We tailor our approach to your specific needs. Reach out to discuss your requirements.':
    'Tunabinafsisha huduma kulingana na mahitaji yako. Wasiliana nasi ili kujadili mahitaji yako.',
  'Our Core Values': 'Maadili Yetu ya Msingi',
  'The principles behind our work': 'Kanuni zinazoongoza kazi yetu',
  Integrity: 'Uadilifu',
  'Upholding honesty and fairness in all dealings.': 'Kudumisha ukweli na haki katika shughuli zote.',
  Professionalism: 'Utaalamu',
  'Providing expert services with high ethical standards.': 'Kutoa huduma za kitaalamu kwa viwango vya juu vya maadili.',
  Confidentiality: 'Usiri',
  'Ensuring client information is secure at all times.': 'Kuhakikisha taarifa za wateja zinalindwa wakati wote.',
  Efficiency: 'Ufanisi',
  'Delivering timely and effective solutions.': 'Kutoa suluhisho kwa wakati na kwa ufanisi.',
  Transparency: 'Uwazi',
  'Operating openly with clear communication and accountability.': 'Kufanya kazi kwa uwazi, mawasiliano mazuri na uwajibikaji.',
  'Why Choose Zafrica': 'Kwa Nini Uchague Zafrica',
  'Practical support for sensitive matters': 'Msaada wa vitendo kwa masuala nyeti',
  'We combine a wide range of professional services with a careful, client focused approach to help protect your interests.':
    'Tunaunganisha huduma mbalimbali za kitaalamu na mbinu makini inayomlenga mteja ili kulinda maslahi yako.',
  'Experienced and professional team': 'Timu yenye uzoefu na taaluma',
  'Our team brings professional experience in finance, debt management, and auctioneering.':
    'Timu yetu ina uzoefu wa kitaalamu katika fedha, usimamizi wa madeni na minada.',
  'Compliance with Tanzanian laws and regulations': 'Uzingatiaji wa sheria na kanuni za Tanzania',
  'We carry out our services with due regard for applicable Tanzanian laws and regulations.':
    'Tunatoa huduma zetu kwa kuzingatia sheria na kanuni za Tanzania zinazotumika.',
  'Ethical and respectful handling of all debtors': 'Kuwahudumia wadaiwa wote kwa maadili na heshima',
  'We approach every engagement with fairness, discretion, and respect for all parties.':
    'Tunashughulikia kila kazi kwa haki, busara na heshima kwa wahusika wote.',
  'Proven strategies to maximize recovery rates': 'Mikakati iliyothibitishwa ya kuongeza kiwango cha urejeshaji',
  'Structured follow-up, negotiated repayment solutions, and enforcement support help us pursue effective recoveries.':
    'Ufuatiliaji uliopangwa, suluhisho za marejesho kwa mazungumzo na msaada wa utekelezaji hutuwezesha kufanikisha urejeshaji.',
  'Transparent reporting and accountability': 'Ripoti za uwazi na uwajibikaji',
  'We value clear communication and accountability throughout each assignment.':
    'Tunathamini mawasiliano yaliyo wazi na uwajibikaji katika kila kazi.',
  'Who We Serve': 'Tunaowahudumia',
  'Target clients': 'Wateja tunaowalenga',
  'Zafrica works with institutions, organizations, agencies, and individuals seeking professional auction or debt collection support.':
    'Zafrica hushirikiana na taasisi, mashirika, wakala na watu binafsi wanaohitaji msaada wa kitaalamu wa mnada au ukusanyaji wa madeni.',
  'Commercial banks and financial institutions': 'Benki za biashara na taasisi za kifedha',
  'Microfinance institutions (MFIs)': 'Taasisi za mikopo midogo (MFIs)',
  'Savings and Credit Cooperative Societies (SACCOS)': 'Vyama vya Ushirika vya Akiba na Mikopo (SACCOS)',
  'Corporate organizations': 'Mashirika ya kibiashara',
  'Government agencies': 'Wakala za serikali',
  'Individuals with auction or debt collection needs': 'Watu binafsi wanaohitaji huduma za mnada au ukusanyaji wa madeni',
  'Management & Team': 'Uongozi na Timu',
  'Experienced leadership, professional service': 'Uongozi wenye uzoefu, huduma za kitaalamu',
  'Our leadership team consists of professionals with vast experience in finance, debt management, and auctioneering. The team is dedicated to ensuring that Zafrica Company Limited delivers reliable, compliant, and professional services.':
    'Timu yetu ya uongozi inaundwa na wataalamu wenye uzoefu mkubwa katika fedha, usimamizi wa madeni na minada. Timu imejitolea kuhakikisha kuwa Zafrica Company Limited inatoa huduma za kuaminika, zinazofuata sheria na za kitaalamu.',
  'Get In Touch': 'Wasiliana Nasi',
  'Contact Zafrica': 'Wasiliana na Zafrica',
  "Ready to discuss your needs? Reach out to our team and we'll guide you through the next steps.":
    'Tayari kujadili mahitaji yako? Wasiliana na timu yetu, tutakuongoza kuhusu hatua zinazofuata.',
  Address: 'Anwani',
  Phone: 'Simu',
  Email: 'Barua pepe',
  'Office Hours': 'Saa za Ofisi',
  'Dar es Salaam, Tanzania\nP.O. Box 15227': 'Dar es Salaam, Tanzania\nS.L.P. 15227',
  'Phone: +255 666 004 358\n WhatsApp: +255 723 763 911': 'Simu: +255 666 004 358\nWhatsApp: +255 723 763 911',
  'Mon – Fri: 8:00 AM – 5:00 PM\nSat: 9:00 AM – 1:00 PM': 'Jumatatu – Ijumaa: 8:00 AM – 5:00 PM\nJumamosi: 9:00 AM – 1:00 PM',
  'Map showing Dar es Salaam, Tanzania': 'Ramani inayoonyesha Dar es Salaam, Tanzania',
  'Client Feedback': 'Maoni ya Wateja',
  'What clients say': 'Wateja wanasemaje',
  'Sample testimonial copy. Replace with approved client feedback before publishing.':
    'Maoni ya mfano. Badilisha kwa maoni yaliyoidhinishwa na wateja kabla ya kuchapisha.',
  'The process was explained clearly, and we received timely updates throughout the engagement.':
    'Mchakato ulielezwa kwa uwazi, na tulipokea taarifa kwa wakati katika kipindi chote cha huduma.',
  'Financial institution client': 'Mteja wa taasisi ya kifedha',
  'The auction process felt organized from the initial valuation through to the sale.':
    'Mchakato wa mnada ulipangwa vizuri kuanzia tathmini ya awali hadi mauzo.',
  'Property auction client': 'Mteja wa mnada wa mali',
  'Our matter was handled discreetly, with professionalism at every stage.':
    'Jambo letu lilishughulikiwa kwa usiri na utaalamu katika kila hatua.',
  'Corporate client': 'Mteja wa kampuni',
  'The repayment options were discussed respectfully, and the next steps were clear.':
    'Chaguo za marejesho zilijadiliwa kwa heshima, na hatua zilizofuata zilielezwa wazi.',
  'Debt recovery client': 'Mteja wa urejeshaji wa deni',
  'Professional debt collection, property auctioning, asset repossession, eviction services, and private investigations.':
    'Ukusanyaji wa madeni, minada ya mali, urejeshaji wa mali, huduma za kuwaondoa wakaaji kisheria na uchunguzi binafsi wa kitaalamu.',
  'Quick Links': 'Viungo vya Haraka',
  'Contact Details': 'Taarifa za Mawasiliano',
  'Dar es Salaam, Tanzania': 'Dar es Salaam, Tanzania',
  'P.O. Box 15227': 'S.L.P. 15227',
  WhatsApp: 'WhatsApp',
  'Mon – Fri: 8:00 AM – 5:00 PM': 'Jumatatu – Ijumaa: 8:00 AM – 5:00 PM',
  'Sat: 9:00 AM – 1:00 PM': 'Jumamosi: 9:00 AM – 1:00 PM',
  'Registered in Tanzania': 'Imesajiliwa Tanzania',
  'Certificate of Incorporation No.': 'Namba ya Cheti cha Usajili:',
  'Service Terms': 'Masharti ya Huduma',
  'All rights reserved.': 'Haki zote zimehifadhiwa.',
  'Back to top': 'Rudi juu',
  'Back to home': 'Rudi mwanzo',
  'Return to home page': 'Rudi kwenye ukurasa wa mwanzo',
  'Zafrica Service Terms': 'Masharti ya Huduma za Zafrica',
  'Company Limited': 'Kampuni Limited',
  'Frequently asked questions': 'Maswali yanayoulizwa mara kwa mara',
  'Everything you need to know before engaging Zafrica for auctioning, debt collection, repossession, or related support services.':
    'Yote unayohitaji kujua kabla ya kupata huduma za mnada, ukusanyaji wa madeni, urejeshaji wa mali au huduma nyingine zinazohusiana kutoka Zafrica.',
  'What services does Zafrica provide?': 'Zafrica inatoa huduma zipi?',
  'We provide professional auctioneering services, debt collection, asset repossession, eviction support, and private investigation assistance for both commercial and individual clients.':
    'Tunatoa huduma za kitaalamu za minada, ukusanyaji wa madeni, urejeshaji wa mali, msaada wa kuwaondoa wakaaji kisheria na uchunguzi binafsi kwa wateja wa kibiashara na watu binafsi.',
  'Do you offer services to both businesses and private clients?': 'Je, mnatoa huduma kwa biashara na wateja binafsi?',
  'Yes. We work with businesses, financial institutions, property owners, and private clients who need reliable recovery or enforcement services in a compliant and professional manner.':
    'Ndiyo. Tunahudumia biashara, taasisi za kifedha, wamiliki wa mali na wateja binafsi wanaohitaji huduma za kuaminika za urejeshaji au utekelezaji kwa njia inayofuata sheria na ya kitaalamu.',
  'How do I request a consultation or quote?': 'Ninaombaje ushauri au makadirio ya gharama?',
  'You can contact our team through the enquiry form on the main page or reach out directly by phone or email. We will review your situation and advise the most suitable next steps.':
    'Unaweza kuwasiliana na timu yetu kupitia fomu ya maulizo kwenye ukurasa mkuu au kwa simu na barua pepe. Tutapitia hali yako na kushauri hatua zinazofaa zaidi.',
  'Are your terms and processes legally documented?': 'Je, masharti na taratibu zenu zimeandikwa kisheria?',
  'Yes. We operate with clear service terms and documentation for each engagement. The relevant service terms can be reviewed from the website before any formal agreement is entered into.':
    'Ndiyo. Tunafanya kazi kwa masharti ya huduma yaliyo wazi na nyaraka kwa kila kazi. Masharti husika yanaweza kusomwa kwenye tovuti kabla ya kuingia makubaliano rasmi.',
  'Can I view prior auction or gallery details before engaging your services?':
    'Je, ninaweza kuona maelezo ya minada au picha kabla ya kupata huduma zenu?',
  'Absolutely. Our gallery section showcases available listings and relevant property information, helping you understand the type of inventory and processes involved before making contact.':
    'Ndiyo. Sehemu ya picha inaonyesha matangazo yaliyopo na taarifa husika za mali, ili kukusaidia kuelewa mali na taratibu kabla ya kuwasiliana nasi.',
  'Still need help?': 'Bado unahitaji msaada?',
  'Our team is ready to answer your questions and advise on the best next step for your situation.':
    'Timu yetu iko tayari kujibu maswali yako na kushauri hatua inayofaa zaidi kwa hali yako.',
  'Contact us': 'Wasiliana nasi',
  'View gallery': 'Tazama picha',
  Back: 'Rudi',
  'Zafrica Auctioneering': 'Huduma za Minada za Zafrica',
  'Auction gallery': 'Picha za Minada',
  image: 'picha',
  images: 'picha',
  'Auction Listing': 'Tangazo la Mnada',
  'Zafrica auction listing poster': 'Tangazo la mnada la Zafrica',
  'Terms and Conditions for Auction Services': 'Vigezo na Masharti ya Huduma za Minada',
  'A 10% auction fee is charged on the auction value of items, including land, houses, motor vehicles, motorcycles, and other items.':
    'Ada ya mnada ya asilimia 10 hutozwa kwa thamani ya mnada wa bidhaa, zikiwemo ardhi, nyumba, magari, pikipiki na bidhaa nyingine.',
  'Advertising costs are charged on a negotiable basis.': 'Gharama za matangazo hutozwa kwa makubaliano.',
  'The client shall provide transport, if required, to move or remove assets or items from one location to another.':
    'Mteja atatoa usafiri, ikihitajika, kwa ajili ya kuhamisha mali au bidhaa kutoka eneo moja hadi jingine.',
  'Terms and Conditions for Debt Collection Services': 'Vigezo na Masharti ya Huduma za Ukusanyaji wa Madeni',
  'Debt Collection – Dar es Salaam & Upcountry Areas': 'Ukusanyaji wa Madeni – Dar es Salaam na Mikoani',
  'We charge 5%–15% commission as an agent on the amount realized or recovered. The higher the value of the assignment, the lower the commission, and vice versa.':
    'Tunatoza kamisheni ya asilimia 5–15 kama wakala kwa kiasi kilichopatikana au kurejeshwa. Kadiri thamani ya kazi inavyoongezeka, ndivyo kamisheni inavyopungua, na kinyume chake.',
  'The cost of advertisement (newspaper/radio) shall be charged.': 'Gharama za matangazo (gazeti/redio) zitatozwa.',
  'The client shall provide transport for their staff who will accompany our team during the exercise, especially for identification purposes.':
    'Mteja atatoa usafiri kwa wafanyakazi wake watakaoandamana na timu yetu wakati wa kazi, hasa kwa ajili ya utambuzi.',
  'Other costs such as fees, fuel, and transport in general shall be on a negotiable basis.':
    'Gharama nyingine kama ada, mafuta na usafiri kwa jumla zitaamuliwa kwa makubaliano.',
  'Investigation cost: 5% of the total liability.': 'Gharama ya uchunguzi: asilimia 5 ya deni lote.',
  'Terms and Conditions for Repossession Services': 'Vigezo na Masharti ya Huduma za Urejeshaji wa Mali',
  'Motorcycles and tricycles': 'Pikipiki na bajaji',
  'Small vehicles (saloon)': 'Magari madogo (saloon)',
  'Other vehicles (trucks, trailers, lorries, pick-ups, Land Rovers, buses, etc.)':
    'Magari mengine (malori, trela, pick-up, Land Rover, mabasi, n.k.)',
  'Storage charges per vehicle per day': 'Gharama za kuhifadhi gari kwa siku',
  'S/No.': 'Na.',
  Details: 'Maelezo',
  'Within DSM Area (TZS)': 'Ndani ya DSM (TZS)',
  'Upcountry (TZS)': 'Mikoani (TZS)',
  'Additional costs': 'Gharama za ziada',
  'Fuel, drivers’ allowance, and maintenance shall be paid subject to submission of valid and reasonable claims.':
    'Mafuta, posho za madereva na matengenezo vitalipwa baada ya kuwasilishwa kwa madai halali na yenye msingi.',
  'All amounts are shown in Tanzanian shillings (TZS).': 'Kiasi chote kimeonyeshwa kwa shilingi za Tanzania (TZS).',
  'ZAfrica Company Limited is a duly incorporated professional firm operating under the laws of the United Republic of Tanzania, with Certificate of Incorporation No. 187412137. We specialize in Recovery, Auctions, and Investigations, delivering reliable, transparent, and results driven solutions tailored to meet our clients’ needs.':
    'ZAfrica Company Limited ni kampuni ya kitaalamu iliyosajiliwa kwa mujibu wa sheria za Jamhuri ya Muungano wa Tanzania, yenye Cheti cha Usajili Na. 187412137. Tunajikita katika urejeshaji, minada na uchunguzi, tukitoa suluhisho za kuaminika, zilizo wazi na zinazoleta matokeo kulingana na mahitaji ya wateja wetu.',
  'Zafrica Company Limited': 'Kampuni ya Zafrica',
  'Repossession Services': 'Huduma za Urejeshaji wa Mali',
  'ZAfrica, we uphold honesty, fairness, and ethical conduct in all our Recovery, Auctions, and Investigations services, building lasting relationships founded on trust and accountability.':
    'Katika ZAfrica, tunazingatia uaminifu, haki na maadili katika huduma zetu zote za urejeshaji, minada na uchunguzi, tukijenga mahusiano ya kudumu yanayotegemea imani na uwajibikaji.',
  'We deliver our services with expertise, discipline, and dedication, maintaining high standards of quality and ensuring every assignment is handled with competence and respect.':
    'Tunatoa huduma zetu kwa utaalamu, nidhamu na kujitolea, tukidumisha viwango vya juu vya ubora na kuhakikisha kila kazi inashughulikiwa kwa umahiri na heshima.',
  'We safeguard our clients’ sensitive information and handle every case with discretion, ensuring privacy, trust, and responsible information management throughout our operations.':
    'Tunalinda taarifa nyeti za wateja wetu na kushughulikia kila suala kwa busara, tukihakikisha usiri, uaminifu na usimamizi unaowajibika wa taarifa katika shughuli zetu zote.',
  'We are committed to delivering timely, reliable, and results-driven solutions through effective planning, strategic execution, and careful management of every assignment.':
    'Tumejizatiti kutoa suluhisho za kuaminika na zenye matokeo kwa wakati, kupitia mipango madhubuti, utekelezaji wa kimkakati na usimamizi makini wa kila kazi.',
  'We promote open communication, honest reporting, and clear procedures in all our dealings, ensuring our clients remain informed and confident throughout every stage of our services.':
    'Tunakuza mawasiliano ya wazi, ripoti za ukweli na taratibu zilizo wazi katika shughuli zetu zote, ili wateja wetu waendelee kupata taarifa na kuwa na imani katika kila hatua ya huduma zetu.',
  'We provides professional public auction services for vehicles, land, houses, and other assets. We facilitate transparent and well-organized auction processes, connecting sellers with potential buyers while promoting fairness, accountability, and the best possible value for our clients.':
    'Tunatoa huduma za kitaalamu za minada ya umma ya magari, ardhi, nyumba na mali nyingine. Tunaendesha minada iliyo wazi na iliyopangwa vizuri, tukiwaunganisha wauzaji na wanunuzi watarajiwa na kuzingatia haki, uwajibikaji na thamani bora kwa wateja wetu.',
  'We facilitates court-ordered auctions in accordance with applicable legal procedures, ensuring transparency, fairness, and professionalism throughout the process. We support the lawful sale of assets pursuant to court orders while protecting the interests of relevant parties and promoting accountability at every stage.':
    'Tunaendesha minada iliyoamriwa na mahakama kwa kufuata taratibu za kisheria zinazotumika, huku tukihakikisha uwazi, haki na utaalamu katika mchakato mzima. Tunaunga mkono uuzaji halali wa mali kwa mujibu wa amri za mahakama, tukilinda maslahi ya wahusika na kuzingatia uwajibikaji katika kila hatua.',
  'We provides professional voluntary liquidation auction services to businesses and individuals seeking to sell assets efficiently. We facilitate transparent and well-organized sales of vehicles, machinery, equipment, and other assets, helping clients maximize value while ensuring fairness and professionalism throughout the process.':
    'Tunatoa huduma za kitaalamu za minada ya mali zinazouzwa kwa hiari wakati wa kufilisi kwa biashara na watu binafsi wanaotaka kuuza mali kwa ufanisi. Tunaandaa mauzo yaliyo wazi na yenye mpangilio wa magari, mitambo, vifaa na mali nyingine, ili kuwasaidia wateja kupata thamani bora huku tukihakikisha haki na utaalamu katika mchakato mzima.',
  'We provides professional valuation and appraisal services to help clients determine the market value of vehicles, properties, machinery, and other assets. We apply careful assessment methods and industry knowledge to deliver reliable valuations that support informed decisions in asset recovery, auctions, and financial transactions.':
    'Tunatoa huduma za kitaalamu za tathmini ili kuwasaidia wateja kubaini thamani ya soko ya magari, majengo, mitambo na mali nyingine. Tunatumia mbinu makini za tathmini na ujuzi wa sekta kutoa makadirio ya kuaminika yanayosaidia kufanya maamuzi sahihi kuhusu urejeshaji wa mali, minada na miamala ya kifedha.',
  'We provides professional pre-legal debt recovery services to help clients recover outstanding debts before proceeding to legal action. Through structured follow-ups, effective communication, and negotiated payment arrangements, we aim to achieve timely recoveries while maintaining professionalism, confidentiality, and positive business relationships.':
    'Tunatoa huduma za kitaalamu za urejeshaji wa madeni kabla ya hatua za kisheria, ili kuwasaidia wateja kurejesha madeni ambayo hayajalipwa. Kupitia ufuatiliaji uliopangwa, mawasiliano madhubuti na mipango ya malipo inayojadiliwa, tunalenga kurejesha madeni kwa wakati huku tukidumisha utaalamu, usiri na mahusiano mazuri ya kibiashara.',
  'We provides professional follow-up services for businesses and individuals to support debt recovery, payment commitments, and outstanding obligations. We ensure consistent communication, timely follow-ups, and a professional approach to achieving effective results while protecting our clients’ interests and maintaining confidentiality.':
    'Tunatoa huduma za kitaalamu za ufuatiliaji kwa biashara na watu binafsi ili kusaidia urejeshaji wa madeni, utekelezaji wa ahadi za malipo na ulipaji wa madeni yaliyobaki. Tunahakikisha mawasiliano ya mara kwa mara, ufuatiliaji wa wakati na mbinu ya kitaalamu inayolenga matokeo, huku tukilinda maslahi ya wateja na kudumisha usiri.',
  'We facilitates fair and practical repayment arrangements between creditors and debtors. Through professional negotiation and effective communication, we help establish mutually acceptable payment plans that support debt recovery, protect our clients’ interests, and encourage timely settlement of outstanding obligations.':
    'Tunawezesha wadai na wadaiwa kukubaliana kuhusu mipango ya marejesho iliyo ya haki na inayotekelezeka. Kupitia mazungumzo ya kitaalamu na mawasiliano madhubuti, tunasaidia kuweka mipango ya malipo inayokubalika kwa pande zote, inayochangia urejeshaji wa deni, kulinda maslahi ya wateja wetu na kuhimiza ulipaji wa madeni kwa wakati.',
  'We provides professional support in the repossession of secured assets in accordance with applicable laws and contractual obligations. We assist clients in recovering assets linked to outstanding debts while ensuring that every process is handled with professionalism, transparency, and respect for the rights of all parties involved.':
    'Tunatoa msaada wa kitaalamu katika kurejesha mali zilizowekwa dhamana kwa mujibu wa sheria na masharti ya mikataba yanayotumika. Tunawasaidia wateja kurejesha mali zinazohusiana na madeni ambayo hayajalipwa, huku tukihakikisha kila hatua inatekelezwa kwa utaalamu, uwazi na heshima kwa haki za wahusika wote.',
  'We provides professional support in legal enforcement processes related to debt recovery and asset realization. We work with clients and relevant legal professionals to facilitate the enforcement of lawful claims, ensuring that all actions are handled in accordance with applicable laws, with professionalism, transparency, and accountability.':
    'Tunatoa msaada wa kitaalamu katika taratibu za utekelezaji wa sheria zinazohusiana na urejeshaji wa madeni na ubadilishaji wa mali kuwa fedha. Tunashirikiana na wateja na wataalamu wa sheria kuwezesha utekelezaji wa madai halali, na kuhakikisha hatua zote zinafuata sheria zinazotumika na kutekelezwa kwa utaalamu, uwazi na uwajibikaji.',
  'Our experienced leadership and dedicated team are committed to delivering reliable, efficient, and professional Recovery, Auctions, and Investigations services. We combine industry knowledge, strategic expertise, and ethical practices to protect our clients’ interests and achieve effective results.':
    'Uongozi wetu wenye uzoefu na timu yetu iliyojitolea wameazimia kutoa huduma za urejeshaji, minada na uchunguzi zilizo za kuaminika, zenye ufanisi na za kitaalamu. Tunaunganisha ujuzi wa sekta, utaalamu wa kimkakati na maadili ili kulinda maslahi ya wateja wetu na kupata matokeo bora.',
  'Zafrica Company Limited serves a diverse range of clients, including financial institutions, corporate organizations, government agencies, businesses, and individuals seeking reliable Recovery, Auctions, and Investigations services. We provide tailored, professional solutions designed to protect our clients’ interests, recover assets, and achieve effective results.':
    'Zafrica Company Limited huhudumia wateja wa aina mbalimbali, wakiwemo taasisi za kifedha, mashirika ya kibiashara, taasisi za serikali, biashara na watu binafsi wanaohitaji huduma za kuaminika za urejeshaji, minada na uchunguzi. Tunatoa suluhisho za kitaalamu zinazolingana na mahitaji ya kila mteja, kwa lengo la kulinda maslahi yao, kurejesha mali na kupata matokeo bora.',
  'Zafrica we provide professional Recovery, Auctions, and Investigations services tailored to our clients’ needs. Through a client-focused approach, we prioritize protecting your interests, safeguarding assets, maintaining confidentiality, and delivering reliable results with integrity, efficiency, and professionalism.':
    'Zafrica hutoa huduma za kitaalamu za urejeshaji, minada na uchunguzi kulingana na mahitaji ya wateja wetu. Kwa kutumia mbinu inayomweka mteja mbele, tunatanguliza kulinda maslahi yako na mali zako, kudumisha usiri na kutoa matokeo ya kuaminika kwa uadilifu, ufanisi na utaalamu.',
};

function getStoredLanguage(): Language {
  const storedLanguage = window.localStorage.getItem('zafrica-language');
  return storedLanguage === 'sw' ? 'sw' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getStoredLanguage);
  const t = useCallback(
    (text: string) => (language === 'sw' ? translations[text] ?? text : text),
    [language]
  );

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem('zafrica-language', nextLanguage);
    setLanguageState(nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t('Zafrica | Debt Collection, Auctioning & Recovery Services');
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        'content',
        t('Zafrica provides professional debt collection and recovery, auctioning of properties, repossession of vehicles and movable assets, eviction services, and private investigations.')
      );
    }
  }, [language, t]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
