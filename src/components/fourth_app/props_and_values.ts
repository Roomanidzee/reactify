export interface Gender {
    label: string;
    value: string;
}

export interface FormValues {
    nickname: string;
    gender: Array<Gender>;
    phoneNumber: string;
    email: string;
    textStory: string;
    filmsAndSeries: string;
    message: string;
}

export interface FormProps {
    nickname?: string;
    gender?: Array<Gender>;
    phoneNumber?: string;
    email?: string;
    textStory?: string;
    filmsAndSeries?: string;
    message?: string;
}
