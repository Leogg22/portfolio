import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="relative flex flex-col items-center gap-2 mt-10 md:mt-20 text-gray-400">
                {/* Version */}
                <p className="text-sm">v1.1.0-beta</p>

                {/* Made by */}
                <div className="text-sm">
                    Made by
                    <a
                        // href="https://www.linkedin.com/in/leonardo-gonzalez-53230432b/"
                        // target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-primary font-semibold ml-1 bg-primary"
                    >
                        Leo
                        <span className="absolute -bottom-1 left-0 right-0 mx-auto h-4 bg-primary opacity-50 blur-lg z-[-1]"></span>
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm">© 2024 All rights reserved</p>
            </footer>
        </div>
    );
}

export default Footer;
