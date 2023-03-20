// complete the given function

function palindrome(str){
	str = str.toLowerCase();
var rev_str = "";
      for( var i = str.length-1 ;i >= 0 ;i--)
      {
        rev_str+= str[i];
      }
	if(str === rev_str){
		return true;
	}else{
		return  false;
	}
}
module.exports = palindrome
