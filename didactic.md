# Didaktik

Der hier vorgestellte Ansatz ist eine Abwandlung meines Vorgehens bei der friendzone. Dieser Ansatz wurde bereits mit über 140 Schülern durchgeführt. 

## Client-Server-Architektur

In dieser Phase wird das Ausgangniveau gesichert und Neugierde auf die technische Realisierung von sozialen Netzwerken geweckt.

Anhand der Fragestellung, wie eine Webseite in meinem Browser gelangt, werden wichtige Inhalte aus dem Themenbereich Netzwerkewiederholt.

Anschließend wird zu einer Schätzaufgabe moderiert, wie groß denn der Rechner sein müsste, worauf Facebook läuft. Die Auflösung findet durch ein [YouTube-Video](https://youtu.be/7d2JyaW9X34) statt, worin ein Rechenzentrum von Facebook gezeigt wird.Das Staunen kann durch das ergänzen von Fakten, dem Thematisieren von neuen Rechenzentrumsbestandteilen wie Notstromgeneratoren und in meinem Fall eigenen Erfahrungen aus der Wirtschaft gesteigert werden.

## Erster Arbeitstag

Erläutern Sie allen Schülern, dass sie jetzt Datenbankadministratoren in einem Startup sind. Sie sind ein Dreierteam bestehend aus einem Schüler, Eva der Programmiererin (Anspielung auf das EVA-Prinzip) und der Chefin Lara (Der Name ist eine Anspielung auf das PHP-Framework Laravel).

Beschreiben Sie das Ziel, ein soziales Netzwerk zu gründen und zeigen Sie Beispiele aus der bereits fertigen Webseite. Legen Sie den Account mit den Schülern an und stellen Sie fest, dass im Moment nur Benutzerprofile da sind, aber sich noch keine Photos hochladen lassen. 

## Datenbanken allgemein

Hier wird theoretisch erläutert, was Datenbanken sind. Jenach Lehrplan sollte zwischen hierarchischen und relationalen Datenbankenunterschieden und wichtige Begriffe für eine saubere Fachsprache eingeführtwerden.

## Auswerten von Daten I

Die Stärken des SQL-Select-Befehls werden hier durch das Gegenüberstellen der Suche in der Weboberfläche und in der Datenbank sehr deutlich.

## Verändern von Daten

Eva ist sehr traurig, dass durch einen Programmierfehlereinige Daten in Ihrer Datenbank fehlen oder geändert werden müssen. Die Schülerhelfen aus und verändern Daten mit Insert-, Update- und Delete-Befehlen.

Schüler erhalten hier einen Einblick in die Mächtigkeit des Update-Befehles, wenn die Körpergrößen aller Mitglieder mit individuellzufällig gewählten Werten neu gesetzt werden. 

## Datenschutz und -sicherheit

Spätestens hier sollten die ersten Schüler laut gedachthaben und Ihre Sorgen oder Bewunderung über die Möglichkeiten zum Ausdruck gebrachthaben. Wenn nicht, sollte es jetzt durch Sie angesprochen werden.

## Photos im InstaHub – 1:n-Kardinalitäten

Lara möchte nun endlich loslegen möchte das Hochladen von Photos ermöglichen. An der Tafel kann hier intuitiv gezeigt werden, dass sich dies nicht mehr in einer Tabelle darstellen lässt. Die Ergänzung um Normalformen und das klar strukturierte Normalisieren lässt sich später nachholen. Erfahrungsgemäß hilft Schülern die Hinführung an der Tafel sehr beim Verständnis.

Zur Übung werden Photos noch mit Tags angereichert. Diese waren auch schon vorher in der Weboberfläche möglich. Dazu wurde auf einen LIKE-Befehl zurückgeführt. Hiermit lässt sich schon die 1. Normalform (nur atomare Werte) gut aufzeigen.

## Followers im Instahub – n:m-Kardinalitäten

n:m-Kardinalitäten werden in lernschwachen Klassen durch Lehrervortrag eingeführt. In lernstarken Gruppen kann die Notwendigkeit derHilfstabelle teilweise selbst herausgearbeitet werden.

So lassen sich n:m-Kardinalitäten mithilfe von Followern (User-User) oder Likes (User-Photo) erläutern bzw. üben.

## Modellieren von Daten

Zur besseren Übersicht und als Vorbereitung auf Komplexaufgaben wird das fertige Datenbankmodell als Entity Relationship Modellabgebildet.

Anschließend sollen Datenbankmodelle selbst entworfen werden. Unabhängig vom eigenen InstaHub werden phantasievolle Aufgaben wie „Das Stahlwerk der Postapokalypse“ oder „Der Bibliothekar“ gestellt.

## Auswerten von Daten II

Es wird brisant: Die Polizei bittet um Mithilfe: Einzelne Photos wurden mit Adolf Hitler "Zitaten" verunstaltet! 

Außer dem Namen Hitler sind selbstverständlich keine Zitate oder ähnliche Gedankengänge in den Blogeinträgen, es sind vielmehr falschzugeordnete Zitate berühmter und anerkannter Persönlichkeiten aus den letzten Jahrhunderten.

## Die Macht verknüpfter Daten

Die Macht verknüpfter Daten kann durch die bisherigenFallbeispiele diskutiert werden. Je nach Planung können schon hierweiterführende Betrachtungen durchgeführt werden. Bisher nur an anderer Stellewurde dazu eine Visualisierung der Bewegungsdaten von mit Malte Spitz von der [Wissensfabrik Deutschland](https://www.wissensfabrik-deutschland.de/portal/fep/de/dt.jsp?setCursor=1_554644) (von mir [fehlerbereinigte Version](https://blog.wi-wissen.de/post/mobilfunk-und-big-data)) als äußerst deutliche Visualisierung eingesetzt.

## Komplexaufgaben

Hier sollen Schüler eine eigene Datenbank ohne spezifische Vorgaben wie bei Modellierung selbst entwerfen.