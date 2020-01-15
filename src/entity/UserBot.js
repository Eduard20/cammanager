"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var UserBot = /** @class */ (function () {
    function UserBot() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], UserBot.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserBot.prototype, "tg_id");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserBot.prototype, "username");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserBot.prototype, "full_name");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserBot.prototype, "tech_name");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserBot.prototype, "last_name");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserBot.prototype, "bridge");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserBot.prototype, "driver");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserBot.prototype, "type");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserBot.prototype, "createdon");
    __decorate([
        typeorm_1.Column({
            "default": '{}',
            transformer: {
                to: function (value) {
                    return JSON.stringify(value);
                },
                from: function (value) {
                    if (value === '') {
                        value = '{}';
                    }
                    var result;
                    try {
                        result = JSON.parse(value);
                    }
                    catch (e) {
                        result = {};
                    }
                    return result;
                }
            }
        }),
        __metadata("design:type", String)
    ], UserBot.prototype, "sheets");
    UserBot = __decorate([
        typeorm_1.Entity()
    ], UserBot);
    return UserBot;
}());
exports.UserBot = UserBot;
