//身份证号对应的省份信息
var _Province = new Object(); 
_Province["42"] = "湖北";
_Province["43"] = "湖南";
_Province["50"] = "重庆";
_Province["51"] = "四川";
_Province["37"] = "山东";
_Province["62"] = "甘肃";
_Province["44"] = "广东";
_Province["45"] = "广西";
_Province["41"] = "河南";
_Province["46"] = "海南";
_Province["36"] = "江西";
_Province["13"] = "河北";
_Province["34"] = "安徽";
_Province["33"] = "浙江";
_Province["35"] = "福建";
_Province["23"] = "黑龙江";
_Province["22"] = "吉林";
_Province["61"] = "陕西";
_Province["32"] = "江苏";
_Province["14"] = "山西";
_Province["65"] = "新疆";
_Province["63"] = "青海";
_Province["52"] = "贵州";
_Province["15"] = "内蒙古";
_Province["21"] = "辽宁";
_Province["53"] = "云南";
_Province["11"] = "北京";
_Province["12"] = "河北";
_Province["64"] = "宁夏";		
/**
 * 身份证帐号类
 */
function IDCard(idCard18)
{
	this.IsValid = true;
	this.ErrorInfo = "";
	this.WarnInfo = "";

	if (idCard18.length != 15 && idCard18.length != 18)
	{
		this.IsValid = false;
		this.ErrorInfo = "身份证号长度不正确！";
		return;
	}

	this.IDCard18 = idCard18;
	this.IDCard15 = idCard18;
	this.Sex = 0; // 0: 女; 1: 男
	this.BirthDay = new Date();

	if (idCard18.length == 18 && (idCard18.substring(17,18) == "X" || idCard18.substring(17,18) == "*"))
	{
		if (isNaN(idCard18.substring(0,17)))
		{
			this.IsValid = false;
			this.ErrorInfo = "身份证号应该全部是数字或17位数字加一个\"X\"或\"*\"！";
			return;
		}
	}
	else
	{
		if (isNaN(idCard18))
		{
			this.IsValid = false;
			this.ErrorInfo = "身份证号应该全部是数字或17位数字加一个\"X\"或\"*\"！";
			return;
		}
	}

	var date = new Date();
	var year;
	var month;
	var day;
	
	if (this.IDCard18.length == 18)
	{
		if (this.IDCard18.substring(10, 11) == "0")
		{
			month = parseInt(this.IDCard18.substring(11, 12))
		}
		else
		{
			month = parseInt(this.IDCard18.substring(10, 12))
		}

		if (this.IDCard18.substring(12, 13) == "0")
		{
			day = parseInt(this.IDCard18.substring(13, 14))
		}
		else
		{
			day = parseInt(this.IDCard18.substring(12, 14))
		}

		if (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) < 16 || (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) == 16 && date.getMonth() + 1 < month) || (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) == 16 && date.getMonth() + 1 == month && date.getDate() < day))
		{
			this.IsValid = false;
			this.ErrorInfo = "未满十六岁！";
			return;
        }
        else if (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) < 18 || (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) == 18 && date.getMonth() + 1 < month) || (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) == 18 && date.getMonth() + 1 == month && date.getDate() < day)) 
        {
            this.IsValid = false;
            this.WarnInfo = "未满十八岁！";
        }
		else if (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) > 50 || (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) == 50 && date.getMonth() + 1 > month) || (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) == 50 && date.getMonth() + 1 == month && date.getDate() > day))
		{
			this.IsValid = false;
			this.WarnInfo = "超过五十岁！";
		}
		
		this.IDCard15 = this.IDCard18.substring(0, 6) + this.IDCard18.substring(8, 17);
		year = this.IDCard18.substring(6, 10);
	}
	else
	{
		if (this.IDCard15.substring(8, 9) == "0")
		{
			month = parseInt(this.IDCard15.substring(9, 10))
		}
		else
		{
			month = parseInt(this.IDCard15.substring(8, 10))
		}

		if (this.IDCard15.substring(10, 11) == "0")
		{
			day = parseInt(this.IDCard15.substring(11, 12))
		}
		else
		{
			day = parseInt(this.IDCard15.substring(10, 12))
		}

		if (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) < 16 || (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) == 16 && date.getMonth() + 1 < month) || (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) == 16 && date.getMonth() + 1 == month && date.getDate() < day))
		{
			this.IsValid = false;
			this.ErrorInfo = "未满十六岁！";
			return;
        }
        else if (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) < 18 || (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) == 18 && date.getMonth() + 1 < month) || (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) == 18 && date.getMonth() + 1 == month && date.getDate() < day)) 
        {
            this.IsValid = false;
            this.WarnInfo = "未满十八岁！";
        }
		else if (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) > 50 || (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) == 50 && date.getMonth() + 1 > month) || (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) == 50 && date.getMonth() + 1 == month && date.getDate() > day))
		{
			this.IsValid = false;
			this.WarnInfo = "超过五十岁！";
		}
		
		year = "19" + this.IDCard15.substring(6, 8);
	}

	if (this.IDCard15.substring(8, 9) == "0")
		month = this.IDCard15.substring(9, 10);
	else
		month = this.IDCard15.substring(8, 10);
	
	if (this.IDCard15.substring(10, 11) == "0")
		day = this.IDCard15.substring(11, 12);
	else
		day = this.IDCard15.substring(10, 12);
		
	if (!IsValidDate(year + "-" +  month + "-" + day))
	{
		this.IsValid = false;
		this.ErrorInfo = "身份证的出生年月日不正确！";
		return;
	}
	
	this.Province = _Province[this.IDCard15.substring(0,2)];
	if (this.Province == null)
	{
		this.IsValid = false;
		this.ErrorInfo = "没有该身份证号对应的省份的信息！";
		return;
	}
			
	if (this.IDCard15.substring(14, 15) % 2 == 0)
		this.Sex = 0;
	else
		this.Sex = 1;
				
	/*this.BirthDay.setFullYear(parseInt(year));
	this.BirthDay.setMonth(parseInt(month) - 1);
	this.BirthDay.setDate(parseInt(day));*/
	this.BirthDay = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}
		
