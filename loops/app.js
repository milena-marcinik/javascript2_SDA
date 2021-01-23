const invitedGuests = ['Anna', 'Jan', 'Andrzej', 'Piotr', 'Marcin'];

console.log('FOR');
for(let i = 0; i < invitedGuests.length; i++){
    
    if(invitedGuests[i] === 'Jan'){
        continue;
    }

    console.log('Witaj: ', invitedGuests[i]);

    if(i+1 >= 4){
        break;
    }
};


console.log('FOR EACH');
invitedGuests.forEach(function(guest, index){

    // if(invitedGuests[i] === 'Jan'){
    //     continue;
    // }

    console.log('Witaj: ', guest);
});


console.log('WHILE');
let i=0;
while(i < invitedGuests.length){

    if(invitedGuests[i] === 'Jan'){
        i++
        continue;
    }

    console.log('Witaj: ', invitedGuests[i]);
    i++;

    if(i+1 >= 4){
        break;
    }
}


console.log('DO WHILE');
let j=0;
do{
    if(invitedGuests[j] === 'Jan'){
        j++
        continue;
    }

    console.log('Witaj: ', invitedGuests[j]);
    j++;

    if(j+1 >= 4){
        break;
    }
}while(j < invitedGuests.length);
