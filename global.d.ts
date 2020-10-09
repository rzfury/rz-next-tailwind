/**
 * RazorWind UI
 * 
 * RZFury's Tailwind UI Components
 * 
 */

declare namespace RazorWindProps {
  interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string | JSX.Element[];
    role?: 'danger' | 'default' | 'primary';
    outline?: boolean;
    rounded?: boolean;
    block?: boolean;
  }

  namespace Card {
    interface Card {
      asBody?: boolean;
      shadow?: boolean;
    }
  }

  namespace Form {
    interface Form extends React.FormHTMLAttributes<HTMLFormElement> { }

    interface Group {
      children: JSX.Element[] | JSX.Element;
    }

    interface AutoComplete {
      label?: string;
      source?: ((keyword: string) => string[]) | ((keyword: string) => AutoCompleteOption[]) | string[] | AutoCompleteOption[] | any;
      minChar?: number;
      disabled?: boolean;
      readonly?: boolean;
    }
    
    type AutoCompleteOption = { label: string, value: string };

    interface Checkbox extends React.InputHTMLAttributes<HTMLInputElement> {
      label?: string;
      className?: string;
      containerProps?: React.HTMLAttributes<HTMLLabelElement>;
      backdropClassName?: string;
      iconClassName?: string;
      labelClassName?: string;
    }

    interface Radio extends React.InputHTMLAttributes<HTMLInputElement> {
      name: string;
      label?: string;
      className?: string;
      containerProps?: React.HTMLAttributes<HTMLLabelElement>;
      backdropClassName?: string;
      iconClassName?: string;
      labelClassName?: string;
    }

    interface Field {
      /** @type Container Class Name */
      className?: string;

      /** @type Input Attributes */
      inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

      /** @type Label Attributes */
      labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;

      /** @type Label Children or Label Text */
      label?: string | JSX.Element;

      /** @type Enable Floating Label */
      labelFloat?: boolean;

      /** @type Input Name */
      name?: string;

      /** @type Disable Input */
      disabled?: boolean;

      /** @type */
      readonly?: boolean;

      /** @type Input OnChange Event */
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }

    interface FieldArea {
      /** @type Container Class Name */
      className?: string;

      /** @type Input Attributes */
      textareaProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;

      /** @type Label Attributes */
      labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;

      /** @type Label Children or Label Text */
      label?: string | JSX.Element;

      /** @type Enable Floating Label */
      labelFloat?: boolean;

      /** @type Input Name */
      name?: string;

      /** @type Input Value */
      value?: string;

      /** @type Disable Input */
      disabled?: boolean;

      /** @type */
      readonly?: boolean;

      /** @type Input OnChange Event */
      onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    }
        
    interface Select extends React.SelectHTMLAttributes<HTMLSelectElement> {
      label?: string | JSX.Element;
      options: { label: string, value: string }[];
    }
  }

  namespace Navigation {
    interface Nav {
      brand?: string;
      links: Link[];
    }

    interface Brand {
      text: string | undefined;
    }

    interface Link {
      dropdown?: boolean;
      href?: string;
      items?: DropdownItem[];
      label: string;
    }

    interface DropdownItem {

    }
  }

}

declare namespace RazorWindStates {
  namespace Form {
    interface AutoComplete {
      highlightIndex: number;
      matches: (RazorWindProps.Form.AutoCompleteOption | string)[];
      showDropdown: boolean;
    }
  }
}
