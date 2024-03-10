import PopupController from "../../components/popup/PopupController";

const ListView = ({ posts, selectedUser, setSelectedUser }) => {
  //console.log(selectedUser);
  return (
    <div className="container-sm px-5 py-5 md:px-40 lg:px-52">
      <h1 className="text-xl">
        Posts: <span className="font-bold text-yellow-400">{posts.length}</span>
      </h1>
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-black w-full my-5 p-5 rounded-md shadow shadow-gray-400 cursor-pointer transition hover:shadow-yellow-300"
          >
            <div className="flex justify-between">
              <h1>{post.title}</h1>
              <p
                onClick={() => setSelectedUser(post.user)}
                className="text-yellow-400"
              >
                {post.user}
              </p>
            </div>
            <p className="text-gray-400">{post.text}</p>
          </div>
        ))}
      </div>

      {/* secilen kullanici adina pencere acma*/}
      {selectedUser && (
        <PopupController
          user={selectedUser}
          close={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default ListView;
