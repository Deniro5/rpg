import { faAngleDown, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SecondaryButton } from "../../../../Styles";
import { Popover } from "react-tiny-popover";
import { useRef, useState } from "react";
import TransactionDateRangePopoverMenu from "./TransactionDateRangePopoverMenu";

function TransactionDateRange() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsMenuOpen(true);
  };

  console.log(isMenuOpen);

  return (
    <>
      <Popover
        isOpen={isMenuOpen}
        positions={"bottom"}
        padding={4}
        onClickOutside={() => setIsMenuOpen(false)}
        content={<TransactionDateRangePopoverMenu />}
      >
        <SecondaryButton ref={buttonRef} onClick={(e) => handleButtonClick(e)}>
          <FontAwesomeIcon icon={faCalendar} />
          Last 90 Days
          <FontAwesomeIcon icon={faAngleDown} />
        </SecondaryButton>
      </Popover>
    </>
  );
}

export default TransactionDateRange;
