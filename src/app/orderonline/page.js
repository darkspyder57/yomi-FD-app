"use client";

import { useState } from 'react';
import Modal from 'react-modal';

const restaurantData = {
    Pizza: [
        { id: 1, name: "Pizza Place 1" },
        { id: 2, name: "Pizza Place 2" },
        { id: 3, name: "Pizza Place 3" },
        { id: 4, name: "Pizza Place 4" },
        { id: 5, name: "Pizza Place 5" },
    ],
    Burger: [
        { id: 1, name: "Burger Joint 1" },
        { id: 2, name: "Burger Joint 2" },
        { id: 3, name: "Burger Joint 3" },
        { id: 4, name: "Burger Joint 4" },
        { id: 5, name: "Burger Joint 5" },
    ],
    "French Fries": [
        { id: 1, name: "Fries Spot 1" },
        { id: 2, name: "Fries Spot 2" },
        { id: 3, name: "Fries Spot 3" },
        { id: 4, name: "Fries Spot 4" },
        { id: 5, name: "Fries Spot 5" },
    ],
    Chicken: [
        { id: 1, name: "Chicken Shack 1" },
        { id: 2, name: "Chicken Shack 2" },
        { id: 3, name: "Chicken Shack 3" },
        { id: 4, name: "Chicken Shack 4" },
        { id: 5, name: "Chicken Shack 5" },
    ],
};

const menuItems = [
    { id: 1, name: "Menu Item 1" },
    { id: 2, name: "Menu Item 2" },
    { id: 3, name: "Menu Item 3" },
    { id: 4, name: "Menu Item 4" },
];

export default function OrderOnline() {
    const [selectedFood, setSelectedFood] = useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (restaurant) => {
        setSelectedRestaurant(restaurant);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedRestaurant(null);
        setModalIsOpen(false);
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-24">
                <h1 className="text-5xl font-bold text-center mb-8">Order Online</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {['Pizza', 'Burger', 'French Fries', 'Chicken'].map((food) => (
                        <div
                            key={food}
                            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer p-4 text-center food-item"
                            onClick={() => setSelectedFood(food)}
                        >
                            <img
                                className="w-full h-48 object-cover mb-4"
                                src={`/assets/img/${food.toLowerCase().replace(' ', '-')}.jpg`}
                                alt={food}
                            />
                            <h2 className="text-2xl font-semibold">{food}</h2>
                        </div>
                    ))}
                </div>

                {selectedFood && (
                    <div className="w-full max-w-2xl mb-8">
                        <h2 className="text-3xl font-bold mb-4">Top 5 {selectedFood} Restaurants</h2>
                        <ul className="list-disc pl-5">
                            {restaurantData[selectedFood].map((restaurant) => (
                                <li key={restaurant.id} className="mb-2 restaurant-list">
                                    <button
                                        className="text-black-500 restaurant-list"
                                        onClick={() => openModal(restaurant)}
                                    >
                                        {restaurant.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Restaurant Menu"
                    className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <h2 className="text-2xl font-bold mb-4">
                        Menu at {selectedRestaurant?.name}
                    </h2>
                    <form>
                        {menuItems.map((item) => (
                            <div key={item.id} className="mb-4">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    {item.name}
                                </label>
                            </div>
                        ))}
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        </>
    );
}
