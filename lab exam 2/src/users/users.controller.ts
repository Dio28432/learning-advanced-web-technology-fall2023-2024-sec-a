import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Query,
    ParseIntPipe,
    ValidationPipe,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get('/')
    getUsers(@Query('subString') subString: string): Promise<User[]> {
        if (subString) return this.userService.getUsers(subString);
        else return this.userService.findAll();
    }
    @Post('')
    createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
}
