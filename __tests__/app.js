const request = require('supertest')
const app = require('../app')

jest.mock('../models/cat')

describe("App", ()=>{
  it("Tests the root path", ()=>{
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200)
    })
  })
  it("Lists cats", ()=>{
    return request(app).get("/cats").then(response =>{
      expect(response.statusCode).toBe(200)
    })
  })
  it("Creates cats", ()=>{
  return request(app)
    .post("/cats")
    .send({
      name: 'Paws',
      age: 4,
      city: 'Feral City',
      about_me: 'String, please. Tail, check. Four paws, check. I am alive and kicking!',
      looking_for: 'No tail? No problem. Likes string, too. Less than four paws, whatever, we can hang. Alive and not dead.'
    })
    .then(response => {
      expect(response.statusCode).toBe(201)
      expect(response.body.cat.name).toBe('Paws')
      expect(response.body.cat.age).toBe(4)
      expect(response.body.cat.city).toBe('Feral City')
      expect(response.body.cat.about_me).toBe('String, please. Tail, check. Four paws, check. I am alive and kicking!')
      expect(response.body.cat.looking_for).toBe('No tail? No problem. Likes string, too. Less than four paws, whatever, we can hang. Alive and not dead.')
    })
  })
})

it("Validates name when creating cat", ()=>{
  return request(app)
    .post("/cats")
    .send({
      age: 2,
      city: "Food!",
      about_me: "Bossy",
      looking_for: "Snacks"
    })
    .then(response =>{
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('name')
      expect(error.msg).toBe('Is required')
    })
})

it("Validates age when creating cat", ()=>{
  return request(app)
    .post("/cats")
    .send({
      name: "Two",
      city: "Food!",
      about_me: "Bossy",
      looking_for: "Snacks"
    })
    .then(response =>{
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('age')
      expect(error.msg).toBe('Is required')
    })
})

it("Validates city when creating cat", ()=>{
  return request(app)
    .post("/cats")
    .send({
      name: "Tu",
      age: 2,
      about_me: "Bossy",
      looking_for: "Snacks"
    })
    .then(response =>{
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('city')
      expect(error.msg).toBe('Is required')
    })
})

it("Validates about me when creating cat", ()=>{
  return request(app)
    .post("/cats")
    .send({
      name: "Ustedes",
      age: 2,
      city: "Food!",
      looking_for: "Snacks"
    })
    .then(response =>{
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('about_me')
      expect(error.msg).toBe('Is required')
    })
})

it("Validates looking for when creating cat", ()=>{
  return request(app)
    .post("/cats")
    .send({
      name: "AaronsBeanBag",
      age: 2,
      city: "Food!",
      about_me: "Bossy"
    })
    .then(response =>{
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('looking_for')
      expect(error.msg).toBe('Is required')
    })
})
