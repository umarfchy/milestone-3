// https://github.com/unzippinglinux/milestone-3

// Kilometer to Meter Conversion 
function kilometerToMeter(numberInKilometer){
    // Check input validity
    if (numberInKilometer < 0 || isNaN(numberInKilometer)){
        return 'Invalid input! Negative or Non-numeric input!';
    }
    else{
        
        return numberInKilometer * 1000;
    }
}


// Budget calculator
function budgetCalculator(watch, phone, laptop){
    // Handling Negatives or integer values
    // watch, phone, laptop can't be fraction
    let nonNegative = watch <0 || phone < 0 || laptop < 0
    let numericValue = Number.isInteger(watch) && Number.isInteger(phone) && Number.isInteger(laptop)

    if ( nonNegative || !numericValue){
        return 'Invalid input!';
    }
    else{
        return watch*50 + phone*100 + laptop*500 ;
    }
}


// Hotel cost calculator 
function hotelCost(days){
    if (days < 0 || !Number.isInteger(days)){
        return 'Invalid input!';
    }

    else{
        if (days <= 10){
            return days * 100;
        }
        else if (days >= 11 && days <=  20){
            return 1000 + (days - 10)*80; 
        }
        else{
            return 1800 + (days - 20) * 50;
        }
    }
}

// Person with the longest name 
function megaFriend(nameArray){
    // check input validity
    if (nameArray.length == 0 || !Array.isArray(nameArray)){
        return 'Invalid input or Empty array !!!'
    }
    else{

        let len = 0;
        let selectedName = ''
        for (let x = 0; x < nameArray.length; x++){
            nameArrayElement = nameArray[x]

            // checking for longest lenght 
            if (len < nameArrayElement.length ){
                len = nameArrayElement.length
                selectedName = nameArrayElement
            }
    }
        return selectedName;
    }
}
