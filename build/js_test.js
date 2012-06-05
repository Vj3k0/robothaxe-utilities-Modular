var $_, $hxClasses = $hxClasses || {}, $estr = function() { return js.Boot.__string_rec(this,''); }
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var ExampleTest = $hxClasses["ExampleTest"] = function() {
};
ExampleTest.__name__ = ["ExampleTest"];
ExampleTest.prototype = {
	timer: null
	,beforeClass: function() {
	}
	,afterClass: function() {
	}
	,setup: function() {
	}
	,tearDown: function() {
	}
	,testExample: function() {
		massive.munit.Assert.isTrue(true,{ fileName : "ExampleTest.hx", lineNumber : 45, className : "ExampleTest", methodName : "testExample"});
	}
	,testAsyncExample: function(factory) {
		var handler = factory.createHandler(this,this.onTestAsyncExampleComplete.$bind(this),300,{ fileName : "ExampleTest.hx", lineNumber : 51, className : "ExampleTest", methodName : "testAsyncExample"});
		this.timer = massive.munit.util.Timer.delay(handler,200);
	}
	,onTestAsyncExampleComplete: function() {
		massive.munit.Assert.isFalse(false,{ fileName : "ExampleTest.hx", lineNumber : 57, className : "ExampleTest", methodName : "onTestAsyncExampleComplete"});
	}
	,testExampleThatOnlyRunsWithDebugFlag: function() {
		massive.munit.Assert.isTrue(true,{ fileName : "ExampleTest.hx", lineNumber : 67, className : "ExampleTest", methodName : "testExampleThatOnlyRunsWithDebugFlag"});
	}
	,__class__: ExampleTest
}
var Hash = $hxClasses["Hash"] = function() {
	this.h = { };
};
Hash.__name__ = ["Hash"];
Hash.prototype = {
	h: null
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return a.iterator();
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		s.b[s.b.length] = "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b[s.b.length] = i == null?"null":i;
			s.b[s.b.length] = " => ";
			s.add(Std.string(this.get(i)));
			if(it.hasNext()) s.b[s.b.length] = ", ";
		}
		s.b[s.b.length] = "}";
		return s.b.join("");
	}
	,__class__: Hash
}
var IntIter = $hxClasses["IntIter"] = function(min,max) {
	this.min = min;
	this.max = max;
};
IntIter.__name__ = ["IntIter"];
IntIter.prototype = {
	min: null
	,max: null
	,hasNext: function() {
		return this.min < this.max;
	}
	,next: function() {
		return this.min++;
	}
	,__class__: IntIter
}
var Lambda = $hxClasses["Lambda"] = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var x = $it0.next();
			if(x == elt) return true;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(cmp(x,elt)) return true;
		}
	}
	return false;
}
Lambda.exists = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
}
Lambda.foreach = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
}
Lambda.iter = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
}
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
}
Lambda.fold = function(it,f,first) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	var $it0 = a.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(x);
	}
	var $it1 = b.iterator();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		l.add(x);
	}
	return l;
}
Lambda.prototype = {
	__class__: Lambda
}
var List = $hxClasses["List"] = function() {
	this.length = 0;
};
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,last: function() {
		return this.q == null?null:this.q[0];
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		s.b[s.b.length] = "{";
		while(l != null) {
			if(first) first = false; else s.b[s.b.length] = ", ";
			s.add(Std.string(l[0]));
			l = l[1];
		}
		s.b[s.b.length] = "}";
		return s.b.join("");
	}
	,join: function(sep) {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		while(l != null) {
			if(first) first = false; else s.b[s.b.length] = sep == null?"null":sep;
			s.add(l[0]);
			l = l[1];
		}
		return s.b.join("");
	}
	,filter: function(f) {
		var l2 = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			if(f(v)) l2.add(v);
		}
		return l2;
	}
	,map: function(f) {
		var b = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			b.add(f(v));
		}
		return b;
	}
	,__class__: List
}
var Reflect = $hxClasses["Reflect"] = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
}
Reflect.prototype = {
	__class__: Reflect
}
var Std = $hxClasses["Std"] = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	return x | 0;
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype = {
	__class__: Std
}
var StringBuf = $hxClasses["StringBuf"] = function() {
	this.b = new Array();
};
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b[this.b.length] = x == null?"null":x;
	}
	,addSub: function(s,pos,len) {
		this.b[this.b.length] = s.substr(pos,len);
	}
	,addChar: function(c) {
		this.b[this.b.length] = String.fromCharCode(c);
	}
	,toString: function() {
		return this.b.join("");
	}
	,b: null
	,__class__: StringBuf
}
var StringTools = $hxClasses["StringTools"] = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return s.substr(r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return s.substr(0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += c.substr(0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype = {
	__class__: StringTools
}
var TestMain = $hxClasses["TestMain"] = function() {
	var suites = new Array();
	suites.push(TestSuite);
	var client = new massive.munit.client.RichPrintClient();
	var runner = new massive.munit.TestRunner(client);
	runner.completionHandler = this.completionHandler.$bind(this);
	runner.run(suites);
};
TestMain.__name__ = ["TestMain"];
TestMain.main = function() {
	new TestMain();
}
TestMain.prototype = {
	completionHandler: function(successful) {
		try {
			eval("testResult(" + successful + ");");
		} catch( e ) {
		}
	}
	,__class__: TestMain
}
var massive = massive || {}
if(!massive.munit) massive.munit = {}
massive.munit.TestSuite = $hxClasses["massive.munit.TestSuite"] = function() {
	this.tests = new Array();
	this.index = 0;
};
massive.munit.TestSuite.__name__ = ["massive","munit","TestSuite"];
massive.munit.TestSuite.prototype = {
	tests: null
	,index: null
	,add: function(test) {
		this.tests.push(test);
		this.sortTests();
	}
	,hasNext: function() {
		return this.index < this.tests.length;
	}
	,next: function() {
		return this.hasNext()?this.tests[this.index++]:null;
	}
	,repeat: function() {
		if(this.index > 0) this.index--;
	}
	,sortTests: function() {
		this.tests.sort(this.sortByName.$bind(this));
	}
	,sortByName: function(x,y) {
		var xName = Type.getClassName(x);
		var yName = Type.getClassName(y);
		if(xName == yName) return 0;
		if(xName > yName) return 1; else return -1;
	}
	,__class__: massive.munit.TestSuite
}
var TestSuite = $hxClasses["TestSuite"] = function() {
	massive.munit.TestSuite.call(this);
	this.add(ExampleTest);
	this.add(robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest);
	this.add(robothaxe.utilities.modular.tests.mvcs.ModuleContextTest);
	this.add(robothaxe.utilities.modular.tests.mvcs.ModuleActorTest);
	this.add(robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest);
	this.add(robothaxe.utilities.modular.tests.base.ModuleCommandMapTest);
};
TestSuite.__name__ = ["TestSuite"];
TestSuite.__super__ = massive.munit.TestSuite;
TestSuite.prototype = $extend(massive.munit.TestSuite.prototype,{
	__class__: TestSuite
});
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = $hxClasses["Type"] = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	a.remove("__class__");
	a.remove("__properties__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__properties__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.copy();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.allEnums = function(e) {
	var all = [];
	var cst = e.__constructs__;
	var _g = 0;
	while(_g < cst.length) {
		var c = cst[_g];
		++_g;
		var v = Reflect.field(e,c);
		if(!Reflect.isFunction(v)) all.push(v);
	}
	return all;
}
Type.prototype = {
	__class__: Type
}
var haxe = haxe || {}
haxe.Http = $hxClasses["haxe.Http"] = function(url) {
	this.url = url;
	this.headers = new Hash();
	this.params = new Hash();
	this.async = true;
};
haxe.Http.__name__ = ["haxe","Http"];
haxe.Http.requestUrl = function(url) {
	var h = new haxe.Http(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		r = d;
	};
	h.onError = function(e) {
		throw e;
	};
	h.request(false);
	return r;
}
haxe.Http.prototype = {
	url: null
	,async: null
	,postData: null
	,headers: null
	,params: null
	,setHeader: function(header,value) {
		this.headers.set(header,value);
	}
	,setParameter: function(param,value) {
		this.params.set(param,value);
	}
	,setPostData: function(data) {
		this.postData = data;
	}
	,request: function(post) {
		var me = this;
		var r = new js.XMLHttpRequest();
		var onreadystatechange = function() {
			if(r.readyState != 4) return;
			var s = (function($this) {
				var $r;
				try {
					$r = r.status;
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(s == undefined) s = null;
			if(s != null) me.onStatus(s);
			if(s != null && s >= 200 && s < 400) me.onData(r.responseText); else switch(s) {
			case null: case undefined:
				me.onError("Failed to connect or resolve host");
				break;
			case 12029:
				me.onError("Failed to connect to host");
				break;
			case 12007:
				me.onError("Unknown host");
				break;
			default:
				me.onError("Http Error #" + r.status);
			}
		};
		if(this.async) r.onreadystatechange = onreadystatechange;
		var uri = this.postData;
		if(uri != null) post = true; else {
			var $it0 = this.params.keys();
			while( $it0.hasNext() ) {
				var p = $it0.next();
				if(uri == null) uri = ""; else uri += "&";
				uri += StringTools.urlEncode(p) + "=" + StringTools.urlEncode(this.params.get(p));
			}
		}
		try {
			if(post) r.open("POST",this.url,this.async); else if(uri != null) {
				var question = this.url.split("?").length <= 1;
				r.open("GET",this.url + (question?"?":"&") + uri,this.async);
				uri = null;
			} else r.open("GET",this.url,this.async);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		var $it1 = this.headers.keys();
		while( $it1.hasNext() ) {
			var h = $it1.next();
			r.setRequestHeader(h,this.headers.get(h));
		}
		r.send(uri);
		if(!this.async) onreadystatechange();
	}
	,onData: function(data) {
	}
	,onError: function(msg) {
	}
	,onStatus: function(status) {
	}
	,__class__: haxe.Http
}
haxe.Log = $hxClasses["haxe.Log"] = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype = {
	__class__: haxe.Log
}
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = $hxClasses["haxe.Stack"] = function() { }
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	return [];
}
haxe.Stack.exceptionStack = function() {
	return [];
}
haxe.Stack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b[b.b.length] = "\nCalled from ";
		haxe.Stack.itemToString(b,s);
	}
	return b.b.join("");
}
haxe.Stack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b[b.b.length] = "a C function";
		break;
	case 1:
		var m = $e[2];
		b.b[b.b.length] = "module ";
		b.b[b.b.length] = m == null?"null":m;
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b[b.b.length] = " (";
		}
		b.b[b.b.length] = file == null?"null":file;
		b.b[b.b.length] = " line ";
		b.b[b.b.length] = line == null?"null":line;
		if(s1 != null) b.b[b.b.length] = ")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b[b.b.length] = cname == null?"null":cname;
		b.b[b.b.length] = ".";
		b.b[b.b.length] = meth == null?"null":meth;
		break;
	case 4:
		var n = $e[2];
		b.b[b.b.length] = "local function #";
		b.b[b.b.length] = n == null?"null":n;
		break;
	}
}
haxe.Stack.makeStack = function(s) {
	return null;
}
haxe.Stack.prototype = {
	__class__: haxe.Stack
}
haxe.Timer = $hxClasses["haxe.Timer"] = function(time_ms) {
	var me = this;
	this.id = window.setInterval(function() {
		me.run();
	},time_ms);
};
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype = {
	id: null
	,stop: function() {
		if(this.id == null) return;
		window.clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
}
if(!haxe.rtti) haxe.rtti = {}
haxe.rtti.CType = $hxClasses["haxe.rtti.CType"] = { __ename__ : ["haxe","rtti","CType"], __constructs__ : ["CUnknown","CEnum","CClass","CTypedef","CFunction","CAnonymous","CDynamic"] }
haxe.rtti.CType.CUnknown = ["CUnknown",0];
haxe.rtti.CType.CUnknown.toString = $estr;
haxe.rtti.CType.CUnknown.__enum__ = haxe.rtti.CType;
haxe.rtti.CType.CEnum = function(name,params) { var $x = ["CEnum",1,name,params]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CClass = function(name,params) { var $x = ["CClass",2,name,params]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CTypedef = function(name,params) { var $x = ["CTypedef",3,name,params]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CFunction = function(args,ret) { var $x = ["CFunction",4,args,ret]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CAnonymous = function(fields) { var $x = ["CAnonymous",5,fields]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CDynamic = function(t) { var $x = ["CDynamic",6,t]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.Rights = $hxClasses["haxe.rtti.Rights"] = { __ename__ : ["haxe","rtti","Rights"], __constructs__ : ["RNormal","RNo","RCall","RMethod","RDynamic","RInline"] }
haxe.rtti.Rights.RNormal = ["RNormal",0];
haxe.rtti.Rights.RNormal.toString = $estr;
haxe.rtti.Rights.RNormal.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RNo = ["RNo",1];
haxe.rtti.Rights.RNo.toString = $estr;
haxe.rtti.Rights.RNo.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RCall = function(m) { var $x = ["RCall",2,m]; $x.__enum__ = haxe.rtti.Rights; $x.toString = $estr; return $x; }
haxe.rtti.Rights.RMethod = ["RMethod",3];
haxe.rtti.Rights.RMethod.toString = $estr;
haxe.rtti.Rights.RMethod.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RDynamic = ["RDynamic",4];
haxe.rtti.Rights.RDynamic.toString = $estr;
haxe.rtti.Rights.RDynamic.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RInline = ["RInline",5];
haxe.rtti.Rights.RInline.toString = $estr;
haxe.rtti.Rights.RInline.__enum__ = haxe.rtti.Rights;
haxe.rtti.TypeTree = $hxClasses["haxe.rtti.TypeTree"] = { __ename__ : ["haxe","rtti","TypeTree"], __constructs__ : ["TPackage","TClassdecl","TEnumdecl","TTypedecl"] }
haxe.rtti.TypeTree.TPackage = function(name,full,subs) { var $x = ["TPackage",0,name,full,subs]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeTree.TClassdecl = function(c) { var $x = ["TClassdecl",1,c]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeTree.TEnumdecl = function(e) { var $x = ["TEnumdecl",2,e]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeTree.TTypedecl = function(t) { var $x = ["TTypedecl",3,t]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeApi = $hxClasses["haxe.rtti.TypeApi"] = function() { }
haxe.rtti.TypeApi.__name__ = ["haxe","rtti","TypeApi"];
haxe.rtti.TypeApi.typeInfos = function(t) {
	var inf;
	var $e = (t);
	switch( $e[1] ) {
	case 1:
		var c = $e[2];
		inf = c;
		break;
	case 2:
		var e = $e[2];
		inf = e;
		break;
	case 3:
		var t1 = $e[2];
		inf = t1;
		break;
	case 0:
		throw "Unexpected Package";
		break;
	}
	return inf;
}
haxe.rtti.TypeApi.isVar = function(t) {
	return (function($this) {
		var $r;
		switch( (t)[1] ) {
		case 4:
			$r = false;
			break;
		default:
			$r = true;
		}
		return $r;
	}(this));
}
haxe.rtti.TypeApi.leq = function(f,l1,l2) {
	var it = l2.iterator();
	var $it0 = l1.iterator();
	while( $it0.hasNext() ) {
		var e1 = $it0.next();
		if(!it.hasNext()) return false;
		var e2 = it.next();
		if(!f(e1,e2)) return false;
	}
	if(it.hasNext()) return false;
	return true;
}
haxe.rtti.TypeApi.rightsEq = function(r1,r2) {
	if(r1 == r2) return true;
	var $e = (r1);
	switch( $e[1] ) {
	case 2:
		var m1 = $e[2];
		var $e = (r2);
		switch( $e[1] ) {
		case 2:
			var m2 = $e[2];
			return m1 == m2;
		default:
		}
		break;
	default:
	}
	return false;
}
haxe.rtti.TypeApi.typeEq = function(t1,t2) {
	var $e = (t1);
	switch( $e[1] ) {
	case 0:
		return t2 == haxe.rtti.CType.CUnknown;
	case 1:
		var params = $e[3], name = $e[2];
		var $e = (t2);
		switch( $e[1] ) {
		case 1:
			var params2 = $e[3], name2 = $e[2];
			return name == name2 && haxe.rtti.TypeApi.leq(haxe.rtti.TypeApi.typeEq,params,params2);
		default:
		}
		break;
	case 2:
		var params = $e[3], name = $e[2];
		var $e = (t2);
		switch( $e[1] ) {
		case 2:
			var params2 = $e[3], name2 = $e[2];
			return name == name2 && haxe.rtti.TypeApi.leq(haxe.rtti.TypeApi.typeEq,params,params2);
		default:
		}
		break;
	case 3:
		var params = $e[3], name = $e[2];
		var $e = (t2);
		switch( $e[1] ) {
		case 3:
			var params2 = $e[3], name2 = $e[2];
			return name == name2 && haxe.rtti.TypeApi.leq(haxe.rtti.TypeApi.typeEq,params,params2);
		default:
		}
		break;
	case 4:
		var ret = $e[3], args = $e[2];
		var $e = (t2);
		switch( $e[1] ) {
		case 4:
			var ret2 = $e[3], args2 = $e[2];
			return haxe.rtti.TypeApi.leq(function(a,b) {
				return a.name == b.name && a.opt == b.opt && haxe.rtti.TypeApi.typeEq(a.t,b.t);
			},args,args2) && haxe.rtti.TypeApi.typeEq(ret,ret2);
		default:
		}
		break;
	case 5:
		var fields = $e[2];
		var $e = (t2);
		switch( $e[1] ) {
		case 5:
			var fields2 = $e[2];
			return haxe.rtti.TypeApi.leq(function(a,b) {
				return a.name == b.name && haxe.rtti.TypeApi.typeEq(a.t,b.t);
			},fields,fields2);
		default:
		}
		break;
	case 6:
		var t = $e[2];
		var $e = (t2);
		switch( $e[1] ) {
		case 6:
			var t21 = $e[2];
			if(t == null != (t21 == null)) return false;
			return t == null || haxe.rtti.TypeApi.typeEq(t,t21);
		default:
		}
		break;
	}
	return false;
}
haxe.rtti.TypeApi.fieldEq = function(f1,f2) {
	if(f1.name != f2.name) return false;
	if(!haxe.rtti.TypeApi.typeEq(f1.type,f2.type)) return false;
	if(f1.isPublic != f2.isPublic) return false;
	if(f1.doc != f2.doc) return false;
	if(!haxe.rtti.TypeApi.rightsEq(f1.get,f2.get)) return false;
	if(!haxe.rtti.TypeApi.rightsEq(f1.set,f2.set)) return false;
	if(f1.params == null != (f2.params == null)) return false;
	if(f1.params != null && f1.params.join(":") != f2.params.join(":")) return false;
	return true;
}
haxe.rtti.TypeApi.constructorEq = function(c1,c2) {
	if(c1.name != c2.name) return false;
	if(c1.doc != c2.doc) return false;
	if(c1.args == null != (c2.args == null)) return false;
	if(c1.args != null && !haxe.rtti.TypeApi.leq(function(a,b) {
		return a.name == b.name && a.opt == b.opt && haxe.rtti.TypeApi.typeEq(a.t,b.t);
	},c1.args,c2.args)) return false;
	return true;
}
haxe.rtti.TypeApi.prototype = {
	__class__: haxe.rtti.TypeApi
}
haxe.rtti.Meta = $hxClasses["haxe.rtti.Meta"] = function() { }
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getType = function(t) {
	var meta = t.__meta__;
	return meta == null || meta.obj == null?{ }:meta.obj;
}
haxe.rtti.Meta.getStatics = function(t) {
	var meta = t.__meta__;
	return meta == null || meta.statics == null?{ }:meta.statics;
}
haxe.rtti.Meta.getFields = function(t) {
	var meta = t.__meta__;
	return meta == null || meta.fields == null?{ }:meta.fields;
}
haxe.rtti.Meta.prototype = {
	__class__: haxe.rtti.Meta
}
var js = js || {}
js.Boot = $hxClasses["js.Boot"] = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return undefined;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	Function.prototype["$bind"] = function(o) {
		var f = function() {
			return f.method.apply(f.scope,arguments);
		};
		f.scope = o;
		f.method = this;
		return f;
	};
}
js.Boot.prototype = {
	__class__: js.Boot
}
js.Lib = $hxClasses["js.Lib"] = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype = {
	__class__: js.Lib
}
if(!massive.haxe) massive.haxe = {}
massive.haxe.Exception = $hxClasses["massive.haxe.Exception"] = function(message,info) {
	this.message = message;
	this.info = info;
	this.type = massive.haxe.util.ReflectUtil.here({ fileName : "Exception.hx", lineNumber : 70, className : "massive.haxe.Exception", methodName : "new"}).className;
};
massive.haxe.Exception.__name__ = ["massive","haxe","Exception"];
massive.haxe.Exception.prototype = {
	type: null
	,message: null
	,info: null
	,toString: function() {
		var str = this.type + ": " + this.message;
		if(this.info != null) str += " at " + this.info.className + "#" + this.info.methodName + " (" + this.info.lineNumber + ")";
		return str;
	}
	,__class__: massive.haxe.Exception
}
if(!massive.haxe.util) massive.haxe.util = {}
massive.haxe.util.ReflectUtil = $hxClasses["massive.haxe.util.ReflectUtil"] = function() { }
massive.haxe.util.ReflectUtil.__name__ = ["massive","haxe","util","ReflectUtil"];
massive.haxe.util.ReflectUtil.here = function(info) {
	return info;
}
massive.haxe.util.ReflectUtil.prototype = {
	__class__: massive.haxe.util.ReflectUtil
}
massive.munit.Assert = $hxClasses["massive.munit.Assert"] = function() { }
massive.munit.Assert.__name__ = ["massive","munit","Assert"];
massive.munit.Assert.isTrue = function(value,info) {
	massive.munit.Assert.assertionCount++;
	if(value != true) massive.munit.Assert.fail("Expected TRUE but was [" + value + "]",info);
}
massive.munit.Assert.isFalse = function(value,info) {
	massive.munit.Assert.assertionCount++;
	if(value != false) massive.munit.Assert.fail("Expected FALSE but was [" + value + "]",info);
}
massive.munit.Assert.isNull = function(value,info) {
	massive.munit.Assert.assertionCount++;
	if(value != null) massive.munit.Assert.fail("Value [" + value + "] was not NULL",info);
}
massive.munit.Assert.isNotNull = function(value,info) {
	massive.munit.Assert.assertionCount++;
	if(value == null) massive.munit.Assert.fail("Value [" + value + "] was NULL",info);
}
massive.munit.Assert.isNaN = function(value,info) {
	massive.munit.Assert.assertionCount++;
	if(!Math.isNaN(value)) massive.munit.Assert.fail("Value [" + value + "]  was not NaN",info);
}
massive.munit.Assert.isNotNaN = function(value,info) {
	massive.munit.Assert.assertionCount++;
	if(Math.isNaN(value)) massive.munit.Assert.fail("Value [" + value + "] was NaN",info);
}
massive.munit.Assert.isType = function(value,type) {
	massive.munit.Assert.assertionCount++;
	if(!Std["is"](value,type)) massive.munit.Assert.fail("Value [" + value + "] was not of type: " + Type.getClassName(type),{ fileName : "Assert.hx", lineNumber : 126, className : "massive.munit.Assert", methodName : "isType"});
}
massive.munit.Assert.isNotType = function(value,type) {
	massive.munit.Assert.assertionCount++;
	if(Std["is"](value,type)) massive.munit.Assert.fail("Value [" + value + "] was of type: " + Type.getClassName(type),{ fileName : "Assert.hx", lineNumber : 138, className : "massive.munit.Assert", methodName : "isNotType"});
}
massive.munit.Assert.areEqual = function(expected,actual,info) {
	massive.munit.Assert.assertionCount++;
	if(expected != actual) massive.munit.Assert.fail("Value [" + actual + "] was not equal to expected value [" + expected + "]",info);
}
massive.munit.Assert.areNotEqual = function(expected,actual,info) {
	massive.munit.Assert.assertionCount++;
	if(expected == actual) massive.munit.Assert.fail("Value [" + actual + "] was equal to value [" + expected + "]",info);
}
massive.munit.Assert.fail = function(msg,info) {
	throw new massive.munit.AssertionException(msg,info);
}
massive.munit.Assert.prototype = {
	__class__: massive.munit.Assert
}
massive.munit.MUnitException = $hxClasses["massive.munit.MUnitException"] = function(message,info) {
	massive.haxe.Exception.call(this,message,info);
	this.type = massive.haxe.util.ReflectUtil.here({ fileName : "MUnitException.hx", lineNumber : 50, className : "massive.munit.MUnitException", methodName : "new"}).className;
};
massive.munit.MUnitException.__name__ = ["massive","munit","MUnitException"];
massive.munit.MUnitException.__super__ = massive.haxe.Exception;
massive.munit.MUnitException.prototype = $extend(massive.haxe.Exception.prototype,{
	__class__: massive.munit.MUnitException
});
massive.munit.AssertionException = $hxClasses["massive.munit.AssertionException"] = function(msg,info) {
	massive.munit.MUnitException.call(this,msg,info);
	this.type = massive.haxe.util.ReflectUtil.here({ fileName : "AssertionException.hx", lineNumber : 49, className : "massive.munit.AssertionException", methodName : "new"}).className;
};
massive.munit.AssertionException.__name__ = ["massive","munit","AssertionException"];
massive.munit.AssertionException.__super__ = massive.munit.MUnitException;
massive.munit.AssertionException.prototype = $extend(massive.munit.MUnitException.prototype,{
	__class__: massive.munit.AssertionException
});
massive.munit.ITestResultClient = $hxClasses["massive.munit.ITestResultClient"] = function() { }
massive.munit.ITestResultClient.__name__ = ["massive","munit","ITestResultClient"];
massive.munit.ITestResultClient.prototype = {
	completionHandler: null
	,id: null
	,addPass: null
	,addFail: null
	,addError: null
	,addIgnore: null
	,reportFinalStatistics: null
	,__class__: massive.munit.ITestResultClient
	,__properties__: {set_completionHandler:"set_completeHandler",get_completionHandler:"get_completeHandler"}
}
massive.munit.IAdvancedTestResultClient = $hxClasses["massive.munit.IAdvancedTestResultClient"] = function() { }
massive.munit.IAdvancedTestResultClient.__name__ = ["massive","munit","IAdvancedTestResultClient"];
massive.munit.IAdvancedTestResultClient.__interfaces__ = [massive.munit.ITestResultClient];
massive.munit.IAdvancedTestResultClient.prototype = {
	setCurrentTestClass: null
	,__class__: massive.munit.IAdvancedTestResultClient
}
massive.munit.ICoverageTestResultClient = $hxClasses["massive.munit.ICoverageTestResultClient"] = function() { }
massive.munit.ICoverageTestResultClient.__name__ = ["massive","munit","ICoverageTestResultClient"];
massive.munit.ICoverageTestResultClient.__interfaces__ = [massive.munit.IAdvancedTestResultClient];
massive.munit.ICoverageTestResultClient.prototype = {
	setCurrentTestClassCoverage: null
	,reportFinalCoverage: null
	,__class__: massive.munit.ICoverageTestResultClient
}
massive.munit.TestClassHelper = $hxClasses["massive.munit.TestClassHelper"] = function(type,isDebug) {
	if(isDebug == null) isDebug = false;
	this.type = type;
	this.isDebug = isDebug;
	this.tests = [];
	this.index = 0;
	this.className = Type.getClassName(type);
	this.beforeClass = this.nullFunc.$bind(this);
	this.afterClass = this.nullFunc.$bind(this);
	this.before = this.nullFunc.$bind(this);
	this.after = this.nullFunc.$bind(this);
	this.parse(type);
};
massive.munit.TestClassHelper.__name__ = ["massive","munit","TestClassHelper"];
massive.munit.TestClassHelper.prototype = {
	type: null
	,test: null
	,beforeClass: null
	,afterClass: null
	,before: null
	,after: null
	,tests: null
	,index: null
	,className: null
	,isDebug: null
	,hasNext: function() {
		return this.index < this.tests.length;
	}
	,next: function() {
		return this.hasNext()?this.tests[this.index++]:null;
	}
	,current: function() {
		return this.index <= 0?this.tests[0]:this.tests[this.index - 1];
	}
	,parse: function(type) {
		this.test = Type.createEmptyInstance(type);
		var inherintanceChain = this.getInheritanceChain(type);
		var fieldMeta = this.collateFieldMeta(inherintanceChain);
		this.scanForTests(fieldMeta);
		this.tests.sort(this.sortTestsByName.$bind(this));
	}
	,getInheritanceChain: function(clazz) {
		var inherintanceChain = [clazz];
		while((clazz = Type.getSuperClass(clazz)) != null) inherintanceChain.push(clazz);
		return inherintanceChain;
	}
	,collateFieldMeta: function(inherintanceChain) {
		var meta = { };
		while(inherintanceChain.length > 0) {
			var clazz = inherintanceChain.pop();
			var newMeta = haxe.rtti.Meta.getFields(clazz);
			var markedFieldNames = Reflect.fields(newMeta);
			var _g = 0;
			while(_g < markedFieldNames.length) {
				var fieldName = markedFieldNames[_g];
				++_g;
				var recordedFieldTags = Reflect.field(meta,fieldName);
				var newFieldTags = Reflect.field(newMeta,fieldName);
				var newTagNames = Reflect.fields(newFieldTags);
				if(recordedFieldTags == null) {
					var tagsCopy = { };
					var _g1 = 0;
					while(_g1 < newTagNames.length) {
						var tagName = newTagNames[_g1];
						++_g1;
						tagsCopy[tagName] = Reflect.field(newFieldTags,tagName);
					}
					meta[fieldName] = tagsCopy;
				} else {
					var ignored = false;
					var _g1 = 0;
					while(_g1 < newTagNames.length) {
						var tagName = newTagNames[_g1];
						++_g1;
						if(tagName == "Ignore") ignored = true;
						if(!ignored && (tagName == "Test" || tagName == "AsyncTest") && Reflect.hasField(recordedFieldTags,"Ignore")) Reflect.deleteField(recordedFieldTags,"Ignore");
						var tagValue = Reflect.field(newFieldTags,tagName);
						recordedFieldTags[tagName] = tagValue;
					}
				}
			}
		}
		return meta;
	}
	,scanForTests: function(fieldMeta) {
		var fieldNames = Reflect.fields(fieldMeta);
		var _g = 0;
		while(_g < fieldNames.length) {
			var fieldName = fieldNames[_g];
			++_g;
			var f = Reflect.field(this.test,fieldName);
			if(Reflect.isFunction(f)) {
				var funcMeta = Reflect.field(fieldMeta,fieldName);
				this.searchForMatchingTags(fieldName,f,funcMeta);
			}
		}
	}
	,searchForMatchingTags: function(fieldName,func,funcMeta) {
		var _g = 0, _g1 = massive.munit.TestClassHelper.META_TAGS;
		while(_g < _g1.length) {
			var tag = _g1[_g];
			++_g;
			if(Reflect.hasField(funcMeta,tag)) {
				var args = Reflect.field(funcMeta,tag);
				var description = args != null?args[0]:"";
				var isAsync = args != null && description == "Async";
				var isIgnored = Reflect.hasField(funcMeta,"Ignore");
				if(isAsync) description = ""; else if(isIgnored) {
					args = Reflect.field(funcMeta,"Ignore");
					description = args != null?args[0]:"";
				}
				switch(tag) {
				case "BeforeClass":
					this.beforeClass = func;
					break;
				case "AfterClass":
					this.afterClass = func;
					break;
				case "Before":
					this.before = func;
					break;
				case "After":
					this.after = func;
					break;
				case "AsyncTest":
					if(!this.isDebug) this.addTest(fieldName,func,this.test,true,isIgnored,description);
					break;
				case "Test":
					if(!this.isDebug) this.addTest(fieldName,func,this.test,isAsync,isIgnored,description);
					break;
				case "TestDebug":
					if(this.isDebug) this.addTest(fieldName,func,this.test,isAsync,isIgnored,description);
					break;
				}
			}
		}
	}
	,addTest: function(field,testFunction,testInstance,isAsync,isIgnored,description) {
		var result = new massive.munit.TestResult();
		result.async = isAsync;
		result.ignore = isIgnored;
		result.className = this.className;
		result.description = description;
		result.name = field;
		var data = { test : testFunction, scope : testInstance, result : result};
		this.tests.push(data);
	}
	,sortTestsByName: function(x,y) {
		if(x.result.name == y.result.name) return 0;
		if(x.result.name > y.result.name) return 1; else return -1;
	}
	,nullFunc: function() {
	}
	,__class__: massive.munit.TestClassHelper
}
massive.munit.TestResult = $hxClasses["massive.munit.TestResult"] = function() {
	this.passed = false;
	this.executionTime = 0.0;
	this.name = "";
	this.className = "";
	this.description = "";
	this.async = false;
	this.ignore = false;
	this.error = null;
	this.failure = null;
};
massive.munit.TestResult.__name__ = ["massive","munit","TestResult"];
massive.munit.TestResult.prototype = {
	passed: null
	,executionTime: null
	,name: null
	,className: null
	,description: null
	,location: null
	,get_location: function() {
		return this.name == "" && this.className == ""?"":this.className + "#" + this.name;
	}
	,async: null
	,ignore: null
	,failure: null
	,error: null
	,type: null
	,get_type: function() {
		if(this.error != null) return massive.munit.TestResultType.ERROR;
		if(this.failure != null) return massive.munit.TestResultType.FAIL;
		if(this.ignore == true) return massive.munit.TestResultType.IGNORE;
		if(this.passed == true) return massive.munit.TestResultType.PASS;
		return massive.munit.TestResultType.UNKNOWN;
	}
	,__class__: massive.munit.TestResult
	,__properties__: {get_type:"get_type",get_location:"get_location"}
}
massive.munit.TestResultType = $hxClasses["massive.munit.TestResultType"] = { __ename__ : ["massive","munit","TestResultType"], __constructs__ : ["UNKNOWN","PASS","FAIL","ERROR","IGNORE"] }
massive.munit.TestResultType.UNKNOWN = ["UNKNOWN",0];
massive.munit.TestResultType.UNKNOWN.toString = $estr;
massive.munit.TestResultType.UNKNOWN.__enum__ = massive.munit.TestResultType;
massive.munit.TestResultType.PASS = ["PASS",1];
massive.munit.TestResultType.PASS.toString = $estr;
massive.munit.TestResultType.PASS.__enum__ = massive.munit.TestResultType;
massive.munit.TestResultType.FAIL = ["FAIL",2];
massive.munit.TestResultType.FAIL.toString = $estr;
massive.munit.TestResultType.FAIL.__enum__ = massive.munit.TestResultType;
massive.munit.TestResultType.ERROR = ["ERROR",3];
massive.munit.TestResultType.ERROR.toString = $estr;
massive.munit.TestResultType.ERROR.__enum__ = massive.munit.TestResultType;
massive.munit.TestResultType.IGNORE = ["IGNORE",4];
massive.munit.TestResultType.IGNORE.toString = $estr;
massive.munit.TestResultType.IGNORE.__enum__ = massive.munit.TestResultType;
if(!massive.munit.async) massive.munit.async = {}
massive.munit.async.IAsyncDelegateObserver = $hxClasses["massive.munit.async.IAsyncDelegateObserver"] = function() { }
massive.munit.async.IAsyncDelegateObserver.__name__ = ["massive","munit","async","IAsyncDelegateObserver"];
massive.munit.async.IAsyncDelegateObserver.prototype = {
	asyncResponseHandler: null
	,asyncTimeoutHandler: null
	,asyncDelegateCreatedHandler: null
	,__class__: massive.munit.async.IAsyncDelegateObserver
}
massive.munit.TestRunner = $hxClasses["massive.munit.TestRunner"] = function(resultClient) {
	this.clients = new Array();
	this.addResultClient(resultClient);
	this.set_asyncFactory(this.createAsyncFactory());
	this.running = false;
	this.isDebug = false;
};
massive.munit.TestRunner.__name__ = ["massive","munit","TestRunner"];
massive.munit.TestRunner.__interfaces__ = [massive.munit.async.IAsyncDelegateObserver];
massive.munit.TestRunner.prototype = {
	completionHandler: null
	,clientCount: null
	,get_clientCount: function() {
		return this.clients.length;
	}
	,running: null
	,testCount: null
	,failCount: null
	,errorCount: null
	,passCount: null
	,ignoreCount: null
	,clientCompleteCount: null
	,clients: null
	,activeHelper: null
	,testSuites: null
	,asyncPending: null
	,asyncDelegate: null
	,suiteIndex: null
	,asyncFactory: null
	,set_asyncFactory: function(value) {
		if(value == this.asyncFactory) return value;
		if(this.running) throw new massive.munit.MUnitException("Can't change AsyncFactory while tests are running",{ fileName : "TestRunner.hx", lineNumber : 119, className : "massive.munit.TestRunner", methodName : "set_asyncFactory"});
		value.observer = this;
		return this.asyncFactory = value;
	}
	,emptyParams: null
	,startTime: null
	,testStartTime: null
	,isDebug: null
	,addResultClient: function(resultClient) {
		var _g = 0, _g1 = this.clients;
		while(_g < _g1.length) {
			var client = _g1[_g];
			++_g;
			if(client == resultClient) return;
		}
		resultClient.set_completeHandler(this.clientCompletionHandler.$bind(this));
		this.clients.push(resultClient);
	}
	,debug: function(testSuiteClasses) {
		this.isDebug = true;
		this.run(testSuiteClasses);
	}
	,run: function(testSuiteClasses) {
		if(this.running) return;
		this.running = true;
		this.asyncPending = false;
		this.asyncDelegate = null;
		this.testCount = 0;
		this.failCount = 0;
		this.errorCount = 0;
		this.passCount = 0;
		this.ignoreCount = 0;
		this.suiteIndex = 0;
		this.clientCompleteCount = 0;
		massive.munit.Assert.assertionCount = 0;
		this.emptyParams = new Array();
		this.testSuites = new Array();
		this.startTime = massive.munit.util.Timer.stamp();
		var _g = 0;
		while(_g < testSuiteClasses.length) {
			var suiteType = testSuiteClasses[_g];
			++_g;
			this.testSuites.push(Type.createInstance(suiteType,new Array()));
		}
		this.execute();
	}
	,execute: function() {
		var _g1 = this.suiteIndex, _g = this.testSuites.length;
		while(_g1 < _g) {
			var i = _g1++;
			var suite = this.testSuites[i];
			while( suite.hasNext() ) {
				var testClass = suite.next();
				if(this.activeHelper == null || this.activeHelper.type != testClass) {
					this.activeHelper = new massive.munit.TestClassHelper(testClass,this.isDebug);
					this.activeHelper.beforeClass.apply(this.activeHelper.test,this.emptyParams);
				}
				this.executeTestCases();
				if(!this.asyncPending) this.activeHelper.afterClass.apply(this.activeHelper.test,this.emptyParams); else {
					suite.repeat();
					this.suiteIndex = i;
					return;
				}
			}
		}
		if(!this.asyncPending) {
			var time = massive.munit.util.Timer.stamp() - this.startTime;
			var _g = 0, _g1 = this.clients;
			while(_g < _g1.length) {
				var client = _g1[_g];
				++_g;
				if(Std["is"](client,massive.munit.IAdvancedTestResultClient)) ((function($this) {
					var $r;
					var $t = client;
					if(Std["is"]($t,massive.munit.IAdvancedTestResultClient)) $t; else throw "Class cast error";
					$r = $t;
					return $r;
				}(this))).setCurrentTestClass(null);
				client.reportFinalStatistics(this.testCount,this.passCount,this.failCount,this.errorCount,this.ignoreCount,time);
			}
		}
	}
	,executeTestCases: function() {
		var _g = 0, _g1 = this.clients;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(Std["is"](c,massive.munit.IAdvancedTestResultClient)) ((function($this) {
				var $r;
				var $t = c;
				if(Std["is"]($t,massive.munit.IAdvancedTestResultClient)) $t; else throw "Class cast error";
				$r = $t;
				return $r;
			}(this))).setCurrentTestClass(this.activeHelper.className);
		}
		var $it0 = this.activeHelper;
		while( $it0.hasNext() ) {
			var testCaseData = $it0.next();
			if(testCaseData.result.ignore) {
				this.ignoreCount++;
				var _g = 0, _g1 = this.clients;
				while(_g < _g1.length) {
					var c = _g1[_g];
					++_g;
					c.addIgnore(testCaseData.result);
				}
			} else {
				this.testCount++;
				this.activeHelper.before.apply(this.activeHelper.test,this.emptyParams);
				this.testStartTime = massive.munit.util.Timer.stamp();
				this.executeTestCase(testCaseData,testCaseData.result.async);
				if(!this.asyncPending) this.activeHelper.after.apply(this.activeHelper.test,this.emptyParams); else break;
			}
		}
	}
	,executeTestCase: function(testCaseData,async) {
		var result = testCaseData.result;
		try {
			var assertionCount = massive.munit.Assert.assertionCount;
			if(async) {
				testCaseData.test.apply(testCaseData.scope,[this.asyncFactory]);
				if(this.asyncDelegate == null) throw new massive.munit.async.MissingAsyncDelegateException("No AsyncDelegate was created in async test at " + result.get_location(),null);
				this.asyncPending = true;
			} else {
				testCaseData.test.apply(testCaseData.scope,this.emptyParams);
				result.passed = true;
				result.executionTime = massive.munit.util.Timer.stamp() - this.testStartTime;
				this.passCount++;
				var _g = 0, _g1 = this.clients;
				while(_g < _g1.length) {
					var c = _g1[_g];
					++_g;
					c.addPass(result);
				}
			}
		} catch( e ) {
			if(async && this.asyncDelegate != null) {
				this.asyncDelegate.cancelTest();
				this.asyncDelegate = null;
			}
			if(Std["is"](e,org.hamcrest.AssertionException)) e = new massive.munit.AssertionException(e.message,e.info);
			if(Std["is"](e,massive.munit.AssertionException)) {
				result.executionTime = massive.munit.util.Timer.stamp() - this.testStartTime;
				result.failure = e;
				this.failCount++;
				var _g = 0, _g1 = this.clients;
				while(_g < _g1.length) {
					var c = _g1[_g];
					++_g;
					c.addFail(result);
				}
			} else {
				result.executionTime = massive.munit.util.Timer.stamp() - this.testStartTime;
				if(!Std["is"](e,massive.munit.MUnitException)) e = new massive.munit.UnhandledException(e,result.get_location());
				result.error = e;
				this.errorCount++;
				var _g = 0, _g1 = this.clients;
				while(_g < _g1.length) {
					var c = _g1[_g];
					++_g;
					c.addError(result);
				}
			}
		}
	}
	,clientCompletionHandler: function(resultClient) {
		if(++this.clientCompleteCount == this.clients.length) {
			if(this.completionHandler != null) {
				var successful = this.passCount == this.testCount;
				var handler = this.completionHandler;
				massive.munit.util.Timer.delay(function() {
					handler(successful);
				},10);
			}
			this.running = false;
		}
	}
	,asyncResponseHandler: function(delegate) {
		var testCaseData = this.activeHelper.current();
		testCaseData.test = delegate.runTest.$bind(delegate);
		testCaseData.scope = delegate;
		this.asyncPending = false;
		this.asyncDelegate = null;
		this.executeTestCase(testCaseData,false);
		this.activeHelper.after.apply(this.activeHelper.test,this.emptyParams);
		this.execute();
	}
	,asyncTimeoutHandler: function(delegate) {
		var testCaseData = this.activeHelper.current();
		var result = testCaseData.result;
		result.executionTime = massive.munit.util.Timer.stamp() - this.testStartTime;
		result.error = new massive.munit.async.AsyncTimeoutException("",delegate.info);
		this.asyncPending = false;
		this.asyncDelegate = null;
		this.errorCount++;
		var _g = 0, _g1 = this.clients;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.addError(result);
		}
		this.activeHelper.after.apply(this.activeHelper.test,this.emptyParams);
		this.execute();
	}
	,asyncDelegateCreatedHandler: function(delegate) {
		this.asyncDelegate = delegate;
	}
	,createAsyncFactory: function() {
		return new massive.munit.async.AsyncFactory(this);
	}
	,__class__: massive.munit.TestRunner
	,__properties__: {set_asyncFactory:"set_asyncFactory",get_clientCount:"get_clientCount"}
}
massive.munit.UnhandledException = $hxClasses["massive.munit.UnhandledException"] = function(source,testLocation) {
	massive.munit.MUnitException.call(this,source.toString() + this.formatLocation(source,testLocation),null);
	this.type = massive.haxe.util.ReflectUtil.here({ fileName : "UnhandledException.hx", lineNumber : 48, className : "massive.munit.UnhandledException", methodName : "new"}).className;
};
massive.munit.UnhandledException.__name__ = ["massive","munit","UnhandledException"];
massive.munit.UnhandledException.__super__ = massive.munit.MUnitException;
massive.munit.UnhandledException.prototype = $extend(massive.munit.MUnitException.prototype,{
	formatLocation: function(source,testLocation) {
		var stackTrace = this.getStackTrace(source);
		if(stackTrace == "") stackTrace = " at " + testLocation; else stackTrace = " " + stackTrace.substr(1);
		return stackTrace;
	}
	,getStackTrace: function(source) {
		var s = "";
		if(s == "") {
			var stack = haxe.Stack.exceptionStack();
			while(stack.length > 0) {
				var $e = (stack.shift());
				switch( $e[1] ) {
				case 2:
					var line = $e[4], file = $e[3], item = $e[2];
					s += "\tat " + file + " (" + line + ")\n";
					break;
				case 1:
					var module = $e[2];
					break;
				case 3:
					var method = $e[3], classname = $e[2];
					s += "\tat " + classname + "#" + method + "\n";
					break;
				case 4:
					var v = $e[2];
					break;
				case 0:
					break;
				}
			}
		}
		return s;
	}
	,__class__: massive.munit.UnhandledException
});
massive.munit.async.AsyncDelegate = $hxClasses["massive.munit.async.AsyncDelegate"] = function(testCase,handler,timeout,info) {
	var self = this;
	this.testCase = testCase;
	this.handler = handler;
	this.delegateHandler = Reflect.makeVarArgs(this.responseHandler.$bind(this));
	this.info = info;
	this.params = [];
	this.timedOut = false;
	this.canceled = false;
	if(timeout == null || timeout <= 0) timeout = 400;
	this.timeoutDelay = timeout;
	this.timer = massive.munit.util.Timer.delay(this.timeoutHandler.$bind(this),this.timeoutDelay);
};
massive.munit.async.AsyncDelegate.__name__ = ["massive","munit","async","AsyncDelegate"];
massive.munit.async.AsyncDelegate.prototype = {
	observer: null
	,info: null
	,delegateHandler: null
	,timeoutDelay: null
	,timedOut: null
	,testCase: null
	,handler: null
	,timer: null
	,canceled: null
	,deferredTimer: null
	,params: null
	,runTest: function() {
		this.handler.apply(this.testCase,this.params);
	}
	,cancelTest: function() {
		this.canceled = true;
		this.timer.stop();
		if(this.deferredTimer != null) this.deferredTimer.stop();
	}
	,responseHandler: function(params) {
		if(this.timedOut || this.canceled) return;
		this.timer.stop();
		if(this.deferredTimer != null) this.deferredTimer.stop();
		if(params == null) params = [];
		this.params = params;
		if(this.observer != null) this.observer.asyncResponseHandler(this);
	}
	,timeoutHandler: function() {
		this.actualTimeoutHandler();
	}
	,actualTimeoutHandler: function() {
		this.deferredTimer = null;
		this.handler = null;
		this.delegateHandler = null;
		this.timedOut = true;
		if(this.observer != null) this.observer.asyncTimeoutHandler(this);
	}
	,__class__: massive.munit.async.AsyncDelegate
}
massive.munit.async.AsyncFactory = $hxClasses["massive.munit.async.AsyncFactory"] = function(observer) {
	this.observer = observer;
	this.asyncDelegateCount = 0;
};
massive.munit.async.AsyncFactory.__name__ = ["massive","munit","async","AsyncFactory"];
massive.munit.async.AsyncFactory.prototype = {
	observer: null
	,asyncDelegateCount: null
	,createHandler: function(testCase,handler,timeout,info) {
		var delegate = new massive.munit.async.AsyncDelegate(testCase,handler,timeout,info);
		delegate.observer = this.observer;
		this.asyncDelegateCount++;
		this.observer.asyncDelegateCreatedHandler(delegate);
		return delegate.delegateHandler;
	}
	,__class__: massive.munit.async.AsyncFactory
}
massive.munit.async.AsyncTimeoutException = $hxClasses["massive.munit.async.AsyncTimeoutException"] = function(message,info) {
	massive.munit.MUnitException.call(this,message,info);
	this.type = massive.haxe.util.ReflectUtil.here({ fileName : "AsyncTimeoutException.hx", lineNumber : 47, className : "massive.munit.async.AsyncTimeoutException", methodName : "new"}).className;
};
massive.munit.async.AsyncTimeoutException.__name__ = ["massive","munit","async","AsyncTimeoutException"];
massive.munit.async.AsyncTimeoutException.__super__ = massive.munit.MUnitException;
massive.munit.async.AsyncTimeoutException.prototype = $extend(massive.munit.MUnitException.prototype,{
	__class__: massive.munit.async.AsyncTimeoutException
});
massive.munit.async.MissingAsyncDelegateException = $hxClasses["massive.munit.async.MissingAsyncDelegateException"] = function(message,info) {
	massive.munit.MUnitException.call(this,message,info);
	this.type = massive.haxe.util.ReflectUtil.here({ fileName : "MissingAsyncDelegateException.hx", lineNumber : 47, className : "massive.munit.async.MissingAsyncDelegateException", methodName : "new"}).className;
};
massive.munit.async.MissingAsyncDelegateException.__name__ = ["massive","munit","async","MissingAsyncDelegateException"];
massive.munit.async.MissingAsyncDelegateException.__super__ = massive.munit.MUnitException;
massive.munit.async.MissingAsyncDelegateException.prototype = $extend(massive.munit.MUnitException.prototype,{
	__class__: massive.munit.async.MissingAsyncDelegateException
});
if(!massive.munit.client) massive.munit.client = {}
massive.munit.client.AbstractTestResultClient = $hxClasses["massive.munit.client.AbstractTestResultClient"] = function() {
	this.init();
};
massive.munit.client.AbstractTestResultClient.__name__ = ["massive","munit","client","AbstractTestResultClient"];
massive.munit.client.AbstractTestResultClient.__interfaces__ = [massive.munit.ICoverageTestResultClient,massive.munit.IAdvancedTestResultClient];
massive.munit.client.AbstractTestResultClient.prototype = {
	id: null
	,completionHandler: null
	,get_completeHandler: function() {
		return this.completionHandler;
	}
	,set_completeHandler: function(value) {
		return this.completionHandler = value;
	}
	,output: null
	,get_output: function() {
		return this.output;
	}
	,passCount: null
	,failCount: null
	,errorCount: null
	,ignoreCount: null
	,currentTestClass: null
	,currentClassResults: null
	,currentCoverageResult: null
	,traces: null
	,totalResults: null
	,totalCoveragePercent: null
	,totalCoverageReport: null
	,totalCoverageResults: null
	,originalTrace: null
	,finalResult: null
	,init: function() {
		this.originalTrace = haxe.Log.trace;
		haxe.Log.trace = this.customTrace.$bind(this);
		this.currentTestClass = null;
		this.currentClassResults = [];
		this.traces = [];
		this.passCount = 0;
		this.failCount = 0;
		this.errorCount = 0;
		this.ignoreCount = 0;
		this.currentCoverageResult = null;
		this.totalResults = [];
		this.totalCoveragePercent = 0;
		this.totalCoverageReport = null;
		this.totalCoverageResults = null;
	}
	,setCurrentTestClass: function(className) {
		if(this.currentTestClass == className) return;
		if(this.currentTestClass != null) this.finalizeTestClass();
		this.currentTestClass = className;
		if(this.currentTestClass != null) this.initializeTestClass();
	}
	,addPass: function(result) {
		this.passCount++;
		this.updateTestClass(result);
	}
	,addFail: function(result) {
		this.failCount++;
		this.updateTestClass(result);
	}
	,addError: function(result) {
		this.errorCount++;
		this.updateTestClass(result);
	}
	,addIgnore: function(result) {
		this.ignoreCount++;
		this.updateTestClass(result);
	}
	,setCurrentTestClassCoverage: function(result) {
		this.currentCoverageResult = result;
	}
	,reportFinalCoverage: function(percent,missingCoverageResults,summary,classBreakdown,packageBreakdown,executionFrequency) {
		if(percent == null) percent = 0;
		this.totalCoveragePercent = percent;
		this.totalCoverageResults = missingCoverageResults;
		this.totalCoverageReport = summary;
	}
	,reportFinalStatistics: function(testCount,passCount,failCount,errorCount,ignoreCount,time) {
		this.finalResult = passCount == testCount;
		this.printReports();
		this.printFinalStatistics(this.finalResult,testCount,passCount,failCount,errorCount,ignoreCount,time);
		this.printOverallResult(this.finalResult);
		haxe.Log.trace = this.originalTrace;
		if(this.get_completeHandler() != null) (this.get_completeHandler())(this);
		return this.get_output();
	}
	,initializeTestClass: function() {
		this.currentClassResults = [];
		this.traces = [];
		this.passCount = 0;
		this.failCount = 0;
		this.errorCount = 0;
		this.ignoreCount = 0;
	}
	,updateTestClass: function(result) {
		this.currentClassResults.push(result);
		this.totalResults.push(result);
	}
	,finalizeTestClass: function() {
		this.currentClassResults.sort(this.sortTestResults.$bind(this));
	}
	,printReports: function() {
	}
	,printFinalStatistics: function(result,testCount,passCount,failCount,errorCount,ignoreCount,time) {
	}
	,printOverallResult: function(result) {
	}
	,customTrace: function(value,info) {
		var traceString = info.fileName + "|" + info.lineNumber + "| " + Std.string(value);
		this.traces.push(traceString);
	}
	,sortTestResults: function(a,b) {
		var aInt = (function($this) {
			var $r;
			switch( (a.get_type())[1] ) {
			case 3:
				$r = 2;
				break;
			case 2:
				$r = 1;
				break;
			case 4:
				$r = 0;
				break;
			case 1:
				$r = -1;
				break;
			default:
				$r = -2;
			}
			return $r;
		}(this));
		var bInt = (function($this) {
			var $r;
			switch( (b.get_type())[1] ) {
			case 3:
				$r = 2;
				break;
			case 2:
				$r = 1;
				break;
			case 4:
				$r = 0;
				break;
			case 1:
				$r = -1;
				break;
			default:
				$r = -2;
			}
			return $r;
		}(this));
		return aInt - bInt;
	}
	,__class__: massive.munit.client.AbstractTestResultClient
	,__properties__: {get_output:"get_output",set_completionHandler:"set_completeHandler",get_completionHandler:"get_completeHandler"}
}
massive.munit.client.HTTPClient = $hxClasses["massive.munit.client.HTTPClient"] = function(client,url,queueRequest) {
	if(queueRequest == null) queueRequest = true;
	if(url == null) url = "http://localhost:2000";
	this.id = "HTTPClient";
	this.client = client;
	this.url = url;
	this.queueRequest = queueRequest;
};
massive.munit.client.HTTPClient.__name__ = ["massive","munit","client","HTTPClient"];
massive.munit.client.HTTPClient.__interfaces__ = [massive.munit.IAdvancedTestResultClient];
massive.munit.client.HTTPClient.dispatchNextRequest = function() {
	if(massive.munit.client.HTTPClient.responsePending || massive.munit.client.HTTPClient.queue.length == 0) return;
	massive.munit.client.HTTPClient.responsePending = true;
	var request = massive.munit.client.HTTPClient.queue.pop();
	request.send();
}
massive.munit.client.HTTPClient.prototype = {
	id: null
	,completionHandler: null
	,get_completeHandler: function() {
		return this.completionHandler;
	}
	,set_completeHandler: function(value) {
		return this.completionHandler = value;
	}
	,client: null
	,url: null
	,request: null
	,queueRequest: null
	,setCurrentTestClass: function(className) {
		if(Std["is"](this.client,massive.munit.IAdvancedTestResultClient)) ((function($this) {
			var $r;
			var $t = $this.client;
			if(Std["is"]($t,massive.munit.IAdvancedTestResultClient)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).setCurrentTestClass(className);
	}
	,addPass: function(result) {
		this.client.addPass(result);
	}
	,addFail: function(result) {
		this.client.addFail(result);
	}
	,addError: function(result) {
		this.client.addError(result);
	}
	,addIgnore: function(result) {
		this.client.addIgnore(result);
	}
	,reportFinalStatistics: function(testCount,passCount,failCount,errorCount,ignoreCount,time) {
		var result = this.client.reportFinalStatistics(testCount,passCount,failCount,errorCount,ignoreCount,time);
		this.sendResult(result);
		return result;
	}
	,sendResult: function(result) {
		this.request = new massive.munit.client.URLRequest(this.url);
		this.request.setHeader("munit-clientId",this.client.id);
		this.request.setHeader("munit-platformId",this.platform());
		this.request.onData = this.onData.$bind(this);
		this.request.onError = this.onError.$bind(this);
		this.request.data = result;
		if(this.queueRequest) {
			massive.munit.client.HTTPClient.queue.unshift(this.request);
			massive.munit.client.HTTPClient.dispatchNextRequest();
		} else this.request.send();
	}
	,platform: function() {
		return "js";
		return "unknown";
	}
	,onData: function(data) {
		if(this.queueRequest) {
			massive.munit.client.HTTPClient.responsePending = false;
			massive.munit.client.HTTPClient.dispatchNextRequest();
		}
		if(this.get_completeHandler() != null) (this.get_completeHandler())(this);
	}
	,onError: function(msg) {
		if(this.queueRequest) {
			massive.munit.client.HTTPClient.responsePending = false;
			massive.munit.client.HTTPClient.dispatchNextRequest();
		}
		if(this.get_completeHandler() != null) (this.get_completeHandler())(this);
	}
	,__class__: massive.munit.client.HTTPClient
	,__properties__: {set_completionHandler:"set_completeHandler",get_completionHandler:"get_completeHandler"}
}
massive.munit.client.URLRequest = $hxClasses["massive.munit.client.URLRequest"] = function(url) {
	this.url = url;
	this.createClient(url);
	this.setHeader("Content-Type","text/plain");
};
massive.munit.client.URLRequest.__name__ = ["massive","munit","client","URLRequest"];
massive.munit.client.URLRequest.prototype = {
	onData: null
	,onError: null
	,data: null
	,url: null
	,headers: null
	,client: null
	,createClient: function(url) {
		this.client = new haxe.Http(url);
	}
	,setHeader: function(name,value) {
		this.client.setHeader(name,value);
	}
	,send: function() {
		this.client.onData = this.onData;
		this.client.onError = this.onError;
		this.client.setPostData(this.data);
		this.client.request(true);
	}
	,__class__: massive.munit.client.URLRequest
}
massive.munit.client.JUnitReportClient = $hxClasses["massive.munit.client.JUnitReportClient"] = function() {
	this.id = "junit";
	this.xml = new StringBuf();
	this.currentTestClass = "";
	this.newline = "\n";
	this.testSuiteXML = null;
	this.xml.add("<testsuites>" + this.newline);
};
massive.munit.client.JUnitReportClient.__name__ = ["massive","munit","client","JUnitReportClient"];
massive.munit.client.JUnitReportClient.__interfaces__ = [massive.munit.IAdvancedTestResultClient];
massive.munit.client.JUnitReportClient.prototype = {
	id: null
	,completionHandler: null
	,get_completeHandler: function() {
		return this.completionHandler;
	}
	,set_completeHandler: function(value) {
		return this.completionHandler = value;
	}
	,newline: null
	,xml: null
	,testSuiteXML: null
	,currentTestClass: null
	,suitePassCount: null
	,suiteFailCount: null
	,suiteErrorCount: null
	,suiteExecutionTime: null
	,setCurrentTestClass: function(className) {
		if(this.currentTestClass == className) return;
		if(this.currentTestClass != null) this.endTestSuite();
		this.currentTestClass = className;
		if(this.currentTestClass != null) this.startTestSuite();
	}
	,addPass: function(result) {
		this.suitePassCount++;
		this.testSuiteXML.add("<testcase classname=\"" + result.className + "\" name=\"" + result.name + "\" time=\"" + massive.munit.util.MathUtil.round(result.executionTime,5) + "\" />" + this.newline);
	}
	,addFail: function(result) {
		this.suiteFailCount++;
		this.testSuiteXML.add("<testcase classname=\"" + result.className + "\" name=\"" + result.name + "\" time=\"" + massive.munit.util.MathUtil.round(result.executionTime,5) + "\" >" + this.newline);
		this.testSuiteXML.add("<failure message=\"" + result.failure.message + "\" type=\"" + result.failure.type + "\">");
		this.testSuiteXML.add(result.failure);
		this.testSuiteXML.add("</failure>" + this.newline);
		this.testSuiteXML.add("</testcase>" + this.newline);
	}
	,addError: function(result) {
		this.suiteErrorCount++;
		this.testSuiteXML.add("<testcase classname=\"" + result.className + "\" name=\"" + result.name + "\" time=\"" + massive.munit.util.MathUtil.round(result.executionTime,5) + "\" >" + this.newline);
		this.testSuiteXML.add("<error message=\"" + result.error.message + "\" type=\"" + result.error.type + "\">");
		this.testSuiteXML.add(result.error);
		this.testSuiteXML.add("</error>" + this.newline);
		this.testSuiteXML.add("</testcase>" + this.newline);
	}
	,addIgnore: function(result) {
	}
	,reportFinalStatistics: function(testCount,passCount,failCount,errorCount,ignoreCount,time) {
		this.xml.add("</testsuites>");
		if(this.get_completeHandler() != null) (this.get_completeHandler())(this);
		return this.xml.b.join("");
	}
	,endTestSuite: function() {
		if(this.testSuiteXML == null) return;
		var suiteTestCount = this.suitePassCount + this.suiteFailCount + this.suiteErrorCount;
		this.suiteExecutionTime = massive.munit.util.Timer.stamp() - this.suiteExecutionTime;
		var header = "<testsuite errors=\"" + this.suiteErrorCount + "\" failures=\"" + this.suiteFailCount + "\" hostname=\"\" name=\"" + this.currentTestClass + "\" tests=\"" + suiteTestCount + "\" time=\"" + massive.munit.util.MathUtil.round(this.suiteExecutionTime,5) + "\" timestamp=\"" + Date.now() + "\">" + this.newline;
		var footer = "</testsuite>" + this.newline;
		this.testSuiteXML.add("<system-out></system-out>" + this.newline);
		this.testSuiteXML.add("<system-err></system-err>" + this.newline);
		this.xml.add(header);
		this.xml.add(this.testSuiteXML.b.join(""));
		this.xml.add(footer);
	}
	,startTestSuite: function() {
		this.suitePassCount = 0;
		this.suiteFailCount = 0;
		this.suiteErrorCount = 0;
		this.suiteExecutionTime = massive.munit.util.Timer.stamp();
		this.testSuiteXML = new StringBuf();
	}
	,__class__: massive.munit.client.JUnitReportClient
	,__properties__: {set_completionHandler:"set_completeHandler",get_completionHandler:"get_completeHandler"}
}
massive.munit.client.PrintClientBase = $hxClasses["massive.munit.client.PrintClientBase"] = function(includeIgnoredReport) {
	if(includeIgnoredReport == null) includeIgnoredReport = true;
	massive.munit.client.AbstractTestResultClient.call(this);
	this.id = "simple";
	this.verbose = false;
	this.includeIgnoredReport = includeIgnoredReport;
	this.printLine("MUnit Results");
	this.printLine(this.divider);
};
massive.munit.client.PrintClientBase.__name__ = ["massive","munit","client","PrintClientBase"];
massive.munit.client.PrintClientBase.__super__ = massive.munit.client.AbstractTestResultClient;
massive.munit.client.PrintClientBase.prototype = $extend(massive.munit.client.AbstractTestResultClient.prototype,{
	verbose: null
	,includeIgnoredReport: null
	,divider: null
	,divider2: null
	,init: function() {
		massive.munit.client.AbstractTestResultClient.prototype.init.call(this);
		this.divider = "------------------------------";
		this.divider2 = "==============================";
	}
	,initializeTestClass: function() {
		massive.munit.client.AbstractTestResultClient.prototype.initializeTestClass.call(this);
		this.printLine("Class: " + this.currentTestClass + " ");
	}
	,updateTestClass: function(result) {
		massive.munit.client.AbstractTestResultClient.prototype.updateTestClass.call(this,result);
		if(this.verbose) this.printLine(" " + result.name + ": " + result.get_type() + " "); else {
			switch( (result.get_type())[1] ) {
			case 1:
				this.print(".");
				break;
			case 2:
				this.print("!");
				break;
			case 3:
				this.print("x");
				break;
			case 4:
				this.print(",");
				break;
			case 0:
				null;
				break;
			}
		}
	}
	,finalizeTestClass: function() {
		massive.munit.client.AbstractTestResultClient.prototype.finalizeTestClass.call(this);
		var _g = 0, _g1 = this.traces;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			this.printLine("TRACE: " + item,1);
		}
		var _g = 0, _g1 = this.currentClassResults;
		while(_g < _g1.length) {
			var result = _g1[_g];
			++_g;
			switch( (result.get_type())[1] ) {
			case 3:
				this.printLine("ERROR: " + Std.string(result.error),1);
				break;
			case 2:
				this.printLine("FAIL: " + Std.string(result.failure),1);
				break;
			case 4:
				var ingoredString = result.get_location();
				if(result.description != null) ingoredString += " - " + result.description;
				this.printLine("IGNORE: " + ingoredString,1);
				break;
			case 1:
			case 0:
				null;
				break;
			}
		}
	}
	,setCurrentTestClassCoverage: function(result) {
		massive.munit.client.AbstractTestResultClient.prototype.setCurrentTestClassCoverage.call(this,result);
		this.print(" [" + result.percent + "%]");
	}
	,reportFinalCoverage: function(percent,missingCoverageResults,summary,classBreakdown,packageBreakdown,executionFrequency) {
		if(percent == null) percent = 0;
		massive.munit.client.AbstractTestResultClient.prototype.reportFinalCoverage.call(this,percent,missingCoverageResults,summary,classBreakdown,packageBreakdown,executionFrequency);
		this.printLine("");
		this.printLine(this.divider);
		this.printLine("COVERAGE REPORT");
		this.printLine(this.divider);
		if(missingCoverageResults != null && missingCoverageResults.length > 0) {
			this.printLine("MISSING CODE BLOCKS:");
			var _g = 0;
			while(_g < missingCoverageResults.length) {
				var result = missingCoverageResults[_g];
				++_g;
				this.printLine(result.className + " [" + result.percent + "%]",1);
				var _g1 = 0, _g2 = result.blocks;
				while(_g1 < _g2.length) {
					var item = _g2[_g1];
					++_g1;
					this.printIndentedLines(item,2);
				}
				this.printLine("");
			}
		}
		if(executionFrequency != null) {
			this.printLine("CODE EXECUTION FREQUENCY:");
			this.printIndentedLines(executionFrequency,1);
			this.printLine("");
		}
		if(classBreakdown != null) this.printIndentedLines(classBreakdown,0);
		if(packageBreakdown != null) this.printIndentedLines(packageBreakdown,0);
		if(summary != null) this.printIndentedLines(summary,0);
	}
	,printIndentedLines: function(value,indent) {
		if(indent == null) indent = 1;
		var lines = value.split("\n");
		var _g = 0;
		while(_g < lines.length) {
			var line = lines[_g];
			++_g;
			this.printLine(line,indent);
		}
	}
	,printReports: function() {
		this.printFinalIgnoredStatistics(this.ignoreCount);
	}
	,printFinalIgnoredStatistics: function(count) {
		if(!this.includeIgnoredReport || count == 0) return;
		var items = Lambda.filter(this.totalResults,this.filterIngored.$bind(this));
		if(items.length == 0) return;
		this.printLine("");
		this.printLine("Ignored (" + count + "):");
		this.printLine(this.divider);
		var $it0 = items.iterator();
		while( $it0.hasNext() ) {
			var result = $it0.next();
			var ingoredString = result.get_location();
			if(result.description != null) ingoredString += " - " + result.description;
			this.printLine("IGNORE: " + ingoredString,1);
		}
		this.printLine("");
	}
	,filterIngored: function(result) {
		return result.get_type() == massive.munit.TestResultType.IGNORE;
	}
	,printFinalStatistics: function(result,testCount,passCount,failCount,errorCount,ignoreCount,time) {
		this.printLine(this.divider2);
		var resultString = result?"PASSED":"FAILED";
		resultString += "\n" + "Tests: " + testCount + "  Passed: " + passCount + "  Failed: " + failCount + " Errors: " + errorCount + " Ignored: " + ignoreCount + " Time: " + massive.munit.util.MathUtil.round(time,5);
		this.printLine(resultString);
		this.printLine("");
	}
	,printOverallResult: function(result) {
		this.printLine("");
	}
	,print: function(value) {
		this.output += Std.string(value);
	}
	,printLine: function(value,indent) {
		if(indent == null) indent = 0;
		value = Std.string(value);
		value = this.indentString(value,indent);
		this.print("\n" + value);
	}
	,indentString: function(value,indent) {
		if(indent == null) indent = 0;
		if(indent > 0) value = StringTools.lpad(""," ",indent * 4) + value;
		if(value == "") value = "";
		return value;
	}
	,__class__: massive.munit.client.PrintClientBase
});
massive.munit.client.PrintClient = $hxClasses["massive.munit.client.PrintClient"] = function(includeIgnoredReport) {
	if(includeIgnoredReport == null) includeIgnoredReport = true;
	massive.munit.client.PrintClientBase.call(this,includeIgnoredReport);
	this.id = "print";
};
massive.munit.client.PrintClient.__name__ = ["massive","munit","client","PrintClient"];
massive.munit.client.PrintClient.__super__ = massive.munit.client.PrintClientBase;
massive.munit.client.PrintClient.prototype = $extend(massive.munit.client.PrintClientBase.prototype,{
	external: null
	,textArea: null
	,init: function() {
		massive.munit.client.PrintClientBase.prototype.init.call(this);
		this.external = new massive.munit.client.ExternalPrintClientJS();
		this.initJS();
	}
	,initJS: function() {
		var div = js.Lib.document.getElementById("haxe:trace");
		if(div == null) {
			var positionInfo = massive.haxe.util.ReflectUtil.here({ fileName : "PrintClient.hx", lineNumber : 124, className : "massive.munit.client.PrintClient", methodName : "initJS"});
			var error = "MissingElementException: 'haxe:trace' element not found at " + positionInfo.className + "#" + positionInfo.methodName + "(" + positionInfo.lineNumber + ")";
			js.Lib.alert(error);
		}
	}
	,printOverallResult: function(result) {
		massive.munit.client.PrintClientBase.prototype.printOverallResult.call(this,result);
		this.external.setResult(result);
		this.external.setResultBackground(result);
	}
	,reportFinalStatistics: function(testCount,passCount,failCount,errorCount,ignoreCount,time) {
		massive.munit.client.PrintClientBase.prototype.reportFinalStatistics.call(this,testCount,passCount,failCount,errorCount,ignoreCount,time);
	}
	,print: function(value) {
		massive.munit.client.PrintClientBase.prototype.print.call(this,value);
		this.external.print(value);
	}
	,printLine: function(value,indent) {
		if(indent == null) indent = 0;
		massive.munit.client.PrintClientBase.prototype.printLine.call(this,value,indent);
	}
	,__class__: massive.munit.client.PrintClient
});
massive.munit.client.ExternalPrintClient = $hxClasses["massive.munit.client.ExternalPrintClient"] = function() { }
massive.munit.client.ExternalPrintClient.__name__ = ["massive","munit","client","ExternalPrintClient"];
massive.munit.client.ExternalPrintClient.prototype = {
	queue: null
	,setResult: null
	,print: null
	,printLine: null
	,setResultBackground: null
	,createTestClass: null
	,printToTestClassSummary: null
	,setTestClassResult: null
	,trace: null
	,addTestPass: null
	,addTestFail: null
	,addTestError: null
	,addTestIgnore: null
	,addTestClassCoverage: null
	,addTestClassCoverageItem: null
	,createCoverageReport: null
	,addMissingCoverageClass: null
	,addCoverageReportSection: null
	,addCoverageSummary: null
	,printSummary: null
	,__class__: massive.munit.client.ExternalPrintClient
}
massive.munit.client.ExternalPrintClientJS = $hxClasses["massive.munit.client.ExternalPrintClientJS"] = function() {
	var div = js.Lib.document.getElementById("haxe:trace");
	if(div == null) {
		var positionInfo = massive.haxe.util.ReflectUtil.here({ fileName : "PrintClientBase.hx", lineNumber : 341, className : "massive.munit.client.ExternalPrintClientJS", methodName : "new"});
		var error = "MissingElementException: 'haxe:trace' element not found at " + positionInfo.className + "#" + positionInfo.methodName + "(" + positionInfo.lineNumber + ")";
		js.Lib.alert(error);
	}
};
massive.munit.client.ExternalPrintClientJS.__name__ = ["massive","munit","client","ExternalPrintClientJS"];
massive.munit.client.ExternalPrintClientJS.__interfaces__ = [massive.munit.client.ExternalPrintClient];
massive.munit.client.ExternalPrintClientJS.prototype = {
	print: function(value) {
		this.queue("munitPrint",value);
	}
	,printLine: function(value) {
		this.queue("munitPrintLine",value);
	}
	,setResult: function(value) {
		this.queue("setResult",value);
	}
	,setResultBackground: function(value) {
		this.queue("setResultBackground",value);
	}
	,trace: function(value) {
		this.queue("munitTrace",value);
	}
	,createTestClass: function(className) {
		this.queue("createTestClass",className);
	}
	,printToTestClassSummary: function(value) {
		this.queue("updateTestSummary",value);
	}
	,setTestClassResult: function(resultType) {
		this.queue("setTestClassResult",resultType);
	}
	,addTestPass: function(value) {
		if(value == null) return;
		this.queue("addTestPass",value);
	}
	,addTestFail: function(value) {
		this.queue("addTestFail",value);
	}
	,addTestError: function(value) {
		this.queue("addTestError",value);
	}
	,addTestIgnore: function(value) {
		this.queue("addTestIgnore",value);
	}
	,addTestClassCoverage: function(className,percent) {
		if(percent == null) percent = 0;
		this.queue("addTestCoverageClass",[className,percent]);
	}
	,addTestClassCoverageItem: function(value) {
		this.queue("addTestCoverageItem",value);
	}
	,createCoverageReport: function(percent) {
		if(percent == null) percent = 0;
		this.queue("createCoverageReport",percent);
	}
	,addMissingCoverageClass: function(className,percent) {
		if(percent == null) percent = 0;
		this.queue("addMissingCoverageClass",[className,percent]);
	}
	,addCoverageReportSection: function(name,value) {
		this.queue("addCoverageReportSection",[name,value]);
	}
	,addCoverageSummary: function(value) {
		this.queue("addCoverageSummary",value);
	}
	,printSummary: function(value) {
		this.queue("printSummary",value);
	}
	,queue: function(method,args) {
		var a = [];
		if(Std["is"](args,Array)) a = a.concat((function($this) {
			var $r;
			var $t = args;
			if(Std["is"]($t,Array)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))); else a.push(args);
		var jsCode = this.convertToJavaScript(method,a);
		return eval(jsCode);
		return false;
	}
	,convertToJavaScript: function(method,args) {
		var htmlArgs = [];
		var _g = 0;
		while(_g < args.length) {
			var arg = args[_g];
			++_g;
			var html = this.serialiseToHTML(Std.string(arg));
			htmlArgs.push(html);
		}
		var jsCode;
		if(htmlArgs == null || htmlArgs.length == 0) jsCode = "addToQueue(\"" + method + "\")"; else {
			jsCode = "addToQueue(\"" + method + "\"";
			var _g = 0;
			while(_g < htmlArgs.length) {
				var arg = htmlArgs[_g];
				++_g;
				jsCode += ",\"" + arg + "\"";
			}
			jsCode += ")";
		}
		return jsCode;
	}
	,serialiseToHTML: function(value) {
		value = js.Boot.__string_rec(value,"");
		var v = StringTools.htmlEscape(value);
		v = v.split("\n").join("<br/>");
		v = v.split(" ").join("&nbsp;");
		v = v.split("\"").join("\\'");
		return v;
	}
	,__class__: massive.munit.client.ExternalPrintClientJS
}
massive.munit.client.RichPrintClient = $hxClasses["massive.munit.client.RichPrintClient"] = function() {
	massive.munit.client.PrintClientBase.call(this);
	this.id = "RichPrintClient";
};
massive.munit.client.RichPrintClient.__name__ = ["massive","munit","client","RichPrintClient"];
massive.munit.client.RichPrintClient.__super__ = massive.munit.client.PrintClientBase;
massive.munit.client.RichPrintClient.prototype = $extend(massive.munit.client.PrintClientBase.prototype,{
	testClassResultType: null
	,external: null
	,init: function() {
		massive.munit.client.PrintClientBase.prototype.init.call(this);
		this.external = new massive.munit.client.ExternalPrintClientJS();
	}
	,initializeTestClass: function() {
		massive.munit.client.PrintClientBase.prototype.initializeTestClass.call(this);
		this.external.createTestClass(this.currentTestClass);
		this.external.printToTestClassSummary("Class: " + this.currentTestClass + " ");
	}
	,updateTestClass: function(result) {
		massive.munit.client.PrintClientBase.prototype.updateTestClass.call(this,result);
		var value = this.serializeTestResult(result);
		switch( (result.get_type())[1] ) {
		case 1:
			this.external.printToTestClassSummary(".");
			this.external.addTestPass(value);
			break;
		case 2:
			this.external.printToTestClassSummary("!");
			this.external.addTestFail(value);
			break;
		case 3:
			this.external.printToTestClassSummary("x");
			this.external.addTestError(value);
			break;
		case 4:
			this.external.printToTestClassSummary(",");
			this.external.addTestIgnore(value);
			break;
		case 0:
			null;
			break;
		}
	}
	,serializeTestResult: function(result) {
		var summary = result.name;
		if(result.description != null && result.description != "") summary += " - " + result.description + " -";
		summary += " (" + massive.munit.util.MathUtil.round(result.executionTime,4) + "s)";
		var str = null;
		if(result.error != null) str = "Error: " + summary + "\n" + Std.string(result.error); else if(result.failure != null) str = "Failure: " + summary + "\n" + Std.string(result.failure); else if(result.ignore) str = "Ignore: " + summary; else if(result.passed) {
		}
		return str;
	}
	,finalizeTestClass: function() {
		massive.munit.client.PrintClientBase.prototype.finalizeTestClass.call(this);
		this.testClassResultType = this.getTestClassResultType();
		var code = (function($this) {
			var $r;
			switch( ($this.testClassResultType)[1] ) {
			case 1:
				$r = 0;
				break;
			case 2:
				$r = 1;
				break;
			case 3:
				$r = 2;
				break;
			case 4:
				$r = 3;
				break;
			default:
				$r = -1;
			}
			return $r;
		}(this));
		if(code == -1) return;
		this.external.setTestClassResult(code);
	}
	,getTestClassResultType: function() {
		if(this.errorCount > 0) return massive.munit.TestResultType.ERROR; else if(this.failCount > 0) return massive.munit.TestResultType.FAIL; else if(this.ignoreCount > 0) return massive.munit.TestResultType.IGNORE; else return massive.munit.TestResultType.PASS;
	}
	,setCurrentTestClassCoverage: function(result) {
		massive.munit.client.PrintClientBase.prototype.setCurrentTestClassCoverage.call(this,result);
		this.external.printToTestClassSummary(" [" + result.percent + "%]");
		if(result.percent == 100) return;
		this.external.addTestClassCoverage(result.className,result.percent);
		var _g = 0, _g1 = result.blocks;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			this.external.addTestClassCoverageItem(item);
		}
	}
	,reportFinalCoverage: function(percent,missingCoverageResults,summary,classBreakdown,packageBreakdown,executionFrequency) {
		if(percent == null) percent = 0;
		massive.munit.client.PrintClientBase.prototype.reportFinalCoverage.call(this,percent,missingCoverageResults,summary,classBreakdown,packageBreakdown,executionFrequency);
		this.external.createCoverageReport(percent);
		this.printMissingCoverage(missingCoverageResults);
		if(executionFrequency != null) this.external.addCoverageReportSection("Code Execution Frequency",this.trim(executionFrequency));
		if(classBreakdown != null) this.external.addCoverageReportSection("Class Breakdown",this.trim(classBreakdown));
		if(packageBreakdown != null) this.external.addCoverageReportSection("Package Breakdown",this.trim(packageBreakdown));
		if(packageBreakdown != null) this.external.addCoverageReportSection("Summary",this.trim(summary));
	}
	,trim: function(output) {
		while(output.indexOf("\n") == 0) output = output.substr(1);
		while(output.lastIndexOf("\n") == output.length - 2) output = output.substr(0,output.length - 2);
		return output;
	}
	,printMissingCoverage: function(missingCoverageResults) {
		if(missingCoverageResults == null || missingCoverageResults.length == 0) return;
		var _g = 0;
		while(_g < missingCoverageResults.length) {
			var result = missingCoverageResults[_g];
			++_g;
			this.external.addMissingCoverageClass(result.className,result.percent);
			var _g1 = 0, _g2 = result.blocks;
			while(_g1 < _g2.length) {
				var item = _g2[_g1];
				++_g1;
				this.external.addTestClassCoverageItem(item);
			}
		}
	}
	,printReports: function() {
		massive.munit.client.PrintClientBase.prototype.printReports.call(this);
	}
	,printFinalStatistics: function(result,testCount,passCount,failCount,errorCount,ignoreCount,time) {
		massive.munit.client.PrintClientBase.prototype.printFinalStatistics.call(this,result,testCount,passCount,failCount,errorCount,ignoreCount,time);
		var resultString = result?"PASSED":"FAILED";
		resultString += "\n" + "Tests: " + testCount + "  Passed: " + passCount + "  Failed: " + failCount + " Errors: " + errorCount + " Ignored: " + ignoreCount + " Time: " + massive.munit.util.MathUtil.round(time,5);
		this.external.printSummary(resultString);
	}
	,printOverallResult: function(result) {
		massive.munit.client.PrintClientBase.prototype.printOverallResult.call(this,result);
		this.external.setResult(result);
	}
	,customTrace: function(value,info) {
		massive.munit.client.PrintClientBase.prototype.customTrace.call(this,value,info);
		var t = this.traces[this.traces.length - 1];
		this.external.trace(t);
	}
	,print: function(value) {
		massive.munit.client.PrintClientBase.prototype.print.call(this,value);
		return;
	}
	,printLine: function(value,indent) {
		if(indent == null) indent = 0;
		massive.munit.client.PrintClientBase.prototype.printLine.call(this,value,indent);
	}
	,__class__: massive.munit.client.RichPrintClient
});
if(!massive.munit.util) massive.munit.util = {}
massive.munit.util.MathUtil = $hxClasses["massive.munit.util.MathUtil"] = function() {
};
massive.munit.util.MathUtil.__name__ = ["massive","munit","util","MathUtil"];
massive.munit.util.MathUtil.round = function(value,precision) {
	value = value * Math.pow(10,precision);
	return Math.round(value) / Math.pow(10,precision);
}
massive.munit.util.MathUtil.prototype = {
	__class__: massive.munit.util.MathUtil
}
massive.munit.util.Timer = $hxClasses["massive.munit.util.Timer"] = function(time_ms) {
	this.id = massive.munit.util.Timer.arr.length;
	massive.munit.util.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("massive.munit.util.Timer.arr[" + this.id + "].run();",time_ms);
};
massive.munit.util.Timer.__name__ = ["massive","munit","util","Timer"];
massive.munit.util.Timer.delay = function(f,time_ms) {
	var t = new massive.munit.util.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
massive.munit.util.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
massive.munit.util.Timer.prototype = {
	id: null
	,timerId: null
	,stop: function() {
		if(this.id == null) return;
		window.clearInterval(this.timerId);
		massive.munit.util.Timer.arr[this.id] = null;
		if(this.id > 100 && this.id == massive.munit.util.Timer.arr.length - 1) {
			var p = this.id - 1;
			while(p >= 0 && massive.munit.util.Timer.arr[p] == null) p--;
			massive.munit.util.Timer.arr = massive.munit.util.Timer.arr.slice(0,p + 1);
		}
		this.id = null;
	}
	,run: function() {
	}
	,__class__: massive.munit.util.Timer
}
var org = org || {}
if(!org.hamcrest) org.hamcrest = {}
org.hamcrest.Exception = $hxClasses["org.hamcrest.Exception"] = function(message,cause,info) {
	if(message == null) message = "";
	this.name = Type.getClassName(Type.getClass(this));
	this.message = message;
	this.cause = cause;
	this.info = info;
};
org.hamcrest.Exception.__name__ = ["org","hamcrest","Exception"];
org.hamcrest.Exception.prototype = {
	name: null
	,message: null
	,cause: null
	,info: null
	,toString: function() {
		var str = this.name + ": " + this.message;
		if(this.info != null) str += " at " + this.info.className + "#" + this.info.methodName + " (" + this.info.lineNumber + ")";
		if(this.cause != null) str += "\n\t Caused by: " + this.cause;
		return str;
	}
	,__class__: org.hamcrest.Exception
}
org.hamcrest.AssertionException = $hxClasses["org.hamcrest.AssertionException"] = function(message,cause,info) {
	if(message == null) message = "";
	org.hamcrest.Exception.call(this,message,cause,info);
};
org.hamcrest.AssertionException.__name__ = ["org","hamcrest","AssertionException"];
org.hamcrest.AssertionException.__super__ = org.hamcrest.Exception;
org.hamcrest.AssertionException.prototype = $extend(org.hamcrest.Exception.prototype,{
	__class__: org.hamcrest.AssertionException
});
org.hamcrest.IllegalArgumentException = $hxClasses["org.hamcrest.IllegalArgumentException"] = function(message,cause,info) {
	if(message == null) message = "Argument could not be processed.";
	org.hamcrest.Exception.call(this,message,cause,info);
};
org.hamcrest.IllegalArgumentException.__name__ = ["org","hamcrest","IllegalArgumentException"];
org.hamcrest.IllegalArgumentException.__super__ = org.hamcrest.Exception;
org.hamcrest.IllegalArgumentException.prototype = $extend(org.hamcrest.Exception.prototype,{
	__class__: org.hamcrest.IllegalArgumentException
});
org.hamcrest.MissingImplementationException = $hxClasses["org.hamcrest.MissingImplementationException"] = function(message,cause,info) {
	if(message == null) message = "Abstract method not overridden.";
	org.hamcrest.Exception.call(this,message,cause,info);
};
org.hamcrest.MissingImplementationException.__name__ = ["org","hamcrest","MissingImplementationException"];
org.hamcrest.MissingImplementationException.__super__ = org.hamcrest.Exception;
org.hamcrest.MissingImplementationException.prototype = $extend(org.hamcrest.Exception.prototype,{
	__class__: org.hamcrest.MissingImplementationException
});
org.hamcrest.UnsupportedOperationException = $hxClasses["org.hamcrest.UnsupportedOperationException"] = function(message,cause,info) {
	if(message == null) message = "";
	org.hamcrest.Exception.call(this,message,cause,info);
};
org.hamcrest.UnsupportedOperationException.__name__ = ["org","hamcrest","UnsupportedOperationException"];
org.hamcrest.UnsupportedOperationException.__super__ = org.hamcrest.Exception;
org.hamcrest.UnsupportedOperationException.prototype = $extend(org.hamcrest.Exception.prototype,{
	__class__: org.hamcrest.UnsupportedOperationException
});
var robothaxe = robothaxe || {}
if(!robothaxe.core) robothaxe.core = {}
robothaxe.core.ICommandMap = $hxClasses["robothaxe.core.ICommandMap"] = function() { }
robothaxe.core.ICommandMap.__name__ = ["robothaxe","core","ICommandMap"];
robothaxe.core.ICommandMap.prototype = {
	detain: null
	,release: null
	,execute: null
	,mapEvent: null
	,unmapEvent: null
	,unmapEvents: null
	,hasEventCommand: null
	,__class__: robothaxe.core.ICommandMap
}
if(!robothaxe.base) robothaxe.base = {}
robothaxe.base.CommandMap = $hxClasses["robothaxe.base.CommandMap"] = function(eventDispatcher,injector,reflector) {
	this.eventDispatcher = eventDispatcher;
	this.injector = injector;
	this.reflector = reflector;
	this.eventTypeMap = new robothaxe.util.Dictionary();
	this.verifiedCommandClasses = new robothaxe.util.Register();
	this.detainedCommands = new robothaxe.util.Register();
};
robothaxe.base.CommandMap.__name__ = ["robothaxe","base","CommandMap"];
robothaxe.base.CommandMap.__interfaces__ = [robothaxe.core.ICommandMap];
robothaxe.base.CommandMap.prototype = {
	eventDispatcher: null
	,injector: null
	,reflector: null
	,eventTypeMap: null
	,verifiedCommandClasses: null
	,detainedCommands: null
	,mapEvent: function(eventType,commandClass,eventClass,oneshot) {
		if(oneshot == null) oneshot = false;
		this.verifyCommandClass(commandClass);
		if(eventClass == null) eventClass = robothaxe.event.Event;
		var eventClassMap = this.eventTypeMap.get(eventType);
		if(eventClassMap == null) {
			eventClassMap = new robothaxe.util.Dictionary();
			this.eventTypeMap.add(eventType,eventClassMap);
		}
		var callbacksByCommandClass = eventClassMap.get(eventClass);
		if(callbacksByCommandClass == null) {
			callbacksByCommandClass = new robothaxe.util.Dictionary();
			eventClassMap.add(eventClass,callbacksByCommandClass);
		}
		if(callbacksByCommandClass.get(commandClass) != null) throw new robothaxe.base.ContextError(robothaxe.base.ContextError.E_COMMANDMAP_OVR + " - eventType (" + eventType + ") and Command (" + commandClass + ")");
		var me = this;
		var commandCallback = function(event) {
			me.routeEventToCommand(event,commandClass,oneshot,eventClass);
		};
		this.eventDispatcher.addEventListener(eventType,commandCallback,false,0,true);
		callbacksByCommandClass.add(commandClass,commandCallback);
	}
	,unmapEvent: function(eventType,commandClass,eventClass) {
		if(eventClass == null) eventClass = robothaxe.event.Event;
		var eventClassMap = this.eventTypeMap.get(eventType);
		if(eventClassMap == null) return;
		var callbacksByCommandClass = eventClassMap.get(eventClass);
		if(callbacksByCommandClass == null) return;
		var commandCallback = callbacksByCommandClass.get(commandClass);
		if(commandCallback == null) return;
		this.eventDispatcher.removeEventListener(eventType,commandCallback,false);
		callbacksByCommandClass.remove(commandClass);
	}
	,unmapEvents: function() {
		var $it0 = this.eventTypeMap.iterator();
		while( $it0.hasNext() ) {
			var eventType = $it0.next();
			var eventClassMap = this.eventTypeMap.get(eventType);
			var $it1 = eventClassMap.iterator();
			while( $it1.hasNext() ) {
				var eventClass = $it1.next();
				var callbacksByCommandClass = eventClassMap.get(eventClass);
				var $it2 = callbacksByCommandClass.iterator();
				while( $it2.hasNext() ) {
					var commandClass = $it2.next();
					var commandCallback = callbacksByCommandClass.get(commandClass);
					this.eventDispatcher.removeEventListener(eventType,commandCallback,false);
				}
			}
		}
		this.eventTypeMap.empty();
	}
	,hasEventCommand: function(eventType,commandClass,eventClass) {
		if(eventClass == null) eventClass = robothaxe.event.Event;
		var eventClassMap = this.eventTypeMap.get(eventType);
		if(eventClassMap == null) return false;
		var callbacksByCommandClass = eventClassMap.get(eventClass);
		if(callbacksByCommandClass == null) return false;
		return callbacksByCommandClass.get(commandClass) != null;
	}
	,execute: function(commandClass,payload,payloadClass,named) {
		if(named == null) named = "";
		this.verifyCommandClass(commandClass);
		if(payload != null || payloadClass != null) {
			if(payloadClass == null) payloadClass = this.reflector.getClass(payload);
			this.injector.mapValue(payloadClass,payload,named);
		}
		var command = this.injector.instantiate(commandClass);
		if(payload != null || payloadClass != null) this.injector.unmap(payloadClass,named);
		command.execute();
	}
	,detain: function(command) {
		this.detainedCommands.add(command);
	}
	,release: function(command) {
		this.detainedCommands.remove(command);
	}
	,verifyCommandClass: function(commandClass) {
		if(!this.verifiedCommandClasses.has(commandClass)) {
			var fields = Type.getInstanceFields(commandClass);
			var verified = Lambda.has(fields,"execute");
			if(verified) this.verifiedCommandClasses.add(commandClass); else throw new robothaxe.base.ContextError(robothaxe.base.ContextError.E_COMMANDMAP_NOIMPL + " - " + Type.getClassName(commandClass));
		}
	}
	,routeEventToCommand: function(event,commandClass,oneshot,originalEventClass) {
		if(!Std["is"](event,originalEventClass)) return false;
		this.execute(commandClass,event);
		if(oneshot) this.unmapEvent(event.type,commandClass,originalEventClass);
		return true;
	}
	,__class__: robothaxe.base.CommandMap
}
if(!robothaxe.event) robothaxe.event = {}
robothaxe.event.IEventDispatcher = $hxClasses["robothaxe.event.IEventDispatcher"] = function() { }
robothaxe.event.IEventDispatcher.__name__ = ["robothaxe","event","IEventDispatcher"];
robothaxe.event.IEventDispatcher.prototype = {
	addEventListener: null
	,dispatchEvent: null
	,hasEventListener: null
	,removeEventListener: null
	,willTrigger: null
	,__class__: robothaxe.event.IEventDispatcher
}
robothaxe.core.IContext = $hxClasses["robothaxe.core.IContext"] = function() { }
robothaxe.core.IContext.__name__ = ["robothaxe","core","IContext"];
robothaxe.core.IContext.prototype = {
	eventDispatcher: null
	,__class__: robothaxe.core.IContext
}
robothaxe.base.ContextBase = $hxClasses["robothaxe.base.ContextBase"] = function() {
	this.eventDispatcher = new robothaxe.event.EventDispatcher(this);
};
robothaxe.base.ContextBase.__name__ = ["robothaxe","base","ContextBase"];
robothaxe.base.ContextBase.__interfaces__ = [robothaxe.event.IEventDispatcher,robothaxe.core.IContext];
robothaxe.base.ContextBase.prototype = {
	eventDispatcher: null
	,addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		this.eventDispatcher.addEventListener(type,listener,useCapture,priority);
	}
	,dispatchEvent: function(event) {
		if(this.eventDispatcher.hasEventListener(event.type)) return this.eventDispatcher.dispatchEvent(event);
		return false;
	}
	,hasEventListener: function(type) {
		return this.eventDispatcher.hasEventListener(type);
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) useCapture = false;
		this.eventDispatcher.removeEventListener(type,listener,useCapture);
	}
	,willTrigger: function(type) {
		return this.eventDispatcher.willTrigger(type);
	}
	,__class__: robothaxe.base.ContextBase
}
robothaxe.base.ContextError = $hxClasses["robothaxe.base.ContextError"] = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.id = id;
};
robothaxe.base.ContextError.__name__ = ["robothaxe","base","ContextError"];
robothaxe.base.ContextError.prototype = {
	message: null
	,id: null
	,__class__: robothaxe.base.ContextError
}
robothaxe.event.Event = $hxClasses["robothaxe.event.Event"] = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.jeashIsCancelled = false;
	this.jeashIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = robothaxe.event.EventPhase.AT_TARGET;
};
robothaxe.event.Event.__name__ = ["robothaxe","event","Event"];
robothaxe.event.Event.prototype = {
	bubbles: null
	,cancelable: null
	,eventPhase: null
	,target: null
	,currentTarget: null
	,type: null
	,jeashIsCancelled: null
	,jeashIsCancelledNow: null
	,jeashSetPhase: function(phase) {
		this.eventPhase = phase;
	}
	,jeashGetIsCancelled: function() {
		return this.jeashIsCancelled;
	}
	,jeashGetIsCancelledNow: function() {
		return this.jeashIsCancelledNow;
	}
	,clone: function() {
		return new robothaxe.event.Event(this.type,this.bubbles,this.cancelable);
	}
	,stopImmediatePropagation: function() {
		this.jeashIsCancelledNow = this.jeashIsCancelled = true;
	}
	,stopPropagation: function() {
		this.jeashIsCancelled = true;
	}
	,toString: function() {
		return "Event";
	}
	,__class__: robothaxe.event.Event
}
robothaxe.base.ContextEvent = $hxClasses["robothaxe.base.ContextEvent"] = function(type,body) {
	robothaxe.event.Event.call(this,type);
	this._body = body;
};
robothaxe.base.ContextEvent.__name__ = ["robothaxe","base","ContextEvent"];
robothaxe.base.ContextEvent.__super__ = robothaxe.event.Event;
robothaxe.base.ContextEvent.prototype = $extend(robothaxe.event.Event.prototype,{
	body: null
	,_body: null
	,getBody: function() {
		return this._body;
	}
	,clone: function() {
		return new robothaxe.base.ContextEvent(this.type,this.getBody());
	}
	,__class__: robothaxe.base.ContextEvent
	,__properties__: {get_body:"getBody"}
});
robothaxe.core.IEventMap = $hxClasses["robothaxe.core.IEventMap"] = function() { }
robothaxe.core.IEventMap.__name__ = ["robothaxe","core","IEventMap"];
robothaxe.core.IEventMap.prototype = {
	mapListener: null
	,unmapListener: null
	,unmapListeners: null
	,__class__: robothaxe.core.IEventMap
}
robothaxe.base.EventMap = $hxClasses["robothaxe.base.EventMap"] = function(eventDispatcher) {
	this.dispatcherListeningEnabled = true;
	this.listeners = [];
	this.eventDispatcher = eventDispatcher;
};
robothaxe.base.EventMap.__name__ = ["robothaxe","base","EventMap"];
robothaxe.base.EventMap.__interfaces__ = [robothaxe.core.IEventMap];
robothaxe.base.EventMap.prototype = {
	dispatcherListeningEnabled: null
	,eventDispatcher: null
	,listeners: null
	,mapListener: function(dispatcher,type,listener,eventClass,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = true;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(this.dispatcherListeningEnabled == false && dispatcher == this.eventDispatcher) throw new robothaxe.base.ContextError(robothaxe.base.ContextError.E_EVENTMAP_NOSNOOPING);
		if(eventClass == null) eventClass = robothaxe.event.Event;
		var _g = 0, _g1 = this.listeners;
		while(_g < _g1.length) {
			var params = _g1[_g];
			++_g;
			if(params.dispatcher == dispatcher && params.type == type && Reflect.compareMethods(params.listener,listener) && params.useCapture == useCapture && params.eventClass == eventClass) return;
		}
		var me = this;
		var eventCallback = function(event) {
			me.routeEventToListener(event,listener,eventClass);
		};
		var params = { dispatcher : dispatcher, type : type, listener : listener, eventClass : eventClass, eventCallback : eventCallback, useCapture : useCapture};
		this.listeners.push(params);
		dispatcher.addEventListener(type,eventCallback,useCapture,priority,useWeakReference);
	}
	,unmapListener: function(dispatcher,type,listener,eventClass,useCapture) {
		if(useCapture == null) useCapture = false;
		if(eventClass == null) eventClass = robothaxe.event.Event;
		var params;
		var i = this.listeners.length;
		while(i-- > 0) {
			params = this.listeners[i];
			if(params.dispatcher == dispatcher && params.type == type && Reflect.compareMethods(params.listener,listener) && params.useCapture == useCapture && params.eventClass == eventClass) {
				dispatcher.removeEventListener(type,params.eventCallback,useCapture);
				this.listeners.splice(i,1);
				return;
			}
		}
	}
	,unmapListeners: function() {
		var params;
		var dispatcher;
		while(params = this.listeners.pop()) {
			dispatcher = params.dispatcher;
			dispatcher.removeEventListener(params.type,params.eventCallback,params.useCapture);
		}
	}
	,routeEventToListener: function(event,listener,originalEventClass) {
		if(Std["is"](event,originalEventClass)) listener(event);
	}
	,__class__: robothaxe.base.EventMap
}
robothaxe.core.IMediator = $hxClasses["robothaxe.core.IMediator"] = function() { }
robothaxe.core.IMediator.__name__ = ["robothaxe","core","IMediator"];
robothaxe.core.IMediator.prototype = {
	preRegister: null
	,onRegister: null
	,preRemove: null
	,onRemove: null
	,getViewComponent: null
	,setViewComponent: null
	,__class__: robothaxe.core.IMediator
}
robothaxe.base.MediatorBase = $hxClasses["robothaxe.base.MediatorBase"] = function() {
};
robothaxe.base.MediatorBase.__name__ = ["robothaxe","base","MediatorBase"];
robothaxe.base.MediatorBase.__interfaces__ = [robothaxe.core.IMediator];
robothaxe.base.MediatorBase.prototype = {
	viewComponent: null
	,removed: null
	,preRegister: function() {
		this.removed = false;
		this.onRegister();
	}
	,onRegister: function() {
	}
	,preRemove: function() {
		this.removed = true;
		this.onRemove();
	}
	,onRemove: function() {
	}
	,getViewComponent: function() {
		return this.viewComponent;
	}
	,setViewComponent: function(viewComponent) {
		this.viewComponent = viewComponent;
	}
	,__class__: robothaxe.base.MediatorBase
}
robothaxe.base.ViewMapBase = $hxClasses["robothaxe.base.ViewMapBase"] = function(contextView,injector) {
	this.viewListenerCount = 0;
	this.set_enabled(true);
	this.injector = injector;
	this.useCapture = true;
	this.set_contextView(contextView);
};
robothaxe.base.ViewMapBase.__name__ = ["robothaxe","base","ViewMapBase"];
robothaxe.base.ViewMapBase.prototype = {
	contextView: null
	,enabled: null
	,injector: null
	,useCapture: null
	,viewListenerCount: null
	,set_contextView: function(value) {
		if(value != this.contextView) {
			this.removeListeners();
			this.contextView = value;
			if(this.viewListenerCount > 0) this.addListeners();
		}
		return this.contextView;
	}
	,set_enabled: function(value) {
		if(value != this.enabled) {
			this.removeListeners();
			this.enabled = value;
			if(this.viewListenerCount > 0) this.addListeners();
		}
		return value;
	}
	,addListeners: function() {
	}
	,removeListeners: function() {
	}
	,onViewAdded: function(view) {
	}
	,onViewRemoved: function(view) {
	}
	,__class__: robothaxe.base.ViewMapBase
	,__properties__: {set_enabled:"set_enabled",set_contextView:"set_contextView"}
}
robothaxe.core.IMediatorMap = $hxClasses["robothaxe.core.IMediatorMap"] = function() { }
robothaxe.core.IMediatorMap.__name__ = ["robothaxe","core","IMediatorMap"];
robothaxe.core.IMediatorMap.prototype = {
	mapView: null
	,unmapView: null
	,createMediator: null
	,registerMediator: null
	,removeMediator: null
	,removeMediatorByView: null
	,retrieveMediator: null
	,hasMapping: null
	,hasMediator: null
	,hasMediatorForView: null
	,contextView: null
	,enabled: null
	,__class__: robothaxe.core.IMediatorMap
	,__properties__: {set_enabled:"set_enabled",set_contextView:"set_contextView"}
}
robothaxe.base.MediatorMap = $hxClasses["robothaxe.base.MediatorMap"] = function(contextView,injector,reflector) {
	robothaxe.base.ViewMapBase.call(this,contextView,injector);
	this.reflector = reflector;
	this.mediatorByView = new robothaxe.util.Dictionary(true);
	this.mappingConfigByView = new robothaxe.util.Dictionary(true);
	this.mappingConfigByViewClassName = new robothaxe.util.Dictionary();
	this.mediatorsMarkedForRemoval = new robothaxe.util.Dictionary();
	this.hasMediatorsMarkedForRemoval = false;
};
robothaxe.base.MediatorMap.__name__ = ["robothaxe","base","MediatorMap"];
robothaxe.base.MediatorMap.__interfaces__ = [robothaxe.core.IMediatorMap];
robothaxe.base.MediatorMap.__super__ = robothaxe.base.ViewMapBase;
robothaxe.base.MediatorMap.prototype = $extend(robothaxe.base.ViewMapBase.prototype,{
	mediatorByView: null
	,mappingConfigByView: null
	,mappingConfigByViewClassName: null
	,mediatorsMarkedForRemoval: null
	,hasMediatorsMarkedForRemoval: null
	,reflector: null
	,mapView: function(viewClassOrName,mediatorClass,injectViewAs,autoCreate,autoRemove) {
		if(autoRemove == null) autoRemove = true;
		if(autoCreate == null) autoCreate = true;
		var viewClassName = this.reflector.getFQCN(viewClassOrName);
		if(this.mappingConfigByViewClassName.get(viewClassName) != null) throw new robothaxe.base.ContextError(robothaxe.base.ContextError.E_MEDIATORMAP_OVR + " - " + mediatorClass);
		if(this.reflector.classExtendsOrImplements(mediatorClass,robothaxe.core.IMediator) == false) throw new robothaxe.base.ContextError(robothaxe.base.ContextError.E_MEDIATORMAP_NOIMPL + " - " + mediatorClass);
		var config = new robothaxe.base.MappingConfig();
		config.mediatorClass = mediatorClass;
		config.autoCreate = autoCreate;
		config.autoRemove = autoRemove;
		if(injectViewAs) {
			if(Std["is"](injectViewAs,Array)) config.typedViewClasses = ((function($this) {
				var $r;
				var $t = injectViewAs;
				if(Std["is"]($t,Array)) $t; else throw "Class cast error";
				$r = $t;
				return $r;
			}(this))).copy(); else if(Std["is"](injectViewAs,Class)) config.typedViewClasses = [injectViewAs];
		} else if(Std["is"](viewClassOrName,Class)) config.typedViewClasses = [viewClassOrName];
		this.mappingConfigByViewClassName.add(viewClassName,config);
		if(autoCreate || autoRemove) {
			this.viewListenerCount++;
			if(this.viewListenerCount == 1) this.addListeners();
		}
		if(autoCreate && this.contextView != null && viewClassName == Type.getClassName(Type.getClass(this.contextView))) this.createMediatorUsing(this.contextView,viewClassName,config);
	}
	,unmapView: function(viewClassOrName) {
		var viewClassName = this.reflector.getFQCN(viewClassOrName);
		var config = this.mappingConfigByViewClassName.get(viewClassName);
		if(config != null && (config.autoCreate || config.autoRemove)) {
			this.viewListenerCount--;
			if(this.viewListenerCount == 0) this.removeListeners();
		}
		this.mappingConfigByViewClassName.remove(viewClassName);
	}
	,createMediator: function(viewComponent) {
		return this.createMediatorUsing(viewComponent);
	}
	,registerMediator: function(viewComponent,mediator) {
		this.mediatorByView.add(viewComponent,mediator);
		var mapping = this.mappingConfigByViewClassName.get(Type.getClassName(Type.getClass(viewComponent)));
		this.mappingConfigByView.add(viewComponent,mapping);
		mediator.setViewComponent(viewComponent);
		mediator.preRegister();
	}
	,removeMediator: function(mediator) {
		if(mediator != null) {
			var viewComponent = mediator.getViewComponent();
			this.mediatorByView.remove(viewComponent);
			this.mappingConfigByView.remove(viewComponent);
			mediator.preRemove();
			mediator.setViewComponent(null);
		}
		return mediator;
	}
	,removeMediatorByView: function(viewComponent) {
		return this.removeMediator(this.retrieveMediator(viewComponent));
	}
	,retrieveMediator: function(viewComponent) {
		return this.mediatorByView.get(viewComponent);
	}
	,hasMapping: function(viewClassOrName) {
		var viewClassName = this.reflector.getFQCN(viewClassOrName);
		return this.mappingConfigByViewClassName.get(viewClassName) != null;
	}
	,hasMediatorForView: function(viewComponent) {
		return this.mediatorByView.get(viewComponent) != null;
	}
	,hasMediator: function(mediator) {
		var $it0 = this.mediatorByView.iterator();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			if(this.mediatorByView.get(key) == mediator) return true;
		}
		return false;
	}
	,addListeners: function() {
		if(this.contextView != null && this.enabled) {
			this.contextView.viewAdded = this.onViewAdded.$bind(this);
			this.contextView.viewRemoved = this.onViewRemoved.$bind(this);
		}
	}
	,removeListeners: function() {
		if(this.contextView != null) {
			this.contextView.viewAdded = null;
			this.contextView.viewRemoved = null;
		}
	}
	,onViewAdded: function(view) {
		if(this.mediatorsMarkedForRemoval.get(view) != null) {
			this.mediatorsMarkedForRemoval.remove(view);
			return;
		}
		var viewClassName = Type.getClassName(Type.getClass(view));
		var config = this.mappingConfigByViewClassName.get(viewClassName);
		if(config != null && config.autoCreate) this.createMediatorUsing(view,viewClassName,config);
	}
	,onViewRemoved: function(view) {
		var config = this.mappingConfigByView.get(view);
		if(config != null && config.autoRemove) this.removeMediatorByView(view);
	}
	,removeMediatorLater: function() {
		var $it0 = this.mediatorsMarkedForRemoval.iterator();
		while( $it0.hasNext() ) {
			var view = $it0.next();
			if(!this.contextView.isAdded(view)) this.removeMediatorByView(view);
			this.mediatorsMarkedForRemoval.remove(view);
		}
		this.hasMediatorsMarkedForRemoval = false;
	}
	,createMediatorUsing: function(viewComponent,viewClassName,config) {
		var mediator = this.mediatorByView.get(viewComponent);
		if(mediator == null) {
			if(viewClassName == null) viewClassName = Type.getClassName(Type.getClass(viewComponent));
			if(config == null) config = this.mappingConfigByViewClassName.get(viewClassName);
			if(config != null) {
				var _g = 0, _g1 = config.typedViewClasses;
				while(_g < _g1.length) {
					var claxx = _g1[_g];
					++_g;
					this.injector.mapValue(claxx,viewComponent);
				}
				mediator = this.injector.instantiate(config.mediatorClass);
				var _g = 0, _g1 = config.typedViewClasses;
				while(_g < _g1.length) {
					var clazz = _g1[_g];
					++_g;
					this.injector.unmap(clazz);
				}
				this.registerMediator(viewComponent,mediator);
			}
		}
		return mediator;
	}
	,__class__: robothaxe.base.MediatorMap
});
robothaxe.base.MappingConfig = $hxClasses["robothaxe.base.MappingConfig"] = function() {
};
robothaxe.base.MappingConfig.__name__ = ["robothaxe","base","MappingConfig"];
robothaxe.base.MappingConfig.prototype = {
	mediatorClass: null
	,typedViewClasses: null
	,autoCreate: null
	,autoRemove: null
	,__class__: robothaxe.base.MappingConfig
}
robothaxe.core.IViewMap = $hxClasses["robothaxe.core.IViewMap"] = function() { }
robothaxe.core.IViewMap.__name__ = ["robothaxe","core","IViewMap"];
robothaxe.core.IViewMap.prototype = {
	mapPackage: null
	,unmapPackage: null
	,hasPackage: null
	,mapType: null
	,unmapType: null
	,hasType: null
	,contextView: null
	,enabled: null
	,__class__: robothaxe.core.IViewMap
	,__properties__: {set_enabled:"set_enabled",set_contextView:"set_contextView"}
}
robothaxe.base.ViewMap = $hxClasses["robothaxe.base.ViewMap"] = function(contextView,injector) {
	robothaxe.base.ViewMapBase.call(this,contextView,injector);
	this.mappedPackages = new Array();
	this.mappedTypes = new robothaxe.util.Dictionary();
	this.injectedViews = new robothaxe.util.Dictionary(true);
};
robothaxe.base.ViewMap.__name__ = ["robothaxe","base","ViewMap"];
robothaxe.base.ViewMap.__interfaces__ = [robothaxe.core.IViewMap];
robothaxe.base.ViewMap.__super__ = robothaxe.base.ViewMapBase;
robothaxe.base.ViewMap.prototype = $extend(robothaxe.base.ViewMapBase.prototype,{
	mappedPackages: null
	,mappedTypes: null
	,injectedViews: null
	,mapPackage: function(packageName) {
		if(!Lambda.has(this.mappedPackages,packageName)) {
			this.mappedPackages.push(packageName);
			this.viewListenerCount++;
			if(this.viewListenerCount == 1) this.addListeners();
		}
	}
	,unmapPackage: function(packageName) {
		var index = Lambda.indexOf(this.mappedPackages,packageName);
		if(index > -1) {
			this.mappedPackages.splice(index,1);
			this.viewListenerCount--;
			if(this.viewListenerCount == 0) this.removeListeners();
		}
	}
	,mapType: function(type) {
		if(this.mappedTypes.get(type) != null) return;
		this.mappedTypes.add(type,type);
		this.viewListenerCount++;
		if(this.viewListenerCount == 1) this.addListeners();
		if(this.contextView != null && Std["is"](this.contextView,type)) this.injectInto(this.contextView);
	}
	,unmapType: function(type) {
		var mapping = this.mappedTypes.get(type);
		this.mappedTypes.remove(type);
		if(mapping != null) {
			this.viewListenerCount--;
			if(this.viewListenerCount == 0) this.removeListeners();
		}
	}
	,hasType: function(type) {
		return this.mappedTypes.get(type) != null;
	}
	,hasPackage: function(packageName) {
		return Lambda.has(this.mappedPackages,packageName);
	}
	,addListeners: function() {
		if(this.contextView != null && this.enabled) {
			this.contextView.viewAdded = this.onViewAdded.$bind(this);
			this.contextView.viewRemoved = this.onViewAdded.$bind(this);
		}
	}
	,removeListeners: function() {
		if(this.contextView != null) {
			this.contextView.viewAdded = null;
			this.contextView.viewRemoved = null;
		}
	}
	,onViewAdded: function(view) {
		if(this.injectedViews.get(view) != null) return;
		var $it0 = this.mappedTypes.iterator();
		while( $it0.hasNext() ) {
			var type = $it0.next();
			if(Std["is"](view,type)) {
				this.injectInto(view);
				return;
			}
		}
		var len = this.mappedPackages.length;
		if(len > 0) {
			var className = Type.getClassName(Type.getClass(view));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				var packageName = this.mappedPackages[i];
				if(className.indexOf(packageName) == 0) {
					this.injectInto(view);
					return;
				}
			}
		}
	}
	,onViewRemoved: function(view) {
		haxe.Log.trace("TODO",{ fileName : "ViewMap.hx", lineNumber : 225, className : "robothaxe.base.ViewMap", methodName : "onViewRemoved"});
	}
	,injectInto: function(view) {
		this.injector.injectInto(view);
		this.injectedViews.add(view,true);
	}
	,__class__: robothaxe.base.ViewMap
});
robothaxe.core.IInjector = $hxClasses["robothaxe.core.IInjector"] = function() { }
robothaxe.core.IInjector.__name__ = ["robothaxe","core","IInjector"];
robothaxe.core.IInjector.prototype = {
	mapValue: null
	,mapClass: null
	,mapSingleton: null
	,mapSingletonOf: null
	,mapRule: null
	,injectInto: null
	,instantiate: null
	,getInstance: null
	,createChildInjector: null
	,unmap: null
	,hasMapping: null
	,__class__: robothaxe.core.IInjector
}
robothaxe.core.IReflector = $hxClasses["robothaxe.core.IReflector"] = function() { }
robothaxe.core.IReflector.__name__ = ["robothaxe","core","IReflector"];
robothaxe.core.IReflector.prototype = {
	classExtendsOrImplements: null
	,getClass: null
	,getFQCN: null
	,__class__: robothaxe.core.IReflector
}
robothaxe.core.IViewContainer = $hxClasses["robothaxe.core.IViewContainer"] = function() { }
robothaxe.core.IViewContainer.__name__ = ["robothaxe","core","IViewContainer"];
robothaxe.core.IViewContainer.prototype = {
	viewAdded: null
	,viewRemoved: null
	,isAdded: null
	,__class__: robothaxe.core.IViewContainer
}
robothaxe.event.EventDispatcher = $hxClasses["robothaxe.event.EventDispatcher"] = function(target) {
	if(this.mTarget != null) this.mTarget = target; else this.mTarget = this;
	this.mEventMap = new Hash();
};
robothaxe.event.EventDispatcher.__name__ = ["robothaxe","event","EventDispatcher"];
robothaxe.event.EventDispatcher.__interfaces__ = [robothaxe.event.IEventDispatcher];
robothaxe.event.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
robothaxe.event.EventDispatcher.prototype = {
	mTarget: null
	,mEventMap: null
	,addEventListener: function(type,inListener,useCapture,inPriority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(inPriority == null) inPriority = 0;
		if(useCapture == null) useCapture = false;
		var list = this.mEventMap.get(type);
		if(list == null) {
			list = new Array();
			this.mEventMap.set(type,list);
		}
		var l = new robothaxe.event._EventDispatcher.Listener(inListener,useCapture,inPriority);
		list.push(l);
	}
	,dispatchEvent: function(event) {
		if(event.target == null) event.target = this.mTarget;
		var list = this.mEventMap.get(event.type);
		var capture = event.eventPhase == robothaxe.event.EventPhase.CAPTURING_PHASE;
		if(list != null) {
			list.sort(robothaxe.event.EventDispatcher.compareListeners);
			var idx = 0;
			while(idx < list.length) {
				var listener = list[idx];
				if(listener.mUseCapture == capture) {
					listener.dispatchEvent(event);
					if(event.jeashGetIsCancelledNow()) return true;
				}
				if(idx < list.length && listener != list[idx]) {
				} else idx++;
			}
			return true;
		}
		return false;
	}
	,hasEventListener: function(type) {
		return this.mEventMap.exists(type);
	}
	,removeEventListener: function(type,listener,inCapture) {
		if(!this.mEventMap.exists(type)) return;
		var list = this.mEventMap.get(type);
		var capture = inCapture == null?false:inCapture;
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
	,willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,RemoveByID: function(inType,inID) {
		if(!this.mEventMap.exists(inType)) return;
		var list = this.mEventMap.get(inType);
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].mID == inID) {
				list.splice(i,1);
				return;
			}
		}
	}
	,__class__: robothaxe.event.EventDispatcher
}
if(!robothaxe.event._EventDispatcher) robothaxe.event._EventDispatcher = {}
robothaxe.event._EventDispatcher.Listener = $hxClasses["robothaxe.event._EventDispatcher.Listener"] = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = robothaxe.event._EventDispatcher.Listener.sIDs++;
};
robothaxe.event._EventDispatcher.Listener.__name__ = ["robothaxe","event","_EventDispatcher","Listener"];
robothaxe.event._EventDispatcher.Listener.prototype = {
	mListner: null
	,mUseCapture: null
	,mPriority: null
	,mID: null
	,Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,dispatchEvent: function(event) {
		this.mListner(event);
	}
	,__class__: robothaxe.event._EventDispatcher.Listener
}
robothaxe.event.EventPhase = $hxClasses["robothaxe.event.EventPhase"] = function() { }
robothaxe.event.EventPhase.__name__ = ["robothaxe","event","EventPhase"];
robothaxe.event.EventPhase.prototype = {
	__class__: robothaxe.event.EventPhase
}
if(!robothaxe.injector) robothaxe.injector = {}
robothaxe.injector.InjectionConfig = $hxClasses["robothaxe.injector.InjectionConfig"] = function(request,injectionName) {
	this.request = request;
	this.injectionName = injectionName;
};
robothaxe.injector.InjectionConfig.__name__ = ["robothaxe","injector","InjectionConfig"];
robothaxe.injector.InjectionConfig.prototype = {
	request: null
	,injectionName: null
	,injector: null
	,result: null
	,getResponse: function(injector) {
		if(this.injector != null) injector = this.injector;
		if(this.result != null) return this.result.getResponse(injector);
		var parentConfig = injector.getAncestorMapping(this.request,this.injectionName);
		if(parentConfig != null) return parentConfig.getResponse(injector);
		return null;
	}
	,hasResponse: function(injector) {
		return this.result != null;
	}
	,hasOwnResponse: function() {
		return this.result != null;
	}
	,setResult: function(result) {
		if(this.result != null && result != null) haxe.Log.trace("Warning: Injector already has a rule for type \"" + Type.getClassName(this.request) + "\", named \"" + this.injectionName + "\".\nIf you have overwritten this mapping intentionally you can use \"injector.unmap()\" prior to your replacement mapping in order to avoid seeing this message.",{ fileName : "InjectionConfig.hx", lineNumber : 59, className : "robothaxe.injector.InjectionConfig", methodName : "setResult"});
		this.result = result;
	}
	,setInjector: function(injector) {
		this.injector = injector;
	}
	,__class__: robothaxe.injector.InjectionConfig
}
robothaxe.injector.Injector = $hxClasses["robothaxe.injector.Injector"] = function() {
	this.m_mappings = new Hash();
	this.m_injecteeDescriptions = new robothaxe.injector.ClassHash();
	this.attendedToInjectees = new robothaxe.util.Register();
};
robothaxe.injector.Injector.__name__ = ["robothaxe","injector","Injector"];
robothaxe.injector.Injector.__interfaces__ = [robothaxe.core.IInjector];
robothaxe.injector.Injector.prototype = {
	attendedToInjectees: null
	,parentInjector: null
	,m_parentInjector: null
	,m_mappings: null
	,m_injecteeDescriptions: null
	,mapValue: function(whenAskedFor,useValue,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new robothaxe.injector.injectionresults.InjectValueResult(useValue));
		return config;
	}
	,mapClass: function(whenAskedFor,instantiateClass,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new robothaxe.injector.injectionresults.InjectClassResult(instantiateClass));
		return config;
	}
	,mapSingleton: function(whenAskedFor,named) {
		if(named == null) named = "";
		return this.mapSingletonOf(whenAskedFor,whenAskedFor,named);
	}
	,mapSingletonOf: function(whenAskedFor,useSingletonOf,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new robothaxe.injector.injectionresults.InjectSingletonResult(useSingletonOf));
		return config;
	}
	,mapRule: function(whenAskedFor,useRule,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new robothaxe.injector.injectionresults.InjectOtherRuleResult(useRule));
		return useRule;
	}
	,getClassName: function(forClass) {
		if(forClass == null) return "Dynamic"; else return Type.getClassName(forClass);
	}
	,getMapping: function(forClass,named) {
		if(named == null) named = "";
		var requestName = this.getClassName(forClass) + "#" + named;
		if(this.m_mappings.exists(requestName)) return this.m_mappings.get(requestName);
		var config = new robothaxe.injector.InjectionConfig(forClass,named);
		this.m_mappings.set(requestName,config);
		return config;
	}
	,injectInto: function(target) {
		if(this.attendedToInjectees.has(target)) return;
		this.attendedToInjectees.add(target);
		var targetClass = Type.getClass(target);
		var injecteeDescription = null;
		if(this.m_injecteeDescriptions.exists(targetClass)) injecteeDescription = this.m_injecteeDescriptions.get(targetClass); else injecteeDescription = this.getInjectionPoints(targetClass);
		if(injecteeDescription == null) return;
		var injectionPoints = injecteeDescription.injectionPoints;
		var length = injectionPoints.length;
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			var injectionPoint = injectionPoints[i];
			injectionPoint.applyInjection(target,this);
		}
	}
	,instantiate: function(forClass) {
		var injecteeDescription;
		if(this.m_injecteeDescriptions.exists(forClass)) injecteeDescription = this.m_injecteeDescriptions.get(forClass); else injecteeDescription = this.getInjectionPoints(forClass);
		var injectionPoint = injecteeDescription.ctor;
		var instance = injectionPoint.applyInjection(forClass,this);
		this.injectInto(instance);
		return instance;
	}
	,unmap: function(theClass,named) {
		if(named == null) named = "";
		var mapping = this.getConfigurationForRequest(theClass,named);
		if(mapping == null) throw new robothaxe.injector.InjectorError("Error while removing an injector mapping: No mapping defined for class " + this.getClassName(theClass) + ", named \"" + named + "\"");
		mapping.setResult(null);
	}
	,hasMapping: function(forClass,named) {
		if(named == null) named = "";
		var mapping = this.getConfigurationForRequest(forClass,named);
		if(mapping == null) return false;
		return mapping.hasResponse(this);
	}
	,getInstance: function(ofClass,named) {
		if(named == null) named = "";
		var mapping = this.getConfigurationForRequest(ofClass,named);
		if(mapping == null || !mapping.hasResponse(this)) throw new robothaxe.injector.InjectorError("Error while getting mapping response: No mapping defined for class " + this.getClassName(ofClass) + ", named \"" + named + "\"");
		return mapping.getResponse(this);
	}
	,getInjectionPoints: function(forClass) {
		var typeMeta = haxe.rtti.Meta.getType(forClass);
		if(typeMeta != null && Reflect.hasField(typeMeta,"interface")) throw new robothaxe.injector.InjectorError("Interfaces can't be used as instantiatable classes.");
		var fieldsMeta = this.getFields(forClass);
		var ctorInjectionPoint = null;
		var injectionPoints = [];
		var postConstructMethodPoints = [];
		var _g = 0, _g1 = Reflect.fields(fieldsMeta);
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			var fieldMeta = Reflect.field(fieldsMeta,field);
			var inject = Reflect.hasField(fieldMeta,"inject");
			var post = Reflect.hasField(fieldMeta,"post");
			var type = Reflect.field(fieldMeta,"type");
			var args = Reflect.field(fieldMeta,"args");
			if(field == "_") {
				if(args.length > 0) ctorInjectionPoint = new robothaxe.injector.injectionpoints.ConstructorInjectionPoint(fieldMeta,forClass,this);
			} else if(Reflect.hasField(fieldMeta,"args")) {
				if(inject) {
					var injectionPoint = new robothaxe.injector.injectionpoints.MethodInjectionPoint(fieldMeta,this);
					injectionPoints.push(injectionPoint);
				} else if(post) {
					var injectionPoint = new robothaxe.injector.injectionpoints.PostConstructInjectionPoint(fieldMeta,this);
					postConstructMethodPoints.push(injectionPoint);
				}
			} else if(type != null) {
				var injectionPoint = new robothaxe.injector.injectionpoints.PropertyInjectionPoint(fieldMeta,this);
				injectionPoints.push(injectionPoint);
			}
		}
		if(postConstructMethodPoints.length > 0) {
			postConstructMethodPoints.sort(function(a,b) {
				return a.order - b.order;
			});
			var _g = 0;
			while(_g < postConstructMethodPoints.length) {
				var point = postConstructMethodPoints[_g];
				++_g;
				injectionPoints.push(point);
			}
		}
		if(ctorInjectionPoint == null) ctorInjectionPoint = new robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint();
		var injecteeDescription = new robothaxe.injector.InjecteeDescription(ctorInjectionPoint,injectionPoints);
		this.m_injecteeDescriptions.set(forClass,injecteeDescription);
		return injecteeDescription;
	}
	,getConfigurationForRequest: function(forClass,named,traverseAncestors) {
		if(traverseAncestors == null) traverseAncestors = true;
		var requestName = this.getClassName(forClass) + "#" + named;
		if(!this.m_mappings.exists(requestName)) {
			if(traverseAncestors && this.parentInjector != null && this.parentInjector.hasMapping(forClass,named)) return this.getAncestorMapping(forClass,named);
			return null;
		}
		return this.m_mappings.get(requestName);
	}
	,set_parentInjector: function(value) {
		if(this.parentInjector != null && value == null) this.attendedToInjectees = new robothaxe.util.Register();
		this.parentInjector = value;
		if(this.parentInjector != null) this.attendedToInjectees = this.parentInjector.attendedToInjectees;
		return this.parentInjector;
	}
	,createChildInjector: function() {
		var injector = new robothaxe.injector.Injector();
		injector.set_parentInjector(this);
		return injector;
	}
	,getAncestorMapping: function(forClass,named) {
		var parent = this.parentInjector;
		while(parent != null) {
			var parentConfig = parent.getConfigurationForRequest(forClass,named,false);
			if(parentConfig != null && parentConfig.hasOwnResponse()) return parentConfig;
			parent = parent.parentInjector;
		}
		return null;
	}
	,getFields: function(type) {
		var meta = { };
		while(type != null) {
			var typeMeta = haxe.rtti.Meta.getFields(type);
			var _g = 0, _g1 = Reflect.fields(typeMeta);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				meta[field] = Reflect.field(typeMeta,field);
			}
			type = Type.getSuperClass(type);
		}
		return meta;
	}
	,__class__: robothaxe.injector.Injector
	,__properties__: {set_parentInjector:"set_parentInjector"}
}
robothaxe.injector.ClassHash = $hxClasses["robothaxe.injector.ClassHash"] = function() {
	this.hash = new Hash();
};
robothaxe.injector.ClassHash.__name__ = ["robothaxe","injector","ClassHash"];
robothaxe.injector.ClassHash.prototype = {
	hash: null
	,set: function(key,value) {
		this.hash.set(Type.getClassName(key),value);
	}
	,get: function(key) {
		return this.hash.get(Type.getClassName(key));
	}
	,exists: function(key) {
		return this.hash.exists(Type.getClassName(key));
	}
	,__class__: robothaxe.injector.ClassHash
}
robothaxe.injector.InjecteeDescription = $hxClasses["robothaxe.injector.InjecteeDescription"] = function(ctor,injectionPoints) {
	this.ctor = ctor;
	this.injectionPoints = injectionPoints;
};
robothaxe.injector.InjecteeDescription.__name__ = ["robothaxe","injector","InjecteeDescription"];
robothaxe.injector.InjecteeDescription.prototype = {
	ctor: null
	,injectionPoints: null
	,__class__: robothaxe.injector.InjecteeDescription
}
robothaxe.injector.InjectorError = $hxClasses["robothaxe.injector.InjectorError"] = function(message) {
	this.message = message;
};
robothaxe.injector.InjectorError.__name__ = ["robothaxe","injector","InjectorError"];
robothaxe.injector.InjectorError.prototype = {
	message: null
	,toString: function() {
		return this.message;
	}
	,__class__: robothaxe.injector.InjectorError
}
robothaxe.injector.Reflector = $hxClasses["robothaxe.injector.Reflector"] = function() {
};
robothaxe.injector.Reflector.__name__ = ["robothaxe","injector","Reflector"];
robothaxe.injector.Reflector.__interfaces__ = [robothaxe.core.IReflector];
robothaxe.injector.Reflector.prototype = {
	classExtendsOrImplements: function(classOrClassName,superClass) {
		var actualClass = null;
		if(Std["is"](classOrClassName,Class)) actualClass = (function($this) {
			var $r;
			var $t = classOrClassName;
			if(Std["is"]($t,Class)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)); else if(Std["is"](classOrClassName,String)) try {
			actualClass = Type.resolveClass((function($this) {
				var $r;
				var $t = classOrClassName;
				if(Std["is"]($t,String)) $t; else throw "Class cast error";
				$r = $t;
				return $r;
			}(this)));
		} catch( e ) {
			throw "The class name " + classOrClassName + " is not valid because of " + e + "\n" + e.getStackTrace();
		}
		if(actualClass == null) throw "The parameter classOrClassName must be a Class or fully qualified class name.";
		var classInstance = Type.createEmptyInstance(actualClass);
		return Std["is"](classInstance,superClass);
	}
	,getClass: function(value) {
		if(Std["is"](value,Class)) return value;
		return Type.getClass(value);
	}
	,getFQCN: function(value) {
		var fqcn;
		if(Std["is"](value,String)) return (function($this) {
			var $r;
			var $t = value;
			if(Std["is"]($t,String)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		return Type.getClassName(value);
	}
	,__class__: robothaxe.injector.Reflector
}
if(!robothaxe.injector.injectionpoints) robothaxe.injector.injectionpoints = {}
robothaxe.injector.injectionpoints.InjectionPoint = $hxClasses["robothaxe.injector.injectionpoints.InjectionPoint"] = function(meta,injector) {
	this.initializeInjection(meta);
};
robothaxe.injector.injectionpoints.InjectionPoint.__name__ = ["robothaxe","injector","injectionpoints","InjectionPoint"];
robothaxe.injector.injectionpoints.InjectionPoint.prototype = {
	applyInjection: function(target,injector) {
		return target;
	}
	,initializeInjection: function(meta) {
	}
	,__class__: robothaxe.injector.injectionpoints.InjectionPoint
}
robothaxe.injector.injectionpoints.MethodInjectionPoint = $hxClasses["robothaxe.injector.injectionpoints.MethodInjectionPoint"] = function(meta,injector) {
	this.requiredParameters = 0;
	robothaxe.injector.injectionpoints.InjectionPoint.call(this,meta,injector);
};
robothaxe.injector.injectionpoints.MethodInjectionPoint.__name__ = ["robothaxe","injector","injectionpoints","MethodInjectionPoint"];
robothaxe.injector.injectionpoints.MethodInjectionPoint.__super__ = robothaxe.injector.injectionpoints.InjectionPoint;
robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype = $extend(robothaxe.injector.injectionpoints.InjectionPoint.prototype,{
	methodName: null
	,_parameterInjectionConfigs: null
	,requiredParameters: null
	,applyInjection: function(target,injector) {
		var parameters = this.gatherParameterValues(target,injector);
		var method = Reflect.field(target,this.methodName);
		method.apply(target,parameters);
		return target;
	}
	,initializeInjection: function(meta) {
		this.methodName = meta.name[0];
		this.gatherParameters(meta);
	}
	,gatherParameters: function(meta) {
		var nameArgs = meta.inject;
		var args = meta.args;
		if(nameArgs == null) nameArgs = [];
		this._parameterInjectionConfigs = [];
		var i = 0;
		var _g = 0;
		while(_g < args.length) {
			var arg = args[_g];
			++_g;
			var injectionName = "";
			if(i < nameArgs.length) injectionName = nameArgs[i];
			var parameterTypeName = arg.type;
			if(arg.opt) {
				if(parameterTypeName == "Dynamic") throw new robothaxe.injector.InjectorError("Error in method definition of injectee. Required parameters can't have non class type.");
			} else this.requiredParameters++;
			this._parameterInjectionConfigs.push(new robothaxe.injector.injectionpoints.ParameterInjectionConfig(parameterTypeName,injectionName));
			i++;
		}
	}
	,gatherParameterValues: function(target,injector) {
		var parameters = [];
		var length = this._parameterInjectionConfigs.length;
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			var parameterConfig = this._parameterInjectionConfigs[i];
			var config = injector.getMapping(Type.resolveClass(parameterConfig.typeName),parameterConfig.injectionName);
			var injection = config.getResponse(injector);
			if(injection == null) {
				if(i >= this.requiredParameters) break;
				throw new robothaxe.injector.InjectorError("Injector is missing a rule to handle injection into target " + Type.getClassName(target) + ". Target dependency: " + Type.getClassName(config.request) + ", method: " + this.methodName + ", parameter: " + (i + 1) + ", named: " + parameterConfig.injectionName);
			}
			parameters[i] = injection;
		}
		return parameters;
	}
	,__class__: robothaxe.injector.injectionpoints.MethodInjectionPoint
});
robothaxe.injector.injectionpoints.ConstructorInjectionPoint = $hxClasses["robothaxe.injector.injectionpoints.ConstructorInjectionPoint"] = function(meta,forClass,injector) {
	robothaxe.injector.injectionpoints.MethodInjectionPoint.call(this,meta,injector);
};
robothaxe.injector.injectionpoints.ConstructorInjectionPoint.__name__ = ["robothaxe","injector","injectionpoints","ConstructorInjectionPoint"];
robothaxe.injector.injectionpoints.ConstructorInjectionPoint.__super__ = robothaxe.injector.injectionpoints.MethodInjectionPoint;
robothaxe.injector.injectionpoints.ConstructorInjectionPoint.prototype = $extend(robothaxe.injector.injectionpoints.MethodInjectionPoint.prototype,{
	applyInjection: function(target,injector) {
		var ofClass = target;
		var withArgs = this.gatherParameterValues(target,injector);
		return Type.createInstance(ofClass,withArgs);
	}
	,initializeInjection: function(meta) {
		this.methodName = "new";
		this.gatherParameters(meta);
	}
	,__class__: robothaxe.injector.injectionpoints.ConstructorInjectionPoint
});
robothaxe.injector.injectionpoints.ParameterInjectionConfig = $hxClasses["robothaxe.injector.injectionpoints.ParameterInjectionConfig"] = function(typeName,injectionName) {
	this.typeName = typeName;
	this.injectionName = injectionName;
};
robothaxe.injector.injectionpoints.ParameterInjectionConfig.__name__ = ["robothaxe","injector","injectionpoints","ParameterInjectionConfig"];
robothaxe.injector.injectionpoints.ParameterInjectionConfig.prototype = {
	typeName: null
	,injectionName: null
	,__class__: robothaxe.injector.injectionpoints.ParameterInjectionConfig
}
robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint = $hxClasses["robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint"] = function() {
	robothaxe.injector.injectionpoints.InjectionPoint.call(this,null,null);
};
robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint.__name__ = ["robothaxe","injector","injectionpoints","NoParamsConstructorInjectionPoint"];
robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint.__super__ = robothaxe.injector.injectionpoints.InjectionPoint;
robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint.prototype = $extend(robothaxe.injector.injectionpoints.InjectionPoint.prototype,{
	applyInjection: function(target,injector) {
		return Type.createInstance(target,[]);
	}
	,__class__: robothaxe.injector.injectionpoints.NoParamsConstructorInjectionPoint
});
robothaxe.injector.injectionpoints.PostConstructInjectionPoint = $hxClasses["robothaxe.injector.injectionpoints.PostConstructInjectionPoint"] = function(meta,injector) {
	this.order = 0;
	robothaxe.injector.injectionpoints.InjectionPoint.call(this,meta,injector);
};
robothaxe.injector.injectionpoints.PostConstructInjectionPoint.__name__ = ["robothaxe","injector","injectionpoints","PostConstructInjectionPoint"];
robothaxe.injector.injectionpoints.PostConstructInjectionPoint.__super__ = robothaxe.injector.injectionpoints.InjectionPoint;
robothaxe.injector.injectionpoints.PostConstructInjectionPoint.prototype = $extend(robothaxe.injector.injectionpoints.InjectionPoint.prototype,{
	order: null
	,methodName: null
	,applyInjection: function(target,injector) {
		Reflect.field(target,this.methodName).apply(target,[]);
		return target;
	}
	,initializeInjection: function(meta) {
		this.methodName = meta.name[0];
		if(meta.post != null) this.order = meta.post[0];
	}
	,__class__: robothaxe.injector.injectionpoints.PostConstructInjectionPoint
});
robothaxe.injector.injectionpoints.PropertyInjectionPoint = $hxClasses["robothaxe.injector.injectionpoints.PropertyInjectionPoint"] = function(meta,injector) {
	robothaxe.injector.injectionpoints.InjectionPoint.call(this,meta,null);
};
robothaxe.injector.injectionpoints.PropertyInjectionPoint.__name__ = ["robothaxe","injector","injectionpoints","PropertyInjectionPoint"];
robothaxe.injector.injectionpoints.PropertyInjectionPoint.__super__ = robothaxe.injector.injectionpoints.InjectionPoint;
robothaxe.injector.injectionpoints.PropertyInjectionPoint.prototype = $extend(robothaxe.injector.injectionpoints.InjectionPoint.prototype,{
	propertyName: null
	,propertyType: null
	,injectionName: null
	,hasSetter: null
	,applyInjection: function(target,injector) {
		var injectionConfig = injector.getMapping(Type.resolveClass(this.propertyType),this.injectionName);
		var injection = injectionConfig.getResponse(injector);
		if(injection == null) throw new robothaxe.injector.InjectorError("Injector is missing a rule to handle injection into property \"" + this.propertyName + "\" of object \"" + target + "\". Target dependency: \"" + this.propertyType + "\", named \"" + this.injectionName + "\"");
		if(this.hasSetter) {
			var setter = Reflect.field(target,this.propertyName);
			setter.apply(target,[injection]);
		} else target[this.propertyName] = injection;
		return target;
	}
	,initializeInjection: function(meta) {
		this.propertyType = meta.type[0];
		this.hasSetter = meta.setter != null;
		if(this.hasSetter) this.propertyName = meta.setter[0]; else this.propertyName = meta.name[0];
		if(meta.inject == null) this.injectionName = ""; else this.injectionName = meta.inject[0];
	}
	,__class__: robothaxe.injector.injectionpoints.PropertyInjectionPoint
});
if(!robothaxe.injector.injectionresults) robothaxe.injector.injectionresults = {}
robothaxe.injector.injectionresults.InjectionResult = $hxClasses["robothaxe.injector.injectionresults.InjectionResult"] = function() {
};
robothaxe.injector.injectionresults.InjectionResult.__name__ = ["robothaxe","injector","injectionresults","InjectionResult"];
robothaxe.injector.injectionresults.InjectionResult.prototype = {
	getResponse: function(injector) {
		return null;
	}
	,__class__: robothaxe.injector.injectionresults.InjectionResult
}
robothaxe.injector.injectionresults.InjectClassResult = $hxClasses["robothaxe.injector.injectionresults.InjectClassResult"] = function(responseType) {
	robothaxe.injector.injectionresults.InjectionResult.call(this);
	this.responseType = responseType;
};
robothaxe.injector.injectionresults.InjectClassResult.__name__ = ["robothaxe","injector","injectionresults","InjectClassResult"];
robothaxe.injector.injectionresults.InjectClassResult.__super__ = robothaxe.injector.injectionresults.InjectionResult;
robothaxe.injector.injectionresults.InjectClassResult.prototype = $extend(robothaxe.injector.injectionresults.InjectionResult.prototype,{
	responseType: null
	,getResponse: function(injector) {
		return injector.instantiate(this.responseType);
	}
	,__class__: robothaxe.injector.injectionresults.InjectClassResult
});
robothaxe.injector.injectionresults.InjectOtherRuleResult = $hxClasses["robothaxe.injector.injectionresults.InjectOtherRuleResult"] = function(rule) {
	robothaxe.injector.injectionresults.InjectionResult.call(this);
	this.rule = rule;
};
robothaxe.injector.injectionresults.InjectOtherRuleResult.__name__ = ["robothaxe","injector","injectionresults","InjectOtherRuleResult"];
robothaxe.injector.injectionresults.InjectOtherRuleResult.__super__ = robothaxe.injector.injectionresults.InjectionResult;
robothaxe.injector.injectionresults.InjectOtherRuleResult.prototype = $extend(robothaxe.injector.injectionresults.InjectionResult.prototype,{
	rule: null
	,getResponse: function(injector) {
		return this.rule.getResponse(injector);
	}
	,__class__: robothaxe.injector.injectionresults.InjectOtherRuleResult
});
robothaxe.injector.injectionresults.InjectSingletonResult = $hxClasses["robothaxe.injector.injectionresults.InjectSingletonResult"] = function(responseType) {
	robothaxe.injector.injectionresults.InjectionResult.call(this);
	this.responseType = responseType;
};
robothaxe.injector.injectionresults.InjectSingletonResult.__name__ = ["robothaxe","injector","injectionresults","InjectSingletonResult"];
robothaxe.injector.injectionresults.InjectSingletonResult.__super__ = robothaxe.injector.injectionresults.InjectionResult;
robothaxe.injector.injectionresults.InjectSingletonResult.prototype = $extend(robothaxe.injector.injectionresults.InjectionResult.prototype,{
	responseType: null
	,response: null
	,getResponse: function(injector) {
		if(this.response == null) this.response = this.createResponse(injector);
		return this.response;
	}
	,createResponse: function(injector) {
		return injector.instantiate(this.responseType);
	}
	,__class__: robothaxe.injector.injectionresults.InjectSingletonResult
});
robothaxe.injector.injectionresults.InjectValueResult = $hxClasses["robothaxe.injector.injectionresults.InjectValueResult"] = function(value) {
	robothaxe.injector.injectionresults.InjectionResult.call(this);
	this.value = value;
};
robothaxe.injector.injectionresults.InjectValueResult.__name__ = ["robothaxe","injector","injectionresults","InjectValueResult"];
robothaxe.injector.injectionresults.InjectValueResult.__super__ = robothaxe.injector.injectionresults.InjectionResult;
robothaxe.injector.injectionresults.InjectValueResult.prototype = $extend(robothaxe.injector.injectionresults.InjectionResult.prototype,{
	value: null
	,getResponse: function(injector) {
		return this.value;
	}
	,__class__: robothaxe.injector.injectionresults.InjectValueResult
});
if(!robothaxe.mvcs) robothaxe.mvcs = {}
robothaxe.mvcs.Actor = $hxClasses["robothaxe.mvcs.Actor"] = function() {
};
robothaxe.mvcs.Actor.__name__ = ["robothaxe","mvcs","Actor"];
robothaxe.mvcs.Actor.prototype = {
	eventDispatcher: null
	,eventMap: null
	,get_eventMap: function() {
		if(this.eventMap == null) this.eventMap = new robothaxe.base.EventMap(this.eventDispatcher);
		return this.eventMap;
	}
	,dispatch: function(event) {
		if(this.eventDispatcher.hasEventListener(event.type)) return this.eventDispatcher.dispatchEvent(event);
		return false;
	}
	,__class__: robothaxe.mvcs.Actor
	,__properties__: {get_eventMap:"get_eventMap"}
}
robothaxe.mvcs.Command = $hxClasses["robothaxe.mvcs.Command"] = function() {
};
robothaxe.mvcs.Command.__name__ = ["robothaxe","mvcs","Command"];
robothaxe.mvcs.Command.prototype = {
	contextView: null
	,commandMap: null
	,eventDispatcher: null
	,injector: null
	,mediatorMap: null
	,execute: function() {
	}
	,dispatch: function(event) {
		if(this.eventDispatcher.hasEventListener(event.type)) return this.eventDispatcher.dispatchEvent(event);
		return false;
	}
	,__class__: robothaxe.mvcs.Command
}
robothaxe.mvcs.Context = $hxClasses["robothaxe.mvcs.Context"] = function(contextView,autoStartup) {
	if(autoStartup == null) autoStartup = true;
	robothaxe.base.ContextBase.call(this);
	this.autoStartup = autoStartup;
	this.set_contextView(contextView);
};
robothaxe.mvcs.Context.__name__ = ["robothaxe","mvcs","Context"];
robothaxe.mvcs.Context.__interfaces__ = [robothaxe.core.IContext];
robothaxe.mvcs.Context.__super__ = robothaxe.base.ContextBase;
robothaxe.mvcs.Context.prototype = $extend(robothaxe.base.ContextBase.prototype,{
	contextView: null
	,commandMap: null
	,injector: null
	,mediatorMap: null
	,reflector: null
	,viewMap: null
	,autoStartup: null
	,startup: function() {
		this.dispatchEvent(new robothaxe.base.ContextEvent(robothaxe.base.ContextEvent.STARTUP_COMPLETE));
	}
	,shutdown: function() {
		this.dispatchEvent(new robothaxe.base.ContextEvent(robothaxe.base.ContextEvent.SHUTDOWN_COMPLETE));
	}
	,set_contextView: function(value) {
		if(this.contextView != value) {
			this.contextView = value;
			this.commandMap = null;
			this.mediatorMap = null;
			this.viewMap = null;
			this.mapInjections();
			this.checkAutoStartup();
		}
		return value;
	}
	,get_injector: function() {
		if(this.injector == null) return this.createInjector();
		return this.injector;
	}
	,get_reflector: function() {
		if(this.reflector == null) this.reflector = new robothaxe.injector.Reflector();
		return this.reflector;
	}
	,get_commandMap: function() {
		if(this.commandMap == null) this.commandMap = new robothaxe.base.CommandMap(this.eventDispatcher,this.createChildInjector(),this.get_reflector());
		return this.commandMap;
	}
	,get_mediatorMap: function() {
		if(this.mediatorMap == null) this.mediatorMap = new robothaxe.base.MediatorMap(this.contextView,this.createChildInjector(),this.get_reflector());
		return this.mediatorMap;
	}
	,get_viewMap: function() {
		if(this.viewMap == null) this.viewMap = new robothaxe.base.ViewMap(this.contextView,this.get_injector());
		return this.viewMap;
	}
	,mapInjections: function() {
		this.get_injector().mapValue(robothaxe.core.IReflector,this.get_reflector());
		this.get_injector().mapValue(robothaxe.core.IInjector,this.get_injector());
		this.get_injector().mapValue(robothaxe.event.IEventDispatcher,this.eventDispatcher);
		this.get_injector().mapValue(robothaxe.core.IViewContainer,this.contextView);
		this.get_injector().mapValue(robothaxe.core.ICommandMap,this.get_commandMap());
		this.get_injector().mapValue(robothaxe.core.IMediatorMap,this.get_mediatorMap());
		this.get_injector().mapValue(robothaxe.core.IViewMap,this.get_viewMap());
		this.get_injector().mapClass(robothaxe.core.IEventMap,robothaxe.base.EventMap);
	}
	,checkAutoStartup: function() {
		if(this.autoStartup && this.contextView != null) this.startup();
	}
	,onAddedToStage: function(e) {
		this.startup();
	}
	,createInjector: function() {
		this.injector = new robothaxe.injector.Injector();
		return this.get_injector();
	}
	,createChildInjector: function() {
		return this.get_injector().createChildInjector();
	}
	,__class__: robothaxe.mvcs.Context
	,__properties__: {get_viewMap:"get_viewMap",get_reflector:"get_reflector",get_mediatorMap:"get_mediatorMap",get_injector:"get_injector",get_commandMap:"get_commandMap",set_contextView:"set_contextView"}
});
robothaxe.mvcs.Mediator = $hxClasses["robothaxe.mvcs.Mediator"] = function() {
	robothaxe.base.MediatorBase.call(this);
};
robothaxe.mvcs.Mediator.__name__ = ["robothaxe","mvcs","Mediator"];
robothaxe.mvcs.Mediator.__super__ = robothaxe.base.MediatorBase;
robothaxe.mvcs.Mediator.prototype = $extend(robothaxe.base.MediatorBase.prototype,{
	eventDispatcher: null
	,contextView: null
	,mediatorMap: null
	,preRemove: function() {
		if(this.get_eventMap() != null) this.get_eventMap().unmapListeners();
		robothaxe.base.MediatorBase.prototype.preRemove.call(this);
	}
	,eventMap: null
	,get_eventMap: function() {
		if(this.eventMap == null) this.eventMap = new robothaxe.base.EventMap(this.eventDispatcher);
		return this.eventMap;
	}
	,dispatch: function(event) {
		if(this.eventDispatcher.hasEventListener(event.type)) return this.eventDispatcher.dispatchEvent(event);
		return false;
	}
	,addViewListener: function(type,listener,eventClass,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = true;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
	}
	,addContextListener: function(type,listener,eventClass,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = true;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		this.get_eventMap().mapListener(this.eventDispatcher,type,listener,eventClass,useCapture,priority,useWeakReference);
	}
	,__class__: robothaxe.mvcs.Mediator
	,__properties__: {get_eventMap:"get_eventMap"}
});
if(!robothaxe.util) robothaxe.util = {}
robothaxe.util.Dictionary = $hxClasses["robothaxe.util.Dictionary"] = function(weakKeys) {
	if(weakKeys == null) weakKeys = false;
	this.keys = [];
	this.values = [];
};
robothaxe.util.Dictionary.__name__ = ["robothaxe","util","Dictionary"];
robothaxe.util.Dictionary.prototype = {
	keys: null
	,values: null
	,add: function(key,value) {
		var _g1 = 0, _g = this.keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.keys[i] == key) {
				this.keys[i] = key;
				this.values[i] = value;
				return value;
			}
		}
		this.keys.push(key);
		this.values.push(value);
		return value;
	}
	,get: function(key) {
		var _g1 = 0, _g = this.keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.keys[i] == key) return this.values[i];
		}
		return null;
	}
	,remove: function(key) {
		var _g1 = 0, _g = this.keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.keys[i] == key) {
				this.keys.splice(i,1);
				this.values.splice(i,1);
				return;
			}
		}
	}
	,empty: function() {
		this.keys = [];
		this.values = [];
	}
	,iterator: function() {
		return this.keys.iterator();
	}
	,__class__: robothaxe.util.Dictionary
}
robothaxe.util.Register = $hxClasses["robothaxe.util.Register"] = function() {
	this.list = new List();
};
robothaxe.util.Register.__name__ = ["robothaxe","util","Register"];
robothaxe.util.Register.prototype = {
	list: null
	,has: function(value) {
		var $it0 = this.list.iterator();
		while( $it0.hasNext() ) {
			var v = $it0.next();
			if(v == value) return true;
		}
		return false;
	}
	,add: function(value) {
		if(this.has(value)) return;
		this.list.add(value);
	}
	,remove: function(value) {
		this.list.remove(value);
	}
	,clear: function() {
		this.list.clear();
	}
	,__class__: robothaxe.util.Register
}
if(!robothaxe.utilities) robothaxe.utilities = {}
if(!robothaxe.utilities.modular) robothaxe.utilities.modular = {}
if(!robothaxe.utilities.modular.core) robothaxe.utilities.modular.core = {}
robothaxe.utilities.modular.core.IModuleCommandMap = $hxClasses["robothaxe.utilities.modular.core.IModuleCommandMap"] = function() { }
robothaxe.utilities.modular.core.IModuleCommandMap.__name__ = ["robothaxe","utilities","modular","core","IModuleCommandMap"];
robothaxe.utilities.modular.core.IModuleCommandMap.__interfaces__ = [robothaxe.core.ICommandMap];
robothaxe.utilities.modular.core.IModuleCommandMap.prototype = {
	__class__: robothaxe.utilities.modular.core.IModuleCommandMap
}
if(!robothaxe.utilities.modular.base) robothaxe.utilities.modular.base = {}
robothaxe.utilities.modular.base.ModuleCommandMap = $hxClasses["robothaxe.utilities.modular.base.ModuleCommandMap"] = function(eventDispatcher,injector,reflector) {
	robothaxe.base.CommandMap.call(this,eventDispatcher,injector,reflector);
};
robothaxe.utilities.modular.base.ModuleCommandMap.__name__ = ["robothaxe","utilities","modular","base","ModuleCommandMap"];
robothaxe.utilities.modular.base.ModuleCommandMap.__interfaces__ = [robothaxe.utilities.modular.core.IModuleCommandMap];
robothaxe.utilities.modular.base.ModuleCommandMap.__super__ = robothaxe.base.CommandMap;
robothaxe.utilities.modular.base.ModuleCommandMap.prototype = $extend(robothaxe.base.CommandMap.prototype,{
	__class__: robothaxe.utilities.modular.base.ModuleCommandMap
});
robothaxe.utilities.modular.core.IModuleEventDispatcher = $hxClasses["robothaxe.utilities.modular.core.IModuleEventDispatcher"] = function() { }
robothaxe.utilities.modular.core.IModuleEventDispatcher.__name__ = ["robothaxe","utilities","modular","core","IModuleEventDispatcher"];
robothaxe.utilities.modular.core.IModuleEventDispatcher.__interfaces__ = [robothaxe.event.IEventDispatcher];
robothaxe.utilities.modular.core.IModuleEventDispatcher.prototype = {
	__class__: robothaxe.utilities.modular.core.IModuleEventDispatcher
}
robothaxe.utilities.modular.base.ModuleEventDispatcher = $hxClasses["robothaxe.utilities.modular.base.ModuleEventDispatcher"] = function(target) {
	robothaxe.event.EventDispatcher.call(this,target);
};
robothaxe.utilities.modular.base.ModuleEventDispatcher.__name__ = ["robothaxe","utilities","modular","base","ModuleEventDispatcher"];
robothaxe.utilities.modular.base.ModuleEventDispatcher.__interfaces__ = [robothaxe.utilities.modular.core.IModuleEventDispatcher];
robothaxe.utilities.modular.base.ModuleEventDispatcher.__super__ = robothaxe.event.EventDispatcher;
robothaxe.utilities.modular.base.ModuleEventDispatcher.prototype = $extend(robothaxe.event.EventDispatcher.prototype,{
	__class__: robothaxe.utilities.modular.base.ModuleEventDispatcher
});
robothaxe.utilities.modular.core.IModuleContext = $hxClasses["robothaxe.utilities.modular.core.IModuleContext"] = function() { }
robothaxe.utilities.modular.core.IModuleContext.__name__ = ["robothaxe","utilities","modular","core","IModuleContext"];
robothaxe.utilities.modular.core.IModuleContext.__interfaces__ = [robothaxe.core.IContext];
robothaxe.utilities.modular.core.IModuleContext.prototype = {
	dispose: null
	,__class__: robothaxe.utilities.modular.core.IModuleContext
}
if(!robothaxe.utilities.modular.mvcs) robothaxe.utilities.modular.mvcs = {}
robothaxe.utilities.modular.mvcs.ModuleActor = $hxClasses["robothaxe.utilities.modular.mvcs.ModuleActor"] = function() {
	robothaxe.mvcs.Actor.call(this);
};
robothaxe.utilities.modular.mvcs.ModuleActor.__name__ = ["robothaxe","utilities","modular","mvcs","ModuleActor"];
robothaxe.utilities.modular.mvcs.ModuleActor.__super__ = robothaxe.mvcs.Actor;
robothaxe.utilities.modular.mvcs.ModuleActor.prototype = $extend(robothaxe.mvcs.Actor.prototype,{
	dispatchToModules: function(event) {
		if(this.moduleEventDispatcher.hasEventListener(event.type)) return this.moduleEventDispatcher.dispatchEvent(event);
		return true;
	}
	,moduleEventDispatcher: null
	,__class__: robothaxe.utilities.modular.mvcs.ModuleActor
});
robothaxe.utilities.modular.mvcs.ModuleCommand = $hxClasses["robothaxe.utilities.modular.mvcs.ModuleCommand"] = function() {
	robothaxe.mvcs.Command.call(this);
};
robothaxe.utilities.modular.mvcs.ModuleCommand.__name__ = ["robothaxe","utilities","modular","mvcs","ModuleCommand"];
robothaxe.utilities.modular.mvcs.ModuleCommand.__super__ = robothaxe.mvcs.Command;
robothaxe.utilities.modular.mvcs.ModuleCommand.prototype = $extend(robothaxe.mvcs.Command.prototype,{
	dispatchToModules: function(event) {
		if(this.moduleEventDispatcher.hasEventListener(event.type)) return this.moduleEventDispatcher.dispatchEvent(event);
		return true;
	}
	,moduleEventDispatcher: null
	,moduleCommandMap: null
	,__class__: robothaxe.utilities.modular.mvcs.ModuleCommand
});
robothaxe.utilities.modular.mvcs.ModuleContext = $hxClasses["robothaxe.utilities.modular.mvcs.ModuleContext"] = function(contextView,autoStartup,parentInjector) {
	if(autoStartup == null) autoStartup = true;
	if(parentInjector != null) this.injector = parentInjector.createChildInjector();
	robothaxe.mvcs.Context.call(this,contextView,autoStartup);
};
robothaxe.utilities.modular.mvcs.ModuleContext.__name__ = ["robothaxe","utilities","modular","mvcs","ModuleContext"];
robothaxe.utilities.modular.mvcs.ModuleContext.__interfaces__ = [robothaxe.utilities.modular.core.IModuleContext];
robothaxe.utilities.modular.mvcs.ModuleContext.__super__ = robothaxe.mvcs.Context;
robothaxe.utilities.modular.mvcs.ModuleContext.prototype = $extend(robothaxe.mvcs.Context.prototype,{
	mapInjections: function() {
		robothaxe.mvcs.Context.prototype.mapInjections.call(this);
		this.initializeModuleEventDispatcher();
		this.get_injector().mapValue(robothaxe.utilities.modular.core.IModuleCommandMap,this.get_moduleCommandMap());
	}
	,initializeModuleEventDispatcher: function() {
		if(this.get_injector().hasMapping(robothaxe.utilities.modular.core.IModuleEventDispatcher)) this.moduleDispatcher = this.get_injector().getInstance(robothaxe.utilities.modular.core.IModuleEventDispatcher); else {
			this.moduleDispatcher = new robothaxe.utilities.modular.base.ModuleEventDispatcher(this);
			this.get_injector().mapValue(robothaxe.utilities.modular.core.IModuleEventDispatcher,this.moduleDispatcher);
		}
	}
	,dispatchToModules: function(event) {
		if(this.moduleDispatcher.hasEventListener(event.type)) return this.moduleDispatcher.dispatchEvent(event);
		return true;
	}
	,dispose: function() {
		this.dispatchEvent(new robothaxe.base.ContextEvent(robothaxe.base.ContextEvent.SHUTDOWN));
		this.get_commandMap().unmapEvents();
		this.get_moduleCommandMap().unmapEvents();
		this.moduleCommandMap = null;
		this.moduleDispatcher = null;
		this.set_contextView(null);
		this.injector = null;
		this.reflector = null;
		this.commandMap = null;
		this.mediatorMap = null;
		this.viewMap = null;
		this.eventDispatcher = null;
	}
	,moduleDispatcher: null
	,moduleCommandMap: null
	,get_moduleCommandMap: function() {
		if(this.moduleCommandMap == null) this.moduleCommandMap = new robothaxe.utilities.modular.base.ModuleCommandMap(this.moduleDispatcher,this.createChildInjector(),this.get_reflector());
		return this.moduleCommandMap;
	}
	,__class__: robothaxe.utilities.modular.mvcs.ModuleContext
	,__properties__: $extend(robothaxe.mvcs.Context.prototype.__properties__,{get_moduleCommandMap:"get_moduleCommandMap"})
});
robothaxe.utilities.modular.mvcs.ModuleMediator = $hxClasses["robothaxe.utilities.modular.mvcs.ModuleMediator"] = function() {
	robothaxe.mvcs.Mediator.call(this);
};
robothaxe.utilities.modular.mvcs.ModuleMediator.__name__ = ["robothaxe","utilities","modular","mvcs","ModuleMediator"];
robothaxe.utilities.modular.mvcs.ModuleMediator.__super__ = robothaxe.mvcs.Mediator;
robothaxe.utilities.modular.mvcs.ModuleMediator.prototype = $extend(robothaxe.mvcs.Mediator.prototype,{
	addModuleListener: function(type,listener,eventClass,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = true;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		this.get_eventMap().mapListener(this.moduleEventDispatcher,type,listener,eventClass,useCapture,priority,useWeakReference);
	}
	,dispatchToModules: function(event) {
		if(this.moduleEventDispatcher.hasEventListener(event.type)) return this.moduleEventDispatcher.dispatchEvent(event);
		return false;
	}
	,moduleEventDispatcher: null
	,moduleCommandMap: null
	,__class__: robothaxe.utilities.modular.mvcs.ModuleMediator
});
if(!robothaxe.utilities.modular.tests) robothaxe.utilities.modular.tests = {}
if(!robothaxe.utilities.modular.tests.base) robothaxe.utilities.modular.tests.base = {}
robothaxe.utilities.modular.tests.base.ModuleCommandMapTest = $hxClasses["robothaxe.utilities.modular.tests.base.ModuleCommandMapTest"] = function() {
};
robothaxe.utilities.modular.tests.base.ModuleCommandMapTest.__name__ = ["robothaxe","utilities","modular","tests","base","ModuleCommandMapTest"];
robothaxe.utilities.modular.tests.base.ModuleCommandMapTest.prototype = {
	_moduleEventDispatcher: null
	,_commandExecuted: null
	,_commandMap: null
	,_injector: null
	,_reflector: null
	,beforeClass: function() {
	}
	,afterClass: function() {
	}
	,setup: function() {
		this._moduleEventDispatcher = new robothaxe.utilities.modular.base.ModuleEventDispatcher();
		this._injector = new robothaxe.injector.Injector();
		this._reflector = new robothaxe.injector.Reflector();
		this._commandMap = new robothaxe.utilities.modular.base.ModuleCommandMap(this._moduleEventDispatcher,this._injector,this._reflector);
	}
	,tearDown: function() {
		this._moduleEventDispatcher = null;
		this._injector = null;
		this._reflector = null;
		this._commandMap = null;
		robothaxe.utilities.modular.tests.support.TestCommand.isExecuted = false;
	}
	,testHasCommandForEvent: function() {
		this._commandMap.mapEvent("sample event",robothaxe.utilities.modular.tests.support.TestCommand,robothaxe.utilities.modular.tests.support.TestModuleEvent);
		massive.munit.Assert.isTrue(this._commandMap.hasEventCommand("sample event",robothaxe.utilities.modular.tests.support.TestCommand,robothaxe.utilities.modular.tests.support.TestModuleEvent),{ fileName : "ModuleCommandMapTest.hx", lineNumber : 67, className : "robothaxe.utilities.modular.tests.base.ModuleCommandMapTest", methodName : "testHasCommandForEvent"});
	}
	,testExecutesCommand: function() {
		this._commandMap.mapEvent("sample event",robothaxe.utilities.modular.tests.support.TestCommand,robothaxe.utilities.modular.tests.support.TestModuleEvent);
		this._moduleEventDispatcher.dispatchEvent(new robothaxe.utilities.modular.tests.support.TestModuleEvent("sample event"));
		massive.munit.Assert.isTrue(robothaxe.utilities.modular.tests.support.TestCommand.isExecuted,{ fileName : "ModuleCommandMapTest.hx", lineNumber : 74, className : "robothaxe.utilities.modular.tests.base.ModuleCommandMapTest", methodName : "testExecutesCommand"});
	}
	,__class__: robothaxe.utilities.modular.tests.base.ModuleCommandMapTest
}
if(!robothaxe.utilities.modular.tests.mvcs) robothaxe.utilities.modular.tests.mvcs = {}
robothaxe.utilities.modular.tests.mvcs.ModuleActorTest = $hxClasses["robothaxe.utilities.modular.tests.mvcs.ModuleActorTest"] = function() {
};
robothaxe.utilities.modular.tests.mvcs.ModuleActorTest.__name__ = ["robothaxe","utilities","modular","tests","mvcs","ModuleActorTest"];
robothaxe.utilities.modular.tests.mvcs.ModuleActorTest.prototype = {
	_actor: null
	,_moduleEventDispatcher: null
	,beforeClass: function() {
	}
	,afterClass: function() {
	}
	,setup: function() {
		this._moduleEventDispatcher = new robothaxe.utilities.modular.base.ModuleEventDispatcher();
		this._actor = new robothaxe.utilities.modular.tests.support.TestActor();
		this._actor.moduleEventDispatcher = this._moduleEventDispatcher;
	}
	,tearDown: function() {
		this._moduleEventDispatcher = null;
		this._actor.moduleEventDispatcher = null;
		this._actor = null;
	}
	,testHasModuleEventDispatcher: function() {
		massive.munit.Assert.isNotNull(this._actor.moduleEventDispatcher,{ fileName : "ModuleActorTest.hx", lineNumber : 54, className : "robothaxe.utilities.modular.tests.mvcs.ModuleActorTest", methodName : "testHasModuleEventDispatcher"});
	}
	,testCanDispatchEvent: function(factory) {
		massive.munit.Assert.isNotNull(this._actor.moduleEventDispatcher,{ fileName : "ModuleActorTest.hx", lineNumber : 60, className : "robothaxe.utilities.modular.tests.mvcs.ModuleActorTest", methodName : "testCanDispatchEvent"});
		var handler = factory.createHandler(this,this.handleEventDispatch.$bind(this),300,{ fileName : "ModuleActorTest.hx", lineNumber : 61, className : "robothaxe.utilities.modular.tests.mvcs.ModuleActorTest", methodName : "testCanDispatchEvent"});
		this._moduleEventDispatcher.addEventListener("custom event",handler);
		this._actor.dispatchTestModuleEvent();
	}
	,handleEventDispatch: function(event) {
		massive.munit.Assert.areEqual("custom event",event.type,{ fileName : "ModuleActorTest.hx", lineNumber : 68, className : "robothaxe.utilities.modular.tests.mvcs.ModuleActorTest", methodName : "handleEventDispatch"});
	}
	,__class__: robothaxe.utilities.modular.tests.mvcs.ModuleActorTest
}
robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest = $hxClasses["robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest"] = function() {
};
robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest.__name__ = ["robothaxe","utilities","modular","tests","mvcs","ModuleCommandTest"];
robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest.prototype = {
	_moduleEventDispatcher: null
	,_command: null
	,beforeClass: function() {
	}
	,afterClass: function() {
	}
	,setup: function() {
		this._moduleEventDispatcher = new robothaxe.utilities.modular.base.ModuleEventDispatcher();
		this._command = new robothaxe.utilities.modular.tests.support.TestCommand();
		this._command.moduleEventDispatcher = this._moduleEventDispatcher;
	}
	,tearDown: function() {
		this._moduleEventDispatcher = null;
		this._command.moduleEventDispatcher = null;
		this._command = null;
	}
	,testHasModuleEventDispatcher: function() {
		massive.munit.Assert.isNotNull(this._command.moduleEventDispatcher,{ fileName : "ModuleCommandTest.hx", lineNumber : 54, className : "robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest", methodName : "testHasModuleEventDispatcher"});
	}
	,testCanDispatchEvent: function(factory) {
		massive.munit.Assert.isNotNull(this._command.moduleEventDispatcher,{ fileName : "ModuleCommandTest.hx", lineNumber : 60, className : "robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest", methodName : "testCanDispatchEvent"});
		var handler = factory.createHandler(this,this.handleEventDispatch.$bind(this),300,{ fileName : "ModuleCommandTest.hx", lineNumber : 61, className : "robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest", methodName : "testCanDispatchEvent"});
		this._moduleEventDispatcher.addEventListener("custom event",handler);
		this._command.dispatchTestModuleEvent();
	}
	,handleEventDispatch: function(event) {
		massive.munit.Assert.areEqual("custom event",event.type,{ fileName : "ModuleCommandTest.hx", lineNumber : 68, className : "robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest", methodName : "handleEventDispatch"});
	}
	,__class__: robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest
}
robothaxe.utilities.modular.tests.mvcs.ModuleContextTest = $hxClasses["robothaxe.utilities.modular.tests.mvcs.ModuleContextTest"] = function() {
};
robothaxe.utilities.modular.tests.mvcs.ModuleContextTest.__name__ = ["robothaxe","utilities","modular","tests","mvcs","ModuleContextTest"];
robothaxe.utilities.modular.tests.mvcs.ModuleContextTest.prototype = {
	_contextView: null
	,_sharedContext: null
	,_context: null
	,beforeClass: function() {
	}
	,afterClass: function() {
	}
	,setup: function() {
		this._contextView = new robothaxe.utilities.modular.tests.support.TestContextView();
		this._sharedContext = new robothaxe.utilities.modular.tests.support.TestSharedContext(this._contextView);
	}
	,tearDown: function() {
		this._contextView = null;
		this._sharedContext = null;
		this._context = null;
	}
	,testIsInitialized: function() {
		this._context = new robothaxe.utilities.modular.tests.support.TestContext(this._contextView,true,this._sharedContext.get_injector());
		massive.munit.Assert.isTrue(this._context.startupComplete,{ fileName : "ModuleContextTest.hx", lineNumber : 55, className : "robothaxe.utilities.modular.tests.mvcs.ModuleContextTest", methodName : "testIsInitialized"});
		massive.munit.Assert.isTrue(this._context.get_isInitialized(),{ fileName : "ModuleContextTest.hx", lineNumber : 56, className : "robothaxe.utilities.modular.tests.mvcs.ModuleContextTest", methodName : "testIsInitialized"});
	}
	,testSharedInjection: function() {
		this._context = new robothaxe.utilities.modular.tests.support.TestContext(this._contextView,true,this._sharedContext.get_injector());
		this._sharedContext.get_injector().mapSingleton(robothaxe.utilities.modular.tests.support.TestActor);
		massive.munit.Assert.isTrue(this._context.get_injector().hasMapping(robothaxe.utilities.modular.tests.support.TestActor),{ fileName : "ModuleContextTest.hx", lineNumber : 63, className : "robothaxe.utilities.modular.tests.mvcs.ModuleContextTest", methodName : "testSharedInjection"});
	}
	,__class__: robothaxe.utilities.modular.tests.mvcs.ModuleContextTest
}
robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest = $hxClasses["robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest"] = function() {
};
robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest.__name__ = ["robothaxe","utilities","modular","tests","mvcs","ModuleMediatorTest"];
robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest.prototype = {
	_moduleEventDispatcher: null
	,_mediator: null
	,beforeClass: function() {
	}
	,afterClass: function() {
	}
	,setup: function() {
		this._moduleEventDispatcher = new robothaxe.utilities.modular.base.ModuleEventDispatcher();
		this._mediator = new robothaxe.utilities.modular.tests.support.TestMediator();
		this._mediator.moduleEventDispatcher = this._moduleEventDispatcher;
	}
	,tearDown: function() {
		this._moduleEventDispatcher = null;
		this._mediator.moduleEventDispatcher = null;
		this._mediator = null;
	}
	,testHasModuleEventDispatcher: function() {
		massive.munit.Assert.isNotNull(this._mediator.moduleEventDispatcher,{ fileName : "ModuleMediatorTest.hx", lineNumber : 53, className : "robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest", methodName : "testHasModuleEventDispatcher"});
	}
	,testCanDispatchEvent: function(factory) {
		massive.munit.Assert.isNotNull(this._mediator.moduleEventDispatcher,{ fileName : "ModuleMediatorTest.hx", lineNumber : 59, className : "robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest", methodName : "testCanDispatchEvent"});
		var handler = factory.createHandler(this,this.handleEventDispatch.$bind(this),300,{ fileName : "ModuleMediatorTest.hx", lineNumber : 60, className : "robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest", methodName : "testCanDispatchEvent"});
		this._moduleEventDispatcher.addEventListener("custom event",handler);
		this._mediator.dispatchTestModuleEvent();
	}
	,handleEventDispatch: function(event) {
		massive.munit.Assert.areEqual("custom event",event.type,{ fileName : "ModuleMediatorTest.hx", lineNumber : 67, className : "robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest", methodName : "handleEventDispatch"});
	}
	,testCanReceiveEvent: function() {
		massive.munit.Assert.isNotNull(this._mediator.moduleEventDispatcher,{ fileName : "ModuleMediatorTest.hx", lineNumber : 73, className : "robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest", methodName : "testCanReceiveEvent"});
		this._moduleEventDispatcher.dispatchEvent(new robothaxe.utilities.modular.tests.support.TestModuleEvent("sample event"));
		massive.munit.Assert.isTrue(this._mediator.receivedEvent,{ fileName : "ModuleMediatorTest.hx", lineNumber : 75, className : "robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest", methodName : "testCanReceiveEvent"});
	}
	,__class__: robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest
}
if(!robothaxe.utilities.modular.tests.support) robothaxe.utilities.modular.tests.support = {}
robothaxe.utilities.modular.tests.support.TestActor = $hxClasses["robothaxe.utilities.modular.tests.support.TestActor"] = function() {
	robothaxe.utilities.modular.mvcs.ModuleActor.call(this);
};
robothaxe.utilities.modular.tests.support.TestActor.__name__ = ["robothaxe","utilities","modular","tests","support","TestActor"];
robothaxe.utilities.modular.tests.support.TestActor.__super__ = robothaxe.utilities.modular.mvcs.ModuleActor;
robothaxe.utilities.modular.tests.support.TestActor.prototype = $extend(robothaxe.utilities.modular.mvcs.ModuleActor.prototype,{
	dispatchTestModuleEvent: function() {
		this.dispatchToModules(new robothaxe.utilities.modular.tests.support.TestModuleEvent("custom event"));
	}
	,__class__: robothaxe.utilities.modular.tests.support.TestActor
});
robothaxe.utilities.modular.tests.support.TestCommand = $hxClasses["robothaxe.utilities.modular.tests.support.TestCommand"] = function() {
	robothaxe.utilities.modular.tests.support.TestCommand.isExecuted = false;
	robothaxe.utilities.modular.mvcs.ModuleCommand.call(this);
};
robothaxe.utilities.modular.tests.support.TestCommand.__name__ = ["robothaxe","utilities","modular","tests","support","TestCommand"];
robothaxe.utilities.modular.tests.support.TestCommand.isExecuted = null;
robothaxe.utilities.modular.tests.support.TestCommand.__super__ = robothaxe.utilities.modular.mvcs.ModuleCommand;
robothaxe.utilities.modular.tests.support.TestCommand.prototype = $extend(robothaxe.utilities.modular.mvcs.ModuleCommand.prototype,{
	execute: function() {
		robothaxe.utilities.modular.tests.support.TestCommand.isExecuted = true;
	}
	,dispatchTestModuleEvent: function() {
		this.dispatchToModules(new robothaxe.utilities.modular.tests.support.TestModuleEvent("custom event"));
	}
	,__class__: robothaxe.utilities.modular.tests.support.TestCommand
});
robothaxe.utilities.modular.tests.support.TestContext = $hxClasses["robothaxe.utilities.modular.tests.support.TestContext"] = function(contextView,autoStartup,parentInjector) {
	if(autoStartup == null) autoStartup = true;
	this.startupComplete = false;
	robothaxe.utilities.modular.mvcs.ModuleContext.call(this,contextView,autoStartup,parentInjector);
};
robothaxe.utilities.modular.tests.support.TestContext.__name__ = ["robothaxe","utilities","modular","tests","support","TestContext"];
robothaxe.utilities.modular.tests.support.TestContext.__super__ = robothaxe.utilities.modular.mvcs.ModuleContext;
robothaxe.utilities.modular.tests.support.TestContext.prototype = $extend(robothaxe.utilities.modular.mvcs.ModuleContext.prototype,{
	startupComplete: null
	,startup: function() {
		this.startupComplete = true;
		robothaxe.utilities.modular.mvcs.ModuleContext.prototype.startup.call(this);
	}
	,isInitialized: null
	,get_isInitialized: function() {
		var initialized = true;
		initialized = this.get_moduleCommandMap() != null && initialized;
		initialized = this.moduleDispatcher != null && initialized;
		return initialized;
	}
	,dispatchTestModuleEvent: function() {
		this.dispatchToModules(new robothaxe.utilities.modular.tests.support.TestModuleEvent("custom event"));
	}
	,__class__: robothaxe.utilities.modular.tests.support.TestContext
	,__properties__: $extend(robothaxe.utilities.modular.mvcs.ModuleContext.prototype.__properties__,{get_isInitialized:"get_isInitialized"})
});
robothaxe.utilities.modular.tests.support.TestContextView = $hxClasses["robothaxe.utilities.modular.tests.support.TestContextView"] = function() {
};
robothaxe.utilities.modular.tests.support.TestContextView.__name__ = ["robothaxe","utilities","modular","tests","support","TestContextView"];
robothaxe.utilities.modular.tests.support.TestContextView.__interfaces__ = [robothaxe.core.IViewContainer];
robothaxe.utilities.modular.tests.support.TestContextView.prototype = {
	viewAdded: null
	,viewRemoved: null
	,isAdded: function(view) {
		return true;
	}
	,__class__: robothaxe.utilities.modular.tests.support.TestContextView
}
robothaxe.utilities.modular.tests.support.TestMediator = $hxClasses["robothaxe.utilities.modular.tests.support.TestMediator"] = function() {
	this.receivedEvent = false;
	robothaxe.utilities.modular.mvcs.ModuleMediator.call(this);
};
robothaxe.utilities.modular.tests.support.TestMediator.__name__ = ["robothaxe","utilities","modular","tests","support","TestMediator"];
robothaxe.utilities.modular.tests.support.TestMediator.__super__ = robothaxe.utilities.modular.mvcs.ModuleMediator;
robothaxe.utilities.modular.tests.support.TestMediator.prototype = $extend(robothaxe.utilities.modular.mvcs.ModuleMediator.prototype,{
	receivedEvent: null
	,dispatchTestModuleEvent: function() {
		this.dispatchToModules(new robothaxe.utilities.modular.tests.support.TestModuleEvent("custom event"));
	}
	,onRegister: function() {
		this.addModuleListener("sample event",this.handleSampleEvent.$bind(this));
	}
	,handleSampleEvent: function(event) {
		this.receivedEvent = true;
	}
	,__class__: robothaxe.utilities.modular.tests.support.TestMediator
});
robothaxe.utilities.modular.tests.support.TestModuleEvent = $hxClasses["robothaxe.utilities.modular.tests.support.TestModuleEvent"] = function(inType) {
	robothaxe.event.Event.call(this,inType);
};
robothaxe.utilities.modular.tests.support.TestModuleEvent.__name__ = ["robothaxe","utilities","modular","tests","support","TestModuleEvent"];
robothaxe.utilities.modular.tests.support.TestModuleEvent.__super__ = robothaxe.event.Event;
robothaxe.utilities.modular.tests.support.TestModuleEvent.prototype = $extend(robothaxe.event.Event.prototype,{
	__class__: robothaxe.utilities.modular.tests.support.TestModuleEvent
});
robothaxe.utilities.modular.tests.support.TestSharedContext = $hxClasses["robothaxe.utilities.modular.tests.support.TestSharedContext"] = function(contextView,autoStartup) {
	if(autoStartup == null) autoStartup = true;
	robothaxe.mvcs.Context.call(this,contextView,autoStartup);
};
robothaxe.utilities.modular.tests.support.TestSharedContext.__name__ = ["robothaxe","utilities","modular","tests","support","TestSharedContext"];
robothaxe.utilities.modular.tests.support.TestSharedContext.__super__ = robothaxe.mvcs.Context;
robothaxe.utilities.modular.tests.support.TestSharedContext.prototype = $extend(robothaxe.mvcs.Context.prototype,{
	__class__: robothaxe.utilities.modular.tests.support.TestSharedContext
});
js.Boot.__res = {}
js.Boot.__init();
{
	var d = Date;
	d.now = function() {
		return new Date();
	};
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	};
	d.fromString = function(s) {
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		case 10:
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		case 19:
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		default:
			throw "Invalid date format : " + s;
		}
	};
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	};
	d.prototype.__class__ = $hxClasses["Date"] = d;
	d.__name__ = ["Date"];
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	$hxClasses["Math"] = Math;
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
}
{
	String.prototype.__class__ = $hxClasses["String"] = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = $hxClasses["Array"] = Array;
	Array.__name__ = ["Array"];
	var Int = $hxClasses["Int"] = { __name__ : ["Int"]};
	var Dynamic = $hxClasses["Dynamic"] = { __name__ : ["Dynamic"]};
	var Float = $hxClasses["Float"] = Number;
	Float.__name__ = ["Float"];
	var Bool = $hxClasses["Bool"] = Boolean;
	Bool.__ename__ = ["Bool"];
	var Class = $hxClasses["Class"] = { __name__ : ["Class"]};
	var Enum = { };
	var Void = $hxClasses["Void"] = { __ename__ : ["Void"]};
}
{
	if(typeof document != "undefined") js.Lib.document = document;
	if(typeof window != "undefined") {
		js.Lib.window = window;
		js.Lib.window.onerror = function(msg,url,line) {
			var f = js.Lib.onerror;
			if(f == null) return false;
			return f(msg,[url + ":" + line]);
		};
	}
}
js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
	try {
		return new ActiveXObject("Msxml2.XMLHTTP");
	} catch( e ) {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} catch( e1 ) {
			throw "Unable to create XMLHttpRequest object.";
		}
	}
}:(function($this) {
	var $r;
	throw "Unable to create XMLHttpRequest object.";
	return $r;
}(this));
ExampleTest.__meta__ = { fields : { beforeClass : { BeforeClass : null}, afterClass : { AfterClass : null}, setup : { Before : null}, tearDown : { After : null}, testExample : { Test : null}, testAsyncExample : { AsyncTest : null}, testExampleThatOnlyRunsWithDebugFlag : { TestDebug : null}}};
js.Lib.onerror = null;
massive.munit.Assert.assertionCount = 0;
massive.munit.TestClassHelper.META_TAG_BEFORE_CLASS = "BeforeClass";
massive.munit.TestClassHelper.META_TAG_AFTER_CLASS = "AfterClass";
massive.munit.TestClassHelper.META_TAG_BEFORE = "Before";
massive.munit.TestClassHelper.META_TAG_AFTER = "After";
massive.munit.TestClassHelper.META_TAG_TEST = "Test";
massive.munit.TestClassHelper.META_TAG_ASYNC_TEST = "AsyncTest";
massive.munit.TestClassHelper.META_TAG_IGNORE = "Ignore";
massive.munit.TestClassHelper.META_PARAM_ASYNC_TEST = "Async";
massive.munit.TestClassHelper.META_TAG_TEST_DEBUG = "TestDebug";
massive.munit.TestClassHelper.META_TAGS = ["BeforeClass","AfterClass","Before","After","Test","AsyncTest","TestDebug"];
massive.munit.async.AsyncDelegate.DEFAULT_TIMEOUT = 400;
massive.munit.client.HTTPClient.DEFAULT_SERVER_URL = "http://localhost:2000";
massive.munit.client.HTTPClient.DEFAULT_ID = "HTTPClient";
massive.munit.client.HTTPClient.CLIENT_HEADER_KEY = "munit-clientId";
massive.munit.client.HTTPClient.PLATFORM_HEADER_KEY = "munit-platformId";
massive.munit.client.HTTPClient.queue = [];
massive.munit.client.HTTPClient.responsePending = false;
massive.munit.client.JUnitReportClient.DEFAULT_ID = "junit";
massive.munit.client.PrintClientBase.DEFAULT_ID = "simple";
massive.munit.client.PrintClient.DEFAULT_ID = "print";
massive.munit.client.RichPrintClient.DEFAULT_ID = "RichPrintClient";
massive.munit.util.Timer.arr = new Array();
robothaxe.base.ContextError.E_COMMANDMAP_NOIMPL = "Command Class does not implement an execute() method";
robothaxe.base.ContextError.E_COMMANDMAP_OVR = "Cannot overwrite map";
robothaxe.base.ContextError.E_MEDIATORMAP_NOIMPL = "Mediator Class does not implement IMediator";
robothaxe.base.ContextError.E_MEDIATORMAP_OVR = "Mediator Class has already been mapped to a View Class in this context";
robothaxe.base.ContextError.E_EVENTMAP_NOSNOOPING = "Listening to the context eventDispatcher is not enabled for this EventMap";
robothaxe.base.ContextError.E_CONTEXT_INJECTOR = "The ContextBase does not specify a concrete IInjector. Please override the injector getter in your concrete or abstract Context.";
robothaxe.base.ContextError.E_CONTEXT_REFLECTOR = "The ContextBase does not specify a concrete IReflector. Please override the reflector getter in your concrete or abstract Context.";
robothaxe.event.Event.ACTIVATE = "activate";
robothaxe.event.Event.ADDED = "added";
robothaxe.event.Event.ADDED_TO_STAGE = "addedToStage";
robothaxe.event.Event.CANCEL = "cancel";
robothaxe.event.Event.CHANGE = "change";
robothaxe.event.Event.CLOSE = "close";
robothaxe.event.Event.COMPLETE = "complete";
robothaxe.event.Event.CONNECT = "connect";
robothaxe.event.Event.DEACTIVATE = "deactivate";
robothaxe.event.Event.ENTER_FRAME = "enterFrame";
robothaxe.event.Event.ID3 = "id3";
robothaxe.event.Event.INIT = "init";
robothaxe.event.Event.MOUSE_LEAVE = "mouseLeave";
robothaxe.event.Event.OPEN = "open";
robothaxe.event.Event.REMOVED = "removed";
robothaxe.event.Event.REMOVED_FROM_STAGE = "removedFromStage";
robothaxe.event.Event.RENDER = "render";
robothaxe.event.Event.RESIZE = "resize";
robothaxe.event.Event.SCROLL = "scroll";
robothaxe.event.Event.SELECT = "select";
robothaxe.event.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
robothaxe.event.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
robothaxe.event.Event.TAB_INDEX_CHANGE = "tabIndexChange";
robothaxe.event.Event.UNLOAD = "unload";
robothaxe.base.ContextEvent.STARTUP = "startup";
robothaxe.base.ContextEvent.STARTUP_COMPLETE = "startupComplete";
robothaxe.base.ContextEvent.SHUTDOWN = "shutdown";
robothaxe.base.ContextEvent.SHUTDOWN_COMPLETE = "shutdownComplete";
robothaxe.event.EventDispatcher.mIDBase = 0;
robothaxe.event._EventDispatcher.Listener.sIDs = 1;
robothaxe.event.EventPhase.CAPTURING_PHASE = 0;
robothaxe.event.EventPhase.AT_TARGET = 1;
robothaxe.event.EventPhase.BUBBLING_PHASE = 2;
robothaxe.mvcs.Actor.__meta__ = { fields : { eventDispatcher : { inject : null}}};
robothaxe.mvcs.Command.__meta__ = { fields : { contextView : { inject : null}, commandMap : { inject : null}, eventDispatcher : { inject : null}, injector : { inject : null}, mediatorMap : { inject : null}}};
robothaxe.mvcs.Mediator.__meta__ = { fields : { eventDispatcher : { inject : null}, contextView : { inject : null}, mediatorMap : { inject : null}}};
robothaxe.utilities.modular.mvcs.ModuleActor.__meta__ = { fields : { moduleEventDispatcher : { inject : null}}};
robothaxe.utilities.modular.mvcs.ModuleCommand.__meta__ = { fields : { moduleEventDispatcher : { inject : null}, moduleCommandMap : { inject : null}}};
robothaxe.utilities.modular.mvcs.ModuleMediator.__meta__ = { fields : { moduleEventDispatcher : { inject : null}, moduleCommandMap : { inject : null}}};
robothaxe.utilities.modular.tests.base.ModuleCommandMapTest.__meta__ = { fields : { beforeClass : { BeforeClass : null}, afterClass : { AfterClass : null}, setup : { Before : null}, tearDown : { After : null}, testHasCommandForEvent : { Test : null}, testExecutesCommand : { Test : null}}};
robothaxe.utilities.modular.tests.mvcs.ModuleActorTest.__meta__ = { fields : { beforeClass : { BeforeClass : null}, afterClass : { AfterClass : null}, setup : { Before : null}, tearDown : { After : null}, testHasModuleEventDispatcher : { Test : null}, testCanDispatchEvent : { AsyncTest : null}}};
robothaxe.utilities.modular.tests.mvcs.ModuleCommandTest.__meta__ = { fields : { beforeClass : { BeforeClass : null}, afterClass : { AfterClass : null}, setup : { Before : null}, tearDown : { After : null}, testHasModuleEventDispatcher : { Test : null}, testCanDispatchEvent : { AsyncTest : null}}};
robothaxe.utilities.modular.tests.mvcs.ModuleContextTest.__meta__ = { fields : { beforeClass : { BeforeClass : null}, afterClass : { AfterClass : null}, setup : { Before : null}, tearDown : { After : null}, testIsInitialized : { Test : null}, testSharedInjection : { Test : null}}};
robothaxe.utilities.modular.tests.mvcs.ModuleMediatorTest.__meta__ = { fields : { beforeClass : { BeforeClass : null}, afterClass : { AfterClass : null}, setup : { Before : null}, tearDown : { After : null}, testHasModuleEventDispatcher : { Test : null}, testCanDispatchEvent : { AsyncTest : null}, testCanReceiveEvent : { Test : null}}};
robothaxe.utilities.modular.tests.support.TestModuleEvent.CUSTOM = "custom event";
robothaxe.utilities.modular.tests.support.TestModuleEvent.SAMPLE = "sample event";
TestMain.main()