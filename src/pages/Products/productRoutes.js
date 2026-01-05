import React from 'react';
import { useNavigate } from 'react-router-dom';

// Quick navigation helper for product pages
export const productRoutes = [
    { id: 'marketplace', name: 'Ecoswaech EV Marketplace' },
    { id: 'ecocharge', name: 'EcoCharge Mobile App' },
    { id: 'fleet-platform', name: 'Fleet Energy & Charging Platform' },
    { id: 'smart-chargers', name: 'Ecoswaech Smart Chargers' },
    { id: 'ecomenter', name: 'EcoMeter IoT Gateway' }
];

// Example usage in a component:
// const navigate = useNavigate();
// navigate(`/products/${productId}`);
