import simpleImportSort from 'eslint-plugin-simple-import-sort';
import type { TypedFlatConfigItem } from '@antfu/eslint-config';

export function sort(): TypedFlatConfigItem[] {
	return [
		{
			name: 'poidet/imports/sort',
			plugins: { simpleImportSort }
		}
	];
}
