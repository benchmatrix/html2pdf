const express = require('express')
const bodyParser = require('body-parser')
const { convertHtmlToPdf } = require('./htmltopdf')

const app = express()
const port = 50001

app.use(bodyParser.text({ type: 'text/html' }))

app.post('/htmltopdf', async (req, res) => {
  try {
    const html = req.body // Access the HTML content from the body directly as text
    if (!html) {
      return res.status(400).send('No HTML content provided.')
    }
    const pdfBuffer = await convertHtmlToPdf(html) // Convert HTML to PDF and get a buffer

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename="output.pdf"')
    res.setHeader('Content-Length', pdfBuffer.length)

    res.send(pdfBuffer) // Send the PDF buffer as the response
  } catch (error) {
    console.error('Error converting HTML to PDF:', error)
    res.status(500).send('An error occurred while converting HTML to PDF.')
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
