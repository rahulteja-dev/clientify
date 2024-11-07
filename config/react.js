import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

export default [
	{
		files: ["**/*.ts", "**/*.tsx"],
		plugins: {
			"react": reactPlugin,
			"react-hooks": hooksPlugin,
		},
		rules: {
			...reactPlugin.configs.recommended["jsx-runtime"],
			...hooksPlugin.configs.recommended.rules,
			"react/jsx-uses-react": "off",
			"react/react-in-jsx-scope": "off",
			"react/prop-types": 2,
			"react/jsx-props-no-spreading": "warn",
			"react/no-array-index-key": "error",
			"react/prefer-stateless-function": "error",
			"react/jsx-no-bind": [
				"error",
				{
					ignoreRefs: true,
					allowArrowFunctions: true,
					allowFunctions: false,
					allowBind: false,
					ignoreDOMComponents: true,
				},
			],
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "error",
		},
		languageOptions: {
			globals: {
				React: "readonly",
			},
		},
	},
];
