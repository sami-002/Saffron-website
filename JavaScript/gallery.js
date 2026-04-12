  
const galleryData = [
  { id:1, cat:'fields', title:'Purple Fields at Dawn', img:'photos/Gallery/fields/pho1.jpg', desc:'Rows of crocus flowers stretch across the Herat highlands' },
  { id:2, cat:'fields', title:'Mountain Terraces', img:'photos/Gallery/fields/pho2.jpg', desc:'Terraced saffron fields against the Hindu Kush backdrop' },
  { id:3, cat:'harvesting', title:'Hand-Picking at Sunrise', img:'photos/Gallery/harvesting/pho1.jpg', desc:'Workers carefully harvest each delicate flower by hand' },
  { id:4, cat:'harvesting', title:'Morning Harvest Baskets', img:'photos/Gallery/harvesting/pho2.jpg', desc:'Woven baskets overflow with freshly picked crocus blooms' },
  { id:5, cat:'processing', title:'Separating the Stigma', img:'photos/Gallery/processing/pho1.jpg', desc:'Skilled hands separate the precious red stigma threads' },
  { id:6, cat:'processing', title:'Traditional Drying', img:'photos/Gallery/processing/pho2.jpg', desc:'Saffron threads gently dried using time-honored methods' },
  { id:7, cat:'packaging', title:'Premium Glass Jars', img:'photos/Gallery/packaging/pho1.jpg', desc:'Each jar carefully filled and sealed for freshness' },
  { id:8, cat:'packaging', title:'Gift Box Collection', img:'photos/Gallery/packaging/pho2.jpg', desc:'Elegant presentation boxes for export markets' },
  { id:11, cat:'fields', title:'Bloom Season Panorama', img:'photos/Gallery/fields/pho3.jpg', desc:'A sea of purple during peak flowering season' },
  { id:12, cat:'harvesting', title:'Community Harvest Day', img:'photos/Gallery/harvesting/pho3.jpg', desc:'The whole village joins for the annual harvest' },
  { id:13, cat:'processing', title:'Quality Inspection', img:'photos/Gallery/processing/pho3.jpg', desc:'Every batch tested for color, aroma, and purity' },
  { id:15, cat:'packaging', title:'Export Ready Tins', img:'photos/Gallery/packaging/pho3.jpg', desc:'Hermetically sealed tins for international shipping' },
  { id:16, cat:'fields', title:'Irrigation Channels', img:'photos/Gallery/fields/pho4.jpg', desc:'Ancient water systems feeding the saffron beds' },
];

let currentCat = 'all';
let visibleCount = 8;
let filteredItems = [];
let lightboxIdx = 0;

function getFiltered() {
  return currentCat === 'all' ? galleryData : galleryData.filter(i => i.cat === currentCat);
}

function renderGallery() {
  filteredItems = getFiltered();
  const grid = document.getElementById('galleryGrid');
  const showing = filteredItems.slice(0, visibleCount);
  grid.innerHTML = '';

  showing.forEach((item, idx) => {
    const div = document.createElement('div');
    const tall = idx % 5 === 0 || idx % 5 === 3;
    div.className = `gallery-item rounded-xl overflow-hidden shadow-md cursor-pointer fade-up ${tall ? 'sm:row-span-2' : ''}`;
    div.style.animationDelay = `${idx * 0.05}s`;
    div.innerHTML = `
      <div class="relative w-full h-full" style="min-height:${tall ? '340px' : '240px'}">
        <img src="${item.img}" alt="" loading="lazy" class="w-full h-full object-cover" onerror="this.style.background='#C8963E'; this.alt='Image unavailable';">
      </div>`;
    div.onclick = () => openLightbox(filteredItems.indexOf(item));
    grid.appendChild(div);
  });

  document.getElementById('loadMoreWrap').style.display = visibleCount >= filteredItems.length ? 'none' : 'block';
  lucide.createIcons();
}

document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active', 'font-semibold', 'text-[#f4c563]', 'text-saffron-deep'));
  document.querySelectorAll('.filter-btn').forEach(b => { b.classList.add('text-gray-500', 'font-medium'); b.classList.remove('font-semibold'); });
  btn.classList.add('active', 'font-semibold', 'text-[#f4c563]');
  btn.classList.remove('text-gray-500', 'font-medium');
  currentCat = btn.dataset.cat;
  visibleCount = 8;
  renderGallery();
});

document.getElementById('loadMoreBtn').addEventListener('click', () => { visibleCount += 8; renderGallery(); });

