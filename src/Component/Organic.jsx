import React from "react";

const App = () => {
    return (
        <div className="container mt-5 text-center">
            {/* Heading */}
            <h1
                className="fw-bold"
                style={{
                    color: "black",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "#6B8E23")}
                onMouseOut={(e) => (e.target.style.color = "black")}
            >
                ORGANIC LIFESTYLE TIPS
            </h1>

            {/* Subheading */}
            <h2 className="my-4" style={{ textAlign: "left" }}>BUY ORGANIC FOOD</h2>

            {/* Tips Section */}
            <ul className="list-group text-start w-60 " style={{ textAlign: "left", border: "none" }}>
                <li className="list-group-item"> Organic Fruits,
                    Organic Fruits,Vegetables,Grains,Dairy And Eggs.Organic Food Is Grown Without Synthetic Pesticides,Fertilizers Or GMOs.
                </li>
            </ul>

            {/* YouTube Link */}
            <p className="mt-4" style={{ textAlign: "left" }}>
                <a
                    href="https://www.youtube.com/watch?v=UEOjvrRPog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                >
                    Watch on YouTube
                </a>
            </p>
            {/* Subheading */}
            <h2 className="my-4" style={{ textAlign: "left" }}>GROW YOUR OWN</h2>

            {/* Tips Section */}
            <ul className="list-group text-start w-60 " style={{ textAlign: "left", border: "none" }}>
                <li className="list-group-item"> Grow Organic Vegetables And Herbs In Your Garden Or Indoor Pots. This Can Save Money And Connect You To Your Food.
                </li>
            </ul>

            {/* YouTube Link */}
            <p className="mt-4" style={{ textAlign: "left" }}>
                <a
                    href="Https://Www.Youtube.Com/watch?V=Bv5iBukJh9c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                >
                    Watch on YouTube
                </a>
            </p>
            {/* Subheading */}
            <h2 className="my-4" style={{ textAlign: "left" }}>SUPPORT LOCAL ORGANIC FARMERS</h2>

            {/* Tips Section */}
            <ul className="list-group text-start w-60 " style={{ textAlign: "left", border: "none" }}>
                <li className="list-group-item"> Support Local Organic Farmers To Promote Sustainable Agriculture And Access Fresh Produce. 
                </li>
            </ul>

            {/* YouTube Link */}
            <p className="mt-4" style={{ textAlign: "left" }}>
                <a
                    href="Https://Www.Youtube.Com/Watch?V=PwGYWjRFE4s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                >
                    Watch on YouTube
                </a>
            </p>
            {/* Subheading */}
            <h2 className="my-4" style={{ textAlign: "left" }}>BUY IN BULK </h2>

            {/* Tips Section */}
            <ul className="list-group text-start w-60 " style={{ textAlign: "left", border: "none" }}>
                <li className="list-group-item">Buying Organic Grains, Legumes, Nuts, And Seeds In Bulk Can Be Cost-Effective And Reduce Packaging Waste.  
                </li>
            </ul>

            {/* YouTube Link */}
            <p className="mt-4" style={{ textAlign: "left" }}>
                <a
                    href="Https://M.Youtube.Com/watch?V=4lhR4amyqKo&T=15s "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                >
                    Watch on YouTube
                </a>
            </p>
            {/* Subheading */}
            <h2 className="my-4" style={{ textAlign: "left" }}>AVOID CHEMICALS </h2>

            {/* Tips Section */}
            <ul className="list-group text-start w-60 " style={{ textAlign: "left", border: "none" }}>
                <li className="list-group-item">Avoid Chemicals In Your Food And Products To Reduce Your Exposure To Harmful Substances.  
                </li>
            </ul>

            {/* YouTube Link */}
            <p className="mt-4" style={{ textAlign: "left" }}>
                <a
                    href="Https://Www.Youtube.Com/watch?V=3rpfr6S8ifc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                >
                    Watch on YouTube
                </a>
            </p>
            {/* Subheading */}
            <h2 className="my-4" style={{ textAlign: "left" }}>CONSIDER ANIMAL WELFARE </h2>

            {/* Tips Section */}
            <ul className="list-group text-start w-60 " style={{ textAlign: "left", border: "none" }}>
                <li className="list-group-item">Organic Meat, Dairy, And Eggs Often Come From Animals Raised In More Humane Conditions.   
                </li>
            </ul>

            {/* YouTube Link */}
            <p className="mt-4" style={{ textAlign: "left" }}>
                <a
                    href="Https://Www.Youtube.Com/Watch?V=OU6sD6SoFbM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                >
                    Watch on YouTube
                </a>
            </p>
        </div>
    );
};

export default App;
