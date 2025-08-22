export const myProjects = [
  {
    id: 1,
    title: "Food E-commerce ",
    description:
      "Đây là 1 trang thương mại điện tử để order đồ ăn (tựa như GrabFood và ShopeeFood).",
    subDescription: [
      "Xây dựng một ứng dụng ReactJs và Database là dùng MongoDB, tích hợp để dễ thao tác hơn.",
      "Thiết kế giao diện người dùng đáp ứng với Tailwind CSS, nâng cao trải nghiệm người dùng.",
      "Thêm hệ thống thanh toán, định vị và lọc sản phẩm để cải thiện chức năng.",
    ],
    href: "https://food-dev-uogz.vercel.app",
    logo: "",
    image: "/assets/projects/food-dev.png",
    tags: [
      
      {
        id: 4,
        name: "ReactJs TailwindCSS MongoDB",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Hệ thống kinh doanh đồ uống",
    description:
      "Một hệ thống bán đồ uống với các chức năng đặt bàn, hẹn lịch,.....",
    subDescription: [
      "Tích hợp Auth0 để xác thực, hỗ trợ OAuth, JWT và xác thực đa yếu tố.",
      "Triển khai kiểm soát truy cập dựa trên vai trò (RBAC) cho quyền người dùng chi tiết.",
      "Phát triển giao diện người dùng dựa trên React với Tailwind CSS cho trải nghiệm người dùng mượt mà.",
      "Kết nối với cơ sở dữ liệu MongoDB an toàn để lưu trữ dữ liệu người dùng.",
    ],
    href: "https://fe-prime-management.vercel.app/",
    logo: "",
    image: "/assets/projects/fe-prime.png",
    tags: [
      {
        id: 1,
        name: "NodeJs",
       
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Web tuyển nhân sự cho FPT Telecom",
    description:
      "Một trang web tuyển dụng nhân sự cho FPT Telecom được viết thuần bằng html.",
    subDescription: [
      "Sử dụng HTML, CSS và JavaScript để xây dựng giao diện người dùng.",
      "Tích hợp các API để xử lý dữ liệu và tương tác với người dùng.",
      "Thiết kế giao diện đáp ứng cho cả máy tính và thiết bị di động.",
    ],
    href: "https://fpt-ivory.vercel.app/",
    logo: "",
    image: "/assets/projects/FPT.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    
    ],
  },
  {
    id: 5,
    title: "Trang kinh doanh đồ ăn bằng WordPress",
    description:
      "Một trang web thương mại điện tử cho phép người dùng đặt hàng thực phẩm trực tuyến.",
    subDescription: [
      "Phát triển một theme WordPress đáp ứng bằng HTML5, CSS3 và JavaScript.",
      "Tích hợp Tailwind CSS để cải thiện kiểu dáng và giao diện người dùng.",
      "Tối ưu hóa SEO và tốc độ trang bằng cách sử dụng Vite.js cho các bản dựng nhanh.",
      "Triển khai các widget tùy chỉnh và khả năng tương thích plugin để mở rộng chức năng.",
    ],
    href: "https://inkybio.com/",
    logo: "",
    image: "/assets/projects/pizza.png",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Sinh viên",
    job: "FPT Polytechnic",
    date: "2023-2025",
    contents: [
      "Theo học tại FPT Polytechnic, chuyên ngành Công nghệ thông tin.",
      "Tập trung vào thiết kế và phát triển các trang web hiện đại, thân thiện với người dùng.",
      "Có khả năng đảm nhận vai trò kiểm thử phần mềm (tester) để đảm bảo chất lượng sản phẩm.",
      "Luôn chủ động học hỏi, cập nhật các công nghệ mới và nâng cao kỹ năng chuyên môn.",
    ],
  },
  {
    title: "Phát triển website ",
    job: "cho FPT Telecom",
    date: "T3-T8 2025",
    contents: [
      "Thực tập tại FPT Telecom, tham gia phát triển trang web tuyển dụng nhân sự.",
      "Đã tạo một trang web tuyển dụng nhân viên cho FPT Telecom, Kiêm vai trò kiểm thử.",
      "Luôn chủ động học hỏi, cập nhật các công nghệ mới và nâng cao kỹ năng chuyên môn.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
