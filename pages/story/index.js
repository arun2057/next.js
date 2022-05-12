import Sidebar from "../../component/sidebar/Sidebar";
import { CREATE__POST__ICON } from "../../function/image";
import Image from "next/image";
import styles from "./CreateStory.module.css";
import { XCircleIcon } from "@heroicons/react/solid";
import { useState, useRef } from "react";
import Resizer from "react-image-file-resizer";
import Compressor from "compressorjs";
import axios from "axios";
const CreateStory = () => {
  const [activeImage, setActiveImage] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadNextPage, setLoadNextPage] = useState(false);
  const [compressedFile, setCompressedFile] = useState(null);
  const inputFileRef = useRef();
  const textarea = useRef();

  const getFiles = (e) => {
    let files = e.target.files; // 3
    let image = e.target.files[0]; // 3
    setImageFiles((prev) => {
      return [...prev, ...files];
    });

    for (let i = 0; i < files.length; i++) {
      new Compressor(files[i], {
        quality: 0.6,

        // The compression process is asynchronous,
        // which means you have to access the `result` in the `success` hook function.
        success(result) {
          setCompressedFile(result);
          const formData = new FormData();

          // The third parameter is required for server
          formData.append("file", result, result.name);

          // Send the compressed image file to server with XMLHttpRequest.
          axios.post("/api/story", formData).then(() => {
            console.log("Upload success");
          });
        },
        error(err) {
          console.log(err.message);
        },
      });
    }

    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setActiveImage(filesArray[0]);
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  // console.log("file--", imageFiles);
  // console.log("selectfile--", selectedFiles);
  // console.log("compressedFile--", compressedFile);

  const resizeFiles = () => {
    console.log("i am here");
    if (selectedFiles) {
      //   setLoading(true);
      for (let i = 0; i < selectedFiles.length; i++) {
        if (!selectedFiles[i].type.startsWith("image")) return;
        Resizer.imageFileResizer(
          selectedFiles[i],
          720,
          720,
          "JPEG",
          90,
          0,
          (uri) => {
            console.log(uri);
          },
          "base64"
        );
      }
    }
  };

  const DisplayImage = ({ url }) => {
    return (
      <img
        src={url}
        className={
          url === activeImage
            ? `${styles.uploaded__story__small__image} ${styles.border}`
            : styles.uploaded__story__small__image
        }
        onClick={(e) => setActiveImage(url)}
      />
    );
  };

  const UploadFile = () => {
    return (
      <>
        <div className={styles.upload__story}>
          <div className={styles.upload__text}>
            <span className={`${styles.upload__text__title} ${styles.circle}`}>
              Aa
            </span>
            <span className={styles.upload__text__title}>Text</span>
          </div>

          <div className={`${styles.upload__flies} ${styles.sm__block}`}>
            <div className={styles.upload__image__icon}>
              <Image src={CREATE__POST__ICON} />
            </div>
            <div className={styles.top__text__section}>
              <span className={`${styles.upload__caption}`}>
                {" "}
                Select Photo / video to{" "}
              </span>
              <span className={`${styles.upload__caption}`}>upload </span>
            </div>
            <div className={styles.bottom__text__section}>
              <span className={`${styles.select__caption}`}>
                Select upto 10 Images
              </span>
              <span className={`${styles.select__caption}`}>or</span>
              <span className={`${styles.select__caption}`}>1 video</span>
            </div>

            <input
              style={{ display: "none" }}
              type='file'
              ref={inputFileRef}
              accept='image/*,video/*'
              onChange={(e) => getFiles(e)}
              multiple
            />
            <button
              id='file'
              className={styles.upload__button}
              onClick={(e) => inputFileRef.current.click()}>
              Select File(s)
            </button>
          </div>
        </div>

        <div className={`${styles.uploaded__story} `}>
          <div className={`${styles.block}`}>
            <div className={styles.uploaded__story__big__image__section}>
              <img
                src={activeImage}
                className={styles.uploaded__story__big__image}
              />
              <XCircleIcon className={styles.XCircleIcon} />
            </div>
            <div className={styles.uploaded__story__images}>
              {selectedFiles.map((image) => {
                return <DisplayImage url={image} key={image} />;
              })}
            </div>
          </div>

          <div className={styles.count__files}>
            <span className={`${styles.select__caption}`}>
              Select upto 10 / {selectedFiles.length} Images
            </span>
            <button
              type='submit'
              className={styles.upload__button}
              onClick={() => setLoadNextPage(true)}>
              Next(10)
            </button>
          </div>
        </div>
      </>
    );
  };

  const PostContent = () => {
    return (
      <div className={styles.post__content__container}>
        <div className={styles.post__block}>
          {selectedFiles.map((image) => {
            return (
              <img src={image} key={image} className={styles.post__image} />
            );
          })}
        </div>
        <div className={styles.caption__section}>
          <input
            type='text'
            placeholder='say something'
            className={styles.textarea}
          />

          <div className={styles.switch__button}>buddies only</div>
          <button className={styles.post__button} onClick={() => resizeFiles()}>
            Post
          </button>
          {loading && (
            <button className={styles.loading__button} disabled>
              loading...
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      {!loadNextPage && <UploadFile />}
      {loadNextPage && <PostContent />}
    </div>
  );
};

export default CreateStory;
