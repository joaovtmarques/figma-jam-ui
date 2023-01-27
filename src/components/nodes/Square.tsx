import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle,Position } from "reactflow";

export function Square({ selected }: NodeProps) {
  return (
    <div className="bg-violet-500 rounded h-full w-full min-w-[150px] min-h-[100px]">
      <NodeResizer 
        minHeight={100}
        minWidth={150}
        isVisible={selected} 
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />

      <Handle 
        id="right" 
        position={Position.Right} 
        type="source"
        className={`${selected ? '-right-4 h-2 w-2 bg-blue-400/80' : 'border-none bg-transparent'}`} 
      />
      <Handle 
        id="left" 
        position={Position.Left} 
        type="source"
        className={`${selected ? '-left-4 h-2 w-2 bg-blue-400/80' : 'border-none bg-transparent'}`}
      />
      <Handle 
        id="top" 
        position={Position.Top} 
        type="source"
        className={`${selected ? '-top-4 h-2 w-2 bg-blue-400/80' : 'border-none bg-transparent'}`} 
      />
      <Handle 
        id="bottom" 
        position={Position.Bottom} 
        type="source"
        className={`${selected ? '-bottom-4 h-2 w-2 bg-blue-400/80' : 'border-none bg-transparent'}`}
      />
    </div>
  )
}