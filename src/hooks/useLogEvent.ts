import { usePlausible } from "next-plausible";

export default function useLogEvent() {
    const plausible = usePlausible();

    return ({ action, props }: { action: string; props?: { timestamp?: string } }) => {
        plausible(action, {
            props: {
                timestamp: Date().toString(),
                ...props,
            },
        });
    };
}
