var _themeRoot = "../Themes/Default";
var _scriptRoot = "../Script";
//var startDate = new Date();
//var startTime = startDate.getTime();

var myTop = top;
var isPopupWindow = false;

// !top.opener.closed
while (myTop.opener && !myTop.frames["_menu"] && !myTop.opener.closed){
	var b = (myTop.opener.name == "main" || myTop.opener.name == "footer");
	isPopupWindow = true;
	myTop = myTop.opener.top;
	if(b)break;
}

try {
	_scriptRoot = myTop.frames["_toolbar"].window._Script_Root;
	_themeRoot = myTop.frames["_toolbar"].window._Theme_Root;
} catch(exp) {
	//alert("Init base script url error invoked!");
}

/**
 * Import stylesheet
 */
try
{
    if (document.createStyleSheet)
    {
        var style = document.createStyleSheet(_themeRoot + "/Styles/Styles.css");
        style.addRule(".ListTable", "behavior: url(" + _scriptRoot + "/ListTable.htc)", 0);
        style.addRule(".Sys_DateBox", "behavior: url(" + _scriptRoot + "/DateTime.htc)", 0);
        style.addRule(".Sys_DateTimeBox", "behavior: url(" + _scriptRoot + "/DateTime.htc)", 0);
        style.addRule(".ListSource", "behavior: url(" + _scriptRoot + "/ListSource.htc)", 0);
        style.addRule(".DepartList", "behavior: url(" + _scriptRoot + "/DepartList.htc)", 0);
        //style.addRule(".lb-PopMenu", "behavior: url(" + _scriptRoot + "/PopMenu.htc)", 0);
        style.addRule(".ReportChart", "behavior: url(" + _scriptRoot + "/MSChart.htc)", 0);
        style.addRule(".OnlineService", "behavior: url(" + _scriptRoot + "/webservice.htc)", 0);
        //style.addRule(".Popup", "behavior: url(" + _scriptRoot + "/Popup.htc)", 0);
        style.addRule(".WorldDateTime", "behavior: url(" + _scriptRoot + "/WorldDateTime.htc)", 0);
    }
    else
    {
        //FF
        var cssObj = document.createElement("link");
        cssObj.type = "text/css";
        cssObj.rel = "stylesheet";
        cssObj.href = _themeRoot + "/Styles/Styles.css";
        document.getElementsByTagName('head').item(0).appendChild(cssObj);
    }
} catch(exp) {
	//alert(exp.description);
}
