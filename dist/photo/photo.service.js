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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/user.entity");
const typeorm_2 = require("typeorm");
const photo_entity_1 = require("./photo.entity");
let PhotoService = class PhotoService {
    constructor(photos) {
        this.photos = photos;
    }
    async getPhotos() {
        return await this.photos;
    }
    async postPhoto(file) {
        const name = file.originalname;
        const photo = [{
                id: 0,
                name: name,
            }];
        return await this.photos.insert(photo);
    }
    async putPhoto(id, photo) {
        const photoId = Number(id);
        const tempPhoto = await this.photos.findOne(photoId);
        if (!tempPhoto) {
            throw new common_1.NotFoundException();
        }
        return await this.photos.update(id, photo);
    }
    async deletePhoto(id) {
        const photoId = Number(id);
        const photo = await this.photos.findOne(photoId);
        if (!photo) {
            throw new common_1.NotFoundException();
        }
        return await this.photos.delete(id);
    }
};
PhotoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(photo_entity_1.Photo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PhotoService);
exports.PhotoService = PhotoService;
//# sourceMappingURL=photo.service.js.map