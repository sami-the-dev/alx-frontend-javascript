interface MajorCredits {
  credits: number;
  brand: string;
}
interface MinorCredits {
  credits: number;
  brand: string;
}

const sumMajorCredits = (subject1: number, subject2: number): MajorCredits => {
  return {
    brand: "Major",
    credits: subject1 + subject2,
  };
};
const sumMinorCredits = (subject1: number, subject2: number): MinorCredits => {
  return {
    brand: "minor",
    credits: subject1 + subject2,
  };
};
