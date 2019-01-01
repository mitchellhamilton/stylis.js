import { compile } from "./src/Compile.js";
import { stringify } from "./src/Stringify.js";

let css = ([styles]) => {
	let ast = compile(".css-hash {" + styles + "}");
	return [ast, ast.map(stringify)];
};

let styles = css`
	color: hotpink;
	&:hover {
		display: flex;
		color: yellow;
		::before {
			display: block;
		}
	}
`;

console.log(...styles);
