/**
 * دليل فعاليات الجامعة الافتراضية السورية
 * إعداد الطالب: نورس — الرقم الجامعي: nawras_216779
 * إشراف: د. باسل الخطيب
 */

const EVENTS = [
  {"id":1,  "title":"معرض الكتاب الجامعي",            "cat":"ثقافة",   "date":"2026-10-24","place":"قاعة المكتبة المركزية",  "desc":"معرض يجمع دور النشر والكتب الأكاديمية والمراجع العلمية بخصومات خاصة للطلاب.",        "featured":true,  "img":"assets/img/event1.jpg"},
  {"id":7,  "title":"ندوة الأدب العربي المعاصر",      "cat":"ثقافة",   "date":"2026-11-03","place":"قاعة المحاضرات 2",        "desc":"حوار مفتوح مع نخبة من الأدباء والأكاديميين حول اتجاهات الرواية والشعر العربي الحديث.", "featured":false, "img":"assets/img/event7.jpg"},
  {"id":9,  "title":"أسبوع التراث الوطني",             "cat":"ثقافة",   "date":"2026-11-18","place":"الساحة المركزية",          "desc":"فعاليات تراثية حية تشمل الأزياء الشعبية، الحرف اليدوية، ومعارض الفلكلور السوري.",    "featured":true,  "img":"assets/img/event9.jpg"},
  {"id":10, "title":"معرض الفن التشكيلي",              "cat":"ثقافة",   "date":"2026-11-22","place":"غاليري الجامعة",           "desc":"معرض سنوي لأعمال الطلاب والأساتذة في الرسم الزيتي، النحت، والخط العربي الأصيل.",     "featured":false, "img":"assets/img/event10.jpg"},
  {"id":11, "title":"محاضرة التاريخ الإسلامي",         "cat":"ثقافة",   "date":"2026-12-01","place":"قاعة المحاضرات الكبرى",   "desc":"سلسلة محاضرات علمية تناقش معالم الحضارة والعلوم التجريبية في العصر الذهبي.",           "featured":false, "img":"assets/img/event11.jpg"},
  {"id":12, "title":"مسابقة الشعر والخطابة",           "cat":"ثقافة",   "date":"2026-12-08","place":"المسرح الرئيسي",           "desc":"منافسة أدبية للطلاب في الإلقاء الشعري والخطابة باللغة العربية الفصحى مع جوائز تشجيعية.", "featured":true,  "img":"assets/img/event12.jpg"},
  {"id":13, "title":"يوم التبادل الثقافي",             "cat":"ثقافة",   "date":"2026-12-15","place":"الحديقة الجامعية",         "desc":"ملتقى طلابي للتعرف على ثقافات الشعوب والمأكولات التقليدية وعروض الفنون العالمية.",      "featured":false, "img":"assets/img/event13.jpg"},

  {"id":2,  "title":"بطولة كرة القدم المصغّرة",       "cat":"رياضة",   "date":"2026-10-21","place":"الملعب الرياضي",            "desc":"منافسات كروية حماسية بين فرق كليات الجامعة للفوز بكأس البطولة الجامعية السنوية.",       "featured":true,  "img":"assets/img/event2.jpg"},
  {"id":6,  "title":"ماراثون الجامعة",                 "cat":"رياضة",   "date":"2026-11-14","place":"الحرم الجامعي",             "desc":"سباق جري لمسافة 5 كم مفتوح للطلاب والكادر الأكاديمي مع تكريم أصحاب المراكز الأولى.",  "featured":false, "img":"assets/img/event6.jpg"},
  {"id":14, "title":"بطولة كرة السلة الداخلية",           "cat":"رياضة",   "date":"2026-11-05","place":"الصالة الرياضية المغطاة",  "desc":"دوري كرة السلة بين كليات الهندسة والعلوم والاقتصاد بروح رياضية عالية.",              "featured":false, "img":"assets/img/event14.jpg"},
  {"id":15, "title":"يوم الحركة والنشاط",              "cat":"رياضة",   "date":"2026-11-20","place":"الملاعب الرياضية",          "desc":"أنشطة للياقة البدنية، فحوصات صحية مجانية، ومسابقات حركية تعزز نمط الحياة الصحي.",   "featured":true,  "img":"assets/img/event15.jpg"},
  {"id":16, "title":"بطولة تنس الطاولة",               "cat":"رياضة",   "date":"2026-12-03","place":"قاعة الألعاب الداخلية",    "desc":"منافسات فردية وزوجية سريعة ومثيرة في كرة الطاولة للطلاب وأعضاء الهيئة التعليمية.",     "featured":false, "img":"assets/img/event16.jpg"},
  {"id":17, "title":"سباحة وألعاب مائية",              "cat":"رياضة",   "date":"2026-12-10","place":"المسبح الجامعي",            "desc":"سباقات السباحة الحرة وسباحة التتابع بإشراف مدربين مؤهلين في المسبح الأولمبي الجامعي.", "featured":false, "img":"assets/img/event17.jpg"},
  {"id":18, "title":"فنون الدفاع عن النفس",            "cat":"رياضة",   "date":"2026-12-17","place":"الصالة الرياضية",           "desc":"عروض وورش تدريبية تفاعلية للطلاب في الكاراتيه والجودو والدفاع عن النفس.",              "featured":false, "img":"assets/img/event18.jpg"},

  {"id":3,  "title":"أمسية موسيقية مفتوحة",             "cat":"موسيقى", "date":"2026-10-22","place":"المسرح الرئيسي",           "desc":"أمسية موسيقية شرقية ساحرة تقدم مقطوعات كلاسيكية وتراثية بأنامل طلاب كلية الفنون والموسيقى.", "featured":true,  "img":"assets/img/event3.jpg"},
  {"id":19, "title":"حفل الكورال الجامعي",             "cat":"موسيقى", "date":"2026-11-08","place":"قاعة الاحتفالات",          "desc":"عرض كورالي وطني جماعي بقيادة أستاذة الموسيقى يشارك فيه أكثر من 60 صوتاً طلابياً.",    "featured":true,  "img":"assets/img/event19.jpg"},
  {"id":20, "title":"ورشة الموسيقى الإلكترونية",       "cat":"موسيقى", "date":"2026-11-16","place":"استوديو الصوت",            "desc":"مقدمة عملية في تقنيات الهندسة الصوتية وإنتاج المقطوعات الرقمية باستخدام أحدث البرمجيات.", "featured":false, "img":"assets/img/event20.jpg"},
  {"id":21, "title":"ليلة الجاز والبلوز",              "cat":"موسيقى", "date":"2026-12-05","place":"المسرح الرئيسي",           "desc":"حفل موسيقي حي لموسيقى الجاز مع عازفي الساكسفون والبيانو من المواهب الشابة.",          "featured":false, "img":"assets/img/event21.jpg"},
  {"id":22, "title":"مسابقة أفضل مؤلف موسيقي",        "cat":"موسيقى", "date":"2026-12-19","place":"قاعة الموسيقى",            "desc":"تقييم المؤلفات الموسيقية الأصلية المقدمة من طلاب الجامعة أمام لجنة تحكيم متخصصة.",    "featured":false, "img":"assets/img/event22.jpg"},

  {"id":4,  "title":"يوم العائلة المفتوح",              "cat":"عائلي",  "date":"2026-10-31","place":"الحديقة الجامعية",         "desc":"أنشطة ترفيهية للأطفال، ألعاب تفاعلية، ومساحات للاسترخاء تجمع عائلات الطلاب والكادر.", "featured":true,  "img":"assets/img/event4.jpg"},
  {"id":23, "title":"ورشة الطبخ العائلية",             "cat":"عائلي",  "date":"2026-11-12","place":"المطبخ التدريبي",          "desc":"ورشة عمل طهي ممتعة لتحضير وجبات صحية وسريعة بمشاركة الطلاب وذويهم.",                  "featured":false, "img":"assets/img/event23.jpg"},
  {"id":24, "title":"نزهة الطبيعة الجامعية",           "cat":"عائلي",  "date":"2026-11-28","place":"الحديقة الجامعية",         "desc":"يوم بيئي وترفيهي في الهواء الطلق يتضمن مسابقات تثقيفية حول استدامة البيئة والتشجير.",  "featured":true,  "img":"assets/img/event24.jpg"},
  {"id":25, "title":"حفلة الأطفال والألعاب",           "cat":"عائلي",  "date":"2026-12-13","place":"الساحة المركزية",          "desc":"مهرجان مرح مخصص لأطفال عائلات الجامعة يضم فقرات سحرية، رسم على الوجوه، وتوزيع هدايا.", "featured":false, "img":"assets/img/event25.jpg"},

  {"id":5,  "title":"هاكاثون الذكاء الاصطناعي",        "cat":"تقنية",  "date":"2026-11-07","place":"مختبر الحاسوب",            "desc":"تحدٍ برمجي مكثف لمدة 24 ساعة لتطوير نماذج ذكاء اصطناعي تحل مشكلات واقعية.",          "featured":false, "img":"assets/img/event5.jpg"},
  {"id":8,  "title":"ورشة تصميم الواجهات",             "cat":"تقنية",  "date":"2026-11-10","place":"قاعة الورشات",             "desc":"تطبيقات عملية في بناء واجهات الويب العصرية وسهولة الاستخدام باستخدام HTML5 وCSS3.",  "featured":false, "img":"assets/img/event8.jpg"},
  {"id":26, "title":"معرض مشاريع التخرج",              "cat":"تقنية",  "date":"2026-11-25","place":"قاعة المعارض التقنية",     "desc":"استعراض أبرز ابتكارات خريجي الهندسة المعلوماتية والاتصالات بحضور ممثلي الشركات.",     "featured":true,  "img":"assets/img/event26.jpg"},
  {"id":27, "title":"ورشة الأمن السيبراني",            "cat":"تقنية",  "date":"2026-12-02","place":"مختبر الشبكات",            "desc":"أساسيات الحماية الرقمية، اكتشاف الثغرات، ومفاهيم الدفاع السيبراني الحديثة.",           "featured":false, "img":"assets/img/event27.jpg"},
  {"id":28, "title":"مؤتمر ريادة الأعمال الرقمية",    "cat":"تقنية",  "date":"2026-12-09","place":"قاعة المحاضرات الكبرى",   "desc":"جلسات حوارية ملهمة مع رواد أعمال ومؤسسي شركات ناشئة تقنية لمناقشة فرص السوق.",         "featured":false, "img":"assets/img/event28.jpg"},
  {"id":29, "title":"ورشة تطوير تطبيقات الهاتف",      "cat":"تقنية",  "date":"2026-12-16","place":"مختبر البرمجة",            "desc":"بناء تطبيقات هاتف متجاوبة عبر أطر العمل الحديثة والربط مع الخدمات السحابية.",           "featured":true,  "img":"assets/img/event29.jpg"},

  {"id":30, "title":"أسبوع العلوم الجامعي",            "cat":"علوم",   "date":"2026-11-02","place":"مبنى العلوم التطبيقية",   "desc":"تجارب فيزيائية وكيميائية حية ومختبرات مفتوحة تتيح للطلاب استكشاف أحدث الاكتشافات.",     "featured":true,  "img":"assets/img/event30.jpg"},
  {"id":31, "title":"محاضرة التغير المناخي",            "cat":"علوم",   "date":"2026-11-09","place":"قاعة المحاضرات 3",        "desc":"نقاش علمي مستفيض مع خبراء البيئة حول التحديات المناخية وسبل التحول نحو الطاقة النظيفة.", "featured":false, "img":"assets/img/event31.jpg"},
  {"id":32, "title":"ورشة الكيمياء الحيوية",           "cat":"علوم",   "date":"2026-11-23","place":"مختبر الكيمياء",           "desc":"تجارب مخبرية متقدمة في تحليل المركبات العضوية وتطبيقات التكنولوجيا الحيوية.",          "featured":false, "img":"assets/img/event32.jpg"},
  {"id":33, "title":"رحلة إلى المرصد الفلكي",          "cat":"علوم",   "date":"2026-12-06","place":"المرصد الجامعي",           "desc":"رصد ليلي بالتلسكوبات البصرية للأجرام السماوية والنجوم بتوجيه من أساتذة الفيزياء الفلكية.", "featured":false, "img":"assets/img/event33.jpg"},
  {"id":34, "title":"مسابقة مشاريع العلوم",            "cat":"علوم",   "date":"2026-12-20","place":"قاعة المعارض",            "desc":"معرض تنافسي للبحوث العلمية الطلابية مع تكريم الأبحاث الأكثر أصالة وابتكاراً.",         "featured":true,  "img":"assets/img/event34.jpg"}
];

