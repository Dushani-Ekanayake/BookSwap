import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.jpg'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    project_img_1,
    project_img_2,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Skyline Haven",
      price: "$2,50,000",
      location: "California",
      image: project_img_1
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_2
    },
  ];

  export const testimonialsData = [
    {
        name: "Second-Year IT Student",
        title: "Moratuwa University Student",
        image: profile_img_1,
        alt: "Portrait of Second-Year IT Student",
        rating: 5,
        text: "I found all my semester textbooks at almost half the price compared to regular bookstores. The platform is easy to use, and the book condition was exactly as described. Highly recommended for university students"
    },
    {
        name: "Business Management Undergraduate",
        title: "NSBM Student",
        image: profile_img_2,
        alt: "Portrait of Business Management Undergraduate",
        rating: 4,
        text: "I sold my old textbooks and bought new ones for the next semester in the same place. It’s very convenient and helps students save money. A great idea for campus life! Totally worth it.I recommend it to all my friends."
    },
    {
        name: "Computer Science Student",
        title: "SLIIT Student",
        image: profile_img_3,
        alt: "Portrait of Computer Science Student",
        rating: 5,
        text: "As a hostel student, budget matters a lot. This bookstore helped me get quality textbooks at half the price without any hassle. The process was smooth and trustworthy. I’m grateful for this service!"
    },
];