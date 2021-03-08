export interface Perfume {
    source: string,
    title: string,
    brand: string,
    img_url: string,
    gender: { male: number, female: number, shared: number },
    launching_year: string,
    launching_month: string,
    comment: {
        fragrantica: string,
        wheel: string
    },
    feeling: [
        { title: string, string: number, percent: number },
        { title: string, string: number, percent: number },
        { title: string, string: number, percent: number }
    ],
    origin_scents: {
        main: string,
        sub: string[],
        unknown: []
    },
    notes: {
        top: { main: { title: string, count: number }, sub: [] },
        middle: { main: { title: string, count: number }, sub: [] },
        base: {
            main: { title: string, count: number },
            sub: [{ title: string, count: number }]
        },
        unknown: any
    },
    score: number,
    density: string,
    fashion_style: any,
    feeling_scents: [],
    good_time: { day: number, night: number },
    season: { spring: number, summer: number, fall: number, winter: number },
    reviews: [],
    bottle_color: string,
    all_ingredients: [],
    price: any[],
    type: string,
    allergies: [],
    _id: string
}