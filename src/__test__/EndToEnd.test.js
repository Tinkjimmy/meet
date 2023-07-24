import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 250, // slow down by 250ms,
      timeout: 0, // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  }, 50000);

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    // if your event's details have a different selector, use it instead of .event .details
    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeNull();
  }, 50000);

  test("User can expand an event to see its details", async () => {
    await page.click(".event .details-btn");

    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeDefined();
  }, 50000);

  test("User can collapse an event to hide details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeNull();
  }, 50000);
}, 50000);
