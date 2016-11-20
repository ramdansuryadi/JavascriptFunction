function solution(T) {

    var h = getHeight(T);
   
    if (h == null) {
        return undefined;
    }
    else {
        return h-1;
    }
}

function getHeight(t) {

 
    if (t == null) {
        return undefined;
    }
    else {
        var height = 1;
        var lHeight = 0;
        var rHeight = 0;

        if (t.l != null) {
            lHeight = getHeight(t.l);
         
        }
        if (t.r != null) {
            rHeight = getHeight(t.r);
           
        }

        if (lHeight > rHeight) {
            height += lHeight;
        }
        else {
            height += rHeight;
        }
         console.log(height);
        return height;

    }
}

var T =  {
    x: undefined,
    l: {
        x: undefined,
        l: {
            x: undefined,
            l: undefined,
            r: undefined
        },
        r: {
            x: undefined,
            l: undefined,
            r: undefined
        }
    },
    r: {
        x: undefined,
        l: {
            x: undefined,
            l: undefined, 
            r: undefined
        },
        r: undefined
    }
};

    
console.log(T);


solution(T);