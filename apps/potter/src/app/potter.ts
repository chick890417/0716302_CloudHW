export class Potter {
    private pay=0;
    private unitprice=8;
    private discount = [1, 0.95, 0.9, 0.8, 0.75];
    private cart :number[][] =[];
    price(books:number[])
    {
        if (books.length<1)
            return 0;
        for (let i=0; i<books.length;i++)
        {
            var team = 0;
            for(let j=0; j<this.cart.length; j++)
            {
                if(!this.cart[j].includes(books[i])) 
                {
                    team = 1;
                    this.cart[j].push(books[i]);
                    break;
                }
            }
            if(!team) {
                this.cart.push([books[i]]);
            }
        }
        for(let i=0; i<this.cart.length; i++) 
        {
            this.pay += this.calPrice(i);
        }
    return this.pay;
    }
    private calPrice(i:number) 
    {
        return this.cart[i].length * this.unitprice * this.discount[this.cart[i].length-1];
    }
}

