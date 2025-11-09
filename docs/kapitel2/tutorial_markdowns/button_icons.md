---
# tutorial
title: Symbole mit Tasten anzeigen
description: In diesem Tutorial lernst du, wie du mit den Tasten A und B verschiedene Symbole auf der LED-Matrix anzeigen kannst.
tags: calliope, tasten, button, icons, led-matrix
---

# Symbole mit Tasten anzeigen

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

## Schritt 2: Taste A überprüfen
Füge in den `dauerhaft`-Block eine **Wenn ... dann**-Struktur aus der Kategorie **Logik** ein.  
Diese soll überprüfen, ob Taste A gedrückt wird. Ziehe dazu den Block `Knopf A gedrückt` aus der Kategorie **Eingabe** in die Bedingung.

```blocks
// @validate-exists
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {

    }
})
```

---

## Schritt 3: Herz-Symbol bei Taste A anzeigen
Wenn Taste A gedrückt wird, soll ein **Herz** erscheinen.  
Ziehe den Block `zeige Symbol` aus **Grundlagen** in den **dann**-Bereich und wähle das **Herz** aus.

```blocks
// @validate-exists
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Heart)
    }
})
```

---

## Schritt 4: Taste B überprüfen
Füge unter der ersten **Wenn ... dann**-Struktur eine zweite hinzu.  
Diese soll überprüfen, ob Taste B gedrückt wird.

```blocks
// @validate-exists
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Heart)
    }
    if (input.buttonIsPressed(Button.B)) {

    }
})
```

---

## Schritt 5: Smiley-Symbol bei Taste B anzeigen
Wenn Taste B gedrückt wird, soll ein **Smiley** erscheinen.  
Ziehe den Block `zeige Symbol` in den **dann**-Bereich und wähle den **lächelnden Smiley** aus.

```blocks
// @validate-exists
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Heart)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Happy)
    }
})
```

---

## Schritt 6: Teste deine Tasten-Steuerung
Probiere dein Programm aus!  
- Drücke **Taste A**: Es erscheint ein **Herz** ❤️  
- Drücke **Taste B**: Es erscheint ein **Smiley** 😊

Gut gemacht! 🎉

Ergänze nun deine Erkenntnisse auf deinem Arbeitsblatt.  
Überlege dazu, welche **Eingaben** und **Ausgaben** du in deinem Programm kennengelernt hast.

---

## 🎯 Erweiterung 1: Beide Tasten gleichzeitig
**Aufgabe:** Erweitere dein Programm so, dass beim gleichzeitigen Drücken beider Tasten (A+B) ein Blitz-Symbol erscheint.

**Hinweis:** Nutze die Bedingung `Knopf A+B gedrückt` aus der Kategorie **Eingabe**.

---

## 🎯 Erweiterung 2: Symbol automatisch löschen
**Aufgabe:** Nach dem Drücken einer Taste soll das Symbol 2 Sekunden angezeigt werden, danach soll der Bildschirm geleert werden.

**Hinweis:** Nutze die Blöcke `pausiere (ms)` und `Bildschirminhalt löschen` aus **Grundlagen**.
