function fizzBuzz(n){
    if(n%3==0){
        return 'fizz';
    }
    else if(n%5==0){
        return 'buzz';
    }
    else{
        return n;
    }
}

module.exports = fizzBuzz;