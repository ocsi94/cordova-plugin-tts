/*

    Cordova Text-to-Speech Plugin
    https://github.com/vilic/cordova-plugin-tts

    by VILIC VANE
    https://github.com/vilic

    MIT License

*/

module.exports={
    speak : function (text,resolve,reject) {
        var options = {};
        if (typeof text == 'string') {
            options.text = text;
        } else {
            options = text;
        }
        cordova.exec(resolve, reject, 'TTS', 'speak', [options]);
    },
    stop : function(resolve,reject) {
        cordova.exec(resolve, reject, 'TTS', 'stop', []);
    },
    checkLanguage : function(resolve,reject) {
        cordova.exec(resolve, reject, 'TTS', 'checkLanguage', []);
    },
    openInstallTts : function(resolve, reject) {
        cordova.exec(resolve, reject, 'TTS', 'openInstallTts', []);
    }
}