//检测文本框是否为空
function EditPage_CheckBlank(obj,caption){
	if(String_Replace(obj.value," ","")==""){
		try
		{
			obj.select();
		}
		catch(e)
		{
		}
		alert(caption+"不能为空！");
		obj.focus();
		return false;
	}
	return true;
}

//Yuling Added.
//除掉两端空格
function String_Trim( srcString )
{
	var idx=0;
	for ( var i = 0; i < srcString.length; i++ )
	{
		if ( srcString.charAt( i ) == ' ' )
			idx = i+1;
		else
			break;
	}
	srcString = srcString.substr(idx);
	if ( srcString != "" )
	{
		idx = 0;
		for ( var i = srcString.length-1; i >= 0 ; i-- )
		{
			if ( srcString.charAt( i ) != ' ' )
			{
				idx = i+1;
				break;
			}
		}
		srcString = srcString.substr(0, idx);
	}
	return srcString;
}

//替换函数
function String_Replace(srcString,findString,replaceString){
	return String_ReplaceB(srcString, findString, replaceString, 0);
}
function String_ReplaceB(srcString, findString, replaceString, startPos){
	var intLeft	= srcString.indexOf(findString, startPos);
	if ( (startPos >= (srcString.length)) || intLeft < 0) {
		return srcString;
	}
	var intRight= intLeft + findString.length;
	return String_ReplaceB(srcString.substring(0,intLeft)+replaceString+srcString.substring(intRight), findString, replaceString, intLeft + replaceString.length);
}

//控件获得焦点
function Object_Focus(obj){
	obj.select();
	obj.focus();
}

//检查是否为正确的日期格式
function IsValidDate(value){
	var isValid = false;
	try{
		var arr = value.split("-");
		
		arr[0] = parseInt(parseFloat(arr[0]));
		arr[1] = parseInt(parseFloat(arr[1]));
		arr[2] = parseInt(parseFloat(arr[2]));

		if(arr[0] > 1753 && arr[0] <= 9999 && arr[1] > 0 && arr[1] < 13 && arr[2] > 0 && arr[2] < 32){
			var dt = new Date();
			/*dt.setFullYear(arr[0]);
			dt.setMonth(arr[1] - 1);
			dt.setDate(arr[2]);*/
			dt.setFullYear(arr[0], arr[1] - 1, arr[2]);

			if(dt.getDate() == arr[2]){
				isValid = true;
			}
		}
	}catch(exp){
	}
	return isValid;
}

//取字符串字节长度
function String_GetLength(str){
	var i,rt=0;
	for(i=0;i<str.length;i++)
	{
		rt++;
		if(str.charCodeAt(i)>256)rt++;
	}
	return rt;
}

//检测Text控件是否超长
function Text_CheckLength(obj,caption,len) {
	if(obj && obj.value){
		var length = String_GetLength(obj.value);
		if(length > len){
			Object_Focus(obj);
			alert(caption + "长度(" + length + "字节)不能超过" + len + "字节(汉字占2字节)！");
			return false;
		}
	}
	return true;
}

//取字符为整数
function getInt(num){
	return parseInt(getFloat(num));
}

//取字符为浮点数
function getFloat(num){
	num	= parseFloat(num);
	if(isNaN(num)) num = -2147483647;
	return num;
}

//检查是否为浮点数
function isValidFloat(numberStr)
{
	var i, ch, dotCount=0;

	numberStr += "";
	if (numberStr == "" || numberStr == "-")
		return false;
	if (numberStr.charAt(0) == "-")
		numberStr = numberStr.substring(1);
	for (i = 0; i < numberStr.length; i++)
	{
		ch = numberStr.charAt(i);
		if (ch == '.')
		{
			dotCount++;
			if (dotCount > 1)
				return false;
		}
		else if (ch < '0' || ch > '9')
		{
			return false;
		}
	}
	return true;
}
/*function isValidFloat(num){
	var re = /^-?\d+(.?\d+)?$/ig;
	
	return re.test(num);
}*/

//检查是否为整数
function isValidInt(numberStr)
{
	var i, ch;

	numberStr += "";
	if (numberStr == "" || numberStr == "-")
		return false;
	if (numberStr.charAt(0) == "-")
		numberStr = numberStr.substring(1);
	for (i = 0; i < numberStr.length; i++)
	{
		ch = numberStr.charAt(i);
		if (ch < '0' || ch > '9')
		{
			return false;
		}
	}
	return true;
}
/*function isValidInt(num){
	var re = /^-?\d+$/ig;
	
	return re.test(num);
}*/

function Integer_CheckValid(obj, caption, min, max) {
	if(obj && obj.value){
		if (!isValidInt(obj.value)){
			alarm(obj, caption + "必须为整数！");
			return false;
		}
		var num = getInt(obj.value);
		if(num < min) {			
			alarm(obj, caption + "必须为整数并且最小值为" + min + "！");
			return false;
		}
		if(num > max) {			
			alarm(obj, caption + "最大值" + max + "！");
			return false;
		}
	}else{
		return false;
	}
	return true;
}

function Float_CheckValid(obj, caption, min, max) {
	if(obj && String_Trim(obj.value)){
		if (!isValidFloat(String_Trim(obj.value))){
			alarm(obj, caption + "必须为数值！");
			return false;
		}
		var num = getFloat(String_Trim(obj.value));
		if(num < min) {
			alarm(obj, caption + "必须为数值并且最小值为" + min + "！");
			return false;
		}
		if(num > max) {
			alarm(obj, caption + "最大值" + max + "！");
			return false;
		}
	}else{
		return false;
	}
	return true;
}

