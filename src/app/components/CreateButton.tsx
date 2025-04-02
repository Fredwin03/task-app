const CreateButton = ({ createFn }: { createFn: () => void }) => {
  return (
    <button
      onClick={createFn}
      className="fixed right-12 bottom-3 p-2 flex flex-row items-center gap-3 text-sm font-extrabold tracking-[4px] text-green-400 bg-green-950 rounded-md border-2 border-green-400 hover:text-black hover:bg-green-400 hover:border-black duration-300"
    >
      <p>NEW</p>
      <strong className="text-xl">+</strong>
    </button>
  );
};

export default CreateButton;
