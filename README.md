# Calliope v2 Dokumentation

VitePress-basierte Dokumentationsseite für Calliope v2.

**🌐 Live-Seite**: https://hanstydecks.github.io/calliope_v2/

**📦 Repository**: https://github.com/HansTydecks/calliope_v2

## Voraussetzungen

- Node.js (Version 18 oder höher)
- npm

## Installation

```powershell
npm install
```

## Entwicklung

Lokalen Entwicklungsserver starten:

```powershell
npm run dev
```

Die Seite ist dann unter `http://localhost:5173` verfügbar.

## Build

Produktions-Build erstellen:

```powershell
npm run build
```

Die Build-Ausgabe befindet sich in `docs/.vitepress/dist/`.

## Vorschau

Build-Version lokal testen:

```powershell
npm run preview
```

## Deployment auf GitHub Pages

**✅ Automatisches Deployment ist eingerichtet!**

Die Seite wird automatisch deployed wenn du zum `main` Branch pushst.

### Quick Start Deployment:

```powershell
# 1. Alle Änderungen committen
git add .
git commit -m "Update documentation"

# 2. Pushen - Deployment startet automatisch!
git push origin main
```

### Erstmaliges Setup (nur einmal nötig):

1. Gehe zu **Repository Settings** → **Pages**
2. Setze **Source** auf: `GitHub Actions`
3. Pushe deinen Code
4. Nach 2-3 Minuten ist die Seite live! 🎉

**📖 Detaillierte Anleitung**: Siehe [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## GitHub Pages Konfiguration

---

## GitHub Pages Konfiguration

### Automatisch (bereits eingerichtet):

## Projektstruktur

```
docs/
  ├── index.md              # Startseite
  ├── kapitel1/             # Kapitel 1
  ├── kapitel2/             # Kapitel 2
  ├── kapitel3/             # Kapitel 3
  ├── kapitel4/             # Kapitel 4
  └── .vitepress/
      ├── config.ts         # VitePress Konfiguration
      └── theme/            # Custom Theme
```

## Custom Domain

Falls du eine Custom Domain nutzt (siehe `docs/CNAME`), stelle sicher dass:
- Die DNS-Einträge korrekt konfiguriert sind
- Die Domain in den GitHub Pages Settings eingetragen ist