// 检查正则表达式
// obj:			对象
// rgExp:		可为RegExp表达式或者字符串
// caption:		提示标题
// allowEmpty:	是否允许为空，默认为允许
function RegExp_Test(obj, rgExp, caption, allowEmpty)
{
	if(obj.value == "")
	{
		if(allowEmpty == false)
		{
			if(event && event.srcElement == obj)
			{
				event.returnValue = false;
				event.cancelBubble = true;
			}
			alert(caption + "不能为空！");
			obj.focus();
			try{obj.select()}catch(ex){}
			return false;
		}
		else
			return true;
	}

	if(rgExp.constructor != RegExp)
	{
		rgExp = new RegExp(rgExp, "i");
	}
	if(rgExp.test(obj.value) == false)
	{
		if(event && event.srcElement == obj)
		{
			event.returnValue = false;
			event.cancelBubble = true;
		}
		alert(caption + "输入不正确，请检查！");
		obj.focus();
		try{obj.select()}catch(ex){}
		return false;
	}
	return true;
}

// TextArea中响应Tab键
function MemoBox_OnKeyDown(){
	if(event.keyCode == 9){
		var range = event.srcElement.createTextRange( );
		if (range != null) {
			//alert(range.htmlText);
			range.execCommand("OverWrite", false, "\t");
		}
		event.returnValue = false;
		event.cancelBubble = true;
	}
}

//Author:Sutar
//CreateDate:2004-8-26
/*
* this function is used to get current date,it's format like this:xxxx-xx-xx;
*/
function current_Date()
{
	var the_date = new Date();
	var the_year = the_date.getYear();
	var the_month = the_date.getMonth()+1;
	var the_day = the_date.getDate();
	var current_Date = the_year+"-"+the_month+"-"+the_day;
	return current_Date;
}

/**
 * 提示信息并定位光标
 * Added by Lindy
 */
function alarm(obj, message)
{
	alert(message);
	obj.value = "";
	obj.focus();
	if(event)
	{
		event.cancelBubble = true;
		event.returnValue = false;
	}
}

/**
 * 检测控件的值是否为合法的金额。如合法，则在输入为整数的金额后面自动加上小数点和两个零。
 * 例：输入为 15，则显示为 15.00
 * 参数  obj:要检验的控件
 *       message:输入的金额非法时的提示信息，默认为“不是有效的金额格式！”
 * Added by lindy    2004/9/24
 * Edited by Robert  2005/1/5  输入金额不能超过小数点后两位,pFeecount为自定义的金额数目，
 *			若不要此参数，则默认为 100000;(注意:不要超过数字的最大极限;)
 */
function ValidateFee(obj, pMessage, pFeecount)
{
	if(!obj) return false;
	
	var Feecount = pFeecount;
	if(!pFeecount)  Feecount = 100000;
	
	var message = pMessage;
	if(!pMessage) message = "不是有效的金额格式！";
	
	if(obj.value)
	{
		if(!isValidFloat(obj.value))
		{
			alarm(obj, message);
			return false;
		}
		
		if(obj.value >= Feecount)
		{
			alarm(obj, "金额不能多于 " +  Feecount + " ！");
			return false;
		}
			
		var positionOfDot = obj.value.indexOf(".");
		var n = obj.value.length - positionOfDot - 1;
		if((n != obj.value.length) && (n > 3))
		{
			alarm(obj, "金额只能输入小数点后三位");
			return false;
		}	
		
		if(positionOfDot == -1)
		{
			obj.value += ".000";
		}				
	}
	return true;
}

/**
 * 检测控件的值是否为合法的Email地址。
 * Added by Lindy
 */
function ValidateEmail(objEmail)
{
	if(!objEmail || !objEmail.value) return true;
	
	//var pattern = /^[_\w]+[\w\.\-_]*@\w+(\.\w+){1,2}$/i;
	var pattern = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	if(!pattern.test(objEmail.value))
	{
		alarm(objEmail, "Email地址无效！");
		return false;
	}
	
	return true;
}

/** 
 * 检测控件的值是否为合法的日期。
 * 本方法将格式为年月日串连的字符串（如：19810101）和由“-”符号分隔的字符串（如：1981-01-01）视为合法的日期。
 * Added by lindy  2004/9/24
 */
function ValidateDate(obj)
{
	if(!obj || !obj.value)  return true;
	
	var year, month, day;
	if(obj.value.indexOf('-') == -1)
	{
		if(!/^\d{8}$/.test(obj.value))
		{
			alarm(obj, "日期格式错误！正确的日期格式示例：20050101 或 2005-01-01");
			return false;
		}
		
		year = obj.value.substring(0, 4);
		month = obj.value.substring(4, 6);
		day = obj.value.substring(6, 8);
	}
	else
	{
		if(!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(obj.value))
		{
			alarm(obj, "日期格式错误！正确的日期格式示例：20050101 或 2005-01-01");
			return false;
		}
		
		var arrDate = obj.value.split('-');
		year = arrDate[0];
		month = arrDate[1];
		day = arrDate[2];
	}
	
	if(year < 1754)
	{
		alarm(obj, "年份必须大于1753！");
		return false;
	}
		
	if(month < 1 || month > 12)
	{
		alarm(obj, "月份必须在 1 和 12 之间！");
		return false;
	}
		
	var daysOfMonth = CalculateMonth(year, month);
	if(day == 0)
	{
		alarm(obj, "日期必须大于0！");
		return false;
	}
	if(day > daysOfMonth)
	{
		alarm(obj, year + " 年 " + month + " 月没有 " + day + " 天！");
		return false;
	}

	if (month.length == 1) month = "0" + month;
	if (day.length == 1) day = "0" + day;

	obj.value = year + "-" + month + "-" + day;
	return true;
}

function CheckInputDate(value)
{
	if(value == "")  return true;
	
	var year, month, day;
	if(value.indexOf('-') == -1)
	{
		if(!/^\d{8}$/.test(value))
		{
			alert("日期格式错误！正确的日期格式示例：20050101 或 2005-01-01");
			return false;
		}
		
		year = value.substring(0, 4);
		month = value.substring(4, 6);
		day = value.substring(6, 8);
	}
	else
	{
		if(!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(value))
		{
			alert("日期格式错误！正确的日期格式示例：20050101 或 2005-01-01");
			return false;
		}
		
		var arrDate = value.split('-');
		year = arrDate[0];
		month = arrDate[1];
		day = arrDate[2];
	}
	
	if(year < 1754)
	{
		alert("年份必须大于1753！");
		return false;
	}
		
	if(month < 1 || month > 12)
	{
		alert("月份必须在 1 和 12 之间！");
		return false;
	}
		
	var daysOfMonth = CalculateMonth(year, month);
	if(day == 0)
	{
		alert("日期必须大于0！");
		return false;
	}
	if(day > daysOfMonth)
	{
		alert(year + " 年 " + month + " 月没有 " + day + " 天！");
		return false;
	}

	if (month.length == 1) month = "0" + month;
	if (day.length == 1) day = "0" + day;

	value = year + "-" + month + "-" + day;
	return true;
}

