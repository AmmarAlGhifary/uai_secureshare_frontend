import { useCurrentUserServer } from "@/hooks/use-curent-user-server"
import { RedirectError } from "./ErrorUtils"; 

interface GlobalApiCallProps {
    url: string;
    options?: RequestInit;
}

export const GlobalApiCall = async ({ 
    url,
    options = {},
}: GlobalApiCallProps) => {
    try {
        const session = await useCurrentUserServer();
        
        const token = session?.accessToken ?? null;
        const response = await fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
                ...options.headers,
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status ==- 401) {
            throw new RedirectError(302, "/logout", "Session Sudah Habis");
        }

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `HTTP error! status: ${response.status}, message: ${errorText}`
            );
        }

        return await response.json();
    } catch (error) {
        console.error ("fetch error", error);
        throw error;
    }
}