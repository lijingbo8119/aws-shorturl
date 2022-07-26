/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/models/http.ts":
/*!****************************!*\
  !*** ./src/models/http.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ResponseData = exports.StatusCode = exports.ContentType = void 0;\nvar ContentType;\n(function (ContentType) {\n    ContentType[\"ApplicationJson\"] = \"application/json\";\n})(ContentType = exports.ContentType || (exports.ContentType = {}));\nvar StatusCode;\n(function (StatusCode) {\n    StatusCode[StatusCode[\"Success\"] = 200] = \"Success\";\n    StatusCode[StatusCode[\"ResourceNotFound\"] = 404] = \"ResourceNotFound\";\n    StatusCode[StatusCode[\"UnprocessableEntity\"] = 422] = \"UnprocessableEntity\";\n    StatusCode[StatusCode[\"ServerFailed\"] = 500] = \"ServerFailed\";\n    StatusCode[StatusCode[\"Redirect\"] = 302] = \"Redirect\";\n})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));\nvar ResponseData = /** @class */ (function () {\n    function ResponseData(m, p) {\n        if (m === void 0) { m = 'success'; }\n        if (p === void 0) { p = undefined; }\n        this.message = m;\n        this.payload = null;\n        if (p !== undefined) {\n            this.payload = p;\n        }\n    }\n    return ResponseData;\n}());\nexports.ResponseData = ResponseData;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/models/http.ts?");

/***/ }),

/***/ "./src/models/shortUrl.ts":
/*!********************************!*\
  !*** ./src/models/shortUrl.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ShortUrlModel = void 0;\nvar lib_1 = __webpack_require__(/*! ../../src/server/lib */ \"./src/server/lib.ts\");\nvar ShortUrlModel = /** @class */ (function () {\n    function ShortUrlModel() {\n        this.id = 0;\n        this.long_url = '';\n        this.created_at = new Date();\n    }\n    Object.defineProperty(ShortUrlModel.prototype, \"short_url\", {\n        get: function () {\n            var host = process.env.HOST || 'http://localhost';\n            var port = process.env.PORT || '3000';\n            if (host.lastIndexOf('/') === host.length) {\n                host += host.substring(0, host.length - 1);\n            }\n            if (port !== '80') {\n                host += \":\".concat(port);\n            }\n            return host + '/s/' + this.short_path;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(ShortUrlModel.prototype, \"short_path\", {\n        get: function () {\n            return this.id > 0 ? lib_1.Shorter.idToStr(this.id) : '';\n        },\n        enumerable: false,\n        configurable: true\n    });\n    ShortUrlModel.prototype.toJSON = function () {\n        return {\n            id: this.id,\n            long_url: this.long_url,\n            short_path: this.short_path,\n            short_url: this.short_url,\n            created_at: this.created_at,\n        };\n    };\n    return ShortUrlModel;\n}());\nexports.ShortUrlModel = ShortUrlModel;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/models/shortUrl.ts?");

/***/ }),

/***/ "./src/server/lib.ts":
/*!***************************!*\
  !*** ./src/server/lib.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Shorter = void 0;\nvar Shorter = /** @class */ (function () {\n    function Shorter() {\n    }\n    Shorter.idToStr = function (id) {\n        var num = id + Shorter.baseNum;\n        var arr = [];\n        while (num > 0) {\n            arr.push(Math.trunc(num % 62));\n            num = Math.trunc(num / 62);\n        }\n        var str = '';\n        for (var i = arr.length - 1; i >= 0; i--) {\n            str = str + Shorter.alphabet[arr[i]];\n        }\n        return str;\n    };\n    Shorter.strToId = function (str) {\n        var arr = str.split('').reverse().map(function (s) { return Shorter.findIndex(s); });\n        var num = 0;\n        for (var i = arr.length - 1; i >= 0; i--) {\n            num += arr[i] * Math.pow(62, i);\n        }\n        return num - Shorter.baseNum;\n    };\n    Shorter.findIndex = function (s) {\n        for (var i = 0; i < Shorter.alphabet.length; i++) {\n            if (s === Shorter.alphabet[i]) {\n                return i;\n            }\n        }\n        return -1;\n    };\n    Shorter.alphabet = [\n        '8', 'M', 'j', 'e', '0', 'O', 'l', '4', 'u', 'N',\n        's', 'x', 'g', 'B', 'd', 'h', 'a', 'p', 'C', 'G',\n        'b', 'Y', '7', 'f', 'F', 'W', 'w', 'k', 'c', 'X',\n        'V', 'v', 'i', 'n', 'z', 'R', '2', 'E', 'T', 'y',\n        'I', 'o', 'U', 'K', 't', 'm', 'q', 'L', 'H', 'S',\n        '6', '1', 'Z', '3', 'Q', '5', 'J', 'D', 'r', 'A',\n        '9', 'P',\n    ];\n    Shorter.baseNum = 100000000;\n    return Shorter;\n}());\nexports.Shorter = Shorter;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/lib.ts?");

/***/ }),

