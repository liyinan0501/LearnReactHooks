const Position = ({ x, y, left, top }) => (
  <div style={{ position: 'fixed' }}>
    <div>
      <h3>Position of current mouse</h3>({x}, {y})
    </div>
    <div>
      <h3>Position of current mouse</h3>({left},{top})
    </div>
  </div>
)
export default Position
