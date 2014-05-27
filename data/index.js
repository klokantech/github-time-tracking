if (window.location.href.match(/^https:\/\/github.com\/(.*?)\/(.*?)\/(.*\d+)$/))
{
    updateGitHub();
    window.setInterval(function() { updateGitHub(); }, 3000);
}
else if (window.location.href.match(/^https:\/\/huboard.com\/.*$/))
{
    alert('huboard not integrated yet');
}

function updateGitHub() {
    if (document.getElementsByClassName("harvest-timer").length == 0) {
        addScriptElement();
        var m = window.location.href.match(/^https:\/\/github.com\/(.*?)\/(.*?)\/(.*\d+)$/);
        var name = document.getElementsByClassName('js-issue-title')[0].innerHTML;
        document.getElementsByClassName('gh-header-number')[0].appendChild(
            getTrackingElement(m[1], m[2], m[3], name)
        );
    }
}
function addScriptElement() {
    var s = document.createElement('script');
    var ph = document.getElementsByTagName('script')[0];

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
    ph.parentNode.insertBefore(s, ph);
}
function getTrackingElement(account, project, item, name) {
    var div = document.createElement('div');
    div.className='harvest-timer';
    div.setAttribute('data-account', JSON.stringify({'id':account}));
    div.setAttribute('data-project', JSON.stringify({'id':project,'name':project}));
    div.setAttribute('data-item', JSON.stringify({'id':item,'name':name}));
    return div;
}
