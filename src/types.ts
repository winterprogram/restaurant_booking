export enum CuisineType {
    ITALIAN = "Italian",
    JAPANESE = "Japanese",
    AMERICAN = "American",
    MEXICAN = "Mexican",
    VEGETARIAN = "Vegetarian",
    CHINESE = "Chinese",
    INDIAN = "Indian",
    SEAFOOD = "Seafood",
    BBQ = "BBQ",
    SPANISH = "Spanish",
    FRENCH = "French",
    GREEK = "Greek"
  }
  
  export interface IRestaurant {
    id: string;
    name: string;
    location: string;
    cuisine: CuisineType;
    rating: number;
  }
  
  export interface IMenu {
    id: string;
    restaurantId: string;
    items: IMenuItem[];
  }
  
  export interface IMenuItem {
    id: string;
    name: string;
    price: number;
    menuId: string;
  }
  
  export interface IUser {
    id: string;
    email: string;
    name: string;
    carts: ICart[];
  }
  
  export interface ICart {
    id: string;
    userId: string;
    items: ICartItem[];
    total: number;
    tax: number;
  }
  
  export interface ICartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    cartId: string;
  }
  
  export interface IOrder {
    id: string;
    userId: string;
    items: IOrderItem[];
    total: number;
    tax: number;
    createdAt: Date;
  }
  
  export interface IOrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    orderId: string;
  }
  