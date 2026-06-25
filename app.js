/* ==============================
   MATHTYPE PWA — APP.JS
   ============================== */

'use strict';

// ===== SYMBOL DATA =====
const SYMBOLS = {
  greek: [
    { sym: 'α', latex: '\\alpha' }, { sym: 'β', latex: '\\beta' },
    { sym: 'γ', latex: '\\gamma' }, { sym: 'δ', latex: '\\delta' },
    { sym: 'ε', latex: '\\epsilon' }, { sym: 'ζ', latex: '\\zeta' },
    { sym: 'η', latex: '\\eta' }, { sym: 'θ', latex: '\\theta' },
    { sym: 'ι', latex: '\\iota' }, { sym: 'κ', latex: '\\kappa' },
    { sym: 'λ', latex: '\\lambda' }, { sym: 'μ', latex: '\\mu' },
    { sym: 'ν', latex: '\\nu' }, { sym: 'ξ', latex: '\\xi' },
    { sym: 'π', latex: '\\pi' }, { sym: 'ρ', latex: '\\rho' },
    { sym: 'σ', latex: '\\sigma' }, { sym: 'τ', latex: '\\tau' },
    { sym: 'υ', latex: '\\upsilon' }, { sym: 'φ', latex: '\\phi' },
    { sym: 'χ', latex: '\\chi' }, { sym: 'ψ', latex: '\\psi' },
    { sym: 'ω', latex: '\\omega' }, { sym: 'Γ', latex: '\\Gamma' },
    { sym: 'Δ', latex: '\\Delta' }, { sym: 'Θ', latex: '\\Theta' },
    { sym: 'Λ', latex: '\\Lambda' }, { sym: 'Ξ', latex: '\\Xi' },
    { sym: 'Π', latex: '\\Pi' }, { sym: 'Σ', latex: '\\Sigma' },
    { sym: 'Φ', latex: '\\Phi' }, { sym: 'Ψ', latex: '\\Psi' },
    { sym: 'Ω', latex: '\\Omega' }, { sym: 'ε̃', latex: '\\varepsilon' },
    { sym: 'ϕ', latex: '\\varphi' }, { sym: 'ϖ', latex: '\\varpi' },
  ],
  operators: [
    { sym: '±', latex: '\\pm' }, { sym: '∓', latex: '\\mp' },
    { sym: '×', latex: '\\times' }, { sym: '÷', latex: '\\div' },
    { sym: '·', latex: '\\cdot' }, { sym: '∘', latex: '\\circ' },
    { sym: '≤', latex: '\\leq' }, { sym: '≥', latex: '\\geq' },
    { sym: '≠', latex: '\\neq' }, { sym: '≈', latex: '\\approx' },
    { sym: '≡', latex: '\\equiv' }, { sym: '∝', latex: '\\propto' },
    { sym: '≪', latex: '\\ll' }, { sym: '≫', latex: '\\gg' },
    { sym: '≤', latex: '\\leqslant' }, { sym: '≥', latex: '\\geqslant' },
    { sym: '⊕', latex: '\\oplus' }, { sym: '⊗', latex: '\\otimes' },
    { sym: '⊙', latex: '\\odot' }, { sym: '†', latex: '\\dagger' },
    { sym: '‡', latex: '\\ddagger' }, { sym: '★', latex: '\\star' },
    { sym: '∗', latex: '\\ast' }, { sym: '∨', latex: '\\vee' },
    { sym: '∧', latex: '\\wedge' }, { sym: '∩', latex: '\\cap' },
    { sym: '∪', latex: '\\cup' }, { sym: '⊂', latex: '\\subset' },
  ],
  arrows: [
    { sym: '→', latex: '\\to' }, { sym: '←', latex: '\\leftarrow' },
    { sym: '↔', latex: '\\leftrightarrow' }, { sym: '⇒', latex: '\\Rightarrow' },
    { sym: '⇐', latex: '\\Leftarrow' }, { sym: '⇔', latex: '\\Leftrightarrow' },
    { sym: '↑', latex: '\\uparrow' }, { sym: '↓', latex: '\\downarrow' },
    { sym: '↕', latex: '\\updownarrow' }, { sym: '⇑', latex: '\\Uparrow' },
    { sym: '⇓', latex: '\\Downarrow' }, { sym: '↗', latex: '\\nearrow' },
    { sym: '↘', latex: '\\searrow' }, { sym: '↙', latex: '\\swarrow' },
    { sym: '↖', latex: '\\nwarrow' }, { sym: '↦', latex: '\\mapsto' },
    { sym: '⟹', latex: '\\implies' }, { sym: '⟺', latex: '\\iff' },
    { sym: '↩', latex: '\\hookleftarrow' }, { sym: '↪', latex: '\\hookrightarrow' },
  ],
  sets: [
    { sym: '∈', latex: '\\in' }, { sym: '∉', latex: '\\notin' },
    { sym: '∋', latex: '\\ni' }, { sym: '⊂', latex: '\\subset' },
    { sym: '⊃', latex: '\\supset' }, { sym: '⊆', latex: '\\subseteq' },
    { sym: '⊇', latex: '\\supseteq' }, { sym: '∩', latex: '\\cap' },
    { sym: '∪', latex: '\\cup' }, { sym: '∅', latex: '\\emptyset' },
    { sym: 'ℕ', latex: '\\mathbb{N}' }, { sym: 'ℤ', latex: '\\mathbb{Z}' },
    { sym: 'ℚ', latex: '\\mathbb{Q}' }, { sym: 'ℝ', latex: '\\mathbb{R}' },
    { sym: 'ℂ', latex: '\\mathbb{C}' }, { sym: '\\', latex: '\\setminus' },
    { sym: '△', latex: '\\triangle' }, { sym: '∁', latex: '\\complement' },
  ],
  calculus: [
    { sym: '∫', latex: '\\int' }, { sym: '∬', latex: '\\iint' },
    { sym: '∭', latex: '\\iiint' }, { sym: '∮', latex: '\\oint' },
    { sym: '∂', latex: '\\partial' }, { sym: '∇', latex: '\\nabla' },
    { sym: '∞', latex: '\\infty' }, { sym: 'lim', latex: '\\lim' },
    { sym: 'Σ', latex: '\\sum' }, { sym: 'Π', latex: '\\prod' },
    { sym: '∆', latex: '\\Delta' }, { sym: '√', latex: '\\sqrt{}' },
    { sym: 'sup', latex: '\\sup' }, { sym: 'inf', latex: '\\inf' },
    { sym: 'max', latex: '\\max' }, { sym: 'min', latex: '\\min' },
  ],
  trig: [
    { sym: 'sin', latex: '\\sin' }, { sym: 'cos', latex: '\\cos' },
    { sym: 'tan', latex: '\\tan' }, { sym: 'cot', latex: '\\cot' },
    { sym: 'sec', latex: '\\sec' }, { sym: 'csc', latex: '\\csc' },
    { sym: 'sin⁻¹', latex: '\\arcsin' }, { sym: 'cos⁻¹', latex: '\\arccos' },
    { sym: 'tan⁻¹', latex: '\\arctan' }, { sym: 'sinh', latex: '\\sinh' },
    { sym: 'cosh', latex: '\\cosh' }, { sym: 'tanh', latex: '\\tanh' },
    { sym: 'ln', latex: '\\ln' }, { sym: 'log', latex: '\\log' },
    { sym: 'exp', latex: '\\exp' }, { sym: 'lg', latex: '\\lg' },
  ],
  logic: [
    { sym: '∀', latex: '\\forall' }, { sym: '∃', latex: '\\exists' },
    { sym: '∄', latex: '\\nexists' }, { sym: '¬', latex: '\\neg' },
    { sym: '∧', latex: '\\land' }, { sym: '∨', latex: '\\lor' },
    { sym: '⊻', latex: '\\veebar' }, { sym: '⊤', latex: '\\top' },
    { sym: '⊥', latex: '\\bot' }, { sym: '⊢', latex: '\\vdash' },
    { sym: '⊨', latex: '\\models' }, { sym: '∴', latex: '\\therefore' },
    { sym: '∵', latex: '\\because' }, { sym: '□', latex: '\\square' },
    { sym: '◇', latex: '\\diamond' }, { sym: '⊕', latex: '\\oplus' },
  ],
  misc: [
    { sym: '∞', latex: '\\infty' }, { sym: '…', latex: '\\ldots' },
    { sym: '⋯', latex: '\\cdots' }, { sym: '⋮', latex: '\\vdots' },
    { sym: '⋱', latex: '\\ddots' }, { sym: '°', latex: '^\\circ' },
    { sym: '‰', latex: '\\permil' }, { sym: '℃', latex: '^\\circ C' },
    { sym: 'ℏ', latex: '\\hbar' }, { sym: 'ℓ', latex: '\\ell' },
    { sym: '℘', latex: '\\wp' }, { sym: '⌊', latex: '\\lfloor' },
    { sym: '⌋', latex: '\\rfloor' }, { sym: '⌈', latex: '\\lceil' },
    { sym: '⌉', latex: '\\rceil' }, { sym: '‖', latex: '\\|' },
  ],
};

