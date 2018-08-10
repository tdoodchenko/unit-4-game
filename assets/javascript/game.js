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
        "attackPower" : 14,
        "dmgInc"    : 6,
        }

    // when one of the below opponents are selected the image will be placed in the div with id="select-opp"


     var caveman =
        {
          "id"      : "1",
          "name"    : "Sam 'caveman' Losco",
          "imgSrc"  : '<img src="./assets/images/caveman.jpg" class="img-thumbnail opp" width="300px" >',
          "hp"      : 100,
          "counterAttack" : 20,

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
          "hp"      : 0,
          "imgSrc"  : '<img src="./assets/images/lahey-randy.jpg" class="img-thumbnail opp" width="300px" >',
        };

    var charArray = [caveman, officer, cyrus, lahey];

    var wins = 0;
    var losses = 0;
    var OpponentChosen = false;
    var gameStart = false;
    opponentOne = false;
	opponenttwo = false;
    opponentThree = false;

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
        $("#select-opp").html(charArray[i].imgSrc);
        console.log(charArray[i].name);
        $("#opp-name").html(charArray[i].name);
        gameStart = true;
        

     }
    }
    
    // function set ATTACK
    function attack(){
		
		OpponentChosen.hp = OpponentChosen.hp - theBoys.attackPower;
		$("#opponent-hp").html(OpponentChosen.hp);
			console.log("HP: " + OpponentChosen.hp);
	
	}
    // function set COUNTER ATTACK  
	function counterAttack(){
		theBoys.hp = theBoy.hp - OpponentChosen.counterAttack;
		$("#theBoys-hp").html(theBoys.hp);
			console.log("the boys HP: " + theBoys.hp);
			console.log("opponent counter attack power is " + OpponentChosen.counterAttack)
		if (theBoys.hp <= 0){
            alert("Looks like the boys are going back to jail!");
            gameLose();	   
		}
	}
    // function set COUNTER ATTACK
	function increaseAttack(){
		theBoys.attackPower = theBoys.attackPower + theBoys.initialAttackPower;
			console.log("player attack power is " + theBoys.attackPower);
    }	
    // function set CHECK FOR PROGRESS OF GAME
    function Progress(){
        if (wins === 4){
        alert("That's Greeasy! The boys are running the park now!");
        gameWin();
    }
    else {	
        gameStart = false;
       
    }
        $("#select-opp").empty();
      ;
    }	

    // function set START BATTLE
    function startBattle(){
		$("#attack-button").on("click", function() {
			console.log("button pressed");
			if (gameStart === true){   	
				attack();
				increaseAttack();
				if (opponentChosen.hp <= 0){
				checkProgress();
				}
				else {
				counterAttack();
				lightsaberClash.play();
				}
			}		
		});		
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

   