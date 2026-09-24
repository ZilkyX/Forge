interface CategoryChipsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setPage: (page: number) => void;
  categoryLoading: boolean;
  categoryData: string[];
}
const CategoryChips = ({
  setSelectedCategory,
  setPage,
  selectedCategory,
  categoryData,
  categoryLoading,
}: CategoryChipsProps) => {
  return (
    <section className="mb-8 flex gap-3 overflow-x-auto pb-2">
      <button
        onClick={() => {
          setSelectedCategory("All");
          setPage(1);
        }}
        className={`rounded-full px-5 py-2 text-sm font-medium transition ${
          selectedCategory === "All"
            ? "bg-primary text-primary-foreground"
            : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
        }`}
      >
        All
      </button>

      {!categoryLoading &&
        categoryData.map((category: string) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setPage(1);
            }}
            className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
    </section>
  );
};

export default CategoryChips;