const CATS = {
  "ثقافة": "#6B2D7B",
  "رياضة": "#0E7C86",
  "موسيقى": "#C2185B",
  "عائلي": "#E08A00",
  "تقنية": "#2352C9",
  "علوم": "#2E7D32"
};

const $ = s => document.querySelector(s);
const fmt = d => new Date(d).toLocaleDateString('ar-SY', {day:'numeric', month:'long', year:'numeric'});
const badge = c => `<span class="badge" style="background:${CATS[c]}">${c}</span>`;

const card = e => `<div class="col-sm-6 col-lg-3 reveal"><div class="card h-100 ev-card">
<img src="${e.img}" class="card-img-top" alt="${e.title}"><div class="card-body d-flex flex-column">
<div class="mb-2">${badge(e.cat)}</div><h5>${e.title}</h5>
<small class="text-muted">📅 ${fmt(e.date)}<br>📍 ${e.place}</small><p class="small mt-2">${e.desc}</p>
<a href="event.html?id=${e.id}" class="btn btn-sm btn-primary mt-auto">التفاصيل</a></div></div></div>`;

const page = document.body.dataset.page;

const darkBtn = $('#darkBtn');

function applyDarkMode(isDark) {
  if (isDark) {
    document.body.classList.add('dark');
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    if (darkBtn) {
      darkBtn.innerHTML = '☀️ الوضع الفاتح';
      darkBtn.classList.remove('btn-outline-secondary');
      darkBtn.classList.add('btn-warning');
    }
  } else {
    document.body.classList.remove('dark');
    document.documentElement.removeAttribute('data-bs-theme');
    if (darkBtn) {
      darkBtn.innerHTML = '🌙 الوضع الداكن';
      darkBtn.classList.remove('btn-warning');
      darkBtn.classList.add('btn-outline-secondary');
    }
  }
}

