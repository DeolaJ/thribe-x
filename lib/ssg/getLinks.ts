import { LINKS_TABLE } from "../../src/constants/supabase";
import supabase from "../supabase";

export const getLinks = async () => {
    const { data, error } = await supabase
        .from(LINKS_TABLE)
        .select("*")
        .order("order", { ascending: true });

    if (error) {
        throw new Error(error.message);
    }

    return data;
};
