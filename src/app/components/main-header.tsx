import clsx from "clsx";
import NavBar from "./the-header/the-header";
// import { AppWrapper } from "../context";
type Props = { className?: string };

export default function Navbar({ className }: Props) {
  return (
    // <AppWrapper>
    <header
      className={clsx(
        // className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md",
        // "transition-all duration-300 bg-blue-400 h-16",
        className
      )}
    >
      <NavBar />
    </header>
    // </AppWrapper>
  );
}
