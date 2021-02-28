var Playername;

var PlayerMove = document.getElementsByClassName("Move");

// var move = [{
//     // Playername: A,
//     // Move: rock/paper/scissor,
//     // dom: <img>
// }];
var move = [{}];

// 0 -> 2 Player 1's move
// 3 -> 5 Player 2's move
// 0 Rock, 1 Paper, 2 Scissor
for(let i = 0; i < 6; i++) {
    move.push({
        Playername: Playername,
        dom:PlayerMove[i]
    });
}
for(let i = 1; i < 7; i++) {
    move[i].dom.addEventListener("click", () => {
        if (i > 3) {
            mark = -100;
        } else {
            mark = 100;
        }
        move[i].dom.style.left += mark + "px";
    })
}