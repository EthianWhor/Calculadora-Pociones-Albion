// ── CITIES ────────────────────────────────────────────────────────────────────

const ALL_CITIES  = ['Lymhurst','Bridgewatch','Martlock','Thetford','Fort Sterling','Caerleon','Brecilien'];
const BASE_CITIES = ['Lymhurst','Bridgewatch','Martlock','Thetford','Fort Sterling','Caerleon'];

function getCities() {
  return state.brecilien === 1 ? ALL_CITIES : BASE_CITIES;
}

// ── STATE ─────────────────────────────────────────────────────────────────────

const state = { server: 'west', tax: 8, brecilien: 1 };

// ── POTION RECIPES ─────────────────────────────────────────────────────────────
// Each recipe produces 5 potions.
// Ingredients: { itemId: qty }
// potionId: Albion API item id

const POTIONS = [
  // ── MINOR (T2) ──
  {
    id: 'T2_POTION_HEAL',
    name: 'Minor Healing Potion',
    tier: 2,
    emoji: '💊',
    category: 'Curación',
    ingredients: { T2_AGARIC: 8 },
    output: 5,
  },
  {
    id: 'T2_POTION_ENERGY',
    name: 'Minor Energy Potion',
    tier: 2,
    emoji: '⚡',
    category: 'Energía',
    ingredients: { T2_AGARIC: 8 },
    output: 5,
  },
  {
    id: 'T3_POTION_REVIVE',
    name: 'Minor Gigantify Potion',
    tier: 3,
    emoji: '💪',
    category: 'Gigantify',
    ingredients: { T3_COMFREY: 8 },
    output: 5,
  },
  {
    id: 'T3_POTION_STONESKIN',
    name: 'Minor Resistance Potion',
    tier: 3,
    emoji: '🛡️',
    category: 'Resistencia',
    ingredients: { T3_COMFREY: 8 },
    output: 5,
  },
  {
    id: 'T3_POTION_SLOWFIELD',
    name: 'Minor Sticky Potion',
    tier: 3,
    emoji: '🕸️',
    category: 'Sticky',
    ingredients: { T3_COMFREY: 8 },
    output: 5,
  },

  // ── NORMAL (T4) ──
  {
    id: 'T4_POTION_HEAL',
    name: 'Healing Potion',
    tier: 4,
    emoji: '💊',
    category: 'Curación',
    ingredients: { T4_BURDOCK: 24, T3_EGG: 6 },
    output: 5,
  },
  {
    id: 'T4_POTION_ENERGY',
    name: 'Energy Potion',
    tier: 4,
    emoji: '⚡',
    category: 'Energía',
    ingredients: { T4_BURDOCK: 24, T4_MILK: 6 },
    output: 5,
  },
  {
    id: 'T5_POTION_REVIVE',
    name: 'Gigantify Potion',
    tier: 5,
    emoji: '💪',
    category: 'Gigantify',
    ingredients: { T4_BURDOCK: 12, T5_TEASEL: 24, T5_EGG: 6 },
    output: 5,
  },
  {
    id: 'T5_POTION_STONESKIN',
    name: 'Resistance Potion',
    tier: 5,
    emoji: '🛡️',
    category: 'Resistencia',
    ingredients: { T4_BURDOCK: 12, T5_TEASEL: 24, T4_MILK: 6 },
    output: 5,
  },
  {
    id: 'T5_POTION_SLOWFIELD',
    name: 'Sticky Potion',
    tier: 5,
    emoji: '🕸️',
    category: 'Sticky',
    ingredients: { T4_BURDOCK: 12, T5_TEASEL: 24, T5_EGG: 6 },
    output: 5,
  },
  {
    id: 'T4_POTION_COOLDOWN',
    name: 'Poison Potion',
    tier: 4,
    emoji: '🧪',
    category: 'Veneno',
    ingredients: { T5_TEASEL: 12, T3_COMFREY: 12, T6_MILK: 6, T6_FOXGLOVE: 24 },
    output: 5,
  },

  // ── MAJOR (T6) ──
  {
    id: 'T6_POTION_HEAL',
    name: 'Major Healing Potion',
    tier: 6,
    emoji: '💊',
    category: 'Curación',
    ingredients: { POTATO_SCHNAPPS: 18, T5_EGG: 18, T6_FOXGLOVE: 72 },
    output: 5,
  },
  {
    id: 'T6_POTION_ENERGY',
    name: 'Major Energy Potion',
    tier: 6,
    emoji: '⚡',
    category: 'Energía',
    ingredients: { POTATO_SCHNAPPS: 18, T6_MILK: 18, T6_FOXGLOVE: 72 },
    output: 5,
  },
  {
    id: 'T7_POTION_REVIVE',
    name: 'Major Gigantify Potion',
    tier: 7,
    emoji: '💪',
    category: 'Gigantify',
    ingredients: { CORN_HOOCH: 18, T5_EGG: 18, T6_FOXGLOVE: 36, T7_MULLEIN: 71 },
    output: 5,
  },
  {
    id: 'T7_POTION_STONESKIN',
    name: 'Major Resistance Potion',
    tier: 7,
    emoji: '🛡️',
    category: 'Resistencia',
    ingredients: { T4_BURDOCK: 36, CORN_HOOCH: 18, T6_MILK: 18, T6_FOXGLOVE: 36, T7_MULLEIN: 72 },
    output: 5,
  },
  {
    id: 'T7_POTION_SLOWFIELD',
    name: 'Major Sticky Potion',
    tier: 7,
    emoji: '🕸️',
    category: 'Sticky',
    ingredients: { T4_BURDOCK: 36, T5_EGG: 18, T6_FOXGLOVE: 36, T7_MULLEIN: 72 },
    output: 5,
  },
  {
    id: 'T6_POTION_COOLDOWN',
    name: 'Major Poison Potion',
    tier: 6,
    emoji: '🧪',
    category: 'Veneno',
    ingredients: { T8_YARROW: 72, T7_MULLEIN: 24, T5_TEASEL: 24, T8_MILK: 18, PUMPKIN_MOONSHINE: 18 },
    output: 5,
  },
];

