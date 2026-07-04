# CPU — 4-Wertigkeiten-Modul

Die CPU ist ein technisches Modul, das vier Kern-Wertigkeiten erzeugt und weiterreicht.
Diese vier Werte bilden die Grundlage für Last, Takt, Energie und Zustand.

## Wertigkeiten

Die CPU liefert pro Zyklus vier neutrale Systemwerte:

1. **LOAD** – Last / Auslastung  
2. **CYCLE** – Takt / Schritt  
3. **ENERGY** – Energie / Wärme  
4. **STATE** – Zustand / Stabilität  

Alle vier Werte werden synchron erzeugt, aber jeder besitzt seinen eigenen Verlauf.

## Funktionen

Die CPU führt folgende Aufgaben aus:

- **LOAD-Control** – misst Auslastung  
- **CYCLE-Control** – erzeugt Takte  
- **ENERGY-Control** – berechnet Energie  
- **STATE-Control** – bewertet Stabilität  

Jede Funktion arbeitet unabhängig, aber alle vier Werte werden gemeinsam weitergereicht.

## Ressourcen

Die CPU nutzt geschätzte Systemwerte:

- **CPU-Kerne:** 4  
- **CPU-Speed:** 3.2 GHz  
- **CACHE:** 6 MB  
- **STEP_A:** Kern-Schritt  
- **STEP_B:** Last-Schritt  

## Systemwerte

Die CPU übernimmt globale Werte:

- **GATE:** GATE_44  
- **EICH:** EICH_07  
- **KETTE:** KETTE_12  
- **CLUSTER:** 12~12(1)  

## Modi

Die CPU unterstützt zwei Betriebsmodi:

- **4all** – Vierfach-Takt  
- **16all** – Sechzehnfach-Takt  

Beide Modi steuern die Geschwindigkeit der Wert-Erzeugung.

## Dateien

### index.html

Die Oberfläche besteht aus vier Anzeige-Elementen:

- jeder Wert = eigenes Feld  
- alle Felder aktualisieren synchron  
- CPU liefert alle Werte pro Zyklus

### cpu.js

cpu.js steuert:

- Wert-Erzeugung  
- Takte  
- Last  
- Energie  
- Modi (4all/16all)  
- Systemwerte  

## Module

Jedes Modul berechnet seinen eigenen Wert:

- **load.js** – Auslastung  
- **cycle.js** – Takt  
- **energy.js** – Energie  
- **state.js** – Zustand

## Integration

Die CPU kann später erweitert werden durch:

- **Afterburner** – Hochgeschwindigkeits-Taktverstärker  
- **CORE-Link** – Verbindung zu globalen Systemwerten  
- **GPU-Sync** – Synchronisierung mit Quadranten  

