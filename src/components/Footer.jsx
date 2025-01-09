import React from 'react';


const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-700 w-full text-white text-center py-4">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;