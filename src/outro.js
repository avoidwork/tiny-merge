// Node, AMD & window supported
if (typeof exports !== "undefined") {
	module.exports = merge;
} else if (typeof define === "function" && define.amd) {
	define(function () {
		return merge;
	});
} else {
	global.merge = merge;
}}(typeof window !== "undefined" ? window : global));
