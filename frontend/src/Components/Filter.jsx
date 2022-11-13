import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import '../App.css';

const Filter = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const initialCountryFilters = searchParams.getAll("country");
  const [country, setCountry] = useState(initialCountryFilters || [])
  const initialCategoryFilters = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategoryFilters || [])
  const newCategory = [...category];
  const newCountry = [...country];

  const handleFilterCheckbox1 = (e) => {
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  const handleFilterCheckbox = (e) => {
    if (newCountry.includes(e.target.value)) {
      newCountry.splice(newCountry.indexOf(e.target.value), 1);
    } else {
      newCountry.push(e.target.value);
    }
    setCountry(newCountry);
  };

  useEffect(() => {
    if (country || category) {
      let params = {};
      category && (params.country = country);
      category && (params.category = category);

      setSearchParams(params);
    }
  }, [category, country, setSearchParams]);


  return (
    <div>
      <p style={{ fontSize: "12px" }}><a href="/">HOME →</a> FRUITS & VEGETABLES</p>
      <div style={{ display: "grid", fontSize: "1rem", width: "13rem", marginTop: "3rem" }}>
        <a href="">Cuts & Sprouts (2867)</a>
        <a href="">Exotic Fruits & Veggies (4966)</a>
        <a href="">Flower Bouquets, Bunches (1280)</a>
        <a href="">Fresh Fruits (6577)</a>
        <a href="">Fresh Vegetables (12283)</a>
        <a href="">Herbs & Seasonings (2595)</a>
        <a href="">Organic Fruits & Vegetables (2687)</a>
      </div>
      <h3>Country of Origin</h3>

      <div >
        <div>
          <input type="checkbox" value="Australia" checked={country.includes('Australia')} onChange={handleFilterCheckbox} />
          <label>Australia</label>
        </div>
        <div>
          <input type="checkbox" value="Greece" checked={country.includes('Greece')} onChange={handleFilterCheckbox} />
          <label>Greece</label>
        </div>
        <div>
          <input type="checkbox" value="India" checked={country.includes('India')} onChange={handleFilterCheckbox} />
          <label>India</label>
        </div>
        <div>
          <input type="checkbox" value="Spain" checked={country.includes('Spain')} onChange={handleFilterCheckbox} />
          <label>Spain</label>
        </div>
        <div>
          <input type="checkbox" value="USA" checked={country.includes('USA')} onChange={handleFilterCheckbox} />
          <label>USA</label>
        </div>
      </div>


      <hr />
      <h3>Price</h3>
      <div>
        <div>
          <input type="checkbox" value="Less than Rs 20 (2009)" checked={category.includes('Less than Rs 20 (2009)')} onChange={handleFilterCheckbox1} />
          <label>Less than Rs 20 (2009)</label>
        </div>
        <div>
          <input type="checkbox" value="Rs 21 to Rs 50 (4955)" checked={category.includes('Rs 21 to Rs 50 (4955)')} onChange={handleFilterCheckbox1} />
          <label>Rs 21 to Rs 50 (4955)</label>
        </div>
        <div>
          <input type="checkbox" value="Rs 51 to Rs 100 (3961)" checked={category.includes('Rs 51 to Rs 100 (3961)')} onChange={handleFilterCheckbox1} />
          <label>Rs 51 to Rs 100 (3961)</label>
        </div>
        <div>
          <input type="checkbox" value="Rs 101 to Rs 200 (2844)" checked={category.includes('Rs 101 to Rs 200 (2844)')} onChange={handleFilterCheckbox1} />
          <label>Rs 101 to Rs 200 (2844)</label>
        </div>
        <div>
          <input type="checkbox" value="Rs 201 to Rs 500 (1237)" checked={category.includes('Rs 201 to Rs 500 (1237)')} onChange={handleFilterCheckbox1} />
          <label>Rs 201 to Rs 500 (1237)</label>
        </div>
        <div>
          <input type="checkbox" value="More than Rs 501 (9542)" checked={category.includes('More than Rs 501 (9542)')} onChange={handleFilterCheckbox1} />
          <label>More than Rs 501 (9542)</label>
        </div>

      </div>

      <hr />
      <h3>Discounts</h3>
      <div>
        <div>
          <input type="checkbox" value="Upto 5% (61)" checked={category.includes('Upto 5% (61)')} onChange={handleFilterCheckbox1} />
          <label>Upto 5% (61)</label>
        </div>
        <div>
          <input type="checkbox" value="5% - 10% (122)" checked={category.includes('5% - 10% (122)')} onChange={handleFilterCheckbox1} />
          <label>5% - 10% (122)</label>
        </div>
        <div>
          <input type="checkbox" value="10% - 15% (138)" checked={category.includes('10% - 15% (138)')} onChange={handleFilterCheckbox1} />
          <label>10% - 15% (138)</label>
        </div>
        <div>
          <input type="checkbox" value="15% - 25% (11807)" checked={category.includes('15% - 25% (11807)')} onChange={handleFilterCheckbox1} />
          <label>15% - 25% (11807)</label>
        </div>
        <div>
          <input type="checkbox" value="More than 25% (1362)" checked={category.includes('More than 25% (1362)')} onChange={handleFilterCheckbox1} />
          <label>More than 25% (1362)</label>
        </div>
      </div>
    </div>
  )
}
export default Filter;