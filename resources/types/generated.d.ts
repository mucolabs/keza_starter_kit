declare namespace App.Data {
export type FlashData = {
type: App.Enums.FlashMessageType;
message: string;
};
export type ProfileData = {
name: string;
email: string;
};
export type ShareData = {
user: App.Data.UserData;
toast: App.Data.FlashData | null;
alert: App.Data.FlashData | null;
};
export type UserData = {
id: number;
name: string;
email: string;
email_verified_at: string | null;
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
export type FlashKey = 'alert' | 'toast';
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
export type ProfileEditPage = {
mustVerifyEmail: boolean;
};
}
