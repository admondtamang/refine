import { LiveEvent } from ".";

export type LiveModeProps = {
    liveMode?: "auto" | "manual" | "off";
    onLiveEvent?: (event: LiveEvent) => void;
    liveParams?: {
        id?: string;
        [key: string]: any;
    };
};

export type ILiveModeContext = LiveModeProps;
export type ILiveModeContextProvider = LiveModeProps;