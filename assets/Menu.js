function fclick(){
    let lmenu = false
    var my_bar = document.getElementById("barra__lateral")
    var check = document.getElementById("checkbox")

    console.log(check.checked)    
    if(check.checked == true)
    {
        my_bar.style.transform = "translateX(100%)"
    }else{
        my_bar.style.transform = "translateX(0)"
    }

}