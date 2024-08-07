"use client"

import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();

    const handleOrderFoodClick = () => {
        router.push('/orderonline');
    };

    const handleMakeReservationClick = () => {
        router.push('/dining');
    };

    return (
        <main id="hero-section" className="hero" style={{ backgroundImage: `url(${'assets/img/hero-bg-2.jpg'})`, backgroundSize: 'cover' }}>
            {/* <!-- hero content --> */}
            <div className="hero-content">
                <h1 className="hero-heading">Eat the best</h1>
                <p className="hero-line italic">Explore and understand the culture more by tasting the amazing dishes of that culture</p>

                <div className="search location">
                    <input type="text" className="search-box" placeholder="Search Restaurants, Cuisine..... " />
                    <button className="search-btn locate-btn"><i className="fa-solid fa-location-crosshairs"></i></button>
                </div>

                <div className="hero-action-btn-container">
                    <button className="btn" onClick={handleOrderFoodClick}>Order Food</button>
                    <p className="or">or</p>
                    <button className="btn transparent" onClick={handleMakeReservationClick}>Make reservation</button>
                </div>
            </div>
        </main>

    );
}
