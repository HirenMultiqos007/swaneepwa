import ProductImage1 from "../assets/images/product-image1.png";
import ProductImage2 from "../assets/images/ProductImage2.png";
import ProductImage3 from "../assets/images/ProductImage3.png";
import ProductImage4 from "../assets/images/ProductImage4.png";
import ProductImage5 from "../assets/images/ProductImage5.png";
import ProductImage6 from "../assets/images/ProductImage6.png";
import ProductImage7 from "../assets/images/ProductImage7.png";
import ProductImage8 from "../assets/images/ProductImage8.png";
import ProductImage9 from "../assets/images/ProductImage9.png";
import ProductImage10 from "../assets/images/ProductImage10.png";
import ProductImage11 from "../assets/images/ProductImage11.png";
import ProductImage12 from "../assets/images/ProductImage12.png";
import ProductImage13 from "../assets/images/ProductImage13.png";
import ProductImage14 from "../assets/images/ProductImage14.png";
import ProductImage15 from "../assets/images/ProductImage15.png";
import ProductImage16 from "../assets/images/ProductImage16.png";
import CartIcon from "../assets/icons/black-cart-icon.svg";
import WishListIcon from "../assets/icons/black-wishlist-icon.svg";
import Buzz1 from "../assets/images/homepage-image4.png";
import Buzz2 from "../assets/images/Buzz2.png";
import Buzz3 from "../assets/images/Buzz3.png";
import Buzz4 from "../assets/images/Buzz4.png";
import men1 from "../assets/images/homepage-gentlemen-image1.png";
import men2 from "../assets/images/men2.png";
import men3 from "../assets/images/men3.png";
import men4 from "../assets/images/men4.png";
import CustomerImage from "../assets/images/customer-image.png";
import FourStarImage from "../assets/icons/four-star.png";
import ThreeStarImage from "../assets/icons/three-star.png";
import ImageGallary1 from "../assets/images/homepage-image2.png";
import ImageGallary2 from "../assets/images/ImageGallary2.png";
import ImageGallary3 from "../assets/images/ImageGallary3.png";
import TopImage1 from "../assets/images/homepage-image1.png";
import TopImage2 from "../assets/images/TopImage2.png";
import TopImage3 from "../assets/images/TopImage3.png";
import Instagram1 from "../assets/images/homepage-instagram-image1.png";
import Instagram2 from "../assets/images/Instagram2.png";
import Instagram3 from "../assets/images/Instagram3.png";
import Instagram4 from "../assets/images/Instagram4.png";
import Jewel1 from "../assets/images/homepage-image3.png";
import Jewel2 from "../assets/images/Jewel2.png";
import Jewel3 from "../assets/images/Jewel3.png";
import Jewel4 from "../assets/images/Jewel4.png";
import OfferImage1 from "../assets/images/homepag-offer-image1.png";
import OfferImage2 from "../assets/images/OfferImage2.png";
import OfferImage3 from "../assets/images/OfferImage3.png";
import OfferImage4 from "../assets/images/OfferImage4.png";

import  CustomerSupportIcon from "../assets/icons/customer-support.svg";
import  DesignerIcon  from "../assets/icons/designer-icon.svg";
import  InternationalIcon  from "../assets/icons/international-icon.svg";
import FastDeliveryIcon  from "../assets/icons/fast-delivery-icon.svg";



