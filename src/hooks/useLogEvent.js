import { usePlausible } from "next-plausible";

export default function useLogEvent() {
    const plausible = usePlausible();

    return ({ action, props }) => {
        plausible(action, {
            props: {
                timestamp: Date().toString(),
                ...props,
            },
        });
    };
}
