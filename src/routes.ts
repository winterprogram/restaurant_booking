import { Router } from "express";
import Joi from "joi";
import { CartController } from "./controller/CartController";
import { OrderController } from "./controller/OrderController";
import { RestaurantController } from "./controller/RestaurantController";
import { validateRequest } from "./middlewares/validateRequest";

const router = Router();
const restaurantController = new RestaurantController();
const cartController = new CartController();
const orderController = new OrderController();

const restaurantSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  cuisine: Joi.string()
    .valid(
      "Italian",
      "Japanese",
      "American",
      "Mexican",
      "Vegetarian",
      "Chinese",
      "Indian",
      "Seafood",
      "BBQ",
      "Spanish",
      "French",
      "Greek"
    )
    .required(),
  rating: Joi.number().min(0).max(5).required(),
});

const cartSchema = Joi.object({
  userId: Joi.string().required(),
  items: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
      })
    )
    .required(),
  total: Joi.number().required(),
  tax: Joi.number().required(),
});

const orderSchema = Joi.object({
  userId: Joi.string().required(),
  items: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
      })
    )
    .required(),
  total: Joi.number().required(),
  tax: Joi.number().required(),
});

router.get(
  "/restaurants",
  restaurantController.getRestaurants.bind(restaurantController)
);
router.get(
  "/restaurants/:id/menu",
  restaurantController.getRestaurantMenu.bind(restaurantController)
);
router.get(
  "/restaurants/search",
  restaurantController.searchRestaurants.bind(restaurantController)
);
router.post(
  "/restaurants",
  validateRequest(restaurantSchema),
  restaurantController.createRestaurant.bind(restaurantController)
);
router.post(
  "/cart",
  validateRequest(cartSchema),
  cartController.addItemToCart.bind(cartController)
);

router.get("/cart/:userId", cartController.getCart.bind(cartController));

router.post(
  "/order",
  validateRequest(orderSchema),
  orderController.placeOrder.bind(orderController)
);
router.get("/order/:id", orderController.getOrder.bind(orderController));

export default router;
