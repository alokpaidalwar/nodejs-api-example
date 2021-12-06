"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = require("./config");
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var favorite_router_1 = require("./routes/favorite.router");
var profile_router_1 = require("./routes/profile.router");
var simulator_router_1 = require("./routes/simulator.router");
mongoose_1.default
    .connect("" + config_1.DBURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(function () {
    console.log("Connected to DB " + config_1.DBURL);
});
var app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: config_1.CORS_ORIGINS }));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(favorite_router_1.router);
app.use(profile_router_1.router);
app.use(simulator_router_1.router);
app.listen(config_1.PORT, function () {
    return console.log("\u2705  Ready on port http://localhost:" + config_1.PORT);
});
//# sourceMappingURL=api.js.map