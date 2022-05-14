export class Potter {
    private pay=0;
    private unitprice=8
    private discount = [1, 0.95, 0.9, 0.8, 0.75];
    price(books:number[])
    {
        if (books.length<1)
            return 0;
        this.pay= books.length* this.unitprice * this.discount[books.length-1];
        return this.pay;
    }
}

