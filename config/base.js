// @ts-check

import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		files: ["**/*.js", "**/*.ts", "**/*.tsx"],
		settings: {
			react: {
				version: "detect",
			},
		},
		plugins: {
			import: importPlugin,
		},
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.strict,
			...tseslint.configs.strictTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
		],
		rules: {
			"@typescript-eslint/explicit-module-boundary-types": "error",
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{ prefer: "type-imports", fixStyle: "separate-type-imports" },
			],
			"@typescript-eslint/no-unnecessary-condition": [
				"error",
				{
					allowConstantLoopConditions: true,
				},
			],
			"@typescript-eslint/no-misused-promises": [2, { checksVoidReturn: { attributes: false } }],
			"@typescript-eslint/no-non-null-assertion": "error",
			"import/order": ["error", { "newlines-between": "always" }],
			"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
		},
	},
	{
		linterOptions: { reportUnusedDisableDirectives: true },
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.json"],
				tsconfigRootDir: ".",
			},
		},
	},
);
