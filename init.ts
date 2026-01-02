import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from '$i18n/output/runtime';
import type { AvailableLanguageTags } from '$lib/utilities/language';

export const i18n = createI18n<AvailableLanguageTags>(runtime, {
	exclude: ['/api/*']
});
