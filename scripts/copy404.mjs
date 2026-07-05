// After Vite builds the site, GitHub Pages needs a 404.html to support
// client-side routing on "deep links" (e.g. someone refreshing /about).
// GitHub Pages serves 404.html for any unknown path, so we just make it
// an exact copy of index.html — Vue Router then takes over and shows
// the right page once the app boots up in the browser.
import { copyFileSync } from 'fs';

copyFileSync('dist/index.html', 'dist/404.html');
console.log('Copied dist/index.html -> dist/404.html');
