import nextPlugin from "@next/eslint-plugin-next";

/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		files: ["**/*.ts", "**/*.tsx"],
		plugins: {
			"@next/next": nextPlugin,
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs["core-web-vitals"].rules,
			"@next/next/no-duplicate-head": "off",
			"@next/next/no-html-link-for-pages": "error",
			"@next/next/no-img-element": "error",
			"react-hooks/exhaustive-deps": "off",
		},
	},
];
