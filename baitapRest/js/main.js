dom("#btnKhoi1").onclick = function(){
    const math = +dom("#inpToan").value;
    const physics = +dom("#inpLy").value;
    const chemistry = +dom("#inpHoa").value;

    const khoiLop1 = (calcAverage(math,physics,chemistry))/3;

    dom("#tbKhoi1").innerHTML = khoiLop1.toFixed(2);
}

dom("#btnKhoi2").onclick = function(){
    const literature = +dom("#inpVan").value;
    const history = +dom("#inpSu").value;
    const geography = +dom("#inpDia").value;
    const english = +dom("#inpEnglish").value;

    const khoiLop2 = (calcAverage(literature,history,geography,english))/4

    dom("#tbKhoi2").innerHTML = khoiLop2.toFixed(2);
}


const calcAverage = (...numbers) => {
    return numbers.reduce((result, value) => result + value ,0)
}


function dom(selector){
    return document.querySelector(selector);
}