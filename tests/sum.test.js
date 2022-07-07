import { suma } from "../src/suma";

it("suma con 2 y 2 debe dar 4", () => {
  expect(suma(2, 2)).toBe(4);
});

it("suma con 2 y 3 debe dar 5", () => {
  expect(suma(2, 3)).toBe(5);
});
