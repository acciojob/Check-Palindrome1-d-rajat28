// complete the given function

function palindrome(str){
var j = str.length-1;
	for(var i = 0; i < j/2; i++){
		if(str[i] != str[j-i]){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
