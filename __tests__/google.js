const timeout = 50000
 
describe(
  '/ (Search Home Page)',
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto('https://www.google.com', { waitUntil: 'networkidle0' });
    }, timeout);
 
    afterAll(async () => {
      await page.close();
    });
 
    it('should return a proper title', async () => {
      const title = await page.title();
      expect(title).toBe('Google');
    });

    it('should return link to Marketplace upon searching Xray', async () => {
      await page.waitForSelector('input',{ visible: true });
      await page.type('input', 'Xray test management')
      await page.keyboard.press('Enter');
      await page.waitForSelector('div#rcnt',{ visible: true});
      const results = await page.evaluate(() => document.querySelector('div#rcnt').innerText);
      expect(results).toContain('Xray Test Management for Jira | Atlassian Marketplace');
    })
  },
  timeout
)