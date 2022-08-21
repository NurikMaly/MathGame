var first_btn=document.getElementById("one");
var second_btn=document.getElementById("two");
var third_btn=document.getElementById("three");
var text=document.getElementById("text");
const points=document.getElementById("point");
var point=0;
let q=["5 - 3 = ?","8 + 6 = ?","16 : 4 = ?","5 * 8 = ?","13 + 14 = ?","22 - 15 = ?","4 * 8 = ?","21 / 7 = ?","22 + 13 = ?"];
let b1=["2","16","8","35","29","7","36","4","33"];
let b2=["1","13","4","40","24","5","32","6","35"];
let b3=["4","14","2","55","27","8","28","3","37"];
var b=5;
var c=0;
    first_btn.onclick=function but1(){
    if(text.innerHTML=="10 + 20 = ?"){point+=1;first_btn.innerHTML=b1[0];second_btn.innerHTML=b2[0]; third_btn.innerHTML=b3[0];text.innerHTML=q[0];points.innerHTML="Points / Очки : " + point;}
    else if (text.innerHTML==q[0]){point+=1;first_btn.innerHTML=b1[1];second_btn.innerHTML=b2[1];third_btn.innerHTML=b3[1];text.innerHTML=q[1];points.innerHTML="Points / Очки : " + point;}
    else if (text.innerHTML==q[1]){first_btn.innerHTML=b1[2];second_btn.innerHTML=b2[2];third_btn.innerHTML=b3[2];text.innerHTML=q[2];}
    else if (text.innerHTML==q[2]){first_btn.innerHTML=b1[3];second_btn.innerHTML=b2[3];third_btn.innerHTML=b3[3];text.innerHTML=q[3];}
    else if (text.innerHTML==q[3]){first_btn.innerHTML=b1[4];second_btn.innerHTML=b2[4];third_btn.innerHTML=b3[4];text.innerHTML=q[4];}
    else if (text.innerHTML==q[4]){first_btn.innerHTML=b1[5];second_btn.innerHTML=b2[5];third_btn.innerHTML=b3[5];text.innerHTML=q[5];}
    else if (text.innerHTML==q[5]){point+=1;first_btn.innerHTML=b1[6];second_btn.innerHTML=b2[6];third_btn.innerHTML=b3[6];text.innerHTML=q[6];points.innerHTML="Points / Очки : " + point;}
    else if (text.innerHTML==q[6]){first_btn.innerHTML=b1[7];second_btn.innerHTML=b2[7];third_btn.innerHTML=b3[7];text.innerHTML=q[7];}
    else if (text.innerHTML==q[7]){first_btn.innerHTML=b1[8];second_btn.innerHTML=b2[8];third_btn.innerHTML=b3[8];text.innerHTML=q[8];}
    else if (text.innerHTML==q[8]){first_btn.innerHTML=b1[9];second_btn.innerHTML=b2[9];third_btn.innerHTML=b3[9];text.innerHTML='Количество очков : '+ point;}
    if(text.innerHTML=='Количество очков : '+ point){first_btn.innerHTML='';second_btn.innerHTML='';third_btn.innerHTML='';document.getElementById("again").innerHTML="Сыграт снова ";document.getElementById("start").innerHTML=" Главный меню ";}
}


