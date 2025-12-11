import React from 'react';
import Header from '../components/Header';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <section className="pt-40 pb-24 max-w-7xl mx-auto px-6 space-y-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold">
                            <div className="w-8 h-[2px] bg-indigo-400"></div> About Us
                        </div>
                        <h1 className="text-5xl font-bold leading-tight">
                            We are <span className="animate-shine">Mockify AI</span>
                        </h1>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Mockify AI is revolutionizing the way job seekers prepare for interviews. Born from the need to make high-quality interview coaching accessible to everyone, we leverage advanced generative AI to simulate realistic interview scenarios.
                            </p>
                            <p>
                                Our intelligent system adapts to your responses, providing real-time feedback on your speech patterns, technical accuracy, and soft skills.
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <img src="/about.jpg" alt="About Mockify AI" className="relative rounded-2xl shadow-2xl w-full object-cover" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;