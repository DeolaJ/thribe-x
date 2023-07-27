import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";

import { LINKS_TABLE } from "../constants/supabase";

export const fetchTXLinks = async (supabaseClient) => {
    const { data, error } = await supabaseClient
        .from(LINKS_TABLE)
        .select("*")
        .order("order", { descending: false });

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export function useLinks(initialLinks) {
    const supabaseClient = useSupabaseClient();

    return useQuery(["links"], () => fetchTXLinks(supabaseClient), {
        staleTime: 10 * (60 * 1000), // 10 mins
        initialData: initialLinks,
    });
}
