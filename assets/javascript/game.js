$(document).ready(function() {
   
    
    

   function start() {
       var img1 = $("<img />")
       img1.attr("src","./assets/images/CHOOSE.png")
       img1.attr("id", "img1")
    $("#select-opp").html(img1);
   }

   start();


    // attack from the boys will be link to 'attack' button
    var theBoys = 
        {
        "id"        : "theBoys",
        "name"      : "The Boys",
        "hp"        : 120,
        "damage"    : 14,
        "dmgInc"    : 10,
        }

    // when one of the below opponents are selected the image will be placed in the div with id="select-opp"


     var caveman =
        {
          "id"      : "1",
          "name"    : "Sam 'caveman' Losco",
          "imgSrc"  : '<img src="./assets/images/caveman.jpg" class="img-thumbnail opp" width="300px" >',
        };
    var officer =
        {
          "id"      : "2",
          "name"    : "Officer George Green",
          "imgSrc"  : '<img src="./assets/images/officer-george-green.jpg" class="img-thumbnail opp" width="300px" >',
        };
    var cyrus = 
        {
          "id"      : "3",
          "name"    : "Cyrus, Terry & Dennis",
          "imgSrc"  : '<img src="./assets/images/cyrus-twins.jpg" class="img-thumbnail opp" width="300px" >',
        };
    var lahey =
        {
          "id"      : "4",
          "name"    : "Jim Lahey & Randy Bobandy",
          "HP"      : 0,
          "imgSrc"  : '<img src="./assets/images/lahey-randy.jpg" class="img-thumbnail opp" width="300px" >',
        };

    var charArray = [caveman, officer, cyrus, lahey];

    var wins = 0;
    var losses = 0;
    var OpponentChosen = false;

    $('#wins').text(wins);
    $('#losses').text(losses);

   $('.opp-btn').on("click", function() {
    console.log("it is working");
    console.log($(this).attr("id"));
    var charID = $(this).attr("id");
    console.log(charArray[0].id)
    for (var i=0; i<charArray.length; i++) {
     if (charID === charArray[i].id) {
        console.log(charArray[i].imgSrc);
        $("#select-opp").replaceWith(charArray[i].imgSrc);
        console.log(charArray[i].name);
        $("#opp-name").html(charArray[i].name);
        

     }
    }
    

   })




    // function reset() {
    //     OpponentChosen = false;
    //     wins = 0;
    //     losses = 0;
    //     $("#select-opp").append('<img src="./assets/images/CHOOSE.png" width="300px"/>');
    // }

    // if ($("#1").click) {
    //     $("#select-opp").replaceWith('<img src="./assets/images/caveman.jpg" width="300px" class="img-thumbnail" />');
    //     console.log("selected opponent")
    // }



  })


  
    // var attackPoints;
    // var HP;
    // var AttackPower;
    // var counterAttack;

   