/***/ "./src/server/repositroy.ts":
/*!**********************************!*\
  !*** ./src/server/repositroy.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ShortUrlRepo = void 0;\nvar shortUrl_1 = __webpack_require__(/*! ../models/shortUrl */ \"./src/models/shortUrl.ts\");\nvar axios_1 = __webpack_require__(/*! axios */ \"axios\");\nvar ShortUrlRepo = /** @class */ (function () {\n    function ShortUrlRepo() {\n    }\n    ShortUrlRepo.prototype.findUnique = function (where) {\n        return __awaiter(this, void 0, void 0, function () {\n            var res, shortUrl, shortUrlModel, e_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, axios_1.default.get(\"http://django:8080/shorturl/\".concat(where.id))];\n                    case 1:\n                        res = _a.sent();\n                        shortUrl = res.data;\n                        shortUrlModel = new shortUrl_1.ShortUrlModel();\n                        shortUrlModel.id = shortUrl.id;\n                        shortUrlModel.long_url = shortUrl.long_url;\n                        shortUrlModel.created_at = shortUrl.created_at;\n                        return [2 /*return*/, shortUrlModel];\n                    case 2:\n                        e_1 = _a.sent();\n                        // console.log(e);\n                        return [2 /*return*/, null];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    ShortUrlRepo.prototype.create = function (data) {\n        return __awaiter(this, void 0, void 0, function () {\n            var res, shortUrl, shortUrlModel;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, axios_1.default.post(\"http://django:8080/shorturl/\", data)];\n                    case 1:\n                        res = _a.sent();\n                        shortUrl = res.data;\n                        shortUrlModel = new shortUrl_1.ShortUrlModel();\n                        shortUrlModel.id = shortUrl.id;\n                        shortUrlModel.long_url = shortUrl.long_url;\n                        shortUrlModel.created_at = shortUrl.created_at;\n                        return [2 /*return*/, shortUrlModel];\n                }\n            });\n        });\n    };\n    return ShortUrlRepo;\n}());\nexports.ShortUrlRepo = ShortUrlRepo;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/repositroy.ts?");

/***/ }),

/***/ "./src/server/routes.ts":
/*!******************************!*\
  !*** ./src/server/routes.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar repositroy_1 = __webpack_require__(/*! ./repositroy */ \"./src/server/repositroy.ts\");\nvar http_1 = __webpack_require__(/*! ../models/http */ \"./src/models/http.ts\");\nvar lib_1 = __webpack_require__(/*! ./lib */ \"./src/server/lib.ts\");\nvar router = express.Router();\n/**\n * get shorturl by short_path\n */\nrouter.get('/s/:short_path', function (req, resp, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var shortPath, id, model;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                shortPath = req.params.short_path;\n                if (shortPath.length === 0 || shortPath.length > 8) {\n                    return [2 /*return*/, resp.status(http_1.StatusCode.UnprocessableEntity).json(new http_1.ResponseData(\"invalid parameter\"))];\n                }\n                id = lib_1.Shorter.strToId(shortPath);\n                if (id <= 0) {\n                    return [2 /*return*/, resp.status(http_1.StatusCode.UnprocessableEntity).json(new http_1.ResponseData(\"invalid parameter\"))];\n                }\n                return [4 /*yield*/, new repositroy_1.ShortUrlRepo().findUnique({ id: id })];\n            case 1:\n                model = _a.sent();\n                if (model === null) {\n                    return [2 /*return*/, resp.status(http_1.StatusCode.ResourceNotFound).json(new http_1.ResponseData(\"resource not found\"))];\n                }\n                resp.redirect(model.long_url);\n                return [2 /*return*/];\n        }\n    });\n}); });\n/**\n * get shorturl by short_path\n */\nrouter.get('/api/shorturls/:short_path', function (req, resp, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var shortPath, id, model;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                shortPath = req.params.short_path;\n                if (shortPath.length === 0 || shortPath.length > 8) {\n                    return [2 /*return*/, resp.status(http_1.StatusCode.UnprocessableEntity).json(new http_1.ResponseData(\"invalid parameter\"))];\n                }\n                id = lib_1.Shorter.strToId(shortPath);\n                if (id <= 0) {\n                    return [2 /*return*/, resp.status(http_1.StatusCode.UnprocessableEntity).json(new http_1.ResponseData(\"invalid parameter\"))];\n                }\n                return [4 /*yield*/, new repositroy_1.ShortUrlRepo().findUnique({ id: id })];\n            case 1:\n                model = _a.sent();\n                if (model === null) {\n                    return [2 /*return*/, resp.status(http_1.StatusCode.ResourceNotFound).json(new http_1.ResponseData(\"resource not found\"))];\n                }\n                resp.status(http_1.StatusCode.Success).json(new http_1.ResponseData(\"success\", model));\n                return [2 /*return*/];\n        }\n    });\n}); });\n/**\n * create shorturl\n */\nrouter.post('/api/shorturls', function (req, resp, next) {\n    if (req.headers['content-type'] !== http_1.ContentType.ApplicationJson) {\n        resp.status(415).json(new http_1.ResponseData(\"content-type only accept \".concat(http_1.ContentType.ApplicationJson)));\n        return;\n    }\n    next();\n}, bodyParser.json(), function (req, resp, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var long_url, model, e_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                long_url = req.body.long_url;\n                if (!long_url || long_url.length === 0) {\n                    return [2 /*return*/, resp.status(http_1.StatusCode.UnprocessableEntity).json(new http_1.ResponseData(\"invalid parameter\"))];\n                }\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 3, , 4]);\n                return [4 /*yield*/, new repositroy_1.ShortUrlRepo().create({ long_url: long_url })];\n            case 2:\n                model = _a.sent();\n                resp.status(http_1.StatusCode.Success).json(new http_1.ResponseData(\"success\", model));\n                return [3 /*break*/, 4];\n            case 3:\n                e_1 = _a.sent();\n                console.log(e_1);\n                resp.status(http_1.StatusCode.ServerFailed).json(new http_1.ResponseData(\"failed\", e_1));\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); });\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes.ts\");\nvar app = express();\napp.use(express.static('public'));\napp.use(routes_1.default);\nvar port = process.env.PORT || 3000;\napp.listen(port, function () { return console.log(\"Server listening on port: \".concat(port)); });\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/server.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;