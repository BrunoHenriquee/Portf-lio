const openOrderModal = document.querySelectorAll("[data-open]")
const closeOrderModal = document.querySelectorAll("[data-close]")
const isVisible = "is-visible"

for(const el of openOrderModal){
    el.addEventListener("click", function(){
        const modalID = this.dataset.open
        document.getElementById(modalID).classList.add(isVisible)
    })

}
//fecha o modal pelo botão X
for (const el of closeOrderModal) {
    el.addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}