/**
 * 将一个包含日期的字符串转换成一个日期对象，该字符串的格式可以是年月日串连的字符串（如：19810101），也
 * 可以是有其他分隔符（由pSeparator参数说明）的字符串（如：1981-01-01）。必须保证参数的日期格式正确。
 * Added by Lindy
 */
function ParseDate(pDateString, pSeparator)
{
	var separator = pSeparator;
	if(!pSeparator)
	{
		separator = '-';
	}

	var arrDate = pDateString.split(separator);	
	var year, month, day;
	
	if(arrDate.length == 1)
	{
		year = pDateString.substring(0, 4);
		month = pDateString.substring(4, 6);
		day = pDateString.substring(6, 8);
	}
	else
	{
		year = arrDate[0];
		month = arrDate[1];
		day = arrDate[2];
	}
	
	var theDate = new Date();
	theDate.setTime(Date.parse(year + "/" + month + "/" + day));
	
	return theDate;
}

/**
 * 本方法有两种用途：
 * 如果 pSubtract 为 true，则返回两个日期之间的天数；
 * 如果 pSubtract 为 false，则比较两个日期，如果结束日期大于开始日期返回 true，否则返回 false。
 * 参数说明：
 *     pStartDate：开始日期，格式可以是年月日串连的字符串（如：19810101），也可以是有其他分隔符（由pSeparator参数说明）的字符串（如：1981-01-01）。
 *　　 pEndDate：  结束日期，格式同开始日期。
 *　   pSubtract： 标示函数的返回结果的布尔值。默认值为 false。
 * 　　pSeparator：日期分隔符，默认为“-”。
 * 注意：使用本方法必须保证参数的日期格式正确。
 * Added by Lindy
 */
function compare_Date(pStartDate, pEndDate, pSubtract, pSeparator)
{
	var startDate = ParseDate(pStartDate, pSeparator);
	var endDate = ParseDate(pEndDate, pSeparator);	
	
	var blnSubtract = false;
	if(pSubtract)
	{
		blnSubtract = pSubtract;
	}
	
	if(blnSubtract)
	{
		return Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
	}
	else
	{
		if(startDate.getTime() > endDate.getTime())
		{
			return false;
		}
		return true;
	}
}

/**
 * 检测控件的值是否为合法的日期，并确保结束日期不小于开始日期。
 * Added by lindy  2004/9/24
 */
function CompareDate(objStart, objEnd, message)
{
	if(!objStart || !objEnd)
	{
		return false;
	}
		
	if(!ValidateDate(objStart))
	{
		return false;
	}
		
	if(!ValidateDate(objEnd))
	{
		return false;
	}
	
	if((objStart.value) && (objEnd.value) && (!compare_Date(objStart.value, objEnd.value)))
	{
		alarm(objEnd, message);
		return false;
	}
	
	return true;
}

/**
 *检查是否为正确的时间格式
 *Added by matrix  2004/11/17
 */
function IsValidTime(obj)
{
	var isValid = false;
	try{
			arrTime = obj.value.split(":");
			
			if((arrTime[0].length <= 2) && (arrTime[1].length == 2))
			{
				arrTime[0] = parseInt(parseFloat(arrTime[0]));
				arrTime[1] = parseInt(parseFloat(arrTime[1]));
				if((arrTime[0] >= 0 && arrTime[0] <= 23) && (arrTime[1] >= 0 && arrTime[1] <= 59))
				{
					var dt = new Date();
					dt.setHours(arrTime[0]);
					dt.setMinutes(arrTime[1]);

					if(dt.getMinutes() == arrTime[1])
					{
						isValid = true;
					}
				}
			}
	}catch(exp){
	}
	return isValid;
}


/** 
 *  检测控件的值是否为合法的时间
 *  Added by matrix  2004/11/17
 */
function ValidTime(obj)
{

	if(!obj || !obj.value)  
		return true;
	
	if(isValidInt(obj.value) && String_GetLength(obj.value) == 4)
	{
		var hour = obj.value.substring(0, 2);
		var minute = obj.value.substring(2, 4);
		
				
		if(hour < 0 || hour > 23)
		{
			alarm(obj, "输入的小时数必须在 0 和 23 之间！");
			return false;
		}
		
		if(minute < 0 || minute > 59)
		{
			alarm(obj, "输入的分钟数必须在 0 和 59 之间！");
			return false;
		}

		obj.value = hour + ":" + minute;

	}
	
	if(!IsValidTime(obj))
	{
		alarm(obj, "时间格式错误！正确的时间格式示例：0800 或 08:00");
		return false;
	}
	
	return true;
}


/**
 *  检测控件的值是否为合法的日期，并确保结束日期不小于开始日期,结束时间不小于开始时间
 *  Added by matrix  2004/11/17
 */
function CompareTime(objStartDate, objEndDate,  objStartTime, objEndTime, message)
{
	if(!objStartDate || !objEndDate || !objStartTime || !objEndTime)
		return false;
		
	if(!ValidateDate(objStartDate))
		return false;
		
	if(!ValidateDate(objEndDate))
		return false;
		
	if(!ValidTime(objStartTime))
		return false;
		
	if(!ValidTime(objEndTime))
		return false;
		
	if((objStartDate.value) && (objEndDate.value) && (objStartTime.value) && (objEndTime.value) && (!compare_Time(objStartDate, objEndDate, objStartTime, objEndTime)))
	{
		alert(message);
		return false;
	}
	return true;
}

