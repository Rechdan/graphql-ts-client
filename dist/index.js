"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    GraphQLClientError: function() {
        return GraphQLClientError;
    },
    generateTypescriptClient: function() {
        return generateTypescriptClient;
    }
});
module.exports = __toCommonJS(src_exports);
// src/generateTypescriptClient.ts
var import_axios = __toESM(require("axios"));
var import_axios_retry = __toESM(require("axios-retry"));
var import_case = __toESM(require("case"));
var esbuild = __toESM(require("esbuild"));
var fs = __toESM(require("fs"));
var import_graphql = require("graphql");
var import_lodash = require("lodash");
var import_orderBy = __toESM(require("lodash/orderBy"));
var import_set = __toESM(require("lodash/set"));
var import_md5 = __toESM(require("md5"));
var import_os = __toESM(require("os"));
var import_path = __toESM(require("path"));
var prettier = __toESM(require("prettier"));
// package.json
var package_default = {
    name: "graphql-ts-client",
    version: "10.4.0",
    description: "GraphQL Typescript Client Generator",
    author: "Wellington Guimaraes",
    license: "MIT",
    main: "dist/index.js",
    typings: "dist/index.d.ts",
    scripts: {
        build: "tsup src/index.ts src/endpoint.ts --dts",
        test: "cross-env GQL_CLIENT_DIST_PATH='.' jest --watch",
        prepublishOnly: "yarn build"
    },
    files: [
        "dist",
        "src"
    ],
    engines: {
        node: ">=12"
    },
    bugs: {
        url: "https://github.com/wellguimaraes/graphql-ts-client/issues"
    },
    homepage: "https://github.com/wellguimaraes/graphql-ts-client#readme",
    repository: {
        type: "git",
        url: "git+https://github.com/wellguimaraes/graphql-ts-client.git"
    },
    peerDependencies: {},
    prettier: {
        trailingComma: "es5",
        tabWidth: 2,
        proseWrap: "always",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        semi: false,
        singleQuote: true,
        arrowParens: "avoid",
        endOfLine: "lf",
        printWidth: 130,
        htmlWhitespaceSensitivity: "ignore",
        jsxSingleQuote: false
    },
    module: "dist/graphql-ts-client.esm.js",
    "size-limit": [
        {
            path: "dist/graphql-ts-client.cjs.production.min.js",
            limit: "10 KB"
        },
        {
            path: "dist/graphql-ts-client.esm.js",
            limit: "10 KB"
        }
    ],
    dependencies: {
        "@types/md5": "^2.3.2",
        axios: "^1.4.0",
        "axios-retry": "^3.5.1",
        case: "^1.6.3",
        esbuild: "^0.18.16",
        graphql: "^16.7.1",
        lodash: "^4.17.21",
        md5: "^2.3.0",
        moize: "^6.1.6",
        prettier: "^2.8.8",
        "ts-essentials": "^8.1.0"
    },
    devDependencies: {
        "@babel/preset-env": "^7.22.9",
        "@babel/preset-typescript": "^7.22.5",
        "@jest/globals": "^29.6.1",
        "@types/graphql": "^14.5.0",
        "@types/jest": "^29.5.3",
        "@types/lodash": "^4.14.195",
        "@types/node": "^20.4.5",
        "@types/prettier": "^2.7.3",
        "apollo-server": "^3.12.0",
        "cross-env": "^7.0.3",
        jest: "^29.6.1",
        "ts-node": "^10.9.1",
        tsup: "^7.1.0",
        typescript: "^5.1.6",
        "@swc/core": "^1.3.71"
    }
};
// src/generateTypescriptClient.ts
var tempDir = fs.realpathSync(import_os.default.tmpdir());
var graphqlTsClientPath = process.env.GQL_CLIENT_DIST_PATH || "graphql-ts-client/dist";
function gqlScalarToTypescript(gqlType) {
    if (/(int|long|double|decimal|float)/i.test(gqlType)) return "number";
    if (/boolean/i.test(gqlType)) return "boolean";
    if (/String/i.test(gqlType)) return "string";
    return gqlType;
}
function gqlTypeToTypescript(gqlType) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_required = _ref.required, required = _ref_required === void 0 ? false : _ref_required, _ref_isInput = _ref.isInput, isInput = _ref_isInput === void 0 ? false : _ref_isInput, _ref_selection = _ref.selection, selection = _ref_selection === void 0 ? false : _ref_selection;
    if (!gqlType) return "";
    var maybeWrapped = function(it) {
        return required || selection ? it : "Maybe<".concat(it, ">");
    };
    if (typeof gqlType === "string") {
        return maybeWrapped(gqlType);
    }
    if (gqlType.kind.endsWith("OBJECT")) {
        return maybeWrapped(gqlType.name + (selection ? "Selection" : ""));
    }
    if (gqlType.kind === "NON_NULL") {
        return "".concat(gqlTypeToTypescript(gqlType.ofType, {
            isInput: isInput,
            required: true,
            selection: selection
        }));
    }
    if (gqlType.kind === "LIST") {
        return maybeWrapped("".concat(gqlTypeToTypescript(gqlType.ofType, {
            isInput: isInput,
            required: true,
            selection: selection
        })).concat(selection ? "" : "[]"));
    }
    if (selection) {
        return "";
    }
    if (gqlType.kind === "ENUM" && gqlType.name) {
        return maybeWrapped(gqlType.name);
    }
    if (gqlType.kind === "SCALAR") {
        return maybeWrapped(gqlScalarToTypescript(gqlType.name));
    }
    return "";
}
function gqlFieldToTypescript(field, param) {
    var isInput = param.isInput, selection = param.selection, defaultValue = param.defaultValue;
    var fieldTypeDefinition = gqlTypeToTypescript(field.type, {
        isInput: isInput,
        selection: selection
    });
    fieldTypeDefinition = "".concat(fieldTypeDefinition);
    if (selection && field.args && field.args.length) {
        var fieldsOnArgs = field.args.map(function(arg) {
            return gqlFieldToTypescript(arg, {
                defaultValue: arg.defaultValue,
                isInput: true,
                selection: false
            });
        });
        fieldTypeDefinition = "{ __headers?: {[key: string]: string}; __retry?: boolean; __alias?: string; __args".concat(fieldsOnArgs.every(function(arg) {
            return arg.isOptional;
        }) ? "?" : "", ": { ").concat(fieldsOnArgs.map(function(arg) {
            return arg.code;
        }).join(", "), " }}").concat(fieldTypeDefinition ? " & ".concat(fieldTypeDefinition) : "");
    }
    var isOptional = defaultValue || selection || fieldTypeDefinition.startsWith("Maybe");
    var rawType = fieldTypeDefinition || selection && "boolean";
    var wrappedType = isOptional ? rawType.replace(/Maybe<(.+?)>/, "$1") : rawType;
    return {
        isOptional: isOptional,
        code: "".concat(field.name).concat(isOptional ? "?:" : ":", " ").concat(wrappedType).concat(wrappedType && wrappedType.includes("Nullable") ? " | null" : "")
    };
}
function getArgsType(endpoint) {
    var fieldsOnArgs = endpoint.args.map(function(arg) {
        return gqlFieldToTypescript(arg, {
            defaultValue: arg.defaultValue,
            isInput: true,
            selection: false
        });
    });
    var argsType = "{ ".concat(fieldsOnArgs.map(function(arg) {
        return arg.code;
    }).join(", "), " }");
    var argsFullyOptional = fieldsOnArgs.every(function(arg) {
        return arg.isOptional;
    });
    return {
        alias: import_case.default.pascal("".concat(endpoint.name, "Args")),
        type: argsType,
        optional: argsFullyOptional
    };
}
function gqlEndpointToCode(kind, endpoint, codeOutputType) {
    var selectionType = gqlTypeToTypescript(endpoint.type, {
        isInput: false,
        selection: true
    });
    var argsType = endpoint.args && endpoint.args.length ? getArgsType(endpoint) : null;
    var inputType = "{\n    __headers?: {[key: string]: string};\n    __retry?: boolean;\n    __alias?: string;\n    ".concat(argsType ? "__args".concat(argsType.optional ? "?" : "", ": ").concat(argsType.alias) : "", "\n  }").concat(selectionType ? " & ".concat(selectionType) : "");
    var outputType = gqlTypeToTypescript(endpoint.type, {
        required: true
    });
    var wrappedOutputType = /^(string|number|boolean)$/.test(outputType) ? outputType : "DeepRequired<".concat(outputType, ">");
    return codeOutputType === "ts" ? "".concat(endpoint.name, ": Endpoint<").concat(inputType, ", ").concat(wrappedOutputType, ", AllEnums>") : "".concat(endpoint.name, ": apiEndpoint('").concat(kind, "', '").concat(endpoint.name, "')");
}
function gqlSchemaToCode(gqlType, param) {
    var _param_selection = param.selection, selection = _param_selection === void 0 ? false : _param_selection, outputType = param.outputType;
    var rawKind = gqlType.kind || gqlType.type;
    if (rawKind === "SCALAR") {
        return outputType === "ts" ? "export declare type ".concat(gqlType.name, " = ").concat(/date/i.test(gqlType.name) ? "IDate" : "string") : "";
    }
    if (rawKind === "ENUM") return outputType === "ts" ? "\n      export declare enum ".concat(gqlType.name, " {\n        ").concat((0, import_orderBy.default)(gqlType.enumValues, "name").map(function(_) {
        return "".concat(import_case.default.camel(_.name), " = '").concat(_.name, "'");
    }).join(",\n  "), "\n      }") : "export const ".concat(gqlType.name, " = {").concat((0, import_orderBy.default)(gqlType.enumValues, "name").map(function(_) {
        return "".concat(import_case.default.camel(_.name), ": '").concat(_.name, "'");
    }).join(",\n  "), "}");
    var fields = gqlType.fields && gqlType.fields || gqlType.inputFields && gqlType.inputFields || [];
    return outputType === "ts" ? "\n    export interface ".concat(gqlType.name).concat(selection ? "Selection" : "", " {\n      ").concat(fields.map(function(_) {
        return gqlFieldToTypescript(_, {
            isInput: gqlType.kind === "INPUT_OBJECT",
            selection: selection,
            gqlTypeName: gqlType.name
        }).code;
    }).join(",\n  "), "\n    }") : "";
}
function getGraphQLInputType(type) {
    switch(type.kind){
        case "NON_NULL":
            return "".concat(getGraphQLInputType(type.ofType), "!");
        case "SCALAR":
        case "INPUT_OBJECT":
        case "ENUM":
            return type.name;
        case "LIST":
            return "[".concat(getGraphQLInputType(type.ofType), "]");
        default:
            return "";
    }
}
function getGraphQLOutputType(type) {
    switch(type.kind){
        case "LIST":
            return "".concat(getGraphQLOutputType(type.ofType), "[]");
        case "NON_NULL":
            return getGraphQLOutputType(type.ofType);
        case "OBJECT":
            return type.name;
        default:
            return "";
    }
}
function getTypesTreeCode(types) {
    var typesTree = {};
    types.forEach(function(type) {
        return type.fields.filter(function(_) {
            return _.args && _.args.length;
        }).forEach(function(_) {
            return _.args.forEach(function(a) {
                var inputType = getGraphQLInputType(a.type);
                if (inputType) {
                    (0, import_set.default)(typesTree, "".concat(type.name, ".").concat(_.name, ".__args.").concat(a.name), inputType);
                }
            });
        });
    });
    types.forEach(function(t) {
        return t.fields.forEach(function(f) {
            var outputType = getGraphQLOutputType(f.type);
            if (outputType) {
                (0, import_set.default)(typesTree, "".concat(t.name, ".").concat(f.name, ".__shape"), outputType);
            }
        });
    });
    return "\n    const typesTree = {\n      ".concat(Object.entries(typesTree).map(function(param) {
        var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
        var entryCode = Object.entries(value).map(function(param) {
            var _param = _sliced_to_array(param, 2), k = _param[0], v = _param[1];
            var cleanShapeType = v.__shape && v.__shape.replace(/[\[\]!?]/g, "");
            var fieldsCode = v.__shape && typesTree.hasOwnProperty(cleanShapeType) ? "__fields: typesTree.".concat(cleanShapeType, ",") : "";
            var argsCode = v.__args ? "__args: {\n                      ".concat(Object.entries(v.__args).map(function(param) {
                var _param = _sliced_to_array(param, 2), k2 = _param[0], v2 = _param[1];
                return "".concat(k2, ": '").concat(v2, "'");
            }).join(",\n"), "\n                    }") : "";
            return fieldsCode || argsCode ? "get ".concat(k, "() {\n                  return {\n                    ").concat(fieldsCode, "\n                    ").concat(argsCode, "\n                  }\n                }") : "".concat(k, ": {}");
        }).filter(Boolean).join(",\n").trim();
        return entryCode && "\n              ".concat(key, ": { \n                ").concat(entryCode, " \n              }");
    }).filter(Boolean).join(",\n"), "\n    }\n  ");
}
function generateClientCode(types, options) {
    var _types_find, _types_find1;
    var typesHash = (0, import_md5.default)("".concat(options.endpoint, "__").concat(JSON.stringify(types)));
    var clientCacheFileName = "gql-ts-client__client__".concat(typesHash, "__").concat(package_default.version, ".json");
    var clientCacheFilePath = import_path.default.resolve(tempDir, clientCacheFileName);
    if (!options.skipCache && fs.existsSync(clientCacheFilePath)) {
        return JSON.parse(fs.readFileSync(clientCacheFilePath, {
            encoding: "utf8"
        }));
    }
    var queries = ((_types_find = types.find(function(it) {
        return it.name === "Query";
    })) === null || _types_find === void 0 ? void 0 : _types_find.fields) || [];
    var mutations = ((_types_find1 = types.find(function(it) {
        return it.name === "Mutation";
    })) === null || _types_find1 === void 0 ? void 0 : _types_find1.fields) || [];
    var enums = types.filter(function(it) {
        return it.kind === "ENUM" && !it.name.startsWith("__");
    });
    var scalars = types.filter(function(it) {
        return it.kind === "SCALAR" && !/decimal|int|float|string|long|boolean/i.test(it.name);
    });
    var objectTypes = types.filter(function(it) {
        return [
            "OBJECT",
            "INPUT_OBJECT"
        ].includes(it.kind) && !it.name.startsWith("__");
    });
    var forInputExtraction = types.filter(function(it) {
        return !it.name.startsWith("__") && [
            "OBJECT"
        ].includes(it.kind);
    });
    var clientName = options.clientName || "client";
    var jsCode = "\n    // noinspection TypeScriptUnresolvedVariable, ES6UnusedImports, JSUnusedLocalSymbols\n    import { getApiEndpointCreator } from '".concat(graphqlTsClientPath, "/endpoint'\n    \n    ").concat(options.formatGraphQL || options.verbose ? '\n      import { format as formatCode } from "prettier/standalone"\n      import parserGraphql from "prettier/parser-graphql"\n      \n      const formatGraphQL = (query) => formatCode(query, {parser: \'graphql\', plugins: [parserGraphql]})' : "\n      const formatGraphQL = (query) => query", "\n    \n    // Enums\n    ").concat(enums.map(function(it) {
        return gqlSchemaToCode(it, {
            selection: false,
            outputType: "js"
        });
    }).join("\n"), "\n\n    // Schema Resolution Tree\n    ").concat(getTypesTreeCode(forInputExtraction), "\n\n    let verbose = ").concat(Boolean(options.verbose), "\n    let headers = {}\n    let url = '").concat(options.endpoint, "'\n    let retryConfig = {\n      max: 0,\n      before: undefined,\n      waitBeforeRetry: 0\n    }\n    let responseListeners = []\n    // noinspection JSUnusedLocalSymbols\n    let apiEndpoint = getApiEndpointCreator({\n      getClient: () => ({ url, headers, retryConfig }),\n      responseListeners,\n      maxAge: 30000,\n      verbose,\n      typesTree,\n      formatGraphQL\n    })\n\n    export const ").concat(clientName, " = {\n      addResponseListener: (listener) => responseListeners.push(\n        listener),\n      setHeader: (key, value) => {\n        headers[key] = value\n      },\n      setHeaders: (newHeaders) => {\n        headers = newHeaders\n      },\n      setRetryConfig: (options) => {\n        if (!Number.isInteger(options.max) || options.max < 0) {\n          throw new Error('retryOptions.max should be a non-negative integer')\n        }\n        \n        retryConfig = { \n          max: options.max,\n          waitBeforeRetry: options.waitBeforeRetry,\n          before: options.before \n        }\n      },\n      setUrl: (_url) => url = _url,\n      queries: {\n        ").concat(queries.map(function(query) {
        return gqlEndpointToCode("query", query, "js");
    }).join(",\n"), "\n      },\n      mutations: {\n        ").concat(mutations.map(function(mutation) {
        return gqlEndpointToCode("mutation", mutation, "js");
    }).join(",\n"), "\n      }\n    }\n\n    export default ").concat(clientName);
    var typingsCode = "\n    // noinspection TypeScriptUnresolvedVariable, ES6UnusedImports, JSUnusedLocalSymbols, TypeScriptCheckImport\n    import { DeepRequired } from 'ts-essentials'\n    import { Maybe, IResponseListener, Endpoint } from '".concat(graphqlTsClientPath, "'\n\n    // Scalars\n    export type IDate = string | Date\n    ").concat(scalars.map(function(it) {
        return gqlSchemaToCode(it, {
            selection: false,
            outputType: "ts"
        });
    }).join("\n"), "\n\n    // Enums\n    ").concat(enums.map(function(it) {
        return gqlSchemaToCode(it, {
            selection: false,
            outputType: "ts"
        });
    }).join("\n"), "\n    \n    type AllEnums = ").concat(enums.length ? enums.map(function(it) {
        return it.name;
    }).join(" | ") : "never", "\n    \n    // Args\n    ").concat(_to_consumable_array(queries).concat(_to_consumable_array(mutations)).map(function(query) {
        var argsType = getArgsType(query);
        return "export interface ".concat(argsType.alias, " ").concat(argsType.type);
    }).join("\n"), "\n\n    // Input/Output Types\n    ").concat(objectTypes.map(function(it) {
        return "\n    /**\n     * @deprecated Avoid directly using this interface. Instead, create a type alias based on the query/mutation return type.\n     */\n    ".concat(gqlSchemaToCode(it, {
            selection: false,
            outputType: "ts"
        }));
    }).join("\n"), "\n\n    // Selection Types\n    ").concat(objectTypes.filter(function(it) {
        return it.name !== "Query";
    }).map(function(it) {
        return gqlSchemaToCode(it, {
            selection: true,
            outputType: "ts"
        });
    }).join("\n"), "\n    \n    export declare const ").concat(clientName, ": {\n      addResponseListener: (listener: IResponseListener) => void\n      setHeader: (key: string, value: string) => void\n      setHeaders: (newHeaders: { [k: string]: string }) => void,\n      setUrl: (url: string) => void,\n      setRetryConfig: (options: { max: number, waitBeforeRetry?: number, before?: IResponseListener }) => void\n      queries: {\n        ").concat(queries.map(function(q) {
        return gqlEndpointToCode("query", q, "ts");
    }).join(",\n"), "\n      },\n      mutations: {\n        ").concat(mutations.map(function(q) {
        return gqlEndpointToCode("mutation", q, "ts");
    }).join(",\n"), "\n      }\n    }\n\n    export default ").concat(clientName);
    var output = {
        js: esbuild.transformSync(jsCode, {
            format: "cjs",
            loader: "js"
        }).code,
        typings: prettier.format(typingsCode, {
            semi: false,
            parser: "typescript"
        })
    };
    fs.writeFileSync(clientCacheFilePath, JSON.stringify(output));
    return output;
}
function fetchIntrospection(_) {
    return _fetchIntrospection.apply(this, arguments);
}
function _fetchIntrospection() {
    _fetchIntrospection = _async_to_generator(function(param) {
        var endpoint, headers, introspectionCacheFileName, introspectionCacheFilePath, loadedFromCache, types, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    endpoint = param.endpoint, headers = param.headers;
                    introspectionCacheFileName = "gql-ts-client__introspection__".concat((0, import_lodash.kebabCase)(endpoint), ".json");
                    introspectionCacheFilePath = import_path.default.resolve(tempDir, introspectionCacheFileName);
                    loadedFromCache = false;
                    return [
                        4,
                        import_axios.default.post(endpoint, {
                            query: (0, import_graphql.getIntrospectionQuery)()
                        }, {
                            headers: _object_spread({
                                "Content-Type": "application/json"
                            }, headers)
                        }).catch(function() {
                            var errorMessage = "The GraphQL introspection request failed (".concat(endpoint, ")");
                            if (fs.existsSync(introspectionCacheFilePath)) {
                                var cachedSchema = JSON.parse(fs.readFileSync(introspectionCacheFilePath, {
                                    encoding: "utf8"
                                }));
                                loadedFromCache = true;
                                console.warn("Successfully restored from local cache.");
                                return {
                                    data: cachedSchema
                                };
                            } else {
                                return Promise.reject(errorMessage);
                            }
                        })
                    ];
                case 1:
                    data = _state.sent().data;
                    types = data.data.__schema.types;
                    if (!loadedFromCache) {
                        console.log("Successfully loaded GraphQL introspection from ".concat(endpoint));
                        fs.writeFileSync(introspectionCacheFilePath, JSON.stringify(data), {
                            encoding: "utf8"
                        });
                    }
                    return [
                        2,
                        types
                    ];
            }
        });
    });
    return _fetchIntrospection.apply(this, arguments);
}
function generateTypescriptClient(_param) {
    return _generateTypescriptClient.apply(this, arguments);
}
function _generateTypescriptClient() {
    _generateTypescriptClient = _async_to_generator(function(_param) {
        var introspectionEndpoint, output, options, types, _generateClientCode, js, typings, outputDir;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    introspectionEndpoint = _param.introspectionEndpoint, output = _param.output, options = _object_without_properties(_param, [
                        "introspectionEndpoint",
                        "output"
                    ]);
                    (0, import_axios_retry.default)(import_axios.default, {
                        retries: 5,
                        retryDelay: function(retryCount) {
                            return 1e3 * Math.pow(2, retryCount);
                        }
                    });
                    return [
                        4,
                        fetchIntrospection(_object_spread_props(_object_spread({}, options), {
                            endpoint: introspectionEndpoint || options.endpoint
                        }))
                    ];
                case 1:
                    types = _state.sent();
                    _generateClientCode = generateClientCode(types, options), js = _generateClientCode.js, typings = _generateClientCode.typings;
                    if (output && typeof output === "string") {
                        outputDir = import_path.default.dirname(output);
                        if (!fs.existsSync(outputDir)) {
                            fs.mkdirSync(outputDir, {
                                recursive: true
                            });
                        }
                        fs.writeFileSync(output.replace(/(\.(ts|js))?$/, ".d.ts"), typings, {
                            encoding: "utf8"
                        });
                        fs.writeFileSync(output.replace(/(\.(ts|js))?$/, ".js"), js, {
                            encoding: "utf8"
                        });
                    }
                    return [
                        2,
                        {
                            js: js,
                            typings: typings
                        }
                    ];
            }
        });
    });
    return _generateTypescriptClient.apply(this, arguments);
}
// src/types.ts
var GraphQLClientError = /*#__PURE__*/ function(Error1) {
    _inherits(_GraphQLClientError, Error1);
    var _super = _create_super(_GraphQLClientError);
    function _GraphQLClientError(responseData) {
        _class_call_check(this, _GraphQLClientError);
        var _this;
        _this = _super.call(this);
        _this.responseData = responseData;
        Object.setPrototypeOf(_assert_this_initialized(_this), _GraphQLClientError.prototype);
        return _this;
    }
    _create_class(_GraphQLClientError, [
        {
            key: "message",
            get: function get() {
                return this.response.errors.map(function(it) {
                    return it.message;
                }).join(";\n");
            }
        },
        {
            key: "response",
            get: function get() {
                return this.responseData;
            }
        }
    ]);
    return _GraphQLClientError;
}(_wrap_native_super(Error));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    GraphQLClientError: GraphQLClientError,
    generateTypescriptClient: generateTypescriptClient
});
