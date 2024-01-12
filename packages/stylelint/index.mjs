export default {
	plugins: ['stylelint-selector-bem-pattern', 'stylelint-prettier'],
	extends: [
		'stylelint-config-html',
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-config-html/vue',
		'stylelint-order',
		'stylelint-config-hudochenkov/order'
	],
	rules: {
		'prettier/prettier': true,
		'custom-property-pattern': null,
		'no-descending-specificity': null,
		'media-query-no-invalid': null,
		'selector-class-pattern': null,
		'no-invalid-position-at-import-rule': null,
		'plugin/selector-bem-pattern': {
			componentName: '[A-Z]+',
			componentSelectors: {
				initial: '^\\.{componentName}(?:-[a-z]+)?$',
				combined: '^\\.combined-{componentName}-[a-z]+$'
			},
			utilitySelectors: '^\\.util-[a-z]+$'
		},
		'order/order': [['dollar-variables', 'custom-properties', 'declarations', 'rules'], { severity: 'warning' }]
	},
	overrides: [
		{
			files: ['**/*.vue'],
			rules: {
				'selector-pseudo-class-no-unknown': [
					true,
					{
						ignorePseudoClasses: ['deep']
					}
				]
			}
		}
	]
};
