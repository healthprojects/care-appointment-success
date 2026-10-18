// GitHub Pages serves static files and cannot rewrite "/x" to "/x/", so
// prerender every page as "x/index.html" and link in directory style.
export const trailingSlash = 'always';

// The whole prototype is static; prerender every page.
export const prerender = true;
