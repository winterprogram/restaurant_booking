import { OrderRepository } from "../repository/OrderRepository";
import { IOrder } from "../types";

export class OrderService {
  private orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  async placeOrder(order: IOrder): Promise<IOrder> {
    return this.orderRepository.placeOrder(order);
  }

  async getOrderById(orderId: string): Promise<IOrder | null> {
    return this.orderRepository.getOrderById(orderId);
  }
}
