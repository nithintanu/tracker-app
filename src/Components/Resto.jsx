


import React from 'react';
import RestaurantCard from './Restaurants'; 

const restaurants = [ {
    restaurant_name: "La Petite Boulangerie",
    cuisine_type: "French Bakery",
    location: "123 Main Street, Paris",
    image_url: ""
  },
  {
    restaurant_name: "Mamma Mia Pizzeria",
    cuisine_type: "Italian",
    location: "456 Elm Street, Rome",
    image_url: "https://example.com/mamma_mia_pizzeria.jpg"
  },
  {
    restaurant_name: "Sushi Zen",
    cuisine_type: "Japanese",
    location: "789 Sakura Avenue, Tokyo",
    image_url: "https://example.com/sushi_zen.jpg"
  },
  {
    restaurant_name: "Taco Fiesta",
    cuisine_type: "Mexican",
    location: "101 Guacamole Boulevard, Cancun",
    image_url: "https://example.com/taco_fiesta.jpg"
  } ];

export default function RestaurantList() {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={index} restaurant={restaurant} />
      ))}
    </div>
  );
}
