/**
 isEmpty(obj, msg) 함수 설명용 주석
	form : form.input 상자이름, msg : 공백일때 alert 메시지
 */
function isEmpty(obj, msg){
	var val = obj.value;
	var result = false;
	if(val == ""){
		alert(msg);
		obj.focus();
		result = true;
	} 
	return result;
}
