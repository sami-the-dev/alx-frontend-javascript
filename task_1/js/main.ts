interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: boolean;
  location: string;
  [propertyName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
};

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
