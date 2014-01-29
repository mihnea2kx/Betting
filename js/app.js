$(document).ready(function(){
    function onDeviceReady() {
    if (parseFloat(window.device.version) === 7.0) {
          document.body.style.marginTop = "20px";
    }
}
  
document.addEventListener('deviceready', onDeviceReady, false);



    var betapi = "http://www.scripthold.com/betjoomla/connect.php";
    
    $.getJSON(betapi,function(data) {
    //    $(data.emp_info).each(function () {
    //        if(this.Rezultat=='TBP'&&this.Valoare == 'Free'){
    //        var output = "<li><p>" + this.Ora.substring(0,5) +" -- "+ this.Sport +" -- "+ this.Echipa1 + " vs " + this.Echipa2 + " -- " + this.Tip + "</p></li>";
   //             $('#aici').prepend(output);
   //             $("#aici li:first-child").addClass(this.Rezultat);
   //         }
   //     });
        $(data.emp_info).each(function () {
            if(this.Rezultat=='TBP'&&this.Valoare == 'Free'){
            var output = "<tr><td rowspan=2>" +this.Ora.substring(0,5)+ "</td><td rowspan=2>" +this.Sport+ "</td><td>" +this.Echipa1+ "</td><td rowspan=2>" +this.Tip+ "</td></tr><tr><td>"  +this.Echipa2+"</td></tr>"
                $('#aici').prepend(output);
                //$("#aici2 tr:first-child").addClass(this.Rezultat);
            }
        });

        $(data.emp_info).each(function () {
            if(this.Rezultat=='TBP'&&this.Valoare == 'Premium'){
            var output = "<tr><td rowspan=2>" +this.Ora.substring(0,5)+ "</td><td rowspan=2>" +this.Sport+ "</td><td>" +this.Echipa1+ "</td><td rowspan=2>" +this.Tip+ "</td></tr><tr><td>"  +this.Echipa2+"</td></tr>"
                $('#aici2').prepend(output);
                //$("#aici2 tr:first-child").addClass(this.Rezultat);
            }
        });

        $(data.emp_info).each(function () {
            if(this.Rezultat != 'TBP'){
            var output = "<li><p>" + this.Data.substring(8,10)+"-"+this.Data.substring(5,7) +"--"+ this.Echipa1 + " vs " + this.Echipa2 + "--" + this.Tip + "</p></li>";
                $('#aici3').prepend(output);
                $("#aici3 li:first-child").addClass(this.Rezultat);
            }
        });

        $(data.emp_info).each(function () {
            if(this.Rezultat != 'TBP'){
                var output = "<tr><td>"+this.Data.substring(8,10)+"-"+this.Data.substring(5,7)+ "</td><td>"+this.Echipa1+  "</td><td>"+this.Echipa2+ "</td><td>" +this.Tip+ "</td></tr>"
                $('#aici4').prepend(output);
                $("#aici4 tr:first-child").addClass(this.Rezultat);
                
            }
        });

        
    });    
});
