function login(){
    name1=document.getElementById("player1_name_input").value;
    name2=document.getElementById("player2_name_input").value;
    localStorage.setItem("n1",name1);
    localStorage.setItem("n2",name2);
    window.location="game.html";
}