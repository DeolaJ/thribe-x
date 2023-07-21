import { useMutation } from "@tanstack/react-query";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { AVATARS_BUCKET } from "../constants/supabase";

import { generateAlphaNumericString } from "../utils/format";

export const uploadAvatar = async (avatar, supabaseClient) => {
    const fileExt = avatar.type.split("/").pop();
    const defaultFilename = avatar.name.split(".")[0];
    const version = generateAlphaNumericString(8);
    const fileName = `${defaultFilename}-${version}.${fileExt}`;

    let { data, error: uploadError } = await supabaseClient.storage
        .from(AVATARS_BUCKET)
        .upload(fileName, avatar);

    if (uploadError) {
        throw uploadError;
    }

    return data;
};

export default function useUploadAvatar() {
    const supabaseClient = useSupabaseClient();

    return useMutation((avatar) => uploadAvatar(avatar, supabaseClient));
}
