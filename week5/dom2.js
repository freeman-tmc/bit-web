// function redBorder() {
//     var element = document.querySelector('div img:nth-child(2)');
//     element.className ='redBorder';
//     var element = document.querySelectorAll('div img:nth-child(2)')[1];
//     element.className ='redBorder';
//     var element = document.querySelectorAll('div')[1].firstElementChild;
//     element.className ='redBorder';
// }
// redBorder();

// function traversing() {
//     // var element = document.querySelectorAll('div')[1];
//     // element.children[1].className='borderNone';
//     var element = document.querySelector('div:nth-child(2) img:nth-child(2)');
//     element.className='borderNone';
// }
// traversing();

// /////////

function lists() {
    var listica = document.querySelector('ul').textContent;
    alert(listica);
    var listica1 = document.querySelector('ul li:nth-child(2)').firstChild.nodeValue;
    alert(listica1);
}

lists();


function addSelect(arr, element) {
    var content = '<select>\n';
    for (var i = 0; i < arr.length; i++) {
        content += '<option>' + arr[i] + '</option>\n';
    }
    content += '</select>\n';
    element.innerHTML = content;
}

var selectElement = document.querySelector('div:nth-child(4)');
addSelect(['prvi', 'drugi', 'treci'], selectElement);





function addSelect(arr, element) {
    var selectEl = document.createElement('select');
    element.appendChild(selectEl);
    for (var i = 0; i < arr.length; i++) {
        var currentOption = document.createElement('option');
        var currentChild = document.createTextNode(arr[i]);
        currentOption.appendChild(currentChild);
        selectEl.appendChild(currentOption);
    }
}

var selectElement = document.querySelector('div:nth-child(5)');
addSelect(['sesti', 'sedmi', 'peti'], selectElement);




function validate() {
    var inputFields = document.querySelectorAll('input');
    for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].hasAttribute('required') && inputFields[i].value == '') {
            inputFields[i].classList.add('required');
        }
    }

}

validate();