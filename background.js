chrome.commands.onCommand.addListener(function (command) {
  if (command === "toggle-pin") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      const isPinned = currentTab.pinned;
      chrome.tabs.update(currentTab.id, { pinned: !isPinned });
    });
  }
});
