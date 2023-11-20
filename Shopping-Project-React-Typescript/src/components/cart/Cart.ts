
export interface ListValueItem {
    amount : number
    title : string          //FOR THE ARRAY WE CREATED 
    price : number
}

export interface ShoppingCart {
    category : string;
    description : string;
    id : number;
    image : string;                           //FOR THE DATAS WE GET FROM API
    price : number;
    rating : {
        rage : number;
        count : number
    };
    title : string;
}

