const CreateView = ({ handleSubmit }) => {
  return (
    <div className="h-[90vh] grid place-items-center mt-5 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-3/4 max-w-[700px] bg-black p-10 md:p-20 rounded-lg"
      >
        <h1 className="text-center text-2xl ">Create a New Post</h1>

        <div className="flex flex-col gap-2">
          <label className="mb-2 text-xl font-medium"> User Name:</label>
          <input
            name="user"
            type="text"
            className="bg-gray-50 border-gray-300 text-gray-900  rounded-lg focus:outline-yellow-500  text-xl p-2.5 w-full"
            required
            placeholder="type your name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="mb-2 text-xl font-medium">Post Title:</label>
          <input
            name="title"
            type="text"
            className="bg-gray-50 border-gray-300 text-gray-900  rounded-lg focus:outline-yellow-500  text-xl p-2.5 w-full"
            required
            placeholder="type post title"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="mb-2 text-xl font-medium">Description:</label>
          <textarea
            name="text"
            type="text"
            className="bg-gray-50 border-gray-300 text-gray-900  rounded-lg focus:outline-yellow-500  text-xl p-2.5 w-full max-h-[250px] min-h-[150px]"
            required
            placeholder="..."
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 p-2 rounded-lg transition hover:bg-yellow-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateView;
