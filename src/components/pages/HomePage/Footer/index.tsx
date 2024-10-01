import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";
import { Props } from "./types";

const Footer = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}: Props) => {
  return (
    <Pagination className="cursor-pointer mb-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            isActive={currentPage > 1}
            onClick={handlePrevPage}
          />
        </PaginationItem>
        <PaginationItem className="mx-4">
          {currentPage} / {totalPages}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            isActive={currentPage !== totalPages}
            onClick={handleNextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Footer;
