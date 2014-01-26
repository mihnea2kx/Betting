$(document).ready(function(){
    var betapi = "http://www.scripthold.com/betjoomla/connect.php";
    
    $.getJSON(betapi,function(data) {
        $(data.emp_info).each(function () {
            if(this.Rezultat=='TBP'&&this.Valoare == 'Free'){
            var output = "<li>" + this.Ora +"---"+ this.Sport +"---"+ this.Echipa1 + " vs " + this.Echipa2 + "---" + this.Tip + "</li>";
                $('#aici').prepend(output);
                $("li:first-child").addClass(this.Rezultat);
            }
        });

        $(data.emp_info).each(function () {
            if(this.Rezultat=='TBP'&&this.Valoare == 'Premium'){
            var output = "<li>" + this.Ora +"---"+ this.Sport +"---"+ this.Echipa1 + " vs " + this.Echipa2 + "---" + this.Tip + "</li>";
                $('#aici2').prepend(output);
                $("li:first-child").addClass(this.Rezultat);
            }
        });

        $(data.emp_info).each(function () {
            if(this.Rezultat != 'TBP'){
            var output = "<li>" + this.Echipa1 + " vs " + this.Echipa2 + "---" + this.Tip + "----->" + this.Rezultat + "</li>";
                $('#aici3').prepend(output);
                $("li:first-child").addClass(this.Rezultat);
            }
        });

        
    });    
});
