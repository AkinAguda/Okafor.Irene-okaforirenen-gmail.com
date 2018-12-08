//DATE FOR HEADER//

const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const datenum = date.getDate();
const year = date.getFullYear();

//date format = dayname, month, date,year
const monthArr = ["JANUARY","FEBRUARY","MARCH","APRIL",
                  "MAY","JUNE","JULY","AUGUST",
                  "SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"  
                 ];
const daysArr = ["SUNDAY","MONDAY", "TUESDAY", "WEDNESDAY", 
                 "THURSDAY","FRIDAY", "SATURDAY"
                ]                 

const fulldate = `${daysArr[day]}, ${monthArr[month]} ${datenum} , ${year}`;

document.getElementById("today").append(fulldate);

//SIDE NAV FOR MOBILE//

const sidenav = document.querySelector('.categories');
const openSidenav = document.querySelector('.toggle-categories');
const closeSidenav = document.querySelector('#close-btn');

openSidenav.addEventListener("click",function()
    {
       
       sidenav.style.left = "0";            
       
        
    },false);

closeSidenav.addEventListener("click", function () 
{
    sidenav.style.left = "-230px";

}, false);

window.addEventListener("resize", function () 
{

    if(window.innerWidth>760)
   { sidenav.style.left = "0";}


},false)