const isSavedDark = localStorage.getItem('site_dark_mode') === '1' || localStorage.getItem('dark') === '1';
applyDarkMode(isSavedDark);

if (darkBtn) {
  darkBtn.onclick = () => {
    const nextDark = !document.body.classList.contains('dark');
    localStorage.setItem('site_dark_mode', nextDark ? '1' : '0');
    applyDarkMode(nextDark);
  };
}

const topBtn = $('#topBtn');
if (topBtn) {
  window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 250 ? 'inline-flex' : 'none';
    topBtn.style.alignItems = 'center';
    topBtn.style.justifyContent = 'center';
  });
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, {threshold: 0.12});

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}
observeReveal();

const overlay = $('#page-transition');
if (overlay) {
  window.addEventListener('DOMContentLoaded', () => {
    overlay.classList.add('enter');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.remove('enter');
        overlay.classList.add('leave');
        setTimeout(() => {
          overlay.classList.remove('leave');
          observeReveal();
        }, 550);
      });
    });
  });

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('javascript') || href.startsWith('blob:') || href.startsWith('mailto:') || href.startsWith('tel:') || link.hasAttribute('download') || link.target === '_blank') return;
    e.preventDefault();
    overlay.classList.remove('leave');
    overlay.classList.add('enter');
    setTimeout(() => { window.location = href; }, 480);
  });
}

