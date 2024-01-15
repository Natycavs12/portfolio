// window.alert("q ondaa a ver si anda")

window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("abajo", this.window.scrollY>0)
})