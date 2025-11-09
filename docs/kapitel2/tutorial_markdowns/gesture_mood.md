---
# tutorial
title: Stimmungs-Anzeige mit Lagesensor
description: In diesem Tutorial lernst du, wie dein Calliope mini mit Hilfe des Lagesensors verschiedene Gesichter anzeigt – je nachdem, wie er gehalten wird.
tags: calliope, lagesensor, gesture, bewegung, led-matrix
---

# Stimmungs-Anzeige mit Lagesensor

```validation.global
{
  "BlocksExistValidator": {
    "enabled": true,
    "markers": ["validate-exists"]
  }
}
```

## Schritt 1: Reaktion auf Display nach unten
Erstelle eine **Ereignis-Reaktion**, die ausgeführt wird, wenn das Display nach unten zeigt.  
Ziehe dazu den Block `wenn Geste Display nach unten` aus der Kategorie **Eingabe** in das Arbeitsfeld.

```template
input.onGesture(Gesture.ScreenDown, function () {

})
```

```blocks
// @validate-exists
input.onGesture(Gesture.ScreenDown, function () {

})
```

---

## Schritt 2: Trauriges Gesicht bei Display nach unten
Wenn das Display nach unten zeigt, soll ein **trauriges Gesicht** erscheinen.  
Ziehe den Block `zeige Symbol` aus **Grundlagen** hinein und wähle das **traurige Gesicht** aus.

```blocks
// @validate-exists
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Sad)
})
```

---

## Schritt 3: Reaktion auf Display nach oben
Füge einen zweiten Block `wenn Geste` hinzu.  
Wähle diesmal **Display nach oben** aus dem Dropdown-Menü aus.

```blocks
// @validate-exists
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.ScreenUp, function () {

})
```

---

## Schritt 4: Fröhliches Gesicht bei Display nach oben
Wenn das Display nach oben zeigt, soll ein **fröhliches Gesicht** erscheinen.  
Füge den Block `zeige Symbol` hinzu und wähle das **fröhliche Gesicht** aus.

```blocks
// @validate-exists
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Happy)
})
```

---

## Schritt 5: Teste deinen Lagesensor
Probiere dein Programm aus!  
- Drehe den Calliope so, dass das **Display nach unten** zeigt: Es erscheint ein **trauriges Gesicht** 😢  
- Drehe den Calliope so, dass das **Display nach oben** zeigt: Es erscheint ein **fröhliches Gesicht** 😊

Gut gemacht! 🎉

Ergänze nun deine Erkenntnisse auf deinem Arbeitsblatt.  
Überlege dazu, welche **Eingaben** und **Ausgaben** du in deinem Programm kennengelernt hast.


---

## 🎯 Erweiterung 1: Reagiere auf Logo nach oben
**Aufgabe:** Füge eine weitere Geste hinzu: Wenn das Logo nach oben zeigt, soll ein Herz erscheinen.

**Hinweis:** Füge einen weiteren `wenn Geste`-Block hinzu und wähle **Logo nach oben** aus dem Dropdown-Menü.

---

## 🎯 Erweiterung 2: Schüttel-Überraschung
**Aufgabe:** Wenn der Calliope geschüttelt wird, soll ein überraschtes Gesicht erscheinen und gleichzeitig ein Ton abgespielt werden.

**Hinweis:** Nutze die Geste **geschüttelt** und kombiniere `zeige Symbol` mit `spiele Ton` aus der Kategorie **Musik**.
