const express = require('express')
const bodyParser = require('body-parser')
const { convertHtmlToPdf } = require('./htmltopdf')

const app = express()
const port = 5001

app.use(bodyParser.text({ type: 'text/html' }))

app.get('/', (req, res) => {
  res.json('Api is working')
})

app.post('/pdf', async (req, res) => {
  try {
    const html = req.body
    if (!html) {
      return res.status(400).send('No HTML content provided.')
    }

    const pdfBuffer = await convertHtmlToPdf(html)
    console.log('Buffer type:', Buffer.isBuffer(pdfBuffer)) // Check if it's a buffer
    console.log('Buffer length:', pdfBuffer.length) // Check the size of the buffer

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Length', pdfBuffer.length.toString())

    res.send(pdfBuffer)
  } catch (error) {
    console.error('Error converting HTML to PDF:', error)
    res.status(500).send('An error occurred while converting HTML to PDF.')
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
