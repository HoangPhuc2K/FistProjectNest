/// <reference types="multer" />
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
export declare class PhotoService {
    private photos;
    constructor(photos: Repository<Photo>);
    getPhotos(): Promise<Repository<Photo>>;
    postPhoto(file: Express.Multer.File): Promise<import("typeorm").InsertResult>;
    putPhoto(id: number, photo: Photo): Promise<import("typeorm").UpdateResult>;
    deletePhoto(id: number): Promise<import("typeorm").DeleteResult>;
}
