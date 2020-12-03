function calculate(){
    
    //XP Shared Range
    var levelinput = parseFloat(document.getElementById('levelinput').value);

    document.getElementById('minimumlevel').innerHTML = Math.round(levelinput/1.5);
    
    document.getElementById('maximumlevel').innerHTML = Math.round(levelinput*1.5);
    
}