//Author:Matrix
//CreateDate:2004-11-18
/*
* this function is used to get current time,it's format like this: xx:xx;
*/
function current_Time()
{
	var the_date = new Date();
	var the_Hour = the_date.getHours();
	var the_minute = the_date.getMinutes();
	
	if(the_minute > 0 && the_minute < 10)
	{
		var current_Time = the_Hour + ":0" + the_minute;
	}
	else
	{
		var current_Time = the_Hour + ":" + the_minute;
	}
	return current_Time;
}

/**
 * 比较日期，如果开始时间大于结束时间返回 false，否则返回 true
 * 参数说明：
 *     pStartDate：开始日期，格式可以是年月日串连的字符串（如：19810101），也可以是有其他分隔符（由pSeparator参数说明）的字符串（如：1981-01-01）
 *　　 pEndDate：结束日期，格式同开始日期
 *     pStartTime：开始时间，格式可以是小时分钟串连的字符串（如：1751），也可以是有其他分隔符（由pSeparator参数说明）的字符串（如：17:51）
 *　　 pEndTime：结束时间，格式同开始时间
 *　   pSubtract：一个布尔值，表明本函数返回值的类型。如果是 true，则返回值为结束时间与开始时间的差值（以分钟计数），如果是 false，则返回值
 *                为一个布尔值，表明两个时间的比较结果（开始时间大于结束时间返回 false，反之返回 true）。默认值为 false
 * 　　pSeparator： 时间的分隔符，默认为 ":"
 * Added by Matrix
 */
function compare_Time( pObjStartDate, pObjEndDate, pObjStartTime, pObjEndTime, pSubtract, pSeparator)
{
	var separator = pSeparator;
	if(!pSeparator)
	{
		separator = ':';
	}

	
	var arrStartTime = pObjStartTime.value.split(separator);
	var arrEndTime = pObjEndTime.value.split(separator);

	var startYear, startMonth, startDay;
	var endYear, endMonth, endDay;
	var startHour, startMinute;
	var endHour, endMinute;
	
	var arrStartDate = pObjStartDate.value.split("-");
	var arrEndDate = pObjEndDate.value.split("-");
	
	
	// 获取开始日期
	if(arrStartDate.length == 1)
	{
		startYear = parseInt(parseFloat(pObjStartDate.value.substring(0, 4)));
		startMonth = parseInt(parseFloat(pObjStartDate.value.substring(4, 6)));
		startDay = parseInt(parseFloat(pObjStartDate.value.substring(6, 8)));
	}
	else
	{
		startYear = parseInt(parseFloat(arrStartDate[0]));
		startMonth = parseInt(parseFloat(arrStartDate[1]));
		startDay = parseInt(parseFloat(arrStartDate[2]));
	}
	
	// 获取结束日期
	if(arrEndDate.length == 1)
	{
		endYear = parseInt(parseFloat(pObjEndDate.value.substring(0, 4)));
		endMonth = parseInt(parseFloat(pObjEndDate.value.substring(4, 6)));
		endDay = parseInt(parseFloat(pObjEndDate.value.substring(6, 8)));
	}
	else
	{
		endYear = parseInt(parseFloat(arrEndDate[0]));
		endMonth = parseInt(parseFloat(arrEndDate[1]));
		endDay = parseInt(parseFloat(arrEndDate[2]));
	}
	// 获取开始时间
	if(arrStartTime.length == 1)
	{
		startHour = parseInt(parseFloat(pObjStartTime.value.substring(0,2)));
		startMinute = parseInt(parseFloat(pObjStartTime.value.substring(2,4)));
	}
	else
	{
		startHour = parseInt(parseFloat(arrStartTime[0]));
		startMinute = parseInt(parseFloat(arrStartTime[1]));
	}
	

	
	// 获取结束时间
	if(arrEndTime.length == 1)
	{
		endHour = parseInt(parseFloat(pObjEndTime.value.substring(0, 2)));
		endMinute = parseInt(parseFloat(pObjEndTime.value.substring(2, 4)));
	}
	else
	{
		endHour = parseInt(parseFloat(arrEndTime[0]));
		endMinute = parseInt(parseFloat(arrEndTime[1]));
	}

	


	var startTime = new Date();
	
	startTime.setFullYear(startYear, startMonth - 1, startDay);	
	/*startTime.setMonth(startMonth - 1);
	startTime.setDate(startDay);*/
	startTime.setHours(startHour);
	startTime.setMinutes(startMinute);
	

	var endTime = new Date();

	endTime.setFullYear(endYear, endMonth - 1, endDay);
	/*endTime.setMonth(endMonth - 1);
	endTime.setDate(endDay);*/
	endTime.setHours(endHour);
	endTime.setMinutes(endMinute);
	
		
	var blnSubtract = false;
	if(pSubtract)
	{
		blnSubtract = pSubtract;
	}
	
	if(blnSubtract)
	{
		return (endTime.getTime() - startTime.getTime()) / (1000 * 60);
		
	}
	else
	{	
		if(startTime.getTime() > endTime.getTime())
		{
			return false;
		}
	}
	return true;
}




var printerName = "LeadJIT-MWH";

