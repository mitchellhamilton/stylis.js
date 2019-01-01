import {
	COMMENT,
	DECLARATION,
	RULE,
	MEDIA,
	SUPPORTS,
	KEYFRAMES
} from "./Constant.js";
import { vendor } from "./Library/Vendor.js";

/**
 * @param {Array<Object>} children
 * @return {string}
 */
function stringifyNodes(children) {
	let ret = "";
	for (let i = 0; i < children.length; i++) {
		ret += stringify(children[i]);
	}
	return ret;
}

/**
 * @param {Object} node
 * @return {string}
 */
export function stringify(node) {
	switch (node.type) {
		case DECLARATION: {
			let val = node.props + ":" + node.children;
			return vendor(val, node.props.length) + ";";
		}
		case RULE: {
			let selector = node.props.join(",");
			let children = stringifyNodes(node.children);
			if (children === "") {
				return "";
			}
			return selector + "{" + children + "}";
		}
		case KEYFRAMES:
		case MEDIA:
		case SUPPORTS: {
			let selector = node.type + " " + node.props.join(" and ");
			let children = stringifyNodes(node.children);
			if (children === "") {
				return "";
			}
			return selector + "{" + children + "}";
		}
		case COMMENT: {
			return "";
		}
		default: {
			console.error(node);
			throw new Error("Could not stringify node with type: " + node.type);
		}
	}
}
