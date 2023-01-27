import ReactFlow, {Background, Controls} from 'reactflow'

import 'reactflow/dist/style.css'

export function App() {
  return (
    <div className='h-screen w-screen'>
      <ReactFlow>
        <Background
          gap={12}
          size={2}
          color={'#ddd'}
        />
        <Controls />
      </ReactFlow>
    </div>
  )
}