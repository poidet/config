import * as prettier from 'prettier';
import { Options } from 'prettier';
import { describe, expect, it } from 'vitest';

describe('prettier-config', async () => {
	it('Загружает конфигурацию в Prettier для проверки правильности всего синтаксиса правил', async () => {
		const code = 'const foo = 1\nconst bar = function(){}\nbar(foo)\n';
		const config = (await import('../index.cjs')) as Options;

		return prettier.format(code, { ...config, parser: 'babel' }).then((result) => {
			expect(result).toEqual('const foo = 1;\nconst bar = function () {};\nbar(foo);\n');
		});
	});
});
