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