// ===== STATE =====
let currentTab = 'greek';
let zoomLevel = 100;
let previewMode = 'display';
let equationHistory = JSON.parse(localStorage.getItem('mathtype-history') || '[]');
let undoStack = [];
let redoStack = [];
let renderTimer = null;
let katexReady = false;
let syncingFromMathField = false;
let syncingFromTextarea = false;

// ===== DOM REFS =====
const latexInput     = document.getElementById('latex-input');
const previewStatus  = document.getElementById('preview-status');
const symbolGrid     = document.getElementById('symbol-grid');
const historyList    = document.getElementById('history-list');
const zoomLevelEl    = document.getElementById('zoom-level');
const toast          = document.getElementById('toast');
const offlineBar     = document.getElementById('offline-bar');
const installBanner  = document.getElementById('install-banner');

// math-field is a custom element — reference after DOM ready
let mathEditor = null;

// ===== KATEX READY CHECK =====
function waitForKatex() {
  return new Promise(resolve => {
    if (typeof katex !== 'undefined') { resolve(); return; }
    const check = setInterval(() => {
      if (typeof katex !== 'undefined') { clearInterval(check); resolve(); }
    }, 100);
  });
}

// ===== WAIT FOR MATHLIVE =====
function waitForMathLive() {
  return new Promise(resolve => {
    if (customElements.get('math-field')) { resolve(); return; }
    customElements.whenDefined('math-field').then(resolve);
  });
}