import WeddingImage1 from "../assets/images/homepage-wedding-image1.png";
import WeddingImage2 from "../assets/images/homepage-wedding-image2.png";
import WeddingImage3 from "../assets/images/homepage-wedding-image3.png";
import SlideImage1 from "../assets/images/slide-image1.png";
import SlideImage2 from "../assets/images/slide-image2.png";
import SlideImage3 from "../assets/images/slide-image3.png";
import NewIcon from "../assets/icons/new-badge-icon.svg";
import PersonalDetail from "../pages/MyAccount/PersonalDetail";
import OrderHistory2 from "../pages/MyAccount/OrderHistory";
import MyAddress2 from "../pages/MyAccount/MyAddress";
import MyWishlist2 from "../pages/MyAccount/MyWishlist";
import MyNotification2 from "../pages/MyAccount/MyNotification";
import MySettings2 from "../pages/MyAccount/MySettings";
import {
  myaddress,
  mywishlist,
  orderhistory,
  personaldetail,
  mynotification,
  mysettings,
} from "../config/RoutingConsts";
import { ReactComponent as MyAccountIcon } from "../assets/icons/myaccount-user.svg";
import { ReactComponent as MyOrderHistoryIcon } from "../assets/icons/myaccount-order-histroy.svg";
import { ReactComponent as MyAddressIcon } from "../assets/icons/myaccount-address.svg";
import { ReactComponent as MyWishlistIcon } from "../assets/icons/myaccount-wishlist.svg";
import { ReactComponent as MyNotificationIcon } from "../assets/icons/myaccount-notification.svg";
import { ReactComponent as MySettingsIcon } from "../assets/icons/myaccount-setting.svg";
import { ReactComponent as MyLogoutIcon } from "../assets/icons/myaccount-logout.svg";
import productImage from "../assets/images/product1.png";

