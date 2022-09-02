const str = document.querySelector(".heading").innerHTML;
console.log("str",str);

const chars = [...str];
console.log("chars",chars);

document.querySelector(".heading").innerHTML = chars.reduce((result,char) => result += `<span>${char}</span>` ,"");



