import { fileURLToPath } from 'node:url';

import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';

describe('eslint-config-nuxt', () => {
	it('Загружает конфигурацию в eslint для проверки правильности всего синтаксиса правил', async () => {
		const cli = new ESLint({
			useEslintrc: false,
			// @ts-ignore
			overrideConfigFile: fileURLToPath(new URL('../index.cjs', import.meta.url))
		});

		const code = 'const foo = 1;\nconst bar = function () {};\nbar(foo);\n';

		const [{ errorCount }] = await cli.lintText(code, { filePath: 'test.ts' });

		expect(errorCount).toEqual(0);

		const rules = await cli.calculateConfigForFile('test.ts');
		expect(rules.plugins).toContain('vue');
	});
});
