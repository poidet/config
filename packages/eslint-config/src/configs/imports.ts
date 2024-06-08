import type { TypedFlatConfigItem } from '@antfu/eslint-config';

export function imports(): TypedFlatConfigItem[] {
	return [
		{
			name: 'poidet/imports',
			rules: {
				'import/first': 'error',
				'import/newline-after-import': 'error',
				'import/no-duplicates': 'error'
			}
		}
	];
}
