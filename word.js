function words(w){
	var array_elements = w.split(" ");
    array_elements = array_elements.sort();
    var current = null;
    var cnt = 0;
    var obj = {};
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                obj[current] = cnt; // '{' +  + ':' +  + '}';
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        obj[current] = cnt; // '{' +  + ':' +  + '}';
    }
    return obj;
}
exports.words = words;

// console.log(words("this is word for test this"));