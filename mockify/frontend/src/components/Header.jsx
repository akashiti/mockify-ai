import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 pt-6 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                    <Link to="/">
                        <img src="/logo.png" alt="Mockify AI" className="h-24 w-auto hover:opacity-90 transition-opacity" />
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full">
                    <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</Link>
                    <Link to="/aboutus" className="text-sm font-medium text-white transition-colors">About Us</Link>
                    <Link to="/features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</Link>
                    <Link to="/pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</Link>
                </nav>
                <div>
                    <button className="px-6 py-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 text-white font-medium transition-all text-sm">
                        Log In
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;