# Restaurant Booking System

This project is a backend for a restaurant booking system using Node.js, Express.js, TypeScript, Prisma, and MongoDB. It supports various functionalities such as searching for restaurants, viewing menus, processing orders, and managing a cart.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Seeding](#database-seeding)
- [Testing](#testing)
- [Error Handling](#error-handling)
- [Docker Setup](#docker-setup)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- Search for restaurants by name and dishes
- View restaurant details and menu with prices
- Add items to the cart
- Place an order
- View the total bill with taxes

## Technology Stack

- **Backend Framework**: Node.js (Express.js)
- **Database**: MongoDB
- **ORM**: Prisma
- **Language**: TypeScript
- **Validation**: Joi
- **Containerization**: Docker

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd restaurant-booking-system



restaurant-booking-system/
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   ├── seed.ts
├── src/
│   ├── controllers/
│   │   ├── CartController.ts
│   │   ├── OrderController.ts
│   │   ├── RestaurantController.ts
│   ├── middlewares/
│   │   ├── errorHandler.ts
│   │   ├── notFound.ts
│   │   ├── validateRequest.ts
│   ├── repositories/
│   │   ├── CartRepository.ts
│   │   ├── OrderRepository.ts
│   │   ├── RestaurantRepository.ts
│   ├── services/
│   │   ├── CartService.ts
│   │   ├── OrderService.ts
│   │   ├── RestaurantService.ts
│   ├── types/
│   │   ├── index.ts
│   ├── utils/
│   ├── routes.ts
│   ├── index.ts
├── .env
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── tsconfig.json
├── README.md
