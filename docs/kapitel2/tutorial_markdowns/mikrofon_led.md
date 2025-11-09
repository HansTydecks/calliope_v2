---
# tutorial
title: Lautstärke-Ampel mit dem Calliope mini
description: In diesem Tutorial lernst du, wie dein Calliope mini mit Hilfe des Mikrofons eine LED rot oder grün leuchten lässt – je nachdem, wie laut es ist.
tags: calliope, lautstärke, mikrofon, led, if
---

# Lautstärke-Ampel mit dem Calliope mini

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

## Schritt 2: Lautstärke abfragen
Füge in den `dauerhaft`-Block eine **Wenn ... dann ... sonst ...**-Struktur aus der Kategorie **Logik** ein.  
Diese soll überprüfen, ob der Schallpegel größer als 50 ist.

```blocks
// @validate-exists
basic.forever(function () {
    if (input.soundLevel() > 50) {

    } else {

    }
})
```

---

## Schritt 3: LED rot schalten, wenn laut
Wenn es laut ist (also `soundLevel() > 50`), soll der Calliope **rot leuchten**.  
Ziehe den Block `setze LED-Farbe auf` in den **dann**-Bereich und wähle **rot** aus.

```blocks
// @validate-exists
basic.forever(function () {
    if (input.soundLevel() > 50) {
        basic.setLedColor(0xff0000)
    } else {

    }
})
```

---

## Schritt 4: LED grün schalten, wenn leise
Füge im **sonst**-Bereich den gleichen Block hinzu, aber stelle die Farbe auf **grün**.

```blocks
// @validate-exists
basic.forever(function () {
    if (input.soundLevel() > 50) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x00ff00)
    }
})
```

---

## Schritt 5: Teste deine Lautstärke-Ampel
Probiere dein Programm aus!  
- Klatsche oder sprich laut in das Mikrofon: Die LED sollte **rot** leuchten.  
- Sei ganz still: Die LED sollte **grün** bleiben.

Gut gemacht! 🎉

---

## Schritt 6: Ergänze dein Arbeitsblatt
Ergänze nun deine Erkenntnisse auf deinem Arbeitsblatt.  
Überlege dazu, welche **Eingaben** und **Ausgaben** du in deinem Programm kennengelernt hast.

---

## 🎯 Erweiterung 1: Drei Lautstärkestufen mit Gelb
**Aufgabe:** Füge einen mittleren Lautstärkebereich hinzu (zwischen 30 und 70). Bei mittlerer Lautstärke soll die LED gelb/orange leuchten.

**Hinweis:** Nutze eine verschachtelte **Wenn ... dann ... sonst**-Struktur. Die Farbe Gelb hat den Hex-Code `0xffff00`, Orange ist `0xff8800`.

---

## 🎯 Erweiterung 2: Warnsymbol bei extremer Lautstärke
**Aufgabe:** Bei sehr hoher Lautstärke (über 120) soll zusätzlich zur roten LED ein Warnsymbol (Ausrufezeichen) auf der LED-Matrix erscheinen.

**Hinweis:** Füge eine weitere Bedingung hinzu, die prüft ob `soundLevel() > 120` und nutze `zeige Symbol` mit dem Ausrufezeichen.
