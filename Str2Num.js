function fromStringToNumber (inputStr,base){
    console.log("inputStr=", inputStr,"base=", base);
    if (!isBaseValid(base)){return "base="+base+"isn't valid";}
    if (typeof inputStr!="string"){return "inputStr"+inputStr+"isn't string";}
    let result=0;
    for (let i=0; i<inputStr.length; i++){
        let code= inputStr.charCodeAt(i);
        if (code>=48 && code<=57){code-=48;}
        else if (code>=97 && code<=122){ code-=87;}
        else {return "error";}
        result= result*base+code;
    }
    return result;
}

console.log(fromStringToNumber("java",36));
console.log(fromStringToNumber("react",36));
console.log(fromStringToNumber("10110011011011",2));

function isBaseValid(base){
    if (isNaN(base)){return false;}
    if (typeof base=="number" && base>=2 && base<=36){return true};
    return false;
}