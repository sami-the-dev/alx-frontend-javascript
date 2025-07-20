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
