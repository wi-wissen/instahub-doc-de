# Modellierung und SQL

Der hier vorgestellte Ansatz ist eine Abwandlung meines Vorgehens bei der friendzone. Dieser Ansatz wurde bereits mit über 150 Schülern durchgeführt. 

Überblick über die einzelnen Themen:

| Thema                                       | Kurzbeschreibung                     | Dauer  |
| ------------------------------------------- | ------------------------------------ | ------ |
| Client-Server-Architektur                   | Wdh. Netzwerke                       | 1/2 UE |
| Erster Arbeitstag                           | Motivation und Account einrichten    | 1/2 UE |
| Datenbanken allgemein                       | Grundlagen                           | 0-4 UE |
| Auswerten von Daten I                       | SQL innerhalb einer Tabelle          | 4 UE   |
| Verändern von Daten                         | CRUD-Befehle innerhalb einer Tabelle | 2 UE   |
| Datenschutz und -sicherheit                 | Gesellschaftliche Aspekte von DBs    | 2 UE   |
| Photos und Tags im InstaHub                 | 1:n-Kardinalitäten                   | 2 UE   |
| Followers, Likes und Kommentare im Instahub | n:m-Kardinalitäten                   | 1 UE   |
| Modellieren von Daten                       | Modelle mit klaren Anforderungen     | 2-4 UE |
| Auswerten von Daten II                      | tabellenübergreifende SQL-Befehle    | 2 UE   |
| Die Macht verknüpfter Daten                 | tabellenübergreifende CRUD-Befehle   | 2 UE   |
| Komplexaufgaben                             | Modelle mit offenen Anforderungen    | 2-4 UE |

Die Zeitangaben sind sehr stark abhängig vom Vorwissen und von der Auffassungsgabe der SchülerInnen. Bitte betrachten Sie die Zeitangaben daher bitte nur als grobe Richtwerte.



## Client-Server-Architektur

In dieser Phase wird das Ausgangsniveau gesichert und Neugierde auf die technische Realisierung von sozialen Netzwerken geweckt.

Anhand der Fragestellung, wie eine Webseite in meinem Browser gelangt, werden wichtige Inhalte aus dem Themenbereich Netzwerke wiederholt.

