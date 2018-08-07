$(document).ready(function() {

    var theBoys = $(".theBoys");
    var caveman = $(".caveman");
    var Officer = $(".officer");
    var cyrus = $(".cyrus");
    var lahey = $(".lahey");

    var selectOpp;
    
    var playerHP = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    $(".theBoys").on("click", function() {
        console.log("Ricky, Julian and Bubbles ar good to go!");    
    
     

    });

    $(".caveman").on("click", function() {

    })

    function selectOpp(id, name, object, status) {
        id.click(function() {

            if (selectOpp === undefined) {
                selectOpp = name;
               
            } 



        }

    }

})
