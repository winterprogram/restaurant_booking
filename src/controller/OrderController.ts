import { Request, Response } from 'express';
import { IOrder } from '../types';
import { OrderService } from '../service/OrderService';

export class OrderController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  async placeOrder(req: Request, res: Response): Promise<void> {
    const order: IOrder = req.body;
    try {
      const newOrder = await this.orderService.placeOrder(order);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getOrder(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const order = await this.orderService.getOrderById(id);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