// ===== SYMBOL GRID =====
function renderSymbolGrid(tab) {
  symbolGrid.innerHTML = '';
  const items = SYMBOLS[tab] || [];
  items.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'sym-btn';
    btn.title = item.latex;
    btn.textContent = item.sym;
    btn.addEventListener('click', () => insertLatex(item.latex));
    symbolGrid.appendChild(btn);
  });
}

// ===== INSERT LATEX INTO MATH-FIELD =====
function insertLatex(text) {
  if (!mathEditor) return;

  // Replace □ placeholder with empty group for cursor positioning
  const cleaned = text.replace(/□/g, '#?');

  mathEditor.executeCommand(['insert', cleaned]);
  mathEditor.focus();

  // Sync textarea from math-field
  syncTextareaFromMathField();
}

// Kept for compatibility with toolbar clicks that call insertAtCursor
function insertAtCursor(text) {
  insertLatex(text);
}

// ===== SYNC: math-field → textarea =====
function syncTextareaFromMathField() {
  if (syncingFromTextarea) return;
  syncingFromMathField = true;
  const latex = mathEditor.getValue('latex-expanded') || mathEditor.value || '';
  // Remove outer \mleft / \mright wrappers added by MathLive but keep content
  latexInput.value = latex;
  scheduleHistorySave(latex);
  syncingFromMathField = false;
}

// ===== SYNC: textarea → math-field =====
function syncMathFieldFromTextarea(latex) {
  if (syncingFromMathField) return;
  syncingFromTextarea = true;
  mathEditor.value = latex;
  syncingFromTextarea = false;
}

// ===== UNDO / REDO =====
function pushUndo(val) {
  undoStack.push(val);
  redoStack = [];
  if (undoStack.length > 50) undoStack.shift();
}

function undo() {
  if (!undoStack.length) return;
  redoStack.push(latexInput.value);
  const prev = undoStack.pop();
  latexInput.value = prev;
  syncMathFieldFromTextarea(prev);
}

