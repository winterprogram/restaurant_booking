import prisma from "../config/mongo.config";
import { IRestaurant, IMenu } from "../types";

export class RestaurantRepository {
  async findAllRestaurants() {
    return prisma.restaurant.findMany();
  }

  async findMenuByRestaurantId(restaurantId: string) {
    return prisma.menu.findMany({
      where: { restaurantId },
      include: { items: true },
    });
  }

  async findRestaurantByName(name: string) {
    return prisma.restaurant.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });
  }

  async findRestaurantsByDish(dish: string) {
    return prisma.restaurant.findMany({
      where: {
        menus: {
          some: {
            items: {
              some: {
                name: {
                  contains: dish,
                  mode: "insensitive",
                },
              },
            },
          },
        },
      },
    });
  }

  async createRestaurant(restaurant: IRestaurant) {
    return prisma.restaurant.create({ data: restaurant });
  }
}