export const ProductListing = [
  {
    id: 1,
    addVariant: ProductImage1,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 20,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 2,
    addVariant: ProductImage2,
    productName: "Basanti - Kapde Aur Koffee",
    description: "Red Georgette Embroidered Lehenga Set",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 25,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 3,
    addVariant: ProductImage3,
    productName: "Deepika Arora",
    description: "Black Dress in Ponte Roma",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 15,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 10000,
  },
  {
    id: 4,
    addVariant: ProductImage4,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 10,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 5,
    addVariant: ProductImage5,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 18,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 6,
    addVariant: ProductImage6,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 40,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 7,
    addVariant: ProductImage7,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 45,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 8,
    addVariant: ProductImage8,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 35,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 9,
    addVariant: ProductImage9,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 5,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 10,
    addVariant: ProductImage10,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 30,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 11,
    addVariant: ProductImage11,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 18,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 12,
    addVariant: ProductImage12,
    productName: "Basanti - Kapde Aur Koffee",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 40,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 13,
    addVariant: ProductImage13,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 45,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 14,
    addVariant: ProductImage14,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 35,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 15,
    addVariant: ProductImage15,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 5,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: 22096,
  },
  {
    id: 16,
    addVariant: ProductImage16,
    productName: "Masaba",
    description: "Mustard Yellow Printed Kaftan With Slip",
    price: 9600,
    sellerPrice: 12000,
    discountPrice: 30,
    wishIcon: WishListIcon,
    cartIcon: CartIcon,
    originalPrice: "22,096",
  },
];
export const gentlemen = [
  {
    addVariant: [{ image: men1 }],
    productName: "Country Made",
    label: "new",
    link: "Shop Now",
  },
  {
    addVariant: [{ image: men2 }],
    productName: "Country Made",
    link: "Shop Now",
  },
  {
    addVariant: [{ image: men3 }],
    productName: "Country Made",
    link: "Shop Now",
  },
  {
    addVariant: [{ image: men1 }],
    productName: "Country Made",
    link: "Shop Now",
  },
  {
    addVariant: [{ image: men2 }],
    productName: "Country Made",
    label: "new",
    link: "Shop Now",
  },
  {
    addVariant: [{ image: men3 }],
    productName: "Country Made",
    link: "Shop Now",
  },
  {
    addVariant: [{ image: men1 }],
    productName: "Country Made",
    link: "Shop Now",
  },
  {
    addVariant: [{ image: men1 }],
    productName: "Country Made",
    link: "Shop Now",
  },
];
export const disclaimerList = [
  {
    description:
      " The actual colour of the product may vary slightly from the image shown.",
  },
  {
    description:
      " The actual colour of the product may vary slightly from the image shown.",
  },
  {
    description:
      " The actual colour of the product may vary slightly from the image shown.",
  },
  {
    description:
      " The actual colour of the product may vary slightly from the image shown.",
  },
];
export const reviews = [
  {
    addVariant: CustomerImage,
    name: "Adam Gilcrist",
    rating: FourStarImage,
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever.",
  },
  {
    addVariant: CustomerImage,
    name: "Adam Gilcrist",
    rating: FourStarImage,
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever.",
  },
  {
    addVariant: CustomerImage,
    name: "Adam Gilcrist",
    rating: ThreeStarImage,
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever.",
  },
];
export const buzz = [
  {
    addVariant: [{ image: Buzz1 }],
    productName: "Summer Whites",
    label: "new",
    link: "Shop Now",
  },
  {
    addVariant: [{ image: Buzz2 }],
    productName: "Summer Whites",
    link: "Shop Now",
  },
  {
    addVariant: [{ image: Buzz3 }],
    productName: "Summer Whites",
    link: "Shop Now",
  },
  {
    addVariant: [{ image: Buzz4 }],
    productName: "Summer Whites",
    link: "Shop Now",
  },
];
export const gallary = [
  {
    addVariant: [{ image: TopImage1 }],
    title: "Ships in 10 Days",
  },
  {
    addVariant: [{ image: TopImage2 }],
    title: "Ships in 10 Days",
  },
  {
    addVariant: [{ image: TopImage3 }],
    title: "Ships in 10 Days",
  },
];
export const gallary2 = [
  {
    addVariant: [{image: ImageGallary1}],
    title: "Mini Me",
    link: "Shop Now",
  },
  {
    addVariant: [{image: ImageGallary2}],
    title: "Mini Me",
    link: "Shop Now",
  },
  {
    addVariant: [{image:ImageGallary3}],
    title: "Mini Me",
    link: "Shop Now",
  },
];
export const instagram = [
  {
    addVariant: [{image:Instagram1}],
    productName: "White Fine Cotton...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  },
  {
    addVariant: [{image:Instagram2}],
    productName: "White Fine Cotton...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  },
  {
    addVariant: [{image:Instagram3}],
    productName: "White Fine Cotton...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  },
  {
    addVariant: [{image:Instagram4}],
    productName: "White Fine Cotton...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  },
  {
    addVariant: [{image:Instagram4}],
    productName: "White Fine Cotton...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  },
  {
    addVariant: [{image:Instagram1}],
    productName: "White Fine Cotton...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  },
  {
    addVariant: [{image:Instagram3}],
    productName: "White Fine Cotton...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  },
  {
    addVariant: [{image:Instagram4}],
    productName: "White Fine Cotton...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  },
];
export const jewelcabinet = [
  {
    addVariant: [{image: Jewel1}],
    title: "Bespoke Bridal",
    link: "Shop Now",
  },
  {
    addVariant: [{image:Jewel2}],
    title: "Bespoke Bridal",
    link: "Shop Now",
  },
  {
    addVariant: [{image:Jewel3}],
    title: "Bespoke Bridal",
    link: "Shop Now",
  },
  {
    addVariant: [{image:Jewel4}],
    title: "Bespoke Bridal",
    link: "Shop Now",
  },
];
export const offer = [
  {
    addVariant: [{image:OfferImage1}],
    productName: "Baise Gaba",
    label: "new",
    link: "Shop Now",
  },
  {
    addVariant: [{image:OfferImage2}],
    productName: "Baise Gaba",
    link: "Shop Now",
  },
  {
    addVariant: [{image: OfferImage3}],
    productName: "Baise Gaba",
    link: "Shop Now",
  },
  {
    addVariant: [{image:OfferImage4}],
    productName: "Baise Gaba",
    link: "Shop Now",
  },
  {
    addVariant: [{image:OfferImage1}],
    productName: "Baise Gaba",
    label: "new",
    link: "Shop Now",
  },
  {
    addVariant: [{image: OfferImage2}],
    productName: "Baise Gaba",
    link: "Shop Now",
  },
  {
    addVariant: [{image:OfferImage3}],
    productName: "Baise Gaba",
    link: "Shop Now",
  },
  {
    addVariant: [{image:OfferImage4}],
    productName: "Baise Gaba",
    link: "Shop Now",
  },
];
export const services = [
  {
     PImages: CustomerSupportIcon,
     alt:"CustomerSupport",
    title: (
      <>
        24X7 <br />
        Customer Support
      </>
    ),
  },
  {
    PImages:DesignerIcon,
    alt:"Designer",
    title: (
      <>
        500+
        <br />
        Designers
      </>
    ),
  },
  {
    PImages: InternationalIcon,
    alt:"International",
    title: (
      <>
        Free International
        <br />
        Shipping
      </>
    ),
  },
  {
    PImages:FastDeliveryIcon,
    alt:"FastDelivery",
    title: (
      <>
        Fast
        <br />
        Delivery
      </>
    ),
  },
];
export const wedding = [
  {
    addVariant: WeddingImage1,
    title: "Papa Don’t Preach by Shubhika",
  },
  {
    addVariant: WeddingImage2,
    title: "Anita Dongre",
  },
  {
    addVariant: WeddingImage3,
    title: "Papa Don’t Preach by Shubhika",
  },
];
export const weddingTale = [
  {
    title: "Papa Don’t Preach by Shubhika",
    link: "Shop Now",
  },
  {
    title: "Papa Don’t Preach by Shubhika",
    link: "Shop Now",
  },
  {
    title: "Papa Don’t Preach by Shubhika",
    link: "Shop Now",
  },
];
export const categoryList = [
  {
    title: "Kurta Set",
    count: "9087",
  },
  {
    title: "Dresses",
    count: "9087",
  },
  {
    title: "Lehenga",
    count: "9087",
  },
  {
    title: "Sarees",
    count: "9087",
  },
  {
    title: "Earings",
    count: "9087",
  },
];
export const colorList = [
  {
    color: "black",
    _id : 0,
  },
  {
    color: "blue",
    _id : 1,
  },
  {
    color: "green",
    _id : 2,
  },
  {
    color: "red",
    _id : 3,
  },
  {
    color: "yellow",
    _id : 4,
  },
  {
    color: "gray",
    _id : 5,
  },
];
export const designerList = [
  {
    title: "Baise Gaba",
    count: "77",
  },
  {
    title: "Urvashi Kaur",
    count: "77",
  },
  {
    title: "Pink Peacock Count",
    count: "77",
  },
  {
    title: "Cosa Nostraa",
    count: "77",
  },
];
export const discountList = [
  {
    title: "0% - 10%",
    count: "64175",
  },
  {
    title: "11% - 20%",
    count: "45175",
  },
  {
    title: "21% - 30%",
    count: "14175",
  },
  {
    title: "31% - 40%",
    count: "4175",
  },
];
export const genderList = [
  {
    title: "Women",
    count: "79810",
  },
  {
    title: "Men",
    count: "66810",
  },
  {
    title: "Girls",
    count: "61180",
  },
  {
    title: "Boys",
    count: "42810",
  },
  {
    title: "Unisex",
    count: "96810",
  },
];
export const shippingList = [
  {
    title: "48 Hours",
    count: "52",
  },
  {
    title: "7 Days",
    count: "52",
  },
  {
    title: "1-2 Weeks",
    count: "52",
  },
  {
    title: "3-4 Weeks",
    count: "52",
  },
];
export const shopList = [
  {
    title: "Womenswear",
    count: "33609",
  },
  {
    title: "Menswear",
    count: "33609",
  },
  {
    title: "WeddingWear",
    count: "33609",
  },
  {
    title: "Ready to ship",
    count: "33609",
  },
  {
    title: "Jewellery",
    count: "33609",
  },
];
export const sizeList = [
  {
    size: "S",
    _id: 0
  },
  {
    size: "M",
    _id: 1
  },
  {
    size: "L",
    _id: 2
  },
  {
    size: "XL",
    _id: 3
  },
  {
    size: "XXL",
    _id: 4
  },
  {
    size: "3XL",
    _id: 5
  },
  {
    size: "4XL",
    _id: 6
  },
  {
    size: "Free",
    _id: 7
  },
];
export const data = [
  {
    addVariant: [{ image: SlideImage1 }],
  },
  {
    addVariant: [{ image: SlideImage2 }],
  },
  {
    addVariant: [{ image: SlideImage3 }],
  },
];
export const productInfo = [
  {
    title: "Basanti - Kapde Aur Koffee",
    subtitle: "Red Georgette Embroidered Lehenga Set",
    rating: "4.3",
    subrating: "10k",
    originalPrice: 22096,
    sellerPrice: 25995,
    offer: 15,
  },
];
export const productSpecification = [
  {
    title: "Basanti - Kapde Aur Koffee",
    productType: "Lehenga",
    productCode: "BAC0522194",
    combo: "Single",
    material: "Cotton",
    length: "Regular",
    salesPackage: "1",
  },
];
export const productAdditionalInfo = [
  {
    fit: "Fitted at bust and waist",
    composition: "Raw silk, Georgette, Net.",
    care: "Dry clean only",
  },
];
export const notification = [
  {
    notificationId: "456346436363",
    status: "unread",
    image: NewIcon,
    title: "20% off on new arrival",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    datetime: "Today,05:14 am",
  },
  {
    notificationId: "456346436364",
    status: "unread",
    image: NewIcon,
    title: "20% off on new arrival",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    datetime: "Today,05:14 am",
  },
  {
    notificationId: "456346436365",
    status: "read",
    image: NewIcon,
    title: "20% off on new arrival",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    datetime: "Today,05:14 am",
  },
  {
    notificationId: "456346436365",
    status: "read",
    image: NewIcon,
    title: "20% off on new arrival",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    datetime: "Today,05:14 am",
  },
];
export const tabs = [
  {
    id: 0,
    title: "Personal Detail",
    content: <PersonalDetail />,
    path: personaldetail,
    icon: <MyAccountIcon />,
  },
  {
    id: 1,
    title: "Order History ",
    content: <OrderHistory2 />,
    path: orderhistory,
    icon: <MyOrderHistoryIcon />,
  },
  {
    id: 2,
    title: "My Address",
    content: <MyAddress2 />,
    path: myaddress,
    icon: <MyAddressIcon />,
  },
  {
    id: 3,
    title: "My Wishlist",
    content: <MyWishlist2 />,
    path: mywishlist,
    icon: <MyWishlistIcon />,
  },
  {
    id: 4,
    title: "My Notification",
    content: <MyNotification2 />,
    path: mynotification,
    icon: <MyNotificationIcon />,
  },
  {
    id: 5,
    title: "Settings",
    content: <MySettings2 />,
    path: mysettings,
    icon: <MySettingsIcon />,
  },
];
export const OrderDetailData = [
  {
    orderId: "#589764996432",
    orderData: "15 June, 2022",
    orderStatus: "Order Confirmed",
    OrderImage: productImage,
    productName: "Basanti - Kapde Aur Koffee",
    orderHistoryCode: "BASCO522194",
    qty: "1",
    price: "22096",
    btnText: "Track Order",
  },
  {
    orderId: "#589764996436",
    orderData: "15 June, 2022",
    orderStatus: "Delivered",
    OrderImage: productImage,
    productName: "Basanti - Kapde Aur Koffee",
    orderHistoryCode: "BASCO522194",
    qty: "1",
    price: "22096",
    btnText: "ReOrder",
  },
  {
    orderId: "#589764996433",
    orderData: "15 June, 2022",
    orderStatus: "Order Confirmed",
    OrderImage: productImage,
    productName: "Basanti - Kapde Aur Koffee",
    orderHistoryCode: "BASCO522194",
    qty: "1",
    price: "22096",
    btnText: "Track Order",
  },
  {
    orderId: "#589764996435",
    orderData: "15 June, 2022",
    orderStatus: "Delivered",
    OrderImage: productImage,
    productName: "Basanti - Kapde Aur Koffee",
    orderHistoryCode: "BASCO522194",
    qty: "1",
    price: "22096",
    btnText: "ReOrder",
  },
  {
    orderId: "#589764996434",
    orderData: "15 June, 2022",
    orderStatus: "Order Confirmed",
    OrderImage: productImage,
    productName: "Basanti - Kapde Aur Koffee",
    orderHistoryCode: "BASCO522194",
    qty: "1",
    price: "22096",
    btnText: "Track Order",
  },
];
export const address = [
  {
    addressId: "456346436363",
    customername: "Mark Jonsan",
    addressdetail:
      "3418 Al Ouqour, AR Ruwais District, 6558 Jeddah 23211, Saudi Arabia",
    mobilenumber: "99999 99999",
    email: "mark.jonsan@gmail.com",
  },
  {
    addressId: "456346436364",
    customername: "Devid Adonson",
    addressdetail:
      "3418 Al Ouqour, AR Ruwais District, 6558 Jeddah 23211, Saudi Arabia",
    mobilenumber: "88888 88888",
    email: "Devid.adonson@gmail.com",
  },
];
