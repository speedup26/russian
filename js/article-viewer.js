/**
 * قارئ الأبحاث الأكاديمية للدوريات | Article Viewer Controller
 * يدعم اللغتين العربية والإنجليزية، وتنسيق APA/BibTeX، والطباعة
 */

let currentLang = 'ar';
let currentArticleId = 1;
let currentFontSize = 1.05;

// Translations dictionary for Article View
const articleUiTranslations = {
  ar: {
    backHome: "العودة لفهرس الدوريات والأبحاث",
    langSwitch: "English",
    journalTitle: "سلسلة الأبحاث والدراسات الثقافية للمركز الروسي بمصر",
    journalSub: "Russian House Academic & Cultural Reviews (Cairo & Alexandria)",
    navIssues: "المجلدات والأعداد",
    navCategories: "التصنيفات العلمية",
    navEditorial: "هيئة التحرير",
    navAims: "عن الدورية والاعتماد",
    bcHome: "الرئيسية",
    lblReceived: "تاريخ الاستلام:",
    lblAccepted: "تاريخ القبول:",
    lblPublished: "تاريخ النشر:",
    lblViews: "مشاهدة",
    lblDownloads: "تحميل",
    btnDownloadPdf: "تحميل / طباعة البحث (PDF)",
    btnCite: "نسخ التوثيق (Cite)",
    btnShare: "مشاركة",
    lblFontSize: "حجم الخط:",
    txtAbstractHeading: "المستخلص (Abstract)",
    txtKeywordsLabel: "الكلمات المفتاحية:",
    txtReferencesTitle: "المراجع والمصادر الموثقة (References)",
    txtCopyrightTitle: "حقوق الملكية الفكرية والوصول المفتوح",
    txtCopyrightDesc: "هذا البحث منشور بموجب ترخيص المشاع الإبداعي الدولي Creative Commons Attribution 4.0 International (CC BY 4.0). يُسمح بالنسخ وإعادة التوزيع والاقتباس شريطة ذكر المصدر الأصلي ونسب العمل لأصحابه.",
    txtTocTitle: "محتويات البحث",
    tocAbstract: "المستخلص",
    tocContent: "نص البحث الكامل",
    tocReferences: "المراجع والتوثيق",
    txtJournalInfoTitle: "بيانات الدورية",
    lblSidebarJournal: "الدورية:",
    valSidebarJournal: "سلسلة أبحاث البيت الروسي بمصر",
    lblSidebarPublisher: "الناشر:",
    valSidebarPublisher: "المركز الروسي للعلوم والثقافة بالقاهرة",
    lblSidebarVolume: "المجلد والعدد:",
    lblSidebarIndexing: "الفهرسة:",
    txtRelatedTitle: "أبحاث ذات صلة",
    txtCitationModalTitle: "توثيق واقتباس البحث (Cite this Article)",
    toastCopied: "تم نسخ التوثيق بنجاح إلى الحافظة!",
    toastLinkCopied: "تم نسخ رابط البحث لمشاركته!"
  },
  en: {
    backHome: "Back to Research & Journal Index",
    langSwitch: "العربية",
    journalTitle: "Russian House Academic & Cultural Reviews in Egypt",
    journalSub: "Biannual Peer-Reviewed Scholarly Repository (Cairo & Alexandria)",
    navIssues: "Volumes & Issues",
    navCategories: "Categories",
    navEditorial: "Editorial Board",
    navAims: "Aims & Indexing",
    bcHome: "Home",
    lblReceived: "Received:",
    lblAccepted: "Accepted:",
    lblPublished: "Published:",
    lblViews: "Views",
    lblDownloads: "Downloads",
    btnDownloadPdf: "Download / Print Paper (PDF)",
    btnCite: "Cite Article",
    btnShare: "Share",
    lblFontSize: "Font Size:",
    txtAbstractHeading: "Abstract",
    txtKeywordsLabel: "Keywords:",
    txtReferencesTitle: "References & Sources",
    txtCopyrightTitle: "Copyright & Open Access License",
    txtCopyrightDesc: "This article is distributed under the terms of the Creative Commons Attribution 4.0 International License (CC BY 4.0), permitting unrestricted use, distribution, and reproduction in any medium provided the original work is properly cited.",
    txtTocTitle: "Article Outline",
    tocAbstract: "Abstract",
    tocContent: "Full Article Content",
    tocReferences: "References",
    txtJournalInfoTitle: "Journal Specifications",
    lblSidebarJournal: "Journal:",
    valSidebarJournal: "Russian House Academic Reviews in Egypt",
    lblSidebarPublisher: "Publisher:",
    valSidebarPublisher: "Russian Centre for Science and Culture in Cairo",
    lblSidebarVolume: "Volume & Issue:",
    lblSidebarIndexing: "Indexing:",
    txtRelatedTitle: "Related Research Papers",
    txtCitationModalTitle: "Cite this Research Paper",
    toastCopied: "Citation copied to clipboard successfully!",
    toastLinkCopied: "Article link copied to clipboard!"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Read URL query param ?id=X
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = parseInt(urlParams.get('id'));
  if (!isNaN(idParam) && idParam > 0) {
    currentArticleId = idParam;
  }

  // Check language from URL or localStorage
  const langParam = urlParams.get('lang');
  if (langParam === 'en' || langParam === 'ar') {
    currentLang = langParam;
  }

  setupLanguageSwitcher();
  loadArticle(currentArticleId);
});

