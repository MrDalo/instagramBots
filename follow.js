let mainInterval;
let array;

function follows()
{
   
    array = document.querySelectorAll("button.sqdOP.L3NKy.y3zKF");
    console.log(array.length);

    array.forEach(item =>{item.click()});
    document.querySelector(".isgrP").scrollBy(0, 300); 
}

follows();
mainInterval = setInterval(follows, 15000);


