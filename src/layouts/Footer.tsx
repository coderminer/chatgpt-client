import { forwardRef } from "react";

const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer className="h-10 dark:border-t dark:border-zinc-50/20" ref={ref} {...props}>
      Footer
    </footer>
  );
});

export default Footer;
