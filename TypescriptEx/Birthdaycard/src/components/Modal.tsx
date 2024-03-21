import { memo, useState } from "react"
import { Gifts } from "../App"
import { useParams } from "react-router"
import { v4 as uuidv4} from "uuid"


interface propTypes {
    onClose : () => void
    onSave : (gift : Gifts) => void
}


function Modal({onClose : handleCloseCard, onSave : handleSave}:propTypes){
    const [name, setName] = useState("")
    const [value, setValue] = useState<number>()
    const [image, setImage] = useState("")


    const { id } = useParams<{ id: string }>(
        
    );

    const saveGifts = () => {
        const newId = uuidv4();
        if(name && value && image){
            handleSave({id: newId, name, value, image});
        }
        setName("");
        setValue(0);
        setImage("");
        handleCloseCard();
    }

    return(
        <div className="modal-background">
            <div className="Modal">
                <div className="container-modal d-flex flex-column gap-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <input 
                            className="w-50 input-group-text fs-2" 
                            type="text" 
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            className="w-50 input-group-text fs-2" 
                            type="text" 
                            placeholder="Image" 
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <input 
                            className="w-50 input-group-text fs-2" 
                            type="number" 
                            placeholder="Value"
                            value={value}
                            onChange={(e) => setValue(parseFloat(e.target.value))}
                        />
                    </div>
                    <div className="d-flex flex-row gap-3 mx-auto">
                        <button onClick={saveGifts} className="btn btn-success fs-2">Save</button>
                        <button onClick={handleCloseCard} className="btn btn-danger fs-2">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Modal)