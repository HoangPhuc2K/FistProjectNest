import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private users;
    constructor(users: Repository<User>);
    getUsers(): Promise<any>;
    postUser(user: any): Promise<import("typeorm").InsertResult>;
    getUserById(id: number): Promise<any>;
    putUserById(id: number, user: User): Promise<any>;
    deleteUserById(id: number): Promise<any>;
}
