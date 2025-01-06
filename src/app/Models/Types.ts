export interface UserDetailsState {
    email: string;
    userId: number;
    name: string;
    usertype: string;
    isUserDataCompleted: boolean;
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