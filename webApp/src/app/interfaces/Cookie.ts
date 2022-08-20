export enum CookieType{
    LocalStorage = 1,
    GoogleAnalytics = 2
}

export enum CookieCategory {
    Necessary = 1,
    Preferences = 2,
    Analytics = 3
}

export interface Cookie {
    id: string,
    name: string,
    description: string,
    type: CookieType,
    category: CookieCategory,
    isEnabled : boolean
}