function redo() {
  if (!redoStack.length) return;
  undoStack.push(latexInput.value);
  const next = redoStack.pop();
  latexInput.value = next;
  syncMathFieldFromTextarea(next);
}

// ===== SCHEDULE HISTORY SAVE (debounced) =====
function scheduleHistorySave(latex) {
  clearTimeout(renderTimer);
  renderTimer = setTimeout(() => {
    const trimmed = (latex || latexInput.value || '').trim();
    if (trimmed) {
      addToHistory(trimmed);
      updateStatus(trimmed);
    } else {
      setStatus('', '');
    }
  }, 400);
}

// ===== UPDATE STATUS using KaTeX validation =====
async function updateStatus(latex) {
  await waitForKatex();
  try {
    katex.renderToString(latex, { throwOnError: true, strict: false });
    setStatus('✓ ສົມຜົນຖືກຕ້ອງ', 'success');
  } catch (err) {
    setStatus('⚠ ' + err.message.split('\n')[0], 'error');
  }
}

function setStatus(msg, type) {
  previewStatus.textContent = msg;
  previewStatus.className = 'preview-status ' + (type || '');
}

function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ===== ZOOM =====
function updateZoom(level) {
  zoomLevel = Math.max(50, Math.min(300, level));
  zoomLevelEl.textContent = zoomLevel + '%';
  if (mathEditor) {
    mathEditor.style.fontSize = (zoomLevel / 100) + 'em';
  }
}

// ===== HISTORY =====
function addToHistory(latex) {
  if (!latex) return;
  equationHistory = equationHistory.filter(h => h !== latex);
  equationHistory.unshift(latex);
  equationHistory = equationHistory.slice(0, 30);
  localStorage.setItem('mathtype-history', JSON.stringify(equationHistory));
  renderHistory();
}

function renderHistory() {
  if (!equationHistory.length) {
    historyList.innerHTML = '<div class="history-empty">ຍັງບໍ່ທັນມີສົມຜົນ</div>';
    return;
  }
  historyList.innerHTML = '';
  equationHistory.forEach(latex => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.textContent = latex;
    div.title = latex;
    div.addEventListener('click', () => {
      pushUndo(latexInput.value);
      latexInput.value = latex;
      syncMathFieldFromTextarea(latex);
      scheduleHistorySave(latex);
    });
    historyList.appendChild(div);
  });
}

// ===== COPY LATEX =====
async function copyLatex() {
  const val = (mathEditor ? mathEditor.value : latexInput.value).trim();
  if (!val) { showToast('ຍັງບໍ່ທັນພິມສົມຜົນ'); return; }
  try {
    await navigator.clipboard.writeText('$' + val + '$');
    showToast('✓ ສຳເນົາ LaTeX ແລ້ວ!');
  } catch {
    showToast('ສຳເນົາ LaTeX ລົ້ມເຫລວ');
  }
}

// ===== EXPORT PNG =====
async function exportPng() {
  const val = (mathEditor ? mathEditor.value : latexInput.value).trim();
  if (!val) { showToast('ຍັງບໍ່ທັນພິມສົມຜົນ'); return; }

  await waitForKatex();

  // Create offscreen element with white background
  const offDiv = document.createElement('div');
  offDiv.style.cssText = `
    position: fixed; left: -9999px; top: 0;
    background: white; padding: 40px 60px;
    color: black; font-size: 24px;
    display: inline-block;
  `;

  try {
    offDiv.innerHTML = katex.renderToString(val, {
      displayMode: true,
      throwOnError: false, // ອະນຸຍາດໃຫ້ Export ໄດ້ເຖິງວ່າສູດຈະມີ error ກໍຕາມ
      strict: false,
    });
  } catch (err) {
    console.warn("KaTeX render fallback error:", err);
    // ຖ້າຫາກຍັງມີ error ອີກ ກໍພຽງແຕ່ເອົາຂໍ້ຄວາມດິບໃສ່
    offDiv.innerText = val;
  }
  document.body.appendChild(offDiv);

  try {
    if (typeof html2canvas !== 'undefined') {
      const canvas = await html2canvas(offDiv, { backgroundColor: '#ffffff', scale: 3, useCORS: true });
      const link = document.createElement('a');
      link.download = 'equation.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('✓ Export PNG ແລ້ວ!');
    } else {
      // Fallback: copy LaTeX
      await navigator.clipboard.writeText('$' + val + '$').catch(() => {});
      showToast('📋 ສຳເນົາ LaTeX ແລ້ວ (html2canvas ຍັງ load ບໍ່ທັນ)');
    }
  } catch (err) {
    showToast('Export PNG ລົ້ມເຫລວ: ' + err.message);
  } finally {
    document.body.removeChild(offDiv);
  }
}

