import {
    ActionSequence,
    Session,
    Capabilities,
    Executor,
    WebElement,
    By,
    Builder,
    Key,
    IWebDriverOptionsCookie
} from 'selenium-webdriver';
import * as fs from 'fs';
import { TestingUtil } from "./TestingUtil";
import { WebpartMaker } from "./WebpartMaker";

var chrome = require("selenium-webdriver/chrome"); 
require("chromedriver");
var chrome = require("selenium-webdriver/chrome");
var WebDriver = require("selenium-webdriver");
 



jest.setTimeout(20000);

var capabilities = new Capabilities(Capabilities.chrome());
var driver = new Builder().withCapabilities(capabilities).build();
var testingUtil = new TestingUtil(driver);
let standardWait = 3000;
let defaultAlerts = { "controlType": 3, "displayMode": 2, "id": "8737c381-6459-4f26-84de-68fbbe3fb569", "position": { "zoneIndex": 1, "sectionIndex": 1, "controlIndex": 1, "sectionFactor": 12 }, "webPartId": "d3d7317d-b35c-40bf-b9c2-ac0ad847dbdf", "webPartData": { "id": "d3d7317d-b35c-40bf-b9c2-ac0ad847dbdf", "instanceId": "8737c381-6459-4f26-84de-68fbbe3fb569", "title": "Alerts", "description": "alerts description", "serverProcessedContent": { "htmlStrings": {}, "searchablePlainTexts": {}, "imageSources": {}, "links": {} }, "dataVersion": "1.0", "properties": { "description": "Web part for displaying temporary alerts or notifications. All settings are editable in-line", "title": "Alert that is really important 1234", "buttonText": "Learn More", "href": "https://duckduckgo.com" } } };
let defaultToolsApps = { "controlType": 3, "displayMode": 2, "id": "8737c381-6459-4f26-84de-68fbbe3fb569", "position": { "zoneIndex": 1, "sectionIndex": 1, "controlIndex": 1, "sectionFactor": 12 }, "webPartId": "5fb28714-f831-431c-b5cb-6f24a558f522", "webPartData": { "id": "5fb28714-f831-431c-b5cb-6f24a558f522", "instanceId": "8737c381-6459-4f26-84de-68fbbe3fb569", "title": "Tools & Apps", "description": "ToolsApps description", "serverProcessedContent": { "htmlStrings": {}, "searchablePlainTexts": {}, "imageSources": {}, "links": {} }, "dataVersion": "1.0", "properties": { "commonSettings": {}, "description": "ToolsApps", "categoryOrder": [], "viewMode": "tile", "layout": "default", "isUserTileCustomizationAllowed": false, "targetProfileProperty": "ToolsAppsCustomization", "manualItems": [{ "Title": "Wallstreet Journal", "Description": "The Wall Street Journal is an American business-focused, English-language international daily newspaper based in New York City.", "Category": "Sample Tab 1", "LinkUrl": "https://wsj.com", "IconUrl": "https://camo.githubusercontent.com/3288d22efd14f228d106509b2b1e0d7ca28ce4e9/687474703a2f2f73666572696b2e6769746875622e696f2f77736a2f69636f6e2e706e67", "AltText": "The Wall Street Journal", "Enable": true, "UserConfigurable": true }, { "Title": "CNN", "Description": "Cable News Network is an American basic cable and satellite television news channel owned by the Turner Broadcasting System, a division of Time Warner. CNN was founded in 1980 by American media proprietor Ted Turner as a 24-hour cable news channel.", "Category": "Sample Tab 2", "LinkUrl": "https://cnn.com", "IconUrl": "http://media.idownloadblog.com/wp-content/uploads/2014/09/cnn-icon.png", "AltText": "CNN", "Enable": true, "UserConfigurable": true }, { "Title": "Boston Globe", "Description": "The Boston Globe is an American daily newspaper founded and based in Boston, Massachusetts,", "Category": "Sample Tab 3", "LinkUrl": "https://bostonglobe.com", "IconUrl": "http://earthtones.org/wp-content/uploads/2012/12/boston-globe-icon.jpg", "AltText": "The Boston Globe", "Enable": true, "UserConfigurable": true }], "contentSourceConfig": { "selectedSites": [], "dataSourceList": "", "mappedFields": [{ "key": "Title", "label": "Title", "types": ["Text"], "internalName": "Title" }, { "key": "Category", "label": "Category", "types": ["Text"], "internalName": "Category" }, { "key": "Description", "label": "Description", "types": ["Text", "Note"], "internalName": "Description" }, { "key": "Enable", "label": "Enable", "types": ["Boolean"] }, { "key": "IconUrl", "label": "Icon Url", "types": ["Text", "Note", "URL"], "isPictureField": 1 }, { "key": "LinkUrl", "label": "Target Url", "types": ["Text", "Note", "URL"], "internalName": "" }, { "key": "AltText", "label": "Alternative text", "types": ["Text", "Note"], "internalName": "" }, { "key": "OrderBy", "label": "Sort by", "types": null, "internalName": "Title" }], "preselectCurrentSiteForTheFirstTime": 1, "preselectListForTheFirstTime": 1, "defaultListTitle": "Tools & Apps" }, "targetingConfig": { "enableTargeting": 0, "termSetName": "Topics", "selectedTerms": [], "upsFieldKey": "MatchUPSProfileFields", "mappedManagedPropertyName": "", "mappedFieldInternalName": "", "isUserSpecificContent": 0, "showItemsWithEmptyTag": 0, "isAndTermsJoin": 0, "enableContentTypeFilter": 0, "contentTypeFilter": "" } } } };

