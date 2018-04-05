module.exports = {
    beforeEach: browser => {
        browser.resizeWindow(1280,800)
    },
    after: browser=> {
        browser.end()
    },
    'loadPowerRankings': browser => {
        let homePage = browser.page.homePage();
        homePage.navigate()
        homePage.waitForElementVisible('@powerRankingsHeader', 5000)
            .click('@ncaafPowerRankings')
    },
    'loadNHLStandings' : browser => {
        let nhlHome = browser.page.nhlHome();

        nhlHome.navigate()
            .verify.visible('@logo')
            .click('@standings')
    }
}