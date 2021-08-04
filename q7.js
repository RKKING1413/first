//Q.7 > Create a nested array object called operatingSystem 
//and add below key and values Name - Ubuntu , version - 18.4 , license - open source
                                      

var operatingSystem = [{}
]
operatingSystem = [...operatingSystem,{"name" : "ubantu"}]                                             
operatingSystem = [...operatingSystem,{"version" : 18.4}]           
operatingSystem = [...operatingSystem,{"license" : "open_source"}]   


console.log(operatingSystem);                                        

/*
// [object object]
   Array(4) [ {}, {…}, {…}, {…} ]
0: Object {  }
1: Object { name: "ubantu" }
2: Object { version: 18.4 }
3: Object { license: "open_source" }
length: 4 
 */
