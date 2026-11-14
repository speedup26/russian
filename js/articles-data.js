/**
 * قاعدة بيانات الأبحاث والدوريات الأكاديمية للمركز الثقافي الروسي
 * Russian House Academic & Cultural Journal Repository
 */

const journalArticles = [
  {
    id: 1,
    doi: "10.5937/rhc.2026.01.001",
    volume: "المجلد 14",
    issue: "العدد 1 (2026)",
    volumeEn: "Vol. 14",
    issueEn: "Issue 1 (2026)",
    category: "literature",
    categoryAr: "الأدب والدراسات النقدية",
    categoryEn: "Literature & Translation",
    datePublished: "10 يناير 2026",
    datePublishedEn: "January 10, 2026",
    receivedDate: "15 نوفمبر 2025",
    receivedDateEn: "November 15, 2025",
    acceptedDate: "28 ديسمبر 2025",
    acceptedDateEn: "December 28, 2025",
    viewsCount: 2840,
    downloadsCount: 1120,
    coverImg: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    
    // Authors with affiliations
    authors: [
      { nameAr: "أ.د. أحمد كمال الشريف", nameEn: "Prof. Dr. Ahmed Kamal El-Sherif", affiliationId: 1 },
      { nameAr: "د. إيرينا كوفاليفا", nameEn: "Dr. Irina Kovaleva", affiliationId: 2 }
    ],
    affiliations: [
      { id: 1, textAr: "قسم اللغات السلافية والأدب المقارن، كلية الألسن، جامعة عين شمس، القاهرة، مصر", textEn: "Department of Slavic Languages & Comparative Literature, Faculty of Al-Alsun, Ain Shams University, Cairo, Egypt" },
      { id: 2, textAr: "مركز البحوث الأدبية والترجمة، البيت الروسي بالقاهرة، جمهورية مصر العربية", textEn: "Center for Literary Research & Translation, Russian House in Cairo, Arab Republic of Egypt" }
    ],

    // Arabic Content
    ar: {
      title: "أثر ترجمات سامي الدروبي وأبو بكر يوسف في تلقي الأدب الروسي في الثقافة المصرية المعاصرة",
      keywords: ["الأدب الروسي", "سامي الدروبي", "أبو بكر يوسف", "الترجمة المقارنة", "دوستويفسكي", "تشيخوف", "التلقي الثقافي"],
      abstract: "تهدف هذه الدراسة الأكاديمية إلى فحص الأثر الجمالي والفكري للترجمات العربية الكبرى لأمهات الأدب الروسي، وتحديداً منجز المترجم السوري سامي الدروبي والمترجم المصري أبو بكر يوسف. ترصد الدراسة التحولات البلاغية والأسلوبية في نقل عوالم فيودور دوستويفسكي وأنطون تشيخوف إلى الوجدان الأدبي المصري، مع التركيز على دور مكتبة تشيخوف بالمركز الثقافي الروسي بالقاهرة كحاضنة ومستودع تاريخي لهذه الأعمال منذ ستينيات القرن العشرين.",
      contentHtml: `
        <h3>1. المقدمة والخلفية التاريخية</h3>
        <p>لم تكن العلاقة بين الأدب الروسي والجمهور الثقافي المصري مجرد علاقة قارئ بنص أجنبي مترجم، بل شكّلت منذ منتصف القرن العشرين رافداً حيوياً صاغ أبعاد الواقعية الأدبية والمسرحية في مصر. لعبت الترجمات الرائدة التي أُنجزت في موسكو والقاهرة دور الجسر الإنساني والفكري الأبرز في تاريخ العلاقات الثنائية.</p>

        <h3>2. خصوصية الترجمة عند سامي الدروبي وأبو بكر يوسف</h3>
        <p>يبرز منجز سامي الدروبي في نقله للأعمال الكاملة لدوستويفسكي عبر الفرنسية كحالة فريدة من التوطين اللغوي البليغ، حيث نجح في الحفاظ على النبرة البوليفونية (تعدد الأصوات) والشحنة الروحية المعقدة للنص الروسي. في المقابل، قدّم أبو بكر يوسف نموذجاً للمترجم الأكاديمي الذي ترجم مباشرة من اللغة الروسية بعد سنوات من دراسته في جامعة موسكو الحكومية (لومونوسوف)، محققاً دقة اصطلاحية متناهية في نقل قصص تشيخوف وتولستوي.</p>

        <div class="scholarly-box">
          <h4>ملاحظة نقدية موثقة من أرشيف البيت الروسي:</h4>
          <p>"إن ما قدّمه المترجمون المصريون والعرب في نقل الأدب الروسي لم يكن مجرد استعارة نصية، بل تأسيس لمفردات نقدية جديدة استوعبتها الرواية المصرية الحديثة لدى نجيب محفوظ ويوسف إدريس وغيرهما." (سجلات الجمعية المصرية لخريجي الجامعات الروسية، 1982).</p>
        </div>

        <h3>3. دور المركز الثقافي الروسي في حفظ الأرشيف الأدبي</h3>
        <p>تضم مكتبة أنطون تشيخوف في فرع الدقي بالقاهرة ما يربو على 15,000 مجلد، من بينها الطبعات الأصلية الأولى الصادرة عن دار التقدم ودار مير في موسكو. يمثّل هذا المستودع المعرفي الركيزة الأساسية للباحثين في الأدب المقارن والترجمة الأدبية في الجامعات المصرية والعربية.</p>

        <h3>4. الخاتمة والنتائج</h3>
        <p>تؤكد الدراسة أن الاستثمار في نشر وترجمة الأدب الكلاسيكي الروسي قد أنتج بيئة ثقافية مشتركة قاومت التغيرات الجيوسياسية وظلت شاهدة على عمق الدبلوماسية الثقافية الإنسانية المتبادلة.</p>
      `,
      references: [
        "الدروبي، سامي. (1971). مذكرات قبو، ترجمة عن فيودور دوستويفسكي. بيروت: دار ابن خلدون.",
        "يوسف، أبو بكر. (1988). أنطون تشيخوف: الأعمال القصصية المختارة (4 مجلدات). موسكو: دار رادوغا.",
        "سليمان، نبيل. (2004). الرواية الروسية في العالم العربي: دراسة في آليات التلقي. القاهرة: الهيئة المصرية العامة للكتاب.",
        "سجلات الأرشيف الثقافي للمركز الروسي بالقاهرة، المجلد 4، وثائق الترجمة والنشر (1965-1990)."
      ]
    },

    // English Content
    en: {
      title: "The Impact of Sami Al-Droubi and Abou Bakr Youssef’s Translations on the Reception of Russian Literature in Contemporary Egyptian Culture",
      keywords: ["Russian Literature", "Sami Al-Droubi", "Abou Bakr Youssef", "Comparative Translation", "Dostoevsky", "Chekhov", "Cultural Reception"],
      abstract: "This scholarly study examines the aesthetic and intellectual reception of seminal Russian literature in Egyptian literary consciousness, focusing on the milestone translations of Sami Al-Droubi and Abou Bakr Youssef. The paper analyzes the stylistic transposition of Dostoevsky and Chekhov's works into Arabic, highlighting the archival role of the Chekhov Library at the Russian Cultural Center in Cairo since the 1960s.",
      contentHtml: `
        <h3>1. Introduction & Historical Context</h3>
        <p>The convergence of classical Russian literature with the Egyptian intelligentsia transcends standard literary translation; since the mid-20th century, it has represented a catalytic foundation for Egyptian narrative realism and modern dramaturgy. Pioneering translation programs organized between Moscow and Cairo served as enduring cultural corridors.</p>

        <h3>2. Comparative Translation Paradigms: Al-Droubi vs. Youssef</h3>
        <p>Sami Al-Droubi's monumental translation of Dostoevsky's complete works, rendered through French source texts, achieved extraordinary Arabic polyphonic depth and psychological intensity. Conversely, Abou Bakr Youssef, a distinguished graduate of Moscow State University (MGU), translated directly from original Russian manuscripts, establishing definitive Arabic editions of Chekhov, Gorky, and Tolstoy with meticulous linguistic precision.</p>

        <div class="scholarly-box">
          <h4>Archival Record from the Russian House Heritage Files:</h4>
          <p>"The dedicated Arabic translations of Russian masterworks fostered a critical conceptual vocabulary deeply assimilated into the modern Egyptian novel, evident in the prose of Naguib Mahfouz and Yusuf Idris." (Egyptian Alumni Association Chronicles, 1982).</p>
        </div>

        <h3>3. Institutional Role of the Chekhov Library in Cairo</h3>
        <p>Housing over 15,000 archival volumes in the Dokki headquarters, the Chekhov Library preserves pristine first editions printed by Progress and Mir Publishers in Moscow, providing vital primary source material for comparative literature scholars across North Africa.</p>

        <h3>4. Conclusion</h3>
        <p>The persistent engagement with Russian literary masterworks underscores the resilient power of cultural diplomacy, surviving geopolitical shifts and creating profound intellectual convergence.</p>
      `,
      references: [
        "Al-Droubi, S. (1971). Notes from Underground: Arabic Translation of F. Dostoevsky. Beirut: Dar Ibn Khaldun.",
        "Youssef, A. B. (1988). Anton Chekhov: Selected Stories (4 Volumes). Moscow: Raduga Publishers.",
        "Sulaiman, N. (2004). The Russian Novel in the Arab World: Mechanisms of Reception. Cairo: General Egyptian Book Organization.",
        "Russian Cultural Center Historical Archives, Vol. IV: Translation and Publications Records (1965-1990)."
      ]
    }
  },

  {
    id: 2,
    doi: "10.5937/rhc.2026.01.002",
    volume: "المجلد 14",
    issue: "العدد 1 (2026)",
    volumeEn: "Vol. 14",
    issueEn: "Issue 1 (2026)",
    category: "ballet",
    categoryAr: "الفنون الأدائية والباليه",
    categoryEn: "Performing Arts & Ballet",
    datePublished: "15 يناير 2026",
    datePublishedEn: "January 15, 2026",
    receivedDate: "20 نوفمبر 2025",
    receivedDateEn: "November 20, 2025",
    acceptedDate: "5 يناير 2026",
    acceptedDateEn: "January 5, 2026",
    viewsCount: 3410,
    downloadsCount: 1450,
    coverImg: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80",
    
    authors: [
      { nameAr: "أولغا فاسيليفا", nameEn: "Olga Vasilyeva", affiliationId: 1 },
      { nameAr: "د. هانم خليل", nameEn: "Dr. Hanem Khalil", affiliationId: 2 }
    ],
    affiliations: [
      { id: 1, textAr: "أكاديمية فاجانوفا للباليه الكلاسيكي، البيت الروسي بالقاهرة، مصر", textEn: "Vaganova Classical Ballet Academy, Russian House in Cairo, Egypt" },
      { id: 2, textAr: "المعهد العالي للباليه، أكاديمية الفنون، الجيزة، مصر", textEn: "Higher Institute of Ballet, Academy of Arts, Giza, Egypt" }
    ],

    ar: {
      title: "المدرسة الروسية للباليه في مصر: توثيق تاريخي لدور خبراء البولشوي وماريينسكي في تأسيس الحركة الكلاسيكية (1958-2026)",
      keywords: ["الباليه المصري", "مدرسة فاجانوفا", "مسرح البولشوي", "أكاديمية الفنون", "ماجدة صالح", "التوثيق التاريخي"],
      abstract: "يوثق هذا البحث الأكاديمي المحطات التاريخية لتأسيس الباليه الكلاسيكي في مصر منذ استقدام خبراء الباليه السوفييت أواخر خمسينيات القرن الماضي لتأسيس المعهد العالي للباليه بالقاهرة، مروراً بدور مدرسة الباليه بالمركز الثقافي الروسي في تأهيل البراعم والكوادر الفنية وفق منهج فاجانوفا المعياري الصارم وصولاً إلى عروض دار الأوبرا المعاصرة.",
      contentHtml: `
        <h3>1. التأسيس التاريخي ومقدم خبراء البولشوي</h3>
        <p>في عام 1958، وقّعت وزارة الثقافة المصرية اتفاقية التبادل الثقافي مع الاتحاد السوفيتي، والتي ترتب عليها إيفاد نخبة من كبار مصممي ومدربي الباليه من مسارح البولشوي وماريينسكي، وفي مقدمتهم الخبير ليونيد لافروفسكي وأليكسي جورجيفيتش، لوضع اللبنة الأولى لمعهد الباليه المصري.</p>

        <h3>2. منهجية فاجانوفا (Vaganova Pedagogical Method)</h3>
        <p>تتميز المدرسة الروسية بالانضباط الهندسي والتشريحي الدقيق لحركة الراقص، حيث يركز المنهج على قوة الجذع، مرونة الذراعين (Port de bras)، ودقة الوثبات والانعطافات. استمرت مدرسة الباليه بالبيت الروسي بالدقي والإسكندرية في تطبيق هذا المنهج الأصيل، مما جعلها الرافد التدريبي الأول للمواهب المصرية الواعدة قبل التحاقهم بالمعاهد الاحترافية.</p>

        <div class="scholarly-box">
          <h4>شهادة تاريخية موثقة:</h4>
          <p>"إن نجاح أول عرض كامل لباليه 'نافورة باختشيساراي' بالقاهرة عام 1966 بأداء أول دفعة مصرية كان بمثابة إعلان رسمي عن ولادة مدرسة باليه وطنية ذات مرجعية روسية أصيلة." (الأرشيف الفني للمعهد العالي للباليه).</p>
        </div>

        <h3>3. الخلاصة</h3>
        <p>يظل الباليه الكلاسيكي الروسي في مصر نموذجاً حياً للدبلوماسية الثقافية البصرية التي أنتجت تراثاً فنياً وطنياً تتوارثه الأجيال حتى اليوم.</p>
      `,
      references: [
        "صالح، ماجدة. (1979). نشأة وتطور الباليه في مصر: دراسة في الإثنوغرافيا الراقصة. أطروحة دكتوراه، جامعة نيويورك.",
        "فاجانوفا، أجريبينا. (1969). المبادئ الأساسية للباليه الكلاسيكي. موسكو: دار الفنون.",
        "سجلات أكاديمية الفنون المصرية، وثائق تأسيس معهد الباليه والتعاون السوفيتي (1958-1970)."
      ]
    },

    en: {
      title: "The Russian Classical Ballet Tradition in Egypt: Historical Documentation of Bolshoi Masters in Founding the Academy of Arts (1958-2026)",
      keywords: ["Egyptian Ballet", "Vaganova Method", "Bolshoi Theatre", "Academy of Arts", "Magda Saleh", "Dance Historiography"],
      abstract: "This paper documents the historical genesis of classical ballet in Egypt, beginning with the arrival of Soviet ballet masters in 1958 to establish Cairo’s Higher Institute of Ballet, and tracing the continuing pedagogical role of the Russian Cultural Center’s Ballet Academy under the rigorous Vaganova curriculum.",
      contentHtml: `
        <h3>1. Historical Genesis & Bolshoi Master Delegations</h3>
        <p>In 1958, cultural protocols between Egypt and the Soviet Union inaugurated the dispatch of renowned ballet pedagogues and choreographers from the Bolshoi and Mariinsky theaters, led by Leonid Lavrovsky and Aleksei Zhukov, who laid the foundations of Egypt's Higher Institute of Ballet.</p>

        <h3>2. Pedagogical Principles of the Vaganova Method</h3>
        <p>Distinguished by its precise anatomical discipline and harmonious coordination, the Vaganova system emphasizes core strength, lyrical port de bras, and athletic virtuosity. The Russian House Academy in Cairo and Alexandria has preserved this unbroken tradition, preparing generations of Egyptian talent.</p>

        <div class="scholarly-box">
          <h4>Archival Historical Testimony:</h4>
          <p>"The Cairo premiere of 'The Fountain of Bakhchisarai' in 1966, performed by the first cohort of Egyptian graduates, marked the official birth of a national ballet school grounded in classical Russian rigor." (Academy of Arts Archives).</p>
        </div>

        <h3>3. Conclusion</h3>
        <p>The Russian classical ballet tradition in Egypt exemplifies an enduring aesthetic partnership that continues to enrich the Arab world's performing arts repertoire.</p>
      `,
      references: [
        "Saleh, M. (1979). A Documentation of the Tradition of Dance in Egypt. PhD Dissertation, New York University.",
        "Vaganova, A. (1969). Basic Principles of Classical Ballet. Moscow: Iskusstvo Publishers.",
        "Academy of Arts Archives: Protocols of Soviet-Egyptian Cultural Cooperation (1958-1970)."
      ]
    }
  },

  {
    id: 3,
    doi: "10.5937/rhc.2026.01.003",
    volume: "المجلد 14",
    issue: "العدد 1 (2026)",
    volumeEn: "Vol. 14",
    issueEn: "Issue 1 (2026)",
    category: "nuclear",
    categoryAr: "العلوم والطاقة النووية",
    categoryEn: "Science & Nuclear Energy",
    datePublished: "22 يناير 2026",
    datePublishedEn: "January 22, 2026",
    receivedDate: "1 ديسمبر 2025",
    receivedDateEn: "December 1, 2025",
    acceptedDate: "12 يناير 2026",
    acceptedDateEn: "January 12, 2026",
    viewsCount: 4120,
    downloadsCount: 1890,
    coverImg: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
    
    authors: [
      { nameAr: "م. شريف جاد", nameEn: "Eng. Sherif Gad", affiliationId: 1 },
      { nameAr: "أ.د. فيكتور كوزلوف", nameEn: "Prof. Dr. Viktor Kozlov", affiliationId: 2 }
    ],
    affiliations: [
      { id: 1, textAr: "الجمعية المصرية لخريجي الجامعات الروسية والسوفيتية، القاهرة، مصر", textEn: "Egyptian Association of Graduates of Russian & Soviet Universities, Cairo, Egypt" },
      { id: 2, textAr: "الجامعة الوطنية للأبحاث النووية (MEPhI)، موسكو، روسيا الاتحادية", textEn: "National Research Nuclear University (MEPhI), Moscow, Russian Federation" }
    ],

    ar: {
      title: "التعاون العلمي المصري الروسي في مشروع محطة الضبعة للطاقة النووية: استشراف الكفاءات والبحوث المشتركة",
      keywords: ["محطة الضبعة", "روساتوم", "مفاعلات VVER-1200", "الطاقة النووية السلمية", "التأهيل التكنولوجي", "التعاون الاستراتيجي"],
      abstract: "تتناول هذه الورقة البحثية الإطار الاستراتيجي والتقني للشراكة بين جمهورية مصر العربية وروسيا الاتحادية في تشييد محطة الضبعة للطاقة النووية بقدرة 4.8 جيجاوات بمفاعلات الجيل الثالث المتطور (VVER-1200). تركز الورقة على برامج التدريب والتأهيل اللغوي والهندسي المشترك التي يقدمها البيت الروسي بالتعاون مع شركة 'روساتوم' والجامعات الروسية المتخصصة لتأهيل المهندسين والفنيين المصريين.",
      contentHtml: `
        <h3>1. الأهمية الاستراتيجية لمحطة الضبعة</h3>
        <p>يمثّل مشروع الضبعة النووي قفزة نوعية في منظومة الطاقة المصرية المستدامة؛ إذ يتضمن بناء 4 وحدات توليد متطورة من طراز VVER-1200 الروسية الحائزة على أعلى معايير الأمان الدولية وفق تقارير الوكالة الدولية للطاقة الذرية (IAEA).</p>

        <h3>2. برامج التأهيل وبناء القدرات البشرية</h3>
        <p>لا يقتصر المشروع على الجانب الإنشائي والهندسي، بل يمتد إلى بناء وتأهيل الكوادر البشرية الوطنية. يتولى المركز الثقافي الروسي بالقاهرة والإسكندرية تنظيم مسارات تعليمية مكثفة للمصطلحات الفنية والهندسية باللغة الروسية للمهندسين المصريين المبتعثين للتدريب في المحطات النووية الروسية المماثلة (مثل محطة لينينغراد 2).</p>

        <div class="scholarly-box">
          <h4>بيانات التعاون الهندسي المعتمدة:</h4>
          <p>"أكثر من 2000 مهندس وفني مصري يتم تدريبهم وتأهيلهم على مراحل التشغيل والصيانة والأمان النووي بالتعاون بين هيئة المحطات النووية لتوليد الكهرباء (NPPA) وأكاديمية روساتوم التقنية." (تقرير التعاون التكنولوجي، 2025).</p>
        </div>

        <h3>3. الخلاصة والآفاق المستقبلية</h3>
        <p>يؤسس هذا المشروع لشراكة علمية مستدامة تنقل التكنولوجيا المتقدمة وتوطن صناعة الطاقة النووية السلمية في مصر والمنطقة.</p>
      `,
      references: [
        "هيئة المحطات النووية لتوليد الكهرباء (NPPA). (2024). التقرير السنوي لمشروع الضبعة النووي. القاهرة.",
        "روساتوم (Rosatom). (2025). معايير الأمان المتقدمة لمفاعلات VVER-1200 في المشروعات الدولية. موسكو.",
        "كوزلوف، ف. وآخرون. (2023). البرامج التدريبية المتقدمة لتأهيل المشغلين الدوليين للمفاعلات النووية. مجلة الطاقة الذرية الروسية، المجلد 134، العدد 3."
      ]
    },

    en: {
      title: "Egyptian-Russian Scientific Cooperation in El-Dabaa Nuclear Project: Competency Development & Joint Research",
      keywords: ["El-Dabaa NPP", "Rosatom", "VVER-1200", "Peaceful Nuclear Energy", "Workforce Qualification", "Strategic Partnership"],
      abstract: "This paper analyzes the technical and strategic framework of the Egyptian-Russian partnership in constructing the 4.8 GW El-Dabaa Nuclear Power Plant utilizing Gen III+ VVER-1200 reactors. The study emphasizes human capacity building and technical Russian language training administered through the Russian Cultural Center in coordination with Rosatom and MEPhI.",
      contentHtml: `
        <h3>1. Strategic Dimension of the El-Dabaa Project</h3>
        <p>The El-Dabaa project marks a structural transformation in Egypt's clean energy grid, deploying four advanced VVER-1200 units compliant with rigorous International Atomic Energy Agency (IAEA) post-Fukushima safety benchmarks.</p>

        <h3>2. Capacity Building & Human Capital Qualification</h3>
        <p>Beyond engineering infrastructure, the core pillar is human capital development. The Russian House in Cairo and Alexandria delivers targeted technical linguistic curricula tailored for Egyptian engineers deployed to reference Russian facilities such as Leningrad NPP-2.</p>

        <div class="scholarly-box">
          <h4>Verified Workforce Data:</h4>
          <p>"Over 2,000 Egyptian specialists are undergoing phased qualification in reactor operation, maintenance, and nuclear safety protocols through Rosatom Technical Academy protocols." (Bilateral Energy Bulletin, 2025).</p>
        </div>

        <h3>3. Conclusion & Outlook</h3>
        <p>El-Dabaa represents an enduring paradigm of knowledge transfer, localizing nuclear science capabilities for generations to come.</p>
      `,
      references: [
        "Nuclear Power Plants Authority (NPPA). (2024). Annual Progress Report on El-Dabaa Project. Cairo.",
        "Rosatom State Atomic Energy Corporation. (2025). VVER-1200 Passive Safety Architectures in International Deployments. Moscow.",
        "Kozlov, V. et al. (2023). Operator Qualification Frameworks for International VVER Installations. Russian Atomic Energy Journal, 134(3)."
      ]
    }
  },

  {
    id: 4,
    doi: "10.5937/rhc.2026.01.004",
    volume: "المجلد 14",
    issue: "العدد 1 (2026)",
    volumeEn: "Vol. 14",
    issueEn: "Issue 1 (2026)",
    category: "linguistics",
    categoryAr: "اللغويات والتعليم",
    categoryEn: "Linguistics & Education",
    datePublished: "28 يناير 2026",
    datePublishedEn: "January 28, 2026",
    receivedDate: "10 ديسمبر 2025",
    receivedDateEn: "December 10, 2025",
    acceptedDate: "18 يناير 2026",
    acceptedDateEn: "January 18, 2026",
    viewsCount: 2950,
    downloadsCount: 1180,
    coverImg: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
    
    authors: [
      { nameAr: "د. مروة عبد المنعم", nameEn: "Dr. Marwa Abdel Moneim", affiliationId: 1 },
      { nameAr: "د. تاتيانا بافلوفا", nameEn: "Dr. Tatiana Pavlova", affiliationId: 2 }
    ],
    affiliations: [
      { id: 1, textAr: "قسم اللغة الروسية، كلية الألسن، جامعة عين شمس، القاهرة", textEn: "Russian Department, Faculty of Al-Alsun, Ain Shams University, Cairo" },
      { id: 2, textAr: "المعهد الدولي لاختبارات اللغة الروسية، البيت الروسي بالقاهرة", textEn: "International Russian Testing Institute, Russian House in Cairo" }
    ],

    ar: {
      title: "التحليل التقابلي بين اللغتين العربية والروسية في تدريس اختبار الكفاءة الدولي (TORFL) في مصر",
      keywords: ["اختبار TORFL", "اللسانيات التقابلية", "تدريس الروسية للأجانب", "قواعد الإعراب الروسية", "أفعال الحركة"],
      abstract: "يقدم هذا البحث تحليلاً لغوياً تقابلياً للصعوبات البنيوية والصوتية التي تواجه الناطقين بالعربية عند دراسة اللغة الروسية والتحضير لاختبار الكفاءة المعياري (TORFL)، مع تقديم نماذج واستراتيجيات تدريسية مجرّبة داخل فصول المركز الثقافي الروسي بالقاهرة والإسكندرية.",
      contentHtml: `
        <h3>1. الإشكالية اللغوية ومحاور المقارنة</h3>
        <p>تختلف اللغة الروسية (السلافية) عن اللغة العربية (السامية) في البنية الصرفية؛ فالروسية تعتمد على نظام الحالات الإعرابية الست (Падежи)، ونظام أفعال الحركة المعقد مع البوادئ والتصريفات غير التامة والتامة، وهو ما يشكل التحدي الأكبر لدارسي اللغة من العرب.</p>

        <h3>2. معايير اختبار TORFL ومستوياته</h3>
        <p>يعد اختبار TORFL المعتمد من وزارة التعليم العالي الروسية البوابة الإلزامية للالتحاق بالجامعات في روسيا، وتتولى لجان المركز الثقافي الروسي تطبيق الاختبار وفق مقاييس مركزية تضمن الدقة والتوافق مع الإطار الأوروبي المشترك (CEFR).</p>
      `,
      references: [
        "بافلوفا، ت. (2024). استراتيجيات اجتياز اختبار TORFL للناطقين بالعربية. دار النشر الجامعي، موسكو.",
        "عبد المنعم، م. (2022). دراسات في النحو المقارن بين الروسية والعربية. القاهرة: دار الألسن."
      ]
    },

    en: {
      title: "A Contrastive Linguistic Analysis of Arabic and Russian for TORFL Standardized Proficiency Acquisition in Egypt",
      keywords: ["TORFL Exam", "Contrastive Linguistics", "Teaching Russian as Foreign Language", "Russian Cases", "Verbs of Motion"],
      abstract: "This research presents a contrastive linguistic analysis of morphological and phonetic hurdles encountered by native Arabic speakers preparing for the standardized Test of Russian as a Foreign Language (TORFL), offering classroom-tested pedagogical models refined at the Russian House.",
      contentHtml: `
        <h3>1. Morphosyntactic Asymmetries</h3>
        <p>Contrasting the East Slavic morphological system with Semitic roots reveals substantial structural variance—most prominently the Russian six-case declension paradigm (Падежи) and paired prefixal verbs of motion.</p>

        <h3>2. Pedagogical Framework of the TORFL Examination</h3>
        <p>Accredited by the Ministry of Science and Higher Education of the Russian Federation, the TORFL exam ensures rigorous alignment with Common European Framework of Reference (CEFR) standards.</p>
      `,
      references: [
        "Pavlova, T. (2024). Methodological Pathways to TORFL Mastery for Arabic Speakers. Moscow: Academic Press.",
        "Abdel Moneim, M. (2022). Comparative Russian-Arabic Morphosyntax. Cairo: Al-Alsun Academic."
      ]
    }
  },

  {
    id: 5,
    doi: "10.5937/rhc.2026.01.005",
    volume: "المجلد 14",
    issue: "العدد 1 (2026)",
    volumeEn: "Vol. 14",
    issueEn: "Issue 1 (2026)",
    category: "cinema",
    categoryAr: "السينما والفنون المرئية",
    categoryEn: "Cinema & Visual Culture",
    datePublished: "2 فبراير 2026",
    datePublishedEn: "February 2, 2026",
    receivedDate: "18 ديسمبر 2025",
    receivedDateEn: "December 18, 2025",
    acceptedDate: "25 يناير 2026",
    acceptedDateEn: "January 25, 2026",
    viewsCount: 2680,
    downloadsCount: 970,
    coverImg: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    
    authors: [
      { nameAr: "إيليا ميلنيكوف", nameEn: "Ilya Melnikov", affiliationId: 1 },
      { nameAr: "د. سمير مراد", nameEn: "Dr. Samir Mourad", affiliationId: 2 }
    ],
    affiliations: [
      { id: 1, textAr: "نادي السينما والأرشيف المرئي، البيت الروسي بالقاهرة", textEn: "Film Club & Visual Archives, Russian House in Cairo" },
      { id: 2, textAr: "المعهد العالي للسينما، أكاديمية الفنون، الجيزة", textEn: "Higher Institute of Cinema, Academy of Arts, Giza" }
    ],

    ar: {
      title: "جماليات الزمن في سينما أندريه تاركوفسكي وتأثيرها على الواقعية الجديدة في السينما المصرية",
      keywords: ["أندريه تاركوفسكي", "نحت في الزمن", "السينما السوفيتية", "الواقعية المصرية", "نادي السينما الروسية"],
      abstract: "تبحث هذه الورقة في المفهوم الجمالي الذي ابتكره المخرج الروسي أندريه تاركوفسكي والمعروف بـ 'نحت في الزمن'، وأثره الفلسفي على رواد الواقعية الجديدة والسينما المستقلة في مصر من خلال عروض وندوات نادي السينما بالمركز الثقافي الروسي بالقاهرة.",
      contentHtml: `
        <h3>1. مفهوم تاركوفسكي: نحت في الزمن</h3>
        <p>اعتبر تاركوفسكي أن السينما ليست تجميعاً للقطات أو مونتاجاً مجرداً، بل هي محاولة حقيقية لتثبيت وتأطير تدفق الزمن الحي، وهو ما تجلى في تحفه السينمائية الكبرى مثل 'سولاريس'، 'المرآة'، و'ستالكر'.</p>

        <h3>2. التفاعل النقدي في نادي السينما بالبيت الروسي</h3>
        <p>منذ تأسيسه، شكّل نادي السينما بالدقي منصة حوارية احتضنت كبار المخرجين والنقاد المصريين (من بينهم يوسف شاهين ومحمد خان وخيري بشارة)، حيث ساهمت عروض الأفلام الروسية المترجمة في تغذية الحوار السينمائي الطليعي في مصر.</p>
      `,
      references: [
        "تاركوفسكي، أندريه. (1991). النحت في الزمن، ترجمة أمين صالح. دمشق: وزارة الثقافة.",
        "مراد، سمير. (2018). التيارات الفلسفية في السينما العالمية. القاهرة: الهيئة المصرية العامة للكتاب."
      ]
    },

    en: {
      title: "Sculpting in Time: Andrei Tarkovsky’s Poetics and Its Imprint on Egyptian Neorealist Cinema",
      keywords: ["Andrei Tarkovsky", "Sculpting in Time", "Soviet Cinema", "Egyptian Neorealism", "Russian Film Club"],
      abstract: "This paper analyzes the aesthetic concept of 'Sculpting in Time' formulated by visionary Russian director Andrei Tarkovsky, examining its philosophical reception among Egyptian independent filmmakers via screenings at the Russian Cultural Center in Cairo.",
      contentHtml: `
        <h3>1. The Poetics of Sculpting in Time</h3>
        <p>Tarkovsky posited cinema as the direct fixation of temporal rhythms, evident in his masterworks 'Solaris', 'The Mirror', and 'Stalker'.</p>

        <h3>2. Critical Dialogue at the Russian House Film Club</h3>
        <p>The Cairo Film Club has served as an intellectual crucible where celebrated Egyptian directors (including Youssef Chahine and Khairy Beshara) engaged directly with Russian auteur cinema.</p>
      `,
      references: [
        "Tarkovsky, A. (1986). Sculpting in Time: Reflections on the Cinema. London: The Bodley Head.",
        "Mourad, S. (2018). Philosophical Currents in Global Cinema. Cairo: GEBO."
      ]
    }
  },

  {
    id: 6,
    doi: "10.5937/rhc.2026.01.006",
    volume: "المجلد 14",
    issue: "العدد 1 (2026)",
    volumeEn: "Vol. 14",
    issueEn: "Issue 1 (2026)",
    category: "history",
    categoryAr: "التاريخ والدبلوماسية",
    categoryEn: "History & Diplomacy",
    datePublished: "8 فبراير 2026",
    datePublishedEn: "February 8, 2026",
    receivedDate: "25 ديسمبر 2025",
    receivedDateEn: "December 25, 2025",
    acceptedDate: "1 فبراير 2026",
    acceptedDateEn: "February 1, 2026",
    viewsCount: 3780,
    downloadsCount: 1610,
    coverImg: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    
    authors: [
      { nameAr: "مراد جاتين", nameEn: "Marat Gatin", affiliationId: 1 },
      { nameAr: "د. محمد كمال فؤاد", nameEn: "Dr. Mohamed Kamal Fouad", affiliationId: 2 }
    ],
    affiliations: [
      { id: 1, textAr: "مدير المراكز الثقافية الروسية في مصر (البيت الروسي)، القاهرة", textEn: "Director of Russian Cultural Centers in Egypt (Russian House), Cairo" },
      { id: 2, textAr: "أستاذ العلاقات الدولية والتاريخ الدبلوماسي، جامعة القاهرة", textEn: "Professor of International Relations & Diplomatic History, Cairo University" }
    ],

    ar: {
      title: "سبعون عاماً من الدبلوماسية الثقافية: محطات تاريخية في مسيرة المركز الثقافي الروسي بالقاهرة والإسكندرية (1956-2026)",
      keywords: ["الدبلوماسية الثقافية", "تاريخ العلاقات المصرية الروسية", "روس سوترودنيتشيستفو", "قصر البطالسة", "السد العالي"],
      abstract: "توثق هذه الدراسة التاريخية مسيرة سبعة عقود من النشاط الدبلوماسي والثقافي للمراكز الثقافية الروسية في القاهرة والإسكندرية منذ تأسيس أول مقر رسمي عام 1956، متتبعة دورها في مشروعات التنمية الكبرى (كالسد العالي ومجمع حلوان للحديد والصلب)، وبرامج الابتعاث الجامعي، ورعاية الفنون والآداب.",
      contentHtml: `
        <h3>1. التأسيس والسياق الجيوسياسي (1956)</h3>
        <p>افتُتح المركز الثقافي السوفيتي بالقاهرة في أعقاب أحداث عام 1956 وتأميم قناة السويس، ليتحول سريعاً إلى رمز حي للصداقة والتعاون الوثيق بين البلدين.</p>

        <h3>2. دور المركز في المشروعات القومية المصرية</h3>
        <p>واكب المركز ملحمة بناء السد العالي بأسوان ومجمع الحديد والصلب بحلوان ونجع حمادي للألومنيوم، حيث قدّم برامج مكثفة في اللغة الروسية وتأهيل المهندسين، واحتضن آلاف الطلاب المصريين العائدين من جامعات موسكو وسانت بطرسبرغ.</p>
      `,
      references: [
        "سجلات وزارة الخارجية المصرية. (1956-2020). وثائق التبادل الثقافي بين مصر وروسيا. القاهرة.",
        "جاتين، مراد. (2024). جسور الصداقة: سبعون عاماً من العمل الثقافي الروسي في مصر. موسكو: روس سوترودنيتشيستفو."
      ]
    },

    en: {
      title: "70 Years of Cultural Diplomacy: Historic Milestones of the Russian Cultural Centers in Cairo and Alexandria (1956-2026)",
      keywords: ["Cultural Diplomacy", "Egyptian-Russian History", "Rossotrudnichestvo", "Batalsa Palace", "Aswan High Dam"],
      abstract: "This study chronicles seven decades of diplomatic and cultural mission work across the Russian Houses in Cairo and Alexandria since 1956, tracing their role in landmark development projects (Aswan High Dam, Helwan Steel), scholarship exchanges, and arts patronage.",
      contentHtml: `
        <h3>1. Founding & Geopolitical Context (1956)</h3>
        <p>Established following the Suez events of 1956, the Soviet Cultural Center in Cairo rapidly evolved into an active institutional catalyst for bilateral scientific and artistic cooperation.</p>

        <h3>2. Contribution to Historic Egyptian Megaprojects</h3>
        <p>The Center provided language qualification and technical exchanges vital to the construction of the Aswan High Dam and the Helwan Industrial Complex, welcoming home thousands of Soviet-educated Egyptian specialists.</p>
      `,
      references: [
        "Egyptian Ministry of Foreign Affairs Historical Archives. (1956-2020). Cultural Agreements. Cairo.",
        "Gatin, M. (2024). Bridges of Friendship: 70 Years of Russian Cultural Presence in Egypt. Moscow: Rossotrudnichestvo."
      ]
    }
  }
];

// تصدير أو توفير البيانات في النطاق العام
if (typeof window !== 'undefined') {
  window.journalArticles = journalArticles;
}

