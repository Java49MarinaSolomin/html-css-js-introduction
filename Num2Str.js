function fromNumberToString (number, base){
    console.log("number=", number,"base=", base);
    if (!isBaseValid(base)){return "base="+base+"isn't valid";}
    if (isNaN (number)){return "number"+number+"is Nan";}
    let result="";
    let posNum= Math.abs(number);
    while (posNum!=0) {let rem= posNum%base;
    if (rem>9) {rem= String.fromCharCode(87+rem);}
    result= rem+ result;
    posNum=Math.trunc(posNum/base);}

return number<0 ? ("-"+result):result;
}
console.log(fromNumberToString(900550,36));
console.log(fromNumberToString(46016237,36));
console.log(fromNumberToString(11483,2));
function isBaseValid(base){
    if (isNaN(base)){return false;}
    if (typeof base=="number" && base>=2 && base<=36){return true};
    return false;
}