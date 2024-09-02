## Simple Goods an E-Commerce Platform

Welcome to Simple Goods—an intergalactic E-Commerce platform built using the MERN stack! Whether you’re selling moon rocks, cosmic trinkets, or quantum quokkas, this README will guide you through the cosmic journey of setting up and understanding our celestial marketplace.

## Table of Contents

Overview
Features
Modules
Getting Started
Folder Structure
Environment Variables
Running Locally
Deployment
Contributing
License

## Overview

Simple Goods aims to connect buyers and sellers across the cosmos. Here’s what our star-studded platform offers:

Admin Panel: Add and manage products like a cosmic curator.
Client Panel: Let users explore the celestial catalog and shop till their warp drives overheat.
Server Panel: The cosmic engine that powers it all—integrated with MongoDB, Express.js, and Node.js.

## Features

Product Management:
Admins can add, edit, and delete products via the Admin Panel.
Each product has a name, description, price, and captivating image from the far reaches of the universe.
Shopping Experience:
Users can browse products on the Client Panel.
Add items to their cosmic shopping cart and proceed to checkout.
User Authentication:
Secure sign-up and login using cosmic credentials (powered by JWT tokens).
Admins have special access to the Admin Panel.
Responsive Design:
Works seamlessly on all devices—from pocket-sized wormholes to massive black holes.

## Modules

Admin Panel (Vite + React):
Located in the admin-panel directory.
Cosmic admins can:
Add new products.
Edit existing product details.
View the cosmic product list.
Client Panel (React):
Located in the client-panel directory.
Users can:
Explore the celestial catalog.
Add products to their cart.
Proceed to checkout.
Server Panel (Express.js + Node.js):
Located in the server-panel directory.
Handles:
Product data storage and retrieval via MongoDB.
User authentication and authorization.
API endpoints for communication between panels.

## Getting Started

Clone the Repository:
git clone https://github.com/Jadaunshiv/Capstone.git

Install Dependencies:
cd simple-goods
npm install

Set Up Environment Variables:
Create a .env file based on .env.example.
Fill in your MongoDB connection string, JWT secret, and other relevant details.
Launch the Cosmic Server:
npm run server

Launch the Client and Admin Panels:
npm run client
npm run admin

Explore the Cosmos:
Visit https://simple-goods-client.onrender.com for the Client Panel.
Visit https://simple-goods-admin.onrender.com for the Admin Panel.

## Folder Structure

simple-goods/
├── admin-panel/ # Admin Panel (Vite + React)
├── client-panel/ # Client Panel (React)
├── server-panel/ # Server Panel (Express.js + Node.js)
└── README.md # You're here!
