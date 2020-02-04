const saludar = require("../app");

it("La funcion saluda", () => {
  expect(saludar("Platzi")).toBe("Hola Platzi");
});
