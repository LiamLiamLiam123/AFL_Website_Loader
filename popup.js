console.log('AFL Website Loading...');
console.log('Loading...')

document.getElementById('openAFL').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://www.afl.com.au/' });
  });
  