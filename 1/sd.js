
v=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]
vm = v.splice(Math.floor(Math.random()*45)+1,1);
vm1 = v.splice(Math.floor(Math.random()*44)+1,1);
vm2= v.splice(Math.floor(Math.random()*43)+1,1);
vm3 = v.splice(Math.floor(Math.random()*42)+1,1);
vm4 = v.splice(Math.floor(Math.random()*41)+1,1);
vm5 = v.splice(Math.floor(Math.random()*40)+1,1);
b=v.splice(Math.floor(Math.random()*39)+1,1);
window.onload = function(){
uootext = document.getElementById("uoo_text"); 
uootext1 = document.getElementById("uoo_text1"); 
uootext2 = document.getElementById("uoo_text2"); 
uootext3 = document.getElementById("uoo_text3"); 
uootext4 = document.getElementById("uoo_text4"); 
uootext5 = document.getElementById("uoo_text5"); 
}
function rpcInputButtonClick(){

com=[vm,vm1,vm2,vm3,vm4,vm5]
uoo = [uootext1.value,uootext2.value,uootext3.value,uootext4.value,uootext5.value,uootext.value]
w=com.sort((a,b)=>a-b)
ww=uoo.sort((a,b)=>a-b)
win = 0;

for(var i=0;i<=5;i=i+1){
    for(var j=0;j<=5;j=j+1){
        
        if(com[i]==uoo[j]){
            win = win + 1;
        }}}
        var str = "";
switch(win){
    case 0:
    case 1:
    case 2:
        str = "꽝!!! 다음기회에";
        break;
    case 3:
        str = "5등에 당첨되셨습니다.";
        break;
    case 4:
        str = "4등에 당첨되셨습니다.";
        break;
    case 5:
        str = "3등에 당첨되셨습니다.";
        for(var i=0;i<6;i=i+1){
            if(b==uoo[i]){    // 보너스 번호가 3등 당첨 유저의 나머지 한번호와 일치하는경우
                // 2등 처리
                str = "2등에 당첨되셨습니다.";
            }}
    case 6:
        str = "1등에 당첨되셨습니다.";
        break;        
}

uo = [w +'보너스'+b+'<br>' + win + '<br>' +ww+'<br>'+str ]
document.write(uo)

}