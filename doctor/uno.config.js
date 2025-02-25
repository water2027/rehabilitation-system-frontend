import {
	defineConfig,
	presetAttributify,
	presetUno,
} from 'unocss';

export default defineConfig({
	presets: [
		presetAttributify({
			/* preset 选项 */
		}),
		presetUno(),
	],
});
