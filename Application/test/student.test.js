require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const StudentController = require("../src/interfaces/controllers/student.controller");
const studentDb = new StudentController();

describe("connection", () => {
  beforeAll(async () => {
    await mysql.createPool({
      host: process.env.HOST,
      user: process.env.USER,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
    });
  });
    
  test("Get All student", async () => {
    const students = await studentDb.getAll();
    console.log(students);
    expect(students).not.toBe(null);
  });
  
}); 




