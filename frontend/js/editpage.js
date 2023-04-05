//���֤�Ŷ�Ӧ��ʡ����Ϣ
var _Province = new Object(); 
_Province["42"] = "����";
_Province["43"] = "����";
_Province["50"] = "����";
_Province["51"] = "�Ĵ�";
_Province["37"] = "ɽ��";
_Province["62"] = "����";
_Province["44"] = "�㶫";
_Province["45"] = "����";
_Province["41"] = "����";
_Province["46"] = "����";
_Province["36"] = "����";
_Province["13"] = "�ӱ�";
_Province["34"] = "����";
_Province["33"] = "�㽭";
_Province["35"] = "����";
_Province["23"] = "������";
_Province["22"] = "����";
_Province["61"] = "����";
_Province["32"] = "����";
_Province["14"] = "ɽ��";
_Province["65"] = "�½�";
_Province["63"] = "�ຣ";
_Province["52"] = "����";
_Province["15"] = "���ɹ�";
_Province["21"] = "����";
_Province["53"] = "����";
_Province["11"] = "����";
_Province["12"] = "�ӱ�";
_Province["64"] = "����";		
/**
 * ���֤�ʺ���
 */
function IDCard(idCard18)
{
	this.IsValid = true;
	this.ErrorInfo = "";
	this.WarnInfo = "";

	if (idCard18.length != 15 && idCard18.length != 18)
	{
		this.IsValid = false;
		this.ErrorInfo = "���֤�ų��Ȳ���ȷ��";
		return;
	}

	this.IDCard18 = idCard18;
	this.IDCard15 = idCard18;
	this.Sex = 0; // 0: Ů; 1: ��
	this.BirthDay = new Date();

	if (idCard18.length == 18 && (idCard18.substring(17,18) == "X" || idCard18.substring(17,18) == "*"))
	{
		if (isNaN(idCard18.substring(0,17)))
		{
			this.IsValid = false;
			this.ErrorInfo = "���֤��Ӧ��ȫ�������ֻ�17λ���ּ�һ��\"X\"��\"*\"��";
			return;
		}
	}
	else
	{
		if (isNaN(idCard18))
		{
			this.IsValid = false;
			this.ErrorInfo = "���֤��Ӧ��ȫ�������ֻ�17λ���ּ�һ��\"X\"��\"*\"��";
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
			this.ErrorInfo = "δ��ʮ���꣡";
			return;
        }
        else if (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) < 18 || (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) == 18 && date.getMonth() + 1 < month) || (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) == 18 && date.getMonth() + 1 == month && date.getDate() < day)) 
        {
            this.IsValid = false;
            this.WarnInfo = "δ��ʮ���꣡";
        }
		else if (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) > 50 || (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) == 50 && date.getMonth() + 1 > month) || (date.getFullYear() - parseInt(this.IDCard18.substring(6, 10)) == 50 && date.getMonth() + 1 == month && date.getDate() > day))
		{
			this.IsValid = false;
			this.WarnInfo = "������ʮ�꣡";
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
			this.ErrorInfo = "δ��ʮ���꣡";
			return;
        }
        else if (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) < 18 || (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) == 18 && date.getMonth() + 1 < month) || (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) == 18 && date.getMonth() + 1 == month && date.getDate() < day)) 
        {
            this.IsValid = false;
            this.WarnInfo = "δ��ʮ���꣡";
        }
		else if (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) > 50 || (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) == 50 && date.getMonth() + 1 > month) || (date.getFullYear() - parseInt("19" + this.IDCard15.substring(6, 8)) == 50 && date.getMonth() + 1 == month && date.getDate() > day))
		{
			this.IsValid = false;
			this.WarnInfo = "������ʮ�꣡";
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
		this.ErrorInfo = "���֤�ĳ��������ղ���ȷ��";
		return;
	}
	
	this.Province = _Province[this.IDCard15.substring(0,2)];
	if (this.Province == null)
	{
		this.IsValid = false;
		this.ErrorInfo = "û�и����֤�Ŷ�Ӧ��ʡ�ݵ���Ϣ��";
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
		
//����ı����Ƿ�Ϊ��
function EditPage_CheckBlank(obj,caption){
	if(String_Replace(obj.value," ","")==""){
		try
		{
			obj.select();
		}
		catch(e)
		{
		}
		alert(caption+"����Ϊ�գ�");
		obj.focus();
		return false;
	}
	return true;
}

//Yuling Added.
//�������˿ո�
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

//�滻����
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

//�ؼ���ý���
function Object_Focus(obj){
	obj.select();
	obj.focus();
}

//����Ƿ�Ϊ��ȷ�����ڸ�ʽ
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

//ȡ�ַ����ֽڳ���
function String_GetLength(str){
	var i,rt=0;
	for(i=0;i<str.length;i++)
	{
		rt++;
		if(str.charCodeAt(i)>256)rt++;
	}
	return rt;
}

//���Text�ؼ��Ƿ񳬳�
function Text_CheckLength(obj,caption,len) {
	if(obj && obj.value){
		var length = String_GetLength(obj.value);
		if(length > len){
			Object_Focus(obj);
			alert(caption + "����(" + length + "�ֽ�)���ܳ���" + len + "�ֽ�(����ռ2�ֽ�)��");
			return false;
		}
	}
	return true;
}

//ȡ�ַ�Ϊ����
function getInt(num){
	return parseInt(getFloat(num));
}

//ȡ�ַ�Ϊ������
function getFloat(num){
	num	= parseFloat(num);
	if(isNaN(num)) num = -2147483647;
	return num;
}

//����Ƿ�Ϊ������
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

//����Ƿ�Ϊ����
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
			alarm(obj, caption + "����Ϊ������");
			return false;
		}
		var num = getInt(obj.value);
		if(num < min) {			
			alarm(obj, caption + "����Ϊ����������СֵΪ" + min + "��");
			return false;
		}
		if(num > max) {			
			alarm(obj, caption + "���ֵ" + max + "��");
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
			alarm(obj, caption + "����Ϊ��ֵ��");
			return false;
		}
		var num = getFloat(String_Trim(obj.value));
		if(num < min) {
			alarm(obj, caption + "����Ϊ��ֵ������СֵΪ" + min + "��");
			return false;
		}
		if(num > max) {
			alarm(obj, caption + "���ֵ" + max + "��");
			return false;
		}
	}else{
		return false;
	}
	return true;
}

