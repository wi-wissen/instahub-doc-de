# Tabellen

Zu Beginn gibt es nur die `user`-Tabelle, sodass InstaHub wie ein Telefonbuch wirkt. Dies lässt sich leicht an die eigenen Bedürfnisse anpassen. Denn jede neue Tabelle schaltet neue Funktionen frei. Hier finden Sie alle SQL-Befehle zum Erstellen dieser Tabellen. Alternativ können Sie diese als Lehrkraft auch über Ihr Dashboard anlegen.

## Tabelle Photo

```sql
CREATE TABLE `photos` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(10) UNSIGNED NOT NULL,
  `description` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
)
```

Dummydaten mit <a href="/sql/photos.sql" download>diesem Datensatz</a> importieren.

## Tabelle Tags (Schlagworte mit `#` beginnend)

Diese Tabelle dient nur der Normalisierung. Tags werden davor schon mit dem `LIKE`-Befehl in der Photo-Tabelle gesucht.

```sql
CREATE TABLE `tags` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (`photo_id`) REFERENCES `photos`(`id`) ON DELETE CASCADE
)
```

Um aus den bestehenden Bildbeschreibungen die Tags zu extrahieren kannst du folgende Webadresse aufrufen: [https://*hub*.instahub.org/dba/updateTags](#)

## Tabelle Comments (Kommentare)

```sql
CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `body` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`photo_id`) REFERENCES `photos`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) 
```

Dummydaten mit <a href="/sql/comments.sql" download>diesem Datensatz</a> einfügen.

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

Dummydaten mit <a href="/sql/follows.sql" download>diesem Datensatz</a> einfügen.

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

Dummydaten mit <a href="/sql/likes.sql" download>diesem Datensatz</a> einfügen.

## Tabelle Analytics (Tracking)

```sql
CREATE TABLE `analytics` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) NOT NULL,
  `device` varchar(255) NOT NULL,
  `brand_family` varchar(255) NOT NULL,
  `brand_model` varchar(255) NOT NULL,
  `browser_family` varchar(255) NOT NULL,
  `browser_version` varchar(255) NOT NULL,
  `platform_family` varchar(255) NOT NULL,
  `platform_version` varchar(255) NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`photo_id`) REFERENCES `photos`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE  
)
```

Um die Tabelle zu füllen, müssen einzelne Bilder betrachtet werden. Alternativ ist diese Funktion auch auf [public.instahub.org](https://public.instahub.org/) aktiv und beinhaltet viele Datensätze.

## Tabelle Ads (Werbung)

```sql
CREATE TABLE `ads` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `priority` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` enum('banner','photo') NOT NULL,
  `url` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `query` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)  
)
```

Hier sind für den Beginn zwei Beispiele:

```sql
INSERT INTO `ads` (`id`, `priority`, `name`, `type`, `url`, `img`, `query`, `created_at`, `updated_at`) VALUES
(7, 99, 'andromeda ', 'photo', '/noad', '/img/ad/smoothie.jpg', 'SELECT id FROM users WHERE id=$user', '2020-05-15 21:58:59', '2020-05-15 21:58:59'),
(8, 99, 'burgerhaus', 'banner', '/noad', '/img/ad/brokkolie.jpg', 'SELECT id FROM photos WHERE id=$photo', '2020-05-15 21:58:59', '2020-05-15 21:58:59');
```

## Tabelle User (Benutzer:innen)

Diese Tabelle ist in jedem neuen Hub vorhanden und muss nicht angelegt werden. Sie ist hier dokumentiert, falls eine lokale Datenbank gebaut werden soll.

```sql
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `gender` enum('male','female','diverse') DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `centimeters` int(11) DEFAULT NULL,
  `avatar` varchar(255) NOT NULL DEFAULT 'avatar.png',
  `role` enum('user','dba','teacher','admin') NOT NULL DEFAULT 'user',
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
);
```

Die Dummydaten sind in <a href="/sql/users.sql" download>diesem Datensatz</a> enthalten. Wichtig ist, dass hier das Admin-Nutzerkonto nicht dabei ist, da dies beim Registrieren angelegt wird.
