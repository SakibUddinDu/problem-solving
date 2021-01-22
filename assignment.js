// problem- 1 (kilimeterToMeter) starts

function kilimeterToMeter(kilometer) {
    var meters = 0;
    if(kilometer> 0){
        // 1 kiometer = 1000 meters
        var meters = kilometer*1000;
        return meters;
    }
    else{
       return "Distance cannot be Negative"
    }
    
}
// console.log(kilimeterToMeter(-2))



// problem- 2(budgetCalculator) starts

function budgetCalculator(watch, phone, laptop) {
    if (watch>=0 && phone>=0 && laptop>=0) {
        //As watchPrice = 50; phonePrice = 100; laptopPrice = 500;
        var watchesPrice = watch*50;
        var phonesPrice = phone*100;
        var laptopsPrice = laptop*500;
        var totalPrice = watchesPrice + phonesPrice + laptopsPrice;
    }
    else{
        return "Input is Wrong"
    }
    return totalPrice;
}

// console.log( budgetCalculator(0,0,0))
// console.log( budgetCalculator(0,6,6))
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
// console.log(hotelCost(-10));

// problem- 4(megaFriend) starts

function megaFriend(friends) {
    var largest = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
         if (friend.length > largest.length) {
            largest = friend;
        }
       
    }

    return largest;
}

// var friends = ["sakib", "sadia", "shrikanto", "jhankar", "mahbub", "solayman"];
// console.log(megaFriend(friends))

