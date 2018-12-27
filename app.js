function F() {
	function C() {
	    console.log(this)
        return this;
    }
    return C();
}
var o = new F();
console.log(o)