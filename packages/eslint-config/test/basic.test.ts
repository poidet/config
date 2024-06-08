import { fileURLToPath } from 'node:url';
import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';

describe('eslint-config', () => {
	it('загружает конфигурацию в eslint для проверки правильности всего синтаксиса правил', async () => {
		const eslint = new ESLint({
			cwd: fileURLToPath(new URL('..', import.meta.url))
		});
		const code = 'const foo = 1;\nconst bar = function () {}\n;bar(foo);\n';
		const results = await eslint.lintText(code);
		const errors = ESLint.getErrorResults(results);
		expect(errors.length).toEqual(0);
	});
});
