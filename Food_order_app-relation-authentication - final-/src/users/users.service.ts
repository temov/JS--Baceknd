import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable ()

export class UsersService{
    
private users : User[] =[

    {
        id:1,
        username:'Tom Cruise',
        password:'tc123'
    },

    {  
        id:2,
        username:'Bradd Pitt',
        password:'bp123'
    },

    {   
        id:3,
        username:'Clint Eastwood',
        password:'ce123'
    }
]

      async findOneUser(username:string){

        const foundUser = this.users.find(user => user.username === username);
        return foundUser;
}


}