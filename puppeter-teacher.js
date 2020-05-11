const puppeteer = require('puppeteer');
const user = 'tc'+process.argv[2]+'@yopmail.com';
const timeout = parseInt(process.argv[3]) || 8000;
console.log(user);
(async () => {
  // Running in chrome visual browser
  const browser = await puppeteer.launch({ headless: false })
  // const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.goto('https://micro-nemo.comprodls.com/register-teacher')
  
  // await page.setViewport({ width: 1707, height: 838 })
  
  await page.waitForSelector('#gigya-register-form #gigya-textbox-120640165044771760')
  await page.click('#gigya-register-form #gigya-textbox-120640165044771760')
  
  await page.type('#gigya-register-form #gigya-textbox-120640165044771760', 'a')
  
  await page.type('#gigya-register-form #gigya-textbox-56649036382991330', 's')
  
  await page.type('#gigya-register-form #gigya-loginID-48724291874120980', user)
  
  await page.type('#gigya-register-form #gigya-password-56383998600152700', 'Compro11')
  
  await page.type('#gigya-register-form #gigya-textbox-82415858032213200', 'India')
  
  await page.waitForSelector('.content-wrapper > .content > .row-wrapper > div > .row')
  await page.click('.content-wrapper > .content > .row-wrapper > div > .row')
  
  await page.waitForSelector('#gigya-register-form > .gigya-layout-row > .gigya-composite-control > .term > .gigya-label #nemo_checkbox')
  await page.click('#gigya-register-form > .gigya-layout-row > .gigya-composite-control > .term > .gigya-label #nemo_checkbox')
  
  await page.waitForSelector('#gigya-register-form > .gigya-layout-row > .gigya-composite-control > .term > .gigya-label #nemo_checkbox')
  await page.waitFor(timeout);
  await page.keyboard.sendCharacter(String.fromCharCode(13));
  // Shortcut for Enter Key
  await page.keyboard.down('NumpadEnter');
  await page.keyboard.up('NumpadEnter');

  // // Shortcut for Enter Key
  await page.keyboard.down('\n');
  await page.keyboard.up('\n');

  await page.waitForSelector('#c1-gigya-container')
  // await page.waitFor(10000);
  await page.waitFor(3000);
  await page.screenshot({path: 'pics/'+user+'.png'});

  await browser.close()
})()