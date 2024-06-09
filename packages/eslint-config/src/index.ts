import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config';
import { antfu } from '@antfu/eslint-config';
import type { FlatConfigComposer } from 'eslint-flat-config-utils';
import type { Linter } from 'eslint';
import defu from 'defu';
import { imports, prettier, sort, stylistic, typescript, vue } from './configs';

export function configs() {
	return [imports(), sort(), typescript(), vue(), stylistic(), prettier()];
}
export * from './configs';
export { antfu as base } from '@antfu/eslint-config';
export default function poidet(
	options: OptionsConfig & TypedFlatConfigItem = {},
	...userConfigs: Awaitable<
		TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.FlatConfig[]
	>[]
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
	return antfu(
		defu(
			{
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
			},
			options
		) as OptionsConfig & TypedFlatConfigItem,
		...userConfigs
	).append(...configs());
}