// Enchanted versions share the same base ID + @1
const ENCHANTED_POTIONS = POTIONS
  .filter(p => !['T2_POTION_HEAL','T2_POTION_ENERGY'].includes(p.id)) // T2 no tienen enchant
  .map(p => ({
    ...p,
    id: p.id + '@1',
    name: p.name + ' +1',
    enchanted: true,
  }));

const ALL_POTIONS = [...POTIONS, ...ENCHANTED_POTIONS];

// ── INGREDIENT LABELS ─────────────────────────────────────────────────────────

const ING_LABELS = {
  T2_AGARIC:        'Arcane Agaric',
  T3_COMFREY:       'Brightleaf Comfrey',
  T4_BURDOCK:       'Crenellated Burdock',
  T5_TEASEL:        'Dragon Teasel',
  T6_FOXGLOVE:      'Elusive Foxglove',
  T7_MULLEIN:       'Firetouched Mullein',
  T8_YARROW:        'Ghoul Yarrow',
  T3_EGG:           'Hen Eggs',
  T4_MILK:          "Goat's Milk",
  T5_EGG:           'Goose Eggs',
  T6_MILK:          "Sheep's Milk",
  T8_MILK:          "Cow's Milk",
  POTATO_SCHNAPPS:  'Potato Schnapps',
  CORN_HOOCH:       'Corn Hooch',
  PUMPKIN_MOONSHINE:'Pumpkin Moonshine',
};

// ── TOGGLE GROUPS ─────────────────────────────────────────────────────────────

const GROUP_KEYS = { gServer: 'server', gTax: 'tax', gBrecilien: 'brecilien' };

Object.entries(GROUP_KEYS).forEach(([gid, key]) => {
  document.getElementById(gid).querySelectorAll('.tog').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(gid).querySelectorAll('.tog').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const v = btn.dataset.v;
      state[key] = isNaN(v) ? v : Number(v);
    });
  });
});

// ── HELPERS ───────────────────────────────────────────────────────────────────

