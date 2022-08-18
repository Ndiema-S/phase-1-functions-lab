function distanceFromHqInBlocks(pickup) {
    const hq = 42;
    return Math.abs(hq - pickup)
}
function distanceFromHqInFeet(pickup) {
    distanceFromHqInBlocks(pickup);
    let distanceInFeet = distanceFromHqInBlocks(pickup) * 264
    return distanceInFeet;

}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {

        return (destination - start) * 264;
    }
    else { return (start - destination) * 264 }
}

//FARE PRICE

function calculatesFarePrice(start, destination) {
    let distPrice = (parseInt((distanceTravelledInFeet(start, destination)), 10))

    if (distPrice <= 400) {
        return 0;
    } else if (distPrice <= 2000) {
        return ((distPrice - 400) * 0.02)
    } else if (distPrice <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}