$.fn.textStroke = function(r, colour) {
  var rules = [];
	var steps = 24;
	for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
		var x = r*Math.cos(t);
		var y = r*Math.sin(t);
		x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
		y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
		rules.push( x + "px " + y + "px 0px " + colour );
	}
	this.css('textShadow',rules.join());
};
