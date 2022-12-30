require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const DataController = require("../src/interfaces/controllers/data.controller");
const dataDb = new DataController();

describe("connection", () => {
  beforeAll(async () => {
    await mysql.createPool({
      host: process.env.HOST,
      user: process.env.USER,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
    });
  });
    
  test("Get All cities", async () => {
    const cities = await dataDb.getAllCities();
    expect(cities).not.toBe(null);
  });

  test("Get All cities", async () => {
    const cities = await dataDb.getAllCities();
    expect(cities).not.toBe(null);
  });

}); 

