import { ChangeEvent, useRef, useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import Input from '../components/Input';

const CreateEvent = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };
  console.log(selectedImage);

  const eventImgRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    eventImgRef?.current?.click();
  };

  return (
    <section className="w-full max-w-[593px] m-auto pt-10">
      <div
        onClick={handleClick}
        className="w-44 h-44  mx-auto border border-envited-purple-100 rounded-full cursor-pointer flex items-center justify-center overflow-hidden"
      >
        <input
          accept="image/*"
          type="file"
          onChange={imageChange}
          ref={eventImgRef}
          className="hidden"
        />
        {selectedImage ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Thumb"
            className="w-full"
          />
        ) : (
          <FcAddImage className="w-full h-3/5 shadow-envited-grey-400" />
        )}
      </div>
      <Input name="Event Name" />
      <Input name="Host Title" />
      <Input name="Location" />
    </section>
  );
};

export default CreateEvent;
