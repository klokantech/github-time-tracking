var div = document.createElement('div');
div.className='harvest-timer';
var el = document.getElementsByClassName('issue-number')[0];
var href = window.location.href;
var pattern = /^https:\/\/github.com\/(.*?)\/(.*?)\/(.*\d+)$/
var m = href.match(pattern);
div.setAttribute('data-account', JSON.stringify({'id':m[1]}));
div.setAttribute('data-project', JSON.stringify({'id':m[2],'name':m[2]}));
div.setAttribute('data-item', JSON.stringify({'id':m[3],'name':document.getElementsByClassName('js-topic-title')[0].innerHTML}));
el.appendChild(div);
var init = "window._harvestPlatformConfig = { 'applicationName': 'GitHub', 'permalink': 'https://github.com/%ACCOUNT_ID%/%PROJECT_ID%/%ITEM_ID%', 'referral': '66lx'}; var s = document.createElement('script');s.src = '//platform.harvestapp.com/assets/platform.js';s.async = true;var ph = document.getElementsByTagName('script')[0];ph.parentNode.insertBefore(s, ph);";
var s = document.createElement('script');s.type = 'text/javascript';s.innerHTML = init;
var ph = document.getElementsByTagName('script')[0];
ph.parentNode.insertBefore(s, ph);