// ===== EXPORT SVG =====
async function exportSvg() {
  const val = (mathEditor ? mathEditor.value : latexInput.value).trim();
  if (!val) { showToast('ຍັງບໍ່ທັນພິມສົມຜົນ'); return; }

  await waitForKatex();

  try {
    let html = '';
    try {
      html = katex.renderToString(val, {
        displayMode: true,
        throwOnError: false, // ອະນຸຍາດໃຫ້ Export ໄດ້ເຖິງວ່າສູດຈະມີ error ກໍຕາມ
        strict: false,
        output: 'html',
      });
    } catch (e) {
      // Fallback
      html = `<span>${val}</span>`;
    }

    // Wrap in SVG using foreignObject
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:fixed;left:-9999px;top:0;background:white;padding:32px 48px;color:black;font-size:22px;display:inline-block;';
    wrapper.innerHTML = html;
    document.body.appendChild(wrapper);

    const w = wrapper.offsetWidth + 96;
    const h = wrapper.offsetHeight + 64;

    // Build SVG with foreignObject embedding the KaTeX HTML
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('xmlns', svgNS);
    svg.setAttribute('xmlns:xhtml', 'http://www.w3.org/1999/xhtml');
    svg.setAttribute('width', w);
    svg.setAttribute('height', h);
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    const rect = document.createElementNS(svgNS, 'rect');
    rect.setAttribute('width', '100%');
    rect.setAttribute('height', '100%');
    rect.setAttribute('fill', 'white');
    svg.appendChild(rect);

    const fo = document.createElementNS(svgNS, 'foreignObject');
    fo.setAttribute('x', '48');
    fo.setAttribute('y', '32');
    fo.setAttribute('width', w - 96);
    fo.setAttribute('height', h - 64);

    const body = document.createElement('div');
    body.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
    body.style.cssText = 'color:black;font-size:22px;';
    body.innerHTML = html;
    fo.appendChild(body);
    svg.appendChild(fo);

    document.body.removeChild(wrapper);

    // Serialize and include KaTeX CSS inline
    const svgStr = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'equation.svg';
    link.href = url;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    showToast('✓ Export SVG ແລ້ວ!');
  } catch (err) {
    showToast('Export SVG ລົ້ມເຫລວ: ' + err.message);
  }
}

// ===== TOAST =====
let toastTimer;
function showToast(msg, duration = 2500) {
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), duration);
}

// ===== UPDATE TOAST — ສະແດງເມື່ອ SW ໃໝ່ພ້ອມ =====
function showUpdateToast() {
  clearTimeout(toastTimer);
  toast.innerHTML = `
    🔄 ມີ Version ໃໝ່!
    <button id="reload-btn" style="
      margin-left:10px; background:var(--accent); color:white;
      border:none; border-radius:4px; padding:3px 10px;
      font-size:11px; cursor:pointer; font-family:var(--font-ui);
    ">Reload</button>
  `;
  toast.classList.remove('hidden');
  document.getElementById('reload-btn').addEventListener('click', () => {
    // ສັ່ງ SW ໃໝ່ activate ທັນທີ
    navigator.serviceWorker.controller?.postMessage({ type: 'SKIP_WAITING' });
  });
  // ບໍ່ auto-hide update toast
}

// ===== THEME =====
let currentThemeMode = 'dark'; // 'light' | 'dark' | 'auto'

