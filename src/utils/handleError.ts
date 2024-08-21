import { toast } from "sonner";

export const handleError = (error: any) => {
    console.error(error.data.message);
    toast("Error: " + error.data.message);
};