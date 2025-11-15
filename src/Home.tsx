import { Header } from "./_components/Header";
import { ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { TYPE_DATA } from "./_libs/type.data";
import { getPaginatedCard } from "./_libs/getPaginatedCard";
import { Card } from "./_libs/card.type";
import { useEffect, useState } from "react";

export function Home() {
  /**
   * @todo DATA 데이터를 바로 사용하지 않고 ../_libs/getPaginatedCard 함수를 사용하여 페이지네이션 처리
   */
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {

      const { currentPage: fetchedCurrentPage, nextPage, items, totalPages: fetchedTotalPages } = await getPaginatedCard(currentPage, 5);
      setCurrentPage(fetchedCurrentPage);
      setTotalPages(fetchedTotalPages);
      setCards(items);
    };
    fetchCards();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Header
        linkComponent={
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
        }
      />
      <div className="flex">
        <nav className="w-1/4 bg-gray-100 pt-4">
          <div className="flex flex-col gap-2">
            {TYPE_DATA.map((type) => (
              <button
                key={`type-${type}`}
                className="text-sm text-gray-500 hover:text-blue-500 w-full"
              >
                {type}
              </button>
            ))}
          </div>
        </nav>
        <section className="flex-1 px-4 py-4">
          <div className="grid grid-cols-4 gap-4">
            {cards.map((item, index) => (
              <div key={`${index}`}>
                <h2 className="text-lg font-semibold">{item.name} ({item.memberName})</h2>
                <p className="text-sm text-gray-500">{item.groupName}</p>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto rounded-md"
                />
                <div className="flex flex-row gap-1 items-">
                  <p className="text-lg font-semibold text-red-400">{Math.round(item.discountRate * 100)}%</p>
                  <p className="text-lg font-semibold text-gray-500">{item.discountedPrice} USD</p>
                  <p className="text-sm font-semibold text-gray-500 line-through">{item.price} USD</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <span className="text-sm text-gray-500 bg-white p-3 rounded shadow-lg fixed bottom-4 right-4">
        ({currentPage ?? 0}/{totalPages ?? 0})
      </span>
    </div>
  );
}
