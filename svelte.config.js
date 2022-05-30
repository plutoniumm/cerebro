import adapter from '@sveltejs/adapter-static';
import path from 'path'; AbortSignal

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'@com:top': path.resolve( './src/components/global' ),
					'@com:lib': path.resolve( './src/components/lib' ),
					'@com:gen': path.resolve( './src/components/gen' )
				}
			},
			server: {
				fs: {
					// Allow serving files from one level up to the project root
					allow: [ 'static' ]
				}
			}
		}
	}
};

export default config;
