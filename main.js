// YADDAS OYUNU:

let numbers = [4, 7, 2, 9, 1];
let answer = numbers.join("");
alert("Yadda saxlayın: " + answer);
let uduzdu = true;
for (let i = 0; i < 3; i++) {
    let user = prompt("ƏDƏDLƏRİ EYNİ ARDICILLIQLA DAXİL EDİN:");
    if (user === numbers.join("")) {
        console.log("AFERIN!");        
        console.log("VİDEOYA BAXDIĞINIZ ÜCÜN TƏŞƏKKÜRLƏR!:))))))");
        let uduzdu = false
        break

    }


    if (uduzdu) {
        console.log("UDUZDUNUZ!");

    }


}

