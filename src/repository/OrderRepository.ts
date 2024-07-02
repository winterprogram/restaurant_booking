import prisma from "../config/mongo.config";
import { IOrder } from "../types";

export class OrderRepository {
  async placeOrder(order: IOrder): Promise<IOrder> {
    return prisma.order.create({
      data: {
        userId: order.userId,
        items: { create: order.items },
        total: order.total,
        tax: order.tax,
        createdAt: order.createdAt,
      },
      include: { items: true },
    });
  }

  async getOrderById(orderId: string): Promise<IOrder | null> {
    return prisma.order.findUnique({
      where: { id: orderId },
      include: { items: true },
    });
  }
}
