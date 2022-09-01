const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"]

dom("#colorContainer").addEventListener("click",(evt) =>{
    const elColor = evt.target.getAttribute("color");
    const activeColor = document.querySelectorAll(".color-button")
    // console.log(activeColor);
    const house = dom("#house")

    // Change house

    // function check(elColor){
    //     return colorList.find((color) => color === elColor)
    // }
    // const result = check(elColor);

    const result = (elColor) =>{
        return colorList.find((color) => color === elColor)
    }

    if(result){
        house.className = `house ${elColor}`;
    }
    
    // Active
    const checkIndex = colorList.findIndex((color) => color === elColor)

    // DOM tìm class active không có === null thì không làm gì cả nếu có class active là !== null thì xóa class active
    let element = dom(".active")
    // console.log(element)
    if(element !== null){
        element.classList.remove("active");
    }
    activeColor[checkIndex].classList.add("active");

})


// ====================
function dom(selector){
    return document.querySelector(selector);
}