
// problem- 1 (kilimeterToMeter) starts
// function kilimeterToMeter(kilometer) {
//     var meters = 0;
//     if(kilometer> 0){
//         // 1 kiometer = 1000 meters
//         var meters = kilometer*1000;
//         return meters;
//     }
//     else{
//        return "Distance cannot be Negative"
//     }
    
// }
// console.log(kilimeterToMeter(-2))



// problem- 2(budgetCalculator) starts

// function budgetCalculator(watch, phone, laptop) {
//     if (watch>0 && phone>0 && laptop>0) {
//         var watchesPrice = watch*50;
//         var phonesPrice = phone*100;
//         var laptopsPrice = laptop*500;
//         var totalPrice = watchesPrice + phonesPrice + laptopsPrice;
//         return totalPrice;
//     }
//     else{
//         return "Input is Wrong"
//     }

// }

// console.log( budgetCalculator(6,6,6))


// problem- 3(hotelCost) starts

function hotelCost(stayingDay) {

    if (stayingDay<=10 && stayingDay > 0 ) {
        var bill = stayingDay*100;
    }
    else if (stayingDay<=20 && stayingDay > 10) {
        var bill = (stayingDay-10)*80+1000;
    }
    else if (stayingDay>20 && stayingDay > 20) {
        var bill = (stayingDay-20)*50+1800;
    }
    else {
        return "Number of stayingDay should be > 0";
    }    

    return bill;
}

// console.log(hotelCost(100));
console.log(hotelCost(-10));

// problem- 4(megaFriend) starts
// function megaFriend(friends) {
//   // var largest = friends[0].length;
//     var largest = friends[0];
//     for (let i = 0; i < friends.length; i++) {
//         const friend = friends[i];
//          if (friend.length > largest.length) {//equal hole undefined dekhai
//             largest = friend;
//             // return largest;
//         }
//     }

//     return largest;
// }

// var friends = ["sakib", "sadia", "shrikanto", "jhankar", "mahbub", "solayman"];
// console.log(megaFriend(friends))
// [sakib, sadia, jhankar, mahbub, solayman]















// function budgetCalculator(watch, phone, laptop) {
//     if (watch>0) {
//         var watchesPrice = watch*50;
//     }
//     if (phone>0) {
//         var phonesPrice = phone*100;
//     }
//     if (laptop>0) {
//         var laptopsPrice = laptop*500;
//     }
  
//     var totalPrice = watchesPrice + phonesPrice + laptopsPrice;
//     return totalPrice;
   
//     }

// console.log( budgetCalculator(-3,3,3))





