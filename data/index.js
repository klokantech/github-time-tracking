if (document.getElementsByClassName("harvest-timer").length == 0) {
    updatePage();
    window.setInterval(function() { updatePage(); }, 3000);
}

function updatePage() {
    if (document.getElementsByClassName("harvest-timer").length == 0) {
        addScriptElement();
        if (window.location.href.match(/^https:\/\/github.com\/(.*?)\/(.*?)\/(.*\d+)$/))
        {
            appendGitHub();
        }
        else if (window.location.href.match(/^https:\/\/huboard.com\/.*$/))
        {
            appendHuboard();
        }
    }
}
function appendHuboard() {
    if (document.getElementsByClassName('fullscreen-header').length > 0) {
        var basic = document.getElementsByClassName('fullscreen-header')[0].innerText.match(/^(.*) #(\d+)/);
        var url = window.location.href.match(/^https:\/\/huboard.com\/(.*?)\/(.*?)#\/issues\/(.*\d+)$/);
        var data = { 'account' : url[1], 'project' : url[2], 'id' : 'issues/' + basic[2], 'name' : basic[1] };
        document.getElementsByClassName('fullscreen-header')[0].children[0].appendChild(createTrackingElement(data));
    }
}
function appendGitHub() {
    var url = window.location.href.match(/^https:\/\/github.com\/(.*?)\/(.*?)\/(.*\d+)$/);
    var name = document.getElementsByClassName('js-issue-title')[0].innerHTML;
    var data = { 'account' : url[1], 'project' : url[2], 'id' : url[3], 'name' : name };
    document.getElementsByClassName('gh-header-number')[0].appendChild(createTrackingElement(data));
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
function createTrackingElement(data) {
    var div = document.createElement('div');
    div.className='harvest-timer';
    div.setAttribute('data-account', JSON.stringify({ 'id' : data.account }));
    div.setAttribute('data-project', JSON.stringify({ 'id' : data.project, 'name' : data.project }));
    div.setAttribute('data-item', JSON.stringify({ 'id' : data.id, 'name' : data.name }));
    return div;
}
