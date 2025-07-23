const timeout = 50000

describe(
  '/ (Search Home Page)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://www.google.com', { waitUntil: 'networkidle0' })
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should return a proper title', async () => {
      const title = await page.title()
      expect(title).toBe('Google')
    })
  },
  timeout
)
