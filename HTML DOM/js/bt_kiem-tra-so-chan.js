function check_even_num(){
    let number = +document.getElementById("number").value;
    let result = number%2;
    if (result == 0)
    {
        document.getElementById("result").innerHTML="Số " + number + " là số chẵn.";
    }
    else{
        document.getElementById("result").innerHTML="Số " + number + " là số lẻ.";
    }
}