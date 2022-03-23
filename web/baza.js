//file:///D:/web/web.html
let people =[{
    Imags:"img/c0.png",
    NameLast:"Eduard Couly",
    Project : "MVP Launch",
    Mon:96,
    Tue:84,
    Web:108,
    Total:0
},
{
    Imags : "img/c1.png",
    NameLast : "Jenifer Sprouse",
    Project : "SMM Compaign",
    Mon:18,
    Tue:127,
    Web:81,
    Total:0
},
{
    Imags : "img/c2.png",
    NameLast :  "Dominic Young",
    Project : "Update 2.02",
    Mon:126,
    Tue:108,
    Web:90,
    Total:0
},
{
    Imags : "img/c3.png",
    NameLast :  "Anna Muller",
    Project : "Backlink Generation",
    Mon:12,
    Tue:12,
    Web:12,
    Total:0
},
{
    Imags : "img/c4.png",
    NameLast :  "Jeck Green",
    Project : "MVP Launch",
    Mon:90,
    Tue:135,
    Web:138,
    Total:0
}
];

const BtnPrimary1 = document.querySelector(".buttona1");
const BtnPrimary2 = document.querySelector(".buttona2");

BtnPrimary1.addEventListener("click",function(){
                        BtnPrimary1.classList.add("btn-primary");
                    //if(BtnPrimary2.className === "btn-primary")
                            BtnPrimary2.classList.remove("btn-primary");
                            tpel(people,1);
})
BtnPrimary2.addEventListener("click",function(){
                        BtnPrimary2.classList.add("btn-primary");
                    // if(BtnPrimary1.className === "btn-primary")
                            BtnPrimary1.classList.remove("btn-primary");
                            tpel(people,2);
        
})

const UserFilter = document.querySelector("#table");
function tpel(array,l)
{
//???
//  filtersUser.display = "block";
//  UserFilter.innerHTML = filtersUser.innerHTML;
//??????
// if (document.querySelectorAll(".classADD"))
//     document.querySelectorAll(".classADD").innerHTML = ``;
    i = 0;
    array.forEach(element => {
    let newElemen = document.createElement("tr");
    newElemen.classList.add("shado");
    if (l === 2)
        l = 4;
        
    newElemen.innerHTML =
    `
    <td ><img src=${element.Imags} /></td>
    <td>${element.NameLast}</td>
    <td>${element.Project}</td>
    <td>${element.Mon/l}$</td>
    <td>${element.Tue/l}$</td>
    <td>${element.Web/l}$</td>
    <td>${element.Total = (element.Web + element.Mon + element.Tue)/l}$</td>
    `;
    // var x = newElemen.childNodes;
    // x[0].style.src = `imag/c${i}.pmg`;
    // newElemen.childNodes.style.src = `imad/c${i}.pmg`;

    UserFilter.appendChild(newElemen);
    });
  }
const inputx = document.querySelector(".inputnumber");
inputx.addEventListener("change",function(e){
    document.querySelector("#inputnumber").innerHTML = inputx.value;
    console.log(inputx.value);
});
let fpfmt = function(e){
    const hoverx = document.querySelectorAll(".massaghover1a");
    const hs = document.querySelectorAll(".employee");
    for(let i = 0; i < hoverx.length; i++)
    {
        hoverx[i].dataset.order = i;
        hoverx[i].style.display = "none";
        hs[i].style.height = 20 + "%";
    }
    hs[e].style.height = 40 + "%";
    hoverx[e].style.display = "block";
    console.log(hoverx.length);
}
