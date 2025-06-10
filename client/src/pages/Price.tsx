import React from "react";
import { CheckCircle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const pricingOptions = [
    {
        name: "Single Cup",
        cups: 1,
        price: "$6.99",
        delivery: "+ delivery",
        highlight: false,
        note: "Mix & match any flavours",
        freeDelivery: false,
    },
    {
        name: "Trio Pack",
        cups: 3,
        price: "$18.99",
        delivery: "+ delivery",
        highlight: false,
        note: "Mix & match any flavours",
        freeDelivery: false,
    },
    {
        name: "Family Pack",
        cups: 5,
        price: "$32.99",
        delivery: "+ Free delivery in GTA",
        highlight: true,
        note: "Mix & match any flavours",
        freeDelivery: true,
    },
];

export default function PricePage() {
    return (
        <section className="min-h-[70vh] py-16 gradient-bg flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4 text-center">Choose Your Pack</h2>
            <p className="text-lg text-gray-700 mb-10 text-center max-w-xl">All packs let you mix & match any flavours from our menu. Perfect for busy mornings, meal prep, or sharing with family!</p>
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingOptions.map((option, idx) => (
                    <motion.div
                        key={option.name}
                        className={`rounded-2xl card-hover shadow-lg bg-white/90 border border-gray-200 p-8 flex flex-col items-center relative ${option.highlight ? "ring-2 ring-accent scale-105 z-10" : ""}`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {option.highlight && (
                            <span className="absolute top-4 right-4 bg-accent text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                                <Truck className="w-4 h-4" /> Free GTA Delivery
                            </span>
                        )}
                        <h3 className="text-xl font-semibold text-primary mb-2 font-poppins">{option.name}</h3>
                        <div className="text-5xl font-bold text-accent mb-2">{option.price}</div>
                        <div className="text-base text-gray-600 mb-4">{option.delivery}</div>
                        <ul className="text-sm text-gray-700 mb-6 flex flex-col gap-2">
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> {option.note}</li>
                        </ul>
                        <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-lg font-semibold text-base py-2 mt-auto">Order Now</Button>
                    </motion.div>
                ))}
            </div>
            <div className="mt-10 text-center text-gray-500 text-sm max-w-lg mx-auto">
                <span className="font-semibold text-primary">Note:</span> Delivery is available across GTA. For Family Pack, delivery is free within GTA. For other packs, delivery charges apply. You can select any flavours from our menu and mix & match in your pack.
            </div>
        </section>
    );
}
