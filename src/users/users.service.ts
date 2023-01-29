import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Geromel',
            username:'geromito',
            password:'secure' //use node.bcrypt.js for passwords
        },
        {
            id: 2,
            name: 'Suarez',
            username:'luisito',
            password:'dumbo'
        },
    ];


    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username == username)
    }
}
