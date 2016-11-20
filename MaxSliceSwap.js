function solution(A){
	var maxslice = A[0];
	var maxsliceafter = A[0];
	for (var i = 1; i < A.length; i++) {
		var tes = A[i];
		if (tes < 0){

		}else{
			maxsliceafter = Math.max(A[i], maxsliceafter + A[i]);
			maxslice = Math.max(maxslice, maxsliceafter);
		}
	};
	console.log(maxslice);
	return maxslice;
}
var A = [3,2,-6,3,1];
solution(A);

