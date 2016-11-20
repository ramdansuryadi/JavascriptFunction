function solution(S) {
    var result = false;
    if(S.length === 1)
    {
        result = S;
    }
    if(S.length > 1 && S.length < 100)
    {
        var wordsAray = S.split(" ");
        var wordsCount = wordsAray.length;
        var reverseWordsString = '';
        for(var i=0; i<wordsCount; i++)
        {
            if(i > 0)
            {
                reverseWordsString = reverseWordsString + ' ';
            }
            reverseWordsString = reverseWordsString + wordsAray[i].split("").reverse().join("");
        }
        
        result = reverseWordsString;
    }
    
    return result;
}

console.log(solution("we test coders"));