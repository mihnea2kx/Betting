cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
        {
            "file": "plugins/cc.fovea.plugins.inapppurchase/InAppPurchase.js",
            "id": "com.phonegap.plugins.inapppurchase.InAppPurchase",
            "clobbers": [
                "storekit"
        ]
        }
    ]
    });