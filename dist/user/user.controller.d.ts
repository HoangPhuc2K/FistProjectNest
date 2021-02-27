import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<any>;
    createUser(user: CreateUserDto): Promise<import("typeorm").InsertResult>;
    delete(id: number): Promise<any>;
    update(id: number, user: User): Promise<any>;
    findOne(id: number): Promise<any>;
}
