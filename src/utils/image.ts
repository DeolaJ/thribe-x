import { SupabaseClient } from "@supabase/auth-helpers-react";

export async function getImageAttributes(file: File) {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
        try {
            let width, height, src;
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function () {
                const image = new Image();
                image.src = reader.result as string;
                image.onload = function () {
                    height = image.height;
                    width = image.width;
                    src = image.src;
                    resolve({ height, width, src });
                };
            };
        } catch (e) {
            reject({ e });
        }
    });
}

export function getBucketUrl(supabaseClient: SupabaseClient, storageBucket: string, path: string) {
    const filename = path.split("/").pop() || "";
    const {
        data: { publicUrl },
    } = supabaseClient.storage.from(storageBucket).getPublicUrl(filename);

    if (!publicUrl) {
        console.log("Error fetching image: ", filename);
        return "";
    }
    return publicUrl;
}