function initTheme() {
  const saved = localStorage.getItem('mathtype-theme') || 'auto';
  setTheme(saved, false);
  
  // ຟັງການປ່ຽນແປງຈາກ System
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (currentThemeMode === 'auto') {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(actualTheme) {
  document.documentElement.dataset.theme = actualTheme === 'light' ? 'light' : '';
  applyMathFieldTheme(actualTheme);
}

function setTheme(mode, save = true) {
  currentThemeMode = mode;
  const btn = document.getElementById('theme-toggle');
  
  if (mode === 'light') {
    btn.textContent = '☀️';
    btn.title = 'ປ່ຽນ Theme (ສະຫວ່າງ)';
    applyTheme('light');
  } else if (mode === 'dark') {
    btn.textContent = '🌙';
    btn.title = 'ປ່ຽນ Theme (ມືດ)';
    applyTheme('dark');
  } else {
    btn.textContent = '🌗';
    btn.title = 'ປ່ຽນ Theme (ອັດຕະໂນມັດ)';
    const isSysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(isSysDark ? 'dark' : 'light');
  }
  
  if (save) localStorage.setItem('mathtype-theme', mode);
}

function applyMathFieldTheme(theme) {
  if (!mathEditor) return;
  const laoFontStack = "'Noto Sans Lao', 'Noto Serif Lao', 'STIX Two Math', 'Latin Modern Math', 'Inter', system-ui, sans-serif";
  mathEditor.style.setProperty('--text-font-family', laoFontStack);
  if (theme === 'light') {
    mathEditor.style.setProperty('--caret-color', '#5544cc');
  } else {
    mathEditor.style.setProperty('--caret-color', '#a193ff');
  }
}

function toggleTheme() {
  if (currentThemeMode === 'light') {
    setTheme('dark');
  } else if (currentThemeMode === 'dark') {
    setTheme('auto');
  } else {
    setTheme('light');
  }
}

// ===== PWA INSTALL =====
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  installBanner.classList.remove('hidden');
});

document.getElementById('install-btn').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBanner.classList.add('hidden');
  if (outcome === 'accepted') showToast('✓ ຕິດຕັ້ງ MathType ສຳເລັດ!');
});

document.getElementById('dismiss-btn').addEventListener('click', () => {
  installBanner.classList.add('hidden');
});

// ===== OFFLINE =====
function updateOnline() {
  offlineBar.classList.toggle('hidden', navigator.onLine);
}
window.addEventListener('online', updateOnline);
window.addEventListener('offline', updateOnline);
updateOnline();

// ===== KEYBOARD SHORTCUTS =====
latexInput.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'z') { e.preventDefault(); undo(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 'y') { e.preventDefault(); redo(); }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'Z') { e.preventDefault(); redo(); }

  // Tab → insert spaces
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = latexInput.selectionStart;
    const end   = latexInput.selectionEnd;
    const val   = latexInput.value;
    latexInput.value = val.substring(0, start) + '  ' + val.substring(end);
    latexInput.setSelectionRange(start + 2, start + 2);
  }
});

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'c' && !latexInput.matches(':focus')) {
    copyLatex();
  }
  // Escape — ປິດ symbol / examples panel
  if (e.key === 'Escape') {
    closeSymbolPanel();
    closeExamplesPanel();
  }
});

// ===== SYMBOL PANEL TOGGLE =====
let symbolPanelOpen = false;

function openSymbolPanel() {
  closeExamplesPanel(); // Close the other panel if open

  const panel   = document.getElementById('symbol-panel');
  const overlay = document.getElementById('symbol-panel-overlay');
  const toggle  = document.getElementById('symbol-toggle');

  panel.classList.remove('collapsed');
  overlay.classList.add('visible');
  toggle.classList.add('panel-open');
  toggle.setAttribute('aria-expanded', 'true');
  symbolPanelOpen = true;
}

function closeSymbolPanel() {
  const panel   = document.getElementById('symbol-panel');
  const overlay = document.getElementById('symbol-panel-overlay');
  const toggle  = document.getElementById('symbol-toggle');

  panel.classList.add('collapsed');
  overlay.classList.remove('visible');
  toggle.classList.remove('panel-open');
  toggle.setAttribute('aria-expanded', 'false');
  symbolPanelOpen = false;
}

function toggleSymbolPanel() {
  if (symbolPanelOpen) {
    closeSymbolPanel();
  } else {
    openSymbolPanel();
  }
}

// ===== EXAMPLES PANEL TOGGLE =====
let examplesPanelOpen = false;