// 检测指定的打印机名称是否正确
function checkPrinter(printerName)
{
	var returnValue = false;
	try
	{
		var network = new ActiveXObject("WScript.Network");
	}
	catch(exp)
	{
		return returnValue;
	}

	var arrPrinters = network.EnumPrinterConnections();
	for(var i = 0; i < arrPrinters.length; i += 2)
	{
		if(arrPrinters.item(i + 1) == printerName)
		{
			returnValue = true;
			break;					
		}
	}
	
	delete network;
	return returnValue;
}


	/*取得该年该月第一天为星期几
		* Author: Sutar
		* Create Date: 2004-11-11
	*/
	function GetDateNow(year,month)
	{
		var day,today,weekDayNow,miliToday;
		var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Satuaday"];
		miliToday = Date.parse(year + "/" + month + "/" + "01");
		today = new Date(miliToday);
		if(today.getDay()==0) day = "Sunday"
		if(today.getDay()==1) day = "Monday"
		if(today.getDay()==2) day = "Tuesday"
		if(today.getDay()==3) day = "Wednesday"
		if(today.getDay()==4) day = "Thusday"
		if(today.getDay()==5) day = "Friday"
		if(today.getDay()==6) day = "Satuaday"
		for(var dayNum = 0;dayNum<=6;dayNum++)
		{
			if(weekDays[dayNum]==day)
				weekDayNow = dayNum;
		}
		return weekDayNow;
	}

	/*取得某年某月的天数
		* Author: Sutar
		* Create Date: 2004-11-11
	*/
	function CalculateMonth(year,month)
	{
		var totalDays;
		var MonthType01 = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
		var MonthType02 = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
		//该年为闰年时各月的天数
		if((year%4 == 0) && (year%100 != 0) || (year%400 == 0))
			months = MonthType01;
		else
			months = MonthType02;
		totalDays = months[month-1];	
		return totalDays;
	}


	/*取得某年某月每天为星期几
	* Author: Sutar
	* Create Date: 2004-11-12
	*/
	function CalculateWeekDay(year,month)
	{
		var weekDayFirst,totalDay;
		var year,month,date;
		var monthNum = new Array();
		weekDayFirst = GetDateNow(year,month);
		totalDay = CalculateMonth(year,month);
		
		for(var monthDay = weekDayFirst; monthDay <= (totalDay + weekDayFirst - 1); monthDay++)
		{
			date = monthDay - weekDayFirst;
			if(monthDay <= 6)
			{
				monthNum[date] = monthDay;
			}
			else
			{	
				if((monthDay - 7) <= 6)
					monthNum[date] = monthDay - 7;
				if((monthDay - 7*2) <= 6 &&(monthDay - 7*2) >= 0)
					monthNum[date] = monthDay - 7*2;
				if((monthDay - 7*3) <= 6 &&(monthDay - 7*3) >= 0)
					monthNum[date] = monthDay - 7*3;
				if((monthDay - 7*4) <= 6 &&(monthDay - 7*4) >= 0)
					monthNum[date] = monthDay - 7*4;
				if((monthDay - 7*5) <= 6 &&(monthDay - 7*5) >= 0)
					monthNum[date] = monthDay - 7*5;
			}
		}
		return monthNum;
	}
	
	
		/** 
		 *  检测控件的值是否为合法的年月格式
		 *  Add By Cindy
		 */
		function ValidateYearMonth(obj)
		{
			if(!obj || !obj.value)  
				return false;
				
			if(isValidInt(obj.value) && String_GetLength(obj.value) == 6)
			{		
				var year = obj.value.substring(0, 4);
				var month = obj.value.substring(4, 6);
		
				if(year < 1754)
				{
					alarm(obj, "年份必须大于1753！");
					return false;
				}
		
				if(month < 1 || month > 12)
				{
					alarm(obj, "月份必须在 1 和 12 之间！");
					return false;
				}
				
				obj.value = year + "-" + month;
				return true;
			}
	
			if(!IsValidYearMonth(obj))
			{
				alarm(obj, "年月格式错误！正确的年月格式示例：200501 或 2005-01");
				return false;
			}
	
			return true;
		}



