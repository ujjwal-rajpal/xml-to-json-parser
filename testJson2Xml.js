/**
 *  function to clear a textarea
 */
function clear(){
   alert("ujjwal");
   console.log(ujjwal);
//   document.getElementById("xmlData1").value="";
}

/**
 *  function to clear
 *  @param {string} xml 
 */
function clearData(res,xmlData){
   document.getElementById(xmlData).value="";
   document.getElementById(res).value="";
   if(document.getElementById(res).style.display === "block")
   {
      document.getElementById(res).style.display = "none";
   }
}


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
   var pos = "left";
   var xml = document.getElementById("xmlData1").value;
   var json_result = esec(xml,pos);
   document.getElementById("res1").innerHTML = json_result;
}

/**
 *  function to convert 2nd Xml to json
 *    
 */

function esec2() {
   var pos = "right";
   var xml = document.getElementById("xmlData2").value;
   var json_result = esec(xml,pos);
   // loadJSON(json_result,callback);
   // document.getElementById("res2").style.display = "block";
   document.getElementById("res2").innerHTML = json_result;
   
}

// function callback(data){
   
// }

/**
 *  function to parse Xml to json
 *  @param {string} xml 
 */

function esec(xml,pos) {
   if(document.getElementById("error").style.display === "block")
   {
      document.getElementById("error").style.display = "none";
   }
   parser = new DOMParser();
   xmlDoc = parser.parseFromString(xml, "text/xml");
   // error handling
   if(isParseError(xmlDoc)) {
      // alert('Error parsing XML');

      document.getElementById("error").style.display = "block";
      document.getElementById("error").innerHTML="Error in parsing XML which is on " + pos;
      throw new Error('Error parsing XML');
  }

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

/**
 * Parse error
 * @param {parsedDocument} parsedDocument 
 */
function isParseError(parsedDocument) {
   // parser and parsererrorNS could be cached on startup for efficiency
   var parser = new DOMParser(),
       errorneousParse = parser.parseFromString('<', 'text/xml'),
       parsererrorNS = errorneousParse.getElementsByTagName("parsererror")[0].namespaceURI;

   if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
       // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
       return parsedDocument.getElementsByTagName("parsererror").length > 0;
   }

   return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
}