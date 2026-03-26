export enum ThemeType {
    light = 1,
    dark = 2,
    auto = 3,
    system = 4,
}

export interface Theme {
    id: number,
    klass: string,
    name: string,
    type: ThemeType
}