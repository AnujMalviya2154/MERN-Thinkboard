const { chromium } = require('playwright');

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  
  console.log('Creating Note 1...');
  await page.goto('http://localhost:5173/create');
  await page.waitForTimeout(1000);
  await page.fill('input[placeholder="Note Title"]', 'Mastering the MERN Stack');
  await page.fill('textarea[placeholder="Write your note here..."]', 'Building full-stack apps requires mastering MongoDB, Express, React, and Node.js. It allows seamless JavaScript across the stack.');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(1500);

  console.log('Creating Note 2...');
  await page.goto('http://localhost:5173/create');
  await page.waitForTimeout(1000);
  await page.fill('input[placeholder="Note Title"]', 'Vite & Tailwind Magic');
  await page.fill('textarea[placeholder="Write your note here..."]', 'Using Vite for instant HMR and Tailwind CSS for utility-first styling dramatically speeds up frontend development time and DX!');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(1500);

  console.log('Navigating to home page (Populated)...');
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'docs/home-populated.png' });
  console.log('Saved docs/home-populated.png');

  await browser.close();
})();