function openExamplesPanel() {
  closeSymbolPanel(); // Close the other panel if open

  const panel   = document.getElementById('examples-panel');
  const overlay = document.getElementById('examples-panel-overlay');
  const toggle  = document.getElementById('examples-toggle');

  panel.classList.remove('collapsed');
  overlay.classList.add('visible');
  toggle.classList.add('panel-open');
  toggle.setAttribute('aria-expanded', 'true');
  examplesPanelOpen = true;
}

function closeExamplesPanel() {
  const panel   = document.getElementById('examples-panel');
  const overlay = document.getElementById('examples-panel-overlay');
  const toggle  = document.getElementById('examples-toggle');

  if (!panel) return;

  panel.classList.add('collapsed');
  overlay.classList.remove('visible');
  toggle.classList.remove('panel-open');
  toggle.setAttribute('aria-expanded', 'false');
  examplesPanelOpen = false;
}

function toggleExamplesPanel() {
  if (examplesPanelOpen) {
    closeExamplesPanel();
  } else {
    openExamplesPanel();
  }
}

// Wire up hamburger, close-btn, overlay for both panels
document.getElementById('symbol-toggle').addEventListener('click', toggleSymbolPanel);
document.getElementById('panel-close-btn').addEventListener('click', closeSymbolPanel);
document.getElementById('symbol-panel-overlay').addEventListener('click', closeSymbolPanel);

document.getElementById('examples-toggle').addEventListener('click', toggleExamplesPanel);
document.getElementById('examples-close-btn').addEventListener('click', closeExamplesPanel);
document.getElementById('examples-panel-overlay').addEventListener('click', closeExamplesPanel);

