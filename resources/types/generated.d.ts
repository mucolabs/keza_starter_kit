declare namespace App.Data {
export type AlertData = {
type: App.Enums.FlashMessageType;
message: string;
};
export type ShareData = {
user: App.Data.UserData;
toast: App.Data.ToastData | null;
alert: App.Data.AlertData | null;
};
export type ToastData = {
type: App.Enums.FlashMessageType;
message: string;
};
export type UserData = {
name: string;
email: string;
};
}
declare namespace App.Data.Auth {
export type LoginData = {
email: string;
password: string;
remember: boolean;
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
declare namespace App.Enums {
export type FlashMessageType = 'success' | 'info' | 'error' | 'warning';
export type NotificationType = 'success' | 'info' | 'error' | 'warning';
}
declare namespace App.Pages {
export type LoginCreatePage = {
canResetPassword: boolean;
status: string | null;
};
export type PasswordResetCreatePage = {
email: string;
token: string;
};
export type PasswordResetLinkCreatePage = {
status: string | null;
};
}
