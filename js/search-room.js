(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {

        if (installedModules[moduleId]) {

            return installedModules[moduleId].exports;

        }

        var module = installedModules[moduleId] = {

            i: moduleId,

            l: false,

            exports: {}

        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        module.l = true;

        return module.exports;

    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {

        if (!__webpack_require__.o(exports, name)) {

            Object.defineProperty(exports, name, { enumerable: true, get: getter });

        }

    };
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        }
        Object.defineProperty(exports, '__esModule', { value: true });
    };
    __webpack_require__.t = function(value, mode) {

        if (mode & 1) value = __webpack_require__(value);

        if (mode & 8) return value;

        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;

        var ns = Object.create(null);

        __webpack_require__.r(ns);

        Object.defineProperty(ns, 'default', { enumerable: true, value: value });

        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));

        return ns;

    };
    __webpack_require__.n = function(module) {

        var getter = module && module.__esModule ?

            function getDefault() { return module['default']; } :

            function getModuleExports() { return module; };

        __webpack_require__.d(getter, 'a', getter);

        return getter;

    };
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

    __webpack_require__.p = "";

    return __webpack_require__(__webpack_require__.s = 84);

})

([

    (function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

        (function(global, factory) {

            "use strict";

            if (true && typeof module.exports === "object") {

                module.exports = global.document ?
                    factory(global, true) :
                    function(w) {
                        if (!w.document) {
                            throw new Error("jQuery requires a window with a document");
                        }
                        return factory(w);
                    };
            } else {
                factory(global);
            }


        })(typeof window !== "undefined" ? window : this, function(window, noGlobal) {

            "use strict";

            var arr = [];

            var document = window.document;

            var getProto = Object.getPrototypeOf;

            var slice = arr.slice;

            var concat = arr.concat;

            var push = arr.push;

            var indexOf = arr.indexOf;

            var class2type = {};

            var toString = class2type.toString;

            var hasOwn = class2type.hasOwnProperty;

            var fnToString = hasOwn.toString;

            var ObjectFunctionString = fnToString.call(Object);

            var support = {};

            var isFunction = function isFunction(obj) {

                return typeof obj === "function" && typeof obj.nodeType !== "number";
            };


            var isWindow = function isWindow(obj) {
                return obj != null && obj === obj.window;
            };




            var preservedScriptAttributes = {
                type: true,
                src: true,
                nonce: true,
                noModule: true
            };

            function DOMEval(code, node, doc) {
                doc = doc || document;

                var i, val,
                    script = doc.createElement("script");

                script.text = code;
                if (node) {
                    for (i in preservedScriptAttributes) {


                        val = node[i] || node.getAttribute && node.getAttribute(i);
                        if (val) {
                            script.setAttribute(i, val);
                        }
                    }
                }
                doc.head.appendChild(script).parentNode.removeChild(script);
            }


            function toType(obj) {
                if (obj == null) {
                    return obj + "";
                }


                return typeof obj === "object" || typeof obj === "function" ?
                    class2type[toString.call(obj)] || "object" :
                    typeof obj;
            }

            var
                version = "3.4.1",


                jQuery = function(selector, context) {


                    return new jQuery.fn.init(selector, context);
                },

                rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            jQuery.fn = jQuery.prototype = {


                jquery: version,

                constructor: jQuery,


                length: 0,

                toArray: function() {
                    return slice.call(this);
                },

                get: function(num) {

                    if (num == null) {
                        return slice.call(this);
                    }


                    return num < 0 ? this[num + this.length] : this[num];
                },

                pushStack: function(elems) {


                    var ret = jQuery.merge(this.constructor(), elems);

                    ret.prevObject = this;

                    return ret;
                },

                each: function(callback) {
                    return jQuery.each(this, callback);
                },

                map: function(callback) {
                    return this.pushStack(jQuery.map(this, function(elem, i) {
                        return callback.call(elem, i, elem);
                    }));
                },

                slice: function() {
                    return this.pushStack(slice.apply(this, arguments));
                },

                first: function() {
                    return this.eq(0);
                },

                last: function() {
                    return this.eq(-1);
                },

                eq: function(i) {
                    var len = this.length,
                        j = +i + (i < 0 ? len : 0);
                    return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
                },

                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: push,
                sort: arr.sort,
                splice: arr.splice
            };

            jQuery.extend = jQuery.fn.extend = function() {
                var options, name, src, copy, copyIsArray, clone,
                    target = arguments[0] || {},
                    i = 1,
                    length = arguments.length,
                    deep = false;

                if (typeof target === "boolean") {
                    deep = target;

                    target = arguments[i] || {};
                    i++;
                }

                if (typeof target !== "object" && !isFunction(target)) {
                    target = {};
                }

                if (i === length) {
                    target = this;
                    i--;
                }

                for (; i < length; i++) {

                    if ((options = arguments[i]) != null) {

                        for (name in options) {
                            copy = options[name];

                            if (name === "__proto__" || target === copy) {
                                continue;
                            }

                            if (deep && copy && (jQuery.isPlainObject(copy) ||
                                    (copyIsArray = Array.isArray(copy)))) {
                                src = target[name];

                                if (copyIsArray && !Array.isArray(src)) {
                                    clone = [];
                                } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                                    clone = {};
                                } else {
                                    clone = src;
                                }
                                copyIsArray = false;

                                target[name] = jQuery.extend(deep, clone, copy);

                            } else if (copy !== undefined) {
                                target[name] = copy;
                            }
                        }
                    }
                }

                return target;
            };

            jQuery.extend({

                expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

                isReady: true,

                error: function(msg) {
                    throw new Error(msg);
                },

                noop: function() {},

                isPlainObject: function(obj) {
                    var proto, Ctor;

                    if (!obj || toString.call(obj) !== "[object Object]") {
                        return false;
                    }

                    proto = getProto(obj);

                    if (!proto) {
                        return true;
                    }

                    Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                    return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
                },

                isEmptyObject: function(obj) {
                    var name;

                    for (name in obj) {
                        return false;
                    }
                    return true;
                },

                globalEval: function(code, options) {
                    DOMEval(code, { nonce: options && options.nonce });
                },

                each: function(obj, callback) {
                    var length, i = 0;

                    if (isArrayLike(obj)) {
                        length = obj.length;
                        for (; i < length; i++) {
                            if (callback.call(obj[i], i, obj[i]) === false) {
                                break;
                            }
                        }
                    } else {
                        for (i in obj) {
                            if (callback.call(obj[i], i, obj[i]) === false) {
                                break;
                            }
                        }
                    }

                    return obj;
                },

                trim: function(text) {
                    return text == null ?
                        "" :
                        (text + "").replace(rtrim, "");
                },

                makeArray: function(arr, results) {
                    var ret = results || [];

                    if (arr != null) {
                        if (isArrayLike(Object(arr))) {
                            jQuery.merge(ret,
                                typeof arr === "string" ? [arr] : arr
                            );
                        } else {
                            push.call(ret, arr);
                        }
                    }

                    return ret;
                },

                inArray: function(elem, arr, i) {
                    return arr == null ? -1 : indexOf.call(arr, elem, i);
                },

                merge: function(first, second) {
                    var len = +second.length,
                        j = 0,
                        i = first.length;

                    for (; j < len; j++) {
                        first[i++] = second[j];
                    }

                    first.length = i;

                    return first;
                },

                grep: function(elems, callback, invert) {
                    var callbackInverse,
                        matches = [],
                        i = 0,
                        length = elems.length,
                        callbackExpect = !invert;

                    for (; i < length; i++) {
                        callbackInverse = !callback(elems[i], i);
                        if (callbackInverse !== callbackExpect) {
                            matches.push(elems[i]);
                        }
                    }

                    return matches;
                },

                map: function(elems, callback, arg) {
                    var length, value,
                        i = 0,
                        ret = [];

                    if (isArrayLike(elems)) {
                        length = elems.length;
                        for (; i < length; i++) {
                            value = callback(elems[i], i, arg);

                            if (value != null) {
                                ret.push(value);
                            }
                        }

                    } else {
                        for (i in elems) {
                            value = callback(elems[i], i, arg);

                            if (value != null) {
                                ret.push(value);
                            }
                        }
                    }

                    return concat.apply([], ret);
                },

                guid: 1,

                support: support
            });

            if (typeof Symbol === "function") {
                jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
            }

            jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
                function(i, name) {
                    class2type["[object " + name + "]"] = name.toLowerCase();
                });

            function isArrayLike(obj) {

                var length = !!obj && "length" in obj && obj.length,
                    type = toType(obj);

                if (isFunction(obj) || isWindow(obj)) {
                    return false;
                }

                return type === "array" || length === 0 ||
                    typeof length === "number" && length > 0 && (length - 1) in obj;
            }
            var Sizzle =
                (function(window) {

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

                        setDocument,
                        document,
                        docElem,
                        documentIsHTML,
                        rbuggyQSA,
                        rbuggyMatches,
                        matches,
                        contains,

                        expando = "sizzle" + 1 * new Date(),
                        preferredDoc = window.document,
                        dirruns = 0,
                        done = 0,
                        classCache = createCache(),
                        tokenCache = createCache(),
                        compilerCache = createCache(),
                        nonnativeSelectorCache = createCache(),
                        sortOrder = function(a, b) {
                            if (a === b) {
                                hasDuplicate = true;
                            }
                            return 0;
                        },
                        hasOwn = ({}).hasOwnProperty,
                        arr = [],
                        pop = arr.pop,
                        push_native = arr.push,
                        push = arr.push,
                        slice = arr.slice,
                        indexOf = function(list, elem) {
                            var i = 0,
                                len = list.length;
                            for (; i < len; i++) {
                                if (list[i] === elem) {
                                    return i;
                                }
                            }
                            return -1;
                        },

                        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

                        whitespace = "[\\x20\\t\\r\\n\\f]",

                        identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

                        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
                        "*([*^$|!~]?=)" + whitespace +
                        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
                        "*\\]",

                        pseudos = ":(" + identifier + ")(?:\\((" +
                        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
                        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
                        ".*" +
                        ")\\)|)",

                        rwhitespace = new RegExp(whitespace + "+", "g"),
                        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

                        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                        rdescend = new RegExp(whitespace + "|>"),

                        rpseudo = new RegExp(pseudos),
                        ridentifier = new RegExp("^" + identifier + "$"),

                        matchExpr = {
                            "ID": new RegExp("^#(" + identifier + ")"),
                            "CLASS": new RegExp("^\\.(" + identifier + ")"),
                            "TAG": new RegExp("^(" + identifier + "|[*])"),
                            "ATTR": new RegExp("^" + attributes),
                            "PSEUDO": new RegExp("^" + pseudos),
                            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                                "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                                "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                                whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                        },

                        rhtml = /HTML$/i,
                        rinputs = /^(?:input|select|textarea|button)$/i,
                        rheader = /^h\d$/i,

                        rnative = /^[^{]+\{\s*\[native \w/,

                        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

                        rsibling = /[+~]/,

                        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                        funescape = function(_, escaped, escapedWhitespace) {
                            var high = "0x" + escaped - 0x10000;
                            return high !== high || escapedWhitespace ?
                                escaped :
                                high < 0 ?
                                String.fromCharCode(high + 0x10000) :
                                String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
                        },
                        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        fcssescape = function(ch, asCodePoint) {
                            if (asCodePoint) {

                                if (ch === "\0") {
                                    return "\uFFFD";
                                }

                                return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                            }

                            return "\\" + ch;
                        },

                        unloadHandler = function() {
                            setDocument();
                        },

                        inDisabledFieldset = addCombinator(
                            function(elem) {
                                return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
                            }, { dir: "parentNode", next: "legend" }
                        );

                    try {
                        push.apply(
                            (arr = slice.call(preferredDoc.childNodes)),
                            preferredDoc.childNodes
                        );
                        arr[preferredDoc.childNodes.length].nodeType;
                    } catch (e) {
                        push = {
                            apply: arr.length ?

                                function(target, els) {
                                    push_native.apply(target, slice.call(els));
                                } :

                                function(target, els) {
                                    var j = target.length,
                                        i = 0;
                                    while ((target[j++] = els[i++])) {}
                                    target.length = j - 1;
                                }
                        };
                    }

                    function Sizzle(selector, context, results, seed) {
                        var m, i, elem, nid, match, groups, newSelector,
                            newContext = context && context.ownerDocument,

                            nodeType = context ? context.nodeType : 9;

                        results = results || [];

                        if (typeof selector !== "string" || !selector ||
                            nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

                            return results;
                        }

                        if (!seed) {

                            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                                setDocument(context);
                            }
                            context = context || document;

                            if (documentIsHTML) {
                                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

                                    if ((m = match[1])) {

                                        if (nodeType === 9) {
                                            if ((elem = context.getElementById(m))) {

                                                if (elem.id === m) {
                                                    results.push(elem);
                                                    return results;
                                                }
                                            } else {
                                                return results;
                                            }

                                        } else {

                                            if (newContext && (elem = newContext.getElementById(m)) &&
                                                contains(context, elem) &&
                                                elem.id === m) {

                                                results.push(elem);
                                                return results;
                                            }
                                        }

                                    } else if (match[2]) {
                                        push.apply(results, context.getElementsByTagName(selector));
                                        return results;

                                    } else if ((m = match[3]) && support.getElementsByClassName &&
                                        context.getElementsByClassName) {

                                        push.apply(results, context.getElementsByClassName(m));
                                        return results;
                                    }
                                }
                                if (support.qsa &&
                                    !nonnativeSelectorCache[selector + " "] &&
                                    (!rbuggyQSA || !rbuggyQSA.test(selector)) &&

                                    (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {

                                    newSelector = selector;
                                    newContext = context;

                                    if (nodeType === 1 && rdescend.test(selector)) {

                                        if ((nid = context.getAttribute("id"))) {
                                            nid = nid.replace(rcssescape, fcssescape);
                                        } else {
                                            context.setAttribute("id", (nid = expando));
                                        }

                                        groups = tokenize(selector);
                                        i = groups.length;
                                        while (i--) {
                                            groups[i] = "#" + nid + " " + toSelector(groups[i]);
                                        }
                                        newSelector = groups.join(",");

                                        newContext = rsibling.test(selector) && testContext(context.parentNode) ||
                                            context;
                                    }

                                    try {
                                        push.apply(results,
                                            newContext.querySelectorAll(newSelector)
                                        );
                                        return results;
                                    } catch (qsaError) {
                                        nonnativeSelectorCache(selector, true);
                                    } finally {
                                        if (nid === expando) {
                                            context.removeAttribute("id");
                                        }
                                    }
                                }
                            }
                        }

                        return select(selector.replace(rtrim, "$1"), context, results, seed);
                    }

                    function createCache() {
                        var keys = [];

                        function cache(key, value) {

                            if (keys.push(key + " ") > Expr.cacheLength) {
                                delete cache[keys.shift()];
                            }
                            return (cache[key + " "] = value);
                        }
                        return cache;
                    }

                    function markFunction(fn) {
                        fn[expando] = true;
                        return fn;
                    }

                    function assert(fn) {
                        var el = document.createElement("fieldset");

                        try {
                            return !!fn(el);
                        } catch (e) {
                            return false;
                        } finally {
                            if (el.parentNode) {
                                el.parentNode.removeChild(el);
                            }
                            el = null;
                        }
                    }

                    function addHandle(attrs, handler) {
                        var arr = attrs.split("|"),
                            i = arr.length;

                        while (i--) {
                            Expr.attrHandle[arr[i]] = handler;
                        }
                    }

                    function siblingCheck(a, b) {
                        var cur = b && a,
                            diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
                            a.sourceIndex - b.sourceIndex;

                        if (diff) {
                            return diff;
                        }

                        if (cur) {
                            while ((cur = cur.nextSibling)) {
                                if (cur === b) {
                                    return -1;
                                }
                            }
                        }

                        return a ? 1 : -1;
                    }

                    function createInputPseudo(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return name === "input" && elem.type === type;
                        };
                    }

                    function createButtonPseudo(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return (name === "input" || name === "button") && elem.type === type;
                        };
                    }

                    function createDisabledPseudo(disabled) {


                        return function(elem) {


                            if ("form" in elem) {


                                if (elem.parentNode && elem.disabled === false) {

                                    if ("label" in elem) {
                                        if ("label" in elem.parentNode) {
                                            return elem.parentNode.disabled === disabled;
                                        } else {
                                            return elem.disabled === disabled;
                                        }
                                    }

                                    return elem.isDisabled === disabled ||


                                        elem.isDisabled !== !disabled &&
                                        inDisabledFieldset(elem) === disabled;
                                }

                                return elem.disabled === disabled;


                            } else if ("label" in elem) {
                                return elem.disabled === disabled;
                            }

                            return false;
                        };
                    }

                    function createPositionalPseudo(fn) {
                        return markFunction(function(argument) {
                            argument = +argument;
                            return markFunction(function(seed, matches) {
                                var j,
                                    matchIndexes = fn([], seed.length, argument),
                                    i = matchIndexes.length;

                                while (i--) {
                                    if (seed[(j = matchIndexes[i])]) {
                                        seed[j] = !(matches[j] = seed[j]);
                                    }
                                }
                            });
                        });
                    }

                    function testContext(context) {
                        return context && typeof context.getElementsByTagName !== "undefined" && context;
                    }

                    support = Sizzle.support = {};

                    isXML = Sizzle.isXML = function(elem) {
                        var namespace = elem.namespaceURI,
                            docElem = (elem.ownerDocument || elem).documentElement;

                        return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
                    };


                    setDocument = Sizzle.setDocument = function(node) {
                        var hasCompare, subWindow,
                            doc = node ? node.ownerDocument || node : preferredDoc;


                        if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                            return document;
                        }

                        document = doc;
                        docElem = document.documentElement;
                        documentIsHTML = !isXML(document);

                        if (preferredDoc !== document &&
                            (subWindow = document.defaultView) && subWindow.top !== subWindow) {


                            if (subWindow.addEventListener) {
                                subWindow.addEventListener("unload", unloadHandler, false);


                            } else if (subWindow.attachEvent) {
                                subWindow.attachEvent("onunload", unloadHandler);
                            }
                        }

                        support.attributes = assert(function(el) {
                            el.className = "i";
                            return !el.getAttribute("className");
                        });

                        support.getElementsByTagName = assert(function(el) {
                            el.appendChild(document.createComment(""));
                            return !el.getElementsByTagName("*").length;
                        });

                        support.getElementsByClassName = rnative.test(document.getElementsByClassName);

                        support.getById = assert(function(el) {
                            docElem.appendChild(el).id = expando;
                            return !document.getElementsByName || !document.getElementsByName(expando).length;
                        });

                        if (support.getById) {
                            Expr.filter["ID"] = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    return elem.getAttribute("id") === attrId;
                                };
                            };
                            Expr.find["ID"] = function(id, context) {
                                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                    var elem = context.getElementById(id);
                                    return elem ? [elem] : [];
                                }
                            };
                        } else {
                            Expr.filter["ID"] = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    var node = typeof elem.getAttributeNode !== "undefined" &&
                                        elem.getAttributeNode("id");
                                    return node && node.value === attrId;
                                };
                            };

                            Expr.find["ID"] = function(id, context) {
                                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                    var node, i, elems,
                                        elem = context.getElementById(id);

                                    if (elem) {

                                        node = elem.getAttributeNode("id");
                                        if (node && node.value === id) {
                                            return [elem];
                                        }

                                        elems = context.getElementsByName(id);
                                        i = 0;
                                        while ((elem = elems[i++])) {
                                            node = elem.getAttributeNode("id");
                                            if (node && node.value === id) {
                                                return [elem];
                                            }
                                        }
                                    }

                                    return [];
                                }
                            };
                        }

                        Expr.find["TAG"] = support.getElementsByTagName ?
                            function(tag, context) {
                                if (typeof context.getElementsByTagName !== "undefined") {
                                    return context.getElementsByTagName(tag);

                                } else if (support.qsa) {
                                    return context.querySelectorAll(tag);
                                }
                            } :

                            function(tag, context) {
                                var elem,
                                    tmp = [],
                                    i = 0,

                                    results = context.getElementsByTagName(tag);

                                if (tag === "*") {
                                    while ((elem = results[i++])) {
                                        if (elem.nodeType === 1) {
                                            tmp.push(elem);
                                        }
                                    }

                                    return tmp;
                                }
                                return results;
                            };

                        Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                                return context.getElementsByClassName(className);
                            }
                        };



                        rbuggyMatches = [];
                        rbuggyQSA = [];

                        if ((support.qsa = rnative.test(document.querySelectorAll))) {
                            assert(function(el) {
                                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" +
                                    "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                                    "<option selected=''></option></select>";


                                if (el.querySelectorAll("[msallowcapture^='']").length) {
                                    rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                                }

                                if (!el.querySelectorAll("[selected]").length) {
                                    rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                                }

                                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                                    rbuggyQSA.push("~=");
                                }

                                if (!el.querySelectorAll(":checked").length) {
                                    rbuggyQSA.push(":checked");
                                }

                                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                                    rbuggyQSA.push(".#.+[+~]");
                                }
                            });

                            assert(function(el) {
                                el.innerHTML = "<a href='' disabled='disabled'></a>" +
                                    "<select disabled='disabled'><option/></select>";

                                var input = document.createElement("input");
                                input.setAttribute("type", "hidden");
                                el.appendChild(input).setAttribute("name", "D");

                                if (el.querySelectorAll("[name=d]").length) {
                                    rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                                }

                                if (el.querySelectorAll(":enabled").length !== 2) {
                                    rbuggyQSA.push(":enabled", ":disabled");
                                }

                                docElem.appendChild(el).disabled = true;
                                if (el.querySelectorAll(":disabled").length !== 2) {
                                    rbuggyQSA.push(":enabled", ":disabled");
                                }

                                el.querySelectorAll("*,:x");
                                rbuggyQSA.push(",.*:");
                            });
                        }

                        if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
                                docElem.webkitMatchesSelector ||
                                docElem.mozMatchesSelector ||
                                docElem.oMatchesSelector ||
                                docElem.msMatchesSelector)))) {

                            assert(function(el) {
                                support.disconnectedMatch = matches.call(el, "*");

                                matches.call(el, "[s!='']:x");
                                rbuggyMatches.push("!=", pseudos);
                            });
                        }

                        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));


                        hasCompare = rnative.test(docElem.compareDocumentPosition);

                        contains = hasCompare || rnative.test(docElem.contains) ?
                            function(a, b) {
                                var adown = a.nodeType === 9 ? a.documentElement : a,
                                    bup = b && b.parentNode;
                                return a === bup || !!(bup && bup.nodeType === 1 && (
                                    adown.contains ?
                                    adown.contains(bup) :
                                    a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
                                ));
                            } :
                            function(a, b) {
                                if (b) {
                                    while ((b = b.parentNode)) {
                                        if (b === a) {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            };



                        sortOrder = hasCompare ?
                            function(a, b) {

                                if (a === b) {
                                    hasDuplicate = true;
                                    return 0;
                                }

                                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                if (compare) {
                                    return compare;
                                }

                                compare = (a.ownerDocument || a) === (b.ownerDocument || b) ?
                                    a.compareDocumentPosition(b) :

                                    1;

                                if (compare & 1 ||
                                    (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {


                                    if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                                        return -1;
                                    }
                                    if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                                        return 1;
                                    }

                                    return sortInput ?
                                        (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                                        0;
                                }

                                return compare & 4 ? -1 : 1;
                            } :
                            function(a, b) {
                                if (a === b) {
                                    hasDuplicate = true;
                                    return 0;
                                }

                                var cur,
                                    i = 0,
                                    aup = a.parentNode,
                                    bup = b.parentNode,
                                    ap = [a],
                                    bp = [b];

                                if (!aup || !bup) {
                                    return a === document ? -1 :
                                        b === document ? 1 :
                                        aup ? -1 :
                                        bup ? 1 :
                                        sortInput ?
                                        (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                                        0;

                                } else if (aup === bup) {
                                    return siblingCheck(a, b);
                                }

                                cur = a;
                                while ((cur = cur.parentNode)) {
                                    ap.unshift(cur);
                                }
                                cur = b;
                                while ((cur = cur.parentNode)) {
                                    bp.unshift(cur);
                                }

                                while (ap[i] === bp[i]) {
                                    i++;
                                }

                                return i ?
                                    siblingCheck(ap[i], bp[i]) :

                                    ap[i] === preferredDoc ? -1 :
                                    bp[i] === preferredDoc ? 1 :
                                    0;
                            };

                        return document;
                    };

                    Sizzle.matches = function(expr, elements) {
                        return Sizzle(expr, null, null, elements);
                    };

                    Sizzle.matchesSelector = function(elem, expr) {
                        if ((elem.ownerDocument || elem) !== document) {
                            setDocument(elem);
                        }

                        if (support.matchesSelector && documentIsHTML &&
                            !nonnativeSelectorCache[expr + " "] &&
                            (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
                            (!rbuggyQSA || !rbuggyQSA.test(expr))) {

                            try {
                                var ret = matches.call(elem, expr);

                                if (ret || support.disconnectedMatch ||
                                    elem.document && elem.document.nodeType !== 11) {
                                    return ret;
                                }
                            } catch (e) {
                                nonnativeSelectorCache(expr, true);
                            }
                        }

                        return Sizzle(expr, document, null, [elem]).length > 0;
                    };

                    Sizzle.contains = function(context, elem) {
                        if ((context.ownerDocument || context) !== document) {
                            setDocument(context);
                        }
                        return contains(context, elem);
                    };

                    Sizzle.attr = function(elem, name) {
                        if ((elem.ownerDocument || elem) !== document) {
                            setDocument(elem);
                        }

                        var fn = Expr.attrHandle[name.toLowerCase()],
                            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
                            fn(elem, name, !documentIsHTML) :
                            undefined;

                        return val !== undefined ?
                            val :
                            support.attributes || !documentIsHTML ?
                            elem.getAttribute(name) :
                            (val = elem.getAttributeNode(name)) && val.specified ?
                            val.value :
                            null;
                    };

                    Sizzle.escape = function(sel) {
                        return (sel + "").replace(rcssescape, fcssescape);
                    };

                    Sizzle.error = function(msg) {
                        throw new Error("Syntax error, unrecognized expression: " + msg);
                    };


                    Sizzle.uniqueSort = function(results) {
                        var elem,
                            duplicates = [],
                            j = 0,
                            i = 0;

                        hasDuplicate = !support.detectDuplicates;
                        sortInput = !support.sortStable && results.slice(0);
                        results.sort(sortOrder);

                        if (hasDuplicate) {
                            while ((elem = results[i++])) {
                                if (elem === results[i]) {
                                    j = duplicates.push(i);
                                }
                            }
                            while (j--) {
                                results.splice(duplicates[j], 1);
                            }
                        }

                        sortInput = null;

                        return results;
                    };

                    getText = Sizzle.getText = function(elem) {
                        var node,
                            ret = "",
                            i = 0,
                            nodeType = elem.nodeType;

                        if (!nodeType) {
                            while ((node = elem[i++])) {
                                ret += getText(node);
                            }
                        } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                            if (typeof elem.textContent === "string") {
                                return elem.textContent;
                            } else {
                                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                                    ret += getText(elem);
                                }
                            }
                        } else if (nodeType === 3 || nodeType === 4) {
                            return elem.nodeValue;
                        }

                        return ret;
                    };

                    Expr = Sizzle.selectors = {

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
                            "ATTR": function(match) {
                                match[1] = match[1].replace(runescape, funescape);

                                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

                                if (match[2] === "~=") {
                                    match[3] = " " + match[3] + " ";
                                }

                                return match.slice(0, 4);
                            },

                            "CHILD": function(match) {

                                match[1] = match[1].toLowerCase();

                                if (match[1].slice(0, 3) === "nth") {
                                    if (!match[3]) {
                                        Sizzle.error(match[0]);
                                    }

                                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                                    match[5] = +((match[7] + match[8]) || match[3] === "odd");

                                } else if (match[3]) {
                                    Sizzle.error(match[0]);
                                }

                                return match;
                            },

                            "PSEUDO": function(match) {
                                var excess,
                                    unquoted = !match[6] && match[2];

                                if (matchExpr["CHILD"].test(match[0])) {
                                    return null;
                                }

                                if (match[3]) {
                                    match[2] = match[4] || match[5] || "";

                                } else if (unquoted && rpseudo.test(unquoted) &&
                                    (excess = tokenize(unquoted, true)) &&
                                    (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

                                    match[0] = match[0].slice(0, excess);
                                    match[2] = unquoted.slice(0, excess);
                                }

                                return match.slice(0, 3);
                            }
                        },

                        filter: {

                            "TAG": function(nodeNameSelector) {
                                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                                return nodeNameSelector === "*" ?
                                    function() { return true; } :
                                    function(elem) {
                                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                                    };
                            },

                            "CLASS": function(className) {
                                var pattern = classCache[className + " "];

                                return pattern ||
                                    (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
                                    classCache(className, function(elem) {
                                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                                    });
                            },

                            "ATTR": function(name, operator, check) {
                                return function(elem) {
                                    var result = Sizzle.attr(elem, name);

                                    if (result == null) {
                                        return operator === "!=";
                                    }
                                    if (!operator) {
                                        return true;
                                    }

                                    result += "";

                                    return operator === "=" ? result === check :
                                        operator === "!=" ? result !== check :
                                        operator === "^=" ? check && result.indexOf(check) === 0 :
                                        operator === "*=" ? check && result.indexOf(check) > -1 :
                                        operator === "$=" ? check && result.slice(-check.length) === check :
                                        operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 :
                                        operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
                                        false;
                                };
                            },

                            "CHILD": function(type, what, argument, first, last) {
                                var simple = type.slice(0, 3) !== "nth",
                                    forward = type.slice(-4) !== "last",
                                    ofType = what === "of-type";

                                return first === 1 && last === 0 ?

                                    function(elem) {
                                        return !!elem.parentNode;
                                    } :

                                    function(elem, context, xml) {
                                        var cache, uniqueCache, outerCache, node, nodeIndex, start,
                                            dir = simple !== forward ? "nextSibling" : "previousSibling",
                                            parent = elem.parentNode,
                                            name = ofType && elem.nodeName.toLowerCase(),
                                            useCache = !xml && !ofType,
                                            diff = false;

                                        if (parent) {

                                            if (simple) {
                                                while (dir) {
                                                    node = elem;
                                                    while ((node = node[dir])) {
                                                        if (ofType ?
                                                            node.nodeName.toLowerCase() === name :
                                                            node.nodeType === 1) {

                                                            return false;
                                                        }
                                                    }

                                                    start = dir = type === "only" && !start && "nextSibling";
                                                }
                                                return true;
                                            }

                                            start = [forward ? parent.firstChild : parent.lastChild];

                                            if (forward && useCache) {

                                                node = parent;
                                                outerCache = node[expando] || (node[expando] = {});

                                                uniqueCache = outerCache[node.uniqueID] ||
                                                    (outerCache[node.uniqueID] = {});

                                                cache = uniqueCache[type] || [];
                                                nodeIndex = cache[0] === dirruns && cache[1];
                                                diff = nodeIndex && cache[2];
                                                node = nodeIndex && parent.childNodes[nodeIndex];

                                                while ((node = ++nodeIndex && node && node[dir] ||

                                                        (diff = nodeIndex = 0) || start.pop())) {

                                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                                        uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                        break;
                                                    }
                                                }

                                            } else {
                                                if (useCache) {
                                                    node = elem;
                                                    outerCache = node[expando] || (node[expando] = {});

                                                    uniqueCache = outerCache[node.uniqueID] ||
                                                        (outerCache[node.uniqueID] = {});

                                                    cache = uniqueCache[type] || [];
                                                    nodeIndex = cache[0] === dirruns && cache[1];
                                                    diff = nodeIndex;
                                                }

                                                if (diff === false) {

                                                    while ((node = ++nodeIndex && node && node[dir] ||
                                                            (diff = nodeIndex = 0) || start.pop())) {

                                                        if ((ofType ?
                                                                node.nodeName.toLowerCase() === name :
                                                                node.nodeType === 1) &&
                                                            ++diff) {

                                                            if (useCache) {
                                                                outerCache = node[expando] || (node[expando] = {});

                                                                uniqueCache = outerCache[node.uniqueID] ||
                                                                    (outerCache[node.uniqueID] = {});

                                                                uniqueCache[type] = [dirruns, diff];
                                                            }

                                                            if (node === elem) {
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                            diff -= last;
                                            return diff === first || (diff % first === 0 && diff / first >= 0);
                                        }
                                    };
                            },

                            "PSEUDO": function(pseudo, argument) {
                                var args,
                                    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
                                    Sizzle.error("unsupported pseudo: " + pseudo);

                                if (fn[expando]) {
                                    return fn(argument);
                                }

                                if (fn.length > 1) {
                                    args = [pseudo, pseudo, "", argument];
                                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
                                        markFunction(function(seed, matches) {
                                            var idx,
                                                matched = fn(seed, argument),
                                                i = matched.length;
                                            while (i--) {
                                                idx = indexOf(seed, matched[i]);
                                                seed[idx] = !(matches[idx] = matched[i]);
                                            }
                                        }) :
                                        function(elem) {
                                            return fn(elem, 0, args);
                                        };
                                }

                                return fn;
                            }
                        },

                        pseudos: {
                            "not": markFunction(function(selector) {
                                var input = [],
                                    results = [],
                                    matcher = compile(selector.replace(rtrim, "$1"));

                                return matcher[expando] ?
                                    markFunction(function(seed, matches, context, xml) {
                                        var elem,
                                            unmatched = matcher(seed, null, xml, []),
                                            i = seed.length;

                                        while (i--) {
                                            if ((elem = unmatched[i])) {
                                                seed[i] = !(matches[i] = elem);
                                            }
                                        }
                                    }) :
                                    function(elem, context, xml) {
                                        input[0] = elem;
                                        matcher(input, null, xml, results);
                                        input[0] = null;
                                        return !results.pop();
                                    };
                            }),

                            "has": markFunction(function(selector) {
                                return function(elem) {
                                    return Sizzle(selector, elem).length > 0;
                                };
                            }),

                            "contains": markFunction(function(text) {
                                text = text.replace(runescape, funescape);
                                return function(elem) {
                                    return (elem.textContent || getText(elem)).indexOf(text) > -1;
                                };
                            }),

                            "lang": markFunction(function(lang) {
                                if (!ridentifier.test(lang || "")) {
                                    Sizzle.error("unsupported lang: " + lang);
                                }
                                lang = lang.replace(runescape, funescape).toLowerCase();
                                return function(elem) {
                                    var elemLang;
                                    do {
                                        if ((elemLang = documentIsHTML ?
                                                elem.lang :
                                                elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {

                                            elemLang = elemLang.toLowerCase();
                                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                        }
                                    } while ((elem = elem.parentNode) && elem.nodeType === 1);
                                    return false;
                                };
                            }),

                            "target": function(elem) {
                                var hash = window.location && window.location.hash;
                                return hash && hash.slice(1) === elem.id;
                            },

                            "root": function(elem) {
                                return elem === docElem;
                            },

                            "focus": function(elem) {
                                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                            },

                            "enabled": createDisabledPseudo(false),
                            "disabled": createDisabledPseudo(true),

                            "checked": function(elem) {
                                var nodeName = elem.nodeName.toLowerCase();
                                return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
                            },

                            "selected": function(elem) {
                                if (elem.parentNode) {
                                    elem.parentNode.selectedIndex;
                                }

                                return elem.selected === true;
                            },

                            "empty": function(elem) {
                                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                                    if (elem.nodeType < 6) {
                                        return false;
                                    }
                                }
                                return true;
                            },

                            "parent": function(elem) {
                                return !Expr.pseudos["empty"](elem);
                            },

                            "header": function(elem) {
                                return rheader.test(elem.nodeName);
                            },

                            "input": function(elem) {
                                return rinputs.test(elem.nodeName);
                            },

                            "button": function(elem) {
                                var name = elem.nodeName.toLowerCase();
                                return name === "input" && elem.type === "button" || name === "button";
                            },

                            "text": function(elem) {
                                var attr;
                                return elem.nodeName.toLowerCase() === "input" &&
                                    elem.type === "text" &&

                                    ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                            },

                            "first": createPositionalPseudo(function() {
                                return [0];
                            }),

                            "last": createPositionalPseudo(function(matchIndexes, length) {
                                return [length - 1];
                            }),

                            "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                                return [argument < 0 ? argument + length : argument];
                            }),

                            "even": createPositionalPseudo(function(matchIndexes, length) {
                                var i = 0;
                                for (; i < length; i += 2) {
                                    matchIndexes.push(i);
                                }
                                return matchIndexes;
                            }),

                            "odd": createPositionalPseudo(function(matchIndexes, length) {
                                var i = 1;
                                for (; i < length; i += 2) {
                                    matchIndexes.push(i);
                                }
                                return matchIndexes;
                            }),

                            "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                                var i = argument < 0 ?
                                    argument + length :
                                    argument > length ?
                                    length :
                                    argument;
                                for (; --i >= 0;) {
                                    matchIndexes.push(i);
                                }
                                return matchIndexes;
                            }),

                            "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument;
                                for (; ++i < length;) {
                                    matchIndexes.push(i);
                                }
                                return matchIndexes;
                            })
                        }
                    };

                    Expr.pseudos["nth"] = Expr.pseudos["eq"];
                    for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
                        Expr.pseudos[i] = createInputPseudo(i);
                    }
                    for (i in { submit: true, reset: true }) {
                        Expr.pseudos[i] = createButtonPseudo(i);
                    }

                    function setFilters() {}
                    setFilters.prototype = Expr.filters = Expr.pseudos;
                    Expr.setFilters = new setFilters();

                    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                        var matched, match, tokens, type,
                            soFar, groups, preFilters,
                            cached = tokenCache[selector + " "];

                        if (cached) {
                            return parseOnly ? 0 : cached.slice(0);
                        }

                        soFar = selector;
                        groups = [];
                        preFilters = Expr.preFilter;

                        while (soFar) {

                            if (!matched || (match = rcomma.exec(soFar))) {
                                if (match) {
                                    soFar = soFar.slice(match[0].length) || soFar;
                                }
                                groups.push((tokens = []));
                            }

                            matched = false;

                            if ((match = rcombinators.exec(soFar))) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type: match[0].replace(rtrim, " ")
                                });
                                soFar = soFar.slice(matched.length);
                            }

                            for (type in Expr.filter) {
                                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
                                        (match = preFilters[type](match)))) {
                                    matched = match.shift();
                                    tokens.push({
                                        value: matched,
                                        type: type,
                                        matches: match
                                    });
                                    soFar = soFar.slice(matched.length);
                                }
                            }

                            if (!matched) {
                                break;
                            }
                        }
                        return parseOnly ?
                            soFar.length :
                            soFar ?
                            Sizzle.error(selector) :
                            tokenCache(selector, groups).slice(0);
                    };

                    function toSelector(tokens) {
                        var i = 0,
                            len = tokens.length,
                            selector = "";
                        for (; i < len; i++) {
                            selector += tokens[i].value;
                        }
                        return selector;
                    }

                    function addCombinator(matcher, combinator, base) {
                        var dir = combinator.dir,
                            skip = combinator.next,
                            key = skip || dir,
                            checkNonElements = base && key === "parentNode",
                            doneName = done++;

                        return combinator.first ?
                            function(elem, context, xml) {
                                while ((elem = elem[dir])) {
                                    if (elem.nodeType === 1 || checkNonElements) {
                                        return matcher(elem, context, xml);
                                    }
                                }
                                return false;
                            } :
                            function(elem, context, xml) {
                                var oldCache, uniqueCache, outerCache,
                                    newCache = [dirruns, doneName];
                                if (xml) {
                                    while ((elem = elem[dir])) {
                                        if (elem.nodeType === 1 || checkNonElements) {
                                            if (matcher(elem, context, xml)) {
                                                return true;
                                            }
                                        }
                                    }
                                } else {
                                    while ((elem = elem[dir])) {
                                        if (elem.nodeType === 1 || checkNonElements) {
                                            outerCache = elem[expando] || (elem[expando] = {});

                                            uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

                                            if (skip && skip === elem.nodeName.toLowerCase()) {
                                                elem = elem[dir] || elem;
                                            } else if ((oldCache = uniqueCache[key]) &&
                                                oldCache[0] === dirruns && oldCache[1] === doneName) {


                                                return (newCache[2] = oldCache[2]);
                                            } else {
                                                uniqueCache[key] = newCache;

                                                if ((newCache[2] = matcher(elem, context, xml))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                                return false;
                            };
                    }

                    function elementMatcher(matchers) {
                        return matchers.length > 1 ?
                            function(elem, context, xml) {
                                var i = matchers.length;
                                while (i--) {
                                    if (!matchers[i](elem, context, xml)) {
                                        return false;
                                    }
                                }
                                return true;
                            } :
                            matchers[0];
                    }

                    function multipleContexts(selector, contexts, results) {
                        var i = 0,
                            len = contexts.length;
                        for (; i < len; i++) {
                            Sizzle(selector, contexts[i], results);
                        }
                        return results;
                    }

                    function condense(unmatched, map, filter, context, xml) {
                        var elem,
                            newUnmatched = [],
                            i = 0,
                            len = unmatched.length,
                            mapped = map != null;

                        for (; i < len; i++) {
                            if ((elem = unmatched[i])) {
                                if (!filter || filter(elem, context, xml)) {
                                    newUnmatched.push(elem);
                                    if (mapped) {
                                        map.push(i);
                                    }
                                }
                            }
                        }

                        return newUnmatched;
                    }

                    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                        if (postFilter && !postFilter[expando]) {
                            postFilter = setMatcher(postFilter);
                        }
                        if (postFinder && !postFinder[expando]) {
                            postFinder = setMatcher(postFinder, postSelector);
                        }
                        return markFunction(function(seed, results, context, xml) {
                            var temp, i, elem,
                                preMap = [],
                                postMap = [],
                                preexisting = results.length,

                                elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


                                matcherIn = preFilter && (seed || !selector) ?
                                condense(elems, preMap, preFilter, context, xml) :
                                elems,

                                matcherOut = matcher ?

                                postFinder || (seed ? preFilter : preexisting || postFilter) ?

                                [] :

                                results :
                                matcherIn;

                            if (matcher) {
                                matcher(matcherIn, matcherOut, context, xml);
                            }

                            if (postFilter) {
                                temp = condense(matcherOut, postMap);
                                postFilter(temp, [], context, xml);

                                i = temp.length;
                                while (i--) {
                                    if ((elem = temp[i])) {
                                        matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                                    }
                                }
                            }

                            if (seed) {
                                if (postFinder || preFilter) {
                                    if (postFinder) {

                                        temp = [];
                                        i = matcherOut.length;
                                        while (i--) {
                                            if ((elem = matcherOut[i])) {

                                                temp.push((matcherIn[i] = elem));
                                            }
                                        }
                                        postFinder(null, (matcherOut = []), temp, xml);
                                    }

                                    i = matcherOut.length;
                                    while (i--) {
                                        if ((elem = matcherOut[i]) &&
                                            (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

                                            seed[temp] = !(results[temp] = elem);
                                        }
                                    }
                                }


                            } else {
                                matcherOut = condense(
                                    matcherOut === results ?
                                    matcherOut.splice(preexisting, matcherOut.length) :
                                    matcherOut
                                );
                                if (postFinder) {
                                    postFinder(null, results, matcherOut, xml);
                                } else {
                                    push.apply(results, matcherOut);
                                }
                            }
                        });
                    }

                    function matcherFromTokens(tokens) {
                        var checkContext, matcher, j,
                            len = tokens.length,
                            leadingRelative = Expr.relative[tokens[0].type],
                            implicitRelative = leadingRelative || Expr.relative[" "],
                            i = leadingRelative ? 1 : 0,


                            matchContext = addCombinator(function(elem) {
                                return elem === checkContext;
                            }, implicitRelative, true),
                            matchAnyContext = addCombinator(function(elem) {
                                return indexOf(checkContext, elem) > -1;
                            }, implicitRelative, true),
                            matchers = [function(elem, context, xml) {
                                var ret = (!leadingRelative && (xml || context !== outermostContext)) || (
                                    (checkContext = context).nodeType ?
                                    matchContext(elem, context, xml) :
                                    matchAnyContext(elem, context, xml));

                                checkContext = null;
                                return ret;
                            }];

                        for (; i < len; i++) {
                            if ((matcher = Expr.relative[tokens[i].type])) {
                                matchers = [addCombinator(elementMatcher(matchers), matcher)];
                            } else {
                                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);


                                if (matcher[expando]) {

                                    j = ++i;
                                    for (; j < len; j++) {
                                        if (Expr.relative[tokens[j].type]) {
                                            break;
                                        }
                                    }
                                    return setMatcher(
                                        i > 1 && elementMatcher(matchers),
                                        i > 1 && toSelector(

                                            tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })
                                        ).replace(rtrim, "$1"),
                                        matcher,
                                        i < j && matcherFromTokens(tokens.slice(i, j)),
                                        j < len && matcherFromTokens((tokens = tokens.slice(j))),
                                        j < len && toSelector(tokens)
                                    );
                                }
                                matchers.push(matcher);
                            }
                        }

                        return elementMatcher(matchers);
                    }

                    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                        var bySet = setMatchers.length > 0,
                            byElement = elementMatchers.length > 0,
                            superMatcher = function(seed, context, xml, results, outermost) {
                                var elem, j, matcher,
                                    matchedCount = 0,
                                    i = "0",
                                    unmatched = seed && [],
                                    setMatched = [],
                                    contextBackup = outermostContext,

                                    elems = seed || byElement && Expr.find["TAG"]("*", outermost),

                                    dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                                    len = elems.length;

                                if (outermost) {
                                    outermostContext = context === document || context || outermost;
                                }




                                for (; i !== len && (elem = elems[i]) != null; i++) {
                                    if (byElement && elem) {
                                        j = 0;
                                        if (!context && elem.ownerDocument !== document) {
                                            setDocument(elem);
                                            xml = !documentIsHTML;
                                        }
                                        while ((matcher = elementMatchers[j++])) {
                                            if (matcher(elem, context || document, xml)) {
                                                results.push(elem);
                                                break;
                                            }
                                        }
                                        if (outermost) {
                                            dirruns = dirrunsUnique;
                                        }
                                    }


                                    if (bySet) {

                                        if ((elem = !matcher && elem)) {
                                            matchedCount--;
                                        }


                                        if (seed) {
                                            unmatched.push(elem);
                                        }
                                    }
                                }



                                matchedCount += i;








                                if (bySet && i !== matchedCount) {
                                    j = 0;
                                    while ((matcher = setMatchers[j++])) {
                                        matcher(unmatched, setMatched, context, xml);
                                    }

                                    if (seed) {

                                        if (matchedCount > 0) {
                                            while (i--) {
                                                if (!(unmatched[i] || setMatched[i])) {
                                                    setMatched[i] = pop.call(results);
                                                }
                                            }
                                        }


                                        setMatched = condense(setMatched);
                                    }


                                    push.apply(results, setMatched);


                                    if (outermost && !seed && setMatched.length > 0 &&
                                        (matchedCount + setMatchers.length) > 1) {

                                        Sizzle.uniqueSort(results);
                                    }
                                }


                                if (outermost) {
                                    dirruns = dirrunsUnique;
                                    outermostContext = contextBackup;
                                }

                                return unmatched;
                            };

                        return bySet ?
                            markFunction(superMatcher) :
                            superMatcher;
                    }

                    compile = Sizzle.compile = function(selector, match) {
                        var i,
                            setMatchers = [],
                            elementMatchers = [],
                            cached = compilerCache[selector + " "];

                        if (!cached) {

                            if (!match) {
                                match = tokenize(selector);
                            }
                            i = match.length;
                            while (i--) {
                                cached = matcherFromTokens(match[i]);
                                if (cached[expando]) {
                                    setMatchers.push(cached);
                                } else {
                                    elementMatchers.push(cached);
                                }
                            }


                            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));


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
                    select = Sizzle.select = function(selector, context, results, seed) {
                        var i, tokens, token, type, find,
                            compiled = typeof selector === "function" && selector,
                            match = !seed && tokenize((selector = compiled.selector || selector));

                        results = results || [];



                        if (match.length === 1) {


                            tokens = match[0] = match[0].slice(0);
                            if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                                context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

                                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                                if (!context) {
                                    return results;


                                } else if (compiled) {
                                    context = context.parentNode;
                                }

                                selector = selector.slice(tokens.shift().value.length);
                            }


                            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                            while (i--) {
                                token = tokens[i];


                                if (Expr.relative[(type = token.type)]) {
                                    break;
                                }
                                if ((find = Expr.find[type])) {

                                    if ((seed = find(
                                            token.matches[0].replace(runescape, funescape),
                                            rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                                        ))) {


                                        tokens.splice(i, 1);
                                        selector = seed.length && toSelector(tokens);
                                        if (!selector) {
                                            push.apply(results, seed);
                                            return results;
                                        }

                                        break;
                                    }
                                }
                            }
                        }



                        (compiled || compile(selector, match))(
                            seed,
                            context, !documentIsHTML,
                            results, !context || rsibling.test(selector) && testContext(context.parentNode) || context
                        );
                        return results;
                    };




                    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;



                    support.detectDuplicates = !!hasDuplicate;


                    setDocument();



                    support.sortDetached = assert(function(el) {

                        return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
                    });




                    if (!assert(function(el) {
                            el.innerHTML = "<a href='#'></a>";
                            return el.firstChild.getAttribute("href") === "#";
                        })) {
                        addHandle("type|href|height|width", function(elem, name, isXML) {
                            if (!isXML) {
                                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                            }
                        });
                    }



                    if (!support.attributes || !assert(function(el) {
                            el.innerHTML = "<input/>";
                            el.firstChild.setAttribute("value", "");
                            return el.firstChild.getAttribute("value") === "";
                        })) {
                        addHandle("value", function(elem, name, isXML) {
                            if (!isXML && elem.nodeName.toLowerCase() === "input") {
                                return elem.defaultValue;
                            }
                        });
                    }



                    if (!assert(function(el) {
                            return el.getAttribute("disabled") == null;
                        })) {
                        addHandle(booleans, function(elem, name, isXML) {
                            var val;
                            if (!isXML) {
                                return elem[name] === true ? name.toLowerCase() :
                                    (val = elem.getAttributeNode(name)) && val.specified ?
                                    val.value :
                                    null;
                            }
                        });
                    }

                    return Sizzle;

                })(window);



            jQuery.find = Sizzle;
            jQuery.expr = Sizzle.selectors;


            jQuery.expr[":"] = jQuery.expr.pseudos;
            jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
            jQuery.text = Sizzle.getText;
            jQuery.isXMLDoc = Sizzle.isXML;
            jQuery.contains = Sizzle.contains;
            jQuery.escapeSelector = Sizzle.escape;




            var dir = function(elem, dir, until) {
                var matched = [],
                    truncate = until !== undefined;

                while ((elem = elem[dir]) && elem.nodeType !== 9) {
                    if (elem.nodeType === 1) {
                        if (truncate && jQuery(elem).is(until)) {
                            break;
                        }
                        matched.push(elem);
                    }
                }
                return matched;
            };


            var siblings = function(n, elem) {
                var matched = [];

                for (; n; n = n.nextSibling) {
                    if (n.nodeType === 1 && n !== elem) {
                        matched.push(n);
                    }
                }

                return matched;
            };


            var rneedsContext = jQuery.expr.match.needsContext;



            function nodeName(elem, name) {

                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

            };
            var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);




            function winnow(elements, qualifier, not) {
                if (isFunction(qualifier)) {
                    return jQuery.grep(elements, function(elem, i) {
                        return !!qualifier.call(elem, i, elem) !== not;
                    });
                }


                if (qualifier.nodeType) {
                    return jQuery.grep(elements, function(elem) {
                        return (elem === qualifier) !== not;
                    });
                }


                if (typeof qualifier !== "string") {
                    return jQuery.grep(elements, function(elem) {
                        return (indexOf.call(qualifier, elem) > -1) !== not;
                    });
                }


                return jQuery.filter(qualifier, elements, not);
            }

            jQuery.filter = function(expr, elems, not) {
                var elem = elems[0];

                if (not) {
                    expr = ":not(" + expr + ")";
                }

                if (elems.length === 1 && elem.nodeType === 1) {
                    return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
                }

                return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                    return elem.nodeType === 1;
                }));
            };

            jQuery.fn.extend({
                find: function(selector) {
                    var i, ret,
                        len = this.length,
                        self = this;

                    if (typeof selector !== "string") {
                        return this.pushStack(jQuery(selector).filter(function() {
                            for (i = 0; i < len; i++) {
                                if (jQuery.contains(self[i], this)) {
                                    return true;
                                }
                            }
                        }));
                    }

                    ret = this.pushStack([]);

                    for (i = 0; i < len; i++) {
                        jQuery.find(selector, self[i], ret);
                    }

                    return len > 1 ? jQuery.uniqueSort(ret) : ret;
                },
                filter: function(selector) {
                    return this.pushStack(winnow(this, selector || [], false));
                },
                not: function(selector) {
                    return this.pushStack(winnow(this, selector || [], true));
                },
                is: function(selector) {
                    return !!winnow(
                        this,



                        typeof selector === "string" && rneedsContext.test(selector) ?
                        jQuery(selector) :
                        selector || [],
                        false
                    ).length;
                }
            });






            var rootjQuery,





                rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

                init = jQuery.fn.init = function(selector, context, root) {
                    var match, elem;


                    if (!selector) {
                        return this;
                    }



                    root = root || rootjQuery;


                    if (typeof selector === "string") {
                        if (selector[0] === "<" &&
                            selector[selector.length - 1] === ">" &&
                            selector.length >= 3) {


                            match = [null, selector, null];

                        } else {
                            match = rquickExpr.exec(selector);
                        }


                        if (match && (match[1] || !context)) {


                            if (match[1]) {
                                context = context instanceof jQuery ? context[0] : context;



                                jQuery.merge(this, jQuery.parseHTML(
                                    match[1],
                                    context && context.nodeType ? context.ownerDocument || context : document,
                                    true
                                ));


                                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                                    for (match in context) {


                                        if (isFunction(this[match])) {
                                            this[match](context[match]);


                                        } else {
                                            this.attr(match, context[match]);
                                        }
                                    }
                                }

                                return this;


                            } else {
                                elem = document.getElementById(match[2]);

                                if (elem) {


                                    this[0] = elem;
                                    this.length = 1;
                                }
                                return this;
                            }


                        } else if (!context || context.jquery) {
                            return (context || root).find(selector);



                        } else {
                            return this.constructor(context).find(selector);
                        }


                    } else if (selector.nodeType) {
                        this[0] = selector;
                        this.length = 1;
                        return this;



                    } else if (isFunction(selector)) {
                        return root.ready !== undefined ?
                            root.ready(selector) :


                            selector(jQuery);
                    }

                    return jQuery.makeArray(selector, this);
                };


            init.prototype = jQuery.fn;


            rootjQuery = jQuery(document);


            var rparentsprev = /^(?:parents|prev(?:Until|All))/,


                guaranteedUnique = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };

            jQuery.fn.extend({
                has: function(target) {
                    var targets = jQuery(target, this),
                        l = targets.length;

                    return this.filter(function() {
                        var i = 0;
                        for (; i < l; i++) {
                            if (jQuery.contains(this, targets[i])) {
                                return true;
                            }
                        }
                    });
                },

                closest: function(selectors, context) {
                    var cur,
                        i = 0,
                        l = this.length,
                        matched = [],
                        targets = typeof selectors !== "string" && jQuery(selectors);


                    if (!rneedsContext.test(selectors)) {
                        for (; i < l; i++) {
                            for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {


                                if (cur.nodeType < 11 && (targets ?
                                        targets.index(cur) > -1 :


                                        cur.nodeType === 1 &&
                                        jQuery.find.matchesSelector(cur, selectors))) {

                                    matched.push(cur);
                                    break;
                                }
                            }
                        }
                    }

                    return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
                },


                index: function(elem) {


                    if (!elem) {
                        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
                    }


                    if (typeof elem === "string") {
                        return indexOf.call(jQuery(elem), this[0]);
                    }


                    return indexOf.call(this,


                        elem.jquery ? elem[0] : elem
                    );
                },

                add: function(selector, context) {
                    return this.pushStack(
                        jQuery.uniqueSort(
                            jQuery.merge(this.get(), jQuery(selector, context))
                        )
                    );
                },

                addBack: function(selector) {
                    return this.add(selector == null ?
                        this.prevObject : this.prevObject.filter(selector)
                    );
                }
            });

            function sibling(cur, dir) {
                while ((cur = cur[dir]) && cur.nodeType !== 1) {}
                return cur;
            }

            jQuery.each({
                parent: function(elem) {
                    var parent = elem.parentNode;
                    return parent && parent.nodeType !== 11 ? parent : null;
                },
                parents: function(elem) {
                    return dir(elem, "parentNode");
                },
                parentsUntil: function(elem, i, until) {
                    return dir(elem, "parentNode", until);
                },
                next: function(elem) {
                    return sibling(elem, "nextSibling");
                },
                prev: function(elem) {
                    return sibling(elem, "previousSibling");
                },
                nextAll: function(elem) {
                    return dir(elem, "nextSibling");
                },
                prevAll: function(elem) {
                    return dir(elem, "previousSibling");
                },
                nextUntil: function(elem, i, until) {
                    return dir(elem, "nextSibling", until);
                },
                prevUntil: function(elem, i, until) {
                    return dir(elem, "previousSibling", until);
                },
                siblings: function(elem) {
                    return siblings((elem.parentNode || {}).firstChild, elem);
                },
                children: function(elem) {
                    return siblings(elem.firstChild);
                },
                contents: function(elem) {
                    if (typeof elem.contentDocument !== "undefined") {
                        return elem.contentDocument;
                    }




                    if (nodeName(elem, "template")) {
                        elem = elem.content || elem;
                    }

                    return jQuery.merge([], elem.childNodes);
                }
            }, function(name, fn) {
                jQuery.fn[name] = function(until, selector) {
                    var matched = jQuery.map(this, fn, until);

                    if (name.slice(-5) !== "Until") {
                        selector = until;
                    }

                    if (selector && typeof selector === "string") {
                        matched = jQuery.filter(selector, matched);
                    }

                    if (this.length > 1) {


                        if (!guaranteedUnique[name]) {
                            jQuery.uniqueSort(matched);
                        }


                        if (rparentsprev.test(name)) {
                            matched.reverse();
                        }
                    }

                    return this.pushStack(matched);
                };
            });
            var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);




            function createOptions(options) {
                var object = {};
                jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
                    object[flag] = true;
                });
                return object;
            }


            jQuery.Callbacks = function(options) {



                options = typeof options === "string" ?
                    createOptions(options) :
                    jQuery.extend({}, options);

                var
                    firing,


                    memory,


                    fired,


                    locked,


                    list = [],


                    queue = [],


                    firingIndex = -1,


                    fire = function() {


                        locked = locked || options.once;



                        fired = firing = true;
                        for (; queue.length; firingIndex = -1) {
                            memory = queue.shift();
                            while (++firingIndex < list.length) {


                                if (list[firingIndex].apply(memory[0], memory[1]) === false &&
                                    options.stopOnFalse) {


                                    firingIndex = list.length;
                                    memory = false;
                                }
                            }
                        }


                        if (!options.memory) {
                            memory = false;
                        }

                        firing = false;


                        if (locked) {


                            if (memory) {
                                list = [];


                            } else {
                                list = "";
                            }
                        }
                    },


                    self = {


                        add: function() {
                            if (list) {


                                if (memory && !firing) {
                                    firingIndex = list.length - 1;
                                    queue.push(memory);
                                }

                                (function add(args) {
                                    jQuery.each(args, function(_, arg) {
                                        if (isFunction(arg)) {
                                            if (!options.unique || !self.has(arg)) {
                                                list.push(arg);
                                            }
                                        } else if (arg && arg.length && toType(arg) !== "string") {


                                            add(arg);
                                        }
                                    });
                                })(arguments);

                                if (memory && !firing) {
                                    fire();
                                }
                            }
                            return this;
                        },


                        remove: function() {
                            jQuery.each(arguments, function(_, arg) {
                                var index;
                                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                    list.splice(index, 1);


                                    if (index <= firingIndex) {
                                        firingIndex--;
                                    }
                                }
                            });
                            return this;
                        },



                        has: function(fn) {
                            return fn ?
                                jQuery.inArray(fn, list) > -1 :
                                list.length > 0;
                        },


                        empty: function() {
                            if (list) {
                                list = [];
                            }
                            return this;
                        },




                        disable: function() {
                            locked = queue = [];
                            list = memory = "";
                            return this;
                        },
                        disabled: function() {
                            return !list;
                        },




                        lock: function() {
                            locked = queue = [];
                            if (!memory && !firing) {
                                list = memory = "";
                            }
                            return this;
                        },
                        locked: function() {
                            return !!locked;
                        },


                        fireWith: function(context, args) {
                            if (!locked) {
                                args = args || [];
                                args = [context, args.slice ? args.slice() : args];
                                queue.push(args);
                                if (!firing) {
                                    fire();
                                }
                            }
                            return this;
                        },


                        fire: function() {
                            self.fireWith(this, arguments);
                            return this;
                        },


                        fired: function() {
                            return !!fired;
                        }
                    };

                return self;
            };


            function Identity(v) {
                return v;
            }

            function Thrower(ex) {
                throw ex;
            }

            function adoptValue(value, resolve, reject, noValue) {
                var method;

                try {


                    if (value && isFunction((method = value.promise))) {
                        method.call(value).done(resolve).fail(reject);


                    } else if (value && isFunction((method = value.then))) {
                        method.call(value, resolve, reject);


                    } else {




                        resolve.apply(undefined, [value].slice(noValue));
                    }




                } catch (value) {



                    reject.apply(undefined, [value]);
                }
            }

            jQuery.extend({

                Deferred: function(func) {
                    var tuples = [



                            ["notify", "progress", jQuery.Callbacks("memory"),
                                jQuery.Callbacks("memory"), 2
                            ],
                            ["resolve", "done", jQuery.Callbacks("once memory"),
                                jQuery.Callbacks("once memory"), 0, "resolved"
                            ],
                            ["reject", "fail", jQuery.Callbacks("once memory"),
                                jQuery.Callbacks("once memory"), 1, "rejected"
                            ]
                        ],
                        state = "pending",
                        promise = {
                            state: function() {
                                return state;
                            },
                            always: function() {
                                deferred.done(arguments).fail(arguments);
                                return this;
                            },
                            "catch": function(fn) {
                                return promise.then(null, fn);
                            },


                            pipe: function() {
                                var fns = arguments;

                                return jQuery.Deferred(function(newDefer) {
                                    jQuery.each(tuples, function(i, tuple) {


                                        var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];




                                        deferred[tuple[1]](function() {
                                            var returned = fn && fn.apply(this, arguments);
                                            if (returned && isFunction(returned.promise)) {
                                                returned.promise()
                                                    .progress(newDefer.notify)
                                                    .done(newDefer.resolve)
                                                    .fail(newDefer.reject);
                                            } else {
                                                newDefer[tuple[0] + "With"](
                                                    this,
                                                    fn ? [returned] : arguments
                                                );
                                            }
                                        });
                                    });
                                    fns = null;
                                }).promise();
                            },
                            then: function(onFulfilled, onRejected, onProgress) {
                                var maxDepth = 0;

                                function resolve(depth, deferred, handler, special) {
                                    return function() {
                                        var that = this,
                                            args = arguments,
                                            mightThrow = function() {
                                                var returned, then;




                                                if (depth < maxDepth) {
                                                    return;
                                                }

                                                returned = handler.apply(that, args);



                                                if (returned === deferred.promise()) {
                                                    throw new TypeError("Thenable self-resolution");
                                                }





                                                then = returned &&




                                                    (typeof returned === "object" ||
                                                        typeof returned === "function") &&
                                                    returned.then;


                                                if (isFunction(then)) {


                                                    if (special) {
                                                        then.call(
                                                            returned,
                                                            resolve(maxDepth, deferred, Identity, special),
                                                            resolve(maxDepth, deferred, Thrower, special)
                                                        );


                                                    } else {


                                                        maxDepth++;

                                                        then.call(
                                                            returned,
                                                            resolve(maxDepth, deferred, Identity, special),
                                                            resolve(maxDepth, deferred, Thrower, special),
                                                            resolve(maxDepth, deferred, Identity,
                                                                deferred.notifyWith)
                                                        );
                                                    }


                                                } else {



                                                    if (handler !== Identity) {
                                                        that = undefined;
                                                        args = [returned];
                                                    }



                                                    (special || deferred.resolveWith)(that, args);
                                                }
                                            },


                                            process = special ?
                                            mightThrow :
                                            function() {
                                                try {
                                                    mightThrow();
                                                } catch (e) {

                                                    if (jQuery.Deferred.exceptionHook) {
                                                        jQuery.Deferred.exceptionHook(e,
                                                            process.stackTrace);
                                                    }




                                                    if (depth + 1 >= maxDepth) {



                                                        if (handler !== Thrower) {
                                                            that = undefined;
                                                            args = [e];
                                                        }

                                                        deferred.rejectWith(that, args);
                                                    }
                                                }
                                            };





                                        if (depth) {
                                            process();
                                        } else {



                                            if (jQuery.Deferred.getStackHook) {
                                                process.stackTrace = jQuery.Deferred.getStackHook();
                                            }
                                            window.setTimeout(process);
                                        }
                                    };
                                }

                                return jQuery.Deferred(function(newDefer) {


                                    tuples[0][3].add(
                                        resolve(
                                            0,
                                            newDefer,
                                            isFunction(onProgress) ?
                                            onProgress :
                                            Identity,
                                            newDefer.notifyWith
                                        )
                                    );


                                    tuples[1][3].add(
                                        resolve(
                                            0,
                                            newDefer,
                                            isFunction(onFulfilled) ?
                                            onFulfilled :
                                            Identity
                                        )
                                    );


                                    tuples[2][3].add(
                                        resolve(
                                            0,
                                            newDefer,
                                            isFunction(onRejected) ?
                                            onRejected :
                                            Thrower
                                        )
                                    );
                                }).promise();
                            },



                            promise: function(obj) {
                                return obj != null ? jQuery.extend(obj, promise) : promise;
                            }
                        },
                        deferred = {};


                    jQuery.each(tuples, function(i, tuple) {
                        var list = tuple[2],
                            stateString = tuple[5];




                        promise[tuple[1]] = list.add;


                        if (stateString) {
                            list.add(
                                function() {



                                    state = stateString;
                                },



                                tuples[3 - i][2].disable,



                                tuples[3 - i][3].disable,


                                tuples[0][2].lock,


                                tuples[0][3].lock
                            );
                        }




                        list.add(tuple[3].fire);




                        deferred[tuple[0]] = function() {
                            deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                            return this;
                        };




                        deferred[tuple[0] + "With"] = list.fireWith;
                    });


                    promise.promise(deferred);


                    if (func) {
                        func.call(deferred, deferred);
                    }


                    return deferred;
                },


                when: function(singleValue) {
                    var


                        remaining = arguments.length,


                        i = remaining,


                        resolveContexts = Array(i),
                        resolveValues = slice.call(arguments),


                        master = jQuery.Deferred(),


                        updateFunc = function(i) {
                            return function(value) {
                                resolveContexts[i] = this;
                                resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                                if (!(--remaining)) {
                                    master.resolveWith(resolveContexts, resolveValues);
                                }
                            };
                        };


                    if (remaining <= 1) {
                        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);


                        if (master.state() === "pending" ||
                            isFunction(resolveValues[i] && resolveValues[i].then)) {

                            return master.then();
                        }
                    }


                    while (i--) {
                        adoptValue(resolveValues[i], updateFunc(i), master.reject);
                    }

                    return master.promise();
                }
            });




            var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

            jQuery.Deferred.exceptionHook = function(error, stack) {



                if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
                    window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
                }
            };




            jQuery.readyException = function(error) {
                window.setTimeout(function() {
                    throw error;
                });
            };





            var readyList = jQuery.Deferred();

            jQuery.fn.ready = function(fn) {

                readyList
                    .then(fn)




                .catch(function(error) {
                    jQuery.readyException(error);
                });

                return this;
            };

            jQuery.extend({


                isReady: false,



                readyWait: 1,


                ready: function(wait) {


                    if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                        return;
                    }


                    jQuery.isReady = true;


                    if (wait !== true && --jQuery.readyWait > 0) {
                        return;
                    }


                    readyList.resolveWith(document, [jQuery]);
                }
            });

            jQuery.ready.then = readyList.then;


            function completed() {
                document.removeEventListener("DOMContentLoaded", completed);
                window.removeEventListener("load", completed);
                jQuery.ready();
            }





            if (document.readyState === "complete" ||
                (document.readyState !== "loading" && !document.documentElement.doScroll)) {


                window.setTimeout(jQuery.ready);

            } else {


                document.addEventListener("DOMContentLoaded", completed);


                window.addEventListener("load", completed);
            }






            var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                var i = 0,
                    len = elems.length,
                    bulk = key == null;


                if (toType(key) === "object") {
                    chainable = true;
                    for (i in key) {
                        access(elems, fn, i, key[i], true, emptyGet, raw);
                    }


                } else if (value !== undefined) {
                    chainable = true;

                    if (!isFunction(value)) {
                        raw = true;
                    }

                    if (bulk) {


                        if (raw) {
                            fn.call(elems, value);
                            fn = null;


                        } else {
                            bulk = fn;
                            fn = function(elem, key, value) {
                                return bulk.call(jQuery(elem), value);
                            };
                        }
                    }

                    if (fn) {
                        for (; i < len; i++) {
                            fn(
                                elems[i], key, raw ?
                                value :
                                value.call(elems[i], i, fn(elems[i], key))
                            );
                        }
                    }
                }

                if (chainable) {
                    return elems;
                }


                if (bulk) {
                    return fn.call(elems);
                }

                return len ? fn(elems[0], key) : emptyGet;
            };



            var rmsPrefix = /^-ms-/,
                rdashAlpha = /-([a-z])/g;


            function fcamelCase(all, letter) {
                return letter.toUpperCase();
            }




            function camelCase(string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
            }
            var acceptData = function(owner) {







                return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
            };




            function Data() {
                this.expando = jQuery.expando + Data.uid++;
            }

            Data.uid = 1;

            Data.prototype = {

                cache: function(owner) {


                    var value = owner[this.expando];


                    if (!value) {
                        value = {};




                        if (acceptData(owner)) {



                            if (owner.nodeType) {
                                owner[this.expando] = value;




                            } else {
                                Object.defineProperty(owner, this.expando, {
                                    value: value,
                                    configurable: true
                                });
                            }
                        }
                    }

                    return value;
                },
                set: function(owner, data, value) {
                    var prop,
                        cache = this.cache(owner);



                    if (typeof data === "string") {
                        cache[camelCase(data)] = value;


                    } else {


                        for (prop in data) {
                            cache[camelCase(prop)] = data[prop];
                        }
                    }
                    return cache;
                },
                get: function(owner, key) {
                    return key === undefined ?
                        this.cache(owner) :


                        owner[this.expando] && owner[this.expando][camelCase(key)];
                },
                access: function(owner, key, value) {












                    if (key === undefined ||
                        ((key && typeof key === "string") && value === undefined)) {

                        return this.get(owner, key);
                    }







                    this.set(owner, key, value);



                    return value !== undefined ? value : key;
                },
                remove: function(owner, key) {
                    var i,
                        cache = owner[this.expando];

                    if (cache === undefined) {
                        return;
                    }

                    if (key !== undefined) {


                        if (Array.isArray(key)) {



                            key = key.map(camelCase);
                        } else {
                            key = camelCase(key);



                            key = key in cache ? [key] :
                                (key.match(rnothtmlwhite) || []);
                        }

                        i = key.length;

                        while (i--) {
                            delete cache[key[i]];
                        }
                    }


                    if (key === undefined || jQuery.isEmptyObject(cache)) {





                        if (owner.nodeType) {
                            owner[this.expando] = undefined;
                        } else {
                            delete owner[this.expando];
                        }
                    }
                },
                hasData: function(owner) {
                    var cache = owner[this.expando];
                    return cache !== undefined && !jQuery.isEmptyObject(cache);
                }
            };
            var dataPriv = new Data();

            var dataUser = new Data();













            var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                rmultiDash = /[A-Z]/g;

            function getData(data) {
                if (data === "true") {
                    return true;
                }

                if (data === "false") {
                    return false;
                }

                if (data === "null") {
                    return null;
                }


                if (data === +data + "") {
                    return +data;
                }

                if (rbrace.test(data)) {
                    return JSON.parse(data);
                }

                return data;
            }

            function dataAttr(elem, key, data) {
                var name;



                if (data === undefined && elem.nodeType === 1) {
                    name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                    data = elem.getAttribute(name);

                    if (typeof data === "string") {
                        try {
                            data = getData(data);
                        } catch (e) {}


                        dataUser.set(elem, key, data);
                    } else {
                        data = undefined;
                    }
                }
                return data;
            }

            jQuery.extend({
                hasData: function(elem) {
                    return dataUser.hasData(elem) || dataPriv.hasData(elem);
                },

                data: function(elem, name, data) {
                    return dataUser.access(elem, name, data);
                },

                removeData: function(elem, name) {
                    dataUser.remove(elem, name);
                },



                _data: function(elem, name, data) {
                    return dataPriv.access(elem, name, data);
                },

                _removeData: function(elem, name) {
                    dataPriv.remove(elem, name);
                }
            });

            jQuery.fn.extend({
                data: function(key, value) {
                    var i, name, data,
                        elem = this[0],
                        attrs = elem && elem.attributes;


                    if (key === undefined) {
                        if (this.length) {
                            data = dataUser.get(elem);

                            if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                                i = attrs.length;
                                while (i--) {



                                    if (attrs[i]) {
                                        name = attrs[i].name;
                                        if (name.indexOf("data-") === 0) {
                                            name = camelCase(name.slice(5));
                                            dataAttr(elem, name, data[name]);
                                        }
                                    }
                                }
                                dataPriv.set(elem, "hasDataAttrs", true);
                            }
                        }

                        return data;
                    }


                    if (typeof key === "object") {
                        return this.each(function() {
                            dataUser.set(this, key);
                        });
                    }

                    return access(this, function(value) {
                        var data;






                        if (elem && value === undefined) {



                            data = dataUser.get(elem, key);
                            if (data !== undefined) {
                                return data;
                            }



                            data = dataAttr(elem, key);
                            if (data !== undefined) {
                                return data;
                            }


                            return;
                        }


                        this.each(function() {


                            dataUser.set(this, key, value);
                        });
                    }, null, value, arguments.length > 1, null, true);
                },

                removeData: function(key) {
                    return this.each(function() {
                        dataUser.remove(this, key);
                    });
                }
            });


            jQuery.extend({
                queue: function(elem, type, data) {
                    var queue;

                    if (elem) {
                        type = (type || "fx") + "queue";
                        queue = dataPriv.get(elem, type);


                        if (data) {
                            if (!queue || Array.isArray(data)) {
                                queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                            } else {
                                queue.push(data);
                            }
                        }
                        return queue || [];
                    }
                },

                dequeue: function(elem, type) {
                    type = type || "fx";

                    var queue = jQuery.queue(elem, type),
                        startLength = queue.length,
                        fn = queue.shift(),
                        hooks = jQuery._queueHooks(elem, type),
                        next = function() {
                            jQuery.dequeue(elem, type);
                        };


                    if (fn === "inprogress") {
                        fn = queue.shift();
                        startLength--;
                    }

                    if (fn) {



                        if (type === "fx") {
                            queue.unshift("inprogress");
                        }


                        delete hooks.stop;
                        fn.call(elem, next, hooks);
                    }

                    if (!startLength && hooks) {
                        hooks.empty.fire();
                    }
                },


                _queueHooks: function(elem, type) {
                    var key = type + "queueHooks";
                    return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                        empty: jQuery.Callbacks("once memory").add(function() {
                            dataPriv.remove(elem, [type + "queue", key]);
                        })
                    });
                }
            });

            jQuery.fn.extend({
                queue: function(type, data) {
                    var setter = 2;

                    if (typeof type !== "string") {
                        data = type;
                        type = "fx";
                        setter--;
                    }

                    if (arguments.length < setter) {
                        return jQuery.queue(this[0], type);
                    }

                    return data === undefined ?
                        this :
                        this.each(function() {
                            var queue = jQuery.queue(this, type, data);


                            jQuery._queueHooks(this, type);

                            if (type === "fx" && queue[0] !== "inprogress") {
                                jQuery.dequeue(this, type);
                            }
                        });
                },
                dequeue: function(type) {
                    return this.each(function() {
                        jQuery.dequeue(this, type);
                    });
                },
                clearQueue: function(type) {
                    return this.queue(type || "fx", []);
                },



                promise: function(type, obj) {
                    var tmp,
                        count = 1,
                        defer = jQuery.Deferred(),
                        elements = this,
                        i = this.length,
                        resolve = function() {
                            if (!(--count)) {
                                defer.resolveWith(elements, [elements]);
                            }
                        };

                    if (typeof type !== "string") {
                        obj = type;
                        type = undefined;
                    }
                    type = type || "fx";

                    while (i--) {
                        tmp = dataPriv.get(elements[i], type + "queueHooks");
                        if (tmp && tmp.empty) {
                            count++;
                            tmp.empty.add(resolve);
                        }
                    }
                    resolve();
                    return defer.promise(obj);
                }
            });
            var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

            var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");


            var cssExpand = ["Top", "Right", "Bottom", "Left"];

            var documentElement = document.documentElement;



            var isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem);
                },
                composed = { composed: true };






            if (documentElement.getRootNode) {
                isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem) ||
                        elem.getRootNode(composed) === elem.ownerDocument;
                };
            }
            var isHiddenWithinTree = function(elem, el) {



                elem = el || elem;


                return elem.style.display === "none" ||
                    elem.style.display === "" &&





                    isAttached(elem) &&

                    jQuery.css(elem, "display") === "none";
            };

            var swap = function(elem, options, callback, args) {
                var ret, name,
                    old = {};


                for (name in options) {
                    old[name] = elem.style[name];
                    elem.style[name] = options[name];
                }

                ret = callback.apply(elem, args || []);


                for (name in options) {
                    elem.style[name] = old[name];
                }

                return ret;
            };




            function adjustCSS(elem, prop, valueParts, tween) {
                var adjusted, scale,
                    maxIterations = 20,
                    currentValue = tween ?
                    function() {
                        return tween.cur();
                    } :
                    function() {
                        return jQuery.css(elem, prop, "");
                    },
                    initial = currentValue(),
                    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


                    initialInUnit = elem.nodeType &&
                    (jQuery.cssNumber[prop] || unit !== "px" && +initial) &&
                    rcssNum.exec(jQuery.css(elem, prop));

                if (initialInUnit && initialInUnit[3] !== unit) {



                    initial = initial / 2;


                    unit = unit || initialInUnit[3];


                    initialInUnit = +initial || 1;

                    while (maxIterations--) {



                        jQuery.style(elem, prop, initialInUnit + unit);
                        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                            maxIterations = 0;
                        }
                        initialInUnit = initialInUnit / scale;

                    }

                    initialInUnit = initialInUnit * 2;
                    jQuery.style(elem, prop, initialInUnit + unit);


                    valueParts = valueParts || [];
                }

                if (valueParts) {
                    initialInUnit = +initialInUnit || +initial || 0;


                    adjusted = valueParts[1] ?
                        initialInUnit + (valueParts[1] + 1) * valueParts[2] :
                        +valueParts[2];
                    if (tween) {
                        tween.unit = unit;
                        tween.start = initialInUnit;
                        tween.end = adjusted;
                    }
                }
                return adjusted;
            }


            var defaultDisplayMap = {};

            function getDefaultDisplay(elem) {
                var temp,
                    doc = elem.ownerDocument,
                    nodeName = elem.nodeName,
                    display = defaultDisplayMap[nodeName];

                if (display) {
                    return display;
                }

                temp = doc.body.appendChild(doc.createElement(nodeName));
                display = jQuery.css(temp, "display");

                temp.parentNode.removeChild(temp);

                if (display === "none") {
                    display = "block";
                }
                defaultDisplayMap[nodeName] = display;

                return display;
            }

            function showHide(elements, show) {
                var display, elem,
                    values = [],
                    index = 0,
                    length = elements.length;


                for (; index < length; index++) {
                    elem = elements[index];
                    if (!elem.style) {
                        continue;
                    }

                    display = elem.style.display;
                    if (show) {




                        if (display === "none") {
                            values[index] = dataPriv.get(elem, "display") || null;
                            if (!values[index]) {
                                elem.style.display = "";
                            }
                        }
                        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                            values[index] = getDefaultDisplay(elem);
                        }
                    } else {
                        if (display !== "none") {
                            values[index] = "none";


                            dataPriv.set(elem, "display", display);
                        }
                    }
                }


                for (index = 0; index < length; index++) {
                    if (values[index] != null) {
                        elements[index].style.display = values[index];
                    }
                }

                return elements;
            }

            jQuery.fn.extend({
                show: function() {
                    return showHide(this, true);
                },
                hide: function() {
                    return showHide(this);
                },
                toggle: function(state) {
                    if (typeof state === "boolean") {
                        return state ? this.show() : this.hide();
                    }

                    return this.each(function() {
                        if (isHiddenWithinTree(this)) {
                            jQuery(this).show();
                        } else {
                            jQuery(this).hide();
                        }
                    });
                }
            });
            var rcheckableType = (/^(?:checkbox|radio)$/i);

            var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);

            var rscriptType = (/^$|^module$|\/(?:java|ecma)script/i);




            var wrapMap = {


                option: [1, "<select multiple='multiple'>", "</select>"],




                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

                _default: [0, "", ""]
            };


            wrapMap.optgroup = wrapMap.option;

            wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
            wrapMap.th = wrapMap.td;


            function getAll(context, tag) {



                var ret;

                if (typeof context.getElementsByTagName !== "undefined") {
                    ret = context.getElementsByTagName(tag || "*");

                } else if (typeof context.querySelectorAll !== "undefined") {
                    ret = context.querySelectorAll(tag || "*");

                } else {
                    ret = [];
                }

                if (tag === undefined || tag && nodeName(context, tag)) {
                    return jQuery.merge([context], ret);
                }

                return ret;
            }



            function setGlobalEval(elems, refElements) {
                var i = 0,
                    l = elems.length;

                for (; i < l; i++) {
                    dataPriv.set(
                        elems[i],
                        "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval")
                    );
                }
            }


            var rhtml = /<|&#?\w+;/;

            function buildFragment(elems, context, scripts, selection, ignored) {
                var elem, tmp, tag, wrap, attached, j,
                    fragment = context.createDocumentFragment(),
                    nodes = [],
                    i = 0,
                    l = elems.length;

                for (; i < l; i++) {
                    elem = elems[i];

                    if (elem || elem === 0) {


                        if (toType(elem) === "object") {



                            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);


                        } else if (!rhtml.test(elem)) {
                            nodes.push(context.createTextNode(elem));


                        } else {
                            tmp = tmp || fragment.appendChild(context.createElement("div"));


                            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                            wrap = wrapMap[tag] || wrapMap._default;
                            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];


                            j = wrap[0];
                            while (j--) {
                                tmp = tmp.lastChild;
                            }



                            jQuery.merge(nodes, tmp.childNodes);


                            tmp = fragment.firstChild;


                            tmp.textContent = "";
                        }
                    }
                }


                fragment.textContent = "";

                i = 0;
                while ((elem = nodes[i++])) {


                    if (selection && jQuery.inArray(elem, selection) > -1) {
                        if (ignored) {
                            ignored.push(elem);
                        }
                        continue;
                    }

                    attached = isAttached(elem);


                    tmp = getAll(fragment.appendChild(elem), "script");


                    if (attached) {
                        setGlobalEval(tmp);
                    }


                    if (scripts) {
                        j = 0;
                        while ((elem = tmp[j++])) {
                            if (rscriptType.test(elem.type || "")) {
                                scripts.push(elem);
                            }
                        }
                    }
                }

                return fragment;
            }


            (function() {
                var fragment = document.createDocumentFragment(),
                    div = fragment.appendChild(document.createElement("div")),
                    input = document.createElement("input");





                input.setAttribute("type", "radio");
                input.setAttribute("checked", "checked");
                input.setAttribute("name", "t");

                div.appendChild(input);



                support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;



                div.innerHTML = "<textarea>x</textarea>";
                support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
            })();


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







            function expectSync(elem, type) {
                return (elem === safeActiveElement()) === (type === "focus");
            }




            function safeActiveElement() {
                try {
                    return document.activeElement;
                } catch (err) {}
            }

            function on(elem, types, selector, data, fn, one) {
                var origFn, type;


                if (typeof types === "object") {


                    if (typeof selector !== "string") {


                        data = data || selector;
                        selector = undefined;
                    }
                    for (type in types) {
                        on(elem, type, selector, data, types[type], one);
                    }
                    return elem;
                }

                if (data == null && fn == null) {


                    fn = selector;
                    data = selector = undefined;
                } else if (fn == null) {
                    if (typeof selector === "string") {


                        fn = data;
                        data = undefined;
                    } else {


                        fn = data;
                        data = selector;
                        selector = undefined;
                    }
                }
                if (fn === false) {
                    fn = returnFalse;
                } else if (!fn) {
                    return elem;
                }

                if (one === 1) {
                    origFn = fn;
                    fn = function(event) {


                        jQuery().off(event);
                        return origFn.apply(this, arguments);
                    };


                    fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                }
                return elem.each(function() {
                    jQuery.event.add(this, types, fn, data, selector);
                });
            }


            jQuery.event = {

                global: {},

                add: function(elem, types, handler, data, selector) {

                    var handleObjIn, eventHandle, tmp,
                        events, t, handleObj,
                        special, handlers, type, namespaces, origType,
                        elemData = dataPriv.get(elem);


                    if (!elemData) {
                        return;
                    }


                    if (handler.handler) {
                        handleObjIn = handler;
                        handler = handleObjIn.handler;
                        selector = handleObjIn.selector;
                    }



                    if (selector) {
                        jQuery.find.matchesSelector(documentElement, selector);
                    }


                    if (!handler.guid) {
                        handler.guid = jQuery.guid++;
                    }


                    if (!(events = elemData.events)) {
                        events = elemData.events = {};
                    }
                    if (!(eventHandle = elemData.handle)) {
                        eventHandle = elemData.handle = function(e) {



                            return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                                jQuery.event.dispatch.apply(elem, arguments) : undefined;
                        };
                    }


                    types = (types || "").match(rnothtmlwhite) || [""];
                    t = types.length;
                    while (t--) {
                        tmp = rtypenamespace.exec(types[t]) || [];
                        type = origType = tmp[1];
                        namespaces = (tmp[2] || "").split(".").sort();


                        if (!type) {
                            continue;
                        }


                        special = jQuery.event.special[type] || {};


                        type = (selector ? special.delegateType : special.bindType) || type;


                        special = jQuery.event.special[type] || {};


                        handleObj = jQuery.extend({
                            type: type,
                            origType: origType,
                            data: data,
                            handler: handler,
                            guid: handler.guid,
                            selector: selector,
                            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                            namespace: namespaces.join(".")
                        }, handleObjIn);


                        if (!(handlers = events[type])) {
                            handlers = events[type] = [];
                            handlers.delegateCount = 0;


                            if (!special.setup ||
                                special.setup.call(elem, data, namespaces, eventHandle) === false) {

                                if (elem.addEventListener) {
                                    elem.addEventListener(type, eventHandle);
                                }
                            }
                        }

                        if (special.add) {
                            special.add.call(elem, handleObj);

                            if (!handleObj.handler.guid) {
                                handleObj.handler.guid = handler.guid;
                            }
                        }


                        if (selector) {
                            handlers.splice(handlers.delegateCount++, 0, handleObj);
                        } else {
                            handlers.push(handleObj);
                        }


                        jQuery.event.global[type] = true;
                    }

                },


                remove: function(elem, types, handler, selector, mappedTypes) {

                    var j, origCount, tmp,
                        events, t, handleObj,
                        special, handlers, type, namespaces, origType,
                        elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

                    if (!elemData || !(events = elemData.events)) {
                        return;
                    }


                    types = (types || "").match(rnothtmlwhite) || [""];
                    t = types.length;
                    while (t--) {
                        tmp = rtypenamespace.exec(types[t]) || [];
                        type = origType = tmp[1];
                        namespaces = (tmp[2] || "").split(".").sort();


                        if (!type) {
                            for (type in events) {
                                jQuery.event.remove(elem, type + types[t], handler, selector, true);
                            }
                            continue;
                        }

                        special = jQuery.event.special[type] || {};
                        type = (selector ? special.delegateType : special.bindType) || type;
                        handlers = events[type] || [];
                        tmp = tmp[2] &&
                            new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");


                        origCount = j = handlers.length;
                        while (j--) {
                            handleObj = handlers[j];

                            if ((mappedTypes || origType === handleObj.origType) &&
                                (!handler || handler.guid === handleObj.guid) &&
                                (!tmp || tmp.test(handleObj.namespace)) &&
                                (!selector || selector === handleObj.selector ||
                                    selector === "**" && handleObj.selector)) {
                                handlers.splice(j, 1);

                                if (handleObj.selector) {
                                    handlers.delegateCount--;
                                }
                                if (special.remove) {
                                    special.remove.call(elem, handleObj);
                                }
                            }
                        }



                        if (origCount && !handlers.length) {
                            if (!special.teardown ||
                                special.teardown.call(elem, namespaces, elemData.handle) === false) {

                                jQuery.removeEvent(elem, type, elemData.handle);
                            }

                            delete events[type];
                        }
                    }


                    if (jQuery.isEmptyObject(events)) {
                        dataPriv.remove(elem, "handle events");
                    }
                },

                dispatch: function(nativeEvent) {


                    var event = jQuery.event.fix(nativeEvent);

                    var i, j, ret, matched, handleObj, handlerQueue,
                        args = new Array(arguments.length),
                        handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
                        special = jQuery.event.special[event.type] || {};


                    args[0] = event;

                    for (i = 1; i < arguments.length; i++) {
                        args[i] = arguments[i];
                    }

                    event.delegateTarget = this;


                    if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                        return;
                    }


                    handlerQueue = jQuery.event.handlers.call(this, event, handlers);


                    i = 0;
                    while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                        event.currentTarget = matched.elem;

                        j = 0;
                        while ((handleObj = matched.handlers[j++]) &&
                            !event.isImmediatePropagationStopped()) {



                            if (!event.rnamespace || handleObj.namespace === false ||
                                event.rnamespace.test(handleObj.namespace)) {

                                event.handleObj = handleObj;
                                event.data = handleObj.data;

                                ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||
                                    handleObj.handler).apply(matched.elem, args);

                                if (ret !== undefined) {
                                    if ((event.result = ret) === false) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                    }
                                }
                            }
                        }
                    }


                    if (special.postDispatch) {
                        special.postDispatch.call(this, event);
                    }

                    return event.result;
                },

                handlers: function(event, handlers) {
                    var i, handleObj, sel, matchedHandlers, matchedSelectors,
                        handlerQueue = [],
                        delegateCount = handlers.delegateCount,
                        cur = event.target;

                    if (delegateCount &&


                        cur.nodeType &&

                        !(event.type === "click" && event.button >= 1)) {

                        for (; cur !== this; cur = cur.parentNode || this) {

                            if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                                matchedHandlers = [];
                                matchedSelectors = {};
                                for (i = 0; i < delegateCount; i++) {
                                    handleObj = handlers[i];

                                    sel = handleObj.selector + " ";

                                    if (matchedSelectors[sel] === undefined) {
                                        matchedSelectors[sel] = handleObj.needsContext ?
                                            jQuery(sel, this).index(cur) > -1 :
                                            jQuery.find(sel, this, null, [cur]).length;
                                    }
                                    if (matchedSelectors[sel]) {
                                        matchedHandlers.push(handleObj);
                                    }
                                }
                                if (matchedHandlers.length) {
                                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                                }
                            }
                        }
                    }

                    cur = this;
                    if (delegateCount < handlers.length) {
                        handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
                    }

                    return handlerQueue;
                },

                addProp: function(name, hook) {
                    Object.defineProperty(jQuery.Event.prototype, name, {
                        enumerable: true,
                        configurable: true,

                        get: isFunction(hook) ?
                            function() {
                                if (this.originalEvent) {
                                    return hook(this.originalEvent);
                                }
                            } : function() {
                                if (this.originalEvent) {
                                    return this.originalEvent[name];
                                }
                            },

                        set: function(value) {
                            Object.defineProperty(this, name, {
                                enumerable: true,
                                configurable: true,
                                writable: true,
                                value: value
                            });
                        }
                    });
                },

                fix: function(originalEvent) {
                    return originalEvent[jQuery.expando] ?
                        originalEvent :
                        new jQuery.Event(originalEvent);
                },

                special: {
                    load: {


                        noBubble: true
                    },
                    click: {

                        setup: function(data) {


                            var el = this || data;

                            if (rcheckableType.test(el.type) &&
                                el.click && nodeName(el, "input")) {


                                leverageNative(el, "click", returnTrue);
                            }

                            return false;
                        },
                        trigger: function(data) {


                            var el = this || data;

                            if (rcheckableType.test(el.type) &&
                                el.click && nodeName(el, "input")) {

                                leverageNative(el, "click");
                            }

                            return true;
                        },

                        _default: function(event) {
                            var target = event.target;
                            return rcheckableType.test(target.type) &&
                                target.click && nodeName(target, "input") &&
                                dataPriv.get(target, "click") ||
                                nodeName(target, "a");
                        }
                    },

                    beforeunload: {
                        postDispatch: function(event) {

                            if (event.result !== undefined && event.originalEvent) {
                                event.originalEvent.returnValue = event.result;
                            }
                        }
                    }
                }
            };

            function leverageNative(el, type, expectSync) {
                if (!expectSync) {
                    if (dataPriv.get(el, type) === undefined) {
                        jQuery.event.add(el, type, returnTrue);
                    }
                    return;
                }
                dataPriv.set(el, type, false);
                jQuery.event.add(el, type, {
                    namespace: false,
                    handler: function(event) {
                        var notAsync, result,
                            saved = dataPriv.get(this, type);
                        if ((event.isTrigger & 1) && this[type]) {
                            if (!saved.length) {
                                saved = slice.call(arguments);
                                dataPriv.set(this, type, saved);
                                notAsync = expectSync(this, type);
                                this[type]();
                                result = dataPriv.get(this, type);
                                if (saved !== result || notAsync) {
                                    dataPriv.set(this, type, false);
                                } else {
                                    result = {};
                                }
                                if (saved !== result) {
                                    event.stopImmediatePropagation();
                                    event.preventDefault();
                                    return result.value;
                                }
                            } else if ((jQuery.event.special[type] || {}).delegateType) {
                                event.stopPropagation();
                            }
                        } else if (saved.length) {
                            dataPriv.set(this, type, {
                                value: jQuery.event.trigger(
                                    jQuery.extend(saved[0], jQuery.Event.prototype),
                                    saved.slice(1),
                                    this
                                )
                            });
                            event.stopImmediatePropagation();
                        }
                    }
                });
            }

            jQuery.removeEvent = function(elem, type, handle) {
                if (elem.removeEventListener) {
                    elem.removeEventListener(type, handle);
                }
            };

            jQuery.Event = function(src, props) {
                if (!(this instanceof jQuery.Event)) {
                    return new jQuery.Event(src, props);
                }
                if (src && src.type) {
                    this.originalEvent = src;
                    this.type = src.type;
                    this.isDefaultPrevented = src.defaultPrevented ||
                        src.defaultPrevented === undefined &&
                        src.returnValue === false ?
                        returnTrue :
                        returnFalse;
                    this.target = (src.target && src.target.nodeType === 3) ?
                        src.target.parentNode :
                        src.target;
                    this.currentTarget = src.currentTarget;
                    this.relatedTarget = src.relatedTarget;
                } else {
                    this.type = src;
                }
                if (props) {
                    jQuery.extend(this, props);
                }
                this.timeStamp = src && src.timeStamp || Date.now();
                this[jQuery.expando] = true;
            };
            jQuery.Event.prototype = {
                constructor: jQuery.Event,
                isDefaultPrevented: returnFalse,
                isPropagationStopped: returnFalse,
                isImmediatePropagationStopped: returnFalse,
                isSimulated: false,

                preventDefault: function() {
                    var e = this.originalEvent;

                    this.isDefaultPrevented = returnTrue;

                    if (e && !this.isSimulated) {
                        e.preventDefault();
                    }
                },
                stopPropagation: function() {
                    var e = this.originalEvent;

                    this.isPropagationStopped = returnTrue;

                    if (e && !this.isSimulated) {
                        e.stopPropagation();
                    }
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;

                    this.isImmediatePropagationStopped = returnTrue;

                    if (e && !this.isSimulated) {
                        e.stopImmediatePropagation();
                    }

                    this.stopPropagation();
                }
            };
            jQuery.each({
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

                which: function(event) {
                    var button = event.button;


                    if (event.which == null && rkeyEvent.test(event.type)) {
                        return event.charCode != null ? event.charCode : event.keyCode;
                    }
                    if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
                        if (button & 1) {
                            return 1;
                        }

                        if (button & 2) {
                            return 3;
                        }

                        if (button & 4) {
                            return 2;
                        }

                        return 0;
                    }

                    return event.which;
                }
            }, jQuery.event.addProp);

            jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
                jQuery.event.special[type] = {
                    setup: function() {
                        leverageNative(this, type, expectSync);
                        return false;
                    },
                    trigger: function() {
                        leverageNative(this, type);
                        return true;
                    },

                    delegateType: delegateType
                };
            });
            jQuery.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(orig, fix) {
                jQuery.event.special[orig] = {
                    delegateType: fix,
                    bindType: fix,

                    handle: function(event) {
                        var ret,
                            target = this,
                            related = event.relatedTarget,
                            handleObj = event.handleObj;
                        if (!related || (related !== target && !jQuery.contains(target, related))) {
                            event.type = handleObj.origType;
                            ret = handleObj.handler.apply(this, arguments);
                            event.type = fix;
                        }
                        return ret;
                    }
                };
            });

            jQuery.fn.extend({

                on: function(types, selector, data, fn) {
                    return on(this, types, selector, data, fn);
                },
                one: function(types, selector, data, fn) {
                    return on(this, types, selector, data, fn, 1);
                },
                off: function(types, selector, fn) {
                    var handleObj, type;
                    if (types && types.preventDefault && types.handleObj) {
                        handleObj = types.handleObj;
                        jQuery(types.delegateTarget).off(
                            handleObj.namespace ?
                            handleObj.origType + "." + handleObj.namespace :
                            handleObj.origType,
                            handleObj.selector,
                            handleObj.handler
                        );
                        return this;
                    }
                    if (typeof types === "object") {
                        for (type in types) {
                            this.off(type, selector, types[type]);
                        }
                        return this;
                    }
                    if (selector === false || typeof selector === "function") {

                        fn = selector;
                        selector = undefined;
                    }
                    if (fn === false) {
                        fn = returnFalse;
                    }
                    return this.each(function() {
                        jQuery.event.remove(this, types, fn, selector);
                    });
                }
            });


            var
                rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

                rnoInnerhtml = /<script|<style|<link/i,

                rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
                rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function manipulationTarget(elem, content) {
                if (nodeName(elem, "table") &&
                    nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

                    return jQuery(elem).children("tbody")[0] || elem;
                }

                return elem;
            }

            function disableScript(elem) {
                elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
                return elem;
            }

            function restoreScript(elem) {
                if ((elem.type || "").slice(0, 5) === "true/") {
                    elem.type = elem.type.slice(5);
                } else {
                    elem.removeAttribute("type");
                }

                return elem;
            }

            function cloneCopyEvent(src, dest) {
                var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

                if (dest.nodeType !== 1) {
                    return;
                }
                if (dataPriv.hasData(src)) {
                    pdataOld = dataPriv.access(src);
                    pdataCur = dataPriv.set(dest, pdataOld);
                    events = pdataOld.events;

                    if (events) {
                        delete pdataCur.handle;
                        pdataCur.events = {};

                        for (type in events) {
                            for (i = 0, l = events[type].length; i < l; i++) {
                                jQuery.event.add(dest, type, events[type][i]);
                            }
                        }
                    }
                }
                if (dataUser.hasData(src)) {
                    udataOld = dataUser.access(src);
                    udataCur = jQuery.extend({}, udataOld);

                    dataUser.set(dest, udataCur);
                }
            }

            function fixInput(src, dest) {
                var nodeName = dest.nodeName.toLowerCase();
                if (nodeName === "input" && rcheckableType.test(src.type)) {
                    dest.checked = src.checked;
                } else if (nodeName === "input" || nodeName === "textarea") {
                    dest.defaultValue = src.defaultValue;
                }
            }

            function domManip(collection, args, callback, ignored) {

                args = concat.apply([], args);

                var fragment, first, scripts, hasScripts, node, doc,
                    i = 0,
                    l = collection.length,
                    iNoClone = l - 1,
                    value = args[0],
                    valueIsFunction = isFunction(value);
                if (valueIsFunction ||
                    (l > 1 && typeof value === "string" &&
                        !support.checkClone && rchecked.test(value))) {
                    return collection.each(function(index) {
                        var self = collection.eq(index);
                        if (valueIsFunction) {
                            args[0] = value.call(this, index, self.html());
                        }
                        domManip(self, args, callback, ignored);
                    });
                }

                if (l) {
                    fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                    first = fragment.firstChild;

                    if (fragment.childNodes.length === 1) {
                        fragment = first;
                    }
                    if (first || ignored) {
                        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                        hasScripts = scripts.length;

                        for (; i < l; i++) {
                            node = fragment;

                            if (i !== iNoClone) {
                                node = jQuery.clone(node, true, true);

                                if (hasScripts) {
                                    jQuery.merge(scripts, getAll(node, "script"));
                                }
                            }

                            callback.call(collection[i], node, i);
                        }

                        if (hasScripts) {
                            doc = scripts[scripts.length - 1].ownerDocument;

                            jQuery.map(scripts, restoreScript);

                            for (i = 0; i < hasScripts; i++) {
                                node = scripts[i];
                                if (rscriptType.test(node.type || "") &&
                                    !dataPriv.access(node, "globalEval") &&
                                    jQuery.contains(doc, node)) {

                                    if (node.src && (node.type || "").toLowerCase() !== "module") {

                                        if (jQuery._evalUrl && !node.noModule) {
                                            jQuery._evalUrl(node.src, {
                                                nonce: node.nonce || node.getAttribute("nonce")
                                            });
                                        }
                                    } else {
                                        DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                                    }
                                }
                            }
                        }
                    }
                }

                return collection;
            }

            function remove(elem, selector, keepData) {
                var node,
                    nodes = selector ? jQuery.filter(selector, elem) : elem,
                    i = 0;

                for (;
                    (node = nodes[i]) != null; i++) {
                    if (!keepData && node.nodeType === 1) {
                        jQuery.cleanData(getAll(node));
                    }

                    if (node.parentNode) {
                        if (keepData && isAttached(node)) {
                            setGlobalEval(getAll(node, "script"));
                        }
                        node.parentNode.removeChild(node);
                    }
                }

                return elem;
            }

            jQuery.extend({
                htmlPrefilter: function(html) {
                    return html.replace(rxhtmlTag, "<$1></$2>");
                },

                clone: function(elem, dataAndEvents, deepDataAndEvents) {
                    var i, l, srcElements, destElements,
                        clone = elem.cloneNode(true),
                        inPage = isAttached(elem);

                    if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
                        !jQuery.isXMLDoc(elem)) {

                        destElements = getAll(clone);
                        srcElements = getAll(elem);

                        for (i = 0, l = srcElements.length; i < l; i++) {
                            fixInput(srcElements[i], destElements[i]);
                        }
                    }

                    if (dataAndEvents) {
                        if (deepDataAndEvents) {
                            srcElements = srcElements || getAll(elem);
                            destElements = destElements || getAll(clone);

                            for (i = 0, l = srcElements.length; i < l; i++) {
                                cloneCopyEvent(srcElements[i], destElements[i]);
                            }
                        } else {
                            cloneCopyEvent(elem, clone);
                        }
                    }

                    destElements = getAll(clone, "script");
                    if (destElements.length > 0) {
                        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                    }

                    return clone;
                },

                cleanData: function(elems) {
                    var data, elem, type,
                        special = jQuery.event.special,
                        i = 0;

                    for (;
                        (elem = elems[i]) !== undefined; i++) {
                        if (acceptData(elem)) {
                            if ((data = elem[dataPriv.expando])) {
                                if (data.events) {
                                    for (type in data.events) {
                                        if (special[type]) {
                                            jQuery.event.remove(elem, type);

                                        } else {
                                            jQuery.removeEvent(elem, type, data.handle);
                                        }
                                    }
                                }
                                elem[dataPriv.expando] = undefined;
                            }
                            if (elem[dataUser.expando]) {
                                elem[dataUser.expando] = undefined;
                            }
                        }
                    }
                }
            });

            jQuery.fn.extend({
                detach: function(selector) {
                    return remove(this, selector, true);
                },

                remove: function(selector) {
                    return remove(this, selector);
                },

                text: function(value) {
                    return access(this, function(value) {
                        return value === undefined ?
                            jQuery.text(this) :
                            this.empty().each(function() {
                                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                    this.textContent = value;
                                }
                            });
                    }, null, value, arguments.length);
                },

                append: function() {
                    return domManip(this, arguments, function(elem) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var target = manipulationTarget(this, elem);
                            target.appendChild(elem);
                        }
                    });
                },

                prepend: function() {
                    return domManip(this, arguments, function(elem) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var target = manipulationTarget(this, elem);
                            target.insertBefore(elem, target.firstChild);
                        }
                    });
                },

                before: function() {
                    return domManip(this, arguments, function(elem) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(elem, this);
                        }
                    });
                },

                after: function() {
                    return domManip(this, arguments, function(elem) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(elem, this.nextSibling);
                        }
                    });
                },

                empty: function() {
                    var elem,
                        i = 0;

                    for (;
                        (elem = this[i]) != null; i++) {
                        if (elem.nodeType === 1) {


                            jQuery.cleanData(getAll(elem, false));


                            elem.textContent = "";
                        }
                    }

                    return this;
                },

                clone: function(dataAndEvents, deepDataAndEvents) {
                    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

                    return this.map(function() {
                        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                    });
                },

                html: function(value) {
                    return access(this, function(value) {
                        var elem = this[0] || {},
                            i = 0,
                            l = this.length;

                        if (value === undefined && elem.nodeType === 1) {
                            return elem.innerHTML;
                        }

                        if (typeof value === "string" && !rnoInnerhtml.test(value) &&
                            !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

                            value = jQuery.htmlPrefilter(value);

                            try {
                                for (; i < l; i++) {
                                    elem = this[i] || {};

                                    if (elem.nodeType === 1) {
                                        jQuery.cleanData(getAll(elem, false));
                                        elem.innerHTML = value;
                                    }
                                }

                                elem = 0;
                            } catch (e) {}
                        }

                        if (elem) {
                            this.empty().append(value);
                        }
                    }, null, value, arguments.length);
                },

                replaceWith: function() {
                    var ignored = [];

                    return domManip(this, arguments, function(elem) {
                        var parent = this.parentNode;

                        if (jQuery.inArray(this, ignored) < 0) {
                            jQuery.cleanData(getAll(this));
                            if (parent) {
                                parent.replaceChild(elem, this);
                            }
                        }

                    }, ignored);
                }
            });

            jQuery.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(name, original) {
                jQuery.fn[name] = function(selector) {
                    var elems,
                        ret = [],
                        insert = jQuery(selector),
                        last = insert.length - 1,
                        i = 0;

                    for (; i <= last; i++) {
                        elems = i === last ? this : this.clone(true);
                        jQuery(insert[i])[original](elems);

                        push.apply(ret, elems.get());
                    }

                    return this.pushStack(ret);
                };
            });
            var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

            var getStyles = function(elem) {

                var view = elem.ownerDocument.defaultView;

                if (!view || !view.opener) {
                    view = window;
                }

                return view.getComputedStyle(elem);
            };

            var rboxStyle = new RegExp(cssExpand.join("|"), "i");



            (function() {

                function computeStyleTests() {

                    if (!div) {
                        return;
                    }

                    container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
                        "margin-top:1px;padding:0;border:0";
                    div.style.cssText =
                        "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
                        "margin:auto;border:1px;padding:1px;" +
                        "width:60%;top:1%";
                    documentElement.appendChild(container).appendChild(div);

                    var divStyle = window.getComputedStyle(div);
                    pixelPositionVal = divStyle.top !== "1%";
                    reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

                    div.style.right = "60%";
                    pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

                    boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

                    div.style.position = "absolute";
                    scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;

                    documentElement.removeChild(container);

                    div = null;
                }

                function roundPixelMeasures(measure) {
                    return Math.round(parseFloat(measure));
                }

                var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
                    reliableMarginLeftVal,
                    container = document.createElement("div"),
                    div = document.createElement("div");

                if (!div.style) {
                    return;
                }

                div.style.backgroundClip = "content-box";
                div.cloneNode(true).style.backgroundClip = "";
                support.clearCloneStyle = div.style.backgroundClip === "content-box";

                jQuery.extend(support, {
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
                    }
                });
            })();


            function curCSS(elem, name, computed) {
                var width, minWidth, maxWidth, ret,

                    style = elem.style;

                computed = computed || getStyles(elem);

                if (computed) {
                    ret = computed.getPropertyValue(name) || computed[name];

                    if (ret === "" && !isAttached(elem)) {
                        ret = jQuery.style(elem, name);
                    }

                    if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {

                        width = style.width;
                        minWidth = style.minWidth;
                        maxWidth = style.maxWidth;

                        style.minWidth = style.maxWidth = style.width = ret;
                        ret = computed.width;

                        style.width = width;
                        style.minWidth = minWidth;
                        style.maxWidth = maxWidth;
                    }
                }

                return ret !== undefined ?

                    ret + "" :
                    ret;
            }


            function addGetHookIf(conditionFn, hookFn) {

                return {
                    get: function() {
                        if (conditionFn()) {

                            delete this.get;
                            return;
                        }

                        return (this.get = hookFn).apply(this, arguments);
                    }
                };
            }


            var cssPrefixes = ["Webkit", "Moz", "ms"],
                emptyStyle = document.createElement("div").style,
                vendorProps = {};

            function vendorPropName(name) {

                var capName = name[0].toUpperCase() + name.slice(1),
                    i = cssPrefixes.length;

                while (i--) {
                    name = cssPrefixes[i] + capName;
                    if (name in emptyStyle) {
                        return name;
                    }
                }
            }

            function finalPropName(name) {
                var final = jQuery.cssProps[name] || vendorProps[name];

                if (final) {
                    return final;
                }
                if (name in emptyStyle) {
                    return name;
                }
                return vendorProps[name] = vendorPropName(name) || name;
            }


            var

                rdisplayswap = /^(none|table(?!-c[ea]).+)/,
                rcustomProp = /^--/,
                cssShow = { position: "absolute", visibility: "hidden", display: "block" },
                cssNormalTransform = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function setPositiveNumber(elem, value, subtract) {

                var matches = rcssNum.exec(value);
                return matches ?

                    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") :
                    value;
            }

            function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
                var i = dimension === "width" ? 1 : 0,
                    extra = 0,
                    delta = 0;

                if (box === (isBorderBox ? "border" : "content")) {
                    return 0;
                }

                for (; i < 4; i += 2) {

                    if (box === "margin") {
                        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
                    }

                    if (!isBorderBox) {

                        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

                        if (box !== "padding") {
                            delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);

                        } else {
                            extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        }

                    } else {

                        if (box === "content") {
                            delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                        }

                        if (box !== "margin") {
                            delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        }
                    }
                }

                if (!isBorderBox && computedVal >= 0) {

                    delta += Math.max(0, Math.ceil(
                        elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
                        computedVal -
                        delta -
                        extra -
                        0.5

                    )) || 0;
                }

                return delta;
            }

            function getWidthOrHeight(elem, dimension, extra) {

                var styles = getStyles(elem),

                    boxSizingNeeded = !support.boxSizingReliable() || extra,
                    isBorderBox = boxSizingNeeded &&
                    jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                    valueIsBorderBox = isBorderBox,

                    val = curCSS(elem, dimension, styles),
                    offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);

                if (rnumnonpx.test(val)) {
                    if (!extra) {
                        return val;
                    }
                    val = "auto";
                }


                if ((!support.boxSizingReliable() && isBorderBox ||
                        val === "auto" ||
                        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") &&
                    elem.getClientRects().length) {

                    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

                    valueIsBorderBox = offsetProp in elem;
                    if (valueIsBorderBox) {
                        val = elem[offsetProp];
                    }
                }

                val = parseFloat(val) || 0;

                return (val +
                    boxModelAdjustment(
                        elem,
                        dimension,
                        extra || (isBorderBox ? "border" : "content"),
                        valueIsBorderBox,
                        styles,

                        val
                    )
                ) + "px";
            }

            jQuery.extend({
                cssHooks: {
                    opacity: {
                        get: function(elem, computed) {
                            if (computed) {

                                var ret = curCSS(elem, "opacity");
                                return ret === "" ? "1" : ret;
                            }
                        }
                    }
                },

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

                cssProps: {},

                style: function(elem, name, value, extra) {

                    if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                        return;
                    }

                    var ret, type, hooks,
                        origName = camelCase(name),
                        isCustomProp = rcustomProp.test(name),
                        style = elem.style;

                    if (!isCustomProp) {
                        name = finalPropName(origName);
                    }

                    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

                    if (value !== undefined) {
                        type = typeof value;

                        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                            value = adjustCSS(elem, name, ret);

                            type = "number";
                        }

                        if (value == null || value !== value) {
                            return;
                        }

                        if (type === "number" && !isCustomProp) {
                            value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                        }

                        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                            style[name] = "inherit";
                        }

                        if (!hooks || !("set" in hooks) ||
                            (value = hooks.set(elem, value, extra)) !== undefined) {

                            if (isCustomProp) {
                                style.setProperty(name, value);
                            } else {
                                style[name] = value;
                            }
                        }

                    } else {

                        if (hooks && "get" in hooks &&
                            (ret = hooks.get(elem, false, extra)) !== undefined) {

                            return ret;
                        }

                        return style[name];
                    }
                },

                css: function(elem, name, extra, styles) {
                    var val, num, hooks,
                        origName = camelCase(name),
                        isCustomProp = rcustomProp.test(name);

                    if (!isCustomProp) {
                        name = finalPropName(origName);
                    }

                    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

                    if (hooks && "get" in hooks) {
                        val = hooks.get(elem, true, extra);
                    }

                    if (val === undefined) {
                        val = curCSS(elem, name, styles);
                    }

                    if (val === "normal" && name in cssNormalTransform) {
                        val = cssNormalTransform[name];
                    }

                    if (extra === "" || extra) {
                        num = parseFloat(val);
                        return extra === true || isFinite(num) ? num || 0 : val;
                    }

                    return val;
                }
            });

            jQuery.each(["height", "width"], function(i, dimension) {
                jQuery.cssHooks[dimension] = {
                    get: function(elem, computed, extra) {
                        if (computed) {

                            return rdisplayswap.test(jQuery.css(elem, "display")) &&

                                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ?
                                swap(elem, cssShow, function() {
                                    return getWidthOrHeight(elem, dimension, extra);
                                }) :
                                getWidthOrHeight(elem, dimension, extra);
                        }
                    },

                    set: function(elem, value, extra) {
                        var matches,
                            styles = getStyles(elem),

                            scrollboxSizeBuggy = !support.scrollboxSize() &&
                            styles.position === "absolute",

                            boxSizingNeeded = scrollboxSizeBuggy || extra,
                            isBorderBox = boxSizingNeeded &&
                            jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                            subtract = extra ?
                            boxModelAdjustment(
                                elem,
                                dimension,
                                extra,
                                isBorderBox,
                                styles
                            ) :
                            0;
                        if (isBorderBox && scrollboxSizeBuggy) {
                            subtract -= Math.ceil(
                                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
                                parseFloat(styles[dimension]) -
                                boxModelAdjustment(elem, dimension, "border", false, styles) -
                                0.5
                            );
                        }

                        if (subtract && (matches = rcssNum.exec(value)) &&
                            (matches[3] || "px") !== "px") {

                            elem.style[dimension] = value;
                            value = jQuery.css(elem, dimension);
                        }

                        return setPositiveNumber(elem, value, subtract);
                    }
                };
            });

            jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,
                function(elem, computed) {
                    if (computed) {
                        return (parseFloat(curCSS(elem, "marginLeft")) ||
                            elem.getBoundingClientRect().left -
                            swap(elem, { marginLeft: 0 }, function() {
                                return elem.getBoundingClientRect().left;
                            })
                        ) + "px";
                    }
                }
            );

            jQuery.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(prefix, suffix) {
                jQuery.cssHooks[prefix + suffix] = {
                    expand: function(value) {
                        var i = 0,
                            expanded = {},

                            parts = typeof value === "string" ? value.split(" ") : [value];

                        for (; i < 4; i++) {
                            expanded[prefix + cssExpand[i] + suffix] =
                                parts[i] || parts[i - 2] || parts[0];
                        }

                        return expanded;
                    }
                };

                if (prefix !== "margin") {
                    jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                }
            });

            jQuery.fn.extend({
                css: function(name, value) {
                    return access(this, function(elem, name, value) {
                        var styles, len,
                            map = {},
                            i = 0;

                        if (Array.isArray(name)) {
                            styles = getStyles(elem);
                            len = name.length;

                            for (; i < len; i++) {
                                map[name[i]] = jQuery.css(elem, name[i], false, styles);
                            }

                            return map;
                        }

                        return value !== undefined ?
                            jQuery.style(elem, name, value) :
                            jQuery.css(elem, name);
                    }, name, value, arguments.length > 1);
                }
            });


            function Tween(elem, options, prop, end, easing) {
                return new Tween.prototype.init(elem, options, prop, end, easing);
            }
            jQuery.Tween = Tween;

            Tween.prototype = {
                constructor: Tween,
                init: function(elem, options, prop, end, easing, unit) {
                    this.elem = elem;
                    this.prop = prop;
                    this.easing = easing || jQuery.easing._default;
                    this.options = options;
                    this.start = this.now = this.cur();
                    this.end = end;
                    this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                },
                cur: function() {
                    var hooks = Tween.propHooks[this.prop];

                    return hooks && hooks.get ?
                        hooks.get(this) :
                        Tween.propHooks._default.get(this);
                },
                run: function(percent) {
                    var eased,
                        hooks = Tween.propHooks[this.prop];

                    if (this.options.duration) {
                        this.pos = eased = jQuery.easing[this.easing](
                            percent, this.options.duration * percent, 0, 1, this.options.duration
                        );
                    } else {
                        this.pos = eased = percent;
                    }
                    this.now = (this.end - this.start) * eased + this.start;

                    if (this.options.step) {
                        this.options.step.call(this.elem, this.now, this);
                    }

                    if (hooks && hooks.set) {
                        hooks.set(this);
                    } else {
                        Tween.propHooks._default.set(this);
                    }
                    return this;
                }
            };

            Tween.prototype.init.prototype = Tween.prototype;

            Tween.propHooks = {
                _default: {
                    get: function(tween) {
                        var result;

                        if (tween.elem.nodeType !== 1 ||
                            tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                            return tween.elem[tween.prop];
                        }

                        result = jQuery.css(tween.elem, tween.prop, "");

                        return !result || result === "auto" ? 0 : result;
                    },
                    set: function(tween) {

                        if (jQuery.fx.step[tween.prop]) {
                            jQuery.fx.step[tween.prop](tween);
                        } else if (tween.elem.nodeType === 1 && (
                                jQuery.cssHooks[tween.prop] ||
                                tween.elem.style[finalPropName(tween.prop)] != null)) {
                            jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                        } else {
                            tween.elem[tween.prop] = tween.now;
                        }
                    }
                }
            };

            Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                set: function(tween) {
                    if (tween.elem.nodeType && tween.elem.parentNode) {
                        tween.elem[tween.prop] = tween.now;
                    }
                }
            };

            jQuery.easing = {
                linear: function(p) {
                    return p;
                },
                swing: function(p) {
                    return 0.5 - Math.cos(p * Math.PI) / 2;
                },
                _default: "swing"
            };

            jQuery.fx = Tween.prototype.init;

            jQuery.fx.step = {};




            var
                fxNow, inProgress,
                rfxtypes = /^(?:toggle|show|hide)$/,
                rrun = /queueHooks$/;

            function schedule() {
                if (inProgress) {
                    if (document.hidden === false && window.requestAnimationFrame) {
                        window.requestAnimationFrame(schedule);
                    } else {
                        window.setTimeout(schedule, jQuery.fx.interval);
                    }

                    jQuery.fx.tick();
                }
            }

            function createFxNow() {
                window.setTimeout(function() {
                    fxNow = undefined;
                });
                return (fxNow = Date.now());
            }

            function genFx(type, includeWidth) {
                var which,
                    i = 0,
                    attrs = { height: type };

                includeWidth = includeWidth ? 1 : 0;
                for (; i < 4; i += 2 - includeWidth) {
                    which = cssExpand[i];
                    attrs["margin" + which] = attrs["padding" + which] = type;
                }

                if (includeWidth) {
                    attrs.opacity = attrs.width = type;
                }

                return attrs;
            }

            function createTween(value, prop, animation) {
                var tween,
                    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
                    index = 0,
                    length = collection.length;
                for (; index < length; index++) {
                    if ((tween = collection[index].call(animation, prop, value))) {

                        return tween;
                    }
                }
            }

            function defaultPrefilter(elem, props, opts) {
                var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
                    isBox = "width" in props || "height" in props,
                    anim = this,
                    orig = {},
                    style = elem.style,
                    hidden = elem.nodeType && isHiddenWithinTree(elem),
                    dataShow = dataPriv.get(elem, "fxshow");

                if (!opts.queue) {
                    hooks = jQuery._queueHooks(elem, "fx");
                    if (hooks.unqueued == null) {
                        hooks.unqueued = 0;
                        oldfire = hooks.empty.fire;
                        hooks.empty.fire = function() {
                            if (!hooks.unqueued) {
                                oldfire();
                            }
                        };
                    }
                    hooks.unqueued++;

                    anim.always(function() {


                        anim.always(function() {
                            hooks.unqueued--;
                            if (!jQuery.queue(elem, "fx").length) {
                                hooks.empty.fire();
                            }
                        });
                    });
                }


                for (prop in props) {
                    value = props[prop];
                    if (rfxtypes.test(value)) {
                        delete props[prop];
                        toggle = toggle || value === "toggle";
                        if (value === (hidden ? "hide" : "show")) {



                            if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                                hidden = true;


                            } else {
                                continue;
                            }
                        }
                        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                    }
                }


                propTween = !jQuery.isEmptyObject(props);
                if (!propTween && jQuery.isEmptyObject(orig)) {
                    return;
                }


                if (isBox && elem.nodeType === 1) {





                    opts.overflow = [style.overflow, style.overflowX, style.overflowY];


                    restoreDisplay = dataShow && dataShow.display;
                    if (restoreDisplay == null) {
                        restoreDisplay = dataPriv.get(elem, "display");
                    }
                    display = jQuery.css(elem, "display");
                    if (display === "none") {
                        if (restoreDisplay) {
                            display = restoreDisplay;
                        } else {


                            showHide([elem], true);
                            restoreDisplay = elem.style.display || restoreDisplay;
                            display = jQuery.css(elem, "display");
                            showHide([elem]);
                        }
                    }


                    if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                        if (jQuery.css(elem, "float") === "none") {


                            if (!propTween) {
                                anim.done(function() {
                                    style.display = restoreDisplay;
                                });
                                if (restoreDisplay == null) {
                                    display = style.display;
                                    restoreDisplay = display === "none" ? "" : display;
                                }
                            }
                            style.display = "inline-block";
                        }
                    }
                }

                if (opts.overflow) {
                    style.overflow = "hidden";
                    anim.always(function() {
                        style.overflow = opts.overflow[0];
                        style.overflowX = opts.overflow[1];
                        style.overflowY = opts.overflow[2];
                    });
                }


                propTween = false;
                for (prop in orig) {


                    if (!propTween) {
                        if (dataShow) {
                            if ("hidden" in dataShow) {
                                hidden = dataShow.hidden;
                            }
                        } else {
                            dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
                        }


                        if (toggle) {
                            dataShow.hidden = !hidden;
                        }


                        if (hidden) {
                            showHide([elem], true);
                        }



                        anim.done(function() {




                            if (!hidden) {
                                showHide([elem]);
                            }
                            dataPriv.remove(elem, "fxshow");
                            for (prop in orig) {
                                jQuery.style(elem, prop, orig[prop]);
                            }
                        });
                    }


                    propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                    if (!(prop in dataShow)) {
                        dataShow[prop] = propTween.start;
                        if (hidden) {
                            propTween.end = propTween.start;
                            propTween.start = 0;
                        }
                    }
                }
            }

            function propFilter(props, specialEasing) {
                var index, name, easing, value, hooks;


                for (index in props) {
                    name = camelCase(index);
                    easing = specialEasing[name];
                    value = props[index];
                    if (Array.isArray(value)) {
                        easing = value[1];
                        value = props[index] = value[0];
                    }

                    if (index !== name) {
                        props[name] = value;
                        delete props[index];
                    }

                    hooks = jQuery.cssHooks[name];
                    if (hooks && "expand" in hooks) {
                        value = hooks.expand(value);
                        delete props[name];



                        for (index in value) {
                            if (!(index in props)) {
                                props[index] = value[index];
                                specialEasing[index] = easing;
                            }
                        }
                    } else {
                        specialEasing[name] = easing;
                    }
                }
            }

            function Animation(elem, properties, options) {
                var result,
                    stopped,
                    index = 0,
                    length = Animation.prefilters.length,
                    deferred = jQuery.Deferred().always(function() {


                        delete tick.elem;
                    }),
                    tick = function() {
                        if (stopped) {
                            return false;
                        }
                        var currentTime = fxNow || createFxNow(),
                            remaining = Math.max(0, animation.startTime + animation.duration - currentTime),



                            temp = remaining / animation.duration || 0,
                            percent = 1 - temp,
                            index = 0,
                            length = animation.tweens.length;

                        for (; index < length; index++) {
                            animation.tweens[index].run(percent);
                        }

                        deferred.notifyWith(elem, [animation, percent, remaining]);


                        if (percent < 1 && length) {
                            return remaining;
                        }


                        if (!length) {
                            deferred.notifyWith(elem, [animation, 1, 0]);
                        }


                        deferred.resolveWith(elem, [animation]);
                        return false;
                    },
                    animation = deferred.promise({
                        elem: elem,
                        props: jQuery.extend({}, properties),
                        opts: jQuery.extend(true, {
                            specialEasing: {},
                            easing: jQuery.easing._default
                        }, options),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function(prop, end) {
                            var tween = jQuery.Tween(elem, animation.opts, prop, end,
                                animation.opts.specialEasing[prop] || animation.opts.easing);
                            animation.tweens.push(tween);
                            return tween;
                        },
                        stop: function(gotoEnd) {
                            var index = 0,



                                length = gotoEnd ? animation.tweens.length : 0;
                            if (stopped) {
                                return this;
                            }
                            stopped = true;
                            for (; index < length; index++) {
                                animation.tweens[index].run(1);
                            }


                            if (gotoEnd) {
                                deferred.notifyWith(elem, [animation, 1, 0]);
                                deferred.resolveWith(elem, [animation, gotoEnd]);
                            } else {
                                deferred.rejectWith(elem, [animation, gotoEnd]);
                            }
                            return this;
                        }
                    }),
                    props = animation.props;

                propFilter(props, animation.opts.specialEasing);

                for (; index < length; index++) {
                    result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                    if (result) {
                        if (isFunction(result.stop)) {
                            jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
                                result.stop.bind(result);
                        }
                        return result;
                    }
                }

                jQuery.map(props, createTween, animation);

                if (isFunction(animation.opts.start)) {
                    animation.opts.start.call(elem, animation);
                }


                animation
                    .progress(animation.opts.progress)
                    .done(animation.opts.done, animation.opts.complete)
                    .fail(animation.opts.fail)
                    .always(animation.opts.always);

                jQuery.fx.timer(
                    jQuery.extend(tick, {
                        elem: elem,
                        anim: animation,
                        queue: animation.opts.queue
                    })
                );

                return animation;
            }

            jQuery.Animation = jQuery.extend(Animation, {

                tweeners: {
                    "*": [function(prop, value) {
                        var tween = this.createTween(prop, value);
                        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                        return tween;
                    }]
                },

                tweener: function(props, callback) {
                    if (isFunction(props)) {
                        callback = props;
                        props = ["*"];
                    } else {
                        props = props.match(rnothtmlwhite);
                    }

                    var prop,
                        index = 0,
                        length = props.length;

                    for (; index < length; index++) {
                        prop = props[index];
                        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                        Animation.tweeners[prop].unshift(callback);
                    }
                },

                prefilters: [defaultPrefilter],

                prefilter: function(callback, prepend) {
                    if (prepend) {
                        Animation.prefilters.unshift(callback);
                    } else {
                        Animation.prefilters.push(callback);
                    }
                }
            });

            jQuery.speed = function(speed, easing, fn) {
                var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                    complete: fn || !fn && easing ||
                        isFunction(speed) && speed,
                    duration: speed,
                    easing: fn && easing || easing && !isFunction(easing) && easing
                };


                if (jQuery.fx.off) {
                    opt.duration = 0;

                } else {
                    if (typeof opt.duration !== "number") {
                        if (opt.duration in jQuery.fx.speeds) {
                            opt.duration = jQuery.fx.speeds[opt.duration];

                        } else {
                            opt.duration = jQuery.fx.speeds._default;
                        }
                    }
                }


                if (opt.queue == null || opt.queue === true) {
                    opt.queue = "fx";
                }


                opt.old = opt.complete;

                opt.complete = function() {
                    if (isFunction(opt.old)) {
                        opt.old.call(this);
                    }

                    if (opt.queue) {
                        jQuery.dequeue(this, opt.queue);
                    }
                };

                return opt;
            };

            jQuery.fn.extend({
                fadeTo: function(speed, to, easing, callback) {


                    return this.filter(isHiddenWithinTree).css("opacity", 0).show()


                    .end().animate({ opacity: to }, speed, easing, callback);
                },
                animate: function(prop, speed, easing, callback) {
                    var empty = jQuery.isEmptyObject(prop),
                        optall = jQuery.speed(speed, easing, callback),
                        doAnimation = function() {


                            var anim = Animation(this, jQuery.extend({}, prop), optall);


                            if (empty || dataPriv.get(this, "finish")) {
                                anim.stop(true);
                            }
                        };
                    doAnimation.finish = doAnimation;

                    return empty || optall.queue === false ?
                        this.each(doAnimation) :
                        this.queue(optall.queue, doAnimation);
                },
                stop: function(type, clearQueue, gotoEnd) {
                    var stopQueue = function(hooks) {
                        var stop = hooks.stop;
                        delete hooks.stop;
                        stop(gotoEnd);
                    };

                    if (typeof type !== "string") {
                        gotoEnd = clearQueue;
                        clearQueue = type;
                        type = undefined;
                    }
                    if (clearQueue && type !== false) {
                        this.queue(type || "fx", []);
                    }

                    return this.each(function() {
                        var dequeue = true,
                            index = type != null && type + "queueHooks",
                            timers = jQuery.timers,
                            data = dataPriv.get(this);

                        if (index) {
                            if (data[index] && data[index].stop) {
                                stopQueue(data[index]);
                            }
                        } else {
                            for (index in data) {
                                if (data[index] && data[index].stop && rrun.test(index)) {
                                    stopQueue(data[index]);
                                }
                            }
                        }

                        for (index = timers.length; index--;) {
                            if (timers[index].elem === this &&
                                (type == null || timers[index].queue === type)) {

                                timers[index].anim.stop(gotoEnd);
                                dequeue = false;
                                timers.splice(index, 1);
                            }
                        }




                        if (dequeue || !gotoEnd) {
                            jQuery.dequeue(this, type);
                        }
                    });
                },
                finish: function(type) {
                    if (type !== false) {
                        type = type || "fx";
                    }
                    return this.each(function() {
                        var index,
                            data = dataPriv.get(this),
                            queue = data[type + "queue"],
                            hooks = data[type + "queueHooks"],
                            timers = jQuery.timers,
                            length = queue ? queue.length : 0;


                        data.finish = true;


                        jQuery.queue(this, type, []);

                        if (hooks && hooks.stop) {
                            hooks.stop.call(this, true);
                        }


                        for (index = timers.length; index--;) {
                            if (timers[index].elem === this && timers[index].queue === type) {
                                timers[index].anim.stop(true);
                                timers.splice(index, 1);
                            }
                        }


                        for (index = 0; index < length; index++) {
                            if (queue[index] && queue[index].finish) {
                                queue[index].finish.call(this);
                            }
                        }


                        delete data.finish;
                    });
                }
            });

            jQuery.each(["toggle", "show", "hide"], function(i, name) {
                var cssFn = jQuery.fn[name];
                jQuery.fn[name] = function(speed, easing, callback) {
                    return speed == null || typeof speed === "boolean" ?
                        cssFn.apply(this, arguments) :
                        this.animate(genFx(name, true), speed, easing, callback);
                };
            });


            jQuery.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" }
            }, function(name, props) {
                jQuery.fn[name] = function(speed, easing, callback) {
                    return this.animate(props, speed, easing, callback);
                };
            });

            jQuery.timers = [];
            jQuery.fx.tick = function() {
                var timer,
                    i = 0,
                    timers = jQuery.timers;

                fxNow = Date.now();

                for (; i < timers.length; i++) {
                    timer = timers[i];


                    if (!timer() && timers[i] === timer) {
                        timers.splice(i--, 1);
                    }
                }

                if (!timers.length) {
                    jQuery.fx.stop();
                }
                fxNow = undefined;
            };

            jQuery.fx.timer = function(timer) {
                jQuery.timers.push(timer);
                jQuery.fx.start();
            };

            jQuery.fx.interval = 13;
            jQuery.fx.start = function() {
                if (inProgress) {
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


                _default: 400
            };




            jQuery.fn.delay = function(time, type) {
                time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                type = type || "fx";

                return this.queue(type, function(next, hooks) {
                    var timeout = window.setTimeout(next, time);
                    hooks.stop = function() {
                        window.clearTimeout(timeout);
                    };
                });
            };


            (function() {
                var input = document.createElement("input"),
                    select = document.createElement("select"),
                    opt = select.appendChild(document.createElement("option"));

                input.type = "checkbox";



                support.checkOn = input.value !== "";



                support.optSelected = opt.selected;



                input = document.createElement("input");
                input.value = "t";
                input.type = "radio";
                support.radioValue = input.value === "t";
            })();


            var boolHook,
                attrHandle = jQuery.expr.attrHandle;

            jQuery.fn.extend({
                attr: function(name, value) {
                    return access(this, jQuery.attr, name, value, arguments.length > 1);
                },

                removeAttr: function(name) {
                    return this.each(function() {
                        jQuery.removeAttr(this, name);
                    });
                }
            });

            jQuery.extend({
                attr: function(elem, name, value) {
                    var ret, hooks,
                        nType = elem.nodeType;


                    if (nType === 3 || nType === 8 || nType === 2) {
                        return;
                    }


                    if (typeof elem.getAttribute === "undefined") {
                        return jQuery.prop(elem, name, value);
                    }



                    if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                        hooks = jQuery.attrHooks[name.toLowerCase()] ||
                            (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
                    }

                    if (value !== undefined) {
                        if (value === null) {
                            jQuery.removeAttr(elem, name);
                            return;
                        }

                        if (hooks && "set" in hooks &&
                            (ret = hooks.set(elem, value, name)) !== undefined) {
                            return ret;
                        }

                        elem.setAttribute(name, value + "");
                        return value;
                    }

                    if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                        return ret;
                    }

                    ret = jQuery.find.attr(elem, name);


                    return ret == null ? undefined : ret;
                },

                attrHooks: {
                    type: {
                        set: function(elem, value) {
                            if (!support.radioValue && value === "radio" &&
                                nodeName(elem, "input")) {
                                var val = elem.value;
                                elem.setAttribute("type", value);
                                if (val) {
                                    elem.value = val;
                                }
                                return value;
                            }
                        }
                    }
                },

                removeAttr: function(elem, value) {
                    var name,
                        i = 0,



                        attrNames = value && value.match(rnothtmlwhite);

                    if (attrNames && elem.nodeType === 1) {
                        while ((name = attrNames[i++])) {
                            elem.removeAttribute(name);
                        }
                    }
                }
            });


            boolHook = {
                set: function(elem, value, name) {
                    if (value === false) {


                        jQuery.removeAttr(elem, name);
                    } else {
                        elem.setAttribute(name, name);
                    }
                    return name;
                }
            };

            jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
                var getter = attrHandle[name] || jQuery.find.attr;

                attrHandle[name] = function(elem, name, isXML) {
                    var ret, handle,
                        lowercaseName = name.toLowerCase();

                    if (!isXML) {


                        handle = attrHandle[lowercaseName];
                        attrHandle[lowercaseName] = ret;
                        ret = getter(elem, name, isXML) != null ?
                            lowercaseName :
                            null;
                        attrHandle[lowercaseName] = handle;
                    }
                    return ret;
                };
            });




            var rfocusable = /^(?:input|select|textarea|button)$/i,
                rclickable = /^(?:a|area)$/i;

            jQuery.fn.extend({
                prop: function(name, value) {
                    return access(this, jQuery.prop, name, value, arguments.length > 1);
                },

                removeProp: function(name) {
                    return this.each(function() {
                        delete this[jQuery.propFix[name] || name];
                    });
                }
            });

            jQuery.extend({
                prop: function(elem, name, value) {
                    var ret, hooks,
                        nType = elem.nodeType;


                    if (nType === 3 || nType === 8 || nType === 2) {
                        return;
                    }

                    if (nType !== 1 || !jQuery.isXMLDoc(elem)) {


                        name = jQuery.propFix[name] || name;
                        hooks = jQuery.propHooks[name];
                    }

                    if (value !== undefined) {
                        if (hooks && "set" in hooks &&
                            (ret = hooks.set(elem, value, name)) !== undefined) {
                            return ret;
                        }

                        return (elem[name] = value);
                    }

                    if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                        return ret;
                    }

                    return elem[name];
                },

                propHooks: {
                    tabIndex: {
                        get: function(elem) {






                            var tabindex = jQuery.find.attr(elem, "tabindex");

                            if (tabindex) {
                                return parseInt(tabindex, 10);
                            }

                            if (
                                rfocusable.test(elem.nodeName) ||
                                rclickable.test(elem.nodeName) &&
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
            });









            if (!support.optSelected) {
                jQuery.propHooks.selected = {
                    get: function(elem) {



                        var parent = elem.parentNode;
                        if (parent && parent.parentNode) {
                            parent.parentNode.selectedIndex;
                        }
                        return null;
                    },
                    set: function(elem) {



                        var parent = elem.parentNode;
                        if (parent) {
                            parent.selectedIndex;

                            if (parent.parentNode) {
                                parent.parentNode.selectedIndex;
                            }
                        }
                    }
                };
            }

            jQuery.each([
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
                jQuery.propFix[this.toLowerCase()] = this;
            });






            function stripAndCollapse(value) {
                var tokens = value.match(rnothtmlwhite) || [];
                return tokens.join(" ");
            }


            function getClass(elem) {
                return elem.getAttribute && elem.getAttribute("class") || "";
            }

            function classesToArray(value) {
                if (Array.isArray(value)) {
                    return value;
                }
                if (typeof value === "string") {
                    return value.match(rnothtmlwhite) || [];
                }
                return [];
            }

            jQuery.fn.extend({
                addClass: function(value) {
                    var classes, elem, cur, curValue, clazz, j, finalValue,
                        i = 0;

                    if (isFunction(value)) {
                        return this.each(function(j) {
                            jQuery(this).addClass(value.call(this, j, getClass(this)));
                        });
                    }

                    classes = classesToArray(value);

                    if (classes.length) {
                        while ((elem = this[i++])) {
                            curValue = getClass(elem);
                            cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

                            if (cur) {
                                j = 0;
                                while ((clazz = classes[j++])) {
                                    if (cur.indexOf(" " + clazz + " ") < 0) {
                                        cur += clazz + " ";
                                    }
                                }


                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) {
                                    elem.setAttribute("class", finalValue);
                                }
                            }
                        }
                    }

                    return this;
                },

                removeClass: function(value) {
                    var classes, elem, cur, curValue, clazz, j, finalValue,
                        i = 0;

                    if (isFunction(value)) {
                        return this.each(function(j) {
                            jQuery(this).removeClass(value.call(this, j, getClass(this)));
                        });
                    }

                    if (!arguments.length) {
                        return this.attr("class", "");
                    }

                    classes = classesToArray(value);

                    if (classes.length) {
                        while ((elem = this[i++])) {
                            curValue = getClass(elem);


                            cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

                            if (cur) {
                                j = 0;
                                while ((clazz = classes[j++])) {


                                    while (cur.indexOf(" " + clazz + " ") > -1) {
                                        cur = cur.replace(" " + clazz + " ", " ");
                                    }
                                }


                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) {
                                    elem.setAttribute("class", finalValue);
                                }
                            }
                        }
                    }

                    return this;
                },

                toggleClass: function(value, stateVal) {
                    var type = typeof value,
                        isValidValue = type === "string" || Array.isArray(value);

                    if (typeof stateVal === "boolean" && isValidValue) {
                        return stateVal ? this.addClass(value) : this.removeClass(value);
                    }

                    if (isFunction(value)) {
                        return this.each(function(i) {
                            jQuery(this).toggleClass(
                                value.call(this, i, getClass(this), stateVal),
                                stateVal
                            );
                        });
                    }

                    return this.each(function() {
                        var className, i, self, classNames;

                        if (isValidValue) {


                            i = 0;
                            self = jQuery(this);
                            classNames = classesToArray(value);

                            while ((className = classNames[i++])) {


                                if (self.hasClass(className)) {
                                    self.removeClass(className);
                                } else {
                                    self.addClass(className);
                                }
                            }


                        } else if (value === undefined || type === "boolean") {
                            className = getClass(this);
                            if (className) {


                                dataPriv.set(this, "__className__", className);
                            }





                            if (this.setAttribute) {
                                this.setAttribute("class",
                                    className || value === false ?
                                    "" :
                                    dataPriv.get(this, "__className__") || ""
                                );
                            }
                        }
                    });
                },

                hasClass: function(selector) {
                    var className, elem,
                        i = 0;

                    className = " " + selector + " ";
                    while ((elem = this[i++])) {
                        if (elem.nodeType === 1 &&
                            (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                            return true;
                        }
                    }

                    return false;
                }
            });




            var rreturn = /\r/g;

            jQuery.fn.extend({
                val: function(value) {
                    var hooks, ret, valueIsFunction,
                        elem = this[0];

                    if (!arguments.length) {
                        if (elem) {
                            hooks = jQuery.valHooks[elem.type] ||
                                jQuery.valHooks[elem.nodeName.toLowerCase()];

                            if (hooks &&
                                "get" in hooks &&
                                (ret = hooks.get(elem, "value")) !== undefined
                            ) {
                                return ret;
                            }

                            ret = elem.value;


                            if (typeof ret === "string") {
                                return ret.replace(rreturn, "");
                            }


                            return ret == null ? "" : ret;
                        }

                        return;
                    }

                    valueIsFunction = isFunction(value);

                    return this.each(function(i) {
                        var val;

                        if (this.nodeType !== 1) {
                            return;
                        }

                        if (valueIsFunction) {
                            val = value.call(this, i, jQuery(this).val());
                        } else {
                            val = value;
                        }


                        if (val == null) {
                            val = "";

                        } else if (typeof val === "number") {
                            val += "";

                        } else if (Array.isArray(val)) {
                            val = jQuery.map(val, function(value) {
                                return value == null ? "" : value + "";
                            });
                        }

                        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];


                        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                            this.value = val;
                        }
                    });
                }
            });

            jQuery.extend({
                valHooks: {
                    option: {
                        get: function(elem) {

                            var val = jQuery.find.attr(elem, "value");
                            return val != null ?
                                val :





                                stripAndCollapse(jQuery.text(elem));
                        }
                    },
                    select: {
                        get: function(elem) {
                            var value, option, i,
                                options = elem.options,
                                index = elem.selectedIndex,
                                one = elem.type === "select-one",
                                values = one ? null : [],
                                max = one ? index + 1 : options.length;

                            if (index < 0) {
                                i = max;

                            } else {
                                i = one ? index : 0;
                            }


                            for (; i < max; i++) {
                                option = options[i];



                                if ((option.selected || i === index) &&


                                    !option.disabled &&
                                    (!option.parentNode.disabled ||
                                        !nodeName(option.parentNode, "optgroup"))) {


                                    value = jQuery(option).val();


                                    if (one) {
                                        return value;
                                    }


                                    values.push(value);
                                }
                            }

                            return values;
                        },

                        set: function(elem, value) {
                            var optionSet, option,
                                options = elem.options,
                                values = jQuery.makeArray(value),
                                i = options.length;

                            while (i--) {
                                option = options[i];



                                if (option.selected =
                                    jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1
                                ) {
                                    optionSet = true;
                                }


                            }


                            if (!optionSet) {
                                elem.selectedIndex = -1;
                            }
                            return values;
                        }
                    }
                }
            });


            jQuery.each(["radio", "checkbox"], function() {
                jQuery.valHooks[this] = {
                    set: function(elem, value) {
                        if (Array.isArray(value)) {
                            return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
                        }
                    }
                };
                if (!support.checkOn) {
                    jQuery.valHooks[this].get = function(elem) {
                        return elem.getAttribute("value") === null ? "on" : elem.value;
                    };
                }
            });







            support.focusin = "onfocusin" in window;


            var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
                stopPropagationCallback = function(e) {
                    e.stopPropagation();
                };

            jQuery.extend(jQuery.event, {

                trigger: function(event, data, elem, onlyHandlers) {

                    var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
                        eventPath = [elem || document],
                        type = hasOwn.call(event, "type") ? event.type : event,
                        namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

                    cur = lastElement = tmp = elem = elem || document;


                    if (elem.nodeType === 3 || elem.nodeType === 8) {
                        return;
                    }


                    if (rfocusMorph.test(type + jQuery.event.triggered)) {
                        return;
                    }

                    if (type.indexOf(".") > -1) {


                        namespaces = type.split(".");
                        type = namespaces.shift();
                        namespaces.sort();
                    }
                    ontype = type.indexOf(":") < 0 && "on" + type;


                    event = event[jQuery.expando] ?
                        event :
                        new jQuery.Event(type, typeof event === "object" && event);


                    event.isTrigger = onlyHandlers ? 2 : 3;
                    event.namespace = namespaces.join(".");
                    event.rnamespace = event.namespace ?
                        new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                        null;


                    event.result = undefined;
                    if (!event.target) {
                        event.target = elem;
                    }


                    data = data == null ? [event] :
                        jQuery.makeArray(data, [event]);


                    special = jQuery.event.special[type] || {};
                    if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                        return;
                    }



                    if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {

                        bubbleType = special.delegateType || type;
                        if (!rfocusMorph.test(bubbleType + type)) {
                            cur = cur.parentNode;
                        }
                        for (; cur; cur = cur.parentNode) {
                            eventPath.push(cur);
                            tmp = cur;
                        }


                        if (tmp === (elem.ownerDocument || document)) {
                            eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                        }
                    }


                    i = 0;
                    while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                        lastElement = cur;
                        event.type = i > 1 ?
                            bubbleType :
                            special.bindType || type;


                        handle = (dataPriv.get(cur, "events") || {})[event.type] &&
                            dataPriv.get(cur, "handle");
                        if (handle) {
                            handle.apply(cur, data);
                        }


                        handle = ontype && cur[ontype];
                        if (handle && handle.apply && acceptData(cur)) {
                            event.result = handle.apply(cur, data);
                            if (event.result === false) {
                                event.preventDefault();
                            }
                        }
                    }
                    event.type = type;


                    if (!onlyHandlers && !event.isDefaultPrevented()) {

                        if ((!special._default ||
                                special._default.apply(eventPath.pop(), data) === false) &&
                            acceptData(elem)) {



                            if (ontype && isFunction(elem[type]) && !isWindow(elem)) {


                                tmp = elem[ontype];

                                if (tmp) {
                                    elem[ontype] = null;
                                }


                                jQuery.event.triggered = type;

                                if (event.isPropagationStopped()) {
                                    lastElement.addEventListener(type, stopPropagationCallback);
                                }

                                elem[type]();

                                if (event.isPropagationStopped()) {
                                    lastElement.removeEventListener(type, stopPropagationCallback);
                                }

                                jQuery.event.triggered = undefined;

                                if (tmp) {
                                    elem[ontype] = tmp;
                                }
                            }
                        }
                    }

                    return event.result;
                },



                simulate: function(type, elem, event) {
                    var e = jQuery.extend(
                        new jQuery.Event(),
                        event, {
                            type: type,
                            isSimulated: true
                        }
                    );

                    jQuery.event.trigger(e, null, elem);
                }

            });

            jQuery.fn.extend({

                trigger: function(type, data) {
                    return this.each(function() {
                        jQuery.event.trigger(type, data, this);
                    });
                },
                triggerHandler: function(type, data) {
                    var elem = this[0];
                    if (elem) {
                        return jQuery.event.trigger(type, data, elem, true);
                    }
                }
            });










            if (!support.focusin) {
                jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {


                    var handler = function(event) {
                        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                    };

                    jQuery.event.special[fix] = {
                        setup: function() {
                            var doc = this.ownerDocument || this,
                                attaches = dataPriv.access(doc, fix);

                            if (!attaches) {
                                doc.addEventListener(orig, handler, true);
                            }
                            dataPriv.access(doc, fix, (attaches || 0) + 1);
                        },
                        teardown: function() {
                            var doc = this.ownerDocument || this,
                                attaches = dataPriv.access(doc, fix) - 1;

                            if (!attaches) {
                                doc.removeEventListener(orig, handler, true);
                                dataPriv.remove(doc, fix);

                            } else {
                                dataPriv.access(doc, fix, attaches);
                            }
                        }
                    };
                });
            }
            var location = window.location;

            var nonce = Date.now();

            var rquery = (/\?/);




            jQuery.parseXML = function(data) {
                var xml;
                if (!data || typeof data !== "string") {
                    return null;
                }



                try {
                    xml = (new window.DOMParser()).parseFromString(data, "text/xml");
                } catch (e) {
                    xml = undefined;
                }

                if (!xml || xml.getElementsByTagName("parsererror").length) {
                    jQuery.error("Invalid XML: " + data);
                }
                return xml;
            };


            var
                rbracket = /\[\]$/,
                rCRLF = /\r?\n/g,
                rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
                rsubmittable = /^(?:input|select|textarea|keygen)/i;

            function buildParams(prefix, obj, traditional, add) {
                var name;

                if (Array.isArray(obj)) {


                    jQuery.each(obj, function(i, v) {
                        if (traditional || rbracket.test(prefix)) {


                            add(prefix, v);

                        } else {


                            buildParams(
                                prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                                v,
                                traditional,
                                add
                            );
                        }
                    });

                } else if (!traditional && toType(obj) === "object") {


                    for (name in obj) {
                        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                    }

                } else {


                    add(prefix, obj);
                }
            }



            jQuery.param = function(a, traditional) {
                var prefix,
                    s = [],
                    add = function(key, valueOrFunction) {


                        var value = isFunction(valueOrFunction) ?
                            valueOrFunction() :
                            valueOrFunction;

                        s[s.length] = encodeURIComponent(key) + "=" +
                            encodeURIComponent(value == null ? "" : value);
                    };

                if (a == null) {
                    return "";
                }


                if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {


                    jQuery.each(a, function() {
                        add(this.name, this.value);
                    });

                } else {



                    for (prefix in a) {
                        buildParams(prefix, a[prefix], traditional, add);
                    }
                }


                return s.join("&");
            };

            jQuery.fn.extend({
                serialize: function() {
                    return jQuery.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map(function() {


                            var elements = jQuery.prop(this, "elements");
                            return elements ? jQuery.makeArray(elements) : this;
                        })
                        .filter(function() {
                            var type = this.type;


                            return this.name && !jQuery(this).is(":disabled") &&
                                rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
                                (this.checked || !rcheckableType.test(type));
                        })
                        .map(function(i, elem) {
                            var val = jQuery(this).val();

                            if (val == null) {
                                return null;
                            }

                            if (Array.isArray(val)) {
                                return jQuery.map(val, function(val) {
                                    return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                                });
                            }

                            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                        }).get();
                }
            });


            var
                r20 = /%20/g,
                rhash = /#.*$/,
                rantiCache = /([?&])_=[^&]*/,
                rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


                rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                rnoContent = /^(?:GET|HEAD)$/,
                rprotocol = /^\/\//,


                prefilters = {},


                transports = {},


                allTypes = "*/".concat("*"),


                originAnchor = document.createElement("a");
            originAnchor.href = location.href;


            function addToPrefiltersOrTransports(structure) {


                return function(dataTypeExpression, func) {

                    if (typeof dataTypeExpression !== "string") {
                        func = dataTypeExpression;
                        dataTypeExpression = "*";
                    }

                    var dataType,
                        i = 0,
                        dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

                    if (isFunction(func)) {


                        while ((dataType = dataTypes[i++])) {


                            if (dataType[0] === "+") {
                                dataType = dataType.slice(1) || "*";
                                (structure[dataType] = structure[dataType] || []).unshift(func);


                            } else {
                                (structure[dataType] = structure[dataType] || []).push(func);
                            }
                        }
                    }
                };
            }


            function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

                var inspected = {},
                    seekingTransport = (structure === transports);

                function inspect(dataType) {
                    var selected;
                    inspected[dataType] = true;
                    jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                        if (typeof dataTypeOrTransport === "string" &&
                            !seekingTransport && !inspected[dataTypeOrTransport]) {

                            options.dataTypes.unshift(dataTypeOrTransport);
                            inspect(dataTypeOrTransport);
                            return false;
                        } else if (seekingTransport) {
                            return !(selected = dataTypeOrTransport);
                        }
                    });
                    return selected;
                }

                return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
            }




            function ajaxExtend(target, src) {
                var key, deep,
                    flatOptions = jQuery.ajaxSettings.flatOptions || {};

                for (key in src) {
                    if (src[key] !== undefined) {
                        (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
                    }
                }
                if (deep) {
                    jQuery.extend(true, target, deep);
                }

                return target;
            }


            function ajaxHandleResponses(s, jqXHR, responses) {

                var ct, type, finalDataType, firstDataType,
                    contents = s.contents,
                    dataTypes = s.dataTypes;


                while (dataTypes[0] === "*") {
                    dataTypes.shift();
                    if (ct === undefined) {
                        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                    }
                }


                if (ct) {
                    for (type in contents) {
                        if (contents[type] && contents[type].test(ct)) {
                            dataTypes.unshift(type);
                            break;
                        }
                    }
                }


                if (dataTypes[0] in responses) {
                    finalDataType = dataTypes[0];
                } else {


                    for (type in responses) {
                        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                            finalDataType = type;
                            break;
                        }
                        if (!firstDataType) {
                            firstDataType = type;
                        }
                    }


                    finalDataType = finalDataType || firstDataType;
                }




                if (finalDataType) {
                    if (finalDataType !== dataTypes[0]) {
                        dataTypes.unshift(finalDataType);
                    }
                    return responses[finalDataType];
                }
            }


            function ajaxConvert(s, response, jqXHR, isSuccess) {
                var conv2, current, conv, tmp, prev,
                    converters = {},


                    dataTypes = s.dataTypes.slice();


                if (dataTypes[1]) {
                    for (conv in s.converters) {
                        converters[conv.toLowerCase()] = s.converters[conv];
                    }
                }

                current = dataTypes.shift();


                while (current) {

                    if (s.responseFields[current]) {
                        jqXHR[s.responseFields[current]] = response;
                    }


                    if (!prev && isSuccess && s.dataFilter) {
                        response = s.dataFilter(response, s.dataType);
                    }

                    prev = current;
                    current = dataTypes.shift();

                    if (current) {


                        if (current === "*") {

                            current = prev;


                        } else if (prev !== "*" && prev !== current) {


                            conv = converters[prev + " " + current] || converters["* " + current];


                            if (!conv) {
                                for (conv2 in converters) {


                                    tmp = conv2.split(" ");
                                    if (tmp[1] === current) {


                                        conv = converters[prev + " " + tmp[0]] ||
                                            converters["* " + tmp[0]];
                                        if (conv) {


                                            if (conv === true) {
                                                conv = converters[conv2];


                                            } else if (converters[conv2] !== true) {
                                                current = tmp[0];
                                                dataTypes.unshift(tmp[1]);
                                            }
                                            break;
                                        }
                                    }
                                }
                            }


                            if (conv !== true) {


                                if (conv && s.throws) {
                                    response = conv(response);
                                } else {
                                    try {
                                        response = conv(response);
                                    } catch (e) {
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

            jQuery.extend({


                active: 0,


                lastModified: {},
                etag: {},

                ajaxSettings: {
                    url: location.href,
                    type: "GET",
                    isLocal: rlocalProtocol.test(location.protocol),
                    global: true,
                    processData: true,
                    async: true,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",



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



                    converters: {


                        "* text": String,


                        "text html": true,


                        "text json": JSON.parse,


                        "text xml": jQuery.parseXML
                    },





                    flatOptions: {
                        url: true,
                        context: true
                    }
                },




                ajaxSetup: function(target, settings) {
                    return settings ?


                        ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :


                        ajaxExtend(jQuery.ajaxSettings, target);
                },

                ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                ajaxTransport: addToPrefiltersOrTransports(transports),


                ajax: function(url, options) {


                    if (typeof url === "object") {
                        options = url;
                        url = undefined;
                    }


                    options = options || {};

                    var transport,


                        cacheURL,


                        responseHeadersString,
                        responseHeaders,


                        timeoutTimer,


                        urlAnchor,


                        completed,


                        fireGlobals,


                        i,


                        uncached,


                        s = jQuery.ajaxSetup({}, options),


                        callbackContext = s.context || s,


                        globalEventContext = s.context &&
                        (callbackContext.nodeType || callbackContext.jquery) ?
                        jQuery(callbackContext) :
                        jQuery.event,


                        deferred = jQuery.Deferred(),
                        completeDeferred = jQuery.Callbacks("once memory"),


                        statusCode = s.statusCode || {},

                        requestHeaders = {},
                        requestHeadersNames = {},

                        strAbort = "canceled",

                        jqXHR = {
                            readyState: 0,

                            getResponseHeader: function(key) {
                                var match;
                                if (completed) {
                                    if (!responseHeaders) {
                                        responseHeaders = {};
                                        while ((match = rheaders.exec(responseHeadersString))) {
                                            responseHeaders[match[1].toLowerCase() + " "] =
                                                (responseHeaders[match[1].toLowerCase() + " "] || [])
                                                .concat(match[2]);
                                        }
                                    }
                                    match = responseHeaders[key.toLowerCase() + " "];
                                }
                                return match == null ? null : match.join(", ");
                            },

                            getAllResponseHeaders: function() {
                                return completed ? responseHeadersString : null;
                            },

                            setRequestHeader: function(name, value) {
                                if (completed == null) {
                                    name = requestHeadersNames[name.toLowerCase()] =
                                        requestHeadersNames[name.toLowerCase()] || name;
                                    requestHeaders[name] = value;
                                }
                                return this;
                            },

                            overrideMimeType: function(type) {
                                if (completed == null) {
                                    s.mimeType = type;
                                }
                                return this;
                            },

                            statusCode: function(map) {
                                var code;
                                if (map) {
                                    if (completed) {

                                        jqXHR.always(map[jqXHR.status]);
                                    } else {

                                        for (code in map) {
                                            statusCode[code] = [statusCode[code], map[code]];
                                        }
                                    }
                                }
                                return this;
                            },

                            abort: function(statusText) {
                                var finalText = statusText || strAbort;
                                if (transport) {
                                    transport.abort(finalText);
                                }
                                done(0, finalText);
                                return this;
                            }
                        };

                    deferred.promise(jqXHR);

                    s.url = ((url || s.url || location.href) + "")
                        .replace(rprotocol, location.protocol + "//");

                    s.type = options.method || options.type || s.method || s.type;


                    s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];


                    if (s.crossDomain == null) {
                        urlAnchor = document.createElement("a");




                        try {
                            urlAnchor.href = s.url;



                            urlAnchor.href = urlAnchor.href;
                            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
                                urlAnchor.protocol + "//" + urlAnchor.host;
                        } catch (e) {



                            s.crossDomain = true;
                        }
                    }


                    if (s.data && s.processData && typeof s.data !== "string") {
                        s.data = jQuery.param(s.data, s.traditional);
                    }


                    inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);


                    if (completed) {
                        return jqXHR;
                    }



                    fireGlobals = jQuery.event && s.global;


                    if (fireGlobals && jQuery.active++ === 0) {
                        jQuery.event.trigger("ajaxStart");
                    }


                    s.type = s.type.toUpperCase();


                    s.hasContent = !rnoContent.test(s.type);




                    cacheURL = s.url.replace(rhash, "");


                    if (!s.hasContent) {


                        uncached = s.url.slice(cacheURL.length);


                        if (s.data && (s.processData || typeof s.data === "string")) {
                            cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;


                            delete s.data;
                        }


                        if (s.cache === false) {
                            cacheURL = cacheURL.replace(rantiCache, "$1");
                            uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce++) + uncached;
                        }


                        s.url = cacheURL + uncached;


                    } else if (s.data && s.processData &&
                        (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                        s.data = s.data.replace(r20, "+");
                    }


                    if (s.ifModified) {
                        if (jQuery.lastModified[cacheURL]) {
                            jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                        }
                        if (jQuery.etag[cacheURL]) {
                            jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                        }
                    }


                    if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                        jqXHR.setRequestHeader("Content-Type", s.contentType);
                    }


                    jqXHR.setRequestHeader(
                        "Accept",
                        s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
                        s.accepts[s.dataTypes[0]] +
                        (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
                        s.accepts["*"]
                    );


                    for (i in s.headers) {
                        jqXHR.setRequestHeader(i, s.headers[i]);
                    }


                    if (s.beforeSend &&
                        (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {


                        return jqXHR.abort();
                    }


                    strAbort = "abort";


                    completeDeferred.add(s.complete);
                    jqXHR.done(s.success);
                    jqXHR.fail(s.error);


                    transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);


                    if (!transport) {
                        done(-1, "No Transport");
                    } else {
                        jqXHR.readyState = 1;


                        if (fireGlobals) {
                            globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                        }


                        if (completed) {
                            return jqXHR;
                        }


                        if (s.async && s.timeout > 0) {
                            timeoutTimer = window.setTimeout(function() {
                                jqXHR.abort("timeout");
                            }, s.timeout);
                        }

                        try {
                            completed = false;
                            transport.send(requestHeaders, done);
                        } catch (e) {


                            if (completed) {
                                throw e;
                            }


                            done(-1, e);
                        }
                    }


                    function done(status, nativeStatusText, responses, headers) {
                        var isSuccess, success, error, response, modified,
                            statusText = nativeStatusText;


                        if (completed) {
                            return;
                        }

                        completed = true;


                        if (timeoutTimer) {
                            window.clearTimeout(timeoutTimer);
                        }



                        transport = undefined;


                        responseHeadersString = headers || "";


                        jqXHR.readyState = status > 0 ? 4 : 0;


                        isSuccess = status >= 200 && status < 300 || status === 304;


                        if (responses) {
                            response = ajaxHandleResponses(s, jqXHR, responses);
                        }


                        response = ajaxConvert(s, response, jqXHR, isSuccess);


                        if (isSuccess) {


                            if (s.ifModified) {
                                modified = jqXHR.getResponseHeader("Last-Modified");
                                if (modified) {
                                    jQuery.lastModified[cacheURL] = modified;
                                }
                                modified = jqXHR.getResponseHeader("etag");
                                if (modified) {
                                    jQuery.etag[cacheURL] = modified;
                                }
                            }


                            if (status === 204 || s.type === "HEAD") {
                                statusText = "nocontent";


                            } else if (status === 304) {
                                statusText = "notmodified";


                            } else {
                                statusText = response.state;
                                success = response.data;
                                error = response.error;
                                isSuccess = !error;
                            }
                        } else {


                            error = statusText;
                            if (status || !statusText) {
                                statusText = "error";
                                if (status < 0) {
                                    status = 0;
                                }
                            }
                        }


                        jqXHR.status = status;
                        jqXHR.statusText = (nativeStatusText || statusText) + "";


                        if (isSuccess) {
                            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                        } else {
                            deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                        }


                        jqXHR.statusCode(statusCode);
                        statusCode = undefined;

                        if (fireGlobals) {
                            globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
                        }


                        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

                        if (fireGlobals) {
                            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);


                            if (!(--jQuery.active)) {
                                jQuery.event.trigger("ajaxStop");
                            }
                        }
                    }

                    return jqXHR;
                },

                getJSON: function(url, data, callback) {
                    return jQuery.get(url, data, callback, "json");
                },

                getScript: function(url, callback) {
                    return jQuery.get(url, undefined, callback, "script");
                }
            });

            jQuery.each(["get", "post"], function(i, method) {
                jQuery[method] = function(url, data, callback, type) {


                    if (isFunction(data)) {
                        type = type || callback;
                        callback = data;
                        data = undefined;
                    }


                    return jQuery.ajax(jQuery.extend({
                        url: url,
                        type: method,
                        dataType: type,
                        data: data,
                        success: callback
                    }, jQuery.isPlainObject(url) && url));
                };
            });


            jQuery._evalUrl = function(url, options) {
                return jQuery.ajax({
                    url: url,


                    type: "GET",
                    dataType: "script",
                    cache: true,
                    async: false,
                    global: false,




                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(response) {
                        jQuery.globalEval(response, options);
                    }
                });
            };


            jQuery.fn.extend({
                wrapAll: function(html) {
                    var wrap;

                    if (this[0]) {
                        if (isFunction(html)) {
                            html = html.call(this[0]);
                        }


                        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

                        if (this[0].parentNode) {
                            wrap.insertBefore(this[0]);
                        }

                        wrap.map(function() {
                            var elem = this;

                            while (elem.firstElementChild) {
                                elem = elem.firstElementChild;
                            }

                            return elem;
                        }).append(this);
                    }

                    return this;
                },

                wrapInner: function(html) {
                    if (isFunction(html)) {
                        return this.each(function(i) {
                            jQuery(this).wrapInner(html.call(this, i));
                        });
                    }

                    return this.each(function() {
                        var self = jQuery(this),
                            contents = self.contents();

                        if (contents.length) {
                            contents.wrapAll(html);

                        } else {
                            self.append(html);
                        }
                    });
                },

                wrap: function(html) {
                    var htmlIsFunction = isFunction(html);

                    return this.each(function(i) {
                        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                    });
                },

                unwrap: function(selector) {
                    this.parent(selector).not("body").each(function() {
                        jQuery(this).replaceWith(this.childNodes);
                    });
                    return this;
                }
            });


            jQuery.expr.pseudos.hidden = function(elem) {
                return !jQuery.expr.pseudos.visible(elem);
            };
            jQuery.expr.pseudos.visible = function(elem) {
                return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
            };




            jQuery.ajaxSettings.xhr = function() {
                try {
                    return new window.XMLHttpRequest();
                } catch (e) {}
            };

            var xhrSuccessStatus = {


                    0: 200,



                    1223: 204
                },
                xhrSupported = jQuery.ajaxSettings.xhr();

            support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
            support.ajax = xhrSupported = !!xhrSupported;

            jQuery.ajaxTransport(function(options) {
                var callback, errorCallback;


                if (support.cors || xhrSupported && !options.crossDomain) {
                    return {
                        send: function(headers, complete) {
                            var i,
                                xhr = options.xhr();

                            xhr.open(
                                options.type,
                                options.url,
                                options.async,
                                options.username,
                                options.password
                            );


                            if (options.xhrFields) {
                                for (i in options.xhrFields) {
                                    xhr[i] = options.xhrFields[i];
                                }
                            }


                            if (options.mimeType && xhr.overrideMimeType) {
                                xhr.overrideMimeType(options.mimeType);
                            }






                            if (!options.crossDomain && !headers["X-Requested-With"]) {
                                headers["X-Requested-With"] = "XMLHttpRequest";
                            }


                            for (i in headers) {
                                xhr.setRequestHeader(i, headers[i]);
                            }


                            callback = function(type) {
                                return function() {
                                    if (callback) {
                                        callback = errorCallback = xhr.onload =
                                            xhr.onerror = xhr.onabort = xhr.ontimeout =
                                            xhr.onreadystatechange = null;

                                        if (type === "abort") {
                                            xhr.abort();
                                        } else if (type === "error") {




                                            if (typeof xhr.status !== "number") {
                                                complete(0, "error");
                                            } else {
                                                complete(


                                                    xhr.status,
                                                    xhr.statusText
                                                );
                                            }
                                        } else {
                                            complete(
                                                xhrSuccessStatus[xhr.status] || xhr.status,
                                                xhr.statusText,




                                                (xhr.responseType || "text") !== "text" ||
                                                typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                                                xhr.getAllResponseHeaders()
                                            );
                                        }
                                    }
                                };
                            };


                            xhr.onload = callback();
                            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");




                            if (xhr.onabort !== undefined) {
                                xhr.onabort = errorCallback;
                            } else {
                                xhr.onreadystatechange = function() {


                                    if (xhr.readyState === 4) {





                                        window.setTimeout(function() {
                                            if (callback) {
                                                errorCallback();
                                            }
                                        });
                                    }
                                };
                            }


                            callback = callback("abort");

                            try {


                                xhr.send(options.hasContent && options.data || null);
                            } catch (e) {


                                if (callback) {
                                    throw e;
                                }
                            }
                        },

                        abort: function() {
                            if (callback) {
                                callback();
                            }
                        }
                    };
                }
            });





            jQuery.ajaxPrefilter(function(s) {
                if (s.crossDomain) {
                    s.contents.script = false;
                }
            });


            jQuery.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, " +
                        "application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(text) {
                        jQuery.globalEval(text);
                        return text;
                    }
                }
            });


            jQuery.ajaxPrefilter("script", function(s) {
                if (s.cache === undefined) {
                    s.cache = false;
                }
                if (s.crossDomain) {
                    s.type = "GET";
                }
            });


            jQuery.ajaxTransport("script", function(s) {


                if (s.crossDomain || s.scriptAttrs) {
                    var script, callback;
                    return {
                        send: function(_, complete) {
                            script = jQuery("<script>")
                                .attr(s.scriptAttrs || {})
                                .prop({ charset: s.scriptCharset, src: s.url })
                                .on("load error", callback = function(evt) {
                                    script.remove();
                                    callback = null;
                                    if (evt) {
                                        complete(evt.type === "error" ? 404 : 200, evt.type);
                                    }
                                });


                            document.head.appendChild(script[0]);
                        },
                        abort: function() {
                            if (callback) {
                                callback();
                            }
                        }
                    };
                }
            });




            var oldCallbacks = [],
                rjsonp = /(=)\?(?=&|$)|\?\?/;


            jQuery.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
                    this[callback] = true;
                    return callback;
                }
            });


            jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {

                var callbackName, overwritten, responseContainer,
                    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
                        "url" :
                        typeof s.data === "string" &&
                        (s.contentType || "")
                        .indexOf("application/x-www-form-urlencoded") === 0 &&
                        rjsonp.test(s.data) && "data"
                    );


                if (jsonProp || s.dataTypes[0] === "jsonp") {


                    callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ?
                        s.jsonpCallback() :
                        s.jsonpCallback;


                    if (jsonProp) {
                        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
                    } else if (s.jsonp !== false) {
                        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                    }


                    s.converters["script json"] = function() {
                        if (!responseContainer) {
                            jQuery.error(callbackName + " was not called");
                        }
                        return responseContainer[0];
                    };


                    s.dataTypes[0] = "json";


                    overwritten = window[callbackName];
                    window[callbackName] = function() {
                        responseContainer = arguments;
                    };


                    jqXHR.always(function() {


                        if (overwritten === undefined) {
                            jQuery(window).removeProp(callbackName);


                        } else {
                            window[callbackName] = overwritten;
                        }


                        if (s[callbackName]) {


                            s.jsonpCallback = originalSettings.jsonpCallback;


                            oldCallbacks.push(callbackName);
                        }


                        if (responseContainer && isFunction(overwritten)) {
                            overwritten(responseContainer[0]);
                        }

                        responseContainer = overwritten = undefined;
                    });


                    return "script";
                }
            });









            support.createHTMLDocument = (function() {
                var body = document.implementation.createHTMLDocument("").body;
                body.innerHTML = "<form></form><form></form>";
                return body.childNodes.length === 2;
            })();






            jQuery.parseHTML = function(data, context, keepScripts) {
                if (typeof data !== "string") {
                    return [];
                }
                if (typeof context === "boolean") {
                    keepScripts = context;
                    context = false;
                }

                var base, parsed, scripts;

                if (!context) {



                    if (support.createHTMLDocument) {
                        context = document.implementation.createHTMLDocument("");




                        base = context.createElement("base");
                        base.href = document.location.href;
                        context.head.appendChild(base);
                    } else {
                        context = document;
                    }
                }

                parsed = rsingleTag.exec(data);
                scripts = !keepScripts && [];


                if (parsed) {
                    return [context.createElement(parsed[1])];
                }

                parsed = buildFragment([data], context, scripts);

                if (scripts && scripts.length) {
                    jQuery(scripts).remove();
                }

                return jQuery.merge([], parsed.childNodes);
            };


            /**
             * Load a url into a page
             */
            jQuery.fn.load = function(url, params, callback) {
                var selector, type, response,
                    self = this,
                    off = url.indexOf(" ");

                if (off > -1) {
                    selector = stripAndCollapse(url.slice(off));
                    url = url.slice(0, off);
                }


                if (isFunction(params)) {


                    callback = params;
                    params = undefined;


                } else if (params && typeof params === "object") {
                    type = "POST";
                }


                if (self.length > 0) {
                    jQuery.ajax({
                        url: url,




                        type: type || "GET",
                        dataType: "html",
                        data: params
                    }).done(function(responseText) {


                        response = arguments;

                        self.html(selector ?



                            jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :


                            responseText);




                    }).always(callback && function(jqXHR, status) {
                        self.each(function() {
                            callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                        });
                    });
                }

                return this;
            };


            jQuery.each([
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend"
            ], function(i, type) {
                jQuery.fn[type] = function(fn) {
                    return this.on(type, fn);
                };
            });




            jQuery.expr.pseudos.animated = function(elem) {
                return jQuery.grep(jQuery.timers, function(fn) {
                    return elem === fn.elem;
                }).length;
            };




            jQuery.offset = {
                setOffset: function(elem, options, i) {
                    var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
                        position = jQuery.css(elem, "position"),
                        curElem = jQuery(elem),
                        props = {};

                    if (position === "static") {
                        elem.style.position = "relative";
                    }

                    curOffset = curElem.offset();
                    curCSSTop = jQuery.css(elem, "top");
                    curCSSLeft = jQuery.css(elem, "left");
                    calculatePosition = (position === "absolute" || position === "fixed") &&
                        (curCSSTop + curCSSLeft).indexOf("auto") > -1;

                    if (calculatePosition) {
                        curPosition = curElem.position();
                        curTop = curPosition.top;
                        curLeft = curPosition.left;

                    } else {
                        curTop = parseFloat(curCSSTop) || 0;
                        curLeft = parseFloat(curCSSLeft) || 0;
                    }

                    if (isFunction(options)) {

                        options = options.call(elem, i, jQuery.extend({}, curOffset));
                    }

                    if (options.top != null) {
                        props.top = (options.top - curOffset.top) + curTop;
                    }
                    if (options.left != null) {
                        props.left = (options.left - curOffset.left) + curLeft;
                    }

                    if ("using" in options) {
                        options.using.call(elem, props);

                    } else {
                        curElem.css(props);
                    }
                }
            };

            jQuery.fn.extend({

                offset: function(options) {

                    if (arguments.length) {
                        return options === undefined ?
                            this :
                            this.each(function(i) {
                                jQuery.offset.setOffset(this, options, i);
                            });
                    }

                    var rect, win,
                        elem = this[0];

                    if (!elem) {
                        return;
                    }

                    if (!elem.getClientRects().length) {
                        return { top: 0, left: 0 };
                    }

                    rect = elem.getBoundingClientRect();
                    win = elem.ownerDocument.defaultView;
                    return {
                        top: rect.top + win.pageYOffset,
                        left: rect.left + win.pageXOffset
                    };
                },

                position: function() {
                    if (!this[0]) {
                        return;
                    }

                    var offsetParent, offset, doc,
                        elem = this[0],
                        parentOffset = { top: 0, left: 0 };

                    if (jQuery.css(elem, "position") === "fixed") {

                        offset = elem.getBoundingClientRect();

                    } else {
                        offset = this.offset();

                        doc = elem.ownerDocument;
                        offsetParent = elem.offsetParent || doc.documentElement;
                        while (offsetParent &&
                            (offsetParent === doc.body || offsetParent === doc.documentElement) &&
                            jQuery.css(offsetParent, "position") === "static") {

                            offsetParent = offsetParent.parentNode;
                        }
                        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {

                            parentOffset = jQuery(offsetParent).offset();
                            parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                            parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                        }
                    }

                    return {
                        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                    };
                },

                offsetParent: function() {
                    return this.map(function() {
                        var offsetParent = this.offsetParent;

                        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                            offsetParent = offsetParent.offsetParent;
                        }

                        return offsetParent || documentElement;
                    });
                }
            });


            jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
                var top = "pageYOffset" === prop;

                jQuery.fn[method] = function(val) {
                    return access(this, function(elem, method, val) {


                        var win;
                        if (isWindow(elem)) {
                            win = elem;
                        } else if (elem.nodeType === 9) {
                            win = elem.defaultView;
                        }

                        if (val === undefined) {
                            return win ? win[prop] : elem[method];
                        }

                        if (win) {
                            win.scrollTo(!top ? val : win.pageXOffset,
                                top ? val : win.pageYOffset
                            );

                        } else {
                            elem[method] = val;
                        }
                    }, method, val, arguments.length);
                };
            });







            jQuery.each(["top", "left"], function(i, prop) {
                jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
                    function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);


                            return rnumnonpx.test(computed) ?
                                jQuery(elem).position()[prop] + "px" :
                                computed;
                        }
                    }
                );
            });



            jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
                jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name },
                    function(defaultExtra, funcName) {


                        jQuery.fn[funcName] = function(margin, value) {
                            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                                extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

                            return access(this, function(elem, type, value) {
                                var doc;

                                if (isWindow(elem)) {


                                    return funcName.indexOf("outer") === 0 ?
                                        elem["inner" + name] :
                                        elem.document.documentElement["client" + name];
                                }


                                if (elem.nodeType === 9) {
                                    doc = elem.documentElement;



                                    return Math.max(
                                        elem.body["scroll" + name], doc["scroll" + name],
                                        elem.body["offset" + name], doc["offset" + name],
                                        doc["client" + name]
                                    );
                                }

                                return value === undefined ?


                                    jQuery.css(elem, type, extra) :


                                    jQuery.style(elem, type, value, extra);
                            }, type, chainable ? margin : undefined, chainable);
                        };
                    });
            });


            jQuery.each(("blur focus focusin focusout resize scroll click dblclick " +
                    "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
                    "change select submit keydown keypress keyup contextmenu").split(" "),
                function(i, name) {


                    jQuery.fn[name] = function(data, fn) {
                        return arguments.length > 0 ?
                            this.on(name, null, data, fn) :
                            this.trigger(name);
                    };
                });

            jQuery.fn.extend({
                hover: function(fnOver, fnOut) {
                    return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                }
            });




            jQuery.fn.extend({

                bind: function(types, data, fn) {
                    return this.on(types, null, data, fn);
                },
                unbind: function(types, fn) {
                    return this.off(types, null, fn);
                },

                delegate: function(selector, types, data, fn) {
                    return this.on(types, selector, data, fn);
                },
                undelegate: function(selector, types, fn) {


                    return arguments.length === 1 ?
                        this.off(selector, "**") :
                        this.off(types, selector || "**", fn);
                }
            });





            jQuery.proxy = function(fn, context) {
                var tmp, args, proxy;

                if (typeof context === "string") {
                    tmp = fn[context];
                    context = fn;
                    fn = tmp;
                }



                if (!isFunction(fn)) {
                    return undefined;
                }


                args = slice.call(arguments, 2);
                proxy = function() {
                    return fn.apply(context || this, args.concat(slice.call(arguments)));
                };


                proxy.guid = fn.guid = fn.guid || jQuery.guid++;

                return proxy;
            };

            jQuery.holdReady = function(hold) {
                if (hold) {
                    jQuery.readyWait++;
                } else {
                    jQuery.ready(true);
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

            jQuery.isNumeric = function(obj) {




                var type = jQuery.type(obj);
                return (type === "number" || type === "string") &&




                    !isNaN(obj - parseFloat(obj));
            };

















            if (true) {
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                        return jQuery;
                    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                    __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            }




            var


                _jQuery = window.jQuery,


                _$ = window.$;

            jQuery.noConflict = function(deep) {
                if (window.$ === jQuery) {
                    window.$ = _$;
                }

                if (deep && window.jQuery === jQuery) {
                    window.jQuery = _jQuery;
                }

                return jQuery;
            };




            if (!noGlobal) {
                window.jQuery = window.$ = jQuery;
            }




            return jQuery;
        });


        /***/
    }),

    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.d(__webpack_exports__, "a", function() { return dropdown; });

        function dropdown(elementClassName) {



            let elementDropDown = document.querySelector(elementClassName),
                gross = [],
                optionMenu = {},
                optionRow = []


            const correctMark = () => {
                if (elementDropDown.classList.contains('dropdown_open')) {
                    elementDropDown.querySelector('.dropdown__marker').innerText = 'expand_less'
                } else {
                    elementDropDown.querySelector('.dropdown__marker').innerText = 'expand_more'
                }
            }

            const toggleDropdown = () => {
                elementDropDown.classList.toggle('dropdown_open')
                correctMark()
            }

            const dropDownClose = () => {
                elementDropDown.classList.remove('dropdown_open')
                correctMark()
            }



            function writeSelect() {
                let commonValue = 0
                let commonString = ''
                let isHaveCommon = false
                let addString = ''



                function goodNaming(value, namingString) {



                    if (value === 0) {
                        return namingString[2]
                    } else if (value === 1) {
                        return namingString[0]
                    } else if ((value > 1) && (value < 5)) {
                        return namingString[1]
                    } else if ((value > 4)) {
                        return namingString[2]
                    }
                }

                for (let i = 0; i < gross.length; i++) {

                    if (optionRow[i].separate.length > 1) {


                        if (gross[i] > 0) {
                            if (addString !== '') {
                                addString += ', '
                            }
                            addString += gross[i] + ' ' + goodNaming(gross[i], optionRow[i].separate)
                        }
                    } else {
                        isHaveCommon = true
                        commonValue += gross[i]
                    }
                }

                if (isHaveCommon) {
                    commonString = commonValue + ' ' + goodNaming(commonValue, optionMenu.naming)
                    if (addString !== '') {
                        commonString += ', '
                    }
                }

                elementDropDown.querySelector('.dropdown__selection').innerHTML = commonString + addString

            }



            document.addEventListener('click', event => {
                if (!event.target.closest(elementClassName)) {
                    dropDownClose()
                }

            })

            optionMenu.initSelection = elementDropDown.querySelector('.dropdown__selection').innerHTML
            optionMenu.naming = elementDropDown.querySelector('.dropdown__menu').dataset.separate.split(',')

            for (let i = 0; i < elementDropDown.querySelector('.dropdown__menu').childElementCount; i++) {

                let elementRow = elementDropDown.querySelector('.dropdown__menu').children[i]

                if (!elementRow.classList.contains('dropdown__menu-row_buttons')) {

                    gross[i] = Number(elementRow.dataset.mincount)

                    optionRow[i] = {
                        mincount: gross[i],
                        maxcount: (Number(elementRow.dataset.maxcount)) ? Number(elementRow.dataset.maxcount) : Infinity,
                        separate: elementRow.dataset.separate.split(',')
                    }

                    elementRow.addEventListener('click', event => {
                        if (event.target.closest('.dropdown__control-decrement')) {
                            if (gross[i] > optionRow[i].mincount) {
                                gross[i]--
                                    elementRow.querySelector('.dropdown__control-count').innerHTML = gross[i]
                                writeSelect()
                            }
                        }
                        if (event.target.closest('.dropdown__control-increment')) {
                            if (gross[i] < optionRow[i].maxcount) {
                                gross[i]++
                                    elementRow.querySelector('.dropdown__control-count').innerHTML = gross[i]
                                writeSelect()
                            }
                        }
                    })
                } else {

                    elementRow.addEventListener('click', event => {
                        if (event.target.closest('.dropdown__button-clear')) {
                            for (let i = 0; i < optionRow.length; i++) {
                                gross[i] = optionRow[i].mincount
                                elementDropDown.querySelector('.dropdown__menu').children[i].querySelector('.dropdown__control-count').innerHTML = gross[i]
                            }
                            elementDropDown.querySelector('.dropdown__selection').innerHTML = optionMenu.initSelection
                        }

                        if (event.target.closest('.dropdown__button-submit')) {
                            dropDownClose()
                        }
                    })
                }
            }

            elementDropDown.addEventListener('click', event => {
                if (!(event.target.closest('.dropdown__menu')) && (event.target.closest(elementClassName))) {
                    toggleDropdown()
                }
            })

            function getValue() {
                return gross
            }



            correctMark()

            return {
                getValue: getValue
            }

        }

        /***/
    }),

    ,

    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.d(__webpack_exports__, "a", function() { return expCheckboxList; });

        function expCheckboxList(elementClassName) {
            let elementChekboxList = document.querySelector(elementClassName)

            const toggleCheckboxList = () => {
                elementChekboxList.classList.toggle('expandable-checkbox-list_open')
            }

            const closeCheckboxList = () => {
                elementChekboxList.classList.remove('expandable-checkbox-list_open')
            }


            function correctMark() {
                if (elementChekboxList.classList.contains('expandable-checkbox-list_open')) {
                    elementChekboxList.querySelector('.expandable-checkbox-list__toggle-marker')
                } else {
                    elementChekboxList.querySelector('.expandable-checkbox-list__toggle-marker')
                }
            }

            document.addEventListener('click', event => {
                if (!event.target.closest(elementClassName)) {
                    closeCheckboxList()
                    correctMark()
                }
            })

            document.addEventListener('click', event => {
                if (!(event.target.closest('.expandable-checkbox-list__menu')) && (event.target.closest(elementClassName))) {
                    toggleCheckboxList()
                    correctMark()
                }
            })

            function getList() {
                let grossCheckList = []
                for (let i = 0; i < elementChekboxList.querySelector('.expandable-checkbox-list__menu').children.length; i++) {
                    let fieldCheckboxElement = elementChekboxList.querySelector('.expandable-checkbox-list__menu').children[i]
                    grossCheckList[i] = {}
                    grossCheckList[i].fieldCheckboxName = fieldCheckboxElement.querySelector('.field-checkbox').dataset.name
                    grossCheckList[i].fieldCheckboxState = fieldCheckboxElement.querySelector('.field-checkbox__input').checked
                }
                return grossCheckList
            }

            correctMark()

            return {
                getList: getList
            }



        }

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {}),

    /***/
    (function(module, exports, __webpack_require__) {

        (function(jQuery) {
            ! function(t, e, i) {
                ! function() {
                    var s, a, n, h = "2.2.3",
                        o = "datepicker",
                        r = ".datepicker-here",
                        c = !1,
                        d = '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',
                        l = { classes: "", inline: !1, language: "ru", startDate: new Date, firstDay: "", weekends: [6, 0], dateFormat: "", altField: "", altFieldDateFormat: "@", toggleSelected: !0, keyboardNav: !0, position: "bottom left", offset: 12, view: "days", minView: "days", showOtherMonths: !0, selectOtherMonths: !0, moveToOtherMonthsOnSelect: !0, showOtherYears: !0, selectOtherYears: !0, moveToOtherYearsOnSelect: !0, minDate: "", maxDate: "", disableNavWhenOutOfRange: !0, multipleDates: !1, multipleDatesSeparator: ",", range: !1, todayButton: !1, clearButton: !1, showEvent: "focus", autoClose: !1, monthsField: "monthsShort", prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>', nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>', navTitles: { days: "MM, <i>yyyy</i>", months: "yyyy", years: "yyyy1 - yyyy2" }, timepicker: !1, onlyTimepicker: !1, dateTimeSeparator: " ", timeFormat: "", minHours: 0, maxHours: 24, minMinutes: 0, maxMinutes: 59, hoursStep: 1, minutesStep: 1, onSelect: "", onShow: "", onHide: "", onChangeMonth: "", onChangeYear: "", onChangeDecade: "", onChangeView: "", onRenderCell: "" },
                        u = { ctrlRight: [17, 39], ctrlUp: [17, 38], ctrlLeft: [17, 37], ctrlDown: [17, 40], shiftRight: [16, 39], shiftUp: [16, 38], shiftLeft: [16, 37], shiftDown: [16, 40], altUp: [18, 38], altRight: [18, 39], altLeft: [18, 37], altDown: [18, 40], ctrlShiftUp: [16, 17, 38] },
                        m = function(t, a) { this.el = t, this.$el = e(t), this.opts = e.extend(!0, {}, l, a, this.$el.data()), s == i && (s = e("body")), this.opts.startDate || (this.opts.startDate = new Date), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? e(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init() };
                    n = m, n.prototype = {
                        VERSION: h,
                        viewIndexes: ["days", "months", "years"],
                        init: function() { c || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new e.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new e.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new e.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0 },
                        _createShortCuts: function() { this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5) },
                        _bindEvents: function() { this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), e(t).on("resize.adp", this._onResize.bind(this)), e("body").on("mouseup.adp", this._onMouseUpBody.bind(this)) },
                        _bindKeyboardEvents: function() { this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this)) },
                        _bindTimepickerEvents: function() { this.$el.on("timeChange.adp", this._onTimeChange.bind(this)) },
                        isWeekend: function(t) { return -1 !== this.opts.weekends.indexOf(t) },
                        _defineLocale: function(t) {
                            "string" == typeof t ? (this.loc = e.fn.datepicker.language[t], this.loc || (console.warn("Can't find language \"" + t + '" in Datepicker.language, will use "ru" instead'), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru)), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, e.fn.datepicker.language[t])) : this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, t), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);
                            var i = this._getWordBoundaryRegExp;
                            (this.loc.timeFormat.match(i("aa")) || this.loc.timeFormat.match(i("AA"))) && (this.ampm = !0)
                        },
                        _buildDatepickersContainer: function() { c = !0, s.append('<div class="datepickers-container" id="datepickers-container"></div>'), a = e("#datepickers-container") },
                        _buildBaseHtml: function() {
                            var t, i = e('<div class="datepicker-inline">');
                            t = "INPUT" == this.el.nodeName ? this.opts.inline ? i.insertAfter(this.$el) : a : i.appendTo(this.$el), this.$datepicker = e(d).appendTo(t), this.$content = e(".datepicker--content", this.$datepicker), this.$nav = e(".datepicker--nav", this.$datepicker)
                        },
                        _triggerOnChange: function() {
                            if (!this.selectedDates.length) { if ("" === this._prevOnSelectValue) return; return this._prevOnSelectValue = "", this.opts.onSelect("", "", this) }
                            var t, e = this.selectedDates,
                                i = n.getParsedDate(e[0]),
                                s = this,
                                a = new Date(i.year, i.month, i.date, i.hours, i.minutes);
                            t = e.map(function(t) { return s.formatDate(s.loc.dateFormat, t) }).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (a = e.map(function(t) { var e = n.getParsedDate(t); return new Date(e.year, e.month, e.date, e.hours, e.minutes) })), this._prevOnSelectValue = t, this.opts.onSelect(t, a, this)
                        },
                        next: function() {
                            var t = this.parsedDate,
                                e = this.opts;
                            switch (this.view) {
                                case "days":
                                    this.date = new Date(t.year, t.month + 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                                    break;
                                case "months":
                                    this.date = new Date(t.year + 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
                                    break;
                                case "years":
                                    this.date = new Date(t.year + 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade)
                            }
                        },
                        prev: function() {
                            var t = this.parsedDate,
                                e = this.opts;
                            switch (this.view) {
                                case "days":
                                    this.date = new Date(t.year, t.month - 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                                    break;
                                case "months":
                                    this.date = new Date(t.year - 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
                                    break;
                                case "years":
                                    this.date = new Date(t.year - 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade)
                            }
                        },
                        formatDate: function(t, e) {
                            e = e || this.date;
                            var i, s = t,
                                a = this._getWordBoundaryRegExp,
                                h = this.loc,
                                o = n.getLeadingZeroNum,
                                r = n.getDecade(e),
                                c = n.getParsedDate(e),
                                d = c.fullHours,
                                l = c.hours,
                                u = t.match(a("aa")) || t.match(a("AA")),
                                m = "am",
                                p = this._replacer;
                            switch (this.opts.timepicker && this.timepicker && u && (i = this.timepicker._getValidHoursFromDate(e, u), d = o(i.hours), l = i.hours, m = i.dayPeriod), !0) {
                                case /@/.test(s):
                                    s = s.replace(/@/, e.getTime());
                                case /aa/.test(s):
                                    s = p(s, a("aa"), m);
                                case /AA/.test(s):
                                    s = p(s, a("AA"), m.toUpperCase());
                                case /dd/.test(s):
                                    s = p(s, a("dd"), c.fullDate);
                                case /d/.test(s):
                                    s = p(s, a("d"), c.date);
                                case /DD/.test(s):
                                    s = p(s, a("DD"), h.days[c.day]);
                                case /D/.test(s):
                                    s = p(s, a("D"), h.daysShort[c.day]);
                                case /mm/.test(s):
                                    s = p(s, a("mm"), c.fullMonth);
                                case /m/.test(s):
                                    s = p(s, a("m"), c.month + 1);
                                case /MM/.test(s):
                                    s = p(s, a("MM"), this.loc.months[c.month]);
                                case /M/.test(s):
                                    s = p(s, a("M"), h.monthsShort[c.month]);
                                case /ii/.test(s):
                                    s = p(s, a("ii"), c.fullMinutes);
                                case /i/.test(s):
                                    s = p(s, a("i"), c.minutes);
                                case /hh/.test(s):
                                    s = p(s, a("hh"), d);
                                case /h/.test(s):
                                    s = p(s, a("h"), l);
                                case /yyyy/.test(s):
                                    s = p(s, a("yyyy"), c.year);
                                case /yyyy1/.test(s):
                                    s = p(s, a("yyyy1"), r[0]);
                                case /yyyy2/.test(s):
                                    s = p(s, a("yyyy2"), r[1]);
                                case /yy/.test(s):
                                    s = p(s, a("yy"), c.year.toString().slice(-2))
                            }
                            return s
                        },
                        _replacer: function(t, e, i) { return t.replace(e, function(t, e, s, a) { return e + i + a }) },
                        _getWordBoundaryRegExp: function(t) { var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;"; return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g") },
                        selectDate: function(t) {
                            var e = this,
                                i = e.opts,
                                s = e.parsedDate,
                                a = e.selectedDates,
                                h = a.length,
                                o = "";
                            if (Array.isArray(t)) return void t.forEach(function(t) { e.selectDate(t) });
                            if (t instanceof Date) {
                                if (this.lastSelectedDate = t, this.timepicker && this.timepicker._setTime(t), e._trigger("selectDate", t), this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), "days" == e.view && t.getMonth() != s.month && i.moveToOtherMonthsOnSelect && (o = new Date(t.getFullYear(), t.getMonth(), 1)), "years" == e.view && t.getFullYear() != s.year && i.moveToOtherYearsOnSelect && (o = new Date(t.getFullYear(), 0, 1)), o && (e.silent = !0, e.date = o, e.silent = !1, e.nav._render()), i.multipleDates && !i.range) {
                                    if (h === i.multipleDates) return;
                                    e._isSelected(t) || e.selectedDates.push(t)
                                } else i.range ? 2 == h ? (e.selectedDates = [t], e.minRange = t, e.maxRange = "") : 1 == h ? (e.selectedDates.push(t), e.maxRange ? e.minRange = t : e.maxRange = t, n.bigger(e.maxRange, e.minRange) && (e.maxRange = e.minRange, e.minRange = t), e.selectedDates = [e.minRange, e.maxRange]) : (e.selectedDates = [t], e.minRange = t) : e.selectedDates = [t];
                                e._setInputValue(), i.onSelect && e._triggerOnChange(), i.autoClose && !this.timepickerIsActive && (i.multipleDates || i.range ? i.range && 2 == e.selectedDates.length && e.hide() : e.hide()), e.views[this.currentView]._render()
                            }
                        },
                        removeDate: function(t) {
                            var e = this.selectedDates,
                                i = this;
                            if (t instanceof Date) return e.some(function(s, a) { return n.isSame(s, t) ? (e.splice(a, 1), i.selectedDates.length ? i.lastSelectedDate = i.selectedDates[i.selectedDates.length - 1] : (i.minRange = "", i.maxRange = "", i.lastSelectedDate = ""), i.views[i.currentView]._render(), i._setInputValue(), i.opts.onSelect && i._triggerOnChange(), !0) : void 0 })
                        },
                        today: function() { this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date, this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton) },
                        clear: function() { this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange() },
                        update: function(t, i) {
                            var s = arguments.length,
                                a = this.lastSelectedDate;
                            return 2 == s ? this.opts[t] = i : 1 == s && "object" == typeof t && (this.opts = e.extend(!0, this.opts, t)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (a && this.timepicker._handleDate(a), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), a && (a.setHours(this.timepicker.hours), a.setMinutes(this.timepicker.minutes))), this._setInputValue(), this
                        },
                        _syncWithMinMaxDates: function() {
                            var t = this.date.getTime();
                            this.silent = !0, this.minTime > t && (this.date = this.minDate), this.maxTime < t && (this.date = this.maxDate), this.silent = !1
                        },
                        _isSelected: function(t, e) { var i = !1; return this.selectedDates.some(function(s) { return n.isSame(s, t, e) ? (i = s, !0) : void 0 }), i },
                        _setInputValue: function() {
                            var t, e = this,
                                i = e.opts,
                                s = e.loc.dateFormat,
                                a = i.altFieldDateFormat,
                                n = e.selectedDates.map(function(t) { return e.formatDate(s, t) });
                            i.altField && e.$altField.length && (t = this.selectedDates.map(function(t) { return e.formatDate(a, t) }), t = t.join(this.opts.multipleDatesSeparator), this.$altField.val(t)), n = n.join(this.opts.multipleDatesSeparator), this.$el.val(n)
                        },
                        _isInRange: function(t, e) {
                            var i = t.getTime(),
                                s = n.getParsedDate(t),
                                a = n.getParsedDate(this.minDate),
                                h = n.getParsedDate(this.maxDate),
                                o = new Date(s.year, s.month, a.date).getTime(),
                                r = new Date(s.year, s.month, h.date).getTime(),
                                c = { day: i >= this.minTime && i <= this.maxTime, month: o >= this.minTime && r <= this.maxTime, year: s.year >= a.year && s.year <= h.year };
                            return e ? c[e] : c.day
                        },
                        _getDimensions: function(t) { var e = t.offset(); return { width: t.outerWidth(), height: t.outerHeight(), left: e.left, top: e.top } },
                        _getDateFromCell: function(t) {
                            var e = this.parsedDate,
                                s = t.data("year") || e.year,
                                a = t.data("month") == i ? e.month : t.data("month"),
                                n = t.data("date") || 1;
                            return new Date(s, a, n)
                        },
                        _setPositionClasses: function(t) {
                            t = t.split(" ");
                            var e = t[0],
                                i = t[1],
                                s = "datepicker -" + e + "-" + i + "- -from-" + e + "-";
                            this.visible && (s += " active"), this.$datepicker.removeAttr("class").addClass(s)
                        },
                        setPosition: function(t) {
                            t = t || this.opts.position;
                            var e, i, s = this._getDimensions(this.$el),
                                a = this._getDimensions(this.$datepicker),
                                n = t.split(" "),
                                h = this.opts.offset,
                                o = n[0],
                                r = n[1];
                            switch (o) {
                                case "top":
                                    e = s.top - a.height - h;
                                    break;
                                case "right":
                                    i = s.left + s.width + h;
                                    break;
                                case "bottom":
                                    e = s.top + s.height + h;
                                    break;
                                case "left":
                                    i = s.left - a.width - h
                            }
                            switch (r) {
                                case "top":
                                    e = s.top;
                                    break;
                                case "right":
                                    i = s.left + s.width - a.width;
                                    break;
                                case "bottom":
                                    e = s.top + s.height - a.height;
                                    break;
                                case "left":
                                    i = s.left;
                                    break;
                                case "center":
                                    /left|right/.test(o) ? e = s.top + s.height / 2 - a.height / 2 : i = s.left + s.width / 2 - a.width / 2
                            }
                            this.$datepicker.css({ left: i, top: e })
                        },
                        show: function() {
                            var t = this.opts.onShow;
                            this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, t && this._bindVisionEvents(t)
                        },
                        hide: function() {
                            var t = this.opts.onHide;
                            this.$datepicker.removeClass("active").css({ left: "-100000px" }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), t && this._bindVisionEvents(t)
                        },
                        down: function(t) { this._changeView(t, "down") },
                        up: function(t) { this._changeView(t, "up") },
                        _bindVisionEvents: function(t) { this.$datepicker.off("transitionend.dp"), t(this, !1), this.$datepicker.one("transitionend.dp", t.bind(this, this, !0)) },
                        _changeView: function(t, e) {
                            t = t || this.focused || this.date;
                            var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;
                            i > 2 && (i = 2), 0 > i && (i = 0), this.silent = !0, this.date = new Date(t.getFullYear(), t.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[i]
                        },
                        _handleHotKey: function(t) {
                            var e, i, s, a = n.getParsedDate(this._getFocusedDate()),
                                h = this.opts,
                                o = !1,
                                r = !1,
                                c = !1,
                                d = a.year,
                                l = a.month,
                                u = a.date;
                            switch (t) {
                                case "ctrlRight":
                                case "ctrlUp":
                                    l += 1, o = !0;
                                    break;
                                case "ctrlLeft":
                                case "ctrlDown":
                                    l -= 1, o = !0;
                                    break;
                                case "shiftRight":
                                case "shiftUp":
                                    r = !0, d += 1;
                                    break;
                                case "shiftLeft":
                                case "shiftDown":
                                    r = !0, d -= 1;
                                    break;
                                case "altRight":
                                case "altUp":
                                    c = !0, d += 10;
                                    break;
                                case "altLeft":
                                case "altDown":
                                    c = !0, d -= 10;
                                    break;
                                case "ctrlShiftUp":
                                    this.up()
                            }
                            s = n.getDaysCount(new Date(d, l)), i = new Date(d, l, u), u > s && (u = s), i.getTime() < this.minTime ? i = this.minDate : i.getTime() > this.maxTime && (i = this.maxDate), this.focused = i, e = n.getParsedDate(i), o && h.onChangeMonth && h.onChangeMonth(e.month, e.year), r && h.onChangeYear && h.onChangeYear(e.year), c && h.onChangeDecade && h.onChangeDecade(this.curDecade)
                        },
                        _registerKey: function(t) {
                            var e = this.keys.some(function(e) { return e == t });
                            e || this.keys.push(t)
                        },
                        _unRegisterKey: function(t) {
                            var e = this.keys.indexOf(t);
                            this.keys.splice(e, 1)
                        },
                        _isHotKeyPressed: function() {
                            var t, e = !1,
                                i = this,
                                s = this.keys.sort();
                            for (var a in u) t = u[a], s.length == t.length && t.every(function(t, e) { return t == s[e] }) && (i._trigger("hotKey", a), e = !0);
                            return e
                        },
                        _trigger: function(t, e) { this.$el.trigger(t, e) },
                        _focusNextCell: function(t, e) {
                            e = e || this.cellType;
                            var i = n.getParsedDate(this._getFocusedDate()),
                                s = i.year,
                                a = i.month,
                                h = i.date;
                            if (!this._isHotKeyPressed()) {
                                switch (t) {
                                    case 37:
                                        "day" == e ? h -= 1 : "", "month" == e ? a -= 1 : "", "year" == e ? s -= 1 : "";
                                        break;
                                    case 38:
                                        "day" == e ? h -= 7 : "", "month" == e ? a -= 3 : "", "year" == e ? s -= 4 : "";
                                        break;
                                    case 39:
                                        "day" == e ? h += 1 : "", "month" == e ? a += 1 : "", "year" == e ? s += 1 : "";
                                        break;
                                    case 40:
                                        "day" == e ? h += 7 : "", "month" == e ? a += 3 : "", "year" == e ? s += 4 : ""
                                }
                                var o = new Date(s, a, h);
                                o.getTime() < this.minTime ? o = this.minDate : o.getTime() > this.maxTime && (o = this.maxDate), this.focused = o
                            }
                        },
                        _getFocusedDate: function() {
                            var t = this.focused || this.selectedDates[this.selectedDates.length - 1],
                                e = this.parsedDate;
                            if (!t) switch (this.view) {
                                case "days":
                                    t = new Date(e.year, e.month, (new Date).getDate());
                                    break;
                                case "months":
                                    t = new Date(e.year, e.month, 1);
                                    break;
                                case "years":
                                    t = new Date(e.year, 0, 1)
                            }
                            return t
                        },
                        _getCell: function(t, i) {
                            i = i || this.cellType;
                            var s, a = n.getParsedDate(t),
                                h = '.datepicker--cell[data-year="' + a.year + '"]';
                            switch (i) {
                                case "month":
                                    h = '[data-month="' + a.month + '"]';
                                    break;
                                case "day":
                                    h += '[data-month="' + a.month + '"][data-date="' + a.date + '"]'
                            }
                            return s = this.views[this.currentView].$el.find(h), s.length ? s : e("")
                        },
                        destroy: function() {
                            var t = this;
                            t.$el.off(".adp").data("datepicker", ""), t.selectedDates = [], t.focused = "", t.views = {}, t.keys = [], t.minRange = "", t.maxRange = "", t.opts.inline || !t.elIsInput ? t.$datepicker.closest(".datepicker-inline").remove() : t.$datepicker.remove()
                        },
                        _handleAlreadySelectedDates: function(t, e) { this.opts.range ? this.opts.toggleSelected ? this.removeDate(e) : 2 != this.selectedDates.length && this._trigger("clickCell", e) : this.opts.toggleSelected && this.removeDate(e), this.opts.toggleSelected || (this.lastSelectedDate = t, this.opts.timepicker && (this.timepicker._setTime(t), this.timepicker.update())) },
                        _onShowEvent: function(t) { this.visible || this.show() },
                        _onBlur: function() {!this.inFocus && this.visible && this.hide() },
                        _onMouseDownDatepicker: function(t) { this.inFocus = !0 },
                        _onMouseUpDatepicker: function(t) { this.inFocus = !1, t.originalEvent.inFocus = !0, t.originalEvent.timepickerFocus || this.$el.focus() },
                        _onKeyUpGeneral: function(t) {
                            var e = this.$el.val();
                            e || this.clear()
                        },
                        _onResize: function() { this.visible && this.setPosition() },
                        _onMouseUpBody: function(t) { t.originalEvent.inFocus || this.visible && !this.inFocus && this.hide() },
                        _onMouseUpEl: function(t) { t.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4) },
                        _onKeyDown: function(t) {
                            var e = t.which;
                            if (this._registerKey(e), e >= 37 && 40 >= e && (t.preventDefault(), this._focusNextCell(e)), 13 == e && this.focused) {
                                if (this._getCell(this.focused).hasClass("-disabled-")) return;
                                if (this.view != this.opts.minView) this.down();
                                else {
                                    var i = this._isSelected(this.focused, this.cellType);
                                    if (!i) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);
                                    this._handleAlreadySelectedDates(i, this.focused)
                                }
                            }
                            27 == e && this.hide()
                        },
                        _onKeyUp: function(t) {
                            var e = t.which;
                            this._unRegisterKey(e)
                        },
                        _onHotKey: function(t, e) { this._handleHotKey(e) },
                        _onMouseEnterCell: function(t) {
                            var i = e(t.target).closest(".datepicker--cell"),
                                s = this._getDateFromCell(i);
                            this.silent = !0, this.focused && (this.focused = ""), i.addClass("-focus-"), this.focused = s, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update())
                        },
                        _onMouseLeaveCell: function(t) {
                            var i = e(t.target).closest(".datepicker--cell");
                            i.removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1
                        },
                        _onTimeChange: function(t, e, i) {
                            var s = new Date,
                                a = this.selectedDates,
                                n = !1;
                            a.length && (n = !0, s = this.lastSelectedDate), s.setHours(e), s.setMinutes(i), n || this._getCell(s).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(s)
                        },
                        _onClickCell: function(t, e) { this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), this.selectDate(e) },
                        set focused(t) {
                            if (!t && this.focused) {
                                var e = this._getCell(this.focused);
                                e.length && e.removeClass("-focus-")
                            }
                            this._focused = t, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = t)
                        },
                        get focused() { return this._focused },
                        get parsedDate() { return n.getParsedDate(this.date) },
                        set date(t) { return t instanceof Date ? (this.currentDate = t, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), t) : void 0 },
                        get date() { return this.currentDate },
                        set view(t) { return this.viewIndex = this.viewIndexes.indexOf(t), this.viewIndex < 0 ? void 0 : (this.prevView = this.currentView, this.currentView = t, this.inited && (this.views[t] ? this.views[t]._render() : this.views[t] = new e.fn.datepicker.Body(this, t, this.opts), this.views[this.prevView].hide(), this.views[t].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(t), this.elIsInput && this.visible && this.setPosition()), t) },
                        get view() { return this.currentView },
                        get cellType() { return this.view.substring(0, this.view.length - 1) },
                        get minTime() { var t = n.getParsedDate(this.minDate); return new Date(t.year, t.month, t.date).getTime() },
                        get maxTime() { var t = n.getParsedDate(this.maxDate); return new Date(t.year, t.month, t.date).getTime() },
                        get curDecade() { return n.getDecade(this.date) }
                    }, n.getDaysCount = function(t) { return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate() }, n.getParsedDate = function(t) { return { year: t.getFullYear(), month: t.getMonth(), fullMonth: t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1, date: t.getDate(), fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(), day: t.getDay(), hours: t.getHours(), fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(), minutes: t.getMinutes(), fullMinutes: t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes() } }, n.getDecade = function(t) { var e = 10 * Math.floor(t.getFullYear() / 10); return [e, e + 9] }, n.template = function(t, e) { return t.replace(/#\{([\w]+)\}/g, function(t, i) { return e[i] || 0 === e[i] ? e[i] : void 0 }) }, n.isSame = function(t, e, i) {
                        if (!t || !e) return !1;
                        var s = n.getParsedDate(t),
                            a = n.getParsedDate(e),
                            h = i ? i : "day",
                            o = { day: s.date == a.date && s.month == a.month && s.year == a.year, month: s.month == a.month && s.year == a.year, year: s.year == a.year };
                        return o[h]
                    }, n.less = function(t, e, i) { return t && e ? e.getTime() < t.getTime() : !1 }, n.bigger = function(t, e, i) { return t && e ? e.getTime() > t.getTime() : !1 }, n.getLeadingZeroNum = function(t) { return parseInt(t) < 10 ? "0" + t : t }, n.resetTime = function(t) { return "object" == typeof t ? (t = n.getParsedDate(t), new Date(t.year, t.month, t.date)) : void 0 }, e.fn.datepicker = function(t) {
                        return this.each(function() {
                            if (e.data(this, o)) {
                                var i = e.data(this, o);
                                i.opts = e.extend(!0, i.opts, t), i.update()
                            } else e.data(this, o, new m(this, t))
                        })
                    }, e.fn.datepicker.Constructor = m, e.fn.datepicker.language = { ru: { days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"], daysShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], daysMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'], today: "Сегодня", clear: "Очистить", dateFormat: "dd.mm.yyyy", timeFormat: "hh:ii", firstDay: 1 } }, e(function() { e(r).datepicker() })
                }(),
                function() {
                    var t = { days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>', months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>', years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>' },
                        s = e.fn.datepicker,
                        a = s.Constructor;
                    s.Body = function(t, i, s) { this.d = t, this.type = i, this.opts = s, this.$el = e(""), this.opts.onlyTimepicker || this.init() }, s.Body.prototype = {
                        init: function() { this._buildBaseHtml(), this._render(), this._bindEvents() },
                        _bindEvents: function() { this.$el.on("click", ".datepicker--cell", e.proxy(this._onClickCell, this)) },
                        _buildBaseHtml: function() { this.$el = e(t[this.type]).appendTo(this.d.$content), this.$names = e(".datepicker--days-names", this.$el), this.$cells = e(".datepicker--cells", this.$el) },
                        _getDayNamesHtml: function(t, e, s, a) { return e = e != i ? e : t, s = s ? s : "", a = a != i ? a : 0, a > 7 ? s : 7 == e ? this._getDayNamesHtml(t, 0, s, ++a) : (s += '<div class="datepicker--day-name' + (this.d.isWeekend(e) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[e] + "</div>", this._getDayNamesHtml(t, ++e, s, ++a)) },
                        _getCellContents: function(t, e) {
                            var i = "datepicker--cell datepicker--cell-" + e,
                                s = new Date,
                                n = this.d,
                                h = a.resetTime(n.minRange),
                                o = a.resetTime(n.maxRange),
                                r = n.opts,
                                c = a.getParsedDate(t),
                                d = {},
                                l = c.date;
                            switch (e) {
                                case "day":
                                    n.isWeekend(c.day) && (i += " -weekend-"), c.month != this.d.parsedDate.month && (i += " -other-month-", r.selectOtherMonths || (i += " -disabled-"), r.showOtherMonths || (l = ""));
                                    break;
                                case "month":
                                    l = n.loc[n.opts.monthsField][c.month];
                                    break;
                                case "year":
                                    var u = n.curDecade;
                                    l = c.year, (c.year < u[0] || c.year > u[1]) && (i += " -other-decade-", r.selectOtherYears || (i += " -disabled-"), r.showOtherYears || (l = ""))
                            }
                            return r.onRenderCell && (d = r.onRenderCell(t, e) || {}, l = d.html ? d.html : l, i += d.classes ? " " + d.classes : ""), r.range && (a.isSame(h, t, e) && (i += " -range-from-"), a.isSame(o, t, e) && (i += " -range-to-"), 1 == n.selectedDates.length && n.focused ? ((a.bigger(h, t) && a.less(n.focused, t) || a.less(o, t) && a.bigger(n.focused, t)) && (i += " -in-range-"), a.less(o, t) && a.isSame(n.focused, t) && (i += " -range-from-"), a.bigger(h, t) && a.isSame(n.focused, t) && (i += " -range-to-")) : 2 == n.selectedDates.length && a.bigger(h, t) && a.less(o, t) && (i += " -in-range-")), a.isSame(s, t, e) && (i += " -current-"), n.focused && a.isSame(t, n.focused, e) && (i += " -focus-"), n._isSelected(t, e) && (i += " -selected-"), (!n._isInRange(t, e) || d.disabled) && (i += " -disabled-"), { html: l, classes: i }
                        },
                        _getDaysHtml: function(t) {
                            var e = a.getDaysCount(t),
                                i = new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
                                s = new Date(t.getFullYear(), t.getMonth(), e).getDay(),
                                n = i - this.d.loc.firstDay,
                                h = 6 - s + this.d.loc.firstDay;
                            n = 0 > n ? n + 7 : n, h = h > 6 ? h - 7 : h;
                            for (var o, r, c = -n + 1, d = "", l = c, u = e + h; u >= l; l++) r = t.getFullYear(), o = t.getMonth(), d += this._getDayHtml(new Date(r, o, l));
                            return d
                        },
                        _getDayHtml: function(t) { var e = this._getCellContents(t, "day"); return '<div class="' + e.classes + '" data-date="' + t.getDate() + '" data-month="' + t.getMonth() + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>" },
                        _getMonthsHtml: function(t) { for (var e = "", i = a.getParsedDate(t), s = 0; 12 > s;) e += this._getMonthHtml(new Date(i.year, s)), s++; return e },
                        _getMonthHtml: function(t) { var e = this._getCellContents(t, "month"); return '<div class="' + e.classes + '" data-month="' + t.getMonth() + '">' + e.html + "</div>" },
                        _getYearsHtml: function(t) {
                            var e = (a.getParsedDate(t), a.getDecade(t)),
                                i = e[0] - 1,
                                s = "",
                                n = i;
                            for (n; n <= e[1] + 1; n++) s += this._getYearHtml(new Date(n, 0));
                            return s
                        },
                        _getYearHtml: function(t) { var e = this._getCellContents(t, "year"); return '<div class="' + e.classes + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>" },
                        _renderTypes: {
                            days: function() {
                                var t = this._getDayNamesHtml(this.d.loc.firstDay),
                                    e = this._getDaysHtml(this.d.currentDate);
                                this.$cells.html(e), this.$names.html(t)
                            },
                            months: function() {
                                var t = this._getMonthsHtml(this.d.currentDate);
                                this.$cells.html(t)
                            },
                            years: function() {
                                var t = this._getYearsHtml(this.d.currentDate);
                                this.$cells.html(t)
                            }
                        },
                        _render: function() { this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)() },
                        _update: function() {
                            var t, i, s, a = e(".datepicker--cell", this.$cells),
                                n = this;
                            a.each(function(a, h) { i = e(this), s = n.d._getDateFromCell(e(this)), t = n._getCellContents(s, n.d.cellType), i.attr("class", t.classes) })
                        },
                        show: function() { this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0) },
                        hide: function() { this.$el.removeClass("active"), this.active = !1 },
                        _handleClick: function(t) {
                            var e = t.data("date") || 1,
                                i = t.data("month") || 0,
                                s = t.data("year") || this.d.parsedDate.year,
                                a = this.d;
                            if (a.view != this.opts.minView) return void a.down(new Date(s, i, e));
                            var n = new Date(s, i, e),
                                h = this.d._isSelected(n, this.d.cellType);
                            return h ? void a._handleAlreadySelectedDates.bind(a, h, n)() : void a._trigger("clickCell", n)
                        },
                        _onClickCell: function(t) {
                            var i = e(t.target).closest(".datepicker--cell");
                            i.hasClass("-disabled-") || this._handleClick.bind(this)(i)
                        }
                    }
                }(),
                function() {
                    var t = '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
                        i = '<div class="datepicker--buttons"></div>',
                        s = '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
                        a = e.fn.datepicker,
                        n = a.Constructor;
                    a.Navigation = function(t, e) { this.d = t, this.opts = e, this.$buttonsContainer = "", this.init() }, a.Navigation.prototype = {
                        init: function() { this._buildBaseHtml(), this._bindEvents() },
                        _bindEvents: function() { this.d.$nav.on("click", ".datepicker--nav-action", e.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", e.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", e.proxy(this._onClickNavButton, this)) },
                        _buildBaseHtml: function() { this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed() },
                        _addButtonsIfNeed: function() { this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear") },
                        _render: function() {
                            var i = this._getTitle(this.d.currentDate),
                                s = n.template(t, e.extend({ title: i }, this.opts));
                            this.d.$nav.html(s), "years" == this.d.view && e(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus()
                        },
                        _getTitle: function(t) { return this.d.formatDate(this.opts.navTitles[this.d.view], t) },
                        _addButton: function(t) {
                            this.$buttonsContainer.length || this._addButtonsContainer();
                            var i = { action: t, label: this.d.loc[t] },
                                a = n.template(s, i);
                            e("[data-action=" + t + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(a)
                        },
                        _addButtonsContainer: function() { this.d.$datepicker.append(i), this.$buttonsContainer = e(".datepicker--buttons", this.d.$datepicker) },
                        setNavStatus: function() {
                            if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
                                var t = this.d.parsedDate,
                                    e = t.month,
                                    i = t.year,
                                    s = t.date;
                                switch (this.d.view) {
                                    case "days":
                                        this.d._isInRange(new Date(i, e - 1, 1), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, e + 1, 1), "month") || this._disableNav("next");
                                        break;
                                    case "months":
                                        this.d._isInRange(new Date(i - 1, e, s), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, e, s), "year") || this._disableNav("next");
                                        break;
                                    case "years":
                                        var a = n.getDecade(this.d.date);
                                        this.d._isInRange(new Date(a[0] - 1, 0, 1), "year") || this._disableNav("prev"), this.d._isInRange(new Date(a[1] + 1, 0, 1), "year") || this._disableNav("next")
                                }
                            }
                        },
                        _disableNav: function(t) { e('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-") },
                        _activateNav: function(t) { e('[data-action="' + t + '"]', this.d.$nav).removeClass("-disabled-") },
                        _onClickNavButton: function(t) {
                            var i = e(t.target).closest("[data-action]"),
                                s = i.data("action");
                            this.d[s]()
                        },
                        _onClickNavTitle: function(t) { return e(t.target).hasClass("-disabled-") ? void 0 : "days" == this.d.view ? this.d.view = "months" : void(this.d.view = "years") }
                    }
                }(),
                function() {
                    var t = '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',
                        i = e.fn.datepicker,
                        s = i.Constructor;
                    i.Timepicker = function(t, e) { this.d = t, this.opts = e, this.init() }, i.Timepicker.prototype = {
                        init: function() {
                            var t = "input";
                            this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (t = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(t, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this))
                        },
                        _setTime: function(t) {
                            var e = s.getParsedDate(t);
                            this._handleDate(t), this.hours = e.hours < this.minHours ? this.minHours : e.hours, this.minutes = e.minutes < this.minMinutes ? this.minMinutes : e.minutes
                        },
                        _setMinTimeFromDate: function(t) { this.minHours = t.getHours(), this.minMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > t.getHours() && (this.minMinutes = this.opts.minMinutes) },
                        _setMaxTimeFromDate: function(t) {
                            this.maxHours = t.getHours(), this.maxMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < t.getHours() && (this.maxMinutes = this.opts.maxMinutes)
                        },
                        _setDefaultMinMaxTime: function() {
                            var t = 23,
                                e = 59,
                                i = this.opts;
                            this.minHours = i.minHours < 0 || i.minHours > t ? 0 : i.minHours, this.minMinutes = i.minMinutes < 0 || i.minMinutes > e ? 0 : i.minMinutes, this.maxHours = i.maxHours < 0 || i.maxHours > t ? t : i.maxHours, this.maxMinutes = i.maxMinutes < 0 || i.maxMinutes > e ? e : i.maxMinutes
                        },
                        _validateHoursMinutes: function(t) { this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes) },
                        _buildHTML: function() {
                            var i = s.getLeadingZeroNum,
                                a = { hourMin: this.minHours, hourMax: i(this.maxHours), hourStep: this.opts.hoursStep, hourValue: this.hours, hourVisible: i(this.displayHours), minMin: this.minMinutes, minMax: i(this.maxMinutes), minStep: this.opts.minutesStep, minValue: i(this.minutes) },
                                n = s.template(t, a);
                            this.$timepicker = e(n).appendTo(this.d.$datepicker), this.$ranges = e('[type="range"]', this.$timepicker), this.$hours = e('[name="hours"]', this.$timepicker), this.$minutes = e('[name="minutes"]', this.$timepicker), this.$hoursText = e(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = e(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"))
                        },
                        _updateCurrentTime: function() {
                            var t = s.getLeadingZeroNum(this.displayHours),
                                e = s.getLeadingZeroNum(this.minutes);
                            this.$hoursText.html(t), this.$minutesText.html(e), this.d.ampm && this.$ampm.html(this.dayPeriod)
                        },
                        _updateRanges: function() { this.$hours.attr({ min: this.minHours, max: this.maxHours }).val(this.hours), this.$minutes.attr({ min: this.minMinutes, max: this.maxMinutes }).val(this.minutes) },
                        _handleDate: function(t) { this._setDefaultMinMaxTime(), t && (s.isSame(t, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : s.isSame(t, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(t) },
                        update: function() { this._updateRanges(), this._updateCurrentTime() },
                        _getValidHoursFromDate: function(t, e) {
                            var i = t,
                                a = t;
                            t instanceof Date && (i = s.getParsedDate(t), a = i.hours);
                            var n = e || this.d.ampm,
                                h = "am";
                            if (n) switch (!0) {
                                case 0 == a:
                                    a = 12;
                                    break;
                                case 12 == a:
                                    h = "pm";
                                    break;
                                case a > 11:
                                    a -= 12, h = "pm"
                            }
                            return { hours: a, dayPeriod: h }
                        },
                        set hours(t) {
                            this._hours = t;
                            var e = this._getValidHoursFromDate(t);
                            this.displayHours = e.hours, this.dayPeriod = e.dayPeriod
                        },
                        get hours() { return this._hours },
                        _onChangeRange: function(t) {
                            var i = e(t.target),
                                s = i.attr("name");
                            this.d.timepickerIsActive = !0, this[s] = i.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update()
                        },
                        _onSelectDate: function(t, e) { this._handleDate(e), this.update() },
                        _onMouseEnterRange: function(t) {
                            var i = e(t.target).attr("name");
                            e(".datepicker--time-current-" + i, this.$timepicker).addClass("-focus-")
                        },
                        _onMouseOutRange: function(t) {
                            var i = e(t.target).attr("name");
                            this.d.inFocus || e(".datepicker--time-current-" + i, this.$timepicker).removeClass("-focus-")
                        },
                        _onMouseUpRange: function(t) { this.d.timepickerIsActive = !1 }
                    }
                }()
            }(window, jQuery);

        }.call(this, __webpack_require__(0)))

        /***/
    }),

    ,

    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.d(__webpack_exports__, "a", function() { return Pager; });
        class Pager {
            constructor(props = {}) {

                this.items = props.items
                this.pagerPrev = document.createElement('a')
                this.pagerNext = document.createElement('a')
                this.pagerPrev.classList.add('pager__item', 'pager__item_prev', 'pager__item_hiden')
                this.pagerNext.classList.add('pager__item', 'pager__item_next')
                this.pagerPrev.innerHTML = '<span>arrow_backforward</span>'
                this.pagerNext.innerHTML = '<span>arrow_forward</span>'
                this.pagerVisible = []
                this.itemsOnPage = props.itemsOnPage
                this.element = document.querySelector(props.element)
                this.child = document.createDocumentFragment()

                this.child.appendChild(this.pagerPrev)


                for (let i = 0; i < this.itemsOnPage; i++) {

                    this.pagerVisible[i] = document.createElement('a')
                    this.pagerVisible[i].classList.add('pager__item')
                    if (i >= this.items) {
                        this.pagerVisible[i].classList.add('pager__item_empty')
                    } else {
                        this.pagerVisible[i].innerText = i + 1
                    }

                    this.child.appendChild(this.pagerVisible[i])
                }


                this.pagerVisible[0].classList.add('pager__item_active')

                this.pagerVisible[0].classList.add('pager__item_activ')

                if (this.items > this.itemsOnPage) {
                    this.pagerVisible[this.itemsOnPage - 2].classList.add('pager__item_free')
                    this.pagerVisible[this.itemsOnPage - 2].innerText = ''
                    this.pagerVisible[this.itemsOnPage - 1].innerText = this.items
                }

                if (this.items > 1) {
                    this.child.appendChild(this.pagerNext)
                }

                this.element.appendChild(this.child)
            }

        }


        /***/
    }),

    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        (function($) {
            __webpack_require__.d(__webpack_exports__, "a", function() { return RangeSlider; });

            var ion_rangeslider_js_ion_rangeSlider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

            var ion_rangeslider_js_ion_rangeSlider_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(ion_rangeslider_js_ion_rangeSlider_js__WEBPACK_IMPORTED_MODULE_0__);



            class RangeSlider {
                constructor(props = {}, element = '.range-slider') {
                    this.props = props
                    this.element = element
                    this.sliderElement = document.querySelector(element + ' .range-slider__input')

                    function writeValue(data) {
                        function spaceThousend(value) {
                            let valueSpace = '';
                            for (let i = 0; i < value.length; i++) {
                                if ((value.length - i) % 3 === 0) {
                                    valueSpace += ' '
                                }
                                valueSpace += value[i]
                            }
                            return valueSpace
                        }

                        document.querySelector(element + ' .range-slider__value').innerHTML =
                            spaceThousend(data.from.toString()) + '₽ - ' + spaceThousend(data.to.toString()) + '₽'
                    }

                    $(this.sliderElement).ionRangeSlider({
                        type: "double",
                        min: 0,
                        max: 15500,
                        from: props.from || 5000,
                        to: props.to || 10000,
                        grid: false,
                        step: 100,
                        hideFromTo: 'true',
                        hideMinMax: 'true',
                        onChange: function(data) {
                            writeValue(data)
                        },
                        onStart: function(data) {
                            writeValue(data)
                        }
                    })

                }

                update(props = {}) {
                    const range = $(this.sliderElement).data("ionRangeSlider")

                    props.from = props.from || range.options.min
                    props.to = props.to || range.options.max
                    range.update({
                        from: props.from,
                        to: props.to
                    })
                }

                getValue() {
                    const range = $(this.sliderElement).data("ionRangeSlider");
                    return {
                        from: range.options.from,
                        to: range.options.to
                    }
                }
            }
        }.call(this, __webpack_require__(0)))

    }), , ,
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/840.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/840.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/840.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/840.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/888.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/888.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/888.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/888.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        (function(jQuery) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;
            (function(factory) {
                if (!jQuery && "function" === "function" && __webpack_require__(20)) {
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(jQuery) {
                            return factory(jQuery, document, window, navigator);
                        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if (!jQuery && typeof exports === "object") {
                    factory(__webpack_require__(0), document, window, navigator);
                } else {
                    factory(jQuery, document, window, navigator);
                }
            }(function($, document, window, navigator, undefined) {
                "use strict";




                var plugin_count = 0;


                var is_old_ie = (function() {
                    var n = navigator.userAgent,
                        r = /msie\s\d+/i,
                        v;
                    if (n.search(r) > 0) {
                        v = r.exec(n).toString();
                        v = v.split(" ")[1];
                        if (v < 9) {
                            $("html").addClass("lt-ie9");
                            return true;
                        }
                    }
                    return false;
                }());
                if (!Function.prototype.bind) {
                    Function.prototype.bind = function bind(that) {

                        var target = this;
                        var slice = [].slice;

                        if (typeof target != "function") {
                            throw new TypeError();
                        }

                        var args = slice.call(arguments, 1),
                            bound = function() {

                                if (this instanceof bound) {

                                    var F = function() {};
                                    F.prototype = target.prototype;
                                    var self = new F();

                                    var result = target.apply(
                                        self,
                                        args.concat(slice.call(arguments))
                                    );
                                    if (Object(result) === result) {
                                        return result;
                                    }
                                    return self;

                                } else {

                                    return target.apply(
                                        that,
                                        args.concat(slice.call(arguments))
                                    );

                                }

                            };

                        return bound;
                    };
                }
                if (!Array.prototype.indexOf) {
                    Array.prototype.indexOf = function(searchElement, fromIndex) {
                        var k;
                        if (this == null) {
                            throw new TypeError('"this" is null or not defined');
                        }
                        var O = Object(this);
                        var len = O.length >>> 0;
                        if (len === 0) {
                            return -1;
                        }
                        var n = +fromIndex || 0;
                        if (Math.abs(n) === Infinity) {
                            n = 0;
                        }
                        if (n >= len) {
                            return -1;
                        }
                        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
                        while (k < len) {
                            if (k in O && O[k] === searchElement) {
                                return k;
                            }
                            k++;
                        }
                        return -1;
                    };
                }






                var base_html =
                    '<span class="irs">' +
                    '<span class="irs-line" tabindex="0"></span>' +
                    '<span class="irs-min">0</span><span class="irs-max">1</span>' +
                    '<span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span>' +
                    '</span>' +
                    '<span class="irs-grid"></span>';

                var single_html =
                    '<span class="irs-bar irs-bar--single"></span>' +
                    '<span class="irs-shadow shadow-single"></span>' +
                    '<span class="irs-handle single"><i></i><i></i><i></i></span>';

                var double_html =
                    '<span class="irs-bar"></span>' +
                    '<span class="irs-shadow shadow-from"></span>' +
                    '<span class="irs-shadow shadow-to"></span>' +
                    '<span class="irs-handle from"><i></i><i></i><i></i></span>' +
                    '<span class="irs-handle to"><i></i><i></i><i></i></span>';

                var disable_html =
                    '<span class="irs-disable-mask"></span>';






                /**
                 * Main plugin constructor
                 *
                 * @param input {Object} link to base input element
                 * @param options {Object} slider config
                 * @param plugin_count {Number}
                 * @constructor
                 */
                var IonRangeSlider = function(input, options, plugin_count) {
                    this.VERSION = "2.3.0";
                    this.input = input;
                    this.plugin_count = plugin_count;
                    this.current_plugin = 0;
                    this.calc_count = 0;
                    this.update_tm = 0;
                    this.old_from = 0;
                    this.old_to = 0;
                    this.old_min_interval = null;
                    this.raf_id = null;
                    this.dragging = false;
                    this.force_redraw = false;
                    this.no_diapason = false;
                    this.has_tab_index = true;
                    this.is_key = false;
                    this.is_update = false;
                    this.is_start = true;
                    this.is_finish = false;
                    this.is_active = false;
                    this.is_resize = false;
                    this.is_click = false;

                    options = options || {};


                    this.$cache = {
                        win: $(window),
                        body: $(document.body),
                        input: $(input),
                        cont: null,
                        rs: null,
                        min: null,
                        max: null,
                        from: null,
                        to: null,
                        single: null,
                        bar: null,
                        line: null,
                        s_single: null,
                        s_from: null,
                        s_to: null,
                        shad_single: null,
                        shad_from: null,
                        shad_to: null,
                        edge: null,
                        grid: null,
                        grid_labels: []
                    };


                    this.coords = {

                        x_gap: 0,
                        x_pointer: 0,


                        w_rs: 0,
                        w_rs_old: 0,
                        w_handle: 0,


                        p_gap: 0,
                        p_gap_left: 0,
                        p_gap_right: 0,
                        p_step: 0,
                        p_pointer: 0,
                        p_handle: 0,
                        p_single_fake: 0,
                        p_single_real: 0,
                        p_from_fake: 0,
                        p_from_real: 0,
                        p_to_fake: 0,
                        p_to_real: 0,
                        p_bar_x: 0,
                        p_bar_w: 0,


                        grid_gap: 0,
                        big_num: 0,
                        big: [],
                        big_w: [],
                        big_p: [],
                        big_x: []
                    };


                    this.labels = {

                        w_min: 0,
                        w_max: 0,
                        w_from: 0,
                        w_to: 0,
                        w_single: 0,


                        p_min: 0,
                        p_max: 0,
                        p_from_fake: 0,
                        p_from_left: 0,
                        p_to_fake: 0,
                        p_to_left: 0,
                        p_single_fake: 0,
                        p_single_left: 0
                    };



                    /**
                     * get and validate config
                     */
                    var $inp = this.$cache.input,
                        val = $inp.prop("value"),
                        config, config_from_data, prop;


                    config = {
                        skin: "flat",
                        type: "single",

                        min: 10,
                        max: 100,
                        from: null,
                        to: null,
                        step: 1,

                        min_interval: 0,
                        max_interval: 0,
                        drag_interval: false,

                        values: [],
                        p_values: [],

                        from_fixed: false,
                        from_min: null,
                        from_max: null,
                        from_shadow: false,

                        to_fixed: false,
                        to_min: null,
                        to_max: null,
                        to_shadow: false,

                        prettify_enabled: true,
                        prettify_separator: " ",
                        prettify: null,

                        force_edges: false,

                        keyboard: true,

                        grid: false,
                        grid_margin: true,
                        grid_num: 4,
                        grid_snap: false,

                        hide_min_max: false,
                        hide_from_to: false,

                        prefix: "",
                        postfix: "",
                        max_postfix: "",
                        decorate_both: true,
                        values_separator: " â€” ",

                        input_values_separator: ";",

                        disable: false,
                        block: false,

                        extra_classes: "",

                        scope: null,
                        onStart: null,
                        onChange: null,
                        onFinish: null,
                        onUpdate: null
                    };



                    if ($inp[0].nodeName !== "INPUT") {
                        console && console.warn && console.warn("Base element should be <input>!", $inp[0]);
                    }



                    config_from_data = {
                        skin: $inp.data("skin"),
                        type: $inp.data("type"),

                        min: $inp.data("min"),
                        max: $inp.data("max"),
                        from: $inp.data("from"),
                        to: $inp.data("to"),
                        step: $inp.data("step"),

                        min_interval: $inp.data("minInterval"),
                        max_interval: $inp.data("maxInterval"),
                        drag_interval: $inp.data("dragInterval"),

                        values: $inp.data("values"),

                        from_fixed: $inp.data("fromFixed"),
                        from_min: $inp.data("fromMin"),
                        from_max: $inp.data("fromMax"),
                        from_shadow: $inp.data("fromShadow"),

                        to_fixed: $inp.data("toFixed"),
                        to_min: $inp.data("toMin"),
                        to_max: $inp.data("toMax"),
                        to_shadow: $inp.data("toShadow"),

                        prettify_enabled: $inp.data("prettifyEnabled"),
                        prettify_separator: $inp.data("prettifySeparator"),

                        force_edges: $inp.data("forceEdges"),

                        keyboard: $inp.data("keyboard"),

                        grid: $inp.data("grid"),
                        grid_margin: $inp.data("gridMargin"),
                        grid_num: $inp.data("gridNum"),
                        grid_snap: $inp.data("gridSnap"),

                        hide_min_max: $inp.data("hideMinMax"),
                        hide_from_to: $inp.data("hideFromTo"),

                        prefix: $inp.data("prefix"),
                        postfix: $inp.data("postfix"),
                        max_postfix: $inp.data("maxPostfix"),
                        decorate_both: $inp.data("decorateBoth"),
                        values_separator: $inp.data("valuesSeparator"),

                        input_values_separator: $inp.data("inputValuesSeparator"),

                        disable: $inp.data("disable"),
                        block: $inp.data("block"),

                        extra_classes: $inp.data("extraClasses"),
                    };
                    config_from_data.values = config_from_data.values && config_from_data.values.split(",");

                    for (prop in config_from_data) {
                        if (config_from_data.hasOwnProperty(prop)) {
                            if (config_from_data[prop] === undefined || config_from_data[prop] === "") {
                                delete config_from_data[prop];
                            }
                        }
                    }



                    if (val !== undefined && val !== "") {
                        val = val.split(config_from_data.input_values_separator || options.input_values_separator || ";");

                        if (val[0] && val[0] == +val[0]) {
                            val[0] = +val[0];
                        }
                        if (val[1] && val[1] == +val[1]) {
                            val[1] = +val[1];
                        }

                        if (options && options.values && options.values.length) {
                            config.from = val[0] && options.values.indexOf(val[0]);
                            config.to = val[1] && options.values.indexOf(val[1]);
                        } else {
                            config.from = val[0] && +val[0];
                            config.to = val[1] && +val[1];
                        }
                    }




                    $.extend(config, options);



                    $.extend(config, config_from_data);
                    this.options = config;




                    this.update_check = {};
                    this.validate();




                    this.result = {
                        input: this.$cache.input,
                        slider: null,

                        min: this.options.min,
                        max: this.options.max,

                        from: this.options.from,
                        from_percent: 0,
                        from_value: null,

                        to: this.options.to,
                        to_percent: 0,
                        to_value: null
                    };



                    this.init();
                };

                IonRangeSlider.prototype = {

                    /**
                     * Starts or updates the plugin instance
                     *
                     * @param [is_update] {boolean}
                     */
                    init: function(is_update) {
                        this.no_diapason = false;
                        this.coords.p_step = this.convertToPercent(this.options.step, true);

                        this.target = "base";

                        this.toggleInput();
                        this.append();
                        this.setMinMax();

                        if (is_update) {
                            this.force_redraw = true;
                            this.calc(true);


                            this.callOnUpdate();
                        } else {
                            this.force_redraw = true;
                            this.calc(true);


                            this.callOnStart();
                        }

                        this.updateScene();
                    },

                    /**
                     * Appends slider template to a DOM
                     */
                    append: function() {
                        var container_html = '<span class="irs irs--' + this.options.skin + ' js-irs-' + this.plugin_count + ' ' + this.options.extra_classes + '"></span>';
                        this.$cache.input.before(container_html);
                        this.$cache.input.prop("readonly", true);
                        this.$cache.cont = this.$cache.input.prev();
                        this.result.slider = this.$cache.cont;

                        this.$cache.cont.html(base_html);
                        this.$cache.rs = this.$cache.cont.find(".irs");
                        this.$cache.min = this.$cache.cont.find(".irs-min");
                        this.$cache.max = this.$cache.cont.find(".irs-max");
                        this.$cache.from = this.$cache.cont.find(".irs-from");
                        this.$cache.to = this.$cache.cont.find(".irs-to");
                        this.$cache.single = this.$cache.cont.find(".irs-single");
                        this.$cache.line = this.$cache.cont.find(".irs-line");
                        this.$cache.grid = this.$cache.cont.find(".irs-grid");

                        if (this.options.type === "single") {
                            this.$cache.cont.append(single_html);
                            this.$cache.bar = this.$cache.cont.find(".irs-bar");
                            this.$cache.edge = this.$cache.cont.find(".irs-bar-edge");
                            this.$cache.s_single = this.$cache.cont.find(".single");
                            this.$cache.from[0].style.visibility = "hidden";
                            this.$cache.to[0].style.visibility = "hidden";
                            this.$cache.shad_single = this.$cache.cont.find(".shadow-single");
                        } else {
                            this.$cache.cont.append(double_html);
                            this.$cache.bar = this.$cache.cont.find(".irs-bar");
                            this.$cache.s_from = this.$cache.cont.find(".from");
                            this.$cache.s_to = this.$cache.cont.find(".to");
                            this.$cache.shad_from = this.$cache.cont.find(".shadow-from");
                            this.$cache.shad_to = this.$cache.cont.find(".shadow-to");

                            this.setTopHandler();
                        }

                        if (this.options.hide_from_to) {
                            this.$cache.from[0].style.display = "none";
                            this.$cache.to[0].style.display = "none";
                            this.$cache.single[0].style.display = "none";
                        }

                        this.appendGrid();

                        if (this.options.disable) {
                            this.appendDisableMask();
                            this.$cache.input[0].disabled = true;
                        } else {
                            this.$cache.input[0].disabled = false;
                            this.removeDisableMask();
                            this.bindEvents();
                        }


                        if (!this.options.disable) {
                            if (this.options.block) {
                                this.appendDisableMask();
                            } else {
                                this.removeDisableMask();
                            }
                        }

                        if (this.options.drag_interval) {
                            this.$cache.bar[0].style.cursor = "ew-resize";
                        }
                    },

                    /**
                     * Determine which handler has a priority
                     * works only for double slider type
                     */
                    setTopHandler: function() {
                        var min = this.options.min,
                            max = this.options.max,
                            from = this.options.from,
                            to = this.options.to;

                        if (from > min && to === max) {
                            this.$cache.s_from.addClass("type_last");
                        } else if (to < max) {
                            this.$cache.s_to.addClass("type_last");
                        }
                    },

                    /**
                     * Determine which handles was clicked last
                     * and which handler should have hover effect
                     *
                     * @param target {String}
                     */
                    changeLevel: function(target) {
                        switch (target) {
                            case "single":
                                this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
                                this.$cache.s_single.addClass("state_hover");
                                break;
                            case "from":
                                this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
                                this.$cache.s_from.addClass("state_hover");
                                this.$cache.s_from.addClass("type_last");
                                this.$cache.s_to.removeClass("type_last");
                                break;
                            case "to":
                                this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake);
                                this.$cache.s_to.addClass("state_hover");
                                this.$cache.s_to.addClass("type_last");
                                this.$cache.s_from.removeClass("type_last");
                                break;
                            case "both":
                                this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
                                this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer);
                                this.$cache.s_to.removeClass("type_last");
                                this.$cache.s_from.removeClass("type_last");
                                break;
                        }
                    },

                    /**
                     * Then slider is disabled
                     * appends extra layer with opacity
                     */
                    appendDisableMask: function() {
                        this.$cache.cont.append(disable_html);
                        this.$cache.cont.addClass("irs-disabled");
                    },

                    /**
                     * Then slider is not disabled
                     * remove disable mask
                     */
                    removeDisableMask: function() {
                        this.$cache.cont.remove(".irs-disable-mask");
                        this.$cache.cont.removeClass("irs-disabled");
                    },

                    /**
                     * Remove slider instance
                     * and unbind all events
                     */
                    remove: function() {
                        this.$cache.cont.remove();
                        this.$cache.cont = null;

                        this.$cache.line.off("keydown.irs_" + this.plugin_count);

                        this.$cache.body.off("touchmove.irs_" + this.plugin_count);
                        this.$cache.body.off("mousemove.irs_" + this.plugin_count);

                        this.$cache.win.off("touchend.irs_" + this.plugin_count);
                        this.$cache.win.off("mouseup.irs_" + this.plugin_count);

                        if (is_old_ie) {
                            this.$cache.body.off("mouseup.irs_" + this.plugin_count);
                            this.$cache.body.off("mouseleave.irs_" + this.plugin_count);
                        }

                        this.$cache.grid_labels = [];
                        this.coords.big = [];
                        this.coords.big_w = [];
                        this.coords.big_p = [];
                        this.coords.big_x = [];

                        cancelAnimationFrame(this.raf_id);
                    },

                    /**
                     * bind all slider events
                     */
                    bindEvents: function() {
                        if (this.no_diapason) {
                            return;
                        }

                        this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
                        this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));

                        this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
                        this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));

                        this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                        this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                        this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this));

                        if (this.options.drag_interval && this.options.type === "double") {
                            this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
                            this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
                        } else {
                            this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                            this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                        }

                        if (this.options.type === "single") {
                            this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                            this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                            this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                            this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                            this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                            this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                            this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                        } else {
                            this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null));
                            this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null));

                            this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                            this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                            this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                            this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                            this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                            this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                            this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                            this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                            this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                            this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                            this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                            this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                        }

                        if (this.options.keyboard) {
                            this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
                        }

                        if (is_old_ie) {
                            this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
                            this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this));
                        }
                    },

                    /**
                     * Focus with tabIndex
                     *
                     * @param e {Object} event object
                     */
                    pointerFocus: function(e) {
                        if (!this.target) {
                            var x;
                            var $handle;

                            if (this.options.type === "single") {
                                $handle = this.$cache.single;
                            } else {
                                $handle = this.$cache.from;
                            }

                            x = $handle.offset().left;
                            x += ($handle.width() / 2) - 1;

                            this.pointerClick("single", { preventDefault: function() {}, pageX: x });
                        }
                    },

                    /**
                     * Mousemove or touchmove
                     * only for handlers
                     *
                     * @param e {Object} event object
                     */
                    pointerMove: function(e) {
                        if (!this.dragging) {
                            return;
                        }

                        var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
                        this.coords.x_pointer = x - this.coords.x_gap;

                        this.calc();
                    },

                    /**
                     * Mouseup or touchend
                     * only for handlers
                     *
                     * @param e {Object} event object
                     */
                    pointerUp: function(e) {
                        if (this.current_plugin !== this.plugin_count) {
                            return;
                        }

                        if (this.is_active) {
                            this.is_active = false;
                        } else {
                            return;
                        }

                        this.$cache.cont.find(".state_hover").removeClass("state_hover");

                        this.force_redraw = true;

                        if (is_old_ie) {
                            $("*").prop("unselectable", false);
                        }

                        this.updateScene();
                        this.restoreOriginalMinInterval();


                        if ($.contains(this.$cache.cont[0], e.target) || this.dragging) {
                            this.callOnFinish();
                        }

                        this.dragging = false;
                    },

                    /**
                     * Mousedown or touchstart
                     * only for handlers
                     *
                     * @param target {String|null}
                     * @param e {Object} event object
                     */
                    pointerDown: function(target, e) {
                        e.preventDefault();
                        var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
                        if (e.button === 2) {
                            return;
                        }

                        if (target === "both") {
                            this.setTempMinInterval();
                        }

                        if (!target) {
                            target = this.target || "from";
                        }

                        this.current_plugin = this.plugin_count;
                        this.target = target;

                        this.is_active = true;
                        this.dragging = true;

                        this.coords.x_gap = this.$cache.rs.offset().left;
                        this.coords.x_pointer = x - this.coords.x_gap;

                        this.calcPointerPercent();
                        this.changeLevel(target);

                        if (is_old_ie) {
                            $("*").prop("unselectable", true);
                        }

                        this.$cache.line.trigger("focus");

                        this.updateScene();
                    },

                    /**
                     * Mousedown or touchstart
                     * for other slider elements, like diapason line
                     *
                     * @param target {String}
                     * @param e {Object} event object
                     */
                    pointerClick: function(target, e) {
                        e.preventDefault();
                        var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
                        if (e.button === 2) {
                            return;
                        }

                        this.current_plugin = this.plugin_count;
                        this.target = target;

                        this.is_click = true;
                        this.coords.x_gap = this.$cache.rs.offset().left;
                        this.coords.x_pointer = +(x - this.coords.x_gap).toFixed();

                        this.force_redraw = true;
                        this.calc();

                        this.$cache.line.trigger("focus");
                    },

                    /**
                     * Keyborard controls for focused slider
                     *
                     * @param target {String}
                     * @param e {Object} event object
                     * @returns {boolean|undefined}
                     */
                    key: function(target, e) {
                        if (this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                            return;
                        }

                        switch (e.which) {
                            case 83:
                            case 65:
                            case 40:
                            case 37:
                                e.preventDefault();
                                this.moveByKey(false);
                                break;

                            case 87:
                            case 68:
                            case 38:
                            case 39:
                                e.preventDefault();
                                this.moveByKey(true);
                                break;
                        }

                        return true;
                    },

                    /**
                     * Move by key
                     *
                     * @param right {boolean} direction to move
                     */
                    moveByKey: function(right) {
                        var p = this.coords.p_pointer;
                        var p_step = (this.options.max - this.options.min) / 100;
                        p_step = this.options.step / p_step;

                        if (right) {
                            p += p_step;
                        } else {
                            p -= p_step;
                        }

                        this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * p);
                        this.is_key = true;
                        this.calc();
                    },

                    /**
                     * Set visibility and content
                     * of Min and Max labels
                     */
                    setMinMax: function() {
                        if (!this.options) {
                            return;
                        }

                        if (this.options.hide_min_max) {
                            this.$cache.min[0].style.display = "none";
                            this.$cache.max[0].style.display = "none";
                            return;
                        }

                        if (this.options.values.length) {
                            this.$cache.min.html(this.decorate(this.options.p_values[this.options.min]));
                            this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
                        } else {
                            var min_pretty = this._prettify(this.options.min);
                            var max_pretty = this._prettify(this.options.max);

                            this.result.min_pretty = min_pretty;
                            this.result.max_pretty = max_pretty;

                            this.$cache.min.html(this.decorate(min_pretty, this.options.min));
                            this.$cache.max.html(this.decorate(max_pretty, this.options.max));
                        }

                        this.labels.w_min = this.$cache.min.outerWidth(false);
                        this.labels.w_max = this.$cache.max.outerWidth(false);
                    },

                    /**
                     * Then dragging interval, prevent interval collapsing
                     * using min_interval option
                     */
                    setTempMinInterval: function() {
                        var interval = this.result.to - this.result.from;

                        if (this.old_min_interval === null) {
                            this.old_min_interval = this.options.min_interval;
                        }

                        this.options.min_interval = interval;
                    },

                    /**
                     * Restore min_interval option to original
                     */
                    restoreOriginalMinInterval: function() {
                        if (this.old_min_interval !== null) {
                            this.options.min_interval = this.old_min_interval;
                            this.old_min_interval = null;
                        }
                    },






                    /**
                     * All calculations and measures start here
                     *
                     * @param update {boolean=}
                     */
                    calc: function(update) {
                        if (!this.options) {
                            return;
                        }

                        this.calc_count++;

                        if (this.calc_count === 10 || update) {
                            this.calc_count = 0;
                            this.coords.w_rs = this.$cache.rs.outerWidth(false);

                            this.calcHandlePercent();
                        }

                        if (!this.coords.w_rs) {
                            return;
                        }

                        this.calcPointerPercent();
                        var handle_x = this.getHandleX();


                        if (this.target === "both") {
                            this.coords.p_gap = 0;
                            handle_x = this.getHandleX();
                        }

                        if (this.target === "click") {
                            this.coords.p_gap = this.coords.p_handle / 2;
                            handle_x = this.getHandleX();

                            if (this.options.drag_interval) {
                                this.target = "both_one";
                            } else {
                                this.target = this.chooseHandle(handle_x);
                            }
                        }

                        switch (this.target) {
                            case "base":
                                var w = (this.options.max - this.options.min) / 100,
                                    f = (this.result.from - this.options.min) / w,
                                    t = (this.result.to - this.options.min) / w;

                                this.coords.p_single_real = this.toFixed(f);
                                this.coords.p_from_real = this.toFixed(f);
                                this.coords.p_to_real = this.toFixed(t);

                                this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                                this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                                this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);

                                this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                                this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                                this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

                                this.target = null;

                                break;

                            case "single":
                                if (this.options.from_fixed) {
                                    break;
                                }

                                this.coords.p_single_real = this.convertToRealPercent(handle_x);
                                this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real);
                                this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);

                                this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);

                                break;

                            case "from":
                                if (this.options.from_fixed) {
                                    break;
                                }

                                this.coords.p_from_real = this.convertToRealPercent(handle_x);
                                this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
                                if (this.coords.p_from_real > this.coords.p_to_real) {
                                    this.coords.p_from_real = this.coords.p_to_real;
                                }
                                this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                                this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                                this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");

                                this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

                                break;

                            case "to":
                                if (this.options.to_fixed) {
                                    break;
                                }

                                this.coords.p_to_real = this.convertToRealPercent(handle_x);
                                this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
                                if (this.coords.p_to_real < this.coords.p_from_real) {
                                    this.coords.p_to_real = this.coords.p_from_real;
                                }
                                this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                                this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                                this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");

                                this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

                                break;

                            case "both":
                                if (this.options.from_fixed || this.options.to_fixed) {
                                    break;
                                }

                                handle_x = this.toFixed(handle_x + (this.coords.p_handle * 0.001));

                                this.coords.p_from_real = this.convertToRealPercent(handle_x) - this.coords.p_gap_left;
                                this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
                                this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                                this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                                this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

                                this.coords.p_to_real = this.convertToRealPercent(handle_x) + this.coords.p_gap_right;
                                this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
                                this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                                this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                                this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

                                break;

                            case "both_one":
                                if (this.options.from_fixed || this.options.to_fixed) {
                                    break;
                                }

                                var real_x = this.convertToRealPercent(handle_x),
                                    from = this.result.from_percent,
                                    to = this.result.to_percent,
                                    full = to - from,
                                    half = full / 2,
                                    new_from = real_x - half,
                                    new_to = real_x + half;

                                if (new_from < 0) {
                                    new_from = 0;
                                    new_to = new_from + full;
                                }

                                if (new_to > 100) {
                                    new_to = 100;
                                    new_from = new_to - full;
                                }

                                this.coords.p_from_real = this.calcWithStep(new_from);
                                this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                                this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

                                this.coords.p_to_real = this.calcWithStep(new_to);
                                this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                                this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

                                break;
                        }

                        if (this.options.type === "single") {
                            this.coords.p_bar_x = (this.coords.p_handle / 2);
                            this.coords.p_bar_w = this.coords.p_single_fake;

                            this.result.from_percent = this.coords.p_single_real;
                            this.result.from = this.convertToValue(this.coords.p_single_real);
                            this.result.from_pretty = this._prettify(this.result.from);

                            if (this.options.values.length) {
                                this.result.from_value = this.options.values[this.result.from];
                            }
                        } else {
                            this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + (this.coords.p_handle / 2));
                            this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake);

                            this.result.from_percent = this.coords.p_from_real;
                            this.result.from = this.convertToValue(this.coords.p_from_real);
                            this.result.from_pretty = this._prettify(this.result.from);
                            this.result.to_percent = this.coords.p_to_real;
                            this.result.to = this.convertToValue(this.coords.p_to_real);
                            this.result.to_pretty = this._prettify(this.result.to);

                            if (this.options.values.length) {
                                this.result.from_value = this.options.values[this.result.from];
                                this.result.to_value = this.options.values[this.result.to];
                            }
                        }

                        this.calcMinMax();
                        this.calcLabels();
                    },


                    /**
                     * calculates pointer X in percent
                     */
                    calcPointerPercent: function() {
                        if (!this.coords.w_rs) {
                            this.coords.p_pointer = 0;
                            return;
                        }

                        if (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)) {
                            this.coords.x_pointer = 0;
                        } else if (this.coords.x_pointer > this.coords.w_rs) {
                            this.coords.x_pointer = this.coords.w_rs;
                        }

                        this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100);
                    },

                    convertToRealPercent: function(fake) {
                        var full = 100 - this.coords.p_handle;
                        return fake / full * 100;
                    },

                    convertToFakePercent: function(real) {
                        var full = 100 - this.coords.p_handle;
                        return real / 100 * full;
                    },

                    getHandleX: function() {
                        var max = 100 - this.coords.p_handle,
                            x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);

                        if (x < 0) {
                            x = 0;
                        } else if (x > max) {
                            x = max;
                        }

                        return x;
                    },

                    calcHandlePercent: function() {
                        if (this.options.type === "single") {
                            this.coords.w_handle = this.$cache.s_single.outerWidth(false);
                        } else {
                            this.coords.w_handle = this.$cache.s_from.outerWidth(false);
                        }

                        this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
                    },

                    /**
                     * Find closest handle to pointer click
                     *
                     * @param real_x {Number}
                     * @returns {String}
                     */
                    chooseHandle: function(real_x) {
                        if (this.options.type === "single") {
                            return "single";
                        } else {
                            var m_point = this.coords.p_from_real + ((this.coords.p_to_real - this.coords.p_from_real) / 2);
                            if (real_x >= m_point) {
                                return this.options.to_fixed ? "from" : "to";
                            } else {
                                return this.options.from_fixed ? "to" : "from";
                            }
                        }
                    },

                    /**
                     * Measure Min and Max labels width in percent
                     */
                    calcMinMax: function() {
                        if (!this.coords.w_rs) {
                            return;
                        }

                        this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100;
                        this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100;
                    },

                    /**
                     * Measure labels width and X in percent
                     */
                    calcLabels: function() {
                        if (!this.coords.w_rs || this.options.hide_from_to) {
                            return;
                        }

                        if (this.options.type === "single") {

                            this.labels.w_single = this.$cache.single.outerWidth(false);
                            this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
                            this.labels.p_single_left = this.coords.p_single_fake + (this.coords.p_handle / 2) - (this.labels.p_single_fake / 2);
                            this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);

                        } else {

                            this.labels.w_from = this.$cache.from.outerWidth(false);
                            this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100;
                            this.labels.p_from_left = this.coords.p_from_fake + (this.coords.p_handle / 2) - (this.labels.p_from_fake / 2);
                            this.labels.p_from_left = this.toFixed(this.labels.p_from_left);
                            this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake);

                            this.labels.w_to = this.$cache.to.outerWidth(false);
                            this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100;
                            this.labels.p_to_left = this.coords.p_to_fake + (this.coords.p_handle / 2) - (this.labels.p_to_fake / 2);
                            this.labels.p_to_left = this.toFixed(this.labels.p_to_left);
                            this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake);

                            this.labels.w_single = this.$cache.single.outerWidth(false);
                            this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
                            this.labels.p_single_left = ((this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2) - (this.labels.p_single_fake / 2);
                            this.labels.p_single_left = this.toFixed(this.labels.p_single_left);
                            this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);

                        }
                    },






                    /**
                     * Main function called in request animation frame
                     * to update everything
                     */
                    updateScene: function() {
                        if (this.raf_id) {
                            cancelAnimationFrame(this.raf_id);
                            this.raf_id = null;
                        }

                        clearTimeout(this.update_tm);
                        this.update_tm = null;

                        if (!this.options) {
                            return;
                        }

                        this.drawHandles();

                        if (this.is_active) {
                            this.raf_id = requestAnimationFrame(this.updateScene.bind(this));
                        } else {
                            this.update_tm = setTimeout(this.updateScene.bind(this), 300);
                        }
                    },

                    /**
                     * Draw handles
                     */
                    drawHandles: function() {
                        this.coords.w_rs = this.$cache.rs.outerWidth(false);

                        if (!this.coords.w_rs) {
                            return;
                        }

                        if (this.coords.w_rs !== this.coords.w_rs_old) {
                            this.target = "base";
                            this.is_resize = true;
                        }

                        if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) {
                            this.setMinMax();
                            this.calc(true);
                            this.drawLabels();
                            if (this.options.grid) {
                                this.calcGridMargin();
                                this.calcGridLabels();
                            }
                            this.force_redraw = true;
                            this.coords.w_rs_old = this.coords.w_rs;
                            this.drawShadow();
                        }

                        if (!this.coords.w_rs) {
                            return;
                        }

                        if (!this.dragging && !this.force_redraw && !this.is_key) {
                            return;
                        }

                        if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {

                            this.drawLabels();

                            this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
                            this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";

                            if (this.options.type === "single") {
                                this.$cache.bar[0].style.left = 0;
                                this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%";

                                this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%";

                                this.$cache.single[0].style.left = this.labels.p_single_left + "%";
                            } else {
                                this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%";
                                this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%";

                                if (this.old_from !== this.result.from || this.force_redraw) {
                                    this.$cache.from[0].style.left = this.labels.p_from_left + "%";
                                }
                                if (this.old_to !== this.result.to || this.force_redraw) {
                                    this.$cache.to[0].style.left = this.labels.p_to_left + "%";
                                }

                                this.$cache.single[0].style.left = this.labels.p_single_left + "%";
                            }

                            this.writeToInput();

                            if ((this.old_from !== this.result.from || this.old_to !== this.result.to) && !this.is_start) {
                                this.$cache.input.trigger("change");
                                this.$cache.input.trigger("input");
                            }

                            this.old_from = this.result.from;
                            this.old_to = this.result.to;


                            if (!this.is_resize && !this.is_update && !this.is_start && !this.is_finish) {
                                this.callOnChange();
                            }
                            if (this.is_key || this.is_click) {
                                this.is_key = false;
                                this.is_click = false;
                                this.callOnFinish();
                            }

                            this.is_update = false;
                            this.is_resize = false;
                            this.is_finish = false;
                        }

                        this.is_start = false;
                        this.is_key = false;
                        this.is_click = false;
                        this.force_redraw = false;
                    },

                    /**
                     * Draw labels
                     * measure labels collisions
                     * collapse close labels
                     */
                    drawLabels: function() {
                        if (!this.options) {
                            return;
                        }

                        var values_num = this.options.values.length;
                        var p_values = this.options.p_values;
                        var text_single;
                        var text_from;
                        var text_to;
                        var from_pretty;
                        var to_pretty;

                        if (this.options.hide_from_to) {
                            return;
                        }

                        if (this.options.type === "single") {

                            if (values_num) {
                                text_single = this.decorate(p_values[this.result.from]);
                                this.$cache.single.html(text_single);
                            } else {
                                from_pretty = this._prettify(this.result.from);

                                text_single = this.decorate(from_pretty, this.result.from);
                                this.$cache.single.html(text_single);
                            }

                            this.calcLabels();

                            if (this.labels.p_single_left < this.labels.p_min + 1) {
                                this.$cache.min[0].style.visibility = "hidden";
                            } else {
                                this.$cache.min[0].style.visibility = "visible";
                            }

                            if (this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1) {
                                this.$cache.max[0].style.visibility = "hidden";
                            } else {
                                this.$cache.max[0].style.visibility = "visible";
                            }

                        } else {

                            if (values_num) {

                                if (this.options.decorate_both) {
                                    text_single = this.decorate(p_values[this.result.from]);
                                    text_single += this.options.values_separator;
                                    text_single += this.decorate(p_values[this.result.to]);
                                } else {
                                    text_single = this.decorate(p_values[this.result.from] + this.options.values_separator + p_values[this.result.to]);
                                }
                                text_from = this.decorate(p_values[this.result.from]);
                                text_to = this.decorate(p_values[this.result.to]);

                                this.$cache.single.html(text_single);
                                this.$cache.from.html(text_from);
                                this.$cache.to.html(text_to);

                            } else {
                                from_pretty = this._prettify(this.result.from);
                                to_pretty = this._prettify(this.result.to);

                                if (this.options.decorate_both) {
                                    text_single = this.decorate(from_pretty, this.result.from);
                                    text_single += this.options.values_separator;
                                    text_single += this.decorate(to_pretty, this.result.to);
                                } else {
                                    text_single = this.decorate(from_pretty + this.options.values_separator + to_pretty, this.result.to);
                                }
                                text_from = this.decorate(from_pretty, this.result.from);
                                text_to = this.decorate(to_pretty, this.result.to);

                                this.$cache.single.html(text_single);
                                this.$cache.from.html(text_from);
                                this.$cache.to.html(text_to);

                            }

                            this.calcLabels();

                            var min = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                                single_left = this.labels.p_single_left + this.labels.p_single_fake,
                                to_left = this.labels.p_to_left + this.labels.p_to_fake,
                                max = Math.max(single_left, to_left);

                            if (this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left) {
                                this.$cache.from[0].style.visibility = "hidden";
                                this.$cache.to[0].style.visibility = "hidden";
                                this.$cache.single[0].style.visibility = "visible";

                                if (this.result.from === this.result.to) {
                                    if (this.target === "from") {
                                        this.$cache.from[0].style.visibility = "visible";
                                    } else if (this.target === "to") {
                                        this.$cache.to[0].style.visibility = "visible";
                                    } else if (!this.target) {
                                        this.$cache.from[0].style.visibility = "visible";
                                    }
                                    this.$cache.single[0].style.visibility = "hidden";
                                    max = to_left;
                                } else {
                                    this.$cache.from[0].style.visibility = "hidden";
                                    this.$cache.to[0].style.visibility = "hidden";
                                    this.$cache.single[0].style.visibility = "visible";
                                    max = Math.max(single_left, to_left);
                                }
                            } else {
                                this.$cache.from[0].style.visibility = "visible";
                                this.$cache.to[0].style.visibility = "visible";
                                this.$cache.single[0].style.visibility = "hidden";
                            }

                            if (min < this.labels.p_min + 1) {
                                this.$cache.min[0].style.visibility = "hidden";
                            } else {
                                this.$cache.min[0].style.visibility = "visible";
                            }

                            if (max > 100 - this.labels.p_max - 1) {
                                this.$cache.max[0].style.visibility = "hidden";
                            } else {
                                this.$cache.max[0].style.visibility = "visible";
                            }

                        }
                    },

                    /**
                     * Draw shadow intervals
                     */
                    drawShadow: function() {
                        var o = this.options,
                            c = this.$cache,

                            is_from_min = typeof o.from_min === "number" && !isNaN(o.from_min),
                            is_from_max = typeof o.from_max === "number" && !isNaN(o.from_max),
                            is_to_min = typeof o.to_min === "number" && !isNaN(o.to_min),
                            is_to_max = typeof o.to_max === "number" && !isNaN(o.to_max),

                            from_min,
                            from_max,
                            to_min,
                            to_max;

                        if (o.type === "single") {
                            if (o.from_shadow && (is_from_min || is_from_max)) {
                                from_min = this.convertToPercent(is_from_min ? o.from_min : o.min);
                                from_max = this.convertToPercent(is_from_max ? o.from_max : o.max) - from_min;
                                from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
                                from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
                                from_min = from_min + (this.coords.p_handle / 2);

                                c.shad_single[0].style.display = "block";
                                c.shad_single[0].style.left = from_min + "%";
                                c.shad_single[0].style.width = from_max + "%";
                            } else {
                                c.shad_single[0].style.display = "none";
                            }
                        } else {
                            if (o.from_shadow && (is_from_min || is_from_max)) {
                                from_min = this.convertToPercent(is_from_min ? o.from_min : o.min);
                                from_max = this.convertToPercent(is_from_max ? o.from_max : o.max) - from_min;
                                from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
                                from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
                                from_min = from_min + (this.coords.p_handle / 2);

                                c.shad_from[0].style.display = "block";
                                c.shad_from[0].style.left = from_min + "%";
                                c.shad_from[0].style.width = from_max + "%";
                            } else {
                                c.shad_from[0].style.display = "none";
                            }

                            if (o.to_shadow && (is_to_min || is_to_max)) {
                                to_min = this.convertToPercent(is_to_min ? o.to_min : o.min);
                                to_max = this.convertToPercent(is_to_max ? o.to_max : o.max) - to_min;
                                to_min = this.toFixed(to_min - (this.coords.p_handle / 100 * to_min));
                                to_max = this.toFixed(to_max - (this.coords.p_handle / 100 * to_max));
                                to_min = to_min + (this.coords.p_handle / 2);

                                c.shad_to[0].style.display = "block";
                                c.shad_to[0].style.left = to_min + "%";
                                c.shad_to[0].style.width = to_max + "%";
                            } else {
                                c.shad_to[0].style.display = "none";
                            }
                        }
                    },



                    /**
                     * Write values to input element
                     */
                    writeToInput: function() {
                        if (this.options.type === "single") {
                            if (this.options.values.length) {
                                this.$cache.input.prop("value", this.result.from_value);
                            } else {
                                this.$cache.input.prop("value", this.result.from);
                            }
                            this.$cache.input.data("from", this.result.from);
                        } else {
                            if (this.options.values.length) {
                                this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value);
                            } else {
                                this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to);
                            }
                            this.$cache.input.data("from", this.result.from);
                            this.$cache.input.data("to", this.result.to);
                        }
                    },






                    callOnStart: function() {
                        this.writeToInput();

                        if (this.options.onStart && typeof this.options.onStart === "function") {
                            if (this.options.scope) {
                                this.options.onStart.call(this.options.scope, this.result);
                            } else {
                                this.options.onStart(this.result);
                            }
                        }
                    },
                    callOnChange: function() {
                        this.writeToInput();

                        if (this.options.onChange && typeof this.options.onChange === "function") {
                            if (this.options.scope) {
                                this.options.onChange.call(this.options.scope, this.result);
                            } else {
                                this.options.onChange(this.result);
                            }
                        }
                    },
                    callOnFinish: function() {
                        this.writeToInput();

                        if (this.options.onFinish && typeof this.options.onFinish === "function") {
                            if (this.options.scope) {
                                this.options.onFinish.call(this.options.scope, this.result);
                            } else {
                                this.options.onFinish(this.result);
                            }
                        }
                    },
                    callOnUpdate: function() {
                        this.writeToInput();

                        if (this.options.onUpdate && typeof this.options.onUpdate === "function") {
                            if (this.options.scope) {
                                this.options.onUpdate.call(this.options.scope, this.result);
                            } else {
                                this.options.onUpdate(this.result);
                            }
                        }
                    },







                    toggleInput: function() {
                        this.$cache.input.toggleClass("irs-hidden-input");

                        if (this.has_tab_index) {
                            this.$cache.input.prop("tabindex", -1);
                        } else {
                            this.$cache.input.removeProp("tabindex");
                        }

                        this.has_tab_index = !this.has_tab_index;
                    },

                    /**
                     * Convert real value to percent
                     *
                     * @param value {Number} X in real
                     * @param no_min {boolean=} don't use min value
                     * @returns {Number} X in percent
                     */
                    convertToPercent: function(value, no_min) {
                        var diapason = this.options.max - this.options.min,
                            one_percent = diapason / 100,
                            val, percent;

                        if (!diapason) {
                            this.no_diapason = true;
                            return 0;
                        }

                        if (no_min) {
                            val = value;
                        } else {
                            val = value - this.options.min;
                        }

                        percent = val / one_percent;

                        return this.toFixed(percent);
                    },

                    /**
                     * Convert percent to real values
                     *
                     * @param percent {Number} X in percent
                     * @returns {Number} X in real
                     */
                    convertToValue: function(percent) {
                        var min = this.options.min,
                            max = this.options.max,
                            min_decimals = min.toString().split(".")[1],
                            max_decimals = max.toString().split(".")[1],
                            min_length, max_length,
                            avg_decimals = 0,
                            abs = 0;

                        if (percent === 0) {
                            return this.options.min;
                        }
                        if (percent === 100) {
                            return this.options.max;
                        }


                        if (min_decimals) {
                            min_length = min_decimals.length;
                            avg_decimals = min_length;
                        }
                        if (max_decimals) {
                            max_length = max_decimals.length;
                            avg_decimals = max_length;
                        }
                        if (min_length && max_length) {
                            avg_decimals = (min_length >= max_length) ? min_length : max_length;
                        }

                        if (min < 0) {
                            abs = Math.abs(min);
                            min = +(min + abs).toFixed(avg_decimals);
                            max = +(max + abs).toFixed(avg_decimals);
                        }

                        var number = ((max - min) / 100 * percent) + min,
                            string = this.options.step.toString().split(".")[1],
                            result;

                        if (string) {
                            number = +number.toFixed(string.length);
                        } else {
                            number = number / this.options.step;
                            number = number * this.options.step;

                            number = +number.toFixed(0);
                        }

                        if (abs) {
                            number -= abs;
                        }

                        if (string) {
                            result = +number.toFixed(string.length);
                        } else {
                            result = this.toFixed(number);
                        }

                        if (result < this.options.min) {
                            result = this.options.min;
                        } else if (result > this.options.max) {
                            result = this.options.max;
                        }

                        return result;
                    },

                    /**
                     * Round percent value with step
                     *
                     * @param percent {Number}
                     * @returns percent {Number} rounded
                     */
                    calcWithStep: function(percent) {
                        var rounded = Math.round(percent / this.coords.p_step) * this.coords.p_step;

                        if (rounded > 100) {
                            rounded = 100;
                        }
                        if (percent === 100) {
                            rounded = 100;
                        }

                        return this.toFixed(rounded);
                    },

                    checkMinInterval: function(p_current, p_next, type) {
                        var o = this.options,
                            current,
                            next;

                        if (!o.min_interval) {
                            return p_current;
                        }

                        current = this.convertToValue(p_current);
                        next = this.convertToValue(p_next);

                        if (type === "from") {

                            if (next - current < o.min_interval) {
                                current = next - o.min_interval;
                            }

                        } else {

                            if (current - next < o.min_interval) {
                                current = next + o.min_interval;
                            }

                        }

                        return this.convertToPercent(current);
                    },

                    checkMaxInterval: function(p_current, p_next, type) {
                        var o = this.options,
                            current,
                            next;

                        if (!o.max_interval) {
                            return p_current;
                        }

                        current = this.convertToValue(p_current);
                        next = this.convertToValue(p_next);

                        if (type === "from") {

                            if (next - current > o.max_interval) {
                                current = next - o.max_interval;
                            }

                        } else {

                            if (current - next > o.max_interval) {
                                current = next + o.max_interval;
                            }

                        }

                        return this.convertToPercent(current);
                    },

                    checkDiapason: function(p_num, min, max) {
                        var num = this.convertToValue(p_num),
                            o = this.options;

                        if (typeof min !== "number") {
                            min = o.min;
                        }

                        if (typeof max !== "number") {
                            max = o.max;
                        }

                        if (num < min) {
                            num = min;
                        }

                        if (num > max) {
                            num = max;
                        }

                        return this.convertToPercent(num);
                    },

                    toFixed: function(num) {
                        num = num.toFixed(20);
                        return +num;
                    },

                    _prettify: function(num) {
                        if (!this.options.prettify_enabled) {
                            return num;
                        }

                        if (this.options.prettify && typeof this.options.prettify === "function") {
                            return this.options.prettify(num);
                        } else {
                            return this.prettify(num);
                        }
                    },

                    prettify: function(num) {
                        var n = num.toString();
                        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
                    },

                    checkEdges: function(left, width) {
                        if (!this.options.force_edges) {
                            return this.toFixed(left);
                        }

                        if (left < 0) {
                            left = 0;
                        } else if (left > 100 - width) {
                            left = 100 - width;
                        }

                        return this.toFixed(left);
                    },

                    validate: function() {
                        var o = this.options,
                            r = this.result,
                            v = o.values,
                            vl = v.length,
                            value,
                            i;

                        if (typeof o.min === "string") o.min = +o.min;
                        if (typeof o.max === "string") o.max = +o.max;
                        if (typeof o.from === "string") o.from = +o.from;
                        if (typeof o.to === "string") o.to = +o.to;
                        if (typeof o.step === "string") o.step = +o.step;

                        if (typeof o.from_min === "string") o.from_min = +o.from_min;
                        if (typeof o.from_max === "string") o.from_max = +o.from_max;
                        if (typeof o.to_min === "string") o.to_min = +o.to_min;
                        if (typeof o.to_max === "string") o.to_max = +o.to_max;

                        if (typeof o.grid_num === "string") o.grid_num = +o.grid_num;

                        if (o.max < o.min) {
                            o.max = o.min;
                        }

                        if (vl) {
                            o.p_values = [];
                            o.min = 0;
                            o.max = vl - 1;
                            o.step = 1;
                            o.grid_num = o.max;
                            o.grid_snap = true;

                            for (i = 0; i < vl; i++) {
                                value = +v[i];

                                if (!isNaN(value)) {
                                    v[i] = value;
                                    value = this._prettify(value);
                                } else {
                                    value = v[i];
                                }

                                o.p_values.push(value);
                            }
                        }

                        if (typeof o.from !== "number" || isNaN(o.from)) {
                            o.from = o.min;
                        }

                        if (typeof o.to !== "number" || isNaN(o.to)) {
                            o.to = o.max;
                        }

                        if (o.type === "single") {

                            if (o.from < o.min) o.from = o.min;
                            if (o.from > o.max) o.from = o.max;

                        } else {

                            if (o.from < o.min) o.from = o.min;
                            if (o.from > o.max) o.from = o.max;

                            if (o.to < o.min) o.to = o.min;
                            if (o.to > o.max) o.to = o.max;

                            if (this.update_check.from) {

                                if (this.update_check.from !== o.from) {
                                    if (o.from > o.to) o.from = o.to;
                                }
                                if (this.update_check.to !== o.to) {
                                    if (o.to < o.from) o.to = o.from;
                                }

                            }

                            if (o.from > o.to) o.from = o.to;
                            if (o.to < o.from) o.to = o.from;

                        }

                        if (typeof o.step !== "number" || isNaN(o.step) || !o.step || o.step < 0) {
                            o.step = 1;
                        }

                        if (typeof o.from_min === "number" && o.from < o.from_min) {
                            o.from = o.from_min;
                        }

                        if (typeof o.from_max === "number" && o.from > o.from_max) {
                            o.from = o.from_max;
                        }

                        if (typeof o.to_min === "number" && o.to < o.to_min) {
                            o.to = o.to_min;
                        }

                        if (typeof o.to_max === "number" && o.from > o.to_max) {
                            o.to = o.to_max;
                        }

                        if (r) {
                            if (r.min !== o.min) {
                                r.min = o.min;
                            }

                            if (r.max !== o.max) {
                                r.max = o.max;
                            }

                            if (r.from < r.min || r.from > r.max) {
                                r.from = o.from;
                            }

                            if (r.to < r.min || r.to > r.max) {
                                r.to = o.to;
                            }
                        }

                        if (typeof o.min_interval !== "number" || isNaN(o.min_interval) || !o.min_interval || o.min_interval < 0) {
                            o.min_interval = 0;
                        }

                        if (typeof o.max_interval !== "number" || isNaN(o.max_interval) || !o.max_interval || o.max_interval < 0) {
                            o.max_interval = 0;
                        }

                        if (o.min_interval && o.min_interval > o.max - o.min) {
                            o.min_interval = o.max - o.min;
                        }

                        if (o.max_interval && o.max_interval > o.max - o.min) {
                            o.max_interval = o.max - o.min;
                        }
                    },

                    decorate: function(num, original) {
                        var decorated = "",
                            o = this.options;

                        if (o.prefix) {
                            decorated += o.prefix;
                        }

                        decorated += num;

                        if (o.max_postfix) {
                            if (o.values.length && num === o.p_values[o.max]) {
                                decorated += o.max_postfix;
                                if (o.postfix) {
                                    decorated += " ";
                                }
                            } else if (original === o.max) {
                                decorated += o.max_postfix;
                                if (o.postfix) {
                                    decorated += " ";
                                }
                            }
                        }

                        if (o.postfix) {
                            decorated += o.postfix;
                        }

                        return decorated;
                    },

                    updateFrom: function() {
                        this.result.from = this.options.from;
                        this.result.from_percent = this.convertToPercent(this.result.from);
                        this.result.from_pretty = this._prettify(this.result.from);
                        if (this.options.values) {
                            this.result.from_value = this.options.values[this.result.from];
                        }
                    },

                    updateTo: function() {
                        this.result.to = this.options.to;
                        this.result.to_percent = this.convertToPercent(this.result.to);
                        this.result.to_pretty = this._prettify(this.result.to);
                        if (this.options.values) {
                            this.result.to_value = this.options.values[this.result.to];
                        }
                    },

                    updateResult: function() {
                        this.result.min = this.options.min;
                        this.result.max = this.options.max;
                        this.updateFrom();
                        this.updateTo();
                    },





                    appendGrid: function() {
                        if (!this.options.grid) {
                            return;
                        }

                        var o = this.options,
                            i, z,

                            total = o.max - o.min,
                            big_num = o.grid_num,
                            big_p = 0,
                            big_w = 0,

                            small_max = 4,
                            local_small_max,
                            small_p,
                            small_w = 0,

                            result,
                            html = '';



                        this.calcGridMargin();

                        if (o.grid_snap) {
                            big_num = total / o.step;
                        }

                        if (big_num > 50) big_num = 50;
                        big_p = this.toFixed(100 / big_num);

                        if (big_num > 4) {
                            small_max = 3;
                        }
                        if (big_num > 7) {
                            small_max = 2;
                        }
                        if (big_num > 14) {
                            small_max = 1;
                        }
                        if (big_num > 28) {
                            small_max = 0;
                        }

                        for (i = 0; i < big_num + 1; i++) {
                            local_small_max = small_max;

                            big_w = this.toFixed(big_p * i);

                            if (big_w > 100) {
                                big_w = 100;
                            }
                            this.coords.big[i] = big_w;

                            small_p = (big_w - (big_p * (i - 1))) / (local_small_max + 1);

                            for (z = 1; z <= local_small_max; z++) {
                                if (big_w === 0) {
                                    break;
                                }

                                small_w = this.toFixed(big_w - (small_p * z));

                                html += '<span class="irs-grid-pol small" style="left: ' + small_w + '%"></span>';
                            }

                            html += '<span class="irs-grid-pol" style="left: ' + big_w + '%"></span>';

                            result = this.convertToValue(big_w);
                            if (o.values.length) {
                                result = o.p_values[result];
                            } else {
                                result = this._prettify(result);
                            }

                            html += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + big_w + '%">' + result + '</span>';
                        }
                        this.coords.big_num = Math.ceil(big_num + 1);



                        this.$cache.cont.addClass("irs-with-grid");
                        this.$cache.grid.html(html);
                        this.cacheGridLabels();
                    },

                    cacheGridLabels: function() {
                        var $label, i,
                            num = this.coords.big_num;

                        for (i = 0; i < num; i++) {
                            $label = this.$cache.grid.find(".js-grid-text-" + i);
                            this.$cache.grid_labels.push($label);
                        }

                        this.calcGridLabels();
                    },

                    calcGridLabels: function() {
                        var i, label, start = [],
                            finish = [],
                            num = this.coords.big_num;

                        for (i = 0; i < num; i++) {
                            this.coords.big_w[i] = this.$cache.grid_labels[i].outerWidth(false);
                            this.coords.big_p[i] = this.toFixed(this.coords.big_w[i] / this.coords.w_rs * 100);
                            this.coords.big_x[i] = this.toFixed(this.coords.big_p[i] / 2);

                            start[i] = this.toFixed(this.coords.big[i] - this.coords.big_x[i]);
                            finish[i] = this.toFixed(start[i] + this.coords.big_p[i]);
                        }

                        if (this.options.force_edges) {
                            if (start[0] < -this.coords.grid_gap) {
                                start[0] = -this.coords.grid_gap;
                                finish[0] = this.toFixed(start[0] + this.coords.big_p[0]);

                                this.coords.big_x[0] = this.coords.grid_gap;
                            }

                            if (finish[num - 1] > 100 + this.coords.grid_gap) {
                                finish[num - 1] = 100 + this.coords.grid_gap;
                                start[num - 1] = this.toFixed(finish[num - 1] - this.coords.big_p[num - 1]);

                                this.coords.big_x[num - 1] = this.toFixed(this.coords.big_p[num - 1] - this.coords.grid_gap);
                            }
                        }

                        this.calcGridCollision(2, start, finish);
                        this.calcGridCollision(4, start, finish);

                        for (i = 0; i < num; i++) {
                            label = this.$cache.grid_labels[i][0];

                            if (this.coords.big_x[i] !== Number.POSITIVE_INFINITY) {
                                label.style.marginLeft = -this.coords.big_x[i] + "%";
                            }
                        }
                    },



                    calcGridCollision: function(step, start, finish) {
                        var i, next_i, label,
                            num = this.coords.big_num;

                        for (i = 0; i < num; i += step) {
                            next_i = i + (step / 2);
                            if (next_i >= num) {
                                break;
                            }

                            label = this.$cache.grid_labels[next_i][0];

                            if (finish[i] <= start[next_i]) {
                                label.style.visibility = "visible";
                            } else {
                                label.style.visibility = "hidden";
                            }
                        }
                    },

                    calcGridMargin: function() {
                        if (!this.options.grid_margin) {
                            return;
                        }

                        this.coords.w_rs = this.$cache.rs.outerWidth(false);
                        if (!this.coords.w_rs) {
                            return;
                        }

                        if (this.options.type === "single") {
                            this.coords.w_handle = this.$cache.s_single.outerWidth(false);
                        } else {
                            this.coords.w_handle = this.$cache.s_from.outerWidth(false);
                        }
                        this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
                        this.coords.grid_gap = this.toFixed((this.coords.p_handle / 2) - 0.1);

                        this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%";
                        this.$cache.grid[0].style.left = this.coords.grid_gap + "%";
                    },






                    update: function(options) {
                        if (!this.input) {
                            return;
                        }

                        this.is_update = true;

                        this.options.from = this.result.from;
                        this.options.to = this.result.to;
                        this.update_check.from = this.result.from;
                        this.update_check.to = this.result.to;

                        this.options = $.extend(this.options, options);
                        this.validate();
                        this.updateResult(options);

                        this.toggleInput();
                        this.remove();
                        this.init(true);
                    },

                    reset: function() {
                        if (!this.input) {
                            return;
                        }

                        this.updateResult();
                        this.update();
                    },

                    destroy: function() {
                        if (!this.input) {
                            return;
                        }

                        this.toggleInput();
                        this.$cache.input.prop("readonly", false);
                        $.data(this.input, "ionRangeSlider", null);

                        this.remove();
                        this.input = null;
                        this.options = null;
                    }
                };

                $.fn.ionRangeSlider = function(options) {
                    return this.each(function() {
                        if (!$.data(this, "ionRangeSlider")) {
                            $.data(this, "ionRangeSlider", new IonRangeSlider(this, options, plugin_count++));
                        }
                    });
                };











                (function() {
                    var lastTime = 0;
                    var vendors = ['ms', 'moz', 'webkit', 'o'];
                    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
                            window[vendors[x] + 'CancelRequestAnimationFrame'];
                    }

                    if (!window.requestAnimationFrame)
                        window.requestAnimationFrame = function(callback, element) {
                            var currTime = new Date().getTime();
                            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                                timeToCall);
                            lastTime = currTime + timeToCall;
                            return id;
                        };

                    if (!window.cancelAnimationFrame)
                        window.cancelAnimationFrame = function(id) {
                            clearTimeout(id);
                        };
                }());

            }));


        }.call(this, __webpack_require__(0)))

        /***/
    }),

    /***/
    (function(module, exports) {


        (function(__webpack_amd_options__) {
            module.exports = __webpack_amd_options__;


        }.call(this, {}))

        /***/
    }),

    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        (function($) {
            var air_datepicker_dist_js_datepicker_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

            var air_datepicker_dist_js_datepicker_min__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(air_datepicker_dist_js_datepicker_min__WEBPACK_IMPORTED_MODULE_0__);







            __webpack_exports__["a"] = (class {
                constructor(props = {}) {
                    const { element, onChangeFunction } = props;

                    this.colorDarkShade25 = 'rgba(31, 32, 65, 0.25)';
                    this.colorPurple = '#BC9CFF'
                    this.applyButton = document.createElement('span');
                    this.applyButton.classList.add('datepicker--button');
                    this.applyButton.innerText = 'Применить'

                    this.elementDOM = document.querySelector(element)
                    this.selectedDates = []

                    $(element).datepicker({
                        prevHtml: '<span class ="datepicker--nav-prev">arrow_back</span>',
                        nextHtml: '<span class="datepicker--nav-next">arrow_forward</span>',
                        dateFormat: 'dd M',

                        navTitles: {
                            days: 'MM yyyy',
                            months: 'yyyy',
                            years: 'yyyy1 - yyyy2'
                        },

                        multipleDates: true,

                        multipleDatesSeparator: ' - ',

                        range: true,

                        startDate: new Date(),

                        showButtonPanel: true,

                        clearButton: true,

                        onShow: (animationCompleted) => {
                            if (!animationCompleted) {
                                if (this.selectedDates.length < 2 || this.selectedDates.length === 'undefined') {
                                    this.applyButton.style.color = this.colorDarkShade25;
                                }
                            }

                        },

                        onSelect: (formattedDate) => {
                            if (formattedDate.length > 1) {

                                this.applyButton.style.color = this.colorPurple;
                                this.selectedDates = formattedDate;
                            }
                        },

                        onHide: (inst, animationCompleted) => {
                            if (!animationCompleted) {
                                if (inst.selectedDates.length < 2) {
                                    this.selectedDates = {};
                                } else {
                                    onChangeFunction(this.selectedDates);
                                }
                            }
                        }
                    });

                    $(element).datepicker().data('datepicker').$datepicker.children('.datepicker--buttons').append(this.applyButton);

                    this.applyButton.addEventListener('click', () => { $(element).datepicker().data('datepicker').hide() }, false);

                    this.elementDOM.closest('.filter-date-dropdown').addEventListener('click', () => {
                        $(element).datepicker().data('datepicker').show();
                    })

                }
            });
        }.call(this, __webpack_require__(0)))

        /***/
    }),

    ,

    ,

    ,

    ,

    ,

    /***/
    (function(module, exports, __webpack_require__) {}),

    /***/
    (function(module, exports, __webpack_require__) {

        var map = {
            "./background.jpg": 29,
            "./350.jpg": 30,
            "./350.jpg": 31,
            "./350.jpg": 32,
            "./350.jpg": 33,
            "./352.jpg": 34,
            "./352.jpg": 35,
            "./352.jpg": 36,
            "./352.jpg": 37,
            "./444.jpg": 38,
            "./444.jpg": 39,
            "./444.jpg": 40,
            "./444.jpg": 41,
            "./450.jpg": 42,
            "./450.jpg": 43,
            "./450.jpg": 44,
            "./450.jpg": 45,
            "./666.jpg": 46,
            "./666.jpg": 47,
            "./666.jpg": 48,
            "./666.jpg": 49,
            "./678.jpg": 50,
            "./678.jpg": 51,
            "./678.jpg": 52,
            "./678.jpg": 53,
            "./740.jpg": 54,
            "./740.jpg": 55,
            "./740.jpg": 56,
            "./740.jpg": 57,
            "./840.jpg": 11,
            "./840.jpg": 12,
            "./840.jpg": 13,
            "./840.jpg": 14,
            "./856.jpg": 58,
            "./856.jpg": 59,
            "./856.jpg": 60,
            "./856.jpg": 61,
            "./888.jpg": 15,
            "./88.jpg": 16,
            "./888.jpg": 17,
            "./888.jpg": 18,
            "./980.jpg": 62,
            "./980.jpg": 63,
            "./980.jpg": 64,
            "./980.jpg": 65,
            "./982.jpg": 66,
            "./982.jpg": 67,
            "./982.jpg": 68,
            "./982.jpg": 69
        };


        function webpackContext(req) {
            var id = webpackContextResolve(req);
            return __webpack_require__(id);
        }

        function webpackContextResolve(req) {
            if (!__webpack_require__.o(map, req)) {
                var e = new Error("Cannot find module '" + req + "'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            }
            return map[req];
        }
        webpackContext.keys = function webpackContextKeys() {
            return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id = 28;

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/background.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/350.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/350.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/350.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/350.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/352.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/352.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/352.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/352.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/444.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/444.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/444.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/444.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/450.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/450.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/450.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/450.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/666.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/666.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/666.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/666.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/678.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/678.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/678.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/678.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/740.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/740.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/740.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/740.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/856.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/856.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/856.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/856.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/980.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/980.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/980.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/980.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/982.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/982.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/982.jpg";

        /***/
    }),

    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "img/982.jpg";

        /***/
    }),

    ,

    ,

    ,

    ,

    ,

    ,

    ,

    ,

    ,

    ,

    ,

    ,

    ,

    ,

    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);

        var search_room = __webpack_require__(27);

        var fontawesome = __webpack_require__(4);

        var pagination = __webpack_require__(7);

        var range_slider = __webpack_require__(8);

        var dropdown = __webpack_require__(1);
        var expandable_checkbox_list = __webpack_require__(3);

        var card_room = (class {
            constructor() {
                const roomCard = document.querySelectorAll('.card-room');

                roomCard.forEach((card) => {
                    const inputList = card.querySelectorAll('.card-room__input');
                    inputList.forEach((inputSelector) => {
                        inputSelector.addEventListener('click', (e) => { this._onCangeRadio(e) });

                        inputSelector.closest('.card-room__select-label').addEventListener('mouseover', (e) => { this._onCangeRadioLazy(e) }, true)
                    })

                    const sliderControl = card.querySelector('.card-room__controls');
                    sliderControl.addEventListener('click', (e) => { this._onChangeSlider(e) });

                    card.showTimer = setInterval(function() {}, 2000);
                    card.stateIntervalShow = false;
                    card.addEventListener('mouseover', (e) => { this._onMousOver(e) })
                    card.addEventListener('mouseout', (e) => { this._onMouseOut(e) }, true)
                })
            }

            _checkCurentPicture(parent) {
                return Number(parent.querySelector("[type='radio']:checked").value);
            }

            _showPicture(roomObject) {
                const { parent, index } = roomObject;
                const fileName = './img/' + parent.dataset.room + '.jpg';
                parent.querySelector('.card-room__image').setAttribute('src', fileName);
            }

            _checkedIndex(roomObject) {
                const { parent, index } = roomObject;
                const element = parent.querySelectorAll('.card-room__input')[index]
                element.checked = true;
            }

            _uncheckedIndex(roomObject) {
                const { parent, index } = roomObject;
                const element = parent.querySelectorAll('.card-room__input')[index]
                element.checked = false;
            }

            _nextPicture(parent) {
                let currentPicture = this._checkCurentPicture(parent) - 1;
                this._uncheckedIndex({
                    parent: parent,
                    index: currentPicture
                })
                if (currentPicture === 3) { currentPicture = -1 }
                this._showPicture({
                    parent: parent,
                    index: ++currentPicture + 1
                })
                this._checkedIndex({
                    parent: parent,
                    index: currentPicture
                })

            }

            _stopTimer(parent) {
                clearInterval(parent.showTimer)
                parent.stateIntervalTimer = false;
            }

            _startTimer(parent) {
                parent.showTimer = setInterval(() => {
                    this._nextPicture(parent)
                }, 5000);
                parent.stateIntervalTimer = true;
            }

            _onMouseOut(e) {
                const parent = e.target.closest('.card-room');
                this._stopTimer(parent);
            }

            _onMousOver(e) {
                const parent = e.target.closest('.card-room');
                if (!parent.stateIntervalTimer) {
                    this._startTimer(parent);
                }
            }

            _onCangeRadioLazy(e) {
                const target = e.target;
                const parent = e.target.closest('.card-room');
                const overLabel = target.closest('.card-room__select-label');

                this._stopTimer(parent);

                let currentPicture = this._checkCurentPicture(parent) - 1;
                this._uncheckedIndex({
                    parent: parent,
                    index: currentPicture
                })

                currentPicture = Number(overLabel.querySelector('.card-room__input').value)
                this._showPicture({
                    parent: parent,
                    index: currentPicture
                })

                console.log(currentPicture)
                this._checkedIndex({
                    parent: parent,
                    index: currentPicture - 1
                })

                this._startTimer(parent);
            }

            _onCangeRadio(e) {
                const target = e.target;
                const parent = target.closest('.card-room');

                this._stopTimer(parent);

                this._showPicture({
                    parent: parent,
                    index: target.value
                })


                this._startTimer(parent);
            }

            _onChangeSlider(e) {
                const parent = e.target.closest('.card-room');


                this._stopTimer(parent);


                let currentPicture = this._checkCurentPicture(parent) - 1;
                this._uncheckedIndex({
                    parent: parent,
                    index: currentPicture
                })


                if (e.target.classList.contains('card-room__slider-button_prev')) {
                    if (currentPicture === 0) { currentPicture = 4 }
                    this._showPicture({
                        parent: parent,
                        index: --currentPicture + 1
                    })
                } else if (e.target.classList.contains('card-room__slider-button_next')) {
                    if (currentPicture === 3) { currentPicture = -1 }
                    this._showPicture({
                        parent: parent,
                        index: ++currentPicture + 1
                    })
                }

                this._checkedIndex({
                    parent: parent,
                    index: currentPicture
                })

                this._startTimer(parent);
            }

        });

        var filter_date_dropdown = __webpack_require__(21);

        __webpack_require__(28);

        var ready = (callback) => {
            if (document.readyState != "loading") callback();
            else document.addEventListener("DOMContentLoaded", callback);
        }

        ready(() => {
            const filterDatePicker = new filter_date_dropdown["a"]({
                element: '#filter-date-picker'
            })

            const cardSelector = new card_room();

            const demoDropDownVisitors = new dropdown["a"]('.dropdown-visitors')

            const demoDropDownEnarenment = new dropdown["a"]('.dropdown-envarenment')

            const expCheckBoxList = Object(expandable_checkbox_list["a"])('.check-list-test')


            const rangeSlider = new range_slider["a"]({
                from: 4700,
                to: 10000
            })


            const pager = new pagination["a"]({
                items: 15,
                itemsOnPage: 5,
                element: '.pager'
            })
        });

    })

])