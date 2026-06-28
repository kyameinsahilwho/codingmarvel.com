import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

export default async function handler(req, res) {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();

    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['host'];
    let url = `${protocol}://${host}/`;

    // Local development support
    if (host.includes('localhost') || host.includes('127.0.0.1')) {
      url = 'http://localhost:4321/';
    }

    console.log(`Generating PDF for: ${url}`);

    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 60000
    });

    // Ensure fonts are loaded
    await page.evaluateHandle('document.fonts.ready');

    // Hide UI elements that shouldn't be in the PDF
    await page.addStyleTag({
      content: `
        @media print {
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; }
        }
      `
    });

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
      }
    });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=codingmarvel-directory.pdf');
    res.send(pdf);
  } catch (error) {
    console.error('PDF Generation Error:', error);
    res.status(500).json({ error: 'Failed to generate PDF', details: error.message });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