function getFielder(idx)
{
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var folder = fso.GetSpecialFolder(1);
	var fielder;
	
	switch(idx)
	{
		case 1:
			fielder = folder + '\\WinPrint\\WinPrint1.dll';
			break;
		case 2:
			fielder = folder + '\\WinPrint\\WinPrint2.dll';
			break;
		case 3:
			fielder = folder + '\\WinPrint\\WinPrint3.dll';
			break;
		case 4:
			fielder = folder + '\\WinPrint\\WinPrint4.dll';			
			break;
		case 5:
			fielder = folder + '\\WinPrint\\WinPrint5.dll';
			break;
	}
	
	delete fso;
	return fielder;
}



		/**
		 * 检查是否为正确的年月时间格式
		 */
		function IsValidYearMonth(obj)
		{
			var isValid = false;
			var value = obj.value;
			try
			{
				var arrYearMonth = value.split("-");
		
				arrYearMonth[0] = parseInt(parseFloat(arrYearMonth[0]));
				arrYearMonth[1] = parseInt(parseFloat(arrYearMonth[1]));

				if(arrYearMonth[0] > 1753 && arrYearMonth[1] > 0 && arrYearMonth[0] <= 9999 && arrYearMonth[1] <= 12)
				{
					if(parseInt(arrYearMonth[1]) <= 9)
					{
						arrYearMonth[1] = "0" + arrYearMonth[1];	
					}
					obj.value = arrYearMonth[0] + "-" + arrYearMonth[1]; 
					isValid = true;
				}
			}
			catch(exp)
			{
			}
			return isValid;
		}
		
		
		
		/** 
		 *  检测控件的值是否为合法的年月格式
		 */
		function ValidYearMonth(obj)
		{
			if(!obj || !obj.value)  
				return false;
				
			if(isValidInt(obj.value) && String_GetLength(obj.value) == 6)
			{		
				var year = obj.value.substring(0, 4);
				var month = obj.value.substring(4, 6);
		
				if(year < 1754)
				{
					alarm(obj, "年份必须大于1753！");
					return false;
				}
		
				if(month < 1 || month > 12)
				{
					alarm(obj, "月份必须在 1 和 12 之间！");
					return false;
				}
				
				obj.value = year + month;
				return true;
			}
			else
			{
				alarm(obj, "时间格式错误！正确的年月格式示例：200601");
				return false;
			}
		}
		
		/** 
		 *  检测制令年月格式
		 */
		function CheckYM(val)
		{
			if(val == null || val == "") { alert("值不能为空！"); return false; }
			
			if(isValidInt(val) && String_GetLength(val) == 6)
			{		
				var year = val.substring(0, 4);
				var month = val.substring(4, 6);
		
				if(year < 1754)
				{
					alert("年份必须大于1753！");
					return false;
				}
		
				if(month < 1 || month > 12)
				{
					alert("月份必须在 1 和 12 之间！");
					return false;
				}
				
				val = year + month;
				return true;
			}
			else
			{
				alert("年月格式错误！正确的年月格式示例：200601");
				return false;
			}
		}
		/** 
		 * 检测控件的值是否为合法的跨日时间
		 * Add By Cindy
		 */
		function LegalTime(obj)
		{
			if(!obj || !obj.value)  
				return true;
	
			if(isValidInt(obj.value) && String_GetLength(obj.value) == 4)
			{
				var hour = obj.value.substring(0, 2);
				var minute = obj.value.substring(2, 4);
		
				if(hour < 0 || hour > 47)
				{
					alarm(obj, "输入的小时数必须在 0 和 47 之间！");
					return false;
				}
		
				if(minute < 0 || minute > 59)
				{
					alarm(obj, "输入的分钟数必须在 0 和 59 之间！");
					return false;
				}

				obj.value = hour + ":" + minute;

			}
	
			if(!IsLegalTime(obj))
			{
				alarm(obj, "时间格式错误！正确的时间格式示例：0800 或 08:00");
				return false;
			}
	
			return true;
		}
		
		/**
		 * 检查是否为正确的跨日时间格式
		 * Add By Cindy
		 */
		function IsLegalTime(obj)
		{
			var isValid = false;
			try
			{
				arrTime = obj.value.split(":");
			
				arrTime[0] = parseInt(parseFloat(arrTime[0]));
				arrTime[1] = parseInt(parseFloat(arrTime[1]));

				if((arrTime[0] >= 0 && arrTime[0] <= 47) && (arrTime[1] >= 0 && arrTime[1] <= 59))
				{
				
					var dt = new Date();
					dt.setHours(arrTime[0]);
					dt.setMinutes(arrTime[1]);

					if(dt.getMinutes() == arrTime[1])
					{
						if(arrTime[1] <= 9)
						{
							if(arrTime[0] <= 9)
							{
								obj.value = "0" + arrTime[0] + ":0" + arrTime[1];
							}
							else
							{
								obj.value = arrTime[0] + ":0" + arrTime[1];
							}
						}
						else
						{
							if(arrTime[0] <= 9)
							{
								obj.value = "0" + arrTime[0] + ":" + arrTime[1];
							}
							else
							{
								obj.value = arrTime[0] + ":" + arrTime[1];
							}
						}
						isValid = true;
					}
				}

			}catch(exp){}
			
			return isValid;
		}
		
		
		//对浮点类型的数据的小数位进行保留，index是要保留的小数位数
		function CheckOrderNumber( objValue, index)
		{
			return Math.round(objValue * Math.pow(10, index)) / Math.pow(10, index);
		}
		
		//日期格式检测，输入格式为10/13或10-13
		function CheckOrderDate( obj )	
		{
			var pDate = new Date(),pYear,pMonth,pDay;
			pYear = pDate.getFullYear();
			if( obj.value.trim().length == 10 || obj.value.trim().length == 8)
			{
				return ValidateDate( obj );
				return;
			}
			if( obj.value.trim().length > 5 || obj.value.trim().length < 3 )
			{
				alert("格式错误,正确格式为:3/16 或 3-16");
				obj.value = "";
				obj.focus();
				event.returnValue = false;
				return;
			}
			if( obj.value.indexOf("/") != -1 || obj.value.indexOf("-") != -1)
			{
				if(obj.value.indexOf("/") != -1)
				{
					if( obj.value.split("/").length != 2)
					{
						alert("格式错误,正确格式为:3/16 或 3-16");
						obj.value = "";
						obj.focus();
						event.returnValue = false;
						return;
					}
					pMonth = obj.value.split("/")[0];
					pDay = obj.value.split("/")[1];						
				}
				else
				{
					if( obj.value.split("-").length != 2)
					{
						alert("格式错误,正确格式为:3/16 或 3-16");
						obj.value = "";
						obj.focus();	
						event.returnValue = false;
						return;
					}
					pMonth = obj.value.split("-")[0];
					pDay = obj.value.split("-")[1];	
				}
				
				if( isNaN( pMonth ) || isNaN( pDay) )
				{
					alert("输入的月或日不是数字,格式如:3/16或3-16");
					obj.value = "";
					obj.focus();
					event.returnValue = false;
					return;
				}
				if( parseInt( pMonth ) < 1 || parseInt( pMonth ) > 12)
				{
					alert("月份必须在 1 和 12 之间！");
					obj.value = "";
					obj.focus();
					event.returnValue = false;
					return;
				}
				
				var daysOfMonth = CalculateMonth(parseInt( pYear ), parseInt( pMonth ));
				
				if( parseInt( pDay ) < 1 )
				{
					alert("日期必须大于0！");
					obj.value = "";
					obj.focus();
					event.returnValue = false;
					return;
				}
				if( parseInt( pDay ) > daysOfMonth )
				{
					alert(pYear + " 年 " + pMonth + " 月没有 " + pDay + " 天！");
					obj.value = "";
					obj.focus();
					event.returnValue = false;
					return;
				}
				if( parseInt( pMonth ) < 10 )						
				{
					pMonth = "0" + parseInt( pMonth );
				}
				if( parseInt( pDay ) < 10 )
				{
					pDay = "0" + parseInt ( pDay );
				}
				obj.value = pYear + "-" + pMonth + "-" + pDay;
			}
			else
			{
				alert("格式错误,正确格式为:3/16 或 3-16");
				obj.value = "";
				obj.focus();	
				event.returnValue = false;
				return;
			}
		}

		function TableStyle(obj)
		{
			for(idx = 0; idx < obj.rows.length; idx ++){
				if(idx == 0){
					obj.rows[idx].className = "tableHeader";
				}else if(obj.rows[idx].Choosed){
					obj.rows[idx].className = "tableRowChoosed";
				}else{
					obj.rows[idx].className = (idx % 2 == 1)?"tableRowOdd":"tableRowEven";
				}
				
				try{
					boxs = obj.rows[idx].cells[0].getElementsByTagName("INPUT");
					for(idy = 0; idy < boxs.length; idy ++){
						if(boxs[idy].type == "checkbox"){
							obj.rows[idx].Checkbox = boxs[idy];
							if(obj.rows[idx].className == "tableRowChoosed"){
								boxs[idy].checked = true;
							}
							if(idx == 0 && !multiple)boxs[idy].style.display = "none";
							break;
						}
					}
				}catch(exp){}
			}
		}

        function InitTable(obj){
	        var idx, idy, boxs;
	        for (idx = 0; idx < obj.rows.length; idx++) {
	            if (idx == 0) {
	                obj.rows[idx].className = "tableHeader";
	            } else if (obj.rows[idx].Choosed) {
	                obj.rows[idx].className = "tableRowChoosed";
	            } else {
	                obj.rows[idx].className = (idx % 2 == 1) ? "tableRowOdd" : "tableRowEven";
	            }
	        }
	    }

	    function GetDate(datetime) {
	        try
	        {
	            var year, month, day;
	            if (datetime.toString().indexOf("-", 0) > -1) {	        
	                year = datetime.toString().substring(0, 4);
	                month = datetime.toString().substring(datetime.toString().indexOf('-', 0) + 1, datetime.toString().lastIndexOf('-', datetime.toString().length - 1));
	                day = datetime.toString().substring(datetime.toString().lastIndexOf('-', datetime.toString().length - 1) + 1, datetime.toString().length);
	            }
	            else if (datetime.toString().indexOf("/", 0) > -1) {
	                year = datetime.toString().substring(datetime.toString().lastIndexOf("/", datetime.toString().length) + 1, datetime.toString().length);
	                month = datetime.toString().substring(0, datetime.toString().indexOf("/", 0));
	                day = datetime.toString().substring(datetime.toString().indexOf("/", 0) + 1, datetime.toString().lastIndexOf("/", datetime.toString().length));
	            }
    	        
		        if (month.substring(0, 1) == "0")
		            month = month.substring(1, 2);
		        if (day.substring(0, 1) == "0")
		            day = day.substring(1, 2);
    		        
		        return new Date(parseInt(year),parseInt(month) - 1,parseInt(day));		    
		    }
		    catch (e) {
		        var temp = new Date(Date.parse(datetime));
		        return temp;		
		    }
	    }
	    
	    //Add By 2011-02-28 chen 数字大小写转换
	    /*
	    function toCnNumber(intNum) {
        var strCnNum = '';
        var arrCnNum = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
        var arrCnMark = ["", "拾", "佰", "仟", "万", "拾万", "佰万", "仟万", "亿"];
        var strNum = intNum.toString();
        var intLen = strNum.length;
        var zeroFlag = false;
        for(var i = 0; i < intLen; i++) {
            var n = strNum.charAt(i);
            if(strNum.substr(i) == "0") {
                break;
            } else {
                if(n == "0") {
                    if(!zeroFlag) {
                        strCnNum += arrCnNum[n];
                    }
                    zeroFlag = true;
                } else {
                    strCnNum += arrCnNum[n];
                    strCnNum += arrCnMark[intLen - i - 1];
                    zeroFlag = false;
                }
            }
        }
        return strCnNum;
    }
    */
    
    //update By 2013-02-23 sealiu 数字大小写转换(修正，并增加支持小数位)
    function toCnNumber(intNum)//请确保传入的参数是字符不是数字,比如应该传入"0012345.67890"，而不是 0012345.67890
    {
        var strCnNum = '';
        var arrCnNum = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
        var arrCnMark = ["", "拾", "佰", "仟", "万", "拾万", "佰万", "仟万", "亿", "拾亿", "佰亿", "仟亿"];
        var strNum = parseFloat(intNum).toString();//除去前后的无效0
        var intLen = strNum.length;
        var zeroFlag = false;
        var pointFlag = false
        var intLenPT = strNum.indexOf(".") == -1 ? intLen : strNum.indexOf(".");//小数点
        for(var i = 0; i < intLen; i++) 
        {
            var n = strNum.charAt(i);
            if(String_Replace(strNum.substr(i).replace(".", ""), "0", "") == "" ) 
            {
                break;
            } 
            else 
            {
                if(n == "0") 
                {
                    if(!zeroFlag || pointFlag) 
                    {
                        strCnNum += arrCnNum[n];
                    }                   
                    zeroFlag = true;
                } 
                else 
                {
                    if(n == ".")
                    {
                        strCnNum += "点";
                        pointFlag = true;
                    }
                    else
                    {
                        strCnNum += arrCnNum[n];
                        if(!pointFlag)
                        {
                            strCnNum += arrCnMark[intLenPT - i - 1];
                        }
                    }
                    zeroFlag = false;
                }
            }            
        }
        return strCnNum;
    }

