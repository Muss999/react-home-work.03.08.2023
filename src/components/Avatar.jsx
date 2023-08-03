const Avatar = ({ cardObj }) => {
    return (
        <>
            <img src={cardObj.src} alt={cardObj.alt} />
        </>
    );
};

export default Avatar;
