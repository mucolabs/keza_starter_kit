declare namespace App.Data.Auth {
export type LoginData = {
email: string;
password: string;
remember: boolean;
request: any | null;
};
export type PasswordData = {
current_password: string;
password: string;
};
export type PasswordResetData = {
token: string;
email: string;
password: string;
password_confirmation: string;
};
export type PasswordResetLinkData = {
email: string;
};
export type SignupData = {
name: string;
email: string;
password: string;
password_confirmation: string;
};
}
declare namespace App.Pages {
export type LoginCreatePage = {
canResetPassword: boolean;
status: string | null;
};
}
