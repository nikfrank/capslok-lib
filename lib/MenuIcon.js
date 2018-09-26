import React from 'react';
import './MenuIcon.css';

export default ({ size, onClick })=> (
  <button>
    <svg viewBox='0 0 64 64'
         className='MenuIcon'
         onClick={e=> {e.preventDefault(); onClick(e);}}
         style={{ height: size, width: size }}>
      <path d="M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M32,62C15.432,62,1.999,48.568,1.999,32
	       C1.999,15.432,15.432,2,32,2c16.568,0,30,13.432,30,30C62,48.568,48.568,62,32,62z M20,33h24v-2H20V33z M20,25h24v-2H20V25z
	       M20,41h24v-2H20V41z"/>
    </svg>
  </button>
);