function animateCount(el, target, duration = 1200) {
  if (!el) return;
  let start = 0;
  const step = Math.ceil(target / (duration / 16));
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = start;
    if (start >= target) clearInterval(timer);
  }, 16);
}

if (page === 'home') {
  const statsObs = new IntersectionObserver(entries => {
    if (entries[0] && entries[0].isIntersecting) {
      animateCount($('#statEvents'), EVENTS.length);
      animateCount($('#statCats'),   Object.keys(CATS).length);
      animateCount($('#statPlaces'), [...new Set(EVENTS.map(e => e.place))].length);
      animateCount($('#statFeat'),   EVENTS.filter(e => e.featured).length);
      statsObs.disconnect();
    }
  }, {threshold: 0.4});
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) statsObs.observe(statsBar);

  const featInner = $('#featInner');
  if (featInner) {
    featInner.innerHTML = EVENTS.filter(e => e.featured).map((e, i) => `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
        <img src="${e.img}" class="d-block w-100 slide-img" alt="${e.title}">
        <div class="carousel-caption">
          <h3>${e.title}</h3>
          <p>${fmt(e.date)} — ${e.place}</p>
          <a class="btn btn-warning" href="event.html?id=${e.id}">التفاصيل الكاملة</a>
        </div>
      </div>
    `).join('');
  }

  const catBadges = $('#catBadges');
  if (catBadges) {
    catBadges.innerHTML = Object.keys(CATS).map(c => `
      <a href="events.html" data-c="${c}" class="badge fs-6 p-3 text-decoration-none shadow-sm" style="background:${CATS[c]}">
        ${c}
      </a>
    `).join('');

    document.querySelectorAll('[data-c]').forEach(a => {
      a.onclick = () => {
        localStorage.setItem('preferred_category', a.dataset.c);
      };
    });
  }

  const today = new Date().toISOString().slice(0, 10);
  const upcoming = EVENTS.filter(e => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const t = upcoming[0] || [...EVENTS].sort((a, b) => a.date.localeCompare(b.date))[0];
  const todayCard = $('#todayCard');
  if (todayCard && t) {
    todayCard.innerHTML = `
      <div class="card today flex-md-row reveal">
        <img src="${t.img}" alt="${t.title}" style="max-height: 280px; object-fit: cover;">
        <div class="p-4 d-flex flex-column justify-content-center">
          <span class="badge bg-danger mb-2 align-self-start">الفعالية الأقرب</span>
          <h4>${t.title}</h4>
          <p class="mb-3">${t.desc}</p>
          <div class="text-muted small mb-3">📍 المكان: ${t.place} &nbsp;|&nbsp; 📅 الموعد: ${fmt(t.date)}</div>
          <a class="btn btn-primary align-self-start" href="event.html?id=${t.id}">عرض التفاصيل</a>
        </div>
      </div>
    `;
  }

  const latest = $('#latest');
  if (latest) {
    latest.innerHTML = [...EVENTS].reverse().slice(0, 8).map(card).join('');
  }
  observeReveal();
}

