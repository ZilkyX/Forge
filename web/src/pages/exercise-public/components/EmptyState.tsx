
const EmptyState = () => {
  return (
    <div className="rounded-3xl border border-border bg-card p-10 text-center">
      <h3 className="text-xl font-semibold">No exercises found</h3>
      <p className="mt-2 text-muted-foreground">
        Try another muscle, equipment, or exercise name.
      </p>
    </div>
  );
};

export default EmptyState;
