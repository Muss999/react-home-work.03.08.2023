import Avatar from "./components/Avatar";
import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Input from "./components/Input";

function App() {
    let stylesArr = [
        {
            width: "300px",
            height: "150px",
            backgroundColor: "red",
            margin: "30px",
        },
        {
            width: "400px",
            height: "150px",
            backgroundColor: "green",
            margin: "30px",
        },
        {
            width: "200px",
            height: "150px",
            backgroundColor: "blue",
            margin: "30px",
        },
    ];
    let cardObj = {
        src: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        alt: "",
    };
    return (
        <>
            <Counter />
            <Input />
            <Boxes stylesArr={stylesArr} />
            <Card cardObj={cardObj}>
                <Avatar />
            </Card>
        </>
    );
}

export default App;
