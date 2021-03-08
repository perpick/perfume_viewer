import React from "react";

import type { Perfume } from "./constants/perfumes";

import DropzoneArea from './DropzoneArea/DropzoneArea'
import Perfumes from "./Perfumes/Perfumes";
import SearchField from "./SearchField/SearchField";

const App: React.FC = () => {
  const [search, setSearch] = React.useState<string>("")
  const [files, setFiles] = React.useState<File[]>([])
  const [errorData, setErrorData] = React.useState<string>("")
  const [perfumes, setPerfumes] = React.useState<Perfume[]>([])

  React.useEffect(() => {
    if (errorData) {
      alert(errorData)
    }
  }, [errorData])

  React.useEffect(() => {
    if (files.length > 0) {
      readFileOnUpload(files[0])
    }
  }, [files])

  const handleChangeFile = (files: File[]) => {
    setFiles(files)
  }

  const readFileOnUpload = (uploadedFile: File) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      try {
        const json = JSON.parse(fileReader.result ? fileReader.result.toString() : "")
        if (!json) setErrorData("Empty JSON file!")

        return setPerfumes(Array.isArray(json) ? json : [json])
        // return setPerfumes([...perfumes, ...(Array.isArray(json) ? json : [json])])
      } catch (e) {
        setErrorData("**Not valid JSON file!**");
      }
    }
    if (uploadedFile) fileReader.readAsText(uploadedFile);
  }

  return (
    <div className="flex flex-col justify-center bg-gray-100">
      <div className="mx-8 my-2">
        <DropzoneArea
          previewText="미리보기"
          onChange={ handleChangeFile }
          acceptedFiles={ ['.json'] }
          filesLimit={ 1 }
          dropzoneText={ "파일을 업로드하세요" } />
      </div>
      <div className="mx-auto my-2">
        <SearchField
          value={ search }
          onChange={ (e) => {
            setSearch(e.target.value)
          } }
        />
      </div>
      <div className="mx-auto my-2">
        <Perfumes perfumes={ search ? perfumes.filter(perfume => perfume.title.toLowerCase().includes(search.toLowerCase())) : perfumes } />
      </div>
    </div>
  );
}

export default App;
