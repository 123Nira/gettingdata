const data = [
    { "drugName": "Crocin Tablet", "drugId": "d1234", "in_stock": true, "drugSafety": "LASA" },
    { "drugName": "Paracetamol", "drugId": "d1235", "in_stock": false, "drugSafety": "NARCOTIC" },
    { "drugName": "Calpol", "drugId": "d1236", "in_stock": true, "drugSafety": "LASA" },
    { "drugName": "Centrizine 50", "drugId": "d1237", "in_stock": true, "drugSafety": "HIGH RISK" },
    { "drugName": "Calpol 80", "drugId": "d1238", "in_stock": false, "drugSafety": "HIGH RISK" },
    { "drugName": "Paracetamol 500", "drugId": "d1230", "in_stock": true, "drugSafety": "NARCOTIC" },
    { "drugName": "Calpol 50", "drugId": "d1239", "in_stock": false, "drugSafety": "LASA" },
    { "drugName": "Paracetamol 40", "drugId": "d1233", "in_stock": false, "drugSafety": "NARCOTIC" }
]

// 1. Get All the drugs
// 2. get drug detail by drugId
// 3. get drug by in_stock flag
// 4. delete drug by drugId

 data.map((item)=>{
    console.log(item)
    )}
          
        
 

  // 2. get drug detail by drugId 

 var filtered = data.filter(a => console.log(a.drugName+" " +  a.drugId ) )


 // 4. delete drug by drugId

 var newList = [];
for (var i = 0; i < data.length; i++) {
     if (data[i].in_stock === true) {
         newList.push(data[i]);
   }
}
// console.log(newList);
