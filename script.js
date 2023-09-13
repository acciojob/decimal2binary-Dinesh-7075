function decimalToBinary(num) {
  //Write you code here
	let a="";
	while(num>0){
		let r=num%2;
		num=num/2;
		a=a+r;
	}
	return a;
  
}

window.decimalToBinary = decimalToBinary;
