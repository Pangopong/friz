# Frizeria Mica
www.frizeriamica.ro, a website for a local barber shop with a custom booking application and database.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Dependencies
`npm install`<br>
`bower install`<br>
"angular": "~1.5.8",<br>
    "bootstrap": "^3.2.0",<br>
    "angular-animate": "~1.5.8",<br>
    "angular-aria": "~1.5.8",<br>
    "angular-cookies": "~1.5.8",<br>
    "angular-messages": "~1.5.8",<br>
    "angular-resource": "~1.5.8",<br>
    "angular-route": "~1.5.8",<br>
    "angular-sanitize": "~1.5.8",<br>
    "angular-touch": "~1.5.8",<br>
    "aos": "^2.1.1",<br>
    "jquery.stellar": "^0.6.2",<br>
    "fullcalendar": "^3.0.1"<br>


## Build & development
Run node hibrid.js to start the backend server <br>
Run `grunt` for building and `grunt serve` for preview.

## Hibrid.js
An express server that listens on port `3000` for frontend requests and connects to a mongodb instance open on port 27017 trough the mongodb javascript API.
## MongoDB
Run `mongod` with default settings.

## Testing

Running `grunt test` will run the unit tests with karma.