function openLightbox(idx) {
  lightboxIdx = idx;
  const lb = document.getElementById('lightbox');
  lb.style.display = 'flex';
  requestAnimationFrame(() => { lb.classList.remove('opacity-0', 'pointer-events-none'); lb.classList.add('opacity-100'); });
  updateLightbox();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('opacity-100');
  lb.classList.add('opacity-0', 'pointer-events-none');
  setTimeout(() => lb.style.display = 'none', 300);
}

function updateLightbox() {
  const item = filteredItems[lightboxIdx];
  if (!item) return;
  const wrap = document.getElementById('lbImageWrap');
  wrap.innerHTML = `<img src="${item.img}" alt="" loading="lazy" class="w-full h-auto rounded-xl" onerror="this.style.background='#C8963E'; this.alt='Image unavailable';">`;
}

document.getElementById('lbClose').onclick = closeLightbox;
document.getElementById('lightbox').onclick = e => { if (e.target === document.getElementById('lightbox')) closeLightbox(); };
document.getElementById('lbPrev').onclick = e => { e.stopPropagation(); lightboxIdx = (lightboxIdx - 1 + filteredItems.length) % filteredItems.length; updateLightbox(); };
document.getElementById('lbNext').onclick = e => { e.stopPropagation(); lightboxIdx = (lightboxIdx + 1) % filteredItems.length; updateLightbox(); };
document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox').style.display === 'none') return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') { lightboxIdx = (lightboxIdx - 1 + filteredItems.length) % filteredItems.length; updateLightbox(); }
  if (e.key === 'ArrowRight') { lightboxIdx = (lightboxIdx + 1) % filteredItems.length; updateLightbox(); }
});

const defaultConfig = {
  hero_title: 'Our Gallery',
  hero_subtitle: 'From farm to final product.',
  intro_heading: 'The Journey of Saffron',
  intro_text: 'From the fertile fields of Herat province, our saffron undergoes a meticulous journey — hand-picked at dawn, carefully dried, and precisely packaged to preserve its extraordinary aroma, flavor, and color for markets around the world.',
  background_color: '#120e0b',
  surface_color: '#1a1209',
  text_color: '#e8dcc8',
  primary_action_color: '#b8460f',
  accent_color: '#d4932d',
  font_family: 'Montserrat',
  font_size: 16
};

function applyConfig(config) {
  const c = { ...defaultConfig, ...config };
  document.getElementById('heroTitle').textContent = c.hero_title;
  document.getElementById('heroSubtitle').textContent = c.hero_subtitle;
  document.getElementById('introHeading').textContent = c.intro_heading;
  document.getElementById('introText').textContent = c.intro_text;

  document.body.style.fontFamily = `${c.font_family}, Montserrat, sans-serif`;
  document.querySelectorAll('.font-display').forEach(el => el.style.fontFamily = 'Playfair Display, serif');

  const base = c.font_size || 16;
  document.getElementById('heroTitle').style.fontSize = '';
  document.getElementById('introText').style.fontSize = `${base}px`;
  document.getElementById('introHeading').style.fontSize = `${base * 2}px`;

  document.getElementById('app').style.backgroundColor = 'transparent';
  document.querySelectorAll('.filter-btn.active').forEach(b => b.style.color = '#f4c563');
  document.getElementById('loadMoreBtn').style.borderColor = c.accent_color;
  document.getElementById('loadMoreBtn').style.color = c.text_color;
}

window.elementSdk.init({
  defaultConfig,
  onConfigChange: async (config) => applyConfig(config),
  mapToCapabilities: (config) => ({
    recolorables: [
      { get: () => config.background_color || defaultConfig.background_color, set: v => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); }},
      { get: () => config.surface_color || defaultConfig.surface_color, set: v => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); }},
      { get: () => config.text_color || defaultConfig.text_color, set: v => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); }},
      { get: () => config.primary_action_color || defaultConfig.primary_action_color, set: v => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); }},
      { get: () => config.accent_color || defaultConfig.accent_color, set: v => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); }},
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: v => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: v => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
    }
  }),
  mapToEditPanelValues: (config) => new Map([
    ['hero_title', config.hero_title || defaultConfig.hero_title],
    ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
    ['intro_heading', config.intro_heading || defaultConfig.intro_heading],
    ['intro_text', config.intro_text || defaultConfig.intro_text],
  ])
});

renderGallery();
lucide.createIcons();
