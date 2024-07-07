import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerBox1}>
          <div className={classes.fBox1HeadingText}>Useful Links</div>
          <ul className={classes.fBox1Links}>
            <li className={classes.fBox1Linksli}>
              <ul className={classes.fBox1Linksul}>
                <li>
                  <Link className={classes.fbox1LinkName}>About</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Careers</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Blog</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Press</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Lead</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Value</Link>
                </li>
              </ul>
            </li>
            <li className={classes.fBox1Linksli}>
              <ul className={classes.fBox1Linksul}>
                <li>
                  <Link className={classes.fbox1LinkName}>Privacy</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Terms</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>FAQs</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Security</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Mobile</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Contact</Link>
                </li>
              </ul>
            </li>
            <li className={classes.fBox1Linksli}>
              <ul className={classes.fBox1Linksul}>
                <li>
                  <Link className={classes.fbox1LinkName}>Partner</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Express</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Seller</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Warehouse</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Deliver</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Resources</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={classes.footerBox2}>
          <div className={classes.fBox2Heading}>
            <div className={classes.fBox1HeadingText}>Categories</div>
            <Link className={classes.fSeeAllCategories}> see all </Link>
          </div>
          <ul className={classes.fBox2Links}>
            <li className={classes.fBox1Linksli}>
              <ul className={classes.fBox1Linksul}>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Vegetables & Fruits
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Dairy & Breakfast
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Munchies</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Cold Drinks & Juices
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Instant & Frozen Food
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Tea, Coffee & Health Drinks
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Bakery & Biscuits
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Sweet Tooth</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Atta, Rice & Dal
                  </Link>
                </li>
              </ul>
            </li>
            <li className={classes.fBox1Linksli}>
              <ul className={classes.fBox1Linksul}>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Dry Fruits, Masala & Oil
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Sauces & Spreads
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Chicken, Meat & Fish
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Paan Corner</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Organic & Premium
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Baby Care</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Pharma & Wellness
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Cleaning Essentials
                  </Link>
                </li>
              </ul>
            </li>
            <li className={classes.fBox1Linksli}>
              <ul className={classes.fBox1Linksul}>
                <li>
                  <Link className={classes.fbox1LinkName}>Home & Office</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Ice Creams & Frozen Desserts
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Personal Care</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Pet Care</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>
                    Beauty & Cosmetics
                  </Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Books</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Toys & Games</Link>
                </li>
                <li>
                  <Link className={classes.fbox1LinkName}>Print Store</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
