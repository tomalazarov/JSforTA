//Task 1
const { Builder, By } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const assert = require('assert');

// describe('Dropdown Element State Test', function() {
//   let driver;

//   before(async function() {
//     this.timeout(10000); 
//     driver = await new Builder()
//       .forBrowser('firefox')
//       .setFirefoxOptions(new firefox.Options())
//       .build();
//     await driver.get('http://the-internet.herokuapp.com/dropdown');
//   });

//   it('Verifies the state of dropdown elements', async function() {
//     const dropdown = await driver.findElement(By.id('dropdown'));
//     const options = await dropdown.findElements(By.tagName('option'));
//     const firstOptionText = await options[0].getText();
//     const secondOptionText = await options[1].getText();

//     if (firstOptionText === 'Please select an option') {
//       console.log('The 1st element of the list is inactive.');
//       assert.strictEqual(firstOptionText, 'Please select an option');
//     } else {
//       console.log('The 1st element of the list is active.');
//       assert.notStrictEqual(firstOptionText, 'Please select an option');
//     }

//     if (secondOptionText === 'Option 1') {
//       console.log('The 2nd element of the list is active.');
//       assert.strictEqual(secondOptionText, 'Option 1');
//     } else {
//       console.log('The 2nd element of the list is inactive.');
//       assert.notStrictEqual(secondOptionText, 'Option 1');
//     }
//   });

//   after(async function() {
//     await driver.quit();
//   });
// });

//Task2
// describe('Hovering the mouse over an element', function() {
//   let driver;

//   before(async function() {
//     this.timeout(10000); 
//     driver = await new Builder()
//       .forBrowser('firefox')
//       .setFirefoxOptions(new firefox.Options())
//       .build();
//     await driver.get('http://the-internet.herokuapp.com/hovers');
//   });

//   it('Hover over user avatar and verify text', async function() {
//     const userAvatars = await driver.findElements(By.css('.figure'));
//     await driver.actions({ bridge: true }).move({ origin: userAvatars[0] }).perform();
//     const userInfo = await driver.findElement(By.css('.figcaption'));
//     const text = await userInfo.getText();
//     assert(text.includes('name: user1'), 'Text "name: user1" not found under the picture');
//   });

//   after(async function() {
//     await driver.quit();
//   });
// });

//Task 3
// describe('Filling out the form', function() {
//   let driver;

//   before(async function() {
//     this.timeout(10000); 
//     driver = await new Builder()
//       .forBrowser('firefox')
//       .setFirefoxOptions(new firefox.Options())
//       .build();
//     await driver.get('http://formy-project.herokuapp.com/form');
//   });

//   it('Verify the form was successfully submitted', async function() {
//     const firstName = await driver.findElement(By.xpath("/html//input[@id='first-name']"));
//     const lastName = await driver.findElement(By.xpath("/html//input[@id='last-name']"));
//     const jobTitle = await driver.findElement(By.xpath("/html//input[@id='job-title']"));
//     const radioBtn = await driver.findElement(By.xpath("//div[@class='container']/form/div[@class='form-group']//input[@value='radio-button-1']"));
//     const checkbox = await driver.findElement(By.xpath("//div[@class='container']/form/div[@class='form-group']//input[@value='checkbox-1']"));
//     const dropdwn = await driver.findElement(By.css('select#select-menu'));
//     const dropdwnOption = await driver.findElement(By.css('select#select-menu option[value="2"]'));    
//     const date = await driver.findElement(By.css('input#datepicker'));
//     const submitBtn = await driver.findElement(By.css("a[role='button']"));
//     const successMsg = await driver.findElement(By.className("alert alert-success"));
//     await driver.wait(until.elementIsVisible(successMsg), 2000);

//     let msg = await successMsg.getText();

//     firstName.sendKeys("Peter");
//     lastName.sendKeys('Peterson');
//     jobTitle.sendKeys('tester');
//     radioBtn.click();
//     checkbox.click();
//     dropdwn.click();
//     dropdwnOption.click();
//     date.sendKeys("12/12/2020");
//     submitBtn.click();
   
//     assert.equal(msg,"The form was successfully submitted!", 'Text differs');

//   });

//   after(async function() {
//     await driver.quit();
//   });
// });

//Task 4
// describe('Sorting the table', function() {
//   let driver;

//   before(async function() {
//     this.timeout(10000); 
//     driver = await new Builder()
//       .forBrowser('firefox')
//       .setFirefoxOptions(new firefox.Options())
//       .build();
//     await driver.get('http://the-internet.herokuapp.com/tables');
//   });

//   it('Verify values of the cells of the "Due" column are sorted in ascending order', async function() {
//     const secondTable = await driver.findElement(By.id('table2'));
//     await driver.executeScript('arguments[0].scrollIntoView()', secondTable);

//     const due = await secondTable.findElement(By.css('th:nth-child(4)'));
//     await due.click();

//     const dueColumnValues = await secondTable.findElements(By.css('tbody tr td:nth-child(4)'));
//     const dueDates = await Promise.all(dueColumnValues.map(cell => cell.getText()));

//     const sortedDueDates = [...dueDates].sort((a, b) => new Date(a) - new Date(b));
//     assert.deepStrictEqual(dueDates, sortedDueDates, 'The "Due" column is not sorted in ascending order.');
//   });

//   after(async function() {
//     await driver.quit();
//   });
// });