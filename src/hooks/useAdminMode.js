import { useState, useEffect } from 'react';

const useAdminMode = () => {
    const [adminMode, setAdminMode] = useState(sessionStorage.getItem("adminMode") || "false");
    const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem("admin") || "false");

    const toggleAdminMode = () => {
        const newMode = adminMode === "true" ? "false" : "true";
        sessionStorage.setItem("adminMode", newMode);
        setAdminMode(newMode);
        
        window.dispatchEvent(new CustomEvent('adminModeChanged', { 
            detail: { adminMode: newMode } 
        }));
    };

    useEffect(() => {
        const handleAdminModeChange = (event) => {
            setAdminMode(event.detail.adminMode);
        };

        window.addEventListener('adminModeChanged', handleAdminModeChange);
        return () => window.removeEventListener('adminModeChanged', handleAdminModeChange);
    }, []);

    return { adminMode, isAdmin, toggleAdminMode };
};

export default useAdminMode;