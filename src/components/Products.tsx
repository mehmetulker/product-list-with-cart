function Products({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-preset-1 mb-8">Desserts</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {children}
      </div>
    </div>
  );
}

export default Products;
