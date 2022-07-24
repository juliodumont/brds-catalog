import ProductCard from '../../components/ProductCard';
import Search from '../../components/Search';
import './styles.css';

export default function Catalog() {
  return (
    <main>
      <section>
        <Search/>
      </section>
      <section className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
        </div>
      </section>
    </main>
  );
}
