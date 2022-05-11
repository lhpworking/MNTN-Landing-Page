
let activeLinkSlider = () => {
    let sliderLinks = document.querySelectorAll(".hero__slider--num li");
    sliderLinks.forEach((sliderLink) => {
        sliderLink.addEventListener("click", function (e) {
            removeSliderLink(sliderLinks)
            this.classList.add("active")
        })
    })
}
let removeSliderLink = (sliderLinks) => {
    sliderLinks.forEach((sliderLink) => sliderLink.classList.remove("active"))
}
activeLinkSlider();