import { html, TemplateResult } from "lit-element";
export interface ROUTE {
    name: string,
    template: TemplateResult,
    onAuthFail: string,
    onAuthSuccess?: string,
    waitAuthenticationLoading?: boolean,
    tabs?: boolean
}

export function getRoute(name: string): ROUTE {
    let result = ROUTES.find(route => route.name === name);
    if(!result) result = ROUTES.find(route => route.name === "");
    return result!;
}

export const ROUTES: ROUTE[] = [
    {
        name: "",
        template: html`<web-home></web-home>`,
        onAuthFail: "register",
        onAuthSuccess: "home",
        tabs: true
    }
]