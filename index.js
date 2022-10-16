const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    product: 'chrome',
    headless: false,

  })
  const page = await browser.newPage()
  page.setDefaultTimeout(60000)
  page.setJavaScriptEnabled(false)
  await page.goto('https://www.footballdb.com/games/index.html?lg=NFL&yr=2022');
  const handle = await page.$('.statistics > tbody > tr > td > a')
  const test = await handle.contentFrame()
  console.log('test: ', test)
  await browser.close()
})();