let driverJest;


it('waits for the driver to start', () => {
    jest.setTimeout(40000);
    return driver.then(_d => {
        driverJest = _d
    })
})

it('Can login to enviorment', async () => {await testingUtil.SetupEnviorment() })
it('Can set up Tools And Apps', async () => { await TestWebpartSetup('button[data-automation-id="5fb28714-f831-431c-b5cb-6f24a558f522_0"]','div[data-sp-feature-tag="ToolsAppsWebPart web part (Tools & Apps)"]') })
it('Can set up Discover', async () => { await TestWebpartSetup('button[data-automation-id="d37f91f9-32ca-4919-9b63-24b3789f7134_0"]','div[data-sp-feature-tag="SearchDocumentWebPart web part (Discover)"]') })
it('Can set up News List', async () => { await TestWebpartSetup('button[data-automation-id="724de694-da8b-4658-98d5-83b56ebc8f23_0"]','div[data-sp-feature-tag="NewsCustomWebPart web part (News List)"]') })
it('Can set up Event List', async () => { await TestWebpartSetup('button[data-automation-id="81a6e49c-5190-4167-adb7-06c27acb534a_0"]','div[data-sp-feature-tag="EventListWebPart web part (Event List)"]') })
it('Can set up Information Bar', async () => { await TestWebpartSetup('button[data-automation-id="643032a7-f7ef-410a-a227-96c9372040cc_0"]','div[data-sp-feature-tag="InformationBarWebPart web part (Information Bar)"]') })
it('Can set up People Directory', async () => { await TestWebpartSetup('button[data-automation-id="d48a9fa7-8e04-44ff-9215-699dd6f9f4b8_0"]','div[data-sp-feature-tag="PeopleDirectoryWebPart web part (People Directory)"]') })
it('Can set up Teams And Groups', async () => { await TestWebpartSetup('button[data-automation-id="7becf7bd-2278-44ee-a609-caedd36f13f6_0"]','div[data-sp-feature-tag="TeamsGroupsWebPart web part (My Teams & Groups)"]') })
it('discards changes', async () => { await testingUtil.DiscardChanges() })
it('closes the driver', async () => { await driver.close() })



async function TestWebpartSetup(webpartIcon:string,webpartName:string) {

    await SetupWebpartLocal(webpartIcon);

    var element = await (driver.findElement(By.css(webpartName)));
    var attrib = await (element.getAttribute("class"));

    expect(attrib).not.toBeNull;
    await testingUtil.remove();
}

async function SetupWebpartLocal(webpartIcon:string){

    await testingUtil.timeout(1000);
    var add = await driver.findElements(By.css('i[data-icon-name="Add"]'));
    await add[1].click();
    await testingUtil.timeout(1000);
   
    await driver.findElement(By.css(webpartIcon)).click();
   
}
