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
