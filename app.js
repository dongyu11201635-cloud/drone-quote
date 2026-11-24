const CATEGORIES = [
  { id: 'frame', name: '프레임' },
  { id: 'motor', name: '모터 (4개입)' },
  { id: 'esc', name: 'ESC (4in1)' },
  { id: 'fc', name: 'FC (비행제어)' },
  { id: 'prop', name: '프로펠러' },
  { id: 'battery', name: '배터리 (LiPo)' },
  { id: 'vtx', name: 'VTX / 카메라' },
  { id: 'rx', name: '수신기' }
];

const PRODUCTS = [
  // 1. 프레임 (10개)
  { id: 'fr1', category: 'frame', brand: 'Holybro', name: 'X500 V2 프레임', price: 159000, weight: 480, mountSize: '30.5x30.5', maxPropInch: 10, specs: ['산업용 표준', '480g', '탄소섬유'] },
  { id: 'fr2', category: 'frame', brand: 'ImpulseRC', name: 'Apex EVO 5인치', price: 118000, weight: 142, mountSize: '30.5x30.5', maxPropInch: 5.1, specs: ['5인치', '142g', '카본'] },
  { id: 'fr3', category: 'frame', brand: 'GEPRC', name: 'Mark5 HD', price: 89000, weight: 130, mountSize: '30.5x30.5', maxPropInch: 5.1, specs: ['5인치', '130g', 'O3대응'] },
  { id: 'fr4', category: 'frame', brand: 'iFlight', name: 'Chimera7 Pro V2', price: 145000, weight: 245, mountSize: '30.5x30.5', maxPropInch: 7.5, specs: ['7인치', '245g', '롱레인지'] },
  { id: 'fr5', category: 'frame', brand: 'GEPRC', name: 'CineLog35 V2', price: 95000, weight: 115, mountSize: '25.5x25.5', maxPropInch: 3.5, specs: ['3.5인치', '115g', '시네웁'] },
  { id: 'fr6', category: 'frame', brand: 'Holybro', name: 'QAV250', price: 65000, weight: 160, mountSize: '30.5x30.5', maxPropInch: 5, specs: ['FPV입문', '160g', '입문용'] },
  { id: 'fr7', category: 'frame', brand: 'T-Motor', name: 'Velox F10', price: 130000, weight: 120, mountSize: '20x20', maxPropInch: 5, specs: ['5인치', '120g', '경량'] },
  { id: 'fr8', category: 'frame', brand: 'BetaFPV', name: 'Pavo20', price: 45000, weight: 40, mountSize: '25.5x25.5', maxPropInch: 2, specs: ['2인치', '40g', '초경량'] },
  { id: 'fr9', category: 'frame', brand: 'TBS', name: 'Source One V5', price: 55000, weight: 145, mountSize: '30.5x30.5', maxPropInch: 5, specs: ['오픈소스', '145g', '튼튼'] },
  { id: 'fr10', category: 'frame', brand: 'Diatone', name: 'Roma F5', price: 82000, weight: 135, mountSize: '30.5x30.5', maxPropInch: 5, specs: ['5인치', '135g', '세련'] },

  // 2. 모터 (10개)
  { id: 'mt1', category: 'motor', brand: 'T-Motor', name: 'Velox V3 2306 1950KV (4개)', price: 96000, weight: 136, kv: 1950, cells: [6, 6], maxAmpsPerMotor: 42, maxThrustPerMotor: 1650, specs: ['6S', '2306', '1.65kg'] },
  { id: 'mt2', category: 'motor', brand: 'iFlight', name: 'XING2 2207 2450KV (4개)', price: 108000, weight: 128, kv: 2450, cells: [4, 4], maxAmpsPerMotor: 38, maxThrustPerMotor: 1520, specs: ['4S', '2207', '1.52kg'] },
  { id: 'mt3', category: 'motor', brand: 'BrotherHobby', name: 'Avenger 2004 3000KV (4개)', price: 84000, weight: 68, kv: 3000, cells: [4, 4], maxAmpsPerMotor: 22, maxThrustPerMotor: 720, specs: ['4S', '2004', '720g'] },
  { id: 'mt4', category: 'motor', brand: 'Holybro', name: 'T-Motor P2207 2050KV (4개)', price: 110000, weight: 130, kv: 2050, cells: [6, 6], maxAmpsPerMotor: 40, maxThrustPerMotor: 1600, specs: ['6S', '산업용', '1.6kg'] },
  { id: 'mt5', category: 'motor', brand: 'T-Motor', name: 'F60 PRO V 2050KV (4개)', price: 135000, weight: 125, kv: 2050, cells: [6, 6], maxAmpsPerMotor: 45, maxThrustPerMotor: 1750, specs: ['6S', '고성능', '1.75kg'] },
  { id: 'mt6', category: 'motor', brand: 'Emax', name: 'ECO II 2207 1900KV (4개)', price: 72000, weight: 122, kv: 1900, cells: [6, 6], maxAmpsPerMotor: 35, maxThrustPerMotor: 1400, specs: ['6S', '가성비', '1.4kg'] },
  { id: 'mt7', category: 'motor', brand: 'BetaFPV', name: '1103 8000KV (4개)', price: 48000, weight: 30, kv: 8000, cells: [2, 2], maxAmpsPerMotor: 10, maxThrustPerMotor: 200, specs: ['2S', '마이크로', '200g'] },
  { id: 'mt8', category: 'motor', brand: 'SunnySky', name: 'X2212 980KV (4개)', price: 60000, weight: 200, kv: 980, cells: [4, 4], maxAmpsPerMotor: 25, maxThrustPerMotor: 1100, specs: ['4S', '롱레인지', '1.1kg'] },
  { id: 'mt9', category: 'motor', brand: 'T-Motor', name: 'AT412 300KV (4개)', price: 210000, weight: 350, kv: 300, cells: [6, 12], maxAmpsPerMotor: 60, maxThrustPerMotor: 3500, specs: ['12S', '대형', '3.5kg'] },
  { id: 'mt10', category: 'motor', brand: 'GEPRC', name: 'SPEEDX2 2105.5 2650KV (4개)', price: 92000, weight: 110, kv: 2650, cells: [4, 4], maxAmpsPerMotor: 30, maxThrustPerMotor: 1200, specs: ['4S', '경량', '1.2kg'] },

  // 3. ESC (10개)
  { id: 'esc1', category: 'esc', brand: 'SpeedyBee', name: 'BLS 55A 4in1 ESC', price: 68000, weight: 15, maxAmps: 55, cells: [3, 6], specs: ['3-6S', 'BLHeli_S'] },
  { id: 'esc2', category: 'esc', brand: 'Holybro', name: 'Tekko32 F4 4in1 50A', price: 95000, weight: 16, maxAmps: 50, cells: [3, 6], specs: ['3-6S', 'BL32'] },
  { id: 'esc3', category: 'esc', brand: 'T-Motor', name: 'F55A Pro II 4in1 ESC', price: 105000, weight: 18, maxAmps: 60, cells: [3, 6], specs: ['3-6S', 'BL32'] },
  { id: 'esc4', category: 'esc', brand: 'GEPRC', name: 'G45A 35A AIO', price: 54000, weight: 11, maxAmps: 35, cells: [2, 4], specs: ['2-4S', 'AIO'] },
  { id: 'esc5', category: 'esc', brand: 'iFlight', name: 'Blitz E55 55A', price: 82000, weight: 14, maxAmps: 55, cells: [3, 6], specs: ['3-6S'] },
  { id: 'esc6', category: 'esc', brand: 'Hobbywing', name: 'XRotor 60A G2', price: 115000, weight: 19, maxAmps: 60, cells: [3, 6], specs: ['3-6S'] },
  { id: 'esc7', category: 'esc', brand: 'Holybro', name: 'Tekko32 Metal 65A', price: 125000, weight: 18, maxAmps: 65, cells: [3, 6], specs: ['3-6S', 'Metal'] },
  { id: 'esc8', category: 'esc', brand: 'Diatone', name: 'Mamba 40A', price: 58000, weight: 13, maxAmps: 40, cells: [3, 6], specs: ['3-6S'] },
  { id: 'esc9', category: 'esc', brand: 'BetaFPV', name: '12A AIO', price: 42000, weight: 7, maxAmps: 12, cells: [1, 2], specs: ['1-2S'] },
  { id: 'esc10', category: 'esc', brand: 'T-Motor', name: 'AM66 66A', price: 140000, weight: 20, maxAmps: 66, cells: [3, 6], specs: ['3-6S'] },

  // 4. FC (10개)
  { id: 'fc1', category: 'fc', brand: 'SpeedyBee', name: 'F7 V3 FC', price: 75000, weight: 10, cells: [3, 6], specs: ['F7', 'BT내장'] },
  { id: 'fc2', category: 'fc', brand: 'Holybro', name: 'Kakute H743-Wing', price: 73000, weight: 12, cells: [3, 6], specs: ['H7', '윙'] },
  { id: 'fc3', category: 'fc', brand: 'Holybro', name: 'Pixhawk 6C', price: 199000, weight: 25, cells: [3, 12], specs: ['Cube', '산업용'] },
  { id: 'fc4', category: 'fc', brand: 'SpeedyBee', name: 'F405 V4', price: 52000, weight: 9, cells: [3, 6], specs: ['F4', '표준'] },
  { id: 'fc5', category: 'fc', brand: 'iFlight', name: 'Blitz F7', price: 85000, weight: 11, cells: [3, 6], specs: ['F7', '고속'] },
  { id: 'fc6', category: 'fc', brand: 'Holybro', name: 'Kakute F722', price: 79000, weight: 10, cells: [3, 6], specs: ['F7', '안정'] },
  { id: 'fc7', category: 'fc', brand: 'BetaFPV', name: 'F405 AIO', price: 65000, weight: 8, cells: [2, 4], specs: ['F4', '마이크로'] },
  { id: 'fc8', category: 'fc', brand: 'Matek', name: 'F722-SE', price: 68000, weight: 11, cells: [3, 6], specs: ['F7', '롱레인지'] },
  { id: 'fc9', category: 'fc', brand: 'GEPRC', name: 'Taker F722', price: 72000, weight: 10, cells: [3, 6], specs: ['F7', 'FPV'] },
  { id: 'fc10', category: 'fc', brand: 'T-Motor', name: 'F7 HD', price: 95000, weight: 12, cells: [3, 6], specs: ['F7', '디지털'] },

  // 5. 프로펠러 (10개)
  { id: 'p1', category: 'prop', brand: 'Gemfan', name: 'Hurricane 51466 MCK (4개)', price: 4500, weight: 16, inch: 5.1, specs: ['5.1인치', '3엽'] },
  { id: 'p2', category: 'prop', brand: 'HQProp', name: 'DT90MMX3 3.5인치 (4개)', price: 4000, weight: 9, inch: 3.5, specs: ['3.5인치', '시네웁'] },
  { id: 'p3', category: 'prop', brand: 'HQProp', name: 'DP 7X4X3 7인치 (4개)', price: 7500, weight: 32, inch: 7.0, specs: ['7인치', '롱레인지'] },
  { id: 'p4', category: 'prop', brand: 'Gemfan', name: 'D63 2.5인치 (4개)', price: 3500, weight: 8, inch: 2.5, specs: ['2.5인치', '시네'] },
  { id: 'p5', category: 'prop', brand: 'Gemfan', name: 'Hurricane 5040 (4개)', price: 4000, weight: 15, inch: 5.0, specs: ['5인치', '내구'] },
  { id: 'p6', category: 'prop', brand: 'HQProp', name: 'Ethix P3 (4개)', price: 4800, weight: 16, inch: 5.0, specs: ['5인치', '부드러움'] },
  { id: 'p7', category: 'prop', brand: 'Gemfan', name: '3016 마이크로 (4개)', price: 3000, weight: 5, inch: 3.0, specs: ['3인치', '우프'] },
  { id: 'p8', category: 'prop', brand: 'HQProp', name: 'T10 10인치 (2개)', price: 12000, weight: 60, inch: 10.0, specs: ['10인치', '산업'] },
  { id: 'p9', category: 'prop', brand: 'Gemfan', name: '4024 4인치 (4개)', price: 4200, weight: 12, inch: 4.0, specs: ['4인치', '효율'] },
  { id: 'p10', category: 'prop', brand: 'HQProp', name: '6x3 6인치 (4개)', price: 6500, weight: 25, inch: 6.0, specs: ['6인치', '크루즈'] },

  // 6. 배터리 (10개)
  { id: 'b1', category: 'battery', brand: 'CNHL', name: 'Black Series 6S 1300mAh 100C', price: 39000, weight: 215, cells: 6, mah: 1300, cRate: 100, specs: ['6S (22.2V)', '1300mAh'] },
  { id: 'b2', category: 'battery', brand: 'Tattu', name: 'R-Line V3 4S 1550mAh 120C', price: 42000, weight: 178, cells: 4, mah: 1550, cRate: 120, specs: ['4S (14.8V)', '1550mAh'] },
  { id: 'b3', category: 'battery', brand: 'Molicel', name: '21700 6S1P 4000mAh 리튬이온', price: 78000, weight: 425, cells: 6, mah: 4000, cRate: 15, specs: ['6S (22.2V)', '4000mAh'] },
  { id: 'b4', category: 'battery', brand: 'CNHL', name: 'Black 4S 1300mAh 100C', price: 32000, weight: 150, cells: 4, mah: 1300, cRate: 100, specs: ['4S', '1300mAh'] },
  { id: 'b5', category: 'battery', brand: 'Tattu', name: 'R-Line 6S 1800mAh 95C', price: 55000, weight: 280, cells: 6, mah: 1800, cRate: 95, specs: ['6S', '1800mAh'] },
  { id: 'b6', category: 'battery', brand: 'GNB', name: '2S 450mAh 80C 우프', price: 12000, weight: 30, cells: 2, mah: 450, cRate: 80, specs: ['2S', '450mAh'] },
  { id: 'b7', category: 'battery', brand: 'Tattu', name: '3S 850mAh 75C', price: 25000, weight: 75, cells: 3, mah: 850, cRate: 75, specs: ['3S', '850mAh'] },
  { id: 'b8', category: 'battery', brand: 'CNHL', name: '6S 2200mAh 70C 롱레인지', price: 65000, weight: 350, cells: 6, mah: 2200, cRate: 70, specs: ['6S', '2200mAh'] },
  { id: 'b9', category: 'battery', brand: 'GNB', name: '1S 300mAh 30C 후프', price: 5000, weight: 8, cells: 1, mah: 300, cRate: 30, specs: ['1S', '300mAh'] },
  { id: 'b10', category: 'battery', brand: 'Tattu', name: '4S 450mAh 75C 마이크로', price: 18000, weight: 55, cells: 4, mah: 450, cRate: 75, specs: ['4S', '450mAh'] },

  // 7. VTX / 카메라 (10개)
  { id: 'v1', category: 'vtx', brand: 'DJI', name: 'DJI O3 Air Unit', price: 299000, weight: 38, specs: ['디지털 HD', '4K 녹화'] },
  { id: 'v2', category: 'vtx', brand: 'TBS', name: 'Unify Pro32 HV + Ratel2', price: 98000, weight: 22, specs: ['아날로그', '최대 1W'] },
  { id: 'v3', category: 'vtx', brand: 'Caddx', name: 'Vista Kit 디지털', price: 180000, weight: 29, specs: ['디지털', '저지연'] },
  { id: 'v4', category: 'vtx', brand: 'RunCam', name: 'Phoenix 2 아날로그', price: 45000, weight: 9, specs: ['아날로그', '고화질'] },
  { id: 'v5', category: 'vtx', brand: 'Walksnail', name: 'Avatar HD Mini', price: 210000, weight: 20, specs: ['디지털', '고속주사율'] },
  { id: 'v6', category: 'vtx', brand: 'Foxeer', name: 'Reaper V3 VTX', price: 55000, weight: 10, specs: ['아날로그', '내구성'] },
  { id: 'v7', category: 'vtx', brand: 'Holybro', name: 'Atlatl HV V2', price: 48000, weight: 8, specs: ['아날로그', '스마트오디오'] },
  { id: 'v8', category: 'vtx', brand: 'DJI', name: 'O4 Air Unit', price: 340000, weight: 40, specs: ['디지털', '차세대'] },
  { id: 'v9', category: 'vtx', brand: 'Caddx', name: 'Ant Nano 1200TVL', price: 25000, weight: 2, specs: ['아날로그', '초경량'] },
  { id: 'v10', category: 'vtx', brand: 'GEPRC', name: 'RAD VTX 5.8G 1.6W', price: 35000, weight: 6, specs: ['아날로그', '고출력'] },

  // 8. 수신기 (10개)
  { id: 'r1', category: 'rx', brand: 'RadioMaster', name: 'RP1 ELRS 2.4GHz 수신기', price: 25000, weight: 3, specs: ['ExpressLRS', '2.4G'] },
  { id: 'r2', category: 'rx', brand: 'TBS', name: 'Crossfire Nano RX Pro', price: 48000, weight: 4, specs: ['915MHz', '장거리'] },
  { id: 'r3', category: 'rx', brand: 'ExpressLRS', name: 'EP2 Ceramic RX', price: 22000, weight: 2, specs: ['ELRS', '내장안테나'] },
  { id: 'r4', category: 'rx', brand: 'FrSky', name: 'R-XSR 수신기', price: 35000, weight: 3, specs: ['ACCST', '텔레메트리'] },
  { id: 'r5', category: 'rx', brand: 'RadioMaster', name: 'RP3 2.4G 듀얼안테나', price: 30000, weight: 5, specs: ['ELRS', 'True Diversity'] },
  { id: 'r6', category: 'rx', brand: 'TBS', name: 'Crossfire Diversity RX', price: 85000, weight: 8, specs: ['CRSF', '프로페셔널'] },
  { id: 'r7', category: 'rx', brand: 'Matek', name: 'ELRS-R24-V RCV', price: 28000, weight: 3, specs: ['ELRS', '안정성'] },
  { id: 'r8', category: 'rx', brand: 'FlySky', name: 'FS-A8S 마이크로 수신기', price: 15000, weight: 2, specs: ['AFHDS', '가성비'] },
  { id: 'r9', category: 'rx', brand: 'ELRS', name: 'Gemini RX 수신기', price: 45000, weight: 6, specs: ['ELRS', '듀얼주파수'] },
  { id: 'r10', category: 'rx', brand: 'RadioMaster', name: 'ER8 2.4GHz PWM RX', price: 38000, weight: 10, specs: ['ELRS', '고정익/대형'] }
];

