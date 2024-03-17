import ProductCard from "./ProductCard";

const products = [
  {
    id: 0,
    img: "headphone.jpg",
    category: "Headphones",
    title: "Gaming Headphone",
    price: "109.00",
  },

  {
    id: 1,
    img: "macbook2.avif",
    category: "Laptop",
    title: "Apple Macbook",
    price: "1699.00",
  },

  {
    id: 2,
    img: "pc1.jpg",
    category: "PC",
    title: "Gaming PC",
    price: "1299.00",
  },

  {
    id: 3,
    img: "iphone5.PNG",
    category: "iPhone",
    title: "iPhone 15 pro",
    price: "999.00",
  },

  {
    id: 4,
    img: "iphone2.PNG",
    category: "iPhone",
    title: "iPhone 14 pro",
    price: "799.00",
  },

  {
    id: 5,
    img: "airpod.PNG",
    category: "Airpods",
    title: "Airpods Max 2",
    price: "459.00",
  },

  {
    id: 6,
    img: "airpod1.PNG",
    category: "Airpods",
    title: "Airpods pro",
    price: "150.00",
  },

  {
    id: 7,
    img: "ipad1.PNG",
    category: "iPad",
    title: "iPad pro",
    price: "899.00",
  },
];

const TrandingProduct = () => {
  return (
    <div className="container mt-32 px-12">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">Trending Products</h2>

        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="text-black">New</div>
          <div>Featured</div>
          <div>Top Sellers</div>
        </div>
      </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">

    {
        products.map((item) => <ProductCard
        
            key={item.id}
            id={item.id}
            img={item.img}
            category={item.category}
            title={item.title}
            price={item.price}

        />)
    }

    </div>

    </div>
  );
};

export default TrandingProduct;
