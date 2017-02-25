const input = 'not-a-real-room-404[oarel]';

Array.prototype.naturalSort= function(){
    var a, b, a1, b1, rx=/(\d+)|(\D+)/g, rd=/\d+/;
    return this.sort(function(as, bs){
        a= String(as).toLowerCase().match(rx);
        b= String(bs).toLowerCase().match(rx);
        while(a.length && b.length){
            a1= a.shift();
            b1= b.shift();
            if(rd.test(a1) || rd.test(b1)){
                if(!rd.test(a1)) return 1;
                if(!rd.test(b1)) return -1;
                if(a1!= b1) return a1-b1;
            }
            else if(a1!= b1) return a1> b1? 1: -1;
        }
        return a.length- b.length;
    });
}

function getCharCount( chars ) {
  let counts = {};
  
  chars.forEach(itm => {
    counts[itm] = counts[itm] ? counts[itm]+1 : 1;
  });
  
  return counts;
}

input.split('\n').forEach( room => {
  console.log( room );
  let checksum = room.match(/\[\w+\]/g)[0],
      roomName = room.replace(/(\[\w+\])|(\W+|\d+)/g, '');
  
  console.log( 'Room name: ' + roomName );
  console.log( 'Checksum: ' + checksum );
  
  let chars = getCharCount( roomName.split('') ),
      charSort = [];
  
  Object.keys(chars).forEach( (key) => {
    charSort.push( chars[key] + key );
  } );
  
  
  charSort = charSort.sort((a,b) => {
    a=a.split(" ");
    b=b.split(" ");
    let an=parseInt(a[0],10);
    let bn=parseInt(b[0],10);
    console.log( an + '   |  ' + bn );
    console.log( an<bn?1:(an>bn?-1:(a[1]<b[1]?-1:(a[1]>b[1]?1:0))) );
    return an<bn?1:(an>bn?-1:(a[1]<b[1]?-1:(a[1]>b[1]?1:0)));
  });
  
  
  // .slice(0, 5)
  
  console.log( charSort );
  
  let createdChecksum = '[' + charSort.join('').replace(/\d/g, '') + ']';
  
  console.log( 'Created Checksum: ' + createdChecksum );
  
} );