let activeCategory = 'frame';
let searchQuery = '';
let selectedParts = {}; // { categoryId: { product, quantity } }

const categoryTabsEl = document.getElementById('category-tabs');
const productListEl = document.getElementById('product-list');
const searchInputEl = document.getElementById('search-input');
const partCountEl = document.getElementById('part-count');
const selectedListEl = document.getElementById('selected-list');
const selectedCountEl = document.getElementById('selected-count');
const totalPriceEl = document.getElementById('total-price');

const metricWeightEl = document.getElementById('metric-weight');
const metricTwrEl = document.getElementById('metric-twr');
const metricPowerEl = document.getElementById('metric-power');
const metricBatteryEl = document.getElementById('metric-battery');
const compatMessagesEl = document.getElementById('compat-messages');

const assembleBtn = document.getElementById('assemble-btn');
const assembleModal = document.getElementById('assemble-modal');
const modalClose = document.getElementById('modal-close');
const modalSummaryEl = document.getElementById('modal-summary');
const assembleForm = document.getElementById('assemble-form');

function init() {
  renderCategoryTabs();
  renderProducts();
  renderQuoteSidebar();
}

// 카테고리별 고해상도 드론 부품 배경 이미지 매핑
const CATEGORY_BACKGROUNDS = {
  frame: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80', // 드론 프레임/기체
  motor: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80', // 모터/정밀 부품
  esc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',   // 회로 기판/ESC
  fc: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1200&q=80',    // 마이크로칩/FC 제어장치
  prop: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',  // 프로펠러/로터
  battery: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80',// 배터리/파워팩
  vtx: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80',  // 카메라 렌즈/영상장치
  rx: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80'    // 안테나/무선 송수신
};

