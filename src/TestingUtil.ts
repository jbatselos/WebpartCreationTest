import { ThenableWebDriver, By } from 'selenium-webdriver';
import { AutoConfigurable } from "./Enums";

export class TestingUtil {

    driver: ThenableWebDriver;

    constructor(driver: ThenableWebDriver) {
        this.driver = driver
    }

    //TODO
    public async Make(webpart: AutoConfigurable): Promise<void> {
        var element = await (this.driver.findElement(By.xpath("//button[starts-with(@data-automation-id, 'toolboxHintButton')]")));
        await element.click();
    }

    //TODO
    public async Configure(webpart: AutoConfigurable, ...args: any[]): Promise<void> {

    }

    public async makeAndConfigure(webpart: AutoConfigurable, ...args: any[]): Promise<void> {
        await this.Make(webpart);
        return this.Configure(webpart, ...args);
    }

    public async remove() {
        var element = await (this.driver.findElement(By.xpath("//button[starts-with(@data-automation-id, 'deleteButton')]")));
        await element.click();
        await this.pause(1000);
        element = await (this.driver.findElement(By.xpath("//button[starts-with(@data-automation-id, 'confirmButton')]")));
        await element.click();
        await this.pause(1000);
    }

    public async togglePublishMode() {
        var element = await (this.driver.findElement(By.css("button#CommandBar1preview")));
        return element.click();
    }

    private async pause(time: number) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    public async timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    public async  DiscardChanges(){
        await this.driver.findElement(By.css('button[data-automation-id="discardButton"]')).click();
        await this.timeout(500);
        await this.driver.findElement(By.css('button[data-automation-id="yesButton"]')).click();
    
    }
    
    public async  goToEdit(){
        let editButtons = await this.driver.findElements(By.css('button[aria-label="Edit web part"]'));
        await editButtons[1].click();
    }

    public async SetupEnviorment() {
        jest.setTimeout(60000);
        await this.driver.manage().window().maximize();
        await (this.driver.get("https://owdevelop.sharepoint.com/sites/OWv2-Develop/SitePages/AutomatedTestPage.aspx"))
        await (this.timeout(300));
        await this.driver.findElement(By.name("loginfmt")).sendKeys("owdeveloper@owdevelop.onmicrosoft.com");
        await this.driver.findElement(By.id("idSIButton9")).click();
        await (this.timeout(1000));
        await this.driver.findElement(By.name("passwd")).sendKeys("SOft5J3twJ8B!5T");
        
        await this.driver.findElement(By.id("idSIButton9")).click();
        await (this.timeout(1000));
        await this.driver.findElement(By.id("idSIButton9")).click();
        await (this.timeout(1000));
        await this.driver.findElement(By.name("Edit")).click();
        await (this.timeout(6000));
        expect(await this.driver.getCurrentUrl()).toBe("https://owdevelop.sharepoint.com/sites/OWv2-Develop/SitePages/AutomatedTestPage.aspx?Mode=Edit");
        
    }

    public async TestWebpartSetup(webpartIcon:string,webpartName:string) {

        await this.SetupWebpartLocal(webpartIcon);
    
        var element = await (this.driver.findElement(By.css(webpartName)));
        var attrib = await (element.getAttribute("class"));
    
        expect(attrib).not.toBeNull;
        await this.remove();
    }
    
    public async SetupWebpartLocal(webpartIcon:string){
    
        await this.timeout(1000);
        var add = await this.driver.findElements(By.css('i[data-icon-name="Add"]'));
        await add[1].click();
        await this.timeout(1000);
       
        await this.driver.findElement(By.css(webpartIcon)).click();
       
    }
}