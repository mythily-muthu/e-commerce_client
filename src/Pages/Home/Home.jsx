import React from "react";
import Categories from "../../components/Categories/Categories";
import Contacts from "../../components/Contacts/Contacts";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contacts />
    </div>
  );
};

export default Home;
