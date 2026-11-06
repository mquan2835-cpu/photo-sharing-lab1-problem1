import formatDateTime from "./lib/formatDateTime";

test("formats model dates as dd/mm/yyyy, hh:mm:ss", () => {
  expect(formatDateTime("2012-08-30 10:44:23")).toBe("30/08/2012, 10:44:23");
});

test("pads one-digit hours from the model data", () => {
  expect(formatDateTime("2016-01-04 2:00:01")).toBe("04/01/2016, 02:00:01");
});

test("leaves text that is not a date unchanged", () => {
  expect(formatDateTime("not a date")).toBe("not a date");
});
