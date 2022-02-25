# Aufgaben

## Auswerten von Daten I

### Projektion

1. Wähle alle Einträge aus der Tabelle users aus.
2. Gib alle Benutzernamen (username) aus users aus.
3. Gib alle Benutzernamen (username) und echten Namen (name) aller Einträge aus users aus.
4. Gib die Wohnorte aller Mitglieder aus.

Expertenaufgabe: Gib alle Passwörter aus. Informiere dich [hier](https://de.wikipedia.org/wiki/Bcrypt), warum auch dein eigenes Passwort so komisch aussieht und warum das notwendig ist. 

#### ORDER BY

Um die Ergebnisse zu sortieren, kannst du an deine Anfrage den Befehl `ORDER BY` anfügen. `ASC` sorgt für eine ansteigende und `DESC` für eine absteigende Sortierung. [Hier](http://www.w3schools.com/sql/sql_orderby.asp) findest du eine ausführliche Erklärung.

1. Ordne die Mitglieder nach ihrem Benutzernamen in alphabetischer Reihenfolge.
2. Ordne die Mitglieder nach deren Größe. Das größte Mitglied soll die Liste anführen.
3. Kehre die Reihenfolge der Tabelle users um.

#### DISTINCT

Fügst du nach dem `SELECT` den Befehl `DISTINCT` ein, so wird jede Zeile nur einmal ausgegeben. Dies ist etwa praktisch, wenn du wissen möchtest, welche Arten von Büchern es gibt.

1. Gib jeden Wohnort nur einmal aus.
2. Gib jede Benutzerrolle nur einmal aus. Welche Benutzerrolle hat *admin*?

#### LIMIT

Wenn das Netzwerk sehr langsam ist dauert es eine Weile bis alle Mitglieder angezeigt werden. Um nur die ersten Einträge anzuzeigen, kannst du den `LIMIT` Befehl verwenden: 

```sql
SELECT username FROM users LIMIT 25
```

1. Zeige nur 3 Mitglieder an.
2. Zeige nur die 5 größten Mitglieder an.

#### MIN / MAX

Du suchst nur das Extreme? Dann hilft dir der `MAX` Befehl weiter:

```sql
SELECT MAX(centimeters) AS "Maximale Körpergröße:" FROM users
```

1. Zeige wie groß das kleinste  Mitglied ist.
2. Zeige wie alt als das älteste Mitglied ist.
3. Zeige an wann sich zuletzt ein Mitglied registriert hat.

#### COUNT

Mit `COUNT` kannst du die Einträge aus der Tabelle zählen: 

```sql
SELECT COUNT(*) AS "Registrierte Mitglieder" FROM users
```

1. Ermittle mithilfe des obigen Befehls, wie viele Mitglieder dein InstaHub hat.

#### GROUP BY

Wenn du nicht die gesamte Menge aller Mitglieder wissen möchtest, sondern die Anzahl etwas differenzierter haben möchtest, kannst du auch die Einträge bezogen auf eine gleiche Eigenschaft auszählen lassen:

```sql
SELECT city, COUNT(*) AS "Mitglieder je Stadt" FROM users GROUP BY city
```

1. Gib die Mitglieder je Stadt aus.
2. Prüfe, ob es Mitglieder gibt, die am gleichen Tag geboren wurden.

#### Übungen

1. Gib die Mitgliedernamen entgegen der alphabetischen Reihenfolge aus.
2. Gib die Namen der 3 Städte mit den meisten Mitgliedern aus.
3. Gib an, aus wie vielen Ländern die Mitglieder kommen.

#### Expertenaufgabe

Hilf mit den Unterricht zu gestalten und [reiche eigene Fragen ein](https://goo.gl/forms/xy29cLImYj4jrpFy1).

### Selektion (Auswahl)

*Hinweis: Einige Fragen lassen sich nicht unmittelbar als SQL-Satz umbauen. Schaue daher in der vollständigen Tabelle nach, wie die Informationen abgelegt sind.*

1. Wähle alle Einträge aus der Tabelle users aus, bei denen das Geschlecht (gender) weiblich (female) ist.
2. Wähle alle Mitglieder aus Deutschland aus.
3. Wähle alle Mitglieder aus, die in Leipzig wohnen.
4. Zeige nur *Emily Faber* an.
5. Wähle alle Mitglieder mit der Rolle *user* aus.
6. Ersetze in Aufgabe 5 `=` durch `!=`.
7. Notiere was `!=` bedeutet.

#### Größer und Kleiner

Neben dem bekannten `=` kannst du auch `<` und `>` verwenden, um Bereiche von Werten auszuwählen.

1. Gib alle Mitglieder aus, die unter 1,80 Meter groß sind.
2. Prüfe, ob es minderjährige Mitglieder gibt. (Beispiel `"2001-01-01"`)

#### Oder so ähnlich...

Nicht immer weiß man vollständig, was man sucht. Da hilft der `LIKE`-Befehl:

```sql
SELECT username FROM users WHERE username LIKE "ameli%"
```

1. Notiere dir anhand [dieser Erklärung](http://www.w3schools.com/Sql/sql_like.asp ), wie der `LIKE`-Befehl arbeitet.

2. Welche Mitglieder haben einen Benutzernamen mit einem a?
3. Von welchen Mitgliedern beginnt der Vorname mit einem B?
4. Welche Mitglieder haben keine Emailadresse bei *instahub.test*?

#### Übungen

1. Gib die Namen aller Berliner Mitglieder aus.
2. Wie viele Personen wohnen in München?
3. Gib die Nutzernamen aller Mitglieder an, die kleiner sind als du.
4. Gib die Stadtnamen aus, wo die meisten Mitglieder mit einem *a* im Namen wohnen.

#### Expertenaufgabe

Hilf mit den Unterricht zu gestalten und [reiche eigene Fragen ein](https://goo.gl/forms/xy29cLImYj4jrpFy1).

### Logische Operatoren

#### AND, OR, AND NOT

1. Erschließe dir anhand der nachfolgenden 3 Beispiele die Funktion der Operatoren `AND`, `OR`, `AND NOT`. Notiere dies.

```sql
SELECT username, city FROM users where city = "Berlin" AND name LIKE "Fabian%"
```
```sql
SELECT username, city FROM users where city = "Berlin" OR name LIKE "Fabian%"
```
```sql
SELECT username, city FROM users where city = "Berlin" AND NOT name LIKE "Fabian%"
```

2. Finde alle Berliner die *Marc* heißen.
3. Finde alle Leipziger Frauen.
4. Finde alle Linas und Lorenas. 
5. Sortiere alle Männer nach ihrer Körpergröße, welche mindestens 16 Jahre alt sind.
6. Zeige das Geburtsdatum und den Benutzernamen aller Frauen an, die kleiner als 1,60 Meter sind.
7. Wähle alle Felix aus, die nicht aus Berlin kommen. 

#### Expertenaufgabe

Hilf mit den Unterricht zu gestalten und [reiche eigene Fragen ein](https://goo.gl/forms/xy29cLImYj4jrpFy1).



#### Wechselwirkungen von Einschränkungen

Gesucht werden alle Berliner:

```sql
SELECT username, name FROM users where city = "Berlin" AND gender = "male" OR gender = "female"
```

1. Führe den Befehl aus und prüfe das Ergebnis, indem du die Abfrage ohne explizite Ausführung des Geschlechts erneut ausführst.

Wenn du mehr als 2 Bedingungen hast, ist es manchmal sinnvoll anzugeben, welche zuerst betrachtet werden müssen. Dazu kannst du Klammern verwenden:

```sql
SELECT username, name FROM users where city = "Berlin" AND (gender = "male" OR gender = "female")
```

2. Gib alle Männer aus Leipzig aus, die kleiner als 165 Zentimeter sind.
3. Die Bundeswehr sucht Rekruten. Gib die Namen aller Männer über 165cm und alle Frauen über 160cm aus.
4. Erna sucht eine Bekannte aus Berlin. Ihr Vorname war entweder *Bea* oder *Naomi*.

## Verändern von Daten I

### INSERT
1. Füge zwei ausgedachte Datensätze nach folgendem Muster ein: 

```sql
INSERT INTO users (username, email, password, name, bio, gender, birthday, city, country, centimeters, avatar, role, is_active, remember_token, created_at, updated_at) 
VALUES ('guenther37', 'guenther@instahub.test', '12345', 'Günther Müller', 'Günther mag Kartoffelsalat.', 'male', '2006-06-06 00:00:00', 'Leipzig', 'Deutschland', '173', 'avatar.png', 'user', '0', NULL, now(), now());
```
2.  Was bedeutet `now()`?

Expertenaufgabe: Wieso wird in dem obigen SQL-Befehl die ID nicht mit übergeben?

3.  Welche ID hat der neue Datensatz? Auf welche Arten können diese ermittelt werden?
4.  Füge den User *Mila Bach* aus Hamburg hinzu. Du kannst dir die fehlenden Attribute selbst ausdenken. 
5.  Registriere dich in deinem InstaHub ([https://*hub*.instahub.org/](#)) als neues Mitglied. 
6.  Logge dich anschließend wieder als *admin* ein und prüfe die ID des neuen Mitglieds. 

### UPDATE
1.  Setze die Körpergröße von allen Mitgliedern auf 160.
2.  Ändere in dem zuletzt hinzugefügten Eintrag die Stadt auf Dresden. (Du kannst die ID mit einem extra SELECT-Befehl ermitteln.)
3.  Ersetze den Begriff "Germany" überall durch "Deutschland".
4.  Ersetze die Körpergröße mit dem Wert `FLOOR(RAND()*45)+150`
  1. Was hat dieser Befehl bewirkt?
  2. Recherchiere was die Befehle [FLOOR](https://www.w3schools.com/sql/func_mysql_floor.asp) und [RAND](https://www.w3schools.com/sql/func_sqlserver_rand.asp) bewirken.

### DELETE
1. Lösche den vorletzten Datensatz.


## ERM
Zeichne das Entity-Relationship-Modell deines InstaHubs.

## Tabelle User

Bereits vor deinem ersten Login in deinem InstaHub haben sich 203 User registriert!

Fügst du über einen SQL-Befehl einen neuen User hinzu, kann sich dieser nicht einloggen. Wenn der User versucht sich einzuloggen, dann wird von dem eingegebenen Passwort ein sogenannter Hashwert berechnet. Wenn dieser Wert mit dem in der Datenbank hinterlegten Wert übereinstimmt, wird der User eingeloggt. Wenn du das Passwort in der Datenbank im Klartext speicherst, schlägt der Login-Prozess also fehl.

Um alle Passwörter, die im Klartext gespeichert sind, durch ihren Hashwert zu ersetzen, kannst du in deinem Browser die folgende Adresse aufrufen:

`https://<hub>.instahub.org/dba/cryptPWs`

w> Im Folgenden wird davon ausgegangen, dass noch alle User mit der `id` 1 bis 203 vorhanden sind. Ist dem nicht so, können die vorbereiteten Datensätze nicht eingefügt werden. Am besten erstellst du einfach die fehlenden Nutzer neu und weist denen anschließend per SQL eine passende `id` zu. Notfalls kann dein/e LehrerIn den Import auch erzwingen.

## Tabelle Photo

```sql
CREATE TABLE `photos` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(10) UNSIGNED NOT NULL,
  `description` varchar(191) NOT NULL,
  `url` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
)
```

1. Verstehe den obigen SQL-Befehl.
2. Führe den obigen SQL-Befehl aus.

Um die Aktivität deiner Mitglieder zu beschleunigen, kannst du [diesen Datensatz](https://wi-wissen.github.io/instahub-doc-de/sql/photos.sql) einfügen.

## Tabelle Tags
```sql
CREATE TABLE `tags` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (`photo_id`) REFERENCES `photos`(`id`) ON DELETE CASCADE
)
```
1. Verstehe den obigen SQL-Befehl.
2. Führe den obigen SQL-Befehl aus.

Um aus den bestehenden Bildbeschreibungen die Tags zu extrahieren kannst du folgende Webadresse aufrufen: 
[https://*hub*.instahub.org/dba/updateTags](#)

## Tabelle Comments 
```sql
CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `body` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`photo_id`) REFERENCES `photos`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) 
```
1. Verstehe den obigen SQL-Befehl.
2. Führe den obigen SQL-Befehl aus.

Um die Aktivität deiner Mitglieder zu beschleunigen, kannst du [diesen Datensatz](https://wi-wissen.github.io/instahub-doc-de/sql/comments.sql) einfügen.

## Tabelle Follower
```sql
CREATE TABLE `follows` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `following_id` int(10) UNSIGNED NOT NULL,
  `follower_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`following_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`follower_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
)
```
1. Verstehe den obigen SQL-Befehl.
2. Führe den obigen SQL-Befehl aus.

Um die Aktivität deiner Mitglieder zu beschleunigen, kannst du [diesen Datensatz](https://wi-wissen.github.io/instahub-doc-de/sql/follows.sql) einfügen.

## Tabelle Likes
```sql
CREATE TABLE `likes` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`photo_id`) REFERENCES `photos`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
)
```
1. Verstehe den obigen SQL-Befehl.
2. Führe den obigen SQL-Befehl aus.

Um die Aktivität deiner Mitglieder zu beschleunigen, kannst du [diesen Datensatz](https://wi-wissen.github.io/instahub-doc-de/sql/likes.sql) einfügen.

## Tabelle Analytics (Tracking)

```sql
CREATE TABLE `analytics` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ip` varchar(191) NOT NULL,
  `device` varchar(191) NOT NULL,
  `brand_family` varchar(191) NOT NULL,
  `brand_model` varchar(191) NOT NULL,
  `browser_family` varchar(191) NOT NULL,
  `browser_version` varchar(191) NOT NULL,
  `platform_family` varchar(191) NOT NULL,
  `platform_version` varchar(191) NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`photo_id`) REFERENCES `photos`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE  
)
```

1. Verstehe den obigen SQL-Befehl.
2. Führe den obigen SQL-Befehl aus.
3. Rufe mehrere Bilder in der Einzelansicht auf und beobachte, welche Einträge in der Tabelle hinzugekommen sind.

## Tabelle Ads (Werbung)

```sql
CREATE TABLE `ads` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `priority` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `type` enum('banner','photo') NOT NULL,
  `url` varchar(191) NOT NULL,
  `img` varchar(191) NOT NULL,
  `query` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)  
)
```

1. Verstehe den obigen SQL-Befehl.
2. Führe den obigen SQL-Befehl aus.
3. Erstelle mit dem folgenden SQL-Befehl zwei Werbeanzeigen

```sql
INSERT INTO `ads` (`id`, `priority`, `name`, `type`, `url`, `img`, `query`, `created_at`, `updated_at`) VALUES
(7, 99, 'andromeda ', 'photo', '/noad', '/img/ad/smoothie.jpg', 'SELECT id FROM users WHERE id=$user', '2020-05-15 21:58:59', '2020-05-15 21:58:59'),
(8, 99, 'burgerhaus', 'banner', '/noad', '/img/ad/brokkolie.jpg', 'SELECT id FROM photos WHERE id=$photo', '2020-05-15 21:58:59', '2020-05-15 21:58:59');
```

4. Erstelle eine selbstausgedachte Regel für eine Werbeanzeige.

[Hier](frontend?id=personalisierte-werbung) findest du in der Dokumentation eine Erklärung, wie die Werbeanzeigen funktionieren. Du kannst vorgegebenen Werbeanzeigen aus dem Menueintrag *Kampagnen* umsetzen oder dir selbst eine Anzeige ausdenken. Dazu entwirfst du die Werbung auf deinem Rechner und lädst diese anschließend als Photo hoch. Jetzt kannst du den Link zu diesem Bild (nicht der Photo-Seite!) verwenden.

## Modellieren von Daten

### Zootiere

1. Erstelle für folgendes Szenario ein Entity-Relationship-Modell:  

In einem Zoo leben verschiedene Tierarten. Jede Tierart ist in einem eigenen Gehege untergebracht. Dabei kümmern sich verschiedene Tierpfleger teilweise um mehrere Tierarten. Eine Tierart, wie etwa der Elefant, wird von mehreren Tierpflegern betreut. Jede Tierart ist einem Kontinent zugeordnet, wodurch Themenführungen ermöglicht werden. 

2. Notiere den SQL-Befehl, um alle Tierarten anzuzeigen.
3. Notiere den SQL-Befehl, um alle Tierarten des Zoodirektors anzuzeigen.

Zu  jeder Tierart gehören einzelne Exemplare dieser Art. 

1. Ergänze die einzelnen Tierexemplare und fügen für diese sinnvolle Attribute hinzu. Während Pinguine nur 25 Jahre werden Elefanten bis 60 Jahre alt. Daher soll für jedes Tier das Geburts- und Sterbedatum festgehalten werden.

Mithilfe deiner Datenbank sollen folgende Probleme geklärt werden:

1. Beschreibe, wie ein Pfleger alle aktuell lebenden Tiere ausgeben lassen kann. 
   ("<" bedeutet kleiner als und ">" größer als. Ein Datum wird so angegeben '2011/02/25')
2. Der Direktor möchte ermitteln, welche Tiere letztes Jahr gestorben sind. Notiere den passenden SQL-Befehl.

Manche  Tierpfleger gehen sehr brutal mit Ihren Tieren um. Es ist schon vorgekommen, dass ein Pfleger auf ein Küken getreten ist. Der Direktor möchte nun herausfinden, bei welchem Tierpfleger die meisten Tiere sterben und diesen entlassen. 

1. Notiere den passenden SQL-Ausdruck dazu.
2. Begründe, warum die Idee des Zoodirektors nicht zu Ende gedacht ist.

### Der Bibliothekar

Sie sind in einer dunklen Gasse falsch abgebogen und finden sich unversehens in einer großen Halle voller Bücher wieder. Gerade als Sie beschließen zu gehen, erhebt sich hinter einem Stapel veralteter Lexika ein alter Mann und blickt Sie mit traurigen, grauen Augen an. Schon lang ist es her, dass sich ein Besucher in seine Bibliothek verirrt hat. Mit reißender Stimme bittet er Sie ihn bei seinem ERM zu helfen, damit er bald die Bibliothek für junge Menschen erschließen kann.

Unter gelegentlichen Schnaufen und Glucksen berichtet er seine Anforderungen an die Datenbank:

*Ein jedes Buch hat seinen Platz in einem Regal. Dabei wird der Platz in dem Regal durch das Regalbrett genauer bestimmt. Alle Regale befinden sich in diesem Saal. Die Bücher werden verschiedenen Genres zugeordnet. Beispielsweise ist das Werk "Der Frosch zu Gast bei Helmut" nicht nur eine Komödie, sondern auch ein Krimi.* 

1. Erstelle für obige Anforderungen das ERM.

2. Ergänze alle Primär- und Fremdschlüssel an der richtigen Stelle.

3. Füge dem Büchern weitere sinnvolle Attribute hinzu.

4. Erstelle nach deinem ERM folgende SQL-Sätze:

5. 1. Erstelle für alle CRUD-Operatoren auf die Tabelle Bücher je ein Beispiel. 
      Dies können Sie sich entsprechend Ihres ERM frei aussuchen.
   2. Gib alle Bücher aus.
   3. Gib alle Bücher mit dem Titel "Der Frosch zu Gast bei Helmut" aus.
   4. Finde alle Bücher die im Titel "Helmut" tragen.
   5. Zähle alle Bücher.

6. Dich beschleicht ein schrecklicher Verdacht. Hinter einem verschlissenen Vorhang befindet sich eine weitere Kammer mit Büchern. Bücher von epochaler Bedeutung für die Zukunft des europäischen Schmiedehandwerks. Passe dein ERM so an, dass statt dem einzelnen Saal auch die Kammer mit erfasst werden kann.

### Das Stahlwerk der Postapokalypse

Orientierungslos wachen Sie in einer Wüste aus Metall auf. Die Luft ist eiskalt klar. Der Boden besteht aus rostenden Stahl. Um Sie herum laufen orientierungslose Menschen, welche voller Panik versuchen kleine Stahlplatten und Stangen gegen belegte Butterbrote zu tauschen. Sie schleppen sich zu einer großen Halle aus der das Dröhnen von Hämmern zu vernehmen ist. Man erzählt Ihnen, dass dies vor dem Krieg das größte Stahlwerk der Welt war, aber bei einem Bombenangriff das vollständige ERM vernichtet wurde. Nun ist die Werksleitung außer Stande die Mitarbeiter in der Kantine mit Wurstbroten zu versorgen, da die Produktion am Boden liegt.

Hilfe dem Werksleiter ein erstes ERM für die die Werkshalle "Stahlfuchs" zu entwerfen:

*In der Halle "Stahlfuchs" haben wir mehrere Öfen. An jeden Ofen arbeitet genau ein Heizer. Mehrere Träger bringen Brennstäbe zum Beheizen der verschiedenen Öfen. Jeder Heizer und Träger hat eine Personalnummer. Jeder Ofen ist über seinen Standort genau bestimmt.* 

1. Erstelle für obige Anforderungen das ERM.
2. Ergänze alle Primär- und Sekundärschlüssel an der richtigen Stelle.
3. Füge dem Träger weitere sinnvolle Attribute hinzu.
4. Erstelle nach deinem ERM folgende SQL-Sätze:
   1. Erstelle für alle CRUD-Operatoren auf die Tabelle Träger je ein 
      Beispiel. Dies kannst du dir entsprechend deines ERM frei aussuchen.
   2. Gib alle Träger aus.
   3. Gib die Träger aus, wessen Personalnummer mit 5 beginnt. 
   4. Zähle alle Heizer 
5. Zum Dank erhältst du ein Butterbrot und Pfefferminztee und ziehst dich damit für eine Pause auf das Dach der Halle zurück. Voller Stauen erblickst du, dass weitere Hallen bis an den Horizont reichen.  Passe dein ERM so an, dass statt der Halle Stahlfuchs die scheinbar unendlich vielen Hallen mit erfasst werden können.

## Auswerten von Daten II

### INNER JOIN

1. Mit welchem SQL-Befehl kann InstaHub alle Photos eines Mitglieds anzeigen? Liste die Links zu allen Photos von *samina369* auf.

2. Wer sind die 10 Follower von *luis52*?
    a. Ermittle die id von *luis52*.
    b. Liste alle Follower *luis52* auf. Beachte das in der Datenbank der Nutzer in `following_id` dem Nutzer in `follower_id` folgt.

3. Der Verfassungsschutz bittet um Mithilfe: Wer hat in Kommentaren zu Fotos Adolf Hitler erwähnt? Gib deren Email und den betreffenden Kommentar aus.

4. Es soll Werbung an alle Strandurlauber verschickt werden. Finde alle Photos die den Hashtag *#meer* enthalten. Gib den Namen, die Emailadresse, den Geburtstag und die Stadt der zugehörigen Benutzer aus. 

  Expertenaufgabe: Ändere den Befehl der vorherigen Aufgabe so, dass der hashtag aus der Tabelle `tags` genommen wird.

5. Gib alle Kommentare und die zugehörigen Benutzernamen der Verfasser aus München an.

6. Erstelle eine Liste, welche in absteigender Reihenfolge die Nutzer mit den meisten Photos beinhaltet. 

7. Erstelle eine Liste, wo für jedes Leipziger Mitglied die Anzahl seiner Fotos aufgeführt ist.

8. Gib die 10 beliebtesten Photos aus.

Expertenaufgabe: In Aufgabe 2 hast du mit zwei Abfragen die Follower von *luis52* ermittelt. Das geht auch einfacher. Anstelle zweier getrennter Abfragen kannst du die Bedingung auch wie folgt schreiben:

```sql
WHERE follows.follower_id = (SELECT id FROM users WHERE username="luis52")
```

1. Formuliere die Abfrage aus Aufgabe 2 so um, dass sie mit einer Abfrage ausgeführt wird.

2. Gib aus, wem *mala452* folgt.

### LEFT JOIN ON

1. Alle Mitglieder, die noch nie ein Foto hochgeladen haben, sollen per Push-Notification dazu ermutigt werden. Ermittle dafür deren Benutzer-ID. 
2. Lara würde gern allen Mitgliedern eine Mail schreiben, welche noch nie ein Foto kommentiert haben. Suche deren Mail-Adresse heraus.


### Expertenaufgabe

Hilf mit den Unterricht zu gestalten und [reiche eigene Fragen ein](https://goo.gl/forms/xy29cLImYj4jrpFy1).

## Verändern von Daten II

### INSERT

Der Nutzer mit den meisten Kommentaren soll für sein letztes Bild einen Kommentar mit *#bestuserever* erhalten.

### UPDATE

Nutzer, die ihre *Boote* fotografiert haben, möchten im Rahmen einer politischen Kundgebung ihre Heimatstadt durch *"auf hoher See"* ersetzen lassen.

Aktualisiere den Slogan (*bio*) aller Leipziger Mitglieder, die noch keinen Slogan haben auf *"Meine Bilder auf InstaHub spiegeln die Seele der persistenten Schönheit im Spiegel der Güte wieder.*" 

### DELETE

In der Vergangenheit wurden aus *Oberreichenbach* wiederholt Fotos von streng geheimen Untergrundbibliotheken veröffentlicht. Entferne alle Fotos, die von Nutzern aus *Oberreichenbach* hochgeladen wurden.

### Expertenaufgabe

Hilf mit den Unterricht zu gestalten und [reiche eigene Fragen ein](https://goo.gl/forms/xy29cLImYj4jrpFy1).


## Komplexaufgaben

### Ein eigener Webshop

Ihre Schülervertretung druckt eigene T-Shirts, welche mittlerweile deutschlandweit sehr gefragt sind. Um noch mehr Schüler und Lehrer mit T-Shirts, wie "Schule ist do....ch toll", "10/8 Lehrer haben Probleme in Mathe" und "Ich bin Leerer" zu erfreuen, wollen Sie einen eigenen Shop entwickeln.

1. Hast du schon einmal online eingekauft? Öffne deinen Lieblingsshop.
2. Versuche anhand der Webseite die darunter liegende Datenbank abzuleiten. Dies ist sehr, sehr schwer, da die Datenbank vermutlich äußerst groß ist. Es reicht, wenn du einige Bereiche aufnimmst. 
3. Zeichne die Datenbank als Entity-Relationship-Modell. 
4. Notiere für jede CRUD-Operation je einen SQL-Ausdruck für eine von dir ausgewählte Tabelle.
