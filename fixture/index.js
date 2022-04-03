
import React, { useEffct } from 'react';


var a = '123'

function Button() {
  if (Math.random() > 0.5) {
    useEffct(() => {
      console.log('1')
    }, [])
  }
  return 
}