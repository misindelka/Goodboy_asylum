/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['react', '@typescript-eslint', 'prettier'],
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/react',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	env: {
		browser: true,
		jasmine: true,
		jest: true,
		node: true,
	},
	// Airbnb's ESLint config requires this
	parserOptions: {
		project: './tsconfig.json',
	},
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": "off",
		// Include .prettierrc.js rules
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
		// We will use TypeScript's types for component props instead
		'react/prop-types': 'off',
		// We don't want unused vars
		'@typescript-eslint/no-unused-vars': ['error'],
		'prettier/prettier': 'error',
		'arrow-body-style': 'off',
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-unused-vars': [
			'error',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
				ignoreRestSiblings: false,
			},
		],
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
			},
		],
		'react/no-unescaped-entities': 'off',
		'react/require-default-props': 'off',
		'react/jsx-props-no-spreading': 'off',
		'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
		'prettier/prettier': [
			'error',
			{},
			{
				usePrettierrc: true,
			},
		],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'], // Your TypeScript files extension
			parserOptions: {
				project: ['./tsconfig.json'], // Specify it only for TypeScript files
			},
		},
	],
};
