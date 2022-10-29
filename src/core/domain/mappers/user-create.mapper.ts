import { Mapper } from 'src/core/base/mapper';
import { UserCreateDto } from 'src/shared/dtos/user-create.dto';
import { UserEntity } from 'src/core/domain/entities/user.entity';

export class UserCreateMapper extends Mapper<UserCreateDto, UserEntity> {
  public mapFrom(data: UserCreateDto): UserEntity {
    const user = new UserEntity();

    user.name = data.name;
    user.email = data.email;
    user.password = data.password;

    return user;
  }

  public mapTo(data: UserEntity): UserCreateDto {
    const user = new UserCreateDto();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;

    return user;
  }
}
