import React, { useEffect, useState } from "react";
import classes from "./SelectedItem.module.css";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BiRightArrow } from "react-icons/bi";

const IMG_URL = [
  {
    imgUrl: "/homepics/widget4item.avif",
  },
  {
    imgUrl: "/selectedItemPics/SI1.avif",
  },
  {
    imgUrl: "/selectedItemPics/SI2.avif",
  },
  {
    imgUrl: "/selectedItemPics/SI3.avif",
  },
  {
    imgUrl: "/selectedItemPics/SI4.avif",
  },
  {
    imgUrl: "/selectedItemPics/SI5.avif",
  },
];

let SELECTEDITEM_DESC = {
  Type: "White Bread",
  "Key Features": ["  Small loaf", "With goodness of wheat"],
  Ingridents:
    "Wheat flour (Maida) (53%), Sugar, Wheat protein (Gluten), Yeast, Salt, Edible Refined Vegetable Oil, Soya Flour, Class II Preservatives (E282), Permitted Emulsifier [E481i], Acidity Regulator (E260) and Antioxidant (E300)",
  Unit: "350g",
  FSSAILicense: "10013013000537",
  "Shelf Life": "5 days",
  "Manufacturer Details":
    "Ready Roti India Pvt. Ltd., RZ-167(1), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
  "Marketed By":
    "Ready Roti India Pvt. Ltd., RZ-167(1), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
  "Country Of Origin": "India",
  "Customer Care Details": "Email: info@blinkit.com",
  "Return Policy":
    "This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery.In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.",
  Seller: "TAMS GLOBAL PRIVATE LIMITED",
  "Seller FSSAI": "13323999000106",
  Description:
    "Kick start your day with Harvest Gold Bread. A small loaf of soft bread enriched with goodness of wheat and a characteristic aroma of brick-oven bakeries. Pave your way towards a healthy life with a hearty breakfast.",
  Disclaimer:
    "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.",
};

function SelectedItem() {
  const [showPic, setShowPic] = useState(IMG_URL[0].imgUrl);
  const [seletedImgIndex, setSelectedImgIndex] = useState(0);
  const [seltectedItemKey, setSeltectedItemKey] = useState([]);
  const params = useParams();

  function showPicHandler(imgUrl) {
    setShowPic(imgUrl);
  }

  let content;

  if (IMG_URL) {
    content = IMG_URL.map((url, index) => (
      <div
        key={index}
        onClick={() => {
          showPicHandler(url.imgUrl);
          setSelectedImgIndex(index);
        }}
        className={`${classes.SILeftBoxSliderBoxes} ${
          seletedImgIndex === index ? classes.SelectedImg : ""
        }`}
      >
        <img src={url.imgUrl} alt="" />
      </div>
    ));
  }

  useEffect(() => {
    const itemDetailsKey = Object.keys(SELECTEDITEM_DESC);
    setSeltectedItemKey(itemDetailsKey);
  }, []);

  return (
    <div className={classes.selectedItem}>
      {/* left box */}
      <div className={classes.SILeftBox}>
        <div className={classes.SILeftBoxImages}>
          <div className={classes.SILeftBoxImg}>
            <img src={showPic} alt="" />
          </div>
          <div className={classes.SILeftBoxSlider}>{content}</div>
        </div>
        <div className={classes.selectedItemInfo}>
          <h4>Product Details</h4>
          {seltectedItemKey.map((key) => (
            <div key={key} className={classes.seletedItemInformation}>
              <h6>{key}</h6>
              <p>{SELECTEDITEM_DESC[key]}</p>
            </div>
          ))}
        </div>
      </div>
      {/* right box  */}
      <div className={classes.SIRightBox}>
        <div className={classes.SIRightBoxHomeLink}>
          <span>
            <Link>Home</Link>
          </span>
          /
          <span>
            <Link>Bread & Pav</Link>
          </span>
          /<span>Harvest Gold - White Bread</span>
        </div>
        <div className={classes.SIRightBoxMoreItem}>
          <h3>Harvest Gold - White Bread</h3>
          <span className={classes.SIRightBoxMin}>11MINS</span>
          <Link>
            View all by Harvest Gold{" "}
            <BiRightArrow style={({ color: "green" }, { fontSize: "10px" })} />
          </Link>
        </div>
        <div className={classes.SIRightBoxBorder}></div>

        <div className={classes.SIRightBoxInfo}>
          <div className={classes.SIRightBoxInformation}>
            <p>350g</p>
            <h4>MRP ₹28</h4>
            <span>(Inclusive of all taxes)</span>
          </div>
          <div className={classes.SIRightBoxAddCart}>
            <button>-</button>
            <p>3</p>
            <button>+</button>
          </div>
        </div>

        <div className={classes.SIRightBoxwhy}>
          <h4>Why shop from blinkit?</h4>
          <div className={classes.SIRightBoxwhyPic}>
            <div className={classes.SIRightBoxwhyImg}>
              <img src="/whyB/w1.avif" alt="" />
            </div>
            <div className={classes.SIRightBoxwhyInfo}>
              <h6>Superfast Delivery</h6>
              <p>
                Get your order delivered to your doorstep at the earliest from
                dark stores near you.
              </p>
            </div>
          </div>
          <div className={classes.SIRightBoxwhyPic}>
            <div className={classes.SIRightBoxwhyImg}>
              <img src="/whyB/w2.avif" alt="" />
            </div>
            <div className={classes.SIRightBoxwhyInfo}>
              <h6>Best Prices & Offers</h6>
              <p>
                Best price destination with offers directly from the
                manufacturers.
              </p>
            </div>
          </div>
          <div className={classes.SIRightBoxwhyPic}>
            <div className={classes.SIRightBoxwhyImg}>
              <img src="/whyB/w3.avif" alt="" />
            </div>
            <div className={classes.SIRightBoxwhyInfo}>
              <h6>Wide Assortment</h6>
              <p>
                Choose from 5000+ products across food, personal care, household
                & other categories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedItem;
