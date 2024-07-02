import prisma from "../config/mongo.config";
import { ICart } from "../types";



export class CartRepository {
  async addItemToCart(cart: ICart): Promise<ICart> {
    return prisma.cart.create({
      data: {
        userId: cart.userId,
        items: { create: cart.items },
        total: cart.total,
        tax: cart.tax,
      },
      include: { items: true },
    });
  }

  async getCartByUserId(userId: string): Promise<ICart | null> {
    return prisma.cart.findFirst({
      where: { userId },
      include: { items: true },
    });
  }
}