// ���������ʽ
// obj:			����
// rgExp:		��ΪRegExp���ʽ�����ַ���
// caption:		��ʾ����
// allowEmpty:	�Ƿ�����Ϊ�գ�Ĭ��Ϊ����
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
			alert(caption + "����Ϊ�գ�");
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
		alert(caption + "���벻��ȷ�����飡");
		obj.focus();
		try{obj.select()}catch(ex){}
		return false;
	}
	return true;
}

// TextArea����ӦTab��
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
 * ��ʾ��Ϣ����λ���
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
 * ���ؼ���ֵ�Ƿ�Ϊ�Ϸ��Ľ���Ϸ�����������Ϊ�����Ľ������Զ�����С����������㡣
 * ��������Ϊ 15������ʾΪ 15.00
 * ����  obj:Ҫ����Ŀؼ�
 *       message:����Ľ��Ƿ�ʱ����ʾ��Ϣ��Ĭ��Ϊ��������Ч�Ľ���ʽ����
 * Added by lindy    2004/9/24
 * Edited by Robert  2005/1/5  ������ܳ���С�������λ,pFeecountΪ�Զ���Ľ����Ŀ��
 *			����Ҫ�˲�������Ĭ��Ϊ 100000;(ע��:��Ҫ�������ֵ������;)
 */
