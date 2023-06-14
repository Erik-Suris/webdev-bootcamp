var heading = document.firstElementChild.lastElementChild.firstElementChild

heading.innerHTML = "Good Bye"
heading.style.color = "red"

document.querySelector("input").click()

document.getElementById("challenge").innerHTML = "Changed"

document.querySelectorAll("li")[1].innerHTML = "Another way"
document.querySelector("li a").innerHTML = "Even Links"
document.querySelector("li").style.color = "green"

document.querySelector("button").classList.toggle("invisible")
document.querySelector("button").classList.toggle("invisible")

document.querySelector("a").setAttribute("href", "https://www.bing.com")