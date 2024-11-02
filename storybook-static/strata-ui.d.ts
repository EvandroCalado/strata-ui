import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Button: ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;

declare type ButtonProps = ComponentProps<'button'> & ComponentProps<'a'> & VariantProps<typeof buttonStyles> & {
    as?: React.ElementType;
};

declare const buttonStyles: (props?: ({
    variant?: "primary" | "secondary" | "destructive" | "outline" | "ghost" | "link" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    isLoading?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Heading: ForwardRefExoticComponent<Omit<HeadingProps, "ref"> & RefAttributes<HTMLHeadingElement>>;

declare type HeadingProps = ComponentProps<'h1'> & VariantProps<typeof headingStyles>;

declare const headingStyles: (props?: ({
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    weight?: "bold" | "thin" | "normal" | "medium" | "semibold" | "extrabold" | "black" | null | undefined;
    align?: "center" | "left" | "right" | null | undefined;
} & ClassProp) | undefined) => string;

export { }
