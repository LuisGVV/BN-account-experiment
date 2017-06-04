const cheerio = require('cheerio');
const fs = require('fs');

fs.readFile('htmlTable.html', 'utf8', function fileRead(err, data) {
    var total = 0;
    if (err) {
        return console.log(err);
    }
    const $ = cheerio.load(data);
    const movementTable = $('#BNCRMP_cphContenidoPagina_dtgMovimientos tr td:nth-child(4)')
        .slice(1)
        .each(function () {
            console.log(this.children[0].data)
            total += parseFloat(this.children[0].data.trim())
            
        });
    console.log("total:", total);
});


