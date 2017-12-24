# Aufgaben

## Auswerten von Daten I

### Projektion

1. Wähle alle Einträge aus der Tabelle users aus
2. Gib alle Benutzernamen (username) aus users aus
3. Gib alle Benutzernamen (username) und echten Namen (name) aller Einträge aus users aus
4. Gib die Wohnorte aller Mitglieder aus

Expertenaufgabe: Gib alle Passwörter aus. Informiere dich [hier](https://de.wikipedia.org/wiki/Bcrypt) warum auch dein eigenes Passwort so komisch aussieht und warum das notwendig ist. 

#### ORDER BY

Um die Ergebnisse zu sortieren, kannst du an deine Anfrage den Befehl ORDER BY anfügen. ASC sorgt für eine ansteigende und DESC für eine absteigende Sortierung. [Hier](http://www.w3schools.com/sql/sql_orderby.asp) findest du eine ausführliche Erklärung.

1. Ordne die Mitglieder nach ihrem Benutzernamen in alphabetischer Reihenfolge
2. Ordne die Mitglieder nach deren Größe. Das größte Mitglied soll die Liste anführen
3. Kehre die Reihenfolge der Tabelle users um.

#### DISTINCT

Fügst du nach dem SELECT den Befehl DISTINCT ein, so wird jede Zeile nur einmal ausgegeben. Dies ist etwa praktisch, wenn du wissen möchtest, welche Arten von Büchern es gibt.

1. Gib jeden Wohnort nur einmal aus
2. Gib jede Benutzerrolle nur einmal aus. Welche Benutzerrolle hat *admin*?

#### LIMIT

Wenn das Netzwerk sehr langsam ist dauert es eine Weile bis alle Mitglieder angezeigt werden. Um nur die ersten Einträge anzuzeigen kannst du den LIMIT Befehl verwenden: 

```sql
SELECT username FROM users LIMIT 25
```

1. Zeige nur 3 Mitglieder an.
2. Zeige nur die 5 größten Mitglieder an.

#### MIN / MAX

Du suchst nur das Extreme? Dann hilft dir der MAX Befehl weiter:

```sql
SELECT MAX(centimeters) AS "Maximale Körpergröße:" FROM users
```

1. Zeige wie groß das kleinste  Mitglied ist.
2. Zeige wie alt als das älteste Mitglied ist.
3. Zeige an wann sich zuletzt ein Mitglied registriert hat.

#### COUNT

Mit COUNT kannst du die Einträge aus der Tabelle zählen: 

```sql
SELECT COUNT(*) AS "Registrierte Mitglieder" FROM users
```

1. Ermitle mithilfe obigen Befehls, wie viele Mitglieder dein InstaHub hat.

#### GROUP BY

Wenn du nicht die gesamte Menge aller Mitglieder wissen möchtest, sondern die Anzahl etwas differenzierter haben möchtest, kannst du auch die Einträge bezogen auf eine gleiche Eigenschaft auszählen lassen:

```sql
SELECT city, COUNT(*) AS "Mitglieder je Stadt" FROM users GROUP BY city
```

1. Gib die Mitglieder je Stadt aus
2. Prüfe, ob es Mitglieder gibt, die am gleichen Tag geboren wurden.

#### Übungen

1. Gib die Mitgliedernamen entgegen der alphabetischen Reihenfolge aus
2. Gib die Namen der 3 Städte mit den meisten Mitgliedern aus.
3. Gib an aus wie vielen Ländern die Mitglieder kommen.

#### Expertenaufgabe

Hilf mit den Unterricht zu gestalten und [reiche eigene Fragen ein](https://goo.gl/forms/xy29cLImYj4jrpFy1).

### Selektion (Auswahl)

*Hinweis: Einige Fragen lassen sich nicht unmittelbar als SQL-Satz umbauen. Schau daher in der vollständigen Tabelle nach, wie die Informationen abgelegt sind.*

1. Wähle alle Einträge aus der Tabelle users aus, bei denen das Geschlecht (gender) weiblich (female) ist.
2. Wähle alle Mitglieder aus Deutschland aus.
3. Wähle alle Mitglieder aus, die in Leipzig wohnen.
4. Zeige nur *Emily Faber* an.
5. Wähle alle MItglieder mit der Rolle *user* aus.
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
4. Welche Mitglieder haben keine Emailadresse bei *instahub.app*?

#### Übungen

1. Gib die Namen aller Berliner Mitglieder aus.
2. Wie viele Personen wohnen in München
3. Gib die Nutzernamen aller Mitglieder an, die kleiner sind als du.
4. Gib die Stadtnamen aus, wo die meisten Mitglieder mit einem *a* im Namen wohnen.

#### Expertenaufabe

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

#### Expertenaufabe

Hilf mit den Unterricht zu gestalten und [reiche eigene Fragen ein](https://goo.gl/forms/xy29cLImYj4jrpFy1).



#### Wechselwirkungen von Einschränkungen

Gesucht werden alle Berliner:

```sql
SELECT username, name FROM users where city = "Berlin" AND gender = "male" OR gender = "female"
```

1. Führe den Befehl aus und prüfe das Ergebnis, indem die die Abfrage ohne explizite Ausführung des Geschlechts erneut ausführst.

Wenn du mehr als 2 Bedingungen hast ist es manchmal sinnvoll anzugeben, welche zuerst betrachtet werden müssen. Dazu kannst du Klammern verwenden:

```sql
SELECT username, name FROM users where city = "Berlin" AND (gender = "male" OR gender = "female")
```

2. Gib alle Männer aus Leipzig aus, die kleiner als 165 Zentimeter sind.
3. Die Bundeswehr sucht Rekruten gib die Namen alle Männer über 165cm und alle Frauen über 160cm aus.
4. Erna sucht eine Bekannte aus Berlin. Ihr Vorname war entweder *Bea* oder *Naomi*.

## Verändern von Daten I

### INSERT
1. Füge zwei ausgedachte Datensätze nach folgendem Muster ein: 

```sql
INSERT INTO users (username, email, password, name, bio, gender, birthday, city, country, centimeters, avatar, role, is_active, remember_token, created_at, updated_at) 
VALUES ('guenther37', 'guenther@instahub.app', '12345', 'Günther Müller', 'Günther mag Kartoffelsalat.', 'male', '2006-06-06 00:00:00', 'Leipzig', 'Deutschland', '173', 'avatar.png', 'user', '0', NULL, now(), now());
```
2.  Was bedeutet `now()`?

Expertenaufgabe: Wieso wird in dem obigen SQL-Befehl die ID nicht mit übergeben?

3.  Welche ID hat Ihr neuer Datensatz? Auf welche Arten könne diese ermitteln?
4.  Füge den User *Mila Bach* aus Hamburg hinzu. Du kannst dir die fehlenden Attribute selbst ausdenken. 
5.  Registriere dich in deinem InstaHub ([https://*hub*.instahub.org/](#)) als neues Mitglied. 
6.  Logge dich anschließend wieder als *admin* ein und prüfe die ID des neuen Mitglieds. 

### UPDATE
1.  Setze die Körpergröße von allen Mitgliedern auf 160.
2.  Ändere in dem zuletzt hinzugefügten Eintrag die Stadt auf Dresden. (Du kannst die ID mit einem extra SELECT-Befehl ermitteln.)
3.  Ersetze den Begriff "Germany" überall durch "Deutschland"
4.  Ersetze die Körpergröße mit dem Wert `#!sql FLOOR(RAND()*45)+150`
  1. Was hat dieser Befehl bewirkt?
  2. Recherschiere was die Befehle [FLOOR](https://www.w3schools.com/sql/func_mysql_floor.asp) und [RAND](https://www.w3schools.com/sql/func_sqlserver_rand.asp) bewirken.

### DELETE
1. Lösche den vorletzten Datensatz.


## ERM
Zeichne das Entity-Relationship-Modell deines InstaHubs

## Tabelle User

Bereits vor deinem ersten Login in deinem InstaHub haben sich 196 User registriert!

Fügst du über einen SQL-Befehl einen neuen User hinzu, kann sich dieser nicht einloggen, da das Passwort gesichert in der Datenbank abgespeichert werden muss und nicht im Klartext verglichen werden kann.

Um Passwörter im Klartext zu hashen, kannst du in deinem Browser die folgende Adresse aufrufen:

[https://*hub*.instahub.org/dba/cryptPWs](#)

## Tabelle Photo

```sql
CREATE TABLE `photos` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `photos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1402;
  
ALTER TABLE `photos`
  ADD CONSTRAINT `photos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
```

1. Verstehe den obigen SQL-Befehl.
2. Führe den obigen SQL-Befehl aus.

Um die Aktivität deiner Mitglieder zu beschleunigen, kannst du [diesen Datensatz](sql/photos.sql) einfügen.

## Tabelle Tags
```sql
CREATE TABLE `tags` (
  `id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `tags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6869;
  
ALTER TABLE `tags`
  ADD CONSTRAINT `tags_photo_id_foreign` FOREIGN KEY (`photo_id`) REFERENCES `photos` (`id`) ON DELETE CASCADE;
```
1. Verstehe den obigen SQL-Befehl.
2. Führe den obigen SQL-Befehl aus.

Um aus den bestehenden Bildbeschreibungen die Tags zu extrahieren kannst du folgende Webadresse aufrufen: 
[https://*hub*.instahub.org/dba/updateTags](#)

## Tabelle Comments 
```sql
CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `body` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=953;
  
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_photo_id_foreign` FOREIGN KEY (`photo_id`) REFERENCES `photos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
```
1. Verstehe den obigen SQL-Befehl.
2. Führe den obigen SQL-Befehl aus.

Um die Aktivität deiner Mitglieder zu beschleunigen, kannst du [diesen Datensatz](sql/comments.sql) einfügen.

## Tabelle Follower
```sql
CREATE TABLE `follows` (
  `id` int(10) UNSIGNED NOT NULL,
  `following_id` int(10) UNSIGNED NOT NULL,
  `follower_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `follows`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1500;
  
ALTER TABLE `follows`
  ADD CONSTRAINT `follows_follower_id_foreign` FOREIGN KEY (`follower_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `follows_following_id_foreign` FOREIGN KEY (`following_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
```
1. Verstehe den obigen SQL-Befehl.
2. Führe den obigen SQL-Befehl aus.

Um die Aktivität deiner Mitglieder zu beschleunigen, kannst du [diesen Datensatz](sql/follows.sql) einfügen.

## Tabelle Likes
```sql
CREATE TABLE `likes` (
  `id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `likes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4999;
  
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_photo_id_foreign` FOREIGN KEY (`photo_id`) REFERENCES `photos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `likes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
```
1. Verstehe den obigen SQL-Befehl.
2. Führe den obigen SQL-Befehl aus.

Um die Aktivität deiner Mitglieder zu beschleunigen, kannst du [diesen Datensatz](sql/likes.sql) einfügen.

## Modellieren von Daten

### Zootiere

Erstellen Sie für folgendes Szenario ein Entity-Relationship-Modell:  

In einem Zoo leben verschiedene Tierarten. Jede Tierart ist in einem eigenen Gehege untergebracht. Dabei kümmern sich verschiedene Tierpfleger um teilweise mehrere verschiedene Tierarten. Eine Tierart, wie etwa Elefanten, werden von mehreren Tierpflegern betreut. Jede Tierart ist einem Kontinent zugeordnet, wodurch Themenführungen ermöglicht werden. 

1. Wie lautet der SQL Befehl um alle Tierarten anzuzeigen.
2. Wie lautet der SQL Befehl um alle Tierarten des Zoodirektors anzuzeigen?

Zu  jeder Tierart gehören einzelne Exemplare dieser Art. Ergänzen Sie die einzelnen Tierexemplare und fügen für diese sinnvolle Attribute hinzu. 

1. Während Pinguine nur 25 Jahre werden Elefanten bis 60 Jahre alt. Daher soll für jedes Tier das Geburts- und Sterbedatum festgehalten werden
2. Wie  kann sich ein Pfleger alle aktuell lebenden Tiere ausgeben lassen? 
   ("<" bedeutet kleiner als und ">" größer als. Ein Datum wird so angegeben '2011/02/25')
3. Wie findet der Direkt heraus, welche Tiere letztes Jahr gestorben sind?

Manche  Tierpfleger gehen sehr brutal mit Ihren Tieren um. Es ist schon vorgekommen, dass ein Pfleger auf ein Kücken getreten ist. Der Direktor möchte nun herausfinden, bei welchem Tierpfleger die meisten Tiere sterben und diesen entlassen. 

1. Wie lautet der SQL Ausdruck dazu?
2. Warum ist die Idee des Zoodirektors nicht zu Ende gedacht?

### Der Bibliothekar

Sie sind in einer dunklen Gasse falsch abgebogen und finden sich unversehens in einer großen Halle voller Bücher wieder. Gerade als Sie beschließen zu gehen erhebt sich hinter einem Stapel veralteter Lexika ein alter Mann und blickt Sie mit traurigen, grauen Augen an. Schon lang ist es her, dass sich ein Besucher in seine Bibliothek verirrt hat. Mit reißender Stimme bittet er Sie ihn bei seinem ERM zu helfen, damit er bald die Bibliothek für junge Menschen erschließen kann.

Unter gelegentlichen Schnaufen und Glucksen berichtet er seine Anforderungen an die Datenbank:

*Ein jedes Buch hat seinen Platz in einem Regal. Dabei wird der Platz in dem Regal durch das Regalbrett genauer bestimmt. Alle Regale befinden sich in diesem Saal. Die Bücher werden verschiedenen Genres zugeordnet. Beispielsweise ist das Werk "Der Frosch zu Gast bei Helmut" nicht nur eine Komödie, sondern auch ein Krimi.* 

1. Erstellen Sie für obige Anforderungen das ERM

2. Ergänzen Sie alle Primär- und Fremdschlüssel an der richtigen Stelle.

3. Fügen Sie dem Büchern weitere sinnvolle Attribute hinzu.

4. Erstellen Sie nach Ihrem ERM Modell folgende SQL-Sätze:

5. 1. Erstellen Sie für alle CRUD-Operatoren auf die Tabelle Bücher je ein Beispiel. 
      Dies können Sie sich entsprechend Ihres ERM frei aussuchen.
   2. Geben Sie alle Bücher aus.
   3. Geben Sie alle Bücher mit dem Titel "Der Frosch zu Gast bei Helmut" aus
   4. Finden Sie alle Bücher die im Titel "Helmut" tragen.
   5. Zählen Sie alle Bücher 

6. Sie beschleicht ein schrecklicher Verdacht. Hinter einem verschlissenen Vorhang befindet sich eine weitere Kammer mit Büchern. Bücher von epochaler Bedeutung für die Zukunft des europäischen Schmiedehandwerks. Passen Sie Ihr ERM so an, dass statt dem einzelnen Saal auch die Kammer mit erfasst werden kann.

### Das Stahlwerk der Postapokalypse

Orientierungslos wachen Sie in einer Wüste aus Metall auf. Die Luft ist eiskalt klar. Der Boden besteht aus rostenden Stahl. Um Sie herum laufen orientierungslose Menschen, welche voller Panik versuchen kleine Stahlplatten und Stangen gegen belegte Butterbrote zu tauschen. Sie schleppen sich zu einer großen Halle aus der das Dröhnen von Hämmern zu vernehmen ist. Man erzählt Ihnen, dass dies vor dem Krieg das größte Stahlwerk der Welt war, aber bei einem Bombenangriff das vollständige ERM vernichtet wurde. Nun ist die Werksleitung außer Stande die Mitarbeiter in der Kantine mit Wursbroten zu versorgen, da die Produktion am Boden liegt.

Helfen Sie dem Werksleiter ein erstes ERM für die die Werkshalle "Stahlfuchs" zu entwerfen:

*In der Halle "Stahlfuchs" haben wir mehrere Öfen. An jeden Ofen arbeitet genau ein Heizer. Mehrere Träger bringen Brennstäbe zum Beheizen der verschiedenen Öfen. Jeder Heizer und Träger hat eine Personalnummer. Jeder Ofen ist über seinen Standort genau bestimmt.* 

1. Erstellen Sie für o
2. bige Anforderungen das ERM
3. Ergänzen Sie alle Primär- und Sekundärschlüssel an der richtigen Stelle.
4. Fügen Sie dem Träger weitere sinnvolle Attribute hinzu.
5. Erstellen Sie nach Ihrem ERM Modell folgende SQL-Sätze:
6. 1. Erstellen Sie für alle CRUD-Operatoren auf die Tabelle Träger je ein 
      Beispiel. Dies können Sie sich entsprechend Ihres ERM frei aussuchen.
   2. Geben Sie alle Träger aus.
   3. Geben Sie die Träger aus, wessen Personalnummer mit 5 beginnt. 
   4. Zählen Sie alle Heizer 
7. Zum Danke erhalten Sie ein Butterbrot und Pfefferminztee und ziehen sich für eine Pause auf das Dach der Halle zurück. Voller Stauen erblicken Sie, dass weitere Hallen bis an den Horizont reichen  Passen Sie Ihr ERM so an, dass statt der Halle Stahlfuchs die scheinbar unendlich vielen Hallen mit erfasst werden können.

## Auswerten von Daten II

### INNER JOIN

1. Liste die Links zu allen Photos von *samina369* auf.
2. Liste alle Folower von *luis52* auf.
3. Gib aus, wen *mala452* folgt.
4. Finde alle Kommentare aus München.
5. Gib die Benutzernamen aller Mitglieder aus, deren Beschreibung den Hashtag *#meer* enthält.

Expertenaufgabe: Ändere den Befehl der vorherigen Aufgabe so, dass der hashtag aus der Tabelle *tags* genommen wird.

6. Erstelle eine Liste, sie soll in absteigender Reihenfolge die Nutzer mit den meisten Fotos beeinhalten. 
7. Gib die 10 beliebtesten Photos aus.
8. Der Verfassungsschutz bittet um Mithilfe: Wer hat Fotos mit Zitaten von *Adolf Hitler* zitiert? 

### LEFT JOIN ON

1. Lara würde gern allen Mitgliedern eine Mail schreiben, welche noch nie ein Phot kommentiert haben. Suche deren Mail-Adresse heraus.



### Übungen

1. Erstelle eine Liste, wo für jedes Leipziger Mitglied die Anzahl seiner Fotos aufgeführt ist.

### Expertenaufgabe

Hilf mit den Unterricht zu gestalten und [reiche eigene Fragen ein](https://goo.gl/forms/xy29cLImYj4jrpFy1).

## Verändern von Daten II

### INSERT

Der Nutzer mit den meisten kommentaren soll für sein letztes Bild einen Kommentar mit *#bestuserever* erhalten.

### UPDATE

Nutzer, die ihre *Boote* fotografiert haben, möchten im Rahmen einer politischen Kundgebung ihre Heimatstadt durch *"auf hoher See"* ersetzen lassen.

Aktualisiere den Slogan (*bio*) aller Leipziger Mitglieder, die noch keinen Slogan haben auf *"Meine Bilder auf InstaHub spiegeln die Seele der persitenten Schönheit im Spiegel der Güte wieder.*" 

### DELETE

In der Vergangenheit wurden aus *Oberreichenbach* wiederholt Photos von strenggeheimen Untergrundbibliotheken veröffentlicht. Entferne alle Photos die von Nutzern aus *Oberreichenbach* hochgeladen wurden.

### Expertenaufgabe

Hilf mit den Unterricht zu gestalten und [reiche eigene Fragen ein](https://goo.gl/forms/xy29cLImYj4jrpFy1).


## Komplexaufgaben

### Ein eigener Webshop

Ihre Schülervertretung druckt eigene T-Shirts, welche mitlerweile deutschlandweit sehr gefragt sind. Um noch mehr Schüler und Lehrer mit T-Shirts, wie "Schule ist do....ch toll", "10/8 Lehrer haben Probleme in Mathe" und "Ich bin Leerer" zu erfreuen, wollen Sie einen eigenen Shop entwickeln.

1. Hast du schon einmal online eingekauft? Öffne deinen Lieblingsshop.
2. Versuche anhand der Webseite die darunterliegende Datenbank abzuleiten. Dies ist sehr, sehr schwer, da die Datenbank vermutlich äußerst groß ist. Es reicht, wenn du einige Bereiche aufnimmst. 
3. Zeichne die Datenbank als Entity-Relationship-Modell. 
4. Notiere für jede CRUD-Operation je einen SQL-Ausdruck für eine von dir ausgewählte Tabelle.