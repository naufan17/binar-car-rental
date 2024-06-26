import React from 'react';
import { Check } from 'react-feather'

const Service: React.FC = () => {
    const services: string[] = [
        "Sewa Mobil Dengan Supir di Bali 12 Jam",
        "Sewa Mobil Lepas Kunci di Bali 24 Jam",
        "Sewa Mobil Jangka Panjang Bulanan",
        "Gratis Antar - Jemput Mobil di Bandara",
        "Layanan Airport Transfer / Drop In Out"
    ];

    return (
        <section id="OurServices">
            <div className="relative px-8 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="flex justify-center">
                        <img className="object-cover h-full" src="images/img_service.png" alt="Service" />
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <h2 className="mb-6 font-bold font-sans text-3xl leading-normal justify-center">
                                Best Car Rental for any kind of trip in Sleman!
                            </h2>
                            <p className="text-base text-justify font-sans justify-center">
                                Sewa mobil di Sleman bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, 
                                kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                            </p>
                        </div>
                        <ul className="space-y-5">
                            {services.map((service, index) => (
                                <li key={index} className="flex text-base font-sans">
                                    <span className="mr-4 bg-blue-200 rounded-full p-1">
                                        <Check color="blue"/>
                                    </span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;