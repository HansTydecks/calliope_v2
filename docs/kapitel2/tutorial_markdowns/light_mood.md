---
# tutorial
title: Lichtsensor-Stimmung mit dem Calliope mini
description: In diesem Tutorial lernst du, wie dein Calliope mini mit Hilfe des Lichtsensors verschiedene Gesichter anzeigt – je nachdem, wie hell es ist.
tags: calliope, lichtsensor, light, icons, led-matrix
---

# Lichtsensor-Stimmung mit dem Calliope mini

```validation.global
{
  "BlocksExistValidator": {
    "enabled": true,
    "markers": ["validate-exists"]
  }
}
```

## Schritt 1: Dauerhafte Überprüfung
Erstelle einen **dauerhaften Ablauf**, der immer wieder ausgeführt wird.  
Ziehe dazu den Block `dauerhaft` aus der Kategorie **Grundlagen** in das Arbeitsfeld.

```template
basic.forever(function () {

})
```

```blocks
// @validate-exists
basic.forever(function () {

})
```

---

## Schritt 2: Lichtstärke abfragen
Füge in den `dauerhaft`-Block eine **Wenn ... dann ... sonst ...**-Struktur aus der Kategorie **Logik** ein.  
Diese soll überprüfen, ob die Lichtstärke kleiner als 50 ist.

```blocks
// @validate-exists
basic.forever(function () {
    if (input.lightLevel() < 50) {

    } else {

    }
})
```

---

## Schritt 3: Trauriges Gesicht bei wenig Licht
Wenn es dunkel ist (also `lightLevel() < 50`), soll ein **trauriges Gesicht** erscheinen.  
Ziehe den Block `zeige Symbol` in den **dann**-Bereich und wähle das **traurige Gesicht** aus.

```blocks
// @validate-exists
basic.forever(function () {
    if (input.lightLevel() < 50) {
        basic.showIcon(IconNames.Sad)
    } else {

    }
})
```

---

## Schritt 4: Fröhliches Gesicht bei viel Licht
Füge im **sonst**-Bereich den gleichen Block hinzu, aber wähle diesmal das **fröhliche Gesicht** aus.

```blocks
// @validate-exists
basic.forever(function () {
    if (input.lightLevel() < 50) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
```

---

## Schritt 5: Teste deinen Lichtsensor
Probiere dein Programm aus!  
- Halte deine Hand über den Calliope (dunkel): Es erscheint ein **trauriges Gesicht** 😢  
- Lasse Licht auf den Calliope scheinen (hell): Es erscheint ein **fröhliches Gesicht** 😊

Gut gemacht! 🎉

---

## Schritt 6: Ergänze dein Arbeitsblatt
Ergänze nun deine Erkenntnisse auf deinem Arbeitsblatt.  
Überlege dazu, welche **Eingaben** und **Ausgaben** du in deinem Programm kennengelernt hast.

---

## 🎯 Erweiterung 1: Drei Helligkeitsstufen
**Aufgabe:** Füge einen mittleren Helligkeitsbereich hinzu (Werte zwischen 20 und 50). Bei mittlerer Helligkeit soll ein neutrales Gesicht erscheinen.

**Hinweis:** Nutze eine verschachtelte **Wenn ... dann ... sonst**-Struktur oder prüfe zwei Bedingungen.

---

## 🎯 Erweiterung 2: Lichtstärke als Zahl anzeigen
**Aufgabe:** Zeige zusätzlich zum Gesicht die aktuelle Lichtstärke als Zahl auf der LED-Matrix an.

**Hinweis:** Nutze den Block `zeige Zahl` und kombiniere ihn mit `Lichtstärke`.
