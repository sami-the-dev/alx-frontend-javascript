namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
  export class Cpp extends Subject {
    getRequirements() {
      return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher() {
      return this.teacher.experienceTeachingC > 1
        ? `Available Teacher: ${this.teacher.firstName}`
        : "No available teacher";
    }
  }
}
