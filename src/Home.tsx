import { Header } from "./_components/Header";
import { ShoppingCartIcon, HeartIcon, ThumbsUpIcon, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import { TYPE_DATA } from "./_libs/type.data";
import { getPaginatedCard } from "./_libs/getPaginatedCard";
import { Card } from "./_libs/card.type";
import { useEffect, useState } from "react";
import Modal from "./Modal";

export function Home() {
  /**
   * @todo DATA 데이터를 바로 사용하지 않고 ../_libs/getPaginatedCard 함수를 사용하여 페이지네이션 처리
   */
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card>();

  useEffect(() => {
    const fetchCards = async () => {
      const {
        currentPage: fetchedCurrentPage,
        nextPage,
        items,
        totalPages: fetchedTotalPages
      } = await getPaginatedCard(currentPage, 10);
      setCurrentPage(fetchedCurrentPage);
      setTotalPages(fetchedTotalPages);
      setCards(items);
    };
    fetchCards();
  }, [currentPage, selectedGroup]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div>
        <Header
          linkComponent={
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          }
        />
        <div className="md:flex">
          <nav className="md:w-1/4 bg-gray-100 pt-4 sticky md:h-[calc(100vh-60px)] top-15 pb-4">
            <div className="flex flex-col gap-2">
              {TYPE_DATA.map((type) => (
                <button
                  key={`type-${type}`}
                  className={`text-sm hover:text-blue-500 w-full ${selectedGroup === type ? 'text-blue-500' : 'text-gray-500'} `}
                  onClick={() => setSelectedGroup(prev => prev === type ? undefined : type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </nav>
          <section className="md:flex-1 px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {cards.filter(item => selectedGroup ? item.groupName.includes(selectedGroup) : item).map((item, index) => (
                <div key={`${index}`} onClick={() => {
                  setSelectedCard(item);
                  setIsOpen(true)
                }}>
                  <h2 className="text-lg font-semibold">{item.name} ({item.memberName})</h2>
                  <p className="text-sm text-gray-500">{item.groupName}</p>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="flex gap-1">
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
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-5 bg-white rounded-md">
          <h2 className="text-2xl font-semibold">{selectedCard?.name} ({selectedCard?.memberName})</h2>
          <p className="text-base text-gray-500">{selectedCard?.groupName}</p>
          <div>
            <img
              src={selectedCard?.image}
              alt={selectedCard?.name}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <p className="text-lg font-semibold text-red-400">{Math.round((selectedCard?.discountRate ?? 0) * 100)}%</p>
              <p className="text-lg font-semibold text-gray-500">{selectedCard?.discountedPrice} USD</p>
              <p className="text-sm font-semibold text-gray-500 line-through">{selectedCard?.price} USD</p>
            </div>
            <div>
              <div className="flex gap-5 justify-end">
                <div className="flex gap-2"><ThumbsUpIcon fill={selectedCard?.bestPick ? 'pink' : 'white'} />best</div>
                <div className="flex gap-2"><HeartIcon />{selectedCard?.wishCount}</div>
              </div>
              <div className="flex gap-2 justify-end mt-3"><ShoppingCartIcon />장바구니 담기</div>
            </div>
          </div>
        </div>
      </Modal >
    </>
  );
}
