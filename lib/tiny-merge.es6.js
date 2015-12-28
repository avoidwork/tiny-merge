/**
 * Easily merge Arrays or Objects on Client or Server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2015
 * @license BSD-3-Clause
 * @link http://avoidwork.github.io/tiny-merge
 * @version 1.0.0
 */
(function (global) {

function merge (a, b) {
	if (a instanceof Object && b instanceof Object) {
		Object.keys(b).forEach(function (i) {
			if (a[i] instanceof Object && b[i] instanceof Object) {
				a[i] = merge(a[i], b[i]);
			} else if (a[i] instanceof Array && b[i] instanceof Array) {
				a[i] = a[i].concat(b[i]);
			} else {
				a[i] = b[i];
			}
		});
	} else if (a instanceof Array && b instanceof Array) {
		a = a.concat(b);
	} else {
		a = b;
	}

	return a;
}

merge.version = "1.0.0";

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
