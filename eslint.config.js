import base from "./config/base.js";
import next from "./config/next.js";
import react from "./config/react.js";

export default [
	{
		ignores: ["./next/**"],
	},
	...base,
	...react,
	...next,
	{
		rules: {
			"@typescript-eslint/ban-ts-comment": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-non-null-assertion": "warn",
			"@typescript-eslint/consistent-type-definitions": "warn",
			"@typescript-eslint/no-unnecessary-condition": "off",
			"@typescript-eslint/prefer-nullish-coalescing": "off",
			"@typescript-eslint/no-unsafe-argument": "off",
			"@typescript-eslint/no-unsafe-return": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/require-await": "warn",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-floating-promises": "warn",
			"@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-empty-function": "warn",
			"@typescript-eslint/dot-notation": "warn",
			"no-console": "error",
			"no-else-return": "error",
			"no-sequences": "error",
			"no-unused-expressions": "error",
		},
	},
];
