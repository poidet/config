import type { TypedFlatConfigItem } from '@antfu/eslint-config';
import eslintConfigPrettier from 'eslint-plugin-prettier/recommended';

export function prettier(): TypedFlatConfigItem[] {
	return [
		{
			name: 'poidet/prettier',
			...eslintConfigPrettier
		}
	];
}
