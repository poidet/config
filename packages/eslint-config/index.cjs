require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
	parserOptions: {
		ecmaVersion: 'latest',
		parser: {
			js: 'espree',
			jsx: 'espree',

			ts: '@typescript-eslint/parser',
			tsx: '@typescript-eslint/parser'
		},
		extraFileExtensions: ['.vue'],
		ecmaFeatures: {
			jsx: true
		}
	},
	env: { node: true },
	plugins: ['simple-import-sort', 'import', '@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:vue/vue3-recommended',
		'prettier'
	],
	rules: {
		'prettier/prettier': 'error',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error'
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.mts', '*.cts', '*.vue'],
			rules: {
				// The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
				// does not work with type definitions.
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': 'warn'
			}
		},
		{
			// Include typescript eslint rules in *.vue files
			// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
			files: ['*.vue'],
			extends: ['plugin:vuejs-accessibility/recommended'],
			plugins: ['vuejs-accessibility', 'prettier'],
			rules: {
				'constructor-super': 'off', // ts(2335) & ts(2377)
				'getter-return': 'off', // ts(2378)
				'no-const-assign': 'off', // ts(2588)
				'no-dupe-args': 'off', // ts(2300)
				'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
				'no-dupe-keys': 'off', // ts(1117)
				'no-func-assign': 'off', // ts(2539)
				'no-import-assign': 'off', // ts(2539) & ts(2540)
				'no-new-symbol': 'off', // ts(7009)
				'no-obj-calls': 'off', // ts(2349)
				'no-redeclare': 'off', // ts(2451)
				'no-setter-return': 'off', // ts(2408)
				'no-this-before-super': 'off', // ts(2376)
				'no-undef': 'off', // ts(2304)
				'no-unreachable': 'off', // ts(7027)
				'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
				'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
				'prefer-const': 'error', // ts provides better types with const
				'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
				'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
				'valid-typeof': 'off' // ts(2367)
			}
		}
	]
};
