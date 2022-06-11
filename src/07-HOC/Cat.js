import img from './1.gif'
const Cat = ({ x, y }) => {
  return (
    <div>
      <img src={img} alt="" style={{ top: y, left: x, position: 'fixed' }} />
    </div>
  )
}

export default Cat
