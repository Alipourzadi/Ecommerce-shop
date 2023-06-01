import ProductCard from "./ProductCard";

export default function index({ products }) {
  return (
    <div className="space-y-3">
      <h2 className="text-gray-600 text-2xl font-yekanBlack">
        پر فروش ترین لباس ها
      </h2>
      <div className="flex items-center gap-6">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}
