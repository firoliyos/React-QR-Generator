import {useState} from "react"
import {QRCodeCanvas} from "qrcode.react"

export default function QrCodeGenerator() {

    const [text, setText] = useState("")

    return(
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>QR Code Generator</h1>
        <input 
          type="text"
          placeholder="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: '10px', marginBottom: '20px', width: '50%', height: '50px', backgroundColor: "lightGreen" }}
        />

        <div style={{ marginTop: '20px' }} >
          {
            text && <QRCodeCanvas value={text} size={300} bgColor="lightGreen" fgColor="black" />
          }
        </div>
      </div>  
    )
}