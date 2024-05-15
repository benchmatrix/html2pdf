const puppeteer = require('puppeteer')

async function convertHtmlToPdf(html) {
  const browser = await puppeteer.launch({
    executablePath: 'node_modules/chromium/lib/chromium/chrome-linux/chrome',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--headless',
      '--disable-gpu'
    ],
    headless: true // Running headless Chromium
  })

  const page = await browser.newPage()
  await page.setContent(html)
  const pdf = await page.pdf({ format: 'A3' })
  await browser.close()
  return pdf
}

module.exports = { convertHtmlToPdf }
