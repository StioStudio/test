let text = "Hei, jeg heter Lana. Hva heter du?"
let output = document.querySelector(".text")
let counter = 0
let timeout;
let func = ()=>{
    output.textContent = `${text.slice(0, counter)}${Math.cos(Date.now()/300) > 0.5 ? "|" : ""}`
    counter++
    if(counter > text.length) {
        counter = 0
    }
    timeout = counter == 0 ? 1000 : (Math.random()*200+100)
    setTimeout(func, timeout)
}
func()
