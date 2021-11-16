p1n=localStorage.getItem("n1");
p2n=localStorage.getItem("n2");
p1s=0;
p2s=0;
document.getElementById("player1n").innerHTML=p1n+" :";
document.getElementById("player2n").innerHTML=p2n+" :";
document.getElementById("player1s").innerHTML=p1s;
document.getElementById("player2s").innerHTML=p2s;
document.getElementById("playerq").innerHTML="Question Turn: "+p1n;
document.getElementById("playera").innerHTML="Answer Turn: "+p2n;

function submit(){
   getword=document.getElementById("word").value;
   word=getword.toLowerCase();

   c1=word.charAt(0)
   mid=Math.floor(word.length/2)
   c2=word.charAt(mid)
   last=word.length-1
   c3=word.charAt(last)

   r1=word.replace(c1,"_")
   r2=r1.replace(c2,"_")
   r3=r2.replace(c3,"_")
   
   q1="<h4 id='word_display'> Q: "+r3+" </h4> ";
   i1="<br> A:<input type='text' id='ibox'>  ";
   b1="<br><br><button class='btn btn-info' onclick='check()'>CHECK</button> ";
   total=q1+i1+b1
   document.getElementById("output").innerHTML=total;
   document.getElementById("word").value="";
}
Qturn="player1";
Aturn="player2";
function check(){
    getAns=document.getElementById("ibox").value;
    ans=getAns.toLowerCase()
    if(ans == word){
        if(Aturn == "player1"){
            p1s=p1s+1;
            document.getElementById("player1s").innerHTML=p1s;
        }
        else{
            p2s=p2s+1;
            document.getElementById("player2s").innerHTML=p2s;
        }
    }
    if(Qturn == "player1"){
        Qturn="player2";
        document.getElementById("playerq").innerHTML="Question turn : "+p2n;
    }
    else{
        Qturn="player1";
        document.getElementById("playerq").innerHTML="Question turn : "+p1n;
    }
    if(Aturn == "player1"){
        Aturn="player2";
        document.getElementById("playera").innerHTML="Answer turn : "+p2n;
    }  
    else{
        Aturn="player1";
        document.getElementById("playera").innerHTML="Answer turn : "+p1n;
    }
    document.getElementById("output").innerHTML="";
}