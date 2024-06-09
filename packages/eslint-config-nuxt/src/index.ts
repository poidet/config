import type { NuxtESLintConfigOptions } from '@nuxt/eslint-config/flat';
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import { configs } from '@poidet/eslint-config';
import type { ResolvableFlatConfig } from 'eslint-flat-config-utils/index';
import defu from 'defu';

export default function poidet(options: NuxtESLintConfigOptions = {}, ...userConfigs: ResolvableFlatConfig[]) {
	const stylistic = options?.features?.stylistic ?? {
		indent: 'tab',
		quotes: 'single',
		semi: true
	};
	return createConfigForNuxt(
		defu(
			{
				features: {
					stylistic
				}
			},
			options
		) as NuxtESLintConfigOptions,
		...userConfigs
	)
		.renamePlugins({ style: '@stylistic' })
		.append(...configs());
}
