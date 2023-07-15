function ToggleElement(i){
    if(i=="Accept")
    {
        document.getElementById("main").style.display="block";
        document.getElementById("disclaimer").style.display="none";
    }
    else if(i=="Decline")
    {
        window.location.href = 'https://www.google.com/';
    }
}