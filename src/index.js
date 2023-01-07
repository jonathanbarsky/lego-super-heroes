const modal = document.querySelector(".modal");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const closeButton = document.querySelector(".modal_content-close");
const onViewPort = document.querySelectorAll(".onViewPort");

function openModal(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    modal.classList.add("appear");
}
button1.addEventListener("click", () => openModal())
button2.addEventListener("click", () => openModal())
button3.addEventListener("click", () => openModal())

closeButton.addEventListener("click", () => {
    modal.classList.remove("appear");
    modal.classList.add("disappear");
    setTimeout(() => {
        modal.classList.remove("visible")
        modal.classList.add("hidden")
        modal.classList.remove("disappear");
    }, 2500)
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("appear")
        }  
    })    
})
onViewPort.forEach((item) =>{
    observer.observe(item);
})