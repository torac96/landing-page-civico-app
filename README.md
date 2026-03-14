# Civico App - Sito Web Statico

Sito web completo per l'app Civico App, pronto per il deployment su GitHub Pages.

## 📁 Struttura File

```
civico-website/
├── index.html          # Homepage con landing page
├── privacy.html        # Privacy Policy (GDPR compliant)
├── supporto.html       # Centro assistenza con FAQ
├── style.css           # Stylesheet completo
├── script.js           # JavaScript per interazioni
└── README.md           # Questo file
```

## 🚀 Come Pubblicare su GitHub Pages

### Metodo 1: Via Web (più semplice)

1. **Crea un nuovo repository su GitHub**
   - Vai su https://github.com/new
   - Nome: `civico-website` (o quello che preferisci)
   - Pubblico o privato (funziona in entrambi i casi)
   - Crea il repository

2. **Carica i file**
   - Clicca su "Add file" → "Upload files"
   - Trascina tutti i file (index.html, privacy.html, supporto.html, style.css, script.js)
   - Commit changes

3. **Abilita GitHub Pages**
   - Vai su Settings → Pages (nella barra laterale)
   - Source: "Deploy from a branch"
   - Branch: "main" (o "master")
   - Folder: "/ (root)"
   - Salva

4. **Ottieni l'URL**
   - Dopo qualche minuto, il tuo sito sarà live su:
   - `https://tuousername.github.io/civico-website`

### Metodo 2: Via Git (per sviluppatori)

```bash
# Crea repository locale
git init
git add .
git commit -m "Initial commit - Civico website"

# Collega a GitHub
git remote add origin https://github.com/tuousername/civico-website.git
git branch -M main
git push -u origin main

# Abilita Pages (via web come sopra, o via CLI)
```

## 🔗 URL da Usare in App Store Connect

Dopo il deployment, usa questi URL:

- **URL di marketing**: `https://tuousername.github.io/civico-website`
- **URL di assistenza**: `https://tuousername.github.io/civico-website/supporto.html`
- **Privacy Policy**: `https://tuousername.github.io/civico-website/privacy.html`

## 📝 Personalizzazione

### 1. Cambia l'email di supporto

Cerca e sostituisci in **tutti i file**:
- `support@civico-app.com` → `tuaemail@gmail.com`

### 2. Link App Store (quando disponibile)

In `index.html` e `supporto.html`, cerca:
```html
<a href="#" class="btn btn-primary">
```

Sostituisci `#` con:
```
https://apps.apple.com/app/idXXXXXXXXX
```

### 3. Aggiungi Google Analytics (opzionale)

Aggiungi prima di `</head>` in tutti i file HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎨 Design

Il sito usa:
- **Font**: DM Serif Display (titoli) + Work Sans (corpo)
- **Colori**: Palette istituzionale calda
  - Primario: #2F5D62 (verde-azzurro scuro)
  - Accent: #E8956C (arancione caldo)
- **Responsive**: Ottimizzato per desktop, tablet e mobile
- **Animazioni**: Scroll-triggered e hover states

## ✅ Checklist Pre-Pubblicazione

- [ ] Sostituisci `support@civico-app.com` con la tua email
- [ ] Verifica tutti i link interni funzionino
- [ ] Testa su mobile (Chrome DevTools)
- [ ] Aggiungi link App Store quando disponibile
- [ ] Verifica Privacy Policy sia accurata per la tua app
- [ ] Deploy su GitHub Pages
- [ ] Testa URL finale prima di inserirlo in App Store Connect

## 🔄 Aggiornamenti Futuri

Per aggiornare il sito:
1. Modifica i file localmente
2. Carica su GitHub (via web o git push)
3. Le modifiche saranno live in ~1-2 minuti

## 📧 Supporto

Per domande sul sito o deployment, contattami!

---

**Nota**: Questo sito è statico (HTML/CSS/JS puro), quindi:
- ✅ Veloce e leggero
- ✅ Gratuito (GitHub Pages)
- ✅ Facile da mantenere
- ✅ SEO-friendly
- ❌ Non include form di contatto dinamici (usa email)
- ❌ Non include backend/database
