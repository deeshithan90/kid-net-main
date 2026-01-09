var userdata = document.getElementById("user-data")
var SideNavbar = document.querySelector(".Side-Navbar")
var number1 = document.querySelector(".number1")
var number2 = document.querySelector(".number2")
var root = document.getElementById("root")

function call(){
    const data = JSON.parse(localStorage.getItem("username"))
    const data2 = JSON.parse(localStorage.getItem("number"))
    const data3 = JSON.parse(localStorage.getItem("adders"))
   userdata.innerHTML = `<h2>${data}</h3>
            <h4>${data2}</h4>
            <h4>${data3}</h4>`
}

call()

function openNavbar(){
    SideNavbar.style.left = "0%"
}

function closepopup(){
    SideNavbar.style.left = "-60%"
}


function add(){
    try {
       const answer = number1.value + number2.value 
       root.innerHTML = `<h3>${answer}</h3>`      
    } catch (error) {
        console.log(error)
    }
}