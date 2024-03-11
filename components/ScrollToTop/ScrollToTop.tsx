import { Icon } from "@/components/Icon";
import { Icons } from "@/constants";

import { ScrollTopButton } from "./styles";

export const ScrollToTop = () => {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  return (
    <ScrollTopButton
      onClick={scrollToTop}
      title="Scroll to top"
      aria-label="Scroll to top"
    >
      <Icon name={Icons.chevronUp} />
    </ScrollTopButton>
  );
};
