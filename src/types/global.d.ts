import type { SupportedLocale } from "~/i18n";

declare global {
    /**
     * Base props type for all pages since they all receive the locale as a parameter.
     */
    declare type WithLocaleParmsProps<P = object> = P & {
        params: {
            locale: SupportedLocale;
        };
    };

    /**
     * Deeply cast all values of an object to string if their type is a subset of `string`.
     *
     * If the value is an object, it will recursively cast its values as well.
     *
     * If the value is not a string or an object, it will remain the same.
     */
    declare type DeepCastString<T> = T extends string
        ? string
        : T extends object
          ? { [K in keyof T]: DeepCastString<T[K]> }
          : T;
}
