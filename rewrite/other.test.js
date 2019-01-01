const { vendor, hash } = require("./dist/stylis.cjs");

test("works", () => {
	console.log(vendor("flex-direction:row", "flex-direction".length));
	console.log(hash("align-items", 4, "align-items".length));
});
