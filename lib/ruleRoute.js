/**
 * @fileoverview
 * @author Harry <czy88840616@gmail.com>
 *
 */
var userCfg = require('./userConfig'),
    _ = require('underscore'),
    fs = require('fs');

module.exports = {
    route: function(p, callback){
        var solutions = userCfg.get('solutions'),
            proxyDomain = userCfg.get('proxyDomain'),
            isMatch = false,
            matchRule;

        _.each(rules, function(rule){
            if(!isMatch && rule.enable) {
                var pattern = new RegExp(rule.pattern, 'g');
                if(pattern.test(uri)) {
                    uri = uri.replace(pattern, rule.target);
                    matchRule = rule;
                    isMatch = true;
                }
            }
        });

        if(!isMatch) {
            if(!proxyDomain.get(domain)) {
                console.log('[' + 'WARN'.yellow + '] ������һ������ת���Ա�����ѭ��, domain=%s',domain.cyan);
            }
            //ûƥ�䵽�ģ�����Ҫ��������Ϊip
            uri = proxyDomain[domain] + uri;
        } else if(!util.isLocalFile(uri)) {
            if(!proxyDomain[domain]) {
                console.log('[' + 'WARN'.yellow + '] ������һ������ת���Ա�����ѭ��, domain=%s',domain.cyan);
            }
            uri = proxyDomain[domain] + uri;
        }

        if(_.isUndefined(proxyDomain[domain])) {
            uri = uri.replace('undefined', '127.0.0.1');
        }

        callback(null, fs.createReadStream(uri));

    }
};