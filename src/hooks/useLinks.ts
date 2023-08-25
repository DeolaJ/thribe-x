import { SupabaseClient, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";

import { LINKS_TABLE } from "../constants/supabase";

import { Link } from "../types";

export const fetchTXLinks = async (supabaseClient: SupabaseClient): Promise<Link[]> => {
    const { data, error } = await supabaseClient
        .from(LINKS_TABLE)
        .select("*")
        .order("order", { ascending: true });

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export function useLinks(initialLinks: Link[]) {
    const supabaseClient = useSupabaseClient();

    return useQuery(["links"], () => fetchTXLinks(supabaseClient), {
        staleTime: 10 * (60 * 1000), // 10 mins
        initialData: initialLinks,
    });
}
