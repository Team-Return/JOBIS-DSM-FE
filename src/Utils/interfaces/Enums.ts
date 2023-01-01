export type IHiringProgress =
  | "DOCUMENT"
  | "AI"
  | "CODING_TEST"
  | "LIVE_CODING"
  | "TASK"
  | "PERSONALITY"
  | "TECH_INTERVIEW"
  | "CULTURE_INTERVIEW"
  | "FINAL_INTERVIEW";

export const HiringProgressTypeChanger = (type: string) => {
  switch (type) {
    case "서류전형":
      return "DOCUMENT";
    case "AI 면접":
      return "AI";
    case "코딩테스트":
      return "CODING_TEST";
    case "라이브코딩":
      return "LIVE_CODING";
    case "과제 제출":
      return "TASK";
    case "인적성테스트":
      return "PERSONALITY";
    case "기술면접":
      return "TECH_INTERVIEW";
    case "걸쳐면접":
      return "CULTURE_INTERVIEW";
    case "최종면접":
      return "FINAL_INTERVIEW";
  }
};
