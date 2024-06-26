import React from 'react';
import { ThumbsUp, Tag, Clock, Award } from 'react-feather';

const WhyUs: React.FC = () => {
    const reasons: { icon: JSX.Element; bgColor:string; title:string; description:string }[] = [
        {
            icon: <ThumbsUp color="white"/>,
            bgColor: 'bg-yellow-400',
            title: 'Mobil Lengkap',
            description: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.'
        },
        {
            icon: <Tag color="white"/>,
            bgColor: 'bg-red-500',
            title: 'Harga Murah',
            description: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.'
        },
        {
            icon: <Clock color="white"/>,
            bgColor: 'bg-blue-700',
            title: 'Layanan 24 Jam',
            description: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.'
        },
        {
            icon: <Award color="white"/>,
            bgColor: 'bg-green-500',
            title: 'Sopir Profesional',
            description: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.'
        }
    ];

    return (
        <section id="WhyUs">
            <div className="relative px-8 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-16">
                <div className="mb-8 lg:mb-12 text-center sm:text-left">
                    <h2 className="mb-6 font-sans font-bold text-3xl leading-normal">
                        Why Us?
                    </h2>
                    <p className="text-base font-sans">
                        Mengapa harus pilih Binar Car Rental?
                    </p>
                </div>
                <div className="grid gap-4 md:gap-6 lg:grid-cols-4 md:grid-cols-2">
                    {reasons.map((reason, index) => (
                        <div key={index} className="px-4 py-4 border-2 rounded-lg lg:px-6 lg:py-6">
                            <div className={`flex items-center justify-center w-10 h-10 mb-4 rounded-full ${reason.bgColor}`}>
                                {reason.icon}
                            </div>
                            <h3 className="mb-3 text-lg sm:text-xl font-bold font-sans">
                                {reason.title}
                            </h3>
                            <p className="font-sans text-base text-justify">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyUs;