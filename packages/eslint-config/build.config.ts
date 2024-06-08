import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: [
		{
			input: 'src/index.ts'
		}
	],
	declaration: true,
	rollup: {
		emitCJS: true,
		output: {
			exports: 'named'
		}
	}
});
