---
# tutorial
title: Temperatur-Alarm mit dem Calliope mini
description: In diesem Tutorial lernst du, wie dein Calliope mini mit Hilfe des Temperatursensors einen Alarmton abspielt, wenn es zu warm wird.
tags: calliope, temperatursensor, temperature, alarm, sound
---

# Temperatur-Alarm mit dem Calliope mini

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

## Schritt 2: Wenn-Dann-Struktur einfügen
Füge in den `dauerhaft`-Block eine **Wenn ... dann**-Struktur aus der Kategorie **Logik** ein.

```blocks
// @validate-exists
basic.forever(function () {
    if (true) {

    }
})
```

---

## Schritt 3: Temperatur abfragen
Ziehe nun den Block `Temperatur (°C)` aus der Kategorie **Eingabe** in die Bedingung.  
Stelle den Vergleich auf **größer als 25** ein.

```blocks
// @validate-exists
basic.forever(function () {
    if (input.temperature() > 25) {

    }
})
```

---

## Schritt 4: Alarmton bei hoher Temperatur
Wenn es zu warm ist (also `temperature() > 25`), soll ein **Alarmton** erklingen.  
Ziehe den Block `spiele Ton` aus der Kategorie **Musik** in den **dann**-Bereich.  
Stelle die Tonhöhe auf **175 Hz** und die Länge auf **1 Schlag**.

```blocks
// @validate-exists
basic.forever(function () {
    if (input.temperature() > 25) {
        music.playTone(175, music.beat(BeatFraction.Whole))
    }
})
```

---

## Schritt 5: Teste deinen Temperatur-Alarm
Probiere dein Programm aus!  
- Halte den Calliope in deiner Hand oder hauche ihn an, um ihn zu erwärmen
- Sobald die Temperatur über **25°C** steigt, erklingt der **Alarmton** 🔊
- Lasse den Calliope abkühlen: Der Ton stoppt

**Tipp:** Du kannst die Grenztemperatur auch anpassen, z.B. auf 23°C oder 30°C!

Gut gemacht! 🎉

---

## Schritt 6: Ergänze dein Arbeitsblatt
Ergänze nun deine Erkenntnisse auf deinem Arbeitsblatt.  
Überlege dazu, welche **Eingaben** und **Ausgaben** du in deinem Programm kennengelernt hast.

---

## 🎯 Erweiterung 1: Visueller Alarm mit Symbol
**Aufgabe:** Wenn es zu warm ist, soll nicht nur ein Ton erklingen, sondern auch ein Feuer-Symbol auf der LED-Matrix erscheinen.

**Hinweis:** Füge im **dann**-Bereich zusätzlich den Block `zeige Symbol` hinzu und wähle das Feuer-Symbol.

---

## 🎯 Erweiterung 2: Kälte-Warnung
**Aufgabe:** Erweitere dein Programm: Bei niedriger Temperatur (unter 20°C) soll eine Schneeflocke erscheinen und ein anderer Ton abgespielt werden.

**Hinweis:** Nutze eine **Wenn ... dann ... sonst wenn ... sonst**-Struktur oder füge eine zweite `wenn`-Bedingung hinzu.
