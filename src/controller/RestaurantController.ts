import { Request, Response } from "express";
import { IRestaurant } from "../types";
import { RestaurantService } from "../service/RestaurantService";

export class RestaurantController {
  private restaurantService: RestaurantService;

  constructor() {
    this.restaurantService = new RestaurantService();
  }

  async getRestaurants(req: Request, res: Response): Promise<void> {
    try {
      const restaurants = await this.restaurantService.getAllRestaurants();
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getRestaurantMenu(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const menu = await this.restaurantService.getRestaurantMenu(id);
      res.json(menu);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async searchRestaurants(req: Request, res: Response) {
    const { name, dish } = req.query;
    try {
      let restaurants;
      if (name) {
        restaurants = await this.restaurantService.searchRestaurantsByName(
          name as string
        );
      } else if (dish) {
        restaurants = await this.restaurantService.searchRestaurantsByDish(
          dish as string
        );
      } else {
        return res.status(400).json({ error: "Invalid search criteria" });
      }
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createRestaurant(req: Request, res: Response): Promise<void> {
    const restaurant: IRestaurant = req.body;
    try {
      const newRestaurant = await this.restaurantService.createRestaurant(
        restaurant
      );
      res.status(201).json(newRestaurant);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
