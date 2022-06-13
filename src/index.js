/*
//* 1. 为什么要有hooks？
  1.1 代码逻辑复用：mixins(弃用) render-props, HOC, hooks(自定义hooks-useXXX)
  1.2 class的缺点：
      class的this指向问题。
      考虑到底使用函数组件还是class组件，需要学习两套组件用法。
      class组件不利于代码的压缩和优化。
      class组件提供了生命周期函数，导致一个功能被拆开到多个钩子函数中。

  hooks解决了什么问题？
  1. 逻辑复用。
  2. 不在使用this。
  3. 不用考虑使用函数组件还是类组件。
  4. 使用函数方便代码压缩和优化（tree shaking）。
  5. 一个功能写到一起。

//* 2. useState()
  作用：给函数组件提供状态以及修改状态的方法。
  语法：
      1. const [count, setCount] = useState(0)
      2. const [money, setMoney] = useState(() => {return xxx})

  ! 注意：hooks 只能在函数组件中或者自定义hooks中使用功能，而且不能包含在 if else for while 语句中。

//* 3. useEffect()
  作用：处理react中的副作用，实现class组件中的钩子函数功能。
  语法：
      1. useEffect(() => {}) 组件第一次渲染以及每一次更新后都会执行。
      2. useEffect(() => {}, [依赖项]) 组件第一次渲染以及每一次依赖项更新后都会执行。
      3. useEffect(() => {}, []) 组件第一次渲染执行。

  清理副作用：
      1. useEffect(() => {return () => { //清理函数}})
          清理函数会在销毁的时候以及每一次回调函数执行之前执行。
      2. useEffect(() => {return () => { //清理函数}}, [])
          清理函数只会在组件销毁的时候执行。

//* 4. useRef()
  作用：用于操作DOM或者组件
  语法：
      第一步：const inputRef = useRef(null)
      第二步：<div ref={inputRef}></div>
      第三步：inputRef.current 可以操作拿到的DOM。

//* 5. useContext()
  作用：可以获取到Context中的数据。
  语法：
      第一步：<Context.Provider value={value}></Context.Provider> 用Context.Provide包裹子组件。
      第二步：在子组件获取 const value = useContext(Context)

//* 6. memo()
  作用：高阶组件，用于缓存一个组件，对比组件的props和state是否发生改变，如果不变，就不会更新。

  问题：
      如果给子组件传递函数或对象这种复杂数据类型，会导致memo失效，因为浅层对比，地址改变了。
  解决方案：
      useCallback 和 useMemo

//* 7. useCallback()
  作用：缓存一个函数，依赖项发生变化，重新缓存，一定要配合memo来用。
  语法：
      const newFn = useCallback(fn, [depts])

//* 8. useMemo()
  作用：缓存任意类型的数据。
  语法：
      const memoData = useMemo(() => 函数, [depts])
  提供计算属性，避免昂贵的计算。

  例如：
  有一段昂贵的计算或者复杂的计算耗时过长，每一次组件更新都需要执行的话，需要考虑放进useMemo()。

//* 9. useReducer 替代 redux
  小项目可以用  useReducer 替代 redux
 */
