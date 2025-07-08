# Schnittstellen

::: warning
Diese Funktion ist aus Sicherheitsgründen und Ressourcenmangel auf dem offiziellen [InstaHub.org](https://instahub.org/)-Server deaktiviert.
:::

Um InstaHub zu benutzen sind keine weiteren Werkzeuge notwendig. Alle Aufgaben lassen sich direkt im Browser mithilfe der Sprache SQL bearbeiten. 

Nun kann es sein, dass SQL nicht Bestandteil des Lehrplans ist oder die Zeit zum Erlernen nicht ausreicht. Hier gibt es zwei Möglichkeiten:

InstaHub ausschließlich über die "reguläre" Administratoroberfläche nutzen. Hier können neben den normalen Aktionen des Nutzers auch fremde Eintrage gelöscht und fremde Nutzerprofile bearbeitet werden. 

InstaHub mithilfe eines externen Werkzeugs wie etwa [Microsoft Access](https://de.wikipedia.org/wiki/Microsoft_Access), [LibreOffice Base](https://de.libreoffice.org/discover/base/) oder [phpMyAdmin](https://de.wikipedia.org/wiki/PhpMyAdmin) verwenden. Alle genannten Werkzeuge können sich mit entfernten Datenbanken verbinden. Damit eine Verbindung möglich ist, muss der InstaHub-Server entsprechend konfiguriert sein:


In der `.env` Konfiguration muss *vor* dem Anlagen der Nutzer `ALLOW_PUBLIC_DB_ACCESS=true` gesetzt werden.  Nun können in der Database-Seite die Verbindungsdaten zum Server ausgelesen werden:

![database-connection](img/database-connection.png)