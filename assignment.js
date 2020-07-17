 function feetToMile(feet){
    var mile = feet / 5280;
    return mile
 }
  var result = feetToMile(5280);
  console.log(result);


  function woodCalculator(chair, table, bed){
      var chairCount = chair * 1;
      var tableCount = table * 3;
      var bedCount = bed * 5;
      var totalWood = chairCount + tableCount + bedCount;
     return totalWood;
  }
  var result = woodCalculator(14, 5, 12);
  console.log(result);


 function brickCalculator(first, second, third, fourth, fifth){
     var firstFloor = first * 1000;
     var secondFloor = second * 1000;
     var thirdFloor = third * 1000;
     var fourthFloor = fourth * 1000;
     var fifthFloor = fifth * 1000;
      var totalBrick = firstFloor + secondFloor + thirdFloor + fourthFloor + fifthFloor;
      return totalBrick;
  }
  var result = brickCalculator(150, 120, 100, 100, 50);
  console.log(result);


  var rahim = 90;
  var karim = 100;
  var zinita = 360;

  var min = Math.min(rahim, karim, zinita);
  console.log(min);


 