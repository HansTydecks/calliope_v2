# 🚀 GitHub Pages Deployment Anleitung

## Repository
- **URL**: https://github.com/HansTydecks/calliope_v2
- **GitHub Pages URL**: https://hanstydecks.github.io/calliope_v2/

---

## ✅ Automatisches Deployment mit GitHub Actions (EMPFOHLEN)

Diese Methode ist bereits komplett eingerichtet und funktioniert automatisch!

### Schritt 1: GitHub Pages Einstellungen

1. Gehe zu deinem Repository: https://github.com/HansTydecks/calliope_v2
2. Klicke auf **Settings** (oben rechts)
3. Klicke in der linken Sidebar auf **Pages**
4. Unter **Source** wähle:
   - **Source**: `GitHub Actions`
   - ⚠️ NICHT "Deploy from a branch" wählen!

### Schritt 2: Code pushen

```powershell
# Alle Änderungen committen
git add .
git commit -m "Setup VitePress with GitHub Pages deployment"

# Zum Repository pushen
git push origin main
```

### Schritt 3: Automatisches Deployment läuft

- GitHub Actions startet automatisch nach dem Push
- Gehe zu **Actions** Tab in deinem Repository
- Beobachte den "Deploy VitePress site to GitHub Pages" Workflow
- Nach ca. 2-3 Minuten ist die Seite live! 🎉

### Deine Seite ist dann erreichbar unter:
**https://hanstydecks.github.io/calliope_v2/**

---

## 🔧 Alternative: Deploy from Branch (Manuelle Methode)

Falls du trotzdem "Deploy from Branch" nutzen möchtest:

### Schritt 1: gh-pages Branch erstellen und vorbereiten

```powershell
# Build erstellen
npm run build

# gh-pages Branch erstellen (falls noch nicht vorhanden)
git checkout -b gh-pages

# Alle Dateien außer dist löschen
git rm -rf .
git clean -fxd

# Nur die Build-Dateien behalten
Copy-Item -Path "docs/.vitepress/dist/*" -Destination "." -Recurse

# .nojekyll Datei erstellen (wichtig!)
New-Item -ItemType File -Name ".nojekyll"

# Committen und pushen
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Zurück zum main Branch
git checkout main
```

### Schritt 2: GitHub Pages Einstellungen

1. Gehe zu **Settings** → **Pages**
2. Unter **Source** wähle:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
3. Klicke auf **Save**

### Problem mit dieser Methode:
- ❌ Manueller Build vor jedem Update nötig
- ❌ Fehleranfällig
- ❌ Mehr Arbeit

**→ GitHub Actions ist deutlich einfacher!**

---

## 📝 Wichtige Hinweise

### Base Path
Die Seite ist konfiguriert für: `/calliope_v2/`
- Dies entspricht deinem Repository-Namen
- Alle Links funktionieren automatisch richtig

### Workflow-Datei
- Liegt in: `.github/workflows/deploy.yml`
- Triggert bei jedem Push zum `main` Branch
- Kann auch manuell im Actions Tab ausgeführt werden

### CNAME (Custom Domain)
Falls du später eine eigene Domain nutzen möchtest:
1. Füge die Domain in GitHub Pages Settings ein
2. Ändere in `docs/.vitepress/config.ts`:
   ```typescript
   base: '/',  // statt '/calliope_v2/'
   ```

---

## 🎯 Nächste Schritte

1. ✅ **Jetzt einfach pushen!**
   ```powershell
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. ✅ **In GitHub Settings Pages Source auf "GitHub Actions" setzen**

3. ✅ **Warten bis Workflow durchgelaufen ist (~2-3 Minuten)**

4. ✅ **Seite öffnen**: https://hanstydecks.github.io/calliope_v2/

---

## 🔍 Troubleshooting

### Seite zeigt 404
- Überprüfe ob der Workflow erfolgreich war (Actions Tab)
- Überprüfe Pages Settings (muss "GitHub Actions" sein)
- Warte ein paar Minuten nach dem ersten Deployment

### Styles laden nicht
- Überprüfe ob `base: '/calliope_v2/'` korrekt in config.ts steht
- Überprüfe ob `.nojekyll` im public Ordner liegt

### Workflow schlägt fehl
- Überprüfe ob `package.json` im Repository ist
- Überprüfe Workflow-Logs im Actions Tab
- Stelle sicher dass der `main` Branch existiert

---

## ✨ Fertig!

Nach dem Setup musst du nur noch:
1. Code ändern
2. `git push`
3. Fertig! GitHub Actions deployed automatisch! 🚀
