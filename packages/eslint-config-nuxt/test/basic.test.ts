import { fileURLToPath } from 'node:url';

import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';

describe('eslint-config-nuxt', () => {
	it('загружает конфигурацию в eslint для проверки правильности всего синтаксиса правил', async () => {
		const eslint = new ESLint({
			cwd: fileURLToPath(new URL('..', import.meta.url))
		});
		const code = 'const foo = 1;\nconst bar = function () {};\n';
		const results = await eslint.lintText(code);
		const [{ errorCount }] = ESLint.getErrorResults(results);
		expect(errorCount).toEqual(4);
	});
});
