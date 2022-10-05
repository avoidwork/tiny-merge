import assert from "node:assert";
import {merge} from "../dist/tiny-merge.esm.js";

describe("Testing functionality", function () {
	it("simple Objects", function () {
		this.a = {};
		this.b = {c: true};
		assert.equal(merge(this.a, this.b).c, true, "Should be `true`");
		assert.equal(this.a.c, true, "Should be `true`");
	});

	it("complex Objects", function () {
		this.a = {c: {d: [], e: {f: true}}};
		this.b = {c: {d: [{g: "Hello World"}], e: {f: false, h: true}}};
		merge(this.a, this.b);
		assert.equal(this.a.c.d.length, 1, "Should be `1`");
		assert.equal(this.a.c.e.f, false, "Should be `false`");
		assert.equal(this.a.c.e.h, true, "Should be `true`");
	});

	it("simple Array", function () {
		this.a = [];
		this.b = [true];
		assert.equal(merge(this.a, this.b).length, 1, "Should be `1`");
		assert.equal(this.a[0], true, "Should be `true`");
	});
});