function setupLanguageSwitcher() {
  const btn = document.getElementById('articleLangToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      loadArticle(currentArticleId);
    });
  }
}

function loadArticle(id) {
  const article = journalArticles.find(a => a.id === id) || journalArticles[0];
  const dict = articleUiTranslations[currentLang];
  const html = document.documentElement;

  // Direction & Language
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

  // Page title
  document.getElementById('pageTitle').innerText = `${article[currentLang].title} | ${dict.journalTitle}`;

  // UI labels
  document.getElementById('txtBackHome').innerText = dict.backHome;
  document.getElementById('txtLangSwitch').innerText = dict.langSwitch;
  document.getElementById('txtJournalTitle').innerText = dict.journalTitle;
  document.getElementById('txtJournalSub').innerText = dict.journalSub;
  document.getElementById('navIssues').innerText = dict.navIssues;
  document.getElementById('navCategories').innerText = dict.navCategories;
  document.getElementById('navEditorial').innerText = dict.navEditorial;
  document.getElementById('navAims').innerText = dict.navAims;
  document.getElementById('bcHome').innerText = dict.bcHome;
  document.getElementById('lblReceived').innerText = dict.lblReceived;
  document.getElementById('lblAccepted').innerText = dict.lblAccepted;
  document.getElementById('lblPublished').innerText = dict.lblPublished;
  document.getElementById('lblViews').innerText = dict.lblViews;
  document.getElementById('lblDownloads').innerText = dict.lblDownloads;
  document.getElementById('btnDownloadPdf').innerText = dict.btnDownloadPdf;
  document.getElementById('btnCite').innerText = dict.btnCite;
  document.getElementById('btnShare').innerText = dict.btnShare;
  document.getElementById('lblFontSize').innerText = dict.lblFontSize;
  document.getElementById('txtAbstractHeading').innerText = dict.txtAbstractHeading;
  document.getElementById('txtKeywordsLabel').innerText = dict.txtKeywordsLabel;
  document.getElementById('txtReferencesTitle').innerText = dict.txtReferencesTitle;
  document.getElementById('txtCopyrightTitle').innerText = dict.txtCopyrightTitle;
  document.getElementById('txtCopyrightDesc').innerText = dict.txtCopyrightDesc;
  document.getElementById('txtTocTitle').innerHTML = `<i class="fa-solid fa-list-ul"></i> ${dict.txtTocTitle}`;
  document.getElementById('tocAbstract').innerText = dict.tocAbstract;
  document.getElementById('tocContent').innerText = dict.tocContent;
  document.getElementById('tocReferences').innerText = dict.tocReferences;
  document.getElementById('txtJournalInfoTitle').innerHTML = `<i class="fa-solid fa-book-journal-whills"></i> ${dict.txtJournalInfoTitle}`;
  document.getElementById('lblSidebarJournal').innerText = dict.lblSidebarJournal;
  document.getElementById('lblSidebarPublisher').innerText = dict.lblSidebarPublisher;
  document.getElementById('lblSidebarVolume').innerText = dict.lblSidebarVolume;
  document.getElementById('lblSidebarIndexing').innerText = dict.lblSidebarIndexing;
  document.getElementById('txtRelatedTitle').innerHTML = `<i class="fa-solid fa-newspaper"></i> ${dict.txtRelatedTitle}`;
  document.getElementById('txtCitationModalTitle').innerText = dict.txtCitationModalTitle;

  // Article specific elements
  const catText = currentLang === 'ar' ? article.categoryAr : article.categoryEn;
  document.getElementById('bcCategory').innerText = catText;
  document.getElementById('bcTitle').innerText = article[currentLang].title;
  document.getElementById('paperCategory').innerText = catText;
  document.getElementById('paperHeadline').innerText = article[currentLang].title;
  
  // DOI link
  const doiEl = document.getElementById('doiLink');
  doiEl.innerText = article.doi;
  doiEl.href = `https://doi.org/${article.doi}`;

  // Authors Roster
  const authorsHtml = article.authors.map(author => {
    const name = currentLang === 'ar' ? author.nameAr : author.nameEn;
    return `<span class="author-item"><strong>${name}</strong><sup>${author.affiliationId}</sup></span>`;
  }).join('، ');
  document.getElementById('authorsRoster').innerHTML = authorsHtml;

  // Affiliations list
  const affHtml = article.affiliations.map(aff => {
    const text = currentLang === 'ar' ? aff.textAr : aff.textEn;
    return `<div class="affiliation-row"><sup>${aff.id}</sup> ${text}</div>`;
  }).join('');
  document.getElementById('affiliationsList').innerHTML = affHtml;

  // Dates & Metrics
  document.getElementById('valReceived').innerText = currentLang === 'ar' ? article.receivedDate : article.receivedDateEn;
  document.getElementById('valAccepted').innerText = currentLang === 'ar' ? article.acceptedDate : article.acceptedDateEn;
  document.getElementById('valPublished').innerText = currentLang === 'ar' ? article.datePublished : article.datePublishedEn;
  document.getElementById('valViews').innerText = article.viewsCount.toLocaleString();
  document.getElementById('valDownloads').innerText = article.downloadsCount.toLocaleString();

  // Abstract & Keywords
  document.getElementById('abstractBody').innerText = article[currentLang].abstract;
  const keywordsHtml = article[currentLang].keywords.map(kw => `<span class="kw-tag">${kw}</span>`).join('');
  document.getElementById('keywordsTags').innerHTML = keywordsHtml;

  // Full Body Text
  document.getElementById('paperBodyText').innerHTML = article[currentLang].contentHtml;

  // References
  const refHtml = article[currentLang].references.map(ref => `<li>${ref}</li>`).join('');
  document.getElementById('referencesList').innerHTML = refHtml;

  // Sidebar volume info
  const volText = currentLang === 'ar' ? `${article.volume}، ${article.issue}` : `${article.volumeEn}, ${article.issueEn}`;
  document.getElementById('valSidebarVol').innerText = volText;

  // Setup Citations in modal
  setupCitations(article);

  // Setup Related Articles in sidebar
  renderRelatedArticles(article.id);
}

