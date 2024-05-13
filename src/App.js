import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const INITIAL_LIST = [
  { name: "Domates", value: 55.0, id: 1 },
  { name: "Marul", value: 25.5, id: 2 },
  { name: "Ekmek", value: 10.99, id: 3 },
];

function App() {
  const [itemList, setItemList] = useState(INITIAL_LIST);
  const [itemValue, setitemValue] = useState("");
  const [itemAmount, setItemAmount] = useState("");

  const handleDelete = (id) => {
    console.log("delete");
    const newItemList = itemList.filter((item) => item.id !== id);
    setItemList(newItemList);
  };

  const handleItemAdd = (e) => {
    e.preventDefault();
    if (!isNaN(itemAmount) && itemAmount >= 0) {
      const newItem = {
        name: itemValue,
        value: itemAmount,
        id: crypto.randomUUID(),
      };
      setItemList([...itemList, newItem]);
      setitemValue("");
      setItemAmount("");
    } else {
      alert("Tutar 0'dan büyük olmalıdır.");
    }
  };

  return (
    <div className=" max-w-sm mx-auto mt-10">
      <div className="ml-4 mr-4">
        <form className="flex gap-2 mb-5" onSubmit={handleItemAdd}>
          <input
            className="p-3 border rounded-lg w-36"
            placeholder="Ürün girin"
            value={itemValue}
            onChange={(e) => setitemValue(e.target.value)}
            required
          />
          <input
            className="p-3 border rounded-lg w-36"
            placeholder="Tutar girin (TL)"
            value={itemAmount}
            onChange={(e) => setItemAmount(e.target.value)}
            required
            pattern="^\d*\.?\d{0,2}$"
          />
          <button className="p-3 w-40 bg-orange-500 text-white rounded-lg">
            Ekle
          </button>
        </form>
      </div>
      <div className="ml-4 mr-4">
        <p className="text-2xl font-bold my-2">Eklenen Ürünler</p>
        <hr className="mb-3"></hr>
        <ItemValueList itemList={itemList} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

const ItemValueList = ({ itemList, handleDelete }) => {
  // KODUNUZ BURAYA GELECEK
  return (
    <div>
      {itemList.map((item) => (
        <div key={item.id}>
          <div className=" grid grid-cols-3 gap-1 mt-1">
            <p>{item.name}</p>
            <p>$ {item.value}</p>
            <div
              className="flex text-red-500 text-right hover:cursor-pointer"
              onClick={() => handleDelete(item.id)}
            >
              <button className="text-right">
                <MdDeleteForever className=" text-red-600 text-2xl" />
              </button>
              <p>Delete</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
