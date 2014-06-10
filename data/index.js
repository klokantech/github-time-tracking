var div = document.createElement('div');
div.className='harvest-timer minibutton';
div.style.padding='5px 10px';
div.style.width='auto';
div.style.height='auto';
div.style.border='1px solid #d5d5d5';
div.style['border-radius']='3px';
var el = document.getElementsByClassName('gh-header-actions')[0];
var href = window.location.href;
var pattern = /^https:\/\/github.com\/(.*?)\/(.*?)\/(.*\d+)$/
var m = href.match(pattern);
div.setAttribute('data-account', JSON.stringify({'id':m[1]}));
div.setAttribute('data-project', JSON.stringify({'id':m[2],'name':m[2]}));
div.setAttribute('data-item', JSON.stringify({'id':m[3],'name':document.getElementsByClassName('js-issue-title')[0].innerHTML}));
el.insertBefore(div, el.firstChild);
var init = "window._harvestPlatformConfig = { 'applicationName': 'GitHub', 'permalink': 'https://github.com/%ACCOUNT_ID%/%PROJECT_ID%/%ITEM_ID%', 'referral': '66lx'}; var s = document.createElement('script');s.src = '//platform.harvestapp.com/assets/platform.js';s.async = true;var ph = document.getElementsByTagName('script')[0];ph.parentNode.insertBefore(s, ph);";
var s = document.createElement('script');s.type = 'text/javascript';s.innerHTML = init;
var ph = document.getElementsByTagName('script')[0];
ph.parentNode.insertBefore(s, ph);
