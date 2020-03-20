/**
 * User: Nabeel
 * Date: 4/1/14
 * Time: 7:25 PM
 */

const express = require('express');
const mongoose = require('mongoose');
const request = require('supertest');
const should = require('should');
const docs = require("../index.js");
const router = express.Router()
const baseUrl = 'api/'

const app = express();
app.use(router);
router
docs(app, mongoose, router, baseUrl);

const baseURL = "http://localhost:5000";

before((done) => {

    app.use('/v1', () => {});
    // Add sample routes and start express app
    app.get("/route1", () => {});

    app.get("/v1/route2", () => {});

    app.listen(5000, done);
});

before((done) => {

    // Add sample schemas to mongoose
    const NestedSchema = new mongoose.Schema({
        prop1: Number
    });

    const EntitySchema = new mongoose.Schema({
        prop1: {type: String, required: true, enum: ["123"]},
        prop2: [NestedSchema]
    });

    mongoose.model("Entity", EntitySchema);
    done();
});

describe("docs", () => {

    it("should return routes", (done) => {
        request(baseURL)
            .get("/api-docs")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);

                res.body.should.have.property("routes");
                res.body.routes.should.be.an.instanceOf(Array).with.length(2);
                res.body.routes[0][1][0].should.have.properties(["method", "path"]);

                done();
            });
    });

    it("should return schemas", (done) => {
        request(baseURL)
            .get("/api-docs")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);

                res.body.should.have.property("schemas");
                const schemas = res.body.schemas;
                schemas.should.be.an.instanceOf(Array).with.length(2);
                schemas[0].should.have.properties(["name", "fields"]);

                const fields = schemas[0].fields;
                fields[0].required.should.be.true;
                fields[0].enumValues.should.be.an.instanceOf(Array);

                done();
            });
    });
});



