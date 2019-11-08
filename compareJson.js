/**
 * Compares two json objects
 * @param obj1 json,
 * @param obj2 json,
 * @return jdiff json,
 */
function compareJSON(obj1, obj2) { 

    var ret = {
        added: [],
        removed: [],
        updated: [],
    };

    for(var i in obj2) { 
          // check object key existence
          if(!obj1.hasOwnProperty(i) || obj2[i] !== obj1[i]) {
            if(!Array.isArray(obj2[i]) || !(JSON.stringify(obj2[i]) == JSON.stringify(obj1[i]))){
                ret[i] = obj2[i];
            }
          } 
    }

    

    return ret; 
       
}

/**
 * Compares two json objects
 * @param obj1 json,
 * @param obj2 json,
 * @return jdiff json,
 */
function diffJson(obj, obj1) {
    for (var key, key1 in obj, obj1) {
        if ( obj.hasOwnProperty(key) 
             && obj1.hasOwnProperty(key1)) {
            
            var val = obj[key];
            var val1 = obj1[key1];
            console.log("Compared values, val1: ",val, " val2: ",val1);
            diffJson(val, val1);
        }
    }
}