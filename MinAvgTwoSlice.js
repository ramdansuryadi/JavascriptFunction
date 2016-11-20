var min_pos = 0;
var min = Number.MAX_VALUE;

function solution(A) {
  for (var a = 0; a < A.length - 2; a++) {
    process((A[a] + A[a + 1]) / 2.0, a);
    process((A[a] + A[a + 1] + A[a + 2]) / 3.0, a);
  }

  process((A[A.length - 2] + A[A.length - 1]) / 2.0, A.length - 2);
  console.log(min_pos);
  return min_pos;
}

function process(val, a) {
  if (val < min) {
    min_pos = a;
    min = val;
  } else if (val === min && a < min_pos) {
    min_pos = a;
  }
}

var A = ["3","2","-6","3","1"];
solution(A);