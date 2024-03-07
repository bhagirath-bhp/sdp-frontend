export interface FormField {
  label: string;
  type: string;
  value: string;
  className: string,
}
export interface FormProps {
  fields: FormField[];
  formType: string;
}
export interface UserBadgeProps {
  name: string,
  profileURL: string
}

export interface SuccessResponse {
  data: {
    name: string;
    email: string;
    profileURL: string;
    success: boolean;
    token: string;
    userId: string;
  };
}

export interface PaginationInterface{
  pageNo: number,
  pageSize: number
}

export interface ErrorResponse {
  error: {
    data: {
      message: string
    };
    status: number;
  };
}

export interface UserState {
  // Define initial user state here
}
export interface clientState{
  fname: string,
  lname: string,
  email: string,
  phone: number,
  createdAt: boolean,
  verified: boolean
}
