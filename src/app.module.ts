import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [UserModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