second_btn.onclick=function but2(){  
    if(text.innerHTML=="10 + 20 = ?"){ first_btn.innerHTML=b1[0];second_btn.innerHTML=b2[0];third_btn.innerHTML=b3[0];text.innerHTML=q[0];}
    else if (text.innerHTML==q[0]){first_btn.innerHTML=b1[1];second_btn.innerHTML=b2[1];third_btn.innerHTML=b3[1];text.innerHTML=q[1];}
    else if (text.innerHTML==q[1]){first_btn.innerHTML=b1[2];second_btn.innerHTML=b2[2];third_btn.innerHTML=b3[2];text.innerHTML=q[2];}
    else if (text.innerHTML==q[2]){point+=1;first_btn.innerHTML=b1[3];second_btn.innerHTML=b2[3];third_btn.innerHTML=b3[3];text.innerHTML=q[3];points.innerHTML="Points / Очки : " + point;}
    else if (text.innerHTML==q[3]){point+=1;first_btn.innerHTML=b1[4];second_btn.innerHTML=b2[4];third_btn.innerHTML=b3[4];text.innerHTML=q[4];points.innerHTML="Points / Очки : " + point;}
    else if (text.innerHTML==q[4]){first_btn.innerHTML=b1[5];second_btn.innerHTML=b2[5];third_btn.innerHTML=b3[5];text.innerHTML=q[5];}
    else if (text.innerHTML==q[5]){first_btn.innerHTML=b1[6];second_btn.innerHTML=b2[6];third_btn.innerHTML=b3[6];text.innerHTML=q[6];}
    else if (text.innerHTML==q[6]){point+=1;first_btn.innerHTML=b1[7];second_btn.innerHTML=b2[7];third_btn.innerHTML=b3[7];text.innerHTML=q[7];points.innerHTML="Points / Очки : " + point;}
    else if (text.innerHTML==q[7]){first_btn.innerHTML=b1[8];second_btn.innerHTML=b2[8];third_btn.innerHTML=b3[8];text.innerHTML=q[8];}
    else if (text.innerHTML==q[8]){point+=1;first_btn.innerHTML=b1[9];second_btn.innerHTML=b2[9];third_btn.innerHTML=b3[9];text.innerHTML='Количество очков : '+ point;points.innerHTML="Points / Очки : " + point;}
    if(text.innerHTML=='Количество очков : '+ point){first_btn.innerHTML='';second_btn.innerHTML='';third_btn.innerHTML='';document.getElementById("again").innerHTML="Сыграт снова ";document.getElementById("start").innerHTML=" Главный меню ";}
}
third_btn.onclick=function but3(){    
    if(text.innerHTML=="10 + 20 = ?"){ first_btn.innerHTML=b1[0]; second_btn.innerHTML=b2[0]; third_btn.innerHTML=b3[0];text.innerHTML=q[0];}
    else if (text.innerHTML==q[0]){ first_btn.innerHTML=b1[1];second_btn.innerHTML=b2[1];third_btn.innerHTML=b3[1];text.innerHTML=q[1];}
    else if (text.innerHTML==q[1]){point+=1;first_btn.innerHTML=b1[2];second_btn.innerHTML=b2[2];third_btn.innerHTML=b3[2];text.innerHTML=q[2];points.innerHTML="Points / Очки : " + point;}
    else if (text.innerHTML==q[2]){first_btn.innerHTML=b1[3];second_btn.innerHTML=b2[3];third_btn.innerHTML=b3[3];text.innerHTML=q[3];}
    else if (text.innerHTML==q[3]){first_btn.innerHTML=b1[4];second_btn.innerHTML=b2[4];third_btn.innerHTML=b3[4];text.innerHTML=q[4];}
    else if (text.innerHTML==q[4]){point+=1;first_btn.innerHTML=b1[5];second_btn.innerHTML=b2[5];third_btn.innerHTML=b3[5];text.innerHTML=q[5];points.innerHTML="Points / Очки : " + point;}
    else if (text.innerHTML==q[5]){first_btn.innerHTML=b1[6];second_btn.innerHTML=b2[6];third_btn.innerHTML=b3[6];text.innerHTML=q[6];}
    else if (text.innerHTML==q[6]){first_btn.innerHTML=b1[7];second_btn.innerHTML=b2[7];third_btn.innerHTML=b3[7];text.innerHTML=q[7];}
    else if (text.innerHTML==q[7]){point+=1;first_btn.innerHTML=b1[8];second_btn.innerHTML=b2[8];third_btn.innerHTML=b3[8];text.innerHTML=q[8];points.innerHTML="Points / Очки : " + point;}
    else if (text.innerHTML==q[8]){first_btn.innerHTML=b1[9];second_btn.innerHTML=b2[9];third_btn.innerHTML=b3[9];text.innerHTML='Количество очков : '+ point;}
    if(text.innerHTML=='Количество очков : '+ point){first_btn.innerHTML='';second_btn.innerHTML='';third_btn.innerHTML='';document.getElementById("again").innerHTML="Сыграт снова ";document.getElementById("start").innerHTML=" Главный меню ";}
}


function s(){
  
    if(c==0&&b==0){
       return;

   }
    if(c==0){
        b--;
        c=60;

    }
    if(b<0){

        b=60;

    }
    if(c!==0){
        check=setTimeout(function() {

        c--;
           document.getElementById("outer2").innerHTML= c + " sec  ";
    document.getElementById("outer3").innerHTML=b + " min : ";
s();
  }, 1000);
};

    document.getElementById("outer2").innerHTML= c + " sec  ";
    document.getElementById("outer3").innerHTML=b + " min : ";

}
s();