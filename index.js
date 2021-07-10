var lists = [
  {
    domain:'google.com',
    sup: [
      '1@google.com',
      '2@google.com',
      '3@google.com',
      '4@google.com',
      '5@google.com',
      '6@google.com',
    ]
  },
  {
    domain:'facebook.com',
    sup: [
      '1@facebook.com',
      '2@facebook.com',
      '3@facebook.com',
    ]
  },
  {
    domain:'whatsapp.com',
    sup: [
      '1@whatsapp.com',
      '2@whatsapp.com',
      '3@whatsapp.com',
      '4@whatsapp.com',
    ]
  },
  {
    domain:'sabelhost.com',
    sup: [
      '1@sabelhost.com',
      '2@sabelhost.com',
      '3@sabelhost.com',
      '4@sabelhost.com',
      '5@sabelhost.com',
      '6@sabelhost.com',
      '7@sabelhost.com',
    ]
  },
];

var output =[];
var maxNoOfItems = 0;
var maxNoOfItems2 = 0;

function getemails (inputArray) {
  var arrOfSups= inputArray.map(emails => emails.sup )
  arrOfSups.forEach((item, i) => {
    maxNoOfItems2+= item.length;
  });
  maxNoOfItems = arrOfSups.sort().reverse()[0].length
  for (var i=0; i<maxNoOfItems ; i++){
     for (var j=0; j<arrOfSups.length ; j++){
       if(arrOfSups[j][i] !== undefined){
           output.push(arrOfSups[j][i])
       }
     }
  }
  console.log(maxNoOfItems, maxNoOfItems2);
}
getemails(lists);


//
// var data = [];
// var number = 0;
// lists.forEach((item,x) => {
//   getNewData(x)
// });
//
// function getNewData(x){
//     data.push(lists[x]['sup']) ;
//     number += lists[x]['sup'].length;
// }
//
//
// var dat=[];
// function getLastData(){
//   for (var i = 0; i < 100; i++) {
//     if(data[i]){
//       for (var x = 0; x < 1; x++) {
//         dat.push(data[i][x])
//         data[i].splice(dat[x],1)
//       }
//     }
//   }
// }
//
// for (var i = 0; i < number; i++) {
//   getLastData()
// }
// //
// dat = dat.filter(function( element ) {
//    return element !== undefined;
// })
// console.log(dat)
