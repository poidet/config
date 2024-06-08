import type { TypedFlatConfigItem } from '@antfu/eslint-config';

export function stylistic(): TypedFlatConfigItem[] {
	return [
		{
			name: 'poidet/stylistic',
			rules: {
				'style/comma-dangle': ['error', 'never']
			}
		}
	];
}
