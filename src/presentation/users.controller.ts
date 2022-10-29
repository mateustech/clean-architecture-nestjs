import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserCreateDto } from 'src/shared/dtos/user-create.dto';
import { UserCreatedDto } from 'src/shared/dtos/user-created.dto';
import { CreateUserUseCase } from 'src/use-cases/create-user.usecase';

@Controller('/users')
export class UsersControllers {
  constructor(private createUserUserCase: CreateUserUseCase) {}

  @Post()
  public create(@Body() user: UserCreateDto): Observable<UserCreatedDto> {
    return this.createUserUserCase.execute(user);
  }
}
