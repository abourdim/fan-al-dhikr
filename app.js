/* فن الذكر والدعاء — THE ART OF DHIKR AND DUA — app.js */
/* Based on "Fan Al-Dhikr wal-Du'a 'inda Khatam al-Anbiya" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'فن الذكر والدعاء',
    splashSub: 'عند خاتم الأنبياء ﷺ',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الرعد ١٣: ٢٨',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabAdhkar: 'الأذكار',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'فن الذكر والدعاء',
    cardsDesc: '٢٠ درساً من كتاب الشيخ الغزالي عن الذكر والدعاء — لكل درس حكمة وآية وتطبيق عملي',
    adhkarTitle: 'أذكار يومية',
    adhkarDesc: 'أذكار الصباح والمساء وأدعية مأثورة من السنة النبوية',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من الكتاب — تتبّع تقدمك يومياً',
    quizTitle: 'اختبر معرفتك',
    quizDesc: 'ما مدى معرفتك بفن الذكر والدعاء؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية مختارة',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ ذكر اليوم',
    quizAgain: 'أعد الاختبار',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    splashFeatures: [
      '٢٠ درساً في فن الذكر والدعاء',
      'أذكار الصباح والمساء',
      'عادات يومية مع تتبع مستمر',
      'اختبار معرفة + أدعية مختارة'
    ],
    youngMode: 'المستكشف الصغير',
    teenMode: 'الباحث الشاب',
  },
  en: {
    appTitle: 'The Art of Dhikr & Dua',
    splashSub: 'At the Seal of the Prophets ﷺ',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Ar-Ra\'d 13:28',
    tabHome: 'Home', tabCards: 'Cards', tabAdhkar: 'Adhkar',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'The Art of Dhikr & Dua',
    cardsDesc: '20 lessons from Sheikh al-Ghazali\'s book on remembrance and supplication — each with wisdom, a verse, and practical application',
    adhkarTitle: 'Daily Adhkar',
    adhkarDesc: 'Morning and evening remembrances and prophetic supplications',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by the book — track your daily progress',
    quizTitle: 'Test Your Knowledge',
    quizDesc: 'How well do you know the art of dhikr and dua?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Selected Duas',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Dhikr',
    quizAgain: 'Retake Quiz',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    splashFeatures: [
      '20 lessons on the art of dhikr and dua',
      'Morning and evening adhkar',
      'Daily habits with streak tracking',
      'Knowledge quiz + selected duas'
    ],
    youngMode: 'Young Explorer',
    teenMode: 'Teen Scholar',
  },
  fr: {
    appTitle: 'L\'Art du Dhikr et du Dua',
    splashSub: 'Aupr\u00e8s du Sceau des Proph\u00e8tes ﷺ',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Ar-Ra\'d 13:28',
    tabHome: 'Accueil', tabCards: 'Cartes', tabAdhkar: 'Adhkar',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'L\'Art du Dhikr et du Dua',
    cardsDesc: '20 le\u00e7ons du livre du Sheikh al-Ghazali sur le rappel et l\'invocation — chacune avec sagesse, verset et application pratique',
    adhkarTitle: 'Adhkar Quotidiens',
    adhkarDesc: 'Rappels du matin et du soir et invocations proph\u00e9tiques',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspir\u00e9es du livre — suivez vos progr\u00e8s',
    quizTitle: 'Testez Vos Connaissances',
    quizDesc: 'Connaissez-vous bien l\'art du dhikr et du dua ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas S\u00e9lectionn\u00e9es',
    resetBtn: 'R\u00e9initialiser',
    submitQuiz: 'Voir les R\u00e9sultats',
    dailyLabel: '✨ Dhikr du Jour',
    quizAgain: 'Refaire le Quiz',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours cons\u00e9cutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    splashFeatures: [
      '20 le\u00e7ons sur l\'art du dhikr et du dua',
      'Adhkar du matin et du soir',
      'Habitudes quotidiennes avec suivi',
      'Quiz + duas s\u00e9lectionn\u00e9es'
    ],
    youngMode: 'Jeune Explorateur',
    teenMode: 'Jeune Savant',
  }
};

// ═══════════════ CARDS DATA (20 lessons) ═══════════════
const CARDS = [
  {
    id:1, emoji:'🤲',
    ar:{title:'حقيقة الذكر',desc:'الذكر ليس مجرد تحريك اللسان بكلمات. إنه استحضار عظمة الله في القلب والعقل معاً. الذاكر الحقيقي هو من يعيش مع الله في كل لحظة.',verse:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',verseRef:'سورة الرعد ١٣: ٢٨',action:'توقف الآن وقل "سبحان الله وبحمده" بتدبر وخشوع'},
    en:{title:'The Reality of Dhikr',desc:'Dhikr is not merely moving the tongue with words. It is evoking God\'s greatness in both heart and mind. The true one who remembers lives with God every moment.',verse:'Verily, in the remembrance of Allah do hearts find rest',verseRef:'Surah Ar-Ra\'d 13:28',action:'Pause now and say "SubhanAllah wa bihamdihi" with reflection and humility'},
    fr:{title:'La R\u00e9alit\u00e9 du Dhikr',desc:'Le dhikr n\'est pas simplement bouger la langue avec des mots. C\'est \u00e9voquer la grandeur de Dieu dans le c\u0153ur et l\'esprit. Le vrai dh\u00e2kir vit avec Dieu \u00e0 chaque instant.',verse:'C\'est par le rappel d\'Allah que les c\u0153urs se tranquillisent',verseRef:'Sourate Ar-Ra\'d 13:28',action:'Faites une pause et dites "SubhanAllah wa bihamdihi" avec r\u00e9flexion'}
  },
  {
    id:2, emoji:'🌅',
    ar:{title:'أذكار الصباح والمساء',desc:'النبي ﷺ كان يحافظ على أذكار الصباح والمساء كحصن يحمي المسلم من كل شر. هي ليست طقوساً بل درع واقٍ من القلق والخوف.',verse:'فَاذْكُرُونِي أَذْكُرْكُمْ',verseRef:'سورة البقرة ٢: ١٥٢',action:'ابدأ يومك بأذكار الصباح — حتى لو بثلاثة أذكار فقط'},
    en:{title:'Morning & Evening Adhkar',desc:'The Prophet ﷺ maintained morning and evening adhkar as a fortress protecting the Muslim from all evil. They are not rituals but a shield against anxiety and fear.',verse:'Remember Me and I will remember you',verseRef:'Surah Al-Baqarah 2:152',action:'Start your day with morning adhkar — even if just three'},
    fr:{title:'Adhkar du Matin et du Soir',desc:'Le Proph\u00e8te ﷺ maintenait les adhkar du matin et du soir comme une forteresse prot\u00e9geant le musulman. Ce ne sont pas des rituels mais un bouclier contre l\'anxi\u00e9t\u00e9.',verse:'Souvenez-vous de Moi et Je Me souviendrai de vous',verseRef:'Sourate Al-Baqarah 2:152',action:'Commencez votre journ\u00e9e avec les adhkar du matin — m\u00eame trois seulement'}
  },
  {
    id:3, emoji:'💎',
    ar:{title:'آداب الدعاء',desc:'للدعاء آداب يجب مراعاتها: الطهارة، استقبال القبلة، رفع اليدين، البدء بالحمد والصلاة على النبي، ثم الدعاء بخشوع وإلحاح.',verse:'ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً',verseRef:'سورة الأعراف ٧: ٥٥',action:'في دعائك القادم، طبّق أدب الدعاء: ابدأ بالحمد ثم صلِّ على النبي ثم ادعُ'},
    en:{title:'Etiquette of Dua',desc:'Dua has etiquettes to observe: purity, facing the qibla, raising hands, beginning with praise and blessings on the Prophet, then supplicating with humility and persistence.',verse:'Call upon your Lord in humility and privately',verseRef:'Surah Al-A\'raf 7:55',action:'In your next dua, apply the etiquette: start with praise, bless the Prophet, then ask'},
    fr:{title:'\u00c9tiquette du Dua',desc:'Le dua a des \u00e9tiquettes \u00e0 observer : puret\u00e9, faire face \u00e0 la qibla, lever les mains, commencer par la louange et les pri\u00e8res sur le Proph\u00e8te.',verse:'Invoquez votre Seigneur en toute humilit\u00e9 et en secret',verseRef:'Sourate Al-A\'raf 7:55',action:'Dans votre prochain dua, appliquez l\'\u00e9tiquette : louange, pri\u00e8re sur le Proph\u00e8te, puis demande'}
  },
  {
    id:4, emoji:'🕐',
    ar:{title:'أوقات إجابة الدعاء',desc:'هناك أوقات يُستجاب فيها الدعاء: الثلث الأخير من الليل، بين الأذان والإقامة، يوم الجمعة، في السجود، وعند الإفطار.',verse:'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ',verseRef:'سورة البقرة ٢: ١٨٦',action:'اغتنم وقت السحر الليلة وادعُ الله بأحب دعاء إلى قلبك'},
    en:{title:'Times of Answered Dua',desc:'There are times when dua is answered: the last third of the night, between adhan and iqama, on Friday, in prostration, and when breaking fast.',verse:'When My servants ask about Me, indeed I am near',verseRef:'Surah Al-Baqarah 2:186',action:'Seize the pre-dawn hour tonight and make your dearest supplication'},
    fr:{title:'Moments d\'Exaucement du Dua',desc:'Il y a des moments o\u00f9 le dua est exauc\u00e9 : le dernier tiers de la nuit, entre l\'adhan et l\'iqama, le vendredi, en prosternation, et \u00e0 la rupture du je\u00fbne.',verse:'Quand Mes serviteurs t\'interrogent sur Moi, Je suis proche',verseRef:'Sourate Al-Baqarah 2:186',action:'Profitez de l\'heure avant l\'aube ce soir pour une supplication sinc\u00e8re'}
  },
  {
    id:5, emoji:'❤️',
    ar:{title:'الذكر والسكينة الداخلية',desc:'الذكر يملأ القلب بسكينة لا يمنحها مال ولا جاه. من عاش مع الذكر لا يعرف الوحدة ولا الخوف لأن الله معه.',verse:'هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ',verseRef:'سورة الفتح ٤٨: ٤',action:'عندما تشعر بالقلق، كرر "لا إله إلا الله" ٣٣ مرة وتأمل معناها'},
    en:{title:'Dhikr and Inner Peace',desc:'Dhikr fills the heart with a tranquility that neither wealth nor status can provide. One who lives with dhikr never feels loneliness or fear because God is with them.',verse:'He it is who sent down tranquility into the hearts of the believers',verseRef:'Surah Al-Fath 48:4',action:'When anxious, repeat "La ilaha illallah" 33 times and ponder its meaning'},
    fr:{title:'Dhikr et Paix Int\u00e9rieure',desc:'Le dhikr remplit le c\u0153ur d\'une tranquillit\u00e9 que ni richesse ni statut ne peuvent offrir. Celui qui vit avec le dhikr ne conna\u00eet ni solitude ni peur.',verse:'C\'est Lui qui a fait descendre la qu\u00e9titude dans les c\u0153urs des croyants',verseRef:'Sourate Al-Fath 48:4',action:'Quand vous \u00eates anxieux, r\u00e9p\u00e9tez "La ilaha illallah" 33 fois avec r\u00e9flexion'}
  },
  {
    id:6, emoji:'🌙',
    ar:{title:'قيام الليل والمناجاة',desc:'الليل هو وقت المناجاة الخاصة بين العبد وربه. قيام الليل ليس عبئاً بل هو شرف المؤمن ومصدر قوته.',verse:'وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَّكَ',verseRef:'سورة الإسراء ١٧: ٧٩',action:'صلِّ ركعتين في الليل واجعل دعاء السجود طويلاً'},
    en:{title:'Night Prayer and Intimate Conversation',desc:'The night is the time for private conversation between the servant and his Lord. Night prayer is not a burden but the believer\'s honor and source of strength.',verse:'And during the night, pray as an additional prayer',verseRef:'Surah Al-Isra 17:79',action:'Pray two rak\'at at night and make your prostration dua long'},
    fr:{title:'Pri\u00e8re Nocturne et Conversation Intime',desc:'La nuit est le moment de conversation priv\u00e9e entre le serviteur et son Seigneur. La pri\u00e8re nocturne est l\'honneur du croyant et sa source de force.',verse:'Et la nuit, prie comme suppl\u00e9ment pour toi',verseRef:'Sourate Al-Isra 17:79',action:'Priez deux rak\'at la nuit et prolongez votre dua en prosternation'}
  },
  {
    id:7, emoji:'📿',
    ar:{title:'التسبيح والتحميد والتكبير',desc:'سبحان الله والحمد لله والله أكبر — ثلاث كلمات خفيفات على اللسان ثقيلات في الميزان حبيبات إلى الرحمن.',verse:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ',verseRef:'متفق عليه',action:'بعد كل صلاة، سبّح ٣٣ واحمد ٣٣ وكبّر ٣٣ مرة'},
    en:{title:'Tasbih, Tahmid and Takbir',desc:'SubhanAllah, Alhamdulillah, Allahu Akbar — three phrases light on the tongue, heavy on the scales, and beloved to the Most Merciful.',verse:'SubhanAllah wa bihamdihi, SubhanAllah al-Adheem',verseRef:'Agreed upon',action:'After each prayer, say SubhanAllah 33, Alhamdulillah 33, Allahu Akbar 33 times'},
    fr:{title:'Tasbih, Tahmid et Takbir',desc:'SubhanAllah, Alhamdulillah, Allahu Akbar — trois expressions l\u00e9g\u00e8res sur la langue, lourdes dans la balance, et aim\u00e9es du Mis\u00e9ricordieux.',verse:'SubhanAllah wa bihamdihi, SubhanAllah al-Adheem',verseRef:'Unanimement reconnu',action:'Apr\u00e8s chaque pri\u00e8re, dites SubhanAllah 33, Alhamdulillah 33, Allahu Akbar 33 fois'}
  },
  {
    id:8, emoji:'🛡️',
    ar:{title:'الذكر حصن المؤمن',desc:'أذكار الصباح والمساء حصن يحمي المؤمن. من تركها كان كالجندي الذي خرج للمعركة بلا درع.',verse:'وَاذْكُر رَّبَّكَ فِي نَفْسِكَ تَضَرُّعًا وَخِيفَةً',verseRef:'سورة الأعراف ٧: ٢٠٥',action:'لا تخرج من المنزل قبل أن تقرأ آية الكرسي ودعاء الخروج'},
    en:{title:'Dhikr: The Believer\'s Fortress',desc:'Morning and evening adhkar are a fortress protecting the believer. Leaving them is like a soldier going to battle without armor.',verse:'And remember your Lord within yourself in humility and fear',verseRef:'Surah Al-A\'raf 7:205',action:'Don\'t leave home before reciting Ayat al-Kursi and the dua for leaving'},
    fr:{title:'Le Dhikr : Forteresse du Croyant',desc:'Les adhkar du matin et du soir sont une forteresse. Les abandonner, c\'est comme un soldat partant au combat sans armure.',verse:'Et invoque ton Seigneur en toi-m\u00eame avec humilit\u00e9 et crainte',verseRef:'Sourate Al-A\'raf 7:205',action:'Ne quittez pas la maison sans r\u00e9citer Ayat al-Kursi et le dua de sortie'}
  },
  {
    id:9, emoji:'🌊',
    ar:{title:'الاستغفار وتجديد الروح',desc:'الاستغفار يغسل الذنوب ويجدد الروح. النبي ﷺ كان يستغفر أكثر من مئة مرة في اليوم رغم أنه معصوم.',verse:'وَاسْتَغْفِرُوا اللَّهَ إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ',verseRef:'سورة المزمل ٧٣: ٢٠',action:'قل "أستغفر الله العظيم وأتوب إليه" ١٠٠ مرة اليوم'},
    en:{title:'Istighfar and Renewing the Spirit',desc:'Istighfar washes away sins and renews the spirit. The Prophet ﷺ sought forgiveness over 100 times daily despite being sinless.',verse:'And seek forgiveness of Allah, indeed Allah is Forgiving, Merciful',verseRef:'Surah Al-Muzzammil 73:20',action:'Say "Astaghfirullah al-Adheem wa atubu ilayh" 100 times today'},
    fr:{title:'Istighfar et Renouveau de l\'Esprit',desc:'L\'istighfar lave les p\u00e9ch\u00e9s et renouvelle l\'esprit. Le Proph\u00e8te ﷺ demandait pardon plus de 100 fois par jour malgr\u00e9 son innocence.',verse:'Demandez pardon \u00e0 Allah, certes Allah est Pardonneur et Mis\u00e9ricordieux',verseRef:'Sourate Al-Muzzammil 73:20',action:'Dites "Astaghfirullah al-Adheem wa atubu ilayh" 100 fois aujourd\'hui'}
  },
  {
    id:10, emoji:'🕋',
    ar:{title:'الصلاة على النبي ﷺ',desc:'الصلاة على النبي ﷺ من أعظم الأذكار. بها يُصلي الله على العبد عشراً ويُرفع له عشر درجات.',verse:'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ',verseRef:'سورة الأحزاب ٣٣: ٥٦',action:'أكثر من الصلاة على النبي ﷺ اليوم — خاصة يوم الجمعة'},
    en:{title:'Sending Blessings on the Prophet ﷺ',desc:'Sending blessings on the Prophet ﷺ is among the greatest dhikr. Through it, God blesses the servant tenfold and raises them ten degrees.',verse:'Indeed, Allah and His angels send blessings upon the Prophet',verseRef:'Surah Al-Ahzab 33:56',action:'Increase your blessings on the Prophet ﷺ today — especially on Friday'},
    fr:{title:'Pri\u00e8re sur le Proph\u00e8te ﷺ',desc:'La pri\u00e8re sur le Proph\u00e8te ﷺ est parmi les plus grands dhikr. Par elle, Dieu b\u00e9nit le serviteur dix fois et l\'\u00e9l\u00e8ve de dix degr\u00e9s.',verse:'Certes, Allah et Ses anges b\u00e9nissent le Proph\u00e8te',verseRef:'Sourate Al-Ahzab 33:56',action:'Augmentez vos pri\u00e8res sur le Proph\u00e8te ﷺ aujourd\'hui — surtout le vendredi'}
  },
  {
    id:11, emoji:'🌿',
    ar:{title:'ذكر الله في كل حال',desc:'المسلم يذكر الله في كل أحواله: عند الأكل والنوم والسفر والدخول والخروج. الحياة كلها محطات ذكر.',verse:'الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ',verseRef:'سورة آل عمران ٣: ١٩١',action:'اجعل لكل فعل يومي ذكراً: دعاء الطعام، دعاء النوم، دعاء الخروج'},
    en:{title:'Remembering God in Every State',desc:'A Muslim remembers God in all situations: eating, sleeping, traveling, entering and leaving. Life itself is a series of dhikr stations.',verse:'Those who remember Allah standing, sitting, and on their sides',verseRef:'Surah Aal-Imran 3:191',action:'Assign a dhikr to each daily act: dua for food, sleep, and leaving the house'},
    fr:{title:'Se Souvenir de Dieu en Tout \u00c9tat',desc:'Le musulman se souvient de Dieu en toutes situations : manger, dormir, voyager, entrer et sortir. La vie enti\u00e8re est une s\u00e9rie de stations de dhikr.',verse:'Ceux qui invoquent Allah debout, assis et couch\u00e9s sur leurs c\u00f4t\u00e9s',verseRef:'Sourate Aal-Imran 3:191',action:'Assignez un dhikr \u00e0 chaque acte quotidien : dua pour le repas, le sommeil, la sortie'}
  },
  {
    id:12, emoji:'💧',
    ar:{title:'الدعاء عند المحن',desc:'الشدائد هي فرصة للتقرب من الله بالدعاء. المؤمن لا يتخلى عن ربه في الرخاء ولا يتذكره فقط في الشدة.',verse:'وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ',verseRef:'سورة غافر ٤٠: ٦٠',action:'إذا كنت تمر بمحنة، ارفع يديك الآن وادعُ الله بصدق'},
    en:{title:'Dua During Hardships',desc:'Hardships are an opportunity to draw closer to God through dua. A believer does not abandon their Lord in ease nor remember Him only in difficulty.',verse:'And your Lord said: Call upon Me, I will respond to you',verseRef:'Surah Ghafir 40:60',action:'If you\'re going through hardship, raise your hands now and supplicate sincerely'},
    fr:{title:'Dua Pendant les \u00c9preuves',desc:'Les \u00e9preuves sont une occasion de se rapprocher de Dieu par le dua. Le croyant n\'abandonne pas son Seigneur dans l\'aisance.',verse:'Et votre Seigneur dit : Invoquez-Moi, Je vous r\u00e9pondrai',verseRef:'Sourate Ghafir 40:60',action:'Si vous traversez une \u00e9preuve, levez vos mains maintenant et invoquez sinc\u00e8rement'}
  },
  {
    id:13, emoji:'🌸',
    ar:{title:'أدعية النبي ﷺ المفضلة',desc:'للنبي ﷺ أدعية كان يكثر منها ويحافظ عليها. هي جوامع الكلم — قليلة اللفظ عظيمة المعنى.',verse:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',verseRef:'سورة البقرة ٢: ٢٠١',action:'احفظ دعاء النبي ﷺ: "اللهم إني أسألك العفو والعافية"'},
    en:{title:'The Prophet\'s Favorite Duas ﷺ',desc:'The Prophet ﷺ had duas he frequently repeated and maintained. They are concise words of great meaning — few in words, vast in significance.',verse:'Our Lord, give us good in this world and good in the hereafter, and protect us from the fire',verseRef:'Surah Al-Baqarah 2:201',action:'Memorize the Prophet\'s dua: "Allahumma inni as\'aluka al-\'afwa wal-\'afiyah"'},
    fr:{title:'Les Duas Pr\u00e9f\u00e9r\u00e9es du Proph\u00e8te ﷺ',desc:'Le Proph\u00e8te ﷺ avait des duas qu\'il r\u00e9p\u00e9tait fr\u00e9quemment. Ce sont des paroles concises au sens immense.',verse:'Notre Seigneur, donne-nous le bien ici-bas et dans l\'au-del\u00e0, et prot\u00e8ge-nous du feu',verseRef:'Sourate Al-Baqarah 2:201',action:'M\u00e9morisez le dua du Proph\u00e8te : "Allahumma inni as\'aluka al-\'afwa wal-\'afiyah"'}
  },
  {
    id:14, emoji:'🔥',
    ar:{title:'الذكر والغفلة',desc:'الغفلة عن ذكر الله هي الموت الحقيقي. الفرق بين الذاكر والغافل كالفرق بين الحي والميت.',verse:'وَلَا تَكُن مِّنَ الْغَافِلِينَ',verseRef:'سورة الأعراف ٧: ٢٠٥',action:'ضع تذكيراً على هاتفك كل ساعة ليذكرك بقول "سبحان الله"'},
    en:{title:'Dhikr and Heedlessness',desc:'Heedlessness of God\'s remembrance is the real death. The difference between one who remembers and one who is heedless is like the living and the dead.',verse:'And do not be among the heedless',verseRef:'Surah Al-A\'raf 7:205',action:'Set an hourly reminder on your phone to say "SubhanAllah"'},
    fr:{title:'Dhikr et Insouciance',desc:'L\'insouciance du rappel de Dieu est la vraie mort. La diff\u00e9rence entre celui qui se souvient et l\'insouciant est comme le vivant et le mort.',verse:'Et ne sois pas parmi les insouciants',verseRef:'Sourate Al-A\'raf 7:205',action:'Mettez un rappel horaire sur votre t\u00e9l\u00e9phone pour dire "SubhanAllah"'}
  },
  {
    id:15, emoji:'🌟',
    ar:{title:'القرآن أعظم ذكر',desc:'تلاوة القرآن هي أعظم أنواع الذكر. كل حرف بحسنة والحسنة بعشر أمثالها. القرآن شفاء وهدى ونور.',verse:'إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',verseRef:'سورة الإسراء ١٧: ٩',action:'اقرأ صفحة واحدة من القرآن اليوم بتدبر'},
    en:{title:'The Quran: The Greatest Dhikr',desc:'Reciting the Quran is the greatest form of dhikr. Each letter earns a good deed multiplied by ten. The Quran is healing, guidance, and light.',verse:'Indeed, this Quran guides to that which is most upright',verseRef:'Surah Al-Isra 17:9',action:'Read one page of the Quran today with reflection'},
    fr:{title:'Le Coran : Le Plus Grand Dhikr',desc:'La r\u00e9citation du Coran est la plus grande forme de dhikr. Chaque lettre vaut une bonne action multipli\u00e9e par dix. Le Coran est gu\u00e9rison, guidance et lumi\u00e8re.',verse:'Certes, ce Coran guide vers ce qui est le plus droit',verseRef:'Sourate Al-Isra 17:9',action:'Lisez une page du Coran aujourd\'hui avec r\u00e9flexion'}
  },
  {
    id:16, emoji:'🤝',
    ar:{title:'الدعاء للآخرين',desc:'الدعاء لأخيك المسلم بظهر الغيب من أعظم الأعمال. يقول الملك: "ولك مثله". الدعاء للآخرين يعود عليك بالخير.',verse:'وَالَّذِينَ جَاءُوا مِن بَعْدِهِمْ يَقُولُونَ رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا',verseRef:'سورة الحشر ٥٩: ١٠',action:'ادعُ الآن لثلاثة أشخاص تحبهم بالخير والبركة'},
    en:{title:'Supplicating for Others',desc:'Praying for your Muslim brother in their absence is among the greatest deeds. The angel says: "And for you the same." Praying for others returns goodness to you.',verse:'And those who came after them say: Our Lord, forgive us and our brothers',verseRef:'Surah Al-Hashr 59:10',action:'Pray now for three people you love with goodness and blessings'},
    fr:{title:'Invoquer pour les Autres',desc:'Prier pour votre fr\u00e8re musulman en son absence est parmi les plus grands actes. L\'ange dit : "Et pour toi pareil." Prier pour les autres vous revient en bien.',verse:'Ceux venus apr\u00e8s eux disent : Seigneur, pardonne-nous ainsi qu\'\u00e0 nos fr\u00e8res',verseRef:'Sourate Al-Hashr 59:10',action:'Priez maintenant pour trois personnes que vous aimez avec bont\u00e9'}
  },
  {
    id:17, emoji:'🌹',
    ar:{title:'الشكر ذكر',desc:'الشكر من أعظم أنواع الذكر. من شكر الله زاده الله نعماً. الشاكر يرى النعم في كل شيء.',verse:'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',verseRef:'سورة إبراهيم ١٤: ٧',action:'اكتب ٥ نعم تشكر الله عليها الآن'},
    en:{title:'Gratitude is Dhikr',desc:'Gratitude is among the greatest forms of dhikr. Whoever thanks God, God increases their blessings. The grateful see blessings in everything.',verse:'If you are grateful, I will surely increase you',verseRef:'Surah Ibrahim 14:7',action:'Write down 5 blessings you are grateful for right now'},
    fr:{title:'La Gratitude est Dhikr',desc:'La gratitude est parmi les plus grandes formes de dhikr. Celui qui remercie Dieu, Dieu augmente ses bienfaits. Le reconnaissant voit des bienfaits partout.',verse:'Si vous \u00eates reconnaissants, Je vous augmenterai',verseRef:'Sourate Ibrahim 14:7',action:'\u00c9crivez 5 bienfaits pour lesquels vous remerciez Dieu maintenant'}
  },
  {
    id:18, emoji:'🌍',
    ar:{title:'الذكر الجماعي',desc:'حلقات الذكر تحفها الملائكة وتنزل عليها السكينة. الاجتماع على ذكر الله من أعظم القربات.',verse:'وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُم بِالْغَدَاةِ وَالْعَشِيِّ',verseRef:'سورة الكهف ١٨: ٢٨',action:'احضر حلقة ذكر أو اقرأ القرآن مع عائلتك الليلة'},
    en:{title:'Collective Remembrance',desc:'Circles of dhikr are surrounded by angels and tranquility descends upon them. Gathering to remember God is among the greatest acts of worship.',verse:'And keep yourself patient with those who call upon their Lord morning and evening',verseRef:'Surah Al-Kahf 18:28',action:'Attend a dhikr circle or read Quran with your family tonight'},
    fr:{title:'Rappel Collectif',desc:'Les cercles de dhikr sont entour\u00e9s par les anges et la tranquillit\u00e9 y descend. Se r\u00e9unir pour rappeler Dieu est parmi les plus grands actes d\'adoration.',verse:'Fais preuve de patience avec ceux qui invoquent leur Seigneur matin et soir',verseRef:'Sourate Al-Kahf 18:28',action:'Assistez \u00e0 un cercle de dhikr ou lisez le Coran avec votre famille ce soir'}
  },
  {
    id:19, emoji:'🔑',
    ar:{title:'التوبة والرجوع إلى الله',desc:'التوبة هي أعظم أنواع الدعاء — أن ترجع إلى الله بقلب صادق. باب التوبة مفتوح دائماً ما لم تبلغ الروح الحلقوم.',verse:'وَتُوبُوا إِلَى اللَّهِ جَمِيعًا أَيُّهَ الْمُؤْمِنُونَ',verseRef:'سورة النور ٢٤: ٣١',action:'توقف الآن وتب إلى الله من ذنب واحد — بصدق ونية حقيقية'},
    en:{title:'Repentance and Returning to God',desc:'Repentance is the greatest form of supplication — returning to God with a sincere heart. The door of repentance is always open as long as the soul hasn\'t reached the throat.',verse:'And turn to Allah in repentance, all of you, O believers',verseRef:'Surah An-Nur 24:31',action:'Pause now and sincerely repent to God from one sin — with true intention'},
    fr:{title:'Repentir et Retour \u00e0 Dieu',desc:'Le repentir est la plus grande forme de supplication — revenir \u00e0 Dieu avec un c\u0153ur sinc\u00e8re. La porte du repentir est toujours ouverte tant que l\'\u00e2me n\'a pas atteint la gorge.',verse:'Et repentez-vous tous devant Allah, \u00f4 croyants',verseRef:'Sourate An-Nur 24:31',action:'Faites une pause et repentez-vous sinc\u00e8rement d\'un p\u00e9ch\u00e9 — avec une intention vraie'}
  },
  {
    id:20, emoji:'🏔️',
    ar:{title:'الثبات على الذكر',desc:'الذكر يحتاج مداومة. ليس المهم أن تذكر الله يوماً ثم تنسى أياماً. أحب الأعمال إلى الله أدومها وإن قلّ.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا',verseRef:'سورة الأحزاب ٣٣: ٤١',action:'اختر ذكراً واحداً وداوم عليه كل يوم لمدة شهر'},
    en:{title:'Consistency in Dhikr',desc:'Dhikr requires consistency. It\'s not about remembering God one day and forgetting for days. The most beloved deeds to God are the most consistent, even if small.',verse:'O you who believe, remember Allah with much remembrance',verseRef:'Surah Al-Ahzab 33:41',action:'Choose one dhikr and maintain it daily for a month'},
    fr:{title:'Constance dans le Dhikr',desc:'Le dhikr n\u00e9cessite de la constance. L\'important n\'est pas de se souvenir de Dieu un jour puis d\'oublier plusieurs jours. Les actes les plus aim\u00e9s de Dieu sont les plus constants.',verse:'\u00d4 vous qui croyez, invoquez Allah d\'une fa\u00e7on abondante',verseRef:'Sourate Al-Ahzab 33:41',action:'Choisissez un dhikr et maintenez-le quotidiennement pendant un mois'}
  }
];

// ═══════════════ ADHKAR DATA ═══════════════
const ADHKAR_DATA = [
  {
    emoji:'🌅', category:'morning',
    ar:{title:'سيد الاستغفار',text:'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ',problem:'كثير من المسلمين يبدأون يومهم بلا ذكر',solution:'ابدأ بسيد الاستغفار — أعظم دعاء يومي'},
    en:{title:'Master of Forgiveness',text:'O Allah, You are my Lord, none has the right to be worshipped but You, You created me and I am Your servant',problem:'Many Muslims start their day without any remembrance',solution:'Begin with the Master of Forgiveness — the greatest daily dua'},
    fr:{title:'Ma\u00eetre du Pardon',text:'O Allah, Tu es mon Seigneur, nul n\'a le droit d\'\u00eatre ador\u00e9 sauf Toi, Tu m\'as cr\u00e9\u00e9 et je suis Ton serviteur',problem:'Beaucoup de musulmans commencent leur journ\u00e9e sans rappel',solution:'Commencez par le Ma\u00eetre du Pardon — le plus grand dua quotidien'}
  },
  {
    emoji:'🌙', category:'evening',
    ar:{title:'المعوذات',text:'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ — قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',problem:'القلق والخوف عند النوم',solution:'قراءة المعوذات ثلاث مرات حصن من كل شر'},
    en:{title:'The Mu\'awwidhat',text:'In the name of Allah, the Most Gracious, the Most Merciful — Say: I seek refuge in the Lord of daybreak',problem:'Anxiety and fear at bedtime',solution:'Reading the Mu\'awwidhat three times is a shield from all evil'},
    fr:{title:'Les Mu\'awwidhat',text:'Au nom d\'Allah, le Tout Mis\u00e9ricordieux — Dis : Je cherche refuge aupr\u00e8s du Seigneur de l\'aube',problem:'Anxi\u00e9t\u00e9 et peur au coucher',solution:'Lire les Mu\'awwidhat trois fois est un bouclier contre tout mal'}
  },
  {
    emoji:'🏠', category:'daily',
    ar:{title:'دعاء الخروج من المنزل',text:'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',problem:'نخرج يومياً بلا ذكر ولا تحصين',solution:'هذا الدعاء يحفظك ويكفيك الشيطان'},
    en:{title:'Dua for Leaving Home',text:'In the name of Allah, I place my trust in Allah, there is no power nor might except with Allah',problem:'We leave daily without remembrance or protection',solution:'This dua protects you and suffices you against Shaytan'},
    fr:{title:'Dua pour Sortir de la Maison',text:'Au nom d\'Allah, je place ma confiance en Allah, il n\'y a de puissance ni de force qu\'en Allah',problem:'Nous sortons quotidiennement sans rappel ni protection',solution:'Ce dua vous prot\u00e8ge et vous suffit contre le Shaytan'}
  },
  {
    emoji:'🍽️', category:'daily',
    ar:{title:'دعاء الطعام',text:'بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ',problem:'الأكل بلا ذكر يُطعم الشيطان معك',solution:'التسمية قبل الطعام بركة وحماية'},
    en:{title:'Dua for Food',text:'In the name of Allah and with the blessings of Allah',problem:'Eating without dhikr lets Shaytan share your food',solution:'Saying Bismillah before eating is a blessing and protection'},
    fr:{title:'Dua pour le Repas',text:'Au nom d\'Allah et avec la b\u00e9n\u00e9diction d\'Allah',problem:'Manger sans dhikr laisse le Shaytan partager votre repas',solution:'Dire Bismillah avant de manger est une b\u00e9n\u00e9diction et protection'}
  },
  {
    emoji:'😴', category:'evening',
    ar:{title:'دعاء النوم',text:'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',problem:'النوم بلا ذكر يترك القلب مكشوفاً',solution:'النوم على ذكر الله يحفظ الروح والجسد'},
    en:{title:'Dua for Sleep',text:'In Your name, O Allah, I die and I live',problem:'Sleeping without dhikr leaves the heart exposed',solution:'Sleeping with God\'s remembrance protects body and soul'},
    fr:{title:'Dua pour le Sommeil',text:'En Ton nom, \u00f4 Allah, je meurs et je vis',problem:'Dormir sans dhikr laisse le c\u0153ur expos\u00e9',solution:'Dormir avec le rappel de Dieu prot\u00e8ge corps et \u00e2me'}
  },
  {
    emoji:'🚗', category:'daily',
    ar:{title:'دعاء السفر',text:'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ',problem:'السفر بلا دعاء يفتقد البركة',solution:'دعاء السفر حماية وتيسير'},
    en:{title:'Dua for Travel',text:'Glory be to Him who has subjected this to us, and we could not have done it ourselves',problem:'Traveling without dua lacks blessing',solution:'The travel dua brings protection and ease'},
    fr:{title:'Dua pour le Voyage',text:'Gloire \u00e0 Celui qui nous a soumis cela, alors que nous n\'\u00e9tions pas capables de le dompter',problem:'Voyager sans dua manque de b\u00e9n\u00e9diction',solution:'Le dua de voyage apporte protection et facilit\u00e9'}
  },
  {
    emoji:'🌧️', category:'daily',
    ar:{title:'دعاء المطر',text:'اللَّهُمَّ صَيِّبًا نَافِعًا',problem:'نمر على نعم الله دون التفات',solution:'كل ظاهرة طبيعية فرصة لذكر الله'},
    en:{title:'Dua for Rain',text:'O Allah, make it beneficial rain',problem:'We pass by God\'s blessings without noticing',solution:'Every natural phenomenon is an opportunity for dhikr'},
    fr:{title:'Dua pour la Pluie',text:'\u00d4 Allah, fais-en une pluie b\u00e9n\u00e9fique',problem:'Nous passons devant les bienfaits de Dieu sans les remarquer',solution:'Chaque ph\u00e9nom\u00e8ne naturel est une occasion de dhikr'}
  },
  {
    emoji:'🤒', category:'daily',
    ar:{title:'دعاء المريض',text:'أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ اشْفِ أَنْتَ الشَّافِي',problem:'المرض يُنسي البعض الدعاء',solution:'الدعاء عند المرض شفاء للروح والجسد'},
    en:{title:'Dua for the Sick',text:'Remove the harm, O Lord of mankind, heal — You are the Healer',problem:'Illness makes some forget to supplicate',solution:'Dua during illness heals both soul and body'},
    fr:{title:'Dua pour le Malade',text:'Enl\u00e8ve le mal, \u00f4 Seigneur des hommes, gu\u00e9ris — Tu es le Gu\u00e9risseur',problem:'La maladie fait oublier \u00e0 certains d\'invoquer',solution:'Le dua pendant la maladie gu\u00e9rit l\'\u00e2me et le corps'}
  }
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'🌅',ar:{label:'أذكار الصباح',source:'حصن المؤمن'},en:{label:'Morning adhkar',source:'Fortress of the believer'},fr:{label:'Adhkar du matin',source:'Forteresse du croyant'}},
  {emoji:'🌙',ar:{label:'أذكار المساء',source:'حصن المؤمن'},en:{label:'Evening adhkar',source:'Fortress of the believer'},fr:{label:'Adhkar du soir',source:'Forteresse du croyant'}},
  {emoji:'📿',ar:{label:'تسبيح بعد الصلاة (٣٣)',source:'السنة النبوية'},en:{label:'Post-prayer tasbih (33)',source:'Prophetic Sunnah'},fr:{label:'Tasbih apr\u00e8s la pri\u00e8re (33)',source:'Sunnah proph\u00e9tique'}},
  {emoji:'📖',ar:{label:'قراءة صفحة من القرآن',source:'أعظم الذكر'},en:{label:'Read a page of Quran',source:'The greatest dhikr'},fr:{label:'Lire une page du Coran',source:'Le plus grand dhikr'}},
  {emoji:'🤲',ar:{label:'دعاء بعد الصلاة',source:'فن الدعاء'},en:{label:'Dua after prayer',source:'The art of dua'},fr:{label:'Dua apr\u00e8s la pri\u00e8re',source:'L\'art du dua'}},
  {emoji:'🔄',ar:{label:'استغفار ١٠٠ مرة',source:'السنة النبوية'},en:{label:'Istighfar 100 times',source:'Prophetic Sunnah'},fr:{label:'Istighfar 100 fois',source:'Sunnah proph\u00e9tique'}},
  {emoji:'💚',ar:{label:'الصلاة على النبي ﷺ',source:'سورة الأحزاب'},en:{label:'Blessings on the Prophet ﷺ',source:'Surah Al-Ahzab'},fr:{label:'Pri\u00e8res sur le Proph\u00e8te ﷺ',source:'Sourate Al-Ahzab'}},
  {emoji:'😴',ar:{label:'أذكار النوم',source:'حصن المؤمن'},en:{label:'Sleep adhkar',source:'Fortress of the believer'},fr:{label:'Adhkar du sommeil',source:'Forteresse du croyant'}},
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تحافظ على أذكار الصباح والمساء يومياً؟',en:'Do you maintain morning and evening adhkar daily?',fr:'Maintenez-vous les adhkar du matin et du soir quotidiennement ?'},
  {ar:'هل تترك الدعاء عند المحن؟',en:'Do you abandon dua during hardships?',fr:'Abandonnez-vous le dua pendant les \u00e9preuves ?'},
  {ar:'هل تسبّح بعد كل صلاة؟',en:'Do you do tasbih after every prayer?',fr:'Faites-vous le tasbih apr\u00e8s chaque pri\u00e8re ?'},
  {ar:'هل تنسى ذكر الله في أنشطتك اليومية؟',en:'Do you forget God\'s remembrance in daily activities?',fr:'Oubliez-vous le rappel de Dieu dans vos activit\u00e9s quotidiennes ?'},
  {ar:'هل تقرأ القرآن يومياً ولو صفحة واحدة؟',en:'Do you read the Quran daily, even one page?',fr:'Lisez-vous le Coran quotidiennement, m\u00eame une page ?'},
  {ar:'هل تستغفر الله بانتظام؟',en:'Do you seek God\'s forgiveness regularly?',fr:'Demandez-vous pardon \u00e0 Dieu r\u00e9guli\u00e8rement ?'},
  {ar:'هل تكثر من الصلاة على النبي ﷺ؟',en:'Do you frequently send blessings on the Prophet ﷺ?',fr:'Envoyez-vous fr\u00e9quemment des pri\u00e8res sur le Proph\u00e8te ﷺ ?'},
  {ar:'هل تعرف آداب الدعاء وتطبقها؟',en:'Do you know and apply the etiquette of dua?',fr:'Connaissez-vous et appliquez-vous l\'\u00e9tiquette du dua ?'},
  {ar:'هل تدعو للآخرين بظهر الغيب؟',en:'Do you pray for others in their absence?',fr:'Priez-vous pour les autres en leur absence ?'},
  {ar:'هل تحرص على قيام الليل ولو ركعتين؟',en:'Do you strive for night prayer, even two rak\'at?',fr:'Vous efforcez-vous de prier la nuit, m\u00eame deux rak\'at ?'},
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء السكينة',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',tr:'اللهم إني أعوذ بك من الهم والحزن والعجز والكسل'},en:{label:'Dua for Tranquility',text:'Allahumma inni a\'udhu bika min al-hammi wal-hazan',tr:'O Allah, I seek refuge in You from worry and grief'},fr:{label:'Dua pour la Tranquillit\u00e9',text:'Allahumma inni a\'udhu bika min al-hammi wal-hazan',tr:'\u00d4 Allah, je cherche refuge aupr\u00e8s de Toi contre le souci et le chagrin'}},
  {ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ',tr:'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم'},en:{label:'Dua of Trust',text:'HasbiyAllahu la ilaha illa Hu, \'alayhi tawakkaltu',tr:'God suffices me. There is no god but He. In Him I trust.'},fr:{label:'Dua de Confiance',text:'HasbiyAllahu la ilaha illa Hu, \'alayhi tawakkaltu',tr:'Dieu me suffit. Il n\'y a de dieu que Lui. En Lui je me confie.'}},
  {ar:{label:'دعاء الحفظ',text:'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ',tr:'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء'},en:{label:'Dua of Protection',text:'Bismillahilladhi la yadurru ma\'asmihi shay\'un',tr:'In the name of Allah, with whose name nothing can harm'},fr:{label:'Dua de Protection',text:'Bismillahilladhi la yadurru ma\'asmihi shay\'un',tr:'Au nom d\'Allah, avec le nom duquel rien ne peut nuire'}},
  {ar:{label:'دعاء الخير',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ',tr:'اللهم إني أسألك العفو والعافية في الدنيا والآخرة'},en:{label:'Dua for Well-being',text:'Allahumma inni as\'aluka al-\'afwa wal-\'afiyah',tr:'O Allah, I ask You for pardon and well-being'},fr:{label:'Dua pour le Bien-\u00eatre',text:'Allahumma inni as\'aluka al-\'afwa wal-\'afiyah',tr:'\u00d4 Allah, je Te demande le pardon et le bien-\u00eatre'}},
  {ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'اللهم اهدني وسددني'},en:{label:'Dua for Guidance',text:'Allahumma ihdini wa saddidni',tr:'O Allah, guide me and set me on the right path'},fr:{label:'Dua pour la Guidance',text:'Allahumma ihdini wa saddidni',tr:'\u00d4 Allah, guide-moi et mets-moi sur le droit chemin'}},
  {ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا',tr:'اللهم اجعل في قلبي نوراً وفي بصري نوراً'},en:{label:'Dua for Light',text:'Allahumma ij\'al fi qalbi nuran',tr:'O Allah, place light in my heart and light in my sight'},fr:{label:'Dua pour la Lumi\u00e8re',text:'Allahumma ij\'al fi qalbi nuran',tr:'\u00d4 Allah, mets de la lumi\u00e8re dans mon c\u0153ur et dans ma vue'}},
  {ar:{label:'دعاء العلم النافع',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا',tr:'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً'},en:{label:'Dua for Beneficial Knowledge',text:'Allahumma inni as\'aluka \'ilman nafi\'an',tr:'O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds'},fr:{label:'Dua pour le Savoir B\u00e9n\u00e9fique',text:'Allahumma inni as\'aluka \'ilman nafi\'an',tr:'\u00d4 Allah, je Te demande un savoir b\u00e9n\u00e9fique, une bonne subsistance et des actes accept\u00e9s'}},
  {ar:{label:'دعاء ختام المجلس',text:'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ',tr:'سبحانك اللهم وبحمدك أشهد أن لا إله إلا أنت أستغفرك وأتوب إليك'},en:{label:'Dua for Closing a Gathering',text:'SubhanakaAllahumma wa bihamdika, ash-hadu an la ilaha illa Anta',tr:'Glory be to You O Allah and praise, I testify there is no god but You'},fr:{label:'Dua de Cl\u00f4ture d\'une Assembl\u00e9e',text:'SubhanakaAllahumma wa bihamdika, ash-hadu an la ilaha illa Anta',tr:'Gloire et louange \u00e0 Toi \u00f4 Allah, j\'atteste qu\'il n\'y a de dieu que Toi'}},
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('fd-lang') || 'ar';
let theme = localStorage.getItem('fd-theme') || 'teal';
const themes = ['teal','night','garden'];
const themeIcons = ['🌿','🌙','🌸'];
const themeNames = {teal:'🌿',night:'🌙 Night',garden:'🌸 Garden'};
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderCards();
  renderAdhkar();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('fd-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabAdhkar', t.tabAdhkar);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('adhkarTitle', t.adhkarTitle); set('adhkarDesc', t.adhkarDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderAdhkar(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('fd-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    {icon:'🤲',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ درساً في فن الذكر':lang==='fr'?'20 le\u00e7ons sur le dhikr':'20 lessons on dhikr'},
    {icon:'📿',tab:'adhkar',title:t.tabAdhkar,desc:lang==='ar'?'أذكار يومية':lang==='fr'?'Adhkar quotidiens':'Daily adhkar'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر معرفتك':lang==='fr'?'Testez vos connaissances':'Test your knowledge'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('cardsContainer').innerHTML = searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n${d.verse}\n\n💡 ${d.action}\n\n— فن الذكر والدعاء | The Art of Dhikr & Dua`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copi\u00e9 !' : 'Copied!');
    } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: ADHKAR ═══════════════
function renderAdhkar() {
  const t = T[lang];
  document.getElementById('adhkarContainer').innerHTML = ADHKAR_DATA.map(a => {
    const d = a[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${a.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="verse-box" style="margin-bottom:12px">
        <div class="verse-arabic">${d.text}</div>
      </div>
      <div class="anxiety-problem">
        <span class="anxiety-label">${lang==='ar'?'😰 المشكلة':lang==='fr'?'😰 Le Probl\u00e8me':'😰 The Problem'}</span>
        ${d.problem}
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${lang==='ar'?'😌 الحل':lang==='fr'?'😌 La Solution':'😌 The Solution'}</span>
        ${d.solution}
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('fd-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('fd-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  document.getElementById('habitsContainer').innerHTML = HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div>
        <div class="habit-label">${d.label}</div>
        <div class="habit-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}
function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('fd-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('fd-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) { launchConfetti(); showToast(T[lang].allDone); }
}
function resetHabits() {
  localStorage.setItem('fd-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'R\u00e9initialis\u00e9' : 'Reset');
}
function updateHabitsProgress(hs) {
  const done = hs.done.length, total = HABITS.length, pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}
function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('fd-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) { streakData.count++; }
    else if (prevState.date !== new Date().toDateString()) { streakData.count = prevState.done.length === HABITS.length ? 1 : 0; }
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) { streakData.count = 0; streakData.lastDate = prevState.date; }
  localStorage.setItem('fd-streak', JSON.stringify(streakData));
}
function getStreak() { return JSON.parse(localStorage.getItem('fd-streak') || '{"count":0}').count; }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#00695C','#4DB6AC','#80CBC4','#E0F2F1','#FFD54F','#A5D6A7','#81C784'];
  for (let i = 0; i < 120; i++) {
    particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-0.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-0.5)*10});
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx;p.y+=p.vy;p.rot+=p.rotSpeed;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);ctx.fillStyle=p.color;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  document.getElementById('quizContainer').innerHTML = QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${lang==='ar'?'نعم':lang==='fr'?'Oui':'Yes'}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${lang==='ar'?'أحياناً':lang==='fr'?'Parfois':'Sometimes'}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${lang==='ar'?'لا':lang==='fr'?'Non':'No'}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}
function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o,oi) => {
    o.classList.toggle('selected', [2,1,0][oi] === val);
  });
  playSound('click');
}
function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang==='ar'?'أجب على جميع الأسئلة':lang==='fr'?'R\u00e9pondez \u00e0 toutes les questions':'Answer all questions');
    return;
  }
  const invertedQs = [1, 3]; // negative questions
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => { score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v; });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji='🌟'; title=lang==='ar'?'ذاكر متميز!':lang==='fr'?'Excellent rappeleur !':'Excellent rememberer!';
    desc=lang==='ar'?'ذكرك لله قوي ومنتظم. استمر وزد!':lang==='fr'?'Votre rappel de Dieu est fort et r\u00e9gulier. Continuez !':'Your remembrance of God is strong and regular. Keep going!';
  } else if (pct >= 50) {
    emoji='🤲'; title=lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc=lang==='ar'?'أنت على الطريق — زد من أذكارك اليومية':lang==='fr'?'Vous \u00eates sur le chemin — augmentez vos adhkar quotidiens':'You\'re on the path — increase your daily adhkar';
  } else {
    emoji='📿'; title=lang==='ar'?'ابدأ الآن!':lang==='fr'?'Commencez maintenant !':'Start now!';
    desc=lang==='ar'?'لم يفت الأوان! ابدأ بذكر واحد يومياً وزد تدريجياً':lang==='fr'?'Il n\'est pas trop tard ! Commencez par un dhikr quotidien':'It\'s not too late! Start with one daily dhikr and build up';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${pct}%</div><div class="qr-title">${title}</div><div class="qr-desc">${desc}</div><button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle:'⚠️ تنبيه مهم',disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.',
      authorName:'الشيخ محمد الغزالي',authorDates:'١٩١٧ — ١٩٩٦',
      authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.',
      bookTitle:'عن الكتاب',bookDesc:'كتاب "فن الذكر والدعاء عند خاتم الأنبياء" يستعرض فيه الشيخ الغزالي فن الذكر والدعاء كما مارسه النبي ﷺ. يوضح الكتاب أن الذكر ليس مجرد كلمات تُردد بل هو حالة قلبية وعقلية تربط الإنسان بخالقه في كل لحظة.',
      sourcesTitle:'المصادر',sources:['كتاب "فن الذكر والدعاء عند خاتم الأنبياء" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','حصن المسلم'],
      contact:'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle:'⚠️ Important Notice',disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName:'Sheikh Mohammed al-Ghazali',authorDates:'1917 — 1996',
      authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.',
      bookTitle:'About the Book',bookDesc:'"The Art of Dhikr and Dua at the Seal of the Prophets" explores how the Prophet ﷺ practiced remembrance and supplication. The book shows that dhikr is not mere words repeated but a state of heart and mind connecting us to our Creator every moment.',
      sourcesTitle:'Sources',sources:['"The Art of Dhikr and Dua" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Fortress of the Muslim'],
      contact:'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle:'⚠️ Avis Important',disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tir\u00e9 du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName:'Sheikh Mohammed al-Ghazali',authorDates:'1917 — 1996',
      authorBio:'Savant et penseur islamique \u00e9gyptien, surnomm\u00e9 \u00ab Le Litt\u00e9raire de la Pr\u00e9dication \u00bb. Auteur de plus de 94 livres. Dipl\u00f4m\u00e9 d\'Al-Azhar, professeur \u00e0 l\'Universit\u00e9 \u00c9mir Abdelkader de Constantine (Alg\u00e9rie). Laur\u00e9at du Prix Roi Faysal.',
      bookTitle:'\u00c0 Propos du Livre',bookDesc:'\u00ab L\'Art du Dhikr et du Dua aupr\u00e8s du Sceau des Proph\u00e8tes \u00bb explore comment le Proph\u00e8te ﷺ pratiquait le rappel et l\'invocation. Le livre montre que le dhikr n\'est pas de simples mots r\u00e9p\u00e9t\u00e9s mais un \u00e9tat du c\u0153ur et de l\'esprit nous connectant \u00e0 notre Cr\u00e9ateur.',
      sourcesTitle:'Sources',sources:['\u00ab L\'Art du Dhikr et du Dua \u00bb — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','La Citadelle du Musulman'],
      contact:'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s=>`<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar:[{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "فن الذكر والدعاء" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ بطاقة، أذكار يومية، تتبع عادات، اختبار، أدعية مختارة.'},{title:'⌨️ اختصارات',body:'استخدم الأسهم للتنقل. Escape لإغلاق اللوحات.'}],
    en:[{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},{title:'📚 Sources',body:'"The Art of Dhikr and Dua" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages, 3 themes, 20 cards, daily adhkar, habit tracker, quiz, selected duas.'},{title:'⌨️ Shortcuts',body:'Use arrow keys to navigate. Escape to close panels.'}],
    fr:[{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'\u00ab L\'Art du Dhikr et du Dua \u00bb par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalit\u00e9s',body:'Trois langues, 3 th\u00e8mes, 20 cartes, adhkar quotidiens, suivi habitudes, quiz, duas s\u00e9lectionn\u00e9es.'},{title:'⌨️ Raccourcis',body:'Utilisez les fl\u00e8ches pour naviguer. \u00c9chap pour fermer les panneaux.'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h=>`<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const cardsPanel = document.getElementById('panel-cards');
      if (!cardsPanel || !cardsPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t=document.getElementById('toast'),m=document.getElementById('toastMsg'); if(t&&m){m.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',2500);} }
function initScrollTop() { const btn=document.getElementById('scrollTop'); window.addEventListener('scroll',()=>{ if(btn) btn.classList.toggle('visible',window.scrollY>300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click'){osc.frequency.value=800;osc.type='sine';gain.gain.value=0.04;}
    else if (type==='success'){osc.frequency.value=523;osc.type='sine';gain.gain.value=0.06;}
    else if (type==='theme'){osc.frequency.value=440;osc.type='triangle';gain.gain.value=0.05;}
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ SWIPE GESTURES ═══════════════
(function() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','cards','adhkar','habits','quiz','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.7) return;
    const currentTab = document.querySelector('.tab.active');
    if (!currentTab) return;
    const currentIdx = tabOrder.indexOf(currentTab.dataset.tab);
    if (currentIdx < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let nextIdx;
    if (dx > 0) nextIdx = isRTL ? Math.min(currentIdx + 1, tabOrder.length - 1) : Math.max(currentIdx - 1, 0);
    else nextIdx = isRTL ? Math.max(currentIdx - 1, 0) : Math.min(currentIdx + 1, tabOrder.length - 1);
    if (nextIdx !== currentIdx) document.querySelector(`.tab[data-tab="${tabOrder[nextIdx]}"]`).click();
  }, { passive: true });
})();
