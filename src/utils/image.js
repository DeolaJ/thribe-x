export async function getImageAttributes(file) {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
        try {
            let width, height, src;
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function () {
                const image = new Image();
                image.src = reader.result;
                image.onload = function () {
                    height = this.height;
                    width = this.width;
                    src = this.src;
                    resolve({ height, width, src });
                };
            };
        } catch (e) {
            reject({ e });
        }
    });
}

export function getBucketUrl(supabaseClient, storageBucket, path) {
    const filename = path.split("/").pop();
    const {
        data: { publicUrl },
    } = supabaseClient.storage.from(storageBucket).getPublicUrl(filename);

    if (!publicUrl) {
        console.log("Error fetching image: ", filename);
        return "";
    }
    return publicUrl;
}
