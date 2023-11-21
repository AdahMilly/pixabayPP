const images = document.getElementsByTagName('img')

for (let img of images) {

    span = Math.ceil(img.clientHeight / 10)
    img.style.gridRowEnd = "span " + span
}