$(document).ready(function(){

		if (!window.storekit) {
    console.log("In-App Purchases not available");
    return;
  }
		window.storekit.init({

    			debug: true, /* Because we like to see logs on the console */

    			purchase: function (transactionId, productId) {
    		    console.log('purchased: ' + productId);
    				},
    			restore: function (transactionId, productId) {
       			 console.log('restored: ' + productId);
    				},
    			restoreCompleted: function () {
       			console.log('all restore complete');
    				},
    			restoreFailed: function (errCode) {
       			 console.log('restore failed: ' + errCode);
    				},
    			error: function (errno, errtext) {
      		  	console.log('Failed: ' + errtext);
    				},
    			ready: function () {
        			var productIds = [
            			"ro.digitype.betting.subscr1mo"
        						];
        			window.storekit.load(productIds, function(validProducts, invalidProductIds) {
          			  $.each(validProducts, function (i, val) {
            		    console.log("id: " + val.id + " title: " + val.title + " val: " + val.description + " price: " + val.price);
           			 });
            		if(invalidProductIds.length) {
                console.log("Invalid Product IDs: " + JSON.stringify(invalidProductIds));
            }
        });
    }
});


window.storekit.restore();


$("iapbtn").onclick(function(){
	window.storekit.purchase("ro.digitype.betting.subscr1mo", 1);
});




});//end