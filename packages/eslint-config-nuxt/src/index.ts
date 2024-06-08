import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import poidet from '@poidet/eslint-config';

export default function () {
	return createConfigForNuxt().prepend(poidet());
}
