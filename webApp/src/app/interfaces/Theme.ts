export enum ThemeType{
    light = 1,
    dark = 2
}

export interface Theme{
    klass: string,
    name: string,
    type: ThemeType
}