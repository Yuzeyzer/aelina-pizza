import React from 'react';

const Categories = () => {
  const [activeItem, setActiveItem] = React.useState(null);

  const categoriesItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div class='categories'>
      <ul>
        <li onClick={() => setActiveItem(null)} className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        {categoriesItems.map((item, index) => (
          <li onClick={() => setActiveItem(index)} className={activeItem === index ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
