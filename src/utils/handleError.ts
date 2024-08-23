import { toast } from "sonner";


interface ApiError {
    data?: {
        message?: string;
    };
}

export const handleError = (error: unknown) => {
    if (error && typeof error === "object" && "data" in error) {
        const apiError = error as ApiError;
        if (apiError.data && typeof apiError.data.message === "string") {
            console.error(apiError.data.message);
            toast("Error: " + apiError.data.message);
        } else {
            console.error("An unexpected error occurred");
            toast("Error: An unexpected error occurred");
        }
    } else {
        console.error("An unexpected error occurred");
        toast("Error: An unexpected error occurred");
    }
};