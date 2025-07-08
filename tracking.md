# Tracking

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