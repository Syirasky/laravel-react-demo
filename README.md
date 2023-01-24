# Laravel + React Demo

This application is a simple demo for the react.js (javascript) as front end and Laravel framework (PHP) as backend.
For the current setup, database used is mysqlite.

## App Specifications
Laravel Framework 8.83.27
PHP 7.3 
React.js 17.0.2

## Requirements
PHP 7.3 and above
Composer 2.0 and above
NPM 8

## How to setup / install

 1. Clone this repo.
`git clone https://github.com/Syirasky/laravel-react-demo.git`
 2. Enter the cloned repo directory
`cd laravel-react-demo`
 3. Run `composer install` to install all the required dependency for Laravel
 4. Run `npm install` to install all the required dependency for React.js
 5. Configure the .env file to use sqlite (see below for the example .env). Just set the database config as follows,
 ```
 DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE='../database/database.sqlite'
DB_USERNAME=
DB_PASSWORD=
```
 7. Run `php artisan migrate`
 8. Run `php artisan serve`
 9. If you have error regarding the Laravel key, just click generate and then re-run `php artisan serve`
 10. If you have error regarding the sqlite database not found, edit the .env file and change the database to `../database/database.sqlite` 

## Screenshots
Front page, list of cards. 
![](https://user-images.githubusercontent.com/23252851/214316563-e8d88a74-2fb1-4e94-b292-347fd4a89a11.png)

Assigning cards to player page.
![image](https://user-images.githubusercontent.com/23252851/214316949-34fd3636-8e1f-4894-ae72-f70cde6688ed.png)

Assigned cards details
![image](https://user-images.githubusercontent.com/23252851/214317495-afaf7760-1bd3-4b3e-b72e-1a610dc62e87.png)