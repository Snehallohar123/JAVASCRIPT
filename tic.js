let boxes=document.querySelectorAll("#r1");
let resetbtn=document.querySelector("#reset");
let turn=true;
const arr=[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((i)=>
{
    i.addEventListener("click",()=>{
        console.log("block clicked");
        if(turn)
            {
                i.innerText="0";
                turn=false;
            }
            else
            {
                i.innerText="X";
                turn=true;
            }
            i.disabled=true;
            check();
          
    });
});

const check = () => {
    for (let p of arr) {
        let p1 = boxes[p[0]].innerText;
        let p2 = boxes[p[1]].innerText;
        let p3 = boxes[p[2]].innerText;
        if (p1 != "" && p2 != "" && p3 !="") {
            if (p1 === p2 && p2 === p3) {
                console.log("winner");
                highlightWinner(p);
                disableAllBoxes();
                return;
            }
        }
    }
}


const highlightWinner = (combo) => {
    combo.forEach(index => {
        boxes[index].style.backgroundColor = "white";
    });
};

const disableAllBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

resetbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "rgb(14, 79, 107)";
    });
    turn = true;
});