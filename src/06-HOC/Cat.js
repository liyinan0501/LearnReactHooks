import img from './1.gif'

const Cat = ({ x, y }) => {
  return (
    <div>
      <img src={img} alt="" style={{ left: x, top: y, position: 'absolute' }} />
    </div>
  )
}
export default Cat
