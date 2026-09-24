import { Search } from "lucide-react";

interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
}
const Searchbar = ({value, onChange}: SearchbarProps) => {
  return (
    <section className="mb-6">
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={20}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search over 1,300 exercises..."
          className="w-full rounded-2xl border border-border bg-card py-4 pl-12 pr-4 outline-none transition focus:border-primary"
        />
      </div>
    </section>
  );
};

export default Searchbar;
