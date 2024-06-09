import type { TypedFlatConfigItem } from '@antfu/eslint-config';

export function stylistic(): TypedFlatConfigItem[] {
	return [
		{
			name: 'poidet/stylistic',
			rules: {
				'style/brace-style': ['error'],
				'style/comma-dangle': ['error', 'never'],
				'@stylistic/brace-style': ['error'],
				'@stylistic/comma-dangle': ['error', 'never']
			}
		}
	];
}
