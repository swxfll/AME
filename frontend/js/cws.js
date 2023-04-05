
function DownloadFile(fileURL) {

    if (fileURL.substring(fileURL.length - 3, fileURL.length).toUpperCase() == "PDF") {
        DownloadFileFinal(fileURL);
        return;
    }
  
    var fso;
    try {
        fso = new ActiveXObject("Scripting.FileSystemObject");
    }
    catch (exp) {
        DownloadFileFinal(fileURL);
        return;
    }
    var pFolder = "d:\\ERPReportTemp";
    if (!fso.FolderExists(pFolder)) {
        fso.CreateFolder(pFolder);
    }

    var xls;
    try {
        xls = new ActiveXObject("Excel.Application");
    }
    catch (exp) {
        try {
            xls = new ActiveXObject("et.Application");
        }
        catch (error) {
            DownloadFileFinal(fileURL);
            return;
        }
    }
    var pExcelName = "";
    try {
      
        var xlBook = xls.Workbooks.Open(fileURL);
        pExcelName = fileURL.substring(fileURL.lastIndexOf("/") + 1, fileURL.length);

        if (fso.FileExists(pFolder + "\\" + pExcelName)) {
            fso.DeleteFile(pFolder + "\\" + pExcelName, true);
        }
        xls.DisplayAlerts = false; ;
        xlBook.SaveAs(pFolder + "\\" + pExcelName);
        xls.DisplayAlerts = true;
        xls.Quit();
        xlBook = null;
    }
    catch (error) {
        xls.Quit();
        xlBook = null;
        xls = null;
        DownloadFileFinal(fileURL);
        return;
    }
    
    xlBook = xls.Workbooks.Open(pFolder + "\\" + pExcelName);
    xls.Visible = true;
    xlBook = null;
    xls = null;

	window.setTimeout("CollectGarbage()", 1);
    
	GCCollectGarbage()
}

function GCCollectGarbage()
{
	window.setTimeout("CollectGarbage()", 1);
}

function DownloadFileFinal(fileURL)
{
    var e = document.createElement("iframe");
    e.src = fileURL;
    e.style.display = "none";
    document.body.appendChild(e);
    //document.body.removeChild(e);
}

function DownloadFiles(fileURL)
{
    var arrfiles = new Array();
    arrfiles = fileURL.toString().split("$");
    var httphead = arrfiles[0].substring(0, arrfiles[0].lastIndexOf("/") + 1);
    var icount = arrfiles.length;
    var e = "";
    for(var i = 0; i < icount; i++)
    {
        e = document.createElement("iframe");
        if(arrfiles[i].indexOf("http") >= 0)
        {
            e.src = arrfiles[i];
        }
        else
        {
            e.src = httphead + arrfiles[i];
        }
        e.style.display = "none";
        //e.attributes("id") = "iframe" + i;
        e.setAttribute("id", "myiframe" + i);
        document.body.appendChild(e);
//        while(true)
//        {
//            if(CheckLoadEnd(e))
//            {
//                document.body.appendChild(e);
//                break;
//            }
//        }
    }
}

function CheckLoadEnd(e)
{
    //var iframe = e;
    //iframe.src = src;

    if (e.attachEvent){
        e.attachEvent("onload", function(){
            alert("Local iframe is now loaded2.");
            return true;
        });
    } else {
        e.onload = function(){
            alert("Local iframe is now loaded1.");
            return true;
        };
    }

    return false;
    
}

function iframeLoaded(iframeEl,callback) {
        if(iframeEl.attachEvent) {
            iframeEl.attachEvent("onload", function() {
                if(callback && typeof(callback) == "function") {
                    callback();
                }
            });
        } else {
            iframeEl.onload = function() {
                if(callback && typeof(callback) == "function") {
                    callback();
                }
            }
        }
    }
function callback(){
    
}

