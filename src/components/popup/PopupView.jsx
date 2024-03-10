const PopupView = ({ close, user, userPost }) => {
  return (
    <div className="grid place-items-center w-full h-full fixed bg-black bg-opacity-50 inset-0">
      <div className="w-3/4 max-[600px] bg-gray-800 p-5 rounded-md">
        <div className="flex justify-between items-center">
          <h4>
            Posts of User
            <span className="font-bold text-yellow-400"> {user}</span>
          </h4>
          <button onClick={close} className="p-2">
            Close
          </button>
        </div>
        {userPost.map((p) => (
          <div key={p.id} className="bg-black p-3 rounded-md my-4">
            <h2 className="font-bold mb-1">{p.title}</h2>
            <p className="text-gray-500">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupView;
