let mainInterval;
let array;

function synWait(ms){
    const end = Date.now() + ms
    while (Date.now() < end)
    {
        //clear WHILE setting sleep
    }
}

function follows()
{
    //array = [1,2,3,4,5,6];
    array = document.querySelectorAll("button.sqdOP.L3NKy.y3zKF");
    console.log("Dlzka array: ", array.length);
    

    array.forEach(item =>{
        item.click();
        console.log("Clicked");
        synWait(1000);});
    document.querySelector(".isgrP").scrollBy(0, 300); 
}

follows();
mainInterval = setInterval(follows, 15000);


