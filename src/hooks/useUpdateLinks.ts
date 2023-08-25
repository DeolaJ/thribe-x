import { SupabaseClient, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { LINKS_TABLE } from "../constants/supabase";

import { Link } from "../types";

const updateLinks = async (link: Link, supabaseClient: SupabaseClient) => {
    const { data, error } = await supabaseClient.from(LINKS_TABLE).upsert(link).select();

    if (error) {
        throw error;
    }

    return data;
};

const updateLinksOrder = async (links: Link[], supabaseClient: SupabaseClient) => {
    const { data, error } = await supabaseClient.from(LINKS_TABLE).upsert(links).select();

    if (error) {
        throw error;
    }

    return data;
};

const deleteLink = async (linkId: string, supabaseClient: SupabaseClient) => {
    const { data, error } = await supabaseClient.from(LINKS_TABLE).delete().eq("id", linkId);

    if (error) {
        throw error;
    }

    return data;
};

export function useDeleteLinksById(id: string) {
    const supabaseClient = useSupabaseClient();
    const queryClient = useQueryClient();

    return useMutation(() => deleteLink(id, supabaseClient), {
        onSuccess: () => {
            queryClient.invalidateQueries(["links"]);
        },
    });
}

export function useUpdateLinksOrder() {
    const supabaseClient = useSupabaseClient();
    const queryClient = useQueryClient();

    return useMutation((links: Link[]) => updateLinksOrder(links, supabaseClient), {
        onSuccess: () => {
            queryClient.invalidateQueries(["links"]);
        },
    });
}

export default function useUpdateLinks() {
    const supabaseClient = useSupabaseClient();
    const queryClient = useQueryClient();

    return useMutation((link: Link) => updateLinks(link, supabaseClient), {
        onSuccess: () => {
            queryClient.invalidateQueries(["links"]);
        },
    });
}
