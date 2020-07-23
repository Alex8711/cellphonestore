import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  GridList,
  CardHeader,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";

function HomePage(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_HEROKU_URL}/api/weatherforecast`
      );
      console.log(response.data);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <div>
          <h2>No post yet....</h2>
        </div>
      ) : (
        <div>
          <GridList>
            {products.map((product) => (
              <Card
                key={product.productId}
                style={{ width: "300px", height: "550px" }}
                onClick={() => {
                  props.history.push(`/product/${product._id}`);
                }}
              >
                <CardActionArea>
                  <img
                    style={{
                      height: "300px",
                      marginLeft: "80px",
                    }}
                    src={`${process.env.REACT_APP_HEROKU_URL}/${product.imagePath}`}
                    alt=""
                  />
                  <CardHeader
                    title={product.title}
                    style={{ textAlign: "center" }}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography style={{ fontSize: "40px", textAlign: "center" }}>
                    {product.description}
                  </Typography>
                  <Typography style={{ fontSize: "40px", textAlign: "center" }}>
                    $ {product.price}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </GridList>
        </div>
      )}
    </div>
  );
}

export default HomePage;
