import database from 'infra/database.js'
import orchestrator from 'tests/orchestrator';

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await database.query("drop schema public cascade; create schema public;")
})

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST"
  });
  
  const responseBody = await response.json();

  expect(response.status).toBe(201);
  expect(Array.isArray(responseBody)).toBeTruthy();
  expect(responseBody.length).toBeGreaterThan(0)
});

test("GET to /api/v1/status should return 200", async () => {
  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST"
  });
  
  const responseBody2 = await response2.json();

  expect(response2.status).toBe(200);
  expect(Array.isArray(responseBody2)).toBeTruthy();
  expect(responseBody2.length).toBe(0)
});
