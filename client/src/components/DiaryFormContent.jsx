import { useState, useEffect } from "react"
import "../styles/diaryFormContent.css"

const DiaryFormContent = () => {

    const [date, setDate] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [imgSrc, setImgSrc] = useState("")

    useEffect(() => {
        const dateArr = new Date().toDateString().split(" ")
        dateArr.splice(0, 1)
        setDate(dateArr.join(" "))
    }, [])

    const handleSubmit = () => {
        if (title === '' || body === '')
            alert("One of the fields is empty. Please enter them.")
        else {
            const diaryEntry = {
                date: date,
                title: title,
                body: body,
                img: imgSrc
            }
            console.log(diaryEntry)
            // fetch("http://localhost:8000/newEntry", {
            //     method: "post",
            //     body: diaryEntry
            // })
            //     .then(res => console.log(res))
            //     .catch(err => console.log(err))
        }
    }
    const handleUpload = (e) => {
        const file = e.target.files[0]
        const fileExtension = file.name.split(".")[1]
        if (fileExtension === "png" || fileExtension === "jpg" || fileExtension === "jpeg") {
            const imgData = new FormData()
            imgData.append("file", file)
            imgData.append("upload_preset", "reqrjod7")
            imgData.append("cloud_name", "jay-1510")
            fetch("https://api.cloudinary.com/v1_1/jay-1510/image/upload", {
                method: "post",
                body: imgData
            })
                .then((res) => res.json())
                .then(data => setImgSrc(data.url))
                .catch(err => alert("Error in uploading image. Please try again"))
        }
        else {
            alert("Unsupported file format. Please upload a valid png or jpg file")
        }
    }

    return (
        <div className="diary-form-container ">
            <div className="my-3">
                <span className="diary-form-heading py-3">
                    Make your diary entry for today ({date})
                </span>
                <div className="diary-form-main">
                    <div className="diary-form-element p-2">
                        <span className="diary-form-subheading my-3">
                            Heading
                        </span>
                        <input className="form-control py-2" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="diary-form-element p-2">
                        <span className="diary-form-subheading my-3">
                            Entry
                        </span>
                        <textarea className="form-control py-2" rows={5} style={{ "resize": "none" }} onChange={(e) => setBody(e.target.value)} />
                    </div>
                    <div className="diary-form-element p-2 row">
                        <div className="col-2">
                            <button className="btn btn-primary">
                                <label htmlFor="upload-photo">
                                    Upload Image
                                </label>
                                <input type="file" name="photo" id="upload-photo" onChange={e => handleUpload(e)} />
                            </button>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-center my-3">
                    <img src={imgSrc} alt="" width="150px" />
                </div>
            </div>
        </div>
    )
}

export default DiaryFormContent