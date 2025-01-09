"use server";

import { withActionHandler } from "@/components/ui/utils/ActionUtils";
import { GlobalApiCall } from "@/components/ui/utils/GlobalApiCalls";

const API_BASE_URL = process.env.API_BASE_URL;

export const getMe = async () => {
    return withActionHandler(async () => {
        const response = await GlobalApiCall({
            url: `${API_BASE_URL}/users/me`,
            options: {
                method: 'get',
                cache: 'no-store'
            }
        })
        return response;
    })
}

export const updateUserName = async ({ name }: { name: string; }) => {
    return withActionHandler(async () => {
        const response = await GlobalApiCall({
            url: `${API_BASE_URL}/users/name`,
            options: {
                method: `put`,
                body: JSON.stringify({ name }),
                cache: `no-store`
            }
        })
    })
}
