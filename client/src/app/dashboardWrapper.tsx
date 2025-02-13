"use client";
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AuthProvider from './authProvider'; // Adjusted import path
import StoreProvider, { useAppSelector } from '@/app/redux'; // Adjusted import path


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className="flex min-h-screen w-full bg-yellow-50 text-gray-900">
            {/* sidebar */}
            <Sidebar />
            <main className={`dark:bg-dark-bg flex w-full flex-col bg-yellow-50 ${isSidebarCollapsed ? "" : "md:pl-64"}`}>
                <Navbar />
                {children}
            </main>
        </div>
    );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <AuthProvider>
                <DashboardLayout>{children}</DashboardLayout>
            </AuthProvider>
        </StoreProvider>
    );
};

export default DashboardWrapper;