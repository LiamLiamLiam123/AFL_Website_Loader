chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://www.afl.com.au/' });
});

document.getElementById('openAFL').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://www.afl.com.au/' });
});