function fmt(n) {
  if (n == null || isNaN(n)) return '—';
  return Math.round(n).toLocaleString('es-CO');
}

function getInventory() {
  const inv = {};
  document.querySelectorAll('.ing-input').forEach(inp => {
    inv[inp.id] = parseInt(inp.value) || 0;
  });
  return inv;
}

function maxBatches(recipe, inventory) {
  let max = Infinity;
  for (const [ing, qty] of Object.entries(recipe.ingredients)) {
    const have = inventory[ing] || 0;
    const batches = Math.floor(have / qty);
    max = Math.min(max, batches);
  }
  return max === Infinity ? 0 : max;
}

function groupPrices(data) {
  const map = {};
  for (const e of data) {
    if (e.quality !== 1) continue;
    if (!map[e.item_id]) map[e.item_id] = {};
    map[e.item_id][e.city] = { sell: e.sell_price_min, buy: e.buy_price_max };
  }
  return map;
}

function filterOutliers(rows) {
  if (rows.length === 0) return rows;
  const sorted = [...rows].sort((a, b) => a.price - b.price);
  const mid    = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 !== 0
    ? sorted[mid].price
    : (sorted[mid - 1].price + sorted[mid].price) / 2;
  const filtered = rows.filter(x => x.price <= median * 10 && x.price >= median * 0.1);
  return filtered.length > 0 ? filtered : rows;
}

function citiesSell(priceMap, itemId) {
  const rows = getCities()
    .map(city => ({ city, price: priceMap[itemId]?.[city]?.sell || 0 }))
    .filter(x => x.price > 0);
  return filterOutliers(rows).sort((a, b) => b.price - a.price);
}

// ── FETCH ─────────────────────────────────────────────────────────────────────

async function fetchPrices(server, ids) {
  const url = `https://${server}.albion-online-data.com/api/v2/stats/prices/${ids.join(',')}.json?locations=${getCities().join(',')}&_=${Date.now()}`;
  const res = await fetch(url);
  if (!res.ok && res.status !== 304) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  if (!text || text.trim() === '') throw new Error('Respuesta vacía');
  return JSON.parse(text);
}

// ── MAIN CALCULATE ─────────────────────────────────────────────────────────────

document.getElementById('calcBtn').addEventListener('click', async () => {
  const inventory = getInventory();
  const totalIngredients = Object.values(inventory).reduce((a, b) => a + b, 0);

  if (totalIngredients === 0) {
    const el = document.getElementById('error');
    el.textContent = '⚠ Ingresa al menos un ingrediente en tu inventario.';
    el.style.display = 'block';
    return;
  }

  document.getElementById('results').style.display   = 'none';
  document.getElementById('error').style.display     = 'none';
  document.getElementById('error').textContent       = '';
  document.getElementById('loading').style.display   = 'block';
  document.getElementById('calcBtn').disabled        = true;

  try {
    // Find which potions the user can make (at least 1 batch)
    const craftable = POTIONS.filter(p => maxBatches(p, inventory) > 0);

    if (craftable.length === 0) {
      throw new Error('Con los ingredientes que tienes no puedes hacer ninguna poción completa. Necesitas al menos la cantidad mínima de una receta.');
    }

    // Collect all potion IDs to fetch
    const potionIds = craftable.map(p => p.id);
    // Also fetch enchanted versions
    const enchIds   = craftable.map(p => p.id + '@1').filter(id => !id.startsWith('T2_'));
    const allIds    = [...new Set([...potionIds, ...enchIds])];

    const data = await fetchPrices(state.server, allIds);
    if (!Array.isArray(data) || data.length === 0)
      throw new Error('La API no devolvió datos de precios.');

    const pm = groupPrices(data);

    // Calculate profit for each craftable potion
    const results = [];
    for (const potion of craftable) {
      const batches    = maxBatches(potion, inventory);
      const totalOut   = batches * potion.output;
      const sellRows   = citiesSell(pm, potion.id);
      const enchRows   = citiesSell(pm, potion.id + '@1');

      const bestSell   = sellRows[0]?.price || 0;
      const bestCity   = sellRows[0]?.city  || null;

      const gross   = totalOut * bestSell;
      const net     = gross * (1 - state.tax / 100);

      results.push({
        potion,
        batches,
        totalOut,
        sellRows,
        enchRows,
        bestSell,
        bestCity,
        net,
        sellAllCities: sellRows,
      });
    }

    // Sort by net profit descending
    results.sort((a, b) => b.net - a.net);

    // Render
    renderResults(results);

    document.getElementById('results').style.display = 'block';

  } catch (err) {
    const el = document.getElementById('error');
    el.textContent = '⚠ ' + err.message;
    el.style.display = 'block';
    console.error(err);
  } finally {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('calcBtn').disabled      = false;
  }
});

