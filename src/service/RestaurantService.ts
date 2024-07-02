import { RestaurantRepository } from "../repository/RestaurantRepository";
import { IRestaurant, IMenu } from "../types";

export class RestaurantService {
  private restaurantRepository: RestaurantRepository;

  constructor() {
    this.restaurantRepository = new RestaurantRepository();
  }

  async getAllRestaurants() {
    return this.restaurantRepository.findAllRestaurants();
  }

  async getRestaurantMenu(restaurantId: string) {
    return this.restaurantRepository.findMenuByRestaurantId(restaurantId);
  }

  async searchRestaurantsByName(name: string) {
    return this.restaurantRepository.findRestaurantByName(name);
  }

  async searchRestaurantsByDish(dish: string) {
    return this.restaurantRepository.findRestaurantsByDish(dish);
  }

  async createRestaurant(restaurant: IRestaurant) {
    return this.restaurantRepository.createRestaurant(restaurant);
  }
}
