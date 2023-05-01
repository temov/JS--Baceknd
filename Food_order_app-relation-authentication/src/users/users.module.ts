import { Module } from "@nestjs/common/decorators";
import { UsersService } from "./users.service";
import {UsersController} from "./users.controller";

@Module({

    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService],
})

export class UsersModule {}