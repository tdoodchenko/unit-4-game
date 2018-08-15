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
          "hp"      : 100,
          "counterAttack" : 22,
        };
    var cyrus = 
        {
          "id"      : "3",
          "img" : "#3",
          "name"    : "Cyrus, Terry & Dennis",
          "imgSrc"  : '<img src="./assets/images/cyrus-twins.jpg" class="img-thumbnail opp" width="300px" >',
          "hp"      : 100,
          "counterAttack" : 24,
        };
    var lahey =
        {
          "id"      : "4",
          "img" : "#4",
          "name"    : "Jim Lahey & Randy Bobandy",
          "imgSrc"  : '<img src="./assets/images/lahey-randy.jpg" class="img-thumbnail opp" width="300px" >',
          "hp"      : 100,
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
        console.log(charArray[i].imgSrc);
        opponentChosen = charArray[i].name;
        opponentHP = charArray[i].hp;
        counterAttack = charArray[i].counterAttack;
        imgID = charArray[i].img;
        
        
        
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

        })
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
           theBoys.hp + 120
                   
        }
    }

    function lose() {
        if (theBoys.hp < 1) {
            alert("Boys we're going back to jail... At least they have smokes and liquor!");
            losses++;
            $("#losses").html(losses);
        }
    }

    function remove() {
        $(opponentChosen.img).remove();
        $(".img-thumbnail").prop( "disabled", true );
        
    }
    // function nextOpp() {
    //     console.log(charArray);
    //     var img1 = $("<img />");
    //    img1.attr("src","./assets/images/CHOOSE.png");
    //    img1.attr("id", "img1");
    //     $("#select-opp").html(img1);
    //     $("#opponent-hp").html("--");
    //     charArray.splice($.inArray(opponentChosen, charArray),1);
    //     $("#opp-name").html(" ");
    //     $(opponentChosen.id).css("opacity", 0.5);
    //     $(opponentChosen).remove();
    //     $(".opp-rows").show();
    // }


   })





// // function set ATTACK
// function attack(){
		
//     OpponentChosen.hp = OpponentChosen.hp - theBoys.attackPower;
//     $("#opponent-hp").html(OpponentChosen.hp);
//         console.log("HP: " + OpponentChosen.hp);

// }
// // function set COUNTER ATTACK  
// function counterAttack(){
//     theBoys.hp = theBoy.hp - OpponentChosen.counterAttack;
//     $("#theBoys-hp").html(theBoys.hp);
//         console.log("the boys HP: " + theBoys.hp);
//         console.log("opponent counter attack power is " + OpponentChosen.counterAttack)
//     if (theBoys.hp <= 0){
//         alert("Looks like the boys are going back to jail!");
//         gameLose();	   
//     }
// }
// // function set INCREASE ATTACK
// function increaseAttack(){
//     theBoys.attackPower = theBoys.attackPower + theBoys.initialAttackPower;
//         console.log("player attack power is " + theBoys.attackPower);
// }	
// // function set CHECK FOR PROGRESS OF GAME
// function Progress(){
//     if (wins === 4){
//     alert("That's Greeasy! The boys are running the park now!");
//     gameWin();
// }
// else {	
//     gameStart = false;
   
// }
//     $("#select-opp").empty();
//   ;
// }	

// // function set START BATTLE
// function startBattle(){
//     $("#attack-button").on("click", function() {
//         console.log("button pressed");
//         if (gameStart === true){   	
//             attack();
//             increaseAttack();
//             if (opponentChosen.hp <= 0){
//             checkProgress();
//             }
//             else {
//             counterAttack();
//             lightsaberClash.play();
//             }
//         }		
//     });		
// }



//////////////////////////


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



   