Anschließend wird zu einer Schätzaufgabe moderiert, wie "groß" denn der Rechner sein müsste, auf dem Facebook läuft. Die Auflösung findet durch ein [YouTube-Video](https://youtu.be/_r97qdyQtIk?t=2m14s) statt, in dem ein Rechenzentrum von Facebook gezeigt wird. Das Staunen kann durch das Ergänzen von Fakten, dem Thematisieren von neuen Rechenzentrumsbestandteilen wie Notstromgeneratoren und in meinem Fall eigenen Erfahrungen aus der Wirtschaft gesteigert werden.

## Erster Arbeitstag

Erläutern Sie allen Schülern, dass sie jetzt Datenbankadministratoren in einem Startup sind. Sie sind ein Dreierteam bestehend aus einem Schüler, Eva der Programmiererin (Anspielung auf das EVA-Prinzip) und der Chefin Lara (Der Name ist eine Anspielung auf das PHP-Framework Laravel).

Beschreiben Sie das Ziel, ein soziales Netzwerk zu gründen und zeigen Sie Beispiele aus der bereits fertigen Webseite. Legen Sie den Account mit den Schülern an und stellen Sie fest, dass im Moment nur Benutzerprofile da sind, aber sich noch keine Fotos hochladen lassen. 

## Datenbanken allgemein

Hier wird theoretisch erläutert, was Datenbanken sind. Je nach Lehrplan sollte zwischen hierarchischen und relationalen Datenbanken unterschieden und wichtige Begriffe für eine saubere Fachsprache eingeführt werden.

## Auswerten von Daten I

Die Stärken des SQL-Select-Befehls werden hier durch das Gegenüberstellen der Suche in der Weboberfläche und in der Datenbank sehr deutlich.

## Verändern von Daten

Eva ist sehr traurig, dass durch einen Programmierfehler einige Daten in ihrer Datenbank fehlen oder geändert werden müssen. Die Schüler helfen aus und verändern Daten mit Insert-, Update- und Delete-Befehlen.

Schüler erhalten hier einen Einblick in die Mächtigkeit des Update-Befehles, wenn die Körpergrößen aller Mitglieder mit individuell zufällig gewählten Werten neu gesetzt werden. 

## Datenschutz und -sicherheit

Spätestens hier sollten die ersten Schüler laut gedacht haben und Ihre Sorgen oder Bewunderung über die Möglichkeiten zum Ausdruck gebracht haben. Wenn nicht, sollte es jetzt durch Sie angesprochen werden.

## Photos und Tags im InstaHub – 1:n-Kardinalitäten

Lara möchte nun endlich loslegen, sie möchte das Hochladen von Fotos ermöglichen. An der Tafel kann hier intuitiv gezeigt werden, dass sich dies nicht mehr in einer Tabelle darstellen lässt. Die Ergänzung um Normalformen und das klar strukturierte Normalisieren lässt sich später nachholen. Erfahrungsgemäß hilft Schülern die Hinführung an der Tafel sehr beim Verständnis.

Zur Übung werden Fotos noch mit Tags angereichert. Dies war auch schon vorher in der Weboberfläche möglich. Dazu wurde auf einen LIKE-Befehl zurückgeführt. Hiermit lässt sich schon die 1. Normalform (nur atomare Werte) gut aufzeigen.

## Followers, Likes und Kommentare im Instahub – n:m-Kardinalitäten

n:m-Kardinalitäten werden in lernschwachen Klassen durch Lehrervortrag eingeführt. In lernstarken Gruppen kann die Notwendigkeit der Hilfstabelle teilweise selbst herausgearbeitet werden.

So lassen sich n:m-Kardinalitäten mit Hilfe von Followern (User-User) oder Likes (User-Photo) erläutern bzw. üben.

## Modellieren von Daten

Zur besseren Übersicht und als Vorbereitung auf Komplexaufgaben wird das fertige Datenbankmodell als Entity Relationship Modell abgebildet.

Anschließend sollen Datenbankmodelle selbst entworfen werden. Unabhängig vom eigenen InstaHub werden phantasievolle Aufgaben wie „Das Stahlwerk der Postapokalypse“ oder „Der Bibliothekar“ gestellt.

## Auswerten von Daten II

Es wird brisant: Die Polizei bittet um Mithilfe: Einzelne Photos wurden mit Adolf Hitler "Zitaten" verunstaltet! 

Außer dem Namen Hitler sind selbstverständlich keine Zitate oder ähnliche Gedankengänge in den Blogeinträgen, es sind vielmehr falsch zugeordnete Zitate berühmter und anerkannter Persönlichkeiten aus den letzten Jahrhunderten.

## Die Macht verknüpfter Daten

Die Macht verknüpfter Daten kann durch die bisherigen Fallbeispiele diskutiert werden. Je nach Planung können schon hier weiterführende Betrachtungen durchgeführt werden. Bisher nur an anderer Stelle wurde dazu eine Visualisierung der Bewegungsdaten von mit Malte Spitz als äußerst deutliche Visualisierung eingesetzt. Diese gibt es von der [Wissensfabrik Deutschland](https://portal.wissensfabrik.de/portal/fep/de/dt.jsp?setCursor=1_554644_567437) mit Processing oder von mir vollständig Online mit sehr einfacher Bedienung auf [apps.informatik.cc/tracking/](https://apps.informatik.cc/tracking/). Hier können auch Google-Smartphone-Daten ausgewertet werden (In nur einem Monat sind zehnmal mehr Daten als bei Malte Spitz in sechs Monaten angefallen.). 

## Komplexaufgaben

Hier sollen Schüler auf Papier eine eigene Datenbank ohne spezifische Vorgaben, wie bei Modellierung, selbst entwerfen.