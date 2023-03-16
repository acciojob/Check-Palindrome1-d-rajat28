// complete the given function

function palindrome(str){
var l = 0;
var r = str.length-1;
	while(l < r){
		if(str[l] != str[r]){
			return false;
		}
		l++;
		r--;
	}
	return true;
}
module.exports = palindrome
