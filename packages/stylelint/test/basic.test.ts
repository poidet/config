import stylelint, { Config } from 'stylelint';
import { describe, expect, it } from 'vitest';

describe('stylelint-config', async () => {
	it('Загружает конфигурацию в Stylelint для проверки правильности всего синтаксиса правил', async () => {
		const config = (await import('../index.cjs')) as Config;

		const data = await stylelint.lint({
			config: config.default,
			fix: true,
			code: 'body {\n' + '\tdisplay: flex;\n' + '\tline-height: 130%;\n' + '\tfont-size: 16px;\n' + '}'
		});

		expect(data.errored).toEqual(false);
	});
});
