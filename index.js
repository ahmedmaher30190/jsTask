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

var data = [];
lists.forEach((item,x) => {
  getNewData(x)
});

function getNewData(x){
    data.push(lists[x]['sup']) ;
}


var dat=[];
function aaaa(){
  for (var i = 0; i < 100; i++) {
    if(data[i]){
      for (var x = 0; x < 1; x++) {
        dat.push(data[i][x])
        data[i].splice(dat[x],1)
      }
    }
  }
}

for (var i = 0; i < 100; i++) {
  aaaa()
}
//
dat = dat.filter(function( element ) {
   return element !== undefined;
})
console.log(dat)
