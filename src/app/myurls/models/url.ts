export class Url {
    _id: String
    longUrl: String
    shortUrl: String
    urlCode: String
    date : Date
}

export class UrlPagination {
    docs: Url[];
    total: number;
    pages: number;
    page:number;
    limit:number;

}