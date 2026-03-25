const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    // Get detailed info about the navbar and its children
    const navInfo = await page.evaluate(() => {
      const nav = document.getElementById('navbar');
      const inner = nav.querySelector('.nav-inner');
      const logo = nav.querySelector('.nav-logo');
      const links = nav.querySelector('.nav-links');
      
      const b1 = nav.getBoundingClientRect();
      const b2 = inner.getBoundingClientRect();
      const b3 = logo.getBoundingClientRect();
      const b4 = links.getBoundingClientRect();
      
      return {
        nav: { x: b1.x, y: b1.y, width: b1.width, height: b1.height, css: window.getComputedStyle(nav).position },
        inner: { x: b2.x, y: b2.y, width: b2.width, height: b2.height, display: window.getComputedStyle(inner).display, 
                 justifyContent: window.getComputedStyle(inner).justifyContent, 
                 maxWidth: window.getComputedStyle(inner).maxWidth, margin: window.getComputedStyle(inner).margin },
        logo: { x: b3.x, width: b3.width },
        links: { x: b4.x, width: b4.width },
        windowWidth: window.innerWidth,
      };
    });
    console.log(JSON.stringify(navInfo, null, 2));
    await browser.close();
  } catch (err) {
    console.error(err);
  }
})();
