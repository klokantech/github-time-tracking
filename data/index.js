var href = window.location.href;

var pattern = /^https:\/\/github.com\/(.*?)\/(.*?)\/(.*\d+)$/;
var m = href.match(pattern);
var el = document.getElementsByClassName('gh-header-number')[0];
var name = document.getElementsByClassName('js-issue-title')[0].innerHTML;
el.appendChild(getTrackingElement(m[1], m[2], m[2], name));

var ph = document.getElementsByTagName('script')[0];
ph.parentNode.insertBefore(getScriptElement(), ph);

function getScriptElement() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.innerHTML = "window._harvestPlatformConfig = { " +
        "'applicationName': 'GitHub', " +
        "'permalink': 'https://github.com/%ACCOUNT_ID%/%PROJECT_ID%/%ITEM_ID%', " +
        "'referral': '66lx'" +
        "}; " +
        "var s = document.createElement('script');" +
        "s.src = '//platform.harvestapp.com/assets/platform.js';" +
        "s.async = true;" +
        "var ph = document.getElementsByTagName('script')[0];" +
        "ph.parentNode.insertBefore(s, ph);";
    return s;
}
function getTrackingElement(account, project, item, name) {
    var div = document.createElement('div');
    div.className='harvest-timer';
    div.setAttribute('data-account', JSON.stringify({'id':account}));
    div.setAttribute('data-project', JSON.stringify({'id':project,'name':project}));
    div.setAttribute('data-item', JSON.stringify({'id':item,'name':name}));
    return div;
}