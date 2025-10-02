import swipePage from "../pageobjects/swipe.page"
//Referencia: https://webdriver.io/docs/api/mobile/swipe/

describe('Dicas da tela Swipe', () => {

    beforeEach(async () => {
        await swipePage.abrirMenuSwipe();
    });

    afterEach(async () => {
        await driver.back(); // volta pro menu anterior
        await driver.pause(3000) // espera 3 segundos
    });

    it('Deve arrastar para baixo', async () => {
        await driver.swipe('down')
    });

    it('Deve arrastar para cima usando coordenadas', async () => {
        await driver.swipe('down') // primeiro desce
        await driver.pause(3000) // espera 3 segundos

        await driver.action('pointer')
            .move({ duration: 0, x: 768, y: 192 })
            .down({ button: 0 })
            .move({ duration: 1000, x: 729, y: 2031 })
            .up({ button: 0 })
            .perform();
    });

    it('Deve arrastar pro lado', async () => {
        const carousel = $("-android uiautomator:new UiSelector().resourceId(\"__CAROUSEL_ITEM_0_READY__\")");

        await browser.swipe({
            direction: 'left',                 
            duration: 5000,                     
            percent: 0.5,                       
            scrollableElement: carousel,  
        })
    });


});