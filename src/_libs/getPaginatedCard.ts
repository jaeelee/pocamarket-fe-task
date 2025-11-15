import { DATA } from "./card.data";
import { Card } from "./card.type";

/*
 * currentPage: 현재 페이지
 * nextPage: 다음 페이지
 * items: 페이지당 아이템 목록
 * totalPages: 전체 페이지 수
 */
export interface PaginatedResult {
  currentPage: number;
  nextPage: number | null;
  items: Card[];
  totalPages: number;
}

/**
 *
 * @param page 현재 페이지
 * @param itemsPerPage 페이지당 아이템 수
 * @returns 페이지네이션 데이터
 *
 * @description 페이지네이션된 데이터를 비동기적으로 반환하는 함수
 */

const NETWORK_DELAY = 1000;

export async function getPaginatedCard(
  page: number,
  itemsPerPage: number,
): Promise<PaginatedResult> {
  return new Promise((resolve) => {
    setTimeout(() => {

      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = DATA.slice(startIndex, endIndex);
      const nextPage = endIndex < DATA.length ? page + 1 : null;
      const totalPages = Math.ceil(DATA.length / itemsPerPage);

      resolve({
        currentPage: page,
        nextPage: nextPage,
        items: paginatedData,
        totalPages: totalPages,
      });
    }, NETWORK_DELAY);
  });
}
