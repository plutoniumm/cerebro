import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { replaceCodePlugin } from "vite-plugin-replace";
import { UIAliases, PathAliases } from "./paths.config.js";

const config = {
	preprocess: sveltePreprocess( { sourceMap: false } ),
	kit: {
		adapter: adapter(),
		vite: {
			resolve: { alias: { ...PathAliases } },
			plugins: [ replaceCodePlugin( { replacements: [ ...UIAliases ] } ), ],
			server: { fs: { allow: [ 'static' ] } }
		},
		prerender: {
			default: true
		}
	}
};

export default config;