function ValidateFee(obj, pMessage, pFeecount)
{
	if(!obj) return false;
	
	var Feecount = pFeecount;
	if(!pFeecount)  Feecount = 100000;
	
	var message = pMessage;
	if(!pMessage) message = "������Ч�Ľ���ʽ��";
	
	if(obj.value)
	{
		if(!isValidFloat(obj.value))
		{
			alarm(obj, message);
			return false;
		}
		
		if(obj.value >= Feecount)
		{
			alarm(obj, "���ܶ��� " +  Feecount + " ��");
			return false;
		}
			
		var positionOfDot = obj.value.indexOf(".");
		var n = obj.value.length - positionOfDot - 1;
		if((n != obj.value.length) && (n > 3))
		{
			alarm(obj, "���ֻ������С�������λ");
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
 * ���ؼ���ֵ�Ƿ�Ϊ�Ϸ���Email��ַ��
 * Added by Lindy
 */
function ValidateEmail(objEmail)
{
	if(!objEmail || !objEmail.value) return true;
	
	//var pattern = /^[_\w]+[\w\.\-_]*@\w+(\.\w+){1,2}$/i;
	var pattern = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	if(!pattern.test(objEmail.value))
	{
		alarm(objEmail, "Email��ַ��Ч��");
		return false;
	}
	
	return true;
}

/** 
 * ���ؼ���ֵ�Ƿ�Ϊ�Ϸ������ڡ�
 * ����������ʽΪ�����մ������ַ������磺19810101�����ɡ�-�����ŷָ����ַ������磺1981-01-01����Ϊ�Ϸ������ڡ�
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
			alarm(obj, "���ڸ�ʽ������ȷ�����ڸ�ʽʾ����20050101 �� 2005-01-01");
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
			alarm(obj, "���ڸ�ʽ������ȷ�����ڸ�ʽʾ����20050101 �� 2005-01-01");
			return false;
		}
		
		var arrDate = obj.value.split('-');
		year = arrDate[0];
		month = arrDate[1];
		day = arrDate[2];
	}
	
	if(year < 1754)
	{
		alarm(obj, "��ݱ������1753��");
		return false;
	}
		
	if(month < 1 || month > 12)
	{
		alarm(obj, "�·ݱ����� 1 �� 12 ֮�䣡");
		return false;
	}
		
	var daysOfMonth = CalculateMonth(year, month);
	if(day == 0)
	{
		alarm(obj, "���ڱ������0��");
		return false;
	}
	if(day > daysOfMonth)
	{
		alarm(obj, year + " �� " + month + " ��û�� " + day + " �죡");
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
			alert("���ڸ�ʽ������ȷ�����ڸ�ʽʾ����20050101 �� 2005-01-01");
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
			alert("���ڸ�ʽ������ȷ�����ڸ�ʽʾ����20050101 �� 2005-01-01");
			return false;
		}
		
		var arrDate = value.split('-');
		year = arrDate[0];
		month = arrDate[1];
		day = arrDate[2];
	}
	
	if(year < 1754)
	{
		alert("��ݱ������1753��");
		return false;
	}
		
	if(month < 1 || month > 12)
	{
		alert("�·ݱ����� 1 �� 12 ֮�䣡");
		return false;
	}
		
	var daysOfMonth = CalculateMonth(year, month);
	if(day == 0)
	{
		alert("���ڱ������0��");
		return false;
	}
	if(day > daysOfMonth)
	{
		alert(year + " �� " + month + " ��û�� " + day + " �죡");
		return false;
	}

	if (month.length == 1) month = "0" + month;
	if (day.length == 1) day = "0" + day;

	value = year + "-" + month + "-" + day;
	return true;
}

/**
 * ��һ���������ڵ��ַ���ת����һ�����ڶ��󣬸��ַ����ĸ�ʽ�����������մ������ַ������磺19810101����Ҳ
 * �������������ָ�������pSeparator����˵�������ַ������磺1981-01-01�������뱣֤���������ڸ�ʽ��ȷ��
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
 * ��������������;��
 * ��� pSubtract Ϊ true���򷵻���������֮���������
 * ��� pSubtract Ϊ false����Ƚ��������ڣ�����������ڴ��ڿ�ʼ���ڷ��� true�����򷵻� false��
 * ����˵����
 *     pStartDate����ʼ���ڣ���ʽ�����������մ������ַ������磺19810101����Ҳ�������������ָ�������pSeparator����˵�������ַ������磺1981-01-01����
 *���� pEndDate��  �������ڣ���ʽͬ��ʼ���ڡ�
 *��   pSubtract�� ��ʾ�����ķ��ؽ���Ĳ���ֵ��Ĭ��ֵΪ false��
 * ����pSeparator�����ڷָ�����Ĭ��Ϊ��-����
 * ע�⣺ʹ�ñ��������뱣֤���������ڸ�ʽ��ȷ��
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
 * ���ؼ���ֵ�Ƿ�Ϊ�Ϸ������ڣ���ȷ���������ڲ�С�ڿ�ʼ���ڡ�
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
 *����Ƿ�Ϊ��ȷ��ʱ���ʽ
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
 *  ���ؼ���ֵ�Ƿ�Ϊ�Ϸ���ʱ��
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
			alarm(obj, "�����Сʱ�������� 0 �� 23 ֮�䣡");
			return false;
		}
		
		if(minute < 0 || minute > 59)
		{
			alarm(obj, "����ķ����������� 0 �� 59 ֮�䣡");
			return false;
		}

		obj.value = hour + ":" + minute;

	}
	
	if(!IsValidTime(obj))
	{
		alarm(obj, "ʱ���ʽ������ȷ��ʱ���ʽʾ����0800 �� 08:00");
		return false;
	}
	
	return true;
}


/**
 *  ���ؼ���ֵ�Ƿ�Ϊ�Ϸ������ڣ���ȷ���������ڲ�С�ڿ�ʼ����,����ʱ�䲻С�ڿ�ʼʱ��
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
 * �Ƚ����ڣ������ʼʱ����ڽ���ʱ�䷵�� false�����򷵻� true
 * ����˵����
 *     pStartDate����ʼ���ڣ���ʽ�����������մ������ַ������磺19810101����Ҳ�������������ָ�������pSeparator����˵�������ַ������磺1981-01-01��
 *���� pEndDate���������ڣ���ʽͬ��ʼ����
 *     pStartTime����ʼʱ�䣬��ʽ������Сʱ���Ӵ������ַ������磺1751����Ҳ�������������ָ�������pSeparator����˵�������ַ������磺17:51��
 *���� pEndTime������ʱ�䣬��ʽͬ��ʼʱ��
 *��   pSubtract��һ������ֵ����������������ֵ�����͡������ true���򷵻�ֵΪ����ʱ���뿪ʼʱ��Ĳ�ֵ���Է��Ӽ������������ false���򷵻�ֵ
 *                Ϊһ������ֵ����������ʱ��ıȽϽ������ʼʱ����ڽ���ʱ�䷵�� false����֮���� true����Ĭ��ֵΪ false
 * ����pSeparator�� ʱ��ķָ�����Ĭ��Ϊ ":"
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
	
	
	// ��ȡ��ʼ����
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
	
	// ��ȡ��������
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
	// ��ȡ��ʼʱ��
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
	

	
	// ��ȡ����ʱ��
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

// ���ָ���Ĵ�ӡ�������Ƿ���ȷ
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


	/*ȡ�ø�����µ�һ��Ϊ���ڼ�
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

	/*ȡ��ĳ��ĳ�µ�����
		* Author: Sutar
		* Create Date: 2004-11-11
	*/
	function CalculateMonth(year,month)
	{
		var totalDays;
		var MonthType01 = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
		var MonthType02 = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
		//����Ϊ����ʱ���µ�����
		if((year%4 == 0) && (year%100 != 0) || (year%400 == 0))
			months = MonthType01;
		else
			months = MonthType02;
		totalDays = months[month-1];	
		return totalDays;
	}


	/*ȡ��ĳ��ĳ��ÿ��Ϊ���ڼ�
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
		 *  ���ؼ���ֵ�Ƿ�Ϊ�Ϸ������¸�ʽ
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
					alarm(obj, "��ݱ������1753��");
					return false;
				}
		
				if(month < 1 || month > 12)
				{
					alarm(obj, "�·ݱ����� 1 �� 12 ֮�䣡");
					return false;
				}
				
				obj.value = year + "-" + month;
				return true;
			}
	
			if(!IsValidYearMonth(obj))
			{
				alarm(obj, "���¸�ʽ������ȷ�����¸�ʽʾ����200501 �� 2005-01");
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
		 * ����Ƿ�Ϊ��ȷ������ʱ���ʽ
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
		 *  ���ؼ���ֵ�Ƿ�Ϊ�Ϸ������¸�ʽ
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
					alarm(obj, "��ݱ������1753��");
					return false;
				}
		
				if(month < 1 || month > 12)
				{
					alarm(obj, "�·ݱ����� 1 �� 12 ֮�䣡");
					return false;
				}
				
				obj.value = year + month;
				return true;
			}
			else
			{
				alarm(obj, "ʱ���ʽ������ȷ�����¸�ʽʾ����200601");
				return false;
			}
		}
		
		/** 
		 *  ����������¸�ʽ
		 */
		function CheckYM(val)
		{
			if(val == null || val == "") { alert("ֵ����Ϊ�գ�"); return false; }
			
			if(isValidInt(val) && String_GetLength(val) == 6)
			{		
				var year = val.substring(0, 4);
				var month = val.substring(4, 6);
		
				if(year < 1754)
				{
					alert("��ݱ������1753��");
					return false;
				}
		
				if(month < 1 || month > 12)
				{
					alert("�·ݱ����� 1 �� 12 ֮�䣡");
					return false;
				}
				
				val = year + month;
				return true;
			}
			else
			{
				alert("���¸�ʽ������ȷ�����¸�ʽʾ����200601");
				return false;
			}
		}
		/** 
		 * ���ؼ���ֵ�Ƿ�Ϊ�Ϸ��Ŀ���ʱ��
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
					alarm(obj, "�����Сʱ�������� 0 �� 47 ֮�䣡");
					return false;
				}
		
				if(minute < 0 || minute > 59)
				{
					alarm(obj, "����ķ����������� 0 �� 59 ֮�䣡");
					return false;
				}

				obj.value = hour + ":" + minute;

			}
	
			if(!IsLegalTime(obj))
			{
				alarm(obj, "ʱ���ʽ������ȷ��ʱ���ʽʾ����0800 �� 08:00");
				return false;
			}
	
			return true;
		}
		
		/**
		 * ����Ƿ�Ϊ��ȷ�Ŀ���ʱ���ʽ
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
		
		
		//�Ը������͵����ݵ�С��λ���б�����index��Ҫ������С��λ��
		function CheckOrderNumber( objValue, index)
		{
			return Math.round(objValue * Math.pow(10, index)) / Math.pow(10, index);
		}
		
		//���ڸ�ʽ��⣬�����ʽΪ10/13��10-13
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
				alert("��ʽ����,��ȷ��ʽΪ:3/16 �� 3-16");
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
						alert("��ʽ����,��ȷ��ʽΪ:3/16 �� 3-16");
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
						alert("��ʽ����,��ȷ��ʽΪ:3/16 �� 3-16");
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
					alert("������»��ղ�������,��ʽ��:3/16��3-16");
					obj.value = "";
					obj.focus();
					event.returnValue = false;
					return;
				}
				if( parseInt( pMonth ) < 1 || parseInt( pMonth ) > 12)
				{
					alert("�·ݱ����� 1 �� 12 ֮�䣡");
					obj.value = "";
					obj.focus();
					event.returnValue = false;
					return;
				}
				
				var daysOfMonth = CalculateMonth(parseInt( pYear ), parseInt( pMonth ));
				
				if( parseInt( pDay ) < 1 )
				{
					alert("���ڱ������0��");
					obj.value = "";
					obj.focus();
					event.returnValue = false;
					return;
				}
				if( parseInt( pDay ) > daysOfMonth )
				{
					alert(pYear + " �� " + pMonth + " ��û�� " + pDay + " �죡");
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
				alert("��ʽ����,��ȷ��ʽΪ:3/16 �� 3-16");
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
	    
	    //Add By 2011-02-28 chen ���ִ�Сдת��
	    /*
	    function toCnNumber(intNum) {
        var strCnNum = '';
        var arrCnNum = ["��", "Ҽ", "��", "��", "��", "��", "½", "��", "��", "��"];
        var arrCnMark = ["", "ʰ", "��", "Ǫ", "��", "ʰ��", "����", "Ǫ��", "��"];
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
    
    //update By 2013-02-23 sealiu ���ִ�Сдת��(������������֧��С��λ)
    function toCnNumber(intNum)//��ȷ������Ĳ������ַ���������,����Ӧ�ô���"0012345.67890"�������� 0012345.67890
    {
        var strCnNum = '';
        var arrCnNum = ["��", "Ҽ", "��", "��", "��", "��", "½", "��", "��", "��"];
        var arrCnMark = ["", "ʰ", "��", "Ǫ", "��", "ʰ��", "����", "Ǫ��", "��", "ʰ��", "����", "Ǫ��"];
        var strNum = parseFloat(intNum).toString();//��ȥǰ�����Ч0
        var intLen = strNum.length;
        var zeroFlag = false;
        var pointFlag = false
        var intLenPT = strNum.indexOf(".") == -1 ? intLen : strNum.indexOf(".");//С����
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
                        strCnNum += "��";
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

//��ȡ��������
//���أ������ַ���
//pDate������Ĳο�����
//pNum�� �������
//pIsWorkDate���Ƿ񰴹����ռ���
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