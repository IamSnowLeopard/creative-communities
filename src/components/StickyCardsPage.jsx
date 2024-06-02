import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import StickyCard from "./StickyCard";
import Footer from "./Footer";
import { Box } from "@mui/material";
import "./StickyCard.css";

const StickyCardsPage = () => {
  const cardsData = [
    {
      heading: "01",
      subheading: "Our Vision",
      content:
        "To empower communities to fully participate in and benefit from Africa's industrialization.",
    },
    {
      heading: "02",
      subheading: "Our Mission",
      content:
        "To implement innovative financing models that enable private enterprises to engage in sustainable value creation within their communities.",
    },
    {
      heading: "03",
      subheading: "Our Values",
      content:
        "Accountability & Transparency, Creativity & Innovation, Trust, Inclusion, Operational Flexibility, Nurturing Partnerships & Collaboration",
    },
    {
      heading: "04",
      subheading: "Our Priorities",
      content:
        "We work with privately-owned agri-business enterprises to develop, test, and scale financing models that enhance their operational efficiency through micro-mechanization.",
    },
    {
      heading: "05",
      subheading: "Our Company",
      content:
        "Creative Communities, founded in 2022 and officially registered with the Corporate Affairs Commission in Nigeria, is a dynamic, member-driven organization. Our membership includes seasoned entrepreneurs, business leaders, philanthropists, technical experts, friends, and family.<br><br>United by a shared commitment, we dedicate our personal resources to empower private enterprises in order to help them create more economic growth in their communities. ",
    },
    {
      heading: "06",
      subheading: "Our Operating Structure",
      content:
        "We operate a lean but effective structure consisting of three essential functions: <br><br><strong>Executive Board of Directors:</strong> Define and implement our strategic plan, manage resources, and mitigate risks. <br><br><strong>Non-Executive Board of Directors:</strong> Review and approve our strategic plan, hold the executive board accountable, and provide expertise and guidance for effective governance. <br><br><strong>Non-Executive Members:</strong> Contribute funds and time for financing and mentoring private enterprises.",
    },
    {
      heading: "07",
      subheading: "Our Executive Board",
      content: [
        {
          photo: "Placeholder.jpg",
          name: "Rahmat Muhammad, PhD, PMP, FIMC",
          title: "Director, TBD",
        },
        {
          photo: "Placeholder.jpg",
          name: "Dr. Mustafa Mahmud, MD",
          title: "Director, TBD",
        },
        {
          photo: "Placeholder.jpg",
          name: "Fatima Mohammed, ABC",
          title: "Director, TBD",
        },
        {
          photo: "Placeholder.jpg",
          name: "Mazila Luka, ABC",
          title: "Director, TBD",
        },
        {
          photo: "Placeholder.jpg",
          name: "Open Position",
          title: "Director, Legal Officer",
        },
      ],
    },
    {
      heading: "08",
      subheading: "Contact Us",
      content: "",
      showLearnMore: true,
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const cardRefs = useRef([]);

  const handleLearnMoreClick = () => {
    window.open("https://forms.gle/xiL5cpqwRoyUrMsC7", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const cardPositions = cardRefs.current.map((card) => card.offsetTop);

      const newIndex = cardPositions.findIndex((pos, index) => {
        return (
          scrollPosition >= pos &&
          (index === cardPositions.length - 1 ||
            scrollPosition < cardPositions[index + 1])
        );
      });

      if (newIndex !== currentCard) {
        setCurrentCard(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentCard]);

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "radial-gradient(circle, #8a5c1e, #693201)", // Apply radial gradient
          paddingBottom: "200px",
        }}
      >
        <Box
          sx={{
            flex: "1 1 auto", // Allow growth for content
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "20px",
          }}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`sticky-card ${
                index === currentCard ? "sticky-card-current" : ""
              }`}
            >
              <StickyCard
                heading={card.heading}
                subheading={card.subheading}
                content={card.content}
                showLearnMore={card.showLearnMore}
                onLearnMoreClick={handleLearnMoreClick}
              />
            </div>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default StickyCardsPage;
