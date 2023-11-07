let app = require("../src/app")

let supertest = require("supertest")

let request = supertest(app)

describe("",()=>{

    test("Deve responder na porta 3131",async ()=>{
        return request.get("/").then(res => expect(res.statusCode).toEqual(200))

    })
})