// ── RENDER RESULTS ────────────────────────────────────────────────────────────

function renderResults(results) {
  const container = document.getElementById('potionCards');
  container.innerHTML = '';

  const totalProfit = results.reduce((s, r) => s + r.net, 0);
  const msgEl = document.getElementById('summaryMsg');

  if (results.length === 0) {
    msgEl.innerHTML = '<span class="dim">Sin pociones disponibles con tu inventario actual.</span>';
  } else {
    msgEl.innerHTML = `
      Puedes crear <strong>${results.length}</strong> tipo(s) de poción.<br>
      Si vendes todo, generarías aproximadamente
      <strong class="${totalProfit > 0 ? 'green' : 'red'}">${fmt(totalProfit)} plata</strong> en ingresos netos.
    `;
  }

  results.forEach(r => {
    const card = document.createElement('div');
    card.className = 'card potion-card';

    const ing = Object.entries(r.potion.ingredients)
      .map(([id, qty]) => `<span class="ing-tag">${qty}× ${ING_LABELS[id] || id}</span>`)
      .join('');

    const rows = r.sellAllCities.slice(0, 6).map((row, i) =>
      `<tr${i === 0 ? ' class="best"' : ''}>
        <td>${row.city}</td>
        <td style="color:${i === 0 ? 'var(--purple)' : 'var(--text-dim)'}">${fmt(row.price)}</td>
        <td style="color:${i === 0 ? 'var(--green)' : 'var(--text-dim)'}">${fmt(r.batches * r.potion.output * row.price * (1 - state.tax / 100))}</td>
      </tr>`
    ).join('');

    const enchantedNote = r.enchRows.length > 0
      ? `<div class="enchant-note">✨ Versión +1 → mejor precio: <strong>${fmt(r.enchRows[0]?.price)}</strong> en ${r.enchRows[0]?.city || '—'}</div>`
      : '';

    card.innerHTML = `
      <div class="potion-header">
        <div class="potion-title-row">
          <span class="potion-emoji">${r.potion.emoji}</span>
          <div>
            <div class="potion-name">${r.potion.name}</div>
            <div class="potion-meta">T${r.potion.tier} · ${r.potion.category}</div>
          </div>
        </div>
        <div class="potion-profit-badge ${r.net > 0 ? 'pos' : 'neg'}">
          <div class="badge-label">Ingreso neto</div>
          <div class="badge-val">${fmt(r.net)}</div>
          <div class="badge-unit">plata</div>
        </div>
      </div>

      <div class="potion-stats">
        <div class="stat-item">
          <div class="stat-label">Lotes posibles</div>
          <div class="stat-val cyan">${r.batches}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Pociones totales</div>
          <div class="stat-val">${r.totalOut}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Mejor precio</div>
          <div class="stat-val purple">${fmt(r.bestSell)}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Mejor ciudad</div>
          <div class="stat-val">${r.bestCity || '—'}</div>
        </div>
      </div>

      <div class="ing-used">
        <div class="section-lbl">Ingredientes por lote</div>
        <div class="ing-tags">${ing}</div>
      </div>

      <div class="sell-table-wrap">
        <div class="section-lbl">Precios por Ciudad (sell_price_min · calidad 1)</div>
        ${r.sellAllCities.length > 0
          ? `<table class="sell-table">
              <thead><tr><th>Ciudad</th><th>Precio/u</th><th>Total neto</th></tr></thead>
              <tbody>${rows}</tbody>
            </table>`
          : '<div class="no-data">Sin datos de mercado para esta poción.</div>'
        }
      </div>

      ${enchantedNote}
    `;

    container.appendChild(card);
  });
}

