//1.从min到max之间的随机整数，包括min不包括max
function radom(min,max){
    return Math.floor(Math.random()*(max-min)) + min
}

//2.从min都max之间的随机整数，包括min包括max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}