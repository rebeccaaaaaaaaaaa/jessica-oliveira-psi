const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

(async () => {
  const distDir = path.resolve('./dist');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const sitemap = new SitemapStream({ hostname: 'https://psicojessicaoliveira.com.br/' });
  const writeStream = fs.createWriteStream(path.join(distDir, 'sitemap.xml'));

  sitemap.pipe(writeStream);

  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
  sitemap.write({ url: '/sobre', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/intervisao', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/cursos-eventos', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/blog', changefreq: 'monthly', priority: 0.8 });

  sitemap.end();

  // Corrigido aqui
  await streamToPromise(sitemap);

  console.log('✅ Sitemap gerado com sucesso!');
})();
