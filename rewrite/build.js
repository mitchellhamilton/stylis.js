import { compile as parse } from "./src/Compile.js";
import { stringify } from "./src/Stringify.js";

export { vendor } from "./src/Library/Vendor.js";

export { hash } from "./src/Utility.js";

/**
 * @param {string} selector
 * @param {string} styles
 * @return {string}
 */
export let compile = (selector, styles) => {
	let ast = parse(selector + "{" + styles + "}");
	return ast.map(stringify).filter(x => x.length !== 0);
};
