$(document).ready(function() {
    
    
    var theBoys = $("#theBoys");
    var caveman = $("#caveman");
    var Officer = $("#officer");
    var cyrus = $("#cyrus");
    var lahey = $("#lahey");
    
    
    
    var attackPoints;
    var HP;
    var AttackPower;
    var counterAttack;

    var playerHP = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    $("#theBoys").on("click", function() {
        console.log("Ricky, Julian and Bubbles are good to go!");    
       

    });


    $("#caveman").on("click", function() {

        $('#select-opp').append("<img src=assets/images/caveman.jpg>");


    })   
   


    })
    
    
    /////////////////////
    //////
    //////
    /////
    ////

   
    // characters = [
    //     {
    //       "id"      : "caveman",
    //       "name"    : "Sam 'caveman' Losco",
    //       "hp"      : 100,
    //       "damage"  : 12,
    //       "dmgInc"  : 12,
    //       "avatar"  : "./assets/images/caveman.jpg"
    //     },
    //     {
    //       "id"      : "officer",
    //       "name"    : "Officer George Green",
    //       "hp"      : 110,
    //       "damage"  : 10,
    //       "dmgInc"  : 8,
    //       "avatar"  : "./assets/images/officer-george-green.jpg"
    //     },
    //     {
    //       "id"      : "cyrus",
    //       "name"    : "Cyrus, Terry & Dennis",
    //       "hp"      : 130,
    //       "damage"  : 11,
    //       "dmgInc"  : 8,
    //       "avatar"  : "./assets/images/cyrus-twins.jpg"
    //     },
    //     {
    //       "id"      : "lahey",
    //       "name"    : "Jim Lahey & Randy Bobandy",
    //       "hp"      : 180,
    //       "damage"  : 18,
    //       "dmgInc"  : 5,
    //       "avatar"  : "./assets/images/lahey-randy.jpg"
    //     }
    //     ];  



