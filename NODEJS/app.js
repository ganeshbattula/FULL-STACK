var fs = require('fs'),
    fileArr = [
                'base/general.css',
                'components/bootstrap_icons.css',
                'components/fullpage_slider.css'
            ];

for(var key in fileArr) {
    fs.readFile(fileArr[key],'utf8', function(err,data) {
        if(err){
            return console.log(err);
        } else {
            console.log('success');
        }

        var result = data.replace(/([^\/][.*]|[(.]).*?(\bimages\b)/g,'(images');

        fs.writeFile(fileArr[key], result, 'utf8', function(err) {
            if(err) {
                return console.log(err);
            } else {
                console.log('success');
            }
        });
    });
}