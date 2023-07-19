// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.snippet) {
      // Insert the snippet into the active tab
      insertSnippet(request.snippet);
      sendResponse({ success: true });
    }
  });
  
  // Function to insert the snippet into the active tab
  function insertSnippet(snippet) {
    // Perform the necessary actions to insert the snippet into the active tab
    // For example, you can use the following code to insert the snippet at the current cursor position in a text input or textarea field:
    var activeElement = document.activeElement;
    if (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA") {
      var startPos = activeElement.selectionStart;
      var endPos = activeElement.selectionEnd;
      var currentValue = activeElement.value;
      activeElement.value = currentValue.substring(0, startPos) + snippet + currentValue.substring(endPos);
    }
  }
  