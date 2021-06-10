import md from "mobile-detect";
import { INITIAL_STATE } from "./initial.state";
import { CLEAR_STORE } from "./store";

(window as any).mobileDetect = new md(window.navigator.userAgent);

export const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case CLEAR_STORE:
            state = action.state;
            return state;
        default:
            return state;
    }
};
