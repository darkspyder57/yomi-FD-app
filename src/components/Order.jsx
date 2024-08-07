"use client"

import Link from "next/link"
import Card from "@/components/Card"
export default function Order() {
    return (
        <section id="order">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-7xl font-bold text-center mb-2 mt-3 order-title" style={{color: "black", borderColor: "black"}}>Order</h1>
                <div className="flex justify-center items-center h-screen space-x-10">
                    <div className="img-container">
                        <Link href="/orderonline">
                        <Card
                            imageSrc="/assets/img/order-online-3.jpg"
                            title="Order Online"
                            description="Order your favourite food online from your favorite restaurants"
                        />
                        </Link>
                    </div>
                    <div className="img-container">
                        <Link href="/dining">
                        <Card
                            imageSrc="/assets/img/dining-2.jpg"
                            title="Dining"
                            description="Dine-in with your loved ones and have a beautiful meal"
                        />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}