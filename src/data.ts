import Cookies from "js-cookie";

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/dashboard",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Clients",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/",
        icon: "order.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Orders",
        url: "/orders",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Tasks",
        url: "/tasks",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Reports",
        url: "/",
        icon: "form.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/settings",
        icon: "setting.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/settings/charts",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/settings/logs",
        icon: "log.svg",
      },
    ],
  },
  {
    id: 6,
    title: "User",
    listItems: [
      {
        id: 1,
        title: "Sign Up",
        url: "/signup",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Sign In",
        url: "/signin",
        icon: "log.svg",
      },
      {
        id: 6,
        title: "Sign Out",
        url: "/",
        onClickFn: () => {
          Cookies.remove("user");
          Cookies.remove("token");
          window.location.reload();
        },
        icon: "close.png",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    // img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Harsh Mehta",
    amount: "3668",
  },
  {
    id: 2,
    // img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Kirtan Patel",
    amount: "3256",
  },
  {
    id: 3,
    // img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Dipen Thakkar",
    amount: "2998",
  },
  {
    id: 4,
    // img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Jay Shah",
    amount: "2512",
  },
  {
    id: 5,
    // img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Jenil sharma",
    amount: "2134",
  },
  {
    id: 6,
    // img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Umang Mcgill",
    email: "augusta@gmail.com",
    amount: "1932",
  },
  {
    id: 7,
    // img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Sample Data",
    email: "angel@gmail.com",
    amount: "1560",
  },
  {
    id: 8,
    // img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Sample Data",
    email: "angel@gmail.com",
    amount: "1560",
  },
  {
    id: 9,
    // img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Sample Data",
    email: "angel@gmail.com",
    amount: "1560",
  },
  {
    id: 10,
    // img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Sample Data",
    email: "angel@gmail.com",
    amount: "1560",
  },
  {
    id: 11,
    // img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Sample Data",
    email: "angel@gmail.com",
    amount: "1560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Clients",
  number: "15",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "10",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "₹564320",
  dataKey: "revenue",
  percentage: 12,
  chartData: [
    { name: "Jan", revenue: 400 },
    { name: "Feb", revenue: 600 },
    { name: "Mar", revenue: 500 },
    { name: "April", revenue: 700 },
    { name: "May", revenue: 400 },
    { name: "June", revenue: 500 },
    { name: "July", revenue: 550 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Profit",
  number: "₹120000",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Jan", ratio: 400 },
    { name: "Feb", ratio: 600 },
    { name: "Mar", ratio: 500 },
    { name: "April", ratio: 700 },
    { name: "May", ratio: 400 },
    { name: "June", ratio: 500 },
    { name: "July", ratio: 650 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Sales",
  color: "#FF8042",
  dataKey: "sales",
  chartData: [
    {
      name: "Sun",
      sales: 4000,
    },
    {
      name: "Mon",
      sales: 3000,
    },
    {
      name: "Tue",
      sales: 2000,
    },
    {
      name: "Wed",
      sales: 2780,
    },
    {
      name: "Thu",
      sales: 1890,
    },
    {
      name: "Fri",
      sales: 2390,
    },
    {
      name: "Sat",
      sales: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    // img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Mehta",
    firstName: "Harsh",
    email: "email@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    // img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Patel",
    firstName: "Kirtan",
    email: "kir@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    // img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Thakkar",
    firstName: "Dipen",
    email: "ud@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    // img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Shah",
    firstName: "Jay",
    email: "jy@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    // img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "sharma",
    firstName: "Jenil",
    email: "jee@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    // img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Mcgill",
    firstName: "Umang",
    email: "umma@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    // img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Data",
    firstName: "Sample",
    email: "reilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    // img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Data",
    firstName: "Sample",
    email: "sdfsdf@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    // img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Data",
    firstName: "Sample",
    email: "uszoas@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    // img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Data",
    firstName: "Sample",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    // img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Data",
    firstName: "Sample",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    // img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Data",
    firstName: "Sample",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    // img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Data",
    firstName: "Sample",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    // img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Data",
    firstName: "Sample",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    // img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Data",
    firstName: "Sample",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "₹25299",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "₹49999",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "₹99949",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "₹79949",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "₹3999",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "₹5549",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "₹11949",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "₹89999",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "₹97049",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "₹59999",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "Impeto Technologies",
  img: "https://impeto.tech/img/impetologo.png",
  info: {
    username: "impeto",
    fullname: "Impeto Tech",
    email: "it@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "sales", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        sales: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        sales: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        sales: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        sales: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        sales: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        sales: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        sales: 3490,
        clicks: 4300,
      },
    ],
  },
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "₹250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
};
