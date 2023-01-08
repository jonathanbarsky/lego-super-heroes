const buttonOpenModal = document.querySelectorAll(".footer_button");
const onViewPort = document.querySelectorAll(".onViewPort");
const closeButton = document.querySelector(".modal_content-close");

buttonOpenModal.forEach((item => {
    item.addEventListener("click", async () => {
        const module = await import('./toggleModal.js')
        module.openModal();
    })
}))

closeButton.addEventListener("click", async () => {
    const modal = await import('./toggleModal.js')
    modal.closeModal();
})

let options = {
    root: null,
    rootMargin: "0px -20px 0px 0px",
    threshold: 0
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("appear")
        }  
    })    
}, options)
onViewPort.forEach((item) =>{
    observer.observe(item);
})