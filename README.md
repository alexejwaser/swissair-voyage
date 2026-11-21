# Voyage by swissair · Web-Prototyp

Öffne `index.html` per Doppelklick im Browser. Kein Server, kein Build nötig.
Fiktives, unabhängiges Schulkonzept (M280 LB2), nicht mit der historischen Swissair oder SWISS verbunden.
Alle Seiten tragen `<meta name="robots" content="noindex, nofollow">`, damit der Prototyp nach dem Hosten nicht in Suchmaschinen auftaucht.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite: Titelgeschichte «Lissabon, von oben.», Nächste Folgen (Kopenhagen, Island, leicht reisen, alle «erscheint bald»), #meinFensterplatz mit Beispielbildern, Mit der Crew |
| `stories/lissabon-von-oben.html` | Rubrik Fensterplatz, Text Fabio Alverde. Anflug, Weg in die Stadt, erster Abend, Tipp für Erstreisende, **Was nervt**, Box «Fensterplatz-Fakten». Am Ende: #meinFensterplatz, Weiterlesen, Newsletter (Demo), ein Satz zum Direktflug, Quellen |
| `stories/22-stunden-lissabon.html` | Mit der Crew. Geschichte der Flugbegleiterin Nora (fiktive Figur, gekennzeichnet), verlinkt zurück auf den Lissabon-Artikel |

Texte stammen wörtlich aus `Texte/Copydeck_Lissabon.md` (Kapitel 1 und 2), ohne Klammer-Notizen und [prüfen]-Marker.

## Funnel einer Folge

Plakat A2 quer («Schau aus dem Fenster. Nicht aus der Wäsche.», QR-Code) → Instagram-Karussell (Schlusszitat) → Artikel «Lissabon, von oben.» → Crew-Artikel, Newsletter, #meinFensterplatz, leiser Direktflug-Hinweis.

## Ziel des Plakat-QR-Codes

`stories/lissabon-von-oben.html#anflug`

Der Abschnitt «Der Anflug» hat die ID `anflug`. Dort steht der Satz, der die Pointe des Plakat-Slogans auflöst: «Kurz vor der Landung fliegst du so tief über Lissabon, dass du die Wäsche auf den Balkonen zählen kannst.» Er ist hervorgehoben mit dem Label «Die Wäsche vom Plakat» und blinkt beim Ankommen über den Anker kurz auf. Für die Zählung kann ein Parameter davor stehen, z. B. `…/lissabon-von-oben.html?utm_source=plakat#anflug`.

Das Plakat (Querformat A2, drei Fenster: New York, Lissabon, Alpen) nennt den Artikel nur in einer kleinen Zeile beim QR-Code: «Diesmal: Lissabon, von oben.» Das frühere Hochformat-Plakat mit dem Zitat ist verworfen.

QR-Code und Plakat-Link funktionieren erst, wenn der Prototyp gehostet ist. Eine lokale Datei (`file://`) kann ein Handy nicht öffnen.

## Dateien

- CSS: `styles.css` → `editorial-refresh.css` → `minimal-update.css` → `layout-finish.css` → `voyage-content.css` (neu, zuletzt geladen: Papierfarbe, Tannengrün statt roter Kacheln, Plakat-Satz, Was nervt, Faktenbox, Artikelende).
- `script.js`: Menü und Newsletter-Demo (sendet nichts, zeigt nur einen Bestätigungstext).
- `assets/*-fenster.png`: verkleinerte Kopien der Fensterplatz-Illustrationen aus `Assets/05_Bilder` (Quelle in der Abgabe deklarieren).
- `_archiv/`: Bilder des entfernten A350-Artikels (Flugzeug und Kabinen). Nicht mehr verlinkt, nur aufbewahrt.
