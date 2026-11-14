/**
 * محرك البوابة الأكاديمية للمركز الثقافي الروسي | Home Controller
 * إدارة البحث، التصنيفات العلمية، والتبديل الثنائي للغة (AR / EN)
 */

let currentLang = 'ar';

const homeTranslations = {
  ar: {
    issnText: "ISSN 2958-8421 (Online)",
    peerReviewed: "دورية محكمة ومفهرسة دولياً",
    openAccess: "نشر مفتوح (CC BY 4.0)",
    langToggle: "English",
    
    mastheadTitle: "سلسلة أبحاث ودراسات المركز الثقافي الروسي بمصر",
    mastheadSub: "Russian House Academic & Cultural Reviews (Cairo & Alexandria)",
    
    navHome: "الرئيسية",
    navIssues: "المجلدات والأعداد",
    navCategories: "التصنيفات العلمية",
    navEditorial: "هيئة التحرير",
    navGuidelines: "أخلاقيات النشر والتحكيم",
    
    searchHeroTitle: "مستودع الأبحاث والدراسات الثقافية المفتوحة",
    searchHeroSub: "تصفح مئات الأوراق البحثية المحكمة والمقالات التوثيقية الصادرة عن لجان المركز الثقافي الروسي في القاهرة والإسكندرية",
    searchPlaceholder: "ابحث في الأبحاث بعنوان الورقة، اسم الباحث، الكلمات المفتاحية، أو رمز DOI...",
    
    metricTracks: "6 مسارات بحثية متخصصة",
    metricOpenAccess: "وصول حر كامل 100% مجاناً",
    metricDoi: "معرفات رقمية مسجلة Crossref DOI",
    metricPeerReview: "تحكيم أقران مزدوج التعمية (Double-Blind)",
    
    tabAll: "جميع الأبحاث والدوريات",
    tabLiterature: "الأدب والترجمة",
    tabBallet: "الفنون والباليه",
    tabNuclear: "العلوم والطاقة النووية",
    tabLinguistics: "اللغويات وTORFL",
    tabCinema: "السينما والفنون المرئية",
    tabHistory: "التاريخ والدبلوماسية",
    
    resultsCountPrefix: "عرض",
    resultsCountSuffix: "أبحاث محكّمة",
    
    btnReadArticle: "قراءة البحث الكامل",
    btnViewPdf: "نسخة الطباعة وPDF",
    
    // Sidebar
    sidebarAboutTitle: "عن سلسلة أبحاث البيت الروسي",
    sidebarAboutText: "دورية علمية وثقافية نصف سنوية تصدر عن المركز الثقافي الروسي بجمهورية مصر العربية (وكالة روس سوترودنيتشيستفو). تهدف إلى تعزيز البحوث البينية في الأدب، الفنون، اللغويات التطبيقية، والتاريخ المشترك بين مصر وروسيا.",
    
    sidebarEditorialTitle: "هيئة التحرير الاستشارية",
    editor1Name: "مراد جاتين (Marat Gatin)",
    editor1Role: "رئيس التحرير - مدير المراكز الثقافية الروسية بمصر",
    editor2Name: "م. شريف جاد (Sherif Gad)",
    editor2Role: "مدير التحرير التنفيذي - رئيس جمعية الخريجين",
    editor3Name: "أ.د. أحمد كمال الشريف",
    editor3Role: "رئيس لجنة الدراسات السلافية - جامعة عين شمس",
    
    sidebarIndexingTitle: "الفهرسة والأرشفة الرقمية",
    sidebarIndexingText: "جميع الأبحاث تحصل على معرّفات رقمية دائمة (DOIs) مسجلة لدى Crossref، وتؤرشف أعدادها في مكتبة الإسكندرية ودار الكتب والوثائق القومية المصرية وقاعدة Google Scholar.",
    
    footerAboutTitle: "المركز الروسي للعلوم والثقافة بمصر",
    footerAboutText: "منصة النشر العلمي المفتوح المعنية بتوثيق ونشر الأبحاث والدراسات الثقافية بين جمهورية مصر العربية وروسيا الاتحادية.",
    footerSectionsTitle: "أقسام الدورية",
    footerLinksTitle: "المستودعات الأكاديمية",
    footerCopy: "نسخة تجريبية (Demo) مصممة ومطوّرة بواسطة شركة سبيد اب (Speed Up) • جميع حقوق التصميم والبرمجة والتنفيذ محفوظة لشركة سبيد اب © 2026"
  },

  en: {
    issnText: "ISSN 2958-8421 (Online)",
    peerReviewed: "Peer-Reviewed & Globally Indexed",
    openAccess: "Open Access (CC BY 4.0)",
    langToggle: "العربية",
    
    mastheadTitle: "Russian House Academic & Cultural Reviews in Egypt",
    mastheadSub: "Official Scholarly Journal of the Russian Cultural Centers (Cairo & Alexandria)",
    
    navHome: "Home",
    navIssues: "Volumes & Issues",
    navCategories: "Research Categories",
    navEditorial: "Editorial Board",
    navGuidelines: "Publication Ethics & Review",
    
    searchHeroTitle: "Open-Access Research & Cultural Journal Repository",
    searchHeroSub: "Explore certified peer-reviewed research papers, studies, and cultural documentation published by the Russian House in Cairo & Alexandria",
    searchPlaceholder: "Search research papers by title, author name, keyword, or DOI...",
    
    metricTracks: "6 Specialized Research Fields",
    metricOpenAccess: "100% Free Open Access",
    metricDoi: "Crossref DOI Digital Identifiers",
    metricPeerReview: "Double-Blind Peer-Review Process",
    
    tabAll: "All Research Papers",
    tabLiterature: "Literature & Translation",
    tabBallet: "Performing Arts & Ballet",
    tabNuclear: "Science & Nuclear Energy",
    tabLinguistics: "Linguistics & TORFL",
    tabCinema: "Cinema & Visual Arts",
    tabHistory: "History & Diplomacy",
    
    resultsCountPrefix: "Showing",
    resultsCountSuffix: "peer-reviewed papers",
    
    btnReadArticle: "Read Full Paper",
    btnViewPdf: "Print & PDF Version",
    
    sidebarAboutTitle: "About Russian House Academic Reviews",
    sidebarAboutText: "A biannual peer-reviewed open-access journal published by the Russian Centre for Science and Culture in Egypt (Rossotrudnichestvo). Dedicated to interdisciplinary scholarship across comparative literature, performing arts, linguistics, and diplomatic history.",
    
    sidebarEditorialTitle: "Editorial Leadership",
    editor1Name: "Marat Gatin",
    editor1Role: "Editor-in-Chief • Director of Russian Cultural Centers in Egypt",
    editor2Name: "Eng. Sherif Gad",
    editor2Role: "Managing Editor • President of Egyptian Alumni Association",
    editor3Name: "Prof. Dr. Ahmed Kamal El-Sherif",
    editor3Role: "Head of Slavic Studies Advisory Board • Ain Shams University",
    
    sidebarIndexingTitle: "Digital Indexing & Archiving",
    sidebarIndexingText: "Articles receive persistent Digital Object Identifiers (DOIs) registered via Crossref and are systematically archived in Google Scholar, Bibliotheca Alexandrina, and the Egyptian National Library.",
    
    footerAboutTitle: "Russian Cultural Center in Egypt",
    footerAboutText: "The official academic and cultural publishing portal bridging scholarship and intercultural dialogue between Egypt and the Russian Federation.",
    footerSectionsTitle: "Research Categories",
    footerLinksTitle: "Scholarly Repositories",
    footerCopy: "Demo Version Designed & Engineered by Speed Up Company • All Rights of Design, Development & Execution Reserved © 2026 Speed Up"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  setupLanguageSwitcher();
  setupFilterTabs();
  setupLiveSearch();
  renderPortal();
});