// ===== INIT =====
async function init() {
  // Wait for MathLive to be defined
  await waitForMathLive();
  mathEditor = document.getElementById('math-editor');

  // ===== CONFIGURE MATH-FIELD =====
  // Disable virtual keyboard globally to prevent popup on desktop
  if (window.mathVirtualKeyboard) {
    window.mathVirtualKeyboard.visible = false;
  }

  // ເອີນໃສ່ Lao font + smartMode ໃຫ້ MathLive
  mathEditor.setOptions({
    // smartMode: auto-detect ວ່າຜູ້ໃຊ້ພິມຂ້ອຄວາມ ຫຼື ສູດຄະນິດສາດ ແລ້ວ switch mode
    smartMode: true,
    // ຮອງຮັບ ພິມຂ້ອຄວາມພາສາລາວ ເວລາຈັບ \text{}
    fontsDirectory: null, // ໃຊ້ system fonts
    // ກຳຫນດ font ສຳຫຼັບ text mode (\text{...})
    defaultMode: 'math',
  });

  // ແທນທີ່ style ຂອງ mathEditor ເພື່ອໃຫ້ Lao font ຖືກ apply
  mathEditor.style.setProperty(
    '--text-font-family',
    "'Noto Sans Lao', 'Noto Serif Lao', 'STIX Two Math', 'Latin Modern Math', 'Inter', system-ui, sans-serif"
  );

  // Set initial value
  mathEditor.value = '\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}';
  latexInput.value = mathEditor.value;

  // math-field → textarea sync
  mathEditor.addEventListener('input', () => {
    syncTextareaFromMathField();
  });

  // ປ້ອງກັນການຍະແຖວຊ້ຳກັນ (Debounce) ເມື່ອຫຼາຍ Event ຖືກເອີ້ນພ້ອມກັນ
  let lastEnterTime = 0;
  function handleEnter(ev) {
    const now = Date.now();
    if (ev && ev.preventDefault) ev.preventDefault();
    if (now - lastEnterTime < 50) return; // ຖ້າກົດຊ້ຳພາຍໃນ 50ms ໃຫ້ຂ້າມໄປ
    lastEnterTime = now;
    mathEditor.executeCommand(['insert', '\\\\']);
  }

  // ຮອງຮັບຄີບອດແທ້
  mathEditor.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' && !ev.shiftKey) {
      handleEnter(ev);
    }
  });

  // ຮອງຮັບ Toggle Virtual Keyboard ຂອງ MathLive
  mathEditor.addEventListener('commit', (ev) => {
    handleEnter(ev);
  });

  // ຮອງຮັບຄີບອດເທິງມືຖື (Native Mobile Keyboard)
  mathEditor.addEventListener('beforeinput', (ev) => {
    if (ev.inputType === 'insertLineBreak' || ev.inputType === 'insertParagraph') {
      handleEnter(ev);
    }
  });

  // textarea → math-field sync
  latexInput.addEventListener('input', () => {
    const val = latexInput.value;
    pushUndo(val);
    undoStack.pop();
    syncMathFieldFromTextarea(val);
    scheduleHistorySave(val);
  });

  // Symbol panel tabs
  document.querySelectorAll('.stab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.dataset.tab;
      renderSymbolGrid(currentTab);
    });
  });
  renderSymbolGrid(currentTab);

  // Structure toolbar buttons
  document.querySelectorAll('.tbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tmpl = btn.dataset.template;
      if (tmpl) insertLatex(tmpl);
    });
  });

  // Example buttons
  document.querySelectorAll('.exbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      pushUndo(latexInput.value);
      const latex = btn.dataset.latex;
      insertLatex(latex);

      // on mobile, close panel
      if (window.innerWidth <= 900) {
        closeExamplesPanel();
      }
    });
  });

  // Preview mode (Display / Inline)
  document.querySelectorAll('.pmb').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pmb').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      previewMode = btn.dataset.mode;
      // Apply to math-field display style
      const wrapper = document.getElementById('math-editor-wrapper');
      if (previewMode === 'inline') {
        mathEditor.classList.add('inline-mode');
      } else {
        mathEditor.classList.remove('inline-mode');
      }
    });
  });

  // Zoom
  document.getElementById('zoom-in').addEventListener('click', () => updateZoom(zoomLevel + 25));
  document.getElementById('zoom-out').addEventListener('click', () => updateZoom(zoomLevel - 25));

  // Header buttons
  document.getElementById('btn-copy-latex').addEventListener('click', copyLatex);
  document.getElementById('btn-export-png').addEventListener('click', exportPng);
  document.getElementById('btn-export-svg').addEventListener('click', exportSvg);
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Editor controls
  document.getElementById('btn-clear').addEventListener('click', () => {
    pushUndo(latexInput.value);
    latexInput.value = '';
    mathEditor.value = '';
    setStatus('', '');
    mathEditor.focus();
  });
  document.getElementById('btn-undo').addEventListener('click', undo);
  document.getElementById('btn-redo').addEventListener('click', redo);
  document.getElementById('btn-clear-history').addEventListener('click', () => {
    equationHistory = [];
    localStorage.removeItem('mathtype-history');
    renderHistory();
    showToast('ລ້າງປະຫວັດແລ້ວ');
  });

  // Load history
  renderHistory();

  // Init theme
  initTheme();

  // Render toolbar math (KaTeX for toolbar preview buttons)
  await waitForKatex();
  document.querySelectorAll('.tbtn').forEach(btn => {
    const raw = btn.textContent.trim();
    if (raw.startsWith('\\[') && raw.endsWith('\\]')) {
      const inner = raw.slice(2, -2);
      try {
        btn.innerHTML = katex.renderToString(inner, { displayMode: false, throwOnError: false });
      } catch {}
    }
  });

  // Initial status validation
  updateStatus(mathEditor.value);

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('sw.js');
      console.log('[MathType PWA] Service Worker registered:', reg.scope);

      // ເມື່ອ SW ໃໝ່ຖືກພົບ — ແຈ້ງ user
      reg.addEventListener('updatefound', () => {
        const newSW = reg.installing;
        if (!newSW) return;
        newSW.addEventListener('statechange', () => {
          if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
            // ມີ version ໃໝ່ — ສະແດງ toast ໃຫ້ reload
            showUpdateToast();
          }
        });
      });

      // ຖ້າ SW ປ່ຽນ controller (ຫຼັງ update) — reload ໜ້າ
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });

      // ກວດ update ທຸກຄັ້ງທີ່ user ກັບຄືນໜ້ານີ້
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          reg.update().catch(() => {});
        }
      });

    } catch (err) {
      console.warn('[MathType PWA] SW registration failed:', err);
    }
  }

  showToast('🧮 MathType PWA ພ້ອມໃຊ້ງານ!', 2000);
}

document.addEventListener('DOMContentLoaded', init);
