import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, filter } from 'rxjs/operators';
import { Query, Student } from './studenttypes';
@Injectable()
export class StudentService {

  constructor(private apollo: Apollo) { }

  getAllStudents() {
    return this.apollo.watchQuery<Query>({
      pollInterval: 500,
      query: gql`
        query allStudents{
          allStudents {
            id
            enrollmentno
            rollno
            name
            surname
            email
            contact
          }
        }
      `,
    })
      .valueChanges
      .pipe(
        map(result => result.data.allStudents)
      );
  }
}
