import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { readFile } from 'fs/promises';
import stylelint, { type Config } from 'stylelint';
import { describe, expect, it } from 'vitest';

const __dirname = dirname(fileURLToPath(import.meta.url));
describe('stylelint-config', async () => {
	it('Загружает конфигурацию в Stylelint для проверки правильности всего синтаксиса правил', async () => {
		// @ts-ignore
		const config = (await import('../index.mjs')).default as Config;

		const data = await stylelint.lint({
			config: config,
			fix: true,
			code: await readFile(join(__dirname, './reset.scss'), {
				encoding: 'utf-8'
			})
		});

		expect(data.errored).toEqual(false);
	});
});