function updateCategoryBackground() {
  const bgEl = document.getElementById('category-bg-watermark');
  if (bgEl && CATEGORY_BACKGROUNDS[activeCategory]) {
    bgEl.style.backgroundImage = `url('${CATEGORY_BACKGROUNDS[activeCategory]}')`;
  }
}

function renderCategoryTabs() {
  updateCategoryBackground();

  categoryTabsEl.innerHTML = CATEGORIES.map(cat => `
    <button class="cat-tab ${cat.id === activeCategory ? 'active' : ''}" data-cat="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  categoryTabsEl.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderCategoryTabs();
      renderProducts();
    });
  });
}

function renderProducts() {
  const filtered = PRODUCTS.filter(p => {
    const matchCat = p.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      (p.specs && p.specs.some(s => s.toLowerCase().includes(q)));
    return matchCat && matchSearch;
  });

  partCountEl.textContent = `${filtered.length}개 상품`;

  if (filtered.length === 0) {
    productListEl.innerHTML = `<div style="padding:40px; text-align:center; color:#8d8d8d;">검색 조건에 맞는 부품이 없습니다.</div>`;
    return;
  }

  productListEl.innerHTML = filtered.map(p => {
    const isSelected = selectedParts[p.category]?.product.id === p.id;
    return `
      <div class="product-card ${isSelected ? 'selected' : ''}">
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-specs">
            ${p.specs.map(s => `<span class="spec-tag">${s}</span>`).join('')}
          </div>
        </div>
        <div class="product-action">
          <div class="product-price">${p.price.toLocaleString()}원</div>
          <button class="btn-select ${isSelected ? 'active' : ''}" data-id="${p.id}">
            ${isSelected ? '선택됨 ✓' : '견적에 담기'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  productListEl.querySelectorAll('.btn-select').forEach(btn => {
    btn.addEventListener('click', () => {
      const prod = PRODUCTS.find(x => x.id === btn.dataset.id);
      if (selectedParts[prod.category]?.product.id === prod.id) {
        delete selectedParts[prod.category];
      } else {
        selectedParts[prod.category] = { product: prod, quantity: 1 };
      }
      renderProducts();
      renderQuoteSidebar();
    });
  });
}

function renderQuoteSidebar() {
  const selectedKeys = Object.keys(selectedParts);
  selectedCountEl.textContent = `${selectedKeys.length} / ${CATEGORIES.length}`;

  selectedListEl.innerHTML = CATEGORIES.map(cat => {
    const entry = selectedParts[cat.id];
    if (!entry) {
      return `
        <li class="selected-slot">
          <span class="slot-cat">${cat.name}</span>
          <span class="slot-name slot-empty">미선택</span>
          <span class="slot-price">-</span>
        </li>
      `;
    }
    const { product, quantity } = entry;
    const itemTotal = product.price * quantity;
    return `
      <li class="selected-slot" style="gap:4px;">
        <span class="slot-cat" style="min-width:60px;">${cat.name}</span>
        <span class="slot-name" style="font-size:12px;" title="${product.name}">${product.name}</span>
        <div style="display:flex; align-items:center; gap:2px;">
          <button class="qty-btn" data-cat="${cat.id}" data-action="minus" style="width:18px;height:18px;font-size:11px;cursor:pointer;">-</button>
          <span style="font-size:12px;font-weight:700;width:16px;text-align:center;">${quantity}</span>
          <button class="qty-btn" data-cat="${cat.id}" data-action="plus" style="width:18px;height:18px;font-size:11px;cursor:pointer;">+</button>
        </div>
        <span class="slot-price" style="font-size:12px;">${itemTotal.toLocaleString()}원</span>
        <button class="slot-remove" data-cat="${cat.id}" title="제거">&times;</button>
      </li>
    `;
  }).join('');

  // 수량 조절 버튼 이벤트
  selectedListEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const catId = btn.dataset.cat;
      const action = btn.dataset.action;
      if (selectedParts[catId]) {
        if (action === 'plus') {
          selectedParts[catId].quantity += 1;
        } else if (action === 'minus') {
          selectedParts[catId].quantity -= 1;
          if (selectedParts[catId].quantity <= 0) {
            delete selectedParts[catId];
          }
        }
        renderProducts();
        renderQuoteSidebar();
      }
    });
  });

  selectedListEl.querySelectorAll('.slot-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      delete selectedParts[btn.dataset.cat];
      renderProducts();
      renderQuoteSidebar();
    });
  });

  const totalPrice = Object.values(selectedParts).reduce((sum, entry) => sum + (entry.product.price * entry.quantity), 0);
  totalPriceEl.textContent = `${totalPrice.toLocaleString()}원`;

  runCompatibilityCheck();
}

