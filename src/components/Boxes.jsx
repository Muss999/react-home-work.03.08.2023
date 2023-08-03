const Boxes = ({ stylesArr }) => {
    return (
        <div
            style={{
                display: "flex",
            }}
        >
            {stylesArr.map((item, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            width: item.width,
                            height: item.height,
                            backgroundColor: item.backgroundColor,
                            margin: item.margin,
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default Boxes;
