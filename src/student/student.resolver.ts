import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private StudentService: StudentService) {}

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.StudentService.getStudent(id);
  }

  @Query((returns) => [StudentType])
  students() {
    return this.StudentService.getStudents();
  }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput
  ) {
    return this.StudentService.createStudent(createStudentInput);
  }
}
