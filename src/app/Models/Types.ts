export interface UserDetailsState {
    email: string;
    userId: number;
    name: string;
    usertype: string;
    isUserDataComplete: boolean;
    updateUserDetails: (userData: UserData) => void;
    clearUserDetails: () => void;
  }


  export interface UserData {
    email: string;
    userId: number | string;
    name: string;
    userType: string;
    isUserDataComplete: boolean | string;
  }

  export interface UserModel{

    userId: string;
    institutionName: string;
    grade: string;
    semester: string;
    phoneNumber: string;
    academicBackground: string;
}

export interface LearningCard {
  pastPaperId: string;
  title: string;
  year: string;
  subject: string;
}

export interface PastPaper{
    id : number;
    question: string;
    answer: string;
}

export interface PastPaperState {
    pastPapers: PastPaper[];
    setPastPapers: (data: PastPaper[]) => void;
    clearPastPapers: () => void;
}


export interface LearningCardState {
  cards: LearningCard[];
}