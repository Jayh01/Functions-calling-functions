
let leeftijd = function (age) {
    if( age >= 18 ){
        return true
    } else{
        return false
    }
}
let optel = leeftijd(17)
console.log( optel )

let leeftijdCheck = function (age) {
    const joop = leeftijd (age)
    if( age >= 18 ){
            return  "Hello there"
    } 
    else {
        return  "Hey kiddo"
    }
    console.log(joop)
  
}
leeftijdCheck()
