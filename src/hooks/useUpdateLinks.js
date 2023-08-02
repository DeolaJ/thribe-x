import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { LINKS_TABLE } from "../constants/supabase";

const updateLinks = async (link, supabaseClient) => {
    const { data, error } = await supabaseClient.from(LINKS_TABLE).upsert(link).select();

    if (error) {
        throw error;
    }

    return data;
};

const updateLinksOrder = async (links, supabaseClient) => {
    const { data, error } = await supabaseClient.from(LINKS_TABLE).upsert(links).select();

    if (error) {
        throw error;
    }

    return data;
};

const deleteLink = async (linkId, supabaseClient) => {
    const { data, error } = await supabaseClient.from(LINKS_TABLE).delete().eq("id", linkId);

    if (error) {
        throw error;
    }

    return data;
};

export function useDeleteLinksById(id) {
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

    return useMutation((links) => updateLinksOrder(links, supabaseClient), {
        onSuccess: () => {
            queryClient.invalidateQueries(["links"]);
        },
    });
}

export default function useUpdateLinks() {
    const supabaseClient = useSupabaseClient();
    const queryClient = useQueryClient();

    return useMutation((link) => updateLinks(link, supabaseClient), {
        onSuccess: () => {
            queryClient.invalidateQueries(["links"]);
        },
    });
}
