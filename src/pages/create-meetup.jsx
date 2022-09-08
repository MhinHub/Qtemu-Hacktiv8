// Create meetup form with tailwind css

import React from "react";
import { useState } from "react";

export default function CreateMeetup() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

        const meetupData = {
            title,
            image,
            address,
            description,
        };

        console.log(meetupData);

        setTitle("");
        setImage("");
        setAddress("");
        setDescription("");
    };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
                    Create New Meetup
                </h1>
                <form className="mt-6" onSubmit={submitHandler}>
                    <div className="mb-2">
                        <label
                            htmlFor="title"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="image"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Image URL
                        </label>
                        <input
                            type="link"
                            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={image}
                            onChange={(event) => setImage(event.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="address"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="description"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Description
                        </label>
                        <textarea
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border"
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                                
                            }
                        />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="px-4 py-2 font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-600"
                        >
                            Create Meetup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

