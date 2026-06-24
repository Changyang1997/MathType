# 🧮 MathType PWA

ຕົວແກ້ໄຂສົມຜົນຄະນິດສາດ LaTeX ທີ່ເຮັດວຽກເປັນ Progressive Web App ພ້ອມໃຊ້ Offline.

**[▶ Live Demo](https://your-username.github.io/mathtype-pwa)**

---

## ✨ ຄຸນສົມບັດ

- 📐 **LaTeX Editor** — ພິມ LaTeX ແລ້ວເຫັນຜົນລັບ Real-time
- 🔣 **Symbol Panel** — ສັນຍາລັກຄະນິດ 200+ ສັນຍາ (Greek, Operators, Arrows, Sets, Calculus...)
- 🏗️ **Structure Toolbar** — Template ເສດຖາ, ຮາກ, ຜົນລວມ, ລິມິດ, Matrix, ວົງເລັບ
- 📚 **ຕົວຢ່າງ** — ສົມຜົນຊື່ດັງ 30+ ສູດ (Physics, Calculus, Statistics...)
- 📋 **ສຳເນົາ LaTeX** — ກົດດຽວ copy ໄດ້ທັນທີ
- 🕐 **History** — ຈື່ສົມຜົນທີ່ເຄີຍໃຊ້ 30 ລາຍການ
- ↩️ **Undo/Redo** — ແກ້ໄຂໄດ້ຫຼາຍຂັ້ນ
- 🌙 **Dark/Light Mode** — ເລືອກ Theme ໄດ້
- 📱 **PWA** — ຕິດຕັ້ງໄດ້ທຸກ Platform, ໃຊ້ Offline ໄດ້
- 🔍 **Zoom** — ຂະຫຍາຍ/ຫຍໍ້ Preview ໄດ້

---

## 🚀 Deploy ເທິງ GitHub Pages

### ວິທີທີ 1: GitHub Actions (ອັດຕະໂນມັດ)

```bash
# 1. ສ້າງ Repo ໃໝ່ ໃນ GitHub
# 2. Push ໄຟລ໌ທັງໝົດ

git init
git add .
git commit -m "🚀 Initial MathType PWA"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mathtype-pwa.git
git push -u origin main
```

3. ໄປທີ່ **Settings → Pages → Source** → ເລືອກ **GitHub Actions**
4. ລໍຖ້າ ~1 ນາທີ → ໄປທີ່ `https://YOUR_USERNAME.github.io/mathtype-pwa`

### ວິທີທີ 2: Manual Deploy

```bash
# ເປີດໃຊ້ Pages ຈາກ Branch main
# Settings → Pages → Deploy from branch → main → / (root)
```

---

## 📁 ໂຄງສ້າງ

```
mathtype-pwa/
├── index.html          # ໜ້າຫຼັກ
├── style.css           # ການອອກແບບ
├── app.js              # Logic ທັງໝົດ
├── sw.js               # Service Worker (Offline)
├── manifest.json       # PWA Manifest
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── .github/
    └── workflows/
        └── deploy.yml  # Auto Deploy
```

---

## 🛠 Tech Stack

| Technology | Version | ໜ້າທີ່ |
|-----------|---------|--------|
| **KaTeX** | 0.16.9 | Render LaTeX |
| **Vanilla JS** | ES2022 | Logic |
| **CSS Custom Properties** | — | Theming |
| **Service Worker** | — | Offline PWA |
| **Web App Manifest** | — | Install |

---

## 📖 ການໃຊ້ LaTeX

```latex
# ເສດຖາ
\frac{-b \pm \sqrt{b^2-4ac}}{2a}

# ຜົນລວມ
\sum_{i=1}^{n} x_i

# ອິນເຕກຣາ
\int_{a}^{b} f(x)\,dx

# Matrix
\begin{pmatrix} a & b \\ c & d \end{pmatrix}
```

---

## 📄 License

MIT License — ໃຊ້ໄດ້ຟຣີ
