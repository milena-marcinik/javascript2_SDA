const mainContainer = document.getElementById('main-container');
console.log(mainContainer);
const mainList = document.getElementById('main-list');
console.log(mainList);

const mainListItems = document.getElementsByClassName('main-list-item');
console.log(mainListItems);

const listItemsByTag = document.getElementsByTagName('li');
console.log(listItemsByTag);

const firstItem = document.querySelector('.main-list-item');
console.log(firstItem);

const mainListItemsQuerySelector = document.querySelectorAll('.main-list-item');
console.log(mainListItemsQuerySelector);


//Manipulacja DOM

const secondeList = document.querySelector('#second-list');
console.log('\n\n\n', secondeList);

const newItem = document.createElement('li');
newItem.innerText = 'Element 4';
newItem.classList.add('second-list-item');
secondeList.appendChild(newItem);

const secondeListItems = document.querySelectorAll('.second-list-item');
console.log(secondeListItems);
secondeListItems.forEach((item) => {
    if(item.innerText.includes('2')){
        secondeList.removeChild(item);
    }
});


secondeListItems[0].classList.add('first-item');
secondeListItems[secondeListItems.length-1].classList.add('last-item');
console.log(secondeListItems[1].classList.contains('first-item'));
// secondeListItems[secondeListItems.length-1].classList.remove('last-item');