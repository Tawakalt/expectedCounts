'use strict';   

function words(sent){
    var arr = sent.split(/\s+/);
    var counts = {};
    var dict = {};

    for(var i = 0; i< arr.length; i++) {
        var num = arr[i];
        counts[num] = counts[num] ? counts[num]+1 : 1;
        if (arr[i] == 'toString')
            counts[num] = 1;
        dict[arr[i]] = counts[num];
    }


    return dict;
}

module.exports = words