// ── SCANNER ───────────────────────────────────────────────────────────────────

let scanAbort = false;

document.getElementById('scanBtn').addEventListener('click', async () => {
  if (document.getElementById('scanBtn').dataset.scanning === 'true') {
    scanAbort = true;
    return;
  }
  await runScan();
});

async function runScan() {
  scanAbort = false;
  const btn      = document.getElementById('scanBtn');
  const progress = document.getElementById('scanProgress');
  const bar      = document.getElementById('scanBar');
  const scanList = document.getElementById('scanList');
  const scanInfo = document.getElementById('scanInfo');

  btn.textContent      = '⛔ Detener';
  btn.dataset.scanning = 'true';
  btn.classList.add('scanning');
  progress.style.display = 'block';
  scanList.innerHTML   = '<div class="scan-empty">Escaneando…</div>';
  scanInfo.textContent = '';

  const results = [];
  const batches = 10; // fixed inventory for scan: 10 batches
  const total   = POTIONS.length;
  let done      = 0;

  // Scan in chunks of 5 potions
  const chunkSize = 5;
  for (let i = 0; i < POTIONS.length; i += chunkSize) {
    if (scanAbort) break;
    const chunk = POTIONS.slice(i, i + chunkSize);
    const ids   = chunk.map(p => p.id);
    const enchIds = chunk.map(p => p.id + '@1');
    const allIds  = [...new Set([...ids, ...enchIds])];

    try {
      const data = await fetchPrices(state.server, allIds);
      const pm   = groupPrices(data);

      for (const potion of chunk) {
        const sellRows = citiesSell(pm, potion.id);
        if (sellRows.length === 0) continue;
        const bestSell = sellRows[0].price;
        const totalOut = batches * potion.output;
        const net      = totalOut * bestSell * (1 - state.tax / 100);

        results.push({
          potion,
          batches,
          totalOut,
          bestSell,
          bestCity: sellRows[0].city,
          net,
        });
      }
    } catch (e) {
      console.warn('Scan chunk failed:', e.message);
    }

    done += chunk.length;
    const pct = Math.round((done / total) * 100);
    bar.style.width      = pct + '%';
    scanInfo.textContent = `Escaneando… ${done}/${total} (${pct}%)`;

    renderScanTop(results);
    await new Promise(r => setTimeout(r, 350));
  }

  btn.textContent      = '🔍 Escanear Mercado';
  btn.dataset.scanning = 'false';
  btn.classList.remove('scanning');
  scanInfo.textContent = scanAbort
    ? `Detenido — ${results.length} pociones analizadas`
    : `✅ Scan completo — ${results.length} pociones analizadas (para ${batches} lotes c/u)`;

  renderScanTop(results);
}

function renderScanTop(results) {
  const scanList = document.getElementById('scanList');
  if (!results.length) {
    scanList.innerHTML = '<div class="scan-empty">Sin datos aún…</div>';
    return;
  }

  const top = [...results].sort((a, b) => b.net - a.net).slice(0, 8);
  scanList.innerHTML = '';

  top.forEach((r, i) => {
    const medals = ['🥇','🥈','🥉','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣'];
    const div = document.createElement('div');
    div.className = 'scan-item';
    div.innerHTML = `
      <div class="scan-rank">${medals[i]}</div>
      <div class="scan-body">
        <div class="scan-name">${r.potion.emoji} ${r.potion.name}</div>
        <div class="scan-meta">T${r.potion.tier} · ${r.batches} lotes · ${r.totalOut} pociones → ${r.bestCity || '—'}</div>
      </div>
      <div class="scan-profit ${r.net > 0 ? 'pos' : 'neg'}">
        <div class="scan-pv">${fmt(r.net)}</div>
        <div class="scan-pl">plata</div>
      </div>`;
    div.style.cursor = 'pointer';
    div.title = 'Clic para ver detalles';
    div.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    scanList.appendChild(div);
  });
}
