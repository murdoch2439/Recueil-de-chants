export interface Paragraph {
    paragraphs:{
        first?:string,
        second?:string,
        third?:string,
        fourth?:string,
        fifth?:string,
        sixth?:string,
        seventh?:string
        eighth?:string,
        nineth?:string,
        tenth?:string,
        eleventh?:string,
    }
}
export interface Refrain {
    refrains:{
        first?:string,
        second?:string,
        third?:string,
        fourth?:string,
        fifth?:string,
        sixth?:string,
        seventh?:string
        eighth?:string,
        nineth?:string,
        tenth?:string,
        eleventh?:string,

    }
}
export interface Song {
    number:string,
    title:string,
    paragraphs: Paragraph,
    refrains:Refrain ,

}