//pFilePath： 文件路径， pFolder：保存的文件夹，pExcelName：保存文件名
function SaveExcel(pFilePath, pFolder, pExcelName){
        var xls;
		var fso;
		try
		{
			fso = new ActiveXObject("Scripting.FileSystemObject");
		}
		catch(exp)
		{
			alert("要生成该报表，必须将浏览器须设置为可使用“ActiveX控件”。如有疑问，请点击浏览器的“帮助”了解浏览器设置方法！");
			return;
		}
		try{
		    xls = new ActiveXObject("Excel.Application");
		}
		catch(e)
		{
		    try
		    {
			    xls = new ActiveXObject("Et.Application");
		    }
		    catch(exp)
		    {
			    alert("要生成该报表，您必须安装“WPS”电子表格软件，同时浏览器须设置为可使用“ActiveX控件”。如有疑问，请点击浏览器的“帮助”了解浏览器设置方法！");
			    return;
		    }
		}

		if( !fso.FolderExists( "d:\\Shipping" ))
		{
			fso.CreateFolder("d:\\Shipping");
		}
		if( !fso.FolderExists( "d:\\Shipping\\" + pFolder ))
		{
			fso.CreateFolder("d:\\Shipping\\" + pFolder);
		}
		
		xls.DisplayAlerts = false;
		var xlBook = xls.Workbooks.Open(pFilePath);
		var xlsheet = xlBook.Worksheets(1);
		if( fso.FileExists("d:\\Shipping\\" + pFolder + "\\" + pExcelName + ".xls"))	
		{
			if(!confirm("d:\\Shipping\\" + pFolder + " 文件夹下已存在名称为" + pExcelName + "的Excel文件,是否要覆盖!"))
			{
				xls.Visible = true;	
				top.frames["footer"].window.SetStatus("");
				return; 
			}
		}
		
		xlBook.SaveAs("d:\\Shipping\\" + pFolder + "\\"+ pExcelName +".xls");
		
		xls.DisplayAlerts = false;
		xls.Quit();
}

//保存excel
function SaveExcelNew(fileURL, pSavePath, pIsOpen, pIsCover) 
{
    var fso;
    try {
        fso = new ActiveXObject("Scripting.FileSystemObject");
    }
    catch (exp) {
        DownloadFileFinal(fileURL);
        return;
    }
    var pFolder = pSavePath;
    if (!fso.FolderExists(pFolder)) {
        fso.CreateFolder(pFolder);
    }

    var xls;
    try {
        xls = new ActiveXObject("Excel.Application");
    }
    catch (exp) {
        try {
            xls = new ActiveXObject("et.Application");
        }
        catch (error) {
            DownloadFileFinal(fileURL);
            return;
        }
    }
    var pExcelName = "";
    var xlBook;
    var pIsSave = false;
    try {
        pExcelName = fileURL.substring(fileURL.lastIndexOf("/") + 1, fileURL.length);
        if (fso.FileExists(pFolder + pExcelName)) {
            if (!pIsCover) {
                if (confirm(pFolder + " 文件夹下已存在名称为" + pExcelName + "的Excel文件,是否要覆盖!")) {
                    pIsCover = true;
                }
            }
            if (pIsCover) {
                pIsSave = true;
            }
        }
        else {
            pIsSave = true;
        }

        if (pIsSave) {
            xlBook = xls.Workbooks.Open(fileURL);
            xls.DisplayAlerts = false;
            xlBook.SaveAs(pFolder + pExcelName);
            xls.DisplayAlerts = true;
        }
        xls.Quit();
        xlBook = null;
    }
    catch (error) {
        xls.Quit();
        xlBook = null;
        xls = null;
        DownloadFileFinal(fileURL);
        return;
    }
    if (pIsOpen) {
        xlBook = xls.Workbooks.Open(pFolder + pExcelName);
        xls.Visible = true;
    }
    xlBook = null;
    xls = null;

    window.setTimeout("CollectGarbage()", 1);

    GCCollectGarbage()
}

