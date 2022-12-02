# data-deposits

## Description
A crystal gallery online webpage that displays the different gems we have in our gallery as well as their relevant information. Upon opening the page, the user will be able to view the crystals in our gallery and have the option of signing up. After logging in, users will have the option to add crystals of their own.

* As a user, I want to see a unique gallery of a range of gems varying in rarity.

* As a user, I want to be able to sign up and log into an account.

* As a registered user, I want to be able to add my own crystals crystals.

## Application Preview
![A preview of the application](https://github.com/Hrzonca/data-deposits/blob/main/images/preview.JPG)

## Link to Deployed Application (Heroku)
The application can be found deployed via [this link](https://fierce-badlands-78414.herokuapp.com/)

## Installation
***
How to run the application locally:
```
$ git clone https://example.com
$ cd ../path/to/the/file
$ npm install
mysql -u root -p
source db/schema.sql;
quit
node seeds/seed.js
$ npm start
```

## Specifications

* Each Crystal in the database has the following specifications:

 * `Crystal`

    * `name`

    * `description`

    * `price`

    * `hardness`

    * `date_created`

    * `category_id`

    * `user_id`



## Primary Technologies Used:
* JavaScript
* CSS
* Node.js
* MySQL
* Handlebars.js
* Bootstrap
* Sequelize
* Express.js
* Dayjs
