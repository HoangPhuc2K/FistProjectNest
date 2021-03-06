"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const Logger_middleware_1 = require("./common/middleware/Logger.middleware");
const user_module_1 = require("./user/user.module");
const photo_controller_1 = require("./photo/photo.controller");
const photo_module_1 = require("./photo/photo.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(Logger_middleware_1.LoggerMiddleware)
            .forRoutes({ path: 'users', method: common_1.RequestMethod.GET });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [user_module_1.UserModule, typeorm_1.TypeOrmModule.forRoot(), photo_module_1.PhotoModule,],
        controllers: [app_controller_1.AppController, photo_controller_1.PhotoController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map