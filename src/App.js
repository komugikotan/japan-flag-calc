import flag from './img/flag.jpg';
import React, { useState } from "react";
import './App.css';



function App() {
  const [text_width, setText_width] = useState("");
  const [text_height, setText_height] = useState("");
  const [text_tyokkei, setText_tyokkei] = useState("");

  return (
    <>
    <header>
      <div className='header'>
        <h1 className='header-title'>国旗比率計算機</h1>
      </div>
    </header>
    <p className='main-description'>次のうちどれかを入力してボタンをクリックすると、ほかも計算して入力してくれるサイトです。適当に作ったので正確性は保証しません。工作などの使用に限定してください。</p>
    <main>
      
      <div className='left-container'>
        <img src={flag} alt='Japan Flag'/>
      </div>
      <div className='right-container'>

          <label for="width">横</label>
          <br/>
          <input type='number' name='width' value={text_width} onChange={(event) => setText_width(event.target.value)}/>
          <label className='form-attached-label' for="width">cm</label>
          <br/>
          <label for="height">縦</label>
          <br/>
          <input type='number' name='height' value={text_height} onChange={(event) => setText_height(event.target.value)}/>
          <label className='form-attached-label' for='height'>cm</label>
          <br/>
          <label for="tyokkei">円の直径</label>
          <br/>
          <input type='number' name='tyokkei' value={text_tyokkei} onChange={(event) => setText_tyokkei(event.target.value)}/>
          <label className='form-attached-label' for="tyokkei">cm</label>
          <br/>
          <br/>
          <button onClick={() => {
            if (text_height !== ''){
              setText_width(text_height * 1.5);
              setText_tyokkei(text_height * 0.6);
            }
            if (text_width !== ''){
              setText_height(text_width * 0.66);
              setText_tyokkei(text_height * 0.4);
            }
            if (text_tyokkei !== ''){
              setText_height(text_tyokkei * 1.66);
              setText_width(text_tyokkei * 2.5);
            }
            
          }}>入力</button>
          <button onClick={() => {
            setText_width('');
            setText_height('');
            setText_tyokkei('');
          }}>やり直す</button>
      </div>
      
    </main>
    </>
  );

}
export default App;
