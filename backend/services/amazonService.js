 /* Interact with Amazon's Product Advertising API to fetch product */

 const axios = require('axios');
 require('dotenv').config();

 exports.getSuggestions = async (budget, usage) => { 
    const apiKey = process.env.AMAZON_API_KEY;
    const apiSecret = process.env.AMAZON_API_SECRET;
    //Use Amazon's Product Avertising API to fetch product details based on budget and usage
    //Note: This is a placeholder function. You'll need to implement actual API calls.
    return {
        RAM: '16GB DDR4 3200MHz',
        SSD: '1TB NVMe SSD',
        Motherboard: 'ASUS ROG Strix B450-F Gaming',
        PowerSupply: 'Corsair RM850x 850W',
        GPU: 'NVIDIA GeForce RTX 3070',
        CPU: 'AMD Ryzen 5 5600X',
        CPUCooler: 'Cooler Master Hyper 212'
    };
 };