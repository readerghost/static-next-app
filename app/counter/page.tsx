"use client";
import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Counter</h1>
            <p className="text-2xl p-5">{counter}</p>
            <div className="flex gap-4">
            <button className="bg-black text-white" onClick={() => setCounter(counter + 1)}>Increment</button>

            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            </div>
        </div>
    );
}