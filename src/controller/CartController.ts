import { Request, Response } from "express";
import { ICart } from "../types";
import { CartService } from "../service/CartService";

export class CartController {
  private cartService: CartService;

  constructor() {
    this.cartService = new CartService();
  }

  async addItemToCart(req: Request, res: Response): Promise<void> {
    const cart: ICart = req.body;
    try {
      const updatedCart = await this.cartService.addItemToCart(cart);
      res.status(201).json(updatedCart);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getCart(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      const cart = await this.cartService.getCartByUserId(userId);
      if (!cart) {
        return res.status(404).json({ error: "Cart not found" });
      }
      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
