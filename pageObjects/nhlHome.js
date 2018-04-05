module.exports = {
    url : 'http://www.nhl.com',
    elements : {
        logo : 'div[class="megamenu-logobar"]',
        standings : {
            selector : '(//a[.="Standings"])[2]',
            locateStrategy : 'xpath'
        }        
    }
}