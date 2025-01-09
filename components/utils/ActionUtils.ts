import { redirect } from 'next/navigation';
import { HandleApiError } from './HandleApiErrors';

export const withActionHandler = async <T>(action : () => Promise<T>) => {
    try {
        return await action();
    } catch (error) {
        const { status, message, location } = HandleApiError(error);
        
        if (location) {
            redirect(location);
        }

        return {
            status,
            message,
        };
    }
};