interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

interface IIsDirector {
  (employee: TeacherInterface | DirectorInterface): boolean;
}
enum Subjects {
  "Math",
  "History",
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "workFromHome ";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workFromHome(): string {
    return "Cannot work from home";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(
  salary: number | string
): DirectorInterface | TeacherInterface {
  if (Number(salary) < 500) return new Teacher();
  return new Director();
}

const isDirector: IIsDirector = (
  employee: TeacherInterface | DirectorInterface
) => {
  return employee instanceof Director;
};

const executeWork = (employee: TeacherInterface | DirectorInterface) => {
  if (isDirector(employee)) {
    return (employee as DirectorInterface).workDirectorTasks();
  } else if (isDirector(employee)) {
    return (employee as TeacherInterface).workTeacherTasks();
  }
};

const teachClass = (todayClass: Subjects) => {
  if (todayClass === Subjects.Math) {
    return "Teaching Math";
  } else if (todayClass === Subjects.History) {
    return "Teaching History";
  }
};