//获取差异日期
//返回：日期字符串
//pDate：传入的参考日期
//pNum： 相差天数
//pIsWorkDate：是否按工作日计算
function GetDifferenceDate(pDate, pNum, pIsWorkDate) {
    var pResultDate = new Date(pDate), idx, pStep;

    if (pNum > 0)
        pStep = 1;
    else {
        pStep = -1;
        pNum = -pNum;
    }

    if (pIsWorkDate) {
        for (idx = 1; idx <= pNum; idx++) {
            pResultDate.setDate(pResultDate.getDate() + pStep);

            if (pResultDate.getDay() == 6 || pResultDate.getDay() == 0)
                pNum++;
        }
    }
    else {
        pResultDate.setDate(pResultDate.getDate() + pNum);
    }

    return pResultDate.getFullYear() + "-" + (pResultDate.getMonth() + 1) + "-" + pResultDate.getDate();
}

function MaxLength(field, maxlimit) {
    var j = field.value.replace(/[^\x00-\xff]/g, "**").length;
    //alert(j); 
    var tempString = field.value;
    var tt = "";
    if (j > maxlimit) {
        for (var i = 0; i < maxlimit; i++) {
            if (tt.replace(/[^\x00-\xff]/g, "**").length < maxlimit)
                tt = tempString.substr(0, i + 1);
            else
                break;
        }
        if (tt.replace(/[^\x00-\xff]/g, "**").length > maxlimit)
            tt = tt.substr(0, tt.length - 1);
        field.value = tt;
    }
    else {
        ;
    }
} 