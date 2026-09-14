import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const CTAHeroButton = () => {
  return (
    <Link
      href="/offer"
      className="group mt-10 inline-block bg-accent px-6 py-3 text-sm font-semibold text-black  "
    >
      <div className="flex items-center justify-center gap-3">
        <span>Zobacz inwestycje</span>

        <BsArrowRight className="transition-transform  group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default CTAHeroButton;
