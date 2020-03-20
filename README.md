express-mongoose-docs
=====================

This module will take away the pain of writing API and Data Model documentation for your Express & Mongoose based REST API.
It auto-generates API documentation from the code on runtime so the documentation always stays up to date.


Installation
--------------

* Step 1 : Install

```sh
npm install express-mongoose-docs
```

* Step 2 : Configure

Add these lines to your app.js file

```sh
var docs = require("express-mongoose-docs");
```

Make sure the following line comes after all express middleware such as app.use(express.bodyParser());

```sh
docs(app, mongoose, router, baseUrl); // 2nd param is optional
```
Update:

That's it. The Docs web page should be accessible at *baseUrl*/apiDocs // baseUrl from the parameters

Example: http://localhost:5000/api/customName/apiDocs

Screenshots
===========

![routes](https://raw.github.com/jennypavlova/express-mongoose-docs/master/screenshots/screenshot1.png "Routes")

![data-model](https://raw.github.com/jennypavlova/express-mongoose-docs/master/screenshots/screenshot2.png "Data Model")



[repository](https://github.com/jennypavlova/express-mongoose-docs)
Forked from [repository](https://github.com/jennypavlova/express-mongoose-docs)

