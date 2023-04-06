const modal = document.querySelector(".modal");

function openModal(){
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    modal.classList.add("appear");
}

function closeModal(){
    modal.classList.remove("appear");
    modal.classList.add("disappear");
    setTimeout(() => {
        modal.classList.remove("visible")
        modal.classList.add("hidden")
        modal.classList.remove("disappear");
    }, 2500)
}
export {openModal, closeModal};