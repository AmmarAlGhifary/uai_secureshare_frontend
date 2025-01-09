import { ApiError, RedirectError } from "./ErrorUtils";

export const HandleApiError = (
    error: unknown,
) : { status: number; message: string; location?: string}  => {
    if (error instanceof ApiError) {
        return { status: error.status, message: error.message };
    } else if (error instanceof RedirectError) {
        return {
            status: error.status,
            message: error.message,
            location: error.location
        };
    } else if (error instanceof Error) {
        if (error.message.includes("Json deresialize error")) {
            return {
                status: 400,
                message: "Invali data format received from the server",
            };
        } else if (error.message.includes("Old Password Is Incorrect")) {
            return { status: 400, message: "Old password is Incorrect"};
        } else if (error.message.includes("HTTP error! status:")) {
            const statusMatch = error.message.match(/status: (\d+)/);
            const messageMatch = error.message.match(/message: (.+)/);
            const status = statusMatch ? parseInt(statusMatch[1], 10) : 400;
            let message = messageMatch ? messageMatch[1] : "An error ocurred";

            try {
                const json = JSON.parse(message);
                message = json.message || "An error occurred";
            } catch (e) {
                message = message;
                console.log(e);
            }

            return {status, message};
        } else {
            return {status: 400, message: error.message};
        }
    } else {
        return { status: 500, message: "An unexpected error occurred." };
    }
};