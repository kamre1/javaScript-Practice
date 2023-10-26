// 'con' variable mein #container element ko select kiya gaya hai
var con = document.querySelector("#container")

// 'love' variable mein <i> element (heart icon) ko select kiya gaya hai
var love = document.querySelector("i")

// #container element par double click event listener lagaya gaya hai
con.addEventListener("dblclick", function(){
    // Heart icon ko dikhane ke liye transform aur opacity properties ko set kiya jata hai
    love.style.transform = 'translate(-50%, -50%) scale(1)'
    love.style.opacity = 0.8;

    // Ek timeout function ka istemal kiya gaya hai jo opacity ko 0 kar dega 1 second ke baad
    setTimeout(function() {
        love.style.opacity = 0;
    }, 1000);

    // Ek aur timeout function ka istemal kiya gaya hai jo icon ko phir se chhupane ke liye scale(0) par set karega 2 seconds ke baad
    setTimeout(function() {
        love.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 2000);
})
