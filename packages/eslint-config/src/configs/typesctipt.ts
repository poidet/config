import type { TypedFlatConfigItem } from '@antfu/eslint-config';

export function typescript(): TypedFlatConfigItem[] {
	return [
		{
			name: 'poidet/typescript',
			files: ['**/*.vue'],
			rules: {
				'no-unused-vars': 'off',
				'ts/no-unused-vars': 'warn',
				'ts/consistent-type-imports': 'error'
			}
		}
	];
}
