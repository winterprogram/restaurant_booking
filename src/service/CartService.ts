import { CartRepository } from '../repository/CartRepository';
import { ICart } from '../types';

export class CartService {
  private cartRepository: CartRepository;

  constructor() {
    this.cartRepository = new CartRepository();
  }

  async addItemToCart(cart: ICart): Promise<ICart> {
    return this.cartRepository.addItemToCart(cart);
  }

  async getCartByUserId(userId: string): Promise<ICart | null> {
    return this.cartRepository.getCartByUserId(userId);
  }
}
