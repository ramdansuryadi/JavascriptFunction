function solution(N){
	var dectobin = Number(N).toString(2);
	var dectobinstring = dectobin.toString();
	var dectobinstringlength = dectobinstring.length;
	var hitung = 0;
	var print = 0;

	for (var i = 0; i < dectobinstringlength; i++) {
		var data = dectobinstring.charAt(i);
		if (data == 0){
			hitung++;
		}else{
			if(hitung > print){
				var print = hitung;
			}
			var hitung = 0;
		}
	};
	return print;
}
solution(1041);

