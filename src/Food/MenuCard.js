import React from "react";

const MenuCard = ({ menuData }) => {
    console.log(menuData);
    return (
        <>
            <sectoin className='main-card-container'>
                {menuData.map((curElem) => {
                    const { id, name, category, image, description } = curElem;
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle">{id}</span>
                                        <span className="card-author">{category}</span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-description">
                                            {description}
                                        </span>
                                        <img
                                            src={image}
                                            alt="images"
                                            className="card-media"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })};
            </sectoin>
        </>
    );
};
export default MenuCard;

