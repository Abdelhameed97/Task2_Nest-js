import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {Employee} from './entities/employee.entity'; 
import { filter } from 'rxjs';

@Injectable()
export class EmployeesService {


  private employees: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Developer',
      salary: 50000,
    },
    {
      id: 2,
      name: 'John Doe',
      position: 'Software Developer',
      salary: 50000,
    },
   
  ];

  
  create(employee: Employee) {
    employee.id = this.employees.length + 1;
    this.employees.push(employee);
    return employee;

  }

  findAll() {
    return  this.employees;
  }

  findOne(id: number) {
   let employee = this.employees.find(employee => employee.id === id);
    return employee;

  }

  update(id: number, updateEmployee:Employee){
   
    let employee = this.employees.find(employee => employee.id === id);
    if (employee) {
      employee.name = updateEmployee.name;
      employee.position = updateEmployee.position;
      employee.salary = updateEmployee.salary;
      return employee;
  }
}

  remove(id: number) {
   let employee = this.employees.find(employee => employee.id === id);
    if (employee) {
      this.employees = this.employees.filter(employee => employee.id !== id);
      return employee;
    }
  }

  }