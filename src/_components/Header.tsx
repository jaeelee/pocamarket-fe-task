/**
 * @param linkComponent 헤더 우측 영역 컴포넌트
 * @returns 헤더 컴포넌트
 */
export function Header({ linkComponent }: { linkComponent: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">PokeMarket - Frontend Task</h1>
        </div>
        {linkComponent}
      </div>
    </header>
  );
}
