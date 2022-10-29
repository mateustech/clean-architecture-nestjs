import { UsersCacheMemoryRepository } from './data/cache-memory/users-cache-memory.repository';
import { CreateUserUseCase } from './use-cases/create-user.usecase';
import { Module } from '@nestjs/common';
import { UsersControllers } from './presentation/users.controller';
import { UserRepository } from './core/repositories/user.repository';

@Module({
  imports: [],
  controllers: [UsersControllers],
  providers: [
    CreateUserUseCase,
    {
      provide: UserRepository,
      useClass: UsersCacheMemoryRepository,
    },
  ],
})
export class AppModule {}
