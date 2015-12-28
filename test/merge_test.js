var path = require("path"),
	merge = require(path.join(__dirname, "..", "lib", "tiny-merge.js"));

exports["simple Objects"] = {
	setUp: function (done) {
		this.a = {};
		this.b = {c: true};
		done();
	},
	test: function (test) {
		test.expect(2);
		test.equal(merge(this.a, this.b).c, true, "Should be `true`");
		test.equal(this.a.c, true, "Should be `true`");
		test.done();
	}
};

exports["complex Objects"] = {
	setUp: function (done) {
		this.a = {c: {d: [], e: {f: true}}};
		this.b = {c: {d: [{g: "Hello World"}], e: {f: false, h: true}}};
		done();
	},
	test: function (test) {
		merge(this.a, this.b);
		test.expect(3);
		test.equal(this.a.c.d.length, 1, "Should be `1`");
		test.equal(this.a.c.e.f, false, "Should be `false`");
		test.equal(this.a.c.e.h, true, "Should be `true`");
		test.done();
	}
};

exports["simple Array"] = {
	setUp: function (done) {
		this.a = [];
		this.b = [true];
		done();
	},
	test: function (test) {
		test.expect(2);
		test.equal(merge(this.a, this.b).length, 1, "Should be `1`");
		test.equal(this.a[0], true, "Should be `true`");
		test.done();
	}
};
