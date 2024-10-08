import { useLocation } from "react-router-dom";
import React from 'react'

export default function ScrollonTop() {
    const pathname=useLocation()
    React.useEffect(()=>{
window.scroll(0,0);
    },[pathname])
  return null;
}