import { forwardRef } from "react";

const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer className=" bg-green-200 h-10" ref={ref} {...props}>
      Footer
    </footer>
  );
});

export default Footer;
