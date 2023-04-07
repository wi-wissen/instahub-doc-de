# Bedienung

## instahub.org

Die Hauptseite des Projektes ermöglicht es sich als interessierter Besucher zu informieren. Bei Interesse können hier:

* Ein Lehreraccount erstellt werden (Registrieren)
* Sich mit einem Lehreraccount angemeldet werden (Anmelden)
* Ein InstaHub erstellt werden (Erstelle deinen InstaHub)

Um sich als Lehrer zu registrieren, muss ein Account angelegt werden. Dabei ist es wichtig, dass die Emailadresse stimmt, da sonst kein Account geprüft und angelegt werden kann. 

Um einen Lehreraccount zu aktivieren, kannst du entweder gleich deine Schulmailadresse verwenden oder du [sendest](https://wi-wissen.de/contact.php) mir einen anderen geeigneten Nachweis mit Angabe deines Benutzernamen. Das ist wichtig, dass nur volljährige Lehrer Schüler administrieren können und auf die Einhaltung der Regelungen achten.

Ein InstaHub kann nur angelegt werden, wenn dieser einem Lehrer zugeordnet wird. So ist sichergestellt, dass zum einen unter fachkundiger Anleitung ein Lernerfolg erzielt werden kann. 

Wurde einer Lehrkraft ein InstaHub zugeordnet, so muss dieser ebenfalls erst aktiviert werden. Dies kann durch die Lehrkraft selbst durchgeführt werden.

<div class="player-schule" style="max-width: 1280px; margin: 0 auto;">
  <iframe
  src="https://player.schule/youtube/llkjwhUdbtw?embed=1"
  style="width:100%; aspect-ratio: 1280/720"
  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen allowTransparency
  ></iframe>
</div>

<figcaption>Video aus Online-Workshop bei <a href="https://youtu.be/llkjwhUdbtw">YouTube</a> ansehen </figcaption>

### Verwaltung der Instahubs

![hubs](img/hubs.png)

Nach dem erfolgreichen Login mit einem Lehrer Account wird eine List mit allen zugeordneten Hubs angezeigt. Folgende Aktionen sind möglich:

* **Aktivieren** – Erst hierdurch wird der Instahub aktiviert.
* **DB Admin** – siehe Verwaltung eines InstaHub
* **Login as DBA** – Hierdurch wird der Lehrer auf den ausgewählten InstaHubweitergeleitet und loggt sich automatisch - ohne Kenntnisse desBenutzerkennwortes - als der erste DBA-Benutzer ein. Dies ist in der Regel der Schüler Account.
* **Fill all Tables** - Um alle Funktionalitäten des Hubs zu aktivieren können hierüber alle Tabellen angelegt und mit Dummy-Daten gefüllt werden. Je nach [didaktischen Vorgehen]() kann dies sinnvoll sein.
* **Maintenance** – Ist dieser Modus aktiviert kann nur noch lesend auf die Datenbank zugegriffen werden. Ausnahme davon ist die `Analytics`-Tabelle, welche weiterhin neue Einträge hinzufügt. Der ausschließliche Lesezugriff greift sofort wird im Hub aber erst angezeigt, wenn man sich abmeldet.
* **Deaktivieren** – Hier kann ein InstaHub deaktiviert werden. Es ist dann kein Login mehr möglich.
* **Delete** – Hier kann der InstaHub mitsamt der gesamten Datenbank nachBeendigung der Lerneinheit vollständig gelöscht werden. (Achtung: Hierfür ist keine Bestätigung erforderlich.). Bitte lösche nicht mehr benötigte Hubs, um Speicherplatz auf dem Server zu sparen. 

### Verwaltung eines Instahubs

![InstaHub Admin](img/hubadmin.png)

Im oberen Bereich werden alle aktuell verfügbaren Tabellen mit der Anzahl aller Einträge angezeigt. Auch kannst du das Passwort für den Admin-Zugang zurücksetzen.

Darunter befinden sich kopiert alle Tabellen es sind jeweils folgende Aktionen möglich:

* (Re)Create - Hierdurch wird die Tabelle ohne Einträge neu angelegt.
* (Re)Fill - Hierdurch wird die Tabelle mit Dummyeinträgen neu angelegt
* Drop - Hier drüber wird die Tabelle vollständig gelöscht.

Üblicherweise ist diese Hilfestellung Für Schüler notwendig, die einen Fehler gemacht haben, nicht mitgekommen sind oder krank waren.

Sicher ist Ihnen schon aufgefallen, dass das Löschen etwa der Tabelle `Photo` kritisch sein sollte, da dadurch ja etwa die darauf aufbauende Tabelle `Like` ebenfalls gelöscht werden sollte. Dies wird hier aber absichtlich unterbunden, indem das Ausführen von Constraints ausgesetzt wird. 

Dadurch ist es möglich auch zu einem späteren Zeitpunkt die Tabelle `Photo` neu aufzubauen, ohne dass bisherige Errungenschaften in den darauf aufbauenden Tabellen vernichtet werden. Natürlich können dadurch Inkonsistenzen in der Datenbank entstehen, welche aber nicht zu einem Absturz des Systems führen werden. Ist es dennoch notwendig diese Inkonsistenzen aufzulösen, so kann dies entweder manuell geschehen oder die abhängigen Tabellen werden ebenfalls neu aufgebaut.

## *hub*.instahub.org

Wird der Hauptdomain der InstaHub Name vorangestellt, so befindet sich der Benutzer in seinem eigenen InstaHub. Jeder InstaHub funktioniert vollkommen unabhängig von allen anderen InstaHub.

Ein InstaHub ist von der Funktion her an das soziale Netzwerk Instagram angelehnt. So ist es möglich Fotos hoch zu laden und mithilfe des Hashtag-Zeichens (`#`) zu verschlagworten, mit dem `@`-Zeichen können Nutzer verlinkt werden. Ebenfalls können Fotos kommentiert und geliked werden: 

![Photo](img/photo.png)

Interessanten Mitgliedern des sozialen Netzwerkes kann gefolgt werden, sodass sich ein individueller Newsfeed für jeden Benutzer bildet. Ein Benutzer besitzt eine Profilseite mit seinen Photos:

![Profile](img/profile.png)

Die Besonderheit des sozialen Netzwerkes sind hier seine zwei Rollen:

* `User` - Dies sind alle regulären Benutzer des sozialen Netzwerkes. Ähnlich wie es der Schüler auf seinen sozialen Netzwerken wie etwa Facebook oder Instagram ist.
* `DBA` - hier hat der Schüler zusätzliche Rechte: Dazu zählt etwa fremde Bilder und Kommentare zu löschen. Fremde Profile zu editieren (und damit auch das vollständige Geburtsdatum und E-Mail zu sehen) und der Menüeintrag Database

### Datenbank

Hier findet die eigentliche Besonderheit des eigenen InstaHubs statt: Es ist möglich mit SQL-Befehlen die Datenbank nach Belieben zu verändern. Ergebnisse werden dabei in einer Übersicht präsentiert:

![SQL-Editor](img/sqleditor.png)

Da jeder Hub seine eigene Datebank hat, können hierüber tatsächlich alle SQL-Befehle abgesendet werden. Auch das Löschen der eigenen `User`-Tabelle ist möglich. `SELECT`-Abfragen liefern das Ergebnis in einer Tabelle zurück. Andere Abfragen, ob sie erfolgreich ausgeführt wurden, oder welcher Fehler aufgetreten ist. Dabei wird immer der von MySQL gemeldete Fehler zurückgegeben.

Für Schüler, ohne SQL-Kenntnisse steht ein graphischer Abfrage-Editor zur Verfügung:

![sqlselecteditor](img/sqlselecteditor.png)

In diesem Editor lassen sich zum Lernen auch der erzeugte SQL-Befehl anzeigen.

## Tracking

Mit der Tabelle `analytics` beginnt InstaHub das Verhalten der Besucher\*innen zu überwachen. Dabei wird der Besuch von Photo-Detailansichten mit folgenden Werten dokumentiert:

* id - Primärschlüssel, fortlaufende Nummer
* ip - Die ersten drei Blöcke der IPv4-Adresse
* device - `desktop`, `mobile`, `tablet` oder `bot`
* brand_family - wird oft nur bei Smartphones mitgesendet, etwa `Apple` oder `Samsung`
* brand_model - wird oft nur bei Smartphones mitgesendet, etwa `GALAXY S5`
* browser_family - oft `Firefox`, `Chrome` oder `Safari`
* browser_version
* platform_family - oft `Windows`, `Mac`, `GNU/Linux`, `iOS` oder `Android`
* platform_version
* user_id - Benutzer\*in der sich das Photo angesehen hat
* photo_id - angesehenes Photo
* created_at - Zeitpunkt als das Photo sich angesehen wurde
* updated_at - i.d.R. wie `created_at` nur anders, wenn manuell geändert

Die IP-Adresse wird aus Datenschutzgründen eingekürzt und muss real sein, da dahin die Antwort (das Photo) geschickt wird. Der Client/Benutzer\*in kann bei allen anderen Eigenschaften beliebige Werte senden. So kann ein Bot etwa als User-Agent `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0` senden und signalisiert, dass er ein Firefox-Browser unter Windows 10 in der Version 76 sei. [Das](https://www.whatismybrowser.com/detect/what-is-my-user-agent) ist dein User-Agent. Und hier ist eine Liste von weiteren möglichen [User-Agents](https://deviceatlas.com/blog/list-of-user-agent-strings).

## personalisierte Werbung

<div class="player-schule" style="max-width: 1280px; margin: 0 auto;">
  <iframe
  src="https://player.schule/youtube/thTCt7dSHT4?embed=1"
  style="width:100%; aspect-ratio: 1280/720"
  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen allowTransparency
  ></iframe>
</div>

<figcaption>Video bei <a href="https://youtu.be/thTCt7dSHT4">YouTube</a> ansehen </figcaption>

Mit der Tabelle `ads` aktiviert InstaHub die Werbeanzeigen. Alle mitgelieferten Anzeigen sind selbstverständlich frei erfunden. Werbung vom Typ `banner` wird auf den einzelnen Photoseiten:

![Banner Ad](img/ad-banner.png)

und vom Typ `photo` als dritter Eintrag im Newsfeed angezeigt:

![Banner Ad](img/ad-photo.png)

Werbeanzeigen werden dabei personalisiert ausgeliefert. Wie diese geschieht, kann mit SQL-Kenntnissen oder der graphischen Suche beim Erstellen der Anzeige selbst bestimmt werden:

![adeditor](img/adeditor.png)

Je kleiner die Zahl bei `Priorität` ist, desto wichtiger ist die Anzeige und wird eher geprüft.

Als Bild kann eine der Beispielanzeigen verwendet werden, ein selbst hochgeladenes Photo, oder wenn die Erlaubnis vorliegt, auch ein Bild von einem anderen Server.

Um zu prüfen, ob die Anzeige angezeigt werden soll, wird die `SQL-Abfrage` ausgeführt. Diese kann entweder selbst geschrieben und im SQL-Editor ausprobiert oder über die graphische Suche erstellt werden.

So wird das Ergebnis interpretiert:

**Einfach**: Es wird geprüft, ob die `id` des Nutzers oder des Photos im Ergebnis enthalten ist. Bei Werbeanzeigen vom Typ `banner` wird nach der `id` des Photos und beim Typ `photo` nach der `id` der Nutzer:in gesehen. Dabei wird zuerst die Spalte `user_id` bzw. `photo_id`  und wenn diese nicht vorhanden sind in der Spalte `id` nachgesehen.

```sql
# Werbeanzeige vom typ `photo` nur für männliche Nutzer.
SELECT id
FROM users
WHERE gender = 'male'
```

```sql
# Werbeanzeige vom typ `banner` nur für Photos mit 'wasser' in der Beschreibung.
SELECT id # wichtig, dass kein `*` genommen wird
FROM photos
WHERE description LIKE '%wasser%'
```

```sql
# Werbeanzeige nur für männliche Nutzer.
SELECT id as `user_id`
FROM users
WHERE gender = 'male'
```

**Platzhalter**: Mit Platzhaltern kann die Anfrage so eingeschränkt werden, dass nur noch geprüft wird, ob es überhaupt ein Ergebnis gibt. Beim Typ `photo` kann hier der Platzhalter `$user`  für die aktuelle Nutzer:innen-ID und beim Typ `banner` der Platzhalter `$photo`  für die aktuelle Photo-ID verwendet werden.

```sql
# Werbeanzeige für Nutzer:innen, die mindestens einen Kommentar geschrieben haben.
SELECT *
FROM comments
WHERE user_id = $user
```

```sql
# Werbeanzeige vom Typ `banner` deren Photo mindestens einen Like erhalten hat.
SELECT *
FROM likes
WHERE photo_id = $photo
```

```sql
# Werbeanzeige wird immer angezeigt.
SELECT id FROM users WHERE id=$user
```

**Case**: Mit dem SQL-Schlüssel `CASE` können Spaltenwerte etwa in `true` und `false` umgewandelt werden. Wenn ein Platzhalter verwendet wird und das Ergebnis aus genau einer Zelle (eine Zeile und eine Spalte) besteht, dann wird diese auf Wahrheit geprüft.

```sql
# Werbeanzeige für Nutzer:innen, die mindestens einmal mit einem PC/Laptop auf der Seite waren.
SELECT 
    CASE 
        WHEN device = 'desktop' THEN true 
        ELSE false 
    END 
FROM analytics
WHERE user_id=$user
ORDER BY id DESC
LIMIT 1
```

## Werbeblocker

Kann Werbung nicht angezeigt werden, wird ein Hinweis angezeigt. In diesem Fall nutzt dein Browser einen Adblocker wie etwa [uBlock Origin](https://de.wikipedia.org/wiki/UBlock_Origin). Eine Filterung im Schulnetzwerk ist eher unwahrscheinlich, da die fiktiven Anzeigen ja vom selben Server kommen.

Bei größeren SchülerInnen kann auch die Funktion eines [Anti-Adblock Killers](https://github.com/reek/anti-adblock-killer#anti-adblock-killer--reek) besprochen werden. Dieser unterdrückte nämlich zuerst die hier [implementierte Lösung](https://stackoverflow.com/a/20505898), um die Warnanzeige zu umgehen. Diese ist so weit oben bei Google zu finden, dass der Skript einfach auf Verdacht `var canRunAds = true;` in die Webseiten injected. Daher habe ich die Variable auf einen zufälligen Namen geändert und schon klappte es wieder. Das kann natürlich auch ausgehebelt werden, aber dafür müsste dies individuell für die Seite gemacht werden. Sehr schwer wird es, wenn ich den Variablennamen serverseitig jedes Mal neu auswürfeln würde. Dann könnte man das `div`-Element mit einer speziellen CSS-Regel ausblenden oder mit JavaScript löschen, wodurch ich auch dessen `id` ändern müsste. Jetzt müsste man das Element anhand des CSS-Pfades bzw. XPath suchen, wodurch ich die Position variieren müsste. Du erkennst wohin die Reise geht?

## Sortierung und Gewichtung des Feeds

InstaHub sortiert auf Wunsch entweder nach den neusten oder den besten Ergebnissen. Im letzteren Fall erhalten Administratoren im Tooltip des jeweiligen Bildes auch das dazugehörige Scoring angezeigt:

![sort-scoring](img/sort-scoring.jpg)

### Gewichtung nach Affinität und Aktualität bei Themen-Feeds

Über die Auswahl eines einzelnen Hashtags können Photos zu nur einem Thema betrachtet werden. Das geht etwa über `http://public.instahub.org/tag/natur`. Diese werden bei den besten Ergebnissen nach Affinität und Aktualität sortiert (siehe dazu auch [Kapitel 3.3.2](https://kola.opus.hbz-nrw.de/opus45-kola/frontdoor/deliver/index/docId/2013/file/Masterarbeit.pdf)).

Zusammengefasst passiert Folgendes:

1. Jedes Photo erwählt den Wert `1`
2. Der Wert wird je Kommentar um `2` und je Like um `1` erhöht.
3. Je älter das Photo, desto kleiner der Faktor, mit dem das Ergebnis multipliziert wird (`0,995 ^ (Alter in Sekunden / 900)`. Mindestens aber `0,01`)

Im zweiten Punkt wird versucht, die Wichtigkeit des Photos anhand der Merkmale Anzahl der Likes und Kommentare zu bestimmen. Es wären auch andere Parameter, wie etwa die Anzahl der Aufrufe, die Anzahl von 5-Sternen oder eine inhaltliche Bewertung durch einen Moderator möglich.

Hinweis: Dummy-Photos sind i.d.R. so alt, dass immer mit `0,01` multipliziert wird. Man kann das Datum im Feld `created_at` aktualisieren oder die Schüler\*innen laden eigene Photos hoch, die dann immer am höchsten gewichtet sind.

### Gewichtung nach Edge-Rank im News-Feed

Betrachtet die/der Nutzer\*in den Feed der Personen, denen sie/er folgt, so erscheinen immer die neusten Photos zuerst. Folgt man aber vielen Nutzer\*innen, wäre dies sehr unübersichtlich. Viele Nutzer\*innen bei etwa Facebook oder Instagram kommen nicht dazu jeden Tag alle Neuigkeiten zu betrachten. Daher kann auch hier nach den besten Ergebnissen gewichtet werden (siehe dazu auch [Kapitel 3.3.3](https://kola.opus.hbz-nrw.de/opus45-kola/frontdoor/deliver/index/docId/2013/file/Masterarbeit.pdf)).

Edges (Kanten) sind Interaktionen mit einem Beitrag . Dies sind in diesem Fall weiterhin Likes und Kommentare. Nur werden die Kanten  jeden Beitrages jetzt gewichtet und aufsummiert. Die Gewichtung eines Likes oder Kommentars ist abhängig davon, wer es bzw. ihn vergeben hat. Stammt die Kante von einer/m Nutzer\*in, zu welche/r man selber eine hohe Affinität hat, so erhält der Beitrag auch mehr Punkte:

![sort-edge-math](img/sort-edge-math.jpg)

Die Affinität zu einer/m Nutzer\*in errechnet sich wiederum durch die  Interaktion mit deren Beiträgen. Je mehr Likes und Kommentare man einer/m Nutzer\*in vergibt, desto höher ist die Affinität zu ihm. Die Affinität zu  jedem Nutzer hat initial den Wert `1`. Mit jedem Like, das man einer/m  bestimmten Nutzer\*in gibt, wird der Wert um `1` erhöht. Mit jedem Kommentar  wird er um `2` erhöht. Betrachtet man nun einen speziellen Beitrag, kann dessen Punktzahl berechnet werden, indem für jedes Like der Affinitätswert des Urhebers hinzuaddiert wird. Für die Kommentare wird  ebenso verfahren, nur wird hier der doppelte  Affinitätswert addiert. So erhält jeder Beitrag eine individuelle, vom jeweiligen Nutzer abhängige Punktzahl.

Obiges Vorgehen hat noch den Nachteil, dass einmalig sehr populäre Beiträge bis zum Überbieten ganz oben im Feed stehen würden. So ließe sich etwa bei [YouTube Gangnam Style](https://www.youtube.com/watch?v=9bZkp7q19f0) schwer übertreffen, da der über die Zeit gesammelte Wert so hoch ist. Dennoch hat dieses Video heute nicht mehr die Bedeutung von früher.

Daher beziehen wir die Aktualität mit ein. Dies geschieht durch eine Multiplikation mit einem  Wert zwischen `1` (ganz neu) und `0,01` (sehr alt). Die Berechnung der Aktualität erfolgt mit der Formel: `t(x)= 0,995 ^ (x / 900)` , wobei `x` in  Viertelstunden angegeben ist (`x=1` entspricht 15 Minuten, usw.). Der Aktualitätswert von `0,01` bildet allerdings das Minimum.

## Interessante Profile finden

Wem folgen? Auf einer Party kann man sich gut umschauen, aber was mache ich bei 1,3 Milliarden Mitgliedern auf der Party? Hier sind intelligente Suchstrategien gefragt. Benutzer:innen erhalten auf ziemlich jeden sozialen Netzwerk Vorschläge, wem sie folgen Könnten. Der genaue Algorithmus ist dabei immer Geschäftsgeheimnis. Klar ist es hat etwas mit Gemeinsamkeiten und Graphentheorie mit den Ansätzen Prestige und Zentralität individuelle Vorschläge bestimmt werden können.

In InstaHub steht ein einfacher Algorithmus zur Verfügung.

![user-recomended](img/user-recomended.png)

Zu Beginn wird jedem Profil ein Nähegrad von `0` zugewiesen. Anschließend werden die folgenden Kriterien in der angegebenen Gewichtung summiert:

- Gemeinsame Interessen (oder hier gefolgten Personen) (`4`-fach) - Hierbei wird die Anzahl der Profile gezählt, denen sowohl der eigene als auch der zu vergleichende Benutzer folgen.
- Gemeinsame Freunde (oder hier gemeinsamen Followern) (`1`-fach) - Bei normalen Profilen deuten Überschneidungen der Follower auf einen gemeinsamen Freundeskreis hin. Bei sehr beliebten Profilen, wie z.B. Künstler\*innen, ist dieser Ansatz jedoch weniger aussagekräftig.
- Anzahl hochgeladener Photos (`0,1`-fach) - Aktive Accounts mit vielen hochgeladenen Photos wirken oft besonders spannend.

Fehlt für eines der genannten Kriterien die benötigte Tabelle im Hub, so wird das Kriterium übersprungen.

Das Gesamtergebnis wird auf die zehn Profile mit den höchsten Nähegradwerten beschränkt und ausgegeben.
