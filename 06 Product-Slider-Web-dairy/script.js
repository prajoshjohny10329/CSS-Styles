let productColors = document.querySelectorAll('.product-color')

const changeBgColor = (currentElement) =>{
    
    // productColors.forEach((color)=>{
    //     color.classList.remove("active")
    // })

    for(color of productColors){
        color.classList.remove("active")
    }
    currentElement.classList.add("active")
    
}


const element = document.querySelector(".product-wrapper")

element.addEventListener("")



