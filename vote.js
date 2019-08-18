const puppeteer = require('puppeteer'); //getting puppeteer

let scrape = async () => {
    const browser = await puppeteer.launch({
        headless: true, // without opening browser
        executablePath: 'C:/Users/KryaKrya/Desktop/pup/node_modules/puppeteer/.local-chromium/win64-674921/chrome-win/chrome.exe',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage(); //opening new Page
    await page.goto('https://ru.surveymonkey.com/r/95BW692'); //visiting this url.

    await page.click('div.question-body :nth-child(7)'); //clicking on radio button or choosing
    await page.click('button[type=submit]'); //submit
    
    await browser.close(); //closing browser
    return page.url();
};

let vote = async () => { 
    await scrape().then((value) => {
        console.log(value); // Success
    }).catch(function () {
        console.log("Promise Rejected"); //Error
    });
    await setTimeout(vote, 200);
}

vote();