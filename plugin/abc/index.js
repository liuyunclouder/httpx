﻿var fs = require('fs'),
    webUtil = require('../../lib/util/util'),
    _ = require('underscore');

module.exports = {
    init: function(callback){
        var abcCfg = require(webUtil.getUserHome() + '/.abc/global.json');

        var pathFilter = {};
        if(abcCfg) {
            _.each(abcCfg.history, function(path){
                pathFilter[path.name] = path.root;
            });
        }
        callback(pathFilter);
    },
    check: function(){
        return fs.existsSync(webUtil.getUserHome() + '/.abc');
    }
};