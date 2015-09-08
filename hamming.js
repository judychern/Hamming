var Hamming = function(){};
Hamming.prototype.compute = function(input1, input2){
var counter = 0;
if(input1.length !== input2.length){
	throw new Error ('DNA strands must be of equal length.');
}
	else{
		var strandLength = input1.length;
			for(i=0; i<strandLength; i++){
				if(input1.charAt(i) !== input2.charAt(i)){
				counter++;
		}
	}
}
return counter;
};

hamming = module.exports = new Hamming();