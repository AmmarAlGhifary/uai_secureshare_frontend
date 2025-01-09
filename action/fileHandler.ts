"use server";

import { withActionHandler } from '@/components/utils/ActionUtils'
import { GlobalApiCall } from '@/components/utils/GlobalApiCalls';

const API_BASE_URL = process.env.APIBASE_URL;

export const send_file_list = async ({
    page, 
    limit
}: {
    page: number;
    limit: number;
}) => {
    return withActionHandler(async () => {
        const response = await GlobalApiCall({
            url: `${API_BASE_URL}/list/send?page=${page}&limit=${limit}`,
            options: {
                method: 'get',
                cache: 'no-store'
            }
        })
        return response;
    })
}
export const receive_file_list = async ({
    page,
    limit
}: {
    page: number,
    limit: number
}) => {
    return withActionHandler(async () => {
        const response = await GlobalApiCall({
            url: `${API_BASE_URL}/list/receive?page=${page}&limit = ${limit}`,
            options: {
                method: 'get',
                cache: 'no-store'
            }
        })
        
        return response;
    })
}

export const searchEmail = async (query: string) => {
    return withActionHandler(async () => {
        const response = await GlobalApiCall({
            url: `${API_BASE_URL}/search/email?query=${query}`,
            options: {
                method: 'get',
                cache: 'no-store'
            }
        })
        return response;
    })
}