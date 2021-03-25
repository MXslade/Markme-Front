import { JsxElement } from "typescript";

interface MenuOption {
    name: string;
    link: string; // possibly modifiable
    icon: React.ForwardRefExoticComponent<any>;
}

export default MenuOption;
