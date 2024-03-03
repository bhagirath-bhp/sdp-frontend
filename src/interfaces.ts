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
