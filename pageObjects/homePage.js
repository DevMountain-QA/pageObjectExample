module.exports = {
    url: 'http://www.espn.com',
    elements: {
        powerRankingsHeader : {
            selector : '//h2[.="Power Rankings"]',
            locateStrategy : 'xpath'
        },
        ncaafPowerRankings : {
            selector : '//span[.="College Football"]',
            locateStrategy : 'xpath'
        }
    }
}