function runCompatibilityCheck() {
  const entries = Object.values(selectedParts);
  const totalWeight = entries.reduce((sum, entry) => sum + ((entry.product.weight || 0) * entry.quantity), 0);
  
  metricWeightEl.textContent = `${totalWeight} g`;
  const messages = [];

  if (entries.length === 0) {
    metricTwrEl.textContent = '-';
    metricPowerEl.textContent = '0 W (0 A)';
    metricBatteryEl.textContent = '-';
    compatMessagesEl.innerHTML = `<p class="msg-info">부품을 선택하면 수량을 반영한 호환성, 오버슈트, 전력 및 무게를 실시간으로 검사합니다.</p>`;
    return;
  }

  const frame = selectedParts['frame']?.product;
  const motor = selectedParts['motor']?.product;
  const esc = selectedParts['esc']?.product;
  const battery = selectedParts['battery']?.product;

  // 1. 법규 및 총 중량 검사 (2kg 기준)
  if (totalWeight > 2000) {
    messages.push({ type: 'err', text: '❌ [법규 위반 위험] 기체 총 중량이 2kg을 초과합니다. 비행 승인 및 자격증이 필수적입니다.' });
  } else {
    messages.push({ type: 'ok', text: `✅ [중량 적합] 총 중량 ${totalWeight}g으로 2kg 미만 규격입니다.` });
  }

  // 2. 무게 밸런스 / CG 검사
  if (battery) {
    const batteryTotalWeight = battery.weight * selectedParts['battery'].quantity;
    const batteryRatio = (batteryTotalWeight / totalWeight) * 100;
    if (batteryRatio > 45) {
      messages.push({ type: 'warn', text: `⚠️ [CG 밸런스 주의] 배터리 무게 비중이 전체의 ${batteryRatio.toFixed(1)}%로 높습니다.` });
    }
  }

  // 3. 모터 & ESC 전류 검사
  if (motor && esc) {
    if (motor.maxAmpsPerMotor > esc.maxAmps) {
      messages.push({ type: 'err', text: `❌ [ESC 용량 부족] 모터 최대 전류(${motor.maxAmpsPerMotor}A)가 ESC 정격(${esc.maxAmps}A)을 초과합니다!` });
    } else {
      messages.push({ type: 'ok', text: `✅ [전류 안정] ESC 정격(${esc.maxAmps}A)이 모터 최대 전류를 수용합니다.` });
    }
  }

  compatMessagesEl.innerHTML = messages.map(m => `<p class="msg-${m.type}">${m.text}</p>`).join('');
}