function setupCitations(article) {
  const authorNamesApa = article.authors.map(a => currentLang === 'ar' ? a.nameAr : a.nameEn).join(', & ');
  const title = article[currentLang].title;
  const year = 2026;
  const journal = currentLang === 'ar' ? 'سلسلة أبحاث البيت الروسي' : 'Russian House Academic Reviews';
  
  // APA format
  const apa = `${authorNamesApa} (${year}). ${title}. ${journal}, 14(1), pp. 1-18. https://doi.org/${article.doi}`;
  document.getElementById('citationTextApa').innerText = apa;

  // BibTeX format
  const bib = `@article{rhc_${article.id}_2026,
  author = {${article.authors.map(a => a.nameEn).join(' and ')}},
  title = {${article.en.title}},
  journal = {Russian House Academic Reviews},
  volume = {14},
  number = {1},
  year = {2026},
  doi = {${article.doi}},
  url = {https://doi.org/${article.doi}}
}`;
  document.getElementById('citationTextBib').innerText = bib;
}

function renderRelatedArticles(currentId) {
  const listEl = document.getElementById('relatedPapersList');
  if (!listEl) return;

  const related = journalArticles.filter(a => a.id !== currentId).slice(0, 3);
  listEl.innerHTML = related.map(rel => {
    const title = rel[currentLang].title;
    const date = currentLang === 'ar' ? rel.datePublished : rel.datePublishedEn;
    return `
      <div class="sidebar-related-item">
        <a href="article.html?id=${rel.id}&lang=${currentLang}" class="related-paper-title">${title}</a>
        <div class="related-paper-meta"><i class="fa-regular fa-calendar"></i> ${date} • DOI: ${rel.doi}</div>
      </div>
    `;
  }).join('');
}

// Font Size Adjuster
window.adjustFontSize = function(direction) {
  currentFontSize += direction * 0.08;
  if (currentFontSize < 0.9) currentFontSize = 0.9;
  if (currentFontSize > 1.45) currentFontSize = 1.45;

  const content = document.getElementById('paperBodyText');
  if (content) {
    content.style.fontSize = `${currentFontSize}rem`;
  }
};

// Modal controls
window.openCitationModal = function() {
  const modal = document.getElementById('citationModal');
  if (modal) modal.classList.add('visible');
};

window.closeCitationModal = function() {
  const modal = document.getElementById('citationModal');
  if (modal) modal.classList.remove('visible');
};

window.copyFormat = function(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text).then(() => {
    showToast(articleUiTranslations[currentLang].toastCopied);
    closeCitationModal();
  });
};

window.shareArticle = function() {
  if (navigator.share) {
    navigator.share({
      title: document.getElementById('paperHeadline').innerText,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast(articleUiTranslations[currentLang].toastLinkCopied);
    });
  }
};

function showToast(msg) {
  const toast = document.getElementById('toastBanner');
  const txt = document.getElementById('toastMsgText');
  if (!toast || !txt) return;

  txt.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

