const fs = require("fs");

const generateSitemap = async () => {
    const { globby } = await import("globby");

    const baseUrl = "https://thribe-x.com";

    const currentDate = new Date().toISOString();

    const staticPaths = await globby([
        "pages/**/*.js",
        "!pages/_*.js",
        "!pages/api",
        "!pages/links/edit.js",
    ]);

    const staticPages = staticPaths.map((staticPagePath) => {
        const path = staticPagePath.replace(/pages\/|.js|index/g, "");
        return `${baseUrl}/${path}`;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${staticPages
                .map((url) => {
                    return `
						<url>
							<loc>${url}</loc>
							<lastmod>${currentDate}</lastmod>
							<changefreq>monthly</changefreq>
							<priority>1.0</priority>
						</url>
					`;
                })
                .join("")}

		</urlset>
	`;

    fs.writeFileSync("public/sitemap.xml", sitemap);
};

generateSitemap();
