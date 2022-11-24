const modal = document.querySelector(".modal");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const closeButton = document.querySelector(".modal_content-close");

function openModal(){
    modal.classList.remove("hidden");
    modal.classList.add("visible");
}
button1.addEventListener("click", () => openModal())
button2.addEventListener("click", () => openModal())
button3.addEventListener("click", () => openModal())

closeButton.addEventListener("click", () => {
    console.log("here")
    modal.classList.remove("visible")
    modal.classList.add("hidden")
})