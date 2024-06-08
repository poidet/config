import type { ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config';
import { antfu } from '@antfu/eslint-config';
import type { FlatConfigComposer } from 'eslint-flat-config-utils';
import { imports, sort, stylistic, typescript, vue } from './configs';

export * from './configs';
export default function poidet(): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
	return antfu({
		formatters: {
			css: 'prettier',
			html: 'prettier',
			markdown: 'prettier'
		},
		stylistic: {
			indent: 'tab',
			quotes: 'single',
			semi: true
		},
		typescript: true,
		vue: true,

		// Disable jsonc and yaml support
		jsonc: false,
		yaml: false
	}).append(imports(), sort(), typescript(), vue(), stylistic());
}