function setupLanguageSwitcher() {
  const btn = document.getElementById('homeLangToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      renderPortal();
    });
  }
}

function renderPortal() {
  const dict = homeTranslations[currentLang];
  const html = document.documentElement;

  // Set Dir and Lang
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

  // Update static UI text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });

  const searchInput = document.getElementById('searchArticlesInput');
  if (searchInput && dict.searchPlaceholder) {
    searchInput.placeholder = dict.searchPlaceholder;
  }

  // Filter & Search articles
  renderArticlesList();
}

function renderArticlesList() {
  const container = document.getElementById('papersFeedContainer');
  const featuredBox = document.getElementById('featuredPaperContainer');
  const countBadge = document.getElementById('resultsCountBadge');
  if (!container) return;

  const activeCategory = document.querySelector('.filter-tab-btn.active')?.getAttribute('data-category') || 'all';
  const query = document.getElementById('searchArticlesInput')?.value.trim().toLowerCase() || '';

  let list = window.journalArticles || [];

  // Filter Category
  if (activeCategory !== 'all') {
    list = list.filter(item => item.category === activeCategory);
  }

  // Filter Query
  if (query) {
    list = list.filter(item => {
      const art = item[currentLang];
      const authorMatch = item.authors.some(a => 
        (currentLang === 'ar' ? a.nameAr : a.nameEn).toLowerCase().includes(query)
      );
      return (
        art.title.toLowerCase().includes(query) ||
        art.abstract.toLowerCase().includes(query) ||
        art.keywords.some(k => k.toLowerCase().includes(query)) ||
        item.doi.toLowerCase().includes(query) ||
        authorMatch
      );
    });
  }

  // Update count badge
  if (countBadge) {
    countBadge.innerText = `${homeTranslations[currentLang].resultsCountPrefix} ${list.length} ${homeTranslations[currentLang].resultsCountSuffix}`;
  }

  if (list.length === 0) {
    if (featuredBox) featuredBox.innerHTML = '';
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: #64748b; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <i class="fa-solid fa-file-circle-question" style="font-size: 2.5rem; color: #cbd5e1; margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.15rem; color: #0b1d3a; margin-bottom: 0.5rem;">${currentLang === 'ar' ? 'لا توجد أوراق بحثية تطابق استعلامك' : 'No research articles match your query'}</h3>
        <p style="font-size: 0.88rem;">${currentLang === 'ar' ? 'جرب البحث بكلمات أخرى أو اختر تصنيفاً علمياً مختلفاً.' : 'Try adjusting your search keywords or select another research field.'}</p>
      </div>
    `;
    return;
  }

  // If no search filter is active and 'all' is selected, display #1 as Featured Lead Paper
  const isDefaultView = activeCategory === 'all' && !query;

  if (isDefaultView && list.length > 0 && featuredBox) {
    const lead = list[0];
    const leadArt = lead[currentLang];
    const authorsStr = lead.authors.map(a => `${currentLang === 'ar' ? a.nameAr : a.nameEn}<sup>${a.affiliationId}</sup>`).join('، ');
    const volStr = currentLang === 'ar' ? `${lead.volume}، ${lead.issue}` : `${lead.volumeEn}, ${lead.issueEn}`;
    const catStr = currentLang === 'ar' ? lead.categoryAr : lead.categoryEn;

    featuredBox.innerHTML = `
      <div class="featured-paper-card">
        <div class="featured-paper-body">
          <span class="paper-category-tag">${catStr} • Featured Lead Research</span>
          <h2 class="featured-headline">
            <a href="article.html?id=${lead.id}&lang=${currentLang}">${leadArt.title}</a>
          </h2>
          <div class="paper-authors-line">${authorsStr}</div>
          <div class="paper-meta-specs">
            <span><i class="fa-regular fa-calendar"></i> ${currentLang === 'ar' ? lead.datePublished : lead.datePublishedEn}</span>
            <span><i class="fa-solid fa-book-journal-whills"></i> ${volStr}</span>
            <span class="doi-span">DOI: ${lead.doi}</span>
            <span><i class="fa-regular fa-eye"></i> ${lead.viewsCount.toLocaleString()}</span>
          </div>
          <p class="featured-abstract-preview">${leadArt.abstract}</p>
          <div class="paper-card-actions">
            <a href="article.html?id=${lead.id}&lang=${currentLang}" class="btn-read-full">
              <i class="fa-solid fa-book-open"></i> ${homeTranslations[currentLang].btnReadArticle}
            </a>
            <a href="article.html?id=${lead.id}&lang=${currentLang}" class="btn-pdf-action">
              <i class="fa-solid fa-file-pdf"></i> ${homeTranslations[currentLang].btnViewPdf}
            </a>
          </div>
        </div>
      </div>
    `;

    // Render the rest in feed
    const remaining = list.slice(1);
    container.innerHTML = remaining.map(item => renderPaperItem(item)).join('');
  } else {
    if (featuredBox) featuredBox.innerHTML = '';
    container.innerHTML = list.map(item => renderPaperItem(item)).join('');
  }
}

function renderPaperItem(item) {
  const art = item[currentLang];
  const authorsStr = item.authors.map(a => `${currentLang === 'ar' ? a.nameAr : a.nameEn}<sup>${a.affiliationId}</sup>`).join('، ');
  const volStr = currentLang === 'ar' ? `${item.volume}، ${item.issue}` : `${item.volumeEn}, ${item.issueEn}`;
  const catStr = currentLang === 'ar' ? item.categoryAr : item.categoryEn;

  return `
    <article class="feed-paper-item">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <span class="paper-category-tag" style="background: #f1f5f9; color: #1e3a8a;">${catStr}</span>
        <span style="font-size: 0.76rem; color: #64748b; font-family: monospace;">DOI: ${item.doi}</span>
      </div>
      <h3 class="paper-item-title">
        <a href="article.html?id=${item.id}&lang=${currentLang}">${art.title}</a>
      </h3>
      <div class="paper-authors-line">${authorsStr}</div>
      <div class="paper-meta-specs" style="margin-bottom: 0.85rem;">
        <span><i class="fa-regular fa-calendar"></i> ${currentLang === 'ar' ? item.datePublished : item.datePublishedEn}</span>
        <span><i class="fa-solid fa-book-journal-whills"></i> ${volStr}</span>
        <span><i class="fa-regular fa-eye"></i> ${item.viewsCount.toLocaleString()}</span>
      </div>
      <p class="paper-item-excerpt">${art.abstract.substring(0, 240)}...</p>
      <div class="paper-card-actions">
        <a href="article.html?id=${item.id}&lang=${currentLang}" class="btn-read-full">
          <i class="fa-solid fa-book-open"></i> ${homeTranslations[currentLang].btnReadArticle}
        </a>
        <a href="article.html?id=${item.id}&lang=${currentLang}" class="btn-pdf-action">
          <i class="fa-solid fa-file-pdf"></i> PDF
        </a>
      </div>
    </article>
  `;
}

function setupFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderArticlesList();
    });
  });
}

function setupLiveSearch() {
  const input = document.getElementById('searchArticlesInput');
  if (input) {
    input.addEventListener('input', () => {
      renderArticlesList();
    });
  }
}
