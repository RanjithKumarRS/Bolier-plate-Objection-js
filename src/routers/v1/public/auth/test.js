import { request, use, expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../../../../server";

use(chaiHttp);

 
describe("POST /api/v1/auth/user_sync", () => {
  describe("#200-SUCCESS", () => {
    it("should create a new user", (done) => {
      request(app)
        .post("/api/v1/auth/user_sync")
        .send({
          name: "test_user",
          email: "user@example.com",
          mobile_no: "9876543210",
          mobile_no_country_code: "+91",
          sub_id: "djashfksdafbjhcsndzxvc"
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });
  describe("#400-VALIDATION_ERROR", () => {
    it("Validated the request if any request mismatch form schema then throw 400", (done) => {
      request(app)
        .post("/api/v1/auth/user_sync")
        .send({
          name: "test_user",
          email: "user@example.com",
          mobile_no_country_code: "+91",
          sub_id: "",
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });
});