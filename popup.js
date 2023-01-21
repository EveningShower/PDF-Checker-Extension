function updateStatus(status) {
  document.getElementById("status").innerHTML = status;
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var currentTab = tabs[0];
  if (currentTab.url.endsWith(".pdf")) {
    updateStatus("This is a PDF file.");
  } else {
    updateStatus("This is not a PDF file.");
  }
});