searchInputEl.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderProducts();
});

document.getElementById('preset-btn').addEventListener('click', () => {
  selectedParts = {
    frame: { product: PRODUCTS.find(p => p.id === 'fr2'), quantity: 1 },
    motor: { product: PRODUCTS.find(p => p.id === 'mt1'), quantity: 1 },
    esc: { product: PRODUCTS.find(p => p.id === 'esc1'), quantity: 1 },
    fc: { product: PRODUCTS.find(p => p.id === 'fc1'), quantity: 1 },
    prop: { product: PRODUCTS.find(p => p.id === 'p1'), quantity: 2 }, // 여분 프롭 2개 예시
    battery: { product: PRODUCTS.find(p => p.id === 'b1'), quantity: 2 }, // 배터리 2개 예시
    vtx: { product: PRODUCTS.find(p => p.id === 'v1'), quantity: 1 },
    rx: { product: PRODUCTS.find(p => p.id === 'r1'), quantity: 1 }
  };
  renderProducts();
  renderQuoteSidebar();
});

document.getElementById('reset-btn').addEventListener('click', () => {
  selectedParts = {};
  renderProducts();
  renderQuoteSidebar();
});

assembleBtn.addEventListener('click', () => {
  const count = Object.keys(selectedParts).length;
  if (count === 0) return alert('먼저 견적함에 부품을 담아주세요.');

  const total = Object.values(selectedParts).reduce((sum, entry) => sum + (entry.product.price * entry.quantity), 0);
  const partNames = Object.values(selectedParts).map(e => `• ${e.product.name} (수량: ${e.quantity})`).join('<br>');

  modalSummaryEl.innerHTML = `
    <strong>선택된 부품 (${count}종)</strong><br>
    <div style="margin:6px 0; color:#525252;">${partNames}</div>
    <strong>총 견적 금액: ${total.toLocaleString()}원</strong>
  `;
  assembleModal.classList.add('open');
});

modalClose.addEventListener('click', () => assembleModal.classList.remove('open'));

assembleForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('customer-name').value;
  alert(`${name}님, '다 날아' 조립 신청이 성공적으로 접수되었습니다!`);
  assembleModal.classList.remove('open');
  assembleForm.reset();
});

// 넷플릭스 스타일 오프닝 인트로 제어
window.addEventListener('DOMContentLoaded', () => {
  const introOverlay = document.getElementById('intro-overlay');
  if (introOverlay) {
    // 2.2초 동안 타이틀 확대 효과 후 부드럽게 페이드아웃하여 견적 화면 노출
    setTimeout(() => {
      introOverlay.classList.add('fade-out');
      setTimeout(() => {
        introOverlay.remove();
      }, 800);
    }, 2200);
  }
});

init();
