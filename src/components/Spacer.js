import React from 'react'

const a = [
  '0', // 0
  '0.25rem', // 1
  '0.5rem', // 2
  '0.75rem', // 3
  '1rem', // 4
  '1.5rem', // 5
  '1.5rem', // 6
  '2rem', // 7
  '3rem', // 8
  '4rem', // 9
  '6rem', // 10
  '8rem', // 11
  '12rem', // 12
  '16rem', // 13
  '24rem', // 14
  '32rem', // 15
  '40rem', // 16
  '48rem', // 17
]

const Spacer = (props) => {
  return <div style={{ height: a[props.h] }}></div>
}

export default Spacer
