type TextType = {
  text: string;
};

const TextHeading = ({ text }: TextType) => {
  return (
    <div className="text-heading capitalize text-black font-medium tracking-wider">
      {text}
    </div>
  );
};
export default TextHeading;
