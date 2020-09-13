// let a = 1; b = 5; c = 2; d = 10;
// let add = a + b;
// let sub = d - c;
// let finalResult = alert((a + b) * (d - c));

// function finalResultCheck(finalResult) {
//     if (finalResult) {
//         alert('You have done well')
//     } else{
//         alert('This isn\'t an even number')
//     }
// }
// finalResultCheck();

// let result  = '7.5'; 
// let result2 = '1.4';
// let product = Number((result * result2).toFixed(2));
// alert(product)

// let quote = 'Get me started to a substring position!';
// let substring  = 'Get me to a stop please!';
// let quoteLength = quote.length;
// alert(quoteLength);
// let index = quote.indexOf('substring');
// alert(index);


let login = prompt('Who\'s there?', '');

if (login == 'Admin' || login == 'admin'){
    let pass = prompt('Password', '');
    if (pass == 'TheMaster' || pass == 'themaster') {
        alert('Welcome!')
    } else if (pass == '' || pass == null){
        alert('Wrong password!')
    } else {
        alert('Canceled!')
    }

} else if (login == '' || login == null){
    alert('I don\'t know you!')
} else {
    alert('Canceled!')
}
