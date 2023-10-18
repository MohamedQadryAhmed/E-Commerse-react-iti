import { useEffect, useState } from "react";
import axios from "axios";
import {axiosInstance} from '../apis/config'
import ProductCard from "../components/ProductCard";
import ProductsList from "../components/ProductsList"

export default function Products() {
    

  return (
    <>
      <div>Products List</div>
      <hr/>
      <ProductsList/>
    </>
  );
}
