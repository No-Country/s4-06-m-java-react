import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [{ fileUrl: "" }] }) => {
  const imagesFinales = [
    { fileUrl: images[0].fileUrl, id: images[0].id, name: images[0].name },
    {
      fileUrl:
        "https://chevignon.vtexassets.com/arquivos/ids/1076988/63_649D003_010000_0.jpg?v=1751298906",
      id: 1,
      name: images[0].name,
    },
    {
      fileUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOPAnkdBP8hyUvPrpDU45-4nYHmVQI_mO0g&usqp=CAU",
      id: 2,
      name: images[0].name,
    },
    {
      fileUrl:
        "https://chevignon.vtexassets.com/arquivos/ids/1076988/63_649D003_010000_0.jpg?v=1751298906",
      id: 3,
      name: images[0].name,
    },
    {
      fileUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JsLAnDEOLIaLbiEhOZqMWEsGzn0lYlWlhYB4S_OaJE6H_fiwmtgjO9qM9uiTDNOhRr8&usqp=CAU",
      id: 4,
      name: images[0].name,
    },
  ];

  const [imageMain, setimageMain] = useState(imagesFinales[0]);

  return (
    <Wrapper>
      <img src={imageMain.fileUrl} alt={imageMain.name} className="main" />

      <div className="gallery">
        {imagesFinales.map((image, index) => {
          return (
            <img
              src={image.fileUrl}
              key={index}
              onClick={() => {
                setimageMain(imagesFinales[index]);
              }}
              className={`${
                imagesFinales.url === imageMain.fileUrl ? "active" : null
              }`}
              alt={image.title}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 509px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
  .main {
    height: 600px;
  }

  @media screen and (min-width: 1024px) {
    .main {
      width: 400px;
    }
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 70%;
      border-radius: 10px;
      box-shadow: 2px 3px 5px 0px #7e9a87;
      margin: 0 auto;
      display: block;
    }
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 1024px) {
    .gallery {
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
    }
  }

  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
