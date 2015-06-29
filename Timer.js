var time = 100;// Time //Время
var dtime = 100; //Default time //Время по умолчанию
function modTick(){ //Hook ModTick //Хук ModTick
	time--; 
	if(time==0){
		//Your code here //Твой код здесь
		time=dtime;
	}
}