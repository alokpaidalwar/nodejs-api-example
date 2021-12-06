"use strict";
// import dotenv from "dotenv";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CORS_ORIGINS = exports.DBURL = exports.PORT = void 0;
// dotenv.config();
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var checkEnv = function (envVar, defaultValue) {
    if (!process.env[envVar]) {
        if (defaultValue) {
            return defaultValue;
        }
        throw new Error("Please define the Enviroment variable\"" + envVar + "\"");
    }
    else {
        return process.env[envVar];
    }
};
exports.PORT = parseInt(checkEnv("PORT"), 10);
exports.DBURL = checkEnv("DBURL");
exports.CORS_ORIGINS = ["http://localhost:3000"];
//# sourceMappingURL=config.js.map