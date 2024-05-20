const puppeteer = require('puppeteer')

async function convertHtmlToPdf(html) {
  const browser = await puppeteer.launch({
    executablePath: 'node_modules/chromium/lib/chromium/chrome-win/chrome.exe',
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
  const pdfBuffer = await page.pdf({
    format: 'A3',
    printBackground: true
  })


  // Close the browser
  await browser.close()

  return pdfBuffer
}

module.exports = { convertHtmlToPdf }
