export const productsApi = ({
    selectedItems,
    price,
    setPoducts
}) => {
    let url = "";
    const brandQuery = selectedItems.join(",");
    const [minPrice, maxPrice] = price.split("-");
    if (brandQuery && minPrice || maxPrice) {
        url = `http://localhost:5000/api/products?category=home_appliances&brand=${brandQuery}&minPrice=${Number(minPrice)}&maxPrice=${Number(maxPrice)}`
    } else if (brandQuery) {
        url = `http://localhost:5000/api/products?category=home_appliances&brand=${brandQuery}`;
    } else {
        url = "http://localhost:5000/api/products?category=home_appliances";
    }
    fetch(url)
        .then((res) => res.json())
        .then((data) => setPoducts(data))
        .catch((err) => console.error(err));
};

 
export const handleCheckboxChange = (e, setSelectedItems) => {
    const { checked, value } = e.currentTarget;
    if (checked) {
        setSelectedItems((prev) => {
        return [...prev, value]
        });
    } else {
        setSelectedItems((prev) =>
        prev.filter((item) => {
            return item !== value
        })
        );
    }
};