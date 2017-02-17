var turn="n";
var index=0;
var count=0;
var score_0=0;
var score_x=0;
var toss_driver=1;
var flag=false;
var b=document.getElementsByTagName('input');
 color_array = new Array("violet","indigo","blue","green","yellow","orange","red");
 function rainbow(){
     for(var i=1;i<=document.getElementsByClassName("input").length;i++){
         document.getElementById(i).style.backgroundColor=color_array[index];
     }
     index+=1;
     if(index<color_array.length){
         setTimeout(rainbow,300);
     }
     else{
         index=0;
     setplayarea();
     window.alert("TOSS WINNER "+turn);
     }
 }
 function begin_maze(){
     for(var i=1;i<10;i++){
        document.getElementById(i).value="";
        document.getElementById(i).completed="true";
        document.getElementById(i).clicked="treu";
        document.getElementById(i).style.backgroundColor="red"
        toss_driver=1;
     }
       freeze();
 }
function freeze(){
       for(var i=1;i<10;i++){
        document.getElementById(i).readOnly=true;
       }
    
}

function toss(){
     if(toss_driver){
         toss_driver=0;  
    turn_array=["X","0"];
    rainbow();
    turn=turn_array[Math.floor((Math.random(0,2)*2))];
     }
}
function setplayarea(){
    for(var i=1;i<10;i++){
        var b= document.getElementById(i);
        b.readOnly=false;
        b.clicked=false;
        b.completed=false;
   
      b.onmouseenter = function(event){
          b=document.getElementById(event.target.id);
            if(b.clicked==false && b.completed==false){
                b.style.backgroundColor="yellow";
            }
        }
          b.onmouseleave = function(event){
        b=document.getElementById(event.target.id);
        if(b.clicked==false && b.completed==false){
            b.style.backgroundColor="red";
        }
    }
            b.onkeypress=function(event){
             b=document.getElementById(event.target.id);   
            if(b.clicked==false && b.completed==false){
          if(event.key=="x" || event.key=="X"){
              if(turn=="X"){
              b.value="X";
              b.style.background="green";
              b.clicked=true;
              b.completed=true;
              b.readOnly=true;
            turn="0";
            count+=1;
            if(count>=5){setTimeout(check("X",b.id), 2000); }
        }
              else{
                  window.alert("wrong turn"); 
                  b.blur();
              }
          }
    else if(event.key=="o" || event.key=="0" || event.key=="O" ){
           if(turn=="0"){
               b.value="0";
              b.style.background="green";
              b.clicked=true;
              b.completed=true;
           b.readOnly=true;
        turn="X";
        count+=1
        if(count>=5){setTimeout(check("0",b.id), 2000); }
    }
           else{
               window.alert("wrong turn");
               b.blur();
           }
        }
    else{
        window.alert("wrong input");
        b.blur();
    }

}
        } 

}
}
function reload(){
   begin_maze();
}  
function check(winner,curr_box){
 a=b[0].value+b[1].value+b[2].value;
 c=b[0].value+b[3].value+b[6].value;
 d=b[0].value+b[4].value+b[8].value;
 e=b[1].value+b[4].value+b[7].value;
 f=b[2].value+b[5].value+b[8].value;
 g=b[3].value+b[4].value+b[5].value;
 h=b[6].value+b[7].value+b[8].value;
 i=b[6].value+b[4].value+b[2].value;
 w=winner+winner+winner;
 if(curr_box=="1"){
     if(a===w || b===w||c===w){
         flag=true;
     }
 }
 else if(curr_box=="2"){
     if(e===w||a===w){
         flag=true;
     }
 }
 else if(curr_box=="3"){
     if(f===w||a===w||i===w){
         flag=true;
     }
 }
     else if(curr_box=="4"){
         if(c===w||g===w){
             flag=true;
         }
     }
     else if(curr_box=="5"){
         if(d===w||e===w||i===w||g===w){
           flag=true;
         }

     }
     else if(curr_box=="6"){
         if(g===w||f===w){
             console.log(g);
             console.log(w);
             console.log(f);
             flag=true;
         }
     }
     else if(curr_box=="7"){
         if(c===w||i===w||h===w){
            flag=true;
         }
     }
     else if(curr_box=="8"){
         if(e===w||h===w){
             flag=true;
         }
     }
     else if(curr_box=="9"){

         if(f===w||h===w||d===w){
             flag=true;
         }
     }
     if(flag){
         window.alert(winner);
         if(winner=="X"){
             score_x+=1;
             document.getElementById("player_x").innerHTML=score_x;
         }
         else{
             score_0+=1;
              document.getElementById("player_0").innerHTML=score_0;

         }
         count=0;
         freeze();
         flag=0;
     }
 }
begin_maze();