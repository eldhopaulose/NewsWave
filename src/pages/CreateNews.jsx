import { useState } from 'react';
import ImageKit from 'imagekit';

const CreateNews = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imagekit = new ImageKit({
    publicKey: "public_fgK1/+bZMqOgVHO2NsxlNYNFcy4=",
    privateKey: "private_Rdty71W/pLCToAZYODzQq1eEHVY=",
    urlEndpoint: "https://ik.imagekit.io/aafumgo6j"
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const response = await imagekit.upload({
            file: file,
            fileName: file.name,
          });
          setSelectedImage(response.url);
          console.log(response.url);
        } catch (error) {
          console.error('Image upload failed:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(selectedImage);

  return (
    <main className="w-full min-h-screen bg-slate-200 flex items-center justify-center">
      <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg p-16 md:w-1/3 md:h-1/2 sm:w-full sm:h-screen">
        <form className="text-center">
          <div className="p-3">
            <label className='text-xl font-extrabold' htmlFor="heading">Heading</label>
          </div>
          <input
            className="block w-full border-gray-400 border-2 w-96 p-2 rounded-lg"
            type="text"
            id="heading"
          />
          <div className="p-3">
            <label className='text-xl font-extrabold' htmlFor="image">Image</label>
          </div>
          <div className="flex bg-black bg-opacity-60">
            <div className="extraOutline p-4 bg-white max-w-max bg-white m-auto rounded-lg">
              <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg" style={{ width: '450px' }}>
                {selectedImage ? (
                  <img src={selectedImage} alt="Selected" className="w-40 mx-auto mb-4 rounded-lg" />
                ) : (
                  <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                )}
                <div className="input_field flex flex-col max-w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
                  </label>

                  <div className="title text-indigo-500 uppercase">or drop files here</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3">
            <label className='text-xl font-extrabold' htmlFor="description">Description</label>
          </div>
          <textarea
            className="block border-gray-400 border-2 w-full p-2 rounded-lg"
            type="text"
            id="description"
          />
          <div className="p-5">
            <button className="w-60 border-2 h-25 p-3 bg-blue-600 text-white rounded-xl hover-bg-blue-800" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateNews;
