"use client"

import { useState } from 'react';
import Modal from 'react-modal';

const restaurantsData = {
    Breakfast: [
        { id: 1, name: "Breakfast Restaurant 1" },
        { id: 2, name: "Breakfast Restaurant 2" },
        { id: 3, name: "Breakfast Restaurant 3" },
        { id: 4, name: "Breakfast Restaurant 4" },
        { id: 5, name: "Breakfast Restaurant 5" },
    ],
    Lunch: [
        { id: 1, name: "Lunch Restaurant 1" },
        { id: 2, name: "Lunch Restaurant 2" },
        { id: 3, name: "Lunch Restaurant 3" },
        { id: 4, name: "Lunch Restaurant 4" },
        { id: 5, name: "Lunch Restaurant 5" },
    ],
    Dinner: [
        { id: 1, name: "Dinner Restaurant 1" },
        { id: 2, name: "Dinner Restaurant 2" },
        { id: 3, name: "Dinner Restaurant 3" },
        { id: 4, name: "Dinner Restaurant 4" },
        { id: 5, name: "Dinner Restaurant 5" },
    ],
};

export default function Dining() {
    const [selectedMeal, setSelectedMeal] = useState(null);
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
            <div className="dining">
                <h1 className="dining__title text-5xl font-bold text-center mb-8 mt-20">Dining</h1>
                <div className="dining__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
                    {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                        <div key={meal} className="dining__content__item bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelectedMeal(meal)}>
                            <img
                                className="dining__content__item__image w-full h-48 object-cover"
                                src={`/assets/img/${meal.toLowerCase()}.jpg`}
                                alt={meal}
                            />
                            <div className="p-4">
                                <h2 className="dining__content__item__title text-2xl font-semibold mb-2">{meal}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedMeal && (
                    <div className="restaurants-list m-8">
                        <h2 className="text-3xl font-bold mb-4">Top 5 {selectedMeal} Restaurants</h2>
                        <ul className="list-disc pl-5">
                            {restaurantsData[selectedMeal].map((restaurant) => (
                                <li key={restaurant.id} className="mb-2 restaurant-list">
                                    <button className="text-black-500 restaurant-list" onClick={() => openModal(restaurant)}>
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
                    contentLabel="Book a Table"
                    className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                    <h2 className="text-2xl font-bold mb-4">Book a Table at {selectedRestaurant?.name}</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="guestCount" className="block text-gray-700">Guest Count:</label>
                            <input type="number" minLength="1" maxLength="5" id="guestCount" name="guestCount" className="w-full px-3 py-2 border rounded" min="1" max="10" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="timeSlot" className="block text-gray-700">Select Slot:</label>
                            <select id="timeSlot" name="timeSlot" className="w-full px-3 py-2 border rounded" required>
                                <option value="7am-9am">7am - 9am</option>
                                <option value="9am-11am">9am - 11am</option>
                                <option value="11am-1pm">11am - 1pm</option>
                                <option value="1pm-3pm">1pm - 3pm</option>
                                <option value="3pm-5pm">3pm - 5pm</option>
                                <option value="5pm-7pm">5pm - 7pm</option>
                                <option value="7pm-9pm">7pm - 9pm</option>
                            </select>
                        </div>
                        <div className="flex justify-end">
                            <button type="button" onClick={closeModal} className="mr-2 px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Book</button>
                        </div>
                    </form>
                </Modal>
            </div>
        </>
    );
}
