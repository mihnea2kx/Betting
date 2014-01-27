$(document).ready(function(){
    var betapi = "http://www.scripthold.com/betjoomla/connect.php";
    
    $.getJSON(betapi,function(data) {
        $(data.emp_info).each(function () {
            if(this.Rezultat=='TBP'&&this.Valoare == 'Free'){
            var output = "<li><p>" + this.Ora +"---"+ this.Sport +"---"+ this.Echipa1 + " vs " + this.Echipa2 + "---" + this.Tip + "</p></li>";
                $('#aici').prepend(output);
                $("#aici li:first-child").addClass(this.Rezultat);
            }
        });

        $(data.emp_info).each(function () {
            if(this.Rezultat=='TBP'&&this.Valoare == 'Premium'){
            var output = "<li><p>" + this.Ora +"---"+ this.Sport +"---"+ this.Echipa1 + " vs " + this.Echipa2 + "---" + this.Tip + "</p></li>";
                $('#aici2').prepend(output);
                $("#aici2 li:first-child").addClass(this.Rezultat);
            }
        });

        $(data.emp_info).each(function () {
            if(this.Rezultat != 'TBP'){
            var output = "<li><p>" + this.Echipa1 + " vs " + this.Echipa2 + "---" + this.Tip + "----->" + this.Rezultat + "</p></li>";
                $('#aici3').prepend(output);
                $("#aici3 li:first-child").addClass(this.Rezultat);
            }
        });

        
    });    
});
