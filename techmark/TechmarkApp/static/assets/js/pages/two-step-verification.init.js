function getInputElement(e) {
    return document.getElementById("digit" + e + "-input")
}

function moveToNext(e, t) {
    var n = 1
    var temp_otp = "";
    while(n<=e){
        temp_otp += getInputElement(n).value;
        n++;
    }
    t = t.which || t.keyCode;
    1 === getInputElement(e).value.length && (4 !== e ? getInputElement(e + 1).focus() : (getInputElement(e).blur(), verify(temp_otp))),
    8 === t && 1 !== e && getInputElement(e - 1).focus()
}