if (page === 'events') {
  const PER_PAGE = 12;
  let currentPage = 1;

  const q = $('#q');
  const fc = $('#fCat');
  const fl = $('#fLoc');
  const fd = $('#fDate');
  const prefIndicator = $('#prefIndicator');

  Object.keys(CATS).forEach(c => fc.add(new Option(c, c)));
  [...new Set(EVENTS.map(e => e.place))].sort().forEach(p => fl.add(new Option(p, p)));

  const savedPrefCat = localStorage.getItem('preferred_category') || localStorage.getItem('cat');
  if (savedPrefCat && CATS[savedPrefCat]) {
    fc.value = savedPrefCat;
  }

  function filteredEvents() {
    return EVENTS.filter(e =>
      e.title.toLowerCase().includes(q.value.trim().toLowerCase()) &&
      (!fc.value || e.cat === fc.value) &&
      (!fl.value || e.place === fl.value) &&
      (!fd.value || e.date >= fd.value)
    );
  }

  function renderPagination(total) {
    const pages = Math.ceil(total / PER_PAGE);
    let wrap = $('#paginationWrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.id = 'paginationWrap';
      wrap.className = 'pagination-wrap mt-4';
      $('#list').insertAdjacentElement('afterend', wrap);
    }
    if (pages <= 1) {
      wrap.innerHTML = '';
      return;
    }
    wrap.innerHTML = Array.from({length: pages}, (_, i) =>
      `<button class="${i + 1 === currentPage ? 'active' : ''}" data-pg="${i + 1}">${i + 1}</button>`
    ).join('');
    wrap.querySelectorAll('button').forEach(btn => {
      btn.onclick = () => {
        currentPage = +btn.dataset.pg;
        render();
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
    });
  }

  const render = () => {
    if (fc.value) {
      localStorage.setItem('preferred_category', fc.value);
      if (prefIndicator) {
        prefIndicator.innerHTML = `
          <span class="pref-badge">
            💾 التصنيف المحفوظ: <strong>${fc.value}</strong>
            <button id="clearPrefBtn" class="btn btn-sm btn-link text-decoration-none p-0 ms-1" title="مسح التفضيل">✕</button>
          </span>
        `;
        const clearBtn = $('#clearPrefBtn');
        if (clearBtn) {
          clearBtn.onclick = () => {
            fc.value = '';
            localStorage.removeItem('preferred_category');
            render();
          };
        }
      }
    } else {
      localStorage.removeItem('preferred_category');
      if (prefIndicator) prefIndicator.innerHTML = '';
    }

    const r = filteredEvents();
    const start = (currentPage - 1) * PER_PAGE;
    const slice = r.slice(start, start + PER_PAGE);

    $('#list').innerHTML = slice.map(card).join('');
    $('#count').textContent = `عدد النتائج المعروضة: ${r.length} فعالية`;
    $('#empty').classList.toggle('d-none', r.length > 0);
    renderPagination(r.length);
    observeReveal();
  };

  [q, fc, fl, fd].forEach(el => el.oninput = () => {
    currentPage = 1;
    render();
  });

  $('#reset').onclick = () => {
    q.value = '';
    fc.value = '';
    fl.value = '';
    fd.value = '';
    localStorage.removeItem('preferred_category');
    currentPage = 1;
    render();
  };

  render();
}

if (page === 'event') {
  const e = EVENTS.find(x => x.id == new URLSearchParams(location.search).get('id')) || EVENTS[0];
  document.title = `${e.title} | دليل فعاليات الجامعة الافتراضية`;
  
  const bc = document.getElementById('bcTitle');
  if (bc) bc.textContent = e.title;

  const ORGS = {
    "ثقافة": "كلية الآداب والإعلام — بالتعاون مع اتحاد الطلبة",
    "رياضة": "النادي الرياضي الجامعي — عمادة شؤون الطلاب",
    "موسيقى": "كلية الفنون والموسيقى — قسم الأنشطة الطلابية",
    "عائلي": "لجنة الأنشطة المجتمعية والعلاقات العامة",
    "تقنية": "كلية الهندسة المعلوماتية — حاضنة الابتكار التقني",
    "علوم": "كلية العلوم التطبيقية — مخابر البحث العلمي"
  };

  const TIMES = {
    "ثقافة": "11:00 صباحاً – 01:30 ظهراً",
    "رياضة": "03:30 مساءً – 06:30 مساءً",
    "موسيقى": "06:00 مساءً – 08:30 مساءً",
    "عائلي": "10:30 صباحاً – 04:00 عصراً",
    "تقنية": "09:30 صباحاً – 02:00 ظهراً",
    "علوم": "10:00 صباحاً – 01:00 ظهراً"
  };

  const AGENDAS = {
    "ثقافة": [
      "استقبال الحضور والضيوف وافتتاح المعرض الثقافي المصاحب",
      "جلسة نقاشية وحوارية تفاعلية حول محاور الفعالية وإبراز أعمال الطلاب",
      "فقرة الأسئلة المفتوحة وتوزيع شهادات المشاركة والتكريم"
    ],
    "رياضة": [
      "التجمع والإحماء والتسجيل النهائي للفرق واللاعبين المشاركين",
      "انطلاق المنافسات الرياضية الرسمية وجولات التحدي الحماسية",
      "تتويج الفائزين وتوزيع الميداليات والكؤوس التذكارية"
    ],
    "موسيقى": [
      "استقبال الحضور ومقطوعة موسيقية افتتاحية هادئة",
      "تقديم الفقرات الفنية والعروض الغنائية والموسيقية الرئيسية",
      "تحية الجمهور والتقاط الصور التذكارية مع العازفين والفرق الطلابية"
    ],
    "عائلي": [
      "استقبال العائلات والأطفال وتوزيع دليل الأنشطة والبرنامج الترفيهي",
      "انطلاق الألعاب التفاعلية وورش العمل الممتعة للأطفال والكبار",
      "فقرات فنية ومسابقات وجوائز تشجيعية وتكريم المشاركين"
    ],
    "تقنية": [
      "جلسة الافتتاح واستعراض أبرز التطورات والمفاهيم التقنية المستهدفة",
      "ورش عمل تطبيقية وتجارب عملية مباشرة على الأجهزة والبرمجيات",
      "استعراض المشروعات المنجزة وتوزيع شهادات الحضور والاعتماد"
    ],
    "علوم": [
      "جولة تعريفية بالمختبرات العلمية والأجهزة والمعدات المستخدمة",
      "إجراء تجارب علمية تفاعلية وشرح النتائج والظواهر أمام الحضور",
      "جلسة نقاش علمي مع الأساتذة المشرفين والإجابة على استفسارات الطلاب"
    ]
  };

  const org = ORGS[e.cat] || "عمادة شؤون الطلاب — الجامعة الافتراضية";
  const time = TIMES[e.cat] || "10:00 صباحاً – 01:00 ظهراً";
  const agenda = AGENDAS[e.cat] || [
    "الافتتاح والترحيب بجميع المشاركين والحضور",
    "تنفيذ الأنشطة والفقرات المقررة ضمن برنامج الفعالية",
    "الختام واستلام الملاحظات وتوزيع الشهادات"
  ];

  const galleryImages = EVENTS.filter(x => x.cat === e.cat && x.id !== e.id).slice(0, 4);

  $('#detail').innerHTML = `
    <div class="row g-4">
      <div class="col-lg-8">
        <div class="position-relative mb-4">
          <img src="${e.img}" class="img-fluid rounded shadow-sm w-100" alt="${e.title}" style="max-height:440px;object-fit:cover;">
          <span class="position-absolute top-0 end-0 m-3 badge fs-6 py-2 px-3 shadow" style="background:${CATS[e.cat]}">${e.cat}</span>
        </div>

        <h1 class="fw-bold mb-3">${e.title}</h1>
        <p class="lead mb-4 fs-5 text-secondary">${e.desc}</p>

        <div class="card p-4 border-0 shadow-sm mb-4">
          <h5 class="fw-bold mb-3 text-primary">📌 محاور وبرنامج الفعالية:</h5>
          <ul class="list-unstyled mb-0">
            ${agenda.map(item => `
              <li class="d-flex align-items-center gap-2 mb-2">
                <span class="text-success fw-bold">✓</span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        ${galleryImages.length > 0 ? `
          <div class="card p-4 border-0 shadow-sm mb-4">
            <h5 class="fw-bold mb-3 text-primary">🖼️ لقطات ومعرض مصوّر من أجواء الفعالية (انقر للتكبير):</h5>
            <div class="row g-2">
              ${galleryImages.map(g => `
                <div class="col-3">
                  <img src="${g.img}" class="mini-gallery-img" alt="${g.title}" title="انقر لتكبير الصورة" data-bs-toggle="modal" data-bs-target="#imageModal" data-src="${g.img}" data-title="${g.title}">
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>

      <div class="col-lg-4">
        <div class="card p-4 border-0 shadow-sm sticky-top" style="top: 85px; z-index: 10;">
          <h5 class="fw-bold mb-3 pb-2 border-bottom">معلومات الحضور والمكان</h5>

          <div class="mb-3 d-flex align-items-start gap-3">
            <div class="fs-4">📅</div>
            <div>
              <small class="text-muted d-block">تاريخ الانعقاد</small>
              <strong>${fmt(e.date)}</strong>
            </div>
          </div>

          <div class="mb-3 d-flex align-items-start gap-3">
            <div class="fs-4">⏰</div>
            <div>
              <small class="text-muted d-block">التوقيت</small>
              <strong>${time}</strong>
            </div>
          </div>

          <div class="mb-3 d-flex align-items-start gap-3">
            <div class="fs-4">📍</div>
            <div>
              <small class="text-muted d-block">المكان والقاعة</small>
              <strong>${e.place}</strong>
            </div>
          </div>

          <div class="mb-3 d-flex align-items-start gap-3">
            <div class="fs-4">🏛️</div>
            <div>
              <small class="text-muted d-block">الجهة المنظمة</small>
              <strong>${org}</strong>
            </div>
          </div>

          <div class="mb-3 d-flex align-items-start gap-3">
            <div class="fs-4">🎟️</div>
            <div>
              <small class="text-muted d-block">رسوم الدخول</small>
              <span class="badge bg-success-subtle text-success border border-success px-2 py-1">مجاني لطلاب الجامعة</span>
            </div>
          </div>

          <div class="d-grid gap-2 mt-4">
            <button class="btn btn-warning btn-lg fw-bold shadow-sm" data-bs-toggle="modal" data-bs-target="#bookModal">
              🎟️ حجز مقعدك مجاناً (حجز وهمي)
            </button>
            <div class="row g-2">
              <div class="col-6">
                <button id="calBtn" class="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#calModal">📅 للتقويم</button>
              </div>
              <div class="col-6">
                <button id="shareBtn" class="btn btn-outline-secondary w-100" data-bs-toggle="modal" data-bs-target="#shareModal">🔗 مشاركة</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const modalLabel = $('#bookModalLabel');
  if (modalLabel) {
    modalLabel.innerHTML = `🎟️ حجز مقعد وهمي: <span class="text-warning">${e.title}</span>`;
  }

  const calModalTitle = $('#calModalTitle');
  const calModalMeta = $('#calModalMeta');
  if (calModalTitle) calModalTitle.textContent = e.title;
  if (calModalMeta) calModalMeta.textContent = `📅 الموعد: ${fmt(e.date)} (${time}) — 📍 المكان: ${e.place}`;

  const btnDownloadIcs = $('#btnDownloadIcs');
  if (btnDownloadIcs) {
    btnDownloadIcs.onclick = () => {
      const d = e.date.replace(/-/g, '');
      const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${e.title}\nLOCATION:${e.place}\nDTSTART;VALUE=DATE:${d}\nEND:VEVENT\nEND:VCALENDAR`;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([ics], {type: 'text/calendar'}));
      a.download = `${e.title}.ics`;
      a.click();
      btnDownloadIcs.innerHTML = '✓ تم تنزيل الموعد بنجاح';
      setTimeout(() => { btnDownloadIcs.innerHTML = '📥 تنزيل ملف التقويم (.ics)'; }, 3000);
    };
  }

  const shareInput = $('#shareLinkInput');
  if (shareInput) shareInput.value = location.href;

  const btnCopyShare = $('#btnCopyShare');
  const copySuccessMsg = $('#copySuccessMsg');
  if (btnCopyShare) {
    btnCopyShare.onclick = async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        if (copySuccessMsg) copySuccessMsg.classList.remove('d-none');
        btnCopyShare.textContent = 'تم النسخ ✓';
        setTimeout(() => {
          btnCopyShare.textContent = '📋 نسخ الرابط';
          if (copySuccessMsg) copySuccessMsg.classList.add('d-none');
        }, 3000);
      } catch (_) {}
    };
  }

  document.querySelectorAll('.mini-gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      const mImg = $('#imageModalImg');
      const mLbl = $('#imageModalLabel');
      if (mImg) mImg.src = img.dataset.src || img.src;
      if (mLbl) mLbl.textContent = img.dataset.title || e.title;
    });
  });

  const bGo = $('#bGo');
  if (bGo) {
    bGo.onclick = () => {
      const name = $('#bName').value.trim();
      const mail = $('#bEmail') ? $('#bEmail').value.trim() : '';
      const seats = $('#bSeats') ? $('#bSeats').value : '1';
      const mode = $('#bMode') ? $('#bMode').value : 'حضوري في الحرم الجامعي';
      const bMsg = $('#bMsg');
      
      if (name.length < 3) {
        bMsg.innerHTML = '<div class="alert alert-danger py-2 mb-0">يُرجى إدخال اسمك الكامل (3 أحرف على الأقل).</div>';
        return;
      }
      if (mail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
        bMsg.innerHTML = '<div class="alert alert-danger py-2 mb-0">صيغة البريد الإلكتروني غير صحيحة.</div>';
        return;
      }

      const code = `SVU-EVT-${e.id}-${Math.floor(1000 + Math.random() * 9000)}`;

      const bookingData = {
        eventId: e.id,
        eventTitle: e.title,
        name,
        mail: mail || 'طالب في الجامعة',
        seats,
        mode,
        code,
        bookingDate: new Date().toISOString()
      };
      const existingBookings = JSON.parse(localStorage.getItem('svu_mock_bookings') || '[]');
      existingBookings.push(bookingData);
      localStorage.setItem('svu_mock_bookings', JSON.stringify(existingBookings));

      bMsg.innerHTML = `
        <div class="alert alert-success py-2 mb-0">
          <strong>✓ تم تأكيد حجزك الوهمي بنجاح!</strong><br>
          <small>الفعالية: <strong>${e.title}</strong></small><br>
          <small>الاسم: ${name} | المقاعد: ${seats} | النمط: ${mode}</small><br>
          <small>رمز التذكرة: <code class="bg-white px-2 py-1 rounded text-primary fw-bold">${code}</code></small><br>
          <small class="text-muted">تم حفظ بيانات الحجز بنجاح في المتصفح.</small>
        </div>
      `;
    };
  }

  const related = $('#related');
  if (related) {
    related.innerHTML = EVENTS.filter(x => x.id !== e.id)
      .sort(x => x.cat === e.cat ? -1 : 1)
      .slice(0, 4)
      .map(card)
      .join('');
  }
  observeReveal();
}

if (page === 'about') {
  const team = $('#team');
  if (team) {
    team.innerHTML = `
      <div class="col-md-7 col-lg-6 mx-auto text-center reveal">
        <div class="card p-4 shadow-sm border-0 team-card">
          <img src="assets/img/avatar.svg" class="avatar mb-3" alt="أيقونة نورس" width="96" height="96">
          <h4 class="mb-1 fw-bold text-dark">نورس</h4>
          <div class="mb-2">
            <span class="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 fs-6">ID: nawras_216779</span>
          </div>
<div class="card p-4 shadow-sm border-0 team-card">
          <img src="assets/img/avatar.svg" class="avatar mb-3" alt="أيقونة جومان" width="96" height="96">
          <h4 class="mb-1 fw-bold text-dark">جومان</h4>
          <div class="mb-2">
            <span class="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 fs-6">ID: juman_301950</span>
          </div>

          <p class="text-secondary mb-1 fw-semibold">مطور ومصمم المنصة والمحتوى</p>
          <small class="text-muted">طالب في الجامعة الافتراضية السورية — مقرر برمجة الويب (BWP401)</small>
        </div>
      </div>
    `;
  }
  observeReveal();
}

if (page === 'contact') {
  const cForm = $('#cForm');
  if (cForm) {
    cForm.onsubmit = ev => {
      ev.preventDefault();
      const n = $('#cName').value.trim();
      const m = $('#cMail').value.trim();
      const t = $('#cMsg').value.trim();
      const errs = [];

      if (!n) errs.push('يرجى كتابة الاسم الكامل');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) errs.push('يرجى إدخال بريد إلكتروني صحيح');
      if (t.length < 10) errs.push('نص الرسالة يجب ألا يقل عن 10 أحرف');

      const alertBox = $('#alertBox');
      alertBox.innerHTML = errs.length
        ? `<div class="alert alert-danger">${errs.join('<br>')}</div>`
        : '<div class="alert alert-success">تم إرسال رسالتكم بنجاح. سيقوم فريق الدليل بالرد عليكم في أقرب وقت.</div>';

      if (!errs.length) ev.target.reset();
    };
  }
}
