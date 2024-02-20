
function ItemList({ data }) {
  return (
    <div className="itemList-container">
      {data.length ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{++index} - {item}</li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
}

export default ItemList;