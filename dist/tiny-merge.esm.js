/**
 * tiny-merge
 *
 * @copyright 2022 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 2.0.0
 */
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
}export{merge};