"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers = __importStar(require("../helpers"));
exports.default = (function (req, res, next) {
    res.locals.h = helpers;
    //@ts-ignore
    res.locals.user = req.user || null;
    res.locals.currentPath = req.path;
    next();
});
