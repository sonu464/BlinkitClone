import React from "react";
import classes from "./HomePage.module.css";
import Widget4 from "../../component/HomeWidget/Widget4";

function Home() {
  const widget3Item = [
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
    {
      img: "/homepics/paan-corner_web.avif",
    },
  ];

  const WIDGET4_DATA = [
    {
      id: 1,
      name: "Dairy, Bread & Eggs",
      data: [
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
      ],
    },
    {
      id: 1,
      name: "Rolling paper & tobacco",
      data: [
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
        {
          itemImg: "/homepics/widget4item.avif",
          itemName: "Harvest Gold - White Bread",
          itemDuration: "8 Mins",
          itemInfo: "350 g",
          itemPrice: "Rs 90",
        },
      ],
    },
  ];

  const blinkitData = WIDGET4_DATA.map((item) => item);

  return (
    <div className={classes.feedContainer}>
      <div className={classes.widget1}>
        <img src="/homepics/BlinkitPaan.jpg" alt="paan web" />
      </div>
      <div className={classes.widget2}>
        <div className={classes.widget2Info}>
          <img src="/homepics/babycare-WEB.avif" alt="" />
        </div>
        <div className={classes.widget2Info}>
          <img src="/homepics/pharmacy-WEB.avif" alt="" />
        </div>
        <div className={classes.widget2Info}>
          <img src="/homepics/Pet-Care_WEB.avif" alt="" />
        </div>
      </div>
      <div className={classes.widget3}>
        {widget3Item.map((item, index) => (
          <div key={index} className={classes.widget3Items}>
            <img src={item.img} alt={item.img} />
          </div>
        ))}
      </div>
      <Widget4 BlinkItData={blinkitData} />
    </div>
  );
}

export default Home;
