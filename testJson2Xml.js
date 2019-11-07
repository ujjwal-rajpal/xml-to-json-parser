



function compare() {
   var
      remoteJSON = document.getElementById("res1").value,
      localJSON = document.getElementById("res2").value;

   console.log(_.isEqual(remoteJSON, localJSON));
}

/**
 *  function to convert first Xml to json
 *    
 */

function esec1() {
   var xml = document.getElementById("xmlData1").value;
   var json_result = esec(xml);
   document.getElementById("res1").innerHTML = json_result;
}

/**
 *  function to convert 2nd Xml to json
 *    
 */

function esec2() {
   var xml = document.getElementById("xmlData2").value;
   var json_result = esec(xml);
   document.getElementById("res2").innerHTML = json_result;
}

/**
 *  function to parse Xml to json
 *  @param {string} xml 
 */

function esec(xml) {

   parser = new DOMParser();
   xmlDoc = parser.parseFromString(xml, "text/xml");
   json_result = xmlToJson(xmlDoc);
   json_result = JSON.stringify(json_result);
   return json_result;
}


/**
 * Changes XML to JSON
 * Modified version from here: http://davidwalsh.name/convert-xml-json
 * @param {string} xml XML DOM tree
 */
function xmlToJson(xml) {
   // Create the return object
   var obj = {};

   if (xml.nodeType == 1) {
      // element
      // do attributes
      if (xml.attributes.length > 0) {
         obj["@attributes"] = {};
         for (var j = 0; j < xml.attributes.length; j++) {
            var attribute = xml.attributes.item(j);
            obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
         }
      }
   } else if (xml.nodeType == 3) {
      // text
      obj = xml.nodeValue;
   }

   // do children
   // If all text nodes inside, get concatenated text from them.
   var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
      return node.nodeType === 3;
   });
   if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
      obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
         return text + node.nodeValue;
      }, "");
   } else if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
         var item = xml.childNodes.item(i);
         var nodeName = item.nodeName;
         if (typeof obj[nodeName] == "undefined") {
            obj[nodeName] = xmlToJson(item);
         } else {
            if (typeof obj[nodeName].push == "undefined") {
               var old = obj[nodeName];
               obj[nodeName] = [];
               obj[nodeName].push(old);
            }
            obj[nodeName].push(xmlToJson(item));
         }
      }
   }
   return obj;
}
