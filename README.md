# exercise-whois-search
Whois search


## Task:

Make a simple app that has a domain name search. The user inputs a domain name for instance google.com and the app returns the whois for that domain. You can make a backend doing the whois search with node.js and frontend with react. You could save the search history in Mongodb.

## How to run:
Get the source code

Add MongoDB Connection String to config.json
```
{ 
    "mongoConnectionString" : "[ MONGO CONNECTION STRING ]" 
}
```


Execute:

```
npm install
node .
```

open 127.0.0.1:8080

## Possible improvements
* Improve UI
* Add statistics for requests
* Protect API
