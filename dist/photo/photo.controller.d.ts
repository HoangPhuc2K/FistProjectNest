/// <reference types="multer" />
import { PhotoService } from './photo.service';
export declare class PhotoController {
    private photoService;
    constructor(photoService: PhotoService);
    findAll(): Promise<import("typeorm").Repository<import("./photo.entity").Photo>>;
    uploadFile(id: number, photo: Express.Multer.File): void;
    updateFile(id: number, photo: Express.Multer.File): void;
    deleteFile(): void;
}
