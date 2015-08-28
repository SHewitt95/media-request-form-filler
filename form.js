// Saves the button used to save user's information.
var button = document.querySelector('.button');

/**
* @param domElement: String; Name of DOM element to be queried.
* Returns a list of Strings that represent the info to be saved.
*/
function createList(domElement) {
  var myList = document.querySelectorAll(domElement);
  var listItems = [];
  for (var i = 0; i < myList.length; i++) {
    if (domElement == 'label') {
      listItems.push(myList[i].textContent);
    } else {
      listItems.push(myList[i].value);
    }
  }
  return listItems;
}

/**
* Saves the user's information.
*/
button.onclick = function saveChanges() {
  var inputs = createList('input');
  var info = {'Inputs': inputs};

  chrome.storage.sync.clear();
  chrome.storage.sync.set({'Information': info});
  alert("Your info has been saved.");
};

/**
* Fills input spots with saved info.
*/
window.onload = function loadInfo() {
  chrome.storage.sync.get('Information', function(result) {
    var myList = document.querySelectorAll('input');
    for (var i = 0; i < myList.length; i++) {
      myList[i].value = result.Information.Inputs[i];
    }
  });
}
