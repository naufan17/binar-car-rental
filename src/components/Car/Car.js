import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'
import Loading from '../Loading/Loading';

export default function Car(){
    const [cars, setCars] = useState([]);
    const [driverType, setDriverType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [capacity, setCapacity] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);

    const getCars = async () => {
        try {
            const result = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
            setCars(result.data)
            setLoading(false);
        } catch (err) {
            console.error(err)
        }
    }

    const validateFields = () => {
        const newErrors = {};
        if (!date) newErrors.date = "Date is required";
        if (!time) newErrors.time = "Time is required";
        if (!capacity) newErrors.capacity = "Capacity is required";
        return newErrors;
    }

    const handleFilter = () => {
        const validateErrors = validateFields();
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
            return;
        }
        setErrors({});

        const dateTime = new Date(`${date}T${time}Z`);
        const filtered = cars.filter(car => 
            car.available && 
            car.availableAt <= dateTime.toISOString() &&
            car.capacity >= parseInt(capacity)
        );
        setCars(filtered);
    }

    useEffect(() => {
        getCars();
    }, []);

    return (
        <section id="Search">
            <div className="relative px-8 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-6">
                <div className="flex rounded-lg shadow-lg">
                    <div className="grid grid-cols-4 md:grid-cols-9">
                        <div className="inline-block col-span-2 p-5 md:p-6">
                            <label htmlFor="driver" className="inline-block font-sans mb-3">Tipe Driver</label>
                            <select 
                                id="driver"
                                name="driver" 
                                value={driverType}
                                onChange={(e) => setDriverType(e.target.value)}
                                className="flex-grow w-full h-10 px-4 bg-white font-sans border border-gray-300 rounded focus:outline-none focus:border-green-500 focus:ring-1 ring-green-500"
                            >
                                <option value="" disabled selected hidden>Pilih Driver</option>
                                <option value="true" className="hover:bg-green-300 hover:text-green-600">Dengan Sopir</option>
                                <option value="false" className="hover:bg-green-300 hover:text-green-600">Tanpa Sopir</option>  
                            </select>
                        </div>    
                        <div className="inline-block col-span-2 p-5 md:p-6">
                            <label htmlFor="date" className="inline-block font-sans mb-3">Tanggal</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                placeholder="Pilih Tanggal"
                                className={`flex-grow w-full h-10 px-4 bg-white font-sans border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-green-500 focus:ring-1 ring-green-500`}
                            />
                            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                        </div>    
                        <div className="inline-block col-span-2 p-5 md:p-6">
                            <label htmlFor="time" className="inline-block font-sans mb-3">Waktu Jemput/Ambil</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                placeholder="Pilih Waktu"
                                className={`flex-grow w-full h-10 px-4 bg-white font-sans border ${errors.time ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-green-500 focus:ring-1 ring-green-500`}
                            />
                            {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
                        </div>    
                        <div className="inline-block col-span-2 p-5 md:p-6">
                            <label htmlFor="capacity" className="inline-block font-sans mb-3">Jumlah Penumpang</label>
                            <input
                                type="number"
                                id="capacity"
                                name="capacity"
                                value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                                placeholder="Jumlah Penumpang"
                                className={`flex-grow w-full h-10 px-4 p-2 bg-white font-sans border ${errors.capacity ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-green-500 focus:ring-1 ring-green-500`}
                            />
                            {errors.capacity && <p className="text-red-500 text-sm">{errors.capacity}</p>}
                        </div>
                        <div className="inline-block col-span-2 md:col-span-1 p-5 md:p-6 md:mt-9">
                            <button 
                                id="submit-btn"
                                type="button" 
                                onClick={handleFilter}
                                className="inline-flex items-center justify-center h-10 px-4 md:px-1 font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600"
                            >
                               Cari Mobil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {loading ? (
                <Loading/>
            ) : (
                <div className="relative px-8 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-6">
                    <div className="grid gap-4 md:gap-6 lg:grid-cols-3 md:grid-cols-2">
                        {cars.map(car =>
                            <Card
                                id = {car.id}
                                image = {car.image}
                                manufacture = {car.manufacture}
                                type = {car.type} 
                                rentPerDay = {car.rentPerDay}
                                description = {car.description}
                                capacity = {car.capacity}
                                transmission = {car.transmission}
                                year = {car.year}
                            />
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}