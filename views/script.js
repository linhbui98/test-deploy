beforeload = (new Date()).getTime();

function pageloadingtime() {

    //calculate the current time in afterload

    afterload = (new Date()).getTime();


    // now use the beforeload and afterload to calculate the seconds
    secondes = (afterload - beforeload) / 1000;


    document.getElementById("loadingtime").innerHTML = "<font color='red'>(You Page Load took " + secondes + " seconde(s).)</font>";

}