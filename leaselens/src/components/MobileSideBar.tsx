import React, { useState } from "react";
import Search from "./Search";

const MobileSideBar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  const items: string[] = [
    "냉장고",
    "에어컨",
    "세탁기",
    "TV",
    "정수기",
    "공기청정기",
    "청소기",
  ];

  return (
    <div className="mobileSideBar">
      <section className="mobileSide_searchBox">
      </section>
      <section className="mobileSide_categoryBox">
        <ul className="mobileSide_category">
          {items.map((item, index) => (
            <li
              key={index}
              className={`side_item ${
                selectedItem === index ? "selected" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MobileSideBar;
