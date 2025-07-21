export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
  firstName: "Ahmed",
  lastName: "Samy",
  experienceTeachingC: 10,
};
console.log("C++");
cpp.setTeacher(cTeacher);
cpp.getRequirements();
cpp.getAvailableTeacher();
console.log("Java");
cpp.setTeacher(cTeacher);
cpp.getRequirements();
cpp.getAvailableTeacher();
console.log("React");
cpp.setTeacher(cTeacher);
cpp.getRequirements();
cpp.getAvailableTeacher();
