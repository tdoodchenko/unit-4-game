$(document).ready(function() {
   
    
    

   function start() {
       var img1 = $("<img />")
       img1.attr("src","./assets/images/CHOOSE.png")
       img1.attr("id", "img1")
    $("#select-opp").html(img1);
    $("#opponent-hp").html("--");
    $("#opp-name").html(" ");
   
   }

   start();


    // attack from the boys will be link to 'attack' button
    var theBoys = 
        {
        "id"        : "theBoys",
        "name"      : "The Boys",
        "hp"        : 420,
        "attackPower" : 14,
        "dmgInc"    : 6,
        }

    // when one of the below opponents are selected the image will be placed in the div with id="select-opp"


     var caveman =
        {
          "id"      : "1",
          "img" : "#1",
          "name"    : "Sam 'caveman' Losco",
          "imgSrc"  : '<img src="./assets/images/caveman.jpg" class="img-thumbnail opp" width="300px" >',
          "hp"      : 100,
          "counterAttack" : 20,
        

        };
    var officer =
        {
          "id"      : "2",
          "img" : "#2",
          "name"    : "Officer George Green",
          "imgSrc"  : '<img src="./assets/images/officer-george-green.jpg" class="img-thumbnail opp" width="300px" >',
          "hp"      : 150,
          "counterAttack" : 22,
        };
    var cyrus = 
        {
          "id"      : "3",
          "img" : "#3",
          "name"    : "Cyrus, Terry & Dennis",
          "imgSrc"  : '<img src="./assets/images/cyrus-twins.jpg" class="img-thumbnail opp" width="300px" >',
          "hp"      : 220,
          "counterAttack" : 24,
        };
    var lahey =
        {
          "id"      : "4",
          "img" : "#4",
          "name"    : "Jim Lahey & Randy Bobandy",
          "imgSrc"  : '<img src="./assets/images/lahey-randy.jpg" class="img-thumbnail opp" width="300px" >',
          "hp"      : 420,
          "counterAttack" : 26,
        };

    var charArray = [caveman, officer, cyrus, lahey];

    var wins = 0;
    var losses = 0;
    var opponentChosen = [];
    var opponentHP = [];
    var counterAttack = [];
    var imgID = [];
    var oppInBattle = false;


    gameStart = false;
    opponentOne = false;
	opponenttwo = false;
    opponentThree = false;
    opp1 = false;
    opp2 = false;
    opp3 = false;
    opp4 = false;

   

    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#theBoys-hp').text(theBoys.hp)

    // images
    // caveman
    $("#1").html(caveman.imgSrc);
    // officer
    $("#2").html(officer.imgSrc);
    // cyrus
    $("#3").html(cyrus.imgSrc);
    // lahey
    $("#4").html(lahey.imgSrc);

   $('.opp-btn').on("click", function() {
    console.log("it is working");
    console.log($(this).attr("id"));
    var charID = $(this).attr("id");
    console.log(charArray[0].id);
    oppInBattle = true;
    gameStart = true;
    opponentChosen = true;
    //

    //
    theBoys.hp = 120;
    $("#theBoys-hp").html(theBoys.hp);
    battle();
    for (var i=0; i<charArray.length; i++) {
     if (charID === charArray[i].id) {
        
        opponentChosen = charArray[i].name;
        opponentHP = charArray[i].hp;
        counterAttack = charArray[i].counterAttack;
        imgID = charArray[i].img;
        //
       if(charArray[i].id === "#1") {
           $("#1").html();
       }
        //
        $("#select-opp").html(charArray[i].imgSrc);
        console.log(charArray[i].name);
        $("#opp-name").html(charArray[i].name);
        console.log(charArray[i].hp);
        $("#opponent-hp").text(charArray[i].hp);
        console.log("this is " + opponentChosen);
        console.log("they have " + opponentHP + " health points");
        console.log("counter strike is " + counterAttack);
        console.log(theBoys.attackPower);
        

        $(".btn").on("click", function() {
            attack();
            counter();
            win();
            lose();
            remove();
            
        })
       
        

     }
    }
    
  

    function takeBackThePark() {
        if (wins = "4") {
            alert("The boys finally have control of the park!");
            location.reload();
        }
    }


    function battle() {
        if (oppInBattle = true) {
            $(".opp-rows").hide();
    }
    }

    function attack() {
        opponentHP = opponentHP - theBoys.attackPower;
        $("#opponent-hp").html(opponentHP);
        theBoys.attackPower = theBoys.attackPower + theBoys.dmgInc;
    }

    function counter() {
        theBoys.hp = theBoys.hp - counterAttack;
        $('#theBoys-hp').html(theBoys.hp);
    }

    function win() {
        if (opponentHP < 1) {
            alert("Looks like ol' " + opponentChosen + " is going back to jail!");
            wins++;
            $("#wins").html(wins);
            $(".opp-rows").show();
           remove();
           theBoys.hp = 120;
           $(opponentChosen.id).prop("onclick", false);
          
         
       
                   
        }
    }

    function lose() {
        if (theBoys.hp < 1) {
            alert("Boys we're going back to jail... At least they have smokes and liquor!");
            losses++;
            $("#losses").html(losses);
        }
    }

    
    


   })

  })



   
   