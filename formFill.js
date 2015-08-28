/**
* Enters information into Media Request form's proper boxes.
*/
function loadMediaInfo() {
  chrome.storage.sync.get('Information', function(result) {
    var myList = document.querySelectorAll('input');
    var startingInputBox = 5;
    for (var i = 0; i < result.Information.Inputs.length; i++) {
      myList[startingInputBox].value = result.Information.Inputs[i];
      startingInputBox = startingInputBox + 1;
    }
  });
}

loadMediaInfo();
