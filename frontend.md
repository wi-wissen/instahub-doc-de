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

<div class="plyr__video-embed" id="player">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/llkjwhUdbtw?origin=https://buch.informatik.cc&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

<div class="plyr__video-embed" id="player">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/thTCt7dSHT4?origin=https://buch.informatik.cc&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<figcaption>Video bei <a href="https://youtu.be/thTCt7dSHT4">YouTube</a> ansehen </figcaption>

Mit der Tabelle `ads` aktiviert InstaHub die Werbeanzeigen. Alle mitgelieferten Anzeigen sind selbstverständlich frei erfunden. Werbung findet auf den einzelnen Photoseiten

![Banner Ad](img/ad-banner.png)

oder als dritter Eintrag im Newsfeed statt:

![Banner Ad](img/ad-photo.png)

Werbeanzeigen werden dabei personalisiert ausgeliefert. Wie diese geschieht, kann mit SQL-Kenntnissen vollständig selbst bestimmt werden:

Die Tabelle `ads` besitzt folgende Attribute, um eine Werbeanzeige zu definieren:

* `id` - fortlaufende Nummer als Primärschlüssel
* `priority` - Wenn mehrere Bedingungen zutreffen wird die Anzeige mit der niedrigsten Zahl ausgewählt (Priorität 1 ist als die höchste)
* `name` - Name der Werbeanzeige zum Wiederfinden, wird aktuell nicht verwendet
* `type` - `photo` oder `banner`. Photos werden nur im Newsfeed und Banner nur unter einzelen Photos in der Detailansicht angezeigt.
* `url` - Ziellink, auf den der Nutzergeleitet wird. Es wird empfohlen `/noad` als Adresse zu verwenden, dann kommt der Nutzer auf eine eingerichtete Fehlerseite, dass die Werbekampagne bereits ausgelaufen sei. Die Schulhomepage als Adresse ist aber ebenfalls möglich
* `img` - Anzuzeigendes Bild. Aktuell sind nur die unter Business angezeigten Werbebanner im System hinterlegt. Es ist aber auch möglich die Werbegrafik einfach als Photo hochzuladen oder einen absoluten Link auf eine Grafik im Internet zu verwenden (Beachte, dass du das nur machen darfst, wenn das für den fremden Werbserverinhaber in Ordnung ist).
* `query` - SQL Ausdruck, der ermittelt, ob die Anzeige geeignet ist. Als Platzhalter können `$user` für die User-ID des Benutzers und wenn es vom `type` `banner` ist die dazugehörige Photo-ID `$photo` verwendet werden.
* `created_at` - aktueller Zeitstempel, wird aktuell nicht verwendet
* `updated_at` - aktueller Zeitstempel, wird aktuell nicht verwendet

Im Ergebnis der `query` können verschiedene Ergebnisse ausgewertet:

* kein Ergebnis - die Anzeige wird als nicht geeignet gewertet.
* Genau ein Ergebnis - Das erste Attribut mit dem ersten Attributwert geprüft. Ist das Ergebnis nicht `false`, `null` oder `0`, so wird die Anzeige als geeignet gewertet.
* Eine Liste von `id`s. In diesem Fall wird geprüft, ob die Photo- bzw. User-ID in der Abfrage enthalten ist. Ist dem der fall wird die Anzeige als geeignet gewertet.

Hier zwei Beispiele für eine `query`:

```sql
SELECT 
	CASE gender 
		WHEN 'male' THEN true 
		ELSE false 
	END 
FROM users where id=$user
```

Dieser Befehl gibt `true` zurück, wenn das Geschlecht des aktuellen Nutzers `male` ist. Ansonsten `false`.

Alternativ kann auch der folgende Ausdruck geschrieben werden:

```sql
SELECT id
FROM users
WHERE gender = 'male'
```

Hier wird dann geprüft, ob die Benutzer-ID in der Liste vorkommt. Bitte beachte, dass im Newsfeed nach der Benutzer-ID und unter einem Photo nach der Photo-ID gesucht wird. Möchtest du das manuell steuern, verwende einfach einen der anderen Befehle.

Auch komplexere Abfragen lassen sich realisieren:

```sql
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

Es können beliebige Befehle geschrieben werden. Bitte beachte aber, dass der dafür gut geeignete Befehl [`WITH`](https://mariadb.com/kb/en/library/with/) erst ab MariaDB 10.2.1 und in MySQL in Version 8 eingeführt wird. Diese Versionen sind noch nicht auf allen Servern - wie etwa dem offiziellen InstaHub.org Server.

```sql
SELECT id FROM users WHERE id=$user
```

In diesem Fall wird ja immer die User-ID zurückgegeben. Da diese größer als `0` ist, wird diese Anzeige immer als möglich betrachtet. Sie sollte daher mit einer sehr geringen Priorität (etwa `99`) als Fallback-Lösung eingerichtet werden.

Der vollständige SQL-Befehl kann etwa so aussehen:

```sql
INSERT INTO ads (priority, name, type, url, img, query, created_at, updated_at) VALUES
(1, 'default', 'photo', '/noad', 
 '/img/ad/freizeitpark.jpg', 
 'SELECT 
 	CASE 
 		WHEN device = "desktop" 
 		THEN true 
 		ELSE false 
 		END 
 FROM analytics WHERE user_id=$user 
 ORDER BY id DESC 
 LIMIT 1', 
 '2018-10-06 22:00:00', '2018-10-06 22:00:00')
