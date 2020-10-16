module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1157":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "1fb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "25c8":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */

//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("1157"), __webpack_require__("4309") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {
( function() {
var cachedScrollbarWidth,
	max = Math.max,
	abs = Math.abs,
	rhorizontal = /left|center|right/,
	rvertical = /top|center|bottom/,
	roffset = /[\+\-]\d+(\.[\d]+)?%?/,
	rposition = /^\w+/,
	rpercent = /%$/,
	_position = $.fn.position;

function getOffsets( offsets, width, height ) {
	return [
		parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
		parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
	];
}

function parseCss( element, property ) {
	return parseInt( $.css( element, property ), 10 ) || 0;
}

function getDimensions( elem ) {
	var raw = elem[ 0 ];
	if ( raw.nodeType === 9 ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: 0, left: 0 }
		};
	}
	if ( $.isWindow( raw ) ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
		};
	}
	if ( raw.preventDefault ) {
		return {
			width: 0,
			height: 0,
			offset: { top: raw.pageY, left: raw.pageX }
		};
	}
	return {
		width: elem.outerWidth(),
		height: elem.outerHeight(),
		offset: elem.offset()
	};
}

$.position = {
	scrollbarWidth: function() {
		if ( cachedScrollbarWidth !== undefined ) {
			return cachedScrollbarWidth;
		}
		var w1, w2,
			div = $( "<div " +
				"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" +
				"<div style='height:100px;width:auto;'></div></div>" ),
			innerDiv = div.children()[ 0 ];

		$( "body" ).append( div );
		w1 = innerDiv.offsetWidth;
		div.css( "overflow", "scroll" );

		w2 = innerDiv.offsetWidth;

		if ( w1 === w2 ) {
			w2 = div[ 0 ].clientWidth;
		}

		div.remove();

		return ( cachedScrollbarWidth = w1 - w2 );
	},
	getScrollInfo: function( within ) {
		var overflowX = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-x" ),
			overflowY = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-y" ),
			hasOverflowX = overflowX === "scroll" ||
				( overflowX === "auto" && within.width < within.element[ 0 ].scrollWidth ),
			hasOverflowY = overflowY === "scroll" ||
				( overflowY === "auto" && within.height < within.element[ 0 ].scrollHeight );
		return {
			width: hasOverflowY ? $.position.scrollbarWidth() : 0,
			height: hasOverflowX ? $.position.scrollbarWidth() : 0
		};
	},
	getWithinInfo: function( element ) {
		var withinElement = $( element || window ),
			isWindow = $.isWindow( withinElement[ 0 ] ),
			isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9,
			hasOffset = !isWindow && !isDocument;
		return {
			element: withinElement,
			isWindow: isWindow,
			isDocument: isDocument,
			offset: hasOffset ? $( element ).offset() : { left: 0, top: 0 },
			scrollLeft: withinElement.scrollLeft(),
			scrollTop: withinElement.scrollTop(),
			width: withinElement.outerWidth(),
			height: withinElement.outerHeight()
		};
	}
};

$.fn.position = function( options ) {
	if ( !options || !options.of ) {
		return _position.apply( this, arguments );
	}

	// Make a copy, we don't want to modify arguments
	options = $.extend( {}, options );

	var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
		target = $( options.of ),
		within = $.position.getWithinInfo( options.within ),
		scrollInfo = $.position.getScrollInfo( within ),
		collision = ( options.collision || "flip" ).split( " " ),
		offsets = {};

	dimensions = getDimensions( target );
	if ( target[ 0 ].preventDefault ) {

		// Force left top to allow flipping
		options.at = "left top";
	}
	targetWidth = dimensions.width;
	targetHeight = dimensions.height;
	targetOffset = dimensions.offset;

	// Clone to reuse original targetOffset later
	basePosition = $.extend( {}, targetOffset );

	// Force my and at to have valid horizontal and vertical positions
	// if a value is missing or invalid, it will be converted to center
	$.each( [ "my", "at" ], function() {
		var pos = ( options[ this ] || "" ).split( " " ),
			horizontalOffset,
			verticalOffset;

		if ( pos.length === 1 ) {
			pos = rhorizontal.test( pos[ 0 ] ) ?
				pos.concat( [ "center" ] ) :
				rvertical.test( pos[ 0 ] ) ?
					[ "center" ].concat( pos ) :
					[ "center", "center" ];
		}
		pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
		pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

		// Calculate offsets
		horizontalOffset = roffset.exec( pos[ 0 ] );
		verticalOffset = roffset.exec( pos[ 1 ] );
		offsets[ this ] = [
			horizontalOffset ? horizontalOffset[ 0 ] : 0,
			verticalOffset ? verticalOffset[ 0 ] : 0
		];

		// Reduce to just the positions without the offsets
		options[ this ] = [
			rposition.exec( pos[ 0 ] )[ 0 ],
			rposition.exec( pos[ 1 ] )[ 0 ]
		];
	} );

	// Normalize collision option
	if ( collision.length === 1 ) {
		collision[ 1 ] = collision[ 0 ];
	}

	if ( options.at[ 0 ] === "right" ) {
		basePosition.left += targetWidth;
	} else if ( options.at[ 0 ] === "center" ) {
		basePosition.left += targetWidth / 2;
	}

	if ( options.at[ 1 ] === "bottom" ) {
		basePosition.top += targetHeight;
	} else if ( options.at[ 1 ] === "center" ) {
		basePosition.top += targetHeight / 2;
	}

	atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
	basePosition.left += atOffset[ 0 ];
	basePosition.top += atOffset[ 1 ];

	return this.each( function() {
		var collisionPosition, using,
			elem = $( this ),
			elemWidth = elem.outerWidth(),
			elemHeight = elem.outerHeight(),
			marginLeft = parseCss( this, "marginLeft" ),
			marginTop = parseCss( this, "marginTop" ),
			collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) +
				scrollInfo.width,
			collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) +
				scrollInfo.height,
			position = $.extend( {}, basePosition ),
			myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

		if ( options.my[ 0 ] === "right" ) {
			position.left -= elemWidth;
		} else if ( options.my[ 0 ] === "center" ) {
			position.left -= elemWidth / 2;
		}

		if ( options.my[ 1 ] === "bottom" ) {
			position.top -= elemHeight;
		} else if ( options.my[ 1 ] === "center" ) {
			position.top -= elemHeight / 2;
		}

		position.left += myOffset[ 0 ];
		position.top += myOffset[ 1 ];

		collisionPosition = {
			marginLeft: marginLeft,
			marginTop: marginTop
		};

		$.each( [ "left", "top" ], function( i, dir ) {
			if ( $.ui.position[ collision[ i ] ] ) {
				$.ui.position[ collision[ i ] ][ dir ]( position, {
					targetWidth: targetWidth,
					targetHeight: targetHeight,
					elemWidth: elemWidth,
					elemHeight: elemHeight,
					collisionPosition: collisionPosition,
					collisionWidth: collisionWidth,
					collisionHeight: collisionHeight,
					offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
					my: options.my,
					at: options.at,
					within: within,
					elem: elem
				} );
			}
		} );

		if ( options.using ) {

			// Adds feedback as second argument to using callback, if present
			using = function( props ) {
				var left = targetOffset.left - position.left,
					right = left + targetWidth - elemWidth,
					top = targetOffset.top - position.top,
					bottom = top + targetHeight - elemHeight,
					feedback = {
						target: {
							element: target,
							left: targetOffset.left,
							top: targetOffset.top,
							width: targetWidth,
							height: targetHeight
						},
						element: {
							element: elem,
							left: position.left,
							top: position.top,
							width: elemWidth,
							height: elemHeight
						},
						horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
						vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
					};
				if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
					feedback.horizontal = "center";
				}
				if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
					feedback.vertical = "middle";
				}
				if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
					feedback.important = "horizontal";
				} else {
					feedback.important = "vertical";
				}
				options.using.call( this, props, feedback );
			};
		}

		elem.offset( $.extend( position, { using: using } ) );
	} );
};

$.ui.position = {
	fit: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
				outerWidth = within.width,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = withinOffset - collisionPosLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
				newOverRight;

			// Element is wider than within
			if ( data.collisionWidth > outerWidth ) {

				// Element is initially over the left side of within
				if ( overLeft > 0 && overRight <= 0 ) {
					newOverRight = position.left + overLeft + data.collisionWidth - outerWidth -
						withinOffset;
					position.left += overLeft - newOverRight;

				// Element is initially over right side of within
				} else if ( overRight > 0 && overLeft <= 0 ) {
					position.left = withinOffset;

				// Element is initially over both left and right sides of within
				} else {
					if ( overLeft > overRight ) {
						position.left = withinOffset + outerWidth - data.collisionWidth;
					} else {
						position.left = withinOffset;
					}
				}

			// Too far left -> align with left edge
			} else if ( overLeft > 0 ) {
				position.left += overLeft;

			// Too far right -> align with right edge
			} else if ( overRight > 0 ) {
				position.left -= overRight;

			// Adjust based on position and margin
			} else {
				position.left = max( position.left - collisionPosLeft, position.left );
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
				outerHeight = data.within.height,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = withinOffset - collisionPosTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
				newOverBottom;

			// Element is taller than within
			if ( data.collisionHeight > outerHeight ) {

				// Element is initially over the top of within
				if ( overTop > 0 && overBottom <= 0 ) {
					newOverBottom = position.top + overTop + data.collisionHeight - outerHeight -
						withinOffset;
					position.top += overTop - newOverBottom;

				// Element is initially over bottom of within
				} else if ( overBottom > 0 && overTop <= 0 ) {
					position.top = withinOffset;

				// Element is initially over both top and bottom of within
				} else {
					if ( overTop > overBottom ) {
						position.top = withinOffset + outerHeight - data.collisionHeight;
					} else {
						position.top = withinOffset;
					}
				}

			// Too far up -> align with top
			} else if ( overTop > 0 ) {
				position.top += overTop;

			// Too far down -> align with bottom edge
			} else if ( overBottom > 0 ) {
				position.top -= overBottom;

			// Adjust based on position and margin
			} else {
				position.top = max( position.top - collisionPosTop, position.top );
			}
		}
	},
	flip: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.left + within.scrollLeft,
				outerWidth = within.width,
				offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = collisionPosLeft - offsetLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
				myOffset = data.my[ 0 ] === "left" ?
					-data.elemWidth :
					data.my[ 0 ] === "right" ?
						data.elemWidth :
						0,
				atOffset = data.at[ 0 ] === "left" ?
					data.targetWidth :
					data.at[ 0 ] === "right" ?
						-data.targetWidth :
						0,
				offset = -2 * data.offset[ 0 ],
				newOverRight,
				newOverLeft;

			if ( overLeft < 0 ) {
				newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth -
					outerWidth - withinOffset;
				if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
					position.left += myOffset + atOffset + offset;
				}
			} else if ( overRight > 0 ) {
				newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset +
					atOffset + offset - offsetLeft;
				if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
					position.left += myOffset + atOffset + offset;
				}
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.top + within.scrollTop,
				outerHeight = within.height,
				offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = collisionPosTop - offsetTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
				top = data.my[ 1 ] === "top",
				myOffset = top ?
					-data.elemHeight :
					data.my[ 1 ] === "bottom" ?
						data.elemHeight :
						0,
				atOffset = data.at[ 1 ] === "top" ?
					data.targetHeight :
					data.at[ 1 ] === "bottom" ?
						-data.targetHeight :
						0,
				offset = -2 * data.offset[ 1 ],
				newOverTop,
				newOverBottom;
			if ( overTop < 0 ) {
				newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight -
					outerHeight - withinOffset;
				if ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {
					position.top += myOffset + atOffset + offset;
				}
			} else if ( overBottom > 0 ) {
				newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset +
					offset - offsetTop;
				if ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {
					position.top += myOffset + atOffset + offset;
				}
			}
		}
	},
	flipfit: {
		left: function() {
			$.ui.position.flip.left.apply( this, arguments );
			$.ui.position.fit.left.apply( this, arguments );
		},
		top: function() {
			$.ui.position.flip.top.apply( this, arguments );
			$.ui.position.fit.top.apply( this, arguments );
		}
	}
};

} )();

return $.ui.position;

} ) );


/***/ }),

/***/ "2890":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Base-N/Base-X encoding/decoding functions.
 *
 * Original implementation from base-x:
 * https://github.com/cryptocoinjs/base-x
 *
 * Which is MIT licensed:
 *
 * The MIT License (MIT)
 *
 * Copyright base-x contributors (c) 2016
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
var api = {};
module.exports = api;

// baseN alphabet indexes
var _reverseAlphabets = {};

/**
 * BaseN-encodes a Uint8Array using the given alphabet.
 *
 * @param input the Uint8Array to encode.
 * @param maxline the maximum number of encoded characters per line to use,
 *          defaults to none.
 *
 * @return the baseN-encoded output string.
 */
api.encode = function(input, alphabet, maxline) {
  if(typeof alphabet !== 'string') {
    throw new TypeError('"alphabet" must be a string.');
  }
  if(maxline !== undefined && typeof maxline !== 'number') {
    throw new TypeError('"maxline" must be a number.');
  }

  var output = '';

  if(!(input instanceof Uint8Array)) {
    // assume forge byte buffer
    output = _encodeWithByteBuffer(input, alphabet);
  } else {
    var i = 0;
    var base = alphabet.length;
    var first = alphabet.charAt(0);
    var digits = [0];
    for(i = 0; i < input.length; ++i) {
      for(var j = 0, carry = input[i]; j < digits.length; ++j) {
        carry += digits[j] << 8;
        digits[j] = carry % base;
        carry = (carry / base) | 0;
      }

      while(carry > 0) {
        digits.push(carry % base);
        carry = (carry / base) | 0;
      }
    }

    // deal with leading zeros
    for(i = 0; input[i] === 0 && i < input.length - 1; ++i) {
      output += first;
    }
    // convert digits to a string
    for(i = digits.length - 1; i >= 0; --i) {
      output += alphabet[digits[i]];
    }
  }

  if(maxline) {
    var regex = new RegExp('.{1,' + maxline + '}', 'g');
    output = output.match(regex).join('\r\n');
  }

  return output;
};

/**
 * Decodes a baseN-encoded (using the given alphabet) string to a
 * Uint8Array.
 *
 * @param input the baseN-encoded input string.
 *
 * @return the Uint8Array.
 */
api.decode = function(input, alphabet) {
  if(typeof input !== 'string') {
    throw new TypeError('"input" must be a string.');
  }
  if(typeof alphabet !== 'string') {
    throw new TypeError('"alphabet" must be a string.');
  }

  var table = _reverseAlphabets[alphabet];
  if(!table) {
    // compute reverse alphabet
    table = _reverseAlphabets[alphabet] = [];
    for(var i = 0; i < alphabet.length; ++i) {
      table[alphabet.charCodeAt(i)] = i;
    }
  }

  // remove whitespace characters
  input = input.replace(/\s/g, '');

  var base = alphabet.length;
  var first = alphabet.charAt(0);
  var bytes = [0];
  for(var i = 0; i < input.length; i++) {
    var value = table[input.charCodeAt(i)];
    if(value === undefined) {
      return;
    }

    for(var j = 0, carry = value; j < bytes.length; ++j) {
      carry += bytes[j] * base;
      bytes[j] = carry & 0xff;
      carry >>= 8;
    }

    while(carry > 0) {
      bytes.push(carry & 0xff);
      carry >>= 8;
    }
  }

  // deal with leading zeros
  for(var k = 0; input[k] === first && k < input.length - 1; ++k) {
    bytes.push(0);
  }

  if(typeof Buffer !== 'undefined') {
    return Buffer.from(bytes.reverse());
  }

  return new Uint8Array(bytes.reverse());
};

function _encodeWithByteBuffer(input, alphabet) {
  var i = 0;
  var base = alphabet.length;
  var first = alphabet.charAt(0);
  var digits = [0];
  for(i = 0; i < input.length(); ++i) {
    for(var j = 0, carry = input.at(i); j < digits.length; ++j) {
      carry += digits[j] << 8;
      digits[j] = carry % base;
      carry = (carry / base) | 0;
    }

    while(carry > 0) {
      digits.push(carry % base);
      carry = (carry / base) | 0;
    }
  }

  var output = '';

  // deal with leading zeros
  for(i = 0; input.at(i) === 0 && i < input.length() - 1; ++i) {
    output += first;
  }
  // convert digits to a string
  for(i = digits.length - 1; i >= 0; --i) {
    output += alphabet[digits[i]];
  }

  return output;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer))

/***/ }),

/***/ "2e48":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Uses CommonJS, AMD or browser globals to create a jQuery plugin.
// from https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("1157")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(function ($) {

	/************************************************************************
	* RDForm class
	************************************************************************/
	function RDForm( elem, settings ) {
		this.$elem = $(elem);
		this.settings = settings;
		this._ID_ = "rdform";
		this.template = null;
		this.data = settings.data;
		this.Hooks = null;
		this.translations = null;

		//add an alert area before the form
		this.alertArea = $('<div class="row '+this._ID_+'-alert"></div>');
		this.$elem.before( this.alertArea );

		this.MODEL = new Array();
		this.RESULT = new Object();

		return this;
	}

	RDForm.prototype = {
		prepare: function() {
			var _this = this;

			// loading language file
			if ( _this.settings.lang && _this.settings.lang != "en.js" ) {
				$.ajax({ url: _this.settings.lang, dataType: "script", async: false,
					success: function() {
						_this.translations = rdform_translations;
						if ( _this.settings.debug ) {
							console.log( "Loaded language file " + _this.settings.lang );
						}
					},
					error: function( jqxhr, type, e ) {
						_this.showAlert( "error", 'Error on loading language file "'+ _this.settings.lang +'": '+e );
					}
				});
			}

			//loading hooks file
			if ( _this.settings.hooks ) {
				$.ajax({ url: _this.settings.hooks, dataType: "script", async: false,
					success: function() {
						try {
							_this.Hooks = new RDForm_Hooks( _this );
							if ( _this.settings.debug ) {
								console.log( "Loaded hooks file " + _this.settings.hooks );
							}
						} catch (e) {
							_this.showAlert( "error", 'Cannot init hooks file "'+ _this.settings.hooks +'": '+e );
						}
					},
					error: function( jqxhr, type, e ) {
						_this.showAlert( "error", 'Cannot load hooks file "'+ _this.settings.hooks +'": '+e );
					}
				});
			}

			// loading jsonld
			if ( typeof jsonld === 'undefined' ) {
				$.ajax({ url: "js/jsonld.js", dataType: "script", async: false,
					error: function( jqxhr, type, e ) {
						_this.showAlert( "error", 'Cannot load JSON-LD plugin "js/jsonld.js": '+e );
					}
				});
			}
		},

		init: function() {
			var _this = this;

			if ( _this.settings.debug ) {
				console.log("RDForm settings = ", _this.settings);
			}

			if ( !_this.settings.template ) {
				_this.showAlert( "warning", 'No template given');
				return this;
			}

			// parsing template, uri generation to model
			_this.parseTemplate(function(result) {
				if (!result) return;
				if ( _this.settings.debug ) {
					console.log( "RDForm Model = ", _this.MODEL );
				}
				if ( _this.MODEL.length > 0 ) {
					_this.$elem.append( _this.createHTMLForm() );
					_this.$elem.attr("autocomplete", "off");

					_this.initFormHandler( _this.$elem );

					var sbm_text = "create";

					// maybe add existing data
					if ( _this.data ) {
						sbm_text = "update";
						if ( _this.settings.debug ) {
							console.log( "RDForm Insert Data = ", _this.data );
						}
						_this.addExistingData();
					}

					// append submit buttons
					var abortBtn = $('<button type="reset" class="btn btn-default '+_this._ID_+'-abort">'+ _this.l("reset") +'</button> ');
					var submitBtn = $('<button type="submit" class="btn btn-lg btn-primary">'+ _this.l(sbm_text) +'</button>');
					var submitWrapper = $('<div class="form-group '+_this._ID_+'-submit-btn-group"><div class="col-xs-12 text-right"></div></div>');
					submitWrapper.find("div").append( abortBtn );
					submitWrapper.find("div").append( submitBtn );
					_this.$elem.append( submitWrapper );

					// abort event listener
					abortBtn.click(function() {
						_this.abort();

					})
				}

			});

			return this;
		},

		/**
		  *	Parse SHACL template and create the MODEL array
		  *
		  * @param {Function} Callback
		  * @returns {Function} Callback function with boolean attribute
		  */
		parseTemplate: function (callback) {
			var _this = this;

			var attr_template = _this.settings.template;
			var template_expanded = null;

			_this.MODEL[0] = { "@context" : {} };

			// may add our prefixes to template context
			if (attr_template['@context']) {
				attr_template['@context'] = Object.assign({}, _this.settings.prefixes, attr_template['@context']);
			}

			// set baseuri
			if (_this.settings.base) {
				_this.setBaseUri(_this.settings.base);
			}
			// may overwrite baseuri from shape temaplte
			if (attr_template['@context'] && attr_template['@context']["@base"]) {
				_this.setBaseUri(attr_template['@context']["@base"]);
			}

			// set default prefixes in this model
			Object.keys(_this.settings.prefixes).forEach(function (prefix) {
				_this.MODEL[0]["@context"][ prefix ] = { "@id" : _this.settings.prefixes[prefix] };
			});
			// may add prefixes from shacl template
			if (attr_template['@context']) {
				Object.keys(attr_template['@context']).forEach(function (prefix) {
					if (prefix.charAt(0) == "@") {
						_this.MODEL[0]["@context"][ prefix ] = attr_template['@context'][prefix];
					} else {
						_this.MODEL[0]["@context"][ prefix ] = { "@id" : attr_template['@context'][prefix] };
					}
				});
			}

			jsonld.expand(attr_template, function(err, expanded) {
				if ( err != null ) {
					_this.showAlert( "error", "Error on parse given SHACL shape: " + JSON.stringify(err, null, ' ') );
					return callback(false);
				}
				if ( _this.settings.debug ) {
					console.log( "SHACL shape:", expanded );
				}
				template_expanded = expanded;

				// get node shapes
				var root_node_shapes = get_root_node_shapes(expanded);

				if (!root_node_shapes || root_node_shapes.length == 0) {
					_this.showAlert( "warning", "No root shape of type \"sh:NodeShape\" found.");
					return callback(false);
				}

				// @TODO decide which node-shape we take
				if (root_node_shapes.length > 1) {
					_this.showAlert( "warning", "Multiple root shapes found.");
					console.log('Mutliple root shapes found, TODO: try to findout root shape');
					return callback(false);
				}

				var curClass = parse_node_shape(root_node_shapes[0]);
				if (!curClass) {
					return callback(false);
				}

				$.extend( true, _this.MODEL[0], curClass );

				callback(true);
			});

			/**
			 * Parse SHACL root template of type NodeShape
			 * @param {Object} shape
			 * @returns {Object|Boolean}
			 */
			function parse_node_shape(shape) {
				var curClass = new Object({ '@rdform' : {} });
				var properties = new Object();

				if (!shape["@id"]) {
					_this.showAlert( "error", "Shape does not has an @id." );
					return false;
				}

				// @TODO support other targets, eg. target IRI see https://www.w3.org/TR/shacl/#targetNode
				// if (!get_value_from_object(shape, 'sh:targetClass')) {
				// 	_this.showAlert( "error", "Shape does not has a sh:targetClass" );
				// 	return callback(false);
				// }

				curClass['@id'] = shape["@id"];
				curClass['@type'] = get_value_from_object(shape, 'sh:targetClass'); // TODO could be target IRI also!...
				// _this.validatePrefix( curClass['@type'] );

				curClass["@rdform"]["value"] = curClass['@type'];

				var rdformResource = get_value_from_object(shape, 'rdform:resource');
				if (rdformResource) {
					curClass["@id"] = rdformResource;
				}

				// class legend is sh:name, rdfs:label or @id
				var legend = get_value_from_object(shape, 'sh:name', 'rdfs:label')
				curClass['@rdform']['legend'] = legend
					? legend
					: _this.getUriPrefix(shape["@id"]);

				// walk the properties
				if (shape[_this.replaceStrPrefix('sh:property')]) {
					shape[_this.replaceStrPrefix('sh:property')].forEach(function(property) {
						var curProperty = parse_property_shape(property);
						if (curProperty) {
							properties[curProperty["@id"]] = [curProperty];
						}
					});
				}

				$.extend( true, curClass, properties );
				return curClass;
			}

			/**
			 * Parse SHACL shape of type PropertyShape
			 * @param {Object} property
			 * @returns {Object|Boolean}
			 */
			function parse_property_shape(_property) {
				var curProperty = { '@rdform' : {} };
				var property = $.extend( {}, property, _property );
				var path = null;

				// may use PropertyShape from template
				if (property["@id"]) {
					var property_shape = template_expanded.filter(function(shape) {
						return shape["@id"] && _this.matchUris(shape["@id"], property["@id"]);
					});
					if (property_shape.length == 0) {
						_this.showAlert( "warning", "Shape for property \"" + property["@id"] + "\" not found" );
						return false;
					}
					else if (property_shape.length > 1) {
						_this.showAlert( "warning", "Multiple shapes for property \"" + property["@id"] + "\" found" );
						return false;
					}
					else {
						$.extend( true, property, property_shape[0] );
					}
				}

				path = get_value_from_object(property, 'sh:path');
				if (!path) {
					_this.showAlert( "warning", "Property doest not has a sh:path. We ignore it" );
					return false;
				}

				curProperty["@id"] = path;
				curProperty["@rdform"]['name'] = path;

				// property is sub-form
				if (get_value_from_object(property, 'sh:node')) {
					var property_node = get_value_from_object(property, 'sh:node');
					var _property_nodeShape = template_expanded.filter(function(shape) {
						return shape["@id"] && _this.matchUris(shape["@id"], property_node);
					});
					// TODO what todo if nothing found/multiple ??? may use property as external?!
					if (_property_nodeShape.length == 0) {
						_this.showAlert( "warning", "Shape for property not found" );
						return false;
					}
					else if (_property_nodeShape.length > 1) {
						_this.showAlert( "warning", "Multiple shapes for property found" );
						return false;
					}
					else {
						curProperty["@rdform"]['type'] = 'resource';
						var property_nodeShape = parse_node_shape(_property_nodeShape[0]);
						$.extend( true, curProperty, property_nodeShape );
					}
				} else {
					// property is external IRI
					if (get_value_from_object(property, 'sh:nodeKind')
						&& _this.matchUris(get_value_from_object(property, 'sh:nodeKind') , 'sh:IRI')
					) {
						curProperty["@id"] = path;
						curProperty["@rdform"]['external'] = true;
						curProperty["@rdform"]['type'] = 'resource';
					} else {
						curProperty["@rdform"]['type'] = 'literal';
					}
				}

				var minCount = get_value_from_object(property, 'sh:minCount');
				var maxCount = get_value_from_object(property, 'sh:maxCount');
				if (minCount !== undefined && maxCount !== undefined) {
					if (minCount > maxCount) {
						_this.showAlert( "warning", "sh:minCount is bigger than sh:maxCount in shape property " + property["@id"] );
						minCount = undefined;
						maxCount = undefined;
					}
				}
				if (minCount !== undefined) {
					if (minCount === 0) {
						curProperty["@rdform"]["additional"] = true;
					}
					else if (minCount > 0) {
						curProperty["@rdform"]["required"] = true;
					}
					// @TODO implement real min count -> count properties
				}
				var maxCount = get_value_from_object(property, 'sh:maxCount');
				if (maxCount !== undefined) {
					if (maxCount === 0) {
						curProperty["@rdform"]["hidden"] = true;
					}
					else if (maxCount > 1) {
						curProperty["@rdform"]["multiple"] = true;
						curProperty["@rdform"]["index"] = 1;
					}
					// @TODO implement real max count -> count properties
				}

				// property label is sh:name, rdfs:label or sh:path
				var label = get_value_from_object(property, 'sh:name', 'rdfs:label')
				curProperty["@rdform"]['label'] = label
					? label
					: _this.getUriPrefix(path);

				var datatype = get_value_from_object(property, 'sh:datatype');
				if (datatype) {
					curProperty["@rdform"]['datatype'] = datatype;
					curProperty["@type"] = datatype;
					// @TODO may add to model context ?!? (see old method)
					if ( ! _this.MODEL[0]["@context"].hasOwnProperty(path) ) {
						_this.MODEL[0]["@context"][path] = new Object();
					}
					_this.MODEL[0]["@context"][path]["@type"] = datatype;
				}

				var rdformProperties =  Object.keys(property).filter(function(k) {
					return k.includes( _this.replaceStrPrefix('rdform:') );
				});

				rdformProperties.some((rdformProperty) => {
					var propertyKey = _this.getUriPrefix(rdformProperty).replace( 'rdform:', '')
					var value = get_value_from_object(property, rdformProperty);

					if (propertyKey == 'arguments') {
						value = $.parseJSON(value);
						if (curProperty["@rdform"]["multiple"]) {
							value['i'] = 1;
						}
					}

					curProperty["@rdform"][propertyKey] = value;
				});

				return curProperty;
			}

			/**
			 * Get @value or @id from given key(s) in given object.
			 * @param {Object} obj
			 * @param {String} key1, key2, ...
			 * @returns {String|undefined}
			 */
			function get_value_from_object(obj, ...keys) {
				var value = undefined;

				keys.some(function(_key) {
					var key = _this.replaceStrPrefix(_key);

					if (obj[key] ) {
						if (obj[key][0]['@id'] !== undefined) {
							value = obj[key][0]['@id']
							return true;
						}

						if (obj[key][0]['@value'] !== undefined) {
							value = obj[key][0]['@value'];
							return true;
						}
					}
				});
				return value;
			}

			/**
			 * Get root shape of type sh:NodeShape
			 * @todo Check if shape is used somewhere as referance, so it is not a root shape?!
			 * @param {Array} template
			 * @return {Array}
			 */
			function get_root_node_shapes(template) {
				if (template.length == 0)
					return undefined;

				var shapes = template.filter(function(shape) {
					// @TODO may we can use PropertyShape as root shape!
					return shape["@type"] && _this.matchUris(shape["@type"][0], 'sh:NodeShape');
				});

				if (shapes.length > 1) {
					// @TODO if data given may use shape of given data resource type

					// get root shape from given attribute
					if (_this.settings.rootShape) {
						shapes = shapes.filter(function(shape) {
							return shape["@id"] && _this.matchUris(shape["@id"], _this.settings.rootShape);
						})
					}
				}

				return shapes;
			}
		},

		/**
		  * Create the HTML form and append all root classes in MODEL
		  *
		  * @return HTML DOM of the form
		  */
		createHTMLForm: function() {
			var _this = this
			var elem = $('<form></form>');
			for ( var mi in this.MODEL ) {
				$(elem).append( _this.createHTMLClass( _this.MODEL[mi] ) );
			}
			return $(elem).children();
		},

		/**
		  * Create a class for the HTML form
		  *
		  * @classModel Model-Object of the current class
		  * @return HTML DOM object of the class
		  */
		createHTMLClass: function( classModel ) {
			var _this = this;
			var thisClass = $("<div></div>");
			thisClass.attr( {
				'id' 		: _this._ID_ + '-class-' + _this.getWebsafeString(classModel['@type']), // TODO: sub-ID ... (e.g. Person/Forename)
				'class' 	: _this._ID_  + '-class-group '+_this._ID_+'-property',
				'typeof'	: classModel['@type'],
				'resource'	: classModel['@id']
			});
			if (classModel['@rdform']) {
				thisClass.attr( classModel['@rdform'] ); // add all rdform-attributes
			}
			thisClass.data( _this._ID_ + "-model", classModel);

			// maybe rewrite arguments index
			if ( classModel['@rdform'] && classModel['@rdform']['arguments'] !== undefined ) {
				/*var arguments = $.parseJSON( $(thisClass).attr('arguments') );
				arguments['i'] = classModel["@rdform"]['index'];
				$(thisClass).attr("arguments", JSON.stringify( arguments ) );
				*/
				$(thisClass).attr("arguments", JSON.stringify( classModel['@rdform']['arguments'] ) );
				//thisClass.data( _this._ID_ + "-model[@rdform][arguments]", arguments);
			}

			var thisLegend = $( "<legend></legend>" );
			if ( classModel["@rdform"]['legend'] !== undefined ) {
				thisLegend.html( '<span class="rdform-legend-text">' + classModel["@rdform"]['legend'] + "</span>" );
			}

			/*
			// TODO: maybe add baseprefix, name, return-resource...
			if ( classModel['name'] )
				thisLegend.prepend( "<small>"+ classModel['name'] +"</small> " );

			if ( classModel['isRootClass'] ) {
				thisLegend.prepend( "<small class=''+_this._ID_+'-class-baseprefix'>"+ CONTEXT[@base] +"</small> " );
			}

			if ( classModel['return-resource'] ) {
				thisLegend.append( "<small>"+ classModel['return-resource'] +"</small> " );
			}
			*/
			thisLegend.append(	'<div class="'+_this._ID_+'-edit-class-resource">' +
									'<small>'+ classModel['@id'] +'</small>' +
									'<span class="glyphicon glyphicon-pencil"></span>' +
									'<input type="text" name="'+_this._ID_+'-classUri" value="'+ classModel['@id'] +'" class="form-control input-sm" />' +
								'</div>' );

			thisLegend.append( '<small>a '+ _this.getUriPrefix(classModel['@type']) +'</small>' );

			if ( classModel["@rdform"]['typeof-select'] !== undefined ) {
				var typeofSelect = $(' <select class="'+_this._ID_+'-class-typeof-select form-control input-sm"></select>');
				var selectOptions = $.parseJSON( classModel['@rdform']['typeof-select'] );
				typeofSelect.append( '<option value="" disabled selected>'+_this.l("choose type")+'...</option>' );
				for ( var soi in selectOptions ) {
					typeofSelect.append( '<option value="'+ soi +'">'+ _this.l( selectOptions[soi] ) +'</option>' );
				}
				thisLegend.append( typeofSelect );
			}

			thisClass.append( thisLegend );

			if ( classModel['@rdform']['help'] !== undefined ) {
				thisClass.append(	'<div class="form-group '+_this._ID_+'-class-help hidden">' +
										'<span class="help-block col-xs-12">'+classModel['@rdform']['help']+'</span>' +
									'</div>' );
				thisLegend.prepend( '<span class="glyphicon glyphicon-question-sign btn '+_this._ID_+'-show-class-help"></span>' );
			}

			// add the properties
			$.each( classModel, function(key, propertyArr) {
				if ( key[0] != "@" ) {
					$.each( propertyArr, function(i, property) {
						thisClass.append( _this.createHTMLProperty( property ) );
					});
				}
			});

			if ( classModel['@rdform']['additional'] !== undefined ) {
				thisClass.append('<button type="button" class="btn btn-link btn-xs '+_this._ID_+'-remove-property" title="'+ _this.l("Remove class %s", classModel['@rdform']['legend']) +'"><span class="glyphicon glyphicon-remove"></span> '+ _this.l("remove") +'</button>');
			}

			// add duplicate and remove button for multiple classes
			if ( classModel['@rdform']['multiple'] !== undefined ) {
				if ( classModel['@rdform']['additional'] === undefined ) {
					thisClass.append('<button type="button" class="btn btn-link btn-xs '+_this._ID_+'-remove-property" title="'+ _this.l("Remove class %s", classModel['@rdform']['legend']) +'"><span class="glyphicon glyphicon-remove"></span> '+ _this.l("remove") +'</button>');
				}
				thisClass.append('<button type="button" class="btn btn-default btn-xs '+_this._ID_+'-duplicate-property" title="'+ _this.l("Duplicate class %s", classModel['@rdform']['legend']) +'"><span class="glyphicon glyphicon-plus"></span> '+ _this.l("add") +'</button>');
			}
			return thisClass;
		},

		/**
		  * Create HTML propertie, decides if its a hidden, literal, resource, ...
		  *
		  * @property The object of the current proprtie
		  * @return HTML DOM object of the propertie
		  */
		createHTMLProperty: function( property ) {
			var _this = this;
			var thisProperty;

			switch ( property['@rdform']['type'] ) {
				case "hidden":
					var val = ( property['@rdform']['value'] !== undefined ) ? property['@rdform']['value'] : "";
					var name = property['@rdform']['name']
					name = name.substring( name.search(/ /) );
					thisProperty = $( '<div class="'+this._ID_+'-hidden-group hidden-group-'+ _this.getWebsafeString(name) +'"><input type="hidden" name="'+ name +'" id="" value="'+ val +'" /></div>' );
					break;
				case "literal":
					thisProperty = this.createHTMLiteral( property );
					break;
				case "resource":
					thisProperty = this.createHTMLResource( property );
					break;
				default:
					this.showAlert( "error", "Unknown property type \""+property['@rdform']['type']+"\" detected on creating HTML property.");
					break;
			}

			return thisProperty;
		},

		/**
		  * Create literal propertie group
		  *
		  * @literal Object of the current literal propertie
		  * @return  HTML DOM object of the literal group
		  */
		createHTMLiteral: function( literal )  {
			var _this = this;
			var literalName = literal['@rdform']['name']
			literalName = literalName.substring( literalName.search(/ /) );
			var thisFormGroup = $('<div class="form-group '+_this._ID_+'-property-container '+_this._ID_+'-literal-group literal-group-'+_this.getWebsafeString(literalName)+'"></div>');
			var thisInputContainer = $('<div class="col-xs-9"></div>');

			// return create button
			if ( literal['@rdform']['additional'] !==  undefined && literal['@rdform']['additionalIntermit'] === undefined ) {
				var addBtn = $(	'<button type="button" class="btn btn-default btn-sm '+_this._ID_+'-add-property" name="'+ literal['@rdform']['name'] +'" title="' + _this.l('Add literal %s',  literal['@rdform']['label']) +'" label="'+literal['@rdform']['label']+'">' +
									'<span class="glyphicon glyphicon-plus"></span> '+ literal['@rdform']['label'] +
								'</button>' );
				addBtn.data( _this._ID_ + "-model", literal);
				thisFormGroup.append ( addBtn );
				return thisFormGroup;
			}

			var thisLabel = $("<label class='col-xs-3 control-label'>"+literal['@rdform']['label']+"</label>");
			thisFormGroup.append( thisLabel );

			if ( literal['@rdform']['textarea'] !==  undefined ) {
				var thisInput = $("<textarea></textarea>");
			}
			else if ( literal['@rdform']['select'] !==  undefined ) {
				var thisInput = $("<select></select>");
				var selectOptions = $.parseJSON( literal['@rdform']['select-options'] );
				thisInput.append( '<option value="" selected>'+_this.l("choose")+'...</option>' );
				for ( var soi in selectOptions ) {
					thisInput.append( '<option value="'+ soi +'">'+ _this.l( selectOptions[soi] ) +'</option>' );
				}
			}
			else if ( literal['@rdform']['boolean'] !==  undefined ) {
				var thisInput = $("<input type='checkbox' />");
			}
			else {
				var thisInput = $("<input type='text' />");
			}

			thisInput.data( _this._ID_ + "-model", literal);
			// add attributes (except type)
			var attr = $.extend( true, {}, literal["@rdform"] );
			delete attr["type"];
			thisInput.attr( attr );
			thisInput.attr('class', 'form-control input-sm '+_this._ID_+'-property');

			if ( literal['@rdform']['datatype'] !== undefined ) {
				if (  literal['@rdform']['datatype'].search(/.*date/) != -1 || literal['@rdform']['name'].search(/.*date/) != -1 ) {
					thisInputContainer.removeClass( "col-xs-9" );
					thisInputContainer.addClass( "col-xs-3" );

					thisInput.addClass(_this._ID_ + "-datepicker");
					thisInput.attr("data-date-format", "yyyy-mm-dd");
				}
			}

			if ( literal['@rdform']['boolean'] !== undefined ) {
				thisInputContainer.addClass( "checkbox" );
				thisInput.removeClass( "form-control input-sm" );
				thisInput = $("<label></label>").append( thisInput );
				thisInput.append( literal['@rdform']['label'] );
				thisLabel.text( "" );
			}

			thisFormGroup.append( thisInputContainer.append( thisInput ) );

			if ( literal['@rdform']['datatype'] == "xsd:date" || literal['@rdform']['datatype'] == "http://www.w3.org/2001/XMLSchema#date" ) {
				var dateTypeSelect = $('<select name="" class="form-control input-sm '+_this._ID_+'-date-type-select">' +
							'<option value="xsd:date">'+_this.l("Year")+'-'+_this.l("Month")+'-'+_this.l("Day")+'</option>'+
							'<option value="xsd:gYearMonth">'+_this.l("Year")+'-'+_this.l("Month")+'</option>'+
							'<option value="xsd:gYear">'+_this.l("Year")+'</option>'+
						'</select>');
				thisInputContainer.after( $('<div class="col-xs-3"></div>').append(dateTypeSelect) );
			}

			if ( literal['@rdform']['additional'] !==  undefined ) {
				thisInputContainer.append('<button type="button" class="btn btn-link btn-xs '+_this._ID_+'-remove-property" title="'+ _this.l("Remove literal %s", literal['@rdform']['label'] ) +'"><span class="glyphicon glyphicon-remove"></span> '+ _this.l("remove") +'</button>');
			}

			if ( literal['@rdform']['multiple'] !== undefined ) {
				// add remove button
				if ( literal['@rdform']['additional'] ===  undefined ) {
					thisInputContainer.append('<button type="button" class="btn btn-link btn-xs '+_this._ID_+'-remove-property" title="'+ _this.l("Remove literal %s", literal['@rdform']['label'] ) +'"><span class="glyphicon glyphicon-remove"></span> '+ _this.l("remove") +'</button>');
				}
				// add duplicate btn
				thisInputContainer.append(	'<button type="button" class="btn btn-default btn-xs '+_this._ID_+'-duplicate-property" title="'+ _this.l("Duplicate literal %s", literal['@rdform']['label'] ) +'">'+
												'<span class="glyphicon glyphicon-plus"></span> '+ _this.l("add") +
											'</button>');
			}

			if ( literal['@rdform']['required'] !== undefined ) {
				thisLabel.append( ' <abbr title="'+_this.l("Required field")+'">*</abbr>' );
			}
			if ( literal['@rdform']['hidden'] !== undefined ) {
				thisFormGroup.addClass("hidden");
			}

			if ( literal['@rdform']['help'] !== undefined ) {
				thisLabel.prepend( '<span class="glyphicon glyphicon-question-sign btn '+_this._ID_+'-show-literal-help"></span>' );
				thisInputContainer.append(	'<span class="help-block '+_this._ID_+'-literal-help hidden">' + literal['@rdform']['help'] + '</span>' );
			}

			return thisFormGroup;
		},

		/**
		  * Create a group for a new resource. It can be a new subclass, an add button for an new subclass or a single input field for an external resource
		  *
		  * @resource Object of the current resource from MODEL
		  * @return HTML DOM object of the resource group
		  */
		createHTMLResource: function( resource ) {
			var _this = this;
			var curFormGroup = $('<div class="form-group '+_this._ID_+'-property-container '+_this._ID_+'-resource-group resource-group-'+_this.getWebsafeString(resource['@rdform']['name'])+'-'+_this.getWebsafeString(resource['@rdform']['value'])+'"></div>');

			if ( resource['@rdform']['external'] !== undefined ) {	// add simple input for external resources

				// return create button
				if ( resource['@rdform']['additional'] !==  undefined && resource['@rdform']['additionalIntermit'] === undefined ) {
					var addBtn = $(	'<button type="button" class="btn btn-default btn-sm '+_this._ID_+'-add-property" name="'+ resource['@rdform']['name'] +'" value="'+ resource['@rdform']['value'] +'" title="' + _this.l('Add resource %s',  resource['@rdform']['label']) +'" label="'+resource['@rdform']['label']+'">' +
										'<span class="glyphicon glyphicon-plus"></span> '+ resource['@rdform']['label'] +
									'</button>' );
					addBtn.data( _this._ID_ + "-model", resource);
					if ( resource['@rdform']['typeof'] !==  undefined ) {
						$(addBtn).attr("typeof", resource['@rdform']['typeof']);
					}
					if ( resource['@rdform']['help'] !== undefined ) {
						addBtn.after( '<span class="glyphicon glyphicon-question-sign btn '+_this._ID_+'-show-literal-help"></span>' );
						addBtn.after(	'<span class="help-block '+_this._ID_+'-literal-help hidden">' + resource['@rdform']['help'] + '</span>' );
					}
					curFormGroup.append ( addBtn );
					return curFormGroup;
				}

				if ( resource['@rdform']['select'] !== undefined ) {
					var resourceClass = $('<select class="form-control input-sm '+_this._ID_+'-property"></select>');
					var selectOptions = $.parseJSON( resource['@rdform']['select-options'] );
					resourceClass.append( '<option value="" selected>'+_this.l("choose")+'...</option>' );
					for ( var soi in selectOptions ) {
						resourceClass.append( '<option value="'+ soi +'">'+ _this.l( selectOptions[soi] ) +'</option>' );
					}
					if ( resource['@rdform']['multiple'] !== undefined ) {
						// multiple external select resources not yet supported.
						// see https://github.com/simeonackermann/RDForm/issues/14 for further progress
						console.log("Warning: multiple external <select /> resource not supported yet!", resource['@rdform']);
						delete resource['@rdform']['multiple'];
					}
				} else {
					var resourceClass = $('<input type="url" class="form-control input-sm '+_this._ID_+'-property" />');
				}

				resourceClass.data( _this._ID_ + "-model", resource);
				// add attributes (except type)
				var attr = $.extend( true, {}, resource["@rdform"] );
				delete attr["type"];
				attr["arguments"] = JSON.stringify(attr["arguments"]);
				resourceClass.attr( attr );
			}
			else { // add regular resource
				var resourceClass;

				// add button for additional or same resources (like person knows person)
				if ( resource['@rdform']['additional'] !== undefined && resource['@rdform']['additionalIntermit'] === undefined ) {
					//curFormGroup.addClass("add-resoource-button-group");
					if ( resource['@rdform']['legend'] )
						var btnText = resource['@rdform']['legend'];
					else
						var btnText = resource['@rdform']['title'] ? resource['@rdform']['title'] : resource['@rdform']['name'] + " - " + resource['@rdform']['value'];

					var resourceClass = $(	'<button type="button" class="btn btn-default '+_this._ID_+'-add-property" name="'+ resource['@rdform']['name'] +'" value="'+ resource['@rdform']['value'] +'" title="' + _this.l("Add class %s", btnText)+'" label="'+btnText+'">' +
												'<span class="glyphicon glyphicon-plus"></span> '+ btnText +
											'</button>' );
					if (resource['@rdform'].hasOwnProperty("id-html")) {
						resourceClass.attr("id-html", resource['@rdform']["id-html"])
					}
					resourceClass.data( _this._ID_ + "-model", resource);
				}
				else { // create class-model for the resource
					resourceClass = _this.createHTMLClass( resource );
				}
			}

			curFormGroup.append( resourceClass );

			if ( resource['@rdform']['external'] !== undefined ) {

				var thisLabel = $('<label class="col-xs-3 control-label"></label>');
				thisLabel.text( resource['@rdform']['label'] );
				curFormGroup.prepend( thisLabel );

				var thisInputContainer = $('<div class="col-xs-9"></div>');
				resourceClass.wrap( thisInputContainer );

				if ( resource['@rdform']['help'] !== undefined ) {
					thisLabel.prepend( '<span class="glyphicon glyphicon-question-sign btn '+_this._ID_+'-show-literal-help"></span>' );
					resourceClass.after(	'<span class="help-block '+_this._ID_+'-literal-help hidden">' + resource['@rdform']['help'] + '</span>' );
				}

				if ( resource['@rdform']['subform'] !== undefined ) {
					curFormGroup.removeClass('resource-group-'+_this.getWebsafeString(resource['@rdform']['name'])+'-');
					curFormGroup.addClass('resource-group-'+_this.getWebsafeString(resource['@rdform']['name'])+'-'+resource['@rdform']['subform']);
					resourceClass.after('<button type="button" class="btn btn-default btn-xs '+_this._ID_+'-new-subform" title="'+ _this.l("New resource %s", resource['@rdform']['label']) +'"><span class="glyphicon glyphicon-plus-sign"></span> '+ _this.l("new") +'</button>');
				}

				if ( resource['@rdform']['multiple'] !== undefined ) {
					resourceClass.after('<button type="button" class="btn btn-default btn-xs '+_this._ID_+'-duplicate-property" title="'+ _this.l("Duplicate resource %s", resource['@rdform']['label']) +'"><span class="glyphicon glyphicon-plus"></span> '+ _this.l("add") +'</button>');
				}

				if ( resource['@rdform']['subform'] !== undefined ) {
					resourceClass.after('<button type="button" class="btn btn-default btn-xs '+_this._ID_+'-edit-subform hide" title="'+ _this.l("Edit resource %s", resource['@rdform']['label']) +'"><span class="glyphicon glyphicon-pencil"></span> '+ _this.l("edit") +'</button>');
				}

				resourceClass.after('<button type="button" class="btn btn-link btn-xs '+_this._ID_+'-remove-property" title="'+ _this.l("Remove resource %s", resource['@rdform']['label']) +'"><span class="glyphicon glyphicon-remove"></span> '+ _this.l("remove") +'</button>');

				if ( resource['@rdform']['hidden'] !== undefined ) {
					curFormGroup.addClass("hidden");
				}

			}

			/*if ( resource["@rdform"]["help"] !== undefined && resource['@rdform']['additionalIntermit'] === undefined ) {
				curFormGroup.append('<div class="'+_this._ID_+'-resource-help-container">' +
										'<span class="glyphicon glyphicon-question-sign btn '+_this._ID_+'-show-resource-help"></span>' +
										'<span class="help-block '+_this._ID_+'-resource-help hidden">' + resource['@rdform']['help'] + '</span>' +
									'</div>' );
			}*/
			return curFormGroup;
		},

		/**
		 * Public addExistingData call function to insert data from a JSON-LD object to the form
		 *
		 * @param array|object data Values to insert
		 */
		 addExistingData : function() {
		 	var _this = this;
		 	jsonld.expand(_this.data, function(err, expanded_data) {
				if ( err != null ) {
					_this.showAlert( "error", "Error on insert existing data: " + JSON.stringify(err, null, ' ') );
					return false;
				}

				_this.data = expanded_data;

				if ( _this.Hooks && typeof _this.Hooks.__beforeInsertData !== "undefined" )
						_this.Hooks.__beforeInsertData();

				$.each( _this.data, function( key, value ) {
					_this.addExistingDataFct( undefined, value );
				})

				if ( _this.Hooks && typeof _this.Hooks.__afterInsertData !== "undefined" )
						_this.Hooks.__afterInsertData();

			});
		 },

		/**
		 * Add existing data from a JSON-LD object to the form
		 *
		 * @param string|undefined name Name of the current field (for multiple literal)
		 * @param array|object data Values to insert
		 * @param object env DOM modell of current environment class
		 */
		addExistingDataFct : function( name, data, env ) {
			var _this = this;
			if ( typeof env === 'undefined' ) {
				var classTypeof = ( typeof data["@type"] === "string" ) ? data["@type"] : data["@type"][0];
				env = _this.getElement( _this.$elem.find('div'), 'typeof', classTypeof );

				if ( env.length == 0 ) {
					_this.showAlert( "info", 'Der Datensatz enthält die nicht im Modell vorhandene Klasse { "'+classTypeof+'" }' );
					return;
				}
			}
			var prevKey = "";

			for ( var i in data ) {
				var curName = ( name === undefined ) ? i : name;

				if ( i == "@id" ) {
					var uriInput = $(env).find('input[name="'+_this._ID_+'-classUri"]').first();
					$(uriInput).val( _this.getUriPrefix(data[i]) );
					$(uriInput).trigger("keyup").trigger("blur");
					if ( data[i].search(/\{.*\}/) != -1 ) { // add new modvalue if uri contains wildcards
						$(uriInput).attr("modvalue", _this.getUriPrefix(data[i]));
					} else {
						$(uriInput).removeAttr("modvalue"); // remove wildcard updating
					}
				}

				if ( i[0] != "@" ) { // we dont want insert @id, @type, ...

					if ( typeof data[i] === "string" ) { // its a literal

						var literalValue = data[i];

						var literal = _this.getElement( $(env).children("div."+_this._ID_+"-literal-group").find("input,select,textarea"), 'name', curName ).last();

						if ( $(literal).length == 0 ) { // doesnt found -> try to find an additional button
							var addBtn = _this.getElement( $(env).children("div."+_this._ID_+"-literal-group").find('button.'+_this._ID_+'-add-property'), 'name', curName );
							if ( $(addBtn).length == 0 ) {
								_this.showAlert( "info", 'Der Datensatz enthält das nicht im Modell vorhandene Literal { "'+curName+'": "' + literalValue + '" }', false );
								continue;
							}
							$(addBtn).trigger("click");
							literal = _this.getElement( $(env).children("div."+_this._ID_+"-literal-group").find("input,textarea"), 'name', curName ).last();
						}

						if ( prevKey == curName ) { // same key -> try to duplicate
							$(literal).nextAll('button.'+_this._ID_+'-duplicate-property').trigger("click");
							literal = _this.getElement( $(env).children("div."+_this._ID_+"-literal-group").find("input,textarea"), 'name', curName ).last();
						}

						if ( _this.Hooks && typeof _this.Hooks.__insertLiteral !== "undefined" )
							literalValue = _this.Hooks.__insertLiteral( curName, literal, literalValue, data );

						$(literal).val( literalValue );
						$(literal).trigger("keyup").trigger('change');
						$(literal).parentsUntil("."+_this._ID_+"-literal-group").parent().removeAttr("style"); // bugfix: some classes have hidden inline style

						if ( $(literal).attr("type") == "checkbox" ) { // checkbox -> check or uncheck
							if ( literalValue == "0" || literalValue == "false" ) {
								$(literal).removeAttr("checked");
							} else {
								$(literal).attr( "checked", "checked" );
							}
						}

					} else { // its an array: multiple literals or resource ( $.isArray(data[i]) )

						// push single/multiple resources or multiple resources as array of objects
						var thisData = new Array();
						if ( $.isArray(data[i]) ) {
							thisData = data[i];
						} else {
							thisData.push( data[i] );
						}

						if ( typeof thisData[0] === "string" ) { // its multiple literal
							_this.addExistingDataFct( i, thisData, env );
						}
						else if ( ! thisData[0].hasOwnProperty("@id") ) { // its a literal in an object
							var liArr = new Array();
							for ( var li in thisData ) {
								liArr.push( thisData[li]["@value"] );
							}
							_this.addExistingDataFct( i, liArr, env );
						}
						else { // its one or multiple resources

							for ( var di in thisData ) {

								// create dummy __insertHook if not exists
								var __insertResourceFct = function(i, di, resource, callback){ callback(i, di, resource) };

								if ( _this.Hooks && typeof _this.Hooks.__insertResource !== "undefined" ) {
									__insertResourceFct = _this.Hooks.__insertResource;
								}

								// call __insertHook and wait for callback (helpful to get asynchron data in hooks)
								__insertResourceFct(i, di, thisData[di], function(i, di, data) {
									thisData[di] = data;

									if ( ! thisData[di].hasOwnProperty("@type") ) { // it seemms to be an external resource
										var resource = _this.getElement( $(env).children("div."+_this._ID_+"-resource-group").find("input,select"), 'name', i ).last();
										if ( $(resource).length == 0 ) {
											var addBtn = _this.getElement( $(env).find('button.'+_this._ID_+'-add-property'), 'name', i );
											if ( $(addBtn).length != 0 ) {
												$(addBtn).trigger("click");
												resource = _this.getElement( $(env).children("div."+_this._ID_+"-resource-group").find("input,select"), 'name', i ).last();
											}
										}
										if ( $(resource).length != 0 ) {
											var resourceVal = thisData[di]["@id"];
											if ( di > 0 ) {
												$(resource).parent().find( 'button.'+_this._ID_+'-duplicate-property' ).trigger("click");
												resource = _this.getElement( $(env).children("div."+_this._ID_+"-resource-group").find("input,select"), 'name', i ).last();
												$(resource).parentsUntil("."+_this._ID_+"-resource-group").parent().removeAttr("style"); // bugfix: some classes have hidden inline style
											}
											if ( $(resource).prop("tagName") == "SELECT" ) {
												var selctElExists = false;
												for (let selctIdx = 0; selctIdx < $(resource)[0].options.length; selctIdx++) {
													var selctEl = $(resource)[0].options[selctIdx];
													if ( _this.matchUris(selctEl.value, resourceVal) ) {
														$(resource)[0].options[selctIdx].selected = true;
														selctElExists = true;
													}
												}

												if (!selctElExists) {
													$(resource).append( '<option value="' + resourceVal + '" selected>'+ _this.getUriPrefix( resourceVal ) +'</option>' );
												}
											} else {
												$(resource).val( resourceVal );
											}
										} else {
											_this.showAlert( "info", 'Der Datensatz enthält die nicht im Modell vorhandene externe Resource { "'+i+'": "' + JSON.stringify(thisData[di]) + '" }', false );
										}
										return true;
									}

									var thisType = ( typeof thisData[di]["@type"] === "string" ) ? thisData[di]["@type"] : thisData[di]["@type"][0];
									var subEnv = _this.getElement( $(env).find("div"), 'typeof', thisType ).last();
									var hasIDHTML = false;

									if ( $(subEnv).attr("id-html") != undefined ) { // subEnv has id-html -> may find the right id-html resource
										if ( thisData[di].hasOwnProperty( "http://www.w3.org/2000/01/rdf-schema#type" ) ) {
											thisType = thisData[di]["http://www.w3.org/2000/01/rdf-schema#type"][0]["@value"];
										}
										else if ( thisData[di].hasOwnProperty( "http://www.w3.org/ns/shacl#path" ) ) {
											thisType = thisData[di]["http://www.w3.org/ns/shacl#path"][0]["@id"];
										}
										subEnv = _this.getElement( $(env).find("div"), 'id-html', thisType ).last();
										hasIDHTML = true;
									}

									if ( $(subEnv).length == 0 ) { // resource not found -> try to find external resource with typeof
										var resource = _this.getElement( _this.getElement( $(env).find("input,select"), 'name', i ), 'typeof', thisType ).last();
										if ( $(resource).length == 0 ) {
											var addBtn = _this.getElement( _this.getElement( $(env).find("button"), 'name', i ), 'typeof', thisType );
											if ( $(addBtn).length != 0 ) {
												$(addBtn).trigger("click");
												resource = _this.getElement( _this.getElement( $(env).find("input,select"), 'name', i ), 'typeof', thisType ).last();
											}
										}
										if ( $(resource).length != 0 ) {
											if ( $(resource).val() != "" ) {
												$(resource).parent().find( 'button.'+_this._ID_+'-duplicate-property' ).trigger("click");
											}
											resource = _this.getElement( _this.getElement( $(env).find("input,select"), 'name', i ), 'typeof', thisType ).last();
											var resourceLabel = thisData[di]["@id"].split("/").reverse()[0];
											if ( thisData[di].hasOwnProperty('http://www.w3.org/2000/01/rdf-schema#label') ) {
												resourceLabel = thisData[di]['http://www.w3.org/2000/01/rdf-schema#label'][0]['@value'];
											}

											$(resource).val( thisData[di]["@id"] ).hide().trigger("blur");
											$(resource).after('<p class="'+_this._ID_+'-resource-uri-container"><a href="'+thisData[di]["@id"]+'" class="'+_this._ID_+'-resource-uri">'+resourceLabel+'</a></p>');
										} else {
											// may find add button
											var addBtn = _this.getElement( $(env).children("div."+_this._ID_+"-resource-group").find( 'button.'+_this._ID_+'-add-property'), 'value', thisType );

											if ( $(addBtn).length == 0 ) {
												// add btn not found, may data has rdfs:type
												if ( thisData[di].hasOwnProperty( "http://www.w3.org/2000/01/rdf-schema#type" ) ) {
													thisType = thisData[di]["http://www.w3.org/2000/01/rdf-schema#type"][0]["@value"];
													addBtn = _this.getElement( $(env).children("div."+_this._ID_+"-resource-group").find( 'button.'+_this._ID_+'-add-property'), 'value', thisType );
													hasIDHTML = true;
												}
												// may use sh:path
												else if ( thisData[di].hasOwnProperty( "http://www.w3.org/ns/shacl#path" ) ) {
													thisType = thisData[di]["http://www.w3.org/ns/shacl#path"][0]["@id"];
													addBtn = _this.getElement( $(env).children("div."+_this._ID_+"-resource-group").find( 'button.'+_this._ID_+'-add-property'), 'value', thisType );
													hasIDHTML = true;
												}
											}
											if ( $(addBtn).length == 0 ) { // data not found
												_this.showAlert( "info", 'Der Datensatz enthält die nicht im Modell vorhandene Resource { "'+thisType+'": "' + JSON.stringify(thisData[di]) + '" }', false );
												return false;
											}
											$(addBtn).trigger("click");

											subEnv = _this.getElement( $(env).find("div"), 'typeof', thisType ).last();
											if ( hasIDHTML ) {
												// TODO: BUG: may typeof AND id-html must match!
												subEnv = _this.getElement( $(env).find("div"), 'id-html', thisType ).last();
											}
										}
									}

									if ( i != $(subEnv).attr("name") && i != _this.replaceStrPrefix($(subEnv).attr("name")) ) {
										_this.showAlert( "info", 'Der Datensatz enthält die Propertie "'+i+'", die im Modell zu "'+$(subEnv).attr("name")+'" verändert ist.', false );
									}

									// on multiple resource (walk thisData backwards) -> duplicate the subEnv
									if ( di > 0 ) {
										for (var ri = di-1; ri >= 0; ri--) {
											var thisRType = ( typeof thisData[ri]["@type"] === "string" ) ? thisData[ri]["@type"] : thisData[ri]["@type"][0];
											if ( hasIDHTML && thisData[ri].hasOwnProperty("http://www.w3.org/2000/01/rdf-schema#type") ) {
												thisRType = thisData[ri]["http://www.w3.org/2000/01/rdf-schema#type"][0]["@value"];
											}
											if( thisType == thisRType ) {
												$(subEnv).find( 'button.'+_this._ID_+'-duplicate-property' ).trigger("click");
												subEnv = _this.getElement( $(env).find("div"), 'typeof', thisType ).last();
												if ( hasIDHTML ) {
													subEnv = _this.getElement( $(env).find("div"), 'id-html', thisType ).last();
												}
												$(subEnv).removeAttr("style"); // bugfix: some classes have hidden inline style
												break;
											}
										}
									}

									_this.addExistingDataFct( undefined, thisData[di], subEnv );

								}); // end of __insertResource Hook

							}
						}
					}
				}
				prevKey = curName;
			}
		}, // end of addExistingData

		/*******************************************************
		 *	Init form button handlers after building the form
		 *
		 *******************************************************/
		initFormHandler : function( env ) {
			var _this = this;

			if ( _this.Hooks && typeof _this.Hooks.__initFormHandlers !== "undefined" )
				_this.Hooks.__initFormHandlers( env );

			if ( $.datepicker ) {
				//_this.$elem.on("focus", "."+_this._ID_+"-datepicker", function() {
				$("."+_this._ID_+"-datepicker", $(env)).on("focus", function() {
					$(this).datepicker({
						weekStart: 1
					});
				});
			}

			// validate input values on change
			$("input", $(env)).on("change", function() {
				_this.userInputValidation( $(this) );
			});

			// BUTTON: show help class text
			$("."+_this._ID_+"-show-class-help", $(env)).on("click", function() {
				var classHelp =  $(this).parentsUntil("div[typeof]").parent().find("div."+_this._ID_+"-class-help").first();
				$(classHelp).toggleClass("hidden");
			});

			// BUTTON: show literal help text
			$("."+_this._ID_+"-show-literal-help", $(env)).on("click", function() {
				var classHelp =  $(this).parentsUntil("div[typeof]").find("span."+_this._ID_+"-literal-help");
				$(classHelp).toggleClass("hidden");
			});

			// BUTTON: show resource help text
			$("."+_this._ID_+"-show-resource-help", $(env)).on("click", function() {
				var classHelp =  $(this).parent().find("span."+_this._ID_+"-resource-help");
				$(classHelp).toggleClass("hidden");
				return false;
			});

			// SELECT: date type
			$("."+_this._ID_+"-date-type-select", $(env)).on("change", function() {
				var dateFormat = "";
				var defaultDate = "1970-01-01";
				var dateProperty = $(this).parentsUntil("div.form-group").parent().find('input.'+_this._ID_+'-property');
				var newDate = dateProperty.val();

				if ( $(this).val() == "xsd:gYear" ) {
					dateFormat = "JJJJ";
				} else if ( $(this).val() == "xsd:gYearMonth" ) {
					dateFormat = "JJJJ-MM";
				} else {
					dateFormat = "JJJJ-MM-TT";
				}

				dateProperty.attr("placeholder", dateFormat);
				newDate = dateProperty.val().slice(0, dateFormat.length);
				if ( newDate.length > 0 ) {
					newDate = newDate + defaultDate.slice(newDate.length, dateFormat.length);
					dateProperty.val(newDate);
				}
				_this.userInputValidation( dateProperty );
			});

			// BUTTON: edit subform
			$("button."+_this._ID_+"-edit-subform", $(env)).on("click", function() {
				var resContainer = $(this).parentsUntil("div.form-group").parent();

				if ( _this.Hooks && typeof _this.Hooks.__editSubform !== "undefined" )
					_this.Hooks.__editSubform( resContainer );

				// todo: native edit subform
			});

			// BUTTON: new subform
			$("button."+_this._ID_+"-new-subform", $(env)).on("click", function() {

				if ( $(this).parent().find("input."+_this._ID_+"-property").val().search(/^http/) == -1 ) {
					var resContainer = $(this).parentsUntil("div.form-group").parent(); // add in same container
				} else {
					$(this).parent().find("button."+_this._ID_+"-duplicate-property").trigger("click");
					var resContainer = $(this).parentsUntil("div.form-group").parent().next(); // add in new container
				}

				if ( _this.Hooks && typeof _this.Hooks.__newSubform !== "undefined" )
					_this.Hooks.__newSubform( resContainer );

				// todo: native new subform
			});

			// BUTTON: add property
			$("button."+_this._ID_+"-add-property", $(env)).on("click", function() {
				var btnContainer = $(this).parent("div.form-group");
				var propertyModel = $.extend( true, {}, $(this).data( _this._ID_ + "-model" ) );

				propertyModel["@rdform"]['additionalIntermit'] = true;
				var propertyHTML = _this.createHTMLProperty( propertyModel );

				$(propertyHTML).hide();
				$(btnContainer).after( propertyHTML );
				$(propertyHTML).show("slow");
				$(btnContainer).remove();
				//$(propertyHTML).find("div.rdform-resource-help-container").remove();

				if ( _this.Hooks && typeof _this.Hooks.__afterAddProperty !== "undefined" )
					_this.Hooks.__afterAddProperty( propertyHTML );

				_this.initFormHandler( propertyHTML );

				return false;
			});

			// BUTTON: duplicate property
			$("button."+_this._ID_+"-duplicate-property", $(env)).on("click", function() {
				var btnContainer = $(this).parentsUntil("div.form-group").parent();
				var propertyModel = $.extend( true, {}, $(btnContainer).find("."+_this._ID_+"-property").first().data( _this._ID_ + "-model" ) );
				var index = propertyModel["@rdform"]['index'];
				++index;

				propertyModel["@rdform"]['index'] = index;
				if ( propertyModel["@rdform"]["arguments"] !== undefined ) {
					propertyModel["@rdform"]["arguments"]["i"] = index;
				}

				var propertyHTML = _this.createHTMLProperty( propertyModel );

				// hide legend text, help and label
				// $(propertyHTML).find(".help-block, ."+_this._ID_+"-show-class-help, ."+_this._ID_+"-legend-text").hide();
				// $(propertyHTML).find( ".control-label" ).css( "textIndent", "-999px" ).css( "textAlign", "left" );
				$(btnContainer).find("."+_this._ID_+"-new-subform").hide();

				$(propertyHTML).hide();
				$(btnContainer).after( propertyHTML );
				$(propertyHTML).show("slow");
				$(this).hide();

				if ( _this.Hooks && typeof _this.Hooks.__afterDuplicateProperty !== "undefined" )
					_this.Hooks.__afterDuplicateProperty( propertyHTML );

				_this.initFormHandler( propertyHTML );
			} );

			//BUTTON: remove property
			$("button."+_this._ID_+"-remove-property", $(env)).on("click", function() {
				var btnContainer = $(this).parentsUntil("div.form-group").parent();
				var propertyModel = $.extend( true, {}, $(btnContainer).find("."+_this._ID_+"-property").first().data( _this._ID_ + "-model" ) );

				var prevProperty = btnContainer.prev('div[class="'+btnContainer.attr("class")+'"]');
				var nextProperty = btnContainer.next('div[class="'+btnContainer.attr("class")+'"]');

				if ( _this.Hooks && typeof _this.Hooks.__beforeRemoveProperty !== "undefined" )
					_this.Hooks.__beforeRemoveProperty( btnContainer );

				// the only property (no prevs or next) - recreate this property
				if ( prevProperty.length == 0 && nextProperty.length == 0 ) {
					propertyModel["@rdform"]['additionalIntermit'] = undefined;
					var propertyHTML = _this.createHTMLProperty( propertyModel );

					$(propertyHTML).hide().removeAttr("style");
					$(btnContainer).after( propertyHTML );
					$(propertyHTML).show("slow");

					//findWildcardInputs( propertyHTML );
					_this.initFormHandler( propertyHTML );
				}
				// the last property
				else if ( prevProperty.length > 0 && nextProperty.length == 0 ) {
					// show duplicate btn in the prev
					prevProperty.find("button."+_this._ID_+"-duplicate-property").show();
					prevProperty.find("button."+_this._ID_+"-new-subform").show();
				}
				// the first property
				else if ( prevProperty.length == 0 && nextProperty.length > 0 ) {
					// show label/legend in the next
					$(nextProperty).find("legend,.help-block").show();
					$(nextProperty).find( "label" ).css( "textIndent", "0px" ).css( "textAlign", "right" );
				}
				// middle property, nothing todo
				else {
				}

				// first or middle property
				if ( nextProperty.length > 0 ) {
					// decrease all next indexes in arguments and reload wildcard-inputs
					btnContainer.nextAll('div[class="'+btnContainer.attr("class")+'"]').each(function() {
						//var curNextModel = $(this).data( _this._ID_ + "-model" );

						var curNextProperty = $(this).find("."+_this._ID_+"-property").first();
						var curNextPropertyModel = $(curNextProperty).data( _this._ID_ + "-model" );
						var index = $(curNextProperty).attr('index');
						--index;

						if ( curNextPropertyModel['@rdform']['arguments'] ) {
							curNextPropertyModel['@rdform']['arguments']['i'] = index;
							$(curNextProperty).attr("arguments", JSON.stringify( curNextPropertyModel['@rdform']['arguments'] ) );
						}
						curNextPropertyModel['@rdform']['index'] = index;
						$(curNextProperty).attr('index', index);

						findWildcardInputs( curNextProperty );;
					});
				}

				//remove property container
				$(btnContainer).hide( "slow", function() {
					$(btnContainer).remove();
				});

			});

			// find inputs with wildcard
			function findWildcardInputs( env ) {

				// reset inputs values with existing modvalue
				$(env).find('input[modvalue]').each(function() {
					$(this).val( $(this).attr("modvalue" ) );
				});

				// text inputs with wildcard values -> bind handlers to dynamically change the value
				$(env).find('input[value*="{"]').each(function() {
					var wildcards = new Object();
					var wildcardFcts = new Object();
					var thisInput = $(this);
					var envClass = $(this).parentsUntil("div[typeof]").parent();
					$(this).attr("modvalue",  $(this).val() );

					var strWcds = $(this).val().match(/\{[^\}]*/gi);
					for ( var i in strWcds ) {
						var wcd = strWcds[i].substring( 1 );

						// may get and remove wildcard-function
						if ( wcd.search(/\(/) != -1 ) {
							var wcdFcts = wcd.match(/\([^\)]*/gi);
							wcd = wcd.replace( /\(.*\)/g, '' );
							for ( var i in wcdFcts ) {
								var wcdFct = wcdFcts[i].substring( 1 );
								wildcardFcts[wcd] = wcdFct;
								var regex = new RegExp( '\\(' + wcdFct + '\\)', "g");
								$(this).attr("modvalue", $(this).attr("modvalue").replace( regex, '' ) );
							}
						}

						wildcards[wcd] = getWildcardTarget( wcd, envClass );

						if ( wildcards[wcd].length > 0 ) {
							// TODO: if wildcard not found no keyup event exists!
							$(wildcards[wcd]).keyup(function() {
								writeWildcardValue( thisInput, wildcards, wildcardFcts );
							});

							if ( wildcards[wcd].val().search(/\{.*\}/) == -1 ) { // trigger keyup for wildcards without wildcards
								$(wildcards[wcd]).trigger( "keyup" );
							}
						}
					}
				});

			}
			//findWildcardInputs( _this.$elem );
			findWildcardInputs( $(env) );

			// find the target input of a wildcard wcd in the class envClass
			function getWildcardTarget( wcd, envClass ) {

				var wcdTarget = _this.getElement( envClass.find('input,textarea'), 'name', wcd )

				//if ( wcdTarget.length == 0 && envClass.attr( "arguments" ) ) { // if no input exist, may get wilcard vars from resource arguments
				//	var args = $.parseJSON( envClass.attr( "arguments" ) );
				if ( wcdTarget.length == 0 && envClass.data( _this._ID_ + "-model" )["@rdform"]["arguments"] !== undefined ) { // if no input exist, may get wilcard vars from resource arguments
					var args = envClass.data( _this._ID_ + "-model" )["@rdform"]["arguments"];
					for ( var ai in args ) {
						args[ai] = args[ai].toString();
						if ( wcd == ai ) {
							if ( args[ai].search(/\{.*\}/) != -1 ) {
								wcdTarget = getWildcardTarget( args[ai].replace(/[{}]/g, ''), envClass.parentsUntil("div[typeof]").parent() );
							} else {
								wcdTarget = $( '<input type="hidden" name="' + ai + '" value="' + args[ai] + '" />' );
							}
							break;
						}
					}
				}

				// test if property exists
				if ( wcdTarget.length == 0 ) {
					_this.showAlert("error", 'Error: cannot find property "' + wcd + '" for wildcard replacement.' );
				}

				return wcdTarget;
			}

			// write a wildcard value to the input
			function writeWildcardValue( src, wildcards, wildcardFcts ) {
				var val = $(src).attr("modvalue");
				if ( val == undefined ) return false;

				for ( wcd in wildcards ) {
					var wldVal = wildcards[wcd].val();

					if ( wildcards[wcd].val() != "" ) {
						var regex = new RegExp( '\{' + wcd + '\}', "g");

						// may apply wildcard-function
						if ( wildcardFcts.hasOwnProperty(wcd) ) {

							var wildcardFct = wildcardFcts[wcd];

							// may apply some string functions
							if (wildcardFct == 'toUpperCase' || wildcardFct == 'toLowerCase' || wildcardFct == 'trim') {
								var strFn = String.prototype[wildcardFct];
								wldVal = strFn.apply(wldVal);
								//wldVal = strFn(wldVal);
							}

							// may apply a function from Hooks.__wildcardFcts (see your hooks file)
							if ( _this.Hooks && typeof _this.Hooks.__wildcardFcts !== "undefined" &&
								_this.Hooks.__wildcardFcts().hasOwnProperty(wildcardFct)
							) {
								var hooksWldcFct =  _this.Hooks.__wildcardFcts()[wildcardFct];
								wldVal = hooksWldcFct.apply(null, [wldVal]);
							}

							// @deprecated, use wildcard function in Hooks
							if ( wildcardFct == "BASE" ) {
								wldVal = wldVal.split("/").reverse()[0];
							}
							// @deprecated, use wildcard function in Hooks
							if ( wildcardFct == "HASH" ) {
								wldVal = _this.getHash(wldVal);
							}
						}

						if ( $(src).attr("name") == _this._ID_+"-classUri" ) { // make wcdVal as resouce uri
							wldVal = wldVal.replace(/\{.*\}/, ''); // replace existing wildcard-pointer in wcdVal
							wldVal = _this.getWebsafeString(wldVal); // make webSafe string
						}

						if ( _this.Hooks && typeof _this.Hooks.__writeWildcardValue !== "undefined" )
							wldVal = _this.Hooks.__writeWildcardValue( $(src), wldVal );

						wldVal = wldVal.replace(/\{\S*\}/g, ''); // remove wildcards in wildcard-value

						val = val.replace( regex, wldVal );
					}
				}
				val = val.trim();

				if ( val == "" ) { // if wildcard value would empty, set to modvalue
					val = $(src).attr("modvalue");
				}

				$(src).val( val );
				$(src).trigger( "keyup" );
			}

			// edit a class resouce
			$("div."+_this._ID_+"-edit-class-resource span", $(env)).on("click", function() {
				$(this).next("input").show().focus();

				$(this).prev("small").hide();
				$(this).hide();
			});

			// live auto-update class-resource text
			$("div."+_this._ID_+"-edit-class-resource input", $(env)).on("keyup", function() {
				var val = $(this).val();

				if ( val != "" ) {
					$(this).parentsUntil("div[typeof]").parent().attr( "resource", val );
					$(this).prev().prev("small").text( val );
				}
			});

			// leave a class-resource edit input
			$("div."+_this._ID_+"-edit-class-resource input", $(env)).on("change blur", function() {
				$(this).prev().prev("small").show();
				$(this).prev("span").show();
				$(this).trigger( "keyup" );
				$(this).hide();
			});

			// select a class typeof selection
			$("select."+_this._ID_+"-class-typeof-select", $(env)).on("change", function() {
				$(this).parentsUntil("div[typeof]").parent().attr( "typeof", $(this).val() );
				$(this).prev("small").text("a " + $(this).val());
			});

			// leave external input
			$("input[external]", $(env)).on("blur", function() {
				if ( $(this).val() != "" && _this.userInputValidation( $(this) ) ) {
					$(this).parent().find("."+_this._ID_+"-edit-subform").removeClass("hide");
					$(this).parent().find("."+_this._ID_+"-remove-property").removeClass("hide");
					if ( $(this).attr("multiple") === undefined ) {
						$(this).parent().find("."+_this._ID_+"-new-subform").hide();
					}

					if ( _this.Hooks && typeof _this.Hooks.__afterBlurExternalResource !== "undefined" )
						_this.Hooks.__afterBlurExternalResource( $(this) );
				}
			});

			if ($.ui !== undefined && $.ui.autocomplete !== undefined) {
				$.widget("custom.autocompleteLinkItem", $.ui.autocomplete, {
					_renderItem: function( ul, item ) {
						return $( "<li>" )
						.attr( "data-value", item.value )
						.append( '<a onclick="return false" href="' + item.value + '">' + item.label + "</a>" )
						.appendTo( ul );
						}
				});
			}

			//autocomplete input
			$("input[autocomplete]", $(env)).on("focus", function() {
				// TODO: check if attrs query-endpoint etc exists
				var queryEndpoint = $(this).attr( "query-endpoint" );
				var queryStr = $(this).attr("query");
				var apitype = $(this).attr("query-apitype");
				var queryValues = $(this).attr("query-values");
				var queryDataType = $(this).attr("query-datatype");

				switch (apitype) {
					case "sparql" :
						$(this).autocompleteLinkItem().autocompleteLinkItem({
							source: function( request, response ) {
								var query = queryStr.replace(/%s/g, "'" + request.term + "'");
								$.ajax({
									url: queryEndpoint,
									dataType: queryDataType,
									data: {
										query: query,
										format: "json"
									},
									success: function( data ) {
										response( $.map( data.results.bindings, function( item ) {
											var label = [];
											if ( _this.Hooks && typeof _this.Hooks.__autocompleteGetItem !== "undefined" )
												item = _this.Hooks.__autocompleteGetItem( item );
											$.each(item, function(k,v) {
												if ( k != "item" )
													label.push(v.value);
											});
											label = label.join(" | ");
											return {
												label: label, // wird angezeigt
												value: item.item.value
											}
						            	}));
						            },
						            error: function(err) {
						            	_this.showAlert( "error", 'Error on autocomplete: ' + JSON.stringify(err, null, ' ') );
						            }
								});
					      	},
					      	select : function( event, ui ) {
					      		if ( _this.Hooks && typeof _this.Hooks.__selectAutocompleteItem !== "undefined" )
									_this.Hooks.__selectAutocompleteItem( this, ui.item.value );
					      	},
							minLength: 2
						});
						break;

					case "local" :
						$(this).autocomplete({
							source: $.parseJSON( queryValues )
						});
						break;

					default :
						_this.showAlert( "error", "Unknown autocomplete apitype " + apitype );
				}
			});

			// trigger keyup on change autocomplete input
			$("input[autocomplete]", $(env)).on("change", function() {
				$(this).trigger("keyup");
			});

			if ( _this.Hooks && typeof _this.Hooks.__afterInitFormHandler!== "undefined" )
				_this.Hooks.__afterInitFormHandler( );

		},// end of initFormHandler

		/**
		  * Submit the form callback functions
		  */
		submit: function() {
			var _this = this;
			var proceed = true;

			this.$elem.find("input").each(function() {
				var valid = _this.userInputValidation( $(this) );
				if ( ! valid ) {
					proceed = false;
					$('html, body').animate({ scrollTop: $(this).offset().top }, 100);
					return true;
				}
			});

			// proceed
			if ( proceed ) {
				var json_result = _this.createResult();
				console.log('json_result', json_result);

				jsonld.expand(json_result, function(err, expanded) {
					if( err ) {
						_this.showAlert( "error", "Error on creating the expanded result: " + JSON.stringify(err, null, ' ') );
						return false;
					}

					if ( _this.data ) {
						expanded = _this.mergeExistingDataWithResult( expanded );
					}

					_this.RESULT = expanded;
					if ( _this.settings.debug ) {
						console.log( "RDForm Result = ", _this.RESULT );
					}

					if ( _this.settings.verbose ) {
						_this.outputResult();
					}

					// this calls the callback function
					// by using call() it replaces the "this" value for the method
					// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
					_this.settings.submit.call( _this.RESULT, _this.RESULT );
				});
			}
		},

		// Abort form
		abort : function() {
			this.settings.abort.call();
		},

		/**
		  * Walk every class (div[typeof]) in the HTML form to create the RESULT
		  *
		  * @return void
		  */
		createResult: function() {
			var _this = this;

			if ( _this.Hooks && typeof _this.Hooks.__createResult !== "undefined" )
				_this.Hooks.__createResult();

			json_result = new Object();

			// walk every root class
			_this.$elem.children("div[typeof]").each(function( ci ) {
				var curClass = _this.getResultClass( $(this) );
				if ( ! $.isEmptyObject( curClass ) ) { // dont add empty classes
					if (! json_result.hasOwnProperty( curClass["@resource"] ) ) {
						json_result[ curClass["@resource"] ] = new Array();
					}
					json_result[ curClass["@resource"] ].push( curClass["@value"] );
				}
			});

			// make one length array classes to normal classes
			for ( var ci in json_result ) {
				if ( json_result[ci].length == 1 ) {
					json_result[ci] = json_result[ci][0];
				}
			}

			// if just one rootClass set as only class
			if ( Object.keys(json_result).length == 1 ) {
				for ( var ci in json_result ) {
					json_result = json_result[ci];
				}
			}

			// add context
			if ( _this.MODEL[0].hasOwnProperty("@context") ) {
				json_result['@context'] = _this.MODEL[0]["@context"];
			}

			return json_result;
		},

		/**
		  * Add a class and its properties in the RESULT array
		  *
		  * @cls HTML DOM object of the current class
		  * @return the ID for this class or the return ID
		  */
		getResultClass: function( cls ) {
			var _this = this;
			var thisClass = new Object(),
				properties = new Object();

			// walk each property (div-group literal,resource,hidden)
			cls.children("div").each(function() {

				var property = new Object();
				//var curPropName = "";

				if ( _this.Hooks && typeof _this.Hooks.__createResultClassProperty !== "undefined" )
					_this.Hooks.__createResultClassProperty( $(this) ); // TODO: give input or resource class

				// decide if its a literal or resource property
				if ( $(this).hasClass(_this._ID_ + "-literal-group") ) {
					property = _this.getResultLiteral( $(this).find('input,textarea,select') );
				}
				else if ( $(this).hasClass(_this._ID_ + "-resource-group") ) {
					property = _this.getResultResource( $(this) );
				}

				if ( ! $.isEmptyObject( property ) ) { // dont add empty properties
					if (! properties.hasOwnProperty( property["@resource"] ) ) {
						properties[ property["@resource"] ] = new Array();
					}
					properties[ property["@resource"] ].push( property["@value"] );
				}
			});

			if ( $.isEmptyObject( properties ) ) { // dont create empty classes
				//console.log( 'Skip class "' + $(cls).attr("typeof") + '" because it has no properties' );
				return new Object();
			}

			// make one length array properties to normal properties
			for ( pi in properties ) {
				if ( properties[pi].length == 1 ) {
					properties[pi] = properties[pi][0];
				}
			}

			if (_this.Hooks && typeof _this.Hooks.__createClass !== "undefined" )
				_this.Hooks.__createClass( $(cls) );

			var classResource = $(cls).attr("resource");
			var wildcardsFct = _this.replaceWildcards( classResource, $(cls), _this.getWebsafeString );

			// dont save classes with wildcard pointers when every value is empty
			if ( classResource.search(/\{.*\}/) != -1 && wildcardsFct['count'] == 0 ) {
				console.log( 'Skip class "' + $(cls).attr("typeof") + '" because it has wildcards, but every pointer property is empty.' );
				return new Object();
			}

			thisClass["@resource"] = ( $(cls).attr("name") ) ? $(cls).attr("name") : $(cls).attr("typeof");

			// if it has a return-resource take this for the return
			if ( $(cls).attr("return-resource") ) {
				thisClass["@resource"] = _this.replaceWildcards( $(cls).attr("return-resource"), $(cls), _this.getWebsafeString )['str'];
			}

			thisClass["@value"] = { "@id" : wildcardsFct['str'], "@type" : $(cls).attr("typeof") };
			$.extend(true, thisClass["@value"], properties );

			if (_this.Hooks && typeof _this.Hooks.__createdClass !== "undefined" )
				thisClass = _this.Hooks.__createdClass( thisClass );

			return thisClass;
		},

		/**
		  * Create a literal property (text,boolean,textarea) for the RESULT
		  *
		  * @literal HTML DOM Object of the current hidden input
		  * @return Object of this property
		  */
		getResultLiteral: function( literal ) {
			var _this = this;
			var thisLiteral = new Object();

			if ( $(literal).length == 0 ) {
				return thisLiteral; // return empty object fur null litreal e.g. add btn
			}
			var val = $(literal).val();

			if ( $(literal).attr("type") == "checkbox" ) {
				val = $(literal).prop("checked").toString();
			}
			if ( $(literal).prop("tagName") == "SELECT" ) {
				val = $( ":selected", $(literal) ).val();
			}

			if ( val != "" ) {
				thisLiteral["@value"] = _this.replaceWildcards( val, $(literal).parentsUntil("div[typeof]").parent() )['str'];
				thisLiteral['@resource'] = $(literal).attr("name");

				if ( $(literal).attr("datatype") !== undefined ) {
					_this.MODEL[0]["@context"][$(literal).attr("name")]["@type"] = $(literal).attr("datatype");
				}
			}
			return thisLiteral;
		},

		/**
		  * Create a resource-class property for the RESULT
		  *
		  * @env HTML DOM Object of the current resource group
		  * @return Object of this resource property
		  */
		getResultResource: function( env ) {
			var _this = this;
			var resource = new Object(),
				resourceGroup;

			// search for a normal resource class children
			resourceGroup = $(env).children('div[typeof]');
			if ( resourceGroup.length > 0 ) {
				// create a new class for this resource and take its return ID
				resource = _this.getResultClass( resourceGroup );
			}
			// search for a external resource input
			else if ( $(env).find('input[external],select[external]').length > 0 ) {
				resourceGroup = $(env).find('input[external],select[external]');
				var val = $(resourceGroup).val()
				if ( $(resourceGroup).prop("tagName") == "SELECT" ) {
					val = $( ":selected", $(resourceGroup) ).val();
				}
				if ( val == "" ) {
					return resource;
				}

				resource['@resource'] = $(resourceGroup).attr("name");
				resource["@value"] = {
					"@id" : _this.replaceWildcards( val, $(env).parent("div[typeof]"), _this.getWebsafeString )['str']
				};
			}
			return resource;
		},

		/**
		  * Merge existing data with tha data of the form. Add properties to the result which were not in the form.
		  * @param Array result array of the form data
		  * @return Array result
		  */
		mergeExistingDataWithResult: function( result ) {
			var _this = this;
			var model = _this.MODEL;
			$.each( _this.data, function( key0, value0 ) {
				$.each( value0, function( key1, value1) {
					// may merge properties in given data, if their path is not in the model
					if (_this.replaceStrPrefix(key1) == "http://www.w3.org/ns/shacl#property") {
						$.each( value1, function( key2, value2) {
							var type = value2.hasOwnProperty("@type")
								? value2["@type"][0]
								: null;
							var path = value2.hasOwnProperty("http://www.w3.org/ns/shacl#path")
								? value2["http://www.w3.org/ns/shacl#path"][0]["@id"]
								: null;

							var modelHasProperty = Object.keys(model[key0]).find(function(v) {
								return model[key0][v].length > 0
									&& model[key0][v][0].hasOwnProperty("@type")
									&& model[key0][v][0]["@type"] == type
									&& model[key0][v][0].hasOwnProperty("http://www.w3.org/ns/shacl#path")
									&& model[key0][v][0]["http://www.w3.org/ns/shacl#path"][0]["@rdform"]["value"] == path;
							})

							if (modelHasProperty === undefined) {
								result[key0][ _this.replaceStrPrefix( key1 ) ] = value1;
								if (result[key0].hasOwnProperty("http://www.w3.org/ns/shacl#property")) {
									result[key0]["http://www.w3.org/ns/shacl#property"].push(value2);
								} else {
									result[key0]["http://www.w3.org/ns/shacl#property"] = [value2];
								}
							}
						})
					}
					else if (
							! model[key0].hasOwnProperty(_this.replaceStrPrefix(key1)) &&
							! model[key0].hasOwnProperty(_this.getUriPrefix(key1))
					) {
						result[key0][ _this.replaceStrPrefix( key1 ) ] = value1;
					}
				});
			});
			return result;
		},

		/**
		  *	Create result string from baseprefix, prefixes and RESULT array and output it in the result textarea
		  *
		  * @return void
		*/
		outputResult: function() {
			// add result div
			if ( $("." + this._ID_ + "-result").length == 0 ) {
				this.$elem.after( '<div class="row '+this._ID_+'-result-container"><legend>'+ this.l("Result") +'</legend><div class="col-xs-12"><textarea class="form-control '+this._ID_+'-result" rows="10"></textarea></div></div>' );
			}

			var resultStr = JSON.stringify(this.RESULT, null, '\t');

			$("."+this._ID_+"-result-container").show();
			$("."+this._ID_+"-result").val( resultStr );
			var lines = resultStr.split("\n");
			$("."+this._ID_+"-result").attr( "rows" , ( lines.length ) );
			$('html, body').animate({ scrollTop: $("."+this._ID_+"-result-container").offset().top }, 200);
		},

		/*******************************************************
		 * Helper functions
		 *
		 *******************************************************/

		/* Replacing wildcards {...} with the value of the property in the envoirement class or with values in the arguments attribute of resource-classes
		 *
		 * @str String value with the wildcards
		 * @envClass DOM element where to find inputs (properties)
		 * @strFc Function, if defined the wildcard value will be passed to this
		 *
		 * @return Object. Keys: 'str', 'count'
		 */
		replaceWildcards: function( str, envClass, strFct ) {
			var _this = this;
			var counted = 0;

			if ( str.search(/\{.*\}/) != -1 ) { // look if it has wilcards {...}

				var strWcds = str.match(/\{[^\}]*/gi);
				for ( var i in strWcds ) {
					var wcd = strWcds[i].substring( 1 );
					var env = envClass;

					var wcdVal = _this.getElement( env.find('input,textarea'), 'name', wcd )

					// search the wilcard in the arguments attribute of resource classes
					//if ( wcdVal.length == 0 && env.attr( "arguments" ) ) {
						//var args = $.parseJSON( env.attr( "arguments" ) );
					if ( wcdVal.length == 0 && env.data(_this._ID_ + "-model")["@rdform"]["arguments"] !== undefined ) {
						var args = env.data(_this._ID_ + "-model")["@rdform"]["arguments"];
						for ( var ai in args ) {
							args[ai] = args[ai].toString();
							if ( wcd == ai ) {
								if ( args[ai].search(/\{.*\}/) != -1 ) {
									env = envClass.parentsUntil("div[typeof]").parent();
								}
								wcdVal = $( '<input type="hidden" name="' + ai + '" value="' + args[ai] + '" />' );
								break;
							}
						}
					}

					// test if property exists
					if ( wcdVal.length == 0 ) {
						this.showAlert( "error", 'Error: cannot find property "' + wcd + '" for wildcard replacement.' );
						continue;
					}

					switch ( wcdVal.attr("type") ) {

						case 'checkbox' :
							wcdVal = ( wcdVal.val() != "" ) ? wcdVal.val() : wcdVal.prop("checked").toString();
							break;

						default :
							wcdVal = _this.replaceWildcards( wcdVal.val(), env )['str'];
					}

					// passing wildcard value to the function
					if ( strFct !== undefined ) {
						wcdVal = strFct(wcdVal);
					}

					// regex: replace the {wildard pointer} with the value
					var regex = new RegExp("\{" + wcd + "\}", "g");
					if ( wcdVal != "" ) {
						++counted;	// count not empty properties
						str = str.replace(regex, wcdVal );
					} else {
						str = str.replace(regex, '' );
					}
				}
			}
			return new Object( { 'str' : str, 'count' : counted } );
		},

		/*
		 * Validate and correct input values depending on the datatype after user changed the value
		 *
		 * @property DOM object with input element
		 * @return void
		 */
		userInputValidation: function ( property ) {
			var _this = this;
			var valid = true;

			$(property).parentsUntil("div.form-group").parent().removeClass("has-error has-feedback");
			$(property).next("span.glyphicon-warning-sign").remove();

			if ( _this.Hooks && typeof _this.Hooks.__userInputValidation !== "undefined" ) {
				if ( _this.Hooks.__userInputValidation( $(property) ) == false )
					valid = false;
			}
			var value = $(property).val();
			value = value.trim();

			if ( $(property).attr("required") ) {
				if ( $(property).val() == "" ) {
					valid = false;
				}
			}
			else if ( $(property).attr("datatype") && $(property).val() != "" ) {

				if (   $(property).attr("datatype") == "xsd:date"
					|| $(property).attr("datatype") == "xsd:gYearMonth"
					|| $(property).attr("datatype") == "xsd:gYear"
				) {
					var datatype = "xsd:date";
					$(property).val( value.slice(0, 10) ); // max default date jjjj-mm-tt

					value = $(property).val();
					value = value.replace(/\./g, '-');
					value = value.replace(/[^\d-]/g, '');

					if ( value.search(/^\d{4}$/) != -1 ) {
						datatype = "xsd:gYear";
					}
					else if ( value.search(/^\d{4}-\d{2}$/) != -1 ) {
						datatype = "xsd:gYearMonth";
					}
					else if ( value.search(/^\d{4}-\d{2}-\d{2}$/) != -1 ) {
						datatype = "xsd:date";
					}
					else {
						_this.showAlert( "warning", 'Unknown xsd:date format in "'+ property.attr("name") +'"' );
						valid = false;
					}
					$(property).attr( "datatype", datatype );

					var dateTypeSelect = $(property).parentsUntil("div.form-group").parent().find('select.'+_this._ID_+'-date-type-select');
					if ( dateTypeSelect !== undefined ) {
						$("option[value='"+datatype+"']", dateTypeSelect).prop("selected", true);
					}
				}

				if ( $(property).attr("datatype").indexOf(":int") >= 0 ) {
					value = value.replace(/[^\d]/g, '');
				}
			}
			else if ( $(property).prop("type") == "url" && $(property).val() != ""  ) {
				$(property).val( _this.replaceStrPrefix($(property).val()) ); // maybe it contains a prefix
				if ( $(property).val().search(/^\w+\:.*\w+/) == -1 ) {
					valid = false;
				}
			}

			if ( ! valid ) {
				$(property).parentsUntil("div.form-group").parent().addClass("has-error has-feedback");
				$(property).after( '<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>' );
				return false;
			}

			$(property).attr('value', value );
			return true;
		},

		/**
		  * Validate if a string as a prefix which is defined in the form
		  *
		  * @str String to check
		  * @return Boolean if its valid or null if the string does not has any prefix
		  */
		validatePrefix: function( str ) {
			var _this = this;
			if ( str === undefined ) return null

			if ( str.search(":") != -1 ) {
				str = str.split(":")[0];
			} else {
				return null;
			}

			if ( str == "http" ) {
				return true;
			}

			if ( _this.MODEL[0]["@context"].hasOwnProperty(str) ) {
				return true;
			}

			this.showAlert( "warning", "Prefix \"" + str + "\" not defined in the form model (see attribute 'prefix')" );
			return false;
		},

		/**
		  * Set Base Uri for the model
		  *
		  * @str URI String
		  */
		setBaseUri : function( uri ) {
			if ( uri !== null ) {
				this.MODEL[0]["@context"]["@base"] = uri;
			}
		},

		/**
		  * Creating random hash of a string (non unique secure!)
		  *
		  * @str String
		  * @deprecated, use wildcard function in Hooks
		  */
		getHash : function( str ) {
			return (str.length * Math.random()).toString(36).slice(2);
		},

		/**
		  * Remove accents, umlauts, special chars, ... from string to get a web safe string
		  *
		  * @str String
		  * return String with only a-z0-9-_
		  */
		getWebsafeString: function ( str ) {
			if ( str === undefined ) return '';

			// replace dictionary
			var dict = {
				"ä": "ae", "ö": "oe", "ü": "ue",
				"Ä": "Ae", "Ö": "Oe", "Ü": "Ue",
				"á": "a", "à": "a", "â": "a", "ã": "a",
				"é": "e", "è": "e", "ê": "e",
				"ú": "u", "ù": "u", "û": "u",
				"ó": "o", "ò": "o", "ô": "o",
				"Á": "A", "À": "A", "Â": "A", "Ã": "A",
				"É": "E", "È": "E", "Ê": "E",
				"Ú": "U", "Ù": "U", "Û": "U",
				"Ó": "O", "Ò": "O", "Ô": "O",
				"ß": "ss"
			}
			// replace not alphabetical chars if its in dictionary
			// TODO: test if str empty
			str = str.replace(/[^\w ]/gi, function(char) {
				return dict[char] || char;
			});
			str = str.replace(/ /gi,'_');
			return str.replace(/[^a-z0-9-_]/gi,'');
		},

		/**
		 * Search und reaplace a prefix in a String if defined in the context
		 *
		 * @param String str
		 * @return String with (maybe) replaced prefix
		 */
		replaceStrPrefix : function( str ) {
			var _this = this;
			if ( str === undefined ) return str;

			if ( str.search(":") != -1 ) {
				var str_arr = str.split(":");
			} else {
				return str;
			}
			if ( str_arr[0] == "http" ) {
				return str;
			}

			if ( _this.MODEL[0]["@context"].hasOwnProperty(str_arr[0]) ) {
				return _this.MODEL[0]["@context"][str_arr[0]]["@id"] + str_arr[1];
			}

			return str;
		},

		/**
		  * Return the compact uri (prefix:name)
		  *
		  * @param {String} str The Uri
		  * @return String Replaced Uri with prefix (if defined in model->@context)
		*/
		getUriPrefix: function( str ) {
			var _this = this;
			var strShort = str;
			if ( str === undefined ) return str;

			if (_this.MODEL[0]["@context"]["@base"]) {
				if (str.includes(_this.MODEL[0]["@context"]["@base"]))
					return str.slice( _this.MODEL[0]["@context"]["@base"].length )
			}

			$.each( _this.MODEL[0]["@context"], function(key,val) {
				if ( 	val.hasOwnProperty("@id") &&
						str.search(val["@id"]) != -1
				 ) {
				 	var regex = new RegExp(val["@id"], "g");
					strShort =  str.replace( regex, key + ":" );
					return false;
				}
			} );

			return strShort;
		},

		/**
		 * Filter DOM group for an element by any attribute
		 * @param DOM env The DOM-group where to llok for
		 * @param String attr The attribute you are looking for
		 * @param String val The value of the attribute
		 * @return DOM element
		 */
		getElement : function( env, attr, val ) {
			var _this = this;
			var el = $(env).filter(function(index) {
				return _this.matchUris($(this).attr(attr), val);
			});
			return el;
		},

		/**
		 * Return true if two uris (string) are equal (with or without prefix)
		 * @param String uri1
		 * @param String uri2
		 * @return true
		 */
		matchUris: function(uri1, uri2) {
			var _this = this;
			return uri1 === uri2
				|| _this.replaceStrPrefix(uri1) === uri2
				|| _this.getUriPrefix(uri1) === uri2;
		},

		/**
		  * Translate a string
		  *
		  * @str The string to translate. It can contain the l-function, that l(...) will be replaced
		  * @param String. If given, %s in str will be replaced with param
		  *
		  * @return String. The translated string
		  */
		l: function( str, param ) {

			if ( typeof str === "string" && str != "" ) {

				var translate = str.replace(/.*l\((.*?)\).*/, '$1');
				var translated = translate;

				if ( this.translations && this.translations[translate] ) {
					translated = this.translations[translate];
				}

				if ( str.search( /l\(/ ) != -1 ) {
					str = str.replace(/l\(.*?\)/, translated);
				} else {
					str = str.replace(translate, translated);
				}

				if ( typeof param !== undefined ) {
					str = str.replace( /%s/g, param );
				}
			}
			return str;
		},

		/**
		  * Show a message in a colorred box above the form
		  *
		  * @param String type Message type (succes, error, warning)
		  * @param String msg The message
		  * @return viod
		  */
		showAlert : function( type, msg ) {
			var cls = "";
			switch ( type ) {
				case "success" :
					cls = "alert-success";
					break;
				case "error" :
					cls = "alert-danger";
					break;
				case "warning" :
					cls = "alert-warning";
					break;
				default :
					cls = "alert-info";
			}
			if ( this.settings.verbose || type == "error" || type == "warning" ) {
				this.alertArea.append('<p class="alert '+cls+'" role="alert">' + msg + '</p>').show();
				$('html, body').animate({ scrollTop: (this.alertArea.offset().top) }, 100);
			}
			else if ( this.settings.debug ) {
				console.log( "RDForm ("+type+"): " + msg );
			}
		},
	}; // end of rdform.prototype

	/************************************************************************
	* RDForm
	************************************************************************/
	$.fn.RDForm = function( option, settings ) {

		// decide if settings are getted or setted
		if (typeof option === 'object') {
			settings = option;
		} else if (typeof option === 'string') {
			if ( settings ) {
				var defaultSettings = new Object();
				defaultSettings[option] = settings;
				this.data('_rdform_settings', defaultSettings );
				return true;
			} else {
				return this.data('_rdform_settings').settings[option];
			}
		}

		// merge object data with settings if any
		if ( this.data('_rdform_settings') ) {
			settings = $.extend({}, this.data('_rdform_settings'), settings || {});
		}

		// merge default settings with given settings
		settings = $.extend({}, $.fn.RDForm.defaultSettings, settings || {});

		return this.each(function() {
			var elem = $(this);
			var rdform = new RDForm(this, settings);

			// prepare plugin: may loading hooks, lang, ...
			rdform.prepare();

			// create form
			rdform.init();

			// store settings at element
			elem.data("_rdform_settings", settings);

			// store this class at element
			elem.data("_rdform_class", rdform);

			// callback submit function
			elem.submit(function() {
				rdform.submit();
				return false;
			});
		});
	};

	/************************************************************************
	* Default settings
	************************************************************************/
	$.fn.RDForm.defaultSettings = {
		base 		: null,
		prefixes 	: {
			'bio'	: 'http://vocab.org/bio/0.1/',
			'foaf'	: 'http://xmlns.com/foaf/0.1/',
			'rdf'	: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
			'rdfs'	: 'http://www.w3.org/2000/01/rdf-schema#',
			'dc'	: 'http://purl.org/dc/elements/1.1/',
			'xsd'	: 'http://www.w3.org/2001/XMLSchema#',
			'owl'	: 'http://www.w3.org/2002/07/owl#',
			'sh'	: 'http://www.w3.org/ns/shacl#',
			'rdform' : 'https://github.com/simeonackermann/RDForm/',
			'dash'  : 'http://datashapes.org/'
		},
		template	: null,
		data 		: null,
		hooks 		: null,
		rootShape	: null,
		templateExtension : null,
		lang 		: null,
		cache 		: false,
		verbose 	: false,
		debug 		: false,
		submit 		: function() {},
		abort 		: function() {},
	};



}));


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3084":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("1157"), __webpack_require__("4309") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

return $.widget;

} ) );


/***/ }),

/***/ "30ba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * An implementation of the RDF Dataset Normalization specification.
 * This library works in the browser and node.js.
 *
 * BSD 3-Clause License
 * Copyright (c) 2016-2017 Digital Bazaar, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 *
 * Neither the name of the Digital Bazaar, Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


const util = __webpack_require__("7164");
const URDNA2015 = __webpack_require__("ae29");
const URGNA2012 = __webpack_require__("458f");
const URDNA2015Sync = __webpack_require__("4284");
const URGNA2012Sync = __webpack_require__("a757");

// optional native support
let rdfCanonizeNative;
try {
  rdfCanonizeNative = __webpack_require__(0);
} catch(e) {}

const api = {};
module.exports = api;

// expose helpers
api.NQuads = __webpack_require__("65e1");
api.IdentifierIssuer = __webpack_require__("8acc");

/**
 * Get or set native API.
 *
 * @param api the native API.
 *
 * @return the currently set native API.
 */
api._rdfCanonizeNative = function(api) {
  if(api) {
    rdfCanonizeNative = api;
  }
  return rdfCanonizeNative;
};

/**
 * Asynchronously canonizes an RDF dataset.
 *
 * @param dataset the dataset to canonize.
 * @param options the options to use:
 *          algorithm the canonicalization algorithm to use, `URDNA2015` or
 *            `URGNA2012`.
 *          [useNative] use native implementation (default: false).
 * @param [callback(err, canonical)] called once the operation completes.
 *
 * @return a Promise that resolves to the canonicalized RDF Dataset.
 */
api.canonize = util.callbackify(async function(dataset, options) {
  let callback;
  const promise = new Promise((resolve, reject) => {
    callback = (err, canonical) => {
      if(err) {
        return reject(err);
      }

      /*if(options.format === 'application/n-quads') {
        canonical = canonical.join('');
      }
      canonical = _parseNQuads(canonical.join(''));*/

      resolve(canonical);
    };
  });

  // back-compat with legacy dataset
  if(!Array.isArray(dataset)) {
    dataset = api.NQuads.legacyDatasetToQuads(dataset);
  }

  // TODO: convert algorithms to Promise-based async
  if(options.useNative) {
    if(rdfCanonizeNative) {
      rdfCanonizeNative.canonize(dataset, options, callback);
    } else {
      throw new Error('rdf-canonize-native not available');
    }
  } else {
    if(options.algorithm === 'URDNA2015') {
      new URDNA2015(options).main(dataset, callback);
    } else if(options.algorithm === 'URGNA2012') {
      new URGNA2012(options).main(dataset, callback);
    } else if(!('algorithm' in options)) {
      throw new Error('No RDF Dataset Canonicalization algorithm specified.');
    } else {
      throw new Error(
        'Invalid RDF Dataset Canonicalization algorithm: ' + options.algorithm);
    }
  }

  return promise;
});

/**
 * Synchronously canonizes an RDF dataset.
 *
 * @param dataset the dataset to canonize.
 * @param options the options to use:
 *          algorithm the canonicalization algorithm to use, `URDNA2015` or
 *            `URGNA2012`.
 *          [useNative] use native implementation (default: false).
 *
 * @return the RDF dataset in canonical form.
 */
api.canonizeSync = function(dataset, options) {
  // back-compat with legacy dataset
  if(!Array.isArray(dataset)) {
    dataset = api.NQuads.legacyDatasetToQuads(dataset);
  }

  if(options.useNative) {
    if(rdfCanonizeNative) {
      return rdfCanonizeNative.canonizeSync(dataset, options);
    }
    throw new Error('rdf-canonize-native not available');
  }
  if(options.algorithm === 'URDNA2015') {
    return new URDNA2015Sync(options).main(dataset);
  } else if(options.algorithm === 'URGNA2012') {
    return new URGNA2012Sync(options).main(dataset);
  }
  if(!('algorithm' in options)) {
    throw new Error('No RDF Dataset Canonicalization algorithm specified.');
  }
  throw new Error(
    'Invalid RDF Dataset Canonicalization algorithm: ' + options.algorithm);
};


/***/ }),

/***/ "40ce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const {callbackify, normalizeDocumentLoader} = __webpack_require__("89ae");

module.exports = class RequestQueue {
  /**
   * Creates a simple queue for requesting documents.
   */
  constructor() {
    this._requests = {};
    this.add = callbackify(this.add.bind(this));
  }

  wrapLoader(loader) {
    const self = this;
    self._loader = normalizeDocumentLoader(loader);
    return function(/* url */) {
      return self.add.apply(self, arguments);
    };
  }

  async add(url) {
    const self = this;

    let promise = self._requests[url];
    if(promise) {
      // URL already queued, wait for it to load
      return Promise.resolve(promise);
    }

    // queue URL and load it
    promise = self._requests[url] = self._loader(url);

    try {
      return await promise;
    } finally {
      delete self._requests[url];
    }
  }
};


/***/ }),

/***/ "4142":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const {
  isSubjectReference: _isSubjectReference
} = __webpack_require__("c92f");

const {
  createMergedNodeMap: _createMergedNodeMap
} = __webpack_require__("796c");

const api = {};
module.exports = api;

/**
 * Performs JSON-LD flattening.
 *
 * @param input the expanded JSON-LD to flatten.
 *
 * @return the flattened output.
 */
api.flatten = input => {
  const defaultGraph = _createMergedNodeMap(input);

  // produce flattened output
  const flattened = [];
  const keys = Object.keys(defaultGraph).sort();
  for(let ki = 0; ki < keys.length; ++ki) {
    const node = defaultGraph[keys[ki]];
    // only add full subjects to top-level
    if(!_isSubjectReference(node)) {
      flattened.push(node);
    }
  }
  return flattened;
};


/***/ }),

/***/ "4284":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */


const IdentifierIssuer = __webpack_require__("8acc");
const MessageDigest = __webpack_require__("5a76");
const Permutator = __webpack_require__("900e");
const NQuads = __webpack_require__("65e1");
const util = __webpack_require__("7164");

const POSITIONS = {subject: 's', object: 'o', graph: 'g'};

module.exports = class URDNA2015Sync {
  constructor() {
    this.name = 'URDNA2015';
    this.blankNodeInfo = {};
    this.hashToBlankNodes = {};
    this.canonicalIssuer = new IdentifierIssuer('_:c14n');
    this.hashAlgorithm = 'sha256';
    this.quads;
  }

  // 4.4) Normalization Algorithm
  main(dataset) {
    const self = this;
    self.quads = dataset;

    // 1) Create the normalization state.

    // Note: Optimize by generating non-normalized blank node map concurrently.
    const nonNormalized = {};

    // 2) For every quad in input dataset:
    for(const quad of dataset) {
      // 2.1) For each blank node that occurs in the quad, add a reference
      // to the quad using the blank node identifier in the blank node to
      // quads map, creating a new entry if necessary.
      self.forEachComponent(quad, component => {
        if(component.termType !== 'BlankNode') {
          return;
        }
        const id = component.value;
        if(id in self.blankNodeInfo) {
          self.blankNodeInfo[id].quads.push(quad);
        } else {
          nonNormalized[id] = true;
          self.blankNodeInfo[id] = {quads: [quad]};
        }
      });
    }

    // 3) Create a list of non-normalized blank node identifiers
    // non-normalized identifiers and populate it using the keys from the
    // blank node to quads map.
    // Note: We use a map here and it was generated during step 2.

    // 4) Initialize simple, a boolean flag, to true.
    let simple = true;

    // 5) While simple is true, issue canonical identifiers for blank nodes:
    while(simple) {
      // 5.1) Set simple to false.
      simple = false;

      // 5.2) Clear hash to blank nodes map.
      self.hashToBlankNodes = {};

      // 5.3) For each blank node identifier identifier in non-normalized
      // identifiers:
      for(const id in nonNormalized) {
        // 5.3.1) Create a hash, hash, according to the Hash First Degree
        // Quads algorithm.
        const hash = self.hashFirstDegreeQuads(id);

        // 5.3.2) Add hash and identifier to hash to blank nodes map,
        // creating a new entry if necessary.
        if(hash in self.hashToBlankNodes) {
          self.hashToBlankNodes[hash].push(id);
        } else {
          self.hashToBlankNodes[hash] = [id];
        }
      }

      // 5.4) For each hash to identifier list mapping in hash to blank
      // nodes map, lexicographically-sorted by hash:
      const hashes = Object.keys(self.hashToBlankNodes).sort();
      for(let i = 0; i < hashes.length; ++i) {
        // 5.4.1) If the length of identifier list is greater than 1,
        // continue to the next mapping.
        const hash = hashes[i];
        const idList = self.hashToBlankNodes[hash];
        if(idList.length > 1) {
          continue;
        }

        // 5.4.2) Use the Issue Identifier algorithm, passing canonical
        // issuer and the single blank node identifier in identifier
        // list, identifier, to issue a canonical replacement identifier
        // for identifier.
        // TODO: consider changing `getId` to `issue`
        const id = idList[0];
        self.canonicalIssuer.getId(id);

        // 5.4.3) Remove identifier from non-normalized identifiers.
        delete nonNormalized[id];

        // 5.4.4) Remove hash from the hash to blank nodes map.
        delete self.hashToBlankNodes[hash];

        // 5.4.5) Set simple to true.
        simple = true;
      }
    }

    // 6) For each hash to identifier list mapping in hash to blank nodes map,
    // lexicographically-sorted by hash:
    const hashes = Object.keys(self.hashToBlankNodes).sort();
    for(let i = 0; i < hashes.length; ++i) {
      // 6.1) Create hash path list where each item will be a result of
      // running the Hash N-Degree Quads algorithm.
      const hashPathList = [];

      // 6.2) For each blank node identifier identifier in identifier list:
      const hash = hashes[i];
      const idList = self.hashToBlankNodes[hash];
      for(let j = 0; j < idList.length; ++j) {
        // 6.2.1) If a canonical identifier has already been issued for
        // identifier, continue to the next identifier.
        const id = idList[j];
        if(self.canonicalIssuer.hasId(id)) {
          continue;
        }

        // 6.2.2) Create temporary issuer, an identifier issuer
        // initialized with the prefix _:b.
        const issuer = new IdentifierIssuer('_:b');

        // 6.2.3) Use the Issue Identifier algorithm, passing temporary
        // issuer and identifier, to issue a new temporary blank node
        // identifier for identifier.
        issuer.getId(id);

        // 6.2.4) Run the Hash N-Degree Quads algorithm, passing
        // temporary issuer, and append the result to the hash path list.
        const result = self.hashNDegreeQuads(id, issuer);
        hashPathList.push(result);
      }

      // 6.3) For each result in the hash path list,
      // lexicographically-sorted by the hash in result:
      // TODO: use `String.localeCompare`?
      hashPathList.sort((a, b) =>
        (a.hash < b.hash) ? -1 : ((a.hash > b.hash) ? 1 : 0));
      for(let j = 0; j < hashPathList.length; ++j) {
        // 6.3.1) For each blank node identifier, existing identifier,
        // that was issued a temporary identifier by identifier issuer
        // in result, issue a canonical identifier, in the same order,
        // using the Issue Identifier algorithm, passing canonical
        // issuer and existing identifier.
        const result = hashPathList[j];
        for(const existing in result.issuer.existing) {
          self.canonicalIssuer.getId(existing);
        }
      }
    }

    /* Note: At this point all blank nodes in the set of RDF quads have been
    assigned canonical identifiers, which have been stored in the canonical
    issuer. Here each quad is updated by assigning each of its blank nodes
    its new identifier. */

    // 7) For each quad, quad, in input dataset:
    const normalized = [];
    for(let i = 0; i < self.quads.length; ++i) {
      // 7.1) Create a copy, quad copy, of quad and replace any existing
      // blank node identifiers using the canonical identifiers
      // previously issued by canonical issuer.
      // Note: We optimize away the copy here.
      const quad = self.quads[i];
      self.forEachComponent(quad, component => {
        if(component.termType === 'BlankNode' &&
          !component.value.startsWith(self.canonicalIssuer.prefix)) {
          component.value = self.canonicalIssuer.getId(component.value);
        }
      });
      // 7.2) Add quad copy to the normalized dataset.
      normalized.push(NQuads.serializeQuad(quad));
    }

    // sort normalized output
    normalized.sort();

    // 8) Return the normalized dataset.
    return normalized.join('');
  }

  // 4.6) Hash First Degree Quads
  hashFirstDegreeQuads(id) {
    const self = this;

    // return cached hash
    const info = self.blankNodeInfo[id];
    if('hash' in info) {
      return info.hash;
    }

    // 1) Initialize nquads to an empty list. It will be used to store quads in
    // N-Quads format.
    const nquads = [];

    // 2) Get the list of quads `quads` associated with the reference blank node
    // identifier in the blank node to quads map.
    const quads = info.quads;

    // 3) For each quad `quad` in `quads`:
    for(let i = 0; i < quads.length; ++i) {
      const quad = quads[i];

      // 3.1) Serialize the quad in N-Quads format with the following special
      // rule:

      // 3.1.1) If any component in quad is an blank node, then serialize it
      // using a special identifier as follows:
      const copy = {predicate: quad.predicate};
      self.forEachComponent(quad, (component, key) => {
        // 3.1.2) If the blank node's existing blank node identifier matches
        // the reference blank node identifier then use the blank node
        // identifier _:a, otherwise, use the blank node identifier _:z.
        copy[key] = self.modifyFirstDegreeComponent(id, component, key);
      });
      nquads.push(NQuads.serializeQuad(copy));
    }

    // 4) Sort nquads in lexicographical order.
    nquads.sort();

    // 5) Return the hash that results from passing the sorted, joined nquads
    // through the hash algorithm.
    const md = new MessageDigest(self.hashAlgorithm);
    for(let i = 0; i < nquads.length; ++i) {
      md.update(nquads[i]);
    }
    // TODO: represent as byte buffer instead to cut memory usage in half
    info.hash = md.digest();
    return info.hash;
  }

  // 4.7) Hash Related Blank Node
  hashRelatedBlankNode(related, quad, issuer, position) {
    const self = this;

    // 1) Set the identifier to use for related, preferring first the canonical
    // identifier for related if issued, second the identifier issued by issuer
    // if issued, and last, if necessary, the result of the Hash First Degree
    // Quads algorithm, passing related.
    let id;
    if(self.canonicalIssuer.hasId(related)) {
      id = self.canonicalIssuer.getId(related);
    } else if(issuer.hasId(related)) {
      id = issuer.getId(related);
    } else {
      id = self.hashFirstDegreeQuads(related);
    }

    // 2) Initialize a string input to the value of position.
    // Note: We use a hash object instead.
    const md = new MessageDigest(self.hashAlgorithm);
    md.update(position);

    // 3) If position is not g, append <, the value of the predicate in quad,
    // and > to input.
    if(position !== 'g') {
      md.update(self.getRelatedPredicate(quad));
    }

    // 4) Append identifier to input.
    md.update(id);

    // 5) Return the hash that results from passing input through the hash
    // algorithm.
    // TODO: represent as byte buffer instead to cut memory usage in half
    return md.digest();
  }

  // 4.8) Hash N-Degree Quads
  hashNDegreeQuads(id, issuer) {
    const self = this;

    // 1) Create a hash to related blank nodes map for storing hashes that
    // identify related blank nodes.
    // Note: 2) and 3) handled within `createHashToRelated`
    const md = new MessageDigest(self.hashAlgorithm);
    const hashToRelated = self.createHashToRelated(id, issuer);

    // 4) Create an empty string, data to hash.
    // Note: We created a hash object `md` above instead.

    // 5) For each related hash to blank node list mapping in hash to related
    // blank nodes map, sorted lexicographically by related hash:
    const hashes = Object.keys(hashToRelated).sort();
    for(let i = 0; i < hashes.length; ++i) {
      // 5.1) Append the related hash to the data to hash.
      const hash = hashes[i];
      md.update(hash);

      // 5.2) Create a string chosen path.
      let chosenPath = '';

      // 5.3) Create an unset chosen issuer variable.
      let chosenIssuer;

      // 5.4) For each permutation of blank node list:
      const permutator = new Permutator(hashToRelated[hash]);
      while(permutator.hasNext()) {
        const permutation = permutator.next();

        // 5.4.1) Create a copy of issuer, issuer copy.
        let issuerCopy = issuer.clone();

        // 5.4.2) Create a string path.
        let path = '';

        // 5.4.3) Create a recursion list, to store blank node identifiers
        // that must be recursively processed by this algorithm.
        const recursionList = [];

        // 5.4.4) For each related in permutation:
        let nextPermutation = false;
        for(let j = 0; j < permutation.length; ++j) {
          // 5.4.4.1) If a canonical identifier has been issued for
          // related, append it to path.
          const related = permutation[j];
          if(self.canonicalIssuer.hasId(related)) {
            path += self.canonicalIssuer.getId(related);
          } else {
            // 5.4.4.2) Otherwise:
            // 5.4.4.2.1) If issuer copy has not issued an identifier for
            // related, append related to recursion list.
            if(!issuerCopy.hasId(related)) {
              recursionList.push(related);
            }
            // 5.4.4.2.2) Use the Issue Identifier algorithm, passing
            // issuer copy and related and append the result to path.
            path += issuerCopy.getId(related);
          }

          // 5.4.4.3) If chosen path is not empty and the length of path
          // is greater than or equal to the length of chosen path and
          // path is lexicographically greater than chosen path, then
          // skip to the next permutation.
          // Note: Comparing path length to chosen path length can be optimized
          // away; only compare lexicographically.
          if(chosenPath.length !== 0 && path > chosenPath) {
            nextPermutation = true;
            break;
          }
        }

        if(nextPermutation) {
          continue;
        }

        // 5.4.5) For each related in recursion list:
        for(let j = 0; j < recursionList.length; ++j) {
          // 5.4.5.1) Set result to the result of recursively executing
          // the Hash N-Degree Quads algorithm, passing related for
          // identifier and issuer copy for path identifier issuer.
          const related = recursionList[j];
          const result = self.hashNDegreeQuads(related, issuerCopy);

          // 5.4.5.2) Use the Issue Identifier algorithm, passing issuer
          // copy and related and append the result to path.
          path += issuerCopy.getId(related);

          // 5.4.5.3) Append <, the hash in result, and > to path.
          path += '<' + result.hash + '>';

          // 5.4.5.4) Set issuer copy to the identifier issuer in
          // result.
          issuerCopy = result.issuer;

          // 5.4.5.5) If chosen path is not empty and the length of path
          // is greater than or equal to the length of chosen path and
          // path is lexicographically greater than chosen path, then
          // skip to the next permutation.
          // Note: Comparing path length to chosen path length can be optimized
          // away; only compare lexicographically.
          if(chosenPath.length !== 0 && path > chosenPath) {
            nextPermutation = true;
            break;
          }
        }

        if(nextPermutation) {
          continue;
        }

        // 5.4.6) If chosen path is empty or path is lexicographically
        // less than chosen path, set chosen path to path and chosen
        // issuer to issuer copy.
        if(chosenPath.length === 0 || path < chosenPath) {
          chosenPath = path;
          chosenIssuer = issuerCopy;
        }
      }

      // 5.5) Append chosen path to data to hash.
      md.update(chosenPath);

      // 5.6) Replace issuer, by reference, with chosen issuer.
      issuer = chosenIssuer;
    }

    // 6) Return issuer and the hash that results from passing data to hash
    // through the hash algorithm.
    return {hash: md.digest(), issuer};
  }

  // helper for modifying component during Hash First Degree Quads
  modifyFirstDegreeComponent(id, component) {
    if(component.termType !== 'BlankNode') {
      return component;
    }
    component = util.clone(component);
    component.value = (component.value === id ? '_:a' : '_:z');
    return component;
  }

  // helper for getting a related predicate
  getRelatedPredicate(quad) {
    return '<' + quad.predicate.value + '>';
  }

  // helper for creating hash to related blank nodes map
  createHashToRelated(id, issuer) {
    const self = this;

    // 1) Create a hash to related blank nodes map for storing hashes that
    // identify related blank nodes.
    const hashToRelated = {};

    // 2) Get a reference, quads, to the list of quads in the blank node to
    // quads map for the key identifier.
    const quads = self.blankNodeInfo[id].quads;

    // 3) For each quad in quads:
    for(let i = 0; i < quads.length; ++i) {
      // 3.1) For each component in quad, if component is the subject, object,
      // and graph name and it is a blank node that is not identified by
      // identifier:
      const quad = quads[i];
      for(const key in quad) {
        const component = quad[key];
        if(key === 'predicate' ||
          !(component.termType === 'BlankNode' && component.value !== id)) {
          continue;
        }
        // 3.1.1) Set hash to the result of the Hash Related Blank Node
        // algorithm, passing the blank node identifier for component as
        // related, quad, path identifier issuer as issuer, and position as
        // either s, o, or g based on whether component is a subject, object,
        // graph name, respectively.
        const related = component.value;
        const position = POSITIONS[key];
        const hash = self.hashRelatedBlankNode(related, quad, issuer, position);

        // 3.1.2) Add a mapping of hash to the blank node identifier for
        // component to hash to related blank nodes map, adding an entry as
        // necessary.
        if(hash in hashToRelated) {
          hashToRelated[hash].push(related);
        } else {
          hashToRelated[hash] = [related];
        }
      }
    }

    return hashToRelated;
  }

  // helper that iterates over quad components (skips predicate)
  forEachComponent(quad, op) {
    for(const key in quad) {
      // skip `predicate`
      if(key === 'predicate') {
        continue;
      }
      op(quad[key], key, quad);
    }
  }
};


/***/ }),

/***/ "4309":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("1157") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {

$.ui = $.ui || {};

return $.ui.version = "1.12.1";

} ) );


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "458f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */


const URDNA2015 = __webpack_require__("ae29");
const util = __webpack_require__("7164");

module.exports = class URDNA2012 extends URDNA2015 {
  constructor(options) {
    super(options);
    this.name = 'URGNA2012';
    this.hashAlgorithm = 'sha1';
  }

  // helper for modifying component during Hash First Degree Quads
  modifyFirstDegreeComponent(id, component, key) {
    if(component.termType !== 'BlankNode') {
      return component;
    }
    component = util.clone(component);
    if(key === 'name') {
      component.value = '_:g';
    } else {
      component.value = (component.value === id ? '_:a' : '_:z');
    }
    return component;
  }

  // helper for getting a related predicate
  getRelatedPredicate(quad) {
    return quad.predicate.value;
  }

  // helper for creating hash to related blank nodes map
  createHashToRelated(id, issuer, callback) {
    const self = this;

    // 1) Create a hash to related blank nodes map for storing hashes that
    // identify related blank nodes.
    const hashToRelated = {};

    // 2) Get a reference, quads, to the list of quads in the blank node to
    // quads map for the key identifier.
    const quads = self.blankNodeInfo[id].quads;

    // 3) For each quad in quads:
    self.forEach(quads, (quad, idx, callback) => {
      // 3.1) If the quad's subject is a blank node that does not match
      // identifier, set hash to the result of the Hash Related Blank Node
      // algorithm, passing the blank node identifier for subject as related,
      // quad, path identifier issuer as issuer, and p as position.
      let position;
      let related;
      if(quad.subject.termType === 'BlankNode' && quad.subject.value !== id) {
        related = quad.subject.value;
        position = 'p';
      } else if(
        quad.object.termType === 'BlankNode' && quad.object.value !== id) {
        // 3.2) Otherwise, if quad's object is a blank node that does not match
        // identifier, to the result of the Hash Related Blank Node algorithm,
        // passing the blank node identifier for object as related, quad, path
        // identifier issuer as issuer, and r as position.
        related = quad.object.value;
        position = 'r';
      } else {
        // 3.3) Otherwise, continue to the next quad.
        return callback();
      }
      // 3.4) Add a mapping of hash to the blank node identifier for the
      // component that matched (subject or object) to hash to related blank
      // nodes map, adding an entry as necessary.
      self.hashRelatedBlankNode(
        related, quad, issuer, position, (err, hash) => {
          if(err) {
            return callback(err);
          }
          if(hash in hashToRelated) {
            hashToRelated[hash].push(related);
          } else {
            hashToRelated[hash] = [related];
          }
          callback();
        });
    }, err => callback(err, hashToRelated));
  }
};


/***/ }),

/***/ "46bd":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/**
 * A JavaScript implementation of the JSON-LD API.
 *
 * @author Dave Longley
 *
 * @license BSD 3-Clause License
 * Copyright (c) 2011-2017 Digital Bazaar, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 *
 * Neither the name of the Digital Bazaar, Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
const canonize = __webpack_require__("30ba");
const util = __webpack_require__("89ae");
const IdentifierIssuer = util.IdentifierIssuer;
const JsonLdError = __webpack_require__("5950");
const NQuads = __webpack_require__("65c2");
const Rdfa = __webpack_require__("f9a0");

const {expand: _expand} = __webpack_require__("50ca");
const {flatten: _flatten} = __webpack_require__("4142");
const {fromRDF: _fromRDF} = __webpack_require__("6f5c");
const {toRDF: _toRDF} = __webpack_require__("7646");

const {
  frameMergedOrDefault: _frameMergedOrDefault
} = __webpack_require__("e6ed");

const {
  isArray: _isArray,
  isObject: _isObject,
  isString: _isString
} = __webpack_require__("68fa");

const {
  isSubjectReference: _isSubjectReference,
} = __webpack_require__("c92f");

const {
  getInitialContext: _getInitialContext,
  process: _processContext,
  getAllContexts: _getAllContexts
} = __webpack_require__("d1e7");

const {
  compact: _compact,
  compactIri: _compactIri,
  removePreserve: _removePreserve
} = __webpack_require__("4d68");

const {
  createNodeMap: _createNodeMap,
  createMergedNodeMap: _createMergedNodeMap,
  mergeNodeMaps: _mergeNodeMaps
} = __webpack_require__("796c");

// determine if in-browser or using node.js
const _nodejs = (
  typeof process !== 'undefined' && process.versions && process.versions.node);
const _browser = !_nodejs &&
  (typeof window !== 'undefined' || typeof self !== 'undefined');

/* eslint-disable indent */
// attaches jsonld API to the given object
const wrapper = function(jsonld) {

/** Registered RDF dataset parsers hashed by content-type. */
const _rdfParsers = {};

/* Core API */

/**
 * Performs JSON-LD compaction.
 *
 * @param input the JSON-LD input to compact.
 * @param ctx the context to compact with.
 * @param [options] options to use:
 *          [base] the base IRI to use.
 *          [compactArrays] true to compact arrays to single values when
 *            appropriate, false not to (default: true).
 *          [compactToRelative] true to compact IRIs to be relative to document
 *            base, false to keep absolute (default: true)
 *          [graph] true to always output a top-level graph (default: false).
 *          [expandContext] a context to expand with.
 *          [skipExpansion] true to assume the input is expanded and skip
 *            expansion, false not to, defaults to false.
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
 *          [expansionMap(info)] a function that can be used to custom map
 *            unmappable values (or to throw an error when they are detected);
 *            if this function returns `undefined` then the default behavior
 *            will be used.
 *          [framing] true if compaction is occuring during a framing operation.
 *          [compactionMap(info)] a function that can be used to custom map
 *            unmappable values (or to throw an error when they are detected);
 *            if this function returns `undefined` then the default behavior
 *            will be used.
 * @param [callback(err, compacted)] called once the operation completes.
 *
 * @return a Promise that resolves to the compacted output.
 */
jsonld.compact = util.callbackify(async function(input, ctx, options) {
  if(arguments.length < 2) {
    throw new TypeError('Could not compact, too few arguments.');
  }

  if(ctx === null) {
    throw new JsonLdError(
      'The compaction context must not be null.',
      'jsonld.CompactError', {code: 'invalid local context'});
  }

  // nothing to compact
  if(input === null) {
    return null;
  }

  // set default options
  options = _setDefaults(options, {
    base: _isString(input) ? input : '',
    compactArrays: true,
    compactToRelative: true,
    graph: false,
    skipExpansion: false,
    link: false,
    issuer: new IdentifierIssuer('_:b')
  });
  if(options.link) {
    // force skip expansion when linking, "link" is not part of the public
    // API, it should only be called from framing
    options.skipExpansion = true;
  }
  if(!options.compactToRelative) {
    delete options.base;
  }

  // expand input
  let expanded;
  if(options.skipExpansion) {
    expanded = input;
  } else {
    expanded = await jsonld.expand(input, options);
  }

  // process context
  const activeCtx = await jsonld.processContext(
    _getInitialContext(options), ctx, options);

  // do compaction
  let compacted = _compact({
    activeCtx,
    element: expanded,
    options,
    compactionMap: options.compactionMap
  });

  // perform clean up
  if(options.compactArrays && !options.graph && _isArray(compacted)) {
    if(compacted.length === 1) {
      // simplify to a single item
      compacted = compacted[0];
    } else if(compacted.length === 0) {
      // simplify to an empty object
      compacted = {};
    }
  } else if(options.graph && _isObject(compacted)) {
    // always use array if graph option is on
    compacted = [compacted];
  }

  // follow @context key
  if(_isObject(ctx) && '@context' in ctx) {
    ctx = ctx['@context'];
  }

  // build output context
  ctx = util.clone(ctx);
  if(!_isArray(ctx)) {
    ctx = [ctx];
  }
  // remove empty contexts
  const tmp = ctx;
  ctx = [];
  for(let i = 0; i < tmp.length; ++i) {
    if(!_isObject(tmp[i]) || Object.keys(tmp[i]).length > 0) {
      ctx.push(tmp[i]);
    }
  }

  // remove array if only one context
  const hasContext = (ctx.length > 0);
  if(ctx.length === 1) {
    ctx = ctx[0];
  }

  // add context and/or @graph
  if(_isArray(compacted)) {
    // use '@graph' keyword
    const graphAlias = _compactIri({
      activeCtx, iri: '@graph', relativeTo: {vocab: true}
    });
    const graph = compacted;
    compacted = {};
    if(hasContext) {
      compacted['@context'] = ctx;
    }
    compacted[graphAlias] = graph;
  } else if(_isObject(compacted) && hasContext) {
    // reorder keys so @context is first
    const graph = compacted;
    compacted = {'@context': ctx};
    for(const key in graph) {
      compacted[key] = graph[key];
    }
  }

  if(options.framing) {
    // get graph alias
    const graph = _compactIri({
      activeCtx, iri: '@graph', relativeTo: {vocab: true}
    });
    // remove @preserve from results
    options.link = {};
    compacted[graph] = _removePreserve(activeCtx, compacted[graph], options);
  }

  return compacted;
});

/**
 * Performs JSON-LD expansion.
 *
 * @param input the JSON-LD input to expand.
 * @param [options] the options to use:
 *          [base] the base IRI to use.
 *          [expandContext] a context to expand with.
 *          [keepFreeFloatingNodes] true to keep free-floating nodes,
 *            false not to, defaults to false.
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
 *          [expansionMap(info)] a function that can be used to custom map
 *            unmappable values (or to throw an error when they are detected);
 *            if this function returns `undefined` then the default behavior
 *            will be used.
 * @param [callback(err, expanded)] called once the operation completes.
 *
 * @return a Promise that resolves to the expanded output.
 */
jsonld.expand = util.callbackify(async function(input, options) {
  if(arguments.length < 1) {
    throw new TypeError('Could not expand, too few arguments.');
  }

  // set default options
  options = _setDefaults(options, {
    keepFreeFloatingNodes: false
  });
  if(options.expansionMap === false) {
    options.expansionMap = undefined;
  }

  // build set of objects that may have @contexts to resolve
  const toResolve = {};

  // build set of contexts to process prior to expansion
  const contextsToProcess = [];

  // if an `expandContext` has been given ensure it gets resolved
  if('expandContext' in options) {
    const expandContext = util.clone(options.expandContext);
    if(_isObject(expandContext) && '@context' in expandContext) {
      toResolve.expandContext = expandContext;
    } else {
      toResolve.expandContext = {'@context': expandContext};
    }
    contextsToProcess.push(toResolve.expandContext);
  }

  // if input is a string, attempt to dereference remote document
  let defaultBase;
  if(!_isString(input)) {
    // input is not a URL, do not need to retrieve it first
    toResolve.input = util.clone(input);
  } else {
    // load remote doc
    const remoteDoc = await jsonld.get(input, options);
    defaultBase = remoteDoc.documentUrl;
    toResolve.input = remoteDoc.document;
    if(remoteDoc.contextUrl) {
      // context included in HTTP link header and must be resolved
      toResolve.remoteContext = {'@context': remoteDoc.contextUrl};
      contextsToProcess.push(toResolve.remoteContext);
    }
  }

  // set default base
  if(!('base' in options)) {
    options.base = defaultBase || '';
  }

  // get all contexts in `toResolve`
  await _getAllContexts(toResolve, options);

  // process any additional contexts
  let activeCtx = _getInitialContext(options);
  contextsToProcess.forEach(localCtx => {
    activeCtx = _processContext({activeCtx, localCtx, options});
  });

  // expand resolved input
  let expanded = _expand({
    activeCtx,
    element: toResolve.input,
    options,
    expansionMap: options.expansionMap
  });

  // optimize away @graph with no other properties
  if(_isObject(expanded) && ('@graph' in expanded) &&
    Object.keys(expanded).length === 1) {
    expanded = expanded['@graph'];
  } else if(expanded === null) {
    expanded = [];
  }

  // normalize to an array
  if(!_isArray(expanded)) {
    expanded = [expanded];
  }

  return expanded;
});

/**
 * Performs JSON-LD flattening.
 *
 * @param input the JSON-LD to flatten.
 * @param ctx the context to use to compact the flattened output, or null.
 * @param [options] the options to use:
 *          [base] the base IRI to use.
 *          [expandContext] a context to expand with.
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
 * @param [callback(err, flattened)] called once the operation completes.
 *
 * @return a Promise that resolves to the flattened output.
 */
jsonld.flatten = util.callbackify(async function(input, ctx, options) {
  if(arguments.length < 1) {
    return new TypeError('Could not flatten, too few arguments.');
  }

  if(typeof ctx === 'function') {
    ctx = null;
  } else {
    ctx = ctx || null;
  }

  // set default options
  options = _setDefaults(options, {
    base: _isString(input) ? input : ''
  });

  // expand input
  const expanded = await jsonld.expand(input, options);

  // do flattening
  const flattened = _flatten(expanded);

  if(ctx === null) {
    // no compaction required
    return flattened;
  }

  // compact result (force @graph option to true, skip expansion)
  options.graph = true;
  options.skipExpansion = true;
  const compacted = await jsonld.compact(flattened, ctx, options);

  return compacted;
});

/**
 * Performs JSON-LD framing.
 *
 * @param input the JSON-LD input to frame.
 * @param frame the JSON-LD frame to use.
 * @param [options] the framing options.
 *          [base] the base IRI to use.
 *          [expandContext] a context to expand with.
 *          [embed] default @embed flag: '@last', '@always', '@never', '@link'
 *            (default: '@last').
 *          [explicit] default @explicit flag (default: false).
 *          [requireAll] default @requireAll flag (default: true).
 *          [omitDefault] default @omitDefault flag (default: false).
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
 * @param [callback(err, framed)] called once the operation completes.
 *
 * @return a Promise that resolves to the framed output.
 */
jsonld.frame = util.callbackify(async function(input, frame, options) {
  if(arguments.length < 2) {
    throw new TypeError('Could not frame, too few arguments.');
  }

  // set default options
  options = _setDefaults(options, {
    base: _isString(input) ? input : '',
    embed: '@last',
    explicit: false,
    requireAll: true,
    omitDefault: false,
    pruneBlankNodeIdentifiers: true,
    bnodesToClear: []
  });

  // if frame is a string, attempt to dereference remote document
  if(_isString(frame)) {
    // load remote doc
    const remoteDoc = await jsonld.get(frame, options);
    frame = remoteDoc.document;

    if(remoteDoc.contextUrl) {
      // inject link header @context into frame
      let ctx = frame['@context'];
      if(!ctx) {
        ctx = remoteDoc.contextUrl;
      } else if(_isArray(ctx)) {
        ctx.push(remoteDoc.contextUrl);
      } else {
        ctx = [ctx, remoteDoc.contextUrl];
      }
      frame['@context'] = ctx;
    }
  }

  const frameContext = frame ? frame['@context'] || {} : {};

  // expand input
  const expanded = await jsonld.expand(input, options);

  // expand frame
  const opts = util.clone(options);
  opts.isFrame = true;
  opts.keepFreeFloatingNodes = true;
  const expandedFrame = await jsonld.expand(frame, opts);

  // if the unexpanded frame includes a key expanding to @graph, frame the
  // default graph, otherwise, the merged graph
  // FIXME should look for aliases of @graph
  opts.merged = !('@graph' in frame);
  // do framing
  const framed = _frameMergedOrDefault(expanded, expandedFrame, opts);

  // compact result (force @graph option to true, skip expansion,
  // check for linked embeds)
  opts.graph = true;
  opts.skipExpansion = true;
  opts.link = {};
  opts.framing = true;
  const compacted = await jsonld.compact(framed, frameContext, opts);

  return compacted;
});

/**
 * **Experimental**
 *
 * Links a JSON-LD document's nodes in memory.
 *
 * @param input the JSON-LD document to link.
 * @param [ctx] the JSON-LD context to apply.
 * @param [options] the options to use:
 *          [base] the base IRI to use.
 *          [expandContext] a context to expand with.
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
 * @param [callback(err, linked)] called once the operation completes.
 *
 * @return a Promise that resolves to the linked output.
 */
jsonld.link = util.callbackify(async function(input, ctx, options) {
  // API matches running frame with a wildcard frame and embed: '@link'
  // get arguments
  const frame = {};
  if(ctx) {
    frame['@context'] = ctx;
  }
  frame['@embed'] = '@link';
  return jsonld.frame(input, frame, options);
});

/**
 * Performs RDF dataset normalization on the given input. The input is JSON-LD
 * unless the 'inputFormat' option is used. The output is an RDF dataset
 * unless the 'format' option is used.
 *
 * @param input the input to normalize as JSON-LD or as a format specified by
 *          the 'inputFormat' option.
 * @param [options] the options to use:
 *          [algorithm] the normalization algorithm to use, `URDNA2015` or
 *            `URGNA2012` (default: `URDNA2015`).
 *          [base] the base IRI to use.
 *          [expandContext] a context to expand with.
 *          [skipExpansion] true to assume the input is expanded and skip
 *            expansion, false not to, defaults to false.
 *          [inputFormat] the format if input is not JSON-LD:
 *            'application/n-quads' for N-Quads.
 *          [format] the format if output is a string:
 *            'application/n-quads' for N-Quads.
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
 *          [useNative] true to use a native canonize algorithm
 * @param [callback(err, normalized)] called once the operation completes.
 *
 * @return a Promise that resolves to the normalized output.
 */
jsonld.normalize = jsonld.canonize = util.callbackify(async function(
  input, options) {
  if(arguments.length < 1) {
    throw new TypeError('Could not canonize, too few arguments.');
  }

  // set default options
  options = _setDefaults(options, {
    base: _isString(input) ? input : '',
    algorithm: 'URDNA2015',
    skipExpansion: false
  });
  if('inputFormat' in options) {
    if(options.inputFormat !== 'application/n-quads' &&
      options.inputFormat !== 'application/nquads') {
      throw new JsonLdError(
        'Unknown canonicalization input format.',
        'jsonld.CanonizeError');
    }
    // TODO: `await` for async parsers
    const parsedInput = NQuads.parse(input);

    // do canonicalization
    return canonize.canonize(parsedInput, options);
  }

  // convert to RDF dataset then do normalization
  const opts = util.clone(options);
  delete opts.format;
  opts.produceGeneralizedRdf = false;
  const dataset = await jsonld.toRDF(input, opts);

  // do canonicalization
  return canonize.canonize(dataset, options);
});

/**
 * Converts an RDF dataset to JSON-LD.
 *
 * @param dataset a serialized string of RDF in a format specified by the
 *          format option or an RDF dataset to convert.
 * @param [options] the options to use:
 *          [format] the format if dataset param must first be parsed:
 *            'application/n-quads' for N-Quads (default).
 *          [rdfParser] a custom RDF-parser to use to parse the dataset.
 *          [useRdfType] true to use rdf:type, false to use @type
 *            (default: false).
 *          [useNativeTypes] true to convert XSD types into native types
 *            (boolean, integer, double), false not to (default: false).
 * @param [callback(err, output)] called once the operation completes.
 *
 * @return a Promise that resolves to the JSON-LD document.
 */
jsonld.fromRDF = util.callbackify(async function(dataset, options) {
  if(arguments.length < 1) {
    throw new TypeError('Could not convert from RDF, too few arguments.');
  }

  // set default options
  options = _setDefaults(options, {
    format: _isString(dataset) ? 'application/n-quads' : undefined
  });

  const {format} = options;
  let {rdfParser} = options;

  // handle special format
  if(format) {
    // check supported formats
    rdfParser = rdfParser || _rdfParsers[format];
    if(!rdfParser) {
      throw new JsonLdError(
        'Unknown input format.',
        'jsonld.UnknownFormat', {format});
    }
  } else {
    // no-op parser, assume dataset already parsed
    rdfParser = () => dataset;
  }

  // TODO: call `normalizeAsyncFn` on parser fn

  // rdfParser can be callback, promise-based, or synchronous
  let parsedDataset;
  if(rdfParser.length > 1) {
    // convert callback-based rdf parser to promise-based
    parsedDataset = new Promise((resolve, reject) => {
      rdfParser(dataset, (err, dataset) => {
        if(err) {
          reject(err);
        } else {
          resolve(dataset);
        }
      });
    });
  } else {
    parsedDataset = Promise.resolve(rdfParser(dataset));
  }

  parsedDataset = await parsedDataset;

  // back-compat with old parsers that produced legacy dataset format
  if(!Array.isArray(parsedDataset)) {
    parsedDataset = NQuads.legacyDatasetToQuads(parsedDataset);
  }

  return _fromRDF(parsedDataset, options);
});

/**
 * Outputs the RDF dataset found in the given JSON-LD object.
 *
 * @param input the JSON-LD input.
 * @param [options] the options to use:
 *          [base] the base IRI to use.
 *          [expandContext] a context to expand with.
 *          [skipExpansion] true to assume the input is expanded and skip
 *            expansion, false not to, defaults to false.
 *          [format] the format to use to output a string:
 *            'application/n-quads' for N-Quads.
 *          [produceGeneralizedRdf] true to output generalized RDF, false
 *            to produce only standard RDF (default: false).
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
 * @param [callback(err, dataset)] called once the operation completes.
 *
 * @return a Promise that resolves to the RDF dataset.
 */
jsonld.toRDF = util.callbackify(async function(input, options) {
  if(arguments.length < 1) {
    throw new TypeError('Could not convert to RDF, too few arguments.');
  }

  // set default options
  options = _setDefaults(options, {
    base: _isString(input) ? input : '',
    skipExpansion: false
  });

  // TODO: support toRDF custom map?
  let expanded;
  if(options.skipExpansion) {
    expanded = input;
  } else {
    // expand input
    expanded = await jsonld.expand(input, options);
  }

  // output RDF dataset
  const dataset = _toRDF(expanded, options);
  if(options.format) {
    if(options.format === 'application/n-quads' ||
      options.format === 'application/nquads') {
      return await NQuads.serialize(dataset);
    }
    throw new JsonLdError(
      'Unknown output format.',
      'jsonld.UnknownFormat', {format: options.format});
  }

  return dataset;
});

/**
 * **Experimental**
 *
 * Recursively flattens the nodes in the given JSON-LD input into a merged
 * map of node ID => node. All graphs will be merged into the default graph.
 *
 * @param input the JSON-LD input.
 * @param [options] the options to use:
 *          [base] the base IRI to use.
 *          [expandContext] a context to expand with.
 *          [issuer] a jsonld.IdentifierIssuer to use to label blank nodes.
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
 * @param [callback(err, nodeMap)] called once the operation completes.
 *
 * @return a Promise that resolves to the merged node map.
 */
jsonld.createNodeMap = util.callbackify(async function(input, options) {
  if(arguments.length < 1) {
    throw new TypeError('Could not create node map, too few arguments.');
  }

  // set default options
  options = _setDefaults(options, {
    base: _isString(input) ? input : ''
  });

  // expand input
  const expanded = await jsonld.expand(input, options);

  return _createMergedNodeMap(expanded, options);
});

/**
 * **Experimental**
 *
 * Merges two or more JSON-LD documents into a single flattened document.
 *
 * @param docs the JSON-LD documents to merge together.
 * @param ctx the context to use to compact the merged result, or null.
 * @param [options] the options to use:
 *          [base] the base IRI to use.
 *          [expandContext] a context to expand with.
 *          [issuer] a jsonld.IdentifierIssuer to use to label blank nodes.
 *          [mergeNodes] true to merge properties for nodes with the same ID,
 *            false to ignore new properties for nodes with the same ID once
 *            the ID has been defined; note that this may not prevent merging
 *            new properties where a node is in the `object` position
 *            (default: true).
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
 * @param [callback(err, merged)] called once the operation completes.
 *
 * @return a Promise that resolves to the merged output.
 */
jsonld.merge = util.callbackify(async function(docs, ctx, options) {
  if(arguments.length < 1) {
    throw new TypeError('Could not merge, too few arguments.');
  }
  if(!_isArray(docs)) {
    throw new TypeError('Could not merge, "docs" must be an array.');
  }

  if(typeof ctx === 'function') {
    ctx = null;
  } else {
    ctx = ctx || null;
  }

  // set default options
  options = _setDefaults(options, {});

  // expand all documents
  const expanded = await Promise.all(docs.map(doc => {
    const opts = Object.assign({}, options);
    return jsonld.expand(doc, opts);
  }));

  let mergeNodes = true;
  if('mergeNodes' in options) {
    mergeNodes = options.mergeNodes;
  }

  const issuer = options.issuer || new IdentifierIssuer('_:b');
  const graphs = {'@default': {}};

  for(let i = 0; i < expanded.length; ++i) {
    // uniquely relabel blank nodes
    const doc = util.relabelBlankNodes(expanded[i], {
      issuer: new IdentifierIssuer('_:b' + i + '-')
    });

    // add nodes to the shared node map graphs if merging nodes, to a
    // separate graph set if not
    const _graphs = (mergeNodes || i === 0) ? graphs : {'@default': {}};
    _createNodeMap(doc, _graphs, '@default', issuer);

    if(_graphs !== graphs) {
      // merge document graphs but don't merge existing nodes
      for(const graphName in _graphs) {
        const _nodeMap = _graphs[graphName];
        if(!(graphName in graphs)) {
          graphs[graphName] = _nodeMap;
          continue;
        }
        const nodeMap = graphs[graphName];
        for(const key in _nodeMap) {
          if(!(key in nodeMap)) {
            nodeMap[key] = _nodeMap[key];
          }
        }
      }
    }
  }

  // add all non-default graphs to default graph
  const defaultGraph = _mergeNodeMaps(graphs);

  // produce flattened output
  const flattened = [];
  const keys = Object.keys(defaultGraph).sort();
  for(let ki = 0; ki < keys.length; ++ki) {
    const node = defaultGraph[keys[ki]];
    // only add full subjects to top-level
    if(!_isSubjectReference(node)) {
      flattened.push(node);
    }
  }

  if(ctx === null) {
    return flattened;
  }

  // compact result (force @graph option to true, skip expansion)
  options.graph = true;
  options.skipExpansion = true;
  const compacted = await jsonld.compact(flattened, ctx, options);

  return compacted;
});

/**
 * The default document loader for external documents. If the environment
 * is node.js, a callback-continuation-style document loader is used; otherwise,
 * a promises-style document loader is used.
 *
 * @param url the URL to load.
 * @param callback(err, remoteDoc) called once the operation completes,
 *          if using a non-promises API.
 *
 * @return a promise, if using a promises API.
 */
Object.defineProperty(jsonld, 'documentLoader', {
  get: () => jsonld._documentLoader,
  set: v => jsonld._documentLoader = util.normalizeDocumentLoader(v)
});
// default document loader not implemented
jsonld.documentLoader = async url => {
  throw new JsonLdError(
    'Could not retrieve a JSON-LD document from the URL. URL ' +
    'dereferencing not implemented.', 'jsonld.LoadDocumentError',
    {code: 'loading document failed', url});
};

/**
 * Deprecated default document loader. Do not use or override.
 */
jsonld.loadDocument = util.callbackify(async function() {
  return jsonld.documentLoader.apply(null, arguments);
});

/**
 * Gets a remote JSON-LD document using the default document loader or
 * one given in the passed options.
 *
 * @param url the URL to fetch.
 * @param [options] the options to use:
 *          [documentLoader] the document loader to use.
 * @param [callback(err, remoteDoc)] called once the operation completes.
 *
 * @return a Promise that resolves to the retrieved remote document.
 */
jsonld.get = util.callbackify(async function(url, options) {
  let load;
  if(typeof options.documentLoader === 'function') {
    load = util.normalizeDocumentLoader(options.documentLoader);
  } else {
    load = jsonld.documentLoader;
  }

  const remoteDoc = await load(url);

  // TODO: can this be moved into `normalizeDocumentLoader`?
  try {
    if(!remoteDoc.document) {
      throw new JsonLdError(
        'No remote document found at the given URL.',
        'jsonld.NullRemoteDocument');
    }
    if(_isString(remoteDoc.document)) {
      remoteDoc.document = JSON.parse(remoteDoc.document);
    }
  } catch(e) {
    throw new JsonLdError(
      'Could not retrieve a JSON-LD document from the URL.',
      'jsonld.LoadDocumentError', {
        code: 'loading document failed',
        cause: e,
        remoteDoc
      });
  }

  return remoteDoc;
});

/**
 * Processes a local context, resolving any URLs as necessary, and returns a
 * new active context in its callback.
 *
 * @param activeCtx the current active context.
 * @param localCtx the local context to process.
 * @param [options] the options to use:
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
 * @param [callback(err, activeCtx)] called once the operation completes.
 *
 * @return a Promise that resolves to the new active context.
 */
jsonld.processContext = util.callbackify(async function(
  activeCtx, localCtx, options) {
  // set default options
  options = _setDefaults(options, {
    base: ''
  });

  // return initial context early for null context
  if(localCtx === null) {
    return _getInitialContext(options);
  }

  // get URLs in localCtx
  localCtx = util.clone(localCtx);
  if(!(_isObject(localCtx) && '@context' in localCtx)) {
    localCtx = {'@context': localCtx};
  }
  const ctx = await _getAllContexts(localCtx, options);

  return _processContext({activeCtx, localCtx: ctx, options});
});

// backwards compatibility
jsonld.getContextValue = __webpack_require__("d1e7").getContextValue;

/**
 * Document loaders.
 */
jsonld.documentLoaders = {};
jsonld.documentLoaders.node = __webpack_require__("fdb5");
jsonld.documentLoaders.xhr = __webpack_require__("7156");

/**
 * Assigns the default document loader for external document URLs to a built-in
 * default. Supported types currently include: 'xhr' and 'node'.
 *
 * @param type the type to set.
 * @param [params] the parameters required to use the document loader.
 */
jsonld.useDocumentLoader = function(type) {
  if(!(type in jsonld.documentLoaders)) {
    throw new JsonLdError(
      'Unknown document loader type: "' + type + '"',
      'jsonld.UnknownDocumentLoader',
      {type});
  }

  // set document loader
  jsonld.documentLoader = jsonld.documentLoaders[type].apply(
    jsonld, Array.prototype.slice.call(arguments, 1));
};

/**
 * Registers an RDF dataset parser by content-type, for use with
 * jsonld.fromRDF. An RDF dataset parser will always be given two parameters,
 * a string of input and a callback. An RDF dataset parser can be synchronous
 * or asynchronous.
 *
 * If the parser function returns undefined or null then it will be assumed to
 * be asynchronous w/a continuation-passing style and the callback parameter
 * given to the parser MUST be invoked.
 *
 * If it returns a Promise, then it will be assumed to be asynchronous, but the
 * callback parameter MUST NOT be invoked. It should instead be ignored.
 *
 * If it returns an RDF dataset, it will be assumed to be synchronous and the
 * callback parameter MUST NOT be invoked. It should instead be ignored.
 *
 * @param contentType the content-type for the parser.
 * @param parser(input, callback(err, dataset)) the parser function (takes a
 *          string as a parameter and either returns null/undefined and uses
 *          the given callback, returns a Promise, or returns an RDF dataset).
 */
jsonld.registerRDFParser = function(contentType, parser) {
  _rdfParsers[contentType] = parser;
};

/**
 * Unregisters an RDF dataset parser by content-type.
 *
 * @param contentType the content-type for the parser.
 */
jsonld.unregisterRDFParser = function(contentType) {
  delete _rdfParsers[contentType];
};

// register the N-Quads RDF parser
jsonld.registerRDFParser('application/n-quads', NQuads.parse);
jsonld.registerRDFParser('application/nquads', NQuads.parse);

// register the RDFa API RDF parser
jsonld.registerRDFParser('rdfa-api', Rdfa.parse);

/* URL API */
jsonld.url = __webpack_require__("ddd7");

/* Utility API */
jsonld.util = util;
// backwards compatibility
Object.assign(jsonld, util);

// reexpose API as jsonld.promises for backwards compatability
jsonld.promises = jsonld;

// backwards compatibility
jsonld.RequestQueue = __webpack_require__("40ce");

/* WebIDL API */
jsonld.JsonLdProcessor = __webpack_require__("8322")(jsonld);

// setup browser global JsonLdProcessor
if(_browser && typeof global.JsonLdProcessor === 'undefined') {
  Object.defineProperty(global, 'JsonLdProcessor', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: jsonld.JsonLdProcessor
  });
}

// set platform-specific defaults/APIs
if(_nodejs) {
  // use node document loader by default
  jsonld.useDocumentLoader('node');
} else if(typeof XMLHttpRequest !== 'undefined') {
  // use xhr document loader by default
  jsonld.useDocumentLoader('xhr');
}

function _setDefaults(options, {
  documentLoader = jsonld.documentLoader,
  ...defaults
}) {
  return Object.assign({}, {documentLoader}, defaults, options);
}

// end of jsonld API `wrapper` factory
return jsonld;
};

// external APIs:

// used to generate a new jsonld API instance
const factory = function() {
  return wrapper(function() {
    return factory();
  });
};

// wrap the main jsonld API instance
wrapper(factory);
// export API
module.exports = factory;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362"), __webpack_require__("c8ba")))

/***/ }),

/***/ "4d68":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const JsonLdError = __webpack_require__("5950");

const {
  isArray: _isArray,
  isObject: _isObject,
  isString: _isString,
  isUndefined: _isUndefined
} = __webpack_require__("68fa");

const {
  isList: _isList,
  isValue: _isValue,
  isGraph: _isGraph,
  isSimpleGraph: _isSimpleGraph,
  isSubjectReference: _isSubjectReference
} = __webpack_require__("c92f");

const {
  expandIri: _expandIri,
  getContextValue: _getContextValue,
  isKeyword: _isKeyword,
  process: _processContext
} = __webpack_require__("d1e7");

const {
  removeBase: _removeBase
} = __webpack_require__("ddd7");

const {
  addValue: _addValue,
  asArray: _asArray,
  compareShortestLeast: _compareShortestLeast
} = __webpack_require__("89ae");

const api = {};
module.exports = api;

/**
 * Recursively compacts an element using the given active context. All values
 * must be in expanded form before this method is called.
 *
 * @param activeCtx the active context to use.
 * @param activeProperty the compacted property associated with the element
 *          to compact, null for none.
 * @param element the element to compact.
 * @param options the compaction options.
 * @param compactionMap the compaction map to use.
 *
 * @return the compacted value.
 */
api.compact = ({
  activeCtx,
  activeProperty = null,
  element,
  options = {},
  compactionMap = () => undefined
}) => {
  // recursively compact array
  if(_isArray(element)) {
    let rval = [];
    for(let i = 0; i < element.length; ++i) {
      // compact, dropping any null values unless custom mapped
      let compacted = api.compact({
        activeCtx,
        activeProperty,
        element: element[i],
        options,
        compactionMap
      });
      if(compacted === null) {
        // TODO: use `await` to support async
        compacted = compactionMap({
          unmappedValue: element[i],
          activeCtx,
          activeProperty,
          parent: element,
          index: i,
          options
        });
        if(compacted === undefined) {
          continue;
        }
      }
      rval.push(compacted);
    }
    if(options.compactArrays && rval.length === 1) {
      // use single element if no container is specified
      const container = _getContextValue(
        activeCtx, activeProperty, '@container') || [];
      if(container.length === 0) {
        rval = rval[0];
      }
    }
    return rval;
  }

  // use any scoped context on activeProperty
  const ctx = _getContextValue(activeCtx, activeProperty, '@context');
  if(!_isUndefined(ctx)) {
    // Note: spec's `from term` var is named `isPropertyTermScopedContext`
    activeCtx = _processContext({
      activeCtx,
      localCtx: ctx,
      isPropertyTermScopedContext: true,
      options
    });
  }

  // recursively compact object
  if(_isObject(element)) {
    if(options.link && '@id' in element &&
      options.link.hasOwnProperty(element['@id'])) {
      // check for a linked element to reuse
      const linked = options.link[element['@id']];
      for(let i = 0; i < linked.length; ++i) {
        if(linked[i].expanded === element) {
          return linked[i].compacted;
        }
      }
    }

    // do value compaction on @values and subject references
    if(_isValue(element) || _isSubjectReference(element)) {
      const rval =
        api.compactValue({activeCtx, activeProperty, value: element, options});
      if(options.link && _isSubjectReference(element)) {
        // store linked element
        if(!(options.link.hasOwnProperty(element['@id']))) {
          options.link[element['@id']] = [];
        }
        options.link[element['@id']].push({expanded: element, compacted: rval});
      }
      return rval;
    }

    // if expanded property is @list and we're contained within a list
    // container, recursively compact this item to an array
    if(_isList(element)) {
      const container = _getContextValue(
        activeCtx, activeProperty, '@container') || [];
      if(container.includes('@list')) {
        return api.compact({
          activeCtx,
          activeProperty,
          element: element['@list'],
          options,
          compactionMap
        });
      }
    }

    // FIXME: avoid misuse of active property as an expanded property?
    const insideReverse = (activeProperty === '@reverse');

    const rval = {};

    // revert type scoped context
    activeCtx = activeCtx.revertTypeScopedContext();

    if(options.link && '@id' in element) {
      // store linked element
      if(!options.link.hasOwnProperty(element['@id'])) {
        options.link[element['@id']] = [];
      }
      options.link[element['@id']].push({expanded: element, compacted: rval});
    }

    // apply any context defined on an alias of @type
    // if key is @type and any compacted value is a term having a local
    // context, overlay that context
    let types = element['@type'] || [];
    if(types.length > 1) {
      types = Array.from(types).sort();
    }
    // find all type-scoped contexts based on current context, prior to
    // updating it
    const typeContext = activeCtx;
    for(const type of types) {
      const compactedType = api.compactIri(
        {activeCtx: typeContext, iri: type, relativeTo: {vocab: true}});

      // Use any type-scoped context defined on this value
      const ctx = _getContextValue(typeContext, compactedType, '@context');
      if(!_isUndefined(ctx)) {
        activeCtx = _processContext({
          activeCtx,
          localCtx: ctx,
          options,
          isTypeScopedContext: true
        });
      }
    }

    // process element keys in order
    const keys = Object.keys(element).sort();
    for(const expandedProperty of keys) {
      const expandedValue = element[expandedProperty];

      // compact @id and @type(s)
      if(expandedProperty === '@id' || expandedProperty === '@type') {
        // if using a type-scoped context, resolve type values against previous
        // context
        const isType = expandedProperty === '@type';
        const valueContext = isType ?
          (activeCtx.previousContext || activeCtx) : activeCtx;
        let compactedValue = _asArray(expandedValue).map(
          expandedIri => api.compactIri({
            activeCtx: valueContext,
            iri: expandedIri,
            relativeTo: {vocab: isType}
          }));
        if(compactedValue.length === 1) {
          compactedValue = compactedValue[0];
        }

        // use keyword alias and add value
        const alias = api.compactIri(
          {activeCtx, iri: expandedProperty, relativeTo: {vocab: true}});
        const isArray = _isArray(compactedValue) && expandedValue.length === 0;
        _addValue(rval, alias, compactedValue, {propertyIsArray: isArray});
        continue;
      }

      // handle @reverse
      if(expandedProperty === '@reverse') {
        // recursively compact expanded value
        const compactedValue = api.compact({
          activeCtx,
          activeProperty: '@reverse',
          element: expandedValue,
          options,
          compactionMap
        });

        // handle double-reversed properties
        for(const compactedProperty in compactedValue) {
          if(activeCtx.mappings.has(compactedProperty) &&
            activeCtx.mappings.get(compactedProperty).reverse) {
            const value = compactedValue[compactedProperty];
            const container = _getContextValue(
              activeCtx, compactedProperty, '@container') || [];
            const useArray = (
              container.includes('@set') || !options.compactArrays);
            _addValue(
              rval, compactedProperty, value, {propertyIsArray: useArray});
            delete compactedValue[compactedProperty];
          }
        }

        if(Object.keys(compactedValue).length > 0) {
          // use keyword alias and add value
          const alias = api.compactIri({
            activeCtx,
            iri: expandedProperty,
            relativeTo: {vocab: true}
          });
          _addValue(rval, alias, compactedValue);
        }

        continue;
      }

      if(expandedProperty === '@preserve') {
        // compact using activeProperty
        const compactedValue = api.compact({
          activeCtx,
          activeProperty,
          element: expandedValue,
          options,
          compactionMap});

        if(!(_isArray(compactedValue) && compactedValue.length === 0)) {
          _addValue(rval, expandedProperty, compactedValue);
        }
        continue;
      }

      // handle @index property
      if(expandedProperty === '@index') {
        // drop @index if inside an @index container
        const container = _getContextValue(
          activeCtx, activeProperty, '@container') || [];
        if(container.includes('@index')) {
          continue;
        }

        // use keyword alias and add value
        const alias = api.compactIri({
          activeCtx,
          iri: expandedProperty,
          relativeTo: {vocab: true}
        });
        _addValue(rval, alias, expandedValue);
        continue;
      }

      // skip array processing for keywords that aren't @graph or @list
      if(expandedProperty !== '@graph' && expandedProperty !== '@list' &&
        _isKeyword(expandedProperty)) {
        // use keyword alias and add value as is
        const alias = api.compactIri({
          activeCtx,
          iri: expandedProperty,
          relativeTo: {vocab: true}
        });
        _addValue(rval, alias, expandedValue);
        continue;
      }

      // Note: expanded value must be an array due to expansion algorithm.
      if(!_isArray(expandedValue)) {
        throw new JsonLdError(
          'JSON-LD expansion error; expanded value must be an array.',
          'jsonld.SyntaxError');
      }

      // preserve empty arrays
      if(expandedValue.length === 0) {
        const itemActiveProperty = api.compactIri({
          activeCtx,
          iri: expandedProperty,
          value: expandedValue,
          relativeTo: {vocab: true},
          reverse: insideReverse
        });
        const nestProperty = activeCtx.mappings.has(itemActiveProperty) ?
          activeCtx.mappings.get(itemActiveProperty)['@nest'] : null;
        let nestResult = rval;
        if(nestProperty) {
          _checkNestProperty(activeCtx, nestProperty, options);
          if(!_isObject(rval[nestProperty])) {
            rval[nestProperty] = {};
          }
          nestResult = rval[nestProperty];
        }
        _addValue(
          nestResult, itemActiveProperty, expandedValue, {
            propertyIsArray: true
          });
      }

      // recusively process array values
      for(const expandedItem of expandedValue) {
        // compact property and get container type
        const itemActiveProperty = api.compactIri({
          activeCtx,
          iri: expandedProperty,
          value: expandedItem,
          relativeTo: {vocab: true},
          reverse: insideReverse
        });

        // if itemActiveProperty is a @nest property, add values to nestResult,
        // otherwise rval
        const nestProperty = activeCtx.mappings.has(itemActiveProperty) ?
          activeCtx.mappings.get(itemActiveProperty)['@nest'] : null;
        let nestResult = rval;
        if(nestProperty) {
          _checkNestProperty(activeCtx, nestProperty, options);
          if(!_isObject(rval[nestProperty])) {
            rval[nestProperty] = {};
          }
          nestResult = rval[nestProperty];
        }

        const container = _getContextValue(
          activeCtx, itemActiveProperty, '@container') || [];

        // get simple @graph or @list value if appropriate
        const isGraph = _isGraph(expandedItem);
        const isList = _isList(expandedItem);
        let inner;
        if(isList) {
          inner = expandedItem['@list'];
        } else if(isGraph) {
          inner = expandedItem['@graph'];
        }

        // recursively compact expanded item
        let compactedItem = api.compact({
          activeCtx,
          activeProperty: itemActiveProperty,
          element: (isList || isGraph) ? inner : expandedItem,
          options,
          compactionMap
        });

        // handle @list
        if(isList) {
          // ensure @list value is an array
          if(!_isArray(compactedItem)) {
            compactedItem = [compactedItem];
          }

          if(!container.includes('@list')) {
            // wrap using @list alias
            compactedItem = {
              [api.compactIri({
                activeCtx,
                iri: '@list',
                relativeTo: {vocab: true}
              })]: compactedItem
            };

            // include @index from expanded @list, if any
            if('@index' in expandedItem) {
              compactedItem[api.compactIri({
                activeCtx,
                iri: '@index',
                relativeTo: {vocab: true}
              })] = expandedItem['@index'];
            }
          } else {
            _addValue(nestResult, itemActiveProperty, compactedItem, {
              valueIsArray: true,
              allowDuplicate: true
            });
            continue;
          }
        }

        // Graph object compaction cases
        if(isGraph) {
          if(container.includes('@graph') && (container.includes('@id') ||
            container.includes('@index') && _isSimpleGraph(expandedItem))) {
            // get or create the map object
            let mapObject;
            if(nestResult.hasOwnProperty(itemActiveProperty)) {
              mapObject = nestResult[itemActiveProperty];
            } else {
              nestResult[itemActiveProperty] = mapObject = {};
            }

            // index on @id or @index or alias of @none
            const key = (container.includes('@id') ?
              expandedItem['@id'] : expandedItem['@index']) ||
              api.compactIri({activeCtx, iri: '@none', vocab: true});
            // add compactedItem to map, using value of `@id` or a new blank
            // node identifier

            _addValue(
              mapObject, key, compactedItem, {
                propertyIsArray:
                  (!options.compactArrays || container.includes('@set'))
              });
          } else if(container.includes('@graph') &&
            _isSimpleGraph(expandedItem)) {
            // container includes @graph but not @id or @index and value is a
            // simple graph object add compact value
            _addValue(
              nestResult, itemActiveProperty, compactedItem, {
                propertyIsArray:
                  (!options.compactArrays || container.includes('@set'))
              });
          } else {
            // wrap using @graph alias, remove array if only one item and
            // compactArrays not set
            if(_isArray(compactedItem) && compactedItem.length === 1 &&
              options.compactArrays) {
              compactedItem = compactedItem[0];
            }
            compactedItem = {
              [api.compactIri({
                activeCtx,
                iri: '@graph',
                relativeTo: {vocab: true}
              })]: compactedItem
            };

            // include @id from expanded graph, if any
            if('@id' in expandedItem) {
              compactedItem[api.compactIri({
                activeCtx,
                iri: '@id',
                relativeTo: {vocab: true}
              })] = expandedItem['@id'];
            }

            // include @index from expanded graph, if any
            if('@index' in expandedItem) {
              compactedItem[api.compactIri({
                activeCtx,
                iri: '@index',
                relativeTo: {vocab: true}
              })] = expandedItem['@index'];
            }
            _addValue(
              nestResult, itemActiveProperty, compactedItem, {
                propertyIsArray:
                  (!options.compactArrays || container.includes('@set'))
              });
          }
        } else if(container.includes('@language') ||
          container.includes('@index') || container.includes('@id') ||
          container.includes('@type')) {
          // handle language and index maps
          // get or create the map object
          let mapObject;
          if(nestResult.hasOwnProperty(itemActiveProperty)) {
            mapObject = nestResult[itemActiveProperty];
          } else {
            nestResult[itemActiveProperty] = mapObject = {};
          }

          let key;
          if(container.includes('@language')) {
          // if container is a language map, simplify compacted value to
          // a simple string
            if(_isValue(compactedItem)) {
              compactedItem = compactedItem['@value'];
            }
            key = expandedItem['@language'];
          } else if(container.includes('@index')) {
            key = expandedItem['@index'];
          } else if(container.includes('@id')) {
            const idKey = api.compactIri({activeCtx, iri: '@id', vocab: true});
            key = compactedItem[idKey];
            delete compactedItem[idKey];
          } else if(container.includes('@type')) {
            const typeKey = api.compactIri({
              activeCtx,
              iri: '@type',
              vocab: true
            });
            let types;
            [key, ...types] = _asArray(compactedItem[typeKey] || []);
            switch(types.length) {
              case 0:
                delete compactedItem[typeKey];
                break;
              case 1:
                compactedItem[typeKey] = types[0];
                break;
              default:
                compactedItem[typeKey] = types;
                break;
            }
          }

          // if compacting this value which has no key, index on @none
          if(!key) {
            key = api.compactIri({activeCtx, iri: '@none', vocab: true});
          }
          // add compact value to map object using key from expanded value
          // based on the container type
          _addValue(
            mapObject, key, compactedItem, {
              propertyIsArray: container.includes('@set')
            });
        } else {
          // use an array if: compactArrays flag is false,
          // @container is @set or @list , value is an empty
          // array, or key is @graph
          const isArray = (!options.compactArrays ||
            container.includes('@set') || container.includes('@list') ||
            (_isArray(compactedItem) && compactedItem.length === 0) ||
            expandedProperty === '@list' || expandedProperty === '@graph');

          // add compact value
          _addValue(
            nestResult, itemActiveProperty, compactedItem,
            {propertyIsArray: isArray});
        }
      }
    }

    return rval;
  }

  // only primitives remain which are already compact
  return element;
};

/**
 * Compacts an IRI or keyword into a term or prefix if it can be. If the
 * IRI has an associated value it may be passed.
 *
 * @param activeCtx the active context to use.
 * @param iri the IRI to compact.
 * @param value the value to check or null.
 * @param relativeTo options for how to compact IRIs:
 *          vocab: true to split after @vocab, false not to.
 * @param reverse true if a reverse property is being compacted, false if not.
 *
 * @return the compacted term, prefix, keyword alias, or the original IRI.
 */
api.compactIri = ({
  activeCtx,
  iri,
  value = null,
  relativeTo = {vocab: false},
  reverse = false
}) => {
  // can't compact null
  if(iri === null) {
    return iri;
  }

  // if context is from a property term scoped context composed with a
  // type-scoped context, then use the previous context instead
  if(activeCtx.isPropertyTermScoped && activeCtx.previousContext) {
    activeCtx = activeCtx.previousContext;
  }

  const inverseCtx = activeCtx.getInverse();

  // if term is a keyword, it may be compacted to a simple alias
  if(_isKeyword(iri) &&
    iri in inverseCtx &&
    '@none' in inverseCtx[iri] &&
    '@type' in inverseCtx[iri]['@none'] &&
    '@none' in inverseCtx[iri]['@none']['@type']) {
    return inverseCtx[iri]['@none']['@type']['@none'];
  }

  // use inverse context to pick a term if iri is relative to vocab
  if(relativeTo.vocab && iri in inverseCtx) {
    const defaultLanguage = activeCtx['@language'] || '@none';

    // prefer @index if available in value
    const containers = [];
    if(_isObject(value) && '@index' in value && !('@graph' in value)) {
      containers.push('@index', '@index@set');
    }

    // if value is a preserve object, use its value
    if(_isObject(value) && '@preserve' in value) {
      value = value['@preserve'][0];
    }

    // prefer most specific container including @graph, prefering @set
    // variations
    if(_isGraph(value)) {
      // favor indexmap if the graph is indexed
      if('@index' in value) {
        containers.push(
          '@graph@index', '@graph@index@set', '@index', '@index@set');
      }
      // favor idmap if the graph is has an @id
      if('@id' in value) {
        containers.push(
          '@graph@id', '@graph@id@set');
      }
      containers.push('@graph', '@graph@set', '@set');
      // allow indexmap if the graph is not indexed
      if(!('@index' in value)) {
        containers.push(
          '@graph@index', '@graph@index@set', '@index', '@index@set');
      }
      // allow idmap if the graph does not have an @id
      if(!('@id' in value)) {
        containers.push('@graph@id', '@graph@id@set');
      }
    } else if(_isObject(value) && !_isValue(value)) {
      containers.push('@id', '@id@set', '@type', '@set@type');
    }

    // defaults for term selection based on type/language
    let typeOrLanguage = '@language';
    let typeOrLanguageValue = '@null';

    if(reverse) {
      typeOrLanguage = '@type';
      typeOrLanguageValue = '@reverse';
      containers.push('@set');
    } else if(_isList(value)) {
      // choose the most specific term that works for all elements in @list
      // only select @list containers if @index is NOT in value
      if(!('@index' in value)) {
        containers.push('@list');
      }
      const list = value['@list'];
      if(list.length === 0) {
        // any empty list can be matched against any term that uses the
        // @list container regardless of @type or @language
        typeOrLanguage = '@any';
        typeOrLanguageValue = '@none';
      } else {
        let commonLanguage = (list.length === 0) ? defaultLanguage : null;
        let commonType = null;
        for(let i = 0; i < list.length; ++i) {
          const item = list[i];
          let itemLanguage = '@none';
          let itemType = '@none';
          if(_isValue(item)) {
            if('@language' in item) {
              itemLanguage = item['@language'];
            } else if('@type' in item) {
              itemType = item['@type'];
            } else {
              // plain literal
              itemLanguage = '@null';
            }
          } else {
            itemType = '@id';
          }
          if(commonLanguage === null) {
            commonLanguage = itemLanguage;
          } else if(itemLanguage !== commonLanguage && _isValue(item)) {
            commonLanguage = '@none';
          }
          if(commonType === null) {
            commonType = itemType;
          } else if(itemType !== commonType) {
            commonType = '@none';
          }
          // there are different languages and types in the list, so choose
          // the most generic term, no need to keep iterating the list
          if(commonLanguage === '@none' && commonType === '@none') {
            break;
          }
        }
        commonLanguage = commonLanguage || '@none';
        commonType = commonType || '@none';
        if(commonType !== '@none') {
          typeOrLanguage = '@type';
          typeOrLanguageValue = commonType;
        } else {
          typeOrLanguageValue = commonLanguage;
        }
      }
    } else {
      if(_isValue(value)) {
        if('@language' in value && !('@index' in value)) {
          containers.push('@language', '@language@set');
          typeOrLanguageValue = value['@language'];
        } else if('@type' in value) {
          typeOrLanguage = '@type';
          typeOrLanguageValue = value['@type'];
        }
      } else {
        typeOrLanguage = '@type';
        typeOrLanguageValue = '@id';
      }
      containers.push('@set');
    }

    // do term selection
    containers.push('@none');

    // an index map can be used to index values using @none, so add as a low
    // priority
    if(_isObject(value) && !('@index' in value)) {
      // allow indexing even if no @index present
      containers.push('@index', '@index@set');
    }

    // values without type or language can use @language map
    if(_isValue(value) && Object.keys(value).length === 1) {
      // allow indexing even if no @index present
      containers.push('@language', '@language@set');
    }

    const term = _selectTerm(
      activeCtx, iri, value, containers, typeOrLanguage, typeOrLanguageValue);
    if(term !== null) {
      return term;
    }
  }

  // no term match, use @vocab if available
  if(relativeTo.vocab) {
    if('@vocab' in activeCtx) {
      // determine if vocab is a prefix of the iri
      const vocab = activeCtx['@vocab'];
      if(iri.indexOf(vocab) === 0 && iri !== vocab) {
        // use suffix as relative iri if it is not a term in the active context
        const suffix = iri.substr(vocab.length);
        if(!activeCtx.mappings.has(suffix)) {
          return suffix;
        }
      }
    }
  }

  // no term or @vocab match, check for possible CURIEs
  let choice = null;
  // TODO: make FastCurieMap a class with a method to do this lookup
  const partialMatches = [];
  let iriMap = activeCtx.fastCurieMap;
  // check for partial matches of against `iri`, which means look until
  // iri.length - 1, not full length
  const maxPartialLength = iri.length - 1;
  for(let i = 0; i < maxPartialLength && iri[i] in iriMap; ++i) {
    iriMap = iriMap[iri[i]];
    if('' in iriMap) {
      partialMatches.push(iriMap[''][0]);
    }
  }
  // check partial matches in reverse order to prefer longest ones first
  for(let i = partialMatches.length - 1; i >= 0; --i) {
    const entry = partialMatches[i];
    const terms = entry.terms;
    for(const term of terms) {
      // a CURIE is usable if:
      // 1. it has no mapping, OR
      // 2. value is null, which means we're not compacting an @value, AND
      //   the mapping matches the IRI
      const curie = term + ':' + iri.substr(entry.iri.length);
      const isUsableCurie = (activeCtx.mappings.get(term)._prefix &&
        (!activeCtx.mappings.has(curie) ||
        (value === null && activeCtx.mappings.get(curie)['@id'] === iri)));

      // select curie if it is shorter or the same length but lexicographically
      // less than the current choice
      if(isUsableCurie && (choice === null ||
        _compareShortestLeast(curie, choice) < 0)) {
        choice = curie;
      }
    }
  }

  // return chosen curie
  if(choice !== null) {
    return choice;
  }

  // compact IRI relative to base
  if(!relativeTo.vocab) {
    return _removeBase(activeCtx['@base'], iri);
  }

  // return IRI as is
  return iri;
};

/**
 * Performs value compaction on an object with '@value' or '@id' as the only
 * property.
 *
 * @param activeCtx the active context.
 * @param activeProperty the active property that points to the value.
 * @param value the value to compact.
 * @param {Object} [options] - processing options.
 *
 * @return the compaction result.
 */
api.compactValue = ({activeCtx, activeProperty, value, options}) => {
  // value is a @value
  if(_isValue(value)) {
    // get context rules
    const type = _getContextValue(activeCtx, activeProperty, '@type');
    const language = _getContextValue(activeCtx, activeProperty, '@language');
    const container =
      _getContextValue(activeCtx, activeProperty, '@container') || [];

    // whether or not the value has an @index that must be preserved
    const preserveIndex = '@index' in value && !container.includes('@index');

    // if there's no @index to preserve ...
    if(!preserveIndex) {
      // matching @type or @language specified in context, compact value
      if(value['@type'] === type || value['@language'] === language) {
        return value['@value'];
      }
    }

    // return just the value of @value if all are true:
    // 1. @value is the only key or @index isn't being preserved
    // 2. there is no default language or @value is not a string or
    //   the key has a mapping with a null @language
    const keyCount = Object.keys(value).length;
    const isValueOnlyKey = (keyCount === 1 ||
      (keyCount === 2 && '@index' in value && !preserveIndex));
    const hasDefaultLanguage = ('@language' in activeCtx);
    const isValueString = _isString(value['@value']);
    const hasNullMapping = (activeCtx.mappings.has(activeProperty) &&
      activeCtx.mappings.get(activeProperty)['@language'] === null);
    if(isValueOnlyKey &&
      (!hasDefaultLanguage || !isValueString || hasNullMapping)) {
      return value['@value'];
    }

    const rval = {};

    // preserve @index
    if(preserveIndex) {
      rval[api.compactIri({
        activeCtx,
        iri: '@index',
        relativeTo: {vocab: true}
      })] = value['@index'];
    }

    if('@type' in value) {
      // compact @type IRI
      rval[api.compactIri({
        activeCtx,
        iri: '@type',
        relativeTo: {vocab: true}
      })] = api.compactIri(
        {activeCtx, iri: value['@type'], relativeTo: {vocab: true}});
    } else if('@language' in value) {
      // alias @language
      rval[api.compactIri({
        activeCtx,
        iri: '@language',
        relativeTo: {vocab: true}
      })] = value['@language'];
    }

    // alias @value
    rval[api.compactIri({
      activeCtx,
      iri: '@value',
      relativeTo: {vocab: true}
    })] = value['@value'];

    return rval;
  }

  // value is a subject reference
  const expandedProperty = _expandIri(activeCtx, activeProperty, {vocab: true},
    options);
  const type = _getContextValue(activeCtx, activeProperty, '@type');
  const compacted = api.compactIri(
    {activeCtx, iri: value['@id'], relativeTo: {vocab: type === '@vocab'}});

  // compact to scalar
  if(type === '@id' || type === '@vocab' || expandedProperty === '@graph') {
    return compacted;
  }

  return {
    [api.compactIri({
      activeCtx,
      iri: '@id',
      relativeTo: {vocab: true}
    })]: compacted
  };
};

/**
 * Removes the @preserve keywords as the last step of the compaction
 * algorithm when it is running on framed output.
 *
 * @param ctx the active context used to compact the input.
 * @param input the framed, compacted output.
 * @param options the compaction options used.
 *
 * @return the resulting output.
 */
api.removePreserve = (ctx, input, options) => {
  // recurse through arrays
  if(_isArray(input)) {
    const output = [];
    for(let i = 0; i < input.length; ++i) {
      const result = api.removePreserve(ctx, input[i], options);
      // drop nulls from arrays
      if(result !== null) {
        output.push(result);
      }
    }
    input = output;
  } else if(_isObject(input)) {
    // remove @preserve
    if('@preserve' in input) {
      if(input['@preserve'] === '@null') {
        return null;
      }
      return input['@preserve'];
    }

    // skip @values
    if(_isValue(input)) {
      return input;
    }

    // recurse through @lists
    if(_isList(input)) {
      input['@list'] = api.removePreserve(ctx, input['@list'], options);
      return input;
    }

    // handle in-memory linked nodes
    const idAlias = api.compactIri({
      activeCtx: ctx,
      iri: '@id',
      relativeTo: {vocab: true}
    });
    if(input.hasOwnProperty(idAlias)) {
      const id = input[idAlias];
      if(options.link.hasOwnProperty(id)) {
        const idx = options.link[id].indexOf(input);
        if(idx !== -1) {
          // already visited
          return options.link[id][idx];
        }
        // prevent circular visitation
        options.link[id].push(input);
      } else {
        // prevent circular visitation
        options.link[id] = [input];
      }
    }

    // recurse through properties
    const graphAlias = api.compactIri({
      activeCtx: ctx,
      iri: '@graph',
      relativeTo: {vocab: true}
    });
    for(const prop in input) {
      // potentially remove the id, if it is an unreference bnode
      if(prop === idAlias && options.bnodesToClear.includes(input[prop])) {
        delete input[idAlias];
        continue;
      }

      let result = api.removePreserve(ctx, input[prop], options);
      const container = _getContextValue(ctx, prop, '@container') || [];
      if(options.compactArrays && _isArray(result) && result.length === 1 &&
        container.length === 0 && prop !== graphAlias) {
        result = result[0];
      }
      input[prop] = result;
    }
  }
  return input;
};

/**
 * Picks the preferred compaction term from the given inverse context entry.
 *
 * @param activeCtx the active context.
 * @param iri the IRI to pick the term for.
 * @param value the value to pick the term for.
 * @param containers the preferred containers.
 * @param typeOrLanguage either '@type' or '@language'.
 * @param typeOrLanguageValue the preferred value for '@type' or '@language'.
 *
 * @return the preferred term.
 */
function _selectTerm(
  activeCtx, iri, value, containers, typeOrLanguage, typeOrLanguageValue) {
  if(typeOrLanguageValue === null) {
    typeOrLanguageValue = '@null';
  }

  // preferences for the value of @type or @language
  const prefs = [];

  // determine prefs for @id based on whether or not value compacts to a term
  if((typeOrLanguageValue === '@id' || typeOrLanguageValue === '@reverse') &&
    _isSubjectReference(value)) {
    // prefer @reverse first
    if(typeOrLanguageValue === '@reverse') {
      prefs.push('@reverse');
    }
    // try to compact value to a term
    const term = api.compactIri(
      {activeCtx, iri: value['@id'], relativeTo: {vocab: true}});
    if(activeCtx.mappings.has(term) &&
      activeCtx.mappings.get(term) &&
      activeCtx.mappings.get(term)['@id'] === value['@id']) {
      // prefer @vocab
      prefs.push.apply(prefs, ['@vocab', '@id']);
    } else {
      // prefer @id
      prefs.push.apply(prefs, ['@id', '@vocab']);
    }
  } else {
    prefs.push(typeOrLanguageValue);
  }
  prefs.push('@none');

  const containerMap = activeCtx.inverse[iri];
  for(let ci = 0; ci < containers.length; ++ci) {
    // if container not available in the map, continue
    const container = containers[ci];
    if(!(container in containerMap)) {
      continue;
    }

    const typeOrLanguageValueMap = containerMap[container][typeOrLanguage];
    for(let pi = 0; pi < prefs.length; ++pi) {
      // if type/language option not available in the map, continue
      const pref = prefs[pi];
      if(!(pref in typeOrLanguageValueMap)) {
        continue;
      }

      // select term
      return typeOrLanguageValueMap[pref];
    }
  }

  return null;
}

/**
 * The value of `@nest` in the term definition must either be `@nest`, or a term
 * which resolves to `@nest`.
 *
 * @param activeCtx the active context.
 * @param nestProperty a term in the active context or `@nest`.
 * @param {Object} [options] - processing options.
 */
function _checkNestProperty(activeCtx, nestProperty, options) {
  if(_expandIri(activeCtx, nestProperty, {vocab: true}, options) !== '@nest') {
    throw new JsonLdError(
      'JSON-LD compact error; nested property must have an @nest value ' +
      'resolving to @nest.',
      'jsonld.SyntaxError', {code: 'invalid @nest value'});
  }
}


/***/ }),

/***/ "50ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const JsonLdError = __webpack_require__("5950");

const {
  isArray: _isArray,
  isObject: _isObject,
  isEmptyObject: _isEmptyObject,
  isString: _isString,
  isUndefined: _isUndefined
} = __webpack_require__("68fa");

const {
  isList: _isList,
  isValue: _isValue,
  isGraph: _isGraph
} = __webpack_require__("c92f");

const {
  expandIri: _expandIri,
  getContextValue: _getContextValue,
  isKeyword: _isKeyword,
  process: _processContext,
  processingMode: _processingMode
} = __webpack_require__("d1e7");

const {
  isAbsolute: _isAbsoluteIri
} = __webpack_require__("ddd7");

const {
  addValue: _addValue,
  asArray: _asArray,
  getValues: _getValues,
  validateTypeValue: _validateTypeValue
} = __webpack_require__("89ae");

const api = {};
module.exports = api;

/**
 * Recursively expands an element using the given context. Any context in
 * the element will be removed. All context URLs must have been retrieved
 * before calling this method.
 *
 * @param activeCtx the context to use.
 * @param activeProperty the property for the element, null for none.
 * @param element the element to expand.
 * @param options the expansion options.
 * @param insideList true if the element is a list, false if not.
 * @param insideIndex true if the element is inside an index container,
 *          false if not.
 * @param typeScopedContext an optional type-scoped active context for
 *          expanding values of nodes that were expressed according to
 *          a type-scoped context.
 * @param expansionMap(info) a function that can be used to custom map
 *          unmappable values (or to throw an error when they are detected);
 *          if this function returns `undefined` then the default behavior
 *          will be used.
 *
 * @return a Promise that resolves to the expanded value.
 */
api.expand = ({
  activeCtx,
  activeProperty = null,
  element,
  options = {},
  insideList = false,
  insideIndex = false,
  typeScopedContext = null,
  expansionMap = () => undefined
}) => {
  // nothing to expand
  if(element === null || element === undefined) {
    return null;
  }

  // disable framing if activeProperty is @default
  if(activeProperty === '@default') {
    options = Object.assign({}, options, {isFrame: false});
  }

  if(!_isArray(element) && !_isObject(element)) {
    // drop free-floating scalars that are not in lists unless custom mapped
    if(!insideList && (activeProperty === null ||
      _expandIri(activeCtx, activeProperty, {vocab: true},
        options) === '@graph')) {
      // TODO: use `await` to support async
      const mapped = expansionMap({
        unmappedValue: element,
        activeCtx,
        activeProperty,
        options,
        insideList
      });
      if(mapped === undefined) {
        return null;
      }
      return mapped;
    }

    // expand element according to value expansion rules
    return _expandValue({activeCtx, activeProperty, value: element, options});
  }

  // recursively expand array
  if(_isArray(element)) {
    let rval = [];
    const container = _getContextValue(
      activeCtx, activeProperty, '@container') || [];
    insideList = insideList || container.includes('@list');
    for(let i = 0; i < element.length; ++i) {
      // expand element
      let e = api.expand({
        activeCtx,
        activeProperty,
        element: element[i],
        options,
        expansionMap,
        insideIndex,
        typeScopedContext
      });
      if(insideList && _isArray(e)) {
        e = {'@list': e};
      }

      if(e === null) {
        // TODO: add `await` for async support
        e = expansionMap({
          unmappedValue: element[i],
          activeCtx,
          activeProperty,
          parent: element,
          index: i,
          options,
          expandedParent: rval,
          insideList
        });
        if(e === undefined) {
          continue;
        }
      }

      if(_isArray(e)) {
        rval = rval.concat(e);
      } else {
        rval.push(e);
      }
    }
    return rval;
  }

  // recursively expand object:

  // first, expand the active property
  const expandedActiveProperty = _expandIri(
    activeCtx, activeProperty, {vocab: true}, options);

  // second, determine if any type-scoped context should be reverted; it
  // should only be reverted when the following are all true:
  // 1. `element` is not a value or subject reference
  // 2. `insideIndex` is false
  typeScopedContext = typeScopedContext ||
    (activeCtx.previousContext ? activeCtx : null);
  let keys = Object.keys(element).sort();
  let mustRevert = !insideIndex;
  if(mustRevert && typeScopedContext && keys.length <= 2 &&
    !keys.includes('@context')) {
    for(const key of keys) {
      const expandedProperty = _expandIri(
        typeScopedContext, key, {vocab: true}, options);
      if(expandedProperty === '@value') {
        // value found, ensure type-scoped context is used to expand it
        mustRevert = false;
        activeCtx = typeScopedContext;
        break;
      }
      if(expandedProperty === '@id' && keys.length === 1) {
        // subject reference found, do not revert
        mustRevert = false;
        break;
      }
    }
  }

  if(mustRevert) {
    // revert type scoped context
    activeCtx = activeCtx.revertTypeScopedContext();
  }

  // if element has a context, process it
  if('@context' in element) {
    activeCtx = _processContext(
      {activeCtx, localCtx: element['@context'], options});
  }

  // look for scoped contexts on `@type`
  for(const key of keys) {
    const expandedProperty = _expandIri(activeCtx, key, {vocab: true}, options);
    if(expandedProperty === '@type') {
      // set scoped contexts from @type
      // avoid sorting if possible
      const value = element[key];
      const types =
        Array.isArray(value) ?
          (value.length > 1 ? value.slice().sort() : value) : [value];
      for(const type of types) {
        const ctx = _getContextValue(
          activeCtx.previousContext || activeCtx, type, '@context');
        if(!_isUndefined(ctx)) {
          activeCtx = _processContext({
            activeCtx,
            localCtx: ctx,
            options,
            isTypeScopedContext: true
          });
        }
      }
    }
  }

  // process each key and value in element, ignoring @nest content
  let rval = {};
  _expandObject({
    activeCtx,
    activeProperty,
    expandedActiveProperty,
    element,
    expandedParent: rval,
    options,
    insideList,
    typeScopedContext,
    expansionMap});

  // get property count on expanded output
  keys = Object.keys(rval);
  let count = keys.length;

  if('@value' in rval) {
    // @value must only have @language or @type
    if('@type' in rval && '@language' in rval) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; an element containing "@value" may not ' +
        'contain both "@type" and "@language".',
        'jsonld.SyntaxError', {code: 'invalid value object', element: rval});
    }
    let validCount = count - 1;
    if('@type' in rval) {
      validCount -= 1;
    }
    if('@index' in rval) {
      validCount -= 1;
    }
    if('@language' in rval) {
      validCount -= 1;
    }
    if(validCount !== 0) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; an element containing "@value" may only ' +
        'have an "@index" property and at most one other property ' +
        'which can be "@type" or "@language".',
        'jsonld.SyntaxError', {code: 'invalid value object', element: rval});
    }
    const values = rval['@value'] === null ? [] : _asArray(rval['@value']);
    const types = _getValues(rval, '@type');

    // drop null @values unless custom mapped
    if(values.length === 0) {
      // TODO: use `await` to support async
      const mapped = expansionMap({
        unmappedValue: rval,
        activeCtx,
        activeProperty,
        element,
        options,
        insideList
      });
      if(mapped !== undefined) {
        rval = mapped;
      } else {
        rval = null;
      }
    } else if(!values.every(v => (_isString(v) || _isEmptyObject(v))) &&
      '@language' in rval) {
      // if @language is present, @value must be a string
      throw new JsonLdError(
        'Invalid JSON-LD syntax; only strings may be language-tagged.',
        'jsonld.SyntaxError',
        {code: 'invalid language-tagged value', element: rval});
    } else if(_processingMode(activeCtx, 1.1) && types.includes('@json') &&
      types.length === 1) {
      // Any value of @value is okay if @type: @json
    } else if(!types.every(t =>
      (_isAbsoluteIri(t) && !(_isString(t) && t.indexOf('_:') === 0) ||
      _isEmptyObject(t)))) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; an element containing "@value" and "@type" ' +
        'must have an absolute IRI for the value of "@type".',
        'jsonld.SyntaxError', {code: 'invalid typed value', element: rval});
    }
  } else if('@type' in rval && !_isArray(rval['@type'])) {
    // convert @type to an array
    rval['@type'] = [rval['@type']];
  } else if('@set' in rval || '@list' in rval) {
    // handle @set and @list
    if(count > 1 && !(count === 2 && '@index' in rval)) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; if an element has the property "@set" ' +
        'or "@list", then it can have at most one other property that is ' +
        '"@index".', 'jsonld.SyntaxError',
        {code: 'invalid set or list object', element: rval});
    }
    // optimize away @set
    if('@set' in rval) {
      rval = rval['@set'];
      keys = Object.keys(rval);
      count = keys.length;
    }
  } else if(count === 1 && '@language' in rval) {
    // drop objects with only @language unless custom mapped
    // TODO: use `await` to support async
    const mapped = expansionMap(rval, {
      unmappedValue: rval,
      activeCtx,
      activeProperty,
      element,
      options,
      insideList
    });
    if(mapped !== undefined) {
      rval = mapped;
    } else {
      rval = null;
    }
  }

  // drop certain top-level objects that do not occur in lists, unless custom
  // mapped
  if(_isObject(rval) &&
    !options.keepFreeFloatingNodes && !insideList &&
    (activeProperty === null || expandedActiveProperty === '@graph')) {
    // drop empty object, top-level @value/@list, or object with only @id
    if(count === 0 || '@value' in rval || '@list' in rval ||
      (count === 1 && '@id' in rval)) {
      // TODO: use `await` to support async
      const mapped = expansionMap({
        unmappedValue: rval,
        activeCtx,
        activeProperty,
        element,
        options,
        insideList
      });
      if(mapped !== undefined) {
        rval = mapped;
      } else {
        rval = null;
      }
    }
  }

  return rval;
};

/**
 * Expand each key and value of element adding to result
 *
 * @param activeCtx the context to use.
 * @param activeProperty the property for the element.
 * @param expandedActiveProperty the expansion of activeProperty
 * @param element the element to expand.
 * @param expandedParent the expanded result into which to add values.
 * @param options the expansion options.
 * @param insideList true if the element is a list, false if not.
 * @param expansionMap(info) a function that can be used to custom map
 *          unmappable values (or to throw an error when they are detected);
 *          if this function returns `undefined` then the default behavior
 *          will be used.
 */
function _expandObject({
  activeCtx,
  activeProperty,
  expandedActiveProperty,
  element,
  expandedParent,
  options = {},
  insideList,
  expansionMap
}) {
  const keys = Object.keys(element).sort();
  const nests = [];
  for(const key of keys) {
    let value = element[key];
    let expandedValue;

    // skip @context
    if(key === '@context') {
      continue;
    }

    // expand property
    let expandedProperty = _expandIri(activeCtx, key, {vocab: true}, options);

    // drop non-absolute IRI keys that aren't keywords unless custom mapped
    if(expandedProperty === null ||
      !(_isAbsoluteIri(expandedProperty) || _isKeyword(expandedProperty))) {
      // TODO: use `await` to support async
      expandedProperty = expansionMap({
        unmappedProperty: key,
        activeCtx,
        activeProperty,
        parent: element,
        options,
        insideList,
        value,
        expandedParent
      });
      if(expandedProperty === undefined) {
        continue;
      }
    }

    if(_isKeyword(expandedProperty)) {
      if(expandedActiveProperty === '@reverse') {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; a keyword cannot be used as a @reverse ' +
          'property.', 'jsonld.SyntaxError',
          {code: 'invalid reverse property map', value});
      }
      if(expandedProperty in expandedParent) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; colliding keywords detected.',
          'jsonld.SyntaxError',
          {code: 'colliding keywords', keyword: expandedProperty});
      }
    }

    // syntax error if @id is not a string
    if(expandedProperty === '@id') {
      if(!_isString(value)) {
        if(!options.isFrame) {
          throw new JsonLdError(
            'Invalid JSON-LD syntax; "@id" value must a string.',
            'jsonld.SyntaxError', {code: 'invalid @id value', value});
        }
        if(_isObject(value)) {
          // empty object is a wildcard
          if(!_isEmptyObject(value)) {
            throw new JsonLdError(
              'Invalid JSON-LD syntax; "@id" value an empty object or array ' +
              'of strings, if framing',
              'jsonld.SyntaxError', {code: 'invalid @id value', value});
          }
        } else if(_isArray(value)) {
          if(!value.every(v => _isString(v))) {
            throw new JsonLdError(
              'Invalid JSON-LD syntax; "@id" value an empty object or array ' +
              'of strings, if framing',
              'jsonld.SyntaxError', {code: 'invalid @id value', value});
          }
        } else {
          throw new JsonLdError(
            'Invalid JSON-LD syntax; "@id" value an empty object or array ' +
            'of strings, if framing',
            'jsonld.SyntaxError', {code: 'invalid @id value', value});
        }
      }

      _addValue(
        expandedParent, '@id',
        _asArray(value).map(v =>
          _isString(v) ? _expandIri(activeCtx, v, {base: true}, options) : v),
        {propertyIsArray: options.isFrame});
      continue;
    }

    if(expandedProperty === '@type') {
      _validateTypeValue(value);
      _addValue(
        expandedParent, '@type',
        _asArray(value).map(v =>
          _isString(v) ?
            _expandIri(activeCtx.previousContext || activeCtx, v,
              {base: true, vocab: true}, options) : v),
        {propertyIsArray: options.isFrame});
      continue;
    }

    // @graph must be an array or an object
    if(expandedProperty === '@graph' &&
      !(_isObject(value) || _isArray(value))) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; "@graph" value must not be an ' +
        'object or an array.',
        'jsonld.SyntaxError', {code: 'invalid @graph value', value});
    }

    if(expandedProperty === '@value') {
      _addValue(
        expandedParent, '@value', value, {propertyIsArray: options.isFrame});
      continue;
    }

    // @language must be a string
    if(expandedProperty === '@language') {
      if(value === null) {
        // drop null @language values, they expand as if they didn't exist
        continue;
      }
      if(!_isString(value) && !options.isFrame) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; "@language" value must be a string.',
          'jsonld.SyntaxError',
          {code: 'invalid language-tagged string', value});
      }
      // ensure language value is lowercase
      value = _asArray(value).map(v => _isString(v) ? v.toLowerCase() : v);

      _addValue(
        expandedParent, '@language', value, {propertyIsArray: options.isFrame});
      continue;
    }

    // @index must be a string
    if(expandedProperty === '@index') {
      if(!_isString(value)) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; "@index" value must be a string.',
          'jsonld.SyntaxError',
          {code: 'invalid @index value', value});
      }
      _addValue(expandedParent, '@index', value);
      continue;
    }

    // @reverse must be an object
    if(expandedProperty === '@reverse') {
      if(!_isObject(value)) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; "@reverse" value must be an object.',
          'jsonld.SyntaxError', {code: 'invalid @reverse value', value});
      }

      expandedValue = api.expand({
        activeCtx,
        activeProperty:
        '@reverse',
        element: value,
        options,
        expansionMap
      });
      // properties double-reversed
      if('@reverse' in expandedValue) {
        for(const property in expandedValue['@reverse']) {
          _addValue(
            expandedParent, property, expandedValue['@reverse'][property],
            {propertyIsArray: true});
        }
      }

      // FIXME: can this be merged with code below to simplify?
      // merge in all reversed properties
      let reverseMap = expandedParent['@reverse'] || null;
      for(const property in expandedValue) {
        if(property === '@reverse') {
          continue;
        }
        if(reverseMap === null) {
          reverseMap = expandedParent['@reverse'] = {};
        }
        _addValue(reverseMap, property, [], {propertyIsArray: true});
        const items = expandedValue[property];
        for(let ii = 0; ii < items.length; ++ii) {
          const item = items[ii];
          if(_isValue(item) || _isList(item)) {
            throw new JsonLdError(
              'Invalid JSON-LD syntax; "@reverse" value must not be a ' +
              '@value or an @list.', 'jsonld.SyntaxError',
              {code: 'invalid reverse property value', value: expandedValue});
          }
          _addValue(reverseMap, property, item, {propertyIsArray: true});
        }
      }

      continue;
    }

    // nested keys
    if(expandedProperty === '@nest') {
      nests.push(key);
      continue;
    }

    // use potential scoped context for key
    let termCtx = activeCtx;
    const ctx = _getContextValue(activeCtx, key, '@context');
    if(!_isUndefined(ctx)) {
      // Note: spec's `from term` var is named `isPropertyTermScopedContext`
      termCtx = _processContext({
        activeCtx,
        localCtx: ctx,
        isPropertyTermScopedContext: true,
        options
      });
    }

    const container = _getContextValue(termCtx, key, '@container') || [];

    if(container.includes('@language') && _isObject(value)) {
      // handle language map container (skip if value is not an object)
      expandedValue = _expandLanguageMap(termCtx, value, options);
    } else if(container.includes('@index') && _isObject(value)) {
      // handle index container (skip if value is not an object)
      const asGraph = container.includes('@graph');
      expandedValue = _expandIndexMap({
        activeCtx: termCtx,
        options,
        activeProperty: key,
        value,
        expansionMap,
        asGraph,
        indexKey: '@index'
      });
    } else if(container.includes('@id') && _isObject(value)) {
      // handle id container (skip if value is not an object)
      const asGraph = container.includes('@graph');
      expandedValue = _expandIndexMap({
        activeCtx: termCtx,
        options,
        activeProperty: key,
        value,
        expansionMap,
        asGraph,
        indexKey: '@id'
      });
    } else if(container.includes('@type') && _isObject(value)) {
      // handle type container (skip if value is not an object)
      expandedValue = _expandIndexMap({
        // since container is `@type`, revert type scoped context when expanding
        activeCtx: termCtx.revertTypeScopedContext(),
        options,
        activeProperty: key,
        value,
        expansionMap,
        asGraph: false,
        indexKey: '@type'
      });
    } else {
      // recurse into @list or @set
      const isList = (expandedProperty === '@list');
      if(isList || expandedProperty === '@set') {
        let nextActiveProperty = activeProperty;
        if(isList && expandedActiveProperty === '@graph') {
          nextActiveProperty = null;
        }
        expandedValue = api.expand({
          activeCtx: termCtx,
          activeProperty: nextActiveProperty,
          element: value,
          options,
          insideList: isList,
          expansionMap
        });
      } else if(
        _getContextValue(activeCtx, key, '@type') === '@json') {
        expandedValue = {
          '@type': '@json',
          '@value': value
        };
      } else {
        // recursively expand value with key as new active property
        expandedValue = api.expand({
          activeCtx: termCtx,
          activeProperty: key,
          element: value,
          options,
          insideList: false,
          expansionMap
        });
      }
    }

    // drop null values if property is not @value
    if(expandedValue === null && expandedProperty !== '@value') {
      // TODO: use `await` to support async
      expandedValue = expansionMap({
        unmappedValue: value,
        expandedProperty,
        activeCtx: termCtx,
        activeProperty,
        parent: element,
        options,
        insideList,
        key,
        expandedParent
      });
      if(expandedValue === undefined) {
        continue;
      }
    }

    // convert expanded value to @list if container specifies it
    if(expandedProperty !== '@list' && !_isList(expandedValue) &&
      container.includes('@list')) {
      // ensure expanded value in @list is an array
      expandedValue = {'@list': _asArray(expandedValue)};
    }

    // convert expanded value to @graph if container specifies it
    // and value is not, itself, a graph
    // index cases handled above
    if(container.includes('@graph') &&
      !container.some(key => key === '@id' || key === '@index')) {
      // ensure expanded values are arrays
      expandedValue = _asArray(expandedValue)
        .map(v => _isGraph(v) ? v : {'@graph': _asArray(v)});
    }

    // FIXME: can this be merged with code above to simplify?
    // merge in reverse properties
    if(termCtx.mappings.has(key) && termCtx.mappings.get(key).reverse) {
      const reverseMap =
        expandedParent['@reverse'] = expandedParent['@reverse'] || {};
      expandedValue = _asArray(expandedValue);
      for(let ii = 0; ii < expandedValue.length; ++ii) {
        const item = expandedValue[ii];
        if(_isValue(item) || _isList(item)) {
          throw new JsonLdError(
            'Invalid JSON-LD syntax; "@reverse" value must not be a ' +
            '@value or an @list.', 'jsonld.SyntaxError',
            {code: 'invalid reverse property value', value: expandedValue});
        }
        _addValue(reverseMap, expandedProperty, item, {propertyIsArray: true});
      }
      continue;
    }

    // add value for property
    // use an array except for certain keywords
    const useArray =
      !['@index', '@id', '@type', '@value', '@language']
        .includes(expandedProperty);
    _addValue(expandedParent, expandedProperty, expandedValue, {
      propertyIsArray: useArray
    });
  }

  // @value must not be an object or an array (unless framing) or if @type is
  // @json
  if('@value' in element) {
    const value = element['@value'];
    if(element['@type'] === '@json' && _processingMode(activeCtx, 1.1)) {
      // allow any value, to be verified when the object is fully expanded and
      // the @type is @json.
    } else if((_isObject(value) || _isArray(value)) && !options.isFrame) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; "@value" value must not be an ' +
        'object or an array.',
        'jsonld.SyntaxError',
        {code: 'invalid value object value', value});
    }
  }

  // expand each nested key
  for(const key of nests) {
    const nestedValues = _isArray(element[key]) ? element[key] : [element[key]];
    for(const nv of nestedValues) {
      if(!_isObject(nv) || Object.keys(nv).some(k =>
        _expandIri(activeCtx, k, {vocab: true}, options) === '@value')) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; nested value must be a node object.',
          'jsonld.SyntaxError',
          {code: 'invalid @nest value', value: nv});
      }
      _expandObject({
        activeCtx,
        activeProperty,
        expandedActiveProperty,
        element: nv,
        expandedParent,
        options,
        insideList,
        expansionMap});
    }
  }
}

/**
 * Expands the given value by using the coercion and keyword rules in the
 * given context.
 *
 * @param activeCtx the active context to use.
 * @param activeProperty the active property the value is associated with.
 * @param value the value to expand.
 * @param {Object} [options] - processing options.
 *
 * @return the expanded value.
 */
function _expandValue({activeCtx, activeProperty, value, options}) {
  // nothing to expand
  if(value === null || value === undefined) {
    return null;
  }

  // special-case expand @id and @type (skips '@id' expansion)
  const expandedProperty = _expandIri(
    activeCtx, activeProperty, {vocab: true}, options);
  if(expandedProperty === '@id') {
    return _expandIri(activeCtx, value, {base: true}, options);
  } else if(expandedProperty === '@type') {
    return _expandIri(activeCtx, value, {vocab: true, base: true}, options);
  }

  // get type definition from context
  const type = _getContextValue(activeCtx, activeProperty, '@type');

  // do @id expansion (automatic for @graph)
  if((type === '@id' || expandedProperty === '@graph') && _isString(value)) {
    return {'@id': _expandIri(activeCtx, value, {base: true}, options)};
  }
  // do @id expansion w/vocab
  if(type === '@vocab' && _isString(value)) {
    return {
      '@id': _expandIri(activeCtx, value, {vocab: true, base: true}, options)
    };
  }

  // do not expand keyword values
  if(_isKeyword(expandedProperty)) {
    return value;
  }

  const rval = {};

  if(type && !['@id', '@vocab'].includes(type)) {
    // other type
    rval['@type'] = type;
  } else if(_isString(value)) {
    // check for language tagging for strings
    const language = _getContextValue(activeCtx, activeProperty, '@language');
    if(language !== null) {
      rval['@language'] = language;
    }
  }
  // do conversion of values that aren't basic JSON types to strings
  if(!['boolean', 'number', 'string'].includes(typeof value)) {
    value = value.toString();
  }
  rval['@value'] = value;

  return rval;
}

/**
 * Expands a language map.
 *
 * @param activeCtx the active context to use.
 * @param languageMap the language map to expand.
 * @param {Object} [options] - processing options.
 *
 * @return the expanded language map.
 */
function _expandLanguageMap(activeCtx, languageMap, options) {
  const rval = [];
  const keys = Object.keys(languageMap).sort();
  for(const key of keys) {
    const expandedKey = _expandIri(activeCtx, key, {vocab: true}, options);
    let val = languageMap[key];
    if(!_isArray(val)) {
      val = [val];
    }
    for(const item of val) {
      if(item === null) {
        // null values are allowed (8.5) but ignored (3.1)
        continue;
      }
      if(!_isString(item)) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; language map values must be strings.',
          'jsonld.SyntaxError',
          {code: 'invalid language map value', languageMap});
      }
      const val = {'@value': item};
      if(expandedKey !== '@none') {
        val['@language'] = key.toLowerCase();
      }
      rval.push(val);
    }
  }
  return rval;
}

function _expandIndexMap(
  {activeCtx, options, activeProperty, value, expansionMap, asGraph,
    indexKey}) {
  const rval = [];
  const keys = Object.keys(value).sort();
  const isTypeIndex = indexKey === '@type';
  for(let key of keys) {
    // if indexKey is @type, there may be a context defined for it
    if(isTypeIndex) {
      const ctx = _getContextValue(activeCtx, key, '@context');
      if(!_isUndefined(ctx)) {
        activeCtx = _processContext({
          activeCtx,
          localCtx: ctx,
          isTypeScopedContext: true,
          options
        });
      }
    }

    let val = value[key];
    if(!_isArray(val)) {
      val = [val];
    }

    // expand for @type, but also for @none
    const expandedKey = _expandIri(activeCtx, key, {vocab: true}, options);
    if(indexKey === '@id') {
      // expand document relative
      key = _expandIri(activeCtx, key, {base: true}, options);
    } else if(isTypeIndex) {
      key = expandedKey;
    }

    val = api.expand({
      activeCtx,
      activeProperty,
      element: val,
      options,
      insideList: false,
      insideIndex: true,
      expansionMap
    });
    for(let item of val) {
      // If this is also a @graph container, turn items into graphs
      if(asGraph && !_isGraph(item)) {
        item = {'@graph': [item]};
      }
      if(indexKey === '@type') {
        if(expandedKey === '@none') {
          // ignore @none
        } else if(item['@type']) {
          item['@type'] = [key].concat(item['@type']);
        } else {
          item['@type'] = [key];
        }
      } else if(expandedKey !== '@none' && !(indexKey in item)) {
        item[indexKey] = key;
      }
      rval.push(item);
    }
  }
  return rval;
}


/***/ }),

/***/ "5727":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint esversion: 6 */
/* jslint node: true */


module.exports = function (object) {
  return serialize(object);

  function serialize (object) {
    if (object === null || typeof object !== 'object' || object.toJSON != null) {
      return JSON.stringify(object);
    }
    if (Array.isArray(object) && object.length === 0) {
      return '[]';
    }
    if (Array.isArray(object) && object.length === 1) {
      return '[' + serialize(object[0]) + ']';
    }
    if (Array.isArray(object)) {
      return '[' + object.reduce((t, cv, ci) => {
        t = (ci === 1 ? serialize(t) : t);
        return t + ',' + serialize(cv);
      }) + ']';
    }
    const keys = Object.keys(object);
    if (keys.length === 0) {
      return '{}';
    }
    if (keys.length === 1) {
      return '{' + serialize(keys[0]) + ':' + serialize(object[keys[0]]) + '}';
    }
    return '{' + keys.sort().reduce((t, cv, ci) => {
      t = (ci === 1 ? serialize(t) + ':' + serialize(object[t]) : t);
      return t + ',' + serialize(cv) + ':' + serialize(object[cv]);
    }) + '}';
  }
};


/***/ }),

/***/ "5950":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


module.exports = class JsonLdError extends Error {
  /**
   * Creates a JSON-LD Error.
   *
   * @param msg the error message.
   * @param type the error type.
   * @param details the error details.
   */
  constructor(
    message = 'An unspecified JSON-LD error occurred.',
    name = 'jsonld.Error',
    details = {}) {
    super(message);
    this.name = name;
    this.message = message;
    this.details = details;
  }
};


/***/ }),

/***/ "5a76":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */


const forge = __webpack_require__("d327");
__webpack_require__("eb9d");
__webpack_require__("a754");
__webpack_require__("a77f");

module.exports = class MessageDigest {
  /**
   * Creates a new MessageDigest.
   *
   * @param algorithm the algorithm to use.
   */
  constructor(algorithm) {
    this.md = forge.md[algorithm].create();
  }

  update(msg) {
    this.md.update(msg, 'utf8');
  }

  digest() {
    return this.md.digest().toHex();
  }
};


/***/ }),

/***/ "65c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


// TODO: move `NQuads` to its own package
module.exports = __webpack_require__("30ba").NQuads;


/***/ }),

/***/ "65e1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */


// eslint-disable-next-line no-unused-vars
const TERMS = ['subject', 'predicate', 'object', 'graph'];
const RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';
const RDF_LANGSTRING = RDF + 'langString';
const XSD_STRING = 'http://www.w3.org/2001/XMLSchema#string';

// build regexes
const REGEX = {};
(() => {
  const iri = '(?:<([^:]+:[^>]*)>)';
  // https://www.w3.org/TR/turtle/#grammar-production-BLANK_NODE_LABEL
  const PN_CHARS_BASE =
    'A-Z' + 'a-z' +
    '\u00C0-\u00D6' +
    '\u00D8-\u00F6' +
    '\u00F8-\u02FF' +
    '\u0370-\u037D' +
    '\u037F-\u1FFF' +
    '\u200C-\u200D' +
    '\u2070-\u218F' +
    '\u2C00-\u2FEF' +
    '\u3001-\uD7FF' +
    '\uF900-\uFDCF' +
    '\uFDF0-\uFFFD';
    // TODO:
    //'\u10000-\uEFFFF';
  const PN_CHARS_U =
    PN_CHARS_BASE +
    '_';
  const PN_CHARS =
    PN_CHARS_U +
    '0-9' +
    '-' +
    '\u00B7' +
    '\u0300-\u036F' +
    '\u203F-\u2040';
  const BLANK_NODE_LABEL =
    '(_:' +
      '(?:[' + PN_CHARS_U + '0-9])' +
      '(?:(?:[' + PN_CHARS + '.])*(?:[' + PN_CHARS + ']))?' +
    ')';
  const bnode = BLANK_NODE_LABEL;
  const plain = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"';
  const datatype = '(?:\\^\\^' + iri + ')';
  const language = '(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))';
  const literal = '(?:' + plain + '(?:' + datatype + '|' + language + ')?)';
  const ws = '[ \\t]+';
  const wso = '[ \\t]*';

  // define quad part regexes
  const subject = '(?:' + iri + '|' + bnode + ')' + ws;
  const property = iri + ws;
  const object = '(?:' + iri + '|' + bnode + '|' + literal + ')' + wso;
  const graphName = '(?:\\.|(?:(?:' + iri + '|' + bnode + ')' + wso + '\\.))';

  // end of line and empty regexes
  REGEX.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g;
  REGEX.empty = new RegExp('^' + wso + '$');

  // full quad regex
  REGEX.quad = new RegExp(
    '^' + wso + subject + property + object + graphName + wso + '$');
})();

module.exports = class NQuads {
  /**
   * Parses RDF in the form of N-Quads.
   *
   * @param input the N-Quads input to parse.
   *
   * @return an RDF dataset (an array of quads per http://rdf.js.org/).
   */
  static parse(input) {
    // build RDF dataset
    const dataset = [];

    const graphs = {};

    // split N-Quad input into lines
    const lines = input.split(REGEX.eoln);
    let lineNumber = 0;
    for(const line of lines) {
      lineNumber++;

      // skip empty lines
      if(REGEX.empty.test(line)) {
        continue;
      }

      // parse quad
      const match = line.match(REGEX.quad);
      if(match === null) {
        throw new Error('N-Quads parse error on line ' + lineNumber + '.');
      }

      // create RDF quad
      const quad = {};

      // get subject
      if(match[1] !== undefined) {
        quad.subject = {termType: 'NamedNode', value: match[1]};
      } else {
        quad.subject = {termType: 'BlankNode', value: match[2]};
      }

      // get predicate
      quad.predicate = {termType: 'NamedNode', value: match[3]};

      // get object
      if(match[4] !== undefined) {
        quad.object = {termType: 'NamedNode', value: match[4]};
      } else if(match[5] !== undefined) {
        quad.object = {termType: 'BlankNode', value: match[5]};
      } else {
        quad.object = {
          termType: 'Literal',
          value: undefined,
          datatype: {
            termType: 'NamedNode'
          }
        };
        if(match[7] !== undefined) {
          quad.object.datatype.value = match[7];
        } else if(match[8] !== undefined) {
          quad.object.datatype.value = RDF_LANGSTRING;
          quad.object.language = match[8];
        } else {
          quad.object.datatype.value = XSD_STRING;
        }
        quad.object.value = _unescape(match[6]);
      }

      // get graph
      if(match[9] !== undefined) {
        quad.graph = {
          termType: 'NamedNode',
          value: match[9]
        };
      } else if(match[10] !== undefined) {
        quad.graph = {
          termType: 'BlankNode',
          value: match[10]
        };
      } else {
        quad.graph = {
          termType: 'DefaultGraph',
          value: ''
        };
      }

      // only add quad if it is unique in its graph
      if(!(quad.graph.value in graphs)) {
        graphs[quad.graph.value] = [quad];
        dataset.push(quad);
      } else {
        let unique = true;
        const quads = graphs[quad.graph.value];
        for(const q of quads) {
          if(_compareTriples(q, quad)) {
            unique = false;
            break;
          }
        }
        if(unique) {
          quads.push(quad);
          dataset.push(quad);
        }
      }
    }

    return dataset;
  }

  /**
   * Converts an RDF dataset to N-Quads.
   *
   * @param dataset (array of quads) the RDF dataset to convert.
   *
   * @return the N-Quads string.
   */
  static serialize(dataset) {
    if(!Array.isArray(dataset)) {
      dataset = NQuads.legacyDatasetToQuads(dataset);
    }
    const quads = [];
    for(const quad of dataset) {
      quads.push(NQuads.serializeQuad(quad));
    }
    return quads.sort().join('');
  }

  /**
   * Converts an RDF quad to an N-Quad string (a single quad).
   *
   * @param quad the RDF quad convert.
   *
   * @return the N-Quad string.
   */
  static serializeQuad(quad) {
    const s = quad.subject;
    const p = quad.predicate;
    const o = quad.object;
    const g = quad.graph;

    let nquad = '';

    // subject and predicate can only be NamedNode or BlankNode
    [s, p].forEach(term => {
      if(term.termType === 'NamedNode') {
        nquad += '<' + term.value + '>';
      } else {
        nquad += term.value;
      }
      nquad += ' ';
    });

    // object is NamedNode, BlankNode, or Literal
    if(o.termType === 'NamedNode') {
      nquad += '<' + o.value + '>';
    } else if(o.termType === 'BlankNode') {
      nquad += o.value;
    } else {
      nquad += '"' + _escape(o.value) + '"';
      if(o.datatype.value === RDF_LANGSTRING) {
        if(o.language) {
          nquad += '@' + o.language;
        }
      } else if(o.datatype.value !== XSD_STRING) {
        nquad += '^^<' + o.datatype.value + '>';
      }
    }

    // graph can only be NamedNode or BlankNode (or DefaultGraph, but that
    // does not add to `nquad`)
    if(g.termType === 'NamedNode') {
      nquad += ' <' + g.value + '>';
    } else if(g.termType === 'BlankNode') {
      nquad += ' ' + g.value;
    }

    nquad += ' .\n';
    return nquad;
  }

  /**
   * Converts a legacy-formatted dataset to an array of quads dataset per
   * http://rdf.js.org/.
   *
   * @param dataset the legacy dataset to convert.
   *
   * @return the array of quads dataset.
   */
  static legacyDatasetToQuads(dataset) {
    const quads = [];

    const termTypeMap = {
      'blank node': 'BlankNode',
      IRI: 'NamedNode',
      literal: 'Literal'
    };

    for(const graphName in dataset) {
      const triples = dataset[graphName];
      triples.forEach(triple => {
        const quad = {};
        for(const componentName in triple) {
          const oldComponent = triple[componentName];
          const newComponent = {
            termType: termTypeMap[oldComponent.type],
            value: oldComponent.value
          };
          if(newComponent.termType === 'Literal') {
            newComponent.datatype = {
              termType: 'NamedNode'
            };
            if('datatype' in oldComponent) {
              newComponent.datatype.value = oldComponent.datatype;
            }
            if('language' in oldComponent) {
              if(!('datatype' in oldComponent)) {
                newComponent.datatype.value = RDF_LANGSTRING;
              }
              newComponent.language = oldComponent.language;
            } else if(!('datatype' in oldComponent)) {
              newComponent.datatype.value = XSD_STRING;
            }
          }
          quad[componentName] = newComponent;
        }
        if(graphName === '@default') {
          quad.graph = {
            termType: 'DefaultGraph',
            value: ''
          };
        } else {
          quad.graph = {
            termType: graphName.startsWith('_:') ? 'BlankNode' : 'NamedNode',
            value: graphName
          };
        }
        quads.push(quad);
      });
    }

    return quads;
  }
};

/**
 * Compares two RDF triples for equality.
 *
 * @param t1 the first triple.
 * @param t2 the second triple.
 *
 * @return true if the triples are the same, false if not.
 */
function _compareTriples(t1, t2) {
  for(const k in t1) {
    if(t1[k].termType !== t2[k].termType || t1[k].value !== t2[k].value) {
      return false;
    }
  }
  if(t1.object.termType !== 'Literal') {
    return true;
  }
  return (
    (t1.object.datatype.termType === t2.object.datatype.termType) &&
    (t1.object.datatype.value === t2.object.datatype.value) &&
    (t1.object.language === t2.object.language)
  );
}

const _escapeRegex = /["\\\n\r]/g;
/**
 * Escape string to N-Quads literal
 */
function _escape(s) {
  return s.replace(_escapeRegex, function(match) {
    switch(match) {
      case '"': return '\\"';
      case '\\': return '\\\\';
      case '\n': return '\\n';
      case '\r': return '\\r';
    }
  });
}

const _unescapeRegex =
  /(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
/**
 * Unescape N-Quads literal to string
 */
function _unescape(s) {
  return s.replace(_unescapeRegex, function(match, code, u, U) {
    if(code) {
      switch(code) {
        case 't': return '\t';
        case 'b': return '\b';
        case 'n': return '\n';
        case 'r': return '\r';
        case 'f': return '\f';
        case '"': return '"';
        case '\'': return '\'';
        case '\\': return '\\';
      }
    }
    if(u) {
      return String.fromCharCode(parseInt(u, 16));
    }
    if(U) {
      // FIXME: support larger values
      throw new Error('Unsupported U escape');
    }
  });
}


/***/ }),

/***/ "68fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const api = {};
module.exports = api;

/**
 * Returns true if the given value is an Array.
 *
 * @param v the value to check.
 *
 * @return true if the value is an Array, false if not.
 */
api.isArray = Array.isArray;

/**
 * Returns true if the given value is a Boolean.
 *
 * @param v the value to check.
 *
 * @return true if the value is a Boolean, false if not.
 */
api.isBoolean = v => (typeof v === 'boolean' ||
  Object.prototype.toString.call(v) === '[object Boolean]');

/**
 * Returns true if the given value is a double.
 *
 * @param v the value to check.
 *
 * @return true if the value is a double, false if not.
 */
api.isDouble = v => api.isNumber(v) && String(v).indexOf('.') !== -1;

/**
 * Returns true if the given value is an empty Object.
 *
 * @param v the value to check.
 *
 * @return true if the value is an empty Object, false if not.
 */
api.isEmptyObject = v => api.isObject(v) && Object.keys(v).length === 0;

/**
 * Returns true if the given value is a Number.
 *
 * @param v the value to check.
 *
 * @return true if the value is a Number, false if not.
 */
api.isNumber = v => (typeof v === 'number' ||
  Object.prototype.toString.call(v) === '[object Number]');

/**
 * Returns true if the given value is numeric.
 *
 * @param v the value to check.
 *
 * @return true if the value is numeric, false if not.
 */
api.isNumeric = v => !isNaN(parseFloat(v)) && isFinite(v);

/**
 * Returns true if the given value is an Object.
 *
 * @param v the value to check.
 *
 * @return true if the value is an Object, false if not.
 */
api.isObject = v => Object.prototype.toString.call(v) === '[object Object]';

/**
 * Returns true if the given value is a String.
 *
 * @param v the value to check.
 *
 * @return true if the value is a String, false if not.
 */
api.isString = v => (typeof v === 'string' ||
  Object.prototype.toString.call(v) === '[object String]');

/**
 * Returns true if the given value is undefined.
 *
 * @param v the value to check.
 *
 * @return true if the value is undefined, false if not.
 */
api.isUndefined = v => typeof v === 'undefined';


/***/ }),

/***/ "6f5c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const JsonLdError = __webpack_require__("5950");
const graphTypes = __webpack_require__("c92f");
const types = __webpack_require__("68fa");
const util = __webpack_require__("89ae");

// constants
const {
  // RDF,
  RDF_LIST,
  RDF_FIRST,
  RDF_REST,
  RDF_NIL,
  RDF_TYPE,
  // RDF_PLAIN_LITERAL,
  // RDF_XML_LITERAL,
  RDF_JSON_LITERAL,
  // RDF_OBJECT,
  // RDF_LANGSTRING,

  // XSD,
  XSD_BOOLEAN,
  XSD_DOUBLE,
  XSD_INTEGER,
  XSD_STRING,
} = __webpack_require__("feb1");

const api = {};
module.exports = api;

/**
 * Converts an RDF dataset to JSON-LD.
 *
 * @param dataset the RDF dataset.
 * @param options the RDF serialization options.
 *
 * @return a Promise that resolves to the JSON-LD output.
 */
api.fromRDF = async (
  dataset, {useRdfType = false, useNativeTypes = false}) => {
  const defaultGraph = {};
  const graphMap = {'@default': defaultGraph};
  const referencedOnce = {};

  for(const quad of dataset) {
    // TODO: change 'name' to 'graph'
    const name = (quad.graph.termType === 'DefaultGraph') ?
      '@default' : quad.graph.value;
    if(!(name in graphMap)) {
      graphMap[name] = {};
    }
    if(name !== '@default' && !(name in defaultGraph)) {
      defaultGraph[name] = {'@id': name};
    }

    const nodeMap = graphMap[name];

    // get subject, predicate, object
    const s = quad.subject.value;
    const p = quad.predicate.value;
    const o = quad.object;

    if(!(s in nodeMap)) {
      nodeMap[s] = {'@id': s};
    }
    const node = nodeMap[s];

    const objectIsNode = o.termType.endsWith('Node');
    if(objectIsNode && !(o.value in nodeMap)) {
      nodeMap[o.value] = {'@id': o.value};
    }

    if(p === RDF_TYPE && !useRdfType && objectIsNode) {
      util.addValue(node, '@type', o.value, {propertyIsArray: true});
      continue;
    }

    const value = _RDFToObject(o, useNativeTypes);
    util.addValue(node, p, value, {propertyIsArray: true});

    // object may be an RDF list/partial list node but we can't know easily
    // until all triples are read
    if(objectIsNode) {
      if(o.value === RDF_NIL) {
        // track rdf:nil uniquely per graph
        const object = nodeMap[o.value];
        if(!('usages' in object)) {
          object.usages = [];
        }
        object.usages.push({
          node,
          property: p,
          value
        });
      } else if(o.value in referencedOnce) {
        // object referenced more than once
        referencedOnce[o.value] = false;
      } else {
        // keep track of single reference
        referencedOnce[o.value] = {
          node,
          property: p,
          value
        };
      }
    }
  }

  /*
  for(let name in dataset) {
    const graph = dataset[name];
    if(!(name in graphMap)) {
      graphMap[name] = {};
    }
    if(name !== '@default' && !(name in defaultGraph)) {
      defaultGraph[name] = {'@id': name};
    }
    const nodeMap = graphMap[name];
    for(let ti = 0; ti < graph.length; ++ti) {
      const triple = graph[ti];

      // get subject, predicate, object
      const s = triple.subject.value;
      const p = triple.predicate.value;
      const o = triple.object;

      if(!(s in nodeMap)) {
        nodeMap[s] = {'@id': s};
      }
      const node = nodeMap[s];

      const objectIsId = (o.type === 'IRI' || o.type === 'blank node');
      if(objectIsId && !(o.value in nodeMap)) {
        nodeMap[o.value] = {'@id': o.value};
      }

      if(p === RDF_TYPE && !useRdfType && objectIsId) {
        util.addValue(node, '@type', o.value, {propertyIsArray: true});
        continue;
      }

      const value = _RDFToObject(o, useNativeTypes);
      util.addValue(node, p, value, {propertyIsArray: true});

      // object may be an RDF list/partial list node but we can't know easily
      // until all triples are read
      if(objectIsId) {
        if(o.value === RDF_NIL) {
          // track rdf:nil uniquely per graph
          const object = nodeMap[o.value];
          if(!('usages' in object)) {
            object.usages = [];
          }
          object.usages.push({
            node: node,
            property: p,
            value: value
          });
        } else if(o.value in referencedOnce) {
          // object referenced more than once
          referencedOnce[o.value] = false;
        } else {
          // keep track of single reference
          referencedOnce[o.value] = {
            node: node,
            property: p,
            value: value
          };
        }
      }
    }
  }*/

  // convert linked lists to @list arrays
  for(const name in graphMap) {
    const graphObject = graphMap[name];

    // no @lists to be converted, continue
    if(!(RDF_NIL in graphObject)) {
      continue;
    }

    // iterate backwards through each RDF list
    const nil = graphObject[RDF_NIL];
    if(!nil.usages) {
      continue;
    }
    for(let usage of nil.usages) {
      let node = usage.node;
      let property = usage.property;
      let head = usage.value;
      const list = [];
      const listNodes = [];

      // ensure node is a well-formed list node; it must:
      // 1. Be referenced only once.
      // 2. Have an array for rdf:first that has 1 item.
      // 3. Have an array for rdf:rest that has 1 item.
      // 4. Have no keys other than: @id, rdf:first, rdf:rest, and,
      //   optionally, @type where the value is rdf:List.
      let nodeKeyCount = Object.keys(node).length;
      while(property === RDF_REST &&
        types.isObject(referencedOnce[node['@id']]) &&
        types.isArray(node[RDF_FIRST]) && node[RDF_FIRST].length === 1 &&
        types.isArray(node[RDF_REST]) && node[RDF_REST].length === 1 &&
        (nodeKeyCount === 3 ||
          (nodeKeyCount === 4 && types.isArray(node['@type']) &&
          node['@type'].length === 1 && node['@type'][0] === RDF_LIST))) {
        list.push(node[RDF_FIRST][0]);
        listNodes.push(node['@id']);

        // get next node, moving backwards through list
        usage = referencedOnce[node['@id']];
        node = usage.node;
        property = usage.property;
        head = usage.value;
        nodeKeyCount = Object.keys(node).length;

        // if node is not a blank node, then list head found
        if(!graphTypes.isBlankNode(node)) {
          break;
        }
      }

      // transform list into @list object
      delete head['@id'];
      head['@list'] = list.reverse();
      for(const listNode of listNodes) {
        delete graphObject[listNode];
      }
    }

    delete nil.usages;
  }

  const result = [];
  const subjects = Object.keys(defaultGraph).sort();
  for(const subject of subjects) {
    const node = defaultGraph[subject];
    if(subject in graphMap) {
      const graph = node['@graph'] = [];
      const graphObject = graphMap[subject];
      const graphSubjects = Object.keys(graphObject).sort();
      for(const graphSubject of graphSubjects) {
        const node = graphObject[graphSubject];
        // only add full subjects to top-level
        if(!graphTypes.isSubjectReference(node)) {
          graph.push(node);
        }
      }
    }
    // only add full subjects to top-level
    if(!graphTypes.isSubjectReference(node)) {
      result.push(node);
    }
  }

  return result;
};

/**
 * Converts an RDF triple object to a JSON-LD object.
 *
 * @param o the RDF triple object to convert.
 * @param useNativeTypes true to output native types, false not to.
 *
 * @return the JSON-LD object.
 */
function _RDFToObject(o, useNativeTypes) {
  // convert NamedNode/BlankNode object to JSON-LD
  if(o.termType.endsWith('Node')) {
    return {'@id': o.value};
  }

  // convert literal to JSON-LD
  const rval = {'@value': o.value};

  // add language
  if(o.language) {
    rval['@language'] = o.language;
  } else {
    let type = o.datatype.value;
    if(!type) {
      type = XSD_STRING;
    }
    if(type === RDF_JSON_LITERAL) {
      type = '@json';
      try {
        rval['@value'] = JSON.parse(rval['@value']);
      } catch(e) {
        throw new JsonLdError(
          'JSON literal could not be parsed.',
          'jsonld.InvalidJsonLiteral',
          {code: 'invalid JSON literal', value: rval['@value'], cause: e});
      }
    }
    // use native types for certain xsd types
    if(useNativeTypes) {
      if(type === XSD_BOOLEAN) {
        if(rval['@value'] === 'true') {
          rval['@value'] = true;
        } else if(rval['@value'] === 'false') {
          rval['@value'] = false;
        }
      } else if(types.isNumeric(rval['@value'])) {
        if(type === XSD_INTEGER) {
          const i = parseInt(rval['@value'], 10);
          if(i.toFixed(0) === rval['@value']) {
            rval['@value'] = i;
          }
        } else if(type === XSD_DOUBLE) {
          rval['@value'] = parseFloat(rval['@value']);
        }
      }
      // do not add native type
      if(![XSD_BOOLEAN, XSD_INTEGER, XSD_DOUBLE, XSD_STRING].includes(type)) {
        rval['@type'] = type;
      }
    } else if(type !== XSD_STRING) {
      rval['@type'] = type;
    }
  }

  return rval;
}


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const {parseLinkHeader, buildHeaders} = __webpack_require__("89ae");
const {LINK_HEADER_REL} = __webpack_require__("feb1");
const JsonLdError = __webpack_require__("5950");
const RequestQueue = __webpack_require__("40ce");

const REGEX_LINK_HEADER = /(^|(\r\n))link:/i;

/**
 * Creates a built-in XMLHttpRequest document loader.
 *
 * @param options the options to use:
 *          secure: require all URLs to use HTTPS.
 *          headers: an object (map) of headers which will be passed as request
 *            headers for the requested document. Accept is not allowed.
 *          [xhr]: the XMLHttpRequest API to use.
 *
 * @return the XMLHttpRequest document loader.
 */
module.exports = ({
  secure,
  headers = {},
  xhr
} = {headers: {}}) => {
  headers = buildHeaders(headers);
  const queue = new RequestQueue();
  return queue.wrapLoader(loader);

  async function loader(url) {
    if(url.indexOf('http:') !== 0 && url.indexOf('https:') !== 0) {
      throw new JsonLdError(
        'URL could not be dereferenced; only "http" and "https" URLs are ' +
        'supported.',
        'jsonld.InvalidUrl', {code: 'loading document failed', url});
    }
    if(secure && url.indexOf('https') !== 0) {
      throw new JsonLdError(
        'URL could not be dereferenced; secure mode is enabled and ' +
        'the URL\'s scheme is not "https".',
        'jsonld.InvalidUrl', {code: 'loading document failed', url});
    }

    let req;
    try {
      req = await _get(xhr, url, headers);
    } catch(e) {
      throw new JsonLdError(
        'URL could not be dereferenced, an error occurred.',
        'jsonld.LoadDocumentError',
        {code: 'loading document failed', url, cause: e});
    }

    if(req.status >= 400) {
      throw new JsonLdError(
        'URL could not be dereferenced: ' + req.statusText,
        'jsonld.LoadDocumentError', {
          code: 'loading document failed',
          url,
          httpStatusCode: req.status
        });
    }

    const doc = {contextUrl: null, documentUrl: url, document: req.response};

    // handle Link Header (avoid unsafe header warning by existence testing)
    const contentType = req.getResponseHeader('Content-Type');
    let linkHeader;
    if(REGEX_LINK_HEADER.test(req.getAllResponseHeaders())) {
      linkHeader = req.getResponseHeader('Link');
    }
    if(linkHeader && contentType !== 'application/ld+json') {
      // only 1 related link header permitted
      linkHeader = parseLinkHeader(linkHeader)[LINK_HEADER_REL];
      if(Array.isArray(linkHeader)) {
        throw new JsonLdError(
          'URL could not be dereferenced, it has more than one ' +
          'associated HTTP Link Header.',
          'jsonld.InvalidUrl',
          {code: 'multiple context link headers', url});
      }
      if(linkHeader) {
        doc.contextUrl = linkHeader.target;
      }
    }

    return doc;
  }
};

function _get(xhr, url, headers) {
  xhr = xhr || XMLHttpRequest;
  const req = new xhr();
  return new Promise((resolve, reject) => {
    req.onload = () => resolve(req);
    req.onerror = err => reject(err);
    req.open('GET', url, true);
    for(const k in headers) {
      req.setRequestHeader(k, headers[k]);
    }
    req.send();
  });
}


/***/ }),

/***/ "7164":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/*
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */


const api = {};
module.exports = api;

// define setImmediate and nextTick
//// nextTick implementation with browser-compatible fallback ////
// from https://github.com/caolan/async/blob/master/lib/async.js

// capture the global reference to guard against fakeTimer mocks
const _setImmediate = typeof setImmediate === 'function' && setImmediate;

const _delay = _setImmediate ?
  // not a direct alias (for IE10 compatibility)
  fn => _setImmediate(fn) :
  fn => setTimeout(fn, 0);

if(typeof process === 'object' && typeof process.nextTick === 'function') {
  api.nextTick = process.nextTick;
} else {
  api.nextTick = _delay;
}
api.setImmediate = _setImmediate ? _delay : api.nextTick;

/**
 * Clones an object, array, or string/number. If a typed JavaScript object
 * is given, such as a Date, it will be converted to a string.
 *
 * @param value the value to clone.
 *
 * @return the cloned value.
 */
api.clone = function(value) {
  if(value && typeof value === 'object') {
    let rval;
    if(Array.isArray(value)) {
      rval = [];
      for(let i = 0; i < value.length; ++i) {
        rval[i] = api.clone(value[i]);
      }
    } else if(api.isObject(value)) {
      rval = {};
      for(const key in value) {
        rval[key] = api.clone(value[key]);
      }
    } else {
      rval = value.toString();
    }
    return rval;
  }
  return value;
};

/**
 * Returns true if the given value is an Object.
 *
 * @param v the value to check.
 *
 * @return true if the value is an Object, false if not.
 */
api.isObject = v => Object.prototype.toString.call(v) === '[object Object]';

/**
 * Returns true if the given value is undefined.
 *
 * @param v the value to check.
 *
 * @return true if the value is undefined, false if not.
 */
api.isUndefined = v => typeof v === 'undefined';

api.callbackify = fn => {
  return async function(...args) {
    const callback = args[args.length - 1];
    if(typeof callback === 'function') {
      args.pop();
    }

    let result;
    try {
      result = await fn.apply(null, args);
    } catch(e) {
      if(typeof callback === 'function') {
        return _invokeCallback(callback, e);
      }
      throw e;
    }

    if(typeof callback === 'function') {
      return _invokeCallback(callback, null, result);
    }

    return result;
  };
};

function _invokeCallback(callback, err, result) {
  try {
    return callback(err, result);
  } catch(unhandledError) {
    // throw unhandled errors to prevent "unhandled rejected promise"
    // and simulate what would have happened in a promiseless API
    process.nextTick(() => {
      throw unhandledError;
    });
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "7646":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const {createNodeMap} = __webpack_require__("796c");
const {isKeyword} = __webpack_require__("d1e7");
const graphTypes = __webpack_require__("c92f");
const jsonCanonicalize = __webpack_require__("5727");
const types = __webpack_require__("68fa");
const util = __webpack_require__("89ae");

const {
  // RDF,
  // RDF_LIST,
  RDF_FIRST,
  RDF_REST,
  RDF_NIL,
  RDF_TYPE,
  // RDF_PLAIN_LITERAL,
  // RDF_XML_LITERAL,
  RDF_JSON_LITERAL,
  // RDF_OBJECT,
  RDF_LANGSTRING,

  // XSD,
  XSD_BOOLEAN,
  XSD_DOUBLE,
  XSD_INTEGER,
  XSD_STRING,
} = __webpack_require__("feb1");

const {
  isAbsolute: _isAbsoluteIri
} = __webpack_require__("ddd7");

const api = {};
module.exports = api;

/**
 * Outputs an RDF dataset for the expanded JSON-LD input.
 *
 * @param input the expanded JSON-LD input.
 * @param options the RDF serialization options.
 *
 * @return the RDF dataset.
 */
api.toRDF = (input, options) => {
  // create node map for default graph (and any named graphs)
  const issuer = new util.IdentifierIssuer('_:b');
  const nodeMap = {'@default': {}};
  createNodeMap(input, nodeMap, '@default', issuer);

  const dataset = [];
  const graphNames = Object.keys(nodeMap).sort();
  for(const graphName of graphNames) {
    let graphTerm;
    if(graphName === '@default') {
      graphTerm = {termType: 'DefaultGraph', value: ''};
    } else if(_isAbsoluteIri(graphName)) {
      if(graphName.startsWith('_:')) {
        graphTerm = {termType: 'BlankNode'};
      } else {
        graphTerm = {termType: 'NamedNode'};
      }
      graphTerm.value = graphName;
    } else {
      // skip relative IRIs (not valid RDF)
      continue;
    }
    _graphToRDF(dataset, nodeMap[graphName], graphTerm, issuer, options);
  }

  return dataset;
};

/**
 * Adds RDF quads for a particular graph to the given dataset.
 *
 * @param dataset the dataset to append RDF quads to.
 * @param graph the graph to create RDF quads for.
 * @param graphTerm the graph term for each quad.
 * @param issuer a IdentifierIssuer for assigning blank node names.
 * @param options the RDF serialization options.
 *
 * @return the array of RDF triples for the given graph.
 */
function _graphToRDF(dataset, graph, graphTerm, issuer, options) {
  const ids = Object.keys(graph).sort();
  for(const id of ids) {
    const node = graph[id];
    const properties = Object.keys(node).sort();
    for(let property of properties) {
      const items = node[property];
      if(property === '@type') {
        property = RDF_TYPE;
      } else if(isKeyword(property)) {
        continue;
      }

      for(const item of items) {
        // RDF subject
        const subject = {
          termType: id.startsWith('_:') ? 'BlankNode' : 'NamedNode',
          value: id
        };

        // skip relative IRI subjects (not valid RDF)
        if(!_isAbsoluteIri(id)) {
          continue;
        }

        // RDF predicate
        const predicate = {
          termType: property.startsWith('_:') ? 'BlankNode' : 'NamedNode',
          value: property
        };

        // skip relative IRI predicates (not valid RDF)
        if(!_isAbsoluteIri(property)) {
          continue;
        }

        // skip blank node predicates unless producing generalized RDF
        if(predicate.termType === 'BlankNode' &&
          !options.produceGeneralizedRdf) {
          continue;
        }

        // convert list, value or node object to triple
        const object = _objectToRDF(item, issuer, dataset, graphTerm);
        // skip null objects (they are relative IRIs)
        if(object) {
          dataset.push({
            subject,
            predicate,
            object,
            graph: graphTerm
          });
        }
      }
    }
  }
}

/**
 * Converts a @list value into linked list of blank node RDF quads
 * (an RDF collection).
 *
 * @param list the @list value.
 * @param issuer a IdentifierIssuer for assigning blank node names.
 * @param dataset the array of quads to append to.
 * @param graphTerm the graph term for each quad.
 *
 * @return the head of the list.
 */
function _listToRDF(list, issuer, dataset, graphTerm) {
  const first = {termType: 'NamedNode', value: RDF_FIRST};
  const rest = {termType: 'NamedNode', value: RDF_REST};
  const nil = {termType: 'NamedNode', value: RDF_NIL};

  const last = list.pop();
  // Result is the head of the list
  const result = last ? {termType: 'BlankNode', value: issuer.getId()} : nil;
  let subject = result;

  for(const item of list) {
    const object = _objectToRDF(item, issuer, dataset, graphTerm);
    const next = {termType: 'BlankNode', value: issuer.getId()};
    dataset.push({
      subject,
      predicate: first,
      object,
      graph: graphTerm
    });
    dataset.push({
      subject,
      predicate: rest,
      object: next,
      graph: graphTerm
    });
    subject = next;
  }

  // Tail of list
  if(last) {
    const object = _objectToRDF(last, issuer, dataset, graphTerm);
    dataset.push({
      subject,
      predicate: first,
      object,
      graph: graphTerm
    });
    dataset.push({
      subject,
      predicate: rest,
      object: nil,
      graph: graphTerm
    });
  }

  return result;
}

/**
 * Converts a JSON-LD value object to an RDF literal or a JSON-LD string,
 * node object to an RDF resource, or adds a list.
 *
 * @param item the JSON-LD value or node object.
 * @param issuer a IdentifierIssuer for assigning blank node names.
 * @param dataset the dataset to append RDF quads to.
 * @param graphTerm the graph term for each quad.
 *
 * @return the RDF literal or RDF resource.
 */
function _objectToRDF(item, issuer, dataset, graphTerm) {
  const object = {};

  // convert value object to RDF
  if(graphTypes.isValue(item)) {
    object.termType = 'Literal';
    object.value = undefined;
    object.datatype = {
      termType: 'NamedNode'
    };
    let value = item['@value'];
    const datatype = item['@type'] || null;

    // convert to XSD/JSON datatypes as appropriate
    if(datatype === '@json') {
      object.value = jsonCanonicalize(value);
      object.datatype.value = RDF_JSON_LITERAL;
    } else if(types.isBoolean(value)) {
      object.value = value.toString();
      object.datatype.value = datatype || XSD_BOOLEAN;
    } else if(types.isDouble(value) || datatype === XSD_DOUBLE) {
      if(!types.isDouble(value)) {
        value = parseFloat(value);
      }
      // canonical double representation
      object.value = value.toExponential(15).replace(/(\d)0*e\+?/, '$1E');
      object.datatype.value = datatype || XSD_DOUBLE;
    } else if(types.isNumber(value)) {
      object.value = value.toFixed(0);
      object.datatype.value = datatype || XSD_INTEGER;
    } else if('@language' in item) {
      object.value = value;
      object.datatype.value = datatype || RDF_LANGSTRING;
      object.language = item['@language'];
    } else {
      object.value = value;
      object.datatype.value = datatype || XSD_STRING;
    }
  } else if(graphTypes.isList(item)) {
    const _list = _listToRDF(item['@list'], issuer, dataset, graphTerm);
    object.termType = _list.termType;
    object.value = _list.value;
  } else {
    // convert string/node object to RDF
    const id = types.isObject(item) ? item['@id'] : item;
    object.termType = id.startsWith('_:') ? 'BlankNode' : 'NamedNode';
    object.value = id;
  }

  // skip relative IRIs, not valid RDF
  if(object.termType === 'NamedNode' && !_isAbsoluteIri(object.value)) {
    return null;
  }

  return object;
}


/***/ }),

/***/ "796c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const {isKeyword} = __webpack_require__("d1e7");
const graphTypes = __webpack_require__("c92f");
const types = __webpack_require__("68fa");
const util = __webpack_require__("89ae");
const JsonLdError = __webpack_require__("5950");

const api = {};
module.exports = api;

/**
 * Creates a merged JSON-LD node map (node ID => node).
 *
 * @param input the expanded JSON-LD to create a node map of.
 * @param [options] the options to use:
 *          [issuer] a jsonld.IdentifierIssuer to use to label blank nodes.
 *
 * @return the node map.
 */
api.createMergedNodeMap = (input, options) => {
  options = options || {};

  // produce a map of all subjects and name each bnode
  const issuer = options.issuer || new util.IdentifierIssuer('_:b');
  const graphs = {'@default': {}};
  api.createNodeMap(input, graphs, '@default', issuer);

  // add all non-default graphs to default graph
  return api.mergeNodeMaps(graphs);
};

/**
 * Recursively flattens the subjects in the given JSON-LD expanded input
 * into a node map.
 *
 * @param input the JSON-LD expanded input.
 * @param graphs a map of graph name to subject map.
 * @param graph the name of the current graph.
 * @param issuer the blank node identifier issuer.
 * @param name the name assigned to the current input if it is a bnode.
 * @param list the list to append to, null for none.
 */
api.createNodeMap = (input, graphs, graph, issuer, name, list) => {
  // recurse through array
  if(types.isArray(input)) {
    for(const node of input) {
      api.createNodeMap(node, graphs, graph, issuer, undefined, list);
    }
    return;
  }

  // add non-object to list
  if(!types.isObject(input)) {
    if(list) {
      list.push(input);
    }
    return;
  }

  // add values to list
  if(graphTypes.isValue(input)) {
    if('@type' in input) {
      let type = input['@type'];
      // rename @type blank node
      if(type.indexOf('_:') === 0) {
        input['@type'] = type = issuer.getId(type);
      }
    }
    if(list) {
      list.push(input);
    }
    return;
  } else if(list && graphTypes.isList(input)) {
    const _list = [];
    api.createNodeMap(input['@list'], graphs, graph, issuer, name, _list);
    list.push({'@list': _list});
    return;
  }

  // Note: At this point, input must be a subject.

  // spec requires @type to be named first, so assign names early
  if('@type' in input) {
    const types = input['@type'];
    for(const type of types) {
      if(type.indexOf('_:') === 0) {
        issuer.getId(type);
      }
    }
  }

  // get name for subject
  if(types.isUndefined(name)) {
    name = graphTypes.isBlankNode(input) ?
      issuer.getId(input['@id']) : input['@id'];
  }

  // add subject reference to list
  if(list) {
    list.push({'@id': name});
  }

  // create new subject or merge into existing one
  const subjects = graphs[graph];
  const subject = subjects[name] = subjects[name] || {};
  subject['@id'] = name;
  const properties = Object.keys(input).sort();
  for(let property of properties) {
    // skip @id
    if(property === '@id') {
      continue;
    }

    // handle reverse properties
    if(property === '@reverse') {
      const referencedNode = {'@id': name};
      const reverseMap = input['@reverse'];
      for(const reverseProperty in reverseMap) {
        const items = reverseMap[reverseProperty];
        for(const item of items) {
          let itemName = item['@id'];
          if(graphTypes.isBlankNode(item)) {
            itemName = issuer.getId(itemName);
          }
          api.createNodeMap(item, graphs, graph, issuer, itemName);
          util.addValue(
            subjects[itemName], reverseProperty, referencedNode,
            {propertyIsArray: true, allowDuplicate: false});
        }
      }
      continue;
    }

    // recurse into graph
    if(property === '@graph') {
      // add graph subjects map entry
      if(!(name in graphs)) {
        graphs[name] = {};
      }
      api.createNodeMap(input[property], graphs, name, issuer);
      continue;
    }

    // copy non-@type keywords
    if(property !== '@type' && isKeyword(property)) {
      if(property === '@index' && property in subject &&
        (input[property] !== subject[property] ||
        input[property]['@id'] !== subject[property]['@id'])) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; conflicting @index property detected.',
          'jsonld.SyntaxError',
          {code: 'conflicting indexes', subject});
      }
      subject[property] = input[property];
      continue;
    }

    // iterate over objects
    const objects = input[property];

    // if property is a bnode, assign it a new id
    if(property.indexOf('_:') === 0) {
      property = issuer.getId(property);
    }

    // ensure property is added for empty arrays
    if(objects.length === 0) {
      util.addValue(subject, property, [], {propertyIsArray: true});
      continue;
    }
    for(let o of objects) {
      if(property === '@type') {
        // rename @type blank nodes
        o = (o.indexOf('_:') === 0) ? issuer.getId(o) : o;
      }

      // handle embedded subject or subject reference
      if(graphTypes.isSubject(o) || graphTypes.isSubjectReference(o)) {
        // relabel blank node @id
        const id = graphTypes.isBlankNode(o) ?
          issuer.getId(o['@id']) : o['@id'];

        // add reference and recurse
        util.addValue(
          subject, property, {'@id': id},
          {propertyIsArray: true, allowDuplicate: false});
        api.createNodeMap(o, graphs, graph, issuer, id);
      } else if(graphTypes.isValue(o)) {
        util.addValue(
          subject, property, o,
          {propertyIsArray: true, allowDuplicate: false});
      } else if(graphTypes.isList(o)) {
        // handle @list
        const _list = [];
        api.createNodeMap(o['@list'], graphs, graph, issuer, name, _list);
        o = {'@list': _list};
        util.addValue(
          subject, property, o,
          {propertyIsArray: true, allowDuplicate: false});
      } else {
        // handle @value
        api.createNodeMap(o, graphs, graph, issuer, name);
        util.addValue(
          subject, property, o, {propertyIsArray: true, allowDuplicate: false});
      }
    }
  }
};

/**
 * Merge separate named graphs into a single merged graph including
 * all nodes from the default graph and named graphs.
 *
 * @param graphs a map of graph name to subject map.
 *
 * @return the merged graph map.
 */
api.mergeNodeMapGraphs = graphs => {
  const merged = {};
  for(const name of Object.keys(graphs).sort()) {
    for(const id of Object.keys(graphs[name]).sort()) {
      const node = graphs[name][id];
      if(!(id in merged)) {
        merged[id] = {'@id': id};
      }
      const mergedNode = merged[id];

      for(const property of Object.keys(node).sort()) {
        if(isKeyword(property)) {
          // copy keywords
          mergedNode[property] = util.clone(node[property]);
        } else {
          // merge objects
          for(const value of node[property]) {
            util.addValue(
              mergedNode, property, util.clone(value),
              {propertyIsArray: true, allowDuplicate: false});
          }
        }
      }
    }
  }

  return merged;
};

api.mergeNodeMaps = graphs => {
  // add all non-default graphs to default graph
  const defaultGraph = graphs['@default'];
  const graphNames = Object.keys(graphs).sort();
  for(const graphName of graphNames) {
    if(graphName === '@default') {
      continue;
    }
    const nodeMap = graphs[graphName];
    let subject = defaultGraph[graphName];
    if(!subject) {
      defaultGraph[graphName] = subject = {
        '@id': graphName,
        '@graph': []
      };
    } else if(!('@graph' in subject)) {
      subject['@graph'] = [];
    }
    const graph = subject['@graph'];
    for(const id of Object.keys(nodeMap).sort()) {
      const node = nodeMap[id];
      // only add full subjects
      if(!graphTypes.isSubjectReference(node)) {
        graph.push(node);
      }
    }
  }
  return defaultGraph;
};


/***/ }),

/***/ "8322":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


module.exports = jsonld => {
  class JsonLdProcessor {
    toString() {
      return '[object JsonLdProcessor]';
    }
  }
  Object.defineProperty(JsonLdProcessor, 'prototype', {
    writable: false,
    enumerable: false
  });
  Object.defineProperty(JsonLdProcessor.prototype, 'constructor', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: JsonLdProcessor
  });

  // The Web IDL test harness will check the number of parameters defined in
  // the functions below. The number of parameters must exactly match the
  // required (non-optional) parameters of the JsonLdProcessor interface as
  // defined here:
  // https://www.w3.org/TR/json-ld-api/#the-jsonldprocessor-interface

  JsonLdProcessor.compact = function(input, ctx) {
    if(arguments.length < 2) {
      return Promise.reject(
        new TypeError('Could not compact, too few arguments.'));
    }
    return jsonld.compact(input, ctx);
  };
  JsonLdProcessor.expand = function(input) {
    if(arguments.length < 1) {
      return Promise.reject(
        new TypeError('Could not expand, too few arguments.'));
    }
    return jsonld.expand(input);
  };
  JsonLdProcessor.flatten = function(input) {
    if(arguments.length < 1) {
      return Promise.reject(
        new TypeError('Could not flatten, too few arguments.'));
    }
    return jsonld.flatten(input);
  };

  return JsonLdProcessor;
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "89ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const graphTypes = __webpack_require__("c92f");
const types = __webpack_require__("68fa");
// TODO: move `IdentifierIssuer` to its own package
const IdentifierIssuer = __webpack_require__("30ba").IdentifierIssuer;
const JsonLdError = __webpack_require__("5950");

// constants
const REGEX_LINK_HEADERS = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g;
const REGEX_LINK_HEADER = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/;
const REGEX_LINK_HEADER_PARAMS =
  /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g;

const DEFAULTS = {
  headers: {
    accept: 'application/ld+json, application/json'
  }
};

const api = {};
module.exports = api;
api.IdentifierIssuer = IdentifierIssuer;

// define setImmediate and nextTick
// // nextTick implementation with browser-compatible fallback // //
// from https://github.com/caolan/async/blob/master/lib/async.js

// capture the global reference to guard against fakeTimer mocks
const _setImmediate = typeof setImmediate === 'function' && setImmediate;

const _delay = _setImmediate ?
  // not a direct alias (for IE10 compatibility)
  fn => _setImmediate(fn) :
  fn => setTimeout(fn, 0);

if(typeof process === 'object' && typeof process.nextTick === 'function') {
  api.nextTick = process.nextTick;
} else {
  api.nextTick = _delay;
}
api.setImmediate = _setImmediate ? _delay : api.nextTick;

/**
 * Clones an object, array, Map, Set, or string/number. If a typed JavaScript
 * object is given, such as a Date, it will be converted to a string.
 *
 * @param value the value to clone.
 *
 * @return the cloned value.
 */
api.clone = function(value) {
  if(value && typeof value === 'object') {
    let rval;
    if(types.isArray(value)) {
      rval = [];
      for(let i = 0; i < value.length; ++i) {
        rval[i] = api.clone(value[i]);
      }
    } else if(value instanceof Map) {
      rval = new Map();
      for(const [k, v] of value) {
        rval.set(k, api.clone(v));
      }
    } else if(value instanceof Set) {
      rval = new Set();
      for(const v of value) {
        rval.add(api.clone(v));
      }
    } else if(types.isObject(value)) {
      rval = {};
      for(const key in value) {
        rval[key] = api.clone(value[key]);
      }
    } else {
      rval = value.toString();
    }
    return rval;
  }
  return value;
};

/**
 * Ensure a value is an array. If the value is an array, it is returned.
 * Otherwise, it is wrapped in an array.
 *
 * @param value the value to return as an array.
 *
 * @return the value as an array.
 */
api.asArray = function(value) {
  return Array.isArray(value) ? value : [value];
};

/**
 * Builds an HTTP headers object for making a JSON-LD request from custom
 * headers and asserts the `accept` header isn't overridden.
 *
 * @param headers an object of headers with keys as header names and values
 *          as header values.
 *
 * @return an object of headers with a valid `accept` header.
 */
api.buildHeaders = (headers = {}) => {
  const hasAccept = Object.keys(headers).some(
    h => h.toLowerCase() === 'accept');

  if(hasAccept) {
    throw new RangeError(
      'Accept header may not be specified; only "' +
      DEFAULTS.headers.accept + '" is supported.');
  }

  return Object.assign({Accept: DEFAULTS.headers.accept}, headers);
};

/**
 * Parses a link header. The results will be key'd by the value of "rel".
 *
 * Link: <http://json-ld.org/contexts/person.jsonld>;
 * rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json"
 *
 * Parses as: {
 *   'http://www.w3.org/ns/json-ld#context': {
 *     target: http://json-ld.org/contexts/person.jsonld,
 *     type: 'application/ld+json'
 *   }
 * }
 *
 * If there is more than one "rel" with the same IRI, then entries in the
 * resulting map for that "rel" will be arrays.
 *
 * @param header the link header to parse.
 */
api.parseLinkHeader = header => {
  const rval = {};
  // split on unbracketed/unquoted commas
  const entries = header.match(REGEX_LINK_HEADERS);
  for(let i = 0; i < entries.length; ++i) {
    let match = entries[i].match(REGEX_LINK_HEADER);
    if(!match) {
      continue;
    }
    const result = {target: match[1]};
    const params = match[2];
    while((match = REGEX_LINK_HEADER_PARAMS.exec(params))) {
      result[match[1]] = (match[2] === undefined) ? match[3] : match[2];
    }
    const rel = result['rel'] || '';
    if(Array.isArray(rval[rel])) {
      rval[rel].push(result);
    } else if(rval.hasOwnProperty(rel)) {
      rval[rel] = [rval[rel], result];
    } else {
      rval[rel] = result;
    }
  }
  return rval;
};

/**
 * Throws an exception if the given value is not a valid @type value.
 *
 * @param v the value to check.
 */
api.validateTypeValue = v => {
  // can be a string or an empty object
  if(types.isString(v) || types.isEmptyObject(v)) {
    return;
  }

  // must be an array
  let isValid = false;
  if(types.isArray(v)) {
    // must contain only strings
    isValid = true;
    for(let i = 0; i < v.length; ++i) {
      if(!(types.isString(v[i]))) {
        isValid = false;
        break;
      }
    }
  }

  if(!isValid) {
    throw new JsonLdError(
      'Invalid JSON-LD syntax; "@type" value must a string, an array of ' +
      'strings, or an empty object.', 'jsonld.SyntaxError',
      {code: 'invalid type value', value: v});
  }
};

/**
 * Returns true if the given subject has the given property.
 *
 * @param subject the subject to check.
 * @param property the property to look for.
 *
 * @return true if the subject has the given property, false if not.
 */
api.hasProperty = (subject, property) => {
  if(subject.hasOwnProperty(property)) {
    const value = subject[property];
    return (!types.isArray(value) || value.length > 0);
  }
  return false;
};

/**
 * Determines if the given value is a property of the given subject.
 *
 * @param subject the subject to check.
 * @param property the property to check.
 * @param value the value to check.
 *
 * @return true if the value exists, false if not.
 */
api.hasValue = (subject, property, value) => {
  if(api.hasProperty(subject, property)) {
    let val = subject[property];
    const isList = graphTypes.isList(val);
    if(types.isArray(val) || isList) {
      if(isList) {
        val = val['@list'];
      }
      for(let i = 0; i < val.length; ++i) {
        if(api.compareValues(value, val[i])) {
          return true;
        }
      }
    } else if(!types.isArray(value)) {
      // avoid matching the set of values with an array value parameter
      return api.compareValues(value, val);
    }
  }
  return false;
};

/**
 * Adds a value to a subject. If the value is an array, all values in the
 * array will be added.
 *
 * @param subject the subject to add the value to.
 * @param property the property that relates the value to the subject.
 * @param value the value to add.
 * @param [options] the options to use:
 *        [propertyIsArray] true if the property is always an array, false
 *          if not (default: false).
 *        [valueIsArray] true if the value to be added should be preserved as
 *          an array (lists) (default: false).
 *        [allowDuplicate] true to allow duplicates, false not to (uses a
 *          simple shallow comparison of subject ID or value) (default: true).
 */
api.addValue = (subject, property, value, options) => {
  options = options || {};
  if(!('propertyIsArray' in options)) {
    options.propertyIsArray = false;
  }
  if(!('valueIsArray' in options)) {
    options.valueIsArray = false;
  }
  if(!('allowDuplicate' in options)) {
    options.allowDuplicate = true;
  }

  if(options.valueIsArray) {
    subject[property] = value;
  } else if(types.isArray(value)) {
    if(value.length === 0 && options.propertyIsArray &&
      !subject.hasOwnProperty(property)) {
      subject[property] = [];
    }
    for(let i = 0; i < value.length; ++i) {
      api.addValue(subject, property, value[i], options);
    }
  } else if(subject.hasOwnProperty(property)) {
    // check if subject already has value if duplicates not allowed
    const hasValue = (!options.allowDuplicate &&
      api.hasValue(subject, property, value));

    // make property an array if value not present or always an array
    if(!types.isArray(subject[property]) &&
      (!hasValue || options.propertyIsArray)) {
      subject[property] = [subject[property]];
    }

    // add new value
    if(!hasValue) {
      subject[property].push(value);
    }
  } else {
    // add new value as set or single value
    subject[property] = options.propertyIsArray ? [value] : value;
  }
};

/**
 * Gets all of the values for a subject's property as an array.
 *
 * @param subject the subject.
 * @param property the property.
 *
 * @return all of the values for a subject's property as an array.
 */
api.getValues = (subject, property) => [].concat(subject[property] || []);

/**
 * Removes a property from a subject.
 *
 * @param subject the subject.
 * @param property the property.
 */
api.removeProperty = (subject, property) => {
  delete subject[property];
};

/**
 * Removes a value from a subject.
 *
 * @param subject the subject.
 * @param property the property that relates the value to the subject.
 * @param value the value to remove.
 * @param [options] the options to use:
 *          [propertyIsArray] true if the property is always an array, false
 *            if not (default: false).
 */
api.removeValue = (subject, property, value, options) => {
  options = options || {};
  if(!('propertyIsArray' in options)) {
    options.propertyIsArray = false;
  }

  // filter out value
  const values = api.getValues(subject, property).filter(
    e => !api.compareValues(e, value));

  if(values.length === 0) {
    api.removeProperty(subject, property);
  } else if(values.length === 1 && !options.propertyIsArray) {
    subject[property] = values[0];
  } else {
    subject[property] = values;
  }
};

/**
 * Relabels all blank nodes in the given JSON-LD input.
 *
 * @param input the JSON-LD input.
 * @param [options] the options to use:
 *          [issuer] an IdentifierIssuer to use to label blank nodes.
 */
api.relabelBlankNodes = (input, options) => {
  options = options || {};
  const issuer = options.issuer || new IdentifierIssuer('_:b');
  return _labelBlankNodes(issuer, input);
};

/**
 * Compares two JSON-LD values for equality. Two JSON-LD values will be
 * considered equal if:
 *
 * 1. They are both primitives of the same type and value.
 * 2. They are both @values with the same @value, @type, @language,
 *   and @index, OR
 * 3. They both have @ids they are the same.
 *
 * @param v1 the first value.
 * @param v2 the second value.
 *
 * @return true if v1 and v2 are considered equal, false if not.
 */
api.compareValues = (v1, v2) => {
  // 1. equal primitives
  if(v1 === v2) {
    return true;
  }

  // 2. equal @values
  if(graphTypes.isValue(v1) && graphTypes.isValue(v2) &&
    v1['@value'] === v2['@value'] &&
    v1['@type'] === v2['@type'] &&
    v1['@language'] === v2['@language'] &&
    v1['@index'] === v2['@index']) {
    return true;
  }

  // 3. equal @ids
  if(types.isObject(v1) &&
    ('@id' in v1) &&
    types.isObject(v2) &&
    ('@id' in v2)) {
    return v1['@id'] === v2['@id'];
  }

  return false;
};

/**
 * Compares two strings first based on length and then lexicographically.
 *
 * @param a the first string.
 * @param b the second string.
 *
 * @return -1 if a < b, 1 if a > b, 0 if a === b.
 */
api.compareShortestLeast = (a, b) => {
  if(a.length < b.length) {
    return -1;
  }
  if(b.length < a.length) {
    return 1;
  }
  if(a === b) {
    return 0;
  }
  return (a < b) ? -1 : 1;
};

api.normalizeDocumentLoader = fn => {
  if(fn.length < 2) {
    return api.callbackify(fn);
  }

  return async function(url) {
    const callback = arguments[1];
    return new Promise((resolve, reject) => {
      try {
        fn(url, (err, remoteDoc) => {
          if(typeof callback === 'function') {
            return _invokeCallback(callback, err, remoteDoc);
          } else if(err) {
            reject(err);
          } else {
            resolve(remoteDoc);
          }
        });
      } catch(e) {
        if(typeof callback === 'function') {
          return _invokeCallback(callback, e);
        }
        reject(e);
      }
    });
  };
};

api.callbackify = fn => {
  return async function(...args) {
    const callback = args[args.length - 1];
    if(typeof callback === 'function') {
      args.pop();
    }

    let result;
    try {
      result = await fn.apply(null, args);
    } catch(e) {
      if(typeof callback === 'function') {
        return _invokeCallback(callback, e);
      }
      throw e;
    }

    if(typeof callback === 'function') {
      return _invokeCallback(callback, null, result);
    }

    return result;
  };
};

function _invokeCallback(callback, err, result) {
  // execute on next tick to prevent "unhandled rejected promise"
  // and simulate what would have happened in a promiseless API
  api.nextTick(() => callback(err, result));
}

/**
 * Labels the blank nodes in the given value using the given IdentifierIssuer.
 *
 * @param issuer the IdentifierIssuer to use.
 * @param element the element with blank nodes to rename.
 *
 * @return the element.
 */
function _labelBlankNodes(issuer, element) {
  if(types.isArray(element)) {
    for(let i = 0; i < element.length; ++i) {
      element[i] = _labelBlankNodes(issuer, element[i]);
    }
  } else if(graphTypes.isList(element)) {
    element['@list'] = _labelBlankNodes(issuer, element['@list']);
  } else if(types.isObject(element)) {
    // relabel blank node
    if(graphTypes.isBlankNode(element)) {
      element['@id'] = issuer.getId(element['@id']);
    }

    // recursively apply to all keys
    const keys = Object.keys(element).sort();
    for(let ki = 0; ki < keys.length; ++ki) {
      const key = keys[ki];
      if(key !== '@id') {
        element[key] = _labelBlankNodes(issuer, element[key]);
      }
    }
  }

  return element;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "8acc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */


const util = __webpack_require__("7164");

module.exports = class IdentifierIssuer {
  /**
   * Creates a new IdentifierIssuer. A IdentifierIssuer issues unique
   * identifiers, keeping track of any previously issued identifiers.
   *
   * @param prefix the prefix to use ('<prefix><counter>').
   */
  constructor(prefix) {
    this.prefix = prefix;
    this.counter = 0;
    this.existing = {};
  }

  /**
   * Copies this IdentifierIssuer.
   *
   * @return a copy of this IdentifierIssuer.
   */
  clone() {
    const copy = new IdentifierIssuer(this.prefix);
    copy.counter = this.counter;
    copy.existing = util.clone(this.existing);
    return copy;
  }

  /**
   * Gets the new identifier for the given old identifier, where if no old
   * identifier is given a new identifier will be generated.
   *
   * @param [old] the old identifier to get the new identifier for.
   *
   * @return the new identifier.
   */
  getId(old) {
    // return existing old identifier
    if(old && old in this.existing) {
      return this.existing[old];
    }

    // get next identifier
    const identifier = this.prefix + this.counter;
    this.counter += 1;

    // save mapping
    if(old) {
      this.existing[old] = identifier;
    }

    return identifier;
  }

  /**
   * Returns true if the given old identifer has already been assigned a new
   * identifier.
   *
   * @param old the old identifier to check.
   *
   * @return true if the old identifier has been assigned a new identifier,
   *   false if not.
   */
  hasId(old) {
    return (old in this.existing);
  }
};


/***/ }),

/***/ "8dfb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {//
//
//
//
global.jsonld = __webpack_require__("46bd");
global.jQuery = __webpack_require__("1157");

__webpack_require__("3084");

__webpack_require__("f7fc");

__webpack_require__("2e48"); // https://vuejsdevelopers.com/2017/05/20/vue-js-safely-jquery-plugin/


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'rdform',
  props: ['submit', 'template', 'rootShape', 'templateExtension', 'hooks', 'settings', 'data'],
  mounted: function mounted() {
    var settings = {
      template: this.template,
      rootShape: this.rootShape,
      templateExtension: this.templateExtension,
      hooks: this.hooks,
      cache: true,
      // when using with wepack I think it is no good idea to use the rdform cache feature
      verbose: false,
      submit: this.submit,
      data: this.data,
      debug: true
    };
    Object.assign(settings, this.settings);
    global.jQuery(this.$el).RDForm(settings);
  },
  beforeDestroy: function beforeDestroy() {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "900e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */


// TODO: convert to ES6 iterable

module.exports = class Permutator {
  /**
   * A Permutator iterates over all possible permutations of the given array
   * of elements.
   *
   * @param list the array of elements to iterate over.
   */
  constructor(list) {
    // original array
    this.list = list.sort();
    // indicates whether there are more permutations
    this.done = false;
    // directional info for permutation algorithm
    this.left = {};
    for(let i = 0; i < list.length; ++i) {
      this.left[list[i]] = true;
    }
  }

  /**
   * Returns true if there is another permutation.
   *
   * @return true if there is another permutation, false if not.
   */
  hasNext() {
    return !this.done;
  }

  /**
   * Gets the next permutation. Call hasNext() to ensure there is another one
   * first.
   *
   * @return the next permutation.
   */
  next() {
    // copy current permutation
    const rval = this.list.slice();

    /* Calculate the next permutation using the Steinhaus-Johnson-Trotter
     permutation algorithm. */

    // get largest mobile element k
    // (mobile: element is greater than the one it is looking at)
    let k = null;
    let pos = 0;
    const length = this.list.length;
    for(let i = 0; i < length; ++i) {
      const element = this.list[i];
      const left = this.left[element];
      if((k === null || element > k) &&
        ((left && i > 0 && element > this.list[i - 1]) ||
        (!left && i < (length - 1) && element > this.list[i + 1]))) {
        k = element;
        pos = i;
      }
    }

    // no more permutations
    if(k === null) {
      this.done = true;
    } else {
      // swap k and the element it is looking at
      const swap = this.left[k] ? pos - 1 : pos + 1;
      this.list[pos] = this.list[swap];
      this.list[swap] = k;

      // reverse the direction of all elements larger than k
      for(let i = 0; i < length; ++i) {
        if(this.list[i] > k) {
          this.left[this.list[i]] = !this.left[this.list[i]];
        }
      }
    }

    return rval;
  }
};



/***/ }),

/***/ "9152":
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "a754":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Secure Hash Algorithm with 160-bit digest (SHA-1) implementation.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2015 Digital Bazaar, Inc.
 */
var forge = __webpack_require__("d327");
__webpack_require__("eb9d");
__webpack_require__("b1d4");

var sha1 = module.exports = forge.sha1 = forge.sha1 || {};
forge.md.sha1 = forge.md.algorithms.sha1 = sha1;

/**
 * Creates a SHA-1 message digest object.
 *
 * @return a message digest object.
 */
sha1.create = function() {
  // do initialization as necessary
  if(!_initialized) {
    _init();
  }

  // SHA-1 state contains five 32-bit integers
  var _state = null;

  // input buffer
  var _input = forge.util.createBuffer();

  // used for word storage
  var _w = new Array(80);

  // message digest object
  var md = {
    algorithm: 'sha1',
    blockLength: 64,
    digestLength: 20,
    // 56-bit length of message so far (does not including padding)
    messageLength: 0,
    // true message length
    fullMessageLength: null,
    // size of message length in bytes
    messageLengthSize: 8
  };

  /**
   * Starts the digest.
   *
   * @return this digest object.
   */
  md.start = function() {
    // up to 56-bit message length for convenience
    md.messageLength = 0;

    // full message length (set md.messageLength64 for backwards-compatibility)
    md.fullMessageLength = md.messageLength64 = [];
    var int32s = md.messageLengthSize / 4;
    for(var i = 0; i < int32s; ++i) {
      md.fullMessageLength.push(0);
    }
    _input = forge.util.createBuffer();
    _state = {
      h0: 0x67452301,
      h1: 0xEFCDAB89,
      h2: 0x98BADCFE,
      h3: 0x10325476,
      h4: 0xC3D2E1F0
    };
    return md;
  };
  // start digest automatically for first time
  md.start();

  /**
   * Updates the digest with the given message input. The given input can
   * treated as raw input (no encoding will be applied) or an encoding of
   * 'utf8' maybe given to encode the input using UTF-8.
   *
   * @param msg the message input to update with.
   * @param encoding the encoding to use (default: 'raw', other: 'utf8').
   *
   * @return this digest object.
   */
  md.update = function(msg, encoding) {
    if(encoding === 'utf8') {
      msg = forge.util.encodeUtf8(msg);
    }

    // update message length
    var len = msg.length;
    md.messageLength += len;
    len = [(len / 0x100000000) >>> 0, len >>> 0];
    for(var i = md.fullMessageLength.length - 1; i >= 0; --i) {
      md.fullMessageLength[i] += len[1];
      len[1] = len[0] + ((md.fullMessageLength[i] / 0x100000000) >>> 0);
      md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
      len[0] = ((len[1] / 0x100000000) >>> 0);
    }

    // add bytes to input buffer
    _input.putBytes(msg);

    // process bytes
    _update(_state, _w, _input);

    // compact input buffer every 2K or if empty
    if(_input.read > 2048 || _input.length() === 0) {
      _input.compact();
    }

    return md;
  };

  /**
   * Produces the digest.
   *
   * @return a byte buffer containing the digest value.
   */
  md.digest = function() {
    /* Note: Here we copy the remaining bytes in the input buffer and
    add the appropriate SHA-1 padding. Then we do the final update
    on a copy of the state so that if the user wants to get
    intermediate digests they can do so. */

    /* Determine the number of bytes that must be added to the message
    to ensure its length is congruent to 448 mod 512. In other words,
    the data to be digested must be a multiple of 512 bits (or 128 bytes).
    This data includes the message, some padding, and the length of the
    message. Since the length of the message will be encoded as 8 bytes (64
    bits), that means that the last segment of the data must have 56 bytes
    (448 bits) of message and padding. Therefore, the length of the message
    plus the padding must be congruent to 448 mod 512 because
    512 - 128 = 448.

    In order to fill up the message length it must be filled with
    padding that begins with 1 bit followed by all 0 bits. Padding
    must *always* be present, so if the message length is already
    congruent to 448 mod 512, then 512 padding bits must be added. */

    var finalBlock = forge.util.createBuffer();
    finalBlock.putBytes(_input.bytes());

    // compute remaining size to be digested (include message length size)
    var remaining = (
      md.fullMessageLength[md.fullMessageLength.length - 1] +
      md.messageLengthSize);

    // add padding for overflow blockSize - overflow
    // _padding starts with 1 byte with first bit is set (byte value 128), then
    // there may be up to (blockSize - 1) other pad bytes
    var overflow = remaining & (md.blockLength - 1);
    finalBlock.putBytes(_padding.substr(0, md.blockLength - overflow));

    // serialize message length in bits in big-endian order; since length
    // is stored in bytes we multiply by 8 and add carry from next int
    var next, carry;
    var bits = md.fullMessageLength[0] * 8;
    for(var i = 0; i < md.fullMessageLength.length - 1; ++i) {
      next = md.fullMessageLength[i + 1] * 8;
      carry = (next / 0x100000000) >>> 0;
      bits += carry;
      finalBlock.putInt32(bits >>> 0);
      bits = next >>> 0;
    }
    finalBlock.putInt32(bits);

    var s2 = {
      h0: _state.h0,
      h1: _state.h1,
      h2: _state.h2,
      h3: _state.h3,
      h4: _state.h4
    };
    _update(s2, _w, finalBlock);
    var rval = forge.util.createBuffer();
    rval.putInt32(s2.h0);
    rval.putInt32(s2.h1);
    rval.putInt32(s2.h2);
    rval.putInt32(s2.h3);
    rval.putInt32(s2.h4);
    return rval;
  };

  return md;
};

// sha-1 padding bytes not initialized yet
var _padding = null;
var _initialized = false;

/**
 * Initializes the constant tables.
 */
function _init() {
  // create padding
  _padding = String.fromCharCode(128);
  _padding += forge.util.fillString(String.fromCharCode(0x00), 64);

  // now initialized
  _initialized = true;
}

/**
 * Updates a SHA-1 state with the given byte buffer.
 *
 * @param s the SHA-1 state to update.
 * @param w the array to use to store words.
 * @param bytes the byte buffer to update with.
 */
function _update(s, w, bytes) {
  // consume 512 bit (64 byte) chunks
  var t, a, b, c, d, e, f, i;
  var len = bytes.length();
  while(len >= 64) {
    // the w array will be populated with sixteen 32-bit big-endian words
    // and then extended into 80 32-bit words according to SHA-1 algorithm
    // and for 32-79 using Max Locktyukhin's optimization

    // initialize hash value for this chunk
    a = s.h0;
    b = s.h1;
    c = s.h2;
    d = s.h3;
    e = s.h4;

    // round 1
    for(i = 0; i < 16; ++i) {
      t = bytes.getInt32();
      w[i] = t;
      f = d ^ (b & (c ^ d));
      t = ((a << 5) | (a >>> 27)) + f + e + 0x5A827999 + t;
      e = d;
      d = c;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      c = ((b << 30) | (b >>> 2)) >>> 0;
      b = a;
      a = t;
    }
    for(; i < 20; ++i) {
      t = (w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16]);
      t = (t << 1) | (t >>> 31);
      w[i] = t;
      f = d ^ (b & (c ^ d));
      t = ((a << 5) | (a >>> 27)) + f + e + 0x5A827999 + t;
      e = d;
      d = c;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      c = ((b << 30) | (b >>> 2)) >>> 0;
      b = a;
      a = t;
    }
    // round 2
    for(; i < 32; ++i) {
      t = (w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16]);
      t = (t << 1) | (t >>> 31);
      w[i] = t;
      f = b ^ c ^ d;
      t = ((a << 5) | (a >>> 27)) + f + e + 0x6ED9EBA1 + t;
      e = d;
      d = c;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      c = ((b << 30) | (b >>> 2)) >>> 0;
      b = a;
      a = t;
    }
    for(; i < 40; ++i) {
      t = (w[i - 6] ^ w[i - 16] ^ w[i - 28] ^ w[i - 32]);
      t = (t << 2) | (t >>> 30);
      w[i] = t;
      f = b ^ c ^ d;
      t = ((a << 5) | (a >>> 27)) + f + e + 0x6ED9EBA1 + t;
      e = d;
      d = c;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      c = ((b << 30) | (b >>> 2)) >>> 0;
      b = a;
      a = t;
    }
    // round 3
    for(; i < 60; ++i) {
      t = (w[i - 6] ^ w[i - 16] ^ w[i - 28] ^ w[i - 32]);
      t = (t << 2) | (t >>> 30);
      w[i] = t;
      f = (b & c) | (d & (b ^ c));
      t = ((a << 5) | (a >>> 27)) + f + e + 0x8F1BBCDC + t;
      e = d;
      d = c;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      c = ((b << 30) | (b >>> 2)) >>> 0;
      b = a;
      a = t;
    }
    // round 4
    for(; i < 80; ++i) {
      t = (w[i - 6] ^ w[i - 16] ^ w[i - 28] ^ w[i - 32]);
      t = (t << 2) | (t >>> 30);
      w[i] = t;
      f = b ^ c ^ d;
      t = ((a << 5) | (a >>> 27)) + f + e + 0xCA62C1D6 + t;
      e = d;
      d = c;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      c = ((b << 30) | (b >>> 2)) >>> 0;
      b = a;
      a = t;
    }

    // update hash state
    s.h0 = (s.h0 + a) | 0;
    s.h1 = (s.h1 + b) | 0;
    s.h2 = (s.h2 + c) | 0;
    s.h3 = (s.h3 + d) | 0;
    s.h4 = (s.h4 + e) | 0;

    len -= 64;
  }
}


/***/ }),

/***/ "a757":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */


const URDNA2015Sync = __webpack_require__("4284");
const util = __webpack_require__("7164");

module.exports = class URDNA2012Sync extends URDNA2015Sync {
  constructor() {
    super();
    this.name = 'URGNA2012';
    this.hashAlgorithm = 'sha1';
  }

  // helper for modifying component during Hash First Degree Quads
  modifyFirstDegreeComponent(id, component, key) {
    if(component.termType !== 'BlankNode') {
      return component;
    }
    component = util.clone(component);
    if(key === 'name') {
      component.value = '_:g';
    } else {
      component.value = (component.value === id ? '_:a' : '_:z');
    }
    return component;
  }

  // helper for getting a related predicate
  getRelatedPredicate(quad) {
    return quad.predicate.value;
  }

  // helper for creating hash to related blank nodes map
  createHashToRelated(id, issuer) {
    const self = this;

    // 1) Create a hash to related blank nodes map for storing hashes that
    // identify related blank nodes.
    const hashToRelated = {};

    // 2) Get a reference, quads, to the list of quads in the blank node to
    // quads map for the key identifier.
    const quads = self.blankNodeInfo[id].quads;

    // 3) For each quad in quads:
    for(let i = 0; i < quads.length; ++i) {
      // 3.1) If the quad's subject is a blank node that does not match
      // identifier, set hash to the result of the Hash Related Blank Node
      // algorithm, passing the blank node identifier for subject as related,
      // quad, path identifier issuer as issuer, and p as position.
      const quad = quads[i];
      let position;
      let related;
      if(quad.subject.termType === 'BlankNode' && quad.subject.value !== id) {
        related = quad.subject.value;
        position = 'p';
      } else if(
        quad.object.termType === 'BlankNode' && quad.object.value !== id) {
        // 3.2) Otherwise, if quad's object is a blank node that does not match
        // identifier, to the result of the Hash Related Blank Node algorithm,
        // passing the blank node identifier for object as related, quad, path
        // identifier issuer as issuer, and r as position.
        related = quad.object.value;
        position = 'r';
      } else {
        // 3.3) Otherwise, continue to the next quad.
        continue;
      }
      // 3.4) Add a mapping of hash to the blank node identifier for the
      // component that matched (subject or object) to hash to related blank
      // nodes map, adding an entry as necessary.
      const hash = self.hashRelatedBlankNode(related, quad, issuer, position);
      if(hash in hashToRelated) {
        hashToRelated[hash].push(related);
      } else {
        hashToRelated[hash] = [related];
      }
    }

    return hashToRelated;
  }
};


/***/ }),

/***/ "a77f":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Secure Hash Algorithm with 256-bit digest (SHA-256) implementation.
 *
 * See FIPS 180-2 for details.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2015 Digital Bazaar, Inc.
 */
var forge = __webpack_require__("d327");
__webpack_require__("eb9d");
__webpack_require__("b1d4");

var sha256 = module.exports = forge.sha256 = forge.sha256 || {};
forge.md.sha256 = forge.md.algorithms.sha256 = sha256;

/**
 * Creates a SHA-256 message digest object.
 *
 * @return a message digest object.
 */
sha256.create = function() {
  // do initialization as necessary
  if(!_initialized) {
    _init();
  }

  // SHA-256 state contains eight 32-bit integers
  var _state = null;

  // input buffer
  var _input = forge.util.createBuffer();

  // used for word storage
  var _w = new Array(64);

  // message digest object
  var md = {
    algorithm: 'sha256',
    blockLength: 64,
    digestLength: 32,
    // 56-bit length of message so far (does not including padding)
    messageLength: 0,
    // true message length
    fullMessageLength: null,
    // size of message length in bytes
    messageLengthSize: 8
  };

  /**
   * Starts the digest.
   *
   * @return this digest object.
   */
  md.start = function() {
    // up to 56-bit message length for convenience
    md.messageLength = 0;

    // full message length (set md.messageLength64 for backwards-compatibility)
    md.fullMessageLength = md.messageLength64 = [];
    var int32s = md.messageLengthSize / 4;
    for(var i = 0; i < int32s; ++i) {
      md.fullMessageLength.push(0);
    }
    _input = forge.util.createBuffer();
    _state = {
      h0: 0x6A09E667,
      h1: 0xBB67AE85,
      h2: 0x3C6EF372,
      h3: 0xA54FF53A,
      h4: 0x510E527F,
      h5: 0x9B05688C,
      h6: 0x1F83D9AB,
      h7: 0x5BE0CD19
    };
    return md;
  };
  // start digest automatically for first time
  md.start();

  /**
   * Updates the digest with the given message input. The given input can
   * treated as raw input (no encoding will be applied) or an encoding of
   * 'utf8' maybe given to encode the input using UTF-8.
   *
   * @param msg the message input to update with.
   * @param encoding the encoding to use (default: 'raw', other: 'utf8').
   *
   * @return this digest object.
   */
  md.update = function(msg, encoding) {
    if(encoding === 'utf8') {
      msg = forge.util.encodeUtf8(msg);
    }

    // update message length
    var len = msg.length;
    md.messageLength += len;
    len = [(len / 0x100000000) >>> 0, len >>> 0];
    for(var i = md.fullMessageLength.length - 1; i >= 0; --i) {
      md.fullMessageLength[i] += len[1];
      len[1] = len[0] + ((md.fullMessageLength[i] / 0x100000000) >>> 0);
      md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
      len[0] = ((len[1] / 0x100000000) >>> 0);
    }

    // add bytes to input buffer
    _input.putBytes(msg);

    // process bytes
    _update(_state, _w, _input);

    // compact input buffer every 2K or if empty
    if(_input.read > 2048 || _input.length() === 0) {
      _input.compact();
    }

    return md;
  };

  /**
   * Produces the digest.
   *
   * @return a byte buffer containing the digest value.
   */
  md.digest = function() {
    /* Note: Here we copy the remaining bytes in the input buffer and
    add the appropriate SHA-256 padding. Then we do the final update
    on a copy of the state so that if the user wants to get
    intermediate digests they can do so. */

    /* Determine the number of bytes that must be added to the message
    to ensure its length is congruent to 448 mod 512. In other words,
    the data to be digested must be a multiple of 512 bits (or 128 bytes).
    This data includes the message, some padding, and the length of the
    message. Since the length of the message will be encoded as 8 bytes (64
    bits), that means that the last segment of the data must have 56 bytes
    (448 bits) of message and padding. Therefore, the length of the message
    plus the padding must be congruent to 448 mod 512 because
    512 - 128 = 448.

    In order to fill up the message length it must be filled with
    padding that begins with 1 bit followed by all 0 bits. Padding
    must *always* be present, so if the message length is already
    congruent to 448 mod 512, then 512 padding bits must be added. */

    var finalBlock = forge.util.createBuffer();
    finalBlock.putBytes(_input.bytes());

    // compute remaining size to be digested (include message length size)
    var remaining = (
      md.fullMessageLength[md.fullMessageLength.length - 1] +
      md.messageLengthSize);

    // add padding for overflow blockSize - overflow
    // _padding starts with 1 byte with first bit is set (byte value 128), then
    // there may be up to (blockSize - 1) other pad bytes
    var overflow = remaining & (md.blockLength - 1);
    finalBlock.putBytes(_padding.substr(0, md.blockLength - overflow));

    // serialize message length in bits in big-endian order; since length
    // is stored in bytes we multiply by 8 and add carry from next int
    var next, carry;
    var bits = md.fullMessageLength[0] * 8;
    for(var i = 0; i < md.fullMessageLength.length - 1; ++i) {
      next = md.fullMessageLength[i + 1] * 8;
      carry = (next / 0x100000000) >>> 0;
      bits += carry;
      finalBlock.putInt32(bits >>> 0);
      bits = next >>> 0;
    }
    finalBlock.putInt32(bits);

    var s2 = {
      h0: _state.h0,
      h1: _state.h1,
      h2: _state.h2,
      h3: _state.h3,
      h4: _state.h4,
      h5: _state.h5,
      h6: _state.h6,
      h7: _state.h7
    };
    _update(s2, _w, finalBlock);
    var rval = forge.util.createBuffer();
    rval.putInt32(s2.h0);
    rval.putInt32(s2.h1);
    rval.putInt32(s2.h2);
    rval.putInt32(s2.h3);
    rval.putInt32(s2.h4);
    rval.putInt32(s2.h5);
    rval.putInt32(s2.h6);
    rval.putInt32(s2.h7);
    return rval;
  };

  return md;
};

// sha-256 padding bytes not initialized yet
var _padding = null;
var _initialized = false;

// table of constants
var _k = null;

/**
 * Initializes the constant tables.
 */
function _init() {
  // create padding
  _padding = String.fromCharCode(128);
  _padding += forge.util.fillString(String.fromCharCode(0x00), 64);

  // create K table for SHA-256
  _k = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
    0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
    0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
    0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
    0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
    0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
    0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
    0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

  // now initialized
  _initialized = true;
}

/**
 * Updates a SHA-256 state with the given byte buffer.
 *
 * @param s the SHA-256 state to update.
 * @param w the array to use to store words.
 * @param bytes the byte buffer to update with.
 */
function _update(s, w, bytes) {
  // consume 512 bit (64 byte) chunks
  var t1, t2, s0, s1, ch, maj, i, a, b, c, d, e, f, g, h;
  var len = bytes.length();
  while(len >= 64) {
    // the w array will be populated with sixteen 32-bit big-endian words
    // and then extended into 64 32-bit words according to SHA-256
    for(i = 0; i < 16; ++i) {
      w[i] = bytes.getInt32();
    }
    for(; i < 64; ++i) {
      // XOR word 2 words ago rot right 17, rot right 19, shft right 10
      t1 = w[i - 2];
      t1 =
        ((t1 >>> 17) | (t1 << 15)) ^
        ((t1 >>> 19) | (t1 << 13)) ^
        (t1 >>> 10);
      // XOR word 15 words ago rot right 7, rot right 18, shft right 3
      t2 = w[i - 15];
      t2 =
        ((t2 >>> 7) | (t2 << 25)) ^
        ((t2 >>> 18) | (t2 << 14)) ^
        (t2 >>> 3);
      // sum(t1, word 7 ago, t2, word 16 ago) modulo 2^32
      w[i] = (t1 + w[i - 7] + t2 + w[i - 16]) | 0;
    }

    // initialize hash value for this chunk
    a = s.h0;
    b = s.h1;
    c = s.h2;
    d = s.h3;
    e = s.h4;
    f = s.h5;
    g = s.h6;
    h = s.h7;

    // round function
    for(i = 0; i < 64; ++i) {
      // Sum1(e)
      s1 =
        ((e >>> 6) | (e << 26)) ^
        ((e >>> 11) | (e << 21)) ^
        ((e >>> 25) | (e << 7));
      // Ch(e, f, g) (optimized the same way as SHA-1)
      ch = g ^ (e & (f ^ g));
      // Sum0(a)
      s0 =
        ((a >>> 2) | (a << 30)) ^
        ((a >>> 13) | (a << 19)) ^
        ((a >>> 22) | (a << 10));
      // Maj(a, b, c) (optimized the same way as SHA-1)
      maj = (a & b) | (c & (a ^ b));

      // main algorithm
      t1 = h + s1 + ch + _k[i] + w[i];
      t2 = s0 + maj;
      h = g;
      g = f;
      f = e;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      // can't truncate with `| 0`
      e = (d + t1) >>> 0;
      d = c;
      c = b;
      b = a;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      // can't truncate with `| 0`
      a = (t1 + t2) >>> 0;
    }

    // update hash state
    s.h0 = (s.h0 + a) | 0;
    s.h1 = (s.h1 + b) | 0;
    s.h2 = (s.h2 + c) | 0;
    s.h3 = (s.h3 + d) | 0;
    s.h4 = (s.h4 + e) | 0;
    s.h5 = (s.h5 + f) | 0;
    s.h6 = (s.h6 + g) | 0;
    s.h7 = (s.h7 + h) | 0;
    len -= 64;
  }
}


/***/ }),

/***/ "ae29":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */


const AsyncAlgorithm = __webpack_require__("db44");
const IdentifierIssuer = __webpack_require__("8acc");
const MessageDigest = __webpack_require__("5a76");
const Permutator = __webpack_require__("900e");
const NQuads = __webpack_require__("65e1");
const util = __webpack_require__("7164");

const POSITIONS = {subject: 's', object: 'o', graph: 'g'};

module.exports = class URDNA2015 extends AsyncAlgorithm {
  constructor(options) {
    options = options || {};
    super(options);
    this.name = 'URDNA2015';
    this.options = Object.assign({}, options);
    this.blankNodeInfo = {};
    this.hashToBlankNodes = {};
    this.canonicalIssuer = new IdentifierIssuer('_:c14n');
    this.hashAlgorithm = 'sha256';
    this.quads;
  }

  // 4.4) Normalization Algorithm
  main(dataset, callback) {
    const self = this;
    self.schedule.start = Date.now();
    let result;
    self.quads = dataset;

    // 1) Create the normalization state.

    // Note: Optimize by generating non-normalized blank node map concurrently.
    const nonNormalized = {};

    self.waterfall([
      callback => {
        // 2) For every quad in input dataset:
        self.forEach(dataset, (quad, idx, callback) => {
          // 2.1) For each blank node that occurs in the quad, add a reference
          // to the quad using the blank node identifier in the blank node to
          // quads map, creating a new entry if necessary.
          self.forEachComponent(quad, component => {
            if(component.termType !== 'BlankNode') {
              return;
            }
            const id = component.value;
            if(id in self.blankNodeInfo) {
              self.blankNodeInfo[id].quads.push(quad);
            } else {
              nonNormalized[id] = true;
              self.blankNodeInfo[id] = {quads: [quad]};
            }
          });

          callback();
        }, callback);
      },
      callback => {
        // 3) Create a list of non-normalized blank node identifiers
        // non-normalized identifiers and populate it using the keys from the
        // blank node to quads map.
        // Note: We use a map here and it was generated during step 2.

        // 4) Initialize simple, a boolean flag, to true.
        let simple = true;

        // 5) While simple is true, issue canonical identifiers for blank nodes:
        self.whilst(() => simple, callback => {
          // 5.1) Set simple to false.
          simple = false;

          // 5.2) Clear hash to blank nodes map.
          self.hashToBlankNodes = {};

          self.waterfall([
            callback => {
              // 5.3) For each blank node identifier identifier in
              // non-normalized identifiers:
              self.forEach(nonNormalized, (value, id, callback) => {
                // 5.3.1) Create a hash, hash, according to the Hash First
                // Degree Quads algorithm.
                self.hashFirstDegreeQuads(id, (err, hash) => {
                  if(err) {
                    return callback(err);
                  }
                  // 5.3.2) Add hash and identifier to hash to blank nodes map,
                  // creating a new entry if necessary.
                  if(hash in self.hashToBlankNodes) {
                    self.hashToBlankNodes[hash].push(id);
                  } else {
                    self.hashToBlankNodes[hash] = [id];
                  }
                  callback();
                });
              }, callback);
            },
            callback => {
              // 5.4) For each hash to identifier list mapping in hash to blank
              // nodes map, lexicographically-sorted by hash:
              const hashes = Object.keys(self.hashToBlankNodes).sort();
              self.forEach(hashes, (hash, i, callback) => {
                // 5.4.1) If the length of identifier list is greater than 1,
                // continue to the next mapping.
                const idList = self.hashToBlankNodes[hash];
                if(idList.length > 1) {
                  return callback();
                }

                // 5.4.2) Use the Issue Identifier algorithm, passing canonical
                // issuer and the single blank node identifier in identifier
                // list, identifier, to issue a canonical replacement identifier
                // for identifier.
                // TODO: consider changing `getId` to `issue`
                const id = idList[0];
                self.canonicalIssuer.getId(id);

                // 5.4.3) Remove identifier from non-normalized identifiers.
                delete nonNormalized[id];

                // 5.4.4) Remove hash from the hash to blank nodes map.
                delete self.hashToBlankNodes[hash];

                // 5.4.5) Set simple to true.
                simple = true;
                callback();
              }, callback);
            }
          ], callback);
        }, callback);
      },
      callback => {
        // 6) For each hash to identifier list mapping in hash to blank nodes
        // map, lexicographically-sorted by hash:
        const hashes = Object.keys(self.hashToBlankNodes).sort();
        self.forEach(hashes, (hash, idx, callback) => {
          // 6.1) Create hash path list where each item will be a result of
          // running the Hash N-Degree Quads algorithm.
          const hashPathList = [];

          // 6.2) For each blank node identifier identifier in identifier list:
          const idList = self.hashToBlankNodes[hash];
          self.waterfall([
            callback => {
              self.forEach(idList, (id, idx, callback) => {
                // 6.2.1) If a canonical identifier has already been issued for
                // identifier, continue to the next identifier.
                if(self.canonicalIssuer.hasId(id)) {
                  return callback();
                }

                // 6.2.2) Create temporary issuer, an identifier issuer
                // initialized with the prefix _:b.
                const issuer = new IdentifierIssuer('_:b');

                // 6.2.3) Use the Issue Identifier algorithm, passing temporary
                // issuer and identifier, to issue a new temporary blank node
                // identifier for identifier.
                issuer.getId(id);

                // 6.2.4) Run the Hash N-Degree Quads algorithm, passing
                // temporary issuer, and append the result to the hash path
                // list.
                self.hashNDegreeQuads(id, issuer, (err, result) => {
                  if(err) {
                    return callback(err);
                  }
                  hashPathList.push(result);
                  callback();
                });
              }, callback);
            },
            callback => {
              // 6.3) For each result in the hash path list,
              // lexicographically-sorted by the hash in result:
              // TODO: use `String.localeCompare`?
              hashPathList.sort((a, b) =>
                (a.hash < b.hash) ? -1 : ((a.hash > b.hash) ? 1 : 0));
              self.forEach(hashPathList, (result, idx, callback) => {
                // 6.3.1) For each blank node identifier, existing identifier,
                // that was issued a temporary identifier by identifier issuer
                // in result, issue a canonical identifier, in the same order,
                // using the Issue Identifier algorithm, passing canonical
                // issuer and existing identifier.
                for(const existing in result.issuer.existing) {
                  self.canonicalIssuer.getId(existing);
                }
                callback();
              }, callback);
            }
          ], callback);
        }, callback);
      }, callback => {
        /* Note: At this point all blank nodes in the set of RDF quads have been
        assigned canonical identifiers, which have been stored in the canonical
        issuer. Here each quad is updated by assigning each of its blank nodes
        its new identifier. */

        // 7) For each quad, quad, in input dataset:
        const normalized = [];
        self.waterfall([
          callback => {
            self.forEach(self.quads, (quad, idx, callback) => {
              // 7.1) Create a copy, quad copy, of quad and replace any existing
              // blank node identifiers using the canonical identifiers
              // previously issued by canonical issuer.
              // Note: We optimize away the copy here.
              self.forEachComponent(quad, component => {
                if(component.termType === 'BlankNode' &&
                  !component.value.startsWith(self.canonicalIssuer.prefix)) {
                  component.value = self.canonicalIssuer.getId(component.value);
                }
              });
              // 7.2) Add quad copy to the normalized dataset.
              normalized.push(NQuads.serializeQuad(quad));
              callback();
            }, callback);
          },
          callback => {
            // sort normalized output
            normalized.sort();

            // 8) Return the normalized dataset.
            result = normalized.join('');
            return callback();
          }
        ], callback);
      }
    ], err => callback(err, result));
  }

  // 4.6) Hash First Degree Quads
  hashFirstDegreeQuads(id, callback) {
    const self = this;

    // return cached hash
    const info = self.blankNodeInfo[id];
    if('hash' in info) {
      return callback(null, info.hash);
    }

    // 1) Initialize nquads to an empty list. It will be used to store quads in
    // N-Quads format.
    const nquads = [];

    // 2) Get the list of quads quads associated with the reference blank node
    // identifier in the blank node to quads map.
    const quads = info.quads;

    // 3) For each quad quad in quads:
    self.forEach(quads, (quad, idx, callback) => {
      // 3.1) Serialize the quad in N-Quads format with the following special
      // rule:

      // 3.1.1) If any component in quad is an blank node, then serialize it
      // using a special identifier as follows:
      const copy = {predicate: quad.predicate};
      self.forEachComponent(quad, (component, key) => {
        // 3.1.2) If the blank node's existing blank node identifier matches the
        // reference blank node identifier then use the blank node identifier
        // _:a, otherwise, use the blank node identifier _:z.
        copy[key] = self.modifyFirstDegreeComponent(id, component, key);
      });
      nquads.push(NQuads.serializeQuad(copy));
      callback();
    }, err => {
      if(err) {
        return callback(err);
      }
      // 4) Sort nquads in lexicographical order.
      nquads.sort();

      // 5) Return the hash that results from passing the sorted, joined nquads
      // through the hash algorithm.
      const md = new MessageDigest(self.hashAlgorithm);
      for(let i = 0; i < nquads.length; ++i) {
        md.update(nquads[i]);
      }
      // TODO: represent as byte buffer instead to cut memory usage in half
      info.hash = md.digest();
      callback(null, info.hash);
    });
  }

  // 4.7) Hash Related Blank Node
  hashRelatedBlankNode(related, quad, issuer, position, callback) {
    const self = this;

    // 1) Set the identifier to use for related, preferring first the canonical
    // identifier for related if issued, second the identifier issued by issuer
    // if issued, and last, if necessary, the result of the Hash First Degree
    // Quads algorithm, passing related.
    let id;
    self.waterfall([
      callback => {
        if(self.canonicalIssuer.hasId(related)) {
          id = self.canonicalIssuer.getId(related);
          return callback();
        }
        if(issuer.hasId(related)) {
          id = issuer.getId(related);
          return callback();
        }
        self.hashFirstDegreeQuads(related, (err, hash) => {
          if(err) {
            return callback(err);
          }
          id = hash;
          callback();
        });
      }
    ], err => {
      if(err) {
        return callback(err);
      }

      // 2) Initialize a string input to the value of position.
      // Note: We use a hash object instead.
      const md = new MessageDigest(self.hashAlgorithm);
      md.update(position);

      // 3) If position is not g, append <, the value of the predicate in quad,
      // and > to input.
      if(position !== 'g') {
        md.update(self.getRelatedPredicate(quad));
      }

      // 4) Append identifier to input.
      md.update(id);

      // 5) Return the hash that results from passing input through the hash
      // algorithm.
      // TODO: represent as byte buffer instead to cut memory usage in half
      return callback(null, md.digest());
    });
  }

  // 4.8) Hash N-Degree Quads
  hashNDegreeQuads(id, issuer, callback) {
    const self = this;

    // 1) Create a hash to related blank nodes map for storing hashes that
    // identify related blank nodes.
    // Note: 2) and 3) handled within `createHashToRelated`
    let hashToRelated;
    const md = new MessageDigest(self.hashAlgorithm);
    self.waterfall([
      callback => self.createHashToRelated(id, issuer, (err, result) => {
        if(err) {
          return callback(err);
        }
        hashToRelated = result;
        callback();
      }),
      callback => {
        // 4) Create an empty string, data to hash.
        // Note: We created a hash object `md` above instead.

        // 5) For each related hash to blank node list mapping in hash to
        // related blank nodes map, sorted lexicographically by related hash:
        const hashes = Object.keys(hashToRelated).sort();
        self.forEach(hashes, (hash, idx, callback) => {
          // 5.1) Append the related hash to the data to hash.
          md.update(hash);

          // 5.2) Create a string chosen path.
          let chosenPath = '';

          // 5.3) Create an unset chosen issuer variable.
          let chosenIssuer;

          // 5.4) For each permutation of blank node list:
          const permutator = new Permutator(hashToRelated[hash]);
          self.whilst(() => permutator.hasNext(), nextPermutation => {
            const permutation = permutator.next();

            // 5.4.1) Create a copy of issuer, issuer copy.
            let issuerCopy = issuer.clone();

            // 5.4.2) Create a string path.
            let path = '';

            // 5.4.3) Create a recursion list, to store blank node identifiers
            // that must be recursively processed by this algorithm.
            const recursionList = [];

            self.waterfall([
              callback => {
                // 5.4.4) For each related in permutation:
                self.forEach(permutation, (related, idx, callback) => {
                  // 5.4.4.1) If a canonical identifier has been issued for
                  // related, append it to path.
                  if(self.canonicalIssuer.hasId(related)) {
                    path += self.canonicalIssuer.getId(related);
                  } else {
                    // 5.4.4.2) Otherwise:
                    // 5.4.4.2.1) If issuer copy has not issued an identifier
                    // for related, append related to recursion list.
                    if(!issuerCopy.hasId(related)) {
                      recursionList.push(related);
                    }
                    // 5.4.4.2.2) Use the Issue Identifier algorithm, passing
                    // issuer copy and related and append the result to path.
                    path += issuerCopy.getId(related);
                  }

                  // 5.4.4.3) If chosen path is not empty and the length of path
                  // is greater than or equal to the length of chosen path and
                  // path is lexicographically greater than chosen path, then
                  // skip to the next permutation.
                  // Note: Comparing path length to chosen path length can be
                  // optimized away; only compare lexicographically.
                  if(chosenPath.length !== 0 && path > chosenPath) {
                    // FIXME: may cause inaccurate total depth calculation
                    return nextPermutation();
                  }
                  callback();
                }, callback);
              },
              callback => {
                // 5.4.5) For each related in recursion list:
                self.forEach(recursionList, (related, idx, callback) => {
                  // 5.4.5.1) Set result to the result of recursively executing
                  // the Hash N-Degree Quads algorithm, passing related for
                  // identifier and issuer copy for path identifier issuer.
                  self.hashNDegreeQuads(related, issuerCopy, (err, result) => {
                    if(err) {
                      return callback(err);
                    }

                    // 5.4.5.2) Use the Issue Identifier algorithm, passing
                    // issuer copy and related and append the result to path.
                    path += issuerCopy.getId(related);

                    // 5.4.5.3) Append <, the hash in result, and > to path.
                    path += '<' + result.hash + '>';

                    // 5.4.5.4) Set issuer copy to the identifier issuer in
                    // result.
                    issuerCopy = result.issuer;

                    // 5.4.5.5) If chosen path is not empty and the length of
                    // path is greater than or equal to the length of chosen
                    // path and path is lexicographically greater than chosen
                    // path, then skip to the next permutation.
                    // Note: Comparing path length to chosen path length can be
                    // optimized away; only compare lexicographically.
                    if(chosenPath.length !== 0 && path > chosenPath) {
                      // FIXME: may cause inaccurate total depth calculation
                      return nextPermutation();
                    }
                    callback();
                  });
                }, callback);
              },
              callback => {
                // 5.4.6) If chosen path is empty or path is lexicographically
                // less than chosen path, set chosen path to path and chosen
                // issuer to issuer copy.
                if(chosenPath.length === 0 || path < chosenPath) {
                  chosenPath = path;
                  chosenIssuer = issuerCopy;
                }
                callback();
              }
            ], nextPermutation);
          }, err => {
            if(err) {
              return callback(err);
            }

            // 5.5) Append chosen path to data to hash.
            md.update(chosenPath);

            // 5.6) Replace issuer, by reference, with chosen issuer.
            issuer = chosenIssuer;
            callback();
          });
        }, callback);
      }
    ], err => {
      // 6) Return issuer and the hash that results from passing data to hash
      // through the hash algorithm.
      callback(err, {hash: md.digest(), issuer});
    });
  }

  // helper for modifying component during Hash First Degree Quads
  modifyFirstDegreeComponent(id, component) {
    if(component.termType !== 'BlankNode') {
      return component;
    }
    component = util.clone(component);
    component.value = (component.value === id ? '_:a' : '_:z');
    return component;
  }

  // helper for getting a related predicate
  getRelatedPredicate(quad) {
    return '<' + quad.predicate.value + '>';
  }

  // helper for creating hash to related blank nodes map
  createHashToRelated(id, issuer, callback) {
    const self = this;

    // 1) Create a hash to related blank nodes map for storing hashes that
    // identify related blank nodes.
    const hashToRelated = {};

    // 2) Get a reference, quads, to the list of quads in the blank node to
    // quads map for the key identifier.
    const quads = self.blankNodeInfo[id].quads;

    // 3) For each quad in quads:
    self.forEach(quads, (quad, idx, callback) => {
      // 3.1) For each component in quad, if component is the subject, object,
      // and graph name and it is a blank node that is not identified by
      // identifier:
      self.forEach(quad, (component, key, callback) => {
        if(key === 'predicate' ||
          !(component.termType === 'BlankNode' && component.value !== id)) {
          return callback();
        }
        // 3.1.1) Set hash to the result of the Hash Related Blank Node
        // algorithm, passing the blank node identifier for component as
        // related, quad, path identifier issuer as issuer, and position as
        // either s, o, or g based on whether component is a subject, object,
        // graph name, respectively.
        const related = component.value;
        const position = POSITIONS[key];
        self.hashRelatedBlankNode(
          related, quad, issuer, position, (err, hash) => {
            if(err) {
              return callback(err);
            }
            // 3.1.2) Add a mapping of hash to the blank node identifier for
            // component to hash to related blank nodes map, adding an entry as
            // necessary.
            if(hash in hashToRelated) {
              hashToRelated[hash].push(related);
            } else {
              hashToRelated[hash] = [related];
            }
            callback();
          });
      }, callback);
    }, err => callback(err, hashToRelated));
  }

  // helper that iterates over quad components (skips predicate)
  forEachComponent(quad, op) {
    for(const key in quad) {
      // skip `predicate`
      if(key === 'predicate') {
        continue;
      }
      op(quad[key], key, quad);
    }
  }
};


/***/ }),

/***/ "b1d4":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global, Buffer) {/**
 * Utility functions for web applications.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2018 Digital Bazaar, Inc.
 */
var forge = __webpack_require__("d327");
var baseN = __webpack_require__("2890");

/* Utilities API */
var util = module.exports = forge.util = forge.util || {};

// define setImmediate and nextTick
(function() {
  // use native nextTick (unless we're in webpack)
  // webpack (or better node-libs-browser polyfill) sets process.browser.
  // this way we can detect webpack properly
  if(typeof process !== 'undefined' && process.nextTick && !process.browser) {
    util.nextTick = process.nextTick;
    if(typeof setImmediate === 'function') {
      util.setImmediate = setImmediate;
    } else {
      // polyfill setImmediate with nextTick, older versions of node
      // (those w/o setImmediate) won't totally starve IO
      util.setImmediate = util.nextTick;
    }
    return;
  }

  // polyfill nextTick with native setImmediate
  if(typeof setImmediate === 'function') {
    util.setImmediate = function() { return setImmediate.apply(undefined, arguments); };
    util.nextTick = function(callback) {
      return setImmediate(callback);
    };
    return;
  }

  /* Note: A polyfill upgrade pattern is used here to allow combining
  polyfills. For example, MutationObserver is fast, but blocks UI updates,
  so it needs to allow UI updates periodically, so it falls back on
  postMessage or setTimeout. */

  // polyfill with setTimeout
  util.setImmediate = function(callback) {
    setTimeout(callback, 0);
  };

  // upgrade polyfill to use postMessage
  if(typeof window !== 'undefined' &&
    typeof window.postMessage === 'function') {
    var msg = 'forge.setImmediate';
    var callbacks = [];
    util.setImmediate = function(callback) {
      callbacks.push(callback);
      // only send message when one hasn't been sent in
      // the current turn of the event loop
      if(callbacks.length === 1) {
        window.postMessage(msg, '*');
      }
    };
    function handler(event) {
      if(event.source === window && event.data === msg) {
        event.stopPropagation();
        var copy = callbacks.slice();
        callbacks.length = 0;
        copy.forEach(function(callback) {
          callback();
        });
      }
    }
    window.addEventListener('message', handler, true);
  }

  // upgrade polyfill to use MutationObserver
  if(typeof MutationObserver !== 'undefined') {
    // polyfill with MutationObserver
    var now = Date.now();
    var attr = true;
    var div = document.createElement('div');
    var callbacks = [];
    new MutationObserver(function() {
      var copy = callbacks.slice();
      callbacks.length = 0;
      copy.forEach(function(callback) {
        callback();
      });
    }).observe(div, {attributes: true});
    var oldSetImmediate = util.setImmediate;
    util.setImmediate = function(callback) {
      if(Date.now() - now > 15) {
        now = Date.now();
        oldSetImmediate(callback);
      } else {
        callbacks.push(callback);
        // only trigger observer when it hasn't been triggered in
        // the current turn of the event loop
        if(callbacks.length === 1) {
          div.setAttribute('a', attr = !attr);
        }
      }
    };
  }

  util.nextTick = util.setImmediate;
})();

// check if running under Node.js
util.isNodejs =
  typeof process !== 'undefined' && process.versions && process.versions.node;


// 'self' will also work in Web Workers (instance of WorkerGlobalScope) while
// it will point to `window` in the main thread.
// To remain compatible with older browsers, we fall back to 'window' if 'self'
// is not available.
util.globalScope = (function() {
  if(util.isNodejs) {
    return global;
  }

  return typeof self === 'undefined' ? window : self;
})();

// define isArray
util.isArray = Array.isArray || function(x) {
  return Object.prototype.toString.call(x) === '[object Array]';
};

// define isArrayBuffer
util.isArrayBuffer = function(x) {
  return typeof ArrayBuffer !== 'undefined' && x instanceof ArrayBuffer;
};

// define isArrayBufferView
util.isArrayBufferView = function(x) {
  return x && util.isArrayBuffer(x.buffer) && x.byteLength !== undefined;
};

/**
 * Ensure a bits param is 8, 16, 24, or 32. Used to validate input for
 * algorithms where bit manipulation, JavaScript limitations, and/or algorithm
 * design only allow for byte operations of a limited size.
 *
 * @param n number of bits.
 *
 * Throw Error if n invalid.
 */
function _checkBitsParam(n) {
  if(!(n === 8 || n === 16 || n === 24 || n === 32)) {
    throw new Error('Only 8, 16, 24, or 32 bits supported: ' + n);
  }
}

// TODO: set ByteBuffer to best available backing
util.ByteBuffer = ByteStringBuffer;

/** Buffer w/BinaryString backing */

/**
 * Constructor for a binary string backed byte buffer.
 *
 * @param [b] the bytes to wrap (either encoded as string, one byte per
 *          character, or as an ArrayBuffer or Typed Array).
 */
function ByteStringBuffer(b) {
  // TODO: update to match DataBuffer API

  // the data in this buffer
  this.data = '';
  // the pointer for reading from this buffer
  this.read = 0;

  if(typeof b === 'string') {
    this.data = b;
  } else if(util.isArrayBuffer(b) || util.isArrayBufferView(b)) {
    if(typeof Buffer !== 'undefined' && b instanceof Buffer) {
      this.data = b.toString('binary');
    } else {
      // convert native buffer to forge buffer
      // FIXME: support native buffers internally instead
      var arr = new Uint8Array(b);
      try {
        this.data = String.fromCharCode.apply(null, arr);
      } catch(e) {
        for(var i = 0; i < arr.length; ++i) {
          this.putByte(arr[i]);
        }
      }
    }
  } else if(b instanceof ByteStringBuffer ||
    (typeof b === 'object' && typeof b.data === 'string' &&
    typeof b.read === 'number')) {
    // copy existing buffer
    this.data = b.data;
    this.read = b.read;
  }

  // used for v8 optimization
  this._constructedStringLength = 0;
}
util.ByteStringBuffer = ByteStringBuffer;

/* Note: This is an optimization for V8-based browsers. When V8 concatenates
  a string, the strings are only joined logically using a "cons string" or
  "constructed/concatenated string". These containers keep references to one
  another and can result in very large memory usage. For example, if a 2MB
  string is constructed by concatenating 4 bytes together at a time, the
  memory usage will be ~44MB; so ~22x increase. The strings are only joined
  together when an operation requiring their joining takes place, such as
  substr(). This function is called when adding data to this buffer to ensure
  these types of strings are periodically joined to reduce the memory
  footprint. */
var _MAX_CONSTRUCTED_STRING_LENGTH = 4096;
util.ByteStringBuffer.prototype._optimizeConstructedString = function(x) {
  this._constructedStringLength += x;
  if(this._constructedStringLength > _MAX_CONSTRUCTED_STRING_LENGTH) {
    // this substr() should cause the constructed string to join
    this.data.substr(0, 1);
    this._constructedStringLength = 0;
  }
};

/**
 * Gets the number of bytes in this buffer.
 *
 * @return the number of bytes in this buffer.
 */
util.ByteStringBuffer.prototype.length = function() {
  return this.data.length - this.read;
};

/**
 * Gets whether or not this buffer is empty.
 *
 * @return true if this buffer is empty, false if not.
 */
util.ByteStringBuffer.prototype.isEmpty = function() {
  return this.length() <= 0;
};

/**
 * Puts a byte in this buffer.
 *
 * @param b the byte to put.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putByte = function(b) {
  return this.putBytes(String.fromCharCode(b));
};

/**
 * Puts a byte in this buffer N times.
 *
 * @param b the byte to put.
 * @param n the number of bytes of value b to put.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.fillWithByte = function(b, n) {
  b = String.fromCharCode(b);
  var d = this.data;
  while(n > 0) {
    if(n & 1) {
      d += b;
    }
    n >>>= 1;
    if(n > 0) {
      b += b;
    }
  }
  this.data = d;
  this._optimizeConstructedString(n);
  return this;
};

/**
 * Puts bytes in this buffer.
 *
 * @param bytes the bytes (as a binary encoded string) to put.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putBytes = function(bytes) {
  this.data += bytes;
  this._optimizeConstructedString(bytes.length);
  return this;
};

/**
 * Puts a UTF-16 encoded string into this buffer.
 *
 * @param str the string to put.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putString = function(str) {
  return this.putBytes(util.encodeUtf8(str));
};

/**
 * Puts a 16-bit integer in this buffer in big-endian order.
 *
 * @param i the 16-bit integer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt16 = function(i) {
  return this.putBytes(
    String.fromCharCode(i >> 8 & 0xFF) +
    String.fromCharCode(i & 0xFF));
};

/**
 * Puts a 24-bit integer in this buffer in big-endian order.
 *
 * @param i the 24-bit integer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt24 = function(i) {
  return this.putBytes(
    String.fromCharCode(i >> 16 & 0xFF) +
    String.fromCharCode(i >> 8 & 0xFF) +
    String.fromCharCode(i & 0xFF));
};

/**
 * Puts a 32-bit integer in this buffer in big-endian order.
 *
 * @param i the 32-bit integer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt32 = function(i) {
  return this.putBytes(
    String.fromCharCode(i >> 24 & 0xFF) +
    String.fromCharCode(i >> 16 & 0xFF) +
    String.fromCharCode(i >> 8 & 0xFF) +
    String.fromCharCode(i & 0xFF));
};

/**
 * Puts a 16-bit integer in this buffer in little-endian order.
 *
 * @param i the 16-bit integer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt16Le = function(i) {
  return this.putBytes(
    String.fromCharCode(i & 0xFF) +
    String.fromCharCode(i >> 8 & 0xFF));
};

/**
 * Puts a 24-bit integer in this buffer in little-endian order.
 *
 * @param i the 24-bit integer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt24Le = function(i) {
  return this.putBytes(
    String.fromCharCode(i & 0xFF) +
    String.fromCharCode(i >> 8 & 0xFF) +
    String.fromCharCode(i >> 16 & 0xFF));
};

/**
 * Puts a 32-bit integer in this buffer in little-endian order.
 *
 * @param i the 32-bit integer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt32Le = function(i) {
  return this.putBytes(
    String.fromCharCode(i & 0xFF) +
    String.fromCharCode(i >> 8 & 0xFF) +
    String.fromCharCode(i >> 16 & 0xFF) +
    String.fromCharCode(i >> 24 & 0xFF));
};

/**
 * Puts an n-bit integer in this buffer in big-endian order.
 *
 * @param i the n-bit integer.
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt = function(i, n) {
  _checkBitsParam(n);
  var bytes = '';
  do {
    n -= 8;
    bytes += String.fromCharCode((i >> n) & 0xFF);
  } while(n > 0);
  return this.putBytes(bytes);
};

/**
 * Puts a signed n-bit integer in this buffer in big-endian order. Two's
 * complement representation is used.
 *
 * @param i the n-bit integer.
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putSignedInt = function(i, n) {
  // putInt checks n
  if(i < 0) {
    i += 2 << (n - 1);
  }
  return this.putInt(i, n);
};

/**
 * Puts the given buffer into this buffer.
 *
 * @param buffer the buffer to put into this one.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putBuffer = function(buffer) {
  return this.putBytes(buffer.getBytes());
};

/**
 * Gets a byte from this buffer and advances the read pointer by 1.
 *
 * @return the byte.
 */
util.ByteStringBuffer.prototype.getByte = function() {
  return this.data.charCodeAt(this.read++);
};

/**
 * Gets a uint16 from this buffer in big-endian order and advances the read
 * pointer by 2.
 *
 * @return the uint16.
 */
util.ByteStringBuffer.prototype.getInt16 = function() {
  var rval = (
    this.data.charCodeAt(this.read) << 8 ^
    this.data.charCodeAt(this.read + 1));
  this.read += 2;
  return rval;
};

/**
 * Gets a uint24 from this buffer in big-endian order and advances the read
 * pointer by 3.
 *
 * @return the uint24.
 */
util.ByteStringBuffer.prototype.getInt24 = function() {
  var rval = (
    this.data.charCodeAt(this.read) << 16 ^
    this.data.charCodeAt(this.read + 1) << 8 ^
    this.data.charCodeAt(this.read + 2));
  this.read += 3;
  return rval;
};

/**
 * Gets a uint32 from this buffer in big-endian order and advances the read
 * pointer by 4.
 *
 * @return the word.
 */
util.ByteStringBuffer.prototype.getInt32 = function() {
  var rval = (
    this.data.charCodeAt(this.read) << 24 ^
    this.data.charCodeAt(this.read + 1) << 16 ^
    this.data.charCodeAt(this.read + 2) << 8 ^
    this.data.charCodeAt(this.read + 3));
  this.read += 4;
  return rval;
};

/**
 * Gets a uint16 from this buffer in little-endian order and advances the read
 * pointer by 2.
 *
 * @return the uint16.
 */
util.ByteStringBuffer.prototype.getInt16Le = function() {
  var rval = (
    this.data.charCodeAt(this.read) ^
    this.data.charCodeAt(this.read + 1) << 8);
  this.read += 2;
  return rval;
};

/**
 * Gets a uint24 from this buffer in little-endian order and advances the read
 * pointer by 3.
 *
 * @return the uint24.
 */
util.ByteStringBuffer.prototype.getInt24Le = function() {
  var rval = (
    this.data.charCodeAt(this.read) ^
    this.data.charCodeAt(this.read + 1) << 8 ^
    this.data.charCodeAt(this.read + 2) << 16);
  this.read += 3;
  return rval;
};

/**
 * Gets a uint32 from this buffer in little-endian order and advances the read
 * pointer by 4.
 *
 * @return the word.
 */
util.ByteStringBuffer.prototype.getInt32Le = function() {
  var rval = (
    this.data.charCodeAt(this.read) ^
    this.data.charCodeAt(this.read + 1) << 8 ^
    this.data.charCodeAt(this.read + 2) << 16 ^
    this.data.charCodeAt(this.read + 3) << 24);
  this.read += 4;
  return rval;
};

/**
 * Gets an n-bit integer from this buffer in big-endian order and advances the
 * read pointer by ceil(n/8).
 *
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return the integer.
 */
util.ByteStringBuffer.prototype.getInt = function(n) {
  _checkBitsParam(n);
  var rval = 0;
  do {
    // TODO: Use (rval * 0x100) if adding support for 33 to 53 bits.
    rval = (rval << 8) + this.data.charCodeAt(this.read++);
    n -= 8;
  } while(n > 0);
  return rval;
};

/**
 * Gets a signed n-bit integer from this buffer in big-endian order, using
 * two's complement, and advances the read pointer by n/8.
 *
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return the integer.
 */
util.ByteStringBuffer.prototype.getSignedInt = function(n) {
  // getInt checks n
  var x = this.getInt(n);
  var max = 2 << (n - 2);
  if(x >= max) {
    x -= max << 1;
  }
  return x;
};

/**
 * Reads bytes out as a binary encoded string and clears them from the
 * buffer. Note that the resulting string is binary encoded (in node.js this
 * encoding is referred to as `binary`, it is *not* `utf8`).
 *
 * @param count the number of bytes to read, undefined or null for all.
 *
 * @return a binary encoded string of bytes.
 */
util.ByteStringBuffer.prototype.getBytes = function(count) {
  var rval;
  if(count) {
    // read count bytes
    count = Math.min(this.length(), count);
    rval = this.data.slice(this.read, this.read + count);
    this.read += count;
  } else if(count === 0) {
    rval = '';
  } else {
    // read all bytes, optimize to only copy when needed
    rval = (this.read === 0) ? this.data : this.data.slice(this.read);
    this.clear();
  }
  return rval;
};

/**
 * Gets a binary encoded string of the bytes from this buffer without
 * modifying the read pointer.
 *
 * @param count the number of bytes to get, omit to get all.
 *
 * @return a string full of binary encoded characters.
 */
util.ByteStringBuffer.prototype.bytes = function(count) {
  return (typeof(count) === 'undefined' ?
    this.data.slice(this.read) :
    this.data.slice(this.read, this.read + count));
};

/**
 * Gets a byte at the given index without modifying the read pointer.
 *
 * @param i the byte index.
 *
 * @return the byte.
 */
util.ByteStringBuffer.prototype.at = function(i) {
  return this.data.charCodeAt(this.read + i);
};

/**
 * Puts a byte at the given index without modifying the read pointer.
 *
 * @param i the byte index.
 * @param b the byte to put.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.setAt = function(i, b) {
  this.data = this.data.substr(0, this.read + i) +
    String.fromCharCode(b) +
    this.data.substr(this.read + i + 1);
  return this;
};

/**
 * Gets the last byte without modifying the read pointer.
 *
 * @return the last byte.
 */
util.ByteStringBuffer.prototype.last = function() {
  return this.data.charCodeAt(this.data.length - 1);
};

/**
 * Creates a copy of this buffer.
 *
 * @return the copy.
 */
util.ByteStringBuffer.prototype.copy = function() {
  var c = util.createBuffer(this.data);
  c.read = this.read;
  return c;
};

/**
 * Compacts this buffer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.compact = function() {
  if(this.read > 0) {
    this.data = this.data.slice(this.read);
    this.read = 0;
  }
  return this;
};

/**
 * Clears this buffer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.clear = function() {
  this.data = '';
  this.read = 0;
  return this;
};

/**
 * Shortens this buffer by triming bytes off of the end of this buffer.
 *
 * @param count the number of bytes to trim off.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.truncate = function(count) {
  var len = Math.max(0, this.length() - count);
  this.data = this.data.substr(this.read, len);
  this.read = 0;
  return this;
};

/**
 * Converts this buffer to a hexadecimal string.
 *
 * @return a hexadecimal string.
 */
util.ByteStringBuffer.prototype.toHex = function() {
  var rval = '';
  for(var i = this.read; i < this.data.length; ++i) {
    var b = this.data.charCodeAt(i);
    if(b < 16) {
      rval += '0';
    }
    rval += b.toString(16);
  }
  return rval;
};

/**
 * Converts this buffer to a UTF-16 string (standard JavaScript string).
 *
 * @return a UTF-16 string.
 */
util.ByteStringBuffer.prototype.toString = function() {
  return util.decodeUtf8(this.bytes());
};

/** End Buffer w/BinaryString backing */

/** Buffer w/UInt8Array backing */

/**
 * FIXME: Experimental. Do not use yet.
 *
 * Constructor for an ArrayBuffer-backed byte buffer.
 *
 * The buffer may be constructed from a string, an ArrayBuffer, DataView, or a
 * TypedArray.
 *
 * If a string is given, its encoding should be provided as an option,
 * otherwise it will default to 'binary'. A 'binary' string is encoded such
 * that each character is one byte in length and size.
 *
 * If an ArrayBuffer, DataView, or TypedArray is given, it will be used
 * *directly* without any copying. Note that, if a write to the buffer requires
 * more space, the buffer will allocate a new backing ArrayBuffer to
 * accommodate. The starting read and write offsets for the buffer may be
 * given as options.
 *
 * @param [b] the initial bytes for this buffer.
 * @param options the options to use:
 *          [readOffset] the starting read offset to use (default: 0).
 *          [writeOffset] the starting write offset to use (default: the
 *            length of the first parameter).
 *          [growSize] the minimum amount, in bytes, to grow the buffer by to
 *            accommodate writes (default: 1024).
 *          [encoding] the encoding ('binary', 'utf8', 'utf16', 'hex') for the
 *            first parameter, if it is a string (default: 'binary').
 */
function DataBuffer(b, options) {
  // default options
  options = options || {};

  // pointers for read from/write to buffer
  this.read = options.readOffset || 0;
  this.growSize = options.growSize || 1024;

  var isArrayBuffer = util.isArrayBuffer(b);
  var isArrayBufferView = util.isArrayBufferView(b);
  if(isArrayBuffer || isArrayBufferView) {
    // use ArrayBuffer directly
    if(isArrayBuffer) {
      this.data = new DataView(b);
    } else {
      // TODO: adjust read/write offset based on the type of view
      // or specify that this must be done in the options ... that the
      // offsets are byte-based
      this.data = new DataView(b.buffer, b.byteOffset, b.byteLength);
    }
    this.write = ('writeOffset' in options ?
      options.writeOffset : this.data.byteLength);
    return;
  }

  // initialize to empty array buffer and add any given bytes using putBytes
  this.data = new DataView(new ArrayBuffer(0));
  this.write = 0;

  if(b !== null && b !== undefined) {
    this.putBytes(b);
  }

  if('writeOffset' in options) {
    this.write = options.writeOffset;
  }
}
util.DataBuffer = DataBuffer;

/**
 * Gets the number of bytes in this buffer.
 *
 * @return the number of bytes in this buffer.
 */
util.DataBuffer.prototype.length = function() {
  return this.write - this.read;
};

/**
 * Gets whether or not this buffer is empty.
 *
 * @return true if this buffer is empty, false if not.
 */
util.DataBuffer.prototype.isEmpty = function() {
  return this.length() <= 0;
};

/**
 * Ensures this buffer has enough empty space to accommodate the given number
 * of bytes. An optional parameter may be given that indicates a minimum
 * amount to grow the buffer if necessary. If the parameter is not given,
 * the buffer will be grown by some previously-specified default amount
 * or heuristic.
 *
 * @param amount the number of bytes to accommodate.
 * @param [growSize] the minimum amount, in bytes, to grow the buffer by if
 *          necessary.
 */
util.DataBuffer.prototype.accommodate = function(amount, growSize) {
  if(this.length() >= amount) {
    return this;
  }
  growSize = Math.max(growSize || this.growSize, amount);

  // grow buffer
  var src = new Uint8Array(
    this.data.buffer, this.data.byteOffset, this.data.byteLength);
  var dst = new Uint8Array(this.length() + growSize);
  dst.set(src);
  this.data = new DataView(dst.buffer);

  return this;
};

/**
 * Puts a byte in this buffer.
 *
 * @param b the byte to put.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putByte = function(b) {
  this.accommodate(1);
  this.data.setUint8(this.write++, b);
  return this;
};

/**
 * Puts a byte in this buffer N times.
 *
 * @param b the byte to put.
 * @param n the number of bytes of value b to put.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.fillWithByte = function(b, n) {
  this.accommodate(n);
  for(var i = 0; i < n; ++i) {
    this.data.setUint8(b);
  }
  return this;
};

/**
 * Puts bytes in this buffer. The bytes may be given as a string, an
 * ArrayBuffer, a DataView, or a TypedArray.
 *
 * @param bytes the bytes to put.
 * @param [encoding] the encoding for the first parameter ('binary', 'utf8',
 *          'utf16', 'hex'), if it is a string (default: 'binary').
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putBytes = function(bytes, encoding) {
  if(util.isArrayBufferView(bytes)) {
    var src = new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    var len = src.byteLength - src.byteOffset;
    this.accommodate(len);
    var dst = new Uint8Array(this.data.buffer, this.write);
    dst.set(src);
    this.write += len;
    return this;
  }

  if(util.isArrayBuffer(bytes)) {
    var src = new Uint8Array(bytes);
    this.accommodate(src.byteLength);
    var dst = new Uint8Array(this.data.buffer);
    dst.set(src, this.write);
    this.write += src.byteLength;
    return this;
  }

  // bytes is a util.DataBuffer or equivalent
  if(bytes instanceof util.DataBuffer ||
    (typeof bytes === 'object' &&
    typeof bytes.read === 'number' && typeof bytes.write === 'number' &&
    util.isArrayBufferView(bytes.data))) {
    var src = new Uint8Array(bytes.data.byteLength, bytes.read, bytes.length());
    this.accommodate(src.byteLength);
    var dst = new Uint8Array(bytes.data.byteLength, this.write);
    dst.set(src);
    this.write += src.byteLength;
    return this;
  }

  if(bytes instanceof util.ByteStringBuffer) {
    // copy binary string and process as the same as a string parameter below
    bytes = bytes.data;
    encoding = 'binary';
  }

  // string conversion
  encoding = encoding || 'binary';
  if(typeof bytes === 'string') {
    var view;

    // decode from string
    if(encoding === 'hex') {
      this.accommodate(Math.ceil(bytes.length / 2));
      view = new Uint8Array(this.data.buffer, this.write);
      this.write += util.binary.hex.decode(bytes, view, this.write);
      return this;
    }
    if(encoding === 'base64') {
      this.accommodate(Math.ceil(bytes.length / 4) * 3);
      view = new Uint8Array(this.data.buffer, this.write);
      this.write += util.binary.base64.decode(bytes, view, this.write);
      return this;
    }

    // encode text as UTF-8 bytes
    if(encoding === 'utf8') {
      // encode as UTF-8 then decode string as raw binary
      bytes = util.encodeUtf8(bytes);
      encoding = 'binary';
    }

    // decode string as raw binary
    if(encoding === 'binary' || encoding === 'raw') {
      // one byte per character
      this.accommodate(bytes.length);
      view = new Uint8Array(this.data.buffer, this.write);
      this.write += util.binary.raw.decode(view);
      return this;
    }

    // encode text as UTF-16 bytes
    if(encoding === 'utf16') {
      // two bytes per character
      this.accommodate(bytes.length * 2);
      view = new Uint16Array(this.data.buffer, this.write);
      this.write += util.text.utf16.encode(view);
      return this;
    }

    throw new Error('Invalid encoding: ' + encoding);
  }

  throw Error('Invalid parameter: ' + bytes);
};

/**
 * Puts the given buffer into this buffer.
 *
 * @param buffer the buffer to put into this one.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putBuffer = function(buffer) {
  this.putBytes(buffer);
  buffer.clear();
  return this;
};

/**
 * Puts a string into this buffer.
 *
 * @param str the string to put.
 * @param [encoding] the encoding for the string (default: 'utf16').
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putString = function(str) {
  return this.putBytes(str, 'utf16');
};

/**
 * Puts a 16-bit integer in this buffer in big-endian order.
 *
 * @param i the 16-bit integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt16 = function(i) {
  this.accommodate(2);
  this.data.setInt16(this.write, i);
  this.write += 2;
  return this;
};

/**
 * Puts a 24-bit integer in this buffer in big-endian order.
 *
 * @param i the 24-bit integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt24 = function(i) {
  this.accommodate(3);
  this.data.setInt16(this.write, i >> 8 & 0xFFFF);
  this.data.setInt8(this.write, i >> 16 & 0xFF);
  this.write += 3;
  return this;
};

/**
 * Puts a 32-bit integer in this buffer in big-endian order.
 *
 * @param i the 32-bit integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt32 = function(i) {
  this.accommodate(4);
  this.data.setInt32(this.write, i);
  this.write += 4;
  return this;
};

/**
 * Puts a 16-bit integer in this buffer in little-endian order.
 *
 * @param i the 16-bit integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt16Le = function(i) {
  this.accommodate(2);
  this.data.setInt16(this.write, i, true);
  this.write += 2;
  return this;
};

/**
 * Puts a 24-bit integer in this buffer in little-endian order.
 *
 * @param i the 24-bit integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt24Le = function(i) {
  this.accommodate(3);
  this.data.setInt8(this.write, i >> 16 & 0xFF);
  this.data.setInt16(this.write, i >> 8 & 0xFFFF, true);
  this.write += 3;
  return this;
};

/**
 * Puts a 32-bit integer in this buffer in little-endian order.
 *
 * @param i the 32-bit integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt32Le = function(i) {
  this.accommodate(4);
  this.data.setInt32(this.write, i, true);
  this.write += 4;
  return this;
};

/**
 * Puts an n-bit integer in this buffer in big-endian order.
 *
 * @param i the n-bit integer.
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt = function(i, n) {
  _checkBitsParam(n);
  this.accommodate(n / 8);
  do {
    n -= 8;
    this.data.setInt8(this.write++, (i >> n) & 0xFF);
  } while(n > 0);
  return this;
};

/**
 * Puts a signed n-bit integer in this buffer in big-endian order. Two's
 * complement representation is used.
 *
 * @param i the n-bit integer.
 * @param n the number of bits in the integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putSignedInt = function(i, n) {
  _checkBitsParam(n);
  this.accommodate(n / 8);
  if(i < 0) {
    i += 2 << (n - 1);
  }
  return this.putInt(i, n);
};

/**
 * Gets a byte from this buffer and advances the read pointer by 1.
 *
 * @return the byte.
 */
util.DataBuffer.prototype.getByte = function() {
  return this.data.getInt8(this.read++);
};

/**
 * Gets a uint16 from this buffer in big-endian order and advances the read
 * pointer by 2.
 *
 * @return the uint16.
 */
util.DataBuffer.prototype.getInt16 = function() {
  var rval = this.data.getInt16(this.read);
  this.read += 2;
  return rval;
};

/**
 * Gets a uint24 from this buffer in big-endian order and advances the read
 * pointer by 3.
 *
 * @return the uint24.
 */
util.DataBuffer.prototype.getInt24 = function() {
  var rval = (
    this.data.getInt16(this.read) << 8 ^
    this.data.getInt8(this.read + 2));
  this.read += 3;
  return rval;
};

/**
 * Gets a uint32 from this buffer in big-endian order and advances the read
 * pointer by 4.
 *
 * @return the word.
 */
util.DataBuffer.prototype.getInt32 = function() {
  var rval = this.data.getInt32(this.read);
  this.read += 4;
  return rval;
};

/**
 * Gets a uint16 from this buffer in little-endian order and advances the read
 * pointer by 2.
 *
 * @return the uint16.
 */
util.DataBuffer.prototype.getInt16Le = function() {
  var rval = this.data.getInt16(this.read, true);
  this.read += 2;
  return rval;
};

/**
 * Gets a uint24 from this buffer in little-endian order and advances the read
 * pointer by 3.
 *
 * @return the uint24.
 */
util.DataBuffer.prototype.getInt24Le = function() {
  var rval = (
    this.data.getInt8(this.read) ^
    this.data.getInt16(this.read + 1, true) << 8);
  this.read += 3;
  return rval;
};

/**
 * Gets a uint32 from this buffer in little-endian order and advances the read
 * pointer by 4.
 *
 * @return the word.
 */
util.DataBuffer.prototype.getInt32Le = function() {
  var rval = this.data.getInt32(this.read, true);
  this.read += 4;
  return rval;
};

/**
 * Gets an n-bit integer from this buffer in big-endian order and advances the
 * read pointer by n/8.
 *
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return the integer.
 */
util.DataBuffer.prototype.getInt = function(n) {
  _checkBitsParam(n);
  var rval = 0;
  do {
    // TODO: Use (rval * 0x100) if adding support for 33 to 53 bits.
    rval = (rval << 8) + this.data.getInt8(this.read++);
    n -= 8;
  } while(n > 0);
  return rval;
};

/**
 * Gets a signed n-bit integer from this buffer in big-endian order, using
 * two's complement, and advances the read pointer by n/8.
 *
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return the integer.
 */
util.DataBuffer.prototype.getSignedInt = function(n) {
  // getInt checks n
  var x = this.getInt(n);
  var max = 2 << (n - 2);
  if(x >= max) {
    x -= max << 1;
  }
  return x;
};

/**
 * Reads bytes out as a binary encoded string and clears them from the
 * buffer.
 *
 * @param count the number of bytes to read, undefined or null for all.
 *
 * @return a binary encoded string of bytes.
 */
util.DataBuffer.prototype.getBytes = function(count) {
  // TODO: deprecate this method, it is poorly named and
  // this.toString('binary') replaces it
  // add a toTypedArray()/toArrayBuffer() function
  var rval;
  if(count) {
    // read count bytes
    count = Math.min(this.length(), count);
    rval = this.data.slice(this.read, this.read + count);
    this.read += count;
  } else if(count === 0) {
    rval = '';
  } else {
    // read all bytes, optimize to only copy when needed
    rval = (this.read === 0) ? this.data : this.data.slice(this.read);
    this.clear();
  }
  return rval;
};

/**
 * Gets a binary encoded string of the bytes from this buffer without
 * modifying the read pointer.
 *
 * @param count the number of bytes to get, omit to get all.
 *
 * @return a string full of binary encoded characters.
 */
util.DataBuffer.prototype.bytes = function(count) {
  // TODO: deprecate this method, it is poorly named, add "getString()"
  return (typeof(count) === 'undefined' ?
    this.data.slice(this.read) :
    this.data.slice(this.read, this.read + count));
};

/**
 * Gets a byte at the given index without modifying the read pointer.
 *
 * @param i the byte index.
 *
 * @return the byte.
 */
util.DataBuffer.prototype.at = function(i) {
  return this.data.getUint8(this.read + i);
};

/**
 * Puts a byte at the given index without modifying the read pointer.
 *
 * @param i the byte index.
 * @param b the byte to put.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.setAt = function(i, b) {
  this.data.setUint8(i, b);
  return this;
};

/**
 * Gets the last byte without modifying the read pointer.
 *
 * @return the last byte.
 */
util.DataBuffer.prototype.last = function() {
  return this.data.getUint8(this.write - 1);
};

/**
 * Creates a copy of this buffer.
 *
 * @return the copy.
 */
util.DataBuffer.prototype.copy = function() {
  return new util.DataBuffer(this);
};

/**
 * Compacts this buffer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.compact = function() {
  if(this.read > 0) {
    var src = new Uint8Array(this.data.buffer, this.read);
    var dst = new Uint8Array(src.byteLength);
    dst.set(src);
    this.data = new DataView(dst);
    this.write -= this.read;
    this.read = 0;
  }
  return this;
};

/**
 * Clears this buffer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.clear = function() {
  this.data = new DataView(new ArrayBuffer(0));
  this.read = this.write = 0;
  return this;
};

/**
 * Shortens this buffer by triming bytes off of the end of this buffer.
 *
 * @param count the number of bytes to trim off.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.truncate = function(count) {
  this.write = Math.max(0, this.length() - count);
  this.read = Math.min(this.read, this.write);
  return this;
};

/**
 * Converts this buffer to a hexadecimal string.
 *
 * @return a hexadecimal string.
 */
util.DataBuffer.prototype.toHex = function() {
  var rval = '';
  for(var i = this.read; i < this.data.byteLength; ++i) {
    var b = this.data.getUint8(i);
    if(b < 16) {
      rval += '0';
    }
    rval += b.toString(16);
  }
  return rval;
};

/**
 * Converts this buffer to a string, using the given encoding. If no
 * encoding is given, 'utf8' (UTF-8) is used.
 *
 * @param [encoding] the encoding to use: 'binary', 'utf8', 'utf16', 'hex',
 *          'base64' (default: 'utf8').
 *
 * @return a string representation of the bytes in this buffer.
 */
util.DataBuffer.prototype.toString = function(encoding) {
  var view = new Uint8Array(this.data, this.read, this.length());
  encoding = encoding || 'utf8';

  // encode to string
  if(encoding === 'binary' || encoding === 'raw') {
    return util.binary.raw.encode(view);
  }
  if(encoding === 'hex') {
    return util.binary.hex.encode(view);
  }
  if(encoding === 'base64') {
    return util.binary.base64.encode(view);
  }

  // decode to text
  if(encoding === 'utf8') {
    return util.text.utf8.decode(view);
  }
  if(encoding === 'utf16') {
    return util.text.utf16.decode(view);
  }

  throw new Error('Invalid encoding: ' + encoding);
};

/** End Buffer w/UInt8Array backing */

/**
 * Creates a buffer that stores bytes. A value may be given to populate the
 * buffer with data. This value can either be string of encoded bytes or a
 * regular string of characters. When passing a string of binary encoded
 * bytes, the encoding `raw` should be given. This is also the default. When
 * passing a string of characters, the encoding `utf8` should be given.
 *
 * @param [input] a string with encoded bytes to store in the buffer.
 * @param [encoding] (default: 'raw', other: 'utf8').
 */
util.createBuffer = function(input, encoding) {
  // TODO: deprecate, use new ByteBuffer() instead
  encoding = encoding || 'raw';
  if(input !== undefined && encoding === 'utf8') {
    input = util.encodeUtf8(input);
  }
  return new util.ByteBuffer(input);
};

/**
 * Fills a string with a particular value. If you want the string to be a byte
 * string, pass in String.fromCharCode(theByte).
 *
 * @param c the character to fill the string with, use String.fromCharCode
 *          to fill the string with a byte value.
 * @param n the number of characters of value c to fill with.
 *
 * @return the filled string.
 */
util.fillString = function(c, n) {
  var s = '';
  while(n > 0) {
    if(n & 1) {
      s += c;
    }
    n >>>= 1;
    if(n > 0) {
      c += c;
    }
  }
  return s;
};

/**
 * Performs a per byte XOR between two byte strings and returns the result as a
 * string of bytes.
 *
 * @param s1 first string of bytes.
 * @param s2 second string of bytes.
 * @param n the number of bytes to XOR.
 *
 * @return the XOR'd result.
 */
util.xorBytes = function(s1, s2, n) {
  var s3 = '';
  var b = '';
  var t = '';
  var i = 0;
  var c = 0;
  for(; n > 0; --n, ++i) {
    b = s1.charCodeAt(i) ^ s2.charCodeAt(i);
    if(c >= 10) {
      s3 += t;
      t = '';
      c = 0;
    }
    t += String.fromCharCode(b);
    ++c;
  }
  s3 += t;
  return s3;
};

/**
 * Converts a hex string into a 'binary' encoded string of bytes.
 *
 * @param hex the hexadecimal string to convert.
 *
 * @return the binary-encoded string of bytes.
 */
util.hexToBytes = function(hex) {
  // TODO: deprecate: "Deprecated. Use util.binary.hex.decode instead."
  var rval = '';
  var i = 0;
  if(hex.length & 1 == 1) {
    // odd number of characters, convert first character alone
    i = 1;
    rval += String.fromCharCode(parseInt(hex[0], 16));
  }
  // convert 2 characters (1 byte) at a time
  for(; i < hex.length; i += 2) {
    rval += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return rval;
};

/**
 * Converts a 'binary' encoded string of bytes to hex.
 *
 * @param bytes the byte string to convert.
 *
 * @return the string of hexadecimal characters.
 */
util.bytesToHex = function(bytes) {
  // TODO: deprecate: "Deprecated. Use util.binary.hex.encode instead."
  return util.createBuffer(bytes).toHex();
};

/**
 * Converts an 32-bit integer to 4-big-endian byte string.
 *
 * @param i the integer.
 *
 * @return the byte string.
 */
util.int32ToBytes = function(i) {
  return (
    String.fromCharCode(i >> 24 & 0xFF) +
    String.fromCharCode(i >> 16 & 0xFF) +
    String.fromCharCode(i >> 8 & 0xFF) +
    String.fromCharCode(i & 0xFF));
};

// base64 characters, reverse mapping
var _base64 =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var _base64Idx = [
/*43 -43 = 0*/
/*'+',  1,  2,  3,'/' */
   62, -1, -1, -1, 63,

/*'0','1','2','3','4','5','6','7','8','9' */
   52, 53, 54, 55, 56, 57, 58, 59, 60, 61,

/*15, 16, 17,'=', 19, 20, 21 */
  -1, -1, -1, 64, -1, -1, -1,

/*65 - 43 = 22*/
/*'A','B','C','D','E','F','G','H','I','J','K','L','M', */
   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,

/*'N','O','P','Q','R','S','T','U','V','W','X','Y','Z' */
   13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,

/*91 - 43 = 48 */
/*48, 49, 50, 51, 52, 53 */
  -1, -1, -1, -1, -1, -1,

/*97 - 43 = 54*/
/*'a','b','c','d','e','f','g','h','i','j','k','l','m' */
   26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,

/*'n','o','p','q','r','s','t','u','v','w','x','y','z' */
   39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
];

// base58 characters (Bitcoin alphabet)
var _base58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

/**
 * Base64 encodes a 'binary' encoded string of bytes.
 *
 * @param input the binary encoded string of bytes to base64-encode.
 * @param maxline the maximum number of encoded characters per line to use,
 *          defaults to none.
 *
 * @return the base64-encoded output.
 */
util.encode64 = function(input, maxline) {
  // TODO: deprecate: "Deprecated. Use util.binary.base64.encode instead."
  var line = '';
  var output = '';
  var chr1, chr2, chr3;
  var i = 0;
  while(i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);

    // encode 4 character group
    line += _base64.charAt(chr1 >> 2);
    line += _base64.charAt(((chr1 & 3) << 4) | (chr2 >> 4));
    if(isNaN(chr2)) {
      line += '==';
    } else {
      line += _base64.charAt(((chr2 & 15) << 2) | (chr3 >> 6));
      line += isNaN(chr3) ? '=' : _base64.charAt(chr3 & 63);
    }

    if(maxline && line.length > maxline) {
      output += line.substr(0, maxline) + '\r\n';
      line = line.substr(maxline);
    }
  }
  output += line;
  return output;
};

/**
 * Base64 decodes a string into a 'binary' encoded string of bytes.
 *
 * @param input the base64-encoded input.
 *
 * @return the binary encoded string.
 */
util.decode64 = function(input) {
  // TODO: deprecate: "Deprecated. Use util.binary.base64.decode instead."

  // remove all non-base64 characters
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

  var output = '';
  var enc1, enc2, enc3, enc4;
  var i = 0;

  while(i < input.length) {
    enc1 = _base64Idx[input.charCodeAt(i++) - 43];
    enc2 = _base64Idx[input.charCodeAt(i++) - 43];
    enc3 = _base64Idx[input.charCodeAt(i++) - 43];
    enc4 = _base64Idx[input.charCodeAt(i++) - 43];

    output += String.fromCharCode((enc1 << 2) | (enc2 >> 4));
    if(enc3 !== 64) {
      // decoded at least 2 bytes
      output += String.fromCharCode(((enc2 & 15) << 4) | (enc3 >> 2));
      if(enc4 !== 64) {
        // decoded 3 bytes
        output += String.fromCharCode(((enc3 & 3) << 6) | enc4);
      }
    }
  }

  return output;
};

/**
 * Encodes the given string of characters (a standard JavaScript
 * string) as a binary encoded string where the bytes represent
 * a UTF-8 encoded string of characters. Non-ASCII characters will be
 * encoded as multiple bytes according to UTF-8.
 *
 * @param str a standard string of characters to encode.
 *
 * @return the binary encoded string.
 */
util.encodeUtf8 = function(str) {
  return unescape(encodeURIComponent(str));
};

/**
 * Decodes a binary encoded string that contains bytes that
 * represent a UTF-8 encoded string of characters -- into a
 * string of characters (a standard JavaScript string).
 *
 * @param str the binary encoded string to decode.
 *
 * @return the resulting standard string of characters.
 */
util.decodeUtf8 = function(str) {
  return decodeURIComponent(escape(str));
};

// binary encoding/decoding tools
// FIXME: Experimental. Do not use yet.
util.binary = {
  raw: {},
  hex: {},
  base64: {},
  base58: {},
  baseN : {
    encode: baseN.encode,
    decode: baseN.decode
  }
};

/**
 * Encodes a Uint8Array as a binary-encoded string. This encoding uses
 * a value between 0 and 255 for each character.
 *
 * @param bytes the Uint8Array to encode.
 *
 * @return the binary-encoded string.
 */
util.binary.raw.encode = function(bytes) {
  return String.fromCharCode.apply(null, bytes);
};

/**
 * Decodes a binary-encoded string to a Uint8Array. This encoding uses
 * a value between 0 and 255 for each character.
 *
 * @param str the binary-encoded string to decode.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */
util.binary.raw.decode = function(str, output, offset) {
  var out = output;
  if(!out) {
    out = new Uint8Array(str.length);
  }
  offset = offset || 0;
  var j = offset;
  for(var i = 0; i < str.length; ++i) {
    out[j++] = str.charCodeAt(i);
  }
  return output ? (j - offset) : out;
};

/**
 * Encodes a 'binary' string, ArrayBuffer, DataView, TypedArray, or
 * ByteBuffer as a string of hexadecimal characters.
 *
 * @param bytes the bytes to convert.
 *
 * @return the string of hexadecimal characters.
 */
util.binary.hex.encode = util.bytesToHex;

/**
 * Decodes a hex-encoded string to a Uint8Array.
 *
 * @param hex the hexadecimal string to convert.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */
util.binary.hex.decode = function(hex, output, offset) {
  var out = output;
  if(!out) {
    out = new Uint8Array(Math.ceil(hex.length / 2));
  }
  offset = offset || 0;
  var i = 0, j = offset;
  if(hex.length & 1) {
    // odd number of characters, convert first character alone
    i = 1;
    out[j++] = parseInt(hex[0], 16);
  }
  // convert 2 characters (1 byte) at a time
  for(; i < hex.length; i += 2) {
    out[j++] = parseInt(hex.substr(i, 2), 16);
  }
  return output ? (j - offset) : out;
};

/**
 * Base64-encodes a Uint8Array.
 *
 * @param input the Uint8Array to encode.
 * @param maxline the maximum number of encoded characters per line to use,
 *          defaults to none.
 *
 * @return the base64-encoded output string.
 */
util.binary.base64.encode = function(input, maxline) {
  var line = '';
  var output = '';
  var chr1, chr2, chr3;
  var i = 0;
  while(i < input.byteLength) {
    chr1 = input[i++];
    chr2 = input[i++];
    chr3 = input[i++];

    // encode 4 character group
    line += _base64.charAt(chr1 >> 2);
    line += _base64.charAt(((chr1 & 3) << 4) | (chr2 >> 4));
    if(isNaN(chr2)) {
      line += '==';
    } else {
      line += _base64.charAt(((chr2 & 15) << 2) | (chr3 >> 6));
      line += isNaN(chr3) ? '=' : _base64.charAt(chr3 & 63);
    }

    if(maxline && line.length > maxline) {
      output += line.substr(0, maxline) + '\r\n';
      line = line.substr(maxline);
    }
  }
  output += line;
  return output;
};

/**
 * Decodes a base64-encoded string to a Uint8Array.
 *
 * @param input the base64-encoded input string.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */
util.binary.base64.decode = function(input, output, offset) {
  var out = output;
  if(!out) {
    out = new Uint8Array(Math.ceil(input.length / 4) * 3);
  }

  // remove all non-base64 characters
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

  offset = offset || 0;
  var enc1, enc2, enc3, enc4;
  var i = 0, j = offset;

  while(i < input.length) {
    enc1 = _base64Idx[input.charCodeAt(i++) - 43];
    enc2 = _base64Idx[input.charCodeAt(i++) - 43];
    enc3 = _base64Idx[input.charCodeAt(i++) - 43];
    enc4 = _base64Idx[input.charCodeAt(i++) - 43];

    out[j++] = (enc1 << 2) | (enc2 >> 4);
    if(enc3 !== 64) {
      // decoded at least 2 bytes
      out[j++] = ((enc2 & 15) << 4) | (enc3 >> 2);
      if(enc4 !== 64) {
        // decoded 3 bytes
        out[j++] = ((enc3 & 3) << 6) | enc4;
      }
    }
  }

  // make sure result is the exact decoded length
  return output ? (j - offset) : out.subarray(0, j);
};

// add support for base58 encoding/decoding with Bitcoin alphabet
util.binary.base58.encode = function(input, maxline) {
  return util.binary.baseN.encode(input, _base58, maxline);
};
util.binary.base58.decode = function(input, maxline) {
  return util.binary.baseN.decode(input, _base58, maxline);
};

// text encoding/decoding tools
// FIXME: Experimental. Do not use yet.
util.text = {
  utf8: {},
  utf16: {}
};

/**
 * Encodes the given string as UTF-8 in a Uint8Array.
 *
 * @param str the string to encode.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */
util.text.utf8.encode = function(str, output, offset) {
  str = util.encodeUtf8(str);
  var out = output;
  if(!out) {
    out = new Uint8Array(str.length);
  }
  offset = offset || 0;
  var j = offset;
  for(var i = 0; i < str.length; ++i) {
    out[j++] = str.charCodeAt(i);
  }
  return output ? (j - offset) : out;
};

/**
 * Decodes the UTF-8 contents from a Uint8Array.
 *
 * @param bytes the Uint8Array to decode.
 *
 * @return the resulting string.
 */
util.text.utf8.decode = function(bytes) {
  return util.decodeUtf8(String.fromCharCode.apply(null, bytes));
};

/**
 * Encodes the given string as UTF-16 in a Uint8Array.
 *
 * @param str the string to encode.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */
util.text.utf16.encode = function(str, output, offset) {
  var out = output;
  if(!out) {
    out = new Uint8Array(str.length * 2);
  }
  var view = new Uint16Array(out.buffer);
  offset = offset || 0;
  var j = offset;
  var k = offset;
  for(var i = 0; i < str.length; ++i) {
    view[k++] = str.charCodeAt(i);
    j += 2;
  }
  return output ? (j - offset) : out;
};

/**
 * Decodes the UTF-16 contents from a Uint8Array.
 *
 * @param bytes the Uint8Array to decode.
 *
 * @return the resulting string.
 */
util.text.utf16.decode = function(bytes) {
  return String.fromCharCode.apply(null, new Uint16Array(bytes.buffer));
};

/**
 * Deflates the given data using a flash interface.
 *
 * @param api the flash interface.
 * @param bytes the data.
 * @param raw true to return only raw deflate data, false to include zlib
 *          header and trailer.
 *
 * @return the deflated data as a string.
 */
util.deflate = function(api, bytes, raw) {
  bytes = util.decode64(api.deflate(util.encode64(bytes)).rval);

  // strip zlib header and trailer if necessary
  if(raw) {
    // zlib header is 2 bytes (CMF,FLG) where FLG indicates that
    // there is a 4-byte DICT (alder-32) block before the data if
    // its 5th bit is set
    var start = 2;
    var flg = bytes.charCodeAt(1);
    if(flg & 0x20) {
      start = 6;
    }
    // zlib trailer is 4 bytes of adler-32
    bytes = bytes.substring(start, bytes.length - 4);
  }

  return bytes;
};

/**
 * Inflates the given data using a flash interface.
 *
 * @param api the flash interface.
 * @param bytes the data.
 * @param raw true if the incoming data has no zlib header or trailer and is
 *          raw DEFLATE data.
 *
 * @return the inflated data as a string, null on error.
 */
util.inflate = function(api, bytes, raw) {
  // TODO: add zlib header and trailer if necessary/possible
  var rval = api.inflate(util.encode64(bytes)).rval;
  return (rval === null) ? null : util.decode64(rval);
};

/**
 * Sets a storage object.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 * @param obj the storage object, null to remove.
 */
var _setStorageObject = function(api, id, obj) {
  if(!api) {
    throw new Error('WebStorage not available.');
  }

  var rval;
  if(obj === null) {
    rval = api.removeItem(id);
  } else {
    // json-encode and base64-encode object
    obj = util.encode64(JSON.stringify(obj));
    rval = api.setItem(id, obj);
  }

  // handle potential flash error
  if(typeof(rval) !== 'undefined' && rval.rval !== true) {
    var error = new Error(rval.error.message);
    error.id = rval.error.id;
    error.name = rval.error.name;
    throw error;
  }
};

/**
 * Gets a storage object.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 *
 * @return the storage object entry or null if none exists.
 */
var _getStorageObject = function(api, id) {
  if(!api) {
    throw new Error('WebStorage not available.');
  }

  // get the existing entry
  var rval = api.getItem(id);

  /* Note: We check api.init because we can't do (api == localStorage)
    on IE because of "Class doesn't support Automation" exception. Only
    the flash api has an init method so this works too, but we need a
    better solution in the future. */

  // flash returns item wrapped in an object, handle special case
  if(api.init) {
    if(rval.rval === null) {
      if(rval.error) {
        var error = new Error(rval.error.message);
        error.id = rval.error.id;
        error.name = rval.error.name;
        throw error;
      }
      // no error, but also no item
      rval = null;
    } else {
      rval = rval.rval;
    }
  }

  // handle decoding
  if(rval !== null) {
    // base64-decode and json-decode data
    rval = JSON.parse(util.decode64(rval));
  }

  return rval;
};

/**
 * Stores an item in local storage.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 * @param key the key for the item.
 * @param data the data for the item (any javascript object/primitive).
 */
var _setItem = function(api, id, key, data) {
  // get storage object
  var obj = _getStorageObject(api, id);
  if(obj === null) {
    // create a new storage object
    obj = {};
  }
  // update key
  obj[key] = data;

  // set storage object
  _setStorageObject(api, id, obj);
};

/**
 * Gets an item from local storage.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 * @param key the key for the item.
 *
 * @return the item.
 */
var _getItem = function(api, id, key) {
  // get storage object
  var rval = _getStorageObject(api, id);
  if(rval !== null) {
    // return data at key
    rval = (key in rval) ? rval[key] : null;
  }

  return rval;
};

/**
 * Removes an item from local storage.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 * @param key the key for the item.
 */
var _removeItem = function(api, id, key) {
  // get storage object
  var obj = _getStorageObject(api, id);
  if(obj !== null && key in obj) {
    // remove key
    delete obj[key];

    // see if entry has no keys remaining
    var empty = true;
    for(var prop in obj) {
      empty = false;
      break;
    }
    if(empty) {
      // remove entry entirely if no keys are left
      obj = null;
    }

    // set storage object
    _setStorageObject(api, id, obj);
  }
};

/**
 * Clears the local disk storage identified by the given ID.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 */
var _clearItems = function(api, id) {
  _setStorageObject(api, id, null);
};

/**
 * Calls a storage function.
 *
 * @param func the function to call.
 * @param args the arguments for the function.
 * @param location the location argument.
 *
 * @return the return value from the function.
 */
var _callStorageFunction = function(func, args, location) {
  var rval = null;

  // default storage types
  if(typeof(location) === 'undefined') {
    location = ['web', 'flash'];
  }

  // apply storage types in order of preference
  var type;
  var done = false;
  var exception = null;
  for(var idx in location) {
    type = location[idx];
    try {
      if(type === 'flash' || type === 'both') {
        if(args[0] === null) {
          throw new Error('Flash local storage not available.');
        }
        rval = func.apply(this, args);
        done = (type === 'flash');
      }
      if(type === 'web' || type === 'both') {
        args[0] = localStorage;
        rval = func.apply(this, args);
        done = true;
      }
    } catch(ex) {
      exception = ex;
    }
    if(done) {
      break;
    }
  }

  if(!done) {
    throw exception;
  }

  return rval;
};

/**
 * Stores an item on local disk.
 *
 * The available types of local storage include 'flash', 'web', and 'both'.
 *
 * The type 'flash' refers to flash local storage (SharedObject). In order
 * to use flash local storage, the 'api' parameter must be valid. The type
 * 'web' refers to WebStorage, if supported by the browser. The type 'both'
 * refers to storing using both 'flash' and 'web', not just one or the
 * other.
 *
 * The location array should list the storage types to use in order of
 * preference:
 *
 * ['flash']: flash only storage
 * ['web']: web only storage
 * ['both']: try to store in both
 * ['flash','web']: store in flash first, but if not available, 'web'
 * ['web','flash']: store in web first, but if not available, 'flash'
 *
 * The location array defaults to: ['web', 'flash']
 *
 * @param api the flash interface, null to use only WebStorage.
 * @param id the storage ID to use.
 * @param key the key for the item.
 * @param data the data for the item (any javascript object/primitive).
 * @param location an array with the preferred types of storage to use.
 */
util.setItem = function(api, id, key, data, location) {
  _callStorageFunction(_setItem, arguments, location);
};

/**
 * Gets an item on local disk.
 *
 * Set setItem() for details on storage types.
 *
 * @param api the flash interface, null to use only WebStorage.
 * @param id the storage ID to use.
 * @param key the key for the item.
 * @param location an array with the preferred types of storage to use.
 *
 * @return the item.
 */
util.getItem = function(api, id, key, location) {
  return _callStorageFunction(_getItem, arguments, location);
};

/**
 * Removes an item on local disk.
 *
 * Set setItem() for details on storage types.
 *
 * @param api the flash interface.
 * @param id the storage ID to use.
 * @param key the key for the item.
 * @param location an array with the preferred types of storage to use.
 */
util.removeItem = function(api, id, key, location) {
  _callStorageFunction(_removeItem, arguments, location);
};

/**
 * Clears the local disk storage identified by the given ID.
 *
 * Set setItem() for details on storage types.
 *
 * @param api the flash interface if flash is available.
 * @param id the storage ID to use.
 * @param location an array with the preferred types of storage to use.
 */
util.clearItems = function(api, id, location) {
  _callStorageFunction(_clearItems, arguments, location);
};

/**
 * Parses the scheme, host, and port from an http(s) url.
 *
 * @param str the url string.
 *
 * @return the parsed url object or null if the url is invalid.
 */
util.parseUrl = function(str) {
  // FIXME: this regex looks a bit broken
  var regex = /^(https?):\/\/([^:&^\/]*):?(\d*)(.*)$/g;
  regex.lastIndex = 0;
  var m = regex.exec(str);
  var url = (m === null) ? null : {
    full: str,
    scheme: m[1],
    host: m[2],
    port: m[3],
    path: m[4]
  };
  if(url) {
    url.fullHost = url.host;
    if(url.port) {
      if(url.port !== 80 && url.scheme === 'http') {
        url.fullHost += ':' + url.port;
      } else if(url.port !== 443 && url.scheme === 'https') {
        url.fullHost += ':' + url.port;
      }
    } else if(url.scheme === 'http') {
      url.port = 80;
    } else if(url.scheme === 'https') {
      url.port = 443;
    }
    url.full = url.scheme + '://' + url.fullHost;
  }
  return url;
};

/* Storage for query variables */
var _queryVariables = null;

/**
 * Returns the window location query variables. Query is parsed on the first
 * call and the same object is returned on subsequent calls. The mapping
 * is from keys to an array of values. Parameters without values will have
 * an object key set but no value added to the value array. Values are
 * unescaped.
 *
 * ...?k1=v1&k2=v2:
 * {
 *   "k1": ["v1"],
 *   "k2": ["v2"]
 * }
 *
 * ...?k1=v1&k1=v2:
 * {
 *   "k1": ["v1", "v2"]
 * }
 *
 * ...?k1=v1&k2:
 * {
 *   "k1": ["v1"],
 *   "k2": []
 * }
 *
 * ...?k1=v1&k1:
 * {
 *   "k1": ["v1"]
 * }
 *
 * ...?k1&k1:
 * {
 *   "k1": []
 * }
 *
 * @param query the query string to parse (optional, default to cached
 *          results from parsing window location search query).
 *
 * @return object mapping keys to variables.
 */
util.getQueryVariables = function(query) {
  var parse = function(q) {
    var rval = {};
    var kvpairs = q.split('&');
    for(var i = 0; i < kvpairs.length; i++) {
      var pos = kvpairs[i].indexOf('=');
      var key;
      var val;
      if(pos > 0) {
        key = kvpairs[i].substring(0, pos);
        val = kvpairs[i].substring(pos + 1);
      } else {
        key = kvpairs[i];
        val = null;
      }
      if(!(key in rval)) {
        rval[key] = [];
      }
      // disallow overriding object prototype keys
      if(!(key in Object.prototype) && val !== null) {
        rval[key].push(unescape(val));
      }
    }
    return rval;
  };

   var rval;
   if(typeof(query) === 'undefined') {
     // set cached variables if needed
     if(_queryVariables === null) {
       if(typeof(window) !== 'undefined' && window.location && window.location.search) {
          // parse window search query
          _queryVariables = parse(window.location.search.substring(1));
       } else {
          // no query variables available
          _queryVariables = {};
       }
     }
     rval = _queryVariables;
   } else {
     // parse given query
     rval = parse(query);
   }
   return rval;
};

/**
 * Parses a fragment into a path and query. This method will take a URI
 * fragment and break it up as if it were the main URI. For example:
 *    /bar/baz?a=1&b=2
 * results in:
 *    {
 *       path: ["bar", "baz"],
 *       query: {"k1": ["v1"], "k2": ["v2"]}
 *    }
 *
 * @return object with a path array and query object.
 */
util.parseFragment = function(fragment) {
  // default to whole fragment
  var fp = fragment;
  var fq = '';
  // split into path and query if possible at the first '?'
  var pos = fragment.indexOf('?');
  if(pos > 0) {
    fp = fragment.substring(0, pos);
    fq = fragment.substring(pos + 1);
  }
  // split path based on '/' and ignore first element if empty
  var path = fp.split('/');
  if(path.length > 0 && path[0] === '') {
    path.shift();
  }
  // convert query into object
  var query = (fq === '') ? {} : util.getQueryVariables(fq);

  return {
    pathString: fp,
    queryString: fq,
    path: path,
    query: query
  };
};

/**
 * Makes a request out of a URI-like request string. This is intended to
 * be used where a fragment id (after a URI '#') is parsed as a URI with
 * path and query parts. The string should have a path beginning and
 * delimited by '/' and optional query parameters following a '?'. The
 * query should be a standard URL set of key value pairs delimited by
 * '&'. For backwards compatibility the initial '/' on the path is not
 * required. The request object has the following API, (fully described
 * in the method code):
 *    {
 *       path: <the path string part>.
 *       query: <the query string part>,
 *       getPath(i): get part or all of the split path array,
 *       getQuery(k, i): get part or all of a query key array,
 *       getQueryLast(k, _default): get last element of a query key array.
 *    }
 *
 * @return object with request parameters.
 */
util.makeRequest = function(reqString) {
  var frag = util.parseFragment(reqString);
  var req = {
    // full path string
    path: frag.pathString,
    // full query string
    query: frag.queryString,
    /**
     * Get path or element in path.
     *
     * @param i optional path index.
     *
     * @return path or part of path if i provided.
     */
    getPath: function(i) {
      return (typeof(i) === 'undefined') ? frag.path : frag.path[i];
    },
    /**
     * Get query, values for a key, or value for a key index.
     *
     * @param k optional query key.
     * @param i optional query key index.
     *
     * @return query, values for a key, or value for a key index.
     */
    getQuery: function(k, i) {
      var rval;
      if(typeof(k) === 'undefined') {
        rval = frag.query;
      } else {
        rval = frag.query[k];
        if(rval && typeof(i) !== 'undefined') {
           rval = rval[i];
        }
      }
      return rval;
    },
    getQueryLast: function(k, _default) {
      var rval;
      var vals = req.getQuery(k);
      if(vals) {
        rval = vals[vals.length - 1];
      } else {
        rval = _default;
      }
      return rval;
    }
  };
  return req;
};

/**
 * Makes a URI out of a path, an object with query parameters, and a
 * fragment. Uses jQuery.param() internally for query string creation.
 * If the path is an array, it will be joined with '/'.
 *
 * @param path string path or array of strings.
 * @param query object with query parameters. (optional)
 * @param fragment fragment string. (optional)
 *
 * @return string object with request parameters.
 */
util.makeLink = function(path, query, fragment) {
  // join path parts if needed
  path = jQuery.isArray(path) ? path.join('/') : path;

  var qstr = jQuery.param(query || {});
  fragment = fragment || '';
  return path +
    ((qstr.length > 0) ? ('?' + qstr) : '') +
    ((fragment.length > 0) ? ('#' + fragment) : '');
};

/**
 * Check if an object is empty.
 *
 * Taken from:
 * http://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object-from-json/679937#679937
 *
 * @param object the object to check.
 */
util.isEmpty = function(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

/**
 * Format with simple printf-style interpolation.
 *
 * %%: literal '%'
 * %s,%o: convert next argument into a string.
 *
 * @param format the string to format.
 * @param ... arguments to interpolate into the format string.
 */
util.format = function(format) {
  var re = /%./g;
  // current match
  var match;
  // current part
  var part;
  // current arg index
  var argi = 0;
  // collected parts to recombine later
  var parts = [];
  // last index found
  var last = 0;
  // loop while matches remain
  while((match = re.exec(format))) {
    part = format.substring(last, re.lastIndex - 2);
    // don't add empty strings (ie, parts between %s%s)
    if(part.length > 0) {
      parts.push(part);
    }
    last = re.lastIndex;
    // switch on % code
    var code = match[0][1];
    switch(code) {
    case 's':
    case 'o':
      // check if enough arguments were given
      if(argi < arguments.length) {
        parts.push(arguments[argi++ + 1]);
      } else {
        parts.push('<?>');
      }
      break;
    // FIXME: do proper formating for numbers, etc
    //case 'f':
    //case 'd':
    case '%':
      parts.push('%');
      break;
    default:
      parts.push('<%' + code + '?>');
    }
  }
  // add trailing part of format string
  parts.push(format.substring(last));
  return parts.join('');
};

/**
 * Formats a number.
 *
 * http://snipplr.com/view/5945/javascript-numberformat--ported-from-php/
 */
util.formatNumber = function(number, decimals, dec_point, thousands_sep) {
  // http://kevin.vanzonneveld.net
  // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +     bugfix by: Michael White (http://crestidg.com)
  // +     bugfix by: Benjamin Lupton
  // +     bugfix by: Allan Jensen (http://www.winternet.no)
  // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // *     example 1: number_format(1234.5678, 2, '.', '');
  // *     returns 1: 1234.57

  var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
  var d = dec_point === undefined ? ',' : dec_point;
  var t = thousands_sep === undefined ?
   '.' : thousands_sep, s = n < 0 ? '-' : '';
  var i = parseInt((n = Math.abs(+n || 0).toFixed(c)), 10) + '';
  var j = (i.length > 3) ? i.length % 3 : 0;
  return s + (j ? i.substr(0, j) + t : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
    (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
};

/**
 * Formats a byte size.
 *
 * http://snipplr.com/view/5949/format-humanize-file-byte-size-presentation-in-javascript/
 */
util.formatSize = function(size) {
  if(size >= 1073741824) {
    size = util.formatNumber(size / 1073741824, 2, '.', '') + ' GiB';
  } else if(size >= 1048576) {
    size = util.formatNumber(size / 1048576, 2, '.', '') + ' MiB';
  } else if(size >= 1024) {
    size = util.formatNumber(size / 1024, 0) + ' KiB';
  } else {
    size = util.formatNumber(size, 0) + ' bytes';
  }
  return size;
};

/**
 * Converts an IPv4 or IPv6 string representation into bytes (in network order).
 *
 * @param ip the IPv4 or IPv6 address to convert.
 *
 * @return the 4-byte IPv6 or 16-byte IPv6 address or null if the address can't
 *         be parsed.
 */
util.bytesFromIP = function(ip) {
  if(ip.indexOf('.') !== -1) {
    return util.bytesFromIPv4(ip);
  }
  if(ip.indexOf(':') !== -1) {
    return util.bytesFromIPv6(ip);
  }
  return null;
};

/**
 * Converts an IPv4 string representation into bytes (in network order).
 *
 * @param ip the IPv4 address to convert.
 *
 * @return the 4-byte address or null if the address can't be parsed.
 */
util.bytesFromIPv4 = function(ip) {
  ip = ip.split('.');
  if(ip.length !== 4) {
    return null;
  }
  var b = util.createBuffer();
  for(var i = 0; i < ip.length; ++i) {
    var num = parseInt(ip[i], 10);
    if(isNaN(num)) {
      return null;
    }
    b.putByte(num);
  }
  return b.getBytes();
};

/**
 * Converts an IPv6 string representation into bytes (in network order).
 *
 * @param ip the IPv6 address to convert.
 *
 * @return the 16-byte address or null if the address can't be parsed.
 */
util.bytesFromIPv6 = function(ip) {
  var blanks = 0;
  ip = ip.split(':').filter(function(e) {
    if(e.length === 0) ++blanks;
    return true;
  });
  var zeros = (8 - ip.length + blanks) * 2;
  var b = util.createBuffer();
  for(var i = 0; i < 8; ++i) {
    if(!ip[i] || ip[i].length === 0) {
      b.fillWithByte(0, zeros);
      zeros = 0;
      continue;
    }
    var bytes = util.hexToBytes(ip[i]);
    if(bytes.length < 2) {
      b.putByte(0);
    }
    b.putBytes(bytes);
  }
  return b.getBytes();
};

/**
 * Converts 4-bytes into an IPv4 string representation or 16-bytes into
 * an IPv6 string representation. The bytes must be in network order.
 *
 * @param bytes the bytes to convert.
 *
 * @return the IPv4 or IPv6 string representation if 4 or 16 bytes,
 *         respectively, are given, otherwise null.
 */
util.bytesToIP = function(bytes) {
  if(bytes.length === 4) {
    return util.bytesToIPv4(bytes);
  }
  if(bytes.length === 16) {
    return util.bytesToIPv6(bytes);
  }
  return null;
};

/**
 * Converts 4-bytes into an IPv4 string representation. The bytes must be
 * in network order.
 *
 * @param bytes the bytes to convert.
 *
 * @return the IPv4 string representation or null for an invalid # of bytes.
 */
util.bytesToIPv4 = function(bytes) {
  if(bytes.length !== 4) {
    return null;
  }
  var ip = [];
  for(var i = 0; i < bytes.length; ++i) {
    ip.push(bytes.charCodeAt(i));
  }
  return ip.join('.');
};

/**
 * Converts 16-bytes into an IPv16 string representation. The bytes must be
 * in network order.
 *
 * @param bytes the bytes to convert.
 *
 * @return the IPv16 string representation or null for an invalid # of bytes.
 */
util.bytesToIPv6 = function(bytes) {
  if(bytes.length !== 16) {
    return null;
  }
  var ip = [];
  var zeroGroups = [];
  var zeroMaxGroup = 0;
  for(var i = 0; i < bytes.length; i += 2) {
    var hex = util.bytesToHex(bytes[i] + bytes[i + 1]);
    // canonicalize zero representation
    while(hex[0] === '0' && hex !== '0') {
      hex = hex.substr(1);
    }
    if(hex === '0') {
      var last = zeroGroups[zeroGroups.length - 1];
      var idx = ip.length;
      if(!last || idx !== last.end + 1) {
        zeroGroups.push({start: idx, end: idx});
      } else {
        last.end = idx;
        if((last.end - last.start) >
          (zeroGroups[zeroMaxGroup].end - zeroGroups[zeroMaxGroup].start)) {
          zeroMaxGroup = zeroGroups.length - 1;
        }
      }
    }
    ip.push(hex);
  }
  if(zeroGroups.length > 0) {
    var group = zeroGroups[zeroMaxGroup];
    // only shorten group of length > 0
    if(group.end - group.start > 0) {
      ip.splice(group.start, group.end - group.start + 1, '');
      if(group.start === 0) {
        ip.unshift('');
      }
      if(group.end === 7) {
        ip.push('');
      }
    }
  }
  return ip.join(':');
};

/**
 * Estimates the number of processes that can be run concurrently. If
 * creating Web Workers, keep in mind that the main JavaScript process needs
 * its own core.
 *
 * @param options the options to use:
 *          update true to force an update (not use the cached value).
 * @param callback(err, max) called once the operation completes.
 */
util.estimateCores = function(options, callback) {
  if(typeof options === 'function') {
    callback = options;
    options = {};
  }
  options = options || {};
  if('cores' in util && !options.update) {
    return callback(null, util.cores);
  }
  if(typeof navigator !== 'undefined' &&
    'hardwareConcurrency' in navigator &&
    navigator.hardwareConcurrency > 0) {
    util.cores = navigator.hardwareConcurrency;
    return callback(null, util.cores);
  }
  if(typeof Worker === 'undefined') {
    // workers not available
    util.cores = 1;
    return callback(null, util.cores);
  }
  if(typeof Blob === 'undefined') {
    // can't estimate, default to 2
    util.cores = 2;
    return callback(null, util.cores);
  }

  // create worker concurrency estimation code as blob
  var blobUrl = URL.createObjectURL(new Blob(['(',
    function() {
      self.addEventListener('message', function(e) {
        // run worker for 4 ms
        var st = Date.now();
        var et = st + 4;
        while(Date.now() < et);
        self.postMessage({st: st, et: et});
      });
    }.toString(),
  ')()'], {type: 'application/javascript'}));

  // take 5 samples using 16 workers
  sample([], 5, 16);

  function sample(max, samples, numWorkers) {
    if(samples === 0) {
      // get overlap average
      var avg = Math.floor(max.reduce(function(avg, x) {
        return avg + x;
      }, 0) / max.length);
      util.cores = Math.max(1, avg);
      URL.revokeObjectURL(blobUrl);
      return callback(null, util.cores);
    }
    map(numWorkers, function(err, results) {
      max.push(reduce(numWorkers, results));
      sample(max, samples - 1, numWorkers);
    });
  }

  function map(numWorkers, callback) {
    var workers = [];
    var results = [];
    for(var i = 0; i < numWorkers; ++i) {
      var worker = new Worker(blobUrl);
      worker.addEventListener('message', function(e) {
        results.push(e.data);
        if(results.length === numWorkers) {
          for(var i = 0; i < numWorkers; ++i) {
            workers[i].terminate();
          }
          callback(null, results);
        }
      });
      workers.push(worker);
    }
    for(var i = 0; i < numWorkers; ++i) {
      workers[i].postMessage(i);
    }
  }

  function reduce(numWorkers, results) {
    // find overlapping time windows
    var overlaps = [];
    for(var n = 0; n < numWorkers; ++n) {
      var r1 = results[n];
      var overlap = overlaps[n] = [];
      for(var i = 0; i < numWorkers; ++i) {
        if(n === i) {
          continue;
        }
        var r2 = results[i];
        if((r1.st > r2.st && r1.st < r2.et) ||
          (r2.st > r1.st && r2.st < r1.et)) {
          overlap.push(i);
        }
      }
    }
    // get maximum overlaps ... don't include overlapping worker itself
    // as the main JS process was also being scheduled during the work and
    // would have to be subtracted from the estimate anyway
    return overlaps.reduce(function(max, overlap) {
      return Math.max(max, overlap.length);
    }, 0);
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362"), __webpack_require__("c8ba"), __webpack_require__("b639").Buffer))

/***/ }),

/***/ "b639":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("1fb5")
var ieee754 = __webpack_require__("9152")
var isArray = __webpack_require__("e3db")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "bc1c":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("1157"), __webpack_require__("4309") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {
return $.ui.keyCode = {
	BACKSPACE: 8,
	COMMA: 188,
	DELETE: 46,
	DOWN: 40,
	END: 35,
	ENTER: 13,
	ESCAPE: 27,
	HOME: 36,
	LEFT: 37,
	PAGE_DOWN: 34,
	PAGE_UP: 33,
	PERIOD: 190,
	RIGHT: 39,
	SPACE: 32,
	TAB: 9,
	UP: 38
};

} ) );


/***/ }),

/***/ "c027":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Menu
//>>group: Widgets
//>>description: Creates nestable menus.
//>>docs: http://api.jqueryui.com/menu/
//>>demos: http://jqueryui.com/menu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/menu.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__("1157"),
			__webpack_require__("bc1c"),
			__webpack_require__("25c8"),
			__webpack_require__("cb0d"),
			__webpack_require__("cba7"),
			__webpack_require__("4309"),
			__webpack_require__("3084")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

return $.widget( "ui.menu", {
	version: "1.12.1",
	defaultElement: "<ul>",
	delay: 300,
	options: {
		icons: {
			submenu: "ui-icon-caret-1-e"
		},
		items: "> *",
		menus: "ul",
		position: {
			my: "left top",
			at: "right top"
		},
		role: "menu",

		// Callbacks
		blur: null,
		focus: null,
		select: null
	},

	_create: function() {
		this.activeMenu = this.element;

		// Flag used to prevent firing of the click handler
		// as the event bubbles up through nested menus
		this.mouseHandled = false;
		this.element
			.uniqueId()
			.attr( {
				role: this.options.role,
				tabIndex: 0
			} );

		this._addClass( "ui-menu", "ui-widget ui-widget-content" );
		this._on( {

			// Prevent focus from sticking to links inside menu after clicking
			// them (focus should always stay on UL during navigation).
			"mousedown .ui-menu-item": function( event ) {
				event.preventDefault();
			},
			"click .ui-menu-item": function( event ) {
				var target = $( event.target );
				var active = $( $.ui.safeActiveElement( this.document[ 0 ] ) );
				if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
					this.select( event );

					// Only set the mouseHandled flag if the event will bubble, see #9469.
					if ( !event.isPropagationStopped() ) {
						this.mouseHandled = true;
					}

					// Open submenu on click
					if ( target.has( ".ui-menu" ).length ) {
						this.expand( event );
					} else if ( !this.element.is( ":focus" ) &&
							active.closest( ".ui-menu" ).length ) {

						// Redirect focus to the menu
						this.element.trigger( "focus", [ true ] );

						// If the active item is on the top level, let it stay active.
						// Otherwise, blur the active item since it is no longer visible.
						if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
							clearTimeout( this.timer );
						}
					}
				}
			},
			"mouseenter .ui-menu-item": function( event ) {

				// Ignore mouse events while typeahead is active, see #10458.
				// Prevents focusing the wrong item when typeahead causes a scroll while the mouse
				// is over an item in the menu
				if ( this.previousFilter ) {
					return;
				}

				var actualTarget = $( event.target ).closest( ".ui-menu-item" ),
					target = $( event.currentTarget );

				// Ignore bubbled events on parent items, see #11641
				if ( actualTarget[ 0 ] !== target[ 0 ] ) {
					return;
				}

				// Remove ui-state-active class from siblings of the newly focused menu item
				// to avoid a jump caused by adjacent elements both having a class with a border
				this._removeClass( target.siblings().children( ".ui-state-active" ),
					null, "ui-state-active" );
				this.focus( event, target );
			},
			mouseleave: "collapseAll",
			"mouseleave .ui-menu": "collapseAll",
			focus: function( event, keepActiveItem ) {

				// If there's already an active item, keep it active
				// If not, activate the first item
				var item = this.active || this.element.find( this.options.items ).eq( 0 );

				if ( !keepActiveItem ) {
					this.focus( event, item );
				}
			},
			blur: function( event ) {
				this._delay( function() {
					var notContained = !$.contains(
						this.element[ 0 ],
						$.ui.safeActiveElement( this.document[ 0 ] )
					);
					if ( notContained ) {
						this.collapseAll( event );
					}
				} );
			},
			keydown: "_keydown"
		} );

		this.refresh();

		// Clicks outside of a menu collapse any open menus
		this._on( this.document, {
			click: function( event ) {
				if ( this._closeOnDocumentClick( event ) ) {
					this.collapseAll( event );
				}

				// Reset the mouseHandled flag
				this.mouseHandled = false;
			}
		} );
	},

	_destroy: function() {
		var items = this.element.find( ".ui-menu-item" )
				.removeAttr( "role aria-disabled" ),
			submenus = items.children( ".ui-menu-item-wrapper" )
				.removeUniqueId()
				.removeAttr( "tabIndex role aria-haspopup" );

		// Destroy (sub)menus
		this.element
			.removeAttr( "aria-activedescendant" )
			.find( ".ui-menu" ).addBack()
				.removeAttr( "role aria-labelledby aria-expanded aria-hidden aria-disabled " +
					"tabIndex" )
				.removeUniqueId()
				.show();

		submenus.children().each( function() {
			var elem = $( this );
			if ( elem.data( "ui-menu-submenu-caret" ) ) {
				elem.remove();
			}
		} );
	},

	_keydown: function( event ) {
		var match, prev, character, skip,
			preventDefault = true;

		switch ( event.keyCode ) {
		case $.ui.keyCode.PAGE_UP:
			this.previousPage( event );
			break;
		case $.ui.keyCode.PAGE_DOWN:
			this.nextPage( event );
			break;
		case $.ui.keyCode.HOME:
			this._move( "first", "first", event );
			break;
		case $.ui.keyCode.END:
			this._move( "last", "last", event );
			break;
		case $.ui.keyCode.UP:
			this.previous( event );
			break;
		case $.ui.keyCode.DOWN:
			this.next( event );
			break;
		case $.ui.keyCode.LEFT:
			this.collapse( event );
			break;
		case $.ui.keyCode.RIGHT:
			if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
				this.expand( event );
			}
			break;
		case $.ui.keyCode.ENTER:
		case $.ui.keyCode.SPACE:
			this._activate( event );
			break;
		case $.ui.keyCode.ESCAPE:
			this.collapse( event );
			break;
		default:
			preventDefault = false;
			prev = this.previousFilter || "";
			skip = false;

			// Support number pad values
			character = event.keyCode >= 96 && event.keyCode <= 105 ?
				( event.keyCode - 96 ).toString() : String.fromCharCode( event.keyCode );

			clearTimeout( this.filterTimer );

			if ( character === prev ) {
				skip = true;
			} else {
				character = prev + character;
			}

			match = this._filterMenuItems( character );
			match = skip && match.index( this.active.next() ) !== -1 ?
				this.active.nextAll( ".ui-menu-item" ) :
				match;

			// If no matches on the current filter, reset to the last character pressed
			// to move down the menu to the first item that starts with that character
			if ( !match.length ) {
				character = String.fromCharCode( event.keyCode );
				match = this._filterMenuItems( character );
			}

			if ( match.length ) {
				this.focus( event, match );
				this.previousFilter = character;
				this.filterTimer = this._delay( function() {
					delete this.previousFilter;
				}, 1000 );
			} else {
				delete this.previousFilter;
			}
		}

		if ( preventDefault ) {
			event.preventDefault();
		}
	},

	_activate: function( event ) {
		if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
			if ( this.active.children( "[aria-haspopup='true']" ).length ) {
				this.expand( event );
			} else {
				this.select( event );
			}
		}
	},

	refresh: function() {
		var menus, items, newSubmenus, newItems, newWrappers,
			that = this,
			icon = this.options.icons.submenu,
			submenus = this.element.find( this.options.menus );

		this._toggleClass( "ui-menu-icons", null, !!this.element.find( ".ui-icon" ).length );

		// Initialize nested menus
		newSubmenus = submenus.filter( ":not(.ui-menu)" )
			.hide()
			.attr( {
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			} )
			.each( function() {
				var menu = $( this ),
					item = menu.prev(),
					submenuCaret = $( "<span>" ).data( "ui-menu-submenu-caret", true );

				that._addClass( submenuCaret, "ui-menu-icon", "ui-icon " + icon );
				item
					.attr( "aria-haspopup", "true" )
					.prepend( submenuCaret );
				menu.attr( "aria-labelledby", item.attr( "id" ) );
			} );

		this._addClass( newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front" );

		menus = submenus.add( this.element );
		items = menus.find( this.options.items );

		// Initialize menu-items containing spaces and/or dashes only as dividers
		items.not( ".ui-menu-item" ).each( function() {
			var item = $( this );
			if ( that._isDivider( item ) ) {
				that._addClass( item, "ui-menu-divider", "ui-widget-content" );
			}
		} );

		// Don't refresh list items that are already adapted
		newItems = items.not( ".ui-menu-item, .ui-menu-divider" );
		newWrappers = newItems.children()
			.not( ".ui-menu" )
				.uniqueId()
				.attr( {
					tabIndex: -1,
					role: this._itemRole()
				} );
		this._addClass( newItems, "ui-menu-item" )
			._addClass( newWrappers, "ui-menu-item-wrapper" );

		// Add aria-disabled attribute to any disabled menu item
		items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

		// If the active item has been removed, blur the menu
		if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
			this.blur();
		}
	},

	_itemRole: function() {
		return {
			menu: "menuitem",
			listbox: "option"
		}[ this.options.role ];
	},

	_setOption: function( key, value ) {
		if ( key === "icons" ) {
			var icons = this.element.find( ".ui-menu-icon" );
			this._removeClass( icons, null, this.options.icons.submenu )
				._addClass( icons, null, value.submenu );
		}
		this._super( key, value );
	},

	_setOptionDisabled: function( value ) {
		this._super( value );

		this.element.attr( "aria-disabled", String( value ) );
		this._toggleClass( null, "ui-state-disabled", !!value );
	},

	focus: function( event, item ) {
		var nested, focused, activeParent;
		this.blur( event, event && event.type === "focus" );

		this._scrollIntoView( item );

		this.active = item.first();

		focused = this.active.children( ".ui-menu-item-wrapper" );
		this._addClass( focused, null, "ui-state-active" );

		// Only update aria-activedescendant if there's a role
		// otherwise we assume focus is managed elsewhere
		if ( this.options.role ) {
			this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
		}

		// Highlight active parent menu item, if any
		activeParent = this.active
			.parent()
				.closest( ".ui-menu-item" )
					.children( ".ui-menu-item-wrapper" );
		this._addClass( activeParent, null, "ui-state-active" );

		if ( event && event.type === "keydown" ) {
			this._close();
		} else {
			this.timer = this._delay( function() {
				this._close();
			}, this.delay );
		}

		nested = item.children( ".ui-menu" );
		if ( nested.length && event && ( /^mouse/.test( event.type ) ) ) {
			this._startOpening( nested );
		}
		this.activeMenu = item.parent();

		this._trigger( "focus", event, { item: item } );
	},

	_scrollIntoView: function( item ) {
		var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
		if ( this._hasScroll() ) {
			borderTop = parseFloat( $.css( this.activeMenu[ 0 ], "borderTopWidth" ) ) || 0;
			paddingTop = parseFloat( $.css( this.activeMenu[ 0 ], "paddingTop" ) ) || 0;
			offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
			scroll = this.activeMenu.scrollTop();
			elementHeight = this.activeMenu.height();
			itemHeight = item.outerHeight();

			if ( offset < 0 ) {
				this.activeMenu.scrollTop( scroll + offset );
			} else if ( offset + itemHeight > elementHeight ) {
				this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
			}
		}
	},

	blur: function( event, fromFocus ) {
		if ( !fromFocus ) {
			clearTimeout( this.timer );
		}

		if ( !this.active ) {
			return;
		}

		this._removeClass( this.active.children( ".ui-menu-item-wrapper" ),
			null, "ui-state-active" );

		this._trigger( "blur", event, { item: this.active } );
		this.active = null;
	},

	_startOpening: function( submenu ) {
		clearTimeout( this.timer );

		// Don't open if already open fixes a Firefox bug that caused a .5 pixel
		// shift in the submenu position when mousing over the caret icon
		if ( submenu.attr( "aria-hidden" ) !== "true" ) {
			return;
		}

		this.timer = this._delay( function() {
			this._close();
			this._open( submenu );
		}, this.delay );
	},

	_open: function( submenu ) {
		var position = $.extend( {
			of: this.active
		}, this.options.position );

		clearTimeout( this.timer );
		this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
			.hide()
			.attr( "aria-hidden", "true" );

		submenu
			.show()
			.removeAttr( "aria-hidden" )
			.attr( "aria-expanded", "true" )
			.position( position );
	},

	collapseAll: function( event, all ) {
		clearTimeout( this.timer );
		this.timer = this._delay( function() {

			// If we were passed an event, look for the submenu that contains the event
			var currentMenu = all ? this.element :
				$( event && event.target ).closest( this.element.find( ".ui-menu" ) );

			// If we found no valid submenu ancestor, use the main menu to close all
			// sub menus anyway
			if ( !currentMenu.length ) {
				currentMenu = this.element;
			}

			this._close( currentMenu );

			this.blur( event );

			// Work around active item staying active after menu is blurred
			this._removeClass( currentMenu.find( ".ui-state-active" ), null, "ui-state-active" );

			this.activeMenu = currentMenu;
		}, this.delay );
	},

	// With no arguments, closes the currently active menu - if nothing is active
	// it closes all menus.  If passed an argument, it will search for menus BELOW
	_close: function( startMenu ) {
		if ( !startMenu ) {
			startMenu = this.active ? this.active.parent() : this.element;
		}

		startMenu.find( ".ui-menu" )
			.hide()
			.attr( "aria-hidden", "true" )
			.attr( "aria-expanded", "false" );
	},

	_closeOnDocumentClick: function( event ) {
		return !$( event.target ).closest( ".ui-menu" ).length;
	},

	_isDivider: function( item ) {

		// Match hyphen, em dash, en dash
		return !/[^\-\u2014\u2013\s]/.test( item.text() );
	},

	collapse: function( event ) {
		var newItem = this.active &&
			this.active.parent().closest( ".ui-menu-item", this.element );
		if ( newItem && newItem.length ) {
			this._close();
			this.focus( event, newItem );
		}
	},

	expand: function( event ) {
		var newItem = this.active &&
			this.active
				.children( ".ui-menu " )
					.find( this.options.items )
						.first();

		if ( newItem && newItem.length ) {
			this._open( newItem.parent() );

			// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
			this._delay( function() {
				this.focus( event, newItem );
			} );
		}
	},

	next: function( event ) {
		this._move( "next", "first", event );
	},

	previous: function( event ) {
		this._move( "prev", "last", event );
	},

	isFirstItem: function() {
		return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
	},

	isLastItem: function() {
		return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
	},

	_move: function( direction, filter, event ) {
		var next;
		if ( this.active ) {
			if ( direction === "first" || direction === "last" ) {
				next = this.active
					[ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
					.eq( -1 );
			} else {
				next = this.active
					[ direction + "All" ]( ".ui-menu-item" )
					.eq( 0 );
			}
		}
		if ( !next || !next.length || !this.active ) {
			next = this.activeMenu.find( this.options.items )[ filter ]();
		}

		this.focus( event, next );
	},

	nextPage: function( event ) {
		var item, base, height;

		if ( !this.active ) {
			this.next( event );
			return;
		}
		if ( this.isLastItem() ) {
			return;
		}
		if ( this._hasScroll() ) {
			base = this.active.offset().top;
			height = this.element.height();
			this.active.nextAll( ".ui-menu-item" ).each( function() {
				item = $( this );
				return item.offset().top - base - height < 0;
			} );

			this.focus( event, item );
		} else {
			this.focus( event, this.activeMenu.find( this.options.items )
				[ !this.active ? "first" : "last" ]() );
		}
	},

	previousPage: function( event ) {
		var item, base, height;
		if ( !this.active ) {
			this.next( event );
			return;
		}
		if ( this.isFirstItem() ) {
			return;
		}
		if ( this._hasScroll() ) {
			base = this.active.offset().top;
			height = this.element.height();
			this.active.prevAll( ".ui-menu-item" ).each( function() {
				item = $( this );
				return item.offset().top - base + height > 0;
			} );

			this.focus( event, item );
		} else {
			this.focus( event, this.activeMenu.find( this.options.items ).first() );
		}
	},

	_hasScroll: function() {
		return this.element.outerHeight() < this.element.prop( "scrollHeight" );
	},

	select: function( event ) {

		// TODO: It should never be possible to not have an active item at this
		// point, but the tests don't trigger mouseenter before click.
		this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
		var ui = { item: this.active };
		if ( !this.active.has( ".ui-menu" ).length ) {
			this.collapseAll( event, true );
		}
		this._trigger( "select", event, ui );
	},

	_filterMenuItems: function( character ) {
		var escapedCharacter = character.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" ),
			regex = new RegExp( "^" + escapedCharacter, "i" );

		return this.activeMenu
			.find( this.options.items )

				// Only match on items, not dividers or other content (#10571)
				.filter( ".ui-menu-item" )
					.filter( function() {
						return regex.test(
							$.trim( $( this ).children( ".ui-menu-item-wrapper" ).text() ) );
					} );
	}
} );

} ) );


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c92f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const types = __webpack_require__("68fa");

const api = {};
module.exports = api;

/**
 * Returns true if the given value is a subject with properties.
 *
 * @param v the value to check.
 *
 * @return true if the value is a subject with properties, false if not.
 */
api.isSubject = v => {
  // Note: A value is a subject if all of these hold true:
  // 1. It is an Object.
  // 2. It is not a @value, @set, or @list.
  // 3. It has more than 1 key OR any existing key is not @id.
  if(types.isObject(v) &&
    !(('@value' in v) || ('@set' in v) || ('@list' in v))) {
    const keyCount = Object.keys(v).length;
    return (keyCount > 1 || !('@id' in v));
  }
  return false;
};

/**
 * Returns true if the given value is a subject reference.
 *
 * @param v the value to check.
 *
 * @return true if the value is a subject reference, false if not.
 */
api.isSubjectReference = v =>
  // Note: A value is a subject reference if all of these hold true:
  // 1. It is an Object.
  // 2. It has a single key: @id.
  (types.isObject(v) && Object.keys(v).length === 1 && ('@id' in v));

/**
 * Returns true if the given value is a @value.
 *
 * @param v the value to check.
 *
 * @return true if the value is a @value, false if not.
 */
api.isValue = v =>
  // Note: A value is a @value if all of these hold true:
  // 1. It is an Object.
  // 2. It has the @value property.
  types.isObject(v) && ('@value' in v);

/**
 * Returns true if the given value is a @list.
 *
 * @param v the value to check.
 *
 * @return true if the value is a @list, false if not.
 */
api.isList = v =>
  // Note: A value is a @list if all of these hold true:
  // 1. It is an Object.
  // 2. It has the @list property.
  types.isObject(v) && ('@list' in v);

/**
 * Returns true if the given value is a @graph.
 *
 * @return true if the value is a @graph, false if not.
 */
api.isGraph = v => {
  // Note: A value is a graph if all of these hold true:
  // 1. It is an object.
  // 2. It has an `@graph` key.
  // 3. It may have '@id' or '@index'
  return types.isObject(v) &&
    '@graph' in v &&
    Object.keys(v)
      .filter(key => key !== '@id' && key !== '@index').length === 1;
};

/**
 * Returns true if the given value is a simple @graph.
 *
 * @return true if the value is a simple @graph, false if not.
 */
api.isSimpleGraph = v => {
  // Note: A value is a simple graph if all of these hold true:
  // 1. It is an object.
  // 2. It has an `@graph` key.
  // 3. It has only 1 key or 2 keys where one of them is `@index`.
  return api.isGraph(v) && !('@id' in v);
};

/**
 * Returns true if the given value is a blank node.
 *
 * @param v the value to check.
 *
 * @return true if the value is a blank node, false if not.
 */
api.isBlankNode = v => {
  // Note: A value is a blank node if all of these hold true:
  // 1. It is an Object.
  // 2. If it has an @id key its value begins with '_:'.
  // 3. It has no keys OR is not a @value, @set, or @list.
  if(types.isObject(v)) {
    if('@id' in v) {
      return (v['@id'].indexOf('_:') === 0);
    }
    return (Object.keys(v).length === 0 ||
      !(('@value' in v) || ('@set' in v) || ('@list' in v)));
  }
  return false;
};


/***/ }),

/***/ "cb0d":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("1157"), __webpack_require__("4309") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {
return $.ui.safeActiveElement = function( document ) {
	var activeElement;

	// Support: IE 9 only
	// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
	try {
		activeElement = document.activeElement;
	} catch ( error ) {
		activeElement = document.body;
	}

	// Support: IE 9 - 11 only
	// IE may return null instead of an element
	// Interestingly, this only seems to occur when NOT in an iframe
	if ( !activeElement ) {
		activeElement = document.body;
	}

	// Support: IE 11 only
	// IE11 returns a seemingly empty object in some cases when accessing
	// document.activeElement from an <iframe>
	if ( !activeElement.nodeName ) {
		activeElement = document.body;
	}

	return activeElement;
};

} ) );


/***/ }),

/***/ "cba7":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("1157"), __webpack_require__("4309") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {

return $.fn.extend( {
	uniqueId: ( function() {
		var uuid = 0;

		return function() {
			return this.each( function() {
				if ( !this.id ) {
					this.id = "ui-id-" + ( ++uuid );
				}
			} );
		};
	} )(),

	removeUniqueId: function() {
		return this.each( function() {
			if ( /^ui-id-\d+$/.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		} );
	}
} );

} ) );


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const util = __webpack_require__("89ae");
const ActiveContextCache = __webpack_require__("e781");
const JsonLdError = __webpack_require__("5950");

const {
  isArray: _isArray,
  isObject: _isObject,
  isString: _isString,
  isUndefined: _isUndefined
} = __webpack_require__("68fa");

const {
  isAbsolute: _isAbsoluteIri,
  isRelative: _isRelativeIri,
  prependBase,
  parse: parseUrl
} = __webpack_require__("ddd7");

const {
  asArray: _asArray,
  compareShortestLeast: _compareShortestLeast
} = __webpack_require__("89ae");

const MAX_CONTEXT_URLS = 10;

const INITIAL_CONTEXT_CACHE = new Map();
const INITIAL_CONTEXT_CACHE_MAX_SIZE = 10000;

const api = {};
module.exports = api;

api.cache = new ActiveContextCache();

/**
 * Processes a local context and returns a new active context.
 *
 * @param activeCtx the current active context.
 * @param localCtx the local context to process.
 * @param options the context processing options.
 * @param isPropertyTermScopedContext `true` if `localCtx` is a scoped context
 *   from a property term.
 * @param isTypeScopedContext `true` if `localCtx` is a scoped context
 *   from a type.
 *
 * @return the new active context.
 */
api.process = ({
  activeCtx, localCtx, options,
  isPropertyTermScopedContext = false,
  isTypeScopedContext = false
}) => {
  // normalize local context to an array of @context objects
  if(_isObject(localCtx) && '@context' in localCtx &&
    _isArray(localCtx['@context'])) {
    localCtx = localCtx['@context'];
  }
  const ctxs = _asArray(localCtx);

  // no contexts in array, return current active context w/o changes
  if(ctxs.length === 0) {
    return activeCtx;
  }

  // track the previous context
  const previousContext = activeCtx.previousContext || activeCtx;

  // if context is property scoped and there's a previous context, amend it,
  // not the current one
  if(isPropertyTermScopedContext && activeCtx.previousContext) {
    // TODO: consider optimizing to a shallow copy
    activeCtx = activeCtx.clone();
    activeCtx.isPropertyTermScoped = true;
    activeCtx.previousContext = api.process({
      activeCtx: activeCtx.previousContext,
      localCtx: ctxs,
      options,
      isPropertyTermScopedContext
    });
    return activeCtx;
  }

  // process each context in order, update active context
  // on each iteration to ensure proper caching
  let rval = activeCtx;
  for(let i = 0; i < ctxs.length; ++i) {
    let ctx = ctxs[i];

    // update active context to one computed from last iteration
    activeCtx = rval;

    // reset to initial context
    if(ctx === null) {
      // We can't nullify if there are protected terms and we're
      // not processing a property term scoped context
      if(!isPropertyTermScopedContext &&
        Object.keys(activeCtx.protected).length !== 0) {
        const protectedMode = (options && options.protectedMode) || 'error';
        if(protectedMode === 'error') {
          throw new JsonLdError(
            'Tried to nullify a context with protected terms outside of ' +
            'a term definition.',
            'jsonld.SyntaxError',
            {code: 'invalid context nullification'});
        } else if(protectedMode === 'warn') {
          // FIXME: remove logging and use a handler
          console.warn('WARNING: invalid context nullification');
          const oldActiveCtx = activeCtx;
          // copy all protected term definitions to fresh initial context
          rval = activeCtx = api.getInitialContext(options).clone();
          for(const [term, _protected] of
            Object.entries(oldActiveCtx.protected)) {
            if(_protected) {
              activeCtx.mappings[term] =
                util.clone(oldActiveCtx.mappings[term]);
            }
          }
          activeCtx.protected = util.clone(oldActiveCtx.protected);

          // cache result
          if(api.cache) {
            api.cache.set(oldActiveCtx, ctx, rval);
          }

          continue;
        }
        throw new JsonLdError(
          'Invalid protectedMode.',
          'jsonld.SyntaxError',
          {code: 'invalid protected mode', context: localCtx, protectedMode});
      }
      rval = activeCtx = api.getInitialContext(options).clone();
      // if context is type-scoped, ensure previous context has been set
      if(isTypeScopedContext) {
        rval.previousContext = previousContext.clone();
      }
      continue;
    }

    // get context from cache if available
    if(api.cache) {
      const cached = api.cache.get(activeCtx, ctx);
      if(cached) {
        rval = activeCtx = cached;
        continue;
      }
    }

    // dereference @context key if present
    if(_isObject(ctx) && '@context' in ctx) {
      ctx = ctx['@context'];
    }

    // context must be an object by now, all URLs retrieved before this call
    if(!_isObject(ctx)) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; @context must be an object.',
        'jsonld.SyntaxError', {code: 'invalid local context', context: ctx});
    }

    // TODO: there is likely a `preivousContext` cloning optimization that
    // could be applied here (no need to copy it under certain conditions)

    // clone context before updating it
    rval = rval.clone();

    // define context mappings for keys in local context
    const defined = new Map();

    // handle @version
    if('@version' in ctx) {
      if(ctx['@version'] !== 1.1) {
        throw new JsonLdError(
          'Unsupported JSON-LD version: ' + ctx['@version'],
          'jsonld.UnsupportedVersion',
          {code: 'invalid @version value', context: ctx});
      }
      if(activeCtx.processingMode &&
        activeCtx.processingMode === 'json-ld-1.0') {
        throw new JsonLdError(
          '@version: ' + ctx['@version'] + ' not compatible with ' +
          activeCtx.processingMode,
          'jsonld.ProcessingModeConflict',
          {code: 'processing mode conflict', context: ctx});
      }
      rval.processingMode = 'json-ld-1.1';
      rval['@version'] = ctx['@version'];
      defined.set('@version', true);
    }

    // if not set explicitly, set processingMode to "json-ld-1.0"
    rval.processingMode =
      rval.processingMode || activeCtx.processingMode || 'json-ld-1.0';

    // handle @base
    if('@base' in ctx) {
      let base = ctx['@base'];

      if(base === null) {
        // no action
      } else if(_isAbsoluteIri(base)) {
        base = parseUrl(base);
      } else if(_isRelativeIri(base)) {
        base = parseUrl(prependBase(activeCtx['@base'].href, base));
      } else {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; the value of "@base" in a ' +
          '@context must be an absolute IRI, a relative IRI, or null.',
          'jsonld.SyntaxError', {code: 'invalid base IRI', context: ctx});
      }

      rval['@base'] = base;
      defined.set('@base', true);
    }

    // handle @vocab
    if('@vocab' in ctx) {
      const value = ctx['@vocab'];
      if(value === null) {
        delete rval['@vocab'];
      } else if(!_isString(value)) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; the value of "@vocab" in a ' +
          '@context must be a string or null.',
          'jsonld.SyntaxError', {code: 'invalid vocab mapping', context: ctx});
      } else if(!_isAbsoluteIri(value)) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; the value of "@vocab" in a ' +
          '@context must be an absolute IRI.',
          'jsonld.SyntaxError', {code: 'invalid vocab mapping', context: ctx});
      } else {
        rval['@vocab'] = value;
      }
      defined.set('@vocab', true);
    }

    // handle @language
    if('@language' in ctx) {
      const value = ctx['@language'];
      if(value === null) {
        delete rval['@language'];
      } else if(!_isString(value)) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; the value of "@language" in a ' +
          '@context must be a string or null.',
          'jsonld.SyntaxError',
          {code: 'invalid default language', context: ctx});
      } else {
        rval['@language'] = value.toLowerCase();
      }
      defined.set('@language', true);
    }

    // handle @protected; determine whether this sub-context is declaring
    // all its terms to be "protected" (exceptions can be made on a
    // per-definition basis)
    defined.set('@protected', ctx['@protected'] || false);

    // process all other keys
    for(const key in ctx) {
      api.createTermDefinition(
        rval, ctx, key, defined, options,
        isPropertyTermScopedContext);
    }

    // if context is type-scoped, ensure previous context has been set
    if(isTypeScopedContext && !rval.previousContext) {
      rval.previousContext = previousContext.clone();
    }

    // cache result
    if(api.cache) {
      api.cache.set(activeCtx, ctx, rval);
    }
  }

  return rval;
};

/**
 * Creates a term definition during context processing.
 *
 * @param activeCtx the current active context.
 * @param localCtx the local context being processed.
 * @param term the term in the local context to define the mapping for.
 * @param defined a map of defining/defined keys to detect cycles and prevent
 *          double definitions.
 * @param {Object} [options] - creation options.
 * @param {string} [options.protectedMode="error"] - "error" to throw error
 *   on `@protected` constraint violation, "warn" to allow violations and
 *   signal a warning.
 * @param isPropertyTermScopedContext `true` if `localCtx` is a scoped context
 *   from a property term.
 */
api.createTermDefinition = (
  activeCtx, localCtx, term, defined, options,
  isPropertyTermScopedContext = false) => {
  if(defined.has(term)) {
    // term already defined
    if(defined.get(term)) {
      return;
    }
    // cycle detected
    throw new JsonLdError(
      'Cyclical context definition detected.',
      'jsonld.CyclicalContext',
      {code: 'cyclic IRI mapping', context: localCtx, term});
  }

  // now defining term
  defined.set(term, false);

  if(api.isKeyword(term)) {
    throw new JsonLdError(
      'Invalid JSON-LD syntax; keywords cannot be overridden.',
      'jsonld.SyntaxError',
      {code: 'keyword redefinition', context: localCtx, term});
  }

  if(term === '') {
    throw new JsonLdError(
      'Invalid JSON-LD syntax; a term cannot be an empty string.',
      'jsonld.SyntaxError',
      {code: 'invalid term definition', context: localCtx});
  }

  // keep reference to previous mapping for potential `@protected` check
  const previousMapping = activeCtx.mappings.get(term);

  // remove old mapping
  if(activeCtx.mappings.has(term)) {
    activeCtx.mappings.delete(term);
  }

  // get context term value
  let value;
  if(localCtx.hasOwnProperty(term)) {
    value = localCtx[term];
  }

  // clear context entry
  if(value === null || (_isObject(value) && value['@id'] === null)) {
    activeCtx.mappings.set(term, null);
    defined.set(term, true);
    return;
  }

  // convert short-hand value to object w/@id
  let simpleTerm = false;
  if(_isString(value)) {
    simpleTerm = true;
    value = {'@id': value};
  }

  if(!_isObject(value)) {
    throw new JsonLdError(
      'Invalid JSON-LD syntax; @context term values must be ' +
      'strings or objects.',
      'jsonld.SyntaxError',
      {code: 'invalid term definition', context: localCtx});
  }

  // create new mapping
  const mapping = {};
  activeCtx.mappings.set(term, mapping);
  mapping.reverse = false;

  // make sure term definition only has expected keywords
  const validKeys = ['@container', '@id', '@language', '@reverse', '@type'];

  // JSON-LD 1.1 support
  if(api.processingMode(activeCtx, 1.1)) {
    validKeys.push('@context', '@nest', '@prefix', '@protected');
  }

  for(const kw in value) {
    if(!validKeys.includes(kw)) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; a term definition must not contain ' + kw,
        'jsonld.SyntaxError',
        {code: 'invalid term definition', context: localCtx});
    }
  }

  // always compute whether term has a colon as an optimization for
  // _compactIri
  const colon = term.indexOf(':');
  mapping._termHasColon = (colon !== -1);

  if('@reverse' in value) {
    if('@id' in value) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; a @reverse term definition must not ' +
        'contain @id.', 'jsonld.SyntaxError',
        {code: 'invalid reverse property', context: localCtx});
    }
    if('@nest' in value) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; a @reverse term definition must not ' +
        'contain @nest.', 'jsonld.SyntaxError',
        {code: 'invalid reverse property', context: localCtx});
    }
    const reverse = value['@reverse'];
    if(!_isString(reverse)) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; a @context @reverse value must be a string.',
        'jsonld.SyntaxError', {code: 'invalid IRI mapping', context: localCtx});
    }

    // expand and add @id mapping
    const id = _expandIri(
      activeCtx, reverse, {vocab: true, base: false}, localCtx, defined,
      options);
    if(!_isAbsoluteIri(id)) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; a @context @reverse value must be an ' +
        'absolute IRI or a blank node identifier.',
        'jsonld.SyntaxError', {code: 'invalid IRI mapping', context: localCtx});
    }
    mapping['@id'] = id;
    mapping.reverse = true;
  } else if('@id' in value) {
    let id = value['@id'];
    if(!_isString(id)) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; a @context @id value must be an array ' +
        'of strings or a string.',
        'jsonld.SyntaxError', {code: 'invalid IRI mapping', context: localCtx});
    }
    if(id !== term) {
      // expand and add @id mapping
      id = _expandIri(
        activeCtx, id, {vocab: true, base: false}, localCtx, defined, options);
      if(!_isAbsoluteIri(id) && !api.isKeyword(id)) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; a @context @id value must be an ' +
          'absolute IRI, a blank node identifier, or a keyword.',
          'jsonld.SyntaxError',
          {code: 'invalid IRI mapping', context: localCtx});
      }
      mapping['@id'] = id;
      // indicate if this term may be used as a compact IRI prefix
      mapping._prefix = (!mapping._termHasColon &&
        id.match(/[:\/\?#\[\]@]$/) &&
        (simpleTerm || api.processingMode(activeCtx, 1.0)));
    }
  }

  if(!('@id' in mapping)) {
    // see if the term has a prefix
    if(mapping._termHasColon) {
      const prefix = term.substr(0, colon);
      if(localCtx.hasOwnProperty(prefix)) {
        // define parent prefix
        api.createTermDefinition(activeCtx, localCtx, prefix, defined, options);
      }

      if(activeCtx.mappings.has(prefix)) {
        // set @id based on prefix parent
        const suffix = term.substr(colon + 1);
        mapping['@id'] = activeCtx.mappings.get(prefix)['@id'] + suffix;
      } else {
        // term is an absolute IRI
        mapping['@id'] = term;
      }
    } else {
      // non-IRIs *must* define @ids if @vocab is not available
      if(!('@vocab' in activeCtx)) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; @context terms must define an @id.',
          'jsonld.SyntaxError',
          {code: 'invalid IRI mapping', context: localCtx, term});
      }
      // prepend vocab to term
      mapping['@id'] = activeCtx['@vocab'] + term;
    }
  }

  // Handle term protection
  if(value['@protected'] === true ||
    (defined.get('@protected') === true && value['@protected'] !== false)) {
    activeCtx.protected[term] = true;
    mapping.protected = true;
  }

  // IRI mapping now defined
  defined.set(term, true);

  if('@type' in value) {
    let type = value['@type'];
    if(!_isString(type)) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; an @context @type value must be a string.',
        'jsonld.SyntaxError',
        {code: 'invalid type mapping', context: localCtx});
    }

    if(type !== '@id' && type !== '@vocab' && type !== '@json') {
      // expand @type to full IRI
      type = _expandIri(
        activeCtx, type, {vocab: true, base: false}, localCtx, defined,
        options);
      if(!_isAbsoluteIri(type)) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; an @context @type value must be an ' +
          'absolute IRI.',
          'jsonld.SyntaxError',
          {code: 'invalid type mapping', context: localCtx});
      }
      if(type.indexOf('_:') === 0) {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; an @context @type value must be an IRI, ' +
          'not a blank node identifier.',
          'jsonld.SyntaxError',
          {code: 'invalid type mapping', context: localCtx});
      }
    }

    // add @type to mapping
    mapping['@type'] = type;
  }

  if('@container' in value) {
    // normalize container to an array form
    const container = _isString(value['@container']) ?
      [value['@container']] : (value['@container'] || []);
    const validContainers = ['@list', '@set', '@index', '@language'];
    let isValid = true;
    const hasSet = container.includes('@set');

    // JSON-LD 1.1 support
    if(api.processingMode(activeCtx, 1.1)) {
      validContainers.push('@graph', '@id', '@type');

      // check container length
      if(container.includes('@list')) {
        if(container.length !== 1) {
          throw new JsonLdError(
            'Invalid JSON-LD syntax; @context @container with @list must ' +
            'have no other values',
            'jsonld.SyntaxError',
            {code: 'invalid container mapping', context: localCtx});
        }
      } else if(container.includes('@graph')) {
        if(container.some(key =>
          key !== '@graph' && key !== '@id' && key !== '@index' &&
          key !== '@set')) {
          throw new JsonLdError(
            'Invalid JSON-LD syntax; @context @container with @graph must ' +
            'have no other values other than @id, @index, and @set',
            'jsonld.SyntaxError',
            {code: 'invalid container mapping', context: localCtx});
        }
      } else {
        // otherwise, container may also include @set
        isValid &= container.length <= (hasSet ? 2 : 1);
      }
    } else {
      // in JSON-LD 1.0, container must not be an array (it must be a string,
      // which is one of the validContainers)
      isValid &= !_isArray(value['@container']);

      // check container length
      isValid &= container.length <= 1;
    }

    // check against valid containers
    isValid &= container.every(c => validContainers.includes(c));

    // @set not allowed with @list
    isValid &= !(hasSet && container.includes('@list'));

    if(!isValid) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; @context @container value must be ' +
        'one of the following: ' + validContainers.join(', '),
        'jsonld.SyntaxError',
        {code: 'invalid container mapping', context: localCtx});
    }

    if(mapping.reverse &&
      !container.every(c => ['@index', '@set'].includes(c))) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; @context @container value for a @reverse ' +
        'type definition must be @index or @set.', 'jsonld.SyntaxError',
        {code: 'invalid reverse property', context: localCtx});
    }

    // add @container to mapping
    mapping['@container'] = container;
  }

  // scoped contexts
  if('@context' in value) {
    mapping['@context'] = value['@context'];
  }

  if('@language' in value && !('@type' in value)) {
    let language = value['@language'];
    if(language !== null && !_isString(language)) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; @context @language value must be ' +
        'a string or null.', 'jsonld.SyntaxError',
        {code: 'invalid language mapping', context: localCtx});
    }

    // add @language to mapping
    if(language !== null) {
      language = language.toLowerCase();
    }
    mapping['@language'] = language;
  }

  // term may be used as a prefix
  if('@prefix' in value) {
    if(mapping._termHasColon) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; @context @prefix used on a compact IRI term',
        'jsonld.SyntaxError',
        {code: 'invalid term definition', context: localCtx});
    }
    if(typeof value['@prefix'] === 'boolean') {
      mapping._prefix = value['@prefix'] === true;
    } else {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; @context value for @prefix must be boolean',
        'jsonld.SyntaxError',
        {code: 'invalid @prefix value', context: localCtx});
    }
  }

  if('@nest' in value) {
    const nest = value['@nest'];
    if(!_isString(nest) || (nest !== '@nest' && nest.indexOf('@') === 0)) {
      throw new JsonLdError(
        'Invalid JSON-LD syntax; @context @nest value must be ' +
        'a string which is not a keyword other than @nest.',
        'jsonld.SyntaxError',
        {code: 'invalid @nest value', context: localCtx});
    }
    mapping['@nest'] = nest;
  }

  // disallow aliasing @context and @preserve
  const id = mapping['@id'];
  if(id === '@context' || id === '@preserve') {
    throw new JsonLdError(
      'Invalid JSON-LD syntax; @context and @preserve cannot be aliased.',
      'jsonld.SyntaxError', {code: 'invalid keyword alias', context: localCtx});
  }

  // FIXME if(1.1) ... ?
  if(previousMapping && previousMapping.protected &&
    !isPropertyTermScopedContext) {
    // force new term to continue to be protected and see if the mappings would
    // be equal
    activeCtx.protected[term] = true;
    mapping.protected = true;
    if(!_deepCompare(previousMapping, mapping)) {
      const protectedMode = (options && options.protectedMode) || 'error';
      if(protectedMode === 'error') {
        throw new JsonLdError(
          'Invalid JSON-LD syntax; tried to redefine a protected term.',
          'jsonld.SyntaxError',
          {code: 'protected term redefinition', context: localCtx, term});
      } else if(protectedMode === 'warn') {
        // FIXME: remove logging and use a handler
        console.warn('WARNING: protected term redefinition', {term});
        return;
      }
      throw new JsonLdError(
        'Invalid protectedMode.',
        'jsonld.SyntaxError',
        {code: 'invalid protected mode', context: localCtx, term,
          protectedMode});
    }
  }
};

/**
 * Expands a string to a full IRI. The string may be a term, a prefix, a
 * relative IRI, or an absolute IRI. The associated absolute IRI will be
 * returned.
 *
 * @param activeCtx the current active context.
 * @param value the string to expand.
 * @param relativeTo options for how to resolve relative IRIs:
 *          base: true to resolve against the base IRI, false not to.
 *          vocab: true to concatenate after @vocab, false not to.
 * @param {Object} [options] - processing options.
 *
 * @return the expanded value.
 */
api.expandIri = (activeCtx, value, relativeTo, options) => {
  return _expandIri(activeCtx, value, relativeTo, undefined, undefined,
    options);
};

/**
 * Expands a string to a full IRI. The string may be a term, a prefix, a
 * relative IRI, or an absolute IRI. The associated absolute IRI will be
 * returned.
 *
 * @param activeCtx the current active context.
 * @param value the string to expand.
 * @param relativeTo options for how to resolve relative IRIs:
 *          base: true to resolve against the base IRI, false not to.
 *          vocab: true to concatenate after @vocab, false not to.
 * @param localCtx the local context being processed (only given if called
 *          during context processing).
 * @param defined a map for tracking cycles in context definitions (only given
 *          if called during context processing).
 * @param {Object} [options] - processing options.
 *
 * @return the expanded value.
 */
function _expandIri(activeCtx, value, relativeTo, localCtx, defined, options) {
  // already expanded
  if(value === null || !_isString(value) || api.isKeyword(value)) {
    return value;
  }

  // define term dependency if not defined
  if(localCtx && localCtx.hasOwnProperty(value) &&
    defined.get(value) !== true) {
    api.createTermDefinition(activeCtx, localCtx, value, defined, options);
  }

  // if context is from a property term scoped context composed with a
  // type-scoped context, then use previous context instead
  if(activeCtx.isPropertyTermScoped && activeCtx.previousContext) {
    activeCtx = activeCtx.previousContext;
  }

  relativeTo = relativeTo || {};
  if(relativeTo.vocab) {
    const mapping = activeCtx.mappings.get(value);

    // value is explicitly ignored with a null mapping
    if(mapping === null) {
      return null;
    }

    if(mapping) {
      // value is a term
      return mapping['@id'];
    }
  }

  // split value into prefix:suffix
  const colon = value.indexOf(':');
  if(colon !== -1) {
    const prefix = value.substr(0, colon);
    const suffix = value.substr(colon + 1);

    // do not expand blank nodes (prefix of '_') or already-absolute
    // IRIs (suffix of '//')
    if(prefix === '_' || suffix.indexOf('//') === 0) {
      return value;
    }

    // prefix dependency not defined, define it
    if(localCtx && localCtx.hasOwnProperty(prefix)) {
      api.createTermDefinition(activeCtx, localCtx, prefix, defined, options);
    }

    // use mapping if prefix is defined
    if(activeCtx.mappings.has(prefix)) {
      const mapping = activeCtx.mappings.get(prefix);
      return mapping['@id'] + suffix;
    }

    // already absolute IRI
    return value;
  }

  // prepend vocab
  if(relativeTo.vocab && '@vocab' in activeCtx) {
    return activeCtx['@vocab'] + value;
  }

  // prepend base
  if(relativeTo.base) {
    return prependBase(activeCtx['@base'], value);
  }

  return value;
}

/**
 * Gets the initial context.
 *
 * @param options the options to use:
 *          [base] the document base IRI.
 *
 * @return the initial context.
 */
api.getInitialContext = options => {
  const base = parseUrl(options.base || '');
  const key = JSON.stringify({base, processingMode: options.processingMode});
  const cached = INITIAL_CONTEXT_CACHE.get(key);
  if(cached) {
    return cached;
  }

  const initialContext = {
    '@base': base,
    processingMode: options.processingMode,
    mappings: new Map(),
    inverse: null,
    getInverse: _createInverseContext,
    clone: _cloneActiveContext,
    revertTypeScopedContext: _revertTypeScopedContext,
    protected: {}
  };
  // TODO: consider using LRU cache instead
  if(INITIAL_CONTEXT_CACHE.size === INITIAL_CONTEXT_CACHE_MAX_SIZE) {
    // clear whole cache -- assumes scenario where the cache fills means
    // the cache isn't being used very efficiently anyway
    INITIAL_CONTEXT_CACHE.clear();
  }
  INITIAL_CONTEXT_CACHE.set(key, initialContext);
  return initialContext;

  /**
   * Generates an inverse context for use in the compaction algorithm, if
   * not already generated for the given active context.
   *
   * @return the inverse context.
   */
  function _createInverseContext() {
    const activeCtx = this;

    // lazily create inverse
    if(activeCtx.inverse) {
      return activeCtx.inverse;
    }
    const inverse = activeCtx.inverse = {};

    // variables for building fast CURIE map
    const fastCurieMap = activeCtx.fastCurieMap = {};
    const irisToTerms = {};

    // handle default language
    const defaultLanguage = activeCtx['@language'] || '@none';

    // create term selections for each mapping in the context, ordered by
    // shortest and then lexicographically least
    const mappings = activeCtx.mappings;
    const terms = [...mappings.keys()].sort(_compareShortestLeast);
    for(const term of terms) {
      const mapping = mappings.get(term);
      if(mapping === null) {
        continue;
      }

      let container = mapping['@container'] || '@none';
      container = [].concat(container).sort().join('');

      // iterate over every IRI in the mapping
      const ids = _asArray(mapping['@id']);
      for(const iri of ids) {
        let entry = inverse[iri];
        const isKeyword = api.isKeyword(iri);

        if(!entry) {
          // initialize entry
          inverse[iri] = entry = {};

          if(!isKeyword && !mapping._termHasColon) {
            // init IRI to term map and fast CURIE prefixes
            irisToTerms[iri] = [term];
            const fastCurieEntry = {iri, terms: irisToTerms[iri]};
            if(iri[0] in fastCurieMap) {
              fastCurieMap[iri[0]].push(fastCurieEntry);
            } else {
              fastCurieMap[iri[0]] = [fastCurieEntry];
            }
          }
        } else if(!isKeyword && !mapping._termHasColon) {
          // add IRI to term match
          irisToTerms[iri].push(term);
        }

        // add new entry
        if(!entry[container]) {
          entry[container] = {
            '@language': {},
            '@type': {},
            '@any': {}
          };
        }
        entry = entry[container];
        _addPreferredTerm(term, entry['@any'], '@none');

        if(mapping.reverse) {
          // term is preferred for values using @reverse
          _addPreferredTerm(term, entry['@type'], '@reverse');
        } else if('@type' in mapping) {
          // term is preferred for values using specific type
          _addPreferredTerm(term, entry['@type'], mapping['@type']);
        } else if('@language' in mapping) {
          // term is preferred for values using specific language
          const language = mapping['@language'] || '@null';
          _addPreferredTerm(term, entry['@language'], language);
        } else {
          // term is preferred for values w/default language or no type and
          // no language
          // add an entry for the default language
          _addPreferredTerm(term, entry['@language'], defaultLanguage);

          // add entries for no type and no language
          _addPreferredTerm(term, entry['@type'], '@none');
          _addPreferredTerm(term, entry['@language'], '@none');
        }
      }
    }

    // build fast CURIE map
    for(const key in fastCurieMap) {
      _buildIriMap(fastCurieMap, key, 1);
    }

    return inverse;
  }

  /**
   * Runs a recursive algorithm to build a lookup map for quickly finding
   * potential CURIEs.
   *
   * @param iriMap the map to build.
   * @param key the current key in the map to work on.
   * @param idx the index into the IRI to compare.
   */
  function _buildIriMap(iriMap, key, idx) {
    const entries = iriMap[key];
    const next = iriMap[key] = {};

    let iri;
    let letter;
    for(const entry of entries) {
      iri = entry.iri;
      if(idx >= iri.length) {
        letter = '';
      } else {
        letter = iri[idx];
      }
      if(letter in next) {
        next[letter].push(entry);
      } else {
        next[letter] = [entry];
      }
    }

    for(const key in next) {
      if(key === '') {
        continue;
      }
      _buildIriMap(next, key, idx + 1);
    }
  }

  /**
   * Adds the term for the given entry if not already added.
   *
   * @param term the term to add.
   * @param entry the inverse context typeOrLanguage entry to add to.
   * @param typeOrLanguageValue the key in the entry to add to.
   */
  function _addPreferredTerm(term, entry, typeOrLanguageValue) {
    if(!entry.hasOwnProperty(typeOrLanguageValue)) {
      entry[typeOrLanguageValue] = term;
    }
  }

  /**
   * Clones an active context, creating a child active context.
   *
   * @return a clone (child) of the active context.
   */
  function _cloneActiveContext() {
    const child = {};
    child['@base'] = this['@base'];
    child.mappings = util.clone(this.mappings);
    child.clone = this.clone;
    child.inverse = null;
    child.getInverse = this.getInverse;
    child.protected = util.clone(this.protected);
    if(this.previousContext) {
      child.isPropertyTermScoped = this.previousContext.isPropertyTermScoped;
      child.previousContext = this.previousContext.clone();
    }
    child.revertTypeScopedContext = this.revertTypeScopedContext;
    if('@language' in this) {
      child['@language'] = this['@language'];
    }
    if('@vocab' in this) {
      child['@vocab'] = this['@vocab'];
    }
    return child;
  }

  /**
   * Reverts any type-scoped context in this active context to the previous
   * context.
   */
  function _revertTypeScopedContext() {
    if(!this.previousContext) {
      return this;
    }
    return this.previousContext.clone();
  }
};

/**
 * Gets the value for the given active context key and type, null if none is
 * set or undefined if none is set and type is '@context'.
 *
 * @param ctx the active context.
 * @param key the context key.
 * @param [type] the type of value to get (eg: '@id', '@type'), if not
 *          specified gets the entire entry for a key, null if not found.
 *
 * @return the value, null, or undefined.
 */
api.getContextValue = (ctx, key, type) => {
  // invalid key
  if(key === null) {
    if(type === '@context') {
      return undefined;
    }
    return null;
  }

  // get specific entry information
  if(ctx.mappings.has(key)) {
    const entry = ctx.mappings.get(key);

    if(_isUndefined(type)) {
      // return whole entry
      return entry;
    }
    if(entry.hasOwnProperty(type)) {
      // return entry value for type
      return entry[type];
    }
  }

  // get default language
  if(type === '@language' && ctx.hasOwnProperty(type)) {
    return ctx[type];
  }

  if(type === '@context') {
    return undefined;
  }
  return null;
};

/**
 * Retrieves external @context URLs using the given document loader. Every
 * instance of @context in the input that refers to a URL will be replaced
 * with the JSON @context found at that URL.
 *
 * @param input the JSON-LD input with possible contexts.
 * @param options the options to use:
 *          documentLoader(url, [callback(err, remoteDoc)]) the document loader.
 * @param callback(err, input) called once the operation completes.
 */
api.getAllContexts = async (input, options) => {
  return _retrieveContextUrls(input, options);
};

/**
 * Processing Mode check.
 *
 * @param activeCtx the current active context.
 * @param version the string or numeric version to check.
 *
 * @return boolean.
 */
api.processingMode = (activeCtx, version) => {
  if(version.toString() >= '1.1') {
    return activeCtx.processingMode &&
      activeCtx.processingMode >= 'json-ld-' + version.toString();
  } else {
    return !activeCtx.processingMode ||
      activeCtx.processingMode === 'json-ld-1.0';
  }
};

/**
 * Returns whether or not the given value is a keyword.
 *
 * @param v the value to check.
 *
 * @return true if the value is a keyword, false if not.
 */
api.isKeyword = v => {
  if(!_isString(v)) {
    return false;
  }
  switch(v) {
    case '@base':
    case '@container':
    case '@context':
    case '@default':
    case '@embed':
    case '@explicit':
    case '@graph':
    case '@id':
    case '@index':
    case '@json':
    case '@language':
    case '@list':
    case '@nest':
    case '@none':
    case '@omitDefault':
    case '@prefix':
    case '@preserve':
    case '@protected':
    case '@requireAll':
    case '@reverse':
    case '@set':
    case '@type':
    case '@value':
    case '@version':
    case '@vocab':
      return true;
  }
  return false;
};

async function _retrieveContextUrls(input, options) {
  const documentLoader = util.normalizeDocumentLoader(options.documentLoader);

  // retrieve all @context URLs in input
  await retrieve(input, new Set(), documentLoader);

  return input;

  // recursive function that will retrieve all @context URLs in documents
  async function retrieve(doc, cycles, documentLoader) {
    if(cycles.size > MAX_CONTEXT_URLS) {
      throw new JsonLdError(
        'Maximum number of @context URLs exceeded.',
        'jsonld.ContextUrlError',
        {code: 'loading remote context failed', max: MAX_CONTEXT_URLS});
    }

    // find all URLs in the given document
    const urls = new Map();
    _findContextUrls(doc, urls, false, options.base);
    if(urls.size === 0) {
      return;
    }

    // queue all unretrieved URLs
    const queue = [...urls.keys()].filter(u => urls.get(u) === false);

    // retrieve URLs in queue
    return Promise.all(queue.map(async url => {
      // check for context URL cycle
      if(cycles.has(url)) {
        throw new JsonLdError(
          'Cyclical @context URLs detected.',
          'jsonld.ContextUrlError',
          {code: 'recursive context inclusion', url});
      }

      const _cycles = new Set(cycles);
      _cycles.add(url);
      let remoteDoc;
      let ctx;

      try {
        remoteDoc = await documentLoader(url);
        ctx = remoteDoc.document || null;
        // parse string context as JSON
        if(_isString(ctx)) {
          ctx = JSON.parse(ctx);
        }
      } catch(e) {
        throw new JsonLdError(
          'Dereferencing a URL did not result in a valid JSON-LD object. ' +
          'Possible causes are an inaccessible URL perhaps due to ' +
          'a same-origin policy (ensure the server uses CORS if you are ' +
          'using client-side JavaScript), too many redirects, a ' +
          'non-JSON response, or more than one HTTP Link Header was ' +
          'provided for a remote context.',
          'jsonld.InvalidUrl',
          {code: 'loading remote context failed', url, cause: e});
      }

      // ensure ctx is an object
      if(!_isObject(ctx)) {
        throw new JsonLdError(
          'Dereferencing a URL did not result in a JSON object. The ' +
          'response was valid JSON, but it was not a JSON object.',
          'jsonld.InvalidUrl',
          {code: 'invalid remote context', url});
      }

      // use empty context if no @context key is present
      if(!('@context' in ctx)) {
        ctx = {'@context': {}};
      } else {
        ctx = {'@context': ctx['@context']};
      }

      // append @context URL to context if given
      if(remoteDoc.contextUrl) {
        if(!_isArray(ctx['@context'])) {
          ctx['@context'] = [ctx['@context']];
        }
        ctx['@context'].push(remoteDoc.contextUrl);
      }

      // recurse
      await retrieve(ctx, _cycles, documentLoader);

      // store retrieved context w/replaced @context URLs
      urls.set(url, ctx['@context']);

      // replace all @context URLs in the document
      _findContextUrls(doc, urls, true, options.base);
    }));
  }
}

/**
 * Finds all @context URLs in the given JSON-LD input.
 *
 * @param input the JSON-LD input.
 * @param urls a map of URLs (url => false/@contexts).
 * @param replace true to replace the URLs in the given input with the
 *           @contexts from the urls map, false not to.
 * @param base the base IRI to use to resolve relative IRIs.
 *
 * @return true if new URLs to retrieve were found, false if not.
 */
function _findContextUrls(input, urls, replace, base) {
  if(_isArray(input)) {
    for(const element of input) {
      _findContextUrls(element, urls, replace, base);
    }
    return;
  }

  if(!_isObject(input)) {
    // no @context URLs can be found in non-object input
    return;
  }

  // input is an object
  for(const key in input) {
    if(key !== '@context') {
      _findContextUrls(input[key], urls, replace, base);
      continue;
    }

    // get @context
    const ctx = input[key];

    if(_isArray(ctx)) {
      // array @context
      let length = ctx.length;
      for(let i = 0; i < length; ++i) {
        const _ctx = ctx[i];
        if(_isString(_ctx)) {
          const prepended = prependBase(base, _ctx);
          const resolved = urls.get(prepended);
          // replace w/@context if requested
          if(replace) {
            if(_isArray(resolved)) {
              // add flattened context
              Array.prototype.splice.apply(ctx, [i, 1].concat(resolved));
              i += resolved.length - 1;
              length = ctx.length;
            } else if(resolved !== false) {
              ctx[i] = resolved;
            }
          } else if(resolved === undefined) {
            // @context URL found
            urls.set(prepended, false);
          }
        } else {
          // look for scoped context
          for(const key in _ctx) {
            if(_isObject(_ctx[key])) {
              _findContextUrls(_ctx[key], urls, replace, base);
            }
          }
        }
      }
    } else if(_isString(ctx)) {
      // string @context
      const prepended = prependBase(base, ctx);
      const resolved = urls.get(prepended);
      // replace w/@context if requested
      if(replace) {
        if(resolved !== false) {
          input[key] = resolved;
        }
      } else if(resolved === undefined) {
        // @context URL found
        urls.set(prepended, false);
      }
    } else {
      // look for scoped context
      for(const key in ctx) {
        if(_isObject(ctx[key])) {
          _findContextUrls(ctx[key], urls, replace, base);
        }
      }
    }
  }
}

function _deepCompare(x1, x2) {
  // compare `null` or primitive types directly
  if((!(x1 && typeof x1 === 'object')) ||
     (!(x2 && typeof x2 === 'object'))) {
    return x1 === x2;
  }
  // x1 and x2 are objects (also potentially arrays)
  const x1Array = Array.isArray(x1);
  if(x1Array !== Array.isArray(x2)) {
    return false;
  }
  if(x1Array) {
    if(x1.length !== x2.length) {
      return false;
    }
    for(let i = 0; i < x1.length; ++i) {
      if(!_deepCompare(x1[i], x2[i])) {
        return false;
      }
    }
    return true;
  }
  // x1 and x2 are non-array objects
  const k1s = Object.keys(x1);
  const k2s = Object.keys(x2);
  if(k1s.length !== k2s.length) {
    return false;
  }
  for(const k1 in x1) {
    let v1 = x1[k1];
    let v2 = x2[k1];
    // special case: `@container` can be in any order
    if(k1 === '@container') {
      if(Array.isArray(v1) && Array.isArray(v2)) {
        v1 = v1.slice().sort();
        v2 = v2.slice().sort();
      }
    }
    if(!_deepCompare(v1, v2)) {
      return false;
    }
  }
  return true;
}


/***/ }),

/***/ "d327":
/***/ (function(module, exports) {

/**
 * Node.js module for Forge.
 *
 * @author Dave Longley
 *
 * Copyright 2011-2016 Digital Bazaar, Inc.
 */
module.exports = {
  // default options
  options: {
    usePureJavaScript: false
  }
};


/***/ }),

/***/ "db44":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */


const util = __webpack_require__("7164");

module.exports = class AsyncAlgorithm {
  constructor({
    maxCallStackDepth = 500,
    maxTotalCallStackDepth = 0xFFFFFFFF,
    // milliseconds
    timeSlice = 10
  } = {}) {
    this.schedule = {};
    this.schedule.MAX_DEPTH = maxCallStackDepth;
    this.schedule.MAX_TOTAL_DEPTH = maxTotalCallStackDepth;
    this.schedule.depth = 0;
    this.schedule.totalDepth = 0;
    this.schedule.timeSlice = timeSlice;
  }

  // do some work in a time slice, but in serial
  doWork(fn, callback) {
    const schedule = this.schedule;

    if(schedule.totalDepth >= schedule.MAX_TOTAL_DEPTH) {
      return callback(new Error(
        'Maximum total call stack depth exceeded; canonicalization aborting.'));
    }

    (function work() {
      if(schedule.depth === schedule.MAX_DEPTH) {
        // stack too deep, run on next tick
        schedule.depth = 0;
        schedule.running = false;
        return util.nextTick(work);
      }

      // if not yet running, force run
      const now = Date.now();
      if(!schedule.running) {
        schedule.start = Date.now();
        schedule.deadline = schedule.start + schedule.timeSlice;
      }

      // TODO: should also include an estimate of expectedWorkTime
      if(now < schedule.deadline) {
        schedule.running = true;
        schedule.depth++;
        schedule.totalDepth++;
        return fn((err, result) => {
          schedule.depth--;
          schedule.totalDepth--;
          callback(err, result);
        });
      }

      // not enough time left in this slice, run after letting browser
      // do some other things
      schedule.depth = 0;
      schedule.running = false;
      util.setImmediate(work);
    })();
  }

  // asynchronously loop
  forEach(iterable, fn, callback) {
    const self = this;
    let iterator;
    let idx = 0;
    let length;
    if(Array.isArray(iterable)) {
      length = iterable.length;
      iterator = () => {
        if(idx === length) {
          return false;
        }
        iterator.value = iterable[idx++];
        iterator.key = idx;
        return true;
      };
    } else {
      const keys = Object.keys(iterable);
      length = keys.length;
      iterator = () => {
        if(idx === length) {
          return false;
        }
        iterator.key = keys[idx++];
        iterator.value = iterable[iterator.key];
        return true;
      };
    }

    (function iterate(err) {
      if(err) {
        return callback(err);
      }
      if(iterator()) {
        return self.doWork(() => fn(iterator.value, iterator.key, iterate));
      }
      callback();
    })();
  }

  // asynchronous waterfall
  waterfall(fns, callback) {
    const self = this;
    self.forEach(
      fns, (fn, idx, callback) => self.doWork(fn, callback), callback);
  }

  // asynchronous while
  whilst(condition, fn, callback) {
    const self = this;
    (function loop(err) {
      if(err) {
        return callback(err);
      }
      if(!condition()) {
        return callback();
      }
      self.doWork(fn, loop);
    })();
  }
};


/***/ }),

/***/ "ddd7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const types = __webpack_require__("68fa");

const api = {};
module.exports = api;

// define URL parser
// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
// with local jsonld.js modifications
api.parsers = {
  simple: {
    // RFC 3986 basic parts
    keys: [
      'href', 'scheme', 'authority', 'path', 'query', 'fragment'
    ],
    /* eslint-disable-next-line max-len */
    regex: /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/
  },
  full: {
    keys: [
      'href', 'protocol', 'scheme', 'authority', 'auth', 'user', 'password',
      'hostname', 'port', 'path', 'directory', 'file', 'query', 'fragment'
    ],
    /* eslint-disable-next-line max-len */
    regex: /^(([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(?:(((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
  }
};
api.parse = (str, parser) => {
  const parsed = {};
  const o = api.parsers[parser || 'full'];
  const m = o.regex.exec(str);
  let i = o.keys.length;
  while(i--) {
    parsed[o.keys[i]] = (m[i] === undefined) ? null : m[i];
  }

  // remove default ports in found in URLs
  if((parsed.scheme === 'https' && parsed.port === '443') ||
    (parsed.scheme === 'http' && parsed.port === '80')) {
    parsed.href = parsed.href.replace(':' + parsed.port, '');
    parsed.authority = parsed.authority.replace(':' + parsed.port, '');
    parsed.port = null;
  }

  parsed.normalizedPath = api.removeDotSegments(parsed.path);
  return parsed;
};

/**
 * Prepends a base IRI to the given relative IRI.
 *
 * @param base the base IRI.
 * @param iri the relative IRI.
 *
 * @return the absolute IRI.
 */
api.prependBase = (base, iri) => {
  // skip IRI processing
  if(base === null) {
    return iri;
  }
  // already an absolute IRI
  if(iri.indexOf(':') !== -1) {
    return iri;
  }

  // parse base if it is a string
  if(types.isString(base)) {
    base = api.parse(base || '');
  }

  // parse given IRI
  const rel = api.parse(iri);

  // per RFC3986 5.2.2
  const transform = {
    protocol: base.protocol || ''
  };

  if(rel.authority !== null) {
    transform.authority = rel.authority;
    transform.path = rel.path;
    transform.query = rel.query;
  } else {
    transform.authority = base.authority;

    if(rel.path === '') {
      transform.path = base.path;
      if(rel.query !== null) {
        transform.query = rel.query;
      } else {
        transform.query = base.query;
      }
    } else {
      if(rel.path.indexOf('/') === 0) {
        // IRI represents an absolute path
        transform.path = rel.path;
      } else {
        // merge paths
        let path = base.path;

        // append relative path to the end of the last directory from base
        path = path.substr(0, path.lastIndexOf('/') + 1);
        if(path.length > 0 && path.substr(-1) !== '/') {
          path += '/';
        }
        path += rel.path;

        transform.path = path;
      }
      transform.query = rel.query;
    }
  }

  if(rel.path !== '') {
    // remove slashes and dots in path
    transform.path = api.removeDotSegments(transform.path);
  }

  // construct URL
  let rval = transform.protocol;
  if(transform.authority !== null) {
    rval += '//' + transform.authority;
  }
  rval += transform.path;
  if(transform.query !== null) {
    rval += '?' + transform.query;
  }
  if(rel.fragment !== null) {
    rval += '#' + rel.fragment;
  }

  // handle empty base
  if(rval === '') {
    rval = './';
  }

  return rval;
};

/**
 * Removes a base IRI from the given absolute IRI.
 *
 * @param base the base IRI.
 * @param iri the absolute IRI.
 *
 * @return the relative IRI if relative to base, otherwise the absolute IRI.
 */
api.removeBase = (base, iri) => {
  // skip IRI processing
  if(base === null) {
    return iri;
  }

  if(types.isString(base)) {
    base = api.parse(base || '');
  }

  // establish base root
  let root = '';
  if(base.href !== '') {
    root += (base.protocol || '') + '//' + (base.authority || '');
  } else if(iri.indexOf('//')) {
    // support network-path reference with empty base
    root += '//';
  }

  // IRI not relative to base
  if(iri.indexOf(root) !== 0) {
    return iri;
  }

  // remove root from IRI and parse remainder
  const rel = api.parse(iri.substr(root.length));

  // remove path segments that match (do not remove last segment unless there
  // is a hash or query)
  const baseSegments = base.normalizedPath.split('/');
  const iriSegments = rel.normalizedPath.split('/');
  const last = (rel.fragment || rel.query) ? 0 : 1;
  while(baseSegments.length > 0 && iriSegments.length > last) {
    if(baseSegments[0] !== iriSegments[0]) {
      break;
    }
    baseSegments.shift();
    iriSegments.shift();
  }

  // use '../' for each non-matching base segment
  let rval = '';
  if(baseSegments.length > 0) {
    // don't count the last segment (if it ends with '/' last path doesn't
    // count and if it doesn't end with '/' it isn't a path)
    baseSegments.pop();
    for(let i = 0; i < baseSegments.length; ++i) {
      rval += '../';
    }
  }

  // prepend remaining segments
  rval += iriSegments.join('/');

  // add query and hash
  if(rel.query !== null) {
    rval += '?' + rel.query;
  }
  if(rel.fragment !== null) {
    rval += '#' + rel.fragment;
  }

  // handle empty base
  if(rval === '') {
    rval = './';
  }

  return rval;
};

/**
 * Removes dot segments from a URL path.
 *
 * @param path the path to remove dot segments from.
 */
api.removeDotSegments = path => {
  // RFC 3986 5.2.4 (reworked)

  // empty path shortcut
  if(path.length === 0) {
    return '';
  }

  const input = path.split('/');
  const output = [];

  while(input.length > 0) {
    const next = input.shift();
    const done = input.length === 0;

    if(next === '.') {
      if(done) {
        // ensure output has trailing /
        output.push('');
      }
      continue;
    }

    if(next === '..') {
      output.pop();
      if(done) {
        // ensure output has trailing /
        output.push('');
      }
      continue;
    }

    output.push(next);
  }

  // ensure output has leading /
  if(output.length > 0 && output[0] !== '') {
    output.unshift('');
  }
  if(output.length === 1 && output[0] === '') {
    return '/';
  }

  return output.join('/');
};

// TODO: time better isAbsolute/isRelative checks using full regexes:
// http://jmrware.com/articles/2009/uri_regexp/URI_regex.html

// regex to check for absolute IRI (starting scheme and ':') or blank node IRI
const isAbsoluteRegex = /^([A-Za-z][A-Za-z0-9+-.]*|_):/;

/**
 * Returns true if the given value is an absolute IRI or blank node IRI, false
 * if not.
 * Note: This weak check only checks for a correct starting scheme.
 *
 * @param v the value to check.
 *
 * @return true if the value is an absolute IRI, false if not.
 */
api.isAbsolute = v => types.isString(v) && isAbsoluteRegex.test(v);

/**
 * Returns true if the given value is a relative IRI, false if not.
 * Note: this is a weak check.
 *
 * @param v the value to check.
 *
 * @return true if the value is a relative IRI, false if not.
 */
api.isRelative = v => types.isString(v);


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e3db":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "e6ed":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const {isKeyword} = __webpack_require__("d1e7");
const graphTypes = __webpack_require__("c92f");
const types = __webpack_require__("68fa");
const util = __webpack_require__("89ae");
const JsonLdError = __webpack_require__("5950");
const {
  createNodeMap: _createNodeMap,
  mergeNodeMapGraphs: _mergeNodeMapGraphs
} = __webpack_require__("796c");

const api = {};
module.exports = api;

/**
 * Performs JSON-LD `merged` framing.
 *
 * @param input the expanded JSON-LD to frame.
 * @param frame the expanded JSON-LD frame to use.
 * @param options the framing options.
 *
 * @return the framed output.
 */
api.frameMergedOrDefault = (input, frame, options) => {
  // create framing state
  const state = {
    options,
    graph: '@default',
    graphMap: {'@default': {}},
    graphStack: [],
    subjectStack: [],
    link: {},
    bnodeMap: {}
  };

  // produce a map of all graphs and name each bnode
  // FIXME: currently uses subjects from @merged graph only
  const issuer = new util.IdentifierIssuer('_:b');
  _createNodeMap(input, state.graphMap, '@default', issuer);
  if(options.merged) {
    state.graphMap['@merged'] = _mergeNodeMapGraphs(state.graphMap);
    state.graph = '@merged';
  }
  state.subjects = state.graphMap[state.graph];

  // frame the subjects
  const framed = [];
  api.frame(state, Object.keys(state.subjects).sort(), frame, framed);

  // If pruning blank nodes, find those to prune
  if(options.pruneBlankNodeIdentifiers) {
    // remove all blank nodes appearing only once, done in compaction
    options.bnodesToClear =
      Object.keys(state.bnodeMap).filter(id => state.bnodeMap[id].length === 1);
  }

  return framed;
};

/**
 * Frames subjects according to the given frame.
 *
 * @param state the current framing state.
 * @param subjects the subjects to filter.
 * @param frame the frame.
 * @param parent the parent subject or top-level array.
 * @param property the parent property, initialized to null.
 */
api.frame = (state, subjects, frame, parent, property = null) => {
  // validate the frame
  _validateFrame(frame);
  frame = frame[0];

  // get flags for current frame
  const options = state.options;
  const flags = {
    embed: _getFrameFlag(frame, options, 'embed'),
    explicit: _getFrameFlag(frame, options, 'explicit'),
    requireAll: _getFrameFlag(frame, options, 'requireAll')
  };

  // filter out subjects that match the frame
  const matches = _filterSubjects(state, subjects, frame, flags);

  // add matches to output
  const ids = Object.keys(matches).sort();
  for(const id of ids) {
    const subject = matches[id];

    if(flags.embed === '@link' && id in state.link) {
      // TODO: may want to also match an existing linked subject against
      // the current frame ... so different frames could produce different
      // subjects that are only shared in-memory when the frames are the same

      // add existing linked subject
      _addFrameOutput(parent, property, state.link[id]);
      continue;
    }

    /* Note: In order to treat each top-level match as a compartmentalized
    result, clear the unique embedded subjects map when the property is null,
    which only occurs at the top-level. */
    if(property === null) {
      state.uniqueEmbeds = {[state.graph]: {}};
    } else {
      state.uniqueEmbeds[state.graph] = state.uniqueEmbeds[state.graph] || {};
    }

    // start output for subject
    const output = {};
    output['@id'] = id;
    if(id.indexOf('_:') === 0) {
      util.addValue(state.bnodeMap, id, output, {propertyIsArray: true});
    }
    state.link[id] = output;

    // if embed is @never or if a circular reference would be created by an
    // embed, the subject cannot be embedded, just add the reference;
    // note that a circular reference won't occur when the embed flag is
    // `@link` as the above check will short-circuit before reaching this point
    if(flags.embed === '@never' ||
      _createsCircularReference(subject, state.graph, state.subjectStack)) {
      _addFrameOutput(parent, property, output);
      continue;
    }

    // if only the last match should be embedded
    if(flags.embed === '@last') {
      // remove any existing embed
      if(id in state.uniqueEmbeds[state.graph]) {
        _removeEmbed(state, id);
      }
      state.uniqueEmbeds[state.graph][id] =
        {parent, property};
    }

    // push matching subject onto stack to enable circular embed checks
    state.subjectStack.push({subject, graph: state.graph});

    // subject is also the name of a graph
    if(id in state.graphMap) {
      let recurse = false;
      let subframe = null;
      if(!('@graph' in frame)) {
        recurse = state.graph !== '@merged';
        subframe = {};
      } else {
        subframe = frame['@graph'][0];
        if(!types.isObject(subframe)) {
          subframe = {};
        }
        recurse = !(id === '@merged' || id === '@default');
      }

      if(recurse) {
        state.graphStack.push(state.graph);
        state.graph = id;
        // recurse into graph
        api.frame(
          state,
          Object.keys(state.graphMap[id]).sort(), [subframe], output, '@graph');
        state.graph = state.graphStack.pop;
      }
    }

    // iterate over subject properties
    for(const prop of Object.keys(subject).sort()) {
      // copy keywords to output
      if(isKeyword(prop)) {
        output[prop] = util.clone(subject[prop]);

        if(prop === '@type') {
          // count bnode values of @type
          for(const type of subject['@type']) {
            if(type.indexOf('_:') === 0) {
              util.addValue(
                state.bnodeMap, type, output, {propertyIsArray: true});
            }
          }
        }
        continue;
      }

      // explicit is on and property isn't in the frame, skip processing
      if(flags.explicit && !(prop in frame)) {
        continue;
      }

      // add objects
      for(let o of subject[prop]) {
        const subframe = (prop in frame ?
          frame[prop] : _createImplicitFrame(flags));

        // recurse into list
        if(graphTypes.isList(o)) {
          // add empty list
          const list = {'@list': []};
          _addFrameOutput(output, prop, list);

          // add list objects
          const src = o['@list'];
          for(const n in src) {
            o = src[n];
            if(graphTypes.isSubjectReference(o)) {
              const subframe = (prop in frame ?
                frame[prop][0]['@list'] : _createImplicitFrame(flags));
              // recurse into subject reference
              api.frame(state, [o['@id']], subframe, list, '@list');
            } else {
              // include other values automatically
              _addFrameOutput(list, '@list', util.clone(o));
            }
          }
          continue;
        }

        if(graphTypes.isSubjectReference(o)) {
          // recurse into subject reference
          api.frame(state, [o['@id']], subframe, output, prop);
        } else if(_valueMatch(subframe[0], o)) {
          // include other values, if they match
          _addFrameOutput(output, prop, util.clone(o));
        }
      }
    }

    // handle defaults
    for(const prop of Object.keys(frame).sort()) {
      // skip keywords
      if(isKeyword(prop)) {
        continue;
      }

      // if omit default is off, then include default values for properties
      // that appear in the next frame but are not in the matching subject
      const next = frame[prop][0] || {};
      const omitDefaultOn = _getFrameFlag(next, options, 'omitDefault');
      if(!omitDefaultOn && !(prop in output)) {
        let preserve = '@null';
        if('@default' in next) {
          preserve = util.clone(next['@default']);
        }
        if(!types.isArray(preserve)) {
          preserve = [preserve];
        }
        output[prop] = [{'@preserve': preserve}];
      }
    }

    // if embed reverse values by finding nodes having this subject as a value
    // of the associated property
    if('@reverse' in frame) {
      for(const reverseProp of Object.keys(frame['@reverse']).sort()) {
        const subframe = frame['@reverse'][reverseProp];
        for(const subject of Object.keys(state.subjects)) {
          const nodeValues =
            util.getValues(state.subjects[subject], reverseProp);
          if(nodeValues.some(v => v['@id'] === id)) {
            // node has property referencing this subject, recurse
            output['@reverse'] = output['@reverse'] || {};
            util.addValue(
              output['@reverse'], reverseProp, [], {propertyIsArray: true});
            api.frame(
              state, [subject], subframe, output['@reverse'][reverseProp],
              property);
          }
        }
      }
    }

    // add output to parent
    _addFrameOutput(parent, property, output);

    // pop matching subject from circular ref-checking stack
    state.subjectStack.pop();
  }
};

/**
 * Creates an implicit frame when recursing through subject matches. If
 * a frame doesn't have an explicit frame for a particular property, then
 * a wildcard child frame will be created that uses the same flags that the
 * parent frame used.
 *
 * @param flags the current framing flags.
 *
 * @return the implicit frame.
 */
function _createImplicitFrame(flags) {
  const frame = {};
  for(const key in flags) {
    if(flags[key] !== undefined) {
      frame['@' + key] = [flags[key]];
    }
  }
  return [frame];
}

/**
 * Checks the current subject stack to see if embedding the given subject
 * would cause a circular reference.
 *
 * @param subjectToEmbed the subject to embed.
 * @param graph the graph the subject to embed is in.
 * @param subjectStack the current stack of subjects.
 *
 * @return true if a circular reference would be created, false if not.
 */
function _createsCircularReference(subjectToEmbed, graph, subjectStack) {
  for(let i = subjectStack.length - 1; i >= 0; --i) {
    const subject = subjectStack[i];
    if(subject.graph === graph &&
      subject.subject['@id'] === subjectToEmbed['@id']) {
      return true;
    }
  }
  return false;
}

/**
 * Gets the frame flag value for the given flag name.
 *
 * @param frame the frame.
 * @param options the framing options.
 * @param name the flag name.
 *
 * @return the flag value.
 */
function _getFrameFlag(frame, options, name) {
  const flag = '@' + name;
  let rval = (flag in frame ? frame[flag][0] : options[name]);
  if(name === 'embed') {
    // default is "@last"
    // backwards-compatibility support for "embed" maps:
    // true => "@last"
    // false => "@never"
    if(rval === true) {
      rval = '@last';
    } else if(rval === false) {
      rval = '@never';
    } else if(rval !== '@always' && rval !== '@never' && rval !== '@link') {
      rval = '@last';
    }
  }
  return rval;
}

/**
 * Validates a JSON-LD frame, throwing an exception if the frame is invalid.
 *
 * @param frame the frame to validate.
 */
function _validateFrame(frame) {
  if(!types.isArray(frame) || frame.length !== 1 || !types.isObject(frame[0])) {
    throw new JsonLdError(
      'Invalid JSON-LD syntax; a JSON-LD frame must be a single object.',
      'jsonld.SyntaxError', {frame});
  }
}

/**
 * Returns a map of all of the subjects that match a parsed frame.
 *
 * @param state the current framing state.
 * @param subjects the set of subjects to filter.
 * @param frame the parsed frame.
 * @param flags the frame flags.
 *
 * @return all of the matched subjects.
 */
function _filterSubjects(state, subjects, frame, flags) {
  // filter subjects in @id order
  const rval = {};
  for(const id of subjects) {
    const subject = state.graphMap[state.graph][id];
    if(_filterSubject(state, subject, frame, flags)) {
      rval[id] = subject;
    }
  }
  return rval;
}

/**
 * Returns true if the given subject matches the given frame.
 *
 * Matches either based on explicit type inclusion where the node has any
 * type listed in the frame. If the frame has empty types defined matches
 * nodes not having a @type. If the frame has a type of {} defined matches
 * nodes having any type defined.
 *
 * Otherwise, does duck typing, where the node must have all of the
 * properties defined in the frame.
 *
 * @param state the current framing state.
 * @param subject the subject to check.
 * @param frame the frame to check.
 * @param flags the frame flags.
 *
 * @return true if the subject matches, false if not.
 */
function _filterSubject(state, subject, frame, flags) {
  // check ducktype
  let wildcard = true;
  let matchesSome = false;

  for(const key in frame) {
    let matchThis = false;
    const nodeValues = util.getValues(subject, key);
    const isEmpty = util.getValues(frame, key).length === 0;

    if(isKeyword(key)) {
      // skip non-@id and non-@type
      if(key !== '@id' && key !== '@type') {
        continue;
      }
      wildcard = false;

      // check @id for a specific @id value
      if(key === '@id') {
        // if @id is not a wildcard and is not empty, then match or not on
        // specific value
        if(frame['@id'].length >= 0 && !types.isEmptyObject(frame['@id'][0])) {
          return frame['@id'].includes(nodeValues[0]);
        }
        matchThis = true;
        continue;
      }

      // check @type (object value means 'any' type, fall through to ducktyping)
      if('@type' in frame) {
        if(isEmpty) {
          if(nodeValues.length > 0) {
            // don't match on no @type
            return false;
          }
          matchThis = true;
        } else if(frame['@type'].length === 1 &&
          types.isEmptyObject(frame['@type'][0])) {
          // match on wildcard @type
          matchThis = nodeValues.length > 0;
        } else {
          // match on a specific @type
          for(const type of frame['@type']) {
            if(nodeValues.some(tt => tt === type)) {
              return true;
            }
          }
          return false;
        }
      }
    }

    // Forc a copy of this frame entry so it can be manipulated
    const thisFrame = util.getValues(frame, key)[0];
    let hasDefault = false;
    if(thisFrame) {
      _validateFrame([thisFrame]);
      hasDefault = '@default' in thisFrame;
    }

    // no longer a wildcard pattern if frame has any non-keyword properties
    wildcard = false;

    // skip, but allow match if node has no value for property, and frame has a
    // default value
    if(nodeValues.length === 0 && hasDefault) {
      continue;
    }

    // if frame value is empty, don't match if subject has any value
    if(nodeValues.length > 0 && isEmpty) {
      return false;
    }

    if(thisFrame === undefined) {
      // node does not match if values is not empty and the value of property
      // in frame is match none.
      if(nodeValues.length > 0) {
        return false;
      }
      matchThis = true;
    } else if(types.isObject(thisFrame)) {
      // node matches if values is not empty and the value of property in frame
      // is wildcard
      matchThis = nodeValues.length > 0;
    } else {
      if(graphTypes.isValue(thisFrame)) {
        // match on any matching value
        matchThis = nodeValues.some(nv => _valueMatch(thisFrame, nv));
      } else if(graphTypes.isSubject(thisFrame) ||
        graphTypes.isSubjectReference(thisFrame)) {
        matchThis =
          nodeValues.some(nv => _nodeMatch(state, thisFrame, nv, flags));
      } else if(graphTypes.isList(thisFrame)) {
        const listValue = thisFrame['@list'][0];
        if(graphTypes.isList(nodeValues[0])) {
          const nodeListValues = nodeValues[0]['@list'];

          if(graphTypes.isValue(listValue)) {
            // match on any matching value
            matchThis = nodeListValues.some(lv => _valueMatch(listValue, lv));
          } else if(graphTypes.isSubject(listValue) ||
            graphTypes.isSubjectReference(listValue)) {
            matchThis = nodeListValues.some(lv => _nodeMatch(
              state, listValue, lv, flags));
          }
        } else {
          // value must be a list to match
          matchThis = false;
        }
      }
    }

    // all non-defaulted values must match if requireAll is set
    if(!matchThis && flags.requireAll) {
      return false;
    }

    matchesSome = matchesSome || matchThis;
  }

  // return true if wildcard or subject matches some properties
  return wildcard || matchesSome;
}

/**
 * Removes an existing embed.
 *
 * @param state the current framing state.
 * @param id the @id of the embed to remove.
 */
function _removeEmbed(state, id) {
  // get existing embed
  const embeds = state.uniqueEmbeds[state.graph];
  const embed = embeds[id];
  const parent = embed.parent;
  const property = embed.property;

  // create reference to replace embed
  const subject = {'@id': id};

  // remove existing embed
  if(types.isArray(parent)) {
    // replace subject with reference
    for(let i = 0; i < parent.length; ++i) {
      if(util.compareValues(parent[i], subject)) {
        parent[i] = subject;
        break;
      }
    }
  } else {
    // replace subject with reference
    const useArray = types.isArray(parent[property]);
    util.removeValue(parent, property, subject, {propertyIsArray: useArray});
    util.addValue(parent, property, subject, {propertyIsArray: useArray});
  }

  // recursively remove dependent dangling embeds
  const removeDependents = id => {
    // get embed keys as a separate array to enable deleting keys in map
    const ids = Object.keys(embeds);
    for(const next of ids) {
      if(next in embeds && types.isObject(embeds[next].parent) &&
        embeds[next].parent['@id'] === id) {
        delete embeds[next];
        removeDependents(next);
      }
    }
  };
  removeDependents(id);
}

/**
 * Adds framing output to the given parent.
 *
 * @param parent the parent to add to.
 * @param property the parent property.
 * @param output the output to add.
 */
function _addFrameOutput(parent, property, output) {
  if(types.isObject(parent)) {
    util.addValue(parent, property, output, {propertyIsArray: true});
  } else {
    parent.push(output);
  }
}

/**
 * Node matches if it is a node, and matches the pattern as a frame.
 *
 * @param state the current framing state.
 * @param pattern used to match value
 * @param value to check
 * @param flags the frame flags.
 */
function _nodeMatch(state, pattern, value, flags) {
  if(!('@id' in value)) {
    return false;
  }
  const nodeObject = state.subjects[value['@id']];
  return nodeObject && _filterSubject(state, nodeObject, pattern, flags);
}

/**
 * Value matches if it is a value and matches the value pattern
 *
 * * `pattern` is empty
 * * @values are the same, or `pattern[@value]` is a wildcard, and
 * * @types are the same or `value[@type]` is not null
 *   and `pattern[@type]` is `{}`, or `value[@type]` is null
 *   and `pattern[@type]` is null or `[]`, and
 * * @languages are the same or `value[@language]` is not null
 *   and `pattern[@language]` is `{}`, or `value[@language]` is null
 *   and `pattern[@language]` is null or `[]`.
 *
 * @param pattern used to match value
 * @param value to check
 */
function _valueMatch(pattern, value) {
  const v1 = value['@value'];
  const t1 = value['@type'];
  const l1 = value['@language'];
  const v2 = pattern['@value'] ?
    (types.isArray(pattern['@value']) ?
      pattern['@value'] : [pattern['@value']]) :
    [];
  const t2 = pattern['@type'] ?
    (types.isArray(pattern['@type']) ?
      pattern['@type'] : [pattern['@type']]) :
    [];
  const l2 = pattern['@language'] ?
    (types.isArray(pattern['@language']) ?
      pattern['@language'] : [pattern['@language']]) :
    [];

  if(v2.length === 0 && t2.length === 0 && l2.length === 0) {
    return true;
  }
  if(!(v2.includes(v1) || types.isEmptyObject(v2[0]))) {
    return false;
  }
  if(!(!t1 && t2.length === 0 || t2.includes(t1) || t1 &&
    types.isEmptyObject(t2[0]))) {
    return false;
  }
  if(!(!l1 && l2.length === 0 || l2.includes(l1) || l1 &&
    types.isEmptyObject(l2[0]))) {
    return false;
  }
  return true;
}


/***/ }),

/***/ "e781":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017-2018 Digital Bazaar, Inc. All rights reserved.
 */


const {clone} = __webpack_require__("89ae");

module.exports = class ActiveContextCache {
  /**
   * Creates an active context cache.
   *
   * @param size the maximum size of the cache.
   */
  constructor(size = 100) {
    this.order = [];
    this.cache = new Map();
    this.size = size;
  }

  get(activeCtx, localCtx) {
    const level1 = this.cache.get(activeCtx);
    if(level1) {
      const key = JSON.stringify(localCtx);
      const result = level1.get(key);
      return result || null;
    }
    return null;
  }

  set(activeCtx, localCtx, result) {
    if(this.order.length === this.size) {
      const entry = this.order.shift();
      this.cache.get(entry.activeCtx).delete(entry.localCtx);
    }
    const key = JSON.stringify(localCtx);
    this.order.push({activeCtx, localCtx: key});
    let level1 = this.cache.get(activeCtx);
    if(!level1) {
      level1 = new Map();
      this.cache.set(activeCtx, level1);
    }
    level1.set(key, clone(result));
  }
};


/***/ }),

/***/ "eb9d":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Node.js module for Forge message digests.
 *
 * @author Dave Longley
 *
 * Copyright 2011-2017 Digital Bazaar, Inc.
 */
var forge = __webpack_require__("d327");

module.exports = forge.md = forge.md || {};
forge.md.algorithms = forge.md.algorithms || {};


/***/ }),

/***/ "f7fc":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Autocomplete
//>>group: Widgets
//>>description: Lists suggested words as the user is typing.
//>>docs: http://api.jqueryui.com/autocomplete/
//>>demos: http://jqueryui.com/autocomplete/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/autocomplete.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__("1157"),
			__webpack_require__("c027"),
			__webpack_require__("bc1c"),
			__webpack_require__("25c8"),
			__webpack_require__("cb0d"),
			__webpack_require__("4309"),
			__webpack_require__("3084")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

$.widget( "ui.autocomplete", {
	version: "1.12.1",
	defaultElement: "<input>",
	options: {
		appendTo: null,
		autoFocus: false,
		delay: 300,
		minLength: 1,
		position: {
			my: "left top",
			at: "left bottom",
			collision: "none"
		},
		source: null,

		// Callbacks
		change: null,
		close: null,
		focus: null,
		open: null,
		response: null,
		search: null,
		select: null
	},

	requestIndex: 0,
	pending: 0,

	_create: function() {

		// Some browsers only repeat keydown events, not keypress events,
		// so we use the suppressKeyPress flag to determine if we've already
		// handled the keydown event. #7269
		// Unfortunately the code for & in keypress is the same as the up arrow,
		// so we use the suppressKeyPressRepeat flag to avoid handling keypress
		// events when we know the keydown event was used to modify the
		// search term. #7799
		var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
			nodeName = this.element[ 0 ].nodeName.toLowerCase(),
			isTextarea = nodeName === "textarea",
			isInput = nodeName === "input";

		// Textareas are always multi-line
		// Inputs are always single-line, even if inside a contentEditable element
		// IE also treats inputs as contentEditable
		// All other element types are determined by whether or not they're contentEditable
		this.isMultiLine = isTextarea || !isInput && this._isContentEditable( this.element );

		this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
		this.isNewMenu = true;

		this._addClass( "ui-autocomplete-input" );
		this.element.attr( "autocomplete", "off" );

		this._on( this.element, {
			keydown: function( event ) {
				if ( this.element.prop( "readOnly" ) ) {
					suppressKeyPress = true;
					suppressInput = true;
					suppressKeyPressRepeat = true;
					return;
				}

				suppressKeyPress = false;
				suppressInput = false;
				suppressKeyPressRepeat = false;
				var keyCode = $.ui.keyCode;
				switch ( event.keyCode ) {
				case keyCode.PAGE_UP:
					suppressKeyPress = true;
					this._move( "previousPage", event );
					break;
				case keyCode.PAGE_DOWN:
					suppressKeyPress = true;
					this._move( "nextPage", event );
					break;
				case keyCode.UP:
					suppressKeyPress = true;
					this._keyEvent( "previous", event );
					break;
				case keyCode.DOWN:
					suppressKeyPress = true;
					this._keyEvent( "next", event );
					break;
				case keyCode.ENTER:

					// when menu is open and has focus
					if ( this.menu.active ) {

						// #6055 - Opera still allows the keypress to occur
						// which causes forms to submit
						suppressKeyPress = true;
						event.preventDefault();
						this.menu.select( event );
					}
					break;
				case keyCode.TAB:
					if ( this.menu.active ) {
						this.menu.select( event );
					}
					break;
				case keyCode.ESCAPE:
					if ( this.menu.element.is( ":visible" ) ) {
						if ( !this.isMultiLine ) {
							this._value( this.term );
						}
						this.close( event );

						// Different browsers have different default behavior for escape
						// Single press can mean undo or clear
						// Double press in IE means clear the whole form
						event.preventDefault();
					}
					break;
				default:
					suppressKeyPressRepeat = true;

					// search timeout should be triggered before the input value is changed
					this._searchTimeout( event );
					break;
				}
			},
			keypress: function( event ) {
				if ( suppressKeyPress ) {
					suppressKeyPress = false;
					if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
						event.preventDefault();
					}
					return;
				}
				if ( suppressKeyPressRepeat ) {
					return;
				}

				// Replicate some key handlers to allow them to repeat in Firefox and Opera
				var keyCode = $.ui.keyCode;
				switch ( event.keyCode ) {
				case keyCode.PAGE_UP:
					this._move( "previousPage", event );
					break;
				case keyCode.PAGE_DOWN:
					this._move( "nextPage", event );
					break;
				case keyCode.UP:
					this._keyEvent( "previous", event );
					break;
				case keyCode.DOWN:
					this._keyEvent( "next", event );
					break;
				}
			},
			input: function( event ) {
				if ( suppressInput ) {
					suppressInput = false;
					event.preventDefault();
					return;
				}
				this._searchTimeout( event );
			},
			focus: function() {
				this.selectedItem = null;
				this.previous = this._value();
			},
			blur: function( event ) {
				if ( this.cancelBlur ) {
					delete this.cancelBlur;
					return;
				}

				clearTimeout( this.searching );
				this.close( event );
				this._change( event );
			}
		} );

		this._initSource();
		this.menu = $( "<ul>" )
			.appendTo( this._appendTo() )
			.menu( {

				// disable ARIA support, the live region takes care of that
				role: null
			} )
			.hide()
			.menu( "instance" );

		this._addClass( this.menu.element, "ui-autocomplete", "ui-front" );
		this._on( this.menu.element, {
			mousedown: function( event ) {

				// prevent moving focus out of the text field
				event.preventDefault();

				// IE doesn't prevent moving focus even with event.preventDefault()
				// so we set a flag to know when we should ignore the blur event
				this.cancelBlur = true;
				this._delay( function() {
					delete this.cancelBlur;

					// Support: IE 8 only
					// Right clicking a menu item or selecting text from the menu items will
					// result in focus moving out of the input. However, we've already received
					// and ignored the blur event because of the cancelBlur flag set above. So
					// we restore focus to ensure that the menu closes properly based on the user's
					// next actions.
					if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
						this.element.trigger( "focus" );
					}
				} );
			},
			menufocus: function( event, ui ) {
				var label, item;

				// support: Firefox
				// Prevent accidental activation of menu items in Firefox (#7024 #9118)
				if ( this.isNewMenu ) {
					this.isNewMenu = false;
					if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
						this.menu.blur();

						this.document.one( "mousemove", function() {
							$( event.target ).trigger( event.originalEvent );
						} );

						return;
					}
				}

				item = ui.item.data( "ui-autocomplete-item" );
				if ( false !== this._trigger( "focus", event, { item: item } ) ) {

					// use value to match what will end up in the input, if it was a key event
					if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
						this._value( item.value );
					}
				}

				// Announce the value in the liveRegion
				label = ui.item.attr( "aria-label" ) || item.value;
				if ( label && $.trim( label ).length ) {
					this.liveRegion.children().hide();
					$( "<div>" ).text( label ).appendTo( this.liveRegion );
				}
			},
			menuselect: function( event, ui ) {
				var item = ui.item.data( "ui-autocomplete-item" ),
					previous = this.previous;

				// Only trigger when focus was lost (click on menu)
				if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
					this.element.trigger( "focus" );
					this.previous = previous;

					// #6109 - IE triggers two focus events and the second
					// is asynchronous, so we need to reset the previous
					// term synchronously and asynchronously :-(
					this._delay( function() {
						this.previous = previous;
						this.selectedItem = item;
					} );
				}

				if ( false !== this._trigger( "select", event, { item: item } ) ) {
					this._value( item.value );
				}

				// reset the term after the select event
				// this allows custom select handling to work properly
				this.term = this._value();

				this.close( event );
				this.selectedItem = item;
			}
		} );

		this.liveRegion = $( "<div>", {
			role: "status",
			"aria-live": "assertive",
			"aria-relevant": "additions"
		} )
			.appendTo( this.document[ 0 ].body );

		this._addClass( this.liveRegion, null, "ui-helper-hidden-accessible" );

		// Turning off autocomplete prevents the browser from remembering the
		// value when navigating through history, so we re-enable autocomplete
		// if the page is unloaded before the widget is destroyed. #7790
		this._on( this.window, {
			beforeunload: function() {
				this.element.removeAttr( "autocomplete" );
			}
		} );
	},

	_destroy: function() {
		clearTimeout( this.searching );
		this.element.removeAttr( "autocomplete" );
		this.menu.element.remove();
		this.liveRegion.remove();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "source" ) {
			this._initSource();
		}
		if ( key === "appendTo" ) {
			this.menu.element.appendTo( this._appendTo() );
		}
		if ( key === "disabled" && value && this.xhr ) {
			this.xhr.abort();
		}
	},

	_isEventTargetInWidget: function( event ) {
		var menuElement = this.menu.element[ 0 ];

		return event.target === this.element[ 0 ] ||
			event.target === menuElement ||
			$.contains( menuElement, event.target );
	},

	_closeOnClickOutside: function( event ) {
		if ( !this._isEventTargetInWidget( event ) ) {
			this.close();
		}
	},

	_appendTo: function() {
		var element = this.options.appendTo;

		if ( element ) {
			element = element.jquery || element.nodeType ?
				$( element ) :
				this.document.find( element ).eq( 0 );
		}

		if ( !element || !element[ 0 ] ) {
			element = this.element.closest( ".ui-front, dialog" );
		}

		if ( !element.length ) {
			element = this.document[ 0 ].body;
		}

		return element;
	},

	_initSource: function() {
		var array, url,
			that = this;
		if ( $.isArray( this.options.source ) ) {
			array = this.options.source;
			this.source = function( request, response ) {
				response( $.ui.autocomplete.filter( array, request.term ) );
			};
		} else if ( typeof this.options.source === "string" ) {
			url = this.options.source;
			this.source = function( request, response ) {
				if ( that.xhr ) {
					that.xhr.abort();
				}
				that.xhr = $.ajax( {
					url: url,
					data: request,
					dataType: "json",
					success: function( data ) {
						response( data );
					},
					error: function() {
						response( [] );
					}
				} );
			};
		} else {
			this.source = this.options.source;
		}
	},

	_searchTimeout: function( event ) {
		clearTimeout( this.searching );
		this.searching = this._delay( function() {

			// Search if the value has changed, or if the user retypes the same value (see #7434)
			var equalValues = this.term === this._value(),
				menuVisible = this.menu.element.is( ":visible" ),
				modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

			if ( !equalValues || ( equalValues && !menuVisible && !modifierKey ) ) {
				this.selectedItem = null;
				this.search( null, event );
			}
		}, this.options.delay );
	},

	search: function( value, event ) {
		value = value != null ? value : this._value();

		// Always save the actual value, not the one passed as an argument
		this.term = this._value();

		if ( value.length < this.options.minLength ) {
			return this.close( event );
		}

		if ( this._trigger( "search", event ) === false ) {
			return;
		}

		return this._search( value );
	},

	_search: function( value ) {
		this.pending++;
		this._addClass( "ui-autocomplete-loading" );
		this.cancelSearch = false;

		this.source( { term: value }, this._response() );
	},

	_response: function() {
		var index = ++this.requestIndex;

		return $.proxy( function( content ) {
			if ( index === this.requestIndex ) {
				this.__response( content );
			}

			this.pending--;
			if ( !this.pending ) {
				this._removeClass( "ui-autocomplete-loading" );
			}
		}, this );
	},

	__response: function( content ) {
		if ( content ) {
			content = this._normalize( content );
		}
		this._trigger( "response", null, { content: content } );
		if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
			this._suggest( content );
			this._trigger( "open" );
		} else {

			// use ._close() instead of .close() so we don't cancel future searches
			this._close();
		}
	},

	close: function( event ) {
		this.cancelSearch = true;
		this._close( event );
	},

	_close: function( event ) {

		// Remove the handler that closes the menu on outside clicks
		this._off( this.document, "mousedown" );

		if ( this.menu.element.is( ":visible" ) ) {
			this.menu.element.hide();
			this.menu.blur();
			this.isNewMenu = true;
			this._trigger( "close", event );
		}
	},

	_change: function( event ) {
		if ( this.previous !== this._value() ) {
			this._trigger( "change", event, { item: this.selectedItem } );
		}
	},

	_normalize: function( items ) {

		// assume all items have the right format when the first item is complete
		if ( items.length && items[ 0 ].label && items[ 0 ].value ) {
			return items;
		}
		return $.map( items, function( item ) {
			if ( typeof item === "string" ) {
				return {
					label: item,
					value: item
				};
			}
			return $.extend( {}, item, {
				label: item.label || item.value,
				value: item.value || item.label
			} );
		} );
	},

	_suggest: function( items ) {
		var ul = this.menu.element.empty();
		this._renderMenu( ul, items );
		this.isNewMenu = true;
		this.menu.refresh();

		// Size and position menu
		ul.show();
		this._resizeMenu();
		ul.position( $.extend( {
			of: this.element
		}, this.options.position ) );

		if ( this.options.autoFocus ) {
			this.menu.next();
		}

		// Listen for interactions outside of the widget (#6642)
		this._on( this.document, {
			mousedown: "_closeOnClickOutside"
		} );
	},

	_resizeMenu: function() {
		var ul = this.menu.element;
		ul.outerWidth( Math.max(

			// Firefox wraps long text (possibly a rounding bug)
			// so we add 1px to avoid the wrapping (#7513)
			ul.width( "" ).outerWidth() + 1,
			this.element.outerWidth()
		) );
	},

	_renderMenu: function( ul, items ) {
		var that = this;
		$.each( items, function( index, item ) {
			that._renderItemData( ul, item );
		} );
	},

	_renderItemData: function( ul, item ) {
		return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
	},

	_renderItem: function( ul, item ) {
		return $( "<li>" )
			.append( $( "<div>" ).text( item.label ) )
			.appendTo( ul );
	},

	_move: function( direction, event ) {
		if ( !this.menu.element.is( ":visible" ) ) {
			this.search( null, event );
			return;
		}
		if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
				this.menu.isLastItem() && /^next/.test( direction ) ) {

			if ( !this.isMultiLine ) {
				this._value( this.term );
			}

			this.menu.blur();
			return;
		}
		this.menu[ direction ]( event );
	},

	widget: function() {
		return this.menu.element;
	},

	_value: function() {
		return this.valueMethod.apply( this.element, arguments );
	},

	_keyEvent: function( keyEvent, event ) {
		if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
			this._move( keyEvent, event );

			// Prevents moving cursor to beginning/end of the text field in some browsers
			event.preventDefault();
		}
	},

	// Support: Chrome <=50
	// We should be able to just use this.element.prop( "isContentEditable" )
	// but hidden elements always report false in Chrome.
	// https://code.google.com/p/chromium/issues/detail?id=313082
	_isContentEditable: function( element ) {
		if ( !element.length ) {
			return false;
		}

		var editable = element.prop( "contentEditable" );

		if ( editable === "inherit" ) {
		  return this._isContentEditable( element.parent() );
		}

		return editable === "true";
	}
} );

$.extend( $.ui.autocomplete, {
	escapeRegex: function( value ) {
		return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
	},
	filter: function( array, term ) {
		var matcher = new RegExp( $.ui.autocomplete.escapeRegex( term ), "i" );
		return $.grep( array, function( value ) {
			return matcher.test( value.label || value.value || value );
		} );
	}
} );

// Live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget( "ui.autocomplete", $.ui.autocomplete, {
	options: {
		messages: {
			noResults: "No search results.",
			results: function( amount ) {
				return amount + ( amount > 1 ? " results are" : " result is" ) +
					" available, use up and down arrow keys to navigate.";
			}
		}
	},

	__response: function( content ) {
		var message;
		this._superApply( arguments );
		if ( this.options.disabled || this.cancelSearch ) {
			return;
		}
		if ( content && content.length ) {
			message = this.options.messages.results( content.length );
		} else {
			message = this.options.messages.noResults;
		}
		this.liveRegion.children().hide();
		$( "<div>" ).text( message ).appendTo( this.liveRegion );
	}
} );

return $.ui.autocomplete;

} ) );


/***/ }),

/***/ "f9a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
/* global Node, XMLSerializer */


const {
  RDF_LANGSTRING,
  RDF_PLAIN_LITERAL,
  RDF_OBJECT,
  RDF_XML_LITERAL,
  XSD_STRING,
} = __webpack_require__("feb1");

let _Node;
if(typeof Node !== 'undefined') {
  _Node = Node;
} else {
  _Node = {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    ENTITY_REFERENCE_NODE: 5,
    ENTITY_NODE: 6,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
    NOTATION_NODE: 12
  };
}

module.exports = class Rdfa {
  /**
   * Parses the RDF dataset found via the data object from the RDFa API.
   *
   * @param data the RDFa API data object.
   *
   * @return the RDF dataset.
   */
  parse(data) {
    const dataset = {};
    dataset['@default'] = [];

    const subjects = data.getSubjects();
    for(let si = 0; si < subjects.length; ++si) {
      const subject = subjects[si];
      if(subject === null) {
        continue;
      }

      // get all related triples
      const triples = data.getSubjectTriples(subject);
      if(triples === null) {
        continue;
      }
      const predicates = triples.predicates;
      for(const predicate in predicates) {
        // iterate over objects
        const objects = predicates[predicate].objects;
        for(let oi = 0; oi < objects.length; ++oi) {
          const object = objects[oi];

          // create RDF triple
          const triple = {};

          // add subject
          if(subject.indexOf('_:') === 0) {
            triple.subject = {type: 'blank node', value: subject};
          } else {
            triple.subject = {type: 'IRI', value: subject};
          }

          // add predicate
          if(predicate.indexOf('_:') === 0) {
            triple.predicate = {type: 'blank node', value: predicate};
          } else {
            triple.predicate = {type: 'IRI', value: predicate};
          }

          // serialize XML literal
          let value = object.value;
          if(object.type === RDF_XML_LITERAL) {
            // initialize XMLSerializer
            const XMLSerializer = getXMLSerializerClass();
            const serializer = new XMLSerializer();
            value = '';
            for(let x = 0; x < object.value.length; x++) {
              if(object.value[x].nodeType === _Node.ELEMENT_NODE) {
                value += serializer.serializeToString(object.value[x]);
              } else if(object.value[x].nodeType === _Node.TEXT_NODE) {
                value += object.value[x].nodeValue;
              }
            }
          }

          // add object
          triple.object = {};

          // object is an IRI
          if(object.type === RDF_OBJECT) {
            if(object.value.indexOf('_:') === 0) {
              triple.object.type = 'blank node';
            } else {
              triple.object.type = 'IRI';
            }
          } else {
            // object is a literal
            triple.object.type = 'literal';
            if(object.type === RDF_PLAIN_LITERAL) {
              if(object.language) {
                triple.object.datatype = RDF_LANGSTRING;
                triple.object.language = object.language;
              } else {
                triple.object.datatype = XSD_STRING;
              }
            } else {
              triple.object.datatype = object.type;
            }
          }
          triple.object.value = value;

          // add triple to dataset in default graph
          dataset['@default'].push(triple);
        }
      }
    }

    return dataset;
  }
};

function getXMLSerializerClass() {
  if(typeof XMLSerializer === 'undefined') {
    return __webpack_require__(1).XMLSerializer;
  }
  return XMLSerializer;
}


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ac9d94a4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/rdform.vue?vue&type=template&id=7fe1e53a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{attrs:{"action":"#"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/rdform.vue?vue&type=template&id=7fe1e53a&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/rdform.vue?vue&type=script&lang=js&
var rdformvue_type_script_lang_js_ = __webpack_require__("8dfb");

// CONCATENATED MODULE: ./src/rdform.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_rdformvue_type_script_lang_js_ = (rdformvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/rdform.vue





/* normalize component */

var component = normalizeComponent(
  src_rdformvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var rdform = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (rdform);



/***/ }),

/***/ "fdb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const {parseLinkHeader, buildHeaders} = __webpack_require__("89ae");
const {LINK_HEADER_REL} = __webpack_require__("feb1");
const JsonLdError = __webpack_require__("5950");
const RequestQueue = __webpack_require__("40ce");

/**
 * Creates a built-in node document loader.
 *
 * @param options the options to use:
 *          secure: require all URLs to use HTTPS.
 *          strictSSL: true to require SSL certificates to be valid,
 *            false not to (default: true).
 *          maxRedirects: the maximum number of redirects to permit, none by
 *            default.
 *          request: the object which will make the request, default is
 *            provided by `https://www.npmjs.com/package/request`.
 *          headers: an object (map) of headers which will be passed as request
 *            headers for the requested document. Accept is not allowed.
 *
 * @return the node document loader.
 */
module.exports = ({
  secure,
  strictSSL = true,
  maxRedirects = -1,
  request,
  headers = {}
} = {strictSSL: true, maxRedirects: -1, headers: {}}) => {
  headers = buildHeaders(headers);
  // TODO: use `r2`
  request = request || __webpack_require__(2);
  const http = __webpack_require__(3);
  // TODO: disable cache until HTTP caching implemented
  //const cache = new DocumentCache();

  const queue = new RequestQueue();
  return queue.wrapLoader(function(url) {
    return loadDocument(url, []);
  });

  async function loadDocument(url, redirects) {
    if(url.indexOf('http:') !== 0 && url.indexOf('https:') !== 0) {
      throw new JsonLdError(
        'URL could not be dereferenced; only "http" and "https" URLs are ' +
        'supported.',
        'jsonld.InvalidUrl', {code: 'loading document failed', url});
    }
    if(secure && url.indexOf('https') !== 0) {
      throw new JsonLdError(
        'URL could not be dereferenced; secure mode is enabled and ' +
        'the URL\'s scheme is not "https".',
        'jsonld.InvalidUrl', {code: 'loading document failed', url});
    }
    // TODO: disable cache until HTTP caching implemented
    let doc = null;//cache.get(url);
    if(doc !== null) {
      return doc;
    }

    let result;
    try {
      result = await _request(request, {
        url,
        headers,
        strictSSL,
        followRedirect: false
      });
    } catch(e) {
      throw new JsonLdError(
        'URL could not be dereferenced, an error occurred.',
        'jsonld.LoadDocumentError',
        {code: 'loading document failed', url, cause: e});
    }

    const {res, body} = result;

    doc = {contextUrl: null, documentUrl: url, document: body || null};

    // handle error
    const statusText = http.STATUS_CODES[res.statusCode];
    if(res.statusCode >= 400) {
      throw new JsonLdError(
        'URL could not be dereferenced: ' + statusText,
        'jsonld.InvalidUrl', {
          code: 'loading document failed',
          url,
          httpStatusCode: res.statusCode
        });
    }

    // handle Link Header
    if(res.headers.link &&
      res.headers['content-type'] !== 'application/ld+json') {
      // only 1 related link header permitted
      const linkHeader = parseLinkHeader(res.headers.link)[LINK_HEADER_REL];
      if(Array.isArray(linkHeader)) {
        throw new JsonLdError(
          'URL could not be dereferenced, it has more than one associated ' +
          'HTTP Link Header.',
          'jsonld.InvalidUrl',
          {code: 'multiple context link headers', url});
      }
      if(linkHeader) {
        doc.contextUrl = linkHeader.target;
      }
    }

    // handle redirect
    if(res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      if(redirects.length === maxRedirects) {
        throw new JsonLdError(
          'URL could not be dereferenced; there were too many redirects.',
          'jsonld.TooManyRedirects', {
            code: 'loading document failed',
            url,
            httpStatusCode: res.statusCode,
            redirects
          });
      }
      if(redirects.indexOf(url) !== -1) {
        throw new JsonLdError(
          'URL could not be dereferenced; infinite redirection was detected.',
          'jsonld.InfiniteRedirectDetected', {
            code: 'recursive context inclusion',
            url,
            httpStatusCode: res.statusCode,
            redirects
          });
      }
      redirects.push(url);
      return loadDocument(res.headers.location, redirects);
    }

    // cache for each redirected URL
    redirects.push(url);
    // TODO: disable cache until HTTP caching implemented
    /*
    for(let i = 0; i < redirects.length; ++i) {
      cache.set(
        redirects[i],
        {contextUrl: null, documentUrl: redirects[i], document: body});
    }
    */

    return doc;
  }
};

function _request(request, options) {
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if(err) {
        reject(err);
      } else {
        resolve({res, body});
      }
    });
  });
}


/***/ }),

/***/ "feb1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


const RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';
const XSD = 'http://www.w3.org/2001/XMLSchema#';

module.exports = {
  LINK_HEADER_REL: 'http://www.w3.org/ns/json-ld#context',

  RDF,
  RDF_LIST: RDF + 'List',
  RDF_FIRST: RDF + 'first',
  RDF_REST: RDF + 'rest',
  RDF_NIL: RDF + 'nil',
  RDF_TYPE: RDF + 'type',
  RDF_PLAIN_LITERAL: RDF + 'PlainLiteral',
  RDF_XML_LITERAL: RDF + 'XMLLiteral',
  RDF_JSON_LITERAL: RDF + 'JSON',
  RDF_OBJECT: RDF + 'object',
  RDF_LANGSTRING: RDF + 'langString',

  XSD,
  XSD_BOOLEAN: XSD + 'boolean',
  XSD_DOUBLE: XSD + 'double',
  XSD_INTEGER: XSD + 'integer',
  XSD_STRING: XSD + 'string',
};


/***/ })

/******/ })["default"];
//# sourceMappingURL=vue-rdform.common.js.map