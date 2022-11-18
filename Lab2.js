function ToggleModileNavBar(){
    var buttonsList = document.getElementById("mobileNavbarButtonsList");
    if(buttonsList){
        var listClass = buttonsList.getAttribute("class");
        if(listClass=="mobileNavbarButtonsList")
            buttonsList.setAttribute("class","mobileNavbarButtonsListHidden");
        else
            buttonsList.setAttribute("class","mobileNavbarButtonsList");

    }
    else{
        console.log("Не найден список кнопок мобильной панели навигации!");
    }
}

function OnBtnNavBarMobileToggleClick(){
    ToggleModileNavBar();
}