```

Wichtig ist, dass der eingebettete SQL-Befehl als Zeichenkette übergeben wird. Werden Anführungszeichen verwendet, dürfen diese nicht mit den umschließenden Anführungszeichen übereinstimmen. (Hier werden `""` von `''` umschlossen.)

Wenn das zu komplex für die Schüler ist, kann auch das Formular zum Eintragen und Bearbeiten von Anzeigen verwendet werden:

![adeditor](img/adeditor.png)



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
3. Je älter das Photo, desto kleiner der Faktor, mit dem das Ergebnis multipliziert wird (`0,96 * Alter in Sekunden / 900`. Mindestens aber `0,1`)

Im zweiten Punkt wird versucht, die Wichtigkeit des Photos anhand der Merkmale Anzahl der Likes und Kommentare zu bestimmen. Es wären auch andere Parameter, wie etwa die Anzahl der Aufrufe, die Anzahl von 5-Sternen oder eine inhaltliche Bewertung durch einen Moderator möglich.

Hinweis: Dummy-Photos sind i.d.R. so alt, dass immer mit `0,1` multipliziert wird. Man kann das Datum im Feld `created_at` aktualisieren oder die Schüler\*innen laden eigene Photos hoch, die dann immer am höchsten gewichtet sind.

### Gewichtung nach Edge-Rank im News-Feed

Betrachtet die/der Nutzer\*in den Feed der Personen, denen sie/er folgt, so erscheinen immer die neusten Photos zuerst. Folgt man aber vielen Nutzer\*innen, wäre dies sehr unübersichtlich. Viele Nutzer\*innen bei etwa Facebook oder Instagram kommen nicht dazu jeden Tag alle Neuigkeiten zu betrachten. Daher kann auch hier nach den besten Ergebnissen gewichtet werden (siehe dazu auch [Kapitel 3.3.3](https://kola.opus.hbz-nrw.de/opus45-kola/frontdoor/deliver/index/docId/2013/file/Masterarbeit.pdf)).

Edges (Kanten) sind Interaktionen mit einem Beitrag . Dies sind in diesem Fall weiterhin Likes und Kommentare. Nur werden die Kanten  jeden Beitrages jetzt gewichtet und aufsummiert. Die Gewichtung eines Likes oder Kommentars ist abhängig davon, wer es bzw. ihn vergeben hat. Stammt die Kante von einer/m Nutzer\*in, zu welche/r man selber eine hohe Affinität hat, so erhält der Beitrag auch mehr Punkte:

![sort-edge-math](img/sort-edge-math.jpg)

Die Affinität zu einer/m Nutzer\*in errechnet sich wiederum durch die  Interaktion mit deren Beiträgen. Je mehr Likes und Kommentare man einer/m Nutzer\*in vergibt, desto höher ist die Affinität zu ihm. Die Affinität zu  jedem Nutzer hat initial den Wert `1`. Mit jedem Like, das man einer/m  bestimmten Nutzer\*in gibt, wird der Wert um `1` erhöht. Mit jedem Kommentar  wird er um `2` erhöht. Betrachtet man nun einen speziellen Beitrag, kann dessen Punktzahl berechnet werden, indem für jedes Like der Affinitätswert des Urhebers hinzuaddiert wird. Für die Kommentare wird  ebenso verfahren, nur wird hier der doppelte  Affinitätswert addiert. So erhält jeder Beitrag eine individuelle, vom jeweiligen Nutzer abhängige Punktzahl.

Obiges Vorgehen hat noch den Nachteil, dass einmalig sehr populäre Beiträge bis zum Überbieten ganz oben im Feed stehen würden. So ließe sich etwa bei [YouTube Gangnam Style](https://www.youtube.com/watch?v=9bZkp7q19f0) schwer übertreffen, da der über die Zeit gesammelte Wert so hoch ist. Dennoch hat dieses Video heute nicht mehr die Bedeutung von früher.

Daher beziehen wir die Aktualität mit ein. Dies geschieht durch eine Multiplikation mit einem  Wert zwischen `1` (ganz neu) und `0,1` (sehr alt). Die Berechnung der Aktualität erfolgt mit der Formel: `t(x)= 0,96^x` , wobei `x` in  Viertelstunden angegeben ist (`x=1` entspricht 15 Minuten, usw.). Der Aktualitätswert von `0,1` bildet allerdings das Minimum.
